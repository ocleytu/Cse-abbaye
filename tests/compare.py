"""Compare deux dossiers de captures (avant / après). Usage : python3 tests/compare.py AVANT APRES"""
import sys,os
from PIL import Image,ImageChops
A,B=sys.argv[1],sys.argv[2];worst=[]
for f in sorted(os.listdir(A)):
    pa,pb=os.path.join(A,f),os.path.join(B,f)
    if not os.path.exists(pb): worst.append((100,f,"manquante"));continue
    a=Image.open(pa).convert("RGB");b=Image.open(pb).convert("RGB")
    if a.size!=b.size: worst.append((100,f,f"taille {a.size}->{b.size}"));continue
    d=ImageChops.difference(a,b).convert("L").point(lambda v:255 if v>24 else 0)
    pct=100*sum(d.histogram()[255:])/(a.size[0]*a.size[1])
    worst.append((round(pct,3),f,""))
worst.sort(reverse=True)
for w in worst[:15]: print(w)
print("pages identiques (<0,05 %) :",sum(1 for w in worst if w[0]<0.05),"/",len(worst))
