import re,json,sys
SRC=sys.argv[1];OUT=sys.argv[2]
s=open(SRC).read()
rt=json.load(open('v3/runtime.json'))
alive_rt=set(rt['cls'])|set(rt['ids'])
blocks=list(re.finditer(r'(<style[^>]*>)(.*?)(</style>)',s,flags=re.S))
noncss=s
for m in reversed(blocks): noncss=noncss[:m.start(2)]+noncss[m.end(2):]
noncss=re.sub(r'data:[a-z/+]+;base64,[A-Za-z0-9+/=]+','',noncss)
def alive(tok): return tok in alive_rt or tok in noncss
def parse(c,i=0,depth=0):
    nodes=[];buf='';n=len(c)
    while i<n:
        ch=c[i]
        if c.startswith('/*',i):
            j=c.find('*/',i+2); i=(j+2) if j>=0 else n; continue
        if ch in '"\'':
            j=i+1
            while j<n and c[j]!=ch:
                j+= 2 if c[j]=='\\' else 1
            buf+=c[i:j+1]; i=j+1; continue
        if ch=='{':
            pre=buf.strip();buf=''
            if pre.startswith('@') and re.match(r'@(media|supports|container|layer|document)\b',pre):
                kids,i=parse(c,i+1,depth+1); nodes.append(('at',pre,kids))
            else:
                # raw block (rule or keyframes/font-face): capture with nesting
                d=1;j=i+1
                while j<n and d:
                    if c[j] in '"\'':
                        q=c[j];j+=1
                        while j<n and c[j]!=q: j+=2 if c[j]=='\\' else 1
                    elif c.startswith('/*',j):
                        k=c.find('*/',j+2); j=k+1 if k>=0 else n
                    elif c[j]=='{': d+=1
                    elif c[j]=='}': d-=1
                    j+=1
                body=c[i+1:j-1]
                nodes.append(('raw' if pre.startswith('@') else 'rule',pre,body)); i=j
            continue
        if ch=='}':
            if buf.strip(): nodes.append(('stmt',buf.strip(),None))
            return nodes,i+1
        if ch==';' and buf.strip().startswith('@'):
            nodes.append(('stmt',buf.strip()+';',None)); buf=''; i+=1; continue
        buf+=ch; i+=1
    if buf.strip(): nodes.append(('stmt',buf.strip(),None))
    return nodes,i
def split_sel(sel):
    out=[];d=0;cur=''
    for ch in sel:
        if ch in '([': d+=1
        elif ch in ')]': d-=1
        if ch==',' and d==0: out.append(cur);cur=''
        else: cur+=ch
    out.append(cur); return [x.strip() for x in out if x.strip()]
def required_tokens(sel):
    t=re.sub(r'\[[^\]]*\]','',sel)
    # remove functional pseudo contents
    while True:
        t2=re.sub(r':(?:not|is|where|has|matches|-webkit-any|nth-child|nth-last-child|nth-of-type|lang|dir|host|host-context)\([^()]*\)','',t)
        if t2==t: break
        t=t2
    t=re.sub(r'::?[\w-]+(\([^()]*\))?','',t)
    return re.findall(r'[.#]((?:[A-Za-z_-]|\\.)(?:[\w-]|\\.)*)',t)
stats={'rules':0,'dead':0,'sels':0,'deadsels':0}
def clean(nodes):
    out=[]
    for kind,pre,body in nodes:
        if kind=='rule':
            stats['rules']+=1
            sels=split_sel(pre); keep=[]
            for sl in sels:
                stats['sels']+=1
                toks=[x.replace('\\','') for x in required_tokens(sl)]
                if all(alive(x) for x in toks): keep.append(sl)
                else: stats['deadsels']+=1
            if keep: out.append(','.join(keep)+'{'+body.strip()+'}')
            else: stats['dead']+=1
        elif kind=='at':
            inner=clean(body)
            if inner: out.append(pre+'{'+''.join(inner)+'}')
        elif kind=='raw': out.append(pre+'{'+body+'}')
        else: out.append(pre if pre.endswith(';') or pre.endswith('}') else pre)
    return out
res=s
before=after=0
for m in reversed(blocks):
    css=m.group(2); nodes,_=parse(css)
    new=''.join(clean(nodes))
    before+=len(css); after+=len(new)
    res=res[:m.start(2)]+new+res[m.end(2):]
open(OUT,'w').write(res)
print(stats,"css",before,"->",after,"important",sum(m.group(2).count('!important') for m in blocks),"->",sum(x.count('!important') for x in re.findall(r'<style[^>]*>(.*?)</style>',res,flags=re.S)))

# ---- passe 2 : déclarations écrasées plus loin (même sélecteur, même contexte)
def split_decl(body):
    out=[];d=0;cur='';q=None
    for ch in body:
        if q:
            cur+=ch
            if ch==q: q=None
            continue
        if ch in '"\'': q=ch;cur+=ch;continue
        if ch=='(': d+=1
        elif ch==')': d-=1
        if ch==';' and d==0: out.append(cur);cur=''
        else: cur+=ch
    out.append(cur); return [x.strip() for x in out if x.strip()]
def pass2(html):
    blocks=list(re.finditer(r'(<style[^>]*>)(.*?)(</style>)',html,flags=re.S))
    allrules=[]  # (ctxkey, sel, blockid, decls(list of [prop,val,imp,alive]))
    trees=[]
    for bi,m in enumerate(blocks):
        nodes,_=parse(m.group(2)); trees.append(nodes)
    def walk(nodes,ctx):
        for nd in nodes:
            kind,pre,body=nd
            if kind=='rule':
                decls=[]
                for dcl in split_decl(body):
                    if ':' not in dcl: decls.append([None,dcl,0,True]);continue
                    p,v=dcl.split(':',1);imp='!important' in v.replace(' ','')
                    decls.append([p.strip().lower(),v.strip(),1 if imp else 0,True])
                rec=[ctx,re.sub(r'\s+',' ',pre),decls,nd]
                allrules.append(rec)
            elif kind=='at': walk(body,ctx+(re.sub(r'\s+',' ',pre),))
    for t in trees: walk(t,())
    last={}
    # iterate backwards: remember strongest later importance per key
    removed=0
    for ri in range(len(allrules)-1,-1,-1):
        ctx,sel,decls,nd=allrules[ri]
        for d in decls:
            if d[0] is None or d[0].startswith('--'): continue
            key=(ctx,sel,d[0])
            if key in last:
                lr,limp=last[key]
                if lr!=ri and limp>=d[2]:
                    d[3]=False;removed+=1;continue
            if key not in last or d[2]>last[key][1]:
                last[key]=(ri,max(d[2],last.get(key,(0,0))[1]))
    def ser(nodes,ctx):
        out=[]
        for nd in nodes:
            kind,pre,body=nd
            if kind=='rule':
                rec=[r for r in allrules if r[3] is nd][0]
                ds=[(d[0]+':'+d[1]) if d[0] else d[1] for d in rec[2] if d[3]]
                if ds: out.append(pre+'{'+';'.join(ds)+'}')
            elif kind=='at':
                inner=ser(body,ctx)
                if inner: out.append(pre+'{'+''.join(inner)+'}')
            elif kind=='raw': out.append(pre+'{'+body+'}')
            else: out.append(pre)
        return out
    res=html
    for bi in range(len(blocks)-1,-1,-1):
        m=blocks[bi]; new=''.join(ser(trees[bi],()))
        res=res[:m.start(2)]+new+res[m.end(2):]
    return res,removed
r2,rem=pass2(open(OUT).read())
open(OUT,'w').write(r2)
css2=''.join(re.findall(r'<style[^>]*>(.*?)</style>',r2,flags=re.S))
print("pass2 removed decls",rem,"css now",len(css2),"important",css2.count('!important'))
