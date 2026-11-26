"""Tests automatiques du site du CSE.
Usage : python3 tests/run_tests.py [index.html] [--shots DIR]
Vérifie : erreurs JS, 56 pages, identifiants uniques, formulaire de demande,
stories, recherche, partage. Avec --shots, enregistre une capture de chaque page
(390 px, page entière) pour comparer deux versions (tests/compare.py)."""
import os, sys, json
from playwright.sync_api import sync_playwright
args=[a for i,a in enumerate(sys.argv[1:]) if not a.startswith("--") and not (i>0 and sys.argv[i] in ("--shots","--w"))]
F=os.path.abspath(args[0] if args else "index.html")
SH=None
W=390
if "--w" in sys.argv: W=int(sys.argv[sys.argv.index("--w")+1])
if "--shots" in sys.argv: SH=sys.argv[sys.argv.index("--shots")+1]; os.makedirs(SH,exist_ok=True)
U="file://"+F
ok=[];ko=[]
def check(name,cond,detail=""):
    (ok if cond else ko).append(name+("" if cond else "  → "+str(detail)))
with sync_playwright() as p:
    b=p.chromium.launch()
    ctx=b.new_context(viewport={"width":W,"height":844},has_touch=W<700,is_mobile=W<700)
    pg=ctx.new_page(); errs=[]
    pg.on("pageerror",lambda e:errs.append(str(e)))
    pg.goto(U); pg.wait_for_timeout(1500)
    routes=pg.evaluate("[...document.querySelectorAll('.view')].map(v=>v.id.slice(2))")
    check("56 pages",len(routes)>=56,len(routes))
    bad=[]
    for r in routes:
        pg.evaluate("r=>{location.hash=r}",r); pg.wait_for_timeout(150)
        on=pg.evaluate("(document.querySelector('.view.on')||{}).id")
        h=pg.evaluate("(document.querySelector('.view.on')||{}).innerText||''")
        if on!="v-"+r or len(h.strip())<40: bad.append(r)
        if SH and not r.startswith("m-") and not r.startswith("en-m-"):
            pg.wait_for_timeout(250)
            pg.screenshot(path=os.path.join(SH,r+".png"),full_page=True,animations="disabled")
    check("toutes les pages s'affichent",not bad,bad)
    d=pg.evaluate("()=>{var c={};document.querySelectorAll('[id]').forEach(function(e){c[e.id]=(c[e.id]||0)+1});return Object.keys(c).filter(function(k){return c[k]>1})}")
    check("identifiants uniques",not d,d)
    # stories
    pg.goto(U); pg.wait_for_timeout(1200)
    n=pg.evaluate("document.querySelectorAll('#v-accueil [data-story]').length")
    check("9 stories",n==9,n)
    pg.click("#v-accueil [data-story=gazette]"); pg.wait_for_timeout(600)
    lab=pg.evaluate("(document.querySelector('.stv')||{}).getAttribute&&document.querySelector('.stv').getAttribute('aria-label')")
    pg.click(".stv-next"); pg.wait_for_timeout(400)
    lab2=pg.evaluate("document.querySelector('.stv').getAttribute('aria-label')")
    check("story s'ouvre et avance",lab and lab2 and lab!=lab2,(lab,lab2))
    pg.keyboard.press("Escape"); pg.wait_for_timeout(500)
    check("story se ferme",pg.evaluate("document.querySelector('.stv').hidden"))
    # recherche
    pg.evaluate("location.hash='recherche'"); pg.wait_for_timeout(700)
    inp=pg.query_selector("#v-recherche input")
    if inp:
        inp.fill("pourboires"); pg.keyboard.press("Enter"); pg.wait_for_timeout(1200)
        t=pg.evaluate("(document.querySelector('#v-recherche .gres')||{}).innerText||''")
        check("recherche répond (pourboires)","10" in t and "15" in t,t[:120])
    # partage
    pg.evaluate("location.hash='budget'"); pg.wait_for_timeout(700)
    check("bouton partager",pg.evaluate("!!document.querySelector('#v-budget [data-share]')"))
    # formulaire de demande (parcours complet)
    pg.evaluate("location.hash='demande'"); pg.wait_for_timeout(800)
    def info(): return pg.evaluate("[document.querySelector('.wz-meta span').textContent,document.querySelector('.wz-step.on .wz-q').textContent]")
    try:
        pg.fill('#nom','Test');pg.keyboard.press('Enter');pg.wait_for_timeout(300)
        pg.fill('#prenom','A');pg.keyboard.press('Enter');pg.wait_for_timeout(300)
        pg.fill('#tel','0600000000');pg.keyboard.press('Enter');pg.wait_for_timeout(300)
        for i in range(2): pg.click('.wz-step.on .wz-sk');pg.wait_for_timeout(250)
        pg.click('.wz-step.on input[name="nature"]',force=True);pg.click('.wz-step.on .wz-nx');pg.wait_for_timeout(300)
        pg.click('.wz-step.on input[name="benef"]',force=True);pg.click('.wz-step.on .wz-nx');pg.wait_for_timeout(300)
        check("formulaire avance jusqu'à l'activité","activité" in info()[1],info())
    except Exception as e:
        check("formulaire",False,e)
    check("aucune erreur JavaScript",not errs,errs[:3])
    b.close()
print("\n".join("OK   "+x for x in ok))
print("\n".join("ÉCHEC "+x for x in ko))
print(f"\n{len(ok)} OK, {len(ko)} échec(s)")
sys.exit(1 if ko else 0)
