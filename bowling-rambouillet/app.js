var Xo="160";var ru=1,Yl=2,Bn=3,ii=0,zt=1,Zl=2;var Na=0;var kn=2;var gi=100;var jo=204,qo=205;var su=0,_d=1,xd=2,ti=0,Jl=1,Kl=2,Ql=3,is=4,yd=5,$l=6;var au=300,tr=301,nr=302,Yo=303,Zo=304,Oa=306,ir=1e3,hn=1001,Jo=1002,Et=1003,Lc=1004;var oo=1005;var Rt=1006,Md=1007;var Vr=1008;var yi=1009;var ec=1012,ou=1013,ei=1014,Kt=1015,ht=1016,lu=1017,cu=1018,Mi=1020;var Zt=1023;var Si=1026,rr=1027,hu=1028,uu=1029;var du=1031,pu=1033,lo=33776,co=33777,ho=33778,uo=33779,Ic=35840,Uc=35841,Dc=35842,Nc=35843,fu=36196,Oc=37492,Fc=37496,Bc=37808,zc=37809,Hc=37810,Gc=37811,kc=37812,Vc=37813,Wc=37814,Xc=37815,jc=37816,qc=37817,Yc=37818,Zc=37819,Jc=37820,Kc=37821,po=36492,Qc=36494,$c=36495;var eh=36284,th=36285,nh=36286;var ia=2300,ra=2301,fo=2302,ih=2400,rh=2401,sh=2402;var mu=3e3,bi=3001;var gu=3201;var Jt="",gt="srgb",Qt="srgb-linear",tc="display-p3",Fa="display-p3-linear",sa="linear",nt="srgb",aa="rec709",oa="p3";var Oi=7680;var ah=35044;var oh="300 es",Ko=1035,sr=2e3,la=2001,ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}},Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var na=Math.PI/180,ca=180/Math.PI;function yr(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Pt[255&r]+Pt[r>>8&255]+Pt[r>>16&255]+Pt[r>>24&255]+"-"+Pt[255&e]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[63&t|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[255&n]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function vt(r,e,t){return Math.max(e,Math.min(t,r))}function Sd(r,e){return(r%e+e)%e}function mo(r,e,t){return(1-t)*r+t*e}function lh(r){return(r&r-1)==0&&r!==0}function Qo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Lr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Bt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var ce=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ve=class r{constructor(e,t,n,i,s,a,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],v=i[0],f=i[3],y=i[6],_=i[1],x=i[4],w=i[7],L=i[2],b=i[5],C=i[8];return s[0]=a*v+o*_+c*L,s[3]=a*f+o*x+c*b,s[6]=a*y+o*w+c*C,s[1]=l*v+h*_+d*L,s[4]=l*f+h*x+d*b,s[7]=l*y+h*w+d*C,s[2]=u*v+p*_+g*L,s[5]=u*f+p*x+g*b,s[8]=u*y+p*w+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*s,p=l*s-a*c,g=t*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(i*l-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=u*v,e[4]=(h*t-i*c)*v,e[5]=(i*s-o*t)*v,e[6]=p*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(go.makeScale(e,t)),this}rotate(e){return this.premultiply(go.makeRotation(-e)),this}translate(e,t){return this.premultiply(go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},go=new Ve;function vu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Wr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bd(){let r=Wr("canvas");return r.style.display="block",r}var ch={};function Br(r){r in ch||(ch[r]=!0,console.warn(r))}var hh=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uh=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ws={[Qt]:{transfer:sa,primaries:aa,toReference:r=>r,fromReference:r=>r},[gt]:{transfer:nt,primaries:aa,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Fa]:{transfer:sa,primaries:oa,toReference:r=>r.applyMatrix3(uh),fromReference:r=>r.applyMatrix3(hh)},[tc]:{transfer:nt,primaries:oa,toReference:r=>r.convertSRGBToLinear().applyMatrix3(uh),fromReference:r=>r.applyMatrix3(hh).convertLinearToSRGB()}},Ed=new Set([Qt,Fa]),Je={enabled:!0,_workingColorSpace:Qt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Ed.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let n=ws[e].toReference;return(0,ws[t].fromReference)(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ws[r].primaries},getTransfer:function(r){return r===Jt?sa:ws[r].transfer}};function $i(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function vo(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var Fi,ha=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fi===void 0&&(Fi=Wr("canvas")),Fi.width=e.width,Fi.height=e.height;let n=Fi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*$i(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*$i(t[n]/255)):t[n]=$i(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wd=0,ua=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=yr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(_o(i[a].image)):s.push(_o(i[a]))}else s=_o(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function _o(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ha.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Td=0,Ht=class r extends ri{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,c=1009,l=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=yr(),this.name="",this.source=new ua(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===bi?gt:Jt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ir:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case Jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case ir:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case Jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?bi:mu}set encoding(e){Br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===bi?gt:Jt}};Ht.DEFAULT_IMAGE=null,Ht.DEFAULT_MAPPING=au,Ht.DEFAULT_ANISOTROPY=1;var Qe=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],g=c[9],v=c[2],f=c[6],y=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+f)<.1&&Math.abs(l+p+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,w=(p+1)/2,L=(y+1)/2,b=(h+u)/4,C=(d+v)/4,N=(g+f)/4;return x>w&&x>L?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=b/n,s=C/n):w>L?w<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),n=b/i,s=N/i):L<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(L),n=C/s,i=N/s),this.set(n,i,s,t),this}let _=Math.sqrt((f-g)*(f-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(f-g)/_,this.y=(d-v)/_,this.z=(u-h)/_,this.w=Math.acos((l+p+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$o=class extends ri{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Br("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===bi?gt:Jt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ht(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ua(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},dt=class extends $o{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},da=class extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var el=class extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(o===0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=d);if(o===1)return e[t+0]=u,e[t+1]=p,e[t+2]=g,void(e[t+3]=v);if(d!==v||c!==u||l!==p||h!==g){let f=1-o,y=c*u+l*p+h*g+d*v,_=y>=0?1:-1,x=1-y*y;if(x>Number.EPSILON){let L=Math.sqrt(x),b=Math.atan2(L,y*_);f=Math.sin(f*b)/L,o=Math.sin(o*b)/L}let w=o*_;if(c=c*f+u*w,l=l*f+p*w,h=h*f+g*w,d=d*f+v*w,f===1-o){let L=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=L,l*=L,h*=L,d*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[a],u=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*d+c*p-l*u,e[t+1]=c*g+h*u+l*d-o*p,e[t+2]=l*g+h*p+o*u-c*d,e[t+3]=h*g-o*d-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(s/2),u=c(n/2),p=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-i)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+l)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(s-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-s*d,this.z=i+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xo.copy(this).projectOnVector(e),this.sub(xo)}reflect(e){return this.sub(xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xo=new R,dh=new Sn,bn=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,an):an.fromBufferAttribute(s,a),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ts.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ts.copy(n.boundingBox)),Ts.applyMatrix4(e.matrixWorld),this.union(Ts)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),As.subVectors(this.max,Ir),Bi.subVectors(e.a,Ir),zi.subVectors(e.b,Ir),Hi.subVectors(e.c,Ir),Zn.subVectors(zi,Bi),Jn.subVectors(Hi,zi),ui.subVectors(Bi,Hi);let t=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-ui.z,ui.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,ui.z,0,-ui.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-ui.y,ui.x,0];return!!yo(t,Bi,zi,Hi,As)&&(t=[1,0,0,0,1,0,0,0,1],!!yo(t,Bi,zi,Hi,As)&&(Rs.crossVectors(Zn,Jn),t=[Rs.x,Rs.y,Rs.z],yo(t,Bi,zi,Hi,As)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(an).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},In=[new R,new R,new R,new R,new R,new R,new R,new R],an=new R,Ts=new bn,Bi=new R,zi=new R,Hi=new R,Zn=new R,Jn=new R,ui=new R,Ir=new R,As=new R,Rs=new R,di=new R;function yo(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){di.fromArray(r,s);let o=i.x*Math.abs(di.x)+i.y*Math.abs(di.y)+i.z*Math.abs(di.z),c=e.dot(di),l=t.dot(di),h=n.dot(di);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ad=new bn,Ur=new R,Mo=new R,En=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ad.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);let t=Ur.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(Ur,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(Mo)),this.expandByPoint(Ur.copy(e.center).sub(Mo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Un=new R,So=new R,Cs=new R,Kn=new R,bo=new R,Ps=new R,Eo=new R,ar=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){So.copy(e).add(t).multiplyScalar(.5),Cs.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(So);let s=.5*e.distanceTo(t),a=-this.direction.dot(Cs),o=Kn.dot(this.direction),c=-Kn.dot(Cs),l=Kn.lengthSq(),h=Math.abs(1-a*a),d,u,p,g;if(h>0)if(d=a*c-o,u=a*o-c,g=s*h,d>=0)if(u>=-g)if(u<=g){let v=1/h;d*=v,u*=v,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(So).addScaledVector(Cs,u),p}intersectSphere(e,t){Un.subVectors(e.center,this.origin);let n=Un.dot(this.direction),i=Un.dot(Un)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>i?null:((o>n||n!=n)&&(n=o),(c<i||i!=i)&&(i=c),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,i,s){bo.subVectors(t,e),Ps.subVectors(n,e),Eo.crossVectors(bo,Ps);let a,o=this.direction.dot(Eo);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Kn.subVectors(this.origin,e);let c=a*this.direction.dot(Ps.crossVectors(Kn,Ps));if(c<0)return null;let l=a*this.direction.dot(bo.cross(Kn));if(l<0||c+l>o)return null;let h=-a*Kn.dot(Eo);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},He=class r{constructor(e,t,n,i,s,a,o,c,l,h,d,u,p,g,v,f){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,d,u,p,g,v,f)}set(e,t,n,i,s,a,o,c,l,h,d,u,p,g,v,f){let y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=s,y[5]=a,y[9]=o,y[13]=c,y[2]=l,y[6]=h,y[10]=d,y[14]=u,y[3]=p,y[7]=g,y[11]=v,y[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Gi.setFromMatrixColumn(e,0).length(),s=1/Gi.setFromMatrixColumn(e,1).length(),a=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*h,p=a*d,g=o*h,v=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=u-v*l,t[9]=-o*c,t[2]=v-u*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,p=c*d,g=l*h,v=l*d;t[0]=u+v*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=v+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,p=c*d,g=l*h,v=l*d;t[0]=u-v*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,p=a*d,g=o*h,v=o*d;t[0]=c*h,t[4]=g*l-p,t[8]=u*l+v,t[1]=c*d,t[5]=v*l+u,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=v-u*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*d+g,t[10]=u-v*d}else if(e.order==="XZY"){let u=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+v,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rd,e,Cd)}lookAt(e,t,n){let i=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Qn.crossVectors(n,kt),Qn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Qn.crossVectors(n,kt)),Qn.normalize(),Ls.crossVectors(kt,Qn),i[0]=Qn.x,i[4]=Ls.x,i[8]=kt.x,i[1]=Qn.y,i[5]=Ls.y,i[9]=kt.y,i[2]=Qn.z,i[6]=Ls.z,i[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],v=n[6],f=n[10],y=n[14],_=n[3],x=n[7],w=n[11],L=n[15],b=i[0],C=i[4],N=i[8],O=i[12],H=i[1],J=i[5],I=i[9],Y=i[13],j=i[2],fe=i[6],Me=i[10],le=i[14],te=i[3],ae=i[7],k=i[11],ne=i[15];return s[0]=a*b+o*H+c*j+l*te,s[4]=a*C+o*J+c*fe+l*ae,s[8]=a*N+o*I+c*Me+l*k,s[12]=a*O+o*Y+c*le+l*ne,s[1]=h*b+d*H+u*j+p*te,s[5]=h*C+d*J+u*fe+p*ae,s[9]=h*N+d*I+u*Me+p*k,s[13]=h*O+d*Y+u*le+p*ne,s[2]=g*b+v*H+f*j+y*te,s[6]=g*C+v*J+f*fe+y*ae,s[10]=g*N+v*I+f*Me+y*k,s[14]=g*O+v*Y+f*le+y*ne,s[3]=_*b+x*H+w*j+L*te,s[7]=_*C+x*J+w*fe+L*ae,s[11]=_*N+x*I+w*Me+L*k,s[15]=_*O+x*Y+w*le+L*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],p=e[14];return e[3]*(+s*c*d-i*l*d-s*o*u+n*l*u+i*o*p-n*c*p)+e[7]*(+t*c*p-t*l*u+s*a*u-i*a*p+i*l*h-s*c*h)+e[11]*(+t*l*d-t*o*p-s*a*d+n*a*p+s*o*h-n*l*h)+e[15]*(-i*o*h-t*c*d+t*o*u+i*a*d-n*a*u+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],v=e[13],f=e[14],y=e[15],_=d*f*l-v*u*l+v*c*p-o*f*p-d*c*y+o*u*y,x=g*u*l-h*f*l-g*c*p+a*f*p+h*c*y-a*u*y,w=h*v*l-g*d*l+g*o*p-a*v*p-h*o*y+a*d*y,L=g*d*c-h*v*c-g*o*u+a*v*u+h*o*f-a*d*f,b=t*_+n*x+i*w+s*L;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/b;return e[0]=_*C,e[1]=(v*u*s-d*f*s-v*i*p+n*f*p+d*i*y-n*u*y)*C,e[2]=(o*f*s-v*c*s+v*i*l-n*f*l-o*i*y+n*c*y)*C,e[3]=(d*c*s-o*u*s-d*i*l+n*u*l+o*i*p-n*c*p)*C,e[4]=x*C,e[5]=(h*f*s-g*u*s+g*i*p-t*f*p-h*i*y+t*u*y)*C,e[6]=(g*c*s-a*f*s-g*i*l+t*f*l+a*i*y-t*c*y)*C,e[7]=(a*u*s-h*c*s+h*i*l-t*u*l-a*i*p+t*c*p)*C,e[8]=w*C,e[9]=(g*d*s-h*v*s-g*n*p+t*v*p+h*n*y-t*d*y)*C,e[10]=(a*v*s-g*o*s+g*n*l-t*v*l-a*n*y+t*o*y)*C,e[11]=(h*o*s-a*d*s-h*n*l+t*d*l+a*n*p-t*o*p)*C,e[12]=L*C,e[13]=(h*v*i-g*d*i+g*n*u-t*v*u-h*n*f+t*d*f)*C,e[14]=(g*o*i-a*v*i-g*n*c+t*v*c+a*n*f-t*o*f)*C,e[15]=(a*d*i-h*o*i+h*n*c-t*d*c-a*n*u+t*o*u)*C,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,u=s*l,p=s*h,g=s*d,v=a*h,f=a*d,y=o*d,_=c*l,x=c*h,w=c*d,L=n.x,b=n.y,C=n.z;return i[0]=(1-(v+y))*L,i[1]=(p+w)*L,i[2]=(g-x)*L,i[3]=0,i[4]=(p-w)*b,i[5]=(1-(u+y))*b,i[6]=(f+_)*b,i[7]=0,i[8]=(g+x)*C,i[9]=(f-_)*C,i[10]=(1-(u+v))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Gi.set(i[0],i[1],i[2]).length(),a=Gi.set(i[4],i[5],i[6]).length(),o=Gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],on.copy(this);let c=1/s,l=1/a,h=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=l,on.elements[5]*=l,on.elements[6]*=l,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,t.setFromRotationMatrix(on),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let c=this.elements,l=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i),p,g;if(o===sr)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else{if(o!==la)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),g=-a*s/(a-s)}return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let c=this.elements,l=1/(t-e),h=1/(n-i),d=1/(a-s),u=(t+e)*l,p=(n+i)*h,g,v;if(o===sr)g=(a+s)*d,v=-2*d;else{if(o!==la)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);g=s*d,v=-1*d}return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Gi=new R,on=new He,Rd=new R(0,0,0),Cd=new R(1,1,1),Qn=new R,Ls=new R,kt=new R,ph=new He,fh=new Sn,pa=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ph.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ph,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fh.setFromEuler(this),this.setFromQuaternion(fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pa.DEFAULT_ORDER="XYZ";var fa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Pd=0,mh=new R,ki=new Sn,Dn=new He,Is=new R,Dr=new R,Ld=new R,Id=new Sn,gh=new R(1,0,0),vh=new R(0,1,0),_h=new R(0,0,1),Ud={type:"added"},Dd={type:"removed"},wt=class r extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new R,t=new pa,n=new Sn,i=new R(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new Ve}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(gh,e)}rotateY(e){return this.rotateOnAxis(vh,e)}rotateZ(e){return this.rotateOnAxis(_h,e)}translateOnAxis(e,t){return mh.copy(e).applyQuaternion(this.quaternion),this.position.add(mh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gh,e)}translateY(e){return this.translateOnAxis(vh,e)}translateZ(e){return this.translateOnAxis(_h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Is.copy(e):Is.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Dr,Is,this.up):Dn.lookAt(Is,Dr,this.up),this.quaternion.setFromRotationMatrix(Dn),i&&(Dn.extractRotation(i.matrixWorld),ki.setFromRotationMatrix(Dn),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ud)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dd)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,Ld),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,Id,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};wt.DEFAULT_UP=new R(0,1,0),wt.DEFAULT_MATRIX_AUTO_UPDATE=!0,wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=new R,Nn=new R,wo=new R,On=new R,Vi=new R,Wi=new R,xh=new R,To=new R,Ao=new R,Ro=new R,Us=!1,xi=class r{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ln.subVectors(e,t),i.cross(ln);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ln.subVectors(i,t),Nn.subVectors(n,t),wo.subVectors(e,t);let a=ln.dot(ln),o=ln.dot(Nn),c=ln.dot(wo),l=Nn.dot(Nn),h=Nn.dot(wo),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,p=(l*c-o*h)*u,g=(a*h-o*c)*u;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,On)!==null&&On.x>=0&&On.y>=0&&On.x+On.y<=1}static getUV(e,t,n,i,s,a,o,c){return Us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Us=!0),this.getInterpolation(e,t,n,i,s,a,o,c)}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,On)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,On.x),c.addScaledVector(a,On.y),c.addScaledVector(o,On.z),c)}static isFrontFacing(e,t,n,i){return ln.subVectors(n,t),Nn.subVectors(e,t),ln.cross(Nn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),.5*ln.cross(Nn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Us=!0),r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Vi.subVectors(i,n),Wi.subVectors(s,n),To.subVectors(e,n);let c=Vi.dot(To),l=Wi.dot(To);if(c<=0&&l<=0)return t.copy(n);Ao.subVectors(e,i);let h=Vi.dot(Ao),d=Wi.dot(Ao);if(h>=0&&d<=h)return t.copy(i);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Vi,a);Ro.subVectors(e,s);let p=Vi.dot(Ro),g=Wi.dot(Ro);if(g>=0&&p<=g)return t.copy(s);let v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Wi,o);let f=h*g-p*d;if(f<=0&&d-h>=0&&p-g>=0)return xh.subVectors(s,i),o=(d-h)/(d-h+(p-g)),t.copy(i).addScaledVector(xh,o);let y=1/(f+v+u);return a=v*y,o=u*y,t.copy(n).addScaledVector(Vi,a).addScaledVector(Wi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function Co(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=Sd(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Co(a,s,e+1/3),this.g=Co(a,s,e),this.b=Co(a,s,e-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(e,t=gt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){let n=_u[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return Je.fromWorkingColorSpace(Lt.copy(this),e),65536*Math.round(vt(255*Lt.r,0,255))+256*Math.round(vt(255*Lt.g,0,255))+Math.round(vt(255*Lt.b,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Lt.copy(this),t);let n=Lt.r,i=Lt.g,s=Lt.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=gt){Je.fromWorkingColorSpace(Lt.copy(this),e);let t=Lt.r,n=Lt.g,i=Lt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(Ds);let n=mo($n.h,Ds.h,t),i=mo($n.s,Ds.s,t),s=mo($n.l,Ds.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Lt=new Ie;Ie.NAMES=_u;var Nd=0,si=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=yr(),this.name="",this.type="Material",this.blending=1,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jo,this.blendDst=qo,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jo&&(n.blendSrc=this.blendSrc),this.blendDst!==qo&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},$t=class extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},zn=Od();function Od(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[256|c]=32768,i[c]=24,i[256|c]=24):l<-14?(n[c]=1024>>-l-14,n[256|c]=1024>>-l-14|32768,i[c]=-l-1,i[256|c]=-l-1):l<=15?(n[c]=l+15<<10,n[256|c]=l+15<<10|32768,i[c]=13,i[256|c]=13):l<128?(n[c]=31744,n[256|c]=64512,i[c]=24,i[256|c]=24):(n[c]=31744,n[256|c]=64512,i[c]=13,i[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function Fd(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=vt(r,-65504,65504),zn.floatView[0]=r;let e=zn.uint32View[0],t=e>>23&511;return zn.baseTable[t]+((8388607&e)>>zn.shiftTable[t])}function Bd(r){let e=r>>10;return zn.uint32View[0]=zn.mantissaTable[zn.offsetTable[e]+(1023&r)]+zn.exponentTable[e],zn.floatView[0]}var nc={toHalfFloat:Fd,fromHalfFloat:Bd},mt=new R,Ns=new ce,Gt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ah,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Kt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ns.fromBufferAttribute(this,t),Ns.applyMatrix3(e),this.setXY(t,Ns.x,Ns.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Lr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ah&&(e.usage=this.usage),e}};var ma=class extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ga=class extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Oe=class extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var zd=0,Yt=new He,Po=new wt,Xi=new R,Vt=new bn,Nr=new bn,bt=new R,rt=class r extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=yr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vu(e)?ga:ma)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ve().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return Po.lookAt(e),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Oe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new En);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new R,1/0);if(e){let n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Nr.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Vt.min,Nr.min),Vt.expandByPoint(bt),bt.addVectors(Vt.max,Nr.max),Vt.expandByPoint(bt)):(Vt.expandByPoint(Nr.min),Vt.expandByPoint(Nr.max))}Vt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(bt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)bt.fromBufferAttribute(o,l),c&&(Xi.fromBufferAttribute(e,l),bt.add(Xi)),i=Math.max(i,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let H=0;H<o;H++)l[H]=new R,h[H]=new R;let d=new R,u=new R,p=new R,g=new ce,v=new ce,f=new ce,y=new R,_=new R;function x(H,J,I){d.fromArray(i,3*H),u.fromArray(i,3*J),p.fromArray(i,3*I),g.fromArray(a,2*H),v.fromArray(a,2*J),f.fromArray(a,2*I),u.sub(d),p.sub(d),v.sub(g),f.sub(g);let Y=1/(v.x*f.y-f.x*v.y);isFinite(Y)&&(y.copy(u).multiplyScalar(f.y).addScaledVector(p,-v.y).multiplyScalar(Y),_.copy(p).multiplyScalar(v.x).addScaledVector(u,-f.x).multiplyScalar(Y),l[H].add(y),l[J].add(y),l[I].add(y),h[H].add(_),h[J].add(_),h[I].add(_))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let H=0,J=w.length;H<J;++H){let I=w[H],Y=I.start;for(let j=Y,fe=Y+I.count;j<fe;j+=3)x(n[j+0],n[j+1],n[j+2])}let L=new R,b=new R,C=new R,N=new R;function O(H){C.fromArray(s,3*H),N.copy(C);let J=l[H];L.copy(J),L.sub(C.multiplyScalar(C.dot(J))).normalize(),b.crossVectors(N,J);let I=b.dot(h[H])<0?-1:1;c[4*H]=L.x,c[4*H+1]=L.y,c[4*H+2]=L.z,c[4*H+3]=I}for(let H=0,J=w.length;H<J;++H){let I=w[H],Y=I.start;for(let j=Y,fe=Y+I.count;j<fe;j+=3)O(n[j+0]),O(n[j+1]),O(n[j+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let i=new R,s=new R,a=new R,o=new R,c=new R,l=new R,h=new R,d=new R;if(e)for(let u=0,p=e.count;u<p;u+=3){let g=e.getX(u+0),v=e.getX(u+1),f=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,f),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,f),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),p=0,g=0;for(let v=0,f=c.length;v<f;v++){p=o.isInterleavedBufferAttribute?c[v]*o.data.stride+o.offset:c[v]*h;for(let y=0;y<h;y++)u[g++]=l[p++]}return new Gt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=e(i[o],n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){let u=e(l[h],n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],d=s[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},yh=new He,pi=new ar,Os=new En,Mh=new R,ji=new R,qi=new R,Yi=new R,Lo=new R,Fs=new R,Bs=new ce,zs=new ce,Hs=new ce,Sh=new R,bh=new R,Eh=new R,Gs=new R,ks=new R,Fe=class extends wt{constructor(e=new rt,t=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Fs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],d=s[c];h!==0&&(Lo.fromBufferAttribute(d,e),a?Fs.addScaledVector(Lo,h):Fs.addScaledVector(Lo.sub(t),h))}t.add(Fs)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(s),pi.copy(e.ray).recast(e.near),Os.containsPoint(pi.origin)===!1&&(pi.intersectSphere(Os,Mh)===null||pi.origin.distanceToSquared(Mh)>(e.far-e.near)**2))return;yh.copy(s).invert(),pi.copy(e.ray).applyMatrix4(yh),n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,pi)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let f=u[g],y=a[f.materialIndex];for(let _=Math.max(f.start,p.start),x=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));_<x;_+=3)i=Vs(this,y,e,n,l,h,d,o.getX(_),o.getX(_+1),o.getX(_+2)),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=f.materialIndex,t.push(i))}else for(let g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);g<v;g+=3)i=Vs(this,a,e,n,l,h,d,o.getX(g),o.getX(g+1),o.getX(g+2)),i&&(i.faceIndex=Math.floor(g/3),t.push(i));else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let f=u[g],y=a[f.materialIndex];for(let _=Math.max(f.start,p.start),x=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));_<x;_+=3)i=Vs(this,y,e,n,l,h,d,_,_+1,_+2),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=f.materialIndex,t.push(i))}else for(let g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);g<v;g+=3)i=Vs(this,a,e,n,l,h,d,g,g+1,g+2),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}};function Vs(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,ji),r.getVertexPosition(c,qi),r.getVertexPosition(l,Yi);let h=function(d,u,p,g,v,f,y,_){let x;if(x=u.side===zt?g.intersectTriangle(y,f,v,!0,_):g.intersectTriangle(v,f,y,u.side===ii,_),x===null)return null;ks.copy(_),ks.applyMatrix4(d.matrixWorld);let w=p.ray.origin.distanceTo(ks);return w<p.near||w>p.far?null:{distance:w,point:ks.clone(),object:d}}(r,e,t,n,ji,qi,Yi,Gs);if(h){i&&(Bs.fromBufferAttribute(i,o),zs.fromBufferAttribute(i,c),Hs.fromBufferAttribute(i,l),h.uv=xi.getInterpolation(Gs,ji,qi,Yi,Bs,zs,Hs,new ce)),s&&(Bs.fromBufferAttribute(s,o),zs.fromBufferAttribute(s,c),Hs.fromBufferAttribute(s,l),h.uv1=xi.getInterpolation(Gs,ji,qi,Yi,Bs,zs,Hs,new ce),h.uv2=h.uv1),a&&(Sh.fromBufferAttribute(a,o),bh.fromBufferAttribute(a,c),Eh.fromBufferAttribute(a,l),h.normal=xi.getInterpolation(Gs,ji,qi,Yi,Sh,bh,Eh,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new R,materialIndex:0};xi.getNormal(ji,qi,Yi,d.normal),h.face=d}return h}var Dt=class r extends rt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,p=0;function g(v,f,y,_,x,w,L,b,C,N,O){let H=w/C,J=L/N,I=w/2,Y=L/2,j=b/2,fe=C+1,Me=N+1,le=0,te=0,ae=new R;for(let k=0;k<Me;k++){let ne=k*J-Y;for(let _e=0;_e<fe;_e++){let T=_e*H-I;ae[v]=T*_,ae[f]=ne*x,ae[y]=j,l.push(ae.x,ae.y,ae.z),ae[v]=0,ae[f]=0,ae[y]=b>0?1:-1,h.push(ae.x,ae.y,ae.z),d.push(_e/C),d.push(1-k/N),le+=1}}for(let k=0;k<N;k++)for(let ne=0;ne<C;ne++){let _e=u+ne+fe*k,T=u+ne+fe*(k+1),E=u+(ne+1)+fe*(k+1),V=u+(ne+1)+fe*k;c.push(_e,T,V),c.push(T,E,V),te+=6}o.addGroup(p,te,O),p+=te,u+=le}g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function or(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ut(r){let e={};for(let t=0;t<r.length;t++){let n=or(r[t]);for(let i in n)e[i]=n[i]}return e}function xu(r){return r.getRenderTarget()===null?r.outputColorSpace:Je.workingColorSpace}var tn={clone:or,merge:Ut},ot=class extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Xr=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=sr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_t=class extends Xr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*ca*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*na*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*ca*Math.atan(Math.tan(.5*na*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*na*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Zi=-90,tl=class extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new _t(Zi,1,e,t);i.layers=this.layers,this.add(i);let s=new _t(Zi,1,e,t);s.layers=this.layers,this.add(s);let a=new _t(Zi,1,e,t);a.layers=this.layers,this.add(a);let o=new _t(Zi,1,e,t);o.layers=this.layers,this.add(o);let c=new _t(Zi,1,e,t);c.layers=this.layers,this.add(c);let l=new _t(Zi,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===sr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==la)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},va=class extends Ht{constructor(e,t,n,i,s,a,o,c,l,h){super(e=e!==void 0?e:[],t=t!==void 0?t:tr,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},nl=class extends dt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Br("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===bi?gt:Jt),this.texture=new va(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Dt(5,5,5),s=new ot({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:0});s.uniforms.tEquirect.value=t;let a=new Fe(i,s),o=t.minFilter;return t.minFilter===Vr&&(t.minFilter=Rt),new tl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},Io=new R,Hd=new R,Gd=new Ve,cn=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Io.subVectors(n,t).cross(Hd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Io),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Gd.getNormalMatrix(e),i=this.coplanarPoint(Io).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fi=new En,Ws=new R,lr=class{constructor(e=new cn,t=new cn,n=new cn,i=new cn,s=new cn,a=new cn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],p=i[8],g=i[9],v=i[10],f=i[11],y=i[12],_=i[13],x=i[14],w=i[15];if(n[0].setComponents(c-s,u-l,f-p,w-y).normalize(),n[1].setComponents(c+s,u+l,f+p,w+y).normalize(),n[2].setComponents(c+a,u+h,f+g,w+_).normalize(),n[3].setComponents(c-a,u-h,f-g,w-_).normalize(),n[4].setComponents(c-o,u-d,f-v,w-x).normalize(),t===sr)n[5].setComponents(c+o,u+d,f+v,w+x).normalize();else{if(t!==la)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,d,v,x).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ws.x=i.normal.x>0?e.max.x:e.min.x,Ws.y=i.normal.y>0?e.max.y:e.min.y,Ws.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function yu(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function kd(r,e){let t=e.isWebGL2,n=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),n.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);let s=n.get(i);s&&(r.deleteBuffer(s.buffer),n.delete(i))},update:function(i,s){if(i.isGLBufferAttribute){let o=n.get(i);return void((!o||o.version<i.version)&&n.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}i.isInterleavedBufferAttribute&&(i=i.data);let a=n.get(i);if(a===void 0)n.set(i,function(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=r.createBuffer(),p;if(r.bindBuffer(c,u),r.bufferData(c,l,h),o.onUploadCallback(),l instanceof Float32Array)p=r.FLOAT;else if(l instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=r.HALF_FLOAT}else p=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=r.SHORT;else if(l instanceof Uint32Array)p=r.UNSIGNED_INT;else if(l instanceof Int32Array)p=r.INT;else if(l instanceof Int8Array)p=r.BYTE;else if(l instanceof Uint8Array)p=r.UNSIGNED_BYTE;else{if(!(l instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);p=r.UNSIGNED_BYTE}return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}(i,s));else if(a.version<i.version){if(a.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,c,l){let h=c.array,d=c._updateRange,u=c.updateRanges;if(r.bindBuffer(l,o),d.count===-1&&u.length===0&&r.bufferSubData(l,0,h),u.length!==0){for(let p=0,g=u.length;p<g;p++){let v=u[p];t?r.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count):r.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h.subarray(v.start,v.start+v.count))}c.clearUpdateRanges()}d.count!==-1&&(t?r.bufferSubData(l,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):r.bufferSubData(l,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),c.onUploadCallback()})(a.buffer,i,s),a.version=i.version}}}}var dn=class r extends rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=e/o,u=t/c,p=[],g=[],v=[],f=[];for(let y=0;y<h;y++){let _=y*u-a;for(let x=0;x<l;x++){let w=x*d-s;g.push(w,-_,0),v.push(0,0,1),f.push(x/o),f.push(1-y/c)}}for(let y=0;y<c;y++)for(let _=0;_<o;_++){let x=_+l*y,w=_+l*(y+1),L=_+1+l*(y+1),b=_+1+l*y;p.push(x,w,b),p.push(w,L,b)}this.setIndex(p),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(v,3)),this.setAttribute("uv",new Oe(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},ke={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},ye={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Mn={basic:{uniforms:Ut([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Ut([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ie(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Ut([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Ut([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Ut([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ie(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Ut([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Ut([ye.points,ye.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Ut([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Ut([ye.common,ye.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Ut([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Ut([ye.sprite,ye.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Ut([ye.common,ye.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Ut([ye.lights,ye.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Mn.physical={uniforms:Ut([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var Xs={r:0,b:0,g:0};function Vd(r,e,t,n,i,s,a){let o=new Ie(0),c,l,h=s===!0?0:1,d=null,u=0,p=null;function g(v,f){v.getRGB(Xs,xu(r)),n.buffers.color.setClear(Xs.r,Xs.g,Xs.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(v,f=1){o.set(v),h=f,g(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(v){h=v,g(o,h)},render:function(v,f){let y=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?t:e).get(_)),_===null?g(o,h):_&&_.isColor&&(g(_,1),y=!0);let x=r.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Oa)?(l===void 0&&(l=new Fe(new Dt(1,1,1),new ot({name:"BackgroundCubeMaterial",uniforms:or(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,L,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Je.getTransfer(_.colorSpace)!==nt,d===_&&u===_.version&&p===r.toneMapping||(l.material.needsUpdate=!0,d=_,u=_.version,p=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Fe(new dn(2,2),new ot({name:"BackgroundMaterial",uniforms:or(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Je.getTransfer(_.colorSpace)!==nt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),d===_&&u===_.version&&p===r.toneMapping||(c.material.needsUpdate=!0,d=_,u=_.version,p=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}}}function Wd(r,e,t,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=p(null),l=c,h=!1;function d(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function u(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function p(L){let b=[],C=[],N=[];for(let O=0;O<i;O++)b[O]=0,C[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:C,attributeDivisors:N,object:L,attributes:{},index:null}}function g(){let L=l.newAttributes;for(let b=0,C=L.length;b<C;b++)L[b]=0}function v(L){f(L,0)}function f(L,b){let C=l.newAttributes,N=l.enabledAttributes,O=l.attributeDivisors;C[L]=1,N[L]===0&&(r.enableVertexAttribArray(L),N[L]=1),O[L]!==b&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,b),O[L]=b)}function y(){let L=l.newAttributes,b=l.enabledAttributes;for(let C=0,N=b.length;C<N;C++)b[C]!==L[C]&&(r.disableVertexAttribArray(C),b[C]=0)}function _(L,b,C,N,O,H,J){J===!0?r.vertexAttribIPointer(L,b,C,O,H):r.vertexAttribPointer(L,b,C,N,O,H)}function x(){w(),h=!0,l!==c&&(l=c,d(l.object))}function w(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:function(L,b,C,N,O){let H=!1;if(a){let J=function(I,Y,j){let fe=j.wireframe===!0,Me=o[I.id];Me===void 0&&(Me={},o[I.id]=Me);let le=Me[Y.id];le===void 0&&(le={},Me[Y.id]=le);let te=le[fe];return te===void 0&&(te=p(n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),le[fe]=te),te}(N,C,b);l!==J&&(l=J,d(l.object)),H=function(I,Y,j,fe){let Me=l.attributes,le=Y.attributes,te=0,ae=j.getAttributes();for(let k in ae)if(ae[k].location>=0){let ne=Me[k],_e=le[k];if(_e===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(_e=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(_e=I.instanceColor)),ne===void 0||ne.attribute!==_e||_e&&ne.data!==_e.data)return!0;te++}return l.attributesNum!==te||l.index!==fe}(L,N,C,O),H&&function(I,Y,j,fe){let Me={},le=Y.attributes,te=0,ae=j.getAttributes();for(let k in ae)if(ae[k].location>=0){let ne=le[k];ne===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor));let _e={};_e.attribute=ne,ne&&ne.data&&(_e.data=ne.data),Me[k]=_e,te++}l.attributes=Me,l.attributesNum=te,l.index=fe}(L,N,C,O)}else{let J=b.wireframe===!0;l.geometry===N.id&&l.program===C.id&&l.wireframe===J||(l.geometry=N.id,l.program=C.id,l.wireframe=J,H=!0)}O!==null&&t.update(O,r.ELEMENT_ARRAY_BUFFER),(H||h)&&(h=!1,function(J,I,Y,j){if(n.isWebGL2===!1&&(J.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();let fe=j.attributes,Me=Y.getAttributes(),le=I.defaultAttributeValues;for(let te in Me){let ae=Me[te];if(ae.location>=0){let k=fe[te];if(k===void 0&&(te==="instanceMatrix"&&J.instanceMatrix&&(k=J.instanceMatrix),te==="instanceColor"&&J.instanceColor&&(k=J.instanceColor)),k!==void 0){let ne=k.normalized,_e=k.itemSize,T=t.get(k);if(T===void 0)continue;let E=T.buffer,V=T.type,X=T.bytesPerElement,U=n.isWebGL2===!0&&(V===r.INT||V===r.UNSIGNED_INT||k.gpuType===ou);if(k.isInterleavedBufferAttribute){let Q=k.data,F=Q.stride,z=k.offset;if(Q.isInstancedInterleavedBuffer){for(let q=0;q<ae.locationSize;q++)f(ae.location+q,Q.meshPerAttribute);J.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let q=0;q<ae.locationSize;q++)v(ae.location+q);r.bindBuffer(r.ARRAY_BUFFER,E);for(let q=0;q<ae.locationSize;q++)_(ae.location+q,_e/ae.locationSize,V,ne,F*X,(z+_e/ae.locationSize*q)*X,U)}else{if(k.isInstancedBufferAttribute){for(let Q=0;Q<ae.locationSize;Q++)f(ae.location+Q,k.meshPerAttribute);J.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Q=0;Q<ae.locationSize;Q++)v(ae.location+Q);r.bindBuffer(r.ARRAY_BUFFER,E);for(let Q=0;Q<ae.locationSize;Q++)_(ae.location+Q,_e/ae.locationSize,V,ne,_e*X,_e/ae.locationSize*Q*X,U)}}else if(le!==void 0){let ne=le[te];if(ne!==void 0)switch(ne.length){case 2:r.vertexAttrib2fv(ae.location,ne);break;case 3:r.vertexAttrib3fv(ae.location,ne);break;case 4:r.vertexAttrib4fv(ae.location,ne);break;default:r.vertexAttrib1fv(ae.location,ne)}}}}y()}(L,b,C,N),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))},reset:x,resetDefaultState:w,dispose:function(){x();for(let L in o){let b=o[L];for(let C in b){let N=b[C];for(let O in N)u(N[O].object),delete N[O];delete b[C]}delete o[L]}},releaseStatesOfGeometry:function(L){if(o[L.id]===void 0)return;let b=o[L.id];for(let C in b){let N=b[C];for(let O in N)u(N[O].object),delete N[O];delete b[C]}delete o[L.id]},releaseStatesOfProgram:function(L){for(let b in o){let C=o[b];if(C[L.id]===void 0)continue;let N=C[L.id];for(let O in N)u(N[O].object),delete N[O];delete C[L.id]}},initAttributes:g,enableAttribute:v,disableUnusedAttributes:y}}function Xd(r,e,t,n){let i=n.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,c){if(c===0)return;let l,h;if(i)l=r,h="drawArraysInstanced";else if(l=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",l===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");l[h](s,a,o,c),t.update(o,s,c)},this.renderMultiDraw=function(a,o,c){if(c===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<c;h++)this.render(a[h],o[h]);else{l.multiDrawArraysWEBGL(s,a,0,o,0,c);let h=0;for(let d=0;d<c;d++)h+=o[d];t.update(h,s,1)}}}function jd(r,e,t){let n;function i(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=i(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=s||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,x=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:i,precision:a,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:_&&x,maxSamples:s?r.getParameter(r.MAX_SAMPLES):0}}function qd(r){let e=this,t=null,n=0,i=!1,s=!1,a=new cn,o=new Ve,c={value:null,needsUpdate:!1};function l(h,d,u,p){let g=h!==null?h.length:0,v=null;if(g!==0){if(v=c.value,p!==!0||v===null){let f=u+4*g,y=d.matrixWorldInverse;o.getNormalMatrix(y),(v===null||v.length<f)&&(v=new Float32Array(f));for(let _=0,x=u;_!==g;++_,x+=4)a.copy(h[_]).applyMatrix4(y,o),a.normal.toArray(v,x),v[x+3]=a.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,v}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let u=h.length!==0||d||n!==0||i;return i=d,n=h.length,u},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=l(h,d,0)},this.setState=function(h,d,u){let p=h.clippingPlanes,g=h.clipIntersection,v=h.clipShadows,f=r.get(h);if(!i||p===null||p.length===0||s&&!v)s?l(null):function(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}();else{let y=s?0:n,_=4*y,x=f.clippingState||null;c.value=x,x=l(p,d,_,u);for(let w=0;w!==_;++w)x[w]=t[w];f.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}}}function Yd(r){let e=new WeakMap;function t(i,s){return s===Yo?i.mapping=tr:s===Zo&&(i.mapping=nr),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===Yo||s===Zo){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new nl(a.height/2);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var cr=class extends Xr{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wh=[.125,.215,.35,.446,.526,.582],Or=20,Uo=new cr,Th=new Ie,Do=null,No=0,Oo=0,mi=(1+Math.sqrt(5))/2,Ji=1/mi,Ah=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,mi,Ji),new R(0,mi,-Ji),new R(Ji,0,mi),new R(-Ji,0,mi),new R(mi,Ji,0),new R(-mi,Ji,0)],hr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Do=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Do,No,Oo),e.scissorTest=!1,js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===tr||e.mapping===nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Do=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:ht,format:Zt,colorSpace:Qt,depthBuffer:!1},i=Rh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rh(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],c=[],l=[],h=a,d=a-4+1+wh.length;for(let u=0;u<d;u++){let p=Math.pow(2,h);c.push(p);let g=1/p;u>a-4?g=wh[u-a+4-1]:u===0&&(g=0),l.push(g);let v=1/(p-2),f=-v,y=1+v,_=[f,f,y,f,y,y,f,f,y,y,f,y],x=6,w=6,L=3,b=2,C=1,N=new Float32Array(L*w*x),O=new Float32Array(b*w*x),H=new Float32Array(C*w*x);for(let I=0;I<x;I++){let Y=I%3*2/3-1,j=I>2?0:-1,fe=[Y,j,0,Y+2/3,j,0,Y+2/3,j+1,0,Y,j,0,Y+2/3,j+1,0,Y,j+1,0];N.set(fe,L*w*I),O.set(_,b*w*I);let Me=[I,I,I,I,I,I];H.set(Me,C*w*I)}let J=new rt;J.setAttribute("position",new Gt(N,L)),J.setAttribute("uv",new Gt(O,b)),J.setAttribute("faceIndex",new Gt(H,C)),o.push(J),h>4&&h--}return{lodPlanes:o,sizeLods:c,sigmas:l}}(s)),this._blurMaterial=function(a,o,c){let l=new Float32Array(Or),h=new R(0,1,0);return new ot({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}(s,e,t)}return i}_compileMaterial(e){let t=new Fe(this._lodPlanes[0],e);this._renderer.compile(t,Uo)}_sceneToCubeUV(e,t,n,i){let s=new _t(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,h=c.toneMapping;c.getClearColor(Th),c.toneMapping=ti,c.autoClear=!1;let d=new $t({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),u=new Fe(new Dt,d),p=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,p=!0):(d.color.copy(Th),p=!0);for(let v=0;v<6;v++){let f=v%3;f===0?(s.up.set(0,a[v],0),s.lookAt(o[v],0,0)):f===1?(s.up.set(0,0,a[v]),s.lookAt(0,o[v],0)):(s.up.set(0,a[v],0),s.lookAt(0,0,o[v]));let y=this._cubeSize;js(i,f*y,v>2?y:0,y,y),c.setRenderTarget(i),p&&c.render(u,s),c.render(e,s)}u.geometry.dispose(),u.material.dispose(),c.toneMapping=h,c.autoClear=l,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===tr||e.mapping===nr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ch());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Fe(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;js(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Uo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Ah[(i-1)%Ah.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Fe(this._lodPlanes[i],l),d=l.uniforms,u=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*u):2*Math.PI/39,g=s/p,v=isFinite(s)?1+Math.floor(3*g):Or;v>Or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to 20`);let f=[],y=0;for(let w=0;w<Or;++w){let L=w/g,b=Math.exp(-L*L/2);f.push(b),w===0?y+=b:w<v&&(y+=2*b)}for(let w=0;w<f.length;w++)f[w]=f[w]/y;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=p,d.mipInt.value=_-n;let x=this._sizeLods[i];js(t,3*x*(i>_-4?i-_+4:0),4*(this._cubeSize-x),3*x,2*x),c.setRenderTarget(t),c.render(h,Uo)}};function Rh(r,e,t){let n=new dt(r,e,t);return n.texture.mapping=Oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function js(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Ch(){return new ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ph(){return new ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ic(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zd(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===Yo||s===Zo,o=s===tr||s===nr;if(a||o){if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let c=e.get(i);return t===null&&(t=new hr(r)),c=a?t.fromEquirectangular(i,c):t.fromCubemap(i,c),e.set(i,c),c.texture}if(e.has(i))return e.get(i).texture;{let c=i.image;if(a&&c&&c.height>0||o&&c&&function(l){let h=0,d=6;for(let u=0;u<d;u++)l[u]!==void 0&&h++;return h===d}(c)){t===null&&(t=new hr(r));let l=a?t.fromEquirectangular(i):t.fromCubemap(i);return e.set(i,l),i.addEventListener("dispose",n),l.texture}return null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Jd(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Kd(r,e,t,n){let i={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let d in l.attributes)e.remove(l.attributes[d]);for(let d in l.morphAttributes){let u=l.morphAttributes[d];for(let p=0,g=u.length;p<g;p++)e.remove(u[p])}l.removeEventListener("dispose",a),delete i[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,d=c.attributes.position,u=0;if(h!==null){let v=h.array;u=h.version;for(let f=0,y=v.length;f<y;f+=3){let _=v[f+0],x=v[f+1],w=v[f+2];l.push(_,x,x,w,w,_)}}else{if(d===void 0)return;{let v=d.array;u=d.version;for(let f=0,y=v.length/3-1;f<y;f+=3){let _=f+0,x=f+1,w=f+2;l.push(_,x,x,w,w,_)}}}let p=new(vu(l)?ga:ma)(l,1);p.version=u;let g=s.get(c);g&&e.remove(g),s.set(c,p)}return{get:function(c,l){return i[l.id]===!0||(l.addEventListener("dispose",a),i[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let d in l)e.update(l[d],r.ARRAY_BUFFER);let h=c.morphAttributes;for(let d in h){let u=h[d];for(let p=0,g=u.length;p<g;p++)e.update(u[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function Qd(r,e,t,n){let i=n.isWebGL2,s,a,o;this.setMode=function(c){s=c},this.setIndex=function(c){a=c.type,o=c.bytesPerElement},this.render=function(c,l){r.drawElements(s,l,a,c*o),t.update(l,s,1)},this.renderInstances=function(c,l,h){if(h===0)return;let d,u;if(i)d=r,u="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");d[u](s,l,a,c*o,h),t.update(l,s,h)},this.renderMultiDraw=function(c,l,h){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<h;u++)this.render(c[u]/o,l[u]);else{d.multiDrawElementsWEBGL(s,l,0,a,c,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p];t.update(u,s,1)}}}function $d(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function ep(r,e){return r[0]-e[0]}function tp(r,e){return Math.abs(e[1])-Math.abs(r[1])}function np(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,a=new Qe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];return{update:function(c,l,h){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=u!==void 0?u.length:0,g=s.get(l);if(g===void 0||g.count!==p){let Y=function(){J.dispose(),s.delete(l),l.removeEventListener("dispose",Y)};g!==void 0&&g.texture.dispose();let y=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,w=l.morphAttributes.position||[],L=l.morphAttributes.normal||[],b=l.morphAttributes.color||[],C=0;y===!0&&(C=1),_===!0&&(C=2),x===!0&&(C=3);let N=l.attributes.position.count*C,O=1;N>e.maxTextureSize&&(O=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);let H=new Float32Array(N*O*4*p),J=new da(H,N,O,p);J.type=Kt,J.needsUpdate=!0;let I=4*C;for(let j=0;j<p;j++){let fe=w[j],Me=L[j],le=b[j],te=N*O*4*j;for(let ae=0;ae<fe.count;ae++){let k=ae*I;y===!0&&(a.fromBufferAttribute(fe,ae),H[te+k+0]=a.x,H[te+k+1]=a.y,H[te+k+2]=a.z,H[te+k+3]=0),_===!0&&(a.fromBufferAttribute(Me,ae),H[te+k+4]=a.x,H[te+k+5]=a.y,H[te+k+6]=a.z,H[te+k+7]=0),x===!0&&(a.fromBufferAttribute(le,ae),H[te+k+8]=a.x,H[te+k+9]=a.y,H[te+k+10]=a.z,H[te+k+11]=le.itemSize===4?a.w:1)}}g={count:p,texture:J,size:new ce(N,O)},s.set(l,g),l.addEventListener("dispose",Y)}let v=0;for(let y=0;y<d.length;y++)v+=d[y];let f=l.morphTargetsRelative?1:1-v;h.getUniforms().setValue(r,"morphTargetBaseInfluence",f),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{let u=d===void 0?0:d.length,p=n[l.id];if(p===void 0||p.length!==u){p=[];for(let _=0;_<u;_++)p[_]=[_,0];n[l.id]=p}for(let _=0;_<u;_++){let x=p[_];x[0]=_,x[1]=d[_]}p.sort(tp);for(let _=0;_<8;_++)_<u&&p[_][1]?(o[_][0]=p[_][0],o[_][1]=p[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(ep);let g=l.morphAttributes.position,v=l.morphAttributes.normal,f=0;for(let _=0;_<8;_++){let x=o[_],w=x[0],L=x[1];w!==Number.MAX_SAFE_INTEGER&&L?(g&&l.getAttribute("morphTarget"+_)!==g[w]&&l.setAttribute("morphTarget"+_,g[w]),v&&l.getAttribute("morphNormal"+_)!==v[w]&&l.setAttribute("morphNormal"+_,v[w]),i[_]=L,f+=L):(g&&l.hasAttribute("morphTarget"+_)===!0&&l.deleteAttribute("morphTarget"+_),v&&l.hasAttribute("morphNormal"+_)===!0&&l.deleteAttribute("morphNormal"+_),i[_]=0)}let y=l.morphTargetsRelative?1:1-f;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}}}function ip(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,c=a.geometry,l=e.get(a,c);if(i.get(l)!==o&&(e.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return l},dispose:function(){i=new WeakMap}}}var _a=class extends Ht{constructor(e,t,n,i,s,a,o,c,l,h){if((h=h!==void 0?h:Si)!==Si&&h!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Si&&(n=ei),n===void 0&&h===rr&&(n=Mi),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Et,this.minFilter=c!==void 0?c:Et,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Mu=new Ht,Su=new _a(1,1);Su.compareFunction=515;var bu=new da,Eu=new el,wu=new va,Lh=[],Ih=[],Uh=new Float32Array(16),Dh=new Float32Array(9),Nh=new Float32Array(4);function Mr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Lh[i];if(s===void 0&&(s=new Float32Array(i),Lh[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function xt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function yt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ba(r,e){let t=Ih[e];t===void 0&&(t=new Int32Array(e),Ih[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function rp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function sp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2fv(this.addr,e),yt(t,e)}}function ap(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;r.uniform3fv(this.addr,e),yt(t,e)}}function op(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4fv(this.addr,e),yt(t,e)}}function lp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Nh.set(n),r.uniformMatrix2fv(this.addr,!1,Nh),yt(t,n)}}function cp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Dh.set(n),r.uniformMatrix3fv(this.addr,!1,Dh),yt(t,n)}}function hp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Uh.set(n),r.uniformMatrix4fv(this.addr,!1,Uh),yt(t,n)}}function up(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function dp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2iv(this.addr,e),yt(t,e)}}function pp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3iv(this.addr,e),yt(t,e)}}function fp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4iv(this.addr,e),yt(t,e)}}function mp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function gp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2uiv(this.addr,e),yt(t,e)}}function vp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3uiv(this.addr,e),yt(t,e)}}function _p(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4uiv(this.addr,e),yt(t,e)}}function xp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s=this.type===r.SAMPLER_2D_SHADOW?Su:Mu;t.setTexture2D(e||s,i)}function yp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Eu,i)}function Mp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||wu,i)}function Sp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||bu,i)}function bp(r,e){r.uniform1fv(this.addr,e)}function Ep(r,e){let t=Mr(e,this.size,2);r.uniform2fv(this.addr,t)}function wp(r,e){let t=Mr(e,this.size,3);r.uniform3fv(this.addr,t)}function Tp(r,e){let t=Mr(e,this.size,4);r.uniform4fv(this.addr,t)}function Ap(r,e){let t=Mr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Rp(r,e){let t=Mr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Cp(r,e){let t=Mr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Pp(r,e){r.uniform1iv(this.addr,e)}function Lp(r,e){r.uniform2iv(this.addr,e)}function Ip(r,e){r.uniform3iv(this.addr,e)}function Up(r,e){r.uniform4iv(this.addr,e)}function Dp(r,e){r.uniform1uiv(this.addr,e)}function Np(r,e){r.uniform2uiv(this.addr,e)}function Op(r,e){r.uniform3uiv(this.addr,e)}function Fp(r,e){r.uniform4uiv(this.addr,e)}function Bp(r,e,t){let n=this.cache,i=e.length,s=Ba(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Mu,s[a])}function zp(r,e,t){let n=this.cache,i=e.length,s=Ba(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Eu,s[a])}function Hp(r,e,t){let n=this.cache,i=e.length,s=Ba(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||wu,s[a])}function Gp(r,e,t){let n=this.cache,i=e.length,s=Ba(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||bu,s[a])}var il=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=function(i){switch(i){case 5126:return rp;case 35664:return sp;case 35665:return ap;case 35666:return op;case 35674:return lp;case 35675:return cp;case 35676:return hp;case 5124:case 35670:return up;case 35667:case 35671:return dp;case 35668:case 35672:return pp;case 35669:case 35673:return fp;case 5125:return mp;case 36294:return gp;case 36295:return vp;case 36296:return _p;case 35678:case 36198:case 36298:case 36306:case 35682:return xp;case 35679:case 36299:case 36307:return yp;case 35680:case 36300:case 36308:case 36293:return Mp;case 36289:case 36303:case 36311:case 36292:return Sp}}(t.type)}},rl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(i){switch(i){case 5126:return bp;case 35664:return Ep;case 35665:return wp;case 35666:return Tp;case 35674:return Ap;case 35675:return Rp;case 35676:return Cp;case 5124:case 35670:return Pp;case 35667:case 35671:return Lp;case 35668:case 35672:return Ip;case 35669:case 35673:return Up;case 5125:return Dp;case 36294:return Np;case 36295:return Op;case 36296:return Fp;case 35678:case 36198:case 36298:case 36306:case 35682:return Bp;case 35679:case 36299:case 36307:return zp;case 35680:case 36300:case 36308:case 36293:return Hp;case 36289:case 36303:case 36311:case 36292:return Gp}}(t.type)}},sl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Fo=/(\w+)(\])?(\[|\.)?/g;function Oh(r,e){r.seq.push(e),r.map[e.id]=e}function kp(r,e,t){let n=r.name,i=n.length;for(Fo.lastIndex=0;;){let s=Fo.exec(n),a=Fo.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===i){Oh(t,l===void 0?new il(o,r,e):new rl(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new sl(o),Oh(t,h)),t=h}}}var er=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);kp(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Fh(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Vp=37297,Wp=0;function Bh(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+function(o,c){let l=o.split(`
`),h=[],d=Math.max(c-6,0),u=Math.min(c+6,l.length);for(let p=d;p<u;p++){let g=p+1;h.push(`${g===c?">":" "} ${g}: ${l[p]}`)}return h.join(`
`)}(r.getShaderSource(e),a)}return i}function Xp(r,e){let t=function(n){let i=Je.getPrimaries(Je.workingColorSpace),s=Je.getPrimaries(n),a;switch(i===s?a="":i===oa&&s===aa?a="LinearDisplayP3ToLinearSRGB":i===aa&&s===oa&&(a="LinearSRGBToLinearDisplayP3"),n){case Qt:case Fa:return[a,"LinearTransferOETF"];case gt:case tc:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[a,"LinearTransferOETF"]}}(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function jp(r,e){let t;switch(e){case Jl:t="Linear";break;case Kl:t="Reinhard";break;case Ql:t="OptimizedCineon";break;case is:t="ACESFilmic";break;case $l:t="AgX";break;case yd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ki(r){return r!==""}function zh(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var qp=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(r){return r.replace(qp,Zp)}var Yp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Zp(r,e){let t=ke[e];if(t===void 0){let n=Yp.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return al(t)}var Jp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(r){return r.replace(Jp,Kp)}function Kp(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function kh(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qp(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=function(I){let Y="SHADOWMAP_TYPE_BASIC";return I.shadowMapType===ru?Y="SHADOWMAP_TYPE_PCF":I.shadowMapType===Yl?Y="SHADOWMAP_TYPE_PCF_SOFT":I.shadowMapType===Bn&&(Y="SHADOWMAP_TYPE_VSM"),Y}(t),l=function(I){let Y="ENVMAP_TYPE_CUBE";if(I.envMap)switch(I.envMapMode){case tr:case nr:Y="ENVMAP_TYPE_CUBE";break;case Oa:Y="ENVMAP_TYPE_CUBE_UV"}return Y}(t),h=function(I){let Y="ENVMAP_MODE_REFLECTION";return I.envMap&&I.envMapMode===nr&&(Y="ENVMAP_MODE_REFRACTION"),Y}(t),d=function(I){let Y="ENVMAP_BLENDING_NONE";if(I.envMap)switch(I.combine){case su:Y="ENVMAP_BLENDING_MULTIPLY";break;case _d:Y="ENVMAP_BLENDING_MIX";break;case xd:Y="ENVMAP_BLENDING_ADD"}return Y}(t),u=function(I){let Y=I.envMapCubeUVHeight;if(Y===null)return null;let j=Math.log2(Y)-2,fe=1/Y;return{texelWidth:1/(3*Math.max(Math.pow(2,j),112)),texelHeight:fe,maxMip:j}}(t),p=t.isWebGL2?"":function(I){return[I.extensionDerivatives||I.envMapCubeUVHeight||I.bumpMap||I.normalMapTangentSpace||I.clearcoatNormalMap||I.flatShading||I.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(I.extensionFragDepth||I.logarithmicDepthBuffer)&&I.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",I.extensionDrawBuffers&&I.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(I.extensionShaderTextureLOD||I.envMap||I.transmission)&&I.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ki).join(`
`)}(t),g=function(I){return[I.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ki).join(`
`)}(t),v=function(I){let Y=[];for(let j in I){let fe=I[j];fe!==!1&&Y.push("#define "+j+" "+fe)}return Y.join(`
`)}(s),f=i.createProgram(),y,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ki).join(`
`),y.length>0&&(y+=`
`),_=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ki).join(`
`),_.length>0&&(_+=`
`)):(y=[kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),_=[p,kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?ke.tonemapping_pars_fragment:"",t.toneMapping!==ti?jp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Xp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ki).join(`
`)),a=al(a),a=zh(a,t),a=Hh(a,t),o=al(o),o=zh(o,t),o=Hh(o,t),a=Gh(a),o=Gh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,y=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let w=x+y+a,L=x+_+o,b=Fh(i,i.VERTEX_SHADER,w),C=Fh(i,i.FRAGMENT_SHADER,L);function N(I){if(r.debug.checkShaderErrors){let Y=i.getProgramInfoLog(f).trim(),j=i.getShaderInfoLog(b).trim(),fe=i.getShaderInfoLog(C).trim(),Me=!0,le=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(Me=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,f,b,C);else{let te=Bh(i,b,"vertex"),ae=Bh(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+te+`
`+ae)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):j!==""&&fe!==""||(le=!1);le&&(I.diagnostics={runnable:Me,programLog:Y,vertexShader:{log:j,prefix:y},fragmentShader:{log:fe,prefix:_}})}i.deleteShader(b),i.deleteShader(C),O=new er(i,f),H=function(Y,j){let fe={},Me=Y.getProgramParameter(j,Y.ACTIVE_ATTRIBUTES);for(let le=0;le<Me;le++){let te=Y.getActiveAttrib(j,le),ae=te.name,k=1;te.type===Y.FLOAT_MAT2&&(k=2),te.type===Y.FLOAT_MAT3&&(k=3),te.type===Y.FLOAT_MAT4&&(k=4),fe[ae]={type:te.type,location:Y.getAttribLocation(j,ae),locationSize:k}}return fe}(i,f)}let O,H;i.attachShader(f,b),i.attachShader(f,C),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),this.getUniforms=function(){return O===void 0&&N(this),O},this.getAttributes=function(){return H===void 0&&N(this),H};let J=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=i.getProgramParameter(f,Vp)),J},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wp++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=b,this.fragmentShader=C,this}var $p=0,ol=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ll(e),t.set(e,n)),n}},ll=class{constructor(e){this.id=$p++,this.code=e,this.usedTimes=0}};function ef(r,e,t,n,i,s,a){let o=new fa,c=new ol,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures,p=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(f){return f===0?"uv":`uv${f}`}return{getParameters:function(f,y,_,x,w){let L=x.fog,b=w.geometry,C=f.isMeshStandardMaterial?x.environment:null,N=(f.isMeshStandardMaterial?t:e).get(f.envMap||C),O=N&&N.mapping===Oa?N.image.height:null,H=g[f.type];f.precision!==null&&(p=i.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let J=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,I=J!==void 0?J.length:0,Y,j,fe,Me,le=0;if(b.morphAttributes.position!==void 0&&(le=1),b.morphAttributes.normal!==void 0&&(le=2),b.morphAttributes.color!==void 0&&(le=3),H){let St=Mn[H];Y=St.vertexShader,j=St.fragmentShader}else Y=f.vertexShader,j=f.fragmentShader,c.update(f),fe=c.getVertexShaderID(f),Me=c.getFragmentShaderID(f);let te=r.getRenderTarget(),ae=w.isInstancedMesh===!0,k=w.isBatchedMesh===!0,ne=!!f.map,_e=!!f.matcap,T=!!N,E=!!f.aoMap,V=!!f.lightMap,X=!!f.bumpMap,U=!!f.normalMap,Q=!!f.displacementMap,F=!!f.emissiveMap,z=!!f.metalnessMap,q=!!f.roughnessMap,oe=f.anisotropy>0,re=f.clearcoat>0,S=f.iridescence>0,ue=f.sheen>0,Z=f.transmission>0,K=oe&&!!f.anisotropyMap,de=re&&!!f.clearcoatMap,Se=re&&!!f.clearcoatNormalMap,we=re&&!!f.clearcoatRoughnessMap,Pe=S&&!!f.iridescenceMap,Ne=S&&!!f.iridescenceThicknessMap,Ce=ue&&!!f.sheenColorMap,Le=ue&&!!f.sheenRoughnessMap,Be=!!f.specularMap,pt=!!f.specularColorMap,Ue=!!f.specularIntensityMap,We=Z&&!!f.transmissionMap,Ge=Z&&!!f.thicknessMap,Ii=!!f.gradientMap,jn=!!f.alphaMap,Ui=f.alphaTest>0,Mt=!!f.alphaHash,et=!!f.extensions,Cn=!!b.attributes.uv1,$=!!b.attributes.uv2,At=!!b.attributes.uv3,ct=ti;return f.toneMapped&&(te!==null&&te.isXRRenderTarget!==!0||(ct=r.toneMapping)),{isWebGL2:h,shaderID:H,shaderType:f.type,shaderName:f.name,vertexShader:Y,fragmentShader:j,defines:f.defines,customVertexShaderID:fe,customFragmentShaderID:Me,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:k,instancing:ae,instancingColor:ae&&w.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Qt,map:ne,matcap:_e,envMap:T,envMapMode:T&&N.mapping,envMapCubeUVHeight:O,aoMap:E,lightMap:V,bumpMap:X,normalMap:U,displacementMap:u&&Q,emissiveMap:F,normalMapObjectSpace:U&&f.normalMapType===1,normalMapTangentSpace:U&&f.normalMapType===0,metalnessMap:z,roughnessMap:q,anisotropy:oe,anisotropyMap:K,clearcoat:re,clearcoatMap:de,clearcoatNormalMap:Se,clearcoatRoughnessMap:we,iridescence:S,iridescenceMap:Pe,iridescenceThicknessMap:Ne,sheen:ue,sheenColorMap:Ce,sheenRoughnessMap:Le,specularMap:Be,specularColorMap:pt,specularIntensityMap:Ue,transmission:Z,transmissionMap:We,thicknessMap:Ge,gradientMap:Ii,opaque:f.transparent===!1&&f.blending===1,alphaMap:jn,alphaTest:Ui,alphaHash:Mt,combine:f.combine,mapUv:ne&&v(f.map.channel),aoMapUv:E&&v(f.aoMap.channel),lightMapUv:V&&v(f.lightMap.channel),bumpMapUv:X&&v(f.bumpMap.channel),normalMapUv:U&&v(f.normalMap.channel),displacementMapUv:Q&&v(f.displacementMap.channel),emissiveMapUv:F&&v(f.emissiveMap.channel),metalnessMapUv:z&&v(f.metalnessMap.channel),roughnessMapUv:q&&v(f.roughnessMap.channel),anisotropyMapUv:K&&v(f.anisotropyMap.channel),clearcoatMapUv:de&&v(f.clearcoatMap.channel),clearcoatNormalMapUv:Se&&v(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&v(f.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&v(f.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&v(f.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&v(f.sheenColorMap.channel),sheenRoughnessMapUv:Le&&v(f.sheenRoughnessMap.channel),specularMapUv:Be&&v(f.specularMap.channel),specularColorMapUv:pt&&v(f.specularColorMap.channel),specularIntensityMapUv:Ue&&v(f.specularIntensityMap.channel),transmissionMapUv:We&&v(f.transmissionMap.channel),thicknessMapUv:Ge&&v(f.thicknessMap.channel),alphaMapUv:jn&&v(f.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(U||oe),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,vertexUv1s:Cn,vertexUv2s:$,vertexUv3s:At,pointsUvs:w.isPoints===!0&&!!b.attributes.uv&&(ne||jn),fog:!!L,useFog:f.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:w.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:le,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:r.shadowMap.enabled&&_.length>0,shadowMapType:r.shadowMap.type,toneMapping:ct,useLegacyLights:r._useLegacyLights,decodeVideoTexture:ne&&f.map.isVideoTexture===!0&&Je.getTransfer(f.map.colorSpace)===nt,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===zt,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionDerivatives:et&&f.extensions.derivatives===!0,extensionFragDepth:et&&f.extensions.fragDepth===!0,extensionDrawBuffers:et&&f.extensions.drawBuffers===!0,extensionShaderTextureLOD:et&&f.extensions.shaderTextureLOD===!0,extensionClipCullDistance:et&&f.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()}},getProgramCacheKey:function(f){let y=[];if(f.shaderID?y.push(f.shaderID):(y.push(f.customVertexShaderID),y.push(f.customFragmentShaderID)),f.defines!==void 0)for(let _ in f.defines)y.push(_),y.push(f.defines[_]);return f.isRawShaderMaterial===!1&&(function(_,x){_.push(x.precision),_.push(x.outputColorSpace),_.push(x.envMapMode),_.push(x.envMapCubeUVHeight),_.push(x.mapUv),_.push(x.alphaMapUv),_.push(x.lightMapUv),_.push(x.aoMapUv),_.push(x.bumpMapUv),_.push(x.normalMapUv),_.push(x.displacementMapUv),_.push(x.emissiveMapUv),_.push(x.metalnessMapUv),_.push(x.roughnessMapUv),_.push(x.anisotropyMapUv),_.push(x.clearcoatMapUv),_.push(x.clearcoatNormalMapUv),_.push(x.clearcoatRoughnessMapUv),_.push(x.iridescenceMapUv),_.push(x.iridescenceThicknessMapUv),_.push(x.sheenColorMapUv),_.push(x.sheenRoughnessMapUv),_.push(x.specularMapUv),_.push(x.specularColorMapUv),_.push(x.specularIntensityMapUv),_.push(x.transmissionMapUv),_.push(x.thicknessMapUv),_.push(x.combine),_.push(x.fogExp2),_.push(x.sizeAttenuation),_.push(x.morphTargetsCount),_.push(x.morphAttributeCount),_.push(x.numDirLights),_.push(x.numPointLights),_.push(x.numSpotLights),_.push(x.numSpotLightMaps),_.push(x.numHemiLights),_.push(x.numRectAreaLights),_.push(x.numDirLightShadows),_.push(x.numPointLightShadows),_.push(x.numSpotLightShadows),_.push(x.numSpotLightShadowsWithMaps),_.push(x.numLightProbes),_.push(x.shadowMapType),_.push(x.toneMapping),_.push(x.numClippingPlanes),_.push(x.numClipIntersection),_.push(x.depthPacking)}(y,f),function(_,x){o.disableAll(),x.isWebGL2&&o.enable(0),x.supportsVertexTextures&&o.enable(1),x.instancing&&o.enable(2),x.instancingColor&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),_.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.useLegacyLights&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),_.push(o.mask)}(y,f),y.push(r.outputColorSpace)),y.push(f.customProgramCacheKey),y.join()},getUniforms:function(f){let y=g[f.type],_;if(y){let x=Mn[y];_=tn.clone(x.uniforms)}else _=f.uniforms;return _},acquireProgram:function(f,y){let _;for(let x=0,w=l.length;x<w;x++){let L=l[x];if(L.cacheKey===y){_=L,++_.usedTimes;break}}return _===void 0&&(_=new Qp(r,y,f,s),l.push(_)),_},releaseProgram:function(f){if(--f.usedTimes==0){let y=l.indexOf(f);l[y]=l[l.length-1],l.pop(),f.destroy()}},releaseShaderCache:function(f){c.remove(f)},programs:l,dispose:function(){c.dispose()}}}function tf(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function nf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Vh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Wh(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,c,l,h,d){let u=r[e];return u===void 0?(u={id:a.id,object:a,geometry:o,material:c,groupOrder:l,renderOrder:a.renderOrder,z:h,group:d},r[e]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=c,u.groupOrder=l,u.renderOrder=a.renderOrder,u.z=h,u.group=d),e++,u}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,c,l,h,d){let u=s(a,o,c,l,h,d);c.transmission>0?n.push(u):c.transparent===!0?i.push(u):t.push(u)},unshift:function(a,o,c,l,h,d){let u=s(a,o,c,l,h,d);c.transmission>0?n.unshift(u):c.transparent===!0?i.unshift(u):t.unshift(u)},finish:function(){for(let a=e,o=r.length;a<o;a++){let c=r[a];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(a,o){t.length>1&&t.sort(a||nf),n.length>1&&n.sort(o||Vh),i.length>1&&i.sort(o||Vh)}}}function rf(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new Wh,r.set(e,[i])):t>=n.length?(i=new Wh,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function sf(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ie};break;case"SpotLight":t={position:new R,direction:new R,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new R,halfWidth:new R,halfHeight:new R}}return r[e.id]=t,t}}}var af=0;function of(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function lf(r,e){let t=new sf,n=function(){let c={};return{get:function(l){if(c[l.id]!==void 0)return c[l.id];let h;switch(l.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3}}return c[l.id]=h,h}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);let s=new R,a=new He,o=new He;return{setup:function(c,l){let h=0,d=0,u=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let p=0,g=0,v=0,f=0,y=0,_=0,x=0,w=0,L=0,b=0,C=0;c.sort(of);let N=l===!0?Math.PI:1;for(let H=0,J=c.length;H<J;H++){let I=c[H],Y=I.color,j=I.intensity,fe=I.distance,Me=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=Y.r*j*N,d+=Y.g*j*N,u+=Y.b*j*N;else if(I.isLightProbe){for(let le=0;le<9;le++)i.probe[le].addScaledVector(I.sh.coefficients[le],j);C++}else if(I.isDirectionalLight){let le=t.get(I);if(le.color.copy(I.color).multiplyScalar(I.intensity*N),I.castShadow){let te=I.shadow,ae=n.get(I);ae.shadowBias=te.bias,ae.shadowNormalBias=te.normalBias,ae.shadowRadius=te.radius,ae.shadowMapSize=te.mapSize,i.directionalShadow[p]=ae,i.directionalShadowMap[p]=Me,i.directionalShadowMatrix[p]=I.shadow.matrix,_++}i.directional[p]=le,p++}else if(I.isSpotLight){let le=t.get(I);le.position.setFromMatrixPosition(I.matrixWorld),le.color.copy(Y).multiplyScalar(j*N),le.distance=fe,le.coneCos=Math.cos(I.angle),le.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),le.decay=I.decay,i.spot[v]=le;let te=I.shadow;if(I.map&&(i.spotLightMap[L]=I.map,L++,te.updateMatrices(I),I.castShadow&&b++),i.spotLightMatrix[v]=te.matrix,I.castShadow){let ae=n.get(I);ae.shadowBias=te.bias,ae.shadowNormalBias=te.normalBias,ae.shadowRadius=te.radius,ae.shadowMapSize=te.mapSize,i.spotShadow[v]=ae,i.spotShadowMap[v]=Me,w++}v++}else if(I.isRectAreaLight){let le=t.get(I);le.color.copy(Y).multiplyScalar(j),le.halfWidth.set(.5*I.width,0,0),le.halfHeight.set(0,.5*I.height,0),i.rectArea[f]=le,f++}else if(I.isPointLight){let le=t.get(I);if(le.color.copy(I.color).multiplyScalar(I.intensity*N),le.distance=I.distance,le.decay=I.decay,I.castShadow){let te=I.shadow,ae=n.get(I);ae.shadowBias=te.bias,ae.shadowNormalBias=te.normalBias,ae.shadowRadius=te.radius,ae.shadowMapSize=te.mapSize,ae.shadowCameraNear=te.camera.near,ae.shadowCameraFar=te.camera.far,i.pointShadow[g]=ae,i.pointShadowMap[g]=Me,i.pointShadowMatrix[g]=I.shadow.matrix,x++}i.point[g]=le,g++}else if(I.isHemisphereLight){let le=t.get(I);le.skyColor.copy(I.color).multiplyScalar(j*N),le.groundColor.copy(I.groundColor).multiplyScalar(j*N),i.hemi[y]=le,y++}}f>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let O=i.hash;O.directionalLength===p&&O.pointLength===g&&O.spotLength===v&&O.rectAreaLength===f&&O.hemiLength===y&&O.numDirectionalShadows===_&&O.numPointShadows===x&&O.numSpotShadows===w&&O.numSpotMaps===L&&O.numLightProbes===C||(i.directional.length=p,i.spot.length=v,i.rectArea.length=f,i.point.length=g,i.hemi.length=y,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=w+L-b,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,O.directionalLength=p,O.pointLength=g,O.spotLength=v,O.rectAreaLength=f,O.hemiLength=y,O.numDirectionalShadows=_,O.numPointShadows=x,O.numSpotShadows=w,O.numSpotMaps=L,O.numLightProbes=C,i.version=af++)},setupView:function(c,l){let h=0,d=0,u=0,p=0,g=0,v=l.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){let _=c[f];if(_.isDirectionalLight){let x=i.directional[h];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(v),h++}else if(_.isSpotLight){let x=i.spot[u];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(v),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(v),u++}else if(_.isRectAreaLight){let x=i.rectArea[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(v),o.identity(),a.copy(_.matrixWorld),a.premultiply(v),o.extractRotation(a),x.halfWidth.set(.5*_.width,0,0),x.halfHeight.set(0,.5*_.height,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){let x=i.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(v),d++}else if(_.isHemisphereLight){let x=i.hemi[g];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(v),g++}}},state:i}}function Xh(r,e){let t=new lf(r,e),n=[],i=[];return{init:function(){n.length=0,i.length=0},state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:function(s){t.setup(n,s)},setupLightsView:function(s){t.setupView(n,s)},pushLight:function(s){n.push(s)},pushShadow:function(s){i.push(s)}}}function cf(r,e){let t=new WeakMap;return{get:function(n,i=0){let s=t.get(n),a;return s===void 0?(a=new Xh(r,e),t.set(n,[a])):i>=s.length?(a=new Xh(r,e),s.push(a)):a=s[i],a},dispose:function(){t=new WeakMap}}}var jr=class extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},cl=class extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function hf(r,e,t){let n=new lr,i=new ce,s=new ce,a=new Qe,o=new jr({depthPacking:3201}),c=new cl,l={},h=t.maxTextureSize,d={[ii]:zt,[zt]:ii,2:2},u=new ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new rt;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Fe(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let y=this.type;function _(b,C){let N=e.update(v);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new dt(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(C,null,N,u,v,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(C,null,N,p,v,null)}function x(b,C,N,O){let H=null,J=N.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(J!==void 0)H=J;else if(H=N.isPointLight===!0?c:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let I=H.uuid,Y=C.uuid,j=l[I];j===void 0&&(j={},l[I]=j);let fe=j[Y];fe===void 0&&(fe=H.clone(),j[Y]=fe,C.addEventListener("dispose",L)),H=fe}return H.visible=C.visible,H.wireframe=C.wireframe,H.side=O===Bn?C.shadowSide!==null?C.shadowSide:C.side:C.shadowSide!==null?C.shadowSide:d[C.side],H.alphaMap=C.alphaMap,H.alphaTest=C.alphaTest,H.map=C.map,H.clipShadows=C.clipShadows,H.clippingPlanes=C.clippingPlanes,H.clipIntersection=C.clipIntersection,H.displacementMap=C.displacementMap,H.displacementScale=C.displacementScale,H.displacementBias=C.displacementBias,H.wireframeLinewidth=C.wireframeLinewidth,H.linewidth=C.linewidth,N.isPointLight===!0&&H.isMeshDistanceMaterial===!0&&(r.properties.get(H).light=N),H}function w(b,C,N,O,H){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&H===Bn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,b.matrixWorld);let I=e.update(b),Y=b.material;if(Array.isArray(Y)){let j=I.groups;for(let fe=0,Me=j.length;fe<Me;fe++){let le=j[fe],te=Y[le.materialIndex];if(te&&te.visible){let ae=x(b,te,O,H);b.onBeforeShadow(r,b,C,N,I,ae,le),r.renderBufferDirect(N,null,I,ae,b,le),b.onAfterShadow(r,b,C,N,I,ae,le)}}}else if(Y.visible){let j=x(b,Y,O,H);b.onBeforeShadow(r,b,C,N,I,j,null),r.renderBufferDirect(N,null,I,j,b,null),b.onAfterShadow(r,b,C,N,I,j,null)}}let J=b.children;for(let I=0,Y=J.length;I<Y;I++)w(J[I],C,N,O,H)}function L(b){b.target.removeEventListener("dispose",L);for(let C in l){let N=l[C],O=b.target.uuid;O in N&&(N[O].dispose(),delete N[O])}}this.render=function(b,C,N){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;let O=r.getRenderTarget(),H=r.getActiveCubeFace(),J=r.getActiveMipmapLevel(),I=r.state;I.setBlending(0),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let Y=y!==Bn&&this.type===Bn,j=y===Bn&&this.type!==Bn;for(let fe=0,Me=b.length;fe<Me;fe++){let le=b[fe],te=le.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;i.copy(te.mapSize);let ae=te.getFrameExtents();if(i.multiply(ae),s.copy(te.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ae.x),i.x=s.x*ae.x,te.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ae.y),i.y=s.y*ae.y,te.mapSize.y=s.y)),te.map===null||Y===!0||j===!0){let ne=this.type!==Bn?{minFilter:Et,magFilter:Et}:{};te.map!==null&&te.map.dispose(),te.map=new dt(i.x,i.y,ne),te.map.texture.name=le.name+".shadowMap",te.camera.updateProjectionMatrix()}r.setRenderTarget(te.map),r.clear();let k=te.getViewportCount();for(let ne=0;ne<k;ne++){let _e=te.getViewport(ne);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),I.viewport(a),te.updateMatrices(le,ne),n=te.getFrustum(),w(C,N,te.camera,le,this.type)}te.isPointLightShadow!==!0&&this.type===Bn&&_(te,N),te.needsUpdate=!1}y=this.type,f.needsUpdate=!1,r.setRenderTarget(O,H,J)}}function uf(r,e,t){let n=t.isWebGL2,i=new function(){let S=!1,ue=new Qe,Z=null,K=new Qe(0,0,0,0);return{setMask:function(de){Z===de||S||(r.colorMask(de,de,de,de),Z=de)},setLocked:function(de){S=de},setClear:function(de,Se,we,Pe,Ne){Ne===!0&&(de*=Pe,Se*=Pe,we*=Pe),ue.set(de,Se,we,Pe),K.equals(ue)===!1&&(r.clearColor(de,Se,we,Pe),K.copy(ue))},reset:function(){S=!1,Z=null,K.set(-1,0,0,0)}}},s=new function(){let S=!1,ue=null,Z=null,K=null;return{setTest:function(de){de?X(r.DEPTH_TEST):U(r.DEPTH_TEST)},setMask:function(de){ue===de||S||(r.depthMask(de),ue=de)},setFunc:function(de){if(Z!==de){switch(de){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}Z=de}},setLocked:function(de){S=de},setClear:function(de){K!==de&&(r.clearDepth(de),K=de)},reset:function(){S=!1,ue=null,Z=null,K=null}}},a=new function(){let S=!1,ue=null,Z=null,K=null,de=null,Se=null,we=null,Pe=null,Ne=null;return{setTest:function(Ce){S||(Ce?X(r.STENCIL_TEST):U(r.STENCIL_TEST))},setMask:function(Ce){ue===Ce||S||(r.stencilMask(Ce),ue=Ce)},setFunc:function(Ce,Le,Be){Z===Ce&&K===Le&&de===Be||(r.stencilFunc(Ce,Le,Be),Z=Ce,K=Le,de=Be)},setOp:function(Ce,Le,Be){Se===Ce&&we===Le&&Pe===Be||(r.stencilOp(Ce,Le,Be),Se=Ce,we=Le,Pe=Be)},setLocked:function(Ce){S=Ce},setClear:function(Ce){Ne!==Ce&&(r.clearStencil(Ce),Ne=Ce)},reset:function(){S=!1,ue=null,Z=null,K=null,de=null,Se=null,we=null,Pe=null,Ne=null}}},o=new WeakMap,c=new WeakMap,l={},h={},d=new WeakMap,u=[],p=null,g=!1,v=null,f=null,y=null,_=null,x=null,w=null,L=null,b=new Ie(0,0,0),C=0,N=!1,O=null,H=null,J=null,I=null,Y=null,j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),fe=!1,Me=0,le=r.getParameter(r.VERSION);le.indexOf("WebGL")!==-1?(Me=parseFloat(/^WebGL (\d)/.exec(le)[1]),fe=Me>=1):le.indexOf("OpenGL ES")!==-1&&(Me=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),fe=Me>=2);let te=null,ae={},k=r.getParameter(r.SCISSOR_BOX),ne=r.getParameter(r.VIEWPORT),_e=new Qe().fromArray(k),T=new Qe().fromArray(ne);function E(S,ue,Z,K){let de=new Uint8Array(4),Se=r.createTexture();r.bindTexture(S,Se),r.texParameteri(S,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(S,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let we=0;we<Z;we++)!n||S!==r.TEXTURE_3D&&S!==r.TEXTURE_2D_ARRAY?r.texImage2D(ue+we,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,de):r.texImage3D(ue,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,de);return Se}let V={};function X(S){l[S]!==!0&&(r.enable(S),l[S]=!0)}function U(S){l[S]!==!1&&(r.disable(S),l[S]=!1)}V[r.TEXTURE_2D]=E(r.TEXTURE_2D,r.TEXTURE_2D,1),V[r.TEXTURE_CUBE_MAP]=E(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(V[r.TEXTURE_2D_ARRAY]=E(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),V[r.TEXTURE_3D]=E(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),X(r.DEPTH_TEST),s.setFunc(3),q(!1),oe(1),X(r.CULL_FACE),z(0);let Q={[gi]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};if(n)Q[103]=r.MIN,Q[104]=r.MAX;else{let S=e.get("EXT_blend_minmax");S!==null&&(Q[103]=S.MIN_EXT,Q[104]=S.MAX_EXT)}let F={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,[jo]:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,[qo]:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function z(S,ue,Z,K,de,Se,we,Pe,Ne,Ce){if(S!==0){if(g===!1&&(X(r.BLEND),g=!0),S===5)de=de||ue,Se=Se||Z,we=we||K,ue===f&&de===x||(r.blendEquationSeparate(Q[ue],Q[de]),f=ue,x=de),Z===y&&K===_&&Se===w&&we===L||(r.blendFuncSeparate(F[Z],F[K],F[Se],F[we]),y=Z,_=K,w=Se,L=we),Pe.equals(b)!==!1&&Ne===C||(r.blendColor(Pe.r,Pe.g,Pe.b,Ne),b.copy(Pe),C=Ne),v=S,N=!1;else if(S!==v||Ce!==N){if(f===gi&&x===gi||(r.blendEquation(r.FUNC_ADD),f=gi,x=gi),Ce)switch(S){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}else switch(S){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}y=null,_=null,w=null,L=null,b.set(0,0,0),C=0,v=S,N=Ce}}else g===!0&&(U(r.BLEND),g=!1)}function q(S){O!==S&&(S?r.frontFace(r.CW):r.frontFace(r.CCW),O=S)}function oe(S){S!==0?(X(r.CULL_FACE),S!==H&&(S===1?r.cullFace(r.BACK):S===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):U(r.CULL_FACE),H=S}function re(S,ue,Z){S?(X(r.POLYGON_OFFSET_FILL),I===ue&&Y===Z||(r.polygonOffset(ue,Z),I=ue,Y=Z)):U(r.POLYGON_OFFSET_FILL)}return{buffers:{color:i,depth:s,stencil:a},enable:X,disable:U,bindFramebuffer:function(S,ue){return h[S]!==ue&&(r.bindFramebuffer(S,ue),h[S]=ue,n&&(S===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ue),S===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ue)),!0)},drawBuffers:function(S,ue){let Z=u,K=!1;if(S)if(Z=d.get(ue),Z===void 0&&(Z=[],d.set(ue,Z)),S.isWebGLMultipleRenderTargets){let de=S.texture;if(Z.length!==de.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let Se=0,we=de.length;Se<we;Se++)Z[Se]=r.COLOR_ATTACHMENT0+Se;Z.length=de.length,K=!0}}else Z[0]!==r.COLOR_ATTACHMENT0&&(Z[0]=r.COLOR_ATTACHMENT0,K=!0);else Z[0]!==r.BACK&&(Z[0]=r.BACK,K=!0);K&&(t.isWebGL2?r.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))},useProgram:function(S){return p!==S&&(r.useProgram(S),p=S,!0)},setBlending:z,setMaterial:function(S,ue){S.side===2?U(r.CULL_FACE):X(r.CULL_FACE);let Z=S.side===zt;ue&&(Z=!Z),q(Z),S.blending===1&&S.transparent===!1?z(0):z(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),s.setFunc(S.depthFunc),s.setTest(S.depthTest),s.setMask(S.depthWrite),i.setMask(S.colorWrite);let K=S.stencilWrite;a.setTest(K),K&&(a.setMask(S.stencilWriteMask),a.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),a.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),re(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?X(r.SAMPLE_ALPHA_TO_COVERAGE):U(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:q,setCullFace:oe,setLineWidth:function(S){S!==J&&(fe&&r.lineWidth(S),J=S)},setPolygonOffset:re,setScissorTest:function(S){S?X(r.SCISSOR_TEST):U(r.SCISSOR_TEST)},activeTexture:function(S){S===void 0&&(S=r.TEXTURE0+j-1),te!==S&&(r.activeTexture(S),te=S)},bindTexture:function(S,ue,Z){Z===void 0&&(Z=te===null?r.TEXTURE0+j-1:te);let K=ae[Z];K===void 0&&(K={type:void 0,texture:void 0},ae[Z]=K),K.type===S&&K.texture===ue||(te!==Z&&(r.activeTexture(Z),te=Z),r.bindTexture(S,ue||V[S]),K.type=S,K.texture=ue)},unbindTexture:function(){let S=ae[te];S!==void 0&&S.type!==void 0&&(r.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},updateUBOMapping:function(S,ue){let Z=c.get(ue);Z===void 0&&(Z=new WeakMap,c.set(ue,Z));let K=Z.get(S);K===void 0&&(K=r.getUniformBlockIndex(ue,S.name),Z.set(S,K))},uniformBlockBinding:function(S,ue){let Z=c.get(ue).get(S);o.get(ue)!==Z&&(r.uniformBlockBinding(ue,Z,S.__bindingPointIndex),o.set(ue,Z))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},scissor:function(S){_e.equals(S)===!1&&(r.scissor(S.x,S.y,S.z,S.w),_e.copy(S))},viewport:function(S){T.equals(S)===!1&&(r.viewport(S.x,S.y,S.z,S.w),T.copy(S))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},te=null,ae={},h={},d=new WeakMap,u=[],p=null,g=!1,v=null,f=null,y=null,_=null,x=null,w=null,L=null,b=new Ie(0,0,0),C=0,N=!1,O=null,H=null,J=null,I=null,Y=null,_e.set(0,0,r.canvas.width,r.canvas.height),T.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}}}function df(r,e,t,n,i,s,a){let o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,E){return p?new OffscreenCanvas(T,E):Wr("canvas")}function v(T,E,V,X){let U=1;if((T.width>X||T.height>X)&&(U=X/Math.max(T.width,T.height)),U<1||E===!0){if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let Q=E?Qo:Math.floor,F=Q(U*T.width),z=Q(U*T.height);d===void 0&&(d=g(F,z));let q=V?g(F,z):d;return q.width=F,q.height=z,q.getContext("2d").drawImage(T,0,0,F,z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+F+"x"+z+")."),q}return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T}return T}function f(T){return lh(T.width)&&lh(T.height)}function y(T,E){return T.generateMipmaps&&E&&T.minFilter!==Et&&T.minFilter!==Rt}function _(T){r.generateMipmap(T)}function x(T,E,V,X,U=!1){if(o===!1)return E;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=E;if(E===r.RED&&(V===r.FLOAT&&(Q=r.R32F),V===r.HALF_FLOAT&&(Q=r.R16F),V===r.UNSIGNED_BYTE&&(Q=r.R8)),E===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(Q=r.R8UI),V===r.UNSIGNED_SHORT&&(Q=r.R16UI),V===r.UNSIGNED_INT&&(Q=r.R32UI),V===r.BYTE&&(Q=r.R8I),V===r.SHORT&&(Q=r.R16I),V===r.INT&&(Q=r.R32I)),E===r.RG&&(V===r.FLOAT&&(Q=r.RG32F),V===r.HALF_FLOAT&&(Q=r.RG16F),V===r.UNSIGNED_BYTE&&(Q=r.RG8)),E===r.RGBA){let F=U?sa:Je.getTransfer(X);V===r.FLOAT&&(Q=r.RGBA32F),V===r.HALF_FLOAT&&(Q=r.RGBA16F),V===r.UNSIGNED_BYTE&&(Q=F===nt?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return Q!==r.R16F&&Q!==r.R32F&&Q!==r.RG16F&&Q!==r.RG32F&&Q!==r.RGBA16F&&Q!==r.RGBA32F||e.get("EXT_color_buffer_float"),Q}function w(T,E,V){return y(T,V)===!0||T.isFramebufferTexture&&T.minFilter!==Et&&T.minFilter!==Rt?Math.log2(Math.max(E.width,E.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?E.mipmaps.length:1}function L(T){return T===Et||T===Lc||T===oo?r.NEAREST:r.LINEAR}function b(T){let E=T.target;E.removeEventListener("dispose",b),function(V){let X=n.get(V);if(X.__webglInit===void 0)return;let U=V.source,Q=u.get(U);if(Q){let F=Q[X.__cacheKey];F.usedTimes--,F.usedTimes===0&&N(V),Object.keys(Q).length===0&&u.delete(U)}n.remove(V)}(E),E.isVideoTexture&&h.delete(E)}function C(T){let E=T.target;E.removeEventListener("dispose",C),function(V){let X=V.texture,U=n.get(V),Q=n.get(X);if(Q.__webglTexture!==void 0&&(r.deleteTexture(Q.__webglTexture),a.memory.textures--),V.depthTexture&&V.depthTexture.dispose(),V.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(U.__webglFramebuffer[F]))for(let z=0;z<U.__webglFramebuffer[F].length;z++)r.deleteFramebuffer(U.__webglFramebuffer[F][z]);else r.deleteFramebuffer(U.__webglFramebuffer[F]);U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer[F])}else{if(Array.isArray(U.__webglFramebuffer))for(let F=0;F<U.__webglFramebuffer.length;F++)r.deleteFramebuffer(U.__webglFramebuffer[F]);else r.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&r.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let F=0;F<U.__webglColorRenderbuffer.length;F++)U.__webglColorRenderbuffer[F]&&r.deleteRenderbuffer(U.__webglColorRenderbuffer[F]);U.__webglDepthRenderbuffer&&r.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(V.isWebGLMultipleRenderTargets)for(let F=0,z=X.length;F<z;F++){let q=n.get(X[F]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(X[F])}n.remove(X),n.remove(V)}(E)}function N(T){let E=n.get(T);r.deleteTexture(E.__webglTexture);let V=T.source;delete u.get(V)[E.__cacheKey],a.memory.textures--}let O=0;function H(T,E){let V=n.get(T);if(T.isVideoTexture&&function(X){let U=a.render.frame;h.get(X)!==U&&(h.set(X,U),X.update())}(T),T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){let X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(X.complete!==!1)return void Me(V,T,E);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+E)}let J={[ir]:r.REPEAT,[hn]:r.CLAMP_TO_EDGE,[Jo]:r.MIRRORED_REPEAT},I={[Et]:r.NEAREST,[Lc]:r.NEAREST_MIPMAP_NEAREST,[oo]:r.NEAREST_MIPMAP_LINEAR,[Rt]:r.LINEAR,[Md]:r.LINEAR_MIPMAP_NEAREST,[Vr]:r.LINEAR_MIPMAP_LINEAR},Y={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function j(T,E,V){if(V?(r.texParameteri(T,r.TEXTURE_WRAP_S,J[E.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,J[E.wrapT]),T!==r.TEXTURE_3D&&T!==r.TEXTURE_2D_ARRAY||r.texParameteri(T,r.TEXTURE_WRAP_R,J[E.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,I[E.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,I[E.minFilter])):(r.texParameteri(T,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(T,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),T!==r.TEXTURE_3D&&T!==r.TEXTURE_2D_ARRAY||r.texParameteri(T,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),E.wrapS===hn&&E.wrapT===hn||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,r.TEXTURE_MAG_FILTER,L(E.magFilter)),r.texParameteri(T,r.TEXTURE_MIN_FILTER,L(E.minFilter)),E.minFilter!==Et&&E.minFilter!==Rt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,Y[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let X=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Et||E.minFilter!==oo&&E.minFilter!==Vr||E.type===Kt&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===ht&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(T,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function fe(T,E){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,E.addEventListener("dispose",b));let X=E.source,U=u.get(X);U===void 0&&(U={},u.set(X,U));let Q=function(F){let z=[];return z.push(F.wrapS),z.push(F.wrapT),z.push(F.wrapR||0),z.push(F.magFilter),z.push(F.minFilter),z.push(F.anisotropy),z.push(F.internalFormat),z.push(F.format),z.push(F.type),z.push(F.generateMipmaps),z.push(F.premultiplyAlpha),z.push(F.flipY),z.push(F.unpackAlignment),z.push(F.colorSpace),z.join()}(E);if(Q!==T.__cacheKey){U[Q]===void 0&&(U[Q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),U[Q].usedTimes++;let F=U[T.__cacheKey];F!==void 0&&(U[T.__cacheKey].usedTimes--,F.usedTimes===0&&N(E)),T.__cacheKey=Q,T.__webglTexture=U[Q].texture}return V}function Me(T,E,V){let X=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(X=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(X=r.TEXTURE_3D);let U=fe(T,E),Q=E.source;t.bindTexture(X,T.__webglTexture,r.TEXTURE0+V);let F=n.get(Q);if(Q.version!==F.__version||U===!0){t.activeTexture(r.TEXTURE0+V);let z=Je.getPrimaries(Je.workingColorSpace),q=E.colorSpace===Jt?null:Je.getPrimaries(E.colorSpace),oe=E.colorSpace===Jt||z===q?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let re=function(Le){return!o&&(Le.wrapS!==hn||Le.wrapT!==hn||Le.minFilter!==Et&&Le.minFilter!==Rt)}(E)&&f(E.image)===!1,S=v(E.image,re,!1,i.maxTextureSize);S=_e(E,S);let ue=f(S)||o,Z=s.convert(E.format,E.colorSpace),K,de=s.convert(E.type),Se=x(E.internalFormat,Z,de,E.colorSpace,E.isVideoTexture);j(X,E,ue);let we=E.mipmaps,Pe=o&&E.isVideoTexture!==!0&&Se!==fu,Ne=F.__version===void 0||U===!0,Ce=w(E,S,ue);if(E.isDepthTexture)Se=r.DEPTH_COMPONENT,o?Se=E.type===Kt?r.DEPTH_COMPONENT32F:E.type===ei?r.DEPTH_COMPONENT24:E.type===Mi?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT16:E.type===Kt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Si&&Se===r.DEPTH_COMPONENT&&E.type!==ec&&E.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ei,de=s.convert(E.type)),E.format===rr&&Se===r.DEPTH_COMPONENT&&(Se=r.DEPTH_STENCIL,E.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Mi,de=s.convert(E.type))),Ne&&(Pe?t.texStorage2D(r.TEXTURE_2D,1,Se,S.width,S.height):t.texImage2D(r.TEXTURE_2D,0,Se,S.width,S.height,0,Z,de,null));else if(E.isDataTexture)if(we.length>0&&ue){Pe&&Ne&&t.texStorage2D(r.TEXTURE_2D,Ce,Se,we[0].width,we[0].height);for(let Le=0,Be=we.length;Le<Be;Le++)K=we[Le],Pe?t.texSubImage2D(r.TEXTURE_2D,Le,0,0,K.width,K.height,Z,de,K.data):t.texImage2D(r.TEXTURE_2D,Le,Se,K.width,K.height,0,Z,de,K.data);E.generateMipmaps=!1}else Pe?(Ne&&t.texStorage2D(r.TEXTURE_2D,Ce,Se,S.width,S.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,Z,de,S.data)):t.texImage2D(r.TEXTURE_2D,0,Se,S.width,S.height,0,Z,de,S.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Pe&&Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Se,we[0].width,we[0].height,S.depth);for(let Le=0,Be=we.length;Le<Be;Le++)K=we[Le],E.format!==Zt?Z!==null?Pe?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Le,0,0,0,K.width,K.height,S.depth,Z,K.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Le,Se,K.width,K.height,S.depth,0,K.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(r.TEXTURE_2D_ARRAY,Le,0,0,0,K.width,K.height,S.depth,Z,de,K.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Le,Se,K.width,K.height,S.depth,0,Z,de,K.data)}else{Pe&&Ne&&t.texStorage2D(r.TEXTURE_2D,Ce,Se,we[0].width,we[0].height);for(let Le=0,Be=we.length;Le<Be;Le++)K=we[Le],E.format!==Zt?Z!==null?Pe?t.compressedTexSubImage2D(r.TEXTURE_2D,Le,0,0,K.width,K.height,Z,K.data):t.compressedTexImage2D(r.TEXTURE_2D,Le,Se,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(r.TEXTURE_2D,Le,0,0,K.width,K.height,Z,de,K.data):t.texImage2D(r.TEXTURE_2D,Le,Se,K.width,K.height,0,Z,de,K.data)}else if(E.isDataArrayTexture)Pe?(Ne&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Se,S.width,S.height,S.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,S.width,S.height,S.depth,Z,de,S.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Se,S.width,S.height,S.depth,0,Z,de,S.data);else if(E.isData3DTexture)Pe?(Ne&&t.texStorage3D(r.TEXTURE_3D,Ce,Se,S.width,S.height,S.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,S.width,S.height,S.depth,Z,de,S.data)):t.texImage3D(r.TEXTURE_3D,0,Se,S.width,S.height,S.depth,0,Z,de,S.data);else if(E.isFramebufferTexture){if(Ne)if(Pe)t.texStorage2D(r.TEXTURE_2D,Ce,Se,S.width,S.height);else{let Le=S.width,Be=S.height;for(let pt=0;pt<Ce;pt++)t.texImage2D(r.TEXTURE_2D,pt,Se,Le,Be,0,Z,de,null),Le>>=1,Be>>=1}}else if(we.length>0&&ue){Pe&&Ne&&t.texStorage2D(r.TEXTURE_2D,Ce,Se,we[0].width,we[0].height);for(let Le=0,Be=we.length;Le<Be;Le++)K=we[Le],Pe?t.texSubImage2D(r.TEXTURE_2D,Le,0,0,Z,de,K):t.texImage2D(r.TEXTURE_2D,Le,Se,Z,de,K);E.generateMipmaps=!1}else Pe?(Ne&&t.texStorage2D(r.TEXTURE_2D,Ce,Se,S.width,S.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Z,de,S)):t.texImage2D(r.TEXTURE_2D,0,Se,Z,de,S);y(E,ue)&&_(X),F.__version=Q.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function le(T,E,V,X,U,Q){let F=s.convert(V.format,V.colorSpace),z=s.convert(V.type),q=x(V.internalFormat,F,z,V.colorSpace);if(!n.get(E).__hasExternalTextures){let oe=Math.max(1,E.width>>Q),re=Math.max(1,E.height>>Q);U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?t.texImage3D(U,Q,q,oe,re,E.depth,0,F,z,null):t.texImage2D(U,Q,q,oe,re,0,F,z,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),ne(E)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,X,U,n.get(V).__webglTexture,0,k(E)):(U===r.TEXTURE_2D||U>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,X,U,n.get(V).__webglTexture,Q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function te(T,E,V){if(r.bindRenderbuffer(r.RENDERBUFFER,T),E.depthBuffer&&!E.stencilBuffer){let X=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(V||ne(E)){let U=E.depthTexture;U&&U.isDepthTexture&&(U.type===Kt?X=r.DEPTH_COMPONENT32F:U.type===ei&&(X=r.DEPTH_COMPONENT24));let Q=k(E);ne(E)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,X,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,X,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,X,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,T)}else if(E.depthBuffer&&E.stencilBuffer){let X=k(E);V&&ne(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,X,r.DEPTH24_STENCIL8,E.width,E.height):ne(E)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,T)}else{let X=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let U=0;U<X.length;U++){let Q=X[U],F=s.convert(Q.format,Q.colorSpace),z=s.convert(Q.type),q=x(Q.internalFormat,F,z,Q.colorSpace),oe=k(E);V&&ne(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,q,E.width,E.height):ne(E)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,q,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,q,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ae(T){let E=n.get(T),V=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");(function(X,U){if(U&&U.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,X),!U.depthTexture||!U.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(U.depthTexture).__webglTexture&&U.depthTexture.image.width===U.width&&U.depthTexture.image.height===U.height||(U.depthTexture.image.width=U.width,U.depthTexture.image.height=U.height,U.depthTexture.needsUpdate=!0),H(U.depthTexture,0);let Q=n.get(U.depthTexture).__webglTexture,F=k(U);if(U.depthTexture.format===Si)ne(U)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,F):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else{if(U.depthTexture.format!==rr)throw new Error("Unknown depthTexture format");ne(U)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,F):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0)}})(E.__webglFramebuffer,T)}else if(V){E.__webglDepthbuffer=[];for(let X=0;X<6;X++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[X]),E.__webglDepthbuffer[X]=r.createRenderbuffer(),te(E.__webglDepthbuffer[X],T,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),te(E.__webglDepthbuffer,T,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function k(T){return Math.min(i.maxSamples,T.samples)}function ne(T){let E=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function _e(T,E){let V=T.colorSpace,X=T.format,U=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Ko||V!==Qt&&V!==Jt&&(Je.getTransfer(V)===nt?o===!1?e.has("EXT_sRGB")===!0&&X===Zt?(T.format=Ko,T.minFilter=Rt,T.generateMipmaps=!1):E=ha.sRGBToLinear(E):X===Zt&&U===yi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}this.allocateTextureUnit=function(){let T=O;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),O+=1,T},this.resetTextureUnits=function(){O=0},this.setTexture2D=H,this.setTexture2DArray=function(T,E){let V=n.get(T);T.version>0&&V.__version!==T.version?Me(V,T,E):t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+E)},this.setTexture3D=function(T,E){let V=n.get(T);T.version>0&&V.__version!==T.version?Me(V,T,E):t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+E)},this.setTextureCube=function(T,E){let V=n.get(T);T.version>0&&V.__version!==T.version?function(X,U,Q){if(U.image.length!==6)return;let F=fe(X,U),z=U.source;t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+Q);let q=n.get(z);if(z.version!==q.__version||F===!0){t.activeTexture(r.TEXTURE0+Q);let oe=Je.getPrimaries(Je.workingColorSpace),re=U.colorSpace===Jt?null:Je.getPrimaries(U.colorSpace),S=U.colorSpace===Jt||oe===re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,U.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,U.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,S);let ue=U.isCompressedTexture||U.image[0].isCompressedTexture,Z=U.image[0]&&U.image[0].isDataTexture,K=[];for(let Ue=0;Ue<6;Ue++)K[Ue]=ue||Z?Z?U.image[Ue].image:U.image[Ue]:v(U.image[Ue],!1,!0,i.maxCubemapSize),K[Ue]=_e(U,K[Ue]);let de=K[0],Se=f(de)||o,we=s.convert(U.format,U.colorSpace),Pe=s.convert(U.type),Ne=x(U.internalFormat,we,Pe,U.colorSpace),Ce=o&&U.isVideoTexture!==!0,Le=q.__version===void 0||F===!0,Be,pt=w(U,de,Se);if(j(r.TEXTURE_CUBE_MAP,U,Se),ue){Ce&&Le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,pt,Ne,de.width,de.height);for(let Ue=0;Ue<6;Ue++){Be=K[Ue].mipmaps;for(let We=0;We<Be.length;We++){let Ge=Be[We];U.format!==Zt?we!==null?Ce?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,We,0,0,Ge.width,Ge.height,we,Ge.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,We,Ne,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,We,0,0,Ge.width,Ge.height,we,Pe,Ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,We,Ne,Ge.width,Ge.height,0,we,Pe,Ge.data)}}}else{Be=U.mipmaps,Ce&&Le&&(Be.length>0&&pt++,t.texStorage2D(r.TEXTURE_CUBE_MAP,pt,Ne,K[0].width,K[0].height));for(let Ue=0;Ue<6;Ue++)if(Z){Ce?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,0,0,K[Ue].width,K[Ue].height,we,Pe,K[Ue].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Ne,K[Ue].width,K[Ue].height,0,we,Pe,K[Ue].data);for(let We=0;We<Be.length;We++){let Ge=Be[We].image[Ue].image;Ce?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,We+1,0,0,Ge.width,Ge.height,we,Pe,Ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,We+1,Ne,Ge.width,Ge.height,0,we,Pe,Ge.data)}}else{Ce?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,0,0,we,Pe,K[Ue]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Ne,we,Pe,K[Ue]);for(let We=0;We<Be.length;We++){let Ge=Be[We];Ce?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,We+1,0,0,we,Pe,Ge.image[Ue]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,We+1,Ne,we,Pe,Ge.image[Ue])}}}y(U,Se)&&_(r.TEXTURE_CUBE_MAP),q.__version=z.version,U.onUpdate&&U.onUpdate(U)}X.__version=U.version}(V,T,E):t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+E)},this.rebindTextures=function(T,E,V){let X=n.get(T);E!==void 0&&le(X.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&ae(T)},this.setupRenderTarget=function(T){let E=T.texture,V=n.get(T),X=n.get(E);T.addEventListener("dispose",C),T.isWebGLMultipleRenderTargets!==!0&&(X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture()),X.__version=E.version,a.memory.textures++);let U=T.isWebGLCubeRenderTarget===!0,Q=T.isWebGLMultipleRenderTargets===!0,F=f(T)||o;if(U){V.__webglFramebuffer=[];for(let z=0;z<6;z++)if(o&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[z]=[];for(let q=0;q<E.mipmaps.length;q++)V.__webglFramebuffer[z][q]=r.createFramebuffer()}else V.__webglFramebuffer[z]=r.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let z=0;z<E.mipmaps.length;z++)V.__webglFramebuffer[z]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(Q)if(i.drawBuffers){let z=T.texture;for(let q=0,oe=z.length;q<oe;q++){let re=n.get(z[q]);re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&ne(T)===!1){let z=Q?E:[E];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let q=0;q<z.length;q++){let oe=z[q];V.__webglColorRenderbuffer[q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[q]);let re=s.convert(oe.format,oe.colorSpace),S=s.convert(oe.type),ue=x(oe.internalFormat,re,S,oe.colorSpace,T.isXRRenderTarget===!0),Z=k(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,Z,ue,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+q,r.RENDERBUFFER,V.__webglColorRenderbuffer[q])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),te(V.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(U){t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture),j(r.TEXTURE_CUBE_MAP,E,F);for(let z=0;z<6;z++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let q=0;q<E.mipmaps.length;q++)le(V.__webglFramebuffer[z][q],T,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+z,q);else le(V.__webglFramebuffer[z],T,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);y(E,F)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){let z=T.texture;for(let q=0,oe=z.length;q<oe;q++){let re=z[q],S=n.get(re);t.bindTexture(r.TEXTURE_2D,S.__webglTexture),j(r.TEXTURE_2D,re,F),le(V.__webglFramebuffer,T,re,r.COLOR_ATTACHMENT0+q,r.TEXTURE_2D,0),y(re,F)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let z=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?z=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(z,X.__webglTexture),j(z,E,F),o&&E.mipmaps&&E.mipmaps.length>0)for(let q=0;q<E.mipmaps.length;q++)le(V.__webglFramebuffer[q],T,E,r.COLOR_ATTACHMENT0,z,q);else le(V.__webglFramebuffer,T,E,r.COLOR_ATTACHMENT0,z,0);y(E,F)&&_(z),t.unbindTexture()}T.depthBuffer&&ae(T)},this.updateRenderTargetMipmap=function(T){let E=f(T)||o,V=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let X=0,U=V.length;X<U;X++){let Q=V[X];if(y(Q,E)){let F=T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,z=n.get(Q).__webglTexture;t.bindTexture(F,z),_(F),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(T){if(o&&T.samples>0&&ne(T)===!1){let E=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],V=T.width,X=T.height,U=r.COLOR_BUFFER_BIT,Q=[],F=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,z=n.get(T),q=T.isWebGLMultipleRenderTargets===!0;if(q)for(let oe=0;oe<E.length;oe++)t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,z.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,z.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,z.__webglFramebuffer);for(let oe=0;oe<E.length;oe++){Q.push(r.COLOR_ATTACHMENT0+oe),T.depthBuffer&&Q.push(F);let re=z.__ignoreDepthValues!==void 0&&z.__ignoreDepthValues;if(re===!1&&(T.depthBuffer&&(U|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&(U|=r.STENCIL_BUFFER_BIT)),q&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,z.__webglColorRenderbuffer[oe]),re===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[F]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[F])),q){let S=n.get(E[oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,S,0)}r.blitFramebuffer(0,0,V,X,0,0,V,X,U,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),q)for(let oe=0;oe<E.length;oe++){t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,z.__webglColorRenderbuffer[oe]);let re=n.get(E[oe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,z.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,z.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ne}function pf(r,e,t){let n=t.isWebGL2;return{convert:function(i,s=""){let a,o=Je.getTransfer(s);if(i===yi)return r.UNSIGNED_BYTE;if(i===lu)return r.UNSIGNED_SHORT_4_4_4_4;if(i===cu)return r.UNSIGNED_SHORT_5_5_5_1;if(i===1010)return r.BYTE;if(i===1011)return r.SHORT;if(i===ec)return r.UNSIGNED_SHORT;if(i===ou)return r.INT;if(i===ei)return r.UNSIGNED_INT;if(i===Kt)return r.FLOAT;if(i===ht)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(i===1021)return r.ALPHA;if(i===Zt)return r.RGBA;if(i===1024)return r.LUMINANCE;if(i===1025)return r.LUMINANCE_ALPHA;if(i===Si)return r.DEPTH_COMPONENT;if(i===rr)return r.DEPTH_STENCIL;if(i===Ko)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(i===1028)return r.RED;if(i===uu)return r.RED_INTEGER;if(i===1030)return r.RG;if(i===du)return r.RG_INTEGER;if(i===pu)return r.RGBA_INTEGER;if(i===lo||i===co||i===ho||i===uo)if(o===nt){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(i===lo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(i===lo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===co)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ho)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===Ic||i===Uc||i===Dc||i===Nc){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(i===Ic)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Uc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Dc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===fu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Oc||i===Fc){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(i===Oc)return o===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Fc)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(i===Bc||i===zc||i===Hc||i===Gc||i===kc||i===Vc||i===Wc||i===Xc||i===jc||i===qc||i===Yc||i===Zc||i===Jc||i===Kc){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(i===Bc)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zc)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hc)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gc)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kc)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vc)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wc)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xc)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jc)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qc)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yc)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zc)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jc)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kc)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(i===po||i===Qc||i===$c){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(i===po)return o===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$c)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(i===36283||i===eh||i===th||i===nh){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(i===po)return a.COMPRESSED_RED_RGTC1_EXT;if(i===eh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===th)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return i===Mi?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[i]!==void 0?r[i]:null}}}var hl=class extends _t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Hn=class extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ff={type:"move"},zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let f=t.getJointPose(v,n),y=this._getHandJoint(l,v);f!==null&&(y.matrix.fromArray(f.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=f.radius),y.visible=f!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ff)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ul=class extends ri{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,g=null,v=t.getContextAttributes(),f=null,y=null,_=[],x=[],w=new ce,L=null,b=new _t;b.layers.enable(1),b.viewport=new Qe;let C=new _t;C.layers.enable(2),C.viewport=new Qe;let N=[b,C],O=new hl;O.layers.enable(1),O.layers.enable(2);let H=null,J=null;function I(k){let ne=x.indexOf(k.inputSource);if(ne===-1)return;let _e=_[ne];_e!==void 0&&(_e.update(k.inputSource,k.frame,l||a),_e.dispatchEvent({type:k.type,data:k.inputSource}))}function Y(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",j);for(let k=0;k<_.length;k++){let ne=x[k];ne!==null&&(x[k]=null,_[k].disconnect(ne))}H=null,J=null,e.setRenderTarget(f),p=null,u=null,d=null,i=null,y=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}function j(k){for(let ne=0;ne<k.removed.length;ne++){let _e=k.removed[ne],T=x.indexOf(_e);T>=0&&(x[T]=null,_[T].disconnect(_e))}for(let ne=0;ne<k.added.length;ne++){let _e=k.added[ne],T=x.indexOf(_e);if(T===-1){for(let V=0;V<_.length;V++){if(V>=x.length){x.push(_e),T=V;break}if(x[V]===null){x[V]=_e,T=V;break}}if(T===-1)break}let E=_[T];E&&E.connect(_e)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ne=_[k];return ne===void 0&&(ne=new zr,_[k]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(k){let ne=_[k];return ne===void 0&&(ne=new zr,_[k]=ne),ne.getGripSpace()},this.getHand=function(k){let ne=_[k];return ne===void 0&&(ne=new zr,_[k]=ne),ne.getHandSpace()},this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",j),v.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ne={antialias:i.renderState.layers!==void 0||v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new dt(p.framebufferWidth,p.framebufferHeight,{format:Zt,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ne=null,_e=null,T=null;v.depth&&(T=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=v.stencil?rr:Si,_e=v.stencil?Mi:ei);let E={colorFormat:t.RGBA8,depthFormat:T,scaleFactor:s};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(E),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new dt(u.textureWidth,u.textureHeight,{format:Zt,type:yi,depthTexture:new _a(u.textureWidth,u.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0}),e.properties.get(y).__ignoreDepthValues=u.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};let fe=new R,Me=new R;function le(k,ne){ne===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ne.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;O.near=C.near=b.near=k.near,O.far=C.far=b.far=k.far,H===O.near&&J===O.far||(i.updateRenderState({depthNear:O.near,depthFar:O.far}),H=O.near,J=O.far);let ne=k.parent,_e=O.cameras;le(O,ne);for(let T=0;T<_e.length;T++)le(_e[T],ne);_e.length===2?function(T,E,V){fe.setFromMatrixPosition(E.matrixWorld),Me.setFromMatrixPosition(V.matrixWorld);let X=fe.distanceTo(Me),U=E.projectionMatrix.elements,Q=V.projectionMatrix.elements,F=U[14]/(U[10]-1),z=U[14]/(U[10]+1),q=(U[9]+1)/U[5],oe=(U[9]-1)/U[5],re=(U[8]-1)/U[0],S=(Q[8]+1)/Q[0],ue=F*re,Z=F*S,K=X/(-re+S),de=K*-re;E.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(de),T.translateZ(K),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert();let Se=F+K,we=z+K,Pe=ue-de,Ne=Z+(X-de),Ce=q*z/we*Se,Le=oe*z/we*Se;T.projectionMatrix.makePerspective(Pe,Ne,Ce,Le,Se,we),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}(O,b,C):O.projectionMatrix.copy(b.projectionMatrix),function(T,E,V){V===null?T.matrix.copy(E.matrixWorld):(T.matrix.copy(V.matrixWorld),T.matrix.invert(),T.matrix.multiply(E.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(E.projectionMatrix),T.projectionMatrixInverse.copy(E.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=2*ca*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}(k,O,ne)},this.getCamera=function(){return O},this.getFoveation=function(){if(u!==null||p!==null)return c},this.setFoveation=function(k){c=k,u!==null&&(u.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)};let te=null,ae=new yu;ae.setAnimationLoop(function(k,ne){if(h=ne.getViewerPose(l||a),g=ne,h!==null){let _e=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let T=!1;_e.length!==O.cameras.length&&(O.cameras.length=0,T=!0);for(let E=0;E<_e.length;E++){let V=_e[E],X=null;if(p!==null)X=p.getViewport(V);else{let Q=d.getViewSubImage(u,V);X=Q.viewport,E===0&&(e.setRenderTargetTextures(y,Q.colorTexture,u.ignoreDepthValues?void 0:Q.depthStencilTexture),e.setRenderTarget(y))}let U=N[E];U===void 0&&(U=new _t,U.layers.enable(E),U.viewport=new Qe,N[E]=U),U.matrix.fromArray(V.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(V.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(X.x,X.y,X.width,X.height),E===0&&(O.matrix.copy(U.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),T===!0&&O.cameras.push(U)}}for(let _e=0;_e<_.length;_e++){let T=x[_e],E=_[_e];T!==null&&E!==void 0&&E.update(T,ne,l||a)}te&&te(k,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}),this.setAnimationLoop=function(k){te=k},this.dispose=function(){}}};function mf(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===zt&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===zt&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(i.envMap.value=a,i.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap){i.lightMap.value=s.lightMap;let o=r._useLegacyLights===!0?Math.PI:1;i.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,i.lightMapTransform)}s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,xu(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,c){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)}(i,s)):s.isMeshPhongMaterial?(n(i,s),function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)}(i,s)):s.isMeshStandardMaterial?(n(i,s),function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),e.get(h).envMap&&(l.envMapIntensity.value=h.envMapIntensity)}(i,s),s.isMeshPhysicalMaterial&&function(l,h,d){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===zt&&l.clearcoatNormalScale.value.negate())),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=d.texture,l.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))}(i,s,c)):s.isMeshMatcapMaterial?(n(i,s),function(l,h){h.matcap&&(l.matcap.value=h.matcap)}(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),function(l,h){let d=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(d.matrixWorld),l.nearDistance.value=d.shadow.camera.near,l.farDistance.value=d.shadow.camera.far}(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))}(i,s),s.isLineDashedMaterial&&function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale}(i,s)):s.isPointsMaterial?function(l,h,d,u){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*d,l.scale.value=.5*u,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)}(i,s,a,o):s.isSpriteMaterial?function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)}(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function gf(r,e,t,n){let i={},s={},a=[],o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(d,u,p,g){let v=d.value,f=u+"_"+p;if(g[f]===void 0)return g[f]=typeof v=="number"||typeof v=="boolean"?v:v.clone(),!0;{let y=g[f];if(typeof v=="number"||typeof v=="boolean"){if(y!==v)return g[f]=v,!0}else if(y.equals(v)===!1)return y.copy(v),!0}return!1}function l(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),u}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=a.indexOf(u.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[u.id]),delete i[u.id],delete s[u.id]}return{bind:function(d,u){let p=u.program;n.uniformBlockBinding(d,p)},update:function(d,u){let p=i[d.id];p===void 0&&(function(f){let y=f.uniforms,_=0,x=16;for(let L=0,b=y.length;L<b;L++){let C=Array.isArray(y[L])?y[L]:[y[L]];for(let N=0,O=C.length;N<O;N++){let H=C[N],J=Array.isArray(H.value)?H.value:[H.value];for(let I=0,Y=J.length;I<Y;I++){let j=l(J[I]),fe=_%x;fe!==0&&x-fe<j.boundary&&(_+=x-fe),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=_,_+=j.storage}}}let w=_%x;w>0&&(_+=x-w),f.__size=_,f.__cache={}}(d),p=function(f){let y=function(){for(let L=0;L<o;L++)if(a.indexOf(L)===-1)return a.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();f.__bindingPointIndex=y;let _=r.createBuffer(),x=f.__size,w=f.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,x,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,_),_}(d),i[d.id]=p,d.addEventListener("dispose",h));let g=u.program;n.updateUBOMapping(d,g);let v=e.render.frame;s[d.id]!==v&&(function(f){let y=i[f.id],_=f.uniforms,x=f.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let w=0,L=_.length;w<L;w++){let b=Array.isArray(_[w])?_[w]:[_[w]];for(let C=0,N=b.length;C<N;C++){let O=b[C];if(c(O,w,C,x)===!0){let H=O.__offset,J=Array.isArray(O.value)?O.value:[O.value],I=0;for(let Y=0;Y<J.length;Y++){let j=J[Y],fe=l(j);typeof j=="number"||typeof j=="boolean"?(O.__data[0]=j,r.bufferSubData(r.UNIFORM_BUFFER,H+I,O.__data)):j.isMatrix3?(O.__data[0]=j.elements[0],O.__data[1]=j.elements[1],O.__data[2]=j.elements[2],O.__data[3]=0,O.__data[4]=j.elements[3],O.__data[5]=j.elements[4],O.__data[6]=j.elements[5],O.__data[7]=0,O.__data[8]=j.elements[6],O.__data[9]=j.elements[7],O.__data[10]=j.elements[8],O.__data[11]=0):(j.toArray(O.__data,I),I+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}(d),s[d.id]=v)},dispose:function(){for(let d in i)r.deleteBuffer(i[d]);a=[],i={},s={}}}}var qr=class{constructor(e={}){let{canvas:t=bd(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e,u;this.isWebGLRenderer=!0,u=n!==null?n.getContextAttributes().alpha:a;let p=new Uint32Array(4),g=new Int32Array(4),v=null,f=null,y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=ti,this.toneMappingExposure=1;let x=this,w=!1,L=0,b=0,C=null,N=-1,O=null,H=new Qe,J=new Qe,I=null,Y=new Ie(0),j=0,fe=t.width,Me=t.height,le=1,te=null,ae=null,k=new Qe(0,0,fe,Me),ne=new Qe(0,0,fe,Me),_e=!1,T=new lr,E=!1,V=!1,X=null,U=new He,Q=new ce,F=new R,z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function q(){return C===null?le:1}let oe,re,S,ue,Z,K,de,Se,we,Pe,Ne,Ce,Le,Be,pt,Ue,We,Ge,Ii,jn,Ui,Mt,et,Cn,$=n;function At(P,B){for(let ie=0;ie<P.length;ie++){let me=P[ie],m=t.getContext(me,B);if(m!==null)return m}return null}try{let P={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xo}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",qn,!1),t.addEventListener("webglcontextcreationerror",gs,!1),$===null){let B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),$=At(B,P),$===null)throw At(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}function ct(){oe=new Jd($),re=new jd($,oe,e),oe.init(re),Mt=new pf($,oe,re),S=new uf($,oe,re),ue=new $d($),Z=new tf,K=new df($,oe,S,Z,re,Mt,ue),de=new Yd(x),Se=new Zd(x),we=new kd($,re),et=new Wd($,oe,we,re),Pe=new Kd($,we,ue,et),Ne=new ip($,Pe,we,ue),Ii=new np($,re,K),Ue=new qd(Z),Ce=new ef(x,de,Se,oe,re,et,Ue),Le=new mf(x,Z),Be=new rf,pt=new cf(oe,re),Ge=new Vd(x,de,Se,S,Ne,u,c),We=new hf(x,Ne,re),Cn=new gf($,ue,re,S),jn=new Xd($,oe,ue,re),Ui=new Qd($,oe,ue,re),ue.programs=Ce.programs,x.capabilities=re,x.extensions=oe,x.properties=Z,x.renderLists=Be,x.shadowMap=We,x.state=S,x.info=ue}ct();let St=new ul(x,$);function Te(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function qn(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let P=ue.autoReset,B=We.enabled,ie=We.autoUpdate,me=We.needsUpdate,m=We.type;ct(),ue.autoReset=P,We.enabled=B,We.autoUpdate=ie,We.needsUpdate=me,We.type=m}function gs(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function vs(P){let B=P.target;B.removeEventListener("dispose",vs),function(ie){(function(me){let m=Z.get(me).programs;m!==void 0&&(m.forEach(function(M){Ce.releaseProgram(M)}),me.isShaderMaterial&&Ce.releaseShaderCache(me))})(ie),Z.remove(ie)}(B)}function _s(P,B,ie){P.transparent===!0&&P.side===2&&P.forceSinglePass===!1?(P.side=zt,P.needsUpdate=!0,Ln(P,B,ie),P.side=ii,P.needsUpdate=!0,Ln(P,B,ie),P.side=2):Ln(P,B,ie)}this.xr=St,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let P=oe.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=oe.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(P){P!==void 0&&(le=P,this.setSize(fe,Me,!1))},this.getSize=function(P){return P.set(fe,Me)},this.setSize=function(P,B,ie=!0){St.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(fe=P,Me=B,t.width=Math.floor(P*le),t.height=Math.floor(B*le),ie===!0&&(t.style.width=P+"px",t.style.height=B+"px"),this.setViewport(0,0,P,B))},this.getDrawingBufferSize=function(P){return P.set(fe*le,Me*le).floor()},this.setDrawingBufferSize=function(P,B,ie){fe=P,Me=B,le=ie,t.width=Math.floor(P*ie),t.height=Math.floor(B*ie),this.setViewport(0,0,P,B)},this.getCurrentViewport=function(P){return P.copy(H)},this.getViewport=function(P){return P.copy(k)},this.setViewport=function(P,B,ie,me){P.isVector4?k.set(P.x,P.y,P.z,P.w):k.set(P,B,ie,me),S.viewport(H.copy(k).multiplyScalar(le).floor())},this.getScissor=function(P){return P.copy(ne)},this.setScissor=function(P,B,ie,me){P.isVector4?ne.set(P.x,P.y,P.z,P.w):ne.set(P,B,ie,me),S.scissor(J.copy(ne).multiplyScalar(le).floor())},this.getScissorTest=function(){return _e},this.setScissorTest=function(P){S.setScissorTest(_e=P)},this.setOpaqueSort=function(P){te=P},this.setTransparentSort=function(P){ae=P},this.getClearColor=function(P){return P.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(P=!0,B=!0,ie=!0){let me=0;if(P){let m=!1;if(C!==null){let M=C.texture.format;m=M===pu||M===du||M===uu}if(m){let M=C.texture.type,A=M===yi||M===ei||M===ec||M===Mi||M===lu||M===cu,D=Ge.getClearColor(),W=Ge.getClearAlpha(),G=D.r,ee=D.g,se=D.b;A?(p[0]=G,p[1]=ee,p[2]=se,p[3]=W,$.clearBufferuiv($.COLOR,0,p)):(g[0]=G,g[1]=ee,g[2]=se,g[3]=W,$.clearBufferiv($.COLOR,0,g))}else me|=$.COLOR_BUFFER_BIT}B&&(me|=$.DEPTH_BUFFER_BIT),ie&&(me|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(me)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",qn,!1),t.removeEventListener("webglcontextcreationerror",gs,!1),Be.dispose(),pt.dispose(),Z.dispose(),de.dispose(),Se.dispose(),Ne.dispose(),et.dispose(),Cn.dispose(),Ce.dispose(),St.dispose(),St.removeEventListener("sessionstart",xs),St.removeEventListener("sessionend",ys),X&&(X.dispose(),X=null),Pn.stop()},this.renderBufferDirect=function(P,B,ie,me,m,M){B===null&&(B=z);let A=m.isMesh&&m.matrixWorld.determinant()<0,D=function(Re,De,be,ve,Ee){De.isScene!==!0&&(De=z),K.resetTextureUnits();let tt=De.fog,it=ve.isMeshStandardMaterial?De.environment:null,It=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Qt,Ze=(ve.isMeshStandardMaterial?Se:de).get(ve.envMap||it),Xe=ve.vertexColors===!0&&!!be.attributes.color&&be.attributes.color.itemSize===4,ut=!!be.attributes.tangent&&(!!ve.normalMap||ve.anisotropy>0),Ft=!!be.morphAttributes.position,ft=!!be.morphAttributes.normal,qe=!!be.morphAttributes.color,Ke=ti;ve.toneMapped&&(C!==null&&C.isXRRenderTarget!==!0||(Ke=x.toneMapping));let jt=be.morphAttributes.position||be.morphAttributes.normal||be.morphAttributes.color,li=jt!==void 0?jt.length:0,ze=Z.get(ve),Ni=f.state.lights;if(E===!0&&(V===!0||Re!==O)){let qt=Re===O&&ve.id===N;Ue.setState(ve,Re,qt)}let rn=!1;ve.version===ze.__version?ze.needsLights&&ze.lightsStateVersion!==Ni.state.version||ze.outputColorSpace!==It||Ee.isBatchedMesh&&ze.batching===!1?rn=!0:Ee.isBatchedMesh||ze.batching!==!0?Ee.isInstancedMesh&&ze.instancing===!1?rn=!0:Ee.isInstancedMesh||ze.instancing!==!0?Ee.isSkinnedMesh&&ze.skinning===!1?rn=!0:Ee.isSkinnedMesh||ze.skinning!==!0?Ee.isInstancedMesh&&ze.instancingColor===!0&&Ee.instanceColor===null||Ee.isInstancedMesh&&ze.instancingColor===!1&&Ee.instanceColor!==null||ze.envMap!==Ze||ve.fog===!0&&ze.fog!==tt?rn=!0:ze.numClippingPlanes===void 0||ze.numClippingPlanes===Ue.numPlanes&&ze.numIntersection===Ue.numIntersection?(ze.vertexAlphas!==Xe||ze.vertexTangents!==ut||ze.morphTargets!==Ft||ze.morphNormals!==ft||ze.morphColors!==qe||ze.toneMapping!==Ke||re.isWebGL2===!0&&ze.morphTargetsCount!==li)&&(rn=!0):rn=!0:rn=!0:rn=!0:rn=!0:(rn=!0,ze.__version=ve.version);let ci=ze.currentProgram;rn===!0&&(ci=Ln(ve,De,Ee));let Cc=!1,Pr=!1,ro=!1,Ct=ci.getUniforms(),hi=ze.uniforms;if(S.useProgram(ci.program)&&(Cc=!0,Pr=!0,ro=!0),ve.id!==N&&(N=ve.id,Pr=!0),Cc||O!==Re){Ct.setValue($,"projectionMatrix",Re.projectionMatrix),Ct.setValue($,"viewMatrix",Re.matrixWorldInverse);let qt=Ct.map.cameraPosition;qt!==void 0&&qt.setValue($,F.setFromMatrixPosition(Re.matrixWorld)),re.logarithmicDepthBuffer&&Ct.setValue($,"logDepthBufFC",2/(Math.log(Re.far+1)/Math.LN2)),(ve.isMeshPhongMaterial||ve.isMeshToonMaterial||ve.isMeshLambertMaterial||ve.isMeshBasicMaterial||ve.isMeshStandardMaterial||ve.isShaderMaterial)&&Ct.setValue($,"isOrthographic",Re.isOrthographicCamera===!0),O!==Re&&(O=Re,Pr=!0,ro=!0)}if(Ee.isSkinnedMesh){Ct.setOptional($,Ee,"bindMatrix"),Ct.setOptional($,Ee,"bindMatrixInverse");let qt=Ee.skeleton;qt&&(re.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),Ct.setValue($,"boneTexture",qt.boneTexture,K)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Ee.isBatchedMesh&&(Ct.setOptional($,Ee,"batchingTexture"),Ct.setValue($,"batchingTexture",Ee._matricesTexture,K));let so=be.morphAttributes;(so.position!==void 0||so.normal!==void 0||so.color!==void 0&&re.isWebGL2===!0)&&Ii.update(Ee,be,ci),(Pr||ze.receiveShadow!==Ee.receiveShadow)&&(ze.receiveShadow=Ee.receiveShadow,Ct.setValue($,"receiveShadow",Ee.receiveShadow)),ve.isMeshGouraudMaterial&&ve.envMap!==null&&(hi.envMap.value=Ze,hi.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),Pr&&(Ct.setValue($,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&(sn=ro,(yn=hi).ambientLightColor.needsUpdate=sn,yn.lightProbe.needsUpdate=sn,yn.directionalLights.needsUpdate=sn,yn.directionalLightShadows.needsUpdate=sn,yn.pointLights.needsUpdate=sn,yn.pointLightShadows.needsUpdate=sn,yn.spotLights.needsUpdate=sn,yn.spotLightShadows.needsUpdate=sn,yn.rectAreaLights.needsUpdate=sn,yn.hemisphereLights.needsUpdate=sn),tt&&ve.fog===!0&&Le.refreshFogUniforms(hi,tt),Le.refreshMaterialUniforms(hi,ve,le,Me,X),er.upload($,Es(ze),hi,K));var yn,sn;if(ve.isShaderMaterial&&ve.uniformsNeedUpdate===!0&&(er.upload($,Es(ze),hi,K),ve.uniformsNeedUpdate=!1),ve.isSpriteMaterial&&Ct.setValue($,"center",Ee.center),Ct.setValue($,"modelViewMatrix",Ee.modelViewMatrix),Ct.setValue($,"normalMatrix",Ee.normalMatrix),Ct.setValue($,"modelMatrix",Ee.matrixWorld),ve.isShaderMaterial||ve.isRawShaderMaterial){let qt=ve.uniformsGroups;for(let ao=0,vd=qt.length;ao<vd;ao++)if(re.isWebGL2){let Pc=qt[ao];Cn.update(Pc,ci),Cn.bind(Pc,ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ci}(P,B,ie,me,m);S.setMaterial(me,A);let W=ie.index,G=1;if(me.wireframe===!0){if(W=Pe.getWireframeAttribute(ie),W===void 0)return;G=2}let ee=ie.drawRange,se=ie.attributes.position,pe=ee.start*G,he=(ee.start+ee.count)*G;M!==null&&(pe=Math.max(pe,M.start*G),he=Math.min(he,(M.start+M.count)*G)),W!==null?(pe=Math.max(pe,0),he=Math.min(he,W.count)):se!=null&&(pe=Math.max(pe,0),he=Math.min(he,se.count));let ge=he-pe;if(ge<0||ge===1/0)return;let Ae;et.setup(m,me,D,ie,W);let xe=jn;if(W!==null&&(Ae=we.get(W),xe=Ui,xe.setIndex(Ae)),m.isMesh)me.wireframe===!0?(S.setLineWidth(me.wireframeLinewidth*q()),xe.setMode($.LINES)):xe.setMode($.TRIANGLES);else if(m.isLine){let Re=me.linewidth;Re===void 0&&(Re=1),S.setLineWidth(Re*q()),m.isLineSegments?xe.setMode($.LINES):m.isLineLoop?xe.setMode($.LINE_LOOP):xe.setMode($.LINE_STRIP)}else m.isPoints?xe.setMode($.POINTS):m.isSprite&&xe.setMode($.TRIANGLES);if(m.isBatchedMesh)xe.renderMultiDraw(m._multiDrawStarts,m._multiDrawCounts,m._multiDrawCount);else if(m.isInstancedMesh)xe.renderInstances(pe,ge,m.count);else if(ie.isInstancedBufferGeometry){let Re=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,De=Math.min(ie.instanceCount,Re);xe.renderInstances(pe,ge,De)}else xe.render(pe,ge)},this.compile=function(P,B,ie=null){ie===null&&(ie=P),f=pt.get(ie),f.init(),_.push(f),ie.traverseVisible(function(m){m.isLight&&m.layers.test(B.layers)&&(f.pushLight(m),m.castShadow&&f.pushShadow(m))}),P!==ie&&P.traverseVisible(function(m){m.isLight&&m.layers.test(B.layers)&&(f.pushLight(m),m.castShadow&&f.pushShadow(m))}),f.setupLights(x._useLegacyLights);let me=new Set;return P.traverse(function(m){let M=m.material;if(M)if(Array.isArray(M))for(let A=0;A<M.length;A++){let D=M[A];_s(D,ie,m),me.add(D)}else _s(M,ie,m),me.add(M)}),_.pop(),f=null,me},this.compileAsync=function(P,B,ie=null){let me=this.compile(P,B,ie);return new Promise(m=>{function M(){me.forEach(function(A){Z.get(A).currentProgram.isReady()&&me.delete(A)}),me.size!==0?setTimeout(M,10):m(P)}oe.get("KHR_parallel_shader_compile")!==null?M():setTimeout(M,10)})};let Cr=null;function xs(){Pn.stop()}function ys(){Pn.start()}let Pn=new yu;function Ms(P,B,ie,me){if(P.visible===!1)return;if(P.layers.test(B.layers)){if(P.isGroup)ie=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(B);else if(P.isLight)f.pushLight(P),P.castShadow&&f.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||T.intersectsSprite(P)){me&&F.setFromMatrixPosition(P.matrixWorld).applyMatrix4(U);let M=Ne.update(P),A=P.material;A.visible&&v.push(P,M,A,ie,F.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||T.intersectsObject(P))){let M=Ne.update(P),A=P.material;if(me&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),F.copy(P.boundingSphere.center)):(M.boundingSphere===null&&M.computeBoundingSphere(),F.copy(M.boundingSphere.center)),F.applyMatrix4(P.matrixWorld).applyMatrix4(U)),Array.isArray(A)){let D=M.groups;for(let W=0,G=D.length;W<G;W++){let ee=D[W],se=A[ee.materialIndex];se&&se.visible&&v.push(P,M,se,ie,F.z,ee)}}else A.visible&&v.push(P,M,A,ie,F.z,null)}}let m=P.children;for(let M=0,A=m.length;M<A;M++)Ms(m[M],B,ie,me)}function Ss(P,B,ie,me){let m=P.opaque,M=P.transmissive,A=P.transparent;f.setupLightsView(ie),E===!0&&Ue.setGlobalState(x.clippingPlanes,ie),M.length>0&&function(D,W,G,ee){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;let pe=re.isWebGL2;X===null&&(X=new dt(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?ht:yi,minFilter:Vr,samples:pe?4:0})),x.getDrawingBufferSize(Q),pe?X.setSize(Q.x,Q.y):X.setSize(Qo(Q.x),Qo(Q.y));let he=x.getRenderTarget();x.setRenderTarget(X),x.getClearColor(Y),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear();let ge=x.toneMapping;x.toneMapping=ti,Di(D,G,ee),K.updateMultisampleRenderTarget(X),K.updateRenderTargetMipmap(X);let Ae=!1;for(let xe=0,Re=W.length;xe<Re;xe++){let De=W[xe],be=De.object,ve=De.geometry,Ee=De.material,tt=De.group;if(Ee.side===2&&be.layers.test(ee.layers)){let it=Ee.side;Ee.side=zt,Ee.needsUpdate=!0,bs(be,G,ee,ve,Ee,tt),Ee.side=it,Ee.needsUpdate=!0,Ae=!0}}Ae===!0&&(K.updateMultisampleRenderTarget(X),K.updateRenderTargetMipmap(X)),x.setRenderTarget(he),x.setClearColor(Y,j),x.toneMapping=ge}(m,M,B,ie),me&&S.viewport(H.copy(me)),m.length>0&&Di(m,B,ie),M.length>0&&Di(M,B,ie),A.length>0&&Di(A,B,ie),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Di(P,B,ie){let me=B.isScene===!0?B.overrideMaterial:null;for(let m=0,M=P.length;m<M;m++){let A=P[m],D=A.object,W=A.geometry,G=me===null?A.material:me,ee=A.group;D.layers.test(ie.layers)&&bs(D,B,ie,W,G,ee)}}function bs(P,B,ie,me,m,M){P.onBeforeRender(x,B,ie,me,m,M),P.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),m.onBeforeRender(x,B,ie,me,P,M),m.transparent===!0&&m.side===2&&m.forceSinglePass===!1?(m.side=zt,m.needsUpdate=!0,x.renderBufferDirect(ie,B,me,m,P,M),m.side=ii,m.needsUpdate=!0,x.renderBufferDirect(ie,B,me,m,P,M),m.side=2):x.renderBufferDirect(ie,B,me,m,P,M),P.onAfterRender(x,B,ie,me,m,M)}function Ln(P,B,ie){B.isScene!==!0&&(B=z);let me=Z.get(P),m=f.state.lights,M=f.state.shadowsArray,A=m.state.version,D=Ce.getParameters(P,m.state,M,B,ie),W=Ce.getProgramCacheKey(D),G=me.programs;me.environment=P.isMeshStandardMaterial?B.environment:null,me.fog=B.fog,me.envMap=(P.isMeshStandardMaterial?Se:de).get(P.envMap||me.environment),G===void 0&&(P.addEventListener("dispose",vs),G=new Map,me.programs=G);let ee=G.get(W);if(ee!==void 0){if(me.currentProgram===ee&&me.lightsStateVersion===A)return Yn(P,D),ee}else D.uniforms=Ce.getUniforms(P),P.onBuild(ie,D,x),P.onBeforeCompile(D,x),ee=Ce.acquireProgram(D,W),G.set(W,ee),me.uniforms=D.uniforms;let se=me.uniforms;return(P.isShaderMaterial||P.isRawShaderMaterial)&&P.clipping!==!0||(se.clippingPlanes=Ue.uniform),Yn(P,D),me.needsLights=function(pe){return pe.isMeshLambertMaterial||pe.isMeshToonMaterial||pe.isMeshPhongMaterial||pe.isMeshStandardMaterial||pe.isShadowMaterial||pe.isShaderMaterial&&pe.lights===!0}(P),me.lightsStateVersion=A,me.needsLights&&(se.ambientLightColor.value=m.state.ambient,se.lightProbe.value=m.state.probe,se.directionalLights.value=m.state.directional,se.directionalLightShadows.value=m.state.directionalShadow,se.spotLights.value=m.state.spot,se.spotLightShadows.value=m.state.spotShadow,se.rectAreaLights.value=m.state.rectArea,se.ltc_1.value=m.state.rectAreaLTC1,se.ltc_2.value=m.state.rectAreaLTC2,se.pointLights.value=m.state.point,se.pointLightShadows.value=m.state.pointShadow,se.hemisphereLights.value=m.state.hemi,se.directionalShadowMap.value=m.state.directionalShadowMap,se.directionalShadowMatrix.value=m.state.directionalShadowMatrix,se.spotShadowMap.value=m.state.spotShadowMap,se.spotLightMatrix.value=m.state.spotLightMatrix,se.spotLightMap.value=m.state.spotLightMap,se.pointShadowMap.value=m.state.pointShadowMap,se.pointShadowMatrix.value=m.state.pointShadowMatrix),me.currentProgram=ee,me.uniformsList=null,ee}function Es(P){if(P.uniformsList===null){let B=P.currentProgram.getUniforms();P.uniformsList=er.seqWithValue(B.seq,P.uniforms)}return P.uniformsList}function Yn(P,B){let ie=Z.get(P);ie.outputColorSpace=B.outputColorSpace,ie.batching=B.batching,ie.instancing=B.instancing,ie.instancingColor=B.instancingColor,ie.skinning=B.skinning,ie.morphTargets=B.morphTargets,ie.morphNormals=B.morphNormals,ie.morphColors=B.morphColors,ie.morphTargetsCount=B.morphTargetsCount,ie.numClippingPlanes=B.numClippingPlanes,ie.numIntersection=B.numClipIntersection,ie.vertexAlphas=B.vertexAlphas,ie.vertexTangents=B.vertexTangents,ie.toneMapping=B.toneMapping}Pn.setAnimationLoop(function(P){Cr&&Cr(P)}),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(P){Cr=P,St.setAnimationLoop(P),P===null?Pn.stop():Pn.start()},St.addEventListener("sessionstart",xs),St.addEventListener("sessionend",ys),this.render=function(P,B){if(B!==void 0&&B.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(w===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(St.cameraAutoUpdate===!0&&St.updateCamera(B),B=St.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,B,C),f=pt.get(P,_.length),f.init(),_.push(f),U.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),T.setFromProjectionMatrix(U),V=this.localClippingEnabled,E=Ue.init(this.clippingPlanes,V),v=Be.get(P,y.length),v.init(),y.push(v),Ms(P,B,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(te,ae),this.info.render.frame++,E===!0&&Ue.beginShadows();let ie=f.state.shadowsArray;if(We.render(ie,P,B),E===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ge.render(v,P),f.setupLights(x._useLegacyLights),B.isArrayCamera){let me=B.cameras;for(let m=0,M=me.length;m<M;m++){let A=me[m];Ss(v,P,A,A.viewport)}}else Ss(v,P,B);C!==null&&(K.updateMultisampleRenderTarget(C),K.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(x,P,B),et.resetDefaultState(),N=-1,O=null,_.pop(),f=_.length>0?_[_.length-1]:null,y.pop(),v=y.length>0?y[y.length-1]:null},this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,B,ie){Z.get(P.texture).__webglTexture=B,Z.get(P.depthTexture).__webglTexture=ie;let me=Z.get(P);me.__hasExternalTextures=!0,me.__hasExternalTextures&&(me.__autoAllocateDepthBuffer=ie===void 0,me.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),me.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,B){let ie=Z.get(P);ie.__webglFramebuffer=B,ie.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(P,B=0,ie=0){C=P,L=B,b=ie;let me=!0,m=null,M=!1,A=!1;if(P){let D=Z.get(P);D.__useDefaultFramebuffer!==void 0?(S.bindFramebuffer($.FRAMEBUFFER,null),me=!1):D.__webglFramebuffer===void 0?K.setupRenderTarget(P):D.__hasExternalTextures&&K.rebindTextures(P,Z.get(P.texture).__webglTexture,Z.get(P.depthTexture).__webglTexture);let W=P.texture;(W.isData3DTexture||W.isDataArrayTexture||W.isCompressedArrayTexture)&&(A=!0);let G=Z.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(m=Array.isArray(G[B])?G[B][ie]:G[B],M=!0):m=re.isWebGL2&&P.samples>0&&K.useMultisampledRTT(P)===!1?Z.get(P).__webglMultisampledFramebuffer:Array.isArray(G)?G[ie]:G,H.copy(P.viewport),J.copy(P.scissor),I=P.scissorTest}else H.copy(k).multiplyScalar(le).floor(),J.copy(ne).multiplyScalar(le).floor(),I=_e;if(S.bindFramebuffer($.FRAMEBUFFER,m)&&re.drawBuffers&&me&&S.drawBuffers(P,m),S.viewport(H),S.scissor(J),S.setScissorTest(I),M){let D=Z.get(P.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+B,D.__webglTexture,ie)}else if(A){let D=Z.get(P.texture),W=B||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,D.__webglTexture,ie||0,W)}N=-1},this.readRenderTargetPixels=function(P,B,ie,me,m,M,A){if(!P||!P.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let D=Z.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&A!==void 0&&(D=D[A]),D){S.bindFramebuffer($.FRAMEBUFFER,D);try{let W=P.texture,G=W.format,ee=W.type;if(G!==Zt&&Mt.convert(G)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let se=ee===ht&&(oe.has("EXT_color_buffer_half_float")||re.isWebGL2&&oe.has("EXT_color_buffer_float"));if(!(ee===yi||Mt.convert(ee)===$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)||ee===Kt&&(re.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float"))||se))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");B>=0&&B<=P.width-me&&ie>=0&&ie<=P.height-m&&$.readPixels(B,ie,me,m,Mt.convert(G),Mt.convert(ee),M)}finally{let W=C!==null?Z.get(C).__webglFramebuffer:null;S.bindFramebuffer($.FRAMEBUFFER,W)}}},this.copyFramebufferToTexture=function(P,B,ie=0){let me=Math.pow(2,-ie),m=Math.floor(B.image.width*me),M=Math.floor(B.image.height*me);K.setTexture2D(B,0),$.copyTexSubImage2D($.TEXTURE_2D,ie,0,0,P.x,P.y,m,M),S.unbindTexture()},this.copyTextureToTexture=function(P,B,ie,me=0){let m=B.image.width,M=B.image.height,A=Mt.convert(ie.format),D=Mt.convert(ie.type);K.setTexture2D(ie,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,ie.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,ie.unpackAlignment),B.isDataTexture?$.texSubImage2D($.TEXTURE_2D,me,P.x,P.y,m,M,A,D,B.image.data):B.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,me,P.x,P.y,B.mipmaps[0].width,B.mipmaps[0].height,A,B.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,me,P.x,P.y,A,D,B.image),me===0&&ie.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),S.unbindTexture()},this.copyTextureToTexture3D=function(P,B,ie,me,m=0){if(x.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let M=P.max.x-P.min.x+1,A=P.max.y-P.min.y+1,D=P.max.z-P.min.z+1,W=Mt.convert(me.format),G=Mt.convert(me.type),ee;if(me.isData3DTexture)K.setTexture3D(me,0),ee=$.TEXTURE_3D;else{if(!me.isDataArrayTexture&&!me.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");K.setTexture2DArray(me,0),ee=$.TEXTURE_2D_ARRAY}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,me.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,me.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,me.unpackAlignment);let se=$.getParameter($.UNPACK_ROW_LENGTH),pe=$.getParameter($.UNPACK_IMAGE_HEIGHT),he=$.getParameter($.UNPACK_SKIP_PIXELS),ge=$.getParameter($.UNPACK_SKIP_ROWS),Ae=$.getParameter($.UNPACK_SKIP_IMAGES),xe=ie.isCompressedTexture?ie.mipmaps[m]:ie.image;$.pixelStorei($.UNPACK_ROW_LENGTH,xe.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,xe.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,P.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,P.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,P.min.z),ie.isDataTexture||ie.isData3DTexture?$.texSubImage3D(ee,m,B.x,B.y,B.z,M,A,D,W,G,xe.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(ee,m,B.x,B.y,B.z,M,A,D,W,xe.data)):$.texSubImage3D(ee,m,B.x,B.y,B.z,M,A,D,W,G,xe),$.pixelStorei($.UNPACK_ROW_LENGTH,se),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,pe),$.pixelStorei($.UNPACK_SKIP_PIXELS,he),$.pixelStorei($.UNPACK_SKIP_ROWS,ge),$.pixelStorei($.UNPACK_SKIP_IMAGES,Ae),m===0&&me.generateMipmaps&&$.generateMipmap(ee),S.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?K.setTextureCube(P,0):P.isData3DTexture?K.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?K.setTexture2DArray(P,0):K.setTexture2D(P,0),S.unbindTexture()},this.resetState=function(){L=0,b=0,C=null,S.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===tc?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===Fa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?bi:mu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===bi?gt:Qt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},dl=class extends qr{};dl.prototype.isWebGL1Renderer=!0;var xa=class r{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ya=class extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Rm=new R;var Cm=new R,Pm=new R,Lm=new R,Im=new ce,Um=new ce,Dm=new He,Nm=new R,Om=new R,Fm=new R,Bm=new ce,zm=new ce,Hm=new ce;var Gm=new R,km=new R;var Vm=new R,Wm=new Qe,Xm=new Qe,jm=new R,qm=new He,Ym=new R,Zm=new En,Jm=new He,Km=new ar;var pl=class extends Ht{constructor(e=null,t=1,n=1,i,s,a,o,c,l=1003,h=1003,d,u){super(null,a,o,c,l,h,i,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qm=new He,$m=new He;var eg=new He,tg=new He;var ng=new bn,ig=new He,rg=new Fe,sg=new En;var fl=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});let s=n[this.index];i.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}};var ag=new He,og=new He,lg=new He,cg=new He,hg=new lr,ug=new bn,dg=new En,pg=new R,fg=new fl,mg=new Fe;var gg=new R,vg=new R,_g=new He,xg=new ar,yg=new En;var Mg=new R,Sg=new R;var Yr=class extends si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},jh=new He,ml=new ar,qs=new En,Ys=new R,Ma=class extends wt{constructor(e=new rt,t=new Yr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(i),qs.radius+=s,e.ray.intersectsSphere(qs)===!1)return;jh.copy(i).invert(),ml.copy(e.ray).applyMatrix4(jh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null)for(let d=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);d<u;d++){let p=l.getX(d);Ys.fromBufferAttribute(h,p),qh(Ys,p,c,i,e,t,this)}else for(let d=Math.max(0,a.start),u=Math.min(h.count,a.start+a.count);d<u;d++)Ys.fromBufferAttribute(h,d),qh(Ys,d,c,i,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};function qh(r,e,t,n,i,s,a){let o=ml.distanceSqToPoint(r);if(o<t){let c=new R;ml.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var Sa=class extends Ht{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},en=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,c=0,l=s-1;for(;c<=l;)if(i=Math.floor(c+(l-c)/2),o=n[i]-a,o<0)c=i+1;else{if(!(o>0)){l=i;break}l=i-1}if(i=l,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new ce:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new R,i=[],s=[],a=[],o=new R,c=new He;for(let p=0;p<=e;p++){let g=p/e;i[p]=this.getTangentAt(g,new R)}s[0]=new R,a[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(vt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(vt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Zr=class extends en{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){let n=t||new ce,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,p=l-this.aY;c=u*h-p*d+this.aX,l=u*d+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},gl=class extends Zr{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function rc(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,d){let u=(a-s)/l-(o-s)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,p*=h,i(a,o,u,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var Zs=new R,Bo=new rc,zo=new rc,Ho=new rc,vl=class extends en{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=i[(l-1)%s]:(Zs.subVectors(i[0],i[1]).add(i[0]),o=Zs);let d=i[l%s],u=i[(l+1)%s];if(this.closed||l+2<s?c=i[(l+2)%s]:(Zs.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=Zs),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(o.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(u),p),f=Math.pow(u.distanceToSquared(c),p);v<1e-4&&(v=1),g<1e-4&&(g=v),f<1e-4&&(f=v),Bo.initNonuniformCatmullRom(o.x,d.x,u.x,c.x,g,v,f),zo.initNonuniformCatmullRom(o.y,d.y,u.y,c.y,g,v,f),Ho.initNonuniformCatmullRom(o.z,d.z,u.z,c.z,g,v,f)}else this.curveType==="catmullrom"&&(Bo.initCatmullRom(o.x,d.x,u.x,c.x,this.tension),zo.initCatmullRom(o.y,d.y,u.y,c.y,this.tension),Ho.initCatmullRom(o.z,d.z,u.z,c.z,this.tension));return n.set(Bo.calc(h),zo.calc(h),Ho.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Yh(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function Hr(r,e,t,n){return function(i,s){let a=1-i;return a*a*s}(r,e)+function(i,s){return 2*(1-i)*i*s}(r,t)+function(i,s){return i*i*s}(r,n)}function Gr(r,e,t,n,i){return function(s,a){let o=1-s;return o*o*o*a}(r,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(r,t)+function(s,a){return 3*(1-s)*s*s*a}(r,n)+function(s,a){return s*s*s*a}(r,i)}var ba=class extends en{constructor(e=new ce,t=new ce,n=new ce,i=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ce){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Gr(e,i.x,s.x,a.x,o.x),Gr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_l=class extends en{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Gr(e,i.x,s.x,a.x,o.x),Gr(e,i.y,s.y,a.y,o.y),Gr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ea=class extends en{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xl=class extends en{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wa=class extends en{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Hr(e,i.x,s.x,a.x),Hr(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ta=class extends en{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Hr(e,i.x,s.x,a.x),Hr(e,i.y,s.y,a.y),Hr(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ur=class extends en{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Yh(o,c.x,l.x,h.x,d.x),Yh(o,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ce().fromArray(i))}return this}},Aa=Object.freeze({__proto__:null,ArcCurve:gl,CatmullRomCurve3:vl,CubicBezierCurve:ba,CubicBezierCurve3:_l,EllipseCurve:Zr,LineCurve:Ea,LineCurve3:xl,QuadraticBezierCurve:wa,QuadraticBezierCurve3:Ta,SplineCurve:ur}),yl=class extends en{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Aa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Aa[i.type]().fromJSON(i))}return this}},Jr=class extends yl{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ea(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new wa(this.currentPoint.clone(),new ce(e,t),new ce(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new ba(this.currentPoint.clone(),new ce(e,t),new ce(n,i),new ce(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ur(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,a,o,c),this}absellipse(e,t,n,i,s,a,o,c){let l=new Zr(e,t,n,i,s,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},dr=class r extends rt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=vt(i,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,d=new R,u=new ce,p=new R,g=new R,v=new R,f=0,y=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:f=e[_+1].x-e[_].x,y=e[_+1].y-e[_].y,p.x=1*y,p.y=-f,p.z=0*y,v.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:f=e[_+1].x-e[_].x,y=e[_+1].y-e[_].y,p.x=1*y,p.y=-f,p.z=0*y,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),c.push(p.x,p.y,p.z),v.copy(g)}for(let _=0;_<=t;_++){let x=n+_*h*i,w=Math.sin(x),L=Math.cos(x);for(let b=0;b<=e.length-1;b++){d.x=e[b].x*w,d.y=e[b].y,d.z=e[b].x*L,a.push(d.x,d.y,d.z),u.x=_/t,u.y=b/(e.length-1),o.push(u.x,u.y);let C=c[3*b+0]*w,N=c[3*b+1],O=c[3*b+0]*L;l.push(C,N,O)}}for(let _=0;_<t;_++)for(let x=0;x<e.length-1;x++){let w=x+_*e.length,L=w,b=w+e.length,C=w+e.length+1,N=w+1;s.push(L,b,N),s.push(C,N,b)}this.setIndex(s),this.setAttribute("position",new Oe(a,3)),this.setAttribute("uv",new Oe(o,2)),this.setAttribute("normal",new Oe(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Kr=class r extends dr{constructor(e=1,t=1,n=4,i=8){let s=new Jr;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},pr=class r extends rt{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new R,h=new ce;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=n+d/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(o,3)),this.setAttribute("uv",new Oe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},wn=class r extends rt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],d=[],u=[],p=[],g=0,v=[],f=n/2,y=0;function _(x){let w=g,L=new ce,b=new R,C=0,N=x===!0?e:t,O=x===!0?1:-1;for(let J=1;J<=i;J++)d.push(0,f*O,0),u.push(0,O,0),p.push(.5,.5),g++;let H=g;for(let J=0;J<=i;J++){let I=J/i*c+o,Y=Math.cos(I),j=Math.sin(I);b.x=N*j,b.y=f*O,b.z=N*Y,d.push(b.x,b.y,b.z),u.push(0,O,0),L.x=.5*Y+.5,L.y=.5*j*O+.5,p.push(L.x,L.y),g++}for(let J=0;J<i;J++){let I=w+J,Y=H+J;x===!0?h.push(Y,Y+1,I):h.push(Y+1,Y,I),C+=3}l.addGroup(y,C,x===!0?1:2),y+=C}(function(){let x=new R,w=new R,L=0,b=(t-e)/n;for(let C=0;C<=s;C++){let N=[],O=C/s,H=O*(t-e)+e;for(let J=0;J<=i;J++){let I=J/i,Y=I*c+o,j=Math.sin(Y),fe=Math.cos(Y);w.x=H*j,w.y=-O*n+f,w.z=H*fe,d.push(w.x,w.y,w.z),x.set(j,b,fe).normalize(),u.push(x.x,x.y,x.z),p.push(I,1-O),N.push(g++)}v.push(N)}for(let C=0;C<i;C++)for(let N=0;N<s;N++){let O=v[N][C],H=v[N+1][C],J=v[N+1][C+1],I=v[N][C+1];h.push(O,H,I),h.push(H,J,I),L+=6}l.addGroup(y,L,0),y+=L})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Oe(d,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ml=class r extends wn{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ei=class r extends rt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(u,p,g,v){let f=v+1,y=[];for(let _=0;_<=f;_++){y[_]=[];let x=u.clone().lerp(g,_/f),w=p.clone().lerp(g,_/f),L=f-_;for(let b=0;b<=L;b++)y[_][b]=b===0&&_===f?x:x.clone().lerp(w,b/L)}for(let _=0;_<f;_++)for(let x=0;x<2*(f-_)-1;x++){let w=Math.floor(x/2);x%2==0?(c(y[_][w+1]),c(y[_+1][w]),c(y[_][w])):(c(y[_][w+1]),c(y[_+1][w+1]),c(y[_+1][w]))}}function c(u){s.push(u.x,u.y,u.z)}function l(u,p){let g=3*u;p.x=e[g+0],p.y=e[g+1],p.z=e[g+2]}function h(u,p,g,v){v<0&&u.x===1&&(a[p]=u.x-1),g.x===0&&g.z===0&&(a[p]=v/2/Math.PI+.5)}function d(u){return Math.atan2(u.z,-u.x)}(function(u){let p=new R,g=new R,v=new R;for(let f=0;f<t.length;f+=3)l(t[f+0],p),l(t[f+1],g),l(t[f+2],v),o(p,g,v,u)})(i),function(u){let p=new R;for(let g=0;g<s.length;g+=3)p.x=s[g+0],p.y=s[g+1],p.z=s[g+2],p.normalize().multiplyScalar(u),s[g+0]=p.x,s[g+1]=p.y,s[g+2]=p.z}(n),function(){let u=new R;for(let g=0;g<s.length;g+=3){u.x=s[g+0],u.y=s[g+1],u.z=s[g+2];let v=d(u)/2/Math.PI+.5,f=(p=u,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(v,1-f)}var p;(function(){let g=new R,v=new R,f=new R,y=new R,_=new ce,x=new ce,w=new ce;for(let L=0,b=0;L<s.length;L+=9,b+=6){g.set(s[L+0],s[L+1],s[L+2]),v.set(s[L+3],s[L+4],s[L+5]),f.set(s[L+6],s[L+7],s[L+8]),_.set(a[b+0],a[b+1]),x.set(a[b+2],a[b+3]),w.set(a[b+4],a[b+5]),y.copy(g).add(v).add(f).divideScalar(3);let C=d(y);h(_,b+0,g,C),h(x,b+2,v,C),h(w,b+4,f,C)}})(),function(){for(let g=0;g<a.length;g+=6){let v=a[g+0],f=a[g+2],y=a[g+4],_=Math.max(v,f,y),x=Math.min(v,f,y);_>.9&&x<.1&&(v<.2&&(a[g+0]+=1),f<.2&&(a[g+2]+=1),y<.2&&(a[g+4]+=1))}}()}(),this.setAttribute("position",new Oe(s,3)),this.setAttribute("normal",new Oe(s.slice(),3)),this.setAttribute("uv",new Oe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},Sl=class r extends Ei{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Js=new R,Ks=new R,Go=new R,Qs=new xi,bl=class extends rt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(na*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:v,b:f,c:y}=Qs;if(v.fromBufferAttribute(o,l[0]),f.fromBufferAttribute(o,l[1]),y.fromBufferAttribute(o,l[2]),Qs.getNormal(Go),d[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,d[1]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,d[2]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,d[0]!==d[1]&&d[1]!==d[2]&&d[2]!==d[0])for(let _=0;_<3;_++){let x=(_+1)%3,w=d[_],L=d[x],b=Qs[h[_]],C=Qs[h[x]],N=`${w}_${L}`,O=`${L}_${w}`;O in u&&u[O]?(Go.dot(u[O].normal)<=s&&(p.push(b.x,b.y,b.z),p.push(C.x,C.y,C.z)),u[O]=null):N in u||(u[N]={index0:l[_],index1:l[x],normal:Go.clone()})}}for(let g in u)if(u[g]){let{index0:v,index1:f}=u[g];Js.fromBufferAttribute(o,v),Ks.fromBufferAttribute(o,f),p.push(Js.x,Js.y,Js.z),p.push(Ks.x,Ks.y,Ks.z)}this.setAttribute("position",new Oe(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},fr=class extends Jr{constructor(e){super(e),this.uuid=yr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Jr().fromJSON(i))}return this}},vf=function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=Zh(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l,h,d,u,p;if(n&&(s=function(g,v,f,y){let _=[],x,w,L,b,C;for(x=0,w=v.length;x<w;x++)L=v[x]*y,b=x<w-1?v[x+1]*y:g.length,C=Zh(g,L,b,y,!1),C===C.next&&(C.steiner=!0),_.push(wf(C));for(_.sort(Sf),x=0;x<_.length;x++)f=bf(_[x],f);return f}(r,e,s,t)),r.length>80*t){o=l=r[0],c=h=r[1];for(let g=t;g<i;g+=t)d=r[g],u=r[g+1],d<o&&(o=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return Qr(s,a,t,o,c,p,0),a};function Zh(r,e,t,n,i){let s,a;if(i===function(o,c,l,h){let d=0;for(let u=c,p=l-h;u<l;u+=h)d+=(o[p]-o[u])*(o[u+1]+o[p+1]),p=u;return d}(r,e,t,n)>0)for(s=e;s<t;s+=n)a=Jh(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=Jh(s,r[s],r[s+1],a);return a&&za(a,a.next)&&(es(a),a=a.next),a}function wi(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!za(n,n.next)&&lt(n.prev,n,n.next)!==0)n=n.next;else{if(es(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Qr(r,e,t,n,i,s,a){if(!r)return;!a&&s&&function(h,d,u,p){let g=h;do g.z===0&&(g.z=El(g.x,g.y,d,u,p)),g.prevZ=g.prev,g.nextZ=g.next,g=g.next;while(g!==h);g.prevZ.nextZ=null,g.prevZ=null,function(v){let f,y,_,x,w,L,b,C,N=1;do{for(y=v,v=null,w=null,L=0;y;){for(L++,_=y,b=0,f=0;f<N&&(b++,_=_.nextZ,_);f++);for(C=N;b>0||C>0&&_;)b!==0&&(C===0||!_||y.z<=_.z)?(x=y,y=y.nextZ,b--):(x=_,_=_.nextZ,C--),w?w.nextZ=x:v=x,x.prevZ=w,w=x;y=_}w.nextZ=null,N*=2}while(L>1)}(g)}(r,n,i,s);let o,c,l=r;for(;r.prev!==r.next;)if(o=r.prev,c=r.next,s?xf(r,n,i,s):_f(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),es(r),r=c.next,l=c.next;else if((r=c)===l){a?a===1?Qr(r=yf(wi(r),e,t),e,t,n,i,s,2):a===2&&Mf(r,e,t,n,i,s):Qr(wi(r),e,t,n,i,s,1);break}}function _f(r){let e=r.prev,t=r,n=r.next;if(lt(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=i<s?i<a?i:a:s<a?s:a,d=o<c?o<l?o:l:c<l?c:l,u=i>s?i>a?i:a:s>a?s:a,p=o>c?o>l?o:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&Qi(i,o,s,c,a,l,g.x,g.y)&&lt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function xf(r,e,t,n){let i=r.prev,s=r,a=r.next;if(lt(i,s,a)>=0)return!1;let o=i.x,c=s.x,l=a.x,h=i.y,d=s.y,u=a.y,p=o<c?o<l?o:l:c<l?c:l,g=h<d?h<u?h:u:d<u?d:u,v=o>c?o>l?o:l:c>l?c:l,f=h>d?h>u?h:u:d>u?d:u,y=El(p,g,e,t,n),_=El(v,f,e,t,n),x=r.prevZ,w=r.nextZ;for(;x&&x.z>=y&&w&&w.z<=_;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=f&&x!==i&&x!==a&&Qi(o,h,c,d,l,u,x.x,x.y)&&lt(x.prev,x,x.next)>=0||(x=x.prevZ,w.x>=p&&w.x<=v&&w.y>=g&&w.y<=f&&w!==i&&w!==a&&Qi(o,h,c,d,l,u,w.x,w.y)&&lt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;x&&x.z>=y;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=f&&x!==i&&x!==a&&Qi(o,h,c,d,l,u,x.x,x.y)&&lt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;w&&w.z<=_;){if(w.x>=p&&w.x<=v&&w.y>=g&&w.y<=f&&w!==i&&w!==a&&Qi(o,h,c,d,l,u,w.x,w.y)&&lt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function yf(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!za(i,s)&&Tu(i,n,n.next,s)&&$r(i,s)&&$r(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),es(n),es(n.next),n=r=s),n=n.next}while(n!==r);return wi(n)}function Mf(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Tf(a,o)){let c=Au(a,o);return a=wi(a,a.next),c=wi(c,c.next),Qr(a,e,t,n,i,s,0),void Qr(c,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function Sf(r,e){return r.x-e.x}function bf(r,e){let t=function(i,s){let a,o=s,c=-1/0,l=i.x,h=i.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let f=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(f<=l&&f>c&&(c=f,a=o.x<o.next.x?o:o.next,f===l))return a}o=o.next}while(o!==s);if(!a)return null;let d=a,u=a.x,p=a.y,g,v=1/0;o=a;do l>=o.x&&o.x>=u&&l!==o.x&&Qi(h<p?l:c,h,u,p,h<p?c:l,h,o.x,o.y)&&(g=Math.abs(h-o.y)/(l-o.x),$r(o,i)&&(g<v||g===v&&(o.x>a.x||o.x===a.x&&Ef(a,o)))&&(a=o,v=g)),o=o.next;while(o!==d);return a}(r,e);if(!t)return e;let n=Au(t,r);return wi(n,n.next),wi(t,t.next)}function Ef(r,e){return lt(r.prev,r,e.prev)<0&&lt(e.next,r,r.next)<0}function El(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function wf(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Qi(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function Tf(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&Tu(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1}(r,e)&&($r(r,e)&&$r(e,r)&&function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s}(r,e)&&(lt(r.prev,r,e.prev)||lt(r,e.prev,e))||za(r,e)&&lt(r.prev,r,r.next)>0&&lt(e.prev,e,e.next)>0)}function lt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function za(r,e){return r.x===e.x&&r.y===e.y}function Tu(r,e,t,n){let i=ea(lt(r,e,t)),s=ea(lt(r,e,n)),a=ea(lt(t,n,r)),o=ea(lt(t,n,e));return i!==s&&a!==o||!(i!==0||!$s(r,t,e))||!(s!==0||!$s(r,n,e))||!(a!==0||!$s(t,r,n))||!(o!==0||!$s(t,e,n))}function $s(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ea(r){return r>0?1:r<0?-1:0}function $r(r,e){return lt(r.prev,r,r.next)<0?lt(r,e,r.next)>=0&&lt(r,r.prev,e)>=0:lt(r,e,r.prev)<0||lt(r,r.next,e)<0}function Au(r,e){let t=new wl(r.i,r.x,r.y),n=new wl(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Jh(r,e,t,n){let i=new wl(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function es(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function wl(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var ni=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Kh(e),Qh(n,e);let a=e.length;t.forEach(Kh);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,Qh(n,t[c]);let o=vf(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function Kh(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Qh(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Tl=class r extends rt{constructor(e=new fr([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,y=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Af,x,w,L,b,C,N=!1;y&&(x=y.getSpacedPoints(h),N=!0,u=!1,w=y.computeFrenetFrames(h,!1),L=new R,b=new R,C=new R),u||(f=0,p=0,g=0,v=0);let O=o.extractPoints(l),H=O.shape,J=O.holes;if(!ni.isClockWise(H)){H=H.reverse();for(let F=0,z=J.length;F<z;F++){let q=J[F];ni.isClockWise(q)&&(J[F]=q.reverse())}}let I=ni.triangulateShape(H,J),Y=H;for(let F=0,z=J.length;F<z;F++){let q=J[F];H=H.concat(q)}function j(F,z,q){return z||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(z,q)}let fe=H.length,Me=I.length;function le(F,z,q){let oe,re,S,ue=F.x-z.x,Z=F.y-z.y,K=q.x-F.x,de=q.y-F.y,Se=ue*ue+Z*Z,we=ue*de-Z*K;if(Math.abs(we)>Number.EPSILON){let Pe=Math.sqrt(Se),Ne=Math.sqrt(K*K+de*de),Ce=z.x-Z/Pe,Le=z.y+ue/Pe,Be=((q.x-de/Ne-Ce)*de-(q.y+K/Ne-Le)*K)/(ue*de-Z*K);oe=Ce+ue*Be-F.x,re=Le+Z*Be-F.y;let pt=oe*oe+re*re;if(pt<=2)return new ce(oe,re);S=Math.sqrt(pt/2)}else{let Pe=!1;ue>Number.EPSILON?K>Number.EPSILON&&(Pe=!0):ue<-Number.EPSILON?K<-Number.EPSILON&&(Pe=!0):Math.sign(Z)===Math.sign(de)&&(Pe=!0),Pe?(oe=-Z,re=ue,S=Math.sqrt(Se)):(oe=ue,re=Z,S=Math.sqrt(Se/2))}return new ce(oe/S,re/S)}let te=[];for(let F=0,z=Y.length,q=z-1,oe=F+1;F<z;F++,q++,oe++)q===z&&(q=0),oe===z&&(oe=0),te[F]=le(Y[F],Y[q],Y[oe]);let ae=[],k,ne=te.concat();for(let F=0,z=J.length;F<z;F++){let q=J[F];k=[];for(let oe=0,re=q.length,S=re-1,ue=oe+1;oe<re;oe++,S++,ue++)S===re&&(S=0),ue===re&&(ue=0),k[oe]=le(q[oe],q[S],q[ue]);ae.push(k),ne=ne.concat(k)}for(let F=0;F<f;F++){let z=F/f,q=p*Math.cos(z*Math.PI/2),oe=g*Math.sin(z*Math.PI/2)+v;for(let re=0,S=Y.length;re<S;re++){let ue=j(Y[re],te[re],oe);E(ue.x,ue.y,-q)}for(let re=0,S=J.length;re<S;re++){let ue=J[re];k=ae[re];for(let Z=0,K=ue.length;Z<K;Z++){let de=j(ue[Z],k[Z],oe);E(de.x,de.y,-q)}}}let _e=g+v;for(let F=0;F<fe;F++){let z=u?j(H[F],ne[F],_e):H[F];N?(b.copy(w.normals[0]).multiplyScalar(z.x),L.copy(w.binormals[0]).multiplyScalar(z.y),C.copy(x[0]).add(b).add(L),E(C.x,C.y,C.z)):E(z.x,z.y,0)}for(let F=1;F<=h;F++)for(let z=0;z<fe;z++){let q=u?j(H[z],ne[z],_e):H[z];N?(b.copy(w.normals[F]).multiplyScalar(q.x),L.copy(w.binormals[F]).multiplyScalar(q.y),C.copy(x[F]).add(b).add(L),E(C.x,C.y,C.z)):E(q.x,q.y,d/h*F)}for(let F=f-1;F>=0;F--){let z=F/f,q=p*Math.cos(z*Math.PI/2),oe=g*Math.sin(z*Math.PI/2)+v;for(let re=0,S=Y.length;re<S;re++){let ue=j(Y[re],te[re],oe);E(ue.x,ue.y,d+q)}for(let re=0,S=J.length;re<S;re++){let ue=J[re];k=ae[re];for(let Z=0,K=ue.length;Z<K;Z++){let de=j(ue[Z],k[Z],oe);N?E(de.x,de.y+x[h-1].y,x[h-1].x+q):E(de.x,de.y,d+q)}}}function T(F,z){let q=F.length;for(;--q>=0;){let oe=q,re=q-1;re<0&&(re=F.length-1);for(let S=0,ue=h+2*f;S<ue;S++){let Z=fe*S,K=fe*(S+1);X(z+oe+Z,z+re+Z,z+re+K,z+oe+K)}}}function E(F,z,q){c.push(F),c.push(z),c.push(q)}function V(F,z,q){U(F),U(z),U(q);let oe=i.length/3,re=_.generateTopUV(n,i,oe-3,oe-2,oe-1);Q(re[0]),Q(re[1]),Q(re[2])}function X(F,z,q,oe){U(F),U(z),U(oe),U(z),U(q),U(oe);let re=i.length/3,S=_.generateSideWallUV(n,i,re-6,re-3,re-2,re-1);Q(S[0]),Q(S[1]),Q(S[3]),Q(S[1]),Q(S[2]),Q(S[3])}function U(F){i.push(c[3*F+0]),i.push(c[3*F+1]),i.push(c[3*F+2])}function Q(F){s.push(F.x),s.push(F.y)}(function(){let F=i.length/3;if(u){let z=0,q=fe*z;for(let oe=0;oe<Me;oe++){let re=I[oe];V(re[2]+q,re[1]+q,re[0]+q)}z=h+2*f,q=fe*z;for(let oe=0;oe<Me;oe++){let re=I[oe];V(re[0]+q,re[1]+q,re[2]+q)}}else{for(let z=0;z<Me;z++){let q=I[z];V(q[2],q[1],q[0])}for(let z=0;z<Me;z++){let q=I[z];V(q[0]+fe*h,q[1]+fe*h,q[2]+fe*h)}}n.addGroup(F,i.length/3-F,0)})(),function(){let F=i.length/3,z=0;T(Y,z),z+=Y.length;for(let q=0,oe=J.length;q<oe;q++){let re=J[q];T(re,z),z+=re.length}n.addGroup(F,i.length/3-F,1)}()}this.setAttribute("position",new Oe(i,3)),this.setAttribute("uv",new Oe(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Aa[i.type]().fromJSON(i)),new r(n,e.options)}},Af={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],c=e[3*n+1],l=e[3*i],h=e[3*i+1];return[new ce(s,a),new ce(o,c),new ce(l,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*n],h=e[3*n+1],d=e[3*n+2],u=e[3*i],p=e[3*i+1],g=e[3*i+2],v=e[3*s],f=e[3*s+1],y=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new ce(a,1-c),new ce(l,1-d),new ce(u,1-g),new ce(v,1-y)]:[new ce(o,1-c),new ce(h,1-d),new ce(p,1-g),new ce(f,1-y)]}},Al=class r extends Ei{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Rl=class r extends Ei{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Cl=class r extends rt{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],c=[],l=[],h=[],d=e,u=(t-e)/(i=Math.max(1,i)),p=new R,g=new ce;for(let v=0;v<=i;v++){for(let f=0;f<=n;f++){let y=s+f/n*a;p.x=d*Math.cos(y),p.y=d*Math.sin(y),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<i;v++){let f=v*(n+1);for(let y=0;y<n;y++){let _=y+f,x=_,w=_+n+1,L=_+n+2,b=_+1;o.push(x,w,b),o.push(w,L,b)}}this.setIndex(o),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ts=class r extends rt{constructor(e=new fr([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let d=i.length/3,u=h.extractPoints(t),p=u.shape,g=u.holes;ni.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,y=g.length;f<y;f++){let _=g[f];ni.isClockWise(_)===!0&&(g[f]=_.reverse())}let v=ni.triangulateShape(p,g);for(let f=0,y=g.length;f<y;f++){let _=g[f];p=p.concat(_)}for(let f=0,y=p.length;f<y;f++){let _=p[f];i.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let f=0,y=v.length;f<y;f++){let _=v[f],x=_[0]+d,w=_[1]+d,L=_[2]+d;n.push(x,w,L),c+=3}}this.setIndex(n),this.setAttribute("position",new Oe(i,3)),this.setAttribute("normal",new Oe(s,3)),this.setAttribute("uv",new Oe(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n}(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},mr=class r extends rt{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new R,u=new R,p=[],g=[],v=[],f=[];for(let y=0;y<=n;y++){let _=[],x=y/n,w=0;y===0&&a===0?w=.5/t:y===n&&c===Math.PI&&(w=-.5/t);for(let L=0;L<=t;L++){let b=L/t;d.x=-e*Math.cos(i+b*s)*Math.sin(a+x*o),d.y=e*Math.cos(a+x*o),d.z=e*Math.sin(i+b*s)*Math.sin(a+x*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),f.push(b+w,1-x),_.push(l++)}h.push(_)}for(let y=0;y<n;y++)for(let _=0;_<t;_++){let x=h[y][_+1],w=h[y][_],L=h[y+1][_],b=h[y+1][_+1];(y!==0||a>0)&&p.push(x,w,b),(y!==n-1||c<Math.PI)&&p.push(w,L,b)}this.setIndex(p),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(v,3)),this.setAttribute("uv",new Oe(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Pl=class r extends Ei{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Ti=class r extends rt{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],h=new R,d=new R,u=new R;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){let v=g/i*s,f=p/n*Math.PI*2;d.x=(e+t*Math.cos(f))*Math.cos(v),d.y=(e+t*Math.cos(f))*Math.sin(v),d.z=t*Math.sin(f),o.push(d.x,d.y,d.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){let v=(i+1)*p+g-1,f=(i+1)*(p-1)+g-1,y=(i+1)*(p-1)+g,_=(i+1)*p+g;a.push(v,f,_),a.push(f,y,_)}this.setIndex(a),this.setAttribute("position",new Oe(o,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Ll=class r extends rt{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],c=[],l=[],h=[],d=new R,u=new R,p=new R,g=new R,v=new R,f=new R,y=new R;for(let x=0;x<=n;++x){let w=x/n*s*Math.PI*2;_(w,s,a,e,p),_(w+.01,s,a,e,g),f.subVectors(g,p),y.addVectors(g,p),v.crossVectors(f,y),y.crossVectors(v,f),v.normalize(),y.normalize();for(let L=0;L<=i;++L){let b=L/i*Math.PI*2,C=-t*Math.cos(b),N=t*Math.sin(b);d.x=p.x+(C*y.x+N*v.x),d.y=p.y+(C*y.y+N*v.y),d.z=p.z+(C*y.z+N*v.z),c.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),l.push(u.x,u.y,u.z),h.push(x/n),h.push(L/i)}}for(let x=1;x<=n;x++)for(let w=1;w<=i;w++){let L=(i+1)*(x-1)+(w-1),b=(i+1)*x+(w-1),C=(i+1)*x+w,N=(i+1)*(x-1)+w;o.push(L,b,N),o.push(b,C,N)}function _(x,w,L,b,C){let N=Math.cos(x),O=Math.sin(x),H=L/w*x,J=Math.cos(H);C.x=b*(2+J)*.5*N,C.y=b*(2+J)*O*.5,C.z=b*Math.sin(H)*.5}this.setIndex(o),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(l,3)),this.setAttribute("uv",new Oe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Il=class r extends rt{constructor(e=new Ta(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,c=new R,l=new ce,h=new R,d=[],u=[],p=[],g=[];function v(f){h=e.getPointAt(f/t,h);let y=a.normals[f],_=a.binormals[f];for(let x=0;x<=i;x++){let w=x/i*Math.PI*2,L=Math.sin(w),b=-Math.cos(w);c.x=b*y.x+L*_.x,c.y=b*y.y+L*_.y,c.z=b*y.z+L*_.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)v(f);v(s===!1?t:0),function(){for(let f=0;f<=t;f++)for(let y=0;y<=i;y++)l.x=f/t,l.y=y/i,p.push(l.x,l.y)}(),function(){for(let f=1;f<=t;f++)for(let y=1;y<=i;y++){let _=(i+1)*(f-1)+(y-1),x=(i+1)*f+(y-1),w=(i+1)*f+y,L=(i+1)*(f-1)+y;g.push(_,x,L),g.push(x,w,L)}}()})(),this.setIndex(g),this.setAttribute("position",new Oe(d,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Aa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Ul=class extends rt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new R,s=new R;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let d=c[l],u=d.start;for(let p=u,g=u+d.count;p<g;p+=3)for(let v=0;v<3;v++){let f=o.getX(p+v),y=o.getX(p+(v+1)%3);i.fromBufferAttribute(a,f),s.fromBufferAttribute(a,y),$h(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,d=3*o+(l+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),$h(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Oe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function $h(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var bg=Object.freeze({__proto__:null,BoxGeometry:Dt,CapsuleGeometry:Kr,CircleGeometry:pr,ConeGeometry:Ml,CylinderGeometry:wn,DodecahedronGeometry:Sl,EdgesGeometry:bl,ExtrudeGeometry:Tl,IcosahedronGeometry:Al,LatheGeometry:dr,OctahedronGeometry:Rl,PlaneGeometry:dn,PolyhedronGeometry:Ei,RingGeometry:Cl,ShapeGeometry:ts,SphereGeometry:mr,TetrahedronGeometry:Pl,TorusGeometry:Ti,TorusKnotGeometry:Ll,TubeGeometry:Il,WireframeGeometry:Ul});var Ra=class extends ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Tn=class extends si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Gn=class extends Tn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function ta(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Rf(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var gr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Dl=class extends gr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ih,endingEnd:ih}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case rh:s=e,o=2*t-n;break;case sh:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case rh:a=e,c=2*n-t;break;case sh:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=.5*(n-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),v=g*g,f=v*g,y=-u*f+2*u*v-u*g,_=(1+u)*f+(-1.5-2*u)*v+(-.5+u)*g+1,x=(-1-p)*f+(1.5+p)*v+.5*g,w=p*f-p*v;for(let L=0;L!==o;++L)s[L]=y*a[h+L]+_*a[l+L]+x*a[c+L]+w*a[d+L];return s}},Nl=class extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[l+u]*d+a[c+u]*h;return s}},Ol=class extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},un=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ta(t,this.TimeBufferType),this.values=ta(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ta(e.times,Array),values:ta(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ia:t=this.InterpolantFactoryMethodDiscrete;break;case ra:t=this.InterpolantFactoryMethodLinear;break;case fo:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ia;case this.InterpolantFactoryMethodLinear:return ra;case this.InterpolantFactoryMethodSmooth:return fo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Rf(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===fo,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(i)c=!0;else{let h=o*n,d=h-n,u=h+n;for(let p=0;p!==n;++p){let g=t[h+p];if(g!==t[d+p]||g!==t[u+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[h+u]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};un.prototype.TimeBufferType=Float32Array,un.prototype.ValueBufferType=Float32Array,un.prototype.DefaultInterpolation=ra;var vi=class extends un{};vi.prototype.ValueTypeName="bool",vi.prototype.ValueBufferType=Array,vi.prototype.DefaultInterpolation=ia,vi.prototype.InterpolantFactoryMethodLinear=void 0,vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fl=class extends un{};Fl.prototype.ValueTypeName="color";var Bl=class extends un{};Bl.prototype.ValueTypeName="number";var zl=class extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)Sn.slerpFlat(s,0,a,l-o,a,l,c);return s}},kr=class extends un{InterpolantFactoryMethodLinear(e){return new zl(this.times,this.values,this.getValueSize(),e)}};kr.prototype.ValueTypeName="quaternion",kr.prototype.DefaultInterpolation=ra,kr.prototype.InterpolantFactoryMethodSmooth=void 0;var _i=class extends un{};_i.prototype.ValueTypeName="string",_i.prototype.ValueBufferType=Array,_i.prototype.DefaultInterpolation=ia,_i.prototype.InterpolantFactoryMethodLinear=void 0,_i.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends un{};Hl.prototype.ValueTypeName="vector";var Ca={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Gl=class{constructor(e,t,n){let i=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){c++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,c),o===c&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},Cf=new Gl,Ai=class{constructor(e){this.manager=e!==void 0?e:Cf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ai.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fn={},kl=class extends Error{constructor(e,t){super(e),this.response=t}},Vl=class extends Ai{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Ca.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Fn[e]!==void 0)return void Fn[e].push({onLoad:t,onProgress:n,onError:i});Fn[e]=[],Fn[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Fn[e],d=l.body.getReader(),u=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=u?parseInt(u):0,g=p!==0,v=0,f=new ReadableStream({start(y){(function _(){d.read().then(({done:x,value:w})=>{if(x)y.close();else{v+=w.byteLength;let L=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let b=0,C=h.length;b<C;b++){let N=h[b];N.onProgress&&N.onProgress(L)}y.enqueue(w),_()}})})()}});return new Response(f)}throw new kl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,u=new TextDecoder(d);return l.arrayBuffer().then(p=>u.decode(p))}}}).then(l=>{Ca.add(e,l);let h=Fn[e];delete Fn[e];for(let d=0,u=h.length;d<u;d++){let p=h[d];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=Fn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Fn[e];for(let d=0,u=h.length;d<u;d++){let p=h[d];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Wl=class extends Ai{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ca.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o=Wr("img");function c(){h(),Ca.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){h(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var Pa=class extends Ai{constructor(e){super(e)}load(e,t,n,i){let s=this,a=new pl,o=new Vl(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(c){let l;try{l=s.parse(c)}catch(h){if(i===void 0)return void console.error(h);i(h)}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:hn,a.wrapT=l.wrapT!==void 0?l.wrapT:hn,a.magFilter=l.magFilter!==void 0?l.magFilter:Rt,a.minFilter=l.minFilter!==void 0?l.minFilter:Rt,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0?a.colorSpace=l.colorSpace:l.encoding!==void 0&&(a.encoding=l.encoding),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=Vr),l.mipmapCount===1&&(a.minFilter=Rt),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,i),a}},La=class extends Ai{constructor(e){super(e)}load(e,t,n,i){let s=new Ht,a=new Wl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},vr=class extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ia=class extends vr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ko=new He,eu=new R,tu=new R,ns=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lr,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;eu.setFromMatrixPosition(e.matrixWorld),t.position.copy(eu),tu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tu),t.updateMatrixWorld(),ko.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ko),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xl=class extends ns{constructor(){super(new _t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=2*ca*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;n===t.fov&&i===t.aspect&&s===t.far||(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ua=class extends vr{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Xl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},nu=new He,Fr=new R,Vo=new R,jl=class extends ns{constructor(){super(new _t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Fr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Fr),Vo.copy(n.position),Vo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Vo),n.updateMatrixWorld(),i.makeTranslation(-Fr.x,-Fr.y,-Fr.z),nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nu)}},_r=class extends vr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jl}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ql=class extends ns{constructor(){super(new cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Da=class extends vr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new ql}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Eg=new He,wg=new He,Tg=new He;var xr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=iu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=iu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function iu(){return(typeof performance>"u"?Date:performance).now()}var Ag=new R,Rg=new Sn,Cg=new R,Pg=new R;var Lg=new R,Ig=new Sn,Ug=new R,Dg=new R;var sc="\\[\\]\\.:\\/",Pf=new RegExp("["+sc+"]","g"),Wo="[^"+sc+"]",Lf="[^"+sc.replace("\\.","")+"]",If=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Wo)+/(WCOD+)?/.source.replace("WCOD",Lf)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wo)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wo)+"$"),Uf=["material","materials","bones","map"],at=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Pf,"")}static parseTrackName(e){let t=If.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Uf.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(l!==void 0){if(e[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};at.Composite=class{constructor(r,e,t){let n=t||at.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray],at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ng=new Float32Array(1);var Og=new ce;var Fg=new R,Bg=new R;var zg=new R;var Hg=new R,Gg=new He,kg=new He;var Vg=new R,Wg=new Ie,Xg=new Ie;var jg=new R,qg=new R,Yg=new R;var Zg=new R,Jg=new Xr;var Kg=new bn;var Qg=new R;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xo}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xo);var Ha={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Nt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Nf=new cr(-1,1,1,-1,0,1),ac=class extends rt{constructor(){super(),this.setAttribute("position",new Oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Oe([0,2,0,0,2,0],2))}},Of=new ac,An=class{constructor(e){this._mesh=new Fe(Of,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Nf)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Sr=class extends Nt{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=tn.clone(e.uniforms),this.material=new ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new An(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var rs=class extends Nt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},Ga=class extends Nt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ka=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ce);this._width=n.width,this._height=n.height,t=new dt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ht}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Sr(Ha),this.copyPass.material.blending=Na,this.clock=new xr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}rs!==void 0&&(a instanceof rs?n=!0:a instanceof Ga&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Va=class extends Nt{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ie}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var Ru={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ie(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var br=class r extends Nt{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new Ie(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new dt(s,a,{type:ht}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new dt(s,a,{type:ht});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let p=new dt(s,a,{type:ht});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),a=Math.round(a/2)}let o=Ru;this.highPassUniforms=tn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ot({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ce(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ha;this.copyUniforms=tn.clone(h.uniforms),this.blendMaterial=new ot({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:kn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ie,this.oldClearAlpha=1,this.basic=new $t,this.fsQuad=new An(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ce(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new ot({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new ot({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};br.BlurDirectionX=new ce(1,0);br.BlurDirectionY=new ce(0,1);var Cu={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};var Wa=class extends Nt{constructor(e,t,n){super(),this.scene=e,this.camera=t;let i=n.focus!==void 0?n.focus:1,s=n.aperture!==void 0?n.aperture:.025,a=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new dt(1,1,{minFilter:Et,magFilter:Et,type:ht}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new jr,this.materialDepth.depthPacking=gu,this.materialDepth.blending=Na;let o=Cu,c=tn.clone(o.uniforms);c.tDepth.value=this.renderTargetDepth.texture,c.focus.value=i,c.aspect.value=t.aspect,c.aperture.value=s,c.maxblur.value=a,c.nearClip.value=t.near,c.farClip.value=t.far,this.materialBokeh=new ot({defines:Object.assign({},o.defines),uniforms:c,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.uniforms=c,this.fsQuad=new An(this.materialBokeh),this._oldClearColor=new Ie}render(e,t,n){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);let i=e.getClearAlpha(),s=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(i),e.autoClear=s}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}};var Pu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Xa=class extends Nt{constructor(){super();let e=Pu;this.uniforms=tn.clone(e.uniforms),this.material=new Ra({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new An(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Je.getTransfer(this._outputColorSpace)===nt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Jl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Kl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ql?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===is?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===$l&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Lu=function(r){return URL.createObjectURL(new Blob([r],{type:"text/javascript"}))},Ff=function(r){return new Worker(r)};try{URL.revokeObjectURL(Lu(""))}catch{Lu=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)},Ff=function(e){return new Worker(e,{type:"module"})}}var nn=Uint8Array,ai=Uint16Array,cc=Uint32Array,Iu=new nn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Uu=new nn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Bf=new nn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Du=function(r,e){for(var t=new ai(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new cc(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return[t,i]},Nu=Du(Iu,2),Ou=Nu[0],zf=Nu[1];Ou[28]=258,zf[258]=28;var Fu=Du(Uu,0),Hf=Fu[0],D0=Fu[1],hc=new ai(32768);for(Ye=0;Ye<32768;++Ye)Vn=(Ye&43690)>>>1|(Ye&21845)<<1,Vn=(Vn&52428)>>>2|(Vn&13107)<<2,Vn=(Vn&61680)>>>4|(Vn&3855)<<4,hc[Ye]=((Vn&65280)>>>8|(Vn&255)<<8)>>>1;var Vn,Ye,ss=function(r,e,t){for(var n=r.length,i=0,s=new ai(e);i<n;++i)++s[r[i]-1];var a=new ai(e);for(i=0;i<e;++i)a[i]=a[i-1]+s[i-1]<<1;var o;if(t){o=new ai(1<<e);var c=15-e;for(i=0;i<n;++i)if(r[i])for(var l=i<<4|r[i],h=e-r[i],d=a[r[i]-1]++<<h,u=d|(1<<h)-1;d<=u;++d)o[hc[d]>>>c]=l}else for(o=new ai(n),i=0;i<n;++i)r[i]&&(o[i]=hc[a[r[i]-1]++]>>>15-r[i]);return o},as=new nn(288);for(Ye=0;Ye<144;++Ye)as[Ye]=8;var Ye;for(Ye=144;Ye<256;++Ye)as[Ye]=9;var Ye;for(Ye=256;Ye<280;++Ye)as[Ye]=7;var Ye;for(Ye=280;Ye<288;++Ye)as[Ye]=8;var Ye,Bu=new nn(32);for(Ye=0;Ye<32;++Ye)Bu[Ye]=5;var Ye;var Gf=ss(as,9,1);var kf=ss(Bu,5,1),oc=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},pn=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},lc=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},Vf=function(r){return(r/8|0)+(r&7&&1)},Wf=function(r,e,t){(e==null||e<0)&&(e=0),(t==null||t>r.length)&&(t=r.length);var n=new(r instanceof ai?ai:r instanceof cc?cc:nn)(t-e);return n.set(r.subarray(e,t)),n},Xf=function(r,e,t){var n=r.length;if(!n||t&&!t.l&&n<5)return e||new nn(0);var i=!e||t,s=!t||t.i;t||(t={}),e||(e=new nn(n*3));var a=function(X){var U=e.length;if(X>U){var Q=new nn(Math.max(U*2,X));Q.set(e),e=Q}},o=t.f||0,c=t.p||0,l=t.b||0,h=t.l,d=t.d,u=t.m,p=t.n,g=n*8;do{if(!h){t.f=o=pn(r,c,1);var v=pn(r,c+1,3);if(c+=3,v)if(v==1)h=Gf,d=kf,u=9,p=5;else if(v==2){var x=pn(r,c,31)+257,w=pn(r,c+10,15)+4,L=x+pn(r,c+5,31)+1;c+=14;for(var b=new nn(L),C=new nn(19),N=0;N<w;++N)C[Bf[N]]=pn(r,c+N*3,7);c+=w*3;for(var O=oc(C),H=(1<<O)-1,J=ss(C,O,1),N=0;N<L;){var I=J[pn(r,c,H)];c+=I&15;var f=I>>>4;if(f<16)b[N++]=f;else{var Y=0,j=0;for(f==16?(j=3+pn(r,c,3),c+=2,Y=b[N-1]):f==17?(j=3+pn(r,c,7),c+=3):f==18&&(j=11+pn(r,c,127),c+=7);j--;)b[N++]=Y}}var fe=b.subarray(0,x),Me=b.subarray(x);u=oc(fe),p=oc(Me),h=ss(fe,u,1),d=ss(Me,p,1)}else throw"invalid block type";else{var f=Vf(c)+4,y=r[f-4]|r[f-3]<<8,_=f+y;if(_>n){if(s)throw"unexpected EOF";break}i&&a(l+y),e.set(r.subarray(f,_),l),t.b=l+=y,t.p=c=_*8;continue}if(c>g){if(s)throw"unexpected EOF";break}}i&&a(l+131072);for(var le=(1<<u)-1,te=(1<<p)-1,ae=c;;ae=c){var Y=h[lc(r,c)&le],k=Y>>>4;if(c+=Y&15,c>g){if(s)throw"unexpected EOF";break}if(!Y)throw"invalid length/literal";if(k<256)e[l++]=k;else if(k==256){ae=c,h=null;break}else{var ne=k-254;if(k>264){var N=k-257,_e=Iu[N];ne=pn(r,c,(1<<_e)-1)+Ou[N],c+=_e}var T=d[lc(r,c)&te],E=T>>>4;if(!T)throw"invalid distance";c+=T&15;var Me=Hf[E];if(E>3){var _e=Uu[E];Me+=lc(r,c)&(1<<_e)-1,c+=_e}if(c>g){if(s)throw"unexpected EOF";break}i&&a(l+131072);for(var V=l+ne;l<V;l+=4)e[l]=e[l-Me],e[l+1]=e[l+1-Me],e[l+2]=e[l+2-Me],e[l+3]=e[l+3-Me];l=V}}t.l=h,t.p=ae,t.b=l,h&&(o=1,t.m=u,t.d=d,t.n=p)}while(!o);return l==e.length?e:Wf(e,0,l)};var jf=new nn(0);var qf=function(r){if((r[0]&15)!=8||r[0]>>>4>7||(r[0]<<8|r[1])%31)throw"invalid zlib data";if(r[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function os(r,e){return Xf((qf(r),r.subarray(2,-4)),e)}var Yf=typeof TextDecoder<"u"&&new TextDecoder,Zf=0;try{Yf.decode(jf,{stream:!0}),Zf=1}catch{}var ja=class extends Pa{constructor(e){super(e),this.type=ht}parse(e){let O=Math.pow(2.7182818,2.2);function H(m,M){let A=0;for(let W=0;W<65536;++W)(W==0||m[W>>3]&1<<(W&7))&&(M[A++]=W);let D=A-1;for(;A<65536;)M[A++]=0;return D}function J(m){for(let M=0;M<16384;M++)m[M]={},m[M].len=0,m[M].lit=0,m[M].p=null}let I={l:0,c:0,lc:0};function Y(m,M,A,D,W){for(;A<m;)M=M<<8|Cn(D,W),A+=8;A-=m,I.l=M>>A&(1<<m)-1,I.c=M,I.lc=A}let j=new Array(59);function fe(m){for(let A=0;A<=58;++A)j[A]=0;for(let A=0;A<65537;++A)j[m[A]]+=1;let M=0;for(let A=58;A>0;--A){let D=M+j[A]>>1;j[A]=M,M=D}for(let A=0;A<65537;++A){let D=m[A];D>0&&(m[A]=D|j[D]++<<6)}}function Me(m,M,A,D,W,G){let ee=M,se=0,pe=0;for(;D<=W;D++){if(ee.value-M.value>A)return!1;Y(6,se,pe,m,ee);let he=I.l;if(se=I.c,pe=I.lc,G[D]=he,he==63){if(ee.value-M.value>A)throw new Error("Something wrong with hufUnpackEncTable");Y(8,se,pe,m,ee);let ge=I.l+6;if(se=I.c,pe=I.lc,D+ge>W+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ge--;)G[D++]=0;D--}else if(he>=59){let ge=he-59+2;if(D+ge>W+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ge--;)G[D++]=0;D--}}fe(G)}function le(m){return m&63}function te(m){return m>>6}function ae(m,M,A,D){for(;M<=A;M++){let W=te(m[M]),G=le(m[M]);if(W>>G)throw new Error("Invalid table entry");if(G>14){let ee=D[W>>G-14];if(ee.len)throw new Error("Invalid table entry");if(ee.lit++,ee.p){let se=ee.p;ee.p=new Array(ee.lit);for(let pe=0;pe<ee.lit-1;++pe)ee.p[pe]=se[pe]}else ee.p=new Array(1);ee.p[ee.lit-1]=M}else if(G){let ee=0;for(let se=1<<14-G;se>0;se--){let pe=D[(W<<14-G)+ee];if(pe.len||pe.p)throw new Error("Invalid table entry");pe.len=G,pe.lit=M,ee++}}}return!0}let k={c:0,lc:0};function ne(m,M,A,D){m=m<<8|Cn(A,D),M+=8,k.c=m,k.lc=M}let _e={c:0,lc:0};function T(m,M,A,D,W,G,ee,se,pe){if(m==M){D<8&&(ne(A,D,W,G),A=k.c,D=k.lc),D-=8;let he=A>>D;if(he=new Uint8Array([he])[0],se.value+he>pe)return!1;let ge=ee[se.value-1];for(;he-- >0;)ee[se.value++]=ge}else if(se.value<pe)ee[se.value++]=m;else return!1;_e.c=A,_e.lc=D}function E(m){return m&65535}function V(m){let M=E(m);return M>32767?M-65536:M}let X={a:0,b:0};function U(m,M){let A=V(m),W=V(M),G=A+(W&1)+(W>>1),ee=G,se=G-W;X.a=ee,X.b=se}function Q(m,M){let A=E(m),D=E(M),W=A-(D>>1)&65535,G=D+W-32768&65535;X.a=G,X.b=W}function F(m,M,A,D,W,G,ee){let se=ee<16384,pe=A>W?W:A,he=1,ge,Ae;for(;he<=pe;)he<<=1;for(he>>=1,ge=he,he>>=1;he>=1;){Ae=0;let xe=Ae+G*(W-ge),Re=G*he,De=G*ge,be=D*he,ve=D*ge,Ee,tt,it,It;for(;Ae<=xe;Ae+=De){let Ze=Ae,Xe=Ae+D*(A-ge);for(;Ze<=Xe;Ze+=ve){let ut=Ze+be,Ft=Ze+Re,ft=Ft+be;se?(U(m[Ze+M],m[Ft+M]),Ee=X.a,it=X.b,U(m[ut+M],m[ft+M]),tt=X.a,It=X.b,U(Ee,tt),m[Ze+M]=X.a,m[ut+M]=X.b,U(it,It),m[Ft+M]=X.a,m[ft+M]=X.b):(Q(m[Ze+M],m[Ft+M]),Ee=X.a,it=X.b,Q(m[ut+M],m[ft+M]),tt=X.a,It=X.b,Q(Ee,tt),m[Ze+M]=X.a,m[ut+M]=X.b,Q(it,It),m[Ft+M]=X.a,m[ft+M]=X.b)}if(A&he){let ut=Ze+Re;se?U(m[Ze+M],m[ut+M]):Q(m[Ze+M],m[ut+M]),Ee=X.a,m[ut+M]=X.b,m[Ze+M]=Ee}}if(W&he){let Ze=Ae,Xe=Ae+D*(A-ge);for(;Ze<=Xe;Ze+=ve){let ut=Ze+be;se?U(m[Ze+M],m[ut+M]):Q(m[Ze+M],m[ut+M]),Ee=X.a,m[ut+M]=X.b,m[Ze+M]=Ee}}ge=he,he>>=1}return Ae}function z(m,M,A,D,W,G,ee,se,pe){let he=0,ge=0,Ae=ee,xe=Math.trunc(D.value+(W+7)/8);for(;D.value<xe;)for(ne(he,ge,A,D),he=k.c,ge=k.lc;ge>=14;){let De=he>>ge-14&16383,be=M[De];if(be.len)ge-=be.len,T(be.lit,G,he,ge,A,D,se,pe,Ae),he=_e.c,ge=_e.lc;else{if(!be.p)throw new Error("hufDecode issues");let ve;for(ve=0;ve<be.lit;ve++){let Ee=le(m[be.p[ve]]);for(;ge<Ee&&D.value<xe;)ne(he,ge,A,D),he=k.c,ge=k.lc;if(ge>=Ee&&te(m[be.p[ve]])==(he>>ge-Ee&(1<<Ee)-1)){ge-=Ee,T(be.p[ve],G,he,ge,A,D,se,pe,Ae),he=_e.c,ge=_e.lc;break}}if(ve==be.lit)throw new Error("hufDecode issues")}}let Re=8-W&7;for(he>>=Re,ge-=Re;ge>0;){let De=M[he<<14-ge&16383];if(De.len)ge-=De.len,T(De.lit,G,he,ge,A,D,se,pe,Ae),he=_e.c,ge=_e.lc;else throw new Error("hufDecode issues")}return!0}function q(m,M,A,D,W,G){let ee={value:0},se=A.value,pe=et(M,A),he=et(M,A);A.value+=4;let ge=et(M,A);if(A.value+=4,pe<0||pe>=65537||he<0||he>=65537)throw new Error("Something wrong with HUF_ENCSIZE");let Ae=new Array(65537),xe=new Array(16384);J(xe);let Re=D-(A.value-se);if(Me(m,A,Re,pe,he,Ae),ge>8*(D-(A.value-se)))throw new Error("Something wrong with hufUncompress");ae(Ae,pe,he,xe),z(Ae,xe,m,A,ge,he,G,W,ee)}function oe(m,M,A){for(let D=0;D<A;++D)M[D]=m[M[D]]}function re(m){for(let M=1;M<m.length;M++){let A=m[M-1]+m[M]-128;m[M]=A}}function S(m,M){let A=0,D=Math.floor((m.length+1)/2),W=0,G=m.length-1;for(;!(W>G||(M[W++]=m[A++],W>G));)M[W++]=m[D++]}function ue(m){let M=m.byteLength,A=new Array,D=0,W=new DataView(m);for(;M>0;){let G=W.getInt8(D++);if(G<0){let ee=-G;M-=ee+1;for(let se=0;se<ee;se++)A.push(W.getUint8(D++))}else{let ee=G;M-=2;let se=W.getUint8(D++);for(let pe=0;pe<ee+1;pe++)A.push(se)}}return A}function Z(m,M,A,D,W,G){let ee=new DataView(G.buffer),se=A[m.idx[0]].width,pe=A[m.idx[0]].height,he=3,ge=Math.floor(se/8),Ae=Math.ceil(se/8),xe=Math.ceil(pe/8),Re=se-(Ae-1)*8,De=pe-(xe-1)*8,be={value:0},ve=new Array(he),Ee=new Array(he),tt=new Array(he),it=new Array(he),It=new Array(he);for(let Xe=0;Xe<he;++Xe)It[Xe]=M[m.idx[Xe]],ve[Xe]=Xe<1?0:ve[Xe-1]+Ae*xe,Ee[Xe]=new Float32Array(64),tt[Xe]=new Uint16Array(64),it[Xe]=new Uint16Array(Ae*64);for(let Xe=0;Xe<xe;++Xe){let ut=8;Xe==xe-1&&(ut=De);let Ft=8;for(let qe=0;qe<Ae;++qe){qe==Ae-1&&(Ft=Re);for(let Ke=0;Ke<he;++Ke)tt[Ke].fill(0),tt[Ke][0]=W[ve[Ke]++],K(be,D,tt[Ke]),de(tt[Ke],Ee[Ke]),Se(Ee[Ke]);he==3&&we(Ee);for(let Ke=0;Ke<he;++Ke)Pe(Ee[Ke],it[Ke],qe*64)}let ft=0;for(let qe=0;qe<he;++qe){let Ke=A[m.idx[qe]].type;for(let jt=8*Xe;jt<8*Xe+ut;++jt){ft=It[qe][jt];for(let li=0;li<ge;++li){let ze=li*64+(jt&7)*8;ee.setUint16(ft+0*2*Ke,it[qe][ze+0],!0),ee.setUint16(ft+1*2*Ke,it[qe][ze+1],!0),ee.setUint16(ft+2*2*Ke,it[qe][ze+2],!0),ee.setUint16(ft+3*2*Ke,it[qe][ze+3],!0),ee.setUint16(ft+4*2*Ke,it[qe][ze+4],!0),ee.setUint16(ft+5*2*Ke,it[qe][ze+5],!0),ee.setUint16(ft+6*2*Ke,it[qe][ze+6],!0),ee.setUint16(ft+7*2*Ke,it[qe][ze+7],!0),ft+=8*2*Ke}}if(ge!=Ae)for(let jt=8*Xe;jt<8*Xe+ut;++jt){let li=It[qe][jt]+8*ge*2*Ke,ze=ge*64+(jt&7)*8;for(let Ni=0;Ni<Ft;++Ni)ee.setUint16(li+Ni*2*Ke,it[qe][ze+Ni],!0)}}}let Ze=new Uint16Array(se);ee=new DataView(G.buffer);for(let Xe=0;Xe<he;++Xe){A[m.idx[Xe]].decoded=!0;let ut=A[m.idx[Xe]].type;if(A[Xe].type==2)for(let Ft=0;Ft<pe;++Ft){let ft=It[Xe][Ft];for(let qe=0;qe<se;++qe)Ze[qe]=ee.getUint16(ft+qe*2*ut,!0);for(let qe=0;qe<se;++qe)ee.setFloat32(ft+qe*2*ut,Te(Ze[qe]),!0)}}}function K(m,M,A){let D,W=1;for(;W<64;)D=M[m.value],D==65280?W=64:D>>8==255?W+=D&255:(A[W]=D,W++),m.value++}function de(m,M){M[0]=Te(m[0]),M[1]=Te(m[1]),M[2]=Te(m[5]),M[3]=Te(m[6]),M[4]=Te(m[14]),M[5]=Te(m[15]),M[6]=Te(m[27]),M[7]=Te(m[28]),M[8]=Te(m[2]),M[9]=Te(m[4]),M[10]=Te(m[7]),M[11]=Te(m[13]),M[12]=Te(m[16]),M[13]=Te(m[26]),M[14]=Te(m[29]),M[15]=Te(m[42]),M[16]=Te(m[3]),M[17]=Te(m[8]),M[18]=Te(m[12]),M[19]=Te(m[17]),M[20]=Te(m[25]),M[21]=Te(m[30]),M[22]=Te(m[41]),M[23]=Te(m[43]),M[24]=Te(m[9]),M[25]=Te(m[11]),M[26]=Te(m[18]),M[27]=Te(m[24]),M[28]=Te(m[31]),M[29]=Te(m[40]),M[30]=Te(m[44]),M[31]=Te(m[53]),M[32]=Te(m[10]),M[33]=Te(m[19]),M[34]=Te(m[23]),M[35]=Te(m[32]),M[36]=Te(m[39]),M[37]=Te(m[45]),M[38]=Te(m[52]),M[39]=Te(m[54]),M[40]=Te(m[20]),M[41]=Te(m[22]),M[42]=Te(m[33]),M[43]=Te(m[38]),M[44]=Te(m[46]),M[45]=Te(m[51]),M[46]=Te(m[55]),M[47]=Te(m[60]),M[48]=Te(m[21]),M[49]=Te(m[34]),M[50]=Te(m[37]),M[51]=Te(m[47]),M[52]=Te(m[50]),M[53]=Te(m[56]),M[54]=Te(m[59]),M[55]=Te(m[61]),M[56]=Te(m[35]),M[57]=Te(m[36]),M[58]=Te(m[48]),M[59]=Te(m[49]),M[60]=Te(m[57]),M[61]=Te(m[58]),M[62]=Te(m[62]),M[63]=Te(m[63])}function Se(m){let M=.5*Math.cos(.7853975),A=.5*Math.cos(3.14159/16),D=.5*Math.cos(3.14159/8),W=.5*Math.cos(3*3.14159/16),G=.5*Math.cos(5*3.14159/16),ee=.5*Math.cos(3*3.14159/8),se=.5*Math.cos(7*3.14159/16),pe=new Array(4),he=new Array(4),ge=new Array(4),Ae=new Array(4);for(let xe=0;xe<8;++xe){let Re=xe*8;pe[0]=D*m[Re+2],pe[1]=ee*m[Re+2],pe[2]=D*m[Re+6],pe[3]=ee*m[Re+6],he[0]=A*m[Re+1]+W*m[Re+3]+G*m[Re+5]+se*m[Re+7],he[1]=W*m[Re+1]-se*m[Re+3]-A*m[Re+5]-G*m[Re+7],he[2]=G*m[Re+1]-A*m[Re+3]+se*m[Re+5]+W*m[Re+7],he[3]=se*m[Re+1]-G*m[Re+3]+W*m[Re+5]-A*m[Re+7],ge[0]=M*(m[Re+0]+m[Re+4]),ge[3]=M*(m[Re+0]-m[Re+4]),ge[1]=pe[0]+pe[3],ge[2]=pe[1]-pe[2],Ae[0]=ge[0]+ge[1],Ae[1]=ge[3]+ge[2],Ae[2]=ge[3]-ge[2],Ae[3]=ge[0]-ge[1],m[Re+0]=Ae[0]+he[0],m[Re+1]=Ae[1]+he[1],m[Re+2]=Ae[2]+he[2],m[Re+3]=Ae[3]+he[3],m[Re+4]=Ae[3]-he[3],m[Re+5]=Ae[2]-he[2],m[Re+6]=Ae[1]-he[1],m[Re+7]=Ae[0]-he[0]}for(let xe=0;xe<8;++xe)pe[0]=D*m[16+xe],pe[1]=ee*m[16+xe],pe[2]=D*m[48+xe],pe[3]=ee*m[48+xe],he[0]=A*m[8+xe]+W*m[24+xe]+G*m[40+xe]+se*m[56+xe],he[1]=W*m[8+xe]-se*m[24+xe]-A*m[40+xe]-G*m[56+xe],he[2]=G*m[8+xe]-A*m[24+xe]+se*m[40+xe]+W*m[56+xe],he[3]=se*m[8+xe]-G*m[24+xe]+W*m[40+xe]-A*m[56+xe],ge[0]=M*(m[xe]+m[32+xe]),ge[3]=M*(m[xe]-m[32+xe]),ge[1]=pe[0]+pe[3],ge[2]=pe[1]-pe[2],Ae[0]=ge[0]+ge[1],Ae[1]=ge[3]+ge[2],Ae[2]=ge[3]-ge[2],Ae[3]=ge[0]-ge[1],m[0+xe]=Ae[0]+he[0],m[8+xe]=Ae[1]+he[1],m[16+xe]=Ae[2]+he[2],m[24+xe]=Ae[3]+he[3],m[32+xe]=Ae[3]-he[3],m[40+xe]=Ae[2]-he[2],m[48+xe]=Ae[1]-he[1],m[56+xe]=Ae[0]-he[0]}function we(m){for(let M=0;M<64;++M){let A=m[0][M],D=m[1][M],W=m[2][M];m[0][M]=A+1.5747*W,m[1][M]=A-.1873*D-.4682*W,m[2][M]=A+1.8556*D}}function Pe(m,M,A){for(let D=0;D<64;++D)M[A+D]=nc.toHalfFloat(Ne(m[D]))}function Ne(m){return m<=1?Math.sign(m)*Math.pow(Math.abs(m),2.2):Math.sign(m)*Math.pow(O,Math.abs(m)-1)}function Ce(m){return new DataView(m.array.buffer,m.offset.value,m.size)}function Le(m){let M=m.viewer.buffer.slice(m.offset.value,m.offset.value+m.size),A=new Uint8Array(ue(M)),D=new Uint8Array(A.length);return re(A),S(A,D),new DataView(D.buffer)}function Be(m){let M=m.array.slice(m.offset.value,m.offset.value+m.size),A=os(M),D=new Uint8Array(A.length);return re(A),S(A,D),new DataView(D.buffer)}function pt(m){let M=m.viewer,A={value:m.offset.value},D=new Uint16Array(m.width*m.scanlineBlockSize*(m.channels*m.type)),W=new Uint8Array(8192),G=0,ee=new Array(m.channels);for(let De=0;De<m.channels;De++)ee[De]={},ee[De].start=G,ee[De].end=ee[De].start,ee[De].nx=m.width,ee[De].ny=m.lines,ee[De].size=m.type,G+=ee[De].nx*ee[De].ny*ee[De].size;let se=qn(M,A),pe=qn(M,A);if(pe>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(se<=pe)for(let De=0;De<pe-se+1;De++)W[De+se]=$(M,A);let he=new Uint16Array(65536),ge=H(W,he),Ae=et(M,A);q(m.array,M,A,Ae,D,G);for(let De=0;De<m.channels;++De){let be=ee[De];for(let ve=0;ve<ee[De].size;++ve)F(D,be.start+ve,be.nx,be.size,be.ny,be.nx*be.size,ge)}oe(he,D,G);let xe=0,Re=new Uint8Array(D.buffer.byteLength);for(let De=0;De<m.lines;De++)for(let be=0;be<m.channels;be++){let ve=ee[be],Ee=ve.nx*ve.size,tt=new Uint8Array(D.buffer,ve.end*2,Ee*2);Re.set(tt,xe),xe+=Ee*2,ve.end+=Ee}return new DataView(Re.buffer)}function Ue(m){let M=m.array.slice(m.offset.value,m.offset.value+m.size),A=os(M),D=m.lines*m.channels*m.width,W=m.type==1?new Uint16Array(D):new Uint32Array(D),G=0,ee=0,se=new Array(4);for(let pe=0;pe<m.lines;pe++)for(let he=0;he<m.channels;he++){let ge=0;switch(m.type){case 1:se[0]=G,se[1]=se[0]+m.width,G=se[1]+m.width;for(let Ae=0;Ae<m.width;++Ae){let xe=A[se[0]++]<<8|A[se[1]++];ge+=xe,W[ee]=ge,ee++}break;case 2:se[0]=G,se[1]=se[0]+m.width,se[2]=se[1]+m.width,G=se[2]+m.width;for(let Ae=0;Ae<m.width;++Ae){let xe=A[se[0]++]<<24|A[se[1]++]<<16|A[se[2]++]<<8;ge+=xe,W[ee]=ge,ee++}break}}return new DataView(W.buffer)}function We(m){let M=m.viewer,A={value:m.offset.value},D=new Uint8Array(m.width*m.lines*(m.channels*m.type*2)),W={version:At(M,A),unknownUncompressedSize:At(M,A),unknownCompressedSize:At(M,A),acCompressedSize:At(M,A),dcCompressedSize:At(M,A),rleCompressedSize:At(M,A),rleUncompressedSize:At(M,A),rleRawSize:At(M,A),totalAcUncompressedCount:At(M,A),totalDcUncompressedCount:At(M,A),acCompression:At(M,A)};if(W.version<2)throw new Error("EXRLoader.parse: "+P.compression+" version "+W.version+" is unsupported");let G=new Array,ee=qn(M,A)-2;for(;ee>0;){let be=Ge(M.buffer,A),ve=$(M,A),Ee=ve>>2&3,tt=(ve>>4)-1,it=new Int8Array([tt])[0],It=$(M,A);G.push({name:be,index:it,type:It,compression:Ee}),ee-=be.length+3}let se=P.channels,pe=new Array(m.channels);for(let be=0;be<m.channels;++be){let ve=pe[be]={},Ee=se[be];ve.name=Ee.name,ve.compression=0,ve.decoded=!1,ve.type=Ee.pixelType,ve.pLinear=Ee.pLinear,ve.width=m.width,ve.height=m.lines}let he={idx:new Array(3)};for(let be=0;be<m.channels;++be){let ve=pe[be];for(let Ee=0;Ee<G.length;++Ee){let tt=G[Ee];ve.name==tt.name&&(ve.compression=tt.compression,tt.index>=0&&(he.idx[tt.index]=be),ve.offset=be)}}let ge,Ae,xe;if(W.acCompressedSize>0)switch(W.acCompression){case 0:ge=new Uint16Array(W.totalAcUncompressedCount),q(m.array,M,A,W.acCompressedSize,ge,W.totalAcUncompressedCount);break;case 1:let be=m.array.slice(A.value,A.value+W.totalAcUncompressedCount),ve=os(be);ge=new Uint16Array(ve.buffer),A.value+=W.totalAcUncompressedCount;break}if(W.dcCompressedSize>0){let be={array:m.array,offset:A,size:W.dcCompressedSize};Ae=new Uint16Array(Be(be).buffer),A.value+=W.dcCompressedSize}if(W.rleRawSize>0){let be=m.array.slice(A.value,A.value+W.rleCompressedSize),ve=os(be);xe=ue(ve.buffer),A.value+=W.rleCompressedSize}let Re=0,De=new Array(pe.length);for(let be=0;be<De.length;++be)De[be]=new Array;for(let be=0;be<m.lines;++be)for(let ve=0;ve<pe.length;++ve)De[ve].push(Re),Re+=pe[ve].width*m.type*2;Z(he,De,pe,ge,Ae,D);for(let be=0;be<pe.length;++be){let ve=pe[be];if(!ve.decoded)switch(ve.compression){case 2:let Ee=0,tt=0;for(let it=0;it<m.lines;++it){let It=De[be][Ee];for(let Ze=0;Ze<ve.width;++Ze){for(let Xe=0;Xe<2*ve.type;++Xe)D[It++]=xe[tt+Xe*ve.width*ve.height];tt++}Ee++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(D.buffer)}function Ge(m,M){let A=new Uint8Array(m),D=0;for(;A[M.value+D]!=0;)D+=1;let W=new TextDecoder().decode(A.slice(M.value,M.value+D));return M.value=M.value+D+1,W}function Ii(m,M,A){let D=new TextDecoder().decode(new Uint8Array(m).slice(M.value,M.value+A));return M.value=M.value+A,D}function jn(m,M){let A=Mt(m,M),D=et(m,M);return[A,D]}function Ui(m,M){let A=et(m,M),D=et(m,M);return[A,D]}function Mt(m,M){let A=m.getInt32(M.value,!0);return M.value=M.value+4,A}function et(m,M){let A=m.getUint32(M.value,!0);return M.value=M.value+4,A}function Cn(m,M){let A=m[M.value];return M.value=M.value+1,A}function $(m,M){let A=m.getUint8(M.value);return M.value=M.value+1,A}let At=function(m,M){let A;return"getBigInt64"in DataView.prototype?A=Number(m.getBigInt64(M.value,!0)):A=m.getUint32(M.value+4,!0)+Number(m.getUint32(M.value,!0)<<32),M.value+=8,A};function ct(m,M){let A=m.getFloat32(M.value,!0);return M.value+=4,A}function St(m,M){return nc.toHalfFloat(ct(m,M))}function Te(m){let M=(m&31744)>>10,A=m&1023;return(m>>15?-1:1)*(M?M===31?A?NaN:1/0:Math.pow(2,M-15)*(1+A/1024):6103515625e-14*(A/1024))}function qn(m,M){let A=m.getUint16(M.value,!0);return M.value+=2,A}function gs(m,M){return Te(qn(m,M))}function vs(m,M,A,D){let W=A.value,G=[];for(;A.value<W+D-1;){let ee=Ge(M,A),se=Mt(m,A),pe=$(m,A);A.value+=3;let he=Mt(m,A),ge=Mt(m,A);G.push({name:ee,pixelType:se,pLinear:pe,xSampling:he,ySampling:ge})}return A.value+=1,G}function _s(m,M){let A=ct(m,M),D=ct(m,M),W=ct(m,M),G=ct(m,M),ee=ct(m,M),se=ct(m,M),pe=ct(m,M),he=ct(m,M);return{redX:A,redY:D,greenX:W,greenY:G,blueX:ee,blueY:se,whiteX:pe,whiteY:he}}function Cr(m,M){let A=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],D=$(m,M);return A[D]}function xs(m,M){let A=et(m,M),D=et(m,M),W=et(m,M),G=et(m,M);return{xMin:A,yMin:D,xMax:W,yMax:G}}function ys(m,M){let A=["INCREASING_Y"],D=$(m,M);return A[D]}function Pn(m,M){let A=ct(m,M),D=ct(m,M);return[A,D]}function Ms(m,M){let A=ct(m,M),D=ct(m,M),W=ct(m,M);return[A,D,W]}function Ss(m,M,A,D,W){if(D==="string"||D==="stringvector"||D==="iccProfile")return Ii(M,A,W);if(D==="chlist")return vs(m,M,A,W);if(D==="chromaticities")return _s(m,A);if(D==="compression")return Cr(m,A);if(D==="box2i")return xs(m,A);if(D==="lineOrder")return ys(m,A);if(D==="float")return ct(m,A);if(D==="v2f")return Pn(m,A);if(D==="v3f")return Ms(m,A);if(D==="int")return Mt(m,A);if(D==="rational")return jn(m,A);if(D==="timecode")return Ui(m,A);if(D==="preview")return A.value+=W,"skipped";A.value+=W}function Di(m,M,A){let D={};if(m.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");D.version=m.getUint8(4);let W=m.getUint8(5);D.spec={singleTile:!!(W&2),longName:!!(W&4),deepFormat:!!(W&8),multiPart:!!(W&16)},A.value=8;let G=!0;for(;G;){let ee=Ge(M,A);if(ee==0)G=!1;else{let se=Ge(M,A),pe=et(m,A),he=Ss(m,M,A,se,pe);he===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${se}'.`):D[ee]=he}}if(W&-5)throw console.error("THREE.EXRHeader:",D),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return D}function bs(m,M,A,D,W){let G={size:0,viewer:M,array:A,offset:D,width:m.dataWindow.xMax-m.dataWindow.xMin+1,height:m.dataWindow.yMax-m.dataWindow.yMin+1,channels:m.channels.length,bytesPerLine:null,lines:null,inputSize:null,type:m.channels[0].pixelType,uncompress:null,getter:null,format:null,colorSpace:Qt};switch(m.compression){case"NO_COMPRESSION":G.lines=1,G.uncompress=Ce;break;case"RLE_COMPRESSION":G.lines=1,G.uncompress=Le;break;case"ZIPS_COMPRESSION":G.lines=1,G.uncompress=Be;break;case"ZIP_COMPRESSION":G.lines=16,G.uncompress=Be;break;case"PIZ_COMPRESSION":G.lines=32,G.uncompress=pt;break;case"PXR24_COMPRESSION":G.lines=16,G.uncompress=Ue;break;case"DWAA_COMPRESSION":G.lines=32,G.uncompress=We;break;case"DWAB_COMPRESSION":G.lines=256,G.uncompress=We;break;default:throw new Error("EXRLoader.parse: "+m.compression+" is unsupported")}if(G.scanlineBlockSize=G.lines,G.type==1)switch(W){case Kt:G.getter=gs,G.inputSize=2;break;case ht:G.getter=qn,G.inputSize=2;break}else if(G.type==2)switch(W){case Kt:G.getter=ct,G.inputSize=4;break;case ht:G.getter=St,G.inputSize=4}else throw new Error("EXRLoader.parse: unsupported pixelType "+G.type+" for "+m.compression+".");G.blockCount=(m.dataWindow.yMax+1)/G.scanlineBlockSize;for(let se=0;se<G.blockCount;se++)At(M,D);G.outputChannels=G.channels==3?4:G.channels;let ee=G.width*G.height*G.outputChannels;switch(W){case Kt:G.byteArray=new Float32Array(ee),G.channels<G.outputChannels&&G.byteArray.fill(1,0,ee);break;case ht:G.byteArray=new Uint16Array(ee),G.channels<G.outputChannels&&G.byteArray.fill(15360,0,ee);break;default:console.error("THREE.EXRLoader: unsupported type: ",W);break}return G.bytesPerLine=G.width*G.inputSize*G.channels,G.outputChannels==4?(G.format=Zt,G.colorSpace=Qt):(G.format=hu,G.colorSpace=Jt),G}let Ln=new DataView(e),Es=new Uint8Array(e),Yn={value:0},P=Di(Ln,e,Yn),B=bs(P,Ln,Es,Yn,this.type),ie={value:0},me={R:0,G:1,B:2,A:3,Y:0};for(let m=0;m<B.height/B.scanlineBlockSize;m++){let M=et(Ln,Yn);B.size=et(Ln,Yn),B.lines=M+B.scanlineBlockSize>B.height?B.height-M:B.scanlineBlockSize;let D=B.size<B.lines*B.bytesPerLine?B.uncompress(B):Ce(B);Yn.value+=B.size;for(let W=0;W<B.scanlineBlockSize;W++){let G=W+m*B.scanlineBlockSize;if(G>=B.height)break;for(let ee=0;ee<B.channels;ee++){let se=me[P.channels[ee].name];for(let pe=0;pe<B.width;pe++){ie.value=(W*(B.channels*B.width)+ee*B.width+pe)*B.inputSize;let he=(B.height-1-G)*(B.width*B.outputChannels)+pe*B.outputChannels+se;B.byteArray[he]=B.getter(D,ie)}}}}return{header:P,width:B.width,height:B.height,data:B.byteArray,format:B.format,colorSpace:B.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(a,o){a.colorSpace=o.colorSpace,a.minFilter=Rt,a.magFilter=Rt,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,o)}return super.load(e,s,n,i)}};var ls=class r extends Fe{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new _t;let n=this,i=t.color!==void 0?new Ie(t.color):new Ie(8355711),s=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||r.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,h=new cn,d=new R,u=new R,p=new R,g=new He,v=new R(0,0,-1),f=new Qe,y=new R,_=new R,x=new Qe,w=new He,L=this.camera,b=new dt(s,a,{samples:l,type:ht}),C=new ot({name:c.name!==void 0?c.name:"unspecified",uniforms:tn.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});C.uniforms.tDiffuse.value=b.texture,C.uniforms.color.value=i,C.uniforms.textureMatrix.value=w,this.material=C,this.onBeforeRender=function(N,O,H){if(u.setFromMatrixPosition(n.matrixWorld),p.setFromMatrixPosition(H.matrixWorld),g.extractRotation(n.matrixWorld),d.set(0,0,1),d.applyMatrix4(g),y.subVectors(u,p),y.dot(d)>0)return;y.reflect(d).negate(),y.add(u),g.extractRotation(H.matrixWorld),v.set(0,0,-1),v.applyMatrix4(g),v.add(p),_.subVectors(u,v),_.reflect(d).negate(),_.add(u),L.position.copy(y),L.up.set(0,1,0),L.up.applyMatrix4(g),L.up.reflect(d),L.lookAt(_),L.far=H.far,L.updateMatrixWorld(),L.projectionMatrix.copy(H.projectionMatrix),w.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),w.multiply(L.projectionMatrix),w.multiply(L.matrixWorldInverse),w.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(d,u),h.applyMatrix4(L.matrixWorldInverse),f.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let J=L.projectionMatrix;x.x=(Math.sign(f.x)+J.elements[8])/J.elements[0],x.y=(Math.sign(f.y)+J.elements[9])/J.elements[5],x.z=-1,x.w=(1+J.elements[10])/J.elements[14],f.multiplyScalar(2/f.dot(x)),J.elements[2]=f.x,J.elements[6]=f.y,J.elements[10]=f.z+1-o,J.elements[14]=f.w,n.visible=!1;let I=N.getRenderTarget(),Y=N.xr.enabled,j=N.shadowMap.autoUpdate;N.xr.enabled=!1,N.shadowMap.autoUpdate=!1,N.setRenderTarget(b),N.state.buffers.depth.setMask(!0),N.autoClear===!1&&N.clear(),N.render(O,L),N.xr.enabled=Y,N.shadowMap.autoUpdate=j,N.setRenderTarget(I);let fe=H.viewport;fe!==void 0&&N.state.viewport(fe),n.visible=!0},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),n.material.dispose()}}};ls.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};document.getElementById("yr").textContent=new Date().getFullYear();await Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,1200))]);var yc=()=>new Promise(r=>requestAnimationFrame(()=>setTimeout(r,0)));await yc();var Ja=matchMedia("(prefers-reduced-motion: reduce)").matches,Kf=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/.test(navigator.userAgent),Tt=Kf||matchMedia("(max-width: 760px)").matches||(navigator.hardwareConcurrency||8)<=4,Xu=(r,e=0,t=1)=>Math.min(t,Math.max(e,r)),Qf=(r,e,t)=>r+(e-r)*t,Mc=r=>r*r*(3-2*r),mn=(r,e,t)=>Xu((r-e)/(t-e)),st=(r,e,t)=>new R(r,e,t),gc=7,$e=()=>(gc=gc*16807%2147483647)/2147483647;function vn(r,e){let t=document.createElement("canvas");return t.width=r,t.height=e,[t,t.getContext("2d")]}function _n(r,e=!0){let t=new Sa(r);return e&&(t.colorSpace=gt),t.anisotropy=16,t}var Ka=new Uint8Array(512);{let r=[...Array(256).keys()];for(let e=255;e>0;e--){let t=Math.floor($e()*(e+1));[r[e],r[t]]=[r[t],r[e]]}for(let e=0;e<512;e++)Ka[e]=r[e&255]}var oi=(r,e,t)=>Ka[Ka[Ka[r&255]+(e&255)]+(t&255)]/255;function $f(r,e,t){let n=Math.floor(r),i=Math.floor(e),s=Math.floor(t),a=r-n,o=e-i,c=t-s,l=a*a*(3-2*a),h=o*o*(3-2*o),d=c*c*(3-2*c),u=(p,g,v)=>p+(g-p)*v;return u(u(u(oi(n,i,s),oi(n+1,i,s),l),u(oi(n,i+1,s),oi(n+1,i+1,s),l),h),u(u(oi(n,i,s+1),oi(n+1,i,s+1),l),u(oi(n,i+1,s+1),oi(n+1,i+1,s+1),l),h),d)}var hs=(r,e,t,n=4)=>{let i=0,s=.5,a=1;for(let o=0;o<n;o++)i+=s*$f(r*a,e*a,t*a),a*=2.03,s*=.5;return i};function em(r,e,t,n){let[i,s]=vn(e,t),a=s.createImageData(e,t),o=a.data;for(let c=0;c<t;c++)for(let l=0;l<e;l++){let h=c*e+l,d=r[c*e+(l-1+e)%e],u=r[c*e+(l+1)%e],p=r[(c-1+t)%t*e+l],g=r[(c+1)%t*e+l],v=(d-u)*n,f=(p-g)*n,y=1,_=Math.hypot(v,f,y);o[h*4]=(v/_*.5+.5)*255,o[h*4+1]=(f/_*.5+.5)*255,o[h*4+2]=(y/_*.5+.5)*255,o[h*4+3]=255}return s.putImageData(a,0,0),_n(i,!1)}var ju=document.getElementById("gl"),Xt;Xt=new qr({canvas:ju,antialias:!1,powerPreference:"high-performance"});ju.addEventListener("webglcontextlost",r=>{r.preventDefault(),window.__fail3d?.("WebGL context lost")});var Xn=Math.min(devicePixelRatio,1.5);Xt.setPixelRatio(Xn);Xt.setSize(innerWidth,innerHeight);Xt.toneMapping=is;Xt.toneMappingExposure=.9;Xt.shadowMap.enabled=!0;Xt.shadowMap.type=Yl;var je=new ya;je.background=new Ie(328713);je.fog=new xa(460044,.035);var gn=new _t(Tt?60:42,innerWidth/innerHeight,.05,80),tm=new hr(Xt),qu=await new ja().loadAsync("vendor/env.exr"),nm=tm.fromEquirectangular(qu).texture;qu.dispose();je.environment=nm;var im=.35;je.add(new Ia(6969528,656912,.25));var Sc=new _r(16723349,10,14,1.8);Sc.position.set(-3,3.4,-7);je.add(Sc);var Yu=new _r(2287359,9,14,1.8);Yu.position.set(3,3.4,-13);je.add(Yu);var Zu=new _r(16769732,5,10,1.8);Zu.position.set(0,3.6,1.5);je.add(Zu);var Wt=2.1,ds=-19;for(let r=-2;r<=2;r++){let e=new Ua(16774378,r===0?24:16,9,.42,.55,1.5);e.position.set(r*Wt,3.4,-17.6),e.target.position.set(r*Wt,0,-19.4),r===0&&(e.castShadow=!0,e.shadow.mapSize.set(Tt?1024:2048,Tt?1024:2048),e.shadow.bias=-4e-4,e.shadow.normalBias=.02,e.shadow.camera.near=.5,e.shadow.camera.far=8),je.add(e,e.target)}var xn=new Da(16771286,.55);xn.position.set(1.2,6,3);xn.target.position.set(0,0,-10);xn.castShadow=!0;xn.shadow.mapSize.set(Tt?1024:2048,Tt?1024:2048);Object.assign(xn.shadow.camera,{left:-1.5,right:1.5,top:12,bottom:-12,near:1,far:30});xn.shadow.bias=-5e-4;xn.shadow.normalBias=.02;je.add(xn,xn.target);function rm(){let r=Tt?256:512,e=Tt?1024:2048,t=39,n=r/t,[i,s]=vn(r,e),a=s.createImageData(r,e),o=a.data,c=new Float32Array(r*e),[l,h]=vn(r,e),d=h.createImageData(r,e),u=d.data,p=Array.from({length:t},()=>{let g=new Ie().setHSL((30+$e()*7)/360,.42+$e()*.14,.6+$e()*.1);return{r:g.r*255,g:g.g*255,b:g.b*255,f:(.5+$e()*.6)*512/r,s:$e()*100,joint:$e()*e}});for(let g=0;g<e;g++)for(let v=0;v<r;v++){let f=Math.min(t-1,Math.floor(v/n)),y=p[f],_=v-f*n,x=hs(y.s,g*.004,_*.02*512/r,3)*9*r/512,w=Math.sin((_+x+Math.sin(g*.0025+y.s)*3)*y.f*1.7);w=Math.pow(w*.5+.5,6);let L=hs(v*.08,g*.02,y.s,2),b=_<1?.55:1,C=Math.abs(g-y.joint)<1?.6:1,N=(1-w*.22)*(.9+L*.2)*b*C,O=(g*r+v)*4;o[O]=y.r*N,o[O+1]=y.g*N,o[O+2]=y.b*N,o[O+3]=255,c[g*r+v]=(1-w)*.6+L*.4-(b<1?.8:0);let H=60+w*60+L*40;u[O]=u[O+1]=u[O+2]=H,u[O+3]=255}return s.putImageData(a,0,0),h.putImageData(d,0,0),{map:_n(i),rough:_n(l,!1),normal:em(c,r,e,2.2)}}var Tr=rm();for(let r of[Tr.map,Tr.rough,Tr.normal])r.wrapS=r.wrapT=ir,r.repeat.set(1,4.2);var Ju=new Gn({map:Tr.map,roughnessMap:Tr.rough,roughness:.55,normalMap:Tr.normal,normalScale:new ce(.35,.35),clearcoat:1,clearcoatRoughness:.06,envMapIntensity:.8}),Ku=Ju.clone();Ku.color=new Ie(15258296);var[sm,Ot]=vn(1024,1024);Ot.fillStyle="#0c0814";Ot.fillRect(0,0,1024,1024);for(let r=0;r<700;r++){Ot.fillStyle=["#ff2d95","#22e6ff","#c6ff3d","#7a4dff","#ffffff"][r%5],Ot.globalAlpha=.25+$e()*.4;let e=$e()*1024,t=$e()*1024,n=2+$e()*7;Ot.save(),Ot.translate(e,t),Ot.rotate($e()*6),r%3?Ot.fillRect(-n,-n/4,n*2,n/2):(Ot.beginPath(),Ot.arc(0,0,n/2,0,7),Ot.fill()),Ot.restore()}for(let r=0;r<6e4;r++)Ot.globalAlpha=.06,Ot.fillStyle=$e()>.5?"#fff":"#000",Ot.fillRect($e()*1024,$e()*1024,1,1);var ps=_n(sm);ps.wrapS=ps.wrapT=ir;ps.repeat.set(10,10);var am=new Tn({map:ps,roughness:1,metalness:0,emissive:16777215,emissiveMap:ps,emissiveIntensity:.12}),qa=new Tn({color:920342,roughness:.55,metalness:.2}),om=new Tn({color:9278368,roughness:.3,metalness:1,envMapIntensity:1.2,side:Zl}),Qu=r=>new $t({color:new Ie(r).multiplyScalar(1.8),toneMapped:!1}),eo=Qu(16723349),fs=Qu(2287359),no=new Fe(new dn(60,60),am);no.rotation.x=-Math.PI/2;no.position.set(0,-.04,-10);no.receiveShadow=!0;je.add(no);var bc=new Fe(new dn(60,60),new Tn({color:328712,roughness:1,envMapIntensity:0}));bc.rotation.x=Math.PI/2;bc.position.set(0,4.6,-10);je.add(bc);var vc=.635,lm=new ur([[.055,0],[.08,.035],[.103,.12],[.106,.17],[.096,.25],[.07,.33],[.047,.395],[.043,.43],[.048,.48],[.058,.53],[.056,.57],[.04,.615],[0,.635]].map(([r,e])=>new ce(r,e))),zu=lm.getSpacedPoints(600),cm=Array.from({length:140},(r,e)=>{let t=e/139*vc,n=zu[0];for(let i of zu)Math.abs(i.y-t)<Math.abs(n.y-t)&&(n=i);return new ce(e===139?0:Math.max(.001,n.x),t)}),hm=new dr(cm,Tt?40:72),[um,Pi]=vn(64,1024);Pi.fillStyle="#f3efe9";Pi.fillRect(0,0,64,1024);var $u=(r,e,t)=>{Pi.fillStyle=t,Pi.fillRect(0,1024-e/vc*1024,64,(e-r)/vc*1024)};$u(.42,.438,"#d0124f");$u(.452,.47,"#d0124f");Pi.globalAlpha=.06;for(let r=0;r<400;r++)Pi.fillStyle="#8a7a6a",Pi.fillRect($e()*64,$e()*1024,1,2);var dm=_n(um),pm=new Gn({map:dm,roughness:.32,clearcoat:1,clearcoatRoughness:.08,sheen:.2,envMapIntensity:1});function fm(){let r=new Fe(hm,pm);return r.castShadow=!0,r.receiveShadow=!0,r}function mm(){let r=[];for(let e=0;e<4;e++)for(let t=0;t<=e;t++)r.push([(t-e/2)*.3,ds-e*.26]);return r}var wr=1.1,Rr=21,cs=-Rr/2+.5,gm=new Dt(wr,.06,Rr),ed=new wn(.12,.12,Rr,24,1,!0,-Math.PI/2,Math.PI);ed.rotateX(Math.PI/2);var vm=new Dt(.18,.07,Rr),_m=new Dt(.012,.012,Rr),xm=new fr([st(0,.09),st(-.03,-.05),st(.03,-.05)].map(r=>new ce(r.x,r.y))),td=new ts(xm);td.rotateX(-Math.PI/2);var Hu=new Gn({color:2757642,roughness:.4,clearcoat:1,clearcoatRoughness:.06}),Ec=[];for(let r=-2;r<=2;r++){let e=new Hn;e.position.x=r*Wt;let t=new Fe(gm,Ju);t.position.set(0,0,cs),t.receiveShadow=!0,e.add(t);let n=new Fe(new Dt(wr+.5,.06,4.5),Ku);n.position.set(0,-.002,3),n.receiveShadow=!0,e.add(n);let i=new Fe(new Dt(wr+.5,.062,.03),qa);i.position.set(0,0,.75),e.add(i);for(let c of[-1,1]){let l=new Fe(ed,om);l.position.set(c*(wr/2+.12),.03,cs),l.receiveShadow=!0,e.add(l);let h=new Fe(vm,qa);h.position.set(c*(wr/2+.33),0,cs),e.add(h);let d=new Fe(_m,(r+(c>0?1:0))%2?fs:eo);d.position.set(c*(wr/2+.33),.04,cs),e.add(d)}for(let c=0;c<7;c++){let l=new Fe(td,Hu);l.position.set((c-3)*.135,.0315,-4.6-(3-Math.abs(c-3))*.3),e.add(l)}for(let c=0;c<7;c++){let l=new Fe(new pr(.012,16),Hu);l.rotation.x=-Math.PI/2,l.position.set((c-3)*.135,.0315,-2.1),e.add(l)}for(let[c,l]of mm()){let h=fm();h.position.set(c,.03,l),e.add(h),r===0&&Ec.push({obj:h,x:c,z:l})}let s=new Fe(new Dt(Wt,1.1,.1),qa);s.position.set(0,.5,-20.4),e.add(s);let a=new Fe(new Dt(Wt-.04,.75,.3),qa);a.position.set(0,1.6,-18.2),e.add(a);let o=new Fe(new Dt(Wt-.2,.02,.02),r%2?fs:eo);o.position.set(0,1.22,-18.04),e.add(o),je.add(e)}for(let r=-2;r<=2;r++){let[e,t]=vn(256,128);t.fillStyle="#05040a",t.fillRect(0,0,256,128),t.font="92px Anton, Impact",t.textAlign="center",t.textBaseline="middle",t.fillStyle=r%2?"#22e6ff":"#ff2d95",t.shadowColor=t.fillStyle,t.shadowBlur=18,t.fillText(String(r+3).padStart(2,"0"),128,68),t.globalAlpha=.18,t.fillStyle="#000";for(let i=0;i<128;i+=3)t.fillRect(0,i,256,1);let n=new Fe(new dn(.6,.3),new $t({map:_n(e),toneMapped:!1}));n.position.set(r*Wt,1.6,-18.04),je.add(n)}for(let r of[-Wt*1.5,-Wt*.5,Wt*.5,Wt*1.5]){let e=new Fe(new Kr(.28,.9,8,24),new Gn({color:1709094,roughness:.25,metalness:.3,clearcoat:1}));e.rotation.x=Math.PI/2,e.scale.set(1,1,.6),e.position.set(r,.2,2.2),e.castShadow=!0,je.add(e);let t=new Fe(new Ti(.28,.012,8,48,Math.PI),fs);t.position.set(r,.2,1.48),je.add(t)}var ym={uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},strength:{value:.55}},vertexShader:`uniform mat4 textureMatrix; varying vec4 vUv; varying vec3 vW;
    void main(){ vUv = textureMatrix * vec4(position,1.0); vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform sampler2D tDiffuse; uniform float strength; varying vec4 vUv; varying vec3 vW;
    void main(){
      float lx = mod(vW.x + 1.05, 2.1) - 1.05;
      float mask = 1.0 - smoothstep(.53, .55, abs(lx));
      float oil = smoothstep(-15.0, -11.0, vW.z) * .7 + .3;  /* oil pattern: glossier near the foul line */
      vec3 v = normalize(cameraPosition - vW);
      float fres = .03 + .97 * pow(1.0 - abs(v.y), 5.0);
      vec3 r = texture2DProj(tDiffuse, vUv).rgb;
      gl_FragColor = vec4(r * mask * strength * fres * oil, 1.0);
    }`},Li=new ls(new dn(Wt*5,Rr),{shader:ym,clipBias:.003,textureWidth:innerWidth*Xn*(Tt?.35:.5),textureHeight:innerHeight*Xn*(Tt?.35:.5)});Li.material.transparent=!0;Li.material.blending=kn;Li.material.depthWrite=!1;Li.rotation.x=-Math.PI/2;Li.position.set(0,.0312,cs);je.add(Li);var nd=new Fe(new dn(40,10),new Tn({color:723218,roughness:.9}));nd.position.set(0,4,-21.6);je.add(nd);var Qa=new Tn({transparent:!0,roughness:.4,emissive:16777215,emissiveIntensity:.55}),io=new Fe(new pr(1.3,96),Qa);io.position.set(0,3.4,-21.5);je.add(io);var wc=new Fe(new Ti(1.42,.022,12,128),eo);wc.position.copy(io.position);je.add(wc);var Tc=new Fe(new Ti(1.56,.012,12,128),fs);Tc.position.copy(io.position);je.add(Tc);function id(r,e,t,n,i){let[s,a]=vn(1024,256);a.font="170px Anton, Impact",a.textAlign="center",a.textBaseline="middle",a.shadowColor=e,a.shadowBlur=26,a.fillStyle=e,a.fillText(r,512,136),a.shadowBlur=0,a.fillStyle="#fff",a.globalAlpha=.6,a.fillText(r,512,136);let o=new Fe(new dn(i,i/4),new $t({map:_n(s),transparent:!0,toneMapped:!1,blending:kn,depthWrite:!1}));o.position.set(t,n,-21.45),je.add(o)}id("BOWLING","#ff2d95",-5.2,3.3,4.6);id("LASER","#22e6ff",5.2,3.3,4.6);for(let r=0;r<9;r++){let e=new Fe(new wn(.018,.018,9,8),r%2?fs:eo);e.rotation.z=Math.PI/2,e.position.set(0,4.45,-2-r*2.3),je.add(e)}var rd=new ot({transparent:!0,depthWrite:!1,blending:kn,side:Zl,uniforms:{col:{value:new Ie(16770764)},k:{value:.07}},vertexShader:"varying float vy; varying vec3 vN; varying vec3 vV; void main(){ vy = uv.y; vec4 mv = modelViewMatrix*vec4(position,1.); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }",fragmentShader:"uniform vec3 col; uniform float k; varying float vy; varying vec3 vN; varying vec3 vV; void main(){ float edge = pow(abs(dot(vN,vV)), 1.6); gl_FragColor = vec4(col * k * edge * pow(vy, 1.4), 1.); }"});for(let r=-2;r<=2;r++){let e=new Fe(new wn(.08,1.25,3.4,48,1,!0),rd);e.position.set(r*Wt,1.7,-18.9),je.add(e)}var sd=Tt?500:1400,$a=new Float32Array(sd*3);for(let r=0;r<sd;r++)$a[r*3]=($e()-.5)*11,$a[r*3+1]=$e()*4.2,$a[r*3+2]=-$e()*22+2;var ad=new rt;ad.setAttribute("position",new Gt($a,3));var[Mm,uc]=vn(64,64);{let r=uc.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"#fff"),r.addColorStop(.4,"#555"),r.addColorStop(1,"#000"),uc.fillStyle=r,uc.fillRect(0,0,64,64)}var to=new Ma(ad,new Yr({size:.016,map:_n(Mm),transparent:!0,opacity:.35,depthWrite:!1,blending:kn,color:16770802}));je.add(to);function Sm(){let r=Tt?512:1024,e=r/2,[t,n]=vn(r,e),i=n.createImageData(r,e),s=i.data,[a,o]=vn(r,e),c=o.createImageData(r,e),l=c.data,h=[255,45,149],d=[90,15,110],u=[20,4,15],p=[255,194,226],g=(v,f,y)=>[v[0]+(f[0]-v[0])*y,v[1]+(f[1]-v[1])*y,v[2]+(f[2]-v[2])*y];for(let v=0;v<e;v++)for(let f=0;f<r;f++){let y=f/r*Math.PI*2,_=v/e*Math.PI,x=Math.sin(_)*Math.cos(y)*2.2,w=Math.cos(_)*2.2,L=Math.sin(_)*Math.sin(y)*2.2,b=hs(x+3,w,L,4)*3.2,C=hs(x,w+7,L+b,4),N=Math.sin((C*6+b)*2.1)*.5+.5,O=hs(x*3+b,w*3,L*3,3),H=g(g(g(h,d,Mc(N)),u,Math.pow(O,3)*1.6>.5?.55:Math.pow(O,3)*1.1),p,Math.pow(1-N,9)*.5),J=(v*r+f)*4;s[J]=H[0],s[J+1]=H[1],s[J+2]=H[2],s[J+3]=255,l[J]=l[J+1]=l[J+2]=40+O*80,l[J+3]=255}n.putImageData(i,0,0),o.putImageData(c,0,0);for(let[v,f,y]of[[.72,.3,.022],[.78,.3,.022],[.75,.44,.026]]){let _=n.createRadialGradient(v*r,f*e,0,v*r,f*e,y*r);_.addColorStop(0,"#000"),_.addColorStop(.75,"#050105"),_.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=_,n.beginPath(),n.arc(v*r,f*e,y*r,0,7),n.fill()}return n.font=`${r*.03}px Anton, Impact`,n.fillStyle="rgba(255,240,250,.55)",n.textAlign="center",n.fillText("RAMBOUILLET",r*.25,e*.52),{map:_n(t),rough:_n(a,!1)}}var ms=.21,Gu=Sm(),fn=new Fe(new mr(ms,96,64),new Gn({map:Gu.map,roughnessMap:Gu.rough,roughness:.35,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.4,iridescence:.15}));fn.castShadow=!0;fn.rotation.y=-Math.PI/2-.3;je.add(fn);gc=42;for(let r of Ec){let e=Math.hypot(r.x,r.z-ds)+.3;r.v=st(r.x*3.2+($e()-.5)*1.4,2.2+$e()*2.6-e*.6,-(1.5+$e()*2.5)),r.av=st(($e()-.5)*14,($e()-.5)*10,($e()-.5)*14)}var od=new wn(.005,.005,14,6,1,!0);od.translate(0,-7,0);var ld=new wn(.04,.04,14,8,1,!0);ld.translate(0,-7,0);var cd=[];for(let r=0;r<12;r++){let e=[16723349,2287359,13041469][r%3],t=new $t({color:new Ie(e).multiplyScalar(3),transparent:!0,opacity:0,blending:kn,depthWrite:!1,toneMapped:!1}),n=new $t({color:e,transparent:!0,opacity:0,blending:kn,depthWrite:!1,toneMapped:!1}),i=new Hn;i.add(new Fe(od,t),new Fe(ld,n)),i.position.set((r-5.5)*.85,4.4,-9-r%4*2.6),i.userData={core:t,halo:n,ph:$e()*6.28,sp:.4+$e()*.6,amp:.5+$e()*.5},je.add(i),cd.push(i)}var ku=[["#f2b600",1],["#1747d6",2],["#d4141f",3],["#5b1693",4],["#ff6a00",5],["#0c7a35",6],["#111111",8],["#f2b600",9,1],["#1747d6",10,1]],bm=ku.map(([r,e,t],n)=>{let[i,s]=vn(1024,512);s.fillStyle=t?"#f4efe6":r,s.fillRect(0,0,1024,512),t&&(s.fillStyle=r,s.fillRect(0,150,1024,212));for(let o of[256,768])s.save(),s.translate(o,256),s.scale(1,2),s.fillStyle="#f4efe6",s.beginPath(),s.arc(0,0,58,0,7),s.fill(),s.fillStyle="#111",s.font="bold 66px Space Grotesk, Arial",s.textAlign="center",s.textBaseline="middle",s.fillText(e,0,3),s.restore();let a=new Fe(new mr(.19,64,40),new Gn({map:_n(i),roughness:.08,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.3}));return a.castShadow=!0,a.userData={a:n/ku.length*Math.PI*2,r:.75+n%3*.28,y:n%4*.22},je.add(a),a}),us=st(0,1.7,-8);je.traverse(r=>{let e=r.material?[].concat(r.material):[];for(let t of e)t.isMeshStandardMaterial&&!t._envK&&(t.envMapIntensity*=im,t._envK=1)});new La().load("logo.png",r=>{r.colorSpace=gt,r.anisotropy=8,Qa.map=r,Qa.emissiveMap=r,Qa.needsUpdate=!0});var Em=new dt(innerWidth*Xn,innerHeight*Xn,{type:ht,samples:Tt?0:4}),Rn=new ka(Xt,Em);Rn.addPass(new Va(je,gn));var Ar=Tt?null:new Wa(je,gn,{focus:4,aperture:.0016,maxblur:.006});Ar&&Rn.addPass(Ar);var hd=new br(new ce(innerWidth,innerHeight).multiplyScalar(Tt?.5:1),.55,.5,.92);Rn.addPass(hd);Rn.addPass(new Xa);var Ac=new Sr({uniforms:{tDiffuse:{value:null},time:{value:0},ca:{value:Tt?6e-4:.0012}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float time; uniform float ca; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec2 d = vUv - .5; float r2 = dot(d,d);
      vec3 c = vec3(texture2D(tDiffuse, vUv + d*ca*r2*8.).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - d*ca*r2*8.).b);
      c *= 1. - r2 * .9;                              /* lens vignette */
      c += (h(vUv * 900. + time) - .5) * .035;         /* film grain */
      gl_FragColor = vec4(c, 1.);
    }`});Rn.addPass(Ac);var Ci=.44,_c=.12;function ud(r){if(r<_c)return 0;if(r<Ci){let e=mn(r,_c,Ci);return Qf(0,ds+ms+.1,Math.pow(e,1.25))}return ds+ms+.1-(r-Ci)*24}var Vu=r=>{let e=ud(r);return{pos:st(.05,.55,e+2),look:st(0,.26,e-5)}},Wn=(r,e)=>()=>({pos:r,look:e}),Ya=[[0,Wn(st(4.8,3.1,5.2),st(0,.6,-8))],[.13,Vu],[.37,Vu],[.445,Wn(st(1.6,.7,-16.6),st(0,.3,-19.4))],[.53,Wn(st(2.5,1.3,-15.4),st(0,.45,-19.6))],[.62,Wn(st(-3.4,2.6,-12.5),st(0,1.5,-18))],[.74,Wn(st(3.6,2.3,-11.4),st(0,1.6,-18))],[.8,Wn(st(1.9,2.1,-5.4),us)],[.87,Wn(st(-2.1,1.9,-5.2),us)],[.95,Wn(st(0,6,2.5),st(0,.5,-12))],[1,Wn(st(0,8.5,1),st(0,0,-12))]];function Rc(r){let e=0;for(;e<Ya.length-2&&r>Ya[e+1][0];)e++;let[t,n]=Ya[e],[i,s]=Ya[e+1],a=Mc(mn(r,t,i)),o=n(r),c=s(r);return{pos:o.pos.clone().lerp(c.pos,a),look:o.look.clone().lerp(c.look,a)}}var dd=[...document.querySelectorAll(".panel")];{let r=document.getElementById("rail");dd.forEach(e=>{let t=document.createElement("button");t.innerHTML=`<span>${e.dataset.label}</span><i></i>`,t.dataset.go=e.dataset.in==="0"?0:Math.min(1,(+e.dataset.in+Math.min(1,+e.dataset.out))/2),t.setAttribute("aria-label",e.dataset.label),r.appendChild(t),e._dot=t}),document.addEventListener("click",e=>{let t=e.target.closest("[data-go]");t&&(e.preventDefault(),scrollTo({top:+t.dataset.go*(document.documentElement.scrollHeight-innerHeight),behavior:Ja?"auto":"smooth"}))})}function wm(r){for(let e of dd){let t=+e.dataset.in,n=+e.dataset.out,i=.025,s=t===0?1-mn(r,n-i,n):Math.min(mn(r,t-i,t),1-mn(r,n-i,n));e.style.opacity=s;let a=e.classList.contains("center")||Tt&&innerWidth<=760?"":"translateY(-50%) ";e.style.transform=`${a}translateY(${(1-s)*(r<t?40:-40)}px)`,e.classList.toggle("live",s>.05),e._dot.classList.toggle("on",s>.5)}}var pd=()=>Xu(scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)),Ri=pd(),dc=0,pc=0,fd=0,md=0;addEventListener("pointermove",r=>{fd=r.clientX/innerWidth-.5,md=r.clientY/innerHeight-.5},{passive:!0});var Tm=document.getElementById("bar"),Wu=new xr,fc=new R,Er=0,Za=0,mc=0;function Am(r){if(Er>=3||(Za++,mc+=r,Za<45))return;let e=mc/Za;if(Za=0,mc=0,e<.036){Er=3;return}Er++,Er===1&&(Ar&&(Ar.enabled=!1),Li.visible=!1),Er===2&&(Xn=Math.min(Xn,1),Xt.setPixelRatio(Xn),Rn.setPixelRatio?.(Xn),xc(),hd.enabled=!1),Er===3&&(Xt.setPixelRatio(.75),Rn.setPixelRatio?.(.75),xc(),Ac.enabled=!1,to.visible=!1)}function gd(){let r=Wu.getDelta(),e=Math.min(r,.05),t=Wu.elapsedTime;t>1.5&&Am(r);let n=pd();Ri+=(n-Ri)*(Ja?1:1-Math.pow(.0015,e)),Math.abs(n-Ri)<1e-5&&(Ri=n),dc+=(fd-dc)*.05,pc+=(md-pc)*.05;let i=Ri;Tm.style.width=i*100+"%",wm(i);let s=Rc(i);gn.position.copy(s.pos).add(st(dc*.45,-pc*.25,0)),Ja||(gn.position.y+=Math.sin(t*.6)*.015),fc.copy(s.look),gn.lookAt(fc);let a=ud(i),o=fn.position.z,c=i>Ci?Math.min(.6,(i-Ci)*10):0;fn.position.set(Math.sin(mn(i,_c,Ci)*Math.PI)*.12,ms+.031-c,a),fn.rotation.x+=(fn.position.z-o)/ms,fn.visible=a>-21.2,xn.position.set(1.2,6,fn.position.z+4),xn.target.position.set(0,0,fn.position.z-6);let l=Math.max(0,(i-Ci)*11);for(let u of Ec){let p=u.obj;if(l===0){p.position.set(u.x,.03,u.z),p.rotation.set(0,0,0);continue}let g=Math.hypot(u.x,u.z-ds)*.25,v=Math.max(0,l-g);p.position.set(u.x+u.v.x*v*.7,Math.max(.11,.03+u.v.y*v-4.9*v*v),u.z+u.v.z*v*.7);let f=Math.min(v,1.1);p.rotation.set(u.av.x*f*.25+(v>0?Math.PI/2*Math.min(1,v*3):0),u.av.y*f*.3,u.av.z*f*.25)}let h=Math.max(mn(i,.52,.6)*(1-mn(i,.76,.82)),(1-mn(i,.03,.1))*.2);for(let u of cd){let p=u.userData,g=t*p.sp+p.ph+i*8;u.rotation.set(Math.sin(g)*p.amp*.9,0,Math.cos(g*1.3)*p.amp),p.core.opacity=h*.95,p.halo.opacity=h*.1,u.visible=h>.01}je.fog.density=.035-h*.01,rd.uniforms.k.value=.07*(1-h*.6);let d=mn(i,.74,.8)*(1-mn(i,.9,.95));bm.forEach((u,p)=>{let g=u.userData,v=g.a+t*.25+i*5;u.position.set(us.x+Math.cos(v)*g.r,us.y+g.y-.3+Math.sin(t+p)*.08,us.z+Math.sin(v)*g.r),u.rotation.y=-v*2,u.rotation.x=t*.4+p,u.scale.setScalar(Math.max(.001,Mc(d))),u.visible=d>0}),Ja||(to.position.y=Math.sin(t*.1)*.1,to.rotation.y=Math.sin(t*.05)*.02),wc.rotation.z=t*.3,Tc.rotation.z=-t*.2,Sc.intensity=10+Math.sin(t*2)*2,Ar&&(Ar.uniforms.focus.value=gn.position.distanceTo(i>.13&&i<.44?fn.position:fc)),Ac.uniforms.time.value=t%100,Rn.render(),requestAnimationFrame(gd)}function xc(){gn.aspect=innerWidth/innerHeight,gn.updateProjectionMatrix(),Xt.setSize(innerWidth,innerHeight),Rn.setSize(innerWidth,innerHeight)}addEventListener("resize",xc);gn.position.copy(Rc(Ri).pos);gn.lookAt(Rc(Ri).look);for(let r of[...je.children]){try{Xt.compile(r,gn,je)}catch{}await new Promise(e=>setTimeout(e,0))}await yc();Rn.render();await yc();if(document.documentElement.classList.contains("nogl"))throw new Error("3D aborted (fallback already shown)");window.__3dReady=!0;document.documentElement.classList.add("ready");document.getElementById("loader").classList.add("done");requestAnimationFrame(gd);
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/
