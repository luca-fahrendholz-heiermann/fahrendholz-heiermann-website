import{b as Td,g as Ad,i as Rd,k as $a,l as Cd}from"./chunk-A5ZTPR6Q.js";import{A as wd,B as ht,C as be,b as ci,c as $l,e as is,z as Ed}from"./chunk-V3L2VTIW.js";var gt=ci($l());var Ve=ci(is()),Yn=(i,e,t)=>i==="en"?t:e,Pd=i=>`rgb(${i.map(e=>Math.round(e*255)).join(",")})`,Id=({s:i,lang:e,skills:t,onClose:n})=>{let s=i.uc?Td[i.uc-1]:null;return(0,Ve.jsxs)("div",{className:"lab-ui lab-card",style:{borderColor:i.c},children:[(0,Ve.jsx)("button",{className:"lab-x",onClick:n,children:"\u2715"}),(0,Ve.jsxs)("div",{className:"kicker",style:{color:i.c},children:[i.kind==="uc"?`Use Case ${i.uc}`:ht(i.t,e)," \xB7 ",Yn(e,"gescannt & analysiert","scanned & analysed")]}),(0,Ve.jsx)("h2",{children:s?ht(s.title,e):ht(i.t,e)}),t.map(r=>(0,Ve.jsxs)("div",{className:"lab-skillgot",children:[(0,Ve.jsx)("span",{children:r.icon}),(0,Ve.jsxs)("div",{children:[(0,Ve.jsx)("small",{children:Yn(e,"Skill freigeschaltet","Skill unlocked")}),(0,Ve.jsxs)("b",{children:[ht(r.t,e),r.key?` [${r.key}]`:` \xB7 ${Yn(e,"passiv","passive")}`]}),(0,Ve.jsx)("em",{children:ht(r.d,e)})]})]},r.id)),(0,Ve.jsxs)("div",{className:"lab-parts",children:[(0,Ve.jsx)("small",{children:Yn(e,"X-AVIS hat erkannt","X-AVIS detected")}),i.parts.map((r,a)=>(0,Ve.jsxs)("span",{style:{borderColor:Pd(r.c)},children:[(0,Ve.jsx)("i",{style:{background:Pd(r.c)}}),ht(r.name,e)]},a))]}),s&&(0,Ve.jsxs)(Ve.Fragment,{children:[(0,Ve.jsx)("p",{className:"lab-claim",children:ht(s.claim,e)}),(0,Ve.jsx)("video",{src:`media/uc${s.n}_${e}.mp4`,poster:`media/thumb_uc${s.n}_${e}.jpg`,controls:!0,muted:!0,playsInline:!0},`${s.n}-${e}`),(0,Ve.jsx)("ol",{children:s.flow.map((r,a)=>(0,Ve.jsx)("li",{children:ht(r,e)},a))}),(0,Ve.jsx)("div",{className:"lab-kpis",children:s.value.map((r,a)=>(0,Ve.jsxs)("div",{children:[(0,Ve.jsx)("b",{children:r.v}),(0,Ve.jsx)("span",{children:ht(r.t,e)})]},a))}),(0,Ve.jsxs)("a",{className:"btn",href:`#/uc/${s.n}`,children:[Yn(e,"Zur Use-Case-Seite","Open use-case page")," \u2192"]})]}),i.kind==="docs"&&(0,Ve.jsxs)("div",{className:"lab-list",children:[Ad.map((r,a)=>(0,Ve.jsxs)("div",{children:[(0,Ve.jsx)("b",{children:ht(r.t,e)}),(0,Ve.jsx)("span",{children:ht(r.d,e)})]},a)),(0,Ve.jsxs)("a",{className:"btn",href:"#/expertise",children:[Yn(e,"Mehr unter Expertise","More in expertise")," \u2192"]})]}),i.kind==="talks"&&(0,Ve.jsx)("div",{className:"lab-list",children:Rd.slice(0,6).map((r,a)=>(0,Ve.jsxs)("div",{className:"lab-talk",children:[r.imgs[0]&&(0,Ve.jsx)("img",{src:`media/${r.imgs[0]}`,alt:""}),(0,Ve.jsxs)("div",{children:[(0,Ve.jsxs)("b",{children:[r.y&&`${r.y} \xB7 `,ht(r.t,e)]}),(0,Ve.jsx)("span",{children:ht(r.where,e)})]})]},a))}),i.kind==="bonus"&&(0,Ve.jsxs)("div",{className:"lab-list",children:[(0,Ve.jsx)("p",{className:"lab-claim",children:Yn(e,"Zielmarken sind die Br\xFCcke zwischen einzelnen Scans: \xDCber sie werden Standpunkte zueinander und zum Modell registriert. In Artefakt 2 geschieht das zielmarkenfrei \u2013 Grobregistrierung \xFCber Extended Gaussian Images (EGI) und Fourier-Mellin (FMT), Feinregistrierung per ICP, danach pr\xFCft ein MLP jedes Bauteil gegen das Soll.","Targets are the bridge between individual scans: they register positions to each other and to the model. Artefact 2 does this target-free \u2013 coarse registration via extended Gaussian images (EGI) and Fourier\u2013Mellin (FMT), fine registration via ICP, then an MLP verifies every component against the design.")}),(0,Ve.jsx)("img",{className:"lab-cardimg",src:"media/diss_5-14_b3-stahlbauhalle.jpg",alt:""}),(0,Ve.jsx)("img",{className:"lab-cardimg",src:"media/diss_5-19_verifikation-b3-stahlbauhalle.jpg",alt:""}),(0,Ve.jsx)("p",{className:"lab-claim",children:Yn(e,"Im Lab: Handheld-Scans driften (SLAM). Mit R registrierst du sie per ICP \u2013 die verschmierten W\xE4nde rasten ein.","In the lab: handheld scans drift (SLAM). Press R to register them via ICP \u2013 the smeared walls snap into place.")}),(0,Ve.jsxs)("a",{className:"btn",href:"#/expertise",children:[Yn(e,"Registrierung in der Expertise","Registration in expertise")," \u2192"]})]}),i.kind==="profile"&&(0,Ve.jsxs)("div",{className:"lab-list",children:[(0,Ve.jsxs)("div",{className:"lab-prof",children:[(0,Ve.jsx)("img",{src:"media/profile.jpg",alt:""}),(0,Ve.jsxs)("div",{children:[(0,Ve.jsx)("b",{children:$a.name}),(0,Ve.jsx)("span",{children:ht($a.role,e)})]})]}),(0,Ve.jsx)("p",{className:"lab-claim",children:ht($a.summary,e)}),(0,Ve.jsxs)("div",{className:"lab-egg",children:[(0,Ve.jsxs)("small",{children:["\u2605 Easter Egg \xB7 ",Yn(e,"Tiefe aus einem einzigen Bild","depth from a single image")]}),(0,Ve.jsxs)("div",{className:"lab-egg-imgs",children:[(0,Ve.jsx)("img",{src:"media/profile.jpg",alt:""}),(0,Ve.jsx)("span",{children:"\u2192"}),(0,Ve.jsx)("img",{src:"media/profile_depth.png",alt:""})]}),(0,Ve.jsx)("em",{children:Yn(e,"Depth Anything V2 sch\xE4tzt die relative Tiefe des Fotos. Statt \xFCber ein Lochkameramodell entsteht die Punktwolke als Relief \xFCber einer Referenzebene, dem Bildtr\xE4ger \u2013 wie bei meiner Kameramessung mit Referenzgeometrie statt LiDAR. Vorab berechnet, im Lab steht das Bild aus der Staffelei heraus.","Depth Anything V2 estimates the photo's relative depth. Instead of a pinhole camera model, the point cloud is built as relief over a reference plane, the picture itself \u2013 like my camera measurement with reference geometry instead of LiDAR. Precomputed; in the lab the picture pops out of the easel.")})]}),(0,Ve.jsx)("div",{className:"lab-links",children:Cd.map(r=>(0,Ve.jsxs)("a",{href:r.href,target:"_blank",rel:"noopener noreferrer",children:[r.k," \u2197"]},r.k))}),(0,Ve.jsxs)("a",{className:"btn",href:"#/profil",children:[Yn(e,"Vollst\xE4ndiges Profil","Full profile")," \u2192"]})]}),(0,Ve.jsx)("button",{className:"btn ghost lab-cont",onClick:n,children:Yn(e,"Weiter erkunden","Keep exploring")})]})};var lm=0,Ld=1,cm=2;var Zf=1,hm=2,Oi=3,Ei=0,Gn=1,on=2,fs=0,Hi=1,ms=2,Nd=3,Dd=4,um=5,Vs=100,dm=101,fm=102,pm=103,mm=104,gm=200,xm=201,_m=202,ym=203,Ic=204,Lc=205,vm=206,bm=207,Mm=208,Sm=209,Em=210,wm=211,Tm=212,Am=213,Rm=214,Nc=0,Dc=1,Uc=2,wr=3,kc=4,Fc=5,Oc=6,zc=7,Jf=0,Cm=1,Pm=2,ps=0,Im=1,Lm=2,Nm=3,Dm=4,Um=5,km=6,Fm=7,Ud="attached",Om="detached",jf=300,Tr=301,Ar=302,Bc=303,Hc=304,pl=306,Ws=1e3,zi=1001,ga=1002,Ln=1003,Jh=1004;var yr=1005;var Hn=1006,ua=1007;var Si=1008;var Vi=1009,Qf=1010,ep=1011,xa=1012,jh=1013,Xs=1014,mi=1015,Ra=1016,Qh=1017,eu=1018,Rr=1020,tp=35902,np=1021,ip=1022,Vn=1023,sp=1024,rp=1025,br=1026,Cr=1027,tu=1028,nu=1029,ap=1030,iu=1031;var su=1033,To=33776,Ao=33777,Ro=33778,Co=33779,Vc=35840,Gc=35841,Wc=35842,Xc=35843,Yc=36196,$c=37492,qc=37496,Kc=37808,Zc=37809,Jc=37810,jc=37811,Qc=37812,eh=37813,th=37814,nh=37815,ih=37816,sh=37817,rh=37818,ah=37819,oh=37820,lh=37821,Po=36492,ch=36494,hh=36495,op=36283,uh=36284,dh=36285,fh=36286;var Pr=2300,Ir=2301,ql=2302,kd=2400,Fd=2401,Od=2402,zm=2500;var lp=0,ml=1,Ca=2,Bm=3200,Hm=3201;var cp=0,Vm=1,hs="",mn="srgb",En="srgb-linear",ru="display-p3",gl="display-p3-linear",Lo="linear",nn="srgb",No="rec709",Do="p3";var sr=7680;var zd=519,Gm=512,Wm=513,Xm=514,hp=515,Ym=516,$m=517,qm=518,Km=519,ph=35044,xl=35048;var Bd="300 es",Bi=2e3,Uo=2001,gs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hd=1234567,Mr=Math.PI/180,Lr=180/Math.PI;function gi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function gn(i,e,t){return Math.max(e,Math.min(t,i))}function au(i,e){return(i%e+e)%e}function Zm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Jm(i,e,t){return i!==e?(t-i)/(e-i):0}function da(i,e,t){return(1-t)*i+t*e}function jm(i,e,t,n){return da(i,e,1-Math.exp(-t*n))}function Qm(i,e=1){return e-Math.abs(au(i,e*2)-e)}function e0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function t0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function n0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function i0(i,e){return i+Math.random()*(e-i)}function s0(i){return i*(.5-Math.random())}function r0(i){i!==void 0&&(Hd=i);let e=Hd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function a0(i){return i*Mr}function o0(i){return i*Lr}function l0(i){return(i&i-1)===0&&i!==0}function c0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function h0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function u0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Pa={DEG2RAD:Mr,RAD2DEG:Lr,generateUUID:gi,clamp:gn,euclideanModulo:au,mapLinear:Zm,inverseLerp:Jm,lerp:da,damp:jm,pingpong:Qm,smoothstep:e0,smootherstep:t0,randInt:n0,randFloat:i0,randFloatSpread:s0,seededRandom:r0,degToRad:a0,radToDeg:o0,isPowerOfTwo:l0,ceilPowerOfTwo:c0,floorPowerOfTwo:h0,setQuaternionFromProperEuler:u0,normalize:Yt,denormalize:pi},Ie=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},At=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],b=s[1],_=s[4],y=s[7],D=s[2],T=s[5],R=s[8];return r[0]=a*x+o*b+l*D,r[3]=a*m+o*_+l*T,r[6]=a*p+o*y+l*R,r[1]=c*x+h*b+u*D,r[4]=c*m+h*_+u*T,r[7]=c*p+h*y+u*R,r[2]=d*x+f*b+g*D,r[5]=d*m+f*_+g*T,r[8]=d*p+f*y+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Kl.makeScale(e,t)),this}rotate(e){return this.premultiply(Kl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Kl=new At;function up(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _a(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function d0(){let i=_a("canvas");return i.style.display="block",i}var Vd={};function Io(i){i in Vd||(Vd[i]=!0,console.warn(i))}function f0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function p0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function m0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Gd=new At().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wd=new At().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ta={[En]:{transfer:Lo,primaries:No,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[mn]:{transfer:nn,primaries:No,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[gl]:{transfer:Lo,primaries:Do,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Wd),fromReference:i=>i.applyMatrix3(Gd)},[ru]:{transfer:nn,primaries:Do,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Wd),fromReference:i=>i.applyMatrix3(Gd).convertLinearToSRGB()}},g0=new Set([En,gl]),Vt={enabled:!0,_workingColorSpace:En,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!g0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=ta[e].toReference,s=ta[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ta[i].primaries},getTransfer:function(i){return i===hs?Lo:ta[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(ta[e].luminanceCoefficients)}};function Sr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rr,mh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rr===void 0&&(rr=_a("canvas")),rr.width=e.width,rr.height=e.height;let n=rr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_a("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Sr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Sr(t[n]/255)*255):t[n]=Sr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},x0=0,ko=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Jl(s[a].image)):r.push(Jl(s[a]))}else r=Jl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Jl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _0=0,Sn=class i extends gs{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=zi,s=zi,r=Hn,a=Si,o=Vn,l=Vi,c=i.DEFAULT_ANISOTROPY,h=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=gi(),this.name="",this.source=new ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ws:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ws:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=jf;Sn.DEFAULT_ANISOTROPY=1;var Xt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(f+1)/2,D=(p+1)/2,T=(h+d)/4,R=(u+x)/4,U=(g+m)/4;return _>y&&_>D?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=R/n):y>D?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=U/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=R/r,s=U/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gh=class extends gs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Sn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ko(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gi=class extends gh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Fo=class extends Sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xh=class extends Sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*x,b=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let D=Math.sqrt(_),T=Math.atan2(D,p*b);m=Math.sin(m*T)/D,o=Math.sin(o*T)/D}let y=o*b;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+x*y,m===1-o){let D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jl.copy(this).projectOnVector(e),this.sub(jl)}reflect(e){return this.sub(jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jl=new P,Xd=new xi,Wn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(r,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qa.copy(n.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),Ka.subVectors(this.max,na),ar.subVectors(e.a,na),or.subVectors(e.b,na),lr.subVectors(e.c,na),ss.subVectors(or,ar),rs.subVectors(lr,or),Us.subVectors(ar,lr);let t=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Us.z,Us.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Us.z,0,-Us.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Us.y,Us.x,0];return!Ql(t,ar,or,lr,Ka)||(t=[1,0,0,0,1,0,0,0,1],!Ql(t,ar,or,lr,Ka))?!1:(Za.crossVectors(ss,rs),t=[Za.x,Za.y,Za.z],Ql(t,ar,or,lr,Ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Li=[new P,new P,new P,new P,new P,new P,new P,new P],hi=new P,qa=new Wn,ar=new P,or=new P,lr=new P,ss=new P,rs=new P,Us=new P,na=new P,Ka=new P,Za=new P,ks=new P;function Ql(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ks.fromArray(i,r);let o=s.x*Math.abs(ks.x)+s.y*Math.abs(ks.y)+s.z*Math.abs(ks.z),l=e.dot(ks),c=t.dot(ks),h=n.dot(ks);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var y0=new Wn,ia=new P,ec=new P,Kn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):y0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);let t=ia.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ia,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(ec)),this.expandByPoint(ia.copy(e.center).sub(ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ni=new P,tc=new P,Ja=new P,as=new P,nc=new P,ja=new P,ic=new P,Nr=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){tc.copy(e).add(t).multiplyScalar(.5),Ja.copy(t).sub(e).normalize(),as.copy(this.origin).sub(tc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ja),o=as.dot(this.direction),l=-as.dot(Ja),c=as.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(tc).addScaledVector(Ja,d),f}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);let n=Ni.dot(this.direction),s=Ni.dot(Ni)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,n,s,r){nc.subVectors(t,e),ja.subVectors(n,e),ic.crossVectors(nc,ja);let a=this.direction.dot(ic),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;as.subVectors(this.origin,e);let l=o*this.direction.dot(ja.crossVectors(as,ja));if(l<0)return null;let c=o*this.direction.dot(nc.cross(as));if(c<0||l+c>a)return null;let h=-o*as.dot(ic);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pt=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,x,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/cr.setFromMatrixColumn(e,0).length(),r=1/cr.setFromMatrixColumn(e,1).length(),a=1/cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v0,e,b0)}lookAt(e,t,n){let s=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),os.crossVectors(n,$n),os.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),os.crossVectors(n,$n)),os.normalize(),Qa.crossVectors($n,os),s[0]=os.x,s[4]=Qa.x,s[8]=$n.x,s[1]=os.y,s[5]=Qa.y,s[9]=$n.y,s[2]=os.z,s[6]=Qa.z,s[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],b=n[3],_=n[7],y=n[11],D=n[15],T=s[0],R=s[4],U=s[8],Z=s[12],v=s[1],E=s[5],O=s[9],V=s[13],Y=s[2],ie=s[6],k=s[10],ae=s[14],q=s[3],le=s[7],Ae=s[11],ye=s[15];return r[0]=a*T+o*v+l*Y+c*q,r[4]=a*R+o*E+l*ie+c*le,r[8]=a*U+o*O+l*k+c*Ae,r[12]=a*Z+o*V+l*ae+c*ye,r[1]=h*T+u*v+d*Y+f*q,r[5]=h*R+u*E+d*ie+f*le,r[9]=h*U+u*O+d*k+f*Ae,r[13]=h*Z+u*V+d*ae+f*ye,r[2]=g*T+x*v+m*Y+p*q,r[6]=g*R+x*E+m*ie+p*le,r[10]=g*U+x*O+m*k+p*Ae,r[14]=g*Z+x*V+m*ae+p*ye,r[3]=b*T+_*v+y*Y+D*q,r[7]=b*R+_*E+y*ie+D*le,r[11]=b*U+_*O+y*k+D*Ae,r[15]=b*Z+_*V+y*ae+D*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+x*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],b=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,_=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,y=h*x*c-g*u*c+g*o*f-a*x*f-h*o*p+a*u*p,D=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,T=t*b+n*_+s*y+r*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=b*R,e[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*R,e[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*R,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*R,e[4]=_*R,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*R,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*R,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*R,e[8]=y*R,e[9]=(g*u*r-h*x*r-g*n*f+t*x*f+h*n*p-t*u*p)*R,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*p+t*o*p)*R,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*R,e[12]=D*R,e[13]=(h*x*s-g*u*s+g*n*d-t*x*d-h*n*m+t*u*m)*R,e[14]=(g*o*s-a*x*s-g*n*l+t*x*l+a*n*m-t*o*m)*R,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,b=l*c,_=l*h,y=l*u,D=n.x,T=n.y,R=n.z;return s[0]=(1-(x+p))*D,s[1]=(f+y)*D,s[2]=(g-_)*D,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(d+p))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+_)*R,s[9]=(m-b)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=cr.set(s[0],s[1],s[2]).length(),a=cr.set(s[4],s[5],s[6]).length(),o=cr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ui.copy(this);let c=1/r,h=1/a,u=1/o;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=u,ui.elements[9]*=u,ui.elements[10]*=u,t.setFromRotationMatrix(ui),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Bi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(o===Bi)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Uo)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Bi){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,f=(n+s)*h,g,x;if(o===Bi)g=(a+r)*u,x=-2*u;else if(o===Uo)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},cr=new P,ui=new pt,v0=new P(0,0,0),b0=new P(1,1,1),os=new P,Qa=new P,$n=new P,Yd=new pt,$d=new xi,wi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(gn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $d.setFromEuler(this),this.setFromQuaternion($d,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wi.DEFAULT_ORDER="XYZ";var Oo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},M0=0,qd=new P,hr=new xi,Di=new pt,eo=new P,sa=new P,S0=new P,E0=new xi,Kd=new P(1,0,0),Zd=new P(0,1,0),Jd=new P(0,0,1),jd={type:"added"},w0={type:"removed"},ur={type:"childadded",child:null},sc={type:"childremoved",child:null},ln=class i extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new wi,n=new xi,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new At}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(Kd,e)}rotateY(e){return this.rotateOnAxis(Zd,e)}rotateZ(e){return this.rotateOnAxis(Jd,e)}translateOnAxis(e,t){return qd.copy(e).applyQuaternion(this.quaternion),this.position.add(qd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kd,e)}translateY(e){return this.translateOnAxis(Zd,e)}translateZ(e){return this.translateOnAxis(Jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?eo.copy(e):eo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(sa,eo,this.up):Di.lookAt(eo,sa,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),hr.setFromRotationMatrix(Di),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jd),ur.child=e,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(w0),sc.child=e,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jd),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,S0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,E0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};ln.DEFAULT_UP=new P(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var di=new P,Ui=new P,rc=new P,ki=new P,dr=new P,fr=new P,Qd=new P,ac=new P,oc=new P,lc=new P,cc=new Xt,hc=new Xt,uc=new Xt,us=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),di.subVectors(e,t),s.cross(di);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){di.subVectors(s,t),Ui.subVectors(n,t),rc.subVectors(e,t);let a=di.dot(di),o=di.dot(Ui),l=di.dot(rc),c=Ui.dot(Ui),h=Ui.dot(rc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return cc.setScalar(0),hc.setScalar(0),uc.setScalar(0),cc.fromBufferAttribute(e,t),hc.fromBufferAttribute(e,n),uc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(cc,r.x),a.addScaledVector(hc,r.y),a.addScaledVector(uc,r.z),a}static isFrontFacing(e,t,n,s){return di.subVectors(n,t),Ui.subVectors(e,t),di.cross(Ui).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),di.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;dr.subVectors(s,n),fr.subVectors(r,n),ac.subVectors(e,n);let l=dr.dot(ac),c=fr.dot(ac);if(l<=0&&c<=0)return t.copy(n);oc.subVectors(e,s);let h=dr.dot(oc),u=fr.dot(oc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(dr,a);lc.subVectors(e,r);let f=dr.dot(lc),g=fr.dot(lc);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(fr,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Qd.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Qd,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(dr,a).addScaledVector(fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},to={h:0,s:0,l:0};function dc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var et=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Vt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Vt.workingColorSpace){if(e=au(e,1),t=gn(t,0,1),n=gn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=dc(a,r,e+1/3),this.g=dc(a,r,e),this.b=dc(a,r,e-1/3)}return Vt.toWorkingColorSpace(this,s),this}setStyle(e,t=mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){let n=dp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}copyLinearToSRGB(e){return this.r=Zl(e.r),this.g=Zl(e.g),this.b=Zl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return Vt.fromWorkingColorSpace(In.copy(this),e),Math.round(gn(In.r*255,0,255))*65536+Math.round(gn(In.g*255,0,255))*256+Math.round(gn(In.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vt.workingColorSpace){Vt.fromWorkingColorSpace(In.copy(this),t);let n=In.r,s=In.g,r=In.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Vt.workingColorSpace){return Vt.fromWorkingColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=mn){Vt.fromWorkingColorSpace(In.copy(this),e);let t=In.r,n=In.g,s=In.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+t,ls.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ls),e.getHSL(to);let n=da(ls.h,to.h,t),s=da(ls.s,to.s,t),r=da(ls.l,to.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new et;et.NAMES=dp;var T0=0,Zn=class extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=Hi,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ic,this.blendDst=Lc,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ic&&(n.blendSrc=this.blendSrc),this.blendDst!==Lc&&(n.blendDst=this.blendDst),this.blendEquation!==Vs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Bt=class extends Zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Jf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var pn=new P,no=new Ie,It=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ph,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),s=Yt(s,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ph&&(e.usage=this.usage),e}};var zo=class extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Bo=class extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var kt=class extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}},A0=0,ni=new pt,fc=new ln,pr=new P,qn=new Wn,ra=new Wn,Mn=new P,Kt=class i extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(up(e)?Bo:zo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new At().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return fc.lookAt(e),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];qn.setFromBufferAttribute(r),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ra.setFromBufferAttribute(o),this.morphTargetsRelative?(Mn.addVectors(qn.min,ra.min),qn.expandByPoint(Mn),Mn.addVectors(qn.max,ra.max),qn.expandByPoint(Mn)):(qn.expandByPoint(ra.min),qn.expandByPoint(ra.max))}qn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Mn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Mn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Mn.fromBufferAttribute(o,c),l&&(pr.fromBufferAttribute(e,c),Mn.add(pr)),s=Math.max(s,n.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new P,l[U]=new P;let c=new P,h=new P,u=new P,d=new Ie,f=new Ie,g=new Ie,x=new P,m=new P;function p(U,Z,v){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,Z),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,U),f.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let E=1/(f.x*g.y-g.x*f.y);isFinite(E)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(E),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(E),o[U].add(x),o[Z].add(x),o[v].add(x),l[U].add(m),l[Z].add(m),l[v].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,Z=b.length;U<Z;++U){let v=b[U],E=v.start,O=v.count;for(let V=E,Y=E+O;V<Y;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let _=new P,y=new P,D=new P,T=new P;function R(U){D.fromBufferAttribute(s,U),T.copy(D);let Z=o[U];_.copy(Z),_.sub(D.multiplyScalar(D.dot(Z))).normalize(),y.crossVectors(T,Z);let E=y.dot(l[U])<0?-1:1;a.setXYZW(U,_.x,_.y,_.z,E)}for(let U=0,Z=b.length;U<Z;++U){let v=b[U],E=v.start,O=v.count;for(let V=E,Y=E+O;V<Y;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mn.fromBufferAttribute(e,t),Mn.normalize(),e.setXYZ(t,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new It(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ef=new pt,Fs=new Nr,io=new Kn,tf=new P,so=new P,ro=new P,ao=new P,pc=new P,oo=new P,nf=new P,lo=new P,we=class extends ln{constructor(e=new Kt,t=new Bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){oo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(pc.fromBufferAttribute(u,e),a?oo.addScaledVector(pc,h):oo.addScaledVector(pc.sub(t),h))}t.add(oo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),Fs.copy(e.ray).recast(e.near),!(io.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(io,tf)===null||Fs.origin.distanceToSquared(tf)>(e.far-e.near)**2))&&(ef.copy(r).invert(),Fs.copy(e.ray).applyMatrix4(ef),!(n.boundingBox!==null&&Fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,D=_;y<D;y+=3){let T=o.getX(y),R=o.getX(y+1),U=o.getX(y+2);s=co(this,p,e,n,c,h,u,T,R,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let b=o.getX(m),_=o.getX(m+1),y=o.getX(m+2);s=co(this,a,e,n,c,h,u,b,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,D=_;y<D;y+=3){let T=y,R=y+1,U=y+2;s=co(this,p,e,n,c,h,u,T,R,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let b=m,_=m+1,y=m+2;s=co(this,a,e,n,c,h,u,b,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function R0(i,e,t,n,s,r,a,o){let l;if(e.side===Gn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ei,o),l===null)return null;lo.copy(o),lo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(lo);return c<t.near||c>t.far?null:{distance:c,point:lo.clone(),object:i}}function co(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,so),i.getVertexPosition(l,ro),i.getVertexPosition(c,ao);let h=R0(i,e,t,n,so,ro,ao,nf);if(h){let u=new P;us.getBarycoord(nf,so,ro,ao,u),s&&(h.uv=us.getInterpolatedAttribute(s,o,l,c,u,new Ie)),r&&(h.uv1=us.getInterpolatedAttribute(r,o,l,c,u,new Ie)),a&&(h.normal=us.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};us.getNormal(so,ro,ao,d.normal),h.face=d,h.barycoord=u}return h}var Zt=class i extends Kt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(u,2));function g(x,m,p,b,_,y,D,T,R,U,Z){let v=y/R,E=D/U,O=y/2,V=D/2,Y=T/2,ie=R+1,k=U+1,ae=0,q=0,le=new P;for(let Ae=0;Ae<k;Ae++){let ye=Ae*E-V;for(let yt=0;yt<ie;yt++){let Ot=yt*v-O;le[x]=Ot*b,le[m]=ye*_,le[p]=Y,c.push(le.x,le.y,le.z),le[x]=0,le[m]=0,le[p]=T>0?1:-1,h.push(le.x,le.y,le.z),u.push(yt/R),u.push(1-Ae/U),ae+=1}}for(let Ae=0;Ae<U;Ae++)for(let ye=0;ye<R;ye++){let yt=d+ye+ie*Ae,Ot=d+ye+ie*(Ae+1),ne=d+(ye+1)+ie*(Ae+1),fe=d+(ye+1)+ie*Ae;l.push(yt,Ot,fe),l.push(Ot,ne,fe),q+=6}o.addGroup(f,q,Z),f+=q,d+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Dr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function On(i){let e={};for(let t=0;t<i.length;t++){let n=Dr(i[t]);for(let s in n)e[s]=n[s]}return e}function C0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Vt.workingColorSpace}var P0={clone:Dr,merge:On},I0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jn=class extends Zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I0,this.fragmentShader=L0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=C0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ho=class extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},cs=new P,sf=new Ie,rf=new Ie,dn=class extends Ho{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,t){return this.getViewBounds(e,sf,rf),t.subVectors(rf,sf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},mr=-90,gr=1,_h=class extends ln{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(mr,gr,e,t);s.layers=this.layers,this.add(s);let r=new dn(mr,gr,e,t);r.layers=this.layers,this.add(r);let a=new dn(mr,gr,e,t);a.layers=this.layers,this.add(a);let o=new dn(mr,gr,e,t);o.layers=this.layers,this.add(o);let l=new dn(mr,gr,e,t);l.layers=this.layers,this.add(l);let c=new dn(mr,gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Vo=class extends Sn{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Tr,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yh=class extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Vo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zt(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gn,blending:fs});r.uniforms.tEquirect.value=t;let a=new we(s,r),o=t.minFilter;return t.minFilter===Si&&(t.minFilter=Hn),new _h(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},mc=new P,N0=new P,D0=new At,fi=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=mc.subVectors(n,t).cross(N0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(mc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||D0.getNormalMatrix(e),s=this.coplanarPoint(mc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Os=new Kn,ho=new P,ya=class{constructor(e=new fi,t=new fi,n=new fi,s=new fi,r=new fi,a=new fi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],b=s[13],_=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,m-f,y-p).normalize(),n[1].setComponents(l+r,d+c,m+f,y+p).normalize(),n[2].setComponents(l+a,d+h,m+g,y+b).normalize(),n[3].setComponents(l-a,d-h,m-g,y-b).normalize(),n[4].setComponents(l-o,d-u,m-x,y-_).normalize(),t===Bi)n[5].setComponents(l+o,d+u,m+x,y+_).normalize();else if(t===Uo)n[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(e){return Os.center.set(0,0,0),Os.radius=.7071067811865476,Os.applyMatrix4(e.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ho.x=s.normal.x>0?e.max.x:e.min.x,ho.y=s.normal.y>0?e.max.y:e.min.y,ho.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function pp(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function U0(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ti=class i extends Kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let b=p*d-a;for(let _=0;_<c;_++){let y=_*u-r;g.push(y,-b,0),x.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let _=b+c*p,y=b+c*(p+1),D=b+1+c*(p+1),T=b+1+c*p;f.push(_,y,T),f.push(y,D,T)}this.setIndex(f),this.setAttribute("position",new kt(g,3)),this.setAttribute("normal",new kt(x,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},k0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F0=`#ifdef USE_ALPHAHASH
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
#endif`,O0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,z0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V0=`#ifdef USE_AOMAP
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
#endif`,G0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,X0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Y0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,q0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,K0=`#ifdef USE_IRIDESCENCE
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
#endif`,Z0=`#ifdef USE_BUMPMAP
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
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rg=`#define PI 3.141592653589793
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
} // validated`,ag=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,og=`vec3 transformedNormal = objectNormal;
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
#endif`,lg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dg="gl_FragColor = linearToOutputTexel( gl_FragColor );",fg=`
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
}`,pg=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,mg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gg=`#ifdef USE_ENVMAP
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
#endif`,xg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_g=`#ifdef USE_ENVMAP
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
#endif`,yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sg=`#ifdef USE_GRADIENTMAP
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
}`,Eg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ag=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Rg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Cg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ng=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Dg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Ug=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,kg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Og=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xg=`#if defined( USE_POINTS_UV )
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
#endif`,Yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$g=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,e1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,t1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,s1=`#ifdef USE_NORMALMAP
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
#endif`,r1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,u1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,y1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,v1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,b1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M1=`#ifdef USE_SKINNING
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
#endif`,S1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E1=`#ifdef USE_SKINNING
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
#endif`,w1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R1=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,C1=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,P1=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,U1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k1=`uniform sampler2D t2D;
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
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H1=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,V1=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,G1=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,W1=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q1=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K1=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Z1=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,J1=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,j1=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Q1=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,ex=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,tx=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,nx=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ix=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,sx=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,rx=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,ax=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ox=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,lx=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,cx=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,hx=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,ux=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,dx=`uniform vec3 color;
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
}`,fx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,px=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Tt={alphahash_fragment:k0,alphahash_pars_fragment:F0,alphamap_fragment:O0,alphamap_pars_fragment:z0,alphatest_fragment:B0,alphatest_pars_fragment:H0,aomap_fragment:V0,aomap_pars_fragment:G0,batching_pars_vertex:W0,batching_vertex:X0,begin_vertex:Y0,beginnormal_vertex:$0,bsdfs:q0,iridescence_fragment:K0,bumpmap_pars_fragment:Z0,clipping_planes_fragment:J0,clipping_planes_pars_fragment:j0,clipping_planes_pars_vertex:Q0,clipping_planes_vertex:eg,color_fragment:tg,color_pars_fragment:ng,color_pars_vertex:ig,color_vertex:sg,common:rg,cube_uv_reflection_fragment:ag,defaultnormal_vertex:og,displacementmap_pars_vertex:lg,displacementmap_vertex:cg,emissivemap_fragment:hg,emissivemap_pars_fragment:ug,colorspace_fragment:dg,colorspace_pars_fragment:fg,envmap_fragment:pg,envmap_common_pars_fragment:mg,envmap_pars_fragment:gg,envmap_pars_vertex:xg,envmap_physical_pars_fragment:Rg,envmap_vertex:_g,fog_vertex:yg,fog_pars_vertex:vg,fog_fragment:bg,fog_pars_fragment:Mg,gradientmap_pars_fragment:Sg,lightmap_pars_fragment:Eg,lights_lambert_fragment:wg,lights_lambert_pars_fragment:Tg,lights_pars_begin:Ag,lights_toon_fragment:Cg,lights_toon_pars_fragment:Pg,lights_phong_fragment:Ig,lights_phong_pars_fragment:Lg,lights_physical_fragment:Ng,lights_physical_pars_fragment:Dg,lights_fragment_begin:Ug,lights_fragment_maps:kg,lights_fragment_end:Fg,logdepthbuf_fragment:Og,logdepthbuf_pars_fragment:zg,logdepthbuf_pars_vertex:Bg,logdepthbuf_vertex:Hg,map_fragment:Vg,map_pars_fragment:Gg,map_particle_fragment:Wg,map_particle_pars_fragment:Xg,metalnessmap_fragment:Yg,metalnessmap_pars_fragment:$g,morphinstance_vertex:qg,morphcolor_vertex:Kg,morphnormal_vertex:Zg,morphtarget_pars_vertex:Jg,morphtarget_vertex:jg,normal_fragment_begin:Qg,normal_fragment_maps:e1,normal_pars_fragment:t1,normal_pars_vertex:n1,normal_vertex:i1,normalmap_pars_fragment:s1,clearcoat_normal_fragment_begin:r1,clearcoat_normal_fragment_maps:a1,clearcoat_pars_fragment:o1,iridescence_pars_fragment:l1,opaque_fragment:c1,packing:h1,premultiplied_alpha_fragment:u1,project_vertex:d1,dithering_fragment:f1,dithering_pars_fragment:p1,roughnessmap_fragment:m1,roughnessmap_pars_fragment:g1,shadowmap_pars_fragment:x1,shadowmap_pars_vertex:_1,shadowmap_vertex:y1,shadowmask_pars_fragment:v1,skinbase_vertex:b1,skinning_pars_vertex:M1,skinning_vertex:S1,skinnormal_vertex:E1,specularmap_fragment:w1,specularmap_pars_fragment:T1,tonemapping_fragment:A1,tonemapping_pars_fragment:R1,transmission_fragment:C1,transmission_pars_fragment:P1,uv_pars_fragment:I1,uv_pars_vertex:L1,uv_vertex:N1,worldpos_vertex:D1,background_vert:U1,background_frag:k1,backgroundCube_vert:F1,backgroundCube_frag:O1,cube_vert:z1,cube_frag:B1,depth_vert:H1,depth_frag:V1,distanceRGBA_vert:G1,distanceRGBA_frag:W1,equirect_vert:X1,equirect_frag:Y1,linedashed_vert:$1,linedashed_frag:q1,meshbasic_vert:K1,meshbasic_frag:Z1,meshlambert_vert:J1,meshlambert_frag:j1,meshmatcap_vert:Q1,meshmatcap_frag:ex,meshnormal_vert:tx,meshnormal_frag:nx,meshphong_vert:ix,meshphong_frag:sx,meshphysical_vert:rx,meshphysical_frag:ax,meshtoon_vert:ox,meshtoon_frag:lx,points_vert:cx,points_frag:hx,shadow_vert:ux,shadow_frag:dx,sprite_vert:fx,sprite_frag:px},Re={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},envMapRotation:{value:new At},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},Mi={basic:{uniforms:On([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:On([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new et(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:On([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:On([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:On([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new et(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:On([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:On([Re.points,Re.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:On([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:On([Re.common,Re.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:On([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:On([Re.sprite,Re.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new At}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:On([Re.common,Re.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:On([Re.lights,Re.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Mi.physical={uniforms:On([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};var uo={r:0,b:0,g:0},zs=new wi,mx=new pt;function gx(i,e,t,n,s,r,a){let o=new et(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?t:e).get(_)),_}function x(b){let _=!1,y=g(b);y===null?p(o,l):y&&y.isColor&&(p(y,1),_=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,_){let y=g(_);y&&(y.isCubeTexture||y.mapping===pl)?(h===void 0&&(h=new we(new Zt(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Dr(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),zs.copy(_.backgroundRotation),zs.x*=-1,zs.y*=-1,zs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mx.makeRotationFromEuler(zs)),h.material.toneMapped=Vt.getTransfer(y.colorSpace)!==nn,(u!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new we(new Ti(2,2),new Jn({name:"BackgroundMaterial",uniforms:Dr(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Vt.getTransfer(y.colorSpace)!==nn,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,_){b.getRGB(uo,fp(i)),n.buffers.color.setClear(uo.r,uo.g,uo.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(b,_=1){o.set(b),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:x,addToRenderList:m}}function xx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(v,E,O,V,Y){let ie=!1,k=u(V,O,E);r!==k&&(r=k,c(r.object)),ie=f(v,V,O,Y),ie&&g(v,V,O,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,y(v,E,O,V),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,E,O){let V=O.wireframe===!0,Y=n[v.id];Y===void 0&&(Y={},n[v.id]=Y);let ie=Y[E.id];ie===void 0&&(ie={},Y[E.id]=ie);let k=ie[V];return k===void 0&&(k=d(l()),ie[V]=k),k}function d(v){let E=[],O=[],V=[];for(let Y=0;Y<t;Y++)E[Y]=0,O[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:O,attributeDivisors:V,object:v,attributes:{},index:null}}function f(v,E,O,V){let Y=r.attributes,ie=E.attributes,k=0,ae=O.getAttributes();for(let q in ae)if(ae[q].location>=0){let Ae=Y[q],ye=ie[q];if(ye===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(ye=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(ye=v.instanceColor)),Ae===void 0||Ae.attribute!==ye||ye&&Ae.data!==ye.data)return!0;k++}return r.attributesNum!==k||r.index!==V}function g(v,E,O,V){let Y={},ie=E.attributes,k=0,ae=O.getAttributes();for(let q in ae)if(ae[q].location>=0){let Ae=ie[q];Ae===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(Ae=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(Ae=v.instanceColor));let ye={};ye.attribute=Ae,Ae&&Ae.data&&(ye.data=Ae.data),Y[q]=ye,k++}r.attributes=Y,r.attributesNum=k,r.index=V}function x(){let v=r.newAttributes;for(let E=0,O=v.length;E<O;E++)v[E]=0}function m(v){p(v,0)}function p(v,E){let O=r.newAttributes,V=r.enabledAttributes,Y=r.attributeDivisors;O[v]=1,V[v]===0&&(i.enableVertexAttribArray(v),V[v]=1),Y[v]!==E&&(i.vertexAttribDivisor(v,E),Y[v]=E)}function b(){let v=r.newAttributes,E=r.enabledAttributes;for(let O=0,V=E.length;O<V;O++)E[O]!==v[O]&&(i.disableVertexAttribArray(O),E[O]=0)}function _(v,E,O,V,Y,ie,k){k===!0?i.vertexAttribIPointer(v,E,O,Y,ie):i.vertexAttribPointer(v,E,O,V,Y,ie)}function y(v,E,O,V){x();let Y=V.attributes,ie=O.getAttributes(),k=E.defaultAttributeValues;for(let ae in ie){let q=ie[ae];if(q.location>=0){let le=Y[ae];if(le===void 0&&(ae==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),ae==="instanceColor"&&v.instanceColor&&(le=v.instanceColor)),le!==void 0){let Ae=le.normalized,ye=le.itemSize,yt=e.get(le);if(yt===void 0)continue;let Ot=yt.buffer,ne=yt.type,fe=yt.bytesPerElement,ke=ne===i.INT||ne===i.UNSIGNED_INT||le.gpuType===jh;if(le.isInterleavedBufferAttribute){let Le=le.data,ut=Le.stride,st=le.offset;if(Le.isInstancedInterleavedBuffer){for(let vt=0;vt<q.locationSize;vt++)p(q.location+vt,Le.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let vt=0;vt<q.locationSize;vt++)m(q.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let vt=0;vt<q.locationSize;vt++)_(q.location+vt,ye/q.locationSize,ne,Ae,ut*fe,(st+ye/q.locationSize*vt)*fe,ke)}else{if(le.isInstancedBufferAttribute){for(let Le=0;Le<q.locationSize;Le++)p(q.location+Le,le.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Le=0;Le<q.locationSize;Le++)m(q.location+Le);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let Le=0;Le<q.locationSize;Le++)_(q.location+Le,ye/q.locationSize,ne,Ae,ye*fe,ye/q.locationSize*Le*fe,ke)}}else if(k!==void 0){let Ae=k[ae];if(Ae!==void 0)switch(Ae.length){case 2:i.vertexAttrib2fv(q.location,Ae);break;case 3:i.vertexAttrib3fv(q.location,Ae);break;case 4:i.vertexAttrib4fv(q.location,Ae);break;default:i.vertexAttrib1fv(q.location,Ae)}}}}b()}function D(){U();for(let v in n){let E=n[v];for(let O in E){let V=E[O];for(let Y in V)h(V[Y].object),delete V[Y];delete E[O]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;let E=n[v.id];for(let O in E){let V=E[O];for(let Y in V)h(V[Y].object),delete V[Y];delete E[O]}delete n[v.id]}function R(v){for(let E in n){let O=n[E];if(O[v.id]===void 0)continue;let V=O[v.id];for(let Y in V)h(V[Y].object),delete V[Y];delete O[v.id]}}function U(){Z(),a=!0,r!==s&&(r=s,c(r.object))}function Z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:Z,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function _x(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x];for(let x=0;x<d.length;x++)t.update(g,n,d[x])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function yx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let U=R===Ra&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Vi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==mi&&!U)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){let R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:D,maxSamples:T}}function vx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new fi,o=new At,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,_=b*4,y=p.clippingState||null;l.value=y,y=h(g,d,_,f);for(let D=0;D!==_;++D)y[D]=t[D];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=f;_!==x;++_,y+=4)a.copy(u[_]).applyMatrix4(b,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function bx(i){let e=new WeakMap;function t(a,o){return o===Bc?a.mapping=Tr:o===Hc&&(a.mapping=Ar),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Bc||o===Hc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new yh(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ur=class extends Ho{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vr=4,af=[.125,.215,.35,.446,.526,.582],Gs=20,gc=new Ur,of=new et,xc=null,_c=0,yc=0,vc=!1,Hs=(1+Math.sqrt(5))/2,xr=1/Hs,lf=[new P(-Hs,xr,0),new P(Hs,xr,0),new P(-xr,0,Hs),new P(xr,0,Hs),new P(0,Hs,-xr),new P(0,Hs,xr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Go=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){xc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xc,_c,yc),this._renderer.xr.enabled=vc,e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Tr||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Ra,format:Vn,colorSpace:En,depthBuffer:!1},s=cf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mx(r)),this._blurMaterial=Sx(r,e,t)}return s}_compileMaterial(e){let t=new we(this._lodPlanes[0],e);this._renderer.compile(t,gc)}_sceneToCubeUV(e,t,n,s){let o=new dn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(of),h.toneMapping=ps,h.autoClear=!1;let f=new Bt({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),g=new we(new Zt,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(of),x=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let _=this._cubeSize;fo(s,b*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Tr||e.mapping===Ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new we(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;fo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,gc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=lf[(s-r-1)%lf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new we(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gs-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Gs;m>Gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gs}`);let p=[],b=0;for(let R=0;R<Gs;++R){let U=R/x,Z=Math.exp(-U*U/2);p.push(Z),R===0?b+=Z:R<m&&(b+=2*Z)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let y=this._sizeLods[s],D=3*y*(s>_-vr?s-_+vr:0),T=4*(this._cubeSize-y);fo(t,D,T,3*y,2*y),l.setRenderTarget(t),l.render(u,gc)}};function Mx(i){let e=[],t=[],n=[],s=i,r=i-vr+1+af.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-vr?l=af[a-i+vr-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,b=new Float32Array(x*g*f),_=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let T=0;T<f;T++){let R=T%3*2/3-1,U=T>2?0:-1,Z=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];b.set(Z,x*g*T),_.set(d,m*g*T);let v=[T,T,T,T,T,T];y.set(v,p*g*T)}let D=new Kt;D.setAttribute("position",new It(b,x)),D.setAttribute("uv",new It(_,m)),D.setAttribute("faceIndex",new It(y,p)),e.push(D),s>vr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function cf(i,e,t){let n=new Gi(i,e,t);return n.texture.mapping=pl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Sx(i,e,t){let n=new Float32Array(Gs),s=new P(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ou(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function hf(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function uf(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function ou(){return`

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
	`}function Ex(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Bc||l===Hc,h=l===Tr||l===Ar;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Go(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Go(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function wx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Io("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Tx(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let b=f.array;x=f.version;for(let _=0,y=b.length;_<y;_+=3){let D=b[_+0],T=b[_+1],R=b[_+2];d.push(D,T,T,R,R,D)}}else if(g!==void 0){let b=g.array;x=g.version;for(let _=0,y=b.length/3-1;_<y;_+=3){let D=_+0,T=_+1,R=_+2;d.push(D,T,T,R,R,D)}}else return;let m=new(up(d)?Bo:zo)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Ax(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b];for(let b=0;b<x.length;b++)t.update(p,n,x[b])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Rx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Cx(i,e,t){let n=new WeakMap,s=new Xt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let Z=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",Z)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let y=o.attributes.position.count*_,D=1;y>e.maxTextureSize&&(D=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*D*4*u),R=new Fo(T,y,D,u);R.type=mi,R.needsUpdate=!0;let U=_*4;for(let v=0;v<u;v++){let E=m[v],O=p[v],V=b[v],Y=y*D*4*v;for(let ie=0;ie<E.count;ie++){let k=ie*U;f===!0&&(s.fromBufferAttribute(E,ie),T[Y+k+0]=s.x,T[Y+k+1]=s.y,T[Y+k+2]=s.z,T[Y+k+3]=0),g===!0&&(s.fromBufferAttribute(O,ie),T[Y+k+4]=s.x,T[Y+k+5]=s.y,T[Y+k+6]=s.z,T[Y+k+7]=0),x===!0&&(s.fromBufferAttribute(V,ie),T[Y+k+8]=s.x,T[Y+k+9]=s.y,T[Y+k+10]=s.z,T[Y+k+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new Ie(y,D)},n.set(o,d),o.addEventListener("dispose",Z)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Px(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Wo=class extends Sn{constructor(e,t,n,s,r,a,o,l,c,h=br){if(h!==br&&h!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===br&&(n=Xs),n===void 0&&h===Cr&&(n=Rr),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ln,this.minFilter=l!==void 0?l:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},mp=new Sn,df=new Wo(1,1),gp=new Fo,xp=new xh,_p=new Vo,ff=[],pf=[],mf=new Float32Array(16),gf=new Float32Array(9),xf=new Float32Array(4);function Wr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ff[s];if(r===void 0&&(r=new Float32Array(s),ff[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function xn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _n(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function _l(i,e){let t=pf[e];t===void 0&&(t=new Int32Array(e),pf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ix(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2fv(this.addr,e),_n(t,e)}}function Nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;i.uniform3fv(this.addr,e),_n(t,e)}}function Dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4fv(this.addr,e),_n(t,e)}}function Ux(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,n))return;xf.set(n),i.uniformMatrix2fv(this.addr,!1,xf),_n(t,n)}}function kx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,n))return;gf.set(n),i.uniformMatrix3fv(this.addr,!1,gf),_n(t,n)}}function Fx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,n))return;mf.set(n),i.uniformMatrix4fv(this.addr,!1,mf),_n(t,n)}}function Ox(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2iv(this.addr,e),_n(t,e)}}function Bx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;i.uniform3iv(this.addr,e),_n(t,e)}}function Hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4iv(this.addr,e),_n(t,e)}}function Vx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2uiv(this.addr,e),_n(t,e)}}function Wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;i.uniform3uiv(this.addr,e),_n(t,e)}}function Xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4uiv(this.addr,e),_n(t,e)}}function Yx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(df.compareFunction=hp,r=df):r=mp,t.setTexture2D(e||r,s)}function $x(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xp,s)}function qx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||_p,s)}function Kx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||gp,s)}function Zx(i){switch(i){case 5126:return Ix;case 35664:return Lx;case 35665:return Nx;case 35666:return Dx;case 35674:return Ux;case 35675:return kx;case 35676:return Fx;case 5124:case 35670:return Ox;case 35667:case 35671:return zx;case 35668:case 35672:return Bx;case 35669:case 35673:return Hx;case 5125:return Vx;case 36294:return Gx;case 36295:return Wx;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return $x;case 35680:case 36300:case 36308:case 36293:return qx;case 36289:case 36303:case 36311:case 36292:return Kx}}function Jx(i,e){i.uniform1fv(this.addr,e)}function jx(i,e){let t=Wr(e,this.size,2);i.uniform2fv(this.addr,t)}function Qx(i,e){let t=Wr(e,this.size,3);i.uniform3fv(this.addr,t)}function e_(i,e){let t=Wr(e,this.size,4);i.uniform4fv(this.addr,t)}function t_(i,e){let t=Wr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function n_(i,e){let t=Wr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function i_(i,e){let t=Wr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function s_(i,e){i.uniform1iv(this.addr,e)}function r_(i,e){i.uniform2iv(this.addr,e)}function a_(i,e){i.uniform3iv(this.addr,e)}function o_(i,e){i.uniform4iv(this.addr,e)}function l_(i,e){i.uniform1uiv(this.addr,e)}function c_(i,e){i.uniform2uiv(this.addr,e)}function h_(i,e){i.uniform3uiv(this.addr,e)}function u_(i,e){i.uniform4uiv(this.addr,e)}function d_(i,e,t){let n=this.cache,s=e.length,r=_l(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||mp,r[a])}function f_(i,e,t){let n=this.cache,s=e.length,r=_l(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||xp,r[a])}function p_(i,e,t){let n=this.cache,s=e.length,r=_l(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||_p,r[a])}function m_(i,e,t){let n=this.cache,s=e.length,r=_l(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||gp,r[a])}function g_(i){switch(i){case 5126:return Jx;case 35664:return jx;case 35665:return Qx;case 35666:return e_;case 35674:return t_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return s_;case 35667:case 35671:return r_;case 35668:case 35672:return a_;case 35669:case 35673:return o_;case 5125:return l_;case 36294:return c_;case 36295:return h_;case 36296:return u_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}var vh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zx(t.type)}},bh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=g_(t.type)}},Mh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},bc=/(\w+)(\])?(\[|\.)?/g;function _f(i,e){i.seq.push(e),i.map[e.id]=e}function x_(i,e,t){let n=i.name,s=n.length;for(bc.lastIndex=0;;){let r=bc.exec(n),a=bc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){_f(t,c===void 0?new vh(o,i,e):new bh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Mh(o),_f(t,u)),t=u}}}var Er=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);x_(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function yf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var __=37297,y_=0;function v_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function b_(i){let e=Vt.getPrimaries(Vt.workingColorSpace),t=Vt.getPrimaries(i),n;switch(e===t?n="":e===Do&&t===No?n="LinearDisplayP3ToLinearSRGB":e===No&&t===Do&&(n="LinearSRGBToLinearDisplayP3"),i){case En:case gl:return[n,"LinearTransferOETF"];case mn:case ru:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function vf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+v_(i.getShaderSource(e),a)}else return s}function M_(i,e){let t=b_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function S_(i,e){let t;switch(e){case Im:t="Linear";break;case Lm:t="Reinhard";break;case Nm:t="Cineon";break;case Dm:t="ACESFilmic";break;case km:t="AgX";break;case Fm:t="Neutral";break;case Um:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var po=new P;function E_(){Vt.getLuminanceCoefficients(po);let i=po.x.toFixed(4),e=po.y.toFixed(4),t=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function T_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function A_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ha(i){return i!==""}function bf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var R_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sh(i){return i.replace(R_,P_)}var C_=new Map;function P_(i,e){let t=Tt[e];if(t===void 0){let n=C_.get(e);if(n!==void 0)t=Tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sh(t)}var I_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sf(i){return i.replace(I_,L_)}function L_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ef(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function N_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===hm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function D_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Tr:case Ar:e="ENVMAP_TYPE_CUBE";break;case pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function U_(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ar&&(e="ENVMAP_MODE_REFRACTION"),e}function k_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jf:e="ENVMAP_BLENDING_MULTIPLY";break;case Cm:e="ENVMAP_BLENDING_MIX";break;case Pm:e="ENVMAP_BLENDING_ADD";break}return e}function F_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function O_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=N_(t),c=D_(t),h=U_(t),u=k_(t),d=F_(t),f=w_(t),g=T_(r),x=s.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ha).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ha).join(`
`),p.length>0&&(p+=`
`)):(m=[Ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),p=[Ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ps?"#define TONE_MAPPING":"",t.toneMapping!==ps?Tt.tonemapping_pars_fragment:"",t.toneMapping!==ps?S_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,M_("linearToOutputTexel",t.outputColorSpace),E_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ha).join(`
`)),a=Sh(a),a=bf(a,t),a=Mf(a,t),o=Sh(o),o=bf(o,t),o=Mf(o,t),a=Sf(a),o=Sf(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=b+m+a,y=b+p+o,D=yf(s,s.VERTEX_SHADER,_),T=yf(s,s.FRAGMENT_SHADER,y);s.attachShader(x,D),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(E){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(x).trim(),V=s.getShaderInfoLog(D).trim(),Y=s.getShaderInfoLog(T).trim(),ie=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,D,T);else{let ae=vf(s,D,"vertex"),q=vf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+O+`
`+ae+`
`+q)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(V===""||Y==="")&&(k=!1);k&&(E.diagnostics={runnable:ie,programLog:O,vertexShader:{log:V,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(D),s.deleteShader(T),U=new Er(s,x),Z=A_(s,x)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let Z;this.getAttributes=function(){return Z===void 0&&R(this),Z};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,__)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=y_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=T,this}var z_=0,Eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wh(e),t.set(e,n)),n}},wh=class{constructor(e){this.id=z_++,this.code=e,this.usedTimes=0}};function B_(i,e,t,n,s,r,a){let o=new Oo,l=new Eh,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,E,O,V,Y){let ie=V.fog,k=Y.geometry,ae=v.isMeshStandardMaterial?V.environment:null,q=(v.isMeshStandardMaterial?t:e).get(v.envMap||ae),le=q&&q.mapping===pl?q.image.height:null,Ae=x[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let ye=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,yt=ye!==void 0?ye.length:0,Ot=0;k.morphAttributes.position!==void 0&&(Ot=1),k.morphAttributes.normal!==void 0&&(Ot=2),k.morphAttributes.color!==void 0&&(Ot=3);let ne,fe,ke,Le;if(Ae){let rn=Mi[Ae];ne=rn.vertexShader,fe=rn.fragmentShader}else ne=v.vertexShader,fe=v.fragmentShader,l.update(v),ke=l.getVertexShaderID(v),Le=l.getFragmentShaderID(v);let ut=i.getRenderTarget(),st=Y.isInstancedMesh===!0,vt=Y.isBatchedMesh===!0,Ut=!!v.map,dt=!!v.matcap,N=!!q,cn=!!v.aoMap,bt=!!v.lightMap,je=!!v.bumpMap,rt=!!v.normalMap,mt=!!v.displacementMap,xe=!!v.emissiveMap,C=!!v.metalnessMap,M=!!v.roughnessMap,G=v.anisotropy>0,$=v.clearcoat>0,oe=v.dispersion>0,se=v.iridescence>0,Pe=v.sheen>0,pe=v.transmission>0,Ce=G&&!!v.anisotropyMap,Et=$&&!!v.clearcoatMap,ue=$&&!!v.clearcoatNormalMap,Ee=$&&!!v.clearcoatRoughnessMap,Je=se&&!!v.iridescenceMap,Ze=se&&!!v.iridescenceThicknessMap,Te=Pe&&!!v.sheenColorMap,St=Pe&&!!v.sheenRoughnessMap,qe=!!v.specularMap,Gt=!!v.specularColorMap,z=!!v.specularIntensityMap,Me=pe&&!!v.transmissionMap,Q=pe&&!!v.thicknessMap,re=!!v.gradientMap,I=!!v.alphaMap,W=v.alphaTest>0,ze=!!v.alphaHash,Nt=!!v.extensions,Rt=ps;v.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Rt=i.toneMapping);let ot={shaderID:Ae,shaderType:v.type,shaderName:v.name,vertexShader:ne,fragmentShader:fe,defines:v.defines,customVertexShaderID:ke,customFragmentShaderID:Le,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:vt,batchingColor:vt&&Y._colorsTexture!==null,instancing:st,instancingColor:st&&Y.instanceColor!==null,instancingMorph:st&&Y.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:En,alphaToCoverage:!!v.alphaToCoverage,map:Ut,matcap:dt,envMap:N,envMapMode:N&&q.mapping,envMapCubeUVHeight:le,aoMap:cn,lightMap:bt,bumpMap:je,normalMap:rt,displacementMap:f&&mt,emissiveMap:xe,normalMapObjectSpace:rt&&v.normalMapType===Vm,normalMapTangentSpace:rt&&v.normalMapType===cp,metalnessMap:C,roughnessMap:M,anisotropy:G,anisotropyMap:Ce,clearcoat:$,clearcoatMap:Et,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ee,dispersion:oe,iridescence:se,iridescenceMap:Je,iridescenceThicknessMap:Ze,sheen:Pe,sheenColorMap:Te,sheenRoughnessMap:St,specularMap:qe,specularColorMap:Gt,specularIntensityMap:z,transmission:pe,transmissionMap:Me,thicknessMap:Q,gradientMap:re,opaque:v.transparent===!1&&v.blending===Hi&&v.alphaToCoverage===!1,alphaMap:I,alphaTest:W,alphaHash:ze,combine:v.combine,mapUv:Ut&&m(v.map.channel),aoMapUv:cn&&m(v.aoMap.channel),lightMapUv:bt&&m(v.lightMap.channel),bumpMapUv:je&&m(v.bumpMap.channel),normalMapUv:rt&&m(v.normalMap.channel),displacementMapUv:mt&&m(v.displacementMap.channel),emissiveMapUv:xe&&m(v.emissiveMap.channel),metalnessMapUv:C&&m(v.metalnessMap.channel),roughnessMapUv:M&&m(v.roughnessMap.channel),anisotropyMapUv:Ce&&m(v.anisotropyMap.channel),clearcoatMapUv:Et&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:St&&m(v.sheenRoughnessMap.channel),specularMapUv:qe&&m(v.specularMap.channel),specularColorMapUv:Gt&&m(v.specularColorMap.channel),specularIntensityMapUv:z&&m(v.specularIntensityMap.channel),transmissionMapUv:Me&&m(v.transmissionMap.channel),thicknessMapUv:Q&&m(v.thicknessMap.channel),alphaMapUv:I&&m(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(rt||G),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!k.attributes.uv&&(Ut||I),fog:!!ie,useFog:v.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:Y.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Ot,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Rt,decodeVideoTexture:Ut&&v.map.isVideoTexture===!0&&Vt.getTransfer(v.map.colorSpace)===nn,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===on,flipSided:v.side===Gn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Nt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&v.extensions.multiDraw===!0||vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ot.vertexUv1s=c.has(1),ot.vertexUv2s=c.has(2),ot.vertexUv3s=c.has(3),c.clear(),ot}function b(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let O in v.defines)E.push(O),E.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(_(E,v),y(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function _(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function y(v,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),v.push(o.mask)}function D(v){let E=x[v.type],O;if(E){let V=Mi[E];O=P0.clone(V.uniforms)}else O=v.uniforms;return O}function T(v,E){let O;for(let V=0,Y=h.length;V<Y;V++){let ie=h[V];if(ie.cacheKey===E){O=ie,++O.usedTimes;break}}return O===void 0&&(O=new O_(i,E,v,r),h.push(O)),O}function R(v){if(--v.usedTimes===0){let E=h.indexOf(v);h[E]=h[h.length-1],h.pop(),v.destroy()}}function U(v){l.remove(v)}function Z(){l.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:D,acquireProgram:T,releaseProgram:R,releaseShaderCache:U,programs:h,dispose:Z}}function H_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function V_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function wf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Tf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,g,x,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||V_),n.length>1&&n.sort(d||wf),s.length>1&&s.sort(d||wf)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function G_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Tf,i.set(n,[a])):s>=r.length?(a=new Tf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function W_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new et};break;case"SpotLight":t={position:new P,direction:new P,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function X_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Y_=0;function $_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function q_(i){let e=new W_,t=X_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new pt,a=new pt;function o(c){let h=0,u=0,d=0;for(let Z=0;Z<9;Z++)n.probe[Z].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,b=0,_=0,y=0,D=0,T=0,R=0;c.sort($_);for(let Z=0,v=c.length;Z<v;Z++){let E=c[Z],O=E.color,V=E.intensity,Y=E.distance,ie=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=O.r*V,u+=O.g*V,d+=O.b*V;else if(E.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(E.sh.coefficients[k],V);R++}else if(E.isDirectionalLight){let k=e.get(E);if(k.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let ae=E.shadow,q=t.get(E);q.shadowIntensity=ae.intensity,q.shadowBias=ae.bias,q.shadowNormalBias=ae.normalBias,q.shadowRadius=ae.radius,q.shadowMapSize=ae.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=ie,n.directionalShadowMatrix[f]=E.shadow.matrix,b++}n.directional[f]=k,f++}else if(E.isSpotLight){let k=e.get(E);k.position.setFromMatrixPosition(E.matrixWorld),k.color.copy(O).multiplyScalar(V),k.distance=Y,k.coneCos=Math.cos(E.angle),k.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),k.decay=E.decay,n.spot[x]=k;let ae=E.shadow;if(E.map&&(n.spotLightMap[D]=E.map,D++,ae.updateMatrices(E),E.castShadow&&T++),n.spotLightMatrix[x]=ae.matrix,E.castShadow){let q=t.get(E);q.shadowIntensity=ae.intensity,q.shadowBias=ae.bias,q.shadowNormalBias=ae.normalBias,q.shadowRadius=ae.radius,q.shadowMapSize=ae.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=ie,y++}x++}else if(E.isRectAreaLight){let k=e.get(E);k.color.copy(O).multiplyScalar(V),k.halfWidth.set(E.width*.5,0,0),k.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=k,m++}else if(E.isPointLight){let k=e.get(E);if(k.color.copy(E.color).multiplyScalar(E.intensity),k.distance=E.distance,k.decay=E.decay,E.castShadow){let ae=E.shadow,q=t.get(E);q.shadowIntensity=ae.intensity,q.shadowBias=ae.bias,q.shadowNormalBias=ae.normalBias,q.shadowRadius=ae.radius,q.shadowMapSize=ae.mapSize,q.shadowCameraNear=ae.camera.near,q.shadowCameraFar=ae.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=ie,n.pointShadowMatrix[g]=E.shadow.matrix,_++}n.point[g]=k,g++}else if(E.isHemisphereLight){let k=e.get(E);k.skyColor.copy(E.color).multiplyScalar(V),k.groundColor.copy(E.groundColor).multiplyScalar(V),n.hemi[p]=k,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let U=n.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==b||U.numPointShadows!==_||U.numSpotShadows!==y||U.numSpotMaps!==D||U.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+D-T,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,U.directionalLength=f,U.pointLength=g,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=b,U.numPointShadows=_,U.numSpotShadows=y,U.numSpotMaps=D,U.numLightProbes=R,n.version=Y_++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let _=c[p];if(_.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(_.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Af(i){let e=new q_(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function K_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Af(i),e.set(s,[o])):r>=a.length?(o=new Af(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Th=class extends Zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ah=class extends Zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Z_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J_=`uniform sampler2D shadow_pass;
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
}`;function j_(i,e,t){let n=new ya,s=new Ie,r=new Ie,a=new Xt,o=new Th({depthPacking:Hm}),l=new Ah,c={},h=t.maxTextureSize,u={[Ei]:Gn,[Gn]:Ei,[on]:on},d=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:Z_,fragmentShader:J_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Kt;g.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new we(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zf;let p=this.type;this.render=function(T,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let Z=i.getRenderTarget(),v=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),O=i.state;O.setBlending(fs),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let V=p!==Oi&&this.type===Oi,Y=p===Oi&&this.type!==Oi;for(let ie=0,k=T.length;ie<k;ie++){let ae=T[ie],q=ae.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let le=q.getFrameExtents();if(s.multiply(le),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/le.x),s.x=r.x*le.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/le.y),s.y=r.y*le.y,q.mapSize.y=r.y)),q.map===null||V===!0||Y===!0){let ye=this.type!==Oi?{minFilter:Ln,magFilter:Ln}:{};q.map!==null&&q.map.dispose(),q.map=new Gi(s.x,s.y,ye),q.map.texture.name=ae.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let Ae=q.getViewportCount();for(let ye=0;ye<Ae;ye++){let yt=q.getViewport(ye);a.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),O.viewport(a),q.updateMatrices(ae,ye),n=q.getFrustum(),y(R,U,q.camera,ae,this.type)}q.isPointLightShadow!==!0&&this.type===Oi&&b(q,U),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(Z,v,E)};function b(T,R){let U=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Gi(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,U,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,U,f,x,null)}function _(T,R,U,Z){let v=null,E=U.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(E!==void 0)v=E;else if(v=U.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let O=v.uuid,V=R.uuid,Y=c[O];Y===void 0&&(Y={},c[O]=Y);let ie=Y[V];ie===void 0&&(ie=v.clone(),Y[V]=ie,R.addEventListener("dispose",D)),v=ie}if(v.visible=R.visible,v.wireframe=R.wireframe,Z===Oi?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:u[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,U.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let O=i.properties.get(v);O.light=U}return v}function y(T,R,U,Z,v){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Oi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld);let V=e.update(T),Y=T.material;if(Array.isArray(Y)){let ie=V.groups;for(let k=0,ae=ie.length;k<ae;k++){let q=ie[k],le=Y[q.materialIndex];if(le&&le.visible){let Ae=_(T,le,Z,v);T.onBeforeShadow(i,T,R,U,V,Ae,q),i.renderBufferDirect(U,null,V,Ae,T,q),T.onAfterShadow(i,T,R,U,V,Ae,q)}}}else if(Y.visible){let ie=_(T,Y,Z,v);T.onBeforeShadow(i,T,R,U,V,ie,null),i.renderBufferDirect(U,null,V,ie,T,null),T.onAfterShadow(i,T,R,U,V,ie,null)}}let O=T.children;for(let V=0,Y=O.length;V<Y;V++)y(O[V],R,U,Z,v)}function D(T){T.target.removeEventListener("dispose",D);for(let U in c){let Z=c[U],v=T.target.uuid;v in Z&&(Z[v].dispose(),delete Z[v])}}}var Q_={[Nc]:Dc,[Uc]:Oc,[kc]:zc,[wr]:Fc,[Dc]:Nc,[Oc]:Uc,[zc]:kc,[Fc]:wr};function ey(i){function e(){let z=!1,Me=new Xt,Q=null,re=new Xt(0,0,0,0);return{setMask:function(I){Q!==I&&!z&&(i.colorMask(I,I,I,I),Q=I)},setLocked:function(I){z=I},setClear:function(I,W,ze,Nt,Rt){Rt===!0&&(I*=Nt,W*=Nt,ze*=Nt),Me.set(I,W,ze,Nt),re.equals(Me)===!1&&(i.clearColor(I,W,ze,Nt),re.copy(Me))},reset:function(){z=!1,Q=null,re.set(-1,0,0,0)}}}function t(){let z=!1,Me=!1,Q=null,re=null,I=null;return{setReversed:function(W){Me=W},setTest:function(W){W?ke(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(W){Q!==W&&!z&&(i.depthMask(W),Q=W)},setFunc:function(W){if(Me&&(W=Q_[W]),re!==W){switch(W){case Nc:i.depthFunc(i.NEVER);break;case Dc:i.depthFunc(i.ALWAYS);break;case Uc:i.depthFunc(i.LESS);break;case wr:i.depthFunc(i.LEQUAL);break;case kc:i.depthFunc(i.EQUAL);break;case Fc:i.depthFunc(i.GEQUAL);break;case Oc:i.depthFunc(i.GREATER);break;case zc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=W}},setLocked:function(W){z=W},setClear:function(W){I!==W&&(i.clearDepth(W),I=W)},reset:function(){z=!1,Q=null,re=null,I=null}}}function n(){let z=!1,Me=null,Q=null,re=null,I=null,W=null,ze=null,Nt=null,Rt=null;return{setTest:function(ot){z||(ot?ke(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(ot){Me!==ot&&!z&&(i.stencilMask(ot),Me=ot)},setFunc:function(ot,rn,un){(Q!==ot||re!==rn||I!==un)&&(i.stencilFunc(ot,rn,un),Q=ot,re=rn,I=un)},setOp:function(ot,rn,un){(W!==ot||ze!==rn||Nt!==un)&&(i.stencilOp(ot,rn,un),W=ot,ze=rn,Nt=un)},setLocked:function(ot){z=ot},setClear:function(ot){Rt!==ot&&(i.clearStencil(ot),Rt=ot)},reset:function(){z=!1,Me=null,Q=null,re=null,I=null,W=null,ze=null,Nt=null,Rt=null}}}let s=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,g=!1,x=null,m=null,p=null,b=null,_=null,y=null,D=null,T=new et(0,0,0),R=0,U=!1,Z=null,v=null,E=null,O=null,V=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ie=!1,k=0,ae=i.getParameter(i.VERSION);ae.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(ae)[1]),ie=k>=1):ae.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),ie=k>=2);let q=null,le={},Ae=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),yt=new Xt().fromArray(Ae),Ot=new Xt().fromArray(ye);function ne(z,Me,Q,re){let I=new Uint8Array(4),W=i.createTexture();i.bindTexture(z,W),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<Q;ze++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(Me,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,I):i.texImage2D(Me+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,I);return W}let fe={};fe[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ke(i.DEPTH_TEST),r.setFunc(wr),bt(!1),je(Ld),ke(i.CULL_FACE),N(fs);function ke(z){c[z]!==!0&&(i.enable(z),c[z]=!0)}function Le(z){c[z]!==!1&&(i.disable(z),c[z]=!1)}function ut(z,Me){return h[z]!==Me?(i.bindFramebuffer(z,Me),h[z]=Me,z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Me),z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Me),!0):!1}function st(z,Me){let Q=d,re=!1;if(z){Q=u.get(Me),Q===void 0&&(Q=[],u.set(Me,Q));let I=z.textures;if(Q.length!==I.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let W=0,ze=I.length;W<ze;W++)Q[W]=i.COLOR_ATTACHMENT0+W;Q.length=I.length,re=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,re=!0);re&&i.drawBuffers(Q)}function vt(z){return f!==z?(i.useProgram(z),f=z,!0):!1}let Ut={[Vs]:i.FUNC_ADD,[dm]:i.FUNC_SUBTRACT,[fm]:i.FUNC_REVERSE_SUBTRACT};Ut[pm]=i.MIN,Ut[mm]=i.MAX;let dt={[gm]:i.ZERO,[xm]:i.ONE,[_m]:i.SRC_COLOR,[Ic]:i.SRC_ALPHA,[Em]:i.SRC_ALPHA_SATURATE,[Mm]:i.DST_COLOR,[vm]:i.DST_ALPHA,[ym]:i.ONE_MINUS_SRC_COLOR,[Lc]:i.ONE_MINUS_SRC_ALPHA,[Sm]:i.ONE_MINUS_DST_COLOR,[bm]:i.ONE_MINUS_DST_ALPHA,[wm]:i.CONSTANT_COLOR,[Tm]:i.ONE_MINUS_CONSTANT_COLOR,[Am]:i.CONSTANT_ALPHA,[Rm]:i.ONE_MINUS_CONSTANT_ALPHA};function N(z,Me,Q,re,I,W,ze,Nt,Rt,ot){if(z===fs){g===!0&&(Le(i.BLEND),g=!1);return}if(g===!1&&(ke(i.BLEND),g=!0),z!==um){if(z!==x||ot!==U){if((m!==Vs||_!==Vs)&&(i.blendEquation(i.FUNC_ADD),m=Vs,_=Vs),ot)switch(z){case Hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ms:i.blendFunc(i.ONE,i.ONE);break;case Nd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ms:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Nd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}p=null,b=null,y=null,D=null,T.set(0,0,0),R=0,x=z,U=ot}return}I=I||Me,W=W||Q,ze=ze||re,(Me!==m||I!==_)&&(i.blendEquationSeparate(Ut[Me],Ut[I]),m=Me,_=I),(Q!==p||re!==b||W!==y||ze!==D)&&(i.blendFuncSeparate(dt[Q],dt[re],dt[W],dt[ze]),p=Q,b=re,y=W,D=ze),(Nt.equals(T)===!1||Rt!==R)&&(i.blendColor(Nt.r,Nt.g,Nt.b,Rt),T.copy(Nt),R=Rt),x=z,U=!1}function cn(z,Me){z.side===on?Le(i.CULL_FACE):ke(i.CULL_FACE);let Q=z.side===Gn;Me&&(Q=!Q),bt(Q),z.blending===Hi&&z.transparent===!1?N(fs):N(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),s.setMask(z.colorWrite);let re=z.stencilWrite;a.setTest(re),re&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),mt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ke(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function bt(z){Z!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),Z=z)}function je(z){z!==lm?(ke(i.CULL_FACE),z!==v&&(z===Ld?i.cullFace(i.BACK):z===cm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),v=z}function rt(z){z!==E&&(ie&&i.lineWidth(z),E=z)}function mt(z,Me,Q){z?(ke(i.POLYGON_OFFSET_FILL),(O!==Me||V!==Q)&&(i.polygonOffset(Me,Q),O=Me,V=Q)):Le(i.POLYGON_OFFSET_FILL)}function xe(z){z?ke(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function C(z){z===void 0&&(z=i.TEXTURE0+Y-1),q!==z&&(i.activeTexture(z),q=z)}function M(z,Me,Q){Q===void 0&&(q===null?Q=i.TEXTURE0+Y-1:Q=q);let re=le[Q];re===void 0&&(re={type:void 0,texture:void 0},le[Q]=re),(re.type!==z||re.texture!==Me)&&(q!==Q&&(i.activeTexture(Q),q=Q),i.bindTexture(z,Me||fe[z]),re.type=z,re.texture=Me)}function G(){let z=le[q];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pe(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Et(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Je(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ze(z){yt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),yt.copy(z))}function Te(z){Ot.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Ot.copy(z))}function St(z,Me){let Q=l.get(Me);Q===void 0&&(Q=new WeakMap,l.set(Me,Q));let re=Q.get(z);re===void 0&&(re=i.getUniformBlockIndex(Me,z.name),Q.set(z,re))}function qe(z,Me){let re=l.get(Me).get(z);o.get(Me)!==re&&(i.uniformBlockBinding(Me,re,z.__bindingPointIndex),o.set(Me,re))}function Gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},q=null,le={},h={},u=new WeakMap,d=[],f=null,g=!1,x=null,m=null,p=null,b=null,_=null,y=null,D=null,T=new et(0,0,0),R=0,U=!1,Z=null,v=null,E=null,O=null,V=null,yt.set(0,0,i.canvas.width,i.canvas.height),Ot.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:ke,disable:Le,bindFramebuffer:ut,drawBuffers:st,useProgram:vt,setBlending:N,setMaterial:cn,setFlipSided:bt,setCullFace:je,setLineWidth:rt,setPolygonOffset:mt,setScissorTest:xe,activeTexture:C,bindTexture:M,unbindTexture:G,compressedTexImage2D:$,compressedTexImage3D:oe,texImage2D:Ee,texImage3D:Je,updateUBOMapping:St,uniformBlockBinding:qe,texStorage2D:Et,texStorage3D:ue,texSubImage2D:se,texSubImage3D:Pe,compressedTexSubImage2D:pe,compressedTexSubImage3D:Ce,scissor:Ze,viewport:Te,reset:Gt}}function Rf(i,e,t,n){let s=ty(n);switch(t){case np:return i*e;case sp:return i*e;case rp:return i*e*2;case tu:return i*e/s.components*s.byteLength;case nu:return i*e/s.components*s.byteLength;case ap:return i*e*2/s.components*s.byteLength;case iu:return i*e*2/s.components*s.byteLength;case ip:return i*e*3/s.components*s.byteLength;case Vn:return i*e*4/s.components*s.byteLength;case su:return i*e*4/s.components*s.byteLength;case To:case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ro:case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gc:case Xc:return Math.max(i,16)*Math.max(e,8)/4;case Vc:case Wc:return Math.max(i,8)*Math.max(e,8)/2;case Yc:case $c:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case jc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case eh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case th:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case nh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ih:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case sh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case rh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ah:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case oh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case lh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Po:case ch:case hh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case op:case uh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case dh:case fh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ty(i){switch(i){case Vi:case Qf:return{byteLength:1,components:1};case xa:case ep:case Ra:return{byteLength:2,components:1};case Qh:case eu:return{byteLength:2,components:4};case Xs:case jh:case mi:return{byteLength:4,components:1};case tp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ny(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ie,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return f?new OffscreenCanvas(C,M):_a("canvas")}function x(C,M,G){let $=1,oe=xe(C);if((oe.width>G||oe.height>G)&&($=G/Math.max(oe.width,oe.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let se=Math.floor($*oe.width),Pe=Math.floor($*oe.height);u===void 0&&(u=g(se,Pe));let pe=M?g(se,Pe):u;return pe.width=se,pe.height=Pe,pe.getContext("2d").drawImage(C,0,0,se,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+se+"x"+Pe+")."),pe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==Ln&&C.minFilter!==Hn}function p(C){i.generateMipmap(C)}function b(C,M,G,$,oe=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se=M;if(M===i.RED&&(G===i.FLOAT&&(se=i.R32F),G===i.HALF_FLOAT&&(se=i.R16F),G===i.UNSIGNED_BYTE&&(se=i.R8)),M===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(se=i.R8UI),G===i.UNSIGNED_SHORT&&(se=i.R16UI),G===i.UNSIGNED_INT&&(se=i.R32UI),G===i.BYTE&&(se=i.R8I),G===i.SHORT&&(se=i.R16I),G===i.INT&&(se=i.R32I)),M===i.RG&&(G===i.FLOAT&&(se=i.RG32F),G===i.HALF_FLOAT&&(se=i.RG16F),G===i.UNSIGNED_BYTE&&(se=i.RG8)),M===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(se=i.RG8UI),G===i.UNSIGNED_SHORT&&(se=i.RG16UI),G===i.UNSIGNED_INT&&(se=i.RG32UI),G===i.BYTE&&(se=i.RG8I),G===i.SHORT&&(se=i.RG16I),G===i.INT&&(se=i.RG32I)),M===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(se=i.RGB8UI),G===i.UNSIGNED_SHORT&&(se=i.RGB16UI),G===i.UNSIGNED_INT&&(se=i.RGB32UI),G===i.BYTE&&(se=i.RGB8I),G===i.SHORT&&(se=i.RGB16I),G===i.INT&&(se=i.RGB32I)),M===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),G===i.UNSIGNED_INT&&(se=i.RGBA32UI),G===i.BYTE&&(se=i.RGBA8I),G===i.SHORT&&(se=i.RGBA16I),G===i.INT&&(se=i.RGBA32I)),M===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),M===i.RGBA){let Pe=oe?Lo:Vt.getTransfer($);G===i.FLOAT&&(se=i.RGBA32F),G===i.HALF_FLOAT&&(se=i.RGBA16F),G===i.UNSIGNED_BYTE&&(se=Pe===nn?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function _(C,M){let G;return C?M===null||M===Xs||M===Rr?G=i.DEPTH24_STENCIL8:M===mi?G=i.DEPTH32F_STENCIL8:M===xa&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Xs||M===Rr?G=i.DEPTH_COMPONENT24:M===mi?G=i.DEPTH_COMPONENT32F:M===xa&&(G=i.DEPTH_COMPONENT16),G}function y(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ln&&C.minFilter!==Hn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function D(C){let M=C.target;M.removeEventListener("dispose",D),R(M),M.isVideoTexture&&h.delete(M)}function T(C){let M=C.target;M.removeEventListener("dispose",T),Z(M)}function R(C){let M=n.get(C);if(M.__webglInit===void 0)return;let G=C.source,$=d.get(G);if($){let oe=$[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&U(C),Object.keys($).length===0&&d.delete(G)}n.remove(C)}function U(C){let M=n.get(C);i.deleteTexture(M.__webglTexture);let G=C.source,$=d.get(G);delete $[M.__cacheKey],a.memory.textures--}function Z(C){let M=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let oe=0;oe<M.__webglFramebuffer[$].length;oe++)i.deleteFramebuffer(M.__webglFramebuffer[$][oe]);else i.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)i.deleteFramebuffer(M.__webglFramebuffer[$]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let G=C.textures;for(let $=0,oe=G.length;$<oe;$++){let se=n.get(G[$]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(G[$])}n.remove(C)}let v=0;function E(){v=0}function O(){let C=v;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),v+=1,C}function V(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function Y(C,M){let G=n.get(C);if(C.isVideoTexture&&rt(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){let $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ot(G,C,M);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+M)}function ie(C,M){let G=n.get(C);if(C.version>0&&G.__version!==C.version){Ot(G,C,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+M)}function k(C,M){let G=n.get(C);if(C.version>0&&G.__version!==C.version){Ot(G,C,M);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+M)}function ae(C,M){let G=n.get(C);if(C.version>0&&G.__version!==C.version){ne(G,C,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+M)}let q={[Ws]:i.REPEAT,[zi]:i.CLAMP_TO_EDGE,[ga]:i.MIRRORED_REPEAT},le={[Ln]:i.NEAREST,[Jh]:i.NEAREST_MIPMAP_NEAREST,[yr]:i.NEAREST_MIPMAP_LINEAR,[Hn]:i.LINEAR,[ua]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},Ae={[Gm]:i.NEVER,[Km]:i.ALWAYS,[Wm]:i.LESS,[hp]:i.LEQUAL,[Xm]:i.EQUAL,[qm]:i.GEQUAL,[Ym]:i.GREATER,[$m]:i.NOTEQUAL};function ye(C,M){if(M.type===mi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Hn||M.magFilter===ua||M.magFilter===yr||M.magFilter===Si||M.minFilter===Hn||M.minFilter===ua||M.minFilter===yr||M.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,q[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,q[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,q[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,le[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,le[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ln||M.minFilter!==yr&&M.minFilter!==Si||M.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function yt(C,M){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",D));let $=M.source,oe=d.get($);oe===void 0&&(oe={},d.set($,oe));let se=V(M);if(se!==C.__cacheKey){oe[se]===void 0&&(oe[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),oe[se].usedTimes++;let Pe=oe[C.__cacheKey];Pe!==void 0&&(oe[C.__cacheKey].usedTimes--,Pe.usedTimes===0&&U(M)),C.__cacheKey=se,C.__webglTexture=oe[se].texture}return G}function Ot(C,M,G){let $=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=i.TEXTURE_3D);let oe=yt(C,M),se=M.source;t.bindTexture($,C.__webglTexture,i.TEXTURE0+G);let Pe=n.get(se);if(se.version!==Pe.__version||oe===!0){t.activeTexture(i.TEXTURE0+G);let pe=Vt.getPrimaries(Vt.workingColorSpace),Ce=M.colorSpace===hs?null:Vt.getPrimaries(M.colorSpace),Et=M.colorSpace===hs||pe===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let ue=x(M.image,!1,s.maxTextureSize);ue=mt(M,ue);let Ee=r.convert(M.format,M.colorSpace),Je=r.convert(M.type),Ze=b(M.internalFormat,Ee,Je,M.colorSpace,M.isVideoTexture);ye($,M);let Te,St=M.mipmaps,qe=M.isVideoTexture!==!0,Gt=Pe.__version===void 0||oe===!0,z=se.dataReady,Me=y(M,ue);if(M.isDepthTexture)Ze=_(M.format===Cr,M.type),Gt&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Ze,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Ze,ue.width,ue.height,0,Ee,Je,null));else if(M.isDataTexture)if(St.length>0){qe&&Gt&&t.texStorage2D(i.TEXTURE_2D,Me,Ze,St[0].width,St[0].height);for(let Q=0,re=St.length;Q<re;Q++)Te=St[Q],qe?z&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Te.width,Te.height,Ee,Je,Te.data):t.texImage2D(i.TEXTURE_2D,Q,Ze,Te.width,Te.height,0,Ee,Je,Te.data);M.generateMipmaps=!1}else qe?(Gt&&t.texStorage2D(i.TEXTURE_2D,Me,Ze,ue.width,ue.height),z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,Ee,Je,ue.data)):t.texImage2D(i.TEXTURE_2D,0,Ze,ue.width,ue.height,0,Ee,Je,ue.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qe&&Gt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ze,St[0].width,St[0].height,ue.depth);for(let Q=0,re=St.length;Q<re;Q++)if(Te=St[Q],M.format!==Vn)if(Ee!==null)if(qe){if(z)if(M.layerUpdates.size>0){let I=Rf(Te.width,Te.height,M.format,M.type);for(let W of M.layerUpdates){let ze=Te.data.subarray(W*I/Te.data.BYTES_PER_ELEMENT,(W+1)*I/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,W,Te.width,Te.height,1,Ee,ze,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Te.width,Te.height,ue.depth,Ee,Te.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Ze,Te.width,Te.height,ue.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Te.width,Te.height,ue.depth,Ee,Je,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Ze,Te.width,Te.height,ue.depth,0,Ee,Je,Te.data)}else{qe&&Gt&&t.texStorage2D(i.TEXTURE_2D,Me,Ze,St[0].width,St[0].height);for(let Q=0,re=St.length;Q<re;Q++)Te=St[Q],M.format!==Vn?Ee!==null?qe?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,Te.width,Te.height,Ee,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Ze,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?z&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Te.width,Te.height,Ee,Je,Te.data):t.texImage2D(i.TEXTURE_2D,Q,Ze,Te.width,Te.height,0,Ee,Je,Te.data)}else if(M.isDataArrayTexture)if(qe){if(Gt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ze,ue.width,ue.height,ue.depth),z)if(M.layerUpdates.size>0){let Q=Rf(ue.width,ue.height,M.format,M.type);for(let re of M.layerUpdates){let I=ue.data.subarray(re*Q/ue.data.BYTES_PER_ELEMENT,(re+1)*Q/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,ue.width,ue.height,1,Ee,Je,I)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ee,Je,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ze,ue.width,ue.height,ue.depth,0,Ee,Je,ue.data);else if(M.isData3DTexture)qe?(Gt&&t.texStorage3D(i.TEXTURE_3D,Me,Ze,ue.width,ue.height,ue.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ee,Je,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Ze,ue.width,ue.height,ue.depth,0,Ee,Je,ue.data);else if(M.isFramebufferTexture){if(Gt)if(qe)t.texStorage2D(i.TEXTURE_2D,Me,Ze,ue.width,ue.height);else{let Q=ue.width,re=ue.height;for(let I=0;I<Me;I++)t.texImage2D(i.TEXTURE_2D,I,Ze,Q,re,0,Ee,Je,null),Q>>=1,re>>=1}}else if(St.length>0){if(qe&&Gt){let Q=xe(St[0]);t.texStorage2D(i.TEXTURE_2D,Me,Ze,Q.width,Q.height)}for(let Q=0,re=St.length;Q<re;Q++)Te=St[Q],qe?z&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Ee,Je,Te):t.texImage2D(i.TEXTURE_2D,Q,Ze,Ee,Je,Te);M.generateMipmaps=!1}else if(qe){if(Gt){let Q=xe(ue);t.texStorage2D(i.TEXTURE_2D,Me,Ze,Q.width,Q.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Je,ue)}else t.texImage2D(i.TEXTURE_2D,0,Ze,Ee,Je,ue);m(M)&&p($),Pe.__version=se.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ne(C,M,G){if(M.image.length!==6)return;let $=yt(C,M),oe=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+G);let se=n.get(oe);if(oe.version!==se.__version||$===!0){t.activeTexture(i.TEXTURE0+G);let Pe=Vt.getPrimaries(Vt.workingColorSpace),pe=M.colorSpace===hs?null:Vt.getPrimaries(M.colorSpace),Ce=M.colorSpace===hs||Pe===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let Et=M.isCompressedTexture||M.image[0].isCompressedTexture,ue=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let re=0;re<6;re++)!Et&&!ue?Ee[re]=x(M.image[re],!0,s.maxCubemapSize):Ee[re]=ue?M.image[re].image:M.image[re],Ee[re]=mt(M,Ee[re]);let Je=Ee[0],Ze=r.convert(M.format,M.colorSpace),Te=r.convert(M.type),St=b(M.internalFormat,Ze,Te,M.colorSpace),qe=M.isVideoTexture!==!0,Gt=se.__version===void 0||$===!0,z=oe.dataReady,Me=y(M,Je);ye(i.TEXTURE_CUBE_MAP,M);let Q;if(Et){qe&&Gt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,St,Je.width,Je.height);for(let re=0;re<6;re++){Q=Ee[re].mipmaps;for(let I=0;I<Q.length;I++){let W=Q[I];M.format!==Vn?Ze!==null?qe?z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,I,0,0,W.width,W.height,Ze,W.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,I,St,W.width,W.height,0,W.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,I,0,0,W.width,W.height,Ze,Te,W.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,I,St,W.width,W.height,0,Ze,Te,W.data)}}}else{if(Q=M.mipmaps,qe&&Gt){Q.length>0&&Me++;let re=xe(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,St,re.width,re.height)}for(let re=0;re<6;re++)if(ue){qe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ee[re].width,Ee[re].height,Ze,Te,Ee[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,St,Ee[re].width,Ee[re].height,0,Ze,Te,Ee[re].data);for(let I=0;I<Q.length;I++){let ze=Q[I].image[re].image;qe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,I+1,0,0,ze.width,ze.height,Ze,Te,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,I+1,St,ze.width,ze.height,0,Ze,Te,ze.data)}}else{qe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ze,Te,Ee[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,St,Ze,Te,Ee[re]);for(let I=0;I<Q.length;I++){let W=Q[I];qe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,I+1,0,0,Ze,Te,W.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,I+1,St,Ze,Te,W.image[re])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),se.__version=oe.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function fe(C,M,G,$,oe,se){let Pe=r.convert(G.format,G.colorSpace),pe=r.convert(G.type),Ce=b(G.internalFormat,Pe,pe,G.colorSpace);if(!n.get(M).__hasExternalTextures){let ue=Math.max(1,M.width>>se),Ee=Math.max(1,M.height>>se);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,se,Ce,ue,Ee,M.depth,0,Pe,pe,null):t.texImage2D(oe,se,Ce,ue,Ee,0,Pe,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),je(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,oe,n.get(G).__webglTexture,0,bt(M)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,oe,n.get(G).__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(C,M,G){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer){let $=M.depthTexture,oe=$&&$.isDepthTexture?$.type:null,se=_(M.stencilBuffer,oe),Pe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=bt(M);je(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,se,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,se,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,se,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,C)}else{let $=M.textures;for(let oe=0;oe<$.length;oe++){let se=$[oe],Pe=r.convert(se.format,se.colorSpace),pe=r.convert(se.type),Ce=b(se.internalFormat,Pe,pe,se.colorSpace),Et=bt(M);G&&je(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,Ce,M.width,M.height):je(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,Ce,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ce,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);let $=n.get(M.depthTexture).__webglTexture,oe=bt(M);if(M.depthTexture.format===br)je(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(M.depthTexture.format===Cr)je(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ut(C){let M=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let $=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){let oe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",oe)};$.addEventListener("dispose",oe),M.__depthDisposeCallback=oe}M.__boundDepthTexture=$}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Le(M.__webglFramebuffer,C)}else if(G){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=i.createRenderbuffer(),ke(M.__webglDepthbuffer[$],C,!1);else{let oe=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=M.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,se)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ke(M.__webglDepthbuffer,C,!1);else{let $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,oe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(C,M,G){let $=n.get(C);M!==void 0&&fe($.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ut(C)}function vt(C){let M=C.texture,G=n.get(C),$=n.get(M);C.addEventListener("dispose",T);let oe=C.textures,se=C.isWebGLCubeRenderTarget===!0,Pe=oe.length>1;if(Pe||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=M.version,a.memory.textures++),se){G.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[pe]=[];for(let Ce=0;Ce<M.mipmaps.length;Ce++)G.__webglFramebuffer[pe][Ce]=i.createFramebuffer()}else G.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)G.__webglFramebuffer[pe]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let pe=0,Ce=oe.length;pe<Ce;pe++){let Et=n.get(oe[pe]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&je(C)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let pe=0;pe<oe.length;pe++){let Ce=oe[pe];G.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[pe]);let Et=r.convert(Ce.format,Ce.colorSpace),ue=r.convert(Ce.type),Ee=b(Ce.internalFormat,Et,ue,Ce.colorSpace,C.isXRRenderTarget===!0),Je=bt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,Ee,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,G.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ke(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ye(i.TEXTURE_CUBE_MAP,M);for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)fe(G.__webglFramebuffer[pe][Ce],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce);else fe(G.__webglFramebuffer[pe],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let pe=0,Ce=oe.length;pe<Ce;pe++){let Et=oe[pe],ue=n.get(Et);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),ye(i.TEXTURE_2D,Et),fe(G.__webglFramebuffer,C,Et,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,0),m(Et)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,$.__webglTexture),ye(pe,M),M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)fe(G.__webglFramebuffer[Ce],C,M,i.COLOR_ATTACHMENT0,pe,Ce);else fe(G.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,pe,0);m(M)&&p(pe),t.unbindTexture()}C.depthBuffer&&ut(C)}function Ut(C){let M=C.textures;for(let G=0,$=M.length;G<$;G++){let oe=M[G];if(m(oe)){let se=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pe=n.get(oe).__webglTexture;t.bindTexture(se,Pe),p(se),t.unbindTexture()}}}let dt=[],N=[];function cn(C){if(C.samples>0){if(je(C)===!1){let M=C.textures,G=C.width,$=C.height,oe=i.COLOR_BUFFER_BIT,se=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(C),pe=M.length>1;if(pe)for(let Ce=0;Ce<M.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ce]);let Et=n.get(M[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Et,0)}i.blitFramebuffer(0,0,G,$,0,0,G,$,oe,i.NEAREST),l===!0&&(dt.length=0,N.length=0,dt.push(i.COLOR_ATTACHMENT0+Ce),C.depthBuffer&&C.resolveDepthBuffer===!1&&(dt.push(se),N.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Ce=0;Ce<M.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ce]);let Et=n.get(M[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,Et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function bt(C){return Math.min(s.maxSamples,C.samples)}function je(C){let M=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function rt(C){let M=a.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function mt(C,M){let G=C.colorSpace,$=C.format,oe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==En&&G!==hs&&(Vt.getTransfer(G)===nn?($!==Vn||oe!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function xe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=E,this.setTexture2D=Y,this.setTexture2DArray=ie,this.setTexture3D=k,this.setTextureCube=ae,this.rebindTextures=st,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=je}function iy(i,e){function t(n,s=hs){let r,a=Vt.getTransfer(s);if(n===Vi)return i.UNSIGNED_BYTE;if(n===Qh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===eu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qf)return i.BYTE;if(n===ep)return i.SHORT;if(n===xa)return i.UNSIGNED_SHORT;if(n===jh)return i.INT;if(n===Xs)return i.UNSIGNED_INT;if(n===mi)return i.FLOAT;if(n===Ra)return i.HALF_FLOAT;if(n===np)return i.ALPHA;if(n===ip)return i.RGB;if(n===Vn)return i.RGBA;if(n===sp)return i.LUMINANCE;if(n===rp)return i.LUMINANCE_ALPHA;if(n===br)return i.DEPTH_COMPONENT;if(n===Cr)return i.DEPTH_STENCIL;if(n===tu)return i.RED;if(n===nu)return i.RED_INTEGER;if(n===ap)return i.RG;if(n===iu)return i.RG_INTEGER;if(n===su)return i.RGBA_INTEGER;if(n===To||n===Ao||n===Ro||n===Co)if(a===nn)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===To)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===To)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vc||n===Gc||n===Wc||n===Xc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yc||n===$c||n===qc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Yc||n===$c)return a===nn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qc)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Kc||n===Zc||n===Jc||n===jc||n===Qc||n===eh||n===th||n===nh||n===ih||n===sh||n===rh||n===ah||n===oh||n===lh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Kc)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zc)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jc)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jc)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qc)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===eh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===th)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ih)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ah)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lh)return a===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Po||n===ch||n===hh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Po)return a===nn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ch)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===op||n===uh||n===dh||n===fh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Po)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Rh=class extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Pt=class extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},sy={type:"move"},fa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sy)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ay=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ch=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Sn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Jn({vertexShader:ry,fragmentShader:ay,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new we(new Ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ph=class extends gs{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=new Ch,m=t.getContextAttributes(),p=null,b=null,_=[],y=[],D=new Ie,T=null,R=new dn;R.layers.enable(1),R.viewport=new Xt;let U=new dn;U.layers.enable(2),U.viewport=new Xt;let Z=[R,U],v=new Rh;v.layers.enable(1),v.layers.enable(2);let E=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let fe=_[ne];return fe===void 0&&(fe=new fa,_[ne]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ne){let fe=_[ne];return fe===void 0&&(fe=new fa,_[ne]=fe),fe.getGripSpace()},this.getHand=function(ne){let fe=_[ne];return fe===void 0&&(fe=new fa,_[ne]=fe),fe.getHandSpace()};function V(ne){let fe=y.indexOf(ne.inputSource);if(fe===-1)return;let ke=_[fe];ke!==void 0&&(ke.update(ne.inputSource,ne.frame,c||a),ke.dispatchEvent({type:ne.type,data:ne.inputSource}))}function Y(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ie);for(let ne=0;ne<_.length;ne++){let fe=y[ne];fe!==null&&(y[ne]=null,_[ne].disconnect(fe))}E=null,O=null,x.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,b=null,Ot.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ie),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){let fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Gi(f.framebufferWidth,f.framebufferHeight,{format:Vn,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,ke=null,Le=null;m.depth&&(Le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?Cr:br,ke=m.stencil?Rr:Xs);let ut={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(ut),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Gi(d.textureWidth,d.textureHeight,{format:Vn,type:Vi,depthTexture:new Wo(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ot.setContext(s),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ie(ne){for(let fe=0;fe<ne.removed.length;fe++){let ke=ne.removed[fe],Le=y.indexOf(ke);Le>=0&&(y[Le]=null,_[Le].disconnect(ke))}for(let fe=0;fe<ne.added.length;fe++){let ke=ne.added[fe],Le=y.indexOf(ke);if(Le===-1){for(let st=0;st<_.length;st++)if(st>=y.length){y.push(ke),Le=st;break}else if(y[st]===null){y[st]=ke,Le=st;break}if(Le===-1)break}let ut=_[Le];ut&&ut.connect(ke)}}let k=new P,ae=new P;function q(ne,fe,ke){k.setFromMatrixPosition(fe.matrixWorld),ae.setFromMatrixPosition(ke.matrixWorld);let Le=k.distanceTo(ae),ut=fe.projectionMatrix.elements,st=ke.projectionMatrix.elements,vt=ut[14]/(ut[10]-1),Ut=ut[14]/(ut[10]+1),dt=(ut[9]+1)/ut[5],N=(ut[9]-1)/ut[5],cn=(ut[8]-1)/ut[0],bt=(st[8]+1)/st[0],je=vt*cn,rt=vt*bt,mt=Le/(-cn+bt),xe=mt*-cn;if(fe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(xe),ne.translateZ(mt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),ut[10]===-1)ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{let C=vt+mt,M=Ut+mt,G=je-xe,$=rt+(Le-xe),oe=dt*Ut/M*C,se=N*Ut/M*C;ne.projectionMatrix.makePerspective(G,$,oe,se,C,M),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function le(ne,fe){fe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(fe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let fe=ne.near,ke=ne.far;x.texture!==null&&(x.depthNear>0&&(fe=x.depthNear),x.depthFar>0&&(ke=x.depthFar)),v.near=U.near=R.near=fe,v.far=U.far=R.far=ke,(E!==v.near||O!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,O=v.far);let Le=ne.parent,ut=v.cameras;le(v,Le);for(let st=0;st<ut.length;st++)le(ut[st],Le);ut.length===2?q(v,R,U):v.projectionMatrix.copy(R.projectionMatrix),Ae(ne,v,Le)};function Ae(ne,fe,ke){ke===null?ne.matrix.copy(fe.matrixWorld):(ne.matrix.copy(ke.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(fe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Lr*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let ye=null;function yt(ne,fe){if(h=fe.getViewerPose(c||a),g=fe,h!==null){let ke=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Le=!1;ke.length!==v.cameras.length&&(v.cameras.length=0,Le=!0);for(let st=0;st<ke.length;st++){let vt=ke[st],Ut=null;if(f!==null)Ut=f.getViewport(vt);else{let N=u.getViewSubImage(d,vt);Ut=N.viewport,st===0&&(e.setRenderTargetTextures(b,N.colorTexture,d.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(b))}let dt=Z[st];dt===void 0&&(dt=new dn,dt.layers.enable(st),dt.viewport=new Xt,Z[st]=dt),dt.matrix.fromArray(vt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(vt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),st===0&&(v.matrix.copy(dt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Le===!0&&v.cameras.push(dt)}let ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")){let st=u.getDepthInformation(ke[0]);st&&st.isValid&&st.texture&&x.init(e,st,s.renderState)}}for(let ke=0;ke<_.length;ke++){let Le=y[ke],ut=_[ke];Le!==null&&ut!==void 0&&ut.update(Le,fe,c||a)}ye&&ye(ne,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),g=null}let Ot=new pp;Ot.setAnimationLoop(yt),this.setAnimationLoop=function(ne){ye=ne},this.dispose=function(){}}},Bs=new wi,oy=new pt;function ly(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,fp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),_=b.envMap,y=b.envMapRotation;_&&(m.envMap.value=_,Bs.copy(y),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),m.envMapRotation.value.setFromMatrix4(oy.makeRotationFromEuler(Bs)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cy(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){let y=_.program;n.uniformBlockBinding(b,y)}function c(b,_){let y=s[b.id];y===void 0&&(g(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",m));let D=_.program;n.updateUBOMapping(b,D);let T=e.render.frame;r[b.id]!==T&&(d(b),r[b.id]=T)}function h(b){let _=u();b.__bindingPointIndex=_;let y=i.createBuffer(),D=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,D,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let _=s[b.id],y=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,R=y.length;T<R;T++){let U=Array.isArray(y[T])?y[T]:[y[T]];for(let Z=0,v=U.length;Z<v;Z++){let E=U[Z];if(f(E,T,Z,D)===!0){let O=E.__offset,V=Array.isArray(E.value)?E.value:[E.value],Y=0;for(let ie=0;ie<V.length;ie++){let k=V[ie],ae=x(k);typeof k=="number"||typeof k=="boolean"?(E.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,O+Y,E.__data)):k.isMatrix3?(E.__data[0]=k.elements[0],E.__data[1]=k.elements[1],E.__data[2]=k.elements[2],E.__data[3]=0,E.__data[4]=k.elements[3],E.__data[5]=k.elements[4],E.__data[6]=k.elements[5],E.__data[7]=0,E.__data[8]=k.elements[6],E.__data[9]=k.elements[7],E.__data[10]=k.elements[8],E.__data[11]=0):(k.toArray(E.__data,Y),Y+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,_,y,D){let T=b.value,R=_+"_"+y;if(D[R]===void 0)return typeof T=="number"||typeof T=="boolean"?D[R]=T:D[R]=T.clone(),!0;{let U=D[R];if(typeof T=="number"||typeof T=="boolean"){if(U!==T)return D[R]=T,!0}else if(U.equals(T)===!1)return U.copy(T),!0}return!1}function g(b){let _=b.uniforms,y=0,D=16;for(let R=0,U=_.length;R<U;R++){let Z=Array.isArray(_[R])?_[R]:[_[R]];for(let v=0,E=Z.length;v<E;v++){let O=Z[v],V=Array.isArray(O.value)?O.value:[O.value];for(let Y=0,ie=V.length;Y<ie;Y++){let k=V[Y],ae=x(k),q=y%D,le=q%ae.boundary,Ae=q+le;y+=le,Ae!==0&&D-Ae<ae.storage&&(y+=D-Ae),O.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=ae.storage}}}let T=y%D;return T>0&&(y+=D-T),b.__size=y,b.__cache={},this}function x(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){let _=b.target;_.removeEventListener("dispose",m);let y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var kr=class{constructor(e={}){let{canvas:t=d0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=ps,this.toneMappingExposure=1;let _=this,y=!1,D=0,T=0,R=null,U=-1,Z=null,v=new Xt,E=new Xt,O=null,V=new et(0),Y=0,ie=t.width,k=t.height,ae=1,q=null,le=null,Ae=new Xt(0,0,ie,k),ye=new Xt(0,0,ie,k),yt=!1,Ot=new ya,ne=!1,fe=!1,ke=new pt,Le=new pt,ut=new P,st=new Xt,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ut=!1;function dt(){return R===null?ae:1}let N=n;function cn(A,B){return t.getContext(A,B)}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",W,!1),N===null){let B="webgl2";if(N=cn(B,A),N===null)throw cn(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let bt,je,rt,mt,xe,C,M,G,$,oe,se,Pe,pe,Ce,Et,ue,Ee,Je,Ze,Te,St,qe,Gt,z;function Me(){bt=new wx(N),bt.init(),qe=new iy(N,bt),je=new yx(N,bt,e,qe),rt=new ey(N),je.reverseDepthBuffer&&rt.buffers.depth.setReversed(!0),mt=new Rx(N),xe=new H_,C=new ny(N,bt,rt,xe,je,qe,mt),M=new bx(_),G=new Ex(_),$=new U0(N),Gt=new xx(N,$),oe=new Tx(N,$,mt,Gt),se=new Px(N,oe,$,mt),Ze=new Cx(N,je,C),ue=new vx(xe),Pe=new B_(_,M,G,bt,je,Gt,ue),pe=new ly(_,xe),Ce=new G_,Et=new K_(bt),Je=new gx(_,M,G,rt,se,d,l),Ee=new j_(_,se,je),z=new cy(N,mt,je,rt),Te=new _x(N,bt,mt),St=new Ax(N,bt,mt),mt.programs=Pe.programs,_.capabilities=je,_.extensions=bt,_.properties=xe,_.renderLists=Ce,_.shadowMap=Ee,_.state=rt,_.info=mt}Me();let Q=new Ph(_,N);this.xr=Q,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let A=bt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=bt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(A){A!==void 0&&(ae=A,this.setSize(ie,k,!1))},this.getSize=function(A){return A.set(ie,k)},this.setSize=function(A,B,J=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=A,k=B,t.width=Math.floor(A*ae),t.height=Math.floor(B*ae),J===!0&&(t.style.width=A+"px",t.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(ie*ae,k*ae).floor()},this.setDrawingBufferSize=function(A,B,J){ie=A,k=B,ae=J,t.width=Math.floor(A*J),t.height=Math.floor(B*J),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(Ae)},this.setViewport=function(A,B,J,K){A.isVector4?Ae.set(A.x,A.y,A.z,A.w):Ae.set(A,B,J,K),rt.viewport(v.copy(Ae).multiplyScalar(ae).round())},this.getScissor=function(A){return A.copy(ye)},this.setScissor=function(A,B,J,K){A.isVector4?ye.set(A.x,A.y,A.z,A.w):ye.set(A,B,J,K),rt.scissor(E.copy(ye).multiplyScalar(ae).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(A){rt.setScissorTest(yt=A)},this.setOpaqueSort=function(A){q=A},this.setTransparentSort=function(A){le=A},this.getClearColor=function(A){return A.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(A=!0,B=!0,J=!0){let K=0;if(A){let H=!1;if(R!==null){let ge=R.texture.format;H=ge===su||ge===iu||ge===nu}if(H){let ge=R.texture.type,Ne=ge===Vi||ge===Xs||ge===xa||ge===Rr||ge===Qh||ge===eu,Be=Je.getClearColor(),Ue=Je.getClearAlpha(),ce=Be.r,$e=Be.g,He=Be.b;Ne?(f[0]=ce,f[1]=$e,f[2]=He,f[3]=Ue,N.clearBufferuiv(N.COLOR,0,f)):(g[0]=ce,g[1]=$e,g[2]=He,g[3]=Ue,N.clearBufferiv(N.COLOR,0,g))}else K|=N.COLOR_BUFFER_BIT}B&&(K|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),J&&(K|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",W,!1),Ce.dispose(),Et.dispose(),xe.dispose(),M.dispose(),G.dispose(),se.dispose(),Gt.dispose(),z.dispose(),Pe.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",oi),Q.removeEventListener("sessionend",Ts),yi.stop()};function re(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let A=mt.autoReset,B=Ee.enabled,J=Ee.autoUpdate,K=Ee.needsUpdate,H=Ee.type;Me(),mt.autoReset=A,Ee.enabled=B,Ee.autoUpdate=J,Ee.needsUpdate=K,Ee.type=H}function W(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ze(A){let B=A.target;B.removeEventListener("dispose",ze),Nt(B)}function Nt(A){Rt(A),xe.remove(A)}function Rt(A){let B=xe.get(A).programs;B!==void 0&&(B.forEach(function(J){Pe.releaseProgram(J)}),A.isShaderMaterial&&Pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,J,K,H,ge){B===null&&(B=vt);let Ne=H.isMesh&&H.matrixWorld.determinant()<0,Be=es(A,B,J,K,H);rt.setMaterial(K,Ne);let Ue=J.index,ce=1;if(K.wireframe===!0){if(Ue=oe.getWireframeAttribute(J),Ue===void 0)return;ce=2}let $e=J.drawRange,He=J.attributes.position,Wt=$e.start*ce,lt=($e.start+$e.count)*ce;ge!==null&&(Wt=Math.max(Wt,ge.start*ce),lt=Math.min(lt,(ge.start+ge.count)*ce)),Ue!==null?(Wt=Math.max(Wt,0),lt=Math.min(lt,Ue.count)):He!=null&&(Wt=Math.max(Wt,0),lt=Math.min(lt,He.count));let wt=lt-Wt;if(wt<0||wt===1/0)return;Gt.setup(H,K,Be,J,Ue);let Qt,Ct=Te;if(Ue!==null&&(Qt=$.get(Ue),Ct=St,Ct.setIndex(Qt)),H.isMesh)K.wireframe===!0?(rt.setLineWidth(K.wireframeLinewidth*dt()),Ct.setMode(N.LINES)):Ct.setMode(N.TRIANGLES);else if(H.isLine){let Xe=K.linewidth;Xe===void 0&&(Xe=1),rt.setLineWidth(Xe*dt()),H.isLineSegments?Ct.setMode(N.LINES):H.isLineLoop?Ct.setMode(N.LINE_LOOP):Ct.setMode(N.LINE_STRIP)}else H.isPoints?Ct.setMode(N.POINTS):H.isSprite&&Ct.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Ct.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(bt.get("WEBGL_multi_draw"))Ct.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Xe=H._multiDrawStarts,sn=H._multiDrawCounts,zt=H._multiDrawCount,Dn=Ue?$.get(Ue).bytesPerElement:1,Cn=xe.get(K).currentProgram.getUniforms();for(let Tn=0;Tn<zt;Tn++)Cn.setValue(N,"_gl_DrawID",Tn),Ct.render(Xe[Tn]/Dn,sn[Tn])}else if(H.isInstancedMesh)Ct.renderInstances(Wt,wt,H.count);else if(J.isInstancedBufferGeometry){let Xe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,sn=Math.min(J.instanceCount,Xe);Ct.renderInstances(Wt,wt,sn)}else Ct.render(Wt,wt)};function ot(A,B,J){A.transparent===!0&&A.side===on&&A.forceSinglePass===!1?(A.side=Gn,A.needsUpdate=!0,Rs(A,B,J),A.side=Ei,A.needsUpdate=!0,Rs(A,B,J),A.side=on):Rs(A,B,J)}this.compile=function(A,B,J=null){J===null&&(J=A),m=Et.get(J),m.init(B),b.push(m),J.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),A!==J&&A.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();let K=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ge=H.material;if(ge)if(Array.isArray(ge))for(let Ne=0;Ne<ge.length;Ne++){let Be=ge[Ne];ot(Be,J,H),K.add(Be)}else ot(ge,J,H),K.add(ge)}),b.pop(),m=null,K},this.compileAsync=function(A,B,J=null){let K=this.compile(A,B,J);return new Promise(H=>{function ge(){if(K.forEach(function(Ne){xe.get(Ne).currentProgram.isReady()&&K.delete(Ne)}),K.size===0){H(A);return}setTimeout(ge,10)}bt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let rn=null;function un(A){rn&&rn(A)}function oi(){yi.stop()}function Ts(){yi.start()}let yi=new pp;yi.setAnimationLoop(un),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(A){rn=A,Q.setAnimationLoop(A),A===null?yi.stop():yi.start()},Q.addEventListener("sessionstart",oi),Q.addEventListener("sessionend",Ts),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(B),B=Q.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,B,R),m=Et.get(A,b.length),m.init(B),b.push(m),Le.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ot.setFromProjectionMatrix(Le),fe=this.localClippingEnabled,ne=ue.init(this.clippingPlanes,fe),x=Ce.get(A,p.length),x.init(),p.push(x),Q.enabled===!0&&Q.isPresenting===!0){let ge=_.xr.getDepthSensingMesh();ge!==null&&Qi(ge,B,-1/0,_.sortObjects)}Qi(A,B,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(q,le),Ut=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Ut&&Je.addToRenderList(x,A),this.info.render.frame++,ne===!0&&ue.beginShadows();let J=m.state.shadowsArray;Ee.render(J,A,B),ne===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=x.opaque,H=x.transmissive;if(m.setupLights(),B.isArrayCamera){let ge=B.cameras;if(H.length>0)for(let Ne=0,Be=ge.length;Ne<Be;Ne++){let Ue=ge[Ne];As(K,H,A,Ue)}Ut&&Je.render(A);for(let Ne=0,Be=ge.length;Ne<Be;Ne++){let Ue=ge[Ne];Jr(x,A,Ue,Ue.viewport)}}else H.length>0&&As(K,H,A,B),Ut&&Je.render(A),Jr(x,A,B);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(_,A,B),Gt.resetDefaultState(),U=-1,Z=null,b.pop(),b.length>0?(m=b[b.length-1],ne===!0&&ue.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Qi(A,B,J,K){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ot.intersectsSprite(A)){K&&st.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Le);let Ne=se.update(A),Be=A.material;Be.visible&&x.push(A,Ne,Be,J,st.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ot.intersectsObject(A))){let Ne=se.update(A),Be=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),st.copy(A.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),st.copy(Ne.boundingSphere.center)),st.applyMatrix4(A.matrixWorld).applyMatrix4(Le)),Array.isArray(Be)){let Ue=Ne.groups;for(let ce=0,$e=Ue.length;ce<$e;ce++){let He=Ue[ce],Wt=Be[He.materialIndex];Wt&&Wt.visible&&x.push(A,Ne,Wt,J,st.z,He)}}else Be.visible&&x.push(A,Ne,Be,J,st.z,null)}}let ge=A.children;for(let Ne=0,Be=ge.length;Ne<Be;Ne++)Qi(ge[Ne],B,J,K)}function Jr(A,B,J,K){let H=A.opaque,ge=A.transmissive,Ne=A.transparent;m.setupLightsView(J),ne===!0&&ue.setGlobalState(_.clippingPlanes,J),K&&rt.viewport(v.copy(K)),H.length>0&&wn(H,B,J),ge.length>0&&wn(ge,B,J),Ne.length>0&&wn(Ne,B,J),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function As(A,B,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new Gi(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float")?Ra:Vi,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Vt.workingColorSpace}));let ge=m.state.transmissionRenderTarget[K.id],Ne=K.viewport||v;ge.setSize(Ne.z,Ne.w);let Be=_.getRenderTarget();_.setRenderTarget(ge),_.getClearColor(V),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),Ut&&Je.render(J);let Ue=_.toneMapping;_.toneMapping=ps;let ce=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),ne===!0&&ue.setGlobalState(_.clippingPlanes,K),wn(A,J,K),C.updateMultisampleRenderTarget(ge),C.updateRenderTargetMipmap(ge),bt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let He=0,Wt=B.length;He<Wt;He++){let lt=B[He],wt=lt.object,Qt=lt.geometry,Ct=lt.material,Xe=lt.group;if(Ct.side===on&&wt.layers.test(K.layers)){let sn=Ct.side;Ct.side=Gn,Ct.needsUpdate=!0,ei(wt,J,K,Qt,Ct,Xe),Ct.side=sn,Ct.needsUpdate=!0,$e=!0}}$e===!0&&(C.updateMultisampleRenderTarget(ge),C.updateRenderTargetMipmap(ge))}_.setRenderTarget(Be),_.setClearColor(V,Y),ce!==void 0&&(K.viewport=ce),_.toneMapping=Ue}function wn(A,B,J){let K=B.isScene===!0?B.overrideMaterial:null;for(let H=0,ge=A.length;H<ge;H++){let Ne=A[H],Be=Ne.object,Ue=Ne.geometry,ce=K===null?Ne.material:K,$e=Ne.group;Be.layers.test(J.layers)&&ei(Be,B,J,Ue,ce,$e)}}function ei(A,B,J,K,H,ge){A.onBeforeRender(_,B,J,K,H,ge),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(_,B,J,K,A,ge),H.transparent===!0&&H.side===on&&H.forceSinglePass===!1?(H.side=Gn,H.needsUpdate=!0,_.renderBufferDirect(J,B,K,H,A,ge),H.side=Ei,H.needsUpdate=!0,_.renderBufferDirect(J,B,K,H,A,ge),H.side=on):_.renderBufferDirect(J,B,K,H,A,ge),A.onAfterRender(_,B,J,K,H,ge)}function Rs(A,B,J){B.isScene!==!0&&(B=vt);let K=xe.get(A),H=m.state.lights,ge=m.state.shadowsArray,Ne=H.state.version,Be=Pe.getParameters(A,H.state,ge,B,J),Ue=Pe.getProgramCacheKey(Be),ce=K.programs;K.environment=A.isMeshStandardMaterial?B.environment:null,K.fog=B.fog,K.envMap=(A.isMeshStandardMaterial?G:M).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,ce===void 0&&(A.addEventListener("dispose",ze),ce=new Map,K.programs=ce);let $e=ce.get(Ue);if($e!==void 0){if(K.currentProgram===$e&&K.lightsStateVersion===Ne)return Ps(A,Be),$e}else Be.uniforms=Pe.getUniforms(A),A.onBeforeCompile(Be,_),$e=Pe.acquireProgram(Be,Ue),ce.set(Ue,$e),K.uniforms=Be.uniforms;let He=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=ue.uniform),Ps(A,Be),K.needsLights=ts(A),K.lightsStateVersion=Ne,K.needsLights&&(He.ambientLightColor.value=H.state.ambient,He.lightProbe.value=H.state.probe,He.directionalLights.value=H.state.directional,He.directionalLightShadows.value=H.state.directionalShadow,He.spotLights.value=H.state.spot,He.spotLightShadows.value=H.state.spotShadow,He.rectAreaLights.value=H.state.rectArea,He.ltc_1.value=H.state.rectAreaLTC1,He.ltc_2.value=H.state.rectAreaLTC2,He.pointLights.value=H.state.point,He.pointLightShadows.value=H.state.pointShadow,He.hemisphereLights.value=H.state.hemi,He.directionalShadowMap.value=H.state.directionalShadowMap,He.directionalShadowMatrix.value=H.state.directionalShadowMatrix,He.spotShadowMap.value=H.state.spotShadowMap,He.spotLightMatrix.value=H.state.spotLightMatrix,He.spotLightMap.value=H.state.spotLightMap,He.pointShadowMap.value=H.state.pointShadowMap,He.pointShadowMatrix.value=H.state.pointShadowMatrix),K.currentProgram=$e,K.uniformsList=null,$e}function Cs(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=Er.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function Ps(A,B){let J=xe.get(A);J.outputColorSpace=B.outputColorSpace,J.batching=B.batching,J.batchingColor=B.batchingColor,J.instancing=B.instancing,J.instancingColor=B.instancingColor,J.instancingMorph=B.instancingMorph,J.skinning=B.skinning,J.morphTargets=B.morphTargets,J.morphNormals=B.morphNormals,J.morphColors=B.morphColors,J.morphTargetsCount=B.morphTargetsCount,J.numClippingPlanes=B.numClippingPlanes,J.numIntersection=B.numClipIntersection,J.vertexAlphas=B.vertexAlphas,J.vertexTangents=B.vertexTangents,J.toneMapping=B.toneMapping}function es(A,B,J,K,H){B.isScene!==!0&&(B=vt),C.resetTextureUnits();let ge=B.fog,Ne=K.isMeshStandardMaterial?B.environment:null,Be=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:En,Ue=(K.isMeshStandardMaterial?G:M).get(K.envMap||Ne),ce=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,$e=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),He=!!J.morphAttributes.position,Wt=!!J.morphAttributes.normal,lt=!!J.morphAttributes.color,wt=ps;K.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(wt=_.toneMapping);let Qt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ct=Qt!==void 0?Qt.length:0,Xe=xe.get(K),sn=m.state.lights;if(ne===!0&&(fe===!0||A!==Z)){let Un=A===Z&&K.id===U;ue.setState(K,A,Un)}let zt=!1;K.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==sn.state.version||Xe.outputColorSpace!==Be||H.isBatchedMesh&&Xe.batching===!1||!H.isBatchedMesh&&Xe.batching===!0||H.isBatchedMesh&&Xe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Xe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Xe.instancing===!1||!H.isInstancedMesh&&Xe.instancing===!0||H.isSkinnedMesh&&Xe.skinning===!1||!H.isSkinnedMesh&&Xe.skinning===!0||H.isInstancedMesh&&Xe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Xe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Xe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Xe.instancingMorph===!1&&H.morphTexture!==null||Xe.envMap!==Ue||K.fog===!0&&Xe.fog!==ge||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ue.numPlanes||Xe.numIntersection!==ue.numIntersection)||Xe.vertexAlphas!==ce||Xe.vertexTangents!==$e||Xe.morphTargets!==He||Xe.morphNormals!==Wt||Xe.morphColors!==lt||Xe.toneMapping!==wt||Xe.morphTargetsCount!==Ct)&&(zt=!0):(zt=!0,Xe.__version=K.version);let Dn=Xe.currentProgram;zt===!0&&(Dn=Rs(K,B,H));let Cn=!1,Tn=!1,Ri=!1,Dt=Dn.getUniforms(),ti=Xe.uniforms;if(rt.useProgram(Dn.program)&&(Cn=!0,Tn=!0,Ri=!0),K.id!==U&&(U=K.id,Tn=!0),Cn||Z!==A){je.reverseDepthBuffer?(ke.copy(A.projectionMatrix),p0(ke),m0(ke),Dt.setValue(N,"projectionMatrix",ke)):Dt.setValue(N,"projectionMatrix",A.projectionMatrix),Dt.setValue(N,"viewMatrix",A.matrixWorldInverse);let Un=Dt.map.cameraPosition;Un!==void 0&&Un.setValue(N,ut.setFromMatrixPosition(A.matrixWorld)),je.logarithmicDepthBuffer&&Dt.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Dt.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),Z!==A&&(Z=A,Tn=!0,Ri=!0)}if(H.isSkinnedMesh){Dt.setOptional(N,H,"bindMatrix"),Dt.setOptional(N,H,"bindMatrixInverse");let Un=H.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),Dt.setValue(N,"boneTexture",Un.boneTexture,C))}H.isBatchedMesh&&(Dt.setOptional(N,H,"batchingTexture"),Dt.setValue(N,"batchingTexture",H._matricesTexture,C),Dt.setOptional(N,H,"batchingIdTexture"),Dt.setValue(N,"batchingIdTexture",H._indirectTexture,C),Dt.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&Dt.setValue(N,"batchingColorTexture",H._colorsTexture,C));let Is=J.morphAttributes;if((Is.position!==void 0||Is.normal!==void 0||Is.color!==void 0)&&Ze.update(H,J,Dn),(Tn||Xe.receiveShadow!==H.receiveShadow)&&(Xe.receiveShadow=H.receiveShadow,Dt.setValue(N,"receiveShadow",H.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(ti.envMap.value=Ue,ti.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&B.environment!==null&&(ti.envMapIntensity.value=B.environmentIntensity),Tn&&(Dt.setValue(N,"toneMappingExposure",_.toneMappingExposure),Xe.needsLights&&Ai(ti,Ri),ge&&K.fog===!0&&pe.refreshFogUniforms(ti,ge),pe.refreshMaterialUniforms(ti,K,ae,k,m.state.transmissionRenderTarget[A.id]),Er.upload(N,Cs(Xe),ti,C)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Er.upload(N,Cs(Xe),ti,C),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Dt.setValue(N,"center",H.center),Dt.setValue(N,"modelViewMatrix",H.modelViewMatrix),Dt.setValue(N,"normalMatrix",H.normalMatrix),Dt.setValue(N,"modelMatrix",H.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let Un=K.uniformsGroups;for(let js=0,Oa=Un.length;js<Oa;js++){let za=Un[js];z.update(za,Dn),z.bind(za,Dn)}}return Dn}function Ai(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function ts(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,B,J){xe.get(A.texture).__webglTexture=B,xe.get(A.depthTexture).__webglTexture=J;let K=xe.get(A);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=J===void 0,K.__autoAllocateDepthBuffer||bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,B){let J=xe.get(A);J.__webglFramebuffer=B,J.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,J=0){R=A,D=B,T=J;let K=!0,H=null,ge=!1,Ne=!1;if(A){let Ue=xe.get(A);if(Ue.__useDefaultFramebuffer!==void 0)rt.bindFramebuffer(N.FRAMEBUFFER,null),K=!1;else if(Ue.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(Ue.__hasExternalTextures)C.rebindTextures(A,xe.get(A.texture).__webglTexture,xe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let He=A.depthTexture;if(Ue.__boundDepthTexture!==He){if(He!==null&&xe.has(He)&&(A.width!==He.image.width||A.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}let ce=A.texture;(ce.isData3DTexture||ce.isDataArrayTexture||ce.isCompressedArrayTexture)&&(Ne=!0);let $e=xe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($e[B])?H=$e[B][J]:H=$e[B],ge=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?H=xe.get(A).__webglMultisampledFramebuffer:Array.isArray($e)?H=$e[J]:H=$e,v.copy(A.viewport),E.copy(A.scissor),O=A.scissorTest}else v.copy(Ae).multiplyScalar(ae).floor(),E.copy(ye).multiplyScalar(ae).floor(),O=yt;if(rt.bindFramebuffer(N.FRAMEBUFFER,H)&&K&&rt.drawBuffers(A,H),rt.viewport(v),rt.scissor(E),rt.setScissorTest(O),ge){let Ue=xe.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ue.__webglTexture,J)}else if(Ne){let Ue=xe.get(A.texture),ce=B||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ue.__webglTexture,J||0,ce)}U=-1},this.readRenderTargetPixels=function(A,B,J,K,H,ge,Ne){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be){rt.bindFramebuffer(N.FRAMEBUFFER,Be);try{let Ue=A.texture,ce=Ue.format,$e=Ue.type;if(!je.textureFormatReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-K&&J>=0&&J<=A.height-H&&N.readPixels(B,J,K,H,qe.convert(ce),qe.convert($e),ge)}finally{let Ue=R!==null?xe.get(R).__webglFramebuffer:null;rt.bindFramebuffer(N.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(A,B,J,K,H,ge,Ne){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be){let Ue=A.texture,ce=Ue.format,$e=Ue.type;if(!je.textureFormatReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=A.width-K&&J>=0&&J<=A.height-H){rt.bindFramebuffer(N.FRAMEBUFFER,Be);let He=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,He),N.bufferData(N.PIXEL_PACK_BUFFER,ge.byteLength,N.STREAM_READ),N.readPixels(B,J,K,H,qe.convert(ce),qe.convert($e),0);let Wt=R!==null?xe.get(R).__webglFramebuffer:null;rt.bindFramebuffer(N.FRAMEBUFFER,Wt);let lt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await f0(N,lt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,He),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ge),N.deleteBuffer(He),N.deleteSync(lt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,B=null,J=0){A.isTexture!==!0&&(Io("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,A=arguments[1]);let K=Math.pow(2,-J),H=Math.floor(A.image.width*K),ge=Math.floor(A.image.height*K),Ne=B!==null?B.x:0,Be=B!==null?B.y:0;C.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,J,0,0,Ne,Be,H,ge),rt.unbindTexture()},this.copyTextureToTexture=function(A,B,J=null,K=null,H=0){A.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,A=arguments[1],B=arguments[2],H=arguments[3]||0,J=null);let ge,Ne,Be,Ue,ce,$e;J!==null?(ge=J.max.x-J.min.x,Ne=J.max.y-J.min.y,Be=J.min.x,Ue=J.min.y):(ge=A.image.width,Ne=A.image.height,Be=0,Ue=0),K!==null?(ce=K.x,$e=K.y):(ce=0,$e=0);let He=qe.convert(B.format),Wt=qe.convert(B.type);C.setTexture2D(B,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);let lt=N.getParameter(N.UNPACK_ROW_LENGTH),wt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Qt=N.getParameter(N.UNPACK_SKIP_PIXELS),Ct=N.getParameter(N.UNPACK_SKIP_ROWS),Xe=N.getParameter(N.UNPACK_SKIP_IMAGES),sn=A.isCompressedTexture?A.mipmaps[H]:A.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,sn.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,sn.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Be),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ue),A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,H,ce,$e,ge,Ne,He,Wt,sn.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,H,ce,$e,sn.width,sn.height,He,sn.data):N.texSubImage2D(N.TEXTURE_2D,H,ce,$e,ge,Ne,He,Wt,sn),N.pixelStorei(N.UNPACK_ROW_LENGTH,lt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,wt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Qt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ct),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Xe),H===0&&B.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),rt.unbindTexture()},this.copyTextureToTexture3D=function(A,B,J=null,K=null,H=0){A.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,K=arguments[1]||null,A=arguments[2],B=arguments[3],H=arguments[4]||0);let ge,Ne,Be,Ue,ce,$e,He,Wt,lt,wt=A.isCompressedTexture?A.mipmaps[H]:A.image;J!==null?(ge=J.max.x-J.min.x,Ne=J.max.y-J.min.y,Be=J.max.z-J.min.z,Ue=J.min.x,ce=J.min.y,$e=J.min.z):(ge=wt.width,Ne=wt.height,Be=wt.depth,Ue=0,ce=0,$e=0),K!==null?(He=K.x,Wt=K.y,lt=K.z):(He=0,Wt=0,lt=0);let Qt=qe.convert(B.format),Ct=qe.convert(B.type),Xe;if(B.isData3DTexture)C.setTexture3D(B,0),Xe=N.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)C.setTexture2DArray(B,0),Xe=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);let sn=N.getParameter(N.UNPACK_ROW_LENGTH),zt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Dn=N.getParameter(N.UNPACK_SKIP_PIXELS),Cn=N.getParameter(N.UNPACK_SKIP_ROWS),Tn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,wt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,wt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ue),N.pixelStorei(N.UNPACK_SKIP_ROWS,ce),N.pixelStorei(N.UNPACK_SKIP_IMAGES,$e),A.isDataTexture||A.isData3DTexture?N.texSubImage3D(Xe,H,He,Wt,lt,ge,Ne,Be,Qt,Ct,wt.data):B.isCompressedArrayTexture?N.compressedTexSubImage3D(Xe,H,He,Wt,lt,ge,Ne,Be,Qt,wt.data):N.texSubImage3D(Xe,H,He,Wt,lt,ge,Ne,Be,Qt,Ct,wt),N.pixelStorei(N.UNPACK_ROW_LENGTH,sn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,zt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Dn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Cn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Tn),H===0&&B.generateMipmaps&&N.generateMipmap(Xe),rt.unbindTexture()},this.initRenderTarget=function(A){xe.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),rt.unbindTexture()},this.resetState=function(){D=0,T=0,R=null,rt.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ru?"display-p3":"srgb",t.unpackColorSpace=Vt.workingColorSpace===gl?"display-p3":"srgb"}};var Xo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new et(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fr=class extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},va=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ph,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Fn=new P,ba=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix4(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyNormalMatrix(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.transformDirection(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),s=Yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),s=Yt(s,this.array),r=Yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Cf=new P,Pf=new Xt,If=new Xt,hy=new P,Lf=new pt,mo=new P,Mc=new Kn,Nf=new pt,Sc=new Nr,Yo=class extends we{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ud,this.bindMatrix=new pt,this.bindMatrixInverse=new pt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mo),this.boundingBox.expandByPoint(mo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mo),this.boundingSphere.expandByPoint(mo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mc.copy(this.boundingSphere),Mc.applyMatrix4(s),e.ray.intersectsSphere(Mc)!==!1&&(Nf.copy(s).invert(),Sc.copy(e.ray).applyMatrix4(Nf),!(this.boundingBox!==null&&Sc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Sc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Xt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ud?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Om?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Pf.fromBufferAttribute(s.attributes.skinIndex,e),If.fromBufferAttribute(s.attributes.skinWeight,e),Cf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=If.getComponent(r);if(a!==0){let o=Pf.getComponent(r);Lf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(hy.copy(Cf).applyMatrix4(Lf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ma=class extends ln{constructor(){super(),this.isBone=!0,this.type="Bone"}},Or=class extends Sn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ln,h=Ln,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Df=new pt,uy=new pt,$o=class i{constructor(e=[],t=[]){this.uuid=gi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new pt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new pt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:uy;Df.multiplyMatrices(o,t[r]),Df.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Or(t,e,e,Vn,mi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Ma),this.bones.push(a),this.boneInverses.push(new pt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Ys=class extends It{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},_r=new pt,Uf=new pt,go=[],kf=new Wn,dy=new pt,aa=new we,oa=new Kn,zr=class extends we{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ys(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_r),kf.copy(e.boundingBox).applyMatrix4(_r),this.boundingBox.union(kf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_r),oa.copy(e.boundingSphere).applyMatrix4(_r),this.boundingSphere.union(oa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(aa.geometry=this.geometry,aa.material=this.material,aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(n),e.ray.intersectsSphere(oa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_r),Uf.multiplyMatrices(n,_r),aa.matrixWorld=Uf,aa.raycast(e,go);for(let a=0,o=go.length;a<o;a++){let l=go[a];l.instanceId=r,l.object=this,t.push(l)}go.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ys(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Or(new Float32Array(s*this.count),s,this.count,tu,mi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var _i=class extends Zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},qo=new P,Ko=new P,Ff=new pt,la=new Nr,xo=new Kn,Ec=new P,Of=new P,Wi=class extends ln{constructor(e=new Kt,t=new _i){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)qo.fromBufferAttribute(t,s-1),Ko.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=qo.distanceTo(Ko);e.setAttribute("lineDistance",new kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(s),xo.radius+=r,e.ray.intersectsSphere(xo)===!1)return;Ff.copy(s).invert(),la.copy(e.ray).applyMatrix4(Ff);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),b=h.getX(x+1),_=_o(this,e,la,l,p,b);_&&t.push(_)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=_o(this,e,la,l,x,m);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=_o(this,e,la,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=_o(this,e,la,l,g-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _o(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(qo.fromBufferAttribute(a,s),Ko.fromBufferAttribute(a,r),t.distanceSqToSegment(qo,Ko,Ec,Of)>n)return;Ec.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ec);if(!(l<e.near||l>e.far))return{distance:l,point:Of.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var zf=new P,Bf=new P,xs=class extends Wi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)zf.fromBufferAttribute(t,s),Bf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+zf.distanceTo(Bf);e.setAttribute("lineDistance",new kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Zo=class extends Wi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Sa=class extends Zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hf=new pt,Ih=new Nr,yo=new Kn,vo=new P,$s=class extends ln{constructor(e=new Kt,t=new Sa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(s),yo.radius+=r,e.ray.intersectsSphere(yo)===!1)return;Hf.copy(s).invert(),Ih.copy(e.ray).applyMatrix4(Hf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);vo.fromBufferAttribute(u,m),Vf(vo,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)vo.fromBufferAttribute(u,g),Vf(vo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vf(i,e,t,n,s,r,a){let o=Ih.distanceSqToPoint(i);if(o<t){let l=new P;Ih.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Jo=class extends Sn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ii=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Ie:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new P,s=[],r=[],a=[],o=new P,l=new pt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(gn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(gn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ea=class extends ii{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Ie){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Lh=class extends Ea{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function lu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var bo=new P,wc=new lu,Tc=new lu,Ac=new lu,Nh=class extends ii{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(bo.subVectors(s[0],s[1]).add(s[0]),c=bo);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(bo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=bo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),wc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),Tc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Ac.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(wc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Tc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ac.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(wc.calc(l),Tc.calc(l),Ac.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Gf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function fy(i,e){let t=1-i;return t*t*e}function py(i,e){return 2*(1-i)*i*e}function my(i,e){return i*i*e}function pa(i,e,t,n){return fy(i,e)+py(i,t)+my(i,n)}function gy(i,e){let t=1-i;return t*t*t*e}function xy(i,e){let t=1-i;return 3*t*t*i*e}function _y(i,e){return 3*(1-i)*i*i*e}function yy(i,e){return i*i*i*e}function ma(i,e,t,n,s){return gy(i,e)+xy(i,t)+_y(i,n)+yy(i,s)}var jo=class extends ii{constructor(e=new Ie,t=new Ie,n=new Ie,s=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ie){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ma(e,s.x,r.x,a.x,o.x),ma(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Dh=class extends ii{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ma(e,s.x,r.x,a.x,o.x),ma(e,s.y,r.y,a.y,o.y),ma(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qo=class extends ii{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uh=class extends ii{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},el=class extends ii{constructor(e=new Ie,t=new Ie,n=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ie){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(pa(e,s.x,r.x,a.x),pa(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kh=class extends ii{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(pa(e,s.x,r.x,a.x),pa(e,s.y,r.y,a.y),pa(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tl=class extends ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Gf(o,l.x,c.x,h.x,u.x),Gf(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ie().fromArray(s))}return this}},Wf=Object.freeze({__proto__:null,ArcCurve:Lh,CatmullRomCurve3:Nh,CubicBezierCurve:jo,CubicBezierCurve3:Dh,EllipseCurve:Ea,LineCurve:Qo,LineCurve3:Uh,QuadraticBezierCurve:el,QuadraticBezierCurve3:kh,SplineCurve:tl}),Fh=class extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wf[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Wf[s.type]().fromJSON(s))}return this}},Oh=class extends Fh{constructor(e){super(),this.type="Path",this.currentPoint=new Ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Qo(this.currentPoint.clone(),new Ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new el(this.currentPoint.clone(),new Ie(e,t),new Ie(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new jo(this.currentPoint.clone(),new Ie(e,t),new Ie(n,s),new Ie(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new tl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Ea(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},wa=class i extends Kt{constructor(e=[new Ie(0,-.5),new Ie(.5,0),new Ie(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=gn(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new P,d=new Ie,f=new P,g=new P,x=new P,m=0,p=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let b=0;b<=t;b++){let _=n+b*h*s,y=Math.sin(_),D=Math.cos(_);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*y,u.y=e[T].y,u.z=e[T].x*D,a.push(u.x,u.y,u.z),d.x=b/t,d.y=T/(e.length-1),o.push(d.x,d.y);let R=l[3*T+0]*y,U=l[3*T+1],Z=l[3*T+0]*D;c.push(R,U,Z)}}for(let b=0;b<t;b++)for(let _=0;_<e.length-1;_++){let y=_+b*e.length,D=y,T=y+e.length,R=y+e.length+1,U=y+1;r.push(D,T,U),r.push(R,U,T)}this.setIndex(r),this.setAttribute("position",new kt(a,3)),this.setAttribute("uv",new kt(o,2)),this.setAttribute("normal",new kt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},nl=class i extends wa{constructor(e=1,t=1,n=4,s=8){let r=new Oh;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}};var yn=class i extends Kt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;b(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new kt(u,3)),this.setAttribute("normal",new kt(d,3)),this.setAttribute("uv",new kt(f,2));function b(){let y=new P,D=new P,T=0,R=(t-e)/n;for(let U=0;U<=r;U++){let Z=[],v=U/r,E=v*(t-e)+e;for(let O=0;O<=s;O++){let V=O/s,Y=V*l+o,ie=Math.sin(Y),k=Math.cos(Y);D.x=E*ie,D.y=-v*n+m,D.z=E*k,u.push(D.x,D.y,D.z),y.set(ie,R,k).normalize(),d.push(y.x,y.y,y.z),f.push(V,1-v),Z.push(g++)}x.push(Z)}for(let U=0;U<s;U++)for(let Z=0;Z<r;Z++){let v=x[Z][U],E=x[Z+1][U],O=x[Z+1][U+1],V=x[Z][U+1];e>0&&(h.push(v,E,V),T+=3),t>0&&(h.push(E,O,V),T+=3)}c.addGroup(p,T,0),p+=T}function _(y){let D=g,T=new Ie,R=new P,U=0,Z=y===!0?e:t,v=y===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;let E=g;for(let O=0;O<=s;O++){let Y=O/s*l+o,ie=Math.cos(Y),k=Math.sin(Y);R.x=Z*k,R.y=m*v,R.z=Z*ie,u.push(R.x,R.y,R.z),d.push(0,v,0),T.x=ie*.5+.5,T.y=k*.5*v+.5,f.push(T.x,T.y),g++}for(let O=0;O<s;O++){let V=D+O,Y=E+O;y===!0?h.push(Y,Y+1,V):h.push(Y+1,Y,V),U+=3}c.addGroup(p,U,y===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},il=class i extends yn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zh=class i extends Kt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new kt(r,3)),this.setAttribute("normal",new kt(r.slice(),3)),this.setAttribute("uv",new kt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let _=new P,y=new P,D=new P;for(let T=0;T<t.length;T+=3)f(t[T+0],_),f(t[T+1],y),f(t[T+2],D),l(_,y,D,b)}function l(b,_,y,D){let T=D+1,R=[];for(let U=0;U<=T;U++){R[U]=[];let Z=b.clone().lerp(y,U/T),v=_.clone().lerp(y,U/T),E=T-U;for(let O=0;O<=E;O++)O===0&&U===T?R[U][O]=Z:R[U][O]=Z.clone().lerp(v,O/E)}for(let U=0;U<T;U++)for(let Z=0;Z<2*(T-U)-1;Z++){let v=Math.floor(Z/2);Z%2===0?(d(R[U][v+1]),d(R[U+1][v]),d(R[U][v])):(d(R[U][v+1]),d(R[U+1][v+1]),d(R[U+1][v]))}}function c(b){let _=new P;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(b),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let b=new P;for(let _=0;_<r.length;_+=3){b.x=r[_+0],b.y=r[_+1],b.z=r[_+2];let y=m(b)/2/Math.PI+.5,D=p(b)/Math.PI+.5;a.push(y,1-D)}g(),u()}function u(){for(let b=0;b<a.length;b+=6){let _=a[b+0],y=a[b+2],D=a[b+4],T=Math.max(_,y,D),R=Math.min(_,y,D);T>.9&&R<.1&&(_<.2&&(a[b+0]+=1),y<.2&&(a[b+2]+=1),D<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,_){let y=b*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function g(){let b=new P,_=new P,y=new P,D=new P,T=new Ie,R=new Ie,U=new Ie;for(let Z=0,v=0;Z<r.length;Z+=9,v+=6){b.set(r[Z+0],r[Z+1],r[Z+2]),_.set(r[Z+3],r[Z+4],r[Z+5]),y.set(r[Z+6],r[Z+7],r[Z+8]),T.set(a[v+0],a[v+1]),R.set(a[v+2],a[v+3]),U.set(a[v+4],a[v+5]),D.copy(b).add(_).add(y).divideScalar(3);let E=m(D);x(T,v+0,b,E),x(R,v+2,_,E),x(U,v+4,y,E)}}function x(b,_,y,D){D<0&&b.x===1&&(a[_]=b.x-1),y.x===0&&y.z===0&&(a[_]=D/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Mo=new P,So=new P,Rc=new P,Eo=new us,sl=class extends Kt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Mr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:m,c:p}=Eo;if(x.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Eo.getNormal(Rc),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let b=0;b<3;b++){let _=(b+1)%3,y=u[b],D=u[_],T=Eo[h[b]],R=Eo[h[_]],U=`${y}_${D}`,Z=`${D}_${y}`;Z in d&&d[Z]?(Rc.dot(d[Z].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(R.x,R.y,R.z)),d[Z]=null):U in d||(d[U]={index0:c[b],index1:c[_],normal:Rc.clone()})}}for(let g in d)if(d[g]){let{index0:x,index1:m}=d[g];Mo.fromBufferAttribute(o,x),So.fromBufferAttribute(o,m),f.push(Mo.x,Mo.y,Mo.z),f.push(So.x,So.y,So.z)}this.setAttribute("position",new kt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var rl=class i extends zh{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Xi=class i extends Kt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new P,g=new Ie;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let b=p+m,_=b,y=b+n+1,D=b+n+2,T=b+1;o.push(_,y,T),o.push(y,D,T)}}this.setIndex(o),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(c,3)),this.setAttribute("uv",new kt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Rn=class i extends Kt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,d=new P,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let b=[],_=p/n,y=0;p===0&&a===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let D=0;D<=t;D++){let T=D/t;u.x=-e*Math.cos(s+T*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(s+T*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+y,1-_),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){let _=h[p][b+1],y=h[p][b],D=h[p+1][b],T=h[p+1][b+1];(p!==0||a>0)&&f.push(_,y,T),(p!==n-1||l<Math.PI)&&f.push(y,D,T)}this.setIndex(f),this.setAttribute("position",new kt(g,3)),this.setAttribute("normal",new kt(x,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var al=class i extends Kt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,b=(s+1)*f+g;a.push(x,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new kt(o,3)),this.setAttribute("normal",new kt(l,3)),this.setAttribute("uv",new kt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Jt=class extends Zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cp,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},jn=class extends Jt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function wo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function vy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function by(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Xf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function yp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var _s=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bh=class extends _s{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kd,endingEnd:kd}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fd:r=e,o=2*t-n;break;case Od:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fd:a=e,l=2*n-t;break;case Od:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,b=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let D=0;D!==o;++D)r[D]=p*a[h+D]+b*a[c+D]+_*a[l+D]+y*a[u+D];return r}},Hh=class extends _s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Vh=class extends _s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},si=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wo(t,this.TimeBufferType),this.values=wo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wo(e.times,Array),values:wo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Pr:t=this.InterpolantFactoryMethodDiscrete;break;case Ir:t=this.InterpolantFactoryMethodLinear;break;case ql:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return ql}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&vy(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ql,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=Ir;var ys=class extends si{constructor(e,t,n){super(e,t,n)}};ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=Pr;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends si{};ol.prototype.ValueTypeName="color";var Yi=class extends si{};Yi.prototype.ValueTypeName="number";var Gh=class extends _s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)xi.slerpFlat(r,0,a,c-o,a,c,l);return r}},$i=class extends si{InterpolantFactoryMethodLinear(e){return new Gh(this.times,this.values,this.getValueSize(),e)}};$i.prototype.ValueTypeName="quaternion";$i.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends si{constructor(e,t,n){super(e,t,n)}};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Pr;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends si{};qi.prototype.ValueTypeName="vector";var ll=class{constructor(e="",t=-1,n=[],s=zm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=gi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Sy(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(si.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=by(l);l=Xf(l,1,h),c=Xf(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Yi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,x){if(f.length!==0){let m=[],p=[];yp(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let b=0;b!==d[g].morphTargets.length;++b){let _=d[g];m.push(_.time),p.push(_.morphTarget===x?1:0)}s.push(new Yi(".morphTargetInfluence["+x+"]",m,p))}l=f.length*a}else{let f=".bones["+t[u].name+"]";n(qi,f+".position",d,"pos",s),n($i,f+".quaternion",d,"rot",s),n(qi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function My(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yi;case"vector":case"vector2":case"vector3":case"vector4":return qi;case"color":return ol;case"quaternion":return $i;case"bool":case"boolean":return ys;case"string":return vs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Sy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=My(i.type);if(i.times===void 0){let t=[],n=[];yp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var ds={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Wh=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Ey=new Wh,Ki=class{constructor(e){this.manager=e!==void 0?e:Ey,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ki.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fi={},Xh=class extends Error{constructor(e,t){super(e),this.response=t}},Ta=class extends Ki{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ds.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Fi[e]!==void 0){Fi[e].push({onLoad:t,onProgress:n,onError:s});return}Fi[e]=[],Fi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Fi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){b();function b(){u.read().then(({done:_,value:y})=>{if(_)p.close();else{x+=y.byteLength;let D=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let T=0,R=h.length;T<R;T++){let U=h[T];U.onProgress&&U.onProgress(D)}p.enqueue(y),b()}},_=>{p.error(_)})}}});return new Response(m)}else throw new Xh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ds.add(e,c);let h=Fi[e];delete Fi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Fi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Fi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Yh=class extends Ki{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ds.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=_a("img");function l(){h(),ds.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Br=class extends Ki{constructor(e){super(e)}load(e,t,n,s){let r=new Sn,a=new Yh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Hr=class extends ln{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},cl=class extends Hr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Cc=new pt,Yf=new P,$f=new P,Aa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ya,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Yf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yf),$f.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($f),t.updateMatrixWorld(),Cc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},$h=class extends Aa{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Lr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},hl=class extends Hr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new $h}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},qf=new pt,ca=new P,Pc=new P,qh=class extends Aa{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new Xt(2,1,1,1),new Xt(0,1,1,1),new Xt(3,1,1,1),new Xt(1,1,1,1),new Xt(3,0,1,1),new Xt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ca.setFromMatrixPosition(e.matrixWorld),n.position.copy(ca),Pc.copy(n.position),Pc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Pc),n.updateMatrixWorld(),s.makeTranslation(-ca.x,-ca.y,-ca.z),qf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qf)}},Vr=class extends Hr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new qh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Kh=class extends Aa{constructor(){super(new Ur(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gr=class extends Hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new Kh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var bs=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ul=class extends Ki{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ds.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ds.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ds.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ds.add(e,l),r.manager.itemStart(e)}};var dl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Kf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Kf(){return performance.now()}var cu="\\[\\]\\.:\\/",wy=new RegExp("["+cu+"]","g"),hu="[^"+cu+"]",Ty="[^"+cu.replace("\\.","")+"]",Ay=/((?:WC+[\/:])*)/.source.replace("WC",hu),Ry=/(WCOD+)?/.source.replace("WCOD",Ty),Cy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hu),Py=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hu),Iy=new RegExp("^"+Ay+Ry+Cy+Py+"$"),Ly=["material","materials","bones","map"],Zh=class{constructor(e,t,n){let s=n||tn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},tn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wy,"")}static parseTrackName(e){let t=Iy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ly.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};tn.Composite=Zh;tn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tn.prototype.GetterByBindingType=[tn.prototype._getValue_direct,tn.prototype._getValue_array,tn.prototype._getValue_arrayElement,tn.prototype._getValue_toArray];tn.prototype.SetterByBindingTypeAndVersioning=[[tn.prototype._setValue_direct,tn.prototype._setValue_direct_setNeedsUpdate,tn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_array,tn.prototype._setValue_array_setNeedsUpdate,tn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_arrayElement,tn.prototype._setValue_arrayElement_setNeedsUpdate,tn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_fromArray,tn.prototype._setValue_fromArray_setNeedsUpdate,tn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fv=new Float32Array(1);var fl=class extends xs{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Kt;r.setIndex(new It(n,1)),r.setAttribute("position",new kt(s,3)),super(r,new _i({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var Xn={hull:{de:"Hallenh\xFClle / Tragwerk",en:"Hall envelope / structure",rho:0,c:"#7d8799"},concrete:{de:"Beton",en:"Concrete",rho:2400,c:"#b8bcc4"},steel:{de:"Stahl",en:"Steel",rho:7850,c:"#4da6ff"},brick:{de:"Ziegelbruch (Sch\xFCttgut)",en:"Brick rubble (bulk)",rho:1400,c:"#c99a5b"},hazard:{de:"Schadstoff (Asbest)",en:"Hazardous (asbestos)",rho:1e3,c:"#ff5a5f"},wood:{de:"Holz",en:"Wood",rho:600,c:"#e0b07a"},soil:{de:"Sch\xFCttgut (Stein, Sand)",en:"Bulk material (stone, sand)",rho:1700,c:"#a8b06a"},masonry:{de:"Mauerwerk / Trockenbau",en:"Masonry / drywall",rho:1200,c:"#c8d2e0"},mixed:{de:"Sonstiges / Technik",en:"Other / equipment",rho:0,c:"#9b8cff"},none:{de:"Personen & Fahrzeuge",en:"People & vehicles",rho:0,c:"#5fd38d"}};var Zi=[{id:"seg",st:"uc1",key:"G",icon:"\u25E7",t:be("Semantische Segmentierung","Semantic segmentation"),d:be("Die ganze Szene in Umgebung \xB7 Boden \xB7 Ziel \u2013 Ziel sind alle wichtigen Objekte (Klassen wie in Artefakt A1).","The whole scene as environment \xB7 floor \xB7 target \u2013 targets are all relevant objects (classes as in artefact A1).")},{id:"search",st:"uc2",key:"Z",icon:"\u2315",t:be("Zero-Shot-Suche","Zero-shot search"),d:be("Textprompt \u2192 Objekt-Cluster mit Bounding Box, ohne Training \u2013 wie GroundingDINO \u2192 SAM (Artefakt A3).","Text prompt \u2192 object clusters with bounding boxes, no training \u2013 like GroundingDINO \u2192 SAM (artefact A3).")},{id:"heat",st:"uc3",key:"H",icon:"\u25A6",t:be("Merkmals-Heatmap","Feature heatmap"),d:be("Die 16 Eingangsmerkmale des RandLA-Net (k = 30) auf jedem Punkt \u2013 plus Ebenheit des Hallenbodens.","The 16 RandLA-Net input features (k = 30) on every point \u2013 plus hall floor flatness.")},{id:"xray",st:"uc4",key:"X",icon:"\u25CC",t:be("R\xF6ntgenblick","X-ray view"),d:be("Halle wird durchsichtig, verborgene Objekte erscheinen als Hologramm \u2013 wie Anlagen hinter Verkleidungen.","The hall turns see-through, hidden objects appear as holograms \u2013 like equipment behind cladding.")},{id:"mesh",st:"uc5",key:"M",icon:"\u25B3",t:be("Scan-to-Mesh & Modell","Scan-to-mesh & model"),d:be("Live-Oberfl\xE4chen (Marching Cubes) mit einstellbarer Feinheit, objektweise \u2013 oder das nachmodellierte Modell.","Live surfaces (marching cubes) with adjustable detail, per object \u2013 or the reconstructed model.")},{id:"cut",st:"uc5",key:"5",icon:"\u229F",t:be("Schnittebene","Section plane"),d:be("Horizontal-, L\xE4ngs- oder Querschnitt durch Punktwolke, Mesh und Modell \u2013 die Schnittkante leuchtet, wie in der Planungssoftware.","Horizontal, longitudinal or cross section through point cloud, mesh and model \u2013 the cut edge lights up, as in planning software.")},{id:"mat",st:"uc6",key:"V",icon:"\u2B22",t:be("Materialkataster","Material register"),d:be("Jeder Punkt nach Material, Mengen und Massen aus dem Modell \u2013 Grundlage f\xFCr R\xFCckbau und Kreislauf.","Every point by material, quantities and masses from the model \u2013 the basis for deconstruction and circularity.")},{id:"net",st:"uc7",icon:"\u2316",passive:!0,t:be("Scanner-Netzwerk","Scanner network"),d:be("Station\xE4re Laserscanner: bis zu 6 statt 3 gleichzeitig \u2013 wie das LiDAR-Netz der Smart City.","Stationary laser scanners: up to 6 instead of 3 at once \u2013 like the smart-city LiDAR network.")},{id:"nbv",st:"uc7",key:"Y",icon:"\u233E",t:be("Scan-Planer (Next Best View)","Scan planner (next best view)"),d:be("Schl\xE4gt die n\xE4chsten TLS-Standpunkte vor: gr\xF6\xDFter erwarteter Neuzuwachs bei wenig Verdeckung \u2013 weniger Standpunkte, weniger Akku.","Suggests the next TLS positions: largest expected gain with little occlusion \u2013 fewer set-ups, less battery.")},{id:"therm",st:"uc8",key:"I",icon:"\u2668",t:be("Thermalkamera","Thermal camera"),d:be("W\xE4rmebild wie im WAAM-Monitoring: frische Schichten gl\xFChen, Anlagen und Personen sind warm.","Thermal view as in WAAM monitoring: fresh layers glow, machines and people are warm.")},{id:"measure",st:"uc9",key:"N",icon:"\u27F7",t:be("Messwerkzeug","Measuring tool"),d:be("Zwei Punkte anklicken \u2192 Abstand in mm, direkt in der Punktwolke.","Click two points \u2192 distance in mm, directly in the point cloud.")},{id:"ask",st:"docs",key:"B",icon:"\u275D",t:be("Frag das Lab","Ask the lab"),d:be("Fragen zum Scan \u2013 Antworten aus Scan, Segmentierung und Modell, immer mit Quelle (regelbasiert, offline).","Questions about the scan \u2013 answers from scan, segmentation and model, always with a source (rule-based, offline).")},{id:"auto",st:"talks",key:"O",icon:"\u2708",t:be("Autopilot","Autopilot"),d:be("Pr\xE4sentationsmodus: Die Drohne fliegt, scannt und l\xE4dt selbst und zeigt jede Station.","Presentation mode: the drone flies, scans and charges by itself and presents every station.")},{id:"range",st:"profile",icon:"\u21F2",passive:!0,t:be("Reichweiten-Upgrade","Range upgrade"),d:be("+50 % Scanreichweite f\xFCr alle Technologien.","+50 % scanning range for every technology.")},{id:"icp",st:"bonus",key:"R",icon:"\u229B",t:be("Registrierung (ICP)","Registration (ICP)"),d:be("SLAM-Drift beseitigen: Scans per ICP auf die Zielmarken registrieren (Artefakt A2).","Remove SLAM drift: register scans to the targets via ICP (artefact A2).")}],vp=[{id:"labels",key:"L",icon:"\u{1F3F7}",t:be("Labels","Labels")},{id:"plan",key:"K",icon:"\u25A4",t:be("Grundriss","Floor plan")},{id:"proj",key:"J",icon:"\u25EB",t:be("Projektionen","Projections")},{id:"pano",key:"U",icon:"\u25CE",t:be("360\xB0-Panoramen","360\xB0 panoramas")}],uu=[{id:"drone",key:"1",icon:"\u2723",t:be("Drohne \xB7 UAV-LiDAR","Drone \xB7 UAV LiDAR"),d:be("Aus der Luft, gro\xDFfl\xE4chig. H\xF6her fliegen = breiterer Scan. Akku h\xE4lt nicht ewig.","From above, large areas. Fly higher = wider scan. The battery does not last forever."),dt:be("Joystick links fliegen, \u2912 \u2913 H\xF6he, ein Finger dreht die Ansicht, zwei Finger zoomen.","Left joystick flies, \u2912 \u2913 altitude, one finger turns the view, two fingers zoom.")},{id:"handheld",key:"2",icon:"\u25C9",t:be("Handheld \xB7 SLAM","Handheld \xB7 SLAM"),d:be("Ego-Perspektive am Boden. Leertaste halten = scannen, wohin du schaust.","First person on the ground. Hold space = scan where you look."),dt:be("Ego-Perspektive. Joystick gehen, Finger umsehen, \u25CF halten = scannen, wohin du schaust.","First person. Joystick walks, finger looks around, hold \u25CF = scan where you look.")},{id:"tls",key:"3",icon:"\u2295",t:be("Station\xE4r \xB7 TLS","Stationary \xB7 TLS"),d:be("Scanner aufstellen (P), dann alle gleichzeitig scannen (Leertaste) \u2013 mit echten Scan-Schatten und 360\xB0-Panorama.","Set up scanners (P), then scan with all at once (space) \u2013 with real scan shadows and 360\xB0 panoramas."),dt:be("\u2295 Scanner aufstellen, \u25B6 alle gleichzeitig scannen \u2013 mit echten Scan-Schatten und 360\xB0-Panorama.","\u2295 set up scanners, \u25B6 scan with all at once \u2013 with real scan shadows and 360\xB0 panoramas.")}],yl=[{k:"x",t:be("Koordinate x","coordinate x")},{k:"y",t:be("Koordinate y (H\xF6he)","coordinate y (height)")},{k:"z",t:be("Koordinate z","coordinate z")},{k:"nx",t:be("Normale x","normal x")},{k:"ny",t:be("Normale y (vertikal)","normal y (vertical)")},{k:"nz",t:be("Normale z","normal z")},{k:"planarity",t:be("Planarit\xE4t (\u03BB\u2082\u2212\u03BB\u2083)/\u03BB\u2081 \u2013 Fl\xE4chen","planarity (\u03BB\u2082\u2212\u03BB\u2083)/\u03BB\u2081 \u2013 surfaces")},{k:"density",t:be("Punktdichte im mittleren Radius","point density in mean radius")},{k:"anisotropy",t:be("Anisotropie (\u03BB\u2081\u2212\u03BB\u2083)/\u03BB\u2081","anisotropy (\u03BB\u2081\u2212\u03BB\u2083)/\u03BB\u2081")},{k:"sphericity",t:be("Sph\xE4rizit\xE4t \u03BB\u2083/\u03BB\u2081 \u2013 Volumen, Streuung","sphericity \u03BB\u2083/\u03BB\u2081 \u2013 volume, scatter")},{k:"curvature",t:be("Kr\xFCmmung \u03BB\u2083/\u03A3\u03BB \u2013 Kanten","curvature \u03BB\u2083/\u03A3\u03BB \u2013 edges")},{k:"linearity",t:be("Linearit\xE4t (\u03BB\u2081\u2212\u03BB\u2082)/\u03BB\u2081 \u2013 St\xE4be, Kanten","linearity (\u03BB\u2081\u2212\u03BB\u2082)/\u03BB\u2081 \u2013 bars, edges")},{k:"omnivariance",t:be("Omnivarianz \u221B(\u03BB\u2081\u03BB\u2082\u03BB\u2083)","omnivariance \u221B(\u03BB\u2081\u03BB\u2082\u03BB\u2083)")},{k:"eigenentropy",t:be("Eigenentropie \u2212\u03A3\u03BB\xB7ln \u03BB","eigenentropy \u2212\u03A3\u03BB\xB7ln \u03BB")},{k:"eigen_sum",t:be("Eigenwertsumme \u03A3\u03BB","sum of eigenvalues \u03A3\u03BB")},{k:"gravity_dist",t:be("Abstand zum Schwerpunkt dichter Bereiche","distance to centre of dense regions")},{k:"flatness",t:be("Ebenheit Hallenboden \xB14 cm (Ausgleichsebene)","hall floor flatness \xB14 cm (best-fit plane)")}],vl={auto:["fahrzeug","vehicle"],car:["fahrzeug","vehicle"],pkw:["fahrzeug"],mensch:["person","people"],menschen:["person","people"],human:["person","people"],personen:["person"],people:["person"],fahrrad:["radfahrer","cyclist"],bike:["radfahrer","cyclist"],stahl:["stahl","steel","tr\xE4ger","beam","st\xFCtze","binder"],steel:["stahl","steel","beam","column","truss"],bewehrung:["stab","bar"],rebar:["stab","bar"],maschine:["anlage","line"],machine:["anlage","line"],m\u00F6bel:["tisch","stuhl","furniture"],stuhl:["stuhl","chair"],chair:["chair"],tisch:["tisch","table"],roboter:["wand","wall"],drucker:["wand","wall"],waam:["wand","wall"],asbest:["asbest","asbestos","big bag"],schadstoff:["asbest","asbestos"],sch\u00FCttgut:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],schuettgut:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],haufen:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],sand:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],sandhaufen:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],steinhaufen:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],kies:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],schotter:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],schutt:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],bauschutt:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],erde:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],pile:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],bulk:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],rubble:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],gravel:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],stones:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],steine:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],dokument:["lieferschein","werkszeugnis","gutachten","dokumente"],pdf:["dokumente","documents"],scanner:["laserscanner","laser scanner"],kugel:["zielkugel"],target:["zielkugel","target"]};var Ny=i=>[parseInt(i.slice(1,3),16)/255,parseInt(i.slice(3,5),16)/255,parseInt(i.slice(5,7),16)/255],Ft=(i,e,t,n,s)=>({name:be(i,e),c:Ny(t),m:n,inst:s}),Ji=(i,e,t)=>Array.from({length:t},(n,s)=>be(`${i} ${s+1}`,`${e} ${s+1}`)),tt=[{id:"uc1",kind:"uc",uc:1,t:be("Vorfertigung & QC","Prefab QC"),x:-12,z:-14,r:3.2,c:"#4da6ff",parts:[Ft("Stahltr\xE4ger","steel beam","#4da6ff","steel"),Ft("Kopfplatten","end plates","#5fd38d","steel",Ji("Kopfplatte","end plate",2)),Ft("Auflager","supports","#9aa8b8","wood",Ji("Auflager","support",2))]},{id:"uc2",kind:"uc",uc:2,t:be("Material & Ressourcen","Material & resources"),x:-8,z:49.5,r:6,c:"#ffb547",parts:[Ft("Bagger","excavator","#ffb547","mixed"),Ft("Sch\xFCttgut \xB7 Steinhaufen (echt)","bulk material \xB7 stone pile (real)","#e0b07a","soil"),Ft("Minikran Jecko (echt)","Jecko mini crane (real)","#ff8a5b","mixed")]},{id:"uc3",kind:"uc",uc:3,t:be("Fortschritt & Qualit\xE4t","Progress & quality"),x:3,z:41,r:6,c:"#5fd38d",parts:[Ft("ReStage-Demonstrator \xB7 21 von 119 Bauteilen verifiziert","ReStage demonstrator \xB7 21 of 119 components verified","#5fd38d","mixed")]},{id:"uc4",kind:"uc",uc:4,t:be("Digital Operations","Digital operations"),x:6,z:-14,r:3.2,c:"#ff8a5b",parts:[Ft("S\xE4ge-Bohr-Anlage \xB7 Warnung","saw-drill line \xB7 warning","#ff8a5b","mixed"),Ft("Rollenbahn","roller conveyor","#9aa8b8","steel",Ji("Rollenbahn","conveyor",2)),Ft("Sensoren \xB7 4 live","sensors \xB7 4 live","#5fd38d","mixed",Ji("Sensor","sensor",4))]},{id:"uc5",kind:"uc",uc:5,t:be("Scan-to-BIM","Scan-to-BIM"),x:-11,z:2,r:3.4,c:"#9b8cff",parts:[Ft("W\xE4nde \xB7 0,24 m","walls \xB7 0.24 m","#c8d2e0","masonry"),Ft("T\xFCr & Fenster \xB7 1,01 \xD7 2,10 m","door & window \xB7 1.01 \xD7 2.10 m","#8bd17c","wood",[be("T\xFCr","door"),be("Fenster","window")]),Ft("M\xF6bel \xB7 Tisch, 4 St\xFChle","furniture \xB7 table, 4 chairs","#e0b07a","wood",[be("Tisch","table"),...Ji("Stuhl","chair",4)])]},{id:"uc6",kind:"uc",uc:6,t:be("Brownfield & Kreislauf","Brownfield & circularity"),x:4.5,z:53,r:5,c:"#ff5a5f",parts:[Ft("Sch\xFCttgut \xB7 Ziegelbruch","bulk material \xB7 brick rubble","#c99a5b","brick"),Ft("Big Bags \xB7 Asbest","big bags \xB7 asbestos","#ff5a5f","hazard",Ji("Big Bag","big bag",8)),Ft("Stahl \xB7 wiederverwendbar","steel \xB7 reusable","#4da6ff","steel",Ji("Stahlprofil","steel section",4)),Ft("Holzlager \xB7 wiederverwendbar (echt)","timber storage \xB7 reusable (real)","#e0b07a","wood")]},{id:"uc7",kind:"uc",uc:7,t:be("Smart City","Smart city"),x:4,z:22,r:3.8,c:"#5ce1e6",parts:[Ft("Fahrzeug","vehicle","#4da6ff","none"),Ft("Personen \xB7 3","people \xB7 3","#5fd38d","none",Ji("Person","person",3)),Ft("Radfahrer","cyclist","#c792ea","none")]},{id:"uc8",kind:"uc",uc:8,t:be("WAAM \xB7 In-situ","WAAM \xB7 in-situ"),x:10,z:2,r:3.2,c:"#ffcf70",parts:[Ft("Wand A \xB7 45,9 mm \xB7 19,6\xB0","wall A \xB7 45.9 mm \xB7 19.6\xB0","#5fd38d","steel"),Ft("Wand B \xB7 29,4 mm \xB7 27,5\xB0","wall B \xB7 29.4 mm \xB7 27.5\xB0","#ff8a8a","steel"),Ft("Grundplatte","base plate","#9aa8b8","steel")]},{id:"uc9",kind:"uc",uc:9,t:be("Bewehrungspr\xFCfung","Rebar inspection"),x:-22,z:6,r:3.4,c:"#ff5a5f",parts:[Ft("St\xE4be \xB7 konform","bars \xB7 conform","#5fd38d","steel"),Ft("Stab \xB7 \xD812 statt \xD816","bar \xB7 \xD812 instead of \xD816","#ff5a5f","steel"),Ft("Stab \xB7 16 mm versetzt","bar \xB7 displaced 16 mm","#ffb547","steel")]},{id:"docs",kind:"docs",t:be("Document Intelligence","Document intelligence"),x:-22,z:-3,r:3,c:"#5ce1e6",parts:[Ft("Tisch","table","#9aa8b8","wood"),Ft("Dokumente \xB7 3 Typen erkannt","documents \xB7 3 types detected","#5ce1e6","mixed",[be("Lieferschein","delivery note"),be("Werkszeugnis","mill certificate"),be("Gutachten","survey report")])]},{id:"talks",kind:"talks",t:be("Vortr\xE4ge & Beitr\xE4ge","Talks & posts"),x:-4,z:4,r:3,c:"#c792ea",parts:[Ft("B\xFChne","stage","#9aa8b8","wood"),Ft("Leinwand","screen","#c792ea","mixed"),Ft("Rednerpult","lectern","#4da6ff","wood")]},{id:"profile",kind:"profile",t:be("Profil \xB7 Luca Fahrendholz-Heiermann","Profile \xB7 Luca Fahrendholz-Heiermann"),x:10,z:8.5,r:3,c:"#4da6ff",parts:[Ft("Scanner-Stativ","scanner tripod","#9aa8b8","steel"),Ft("Laserscanner","laser scanner","#4da6ff","mixed")]},{id:"bonus",kind:"bonus",bonus:!0,t:be("Bonus \xB7 Registrier-Zielmarken","Bonus \xB7 registration targets"),x:-15.2,z:-7.6,r:1.6,c:"#ffcf70",parts:[Ft("Hochregal","high rack","#9aa8b8","steel"),Ft("Zielkugeln \xB7 3","target spheres \xB7 3","#ffcf70","mixed",Ji("Zielkugel","target sphere",3))]}],La=tt.filter(i=>!i.bonus).length;var qs=(i,...e)=>e.some(t=>i.includes(t)),bp=(i,e,t)=>{let n=Math.atan2(i,-e)*180/Math.PI;return(t?["north","north-east","east","south-east","south","south-west","west","north-west"]:["Norden","Nordosten","Osten","S\xFCdosten","S\xFCden","S\xFCdwesten","Westen","Nordwesten"])[Math.round((n+360)%360/45)%8]},Mp=(i,e)=>{let t=e.lang==="en",n=i.toLowerCase(),s=(g,x)=>t?x:g,r=e.clusters.filter(g=>e.cluFrac(g.id)>=.3&&e.stState[g.g]!=="hidden"),a=new Set(["wie","viel","viele","wo","ist","sind","gibt","welche","welcher","was","der","die","das","den","ein","eine","es","hier","im","in","how","many","much","where","what","which","the","are","is","any","there"]),l=n.split(/[^a-zäöüß0-9]+/).filter(g=>g.length>2&&!a.has(g)).flatMap(g=>[g,g.replace(/(en|e|n|s)$/,""),...vl[g]??[]]).filter(g=>g.length>2),c=g=>{let x=tt[g.g],m=x.parts[g.p],p=[g.name.de,g.name.en,ht(m.name,"de"),ht(m.name,"en")].map(b=>b.toLowerCase());return l.some(b=>p.some(_=>_.includes(b)))},h=g=>{let x=tt[g.g];return`${ht(g.name,e.lang)} (${x.kind==="uc"?`UC${x.uc}`:ht(x.t,e.lang)})`},u=g=>[...new Set(g.map(x=>`${s("Scan-Cluster","scan cluster")} \xB7 ${tt[x.g].kind==="uc"?`UC${tt[x.g].uc}`:ht(tt[x.g].t,e.lang)}`))];if(!n.trim()||qs(n,"hilfe","help","was kannst","what can"))return{q:i,a:s("Frag z. B.: \u201EWie viele Personen?\u201C, \u201EWo ist der Bagger?\u201C, \u201EWelche Abweichungen gibt es?\u201C, \u201EWie viel Stahl?\u201C, \u201EGibt es Schadstoffe?\u201C, \u201EWie weit bin ich?\u201C",'Try: "How many people?", "Where is the excavator?", "Which deviations?", "How much steel?", "Any hazardous materials?", "How far am I?"'),src:[s("regelbasiert \xB7 offline","rule-based \xB7 offline")]};if(qs(n,"wie weit","fortschritt","how far","progress","abdeckung","coverage","erfasst")){let g=e.stState.filter(x=>x==="done").length;return{q:i,a:s(`Halle zu ${Math.round(e.cov*100)} % erfasst, ${g} von ${e.stState.length} Bereichen analysiert, ${r.length} Objekte segmentiert.`,`Hall ${Math.round(e.cov*100)} % captured, ${g} of ${e.stState.length} areas analysed, ${r.length} objects segmented.`),src:[s("Scan-Fortschritt","scan progress")]}}if(qs(n,"abweich","deviation","toleranz","tolerance","fehler","mangel","defect","versetzt","falsch")){let g=r.filter(x=>/abweich|versetzt|statt|warnung/i.test(ht(tt[x.g].parts[x.p].name,"de")));return g.length?{q:i,a:g.map(x=>`\u2022 ${ht(tt[x.g].parts[x.p].name,e.lang)} \u2013 ${h(x)}`).join(`
`),src:u(g)}:{q:i,a:s("Bisher keine Abweichungen in den erfassten Bereichen gefunden.","No deviations found in the captured areas so far."),src:[s("Soll-Ist-Vergleich","as-planned vs. as-built")]}}if(qs(n,"schadstoff","asbest","gefahr","hazard","asbestos","danger")){let g=r.filter(x=>x.mat==="hazard");return g.length?{q:i,a:s(`${g.length} Big Bags mit Asbest erfasst (\u2248 ${g.reduce((x,m)=>x+m.vol,0).toFixed(2)} m\xB3) \u2013 Bereich absperren, Entsorgung nach TRGS 519.`,`${g.length} big bags with asbestos captured (\u2248 ${g.reduce((x,m)=>x+m.vol,0).toFixed(2)} m\xB3) \u2013 cordon off, dispose per regulations.`),src:[...u(g),s("Materialkataster","material register")]}:{q:i,a:s("In den erfassten Bereichen sind keine Schadstoffe markiert.","No hazardous materials marked in the captured areas."),src:[s("Materialkataster","material register")]}}let d=r.filter(c);if(qs(n,"wie viele","anzahl","how many","count","z\xE4hl"))return d.length?{q:i,a:s(`${d.length} erfasst: ${d.map(h).join(", ")}.`,`${d.length} captured: ${d.map(h).join(", ")}.`),src:u(d)}:{q:i,a:s("Dazu habe ich in den erfassten Bereichen nichts gefunden \u2013 erst scannen, dann fragen.","Nothing found in the captured areas \u2013 scan first, then ask."),src:[s("Scan","scan")]};let f=Object.keys(Xn).find(g=>g!=="none"&&g!=="hull"&&l.some(x=>Xn[g].de.toLowerCase().includes(x)||Xn[g].en.toLowerCase().includes(x)));if((/wie viel(?!e)/.test(n)||qs(n,"how much","masse","mass","gewicht","weight","tonnen","volumen","volume","material"))&&f){let g=r.filter(p=>p.mat===f),x=g.reduce((p,b)=>p+b.vol,0),m=g.reduce((p,b)=>p+b.mass,0);return{q:i,a:s(`${Xn[f].de}: ${x.toFixed(3)} m\xB3${m?` \u2248 ${(m/1e3).toFixed(2)} t`:""} in ${g.length} erfassten Objekten.`,`${Xn[f].en}: ${x.toFixed(3)} m\xB3${m?` \u2248 ${(m/1e3).toFixed(2)} t`:""} in ${g.length} captured objects.`),src:[s("Mengen aus dem nachmodellierten Modell","quantities from the reconstructed model"),...u(g)]}}if(qs(n,"boden","floor","fl\xE4che","area"))return{q:i,a:s(`Erfasste Bodenfl\xE4che: ${e.floorM2} m\xB2 (1-m-Raster, Ausgleichsebene aus dem Scan).`,`Captured floor area: ${e.floorM2} m\xB2 (1 m grid, best-fit plane from the scan).`),src:[s("Segmentierung Boden (A1)","floor segmentation (A1)")]};if(d.length){let g=d[0],x=(g.min[0]+g.max[0])/2,m=(g.min[2]+g.max[2])/2,p=x-e.agent.x,b=m-e.agent.z,_=`${(g.max[0]-g.min[0]).toFixed(2)} \xD7 ${(g.max[2]-g.min[2]).toFixed(2)} \xD7 ${(g.max[1]-g.min[1]).toFixed(2)} m`;return{q:i,a:s(`${h(g)}: ${Math.round(Math.hypot(p,b))} m Richtung ${bp(p,b,t)} \xB7 Box ${_}${d.length>1?` (+${d.length-1} weitere)`:""}.`,`${h(g)}: ${Math.round(Math.hypot(p,b))} m to the ${bp(p,b,t)} \xB7 box ${_}${d.length>1?` (+${d.length-1} more)`:""}.`),src:u(d)}}return{q:i,a:s("Das kann ich aus dem bisherigen Scan nicht beantworten. Tipp: \u201EHilfe\u201C.",'I cannot answer that from the current scan. Tip: "help".'),src:[s("regelbasiert \xB7 offline","rule-based \xB7 offline")]}};function du(i,e){if(e===lp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ca||e===ml){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Ca)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var bl=class extends Ki{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new yu(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Nu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=bs.extractUrlBase(e);a=bs.resolveURL(c,this.path)}else a=bs.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ta(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ap){try{a[Lt.KHR_BINARY_GLTF]=new Du(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Lt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Hu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Lt.KHR_MATERIALS_UNLIT:a[u]=new xu;break;case Lt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Uu(r,this.dracoLoader);break;case Lt.KHR_TEXTURE_TRANSFORM:a[u]=new ku;break;case Lt.KHR_MESH_QUANTIZATION:a[u]=new Fu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Dy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},gu=class{constructor(e){this.parser=e,this.name=Lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new et(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],En);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Gr(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Vr(h),c.distance=u;break;case"spot":c=new hl(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ji(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},xu=class{constructor(){this.name=Lt.KHR_MATERIALS_UNLIT}getMaterialType(){return Bt}extendParams(e,t,n){let s=[];e.color=new et(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],En),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,mn))}return Promise.all(s)}},_u=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},yu=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ie(o,o)}return Promise.all(r)}},vu=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},bu=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Mu=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new et(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],En)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,mn)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Su=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Eu=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new et().setRGB(o[0],o[1],o[2],En),Promise.all(r)}},wu=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Tu=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new et().setRGB(o[0],o[1],o[2],En),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,mn)),Promise.all(r)}},Au=class{constructor(e){this.parser=e,this.name=Lt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Ru=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Cu=class{constructor(e){this.parser=e,this.name=Lt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Pu=class{constructor(e){this.parser=e,this.name=Lt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Iu=class{constructor(e){this.parser=e,this.name=Lt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Lu=class{constructor(e){this.name=Lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Nu=class{constructor(e){this.name=Lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==ri.TRIANGLES&&c.mode!==ri.TRIANGLE_STRIP&&c.mode!==ri.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let x=new pt,m=new P,p=new xi,b=new P(1,1,1),_=new zr(g.geometry,g.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&b.fromBufferAttribute(l.SCALE,y),_.setMatrixAt(y,x.compose(m,p,b));for(let y in l)if(y==="_COLOR_0"){let D=l[y];_.instanceColor=new Ys(D.array,D.itemSize,D.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);ln.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Ap="glTF",Na=12,Sp={JSON:1313821514,BIN:5130562},Du=class{constructor(e){this.name=Lt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Na),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ap)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Na,r=new DataView(e,Na),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Sp.JSON){let c=new Uint8Array(e,Na+a,o);this.content=n.decode(c)}else if(l===Sp.BIN){let c=Na+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Uu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=zu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=zu[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Xr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(f)},o,c,En,d)})})}},ku=class{constructor(){this.name=Lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Fu=class{constructor(){this.name=Lt.KHR_MESH_QUANTIZATION}},Ml=class extends _s{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,b=1-m,_=p-d+u;for(let y=0;y!==o;y++){let D=a[x+y+o],T=a[x+y+l]*h,R=a[g+y+o],U=a[g+y]*h;r[y]=b*D+_*T+m*R+p*U}return r}},Uy=new xi,Ou=class extends Ml{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Uy.fromArray(r).normalize().toArray(r),r}},ri={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Xr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ep={9728:Ln,9729:Hn,9984:Jh,9985:ua,9986:yr,9987:Si},wp={33071:zi,33648:ga,10497:Ws},fu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ky={CUBICSPLINE:void 0,LINEAR:Ir,STEP:Pr},pu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Fy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Jt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ei})),i.DefaultMaterial}function Ks(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ji(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Oy(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function zy(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function By(i){let e,t=i.extensions&&i.extensions[Lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+mu(t.attributes):e=i.indices+":"+mu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+mu(i.targets[n]);return e}function mu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Bu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Hy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Vy=new pt,Hu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Dy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Br(this.options.manager):this.textureLoader=new ul(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ta(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ks(r,o,s),ji(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Lt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(bs.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=fu[s.type],o=Xr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new It(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=fu[s.type],c=Xr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,_=t.cache.get(b);_||(x=new c(o,p*f,s.count*f/h),_=new va(x,f/h),t.cache.add(b,_)),m=new ba(_,l,d%f/h,g)}else o===null?x=new c(s.count*l):x=new c(o,d,s.count*l),m=new It(x,l,g);if(s.sparse!==void 0){let p=fu.SCALAR,b=Xr[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,D=new b(a[1],_,s.sparse.count*p),T=new c(a[2],y,s.sparse.count*l);o!==null&&(m=new It(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,U=D.length;R<U;R++){let Z=D[R];if(m.setX(Z,T[R*l]),l>=2&&m.setY(Z,T[R*l+1]),l>=3&&m.setZ(Z,T[R*l+2]),l>=4&&m.setW(Z,T[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Ep[d.magFilter]||Hn,h.minFilter=Ep[d.minFilter]||Si,h.wrapS=wp[d.wrapS]||Ws,h.wrapT=wp[d.wrapT]||Ws,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Sn(x);m.needsUpdate=!0,d(m)}),t.load(bs.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),ji(u,a),u.userData.mimeType=a.mimeType||Hy(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Lt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Lt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Lt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Sa,Zn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new _i,Zn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Jt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Lt.KHR_MATERIALS_UNLIT]){let u=s[Lt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new et(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],En),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,mn)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=on);let h=r.alphaMode||pu.OPAQUE;if(h===pu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===pu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Bt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ie(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Bt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Bt){let u=r.emissiveFactor;o.emissive=new et().setRGB(u[0],u[1],u[2],En)}return r.emissiveTexture!==void 0&&a!==Bt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,mn)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),ji(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ks(s,u,r),u})}createUniqueName(e){let t=tn.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Tp(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=By(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Lt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Tp(new Kt,c,t),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?Fy(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=a[f],p,b=c[f];if(m.mode===ri.TRIANGLES||m.mode===ri.TRIANGLE_STRIP||m.mode===ri.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Yo(x,b):new we(x,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ri.TRIANGLE_STRIP?p.geometry=du(p.geometry,ml):m.mode===ri.TRIANGLE_FAN&&(p.geometry=du(p.geometry,Ca));else if(m.mode===ri.LINES)p=new xs(x,b);else if(m.mode===ri.LINE_STRIP)p=new Wi(x,b);else if(m.mode===ri.LINE_LOOP)p=new Zo(x,b);else if(m.mode===ri.POINTS)p=new $s(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&zy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ji(p,r),m.extensions&&Ks(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ks(s,u[0],r),u[0];let d=new Pt;r.extensions&&Ks(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new dn(Pa.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ur(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ji(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new pt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new $o(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,b=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(g),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let b=0,_=d.length;b<_;b++){let y=d[b],D=f[b],T=g[b],R=x[b],U=m[b];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let Z=n._createAnimationTracks(y,D,T,R,U);if(Z)for(let v=0;v<Z.length;v++)p.push(Z[v])}return new ll(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Vy)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Ma:c.length>1?h=new Pt:c.length===1?h=c[0]:h=new ln,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),ji(h,r),r.extensions&&Ks(n,h,r),r.matrix!==void 0){let u=new pt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Pt;n.name&&(r.name=s.createUniqueName(n.name)),ji(r,n),n.extensions&&Ks(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Zn||d instanceof Sn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];Ms[r.path]===Ms.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Ms[r.path]){case Ms.weights:c=Yi;break;case Ms.rotation:c=$i;break;case Ms.position:case Ms.scale:c=qi;break;default:n.itemSize===1?c=Yi:c=qi;break}let h=s.interpolation!==void 0?ky[s.interpolation]:Ir,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+Ms[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Bu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof $i?Ou:Ml;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Gy(i,e,t){let n=e.attributes,s=new Wn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){let h=Bu(Xr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,l=new P;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Bu(Xr[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Kn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Tp(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=zu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Vt.workingColorSpace!==En&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Vt.workingColorSpace}" not supported.`),ji(i,e),Gy(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Oy(i,e.targets,t):i})}var Rp=32,Cp=128,Wy=new P(0,1,0),Pp=(i,e,t)=>{let n=new Pt,s=new Map(e.map(_=>[`${_.g}:${_.p}:${_.i}`,_.id])),r=new Map;if(t){let _=[];t.traverse(y=>y.isMesh&&_.push(y));for(let y of _){let D=y.name||y.parent?.name||"",[T,R,U]=D.split("|"),Z=tt.findIndex(O=>O.id===T),v=s.get(`${Z}:${R}:${U}`);if(Z<0||v===void 0)continue;y.removeFromParent(),y.position.x+=tt[Z].x,y.position.y+=i.stations[Z]?.y0??0,y.position.z+=tt[Z].z;let E=y.material;E&&"envMapIntensity"in E&&(E.metalness=Math.min(E.metalness,.4)),n.add(y),r.set(v,[...r.get(v)??[],y])}}let a=[],o=new Map,l=(_,y)=>{let D=_.join(",")+y;return o.has(D)||o.set(D,new Jt({color:new et(_[0],_[1],_[2]),roughness:y?.35:.7,metalness:y?.55:.05})),o.get(D)};i.stations.forEach((_,y)=>{let D=tt[y];for(let T of _.prims){let R=D.parts[T.p],U=l(R.c,R.m==="steel"),Z=[],v=O=>{O.position.x+=_.x,O.position.z+=_.z,n.add(O),Z.push(O)};if(T.k==="box"){let O=new we(new Zt(T.b[0]-T.a[0],T.b[1]-T.a[1],T.b[2]-T.a[2]),U);O.position.set((T.a[0]+T.b[0])/2,(T.a[1]+T.b[1])/2,(T.a[2]+T.b[2])/2),v(O)}else if(T.k==="rod"){let O=new P(...T.a),Y=new P(...T.b).clone().sub(O),ie=new we(new yn(T.r,T.r,Y.length(),12),U);ie.position.copy(O).addScaledVector(Y,.5),ie.quaternion.setFromUnitVectors(Wy,Y.normalize()),v(ie)}else if(T.k==="pile"){let O=[];for(let Y=0;Y<=16;Y++){let ie=T.R*(1-Y/16);O.push(new Ie(ie,T.H*(1-(ie/T.R)**1.6)))}let V=new we(new wa(O,32),U);V.position.set(T.c[0],0,T.c[1]),v(V)}else if(T.k==="sph"){let O=new we(new Rn(T.r,20,14),U);O.position.set(...T.c),v(O)}else if(T.k==="ring"){let O=new we(new al(T.R,T.r,10,28),U);O.position.set(...T.c),v(O)}else if(T.k==="person"){let O=new Pt,V=new we(new nl(.16,.95,4,12),U);V.position.y=.78,V.scale.z=.7;let Y=new we(new Rn(.11,14,10),U);Y.position.y=1.62,O.add(V,Y),O.position.set(T.c[0],0,T.c[1]),v(O)}else if(T.k==="waam"){let O=T.h/T.L,V=[];for(let Y=0;Y<T.L;Y++){let ie=(Y+.5)/T.L,k=new we(new Zt(T.t*.85,O*.92,T.z1-T.z0),U);k.position.set(T.x+T.lean*ie*ie,T.y0+(Y+.5)*O,(T.z0+T.z1)/2),v(k),V.push(k)}a.push({p:T.p,L:T.L,meshes:V})}let E=s.get(`${y}:${T.p}:${T.i??0}`);E!==void 0&&r.set(E,[...r.get(E)??[],...Z])}});let c=new Jt({color:9279400,roughness:.8,metalness:.1}),h=i.blocks.map(_=>{let y=new we(new Zt(_.b[0]-_.a[0],_.b[1]-_.a[1],_.b[2]-_.a[2]),c);return y.position.set((_.a[0]+_.b[0])/2,(_.a[1]+_.b[1])/2,(_.a[2]+_.b[2])/2),y.visible=!1,n.add(y),{m:y,cells:_.cells}}),[u,d,f]=i.plane,g=new zr(new Zt(.98,.06,.98),new Jt({color:11844034,roughness:.9}),i.floor.length),x=new pt,m=new pt().makeScale(0,0,0),p=i.floor.map((_,y)=>{let D=_%Cp-Rp+.5,T=Math.floor(_/Cp)-Rp+.5;return g.setMatrixAt(y,m),[D,u*D+d*T+f-.03,T]});g.frustumCulled=!1,n.add(g);let b=(_,y)=>{y&&x.makeTranslation(p[_][0],p[_][1],p[_][2]),g.setMatrixAt(_,y?x:m),g.instanceMatrix.needsUpdate=!0};for(let _ of r.values())for(let y of _)y.visible=!1;return n.visible=!1,{group:n,cluObjs:r,blocks:h,floor:{cells:i.floor,show:b},waam:a}};var Ip=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),Lp=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);var Xy=Ip,Np=Lp,Vu=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]],Yy=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]],Nn=16,Da=class{constructor(e){this.group=new Pt;this.VS=e.vs,[this.X0,this.Y0,this.Z0]=e.min,this.GX=Math.max(2,Math.ceil((e.max[0]-e.min[0])/e.vs)),this.GY=Math.max(2,Math.ceil((e.max[1]-e.min[1])/e.vs)),this.GZ=Math.max(2,Math.ceil((e.max[2]-e.min[2])/e.vs)),this.NCX=Math.ceil(this.GX/Nn),this.NCZ=Math.ceil(this.GZ/Nn),this.ISO=e.iso??Math.max(.12,.7*(e.vs/.2)**2),this.cnt=new Uint16Array(this.GX*this.GY*this.GZ),this.dirty=new Uint8Array(this.NCX*this.NCZ),this.filled=new Uint8Array(this.NCX*this.NCZ),this.meshes=new Array(this.NCX*this.NCZ).fill(null),this.color=e.color,this.mat=new Jt({vertexColors:!0,flatShading:!0,roughness:.85,metalness:.05,side:on})}add(e,t,n){let s=Math.floor((e-this.X0)/this.VS),r=Math.floor((t-this.Y0)/this.VS),a=Math.floor((n-this.Z0)/this.VS);if(s<0||r<0||a<0||s>=this.GX||r>=this.GY||a>=this.GZ)return;let o=(a*this.GY+r)*this.GX+s;this.cnt[o]<65535&&this.cnt[o]++;let l=Math.floor(s/Nn),c=Math.floor(a/Nn),h=c*this.NCX+l;this.dirty[h]=1,this.filled[h]=1;let u=s%Nn,d=a%Nn;u<=1&&l>0&&(this.dirty[h-1]=1),u>=Nn-2&&l<this.NCX-1&&(this.dirty[h+1]=1),d<=1&&c>0&&(this.dirty[h-this.NCX]=1),d>=Nn-2&&c<this.NCZ-1&&(this.dirty[h+this.NCX]=1)}update(e,t,n){let s=[];for(let o=0;o<this.dirty.length;o++)if(this.dirty[o]){let l=(o%this.NCX+.5)*Nn*this.VS+this.X0,c=(Math.floor(o/this.NCX)+.5)*Nn*this.VS+this.Z0;s.push([o,(l-t)**2+(c-n)**2])}if(!s.length)return 0;s.sort((o,l)=>o[1]-l[1]);let r=performance.now(),a=0;for(;a<s.length&&performance.now()-r<e;a++)this.build(s[a][0]);return s.length-a}build(e){this.dirty[e]=0;let{GX:t,GY:n,GZ:s,VS:r,X0:a,Y0:o,Z0:l,ISO:c,cnt:h}=this,u=e%this.NCX,d=Math.floor(e/this.NCX),f=u*Nn-1,g=d*Nn-1,x=Nn+3,m=Nn+3,p=n,b=new Float32Array(x*p*m),_=(E,O,V)=>E<0||O<0||V<0||E>=t||O>=n||V>=s?0:h[(V*n+O)*t+E];for(let E=0;E<m;E++)for(let O=0;O<p;O++)for(let V=0;V<x;V++){let Y=0,ie=f+V,k=g+E;for(let ae=-1;ae<=1;ae++)for(let q=-1;q<=1;q++)for(let le=-1;le<=1;le++)Y+=_(ie+le,O+q,k+ae);b[(E*p+O)*x+V]=Y/27}let y=[],D=[],T=new Float32Array(8),R=new Float32Array(36);for(let E=1;E<=Nn&&E<m-1;E++)for(let O=0;O<p-1;O++)for(let V=1;V<=Nn&&V<x-1;V++){let Y=0;for(let ae=0;ae<8;ae++){let q=Vu[ae];T[ae]=b[((E+q[2])*p+(O+q[1]))*x+(V+q[0])],T[ae]>c&&(Y|=1<<ae)}let ie=Xy[Y];if(!ie)continue;for(let ae=0;ae<12;ae++){if(!(ie&1<<ae))continue;let[q,le]=Yy[ae],Ae=(c-T[q])/(T[le]-T[q]||1e-6),ye=Vu[q],yt=Vu[le];R[ae*3]=a+(f+V+ye[0]+(yt[0]-ye[0])*Ae+.5)*r,R[ae*3+1]=o+(O+ye[1]+(yt[1]-ye[1])*Ae+.5)*r,R[ae*3+2]=l+(g+E+ye[2]+(yt[2]-ye[2])*Ae+.5)*r}let k=Y*16;for(let ae=0;Np[k+ae]!==-1;ae+=3)for(let q=0;q<3;q++){let le=Np[k+ae+q],Ae=R[le*3+1];if(y.push(R[le*3],Ae,R[le*3+2]),this.color)D.push(this.color[0],this.color[1],this.color[2]);else{let ye=Math.max(0,Math.min(1,Ae/6));D.push(.46+.16*ye,.5+.1*ye,.58-.08*ye)}}}let U=this.meshes[e];if(U&&(this.group.remove(U),U.geometry.dispose(),this.meshes[e]=null),!y.length)return;let Z=new Kt;Z.setAttribute("position",new kt(y,3)),Z.setAttribute("color",new kt(D,3)),Z.computeVertexNormals();let v=new we(Z,this.mat);v.frustumCulled=!1,this.group.add(v),this.meshes[e]=v}touchAll(){for(let e=0;e<this.filled.length;e++)this.filled[e]&&(this.dirty[e]=1)}dispose(){for(let e of this.meshes)e&&e.geometry.dispose();this.mat.dispose(),this.group.removeFromParent()}};var Ht={x0:-28,x1:21,z0:-21,z1:67,px:.04},Ua=Math.round((Ht.x1-Ht.x0)/Ht.px),Yr=Math.round((Ht.z1-Ht.z0)/Ht.px),Dp=.9,$y=1.7,Sl=class{constructor(){this.base=document.createElement("canvas");this.base.width=Ua,this.base.height=Yr,this.ctx=this.base.getContext("2d"),this.ctx.fillStyle="#fbfbf8",this.ctx.fillRect(0,0,Ua,Yr)}add(e,t,n,s){if(e<Ht.x0||e>=Ht.x1||n<Ht.z0||n>=Ht.z1||t>6.3)return;let r=(e-Ht.x0)/Ht.px,a=(n-Ht.z0)/Ht.px,o=this.ctx;s===1?(o.fillStyle="rgba(150,156,168,0.05)",o.fillRect(r,a,2,2)):t>=Dp&&t<=$y?(o.fillStyle="rgba(18,22,30,0.5)",o.fillRect(r-.5,a-.5,2,2)):t<Dp?(o.fillStyle="rgba(80,88,100,0.16)",o.fillRect(r,a,1.5,1.5)):(o.fillStyle="rgba(90,110,150,0.035)",o.fillRect(r,a,1.5,1.5))}compose(e,t){e.width=Ua+140,e.height=Yr+140+120;let r=e.getContext("2d"),a=t.lang==="en";r.fillStyle="#ffffff",r.fillRect(0,0,e.width,e.height),r.drawImage(this.base,70,70);let o=y=>70+(y-Ht.x0)/Ht.px,l=y=>70+(y-Ht.z0)/Ht.px;r.strokeStyle="rgba(200,60,60,0.35)",r.setLineDash([12,6,3,6]),r.lineWidth=1,r.font="bold 15px Inter, sans-serif",r.textAlign="center",r.textBaseline="middle";let c=0;for(let y=-15;y<=15;y+=5,c++)r.beginPath(),r.moveTo(o(y),48),r.lineTo(o(y),70+Yr+10),r.stroke(),r.setLineDash([]),r.fillStyle="#fff",r.beginPath(),r.arc(o(y),34,13,0,Math.PI*2),r.fill(),r.strokeStyle="rgba(200,60,60,0.8)",r.stroke(),r.fillStyle="#b03030",r.fillText(String.fromCharCode(65+c),o(y),34),r.strokeStyle="rgba(200,60,60,0.35)",r.setLineDash([12,6,3,6]);c=1;for(let y=-10;y<=10;y+=5,c++)r.beginPath(),r.moveTo(48,l(y)),r.lineTo(70+Ua+10,l(y)),r.stroke(),r.setLineDash([]),r.fillStyle="#fff",r.beginPath(),r.arc(34,l(y),13,0,Math.PI*2),r.fill(),r.strokeStyle="rgba(200,60,60,0.8)",r.stroke(),r.fillStyle="#b03030",r.fillText(String(c),34,l(y)),r.strokeStyle="rgba(200,60,60,0.35)",r.setLineDash([12,6,3,6]);r.setLineDash([]),r.font="600 14px Inter, sans-serif";for(let y of t.labels){let D=r.measureText(y.t).width+14;r.fillStyle="rgba(255,255,255,0.85)",r.fillRect(o(y.x)-D/2,l(y.z)-11,D,22),r.strokeStyle=y.c,r.lineWidth=1.5,r.strokeRect(o(y.x)-D/2,l(y.z)-11,D,22),r.fillStyle="#1a1f29",r.fillText(y.t,o(y.x),l(y.z))}for(let y of t.scanners)r.fillStyle="#0a84c6",r.beginPath(),r.moveTo(o(y.x),l(y.z)-9),r.lineTo(o(y.x)+8,l(y.z)+6),r.lineTo(o(y.x)-8,l(y.z)+6),r.closePath(),r.fill();let h=70+Yr+30,u=70;for(let y=0;y<10;y++)r.fillStyle=y%2?"#ffffff":"#1a1f29",r.fillRect(u+y/Ht.px,h,1/Ht.px,8);r.strokeStyle="#1a1f29",r.lineWidth=1,r.strokeRect(u,h,10/Ht.px,8),r.fillStyle="#1a1f29",r.font="500 12px Inter, sans-serif",r.textAlign="center";for(let y of[0,5,10])r.fillText(`${y} m`,u+y/Ht.px,h+22);let d=70+Ua-30,f=110;r.fillStyle="#1a1f29",r.beginPath(),r.moveTo(d,f-26),r.lineTo(d+11,f+12),r.lineTo(d,f+4),r.lineTo(d-11,f+12),r.closePath(),r.fill(),r.font="bold 16px Inter, sans-serif",r.fillText("N",d,f+28);let g=e.width-70-520,x=70+Yr+18,m=520,p=110;r.strokeStyle="#1a1f29",r.lineWidth=1.5,r.strokeRect(g,x,m,p),r.beginPath(),r.moveTo(g,x+38),r.lineTo(g+m,x+38),r.moveTo(g+330,x+38),r.lineTo(g+330,x+p),r.stroke(),r.textAlign="left",r.font="800 19px Inter, sans-serif",r.fillText(a?"FLOOR PLAN \xB7 ground floor \xB7 section +1.20 m":"GRUNDRISS \xB7 EG \xB7 Schnitt +1,20 m",g+12,x+20),r.font="500 12.5px Inter, sans-serif";let b=new Date;(a?["Derived from scan \xB7 X-AVIS Spatial AI Lab",`Hall captured: ${Math.round(t.cov*100)} %`,"Scale 1:200 (A3) \xB7 grid 5 m",`Date ${b.toLocaleDateString("en-GB")}`]:["Aus dem Scan abgeleitet \xB7 X-AVIS Spatial AI Lab",`Halle erfasst: ${Math.round(t.cov*100)} %`,"Ma\xDFstab 1:200 (A3) \xB7 Raster 5 m",`Datum ${b.toLocaleDateString("de-DE")}`]).forEach((y,D)=>r.fillText(y,g+12,x+56+D*16)),r.font="800 15px Inter, sans-serif",r.fillText("X-AVIS",g+345,x+60),r.font="500 11px Inter, sans-serif",r.fillText("\xA9 Jan Luca Fahrendholz-Heiermann",g+345,x+80),r.fillText(a?"Plan status: preliminary":"Planstand: vorl\xE4ufig",g+345,x+96)}},El=(i,e,t,n)=>{let s=i.color(e),r=.25+.65*i.I[e],a=1-.35*Math.min(1,t/n);if(s)return[s[0]*255*a,s[1]*255*a,s[2]*255*a];let o=255*(1-r)*a+40*(1-a);return[o,o,o]},wl=(i,e)=>{let t=document.createElement("canvas");t.width=i,t.height=e;let n=t.getContext("2d"),s=n.createImageData(i,e);for(let r=0;r<i*e;r++)s.data[r*4]=255,s.data[r*4+1]=255,s.data[r*4+2]=255,s.data[r*4+3]=255;return{cv:t,ctx:n,img:s,zb:new Float32Array(i*e).fill(1e9)}},Tl=(i,e,t,n,s,r,a=1)=>{for(let o=0;o<a;o++)for(let l=0;l<a;l++){let c=t+l,h=n+o;if(c<0||h<0||c>=e||h*e+c>=i.zb.length)continue;let u=h*e+c;s>=i.zb[u]||(i.zb[u]=s,i.img.data[u*4]=r[0],i.img.data[u*4+1]=r[1],i.img.data[u*4+2]=r[2])}},Gu=(i,e,t,n,s=!1)=>{let r=t/2,a=wl(t,r),o=n?n.length:i.N;for(let l=0;l<o;l++){let c=n?n[l]:l;if(!s&&i.S[c]<0)continue;let h=i.P[c*3]-e[0],u=i.P[c*3+1]-e[1],d=i.P[c*3+2]-e[2],f=Math.hypot(h,u,d);if(f<.3)continue;let g=Math.atan2(h,-d),x=Math.asin(u/f),m=Math.floor((g+Math.PI)/(2*Math.PI)*t),p=Math.floor((Math.PI/2-x)/Math.PI*r);Tl(a,t,m,p,f,El(i,c,f,25),f<4?3:f<9?2:1)}return a.ctx.putImageData(a.img,0,0),a.cv},Up=(i,e,t)=>{let n=t*4,s=t*3,r=wl(n,s),a={nz:[1,1],px:[2,1],pz:[3,1],nx:[0,1],py:[1,0],ny:[1,2]};for(let o=0;o<i.N;o++){if(i.S[o]<0)continue;let l=i.P[o*3]-e[0],c=i.P[o*3+1]-e[1],h=i.P[o*3+2]-e[2],u=Math.abs(l),d=Math.abs(c),f=Math.abs(h),g,x,m,p;u>=d&&u>=f?(p=u,l>0?(g="px",x=h/p,m=-c/p):(g="nx",x=-h/p,m=-c/p)):d>=f?(p=d,c>0?(g="py",x=l/p,m=h/p):(g="ny",x=l/p,m=-h/p)):(p=f,h>0?(g="pz",x=-l/p,m=-c/p):(g="nz",x=l/p,m=-c/p));let[b,_]=a[g],y=Math.hypot(l,c,h);Tl(r,n,Math.floor(b*t+(x+1)/2*(t-1)),Math.floor(_*t+(m+1)/2*(t-1)),y,El(i,o,y,25),y<5?2:1)}for(let o=0;o<s;o++)for(let l=0;l<n;l++){let c=Math.floor(l/t),h=Math.floor(o/t);Object.values(a).some(([d,f])=>d===c&&f===h)||(r.img.data[(o*n+l)*4+3]=0)}return r.ctx.putImageData(r.img,0,0),r.cv},kp=(i,e,t)=>{let n=wl(e,t),s=[48,52,78],r=[-4,0,22],a=[r[0]-s[0],r[1]-s[1],r[2]-s[2]],o=Math.hypot(a[0],a[1],a[2]),l=a.map(f=>f/o),c=[l[1]*0-l[2]*1,l[2]*0-l[0]*0,l[0]*1-l[1]*0],h=Math.hypot(c[0],c[1],c[2]);c=c.map(f=>f/h);let u=[c[1]*l[2]-c[2]*l[1],c[2]*l[0]-c[0]*l[2],c[0]*l[1]-c[1]*l[0]],d=t/2/Math.tan(34*Math.PI/360);for(let f=0;f<i.N;f++){if(i.S[f]<0)continue;let g=i.P[f*3]-s[0],x=i.P[f*3+1]-s[1],m=i.P[f*3+2]-s[2],p=g*l[0]+x*l[1]+m*l[2];if(p<1)continue;let b=g*c[0]+x*c[1]+m*c[2],_=g*u[0]+x*u[1]+m*u[2];Tl(n,e,Math.floor(e/2+b/p*d),Math.floor(t/2-_/p*d),p,El(i,f,p-25,40),2)}return n.ctx.putImageData(n.img,0,0),n.cv},Fp=(i,e)=>{let t=Math.round(e*(Ht.z1-Ht.z0)/(Ht.x1-Ht.x0)),n=wl(e,t),s=e/(Ht.x1-Ht.x0);for(let r=0;r<i.N;r++){if(i.S[r]<0)continue;let a=i.P[r*3],o=i.P[r*3+1],l=i.P[r*3+2];a<Ht.x0||a>=Ht.x1||l<Ht.z0||l>=Ht.z1||Tl(n,e,Math.floor((a-Ht.x0)*s),Math.floor((l-Ht.z0)*s),10-o,El(i,r,0,1),2)}return n.ctx.putImageData(n.img,0,0),n.cv};var Zs=.95,Ss=.85,Op=.62,ka=.28,qy=()=>{let i=new Jt({color:16738835,roughness:.45,metalness:.25}),e=new Jt({color:2303790,roughness:.5,metalness:.6}),t=new Pt,n=new we(new yn(.26,.3,.22,24),e);n.position.y=.11,t.add(n);let s=new Pt;s.position.y=.22,t.add(s);let r=new we(new yn(.22,.24,.3,24),i);r.position.y=.15,s.add(r);let a=new Pt;a.position.y=Op-.22,s.add(a),a.add(new we(new Rn(.13,16,12),e));let o=new we(new Zt(Zs,.17,.2),i);o.position.x=Zs/2,a.add(o);let l=new Pt;l.position.x=Zs,a.add(l),l.add(new we(new Rn(.11,16,12),e));let c=new we(new Zt(Ss,.13,.15),i);c.position.x=Ss/2,l.add(c);let h=new Pt;h.position.x=Ss,l.add(h),h.add(new we(new Rn(.07,12,10),e));let u=new we(new yn(.025,.04,ka,12),e);u.position.y=-ka/2,h.add(u);let d=new we(new Rn(.035,12,10),new Bt({color:16765562}));d.position.y=-ka-.01,h.add(d);let f=new Vr(16751162,0,2.5,2);return f.position.y=-ka,h.add(f),{root:t,reach:(x,m,p)=>{let b=x-t.position.x,_=m+ka-(t.position.y+Op),y=p-t.position.z,D=Math.hypot(b,y);s.rotation.y=Math.atan2(-y,b);let T=Math.max(-1,Math.min(1,(D*D+_*_-Zs*Zs-Ss*Ss)/(2*Zs*Ss))),R=Math.acos(T),U=Math.atan2(_,D)+Math.atan2(Ss*Math.sin(R),Zs+Ss*Math.cos(R));a.rotation.z=U,l.rotation.z=-R,h.rotation.z=-(U-R)},glow:d,light:f}},zp=(i,e,t)=>{let n=new Pt;n.position.set(e,0,t);let s=1.5,r=6,a=i.map((h,u)=>{let d=qy();return d.root.position.set(u===0?-1.35:1.45,.78,u===0?.15:-.15),n.add(d.root),d}),o=i.map(()=>0),l=Math.max(...i.map(h=>h.L))*s+r;return{group:n,update:h=>{let u=h%l;return i.forEach((d,f)=>{let g=u/s,x=g>=d.L,m=Math.min(d.L-1,Math.floor(g)),p=x?1:g-m;o[f]=x?d.L:m+p*.99;let b=(m+1)/d.L,_=d.z0+(m%2===0?p:1-p)*(d.z1-d.z0),y=a[f];x?y.reach(d.x+d.lean-.25,d.y0+d.h+.35,0):y.reach(d.x+d.lean*b*b,d.y0+(m+1)*(d.h/d.L)+.012,_);let D=!x;y.glow.visible=D,y.light.intensity=D?1.6+Math.random()*1.4:0,y.glow.scale.setScalar(D?.8+Math.random()*.6:1)}),o},prog:o}};var Mt={x0:-27.5,x1:20.5,z0:-20.5,z1:66.5,y0:.6,y1:9.5},hn=32,Es=1,Ge=128,Qn={x0:-2.5,x1:4.5,z:12.3},Ky=.12,Wu=.62,Al=340,Xu=600,Yu={dark:263690,light:15856630},Bp=1.62,$u=1.5,$r=720,qu=360,Ku=360,Hp=[6087142,10194175,16758087,6280077,16747099,5089023],ai=[1,9],Kr=tt.length,Rl=tt.findIndex(i=>i.bonus),qr=tt.findIndex(i=>i.id==="uc8"),Zu=tt.findIndex(i=>i.id==="profile"),Js={droneFly:.75,droneScan:.45,hand:1.35,tlsRun:9},Ju=.45,Zy=4,Fa=50,Jy=45,jy=32,Qy=(i,e)=>(Math.imul(i,2654435761)>>>0)%100<(e?jy:Jy),ev=`
attribute float aI; attribute float aCls; attribute float aG; attribute float aP; attribute float aClu; attribute float aW; attribute float aM;
attribute float aS; attribute float aF; attribute vec3 aC; attribute vec3 aO;
uniform float uT; uniform float uPx; uniform float uPs; uniform float uLight; uniform float uMode; uniform float uFeatK; uniform float uMesh; uniform float uXray; uniform float uReg; uniform float uWaamSeen;
uniform float uAna[${Kr}]; uniform float uHi[${Kr}]; uniform vec2 uWaam; uniform vec3 uMatC[10]; uniform float uCad[80]; uniform vec3 uCut;
varying vec3 vCol;
vec3 viridis(float t) {
  const vec3 c0 = vec3(0.2777, 0.0054, 0.3341); const vec3 c1 = vec3(0.1050, 1.4046, 1.3846); const vec3 c2 = vec3(-0.3309, 0.2148, 0.0951);
  const vec3 c3 = vec3(-4.6342, -5.7991, -19.3324); const vec3 c4 = vec3(6.2283, 14.1799, 56.6906); const vec3 c5 = vec3(4.7764, -13.7451, -65.3530); const vec3 c6 = vec3(-5.4355, 4.6459, 26.3124);
  return c0 + t * (c1 + t * (c2 + t * (c3 + t * (c4 + t * (c5 + t * c6)))));
}
vec3 iron(float t) {
  t = clamp(t, 0.0, 1.0);
  vec3 c = mix(vec3(0.02, 0.0, 0.08), vec3(0.42, 0.0, 0.58), smoothstep(0.0, 0.3, t));
  c = mix(c, vec3(0.92, 0.16, 0.1), smoothstep(0.25, 0.55, t));
  c = mix(c, vec3(1.0, 0.66, 0.0), smoothstep(0.5, 0.8, t));
  return mix(c, vec3(1.0, 1.0, 0.86), smoothstep(0.8, 1.0, t));
}
void hide() { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; }
void main(){
  bool waam = aW >= 0.0;
  float wl = aW / 100.0;
  float wp = aP < 0.5 ? uWaam.x : uWaam.y;
  if (waam && wl > wp) { hide(); return; }
  bool scanned = aS >= 0.0 || (waam && uWaamSeen > 0.5);
  int gi = int(aG + 0.5);
  bool holo = false;
  if (!scanned) {
    if (uXray > 0.5 && aG >= 0.0 && gi != ${Rl}) holo = true;
    else { hide(); return; }
  }
  float age = aS >= 0.0 ? uT - aS : 99.0;
  if (uMesh > 0.5 && !holo && age > 1.4) {
    if (uMesh < 1.5 || aG < 0.0) { hide(); return; }
    if (uMesh < 2.5) { hide(); return; }
    if (aClu >= 0.0 && uCad[int(aClu + 0.5)] > 0.5) { hide(); return; }
  }
  if (uXray > 0.5 && aG < 0.0 && fract(sin(dot(position.xz, vec2(12.9898, 78.233))) * 43758.5453) > 0.14) { hide(); return; }
  // Schnittebene: uCut = (Modus 0 aus \xB7 1 H\xF6he \xB7 2 x \xB7 3 z, Lage, Seite)
  bool cutEdge = false;
  if (uCut.x > 0.5) {
    float cv = uCut.x < 1.5 ? position.y : uCut.x < 2.5 ? position.x : position.z;
    float sd = (cv - uCut.y) * uCut.z;
    if (sd > 0.0) { hide(); return; }
    cutEdge = sd > -0.05;
  }
  vec3 pos = position + aO * (1.0 - uReg);
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  float d = max(0.1, -mv.z);
  bool light = uLight > 0.5;
  vec3 col;
  if (aG < 0.0) col = light ? mix(vec3(0.10, 0.13, 0.19), vec3(0.46, 0.51, 0.60), aI) : vec3(0.42, 0.47, 0.57) * (0.35 + 0.95 * aI);
  else col = light ? vec3(0.16, 0.20, 0.28) * (0.8 + 0.5 * aI) : vec3(0.78, 0.83, 0.92) * (0.55 + 0.45 * aI);
  vec3 flash = light ? vec3(0.0, 0.55, 0.85) : vec3(0.55, 0.95, 1.0);
  float sz = 1.55;
  if (uMode < 0.5) {
    if (aG >= 0.0) {
      float ta = uAna[gi];
      if (ta > 0.0) {
        float ph = uT - ta - position.y * 0.18;
        float k = clamp(ph / 0.45, 0.0, 1.0);
        col = mix(col, aC * (light ? 0.85 : 1.15), k);
        col = mix(col, flash, (1.0 - clamp(abs(ph) / 0.12, 0.0, 1.0)) * 0.7);
        sz += k * 0.4;
      }
    }
    if (waam) col = mix(col, vec3(1.0, 0.55, 0.15), exp(-(wp - wl) / 0.6) * 0.9);
  } else if (uMode < 1.5) {
    vec3 sc = aCls < 0.5 ? vec3(0.59, 0.28, 0.3) : aCls < 1.5 ? vec3(0.44, 0.82, 0.55) : vec3(0.35, 0.7, 1.0);
    col = sc * (light ? 0.75 + 0.3 * aI : 0.55 + 0.6 * aI);
  } else if (uMode < 2.5) {
    if (uFeatK > 15.5) {
      if (aCls > 0.5 && aCls < 1.5 && aG < 0.0) {
        float k = aF * 2.0 - 1.0;
        col = k < 0.0 ? mix(vec3(0.2, 0.85, 0.4), vec3(0.15, 0.4, 1.0), -k) : mix(vec3(0.2, 0.85, 0.4), vec3(1.0, 0.25, 0.2), k);
      } else col = light ? vec3(0.74, 0.76, 0.8) : vec3(0.2, 0.22, 0.26);
    } else col = viridis(clamp(aF, 0.0, 1.0));
  } else if (uMode < 3.5) {
    float tp;
    if (waam) tp = 0.35 + 0.65 * exp(-(wp - wl) / 2.5);
    else if (aG < 0.0) tp = 0.06 + 0.34 * aI + 0.1 * clamp(position.y / 6.0, 0.0, 1.0) + 0.55 * exp(-age / 6.0);
    else if (gi == 3) tp = aP < 0.5 ? 0.78 : aP > 1.5 ? 0.7 : 0.4;
    else if (gi == 6) tp = aP < 0.5 ? 0.6 : 0.82;
    else if (gi == 11 && aP > 0.5) tp = 0.55;
    else tp = 0.2 + 0.15 * aI + 0.5 * exp(-age / 6.0);
    col = iron(tp);
  } else {
    int mi = int(aM + 0.5);
    col = uMatC[mi] * (0.6 + 0.5 * aI);
  }
  float fl = 1.0 - clamp(age / 0.7, 0.0, 1.0);
  col = mix(col, flash, fl * 0.85);
  sz += fl * 1.8;
  if (aG >= 0.0) {
    float th = uHi[gi];
    if (th > 0.0 && uT - th < 30.0) {
      float hp = 0.5 + 0.5 * sin((uT - th) * 7.0);
      col = mix(col, vec3(1.0, 0.25, 0.25), 0.45 * hp);
    }
  }
  if (holo) { col = (light ? vec3(0.1, 0.35, 0.6) : aC * 0.55 + vec3(0.05, 0.12, 0.18)); sz = 1.0; }
  if (cutEdge) { col = light ? vec3(0.85, 0.25, 0.1) : vec3(1.0, 0.45, 0.2); sz += 0.8; }
  vCol = col;
  gl_PointSize = clamp(sz * uPs * uPx * 14.0 / d, 1.0, 6.0 * uPs * uPx);
}`,tv=`
varying vec3 vCol;
void main(){ vec2 c = gl_PointCoord - 0.5; if (dot(c, c) > 0.25) discard; gl_FragColor = vec4(vCol, 1.0); }`,$t=(i,e,t)=>i==="en"?t:e,Vp=i=>i.kind==="uc"?`UC${i.uc}`:i.kind==="docs"?"DOC":i.kind==="talks"?"TALK":i.kind==="bonus"?"\u2605":"ME",ju=i=>Zi.filter(e=>e.st===i.id);var Gp=(i,e,t)=>{let n=!1,s=0,r=()=>t.lang(),a=i.host,o=new kr({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1});o.setPixelRatio(Math.min(2,window.devicePixelRatio)),o.setSize(a.clientWidth,a.clientHeight),a.appendChild(o.domElement);let l=new Fr;l.fog=new Xo(Yu.dark,28,70);let c=new dn(58,a.clientWidth/a.clientHeight,.03,200);l.add(c),l.add(new cl(10470655,1053724,1.1));let h=new Gr(16777215,1.4);h.position.set(6,12,4),l.add(h);let u=new Jt({color:1909548,metalness:.6,roughness:.35}),d=new Jt({color:15265267,metalness:.2,roughness:.4}),f=new Jt({color:5089023,emissive:1727656,emissiveIntensity:.8}),g=new dl,x=new Pt;x.add(new we(new Zt(.3,.12,.42),d));let m=new we(new Zt(.2,.06,.26),u);m.position.y=.09,x.add(m);let p=new we(new Zt(.31,.02,.43),f);p.position.y=-.02,x.add(p);let b=[],_=new Bt({color:12375807,transparent:!0,opacity:.25,depthWrite:!1});for(let[w,L]of[[1,1],[1,-1],[-1,1],[-1,-1]]){let F=new we(new Zt(.04,.03,.46),u);F.position.set(w*.14,.02,L*.18),F.rotation.y=Math.atan2(w*.27,L*.36),x.add(F);let te=new we(new yn(.035,.035,.06,12),u);te.position.set(w*.27,.05,L*.36),x.add(te);let de=new we(new yn(.19,.19,.008,24),_);de.position.set(w*.27,.085,L*.36),x.add(de),b.push(de);let me=new we(new Rn(.02,8,8),new Bt({color:L<0?16777215:16726843}));me.position.set(w*.27,0,L*.36),x.add(me)}let y=new we(new Rn(.07,16,12),u);y.position.set(0,-.1,-.12),x.add(y),l.add(x),x.position.set(ai[0],.25,ai[1]);let D=document.createElement("canvas");D.width=D.height=64;{let w=D.getContext("2d"),L=w.createRadialGradient(32,32,0,32,32,32);L.addColorStop(0,"rgba(0,0,0,0.75)"),L.addColorStop(1,"rgba(0,0,0,0)"),w.fillStyle=L,w.fillRect(0,0,64,64)}let T=new Bt({map:new Jo(D),transparent:!0,depthWrite:!1}),R=new we(new Ti(1,1),T);R.rotation.x=-Math.PI/2,l.add(R);let U=new Bt({color:6087142,transparent:!0,opacity:.1,side:on,depthWrite:!1,blending:ms}),Z=new we(new il(1,1,48,1,!0),U);l.add(Z);let v=new Bt({color:6087142,transparent:!0,opacity:.6,side:on,depthWrite:!1}),E=new we(new Xi(.95,1,64),v);E.rotation.x=-Math.PI/2,l.add(E);let O=new _i({color:12581119,transparent:!0,opacity:.9}),V=new Wi(new Kt().setFromPoints([new P(0,0,0),new P(1,0,0)]),O);l.add(V);let Y=new Pt;Y.position.set(ai[0],0,ai[1]);let ie=new we(new yn(.85,.9,.06,40),new Jt({color:2765116,metalness:.5,roughness:.4}));ie.position.y=.03,Y.add(ie);let k=new we(new Xi(.6,.7,48),new Bt({color:6280077,transparent:!0,opacity:.8,side:on}));k.rotation.x=-Math.PI/2,k.position.y=.065,Y.add(k);let ae=new we(new Zt(.5,.01,.1),new Bt({color:6280077}));ae.position.y=.07,Y.add(ae),l.add(Y);let q=new Pt;{let w=new Jt({color:9279400,metalness:.5,roughness:.45}),L=new Jt({color:16764730,roughness:.6}),F=Qn.x1-Qn.x0,te=(Qn.x0+Qn.x1)/2;for(let De of[Qn.x0-.12,Qn.x1+.12]){let Se=new we(new Zt(.24,5.4,.3),w);Se.position.set(De,2.7,Qn.z),q.add(Se);for(let he=0;he<6;he++){let ve=new we(new Zt(.25,.25,.31),L);ve.position.set(De,.3+he*.5,Qn.z),ve.rotation.z=Math.PI/4,q.add(ve)}}let de=new we(new Zt(F+.6,.6,.6),w);de.position.set(te,5.4,Qn.z),q.add(de);let me=new we(new Zt(F,.05,1.6),new Jt({color:12107980,metalness:.4,roughness:.5}));me.position.set(te,5.25,Qn.z-.9),q.add(me)}q.visible=!1,l.add(q);let le={group:new Pt,pts:null,mat:null,t0:-1,shown:!1};le.group.visible=!1,l.add(le.group);let Ae=async()=>{let w=new Uint8Array(await ge("lab/portrait.bin")),L=new DataView(w.buffer),F=L.getUint16(0,!0),te=L.getUint16(2,!0),de=L.getUint16(4,!0),me=L.getUint16(6,!0),De=tt[Zu],Se=1.4,he=Se*F/te,ve=De.x+1.55,Ye=1.55,Fe=De.z,it=new Or(new Uint8Array(F*te*4),F,te,Vn),Ke=it.image.data;for(let ee=0;ee<te;ee++)for(let Oe=0;Oe<F;Oe++){let We=ee*F+Oe,ct=((te-1-ee)*F+Oe)*4;Ke[ct]=w[8+We*4],Ke[ct+1]=w[8+We*4+1],Ke[ct+2]=w[8+We*4+2],Ke[ct+3]=255}it.colorSpace=mn,it.needsUpdate=!0;let xt=new we(new Ti(he,Se),new Bt({map:it}));xt.position.set(ve+.012,Ye,Fe),xt.rotation.y=-Math.PI/2;let en=new we(new Zt(.03,Se+.08,he+.08),new Jt({color:2764600,roughness:.6}));en.position.set(ve+.03,Ye,Fe),le.group.add(xt,en);for(let ee of[-.35,.35]){let Oe=new we(new yn(.018,.018,2.3,8),cn);Oe.position.set(ve+.18,1.1,Fe+ee),Oe.rotation.z=-.12,le.group.add(Oe)}let an=[];for(let ee=0;ee<te;ee+=2)for(let Oe=0;Oe<F;Oe+=2)w[8+(ee*F+Oe)*4+3]-de>.04*(me-de)&&an.push(ee*F+Oe);let _e=an.length,nt=new Float32Array(_e*3),at=new Uint8Array(_e*3),jt=new Float32Array(_e);for(let ee=0;ee<_e;ee++){let Oe=an[ee],We=Oe%F,ct=Math.floor(Oe/F);nt[ee*3]=ve,nt[ee*3+1]=Ye+(.5-ct/te)*Se,nt[ee*3+2]=Fe+(We/F-.5)*he,at[ee*3]=w[8+Oe*4],at[ee*3+1]=w[8+Oe*4+1],at[ee*3+2]=w[8+Oe*4+2],jt[ee]=Math.max(0,Math.min(1,(w[8+Oe*4+3]-de)/(me-de)))}let X=new Kt;X.setAttribute("position",new It(nt,3)),X.setAttribute("aCol",new It(at,3,!0)),X.setAttribute("aRel",new It(jt,1)),le.mat=new Jn({uniforms:{uK:{value:0},uPx:{value:o.getPixelRatio()},uSweep:{value:0}},vertexShader:`attribute vec3 aCol; attribute float aRel; uniform float uK; uniform float uPx; uniform float uSweep; varying vec3 vC;
        void main(){ vec3 p = position; float s = clamp((uSweep - (1.55 + 0.7 - p.y) / 1.4) * 4.0, 0.0, 1.0); p.x -= aRel * 1.35 * uK * s;
          vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; vC = mix(aCol, vec3(0.55, 0.95, 1.0), (1.0 - s) * 0.6 + (s > 0.0 && s < 1.0 ? 0.4 : 0.0));
          gl_PointSize = clamp(uPx * 7.0 / max(0.1, -mv.z), 1.0, 4.0 * uPx); if (s <= 0.0) gl_PointSize = 0.0; }`,fragmentShader:"varying vec3 vC; void main(){ vec2 c = gl_PointCoord - 0.5; if (dot(c, c) > 0.25) discard; gl_FragColor = vec4(vC, 1.0); }"}),le.pts=new $s(X,le.mat),le.pts.frustumCulled=!1,le.group.add(le.pts)},ye=new Pt,yt=new we(new Zt(.05,.16,.06),u);yt.position.set(0,-.06,0),yt.rotation.x=.35,ye.add(yt);let Ot=new we(new Zt(.08,.07,.16),u);Ot.position.set(0,.03,-.04),ye.add(Ot);let ne=new Pt;ne.position.set(0,.03,-.14);let fe=new we(new yn(.04,.04,.05,20),d);fe.rotation.x=Math.PI/2,ne.add(fe);let ke=new we(new Zt(.012,.03,.052),f);ke.position.x=.036,ne.add(ke),ye.add(ne);let Le=new we(new Rn(.008,8,8),new Bt({color:6280077}));Le.position.set(.03,.07,.02),ye.add(Le),ye.scale.setScalar(.6),ye.position.set(.17,-.15,-.42),c.add(ye);let ut=48,st=new Float32Array(ut*6),vt=new Kt;vt.setAttribute("position",new It(st,3));let Ut=new _i({color:16726876,transparent:!0,opacity:.55,blending:ms,depthWrite:!1}),dt=new xs(vt,Ut);dt.frustumCulled=!1,l.add(dt);let N=[],cn=new Jt({color:2765116,metalness:.5,roughness:.5}),bt=(w,L=!1)=>{let F=new Pt,te=L?new Bt({color:w,transparent:!0,opacity:.16,depthWrite:!1}):cn;for(let Se=0;Se<3;Se++){let he=Se/3*Math.PI*2,ve=new we(new yn(.012,.012,1.42,6),te);ve.position.set(Math.cos(he)*.2,.68,Math.sin(he)*.2),ve.rotation.set(-Math.sin(he)*.29,0,Math.cos(he)*.29),F.add(ve)}let de=new Pt;de.position.y=$u-.12;let me=new we(new Zt(.2,.24,.16),L?te:new Jt({color:15265267,metalness:.2,roughness:.4}));me.position.y=.12,de.add(me);let De=new we(new yn(.06,.06,.14,20),L?te:new Jt({color:w,emissive:w,emissiveIntensity:.5,metalness:.6,roughness:.2}));return De.rotation.z=Math.PI/2,De.position.y=.2,de.add(De),F.add(de),{g:F,head:de}},je=bt(6087142,!0);je.g.visible=!1,l.add(je.g);let rt=tt.map(w=>{if(w.bonus)return null;let L=new et(w.c),F=new Pt;F.position.set(w.x,0,w.z);let te=new we(new Xi(w.r-.08,w.r,72),new Bt({color:L,transparent:!0,opacity:.55,side:on,depthWrite:!1}));te.rotation.x=-Math.PI/2,te.position.y=.03,te.visible=!1,F.add(te);let de=new we(new yn(.03,.03,7,8,1,!0),new Bt({color:L,transparent:!0,opacity:.2,depthWrite:!1}));de.position.y=3.5,F.add(de);let me=new we(new rl(.22),new Jt({color:L,emissive:L,emissiveIntensity:.8,metalness:.3,roughness:.3}));me.position.y=4.1,F.add(me);let De=new we(new Xi(.9,1,48),new Bt({color:L,transparent:!0,opacity:.5,side:on,depthWrite:!1}));return De.position.y=4.1,F.add(De),l.add(F),{g:F,ring:te,beam:de,gem:me,pulse:De,c:L}}),mt={uT:{value:0},uPx:{value:o.getPixelRatio()},uPs:{value:t.flags.lite?1.4:1},uLight:{value:0},uMode:{value:0},uFeatK:{value:6},uMesh:{value:0},uXray:{value:0},uReg:{value:0},uWaamSeen:{value:0},uAna:{value:new Array(Kr).fill(0)},uHi:{value:new Array(Kr).fill(0)},uWaam:{value:new Ie(0,0)},uMatC:{value:Object.values(Xn).map(w=>new et(w.c))},uCad:{value:new Array(80).fill(0)},uCut:{value:new P(0,1.2,1)}},xe=0,C=0,M=0,G=null,$,oe,se,Pe,pe,Ce,Et,ue,Ee,Je,Ze,Te,St,qe,Gt,z=new Float32Array($r*qu),Me=0,Q=0,re=new Array(Kr).fill(0),I=new Array(Kr).fill(0),W=tt.map(()=>"hidden"),ze=tt.map(()=>0),Nt=tt.map(()=>0),Rt=[],ot=[],rn=[],un=new Int32Array(Ge*Ge),oi=new Int32Array(Ge*Ge),Ts=new Int32Array(Ge*Ge),yi=new Int32Array(Ge*Ge),Qi=null,Jr=[],As=[0,0,0],wn=null,ei=null,Rs=new Sl,Cs=document.createElement("canvas");Cs.width=Al,Cs.height=Xu;let Ps=Cs.getContext("2d");Ps.fillStyle="#070a0f",Ps.fillRect(0,0,Al,Xu);let es=(w,L)=>[(w-(Mt.x0-2))/(Mt.x1-Mt.x0+4)*Al,(L-(Mt.z0-2))/(Mt.z1-Mt.z0+4)*Xu],Ai=new Float32Array(Ge*Ge),ts=(w,L)=>Ai[Math.max(0,Math.min(Ge-1,Math.floor(L+hn)))*Ge+Math.max(0,Math.min(Ge-1,Math.floor(w+hn)))],A=tt.map(()=>0),B=tt.map(()=>4.1),J=!1,K=!1,H={P:new Float32Array(0),I:new Float32Array(0),S:new Float32Array(0),CLS:new Uint8Array(0),GRP:new Int8Array(0),N:0,color:()=>null},ge=async(w,L)=>{let F=await fetch(w);if(!F.ok)throw new Error(`${w}: ${F.status}`);let te=Number(F.headers.get("content-length")),de=!!F.headers.get("content-encoding");if(!F.body)return F.arrayBuffer();let me=F.body.getReader(),De=[],Se=0;for(;;){let{done:Ye,value:Fe}=await me.read();if(Ye)break;De.push(Fe),Se+=Fe.length,te&&L?.(Math.min(.97,Se/(de?te*2.8:te)))}let he=new Uint8Array(Se),ve=0;for(let Ye of De)he.set(Ye,ve),ve+=Ye.length;return he.buffer},Ne=async()=>{let[w,L,F]=await Promise.all([ge("lab/scene.bin",_e=>!n&&e.loaded(Math.min(.97,_e))),ge("lab/clusters.json").then(_e=>JSON.parse(new TextDecoder().decode(_e))),ge("lab/cad.json").then(_e=>JSON.parse(new TextDecoder().decode(_e)))]);if(n)return;let te=new DataView(w);xe=te.getUint32(4,!0),C=te.getUint32(8,!0);let de=new TextDecoder().decode(new Uint8Array(w,0,4))==="XAV2",me=de?[te.getFloat32(12,!0),te.getFloat32(16,!0),te.getFloat32(20,!0)]:[0,0,0],De=de?te.getFloat32(24,!0):1e3,Se=de?28:12,he=new Int16Array(w,Se,xe*3);Se+=xe*6;let ve=new Uint8Array(w,Se,xe);Se+=xe,Pe=new Uint8Array(w,Se,xe),Se+=xe,pe=new Int8Array(w,Se,xe),Se+=xe,Ce=new Int8Array(w,Se,xe),Se+=xe,Et=new Uint8Array(w,Se,xe),Se+=xe,ue=new Int16Array(w.slice(Se,Se+xe*2)),Se+=xe*2;let Ye=new Int16Array(w.slice(Se,Se+xe*2));Se+=xe*2;let Fe=new Uint8Array(w,Se,xe);if(M=xe,t.flags.lite){G=new Int32Array(Math.ceil(xe/2));for(let nt=0;nt<G.length;nt++)G[nt]=nt*2;let _e=(nt,at=1)=>{let jt=new nt.constructor(G.length*at);for(let X=0;X<G.length;X++)for(let ee=0;ee<at;ee++)jt[X*at+ee]=nt[G[X]*at+ee];return jt};he=_e(he,3),ve=_e(ve),Pe=_e(Pe),pe=_e(pe),Ce=_e(Ce),Et=_e(Et),ue=_e(ue),Ye=_e(Ye),Fe=_e(Fe),xe=G.length}Rt=L.clusters,Jr=L.feat,As=F.plane,ot=new Array(Rt.length).fill(0),rn=new Array(Rt.length).fill(0),$=new Float32Array(xe*3);for(let _e=0;_e<xe*3;_e++)$[_e]=he[_e]/De+me[_e%3];se=new Float32Array(xe);let it=new Uint8Array(xe*3);Ee=new Int32Array(Ge*Ge+1);for(let _e=0;_e<xe;_e++){se[_e]=ve[_e]/255;let nt=$[_e*3],at=$[_e*3+1],jt=$[_e*3+2],X=Math.max(0,Math.min(Ge-1,Math.floor(jt+hn)))*Ge+Math.max(0,Math.min(Ge-1,Math.floor(nt+hn)));if(Ee[X+1]++,Ce[_e]>=0&&re[Ce[_e]]++,pe[_e]>=0){let ee=tt[pe[_e]].parts[Et[_e]].c;it[_e*3]=ee[0]*255,it[_e*3+1]=ee[1]*255,it[_e*3+2]=ee[2]*255,Nt[pe[_e]]=Math.max(Nt[pe[_e]],at)}else nt>Mt.x0&&nt<Mt.x1&&jt>Mt.z0&&jt<Mt.z1&&Me++,Pe[_e]===1?un[X]++:Ts[X]++;ue[_e]>=0&&ot[ue[_e]]++}for(let _e=1;_e<=Ge*Ge;_e++)Ee[_e]+=Ee[_e-1];{let _e=new Float32Array(Ge*Ge),nt=new Uint32Array(Ge*Ge);for(let at=0;at<xe;at++)if(Pe[at]===1&&pe[at]<0){let jt=Math.max(0,Math.min(Ge-1,Math.floor($[at*3+2]+hn)))*Ge+Math.max(0,Math.min(Ge-1,Math.floor($[at*3]+hn)));_e[jt]+=$[at*3+1],nt[jt]++}for(let at=0;at<Ge*Ge;at++)Ai[at]=nt[at]?_e[at]/nt[at]:NaN;for(let at=0;at<6;at++)for(let jt=0;jt<Ge*Ge;jt++){if(!Number.isNaN(Ai[jt]))continue;let X=0,ee=0;for(let Oe of[1,-1,Ge,-Ge]){let We=Ai[jt+Oe];We!==void 0&&!Number.isNaN(We)&&(X+=We,ee++)}ee&&(Ai[jt]=X/ee)}for(let at=0;at<Ge*Ge;at++)Number.isNaN(Ai[at])&&(Ai[at]=0)}oe=new Float32Array(xe).fill(-1),St=new Int32Array(xe),qe=new Int32Array(xe),Gt=new Float32Array(xe);let Ke=new Kt;Ke.setAttribute("position",new It($,3)),Ke.setAttribute("aI",new It(ve,1,!0)),Ke.setAttribute("aCls",new It(Pe,1)),Ke.setAttribute("aG",new It(pe,1)),Ke.setAttribute("aP",new It(Et,1)),Ke.setAttribute("aClu",new It(ue,1)),Ke.setAttribute("aW",new It(Ye,1)),Ke.setAttribute("aM",new It(Fe,1)),Ke.setAttribute("aC",new It(it,3,!0)),Je=new It(oe,1),Je.setUsage(xl),Ke.setAttribute("aS",Je),Ze=new It(new Uint8Array(xe),1,!0),Ze.setUsage(xl),Ke.setAttribute("aF",Ze),Te=new It(new Float32Array(xe*3),3),Te.setUsage(xl),Ke.setAttribute("aO",Te);let xt=new $s(Ke,new Jn({vertexShader:ev,fragmentShader:tv,uniforms:mt}));xt.frustumCulled=!1,l.add(xt),Object.assign(H,{P:$,I:se,S:oe,CLS:Pe,GRP:pe,N:xe,color:_e=>pe[_e]>=0&&W[pe[_e]]==="done"?tt[pe[_e]].parts[Et[_e]].c:null});let en=await ge("lab/stations.glb").then(_e=>new bl().parseAsync(_e,"")).catch(()=>null);F.stations.forEach((_e,nt)=>A[nt]=_e.y0??0),tt.forEach((_e,nt)=>{B[nt]=Math.max(A[nt]+4.1,Nt[nt]+1.1);let at=rt[nt];at&&(at.ring.position.y=A[nt]+.03,at.beam.scale.y=(B[nt]+.6)/7,at.beam.position.y=(B[nt]+.6)/2)}),wn=Pp(F,Rt,en?.scene),l.add(wn.group);let an=F.stations[qr];ei=zp(an.prims.filter(_e=>_e.k==="waam"),an.x,an.z),ei.group.visible=!1,l.add(ei.group),jp(),Ae().catch(()=>{}),K=!0,e.loaded(1),t.flags.allskills&&Zi.forEach(_e=>Ue.add(_e.id)),$e(),t.flags.auto&&setTimeout(()=>Md.start(),300)},Be=w=>{let L=w==="light";o.setClearColor(Yu[w]),l.fog.color.setHex(Yu[w]),mt.uLight.value=L?1:0,U.blending=L?Hi:ms,U.color.setHex(L?689350:6087142),U.needsUpdate=!0,v.color.setHex(L?689350:6087142),O.color.setHex(L?683952:12581119),_.color.setHex(L?4872816:12375807),Ut.blending=L?Hi:ms,Ut.needsUpdate=!0,T.opacity=L?.55:.9};Be("dark");let Ue=new Set,ce={unlocked:[],color:"normal",mesh:!1,meshMode:"all",meshVS:.2,xray:!1,measure:!1,auto:t.flags.auto,labels:!1,feat:6,featState:"idle",nbv:!1,cut:{mode:0,pos:1.2,flip:!1}},$e=()=>e.skills({...ce,unlocked:[...Ue]}),He=()=>Ue.has("range")?1.5:1,Wt=()=>Ue.has("net")?6:3,lt=t.tech,wt={drone:100,handheld:100,tls:100},Qt={drone:!1,handheld:!1,tls:!1},Ct={},Xe=(w,L)=>t.flags.nobattery?!0:Qt[w]?!1:(wt[w]=Math.max(0,wt[w]-L),wt[w]<=25&&!Ct[w+"25"]&&(Ct[w+"25"]=!0,e.toast($t(r(),"Akku unter 25 % \u2013 effizient scannen oder zur Ladestation","Battery below 25 % \u2013 scan efficiently or return to the charging pad"),"#ffb547")),wt[w]<=0?(Qt[w]=!0,Ct[w+"25"]=!1,e.toast($t(r(),`${sn(w)} leer \u2013 l\xE4dt ca. ${Math.round(Fa/Ju)} s. Teste solange die anderen Technologien (1 2 3).`,`${sn(w)} empty \u2013 charging for about ${Math.round(Fa/Ju)} s. Try the other technologies meanwhile (1 2 3).`),"#ff5a5f"),!1):!0),sn=w=>w==="drone"?$t(r(),"Drohne","Drone"):w==="handheld"?"Handheld":"TLS",zt=!1,Dn=0,Cn=[],Tn=new Map,Ri=null,Dt=new P,ti=new P(1,0,0),Is=0,Un=(w,L,F)=>{!J&&Math.abs($[w*3+2]-Qn.z)<1.2&&$[w*3]>Qn.x0-2&&$[w*3]<Qn.x1+2&&(J=!0,q.visible=!0,e.toast($t(r(),"Hallentor entdeckt \u2013 drau\xDFen wartet die echte Referenzbaustelle Aachen","Hall gate discovered \u2013 outside awaits the real Reference Construction Site Aachen"),"#5fd38d")),Ya=!0,oe[w]=L+Math.random()*.25;let te=Ce[w];te>=0&&I[te]++;let de=$[w*3],me=$[w*3+1],De=$[w*3+2];if(ue[w]>=0&&rn[ue[w]]++,F&&(F.x||F.z)&&(Te.array[w*3]=F.x,Te.array[w*3+1]=F.y,Te.array[w*3+2]=F.z,Is++),pe[w]<0){Q++;let Se=Math.max(0,Math.min(Ge-1,Math.floor(De+hn)))*Ge+Math.max(0,Math.min(Ge-1,Math.floor(de+hn)));if(Pe[w]===1?oi[Se]++:yi[Se]++,w%3===0){let[he,ve]=es(de,De);Ps.fillStyle=me>2.5?"rgba(92,225,230,0.5)":"rgba(150,170,200,0.35)",Ps.fillRect(he,ve,1.6,1.6)}}(Pe[w]!==1||w%3===0)&&(w%2===0||pe[w]>=0)&&Rs.add(de,me,De,Pe[w]),ce.mesh&&ce.meshMode!=="cad"&&js(w)},js=w=>{let L=$[w*3],F=$[w*3+1],te=$[w*3+2];ce.meshMode==="all"||pe[w]<0?Ri?.add(L,F,te):ue[w]>=0&&Tn.get(ue[w])?.add(L,F,te)},Oa=(w,L,F,te,de,me,De,Se)=>{let he=Math.max(0,Math.floor((w+hn)/Es)),ve=Math.min(Ge-1,Math.floor((L+hn)/Es)),Ye=Math.max(0,Math.floor((F+hn)/Es)),Fe=Math.min(Ge-1,Math.floor((te+hn)/Es)),it=!1,Ke=0;for(let xt=Ye;xt<=Fe;xt++){let en=Ee[xt*Ge+he],an=Ee[xt*Ge+ve+1],_e=!1;for(let nt=en;nt<an;nt++)oe[nt]>=0||!de(nt)||(Un(nt,me,Se),De?.(nt),_e=!0,Ke++);_e&&(Je.addUpdateRange(en,an-en),Se&&Te.addUpdateRange(en*3,(an-en)*3),it=!0)}return it&&(Je.needsUpdate=!0,Se&&(Te.needsUpdate=!0)),Ke},za=(w,L)=>{z.fill(1e9);let F=w.x,te=w.z,de=Math.max(0,Math.floor((F-L+hn)/Es)),me=Math.min(Ge-1,Math.floor((F+L+hn)/Es)),De=Math.max(0,Math.floor((te-L+hn)/Es)),Se=Math.min(Ge-1,Math.floor((te+L+hn)/Es)),he=0;for(let Fe=De;Fe<=Se;Fe++){let it=Ee[Fe*Ge+de],Ke=Ee[Fe*Ge+me+1];for(let xt=it;xt<Ke;xt++){let en=$[xt*3]-F,an=$[xt*3+1]-w.hy,_e=$[xt*3+2]-te,nt=en*en+_e*_e,at=Math.sqrt(nt+an*an);if(at>L||at<.35)continue;let jt=Math.floor((Math.atan2(_e,en)+Math.PI)/(2*Math.PI)*$r)%$r,ee=Math.min(qu-1,Math.floor((Math.atan2(an,Math.sqrt(nt))+Math.PI/2)/Math.PI*qu))*$r+jt;at<z[ee]&&(z[ee]=at),St[he]=xt,qe[he]=ee,Gt[he]=at,he++}}let ve=Array.from({length:Ku},()=>[]),Ye=[];for(let Fe=0;Fe<he;Fe++){let it=St[Fe],Ke=Gt[Fe],xt=qe[Fe];if(Ke>z[xt]*1.02+.06||(Ye.push(it),oe[it]>=0))continue;let en=Ke<6?1:1-.75*(Ke-6)/(L-6);Math.random()>en||ve[Math.floor(xt%$r/$r*Ku)].push(it)}w.buckets=ve,w.vis=Int32Array.from(Ye)},Zp=()=>{for(let L of Cn)L.m.dispose();if(Cn=[],Tn.clear(),Ri=null,!ce.mesh||ce.meshMode==="cad"||!K)return;let w=ce.meshVS;if(Ri=new Da({min:[-28,-.5,-21],max:[21,10,67],vs:Math.max(w,.15)}),Cn.push({m:Ri,clu:-1}),ce.meshMode==="obj")for(let L of Rt){let F=L.max[0]-L.min[0],te=L.max[1]-L.min[1],de=L.max[2]-L.min[2],me=Math.max(.05,2*(F*te+te*de+F*de)),De=Math.max(.025,Math.min(.12,Math.sqrt(3.5/(L.n/me))*(w/.2))),Se=tt[L.g].parts[L.p].c,he=new Da({min:[L.min[0]-De*2,L.min[1]-De*2,L.min[2]-De*2],max:[L.max[0]+De*2,L.max[1]+De*2,L.max[2]+De*2],vs:De,color:[Se[0],Se[1],Se[2]],iso:.45});Tn.set(L.id,he),Cn.push({m:he,clu:L.id})}for(let L of Cn)l.add(L.m.group);for(let L=0;L<xe;L++)oe[L]>=0&&js(L);for(let L of Cn)L.m.touchAll()},ed=()=>{mt.uMesh.value=ce.mesh?ce.meshMode==="all"?1:ce.meshMode==="obj"?2:3:0,wn&&(wn.group.visible=ce.mesh&&ce.meshMode==="cad"),Zp(),Bl()},Jp=()=>{if(!(!wn||!wn.group.visible)){for(let[w,L]of wn.cluObjs){let F=ot[w]>0&&rn[w]/ot[w]>=.5;mt.uCad.value[w]=F?1:0;for(let te of L)te.visible=F}for(let w of wn.blocks){let L=0,F=0;for(let te of w.cells)L+=Ts[te],F+=yi[te];w.m.visible=L>0&&F/L>=.3}wn.floor.cells.forEach((w,L)=>wn.floor.show(L,un[w]>0&&oi[w]/un[w]>=.3));for(let w of wn.waam){let L=ei?ei.prog[w.p]:w.L;w.meshes.forEach((F,te)=>F.visible=F.visible&&te<L)}}},td=async w=>{if(ce.feat=w,mt.uFeatK.value=w,w===16){let te=Ze.array;for(let de=0;de<xe;de++)te[de]=Pe[de]===1&&pe[de]<0&&$[de*3+2]<12?Math.round(Math.max(0,Math.min(1,($[de*3+1]-(As[0]*$[de*3]+As[1]*$[de*3+2]+As[2]))/.04*.5+.5))*255):0;Ze.needsUpdate=!0,$e();return}if(!Qi){if(ce.featState==="loading")return;ce.featState="loading",$e(),Qi=new Uint8Array(await ge("lab/feats.bin")),ce.featState="ready"}let L=Ze.array,F=w*M;if(G)for(let te=0;te<xe;te++)L[te]=Qi[F+G[te]];else L.set(Qi.subarray(F,F+xe));Ze.needsUpdate=!0,$e()},nd=[],jp=()=>{i.clu.innerHTML="";for(let w of Rt){let L=document.createElement("div");L.className="lab-clu";let F=tt[w.g].parts[w.p].c;L.style.borderColor=`rgb(${F.map(te=>Math.round(te*255)).join(",")})`,i.clu.appendChild(L),nd.push(L)}},jr=new Pt;l.add(jr);let Ci=new Set,Il=-99,id="",Qp=w=>{let F=w.toLowerCase().split(/[\s,;]+/).filter(me=>me.length>1).flatMap(me=>[me,...vl[me]??[]]);jr.clear(),Ci=new Set;let te=new Set;for(let me of Rt){let De=tt[me.g].parts[me.p],Se=[me.name.de,me.name.en,ht(De.name,"de"),ht(De.name,"en")].map(Ye=>Ye.toLowerCase());if(!F.some(Ye=>Se.some(Fe=>Fe.includes(Ye)))||me.g===Rl&&W[Rl]==="hidden")continue;Ci.add(me.id),te.add(me.g);let he=new Wn(new P(me.min[0]-.05,me.min[1]-.05,me.min[2]-.05),new P(me.max[0]+.05,me.max[1]+.05,me.max[2]+.05)),ve=new fl(he,new et(16724804));ve.material.depthTest=!1,ve.renderOrder=5,jr.add(ve)}Il=g.elapsedTime,id=w,te.forEach(me=>mt.uHi.value[me]=Il);let de=[...new Set(Rt.filter(me=>Ci.has(me.id)).map(me=>ht(tt[me.g].parts[me.p].name,r()).split(" \xB7 ")[0]))];return e.toast(Ci.size?`Zero-Shot \u201E${w}\u201C \u2192 ${Ci.size} ${$t(r(),"Objekte","objects")}: ${de.join(", ")}`:$t(r(),`Zero-Shot \u201E${w}\u201C: kein Treffer`,`Zero-shot "${w}": no match`),"#ff3344"),Ci.size},Ls=[],Ba=new Pt;l.add(Ba);let em=new Bt({color:16764784,depthTest:!1}),tm=(w,L)=>{let F=new pt().multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse).elements,te=a.clientWidth,de=a.clientHeight,me=-1,De=1e9;for(let Se=0;Se<xe;Se++){if(oe[Se]<0)continue;let he=$[Se*3],ve=$[Se*3+1],Ye=$[Se*3+2],Fe=F[3]*he+F[7]*ve+F[11]*Ye+F[15];if(Fe<=.05)continue;let it=((F[0]*he+F[4]*ve+F[8]*Ye+F[12])/Fe+1)*.5*te,Ke=(1-(F[1]*he+F[5]*ve+F[9]*Ye+F[13])/Fe)*.5*de,xt=(it-w)**2+(Ke-L)**2;if(xt>100)continue;let en=Fe+xt*.002;en<De&&(De=en,me=Se)}return me},nm=(w,L)=>{let F=tm(w,L);if(F<0)return e.toast($t(r(),"Kein gescannter Punkt unter dem Cursor","No scanned point under the cursor"),"#ffcf70");let te=new P($[F*3],$[F*3+1],$[F*3+2]),de=Ls[Ls.length-1],me=new we(new Rn(.035,10,8),em);if(me.position.copy(te),me.renderOrder=6,!de||de.b){let De=new Pt;De.add(me),Ba.add(De);let Se=document.createElement("div");if(Se.className="lab-meas",i.meas.appendChild(Se),Ls.push({a:te,obj:De,el:Se}),Ls.length>6){let he=Ls.shift();Ba.remove(he.obj),he.el.remove()}}else{de.b=te,de.obj.add(me);let De=new Wi(new Kt().setFromPoints([de.a,te]),new _i({color:16764784,depthTest:!1}));De.renderOrder=6,de.obj.add(De);let Se=de.a.distanceTo(te);de.el.textContent=`${(Se*1e3).toLocaleString(r()==="en"?"en-GB":"de-DE",{maximumFractionDigits:0})} mm`}},sd=()=>{Ls.splice(0).forEach(w=>(Ba.remove(w.obj),w.el.remove()))},zn=0,Qs=.42,Qr=4.2,er=-.12,li=new P,fn=new P(ai[0],0,ai[1]),Ll=new P,Ha=0,ea=0,vn=!1,Nl=0,Dl=!1,kn=t.flags.auto,ft={phase:"go",target:-1,t0:0,lastProg:0,lastProgT:0,alt:3.6,ang:0,cardI:-1,cardT:0},Ul=[.1,.25,.5,.75],tr={},vi=()=>lt==="drone"?x.position:fn,Pi=new Map,nr=0,kl=()=>{let[w,L]=[...Pi.values()];return Math.hypot(w.x-L.x,w.y-L.y)},rd=w=>{w.target.closest(".lab-ui, .lab-label")||(Pi.set(w.pointerId,{x:w.clientX,y:w.clientY,moved:0}),Pi.size===2&&(nr=kl()))},ad=w=>{let L=Pi.get(w.pointerId);if(!L)return;let F=w.clientX-L.x,te=w.clientY-L.y;if(L.moved+=Math.abs(F)+Math.abs(te),L.x=w.clientX,L.y=w.clientY,Pi.size>=2){let me=kl();nr>0&&me>0&&(lt==="drone"?Qr=Math.max(1.8,Math.min(14,Qr*(nr/me))):(c.fov=Math.max(35,Math.min(80,c.fov*(nr/me))),c.updateProjectionMatrix())),nr=me;return}let de=w.pointerType==="touch"?1.5:1;lt==="drone"?(zn-=F*.006*de,Qs=Math.max(.05,Math.min(1.35,Qs+te*.004*de))):(zn-=F*.005*de,er=Math.max(-1.3,Math.min(1.3,er-te*.004*de)))},Va=w=>{let L=Pi.get(w.pointerId);if(L){if(Pi.size===1&&L.moved<8&&ce.measure&&K){let F=a.getBoundingClientRect();nm(w.clientX-F.left,w.clientY-F.top)}Pi.delete(w.pointerId),nr=Pi.size===2?kl():0}},Ga={f:0,r:0},od=w=>{Qr=Math.max(1.8,Math.min(14,Qr*(1+Math.sign(w.deltaY)*.1))),w.preventDefault()},Fl=()=>{let w=vi(),L=-1,F=1e9;return tt.forEach((te,de)=>{if(te.bonus&&W[de]==="hidden")return;let me=Math.hypot(w.x-te.x,w.z-te.z);me<te.r+1.2&&me<F&&(F=me,L=de)}),L},Ol=w=>{if(w===lt)return!0;if(Qt[w])return e.toast($t(r(),`${sn(w)} l\xE4dt noch (${Math.round(wt[w])} %) \u2013 ab ${Fa} % wieder einsatzbereit`,`${sn(w)} still charging (${Math.round(wt[w])} %) \u2013 ready again at ${Fa} %`),"#ffb547"),e.tech(lt),!1;if(w==="drone"?(x.position.set(fn.x,1.4,fn.z),li.set(0,0,0),Nl=g.elapsedTime):(fn.set(vi().x,0,vi().z),kn&&!t.flags.auto&&Wa(!1)),w==="handheld"){Dt.set(0,0,0);let L=Math.random()*Math.PI*2;ti.set(Math.cos(L),0,Math.sin(L))}return lt=w,e.tech(w),!0},Wa=w=>{kn=w,ce.auto=w,ft.phase="go",ft.target=-1,$e()},Xa=w=>{ce.color=ce.color===w?"normal":w,mt.uMode.value={normal:0,seg:1,heat:2,therm:3,mat:4}[ce.color],ce.color==="heat"&&td(ce.feat),$e()},Ii=null,zl=new fi(new P(0,-1,0),1.2),Bn=new Pt;Bn.add(new we(new Ti(1,1),new Bt({color:16742973,transparent:!0,opacity:.06,side:on,depthWrite:!1}))),Bn.add(new xs(new sl(new Ti(1,1)),new _i({color:16742973,transparent:!0,opacity:.7}))),Bn.visible=!1,l.add(Bn),o.localClippingEnabled=!0;let Bl=()=>{let{mode:w,pos:L,flip:F}=ce.cut,te=F?-1:1;mt.uCut.value.set(w,L,te);let de=w===2?new P(1,0,0):w===3?new P(0,0,1):new P(0,1,0);zl.normal.copy(de).multiplyScalar(-te),zl.constant=L*te;let me=new Set,De=Fe=>Fe?.traverse(it=>{let Ke=it.material;Ke&&(Array.isArray(Ke)?Ke:[Ke]).forEach(xt=>me.add(xt))});De(wn?.group),De(ei?.group);for(let Fe of Cn)me.add(Fe.m.mat);for(let Fe of me){let it=w?[zl]:null;(Fe.clippingPlanes?.length??0)!==(it?.length??0)&&(Fe.clippingPlanes=it,Fe.needsUpdate=!0)}Bn.visible=w>0;let Se=Mt.x1-Mt.x0+2,he=Mt.z1-Mt.z0+2,ve=(Mt.x0+Mt.x1)/2,Ye=(Mt.z0+Mt.z1)/2;Bn.rotation.set(0,0,0),w===1?(Bn.position.set(ve,L,Ye),Bn.rotation.x=-Math.PI/2,Bn.scale.set(Se,he,1)):w===2?(Bn.position.set(L,3.3,Ye),Bn.rotation.y=Math.PI/2,Bn.scale.set(he,6.8,1)):w===3&&(Bn.position.set(ve,3.3,L),Bn.scale.set(Se,6.8,1)),$e()},bi=[],Ya=!1,ld=-99,cd=()=>{for(let w of bi)l.remove(w.g),w.el.remove();bi=[]},rv=w=>w>=1e3?(w/1e3).toLocaleString(r()==="en"?"en-GB":"de-DE",{maximumFractionDigits:1})+"k":String(Math.round(w)),hd=()=>{if(!K)return;Ya=!1,ld=g.elapsedTime;let w=new Float32Array(Ge*Ge),L=new Uint16Array(Ge*Ge);for(let he=0;he<Ge*Ge;he++)for(let ve=Ee[he];ve<Ee[he+1];ve++)if(oe[ve]<0){let Ye=$[ve*3],Fe=$[ve*3+2];(pe[ve]>=0||Ye>Mt.x0&&Ye<Mt.x1&&Fe>Mt.z0&&Fe<Mt.z1)&&w[he]++}else Pe[ve]!==1&&$[ve*3+1]>.3&&$[ve*3+1]<2.2&&L[he]++;let F=he=>L[he]>(G?15:30),te=15*He(),de=Math.ceil(te),me=[];for(let he=Math.ceil(Mt.z0+hn)+1;he<Mt.z1+hn-1;he+=2)for(let ve=Math.ceil(Mt.x0+hn)+1;ve<Mt.x1+hn-1;ve+=2){let Ye=he*Ge+ve;if(!un[Ye]||F(Ye))continue;let Fe=0;for(let it=-de;it<=de;it++)for(let Ke=-de;Ke<=de;Ke++){let xt=ve+Ke,en=he+it;if(xt<0||en<0||xt>=Ge||en>=Ge)continue;let an=w[en*Ge+xt];if(!an)continue;let _e=Math.hypot(Ke,it);if(_e>te)continue;let nt=(_e<6?1:1-.75*(_e-6)/(te-6))*1.1,at=1,jt=Math.ceil(_e*2);for(let X=2;X<jt-1;X++)if(F(Math.round(he+it*X/jt)*Ge+Math.round(ve+Ke*X/jt))){at=.12;break}Fe+=an*nt*at}me.push({x:ve-hn+.5,z:he-hn+.5,gain:Fe})}me.sort((he,ve)=>ve.gain-he.gain);let De=[];for(let he of me){if(De.length>=3||he.gain<Me*.005)break;De.every(ve=>Math.hypot(ve.x-he.x,ve.z-he.z)>6)&&N.every(ve=>Math.hypot(ve.x-he.x,ve.z-he.z)>2.5)&&De.push(he)}cd();let Se=16751165;De.forEach((he,ve)=>{let Ye=new Pt;Ye.position.set(he.x,0,he.z);let Fe=new we(new Xi(.42,.5,40),new Bt({color:Se,transparent:!0,opacity:.85,side:on,depthWrite:!1}));Fe.rotation.x=-Math.PI/2,Fe.position.y=.04,Ye.add(Fe),Ye.add(bt(Se,!0).g);let it=new we(new yn(.02,.02,3.2,6,1,!0),new Bt({color:Se,transparent:!0,opacity:.35,depthWrite:!1}));it.position.y=3.4,Ye.add(it),l.add(Ye);let Ke=document.createElement("div");Ke.className="lab-nbv",Ke.textContent=`${ve+1} \xB7 +${Math.max(1,Math.round(100*he.gain/Me))} % ${$t(r(),"Halle","hall")}`,i.meas.appendChild(Ke),bi.push({...he,g:Ye,el:Ke})}),De.length||e.toast($t(r(),"Scan-Planer: kaum noch Neuzuwachs \u2013 die Halle ist weitgehend erfasst","Scan planner: hardly any gain left \u2013 the hall is largely captured"),"#ff9a3d")},Hl=w=>{if(Ue.has(w)){if(w==="seg"&&Xa("seg"),w==="heat"&&Xa("heat"),w==="therm"&&Xa("therm"),w==="mat"&&Xa("mat"),w==="mesh"&&(ce.mesh=!ce.mesh,ed()),w==="xray"&&(ce.xray=!ce.xray,mt.uXray.value=ce.xray?1:0),w==="measure"&&(ce.measure=!ce.measure,ce.measure?e.toast($t(r(),"Messen: zwei gescannte Punkte anklicken","Measure: click two scanned points"),"#ffcf70"):sd()),w==="auto"){if(!kn&&Qt.drone)return e.toast($t(r(),"Drohne l\xE4dt noch \u2013 Autopilot sp\xE4ter","Drone still charging \u2013 autopilot later"),"#ffb547");Wa(!kn),kn&&Ol("drone")}w==="search"&&e.search(),w==="ask"&&e.ask(),w==="icp"&&im(),w==="nbv"&&(ce.nbv=!ce.nbv,ce.nbv?(hd(),lt!=="tls"&&e.toast($t(r(),"Scan-Planer: orange Standpunkte \u2013 wechsle zu TLS (3) und stelle dort Scanner auf (P)","Scan planner: orange positions \u2013 switch to TLS (3) and set up scanners there (P)"),"#ff9a3d")):cd()),w==="cut"&&(ce.cut={...ce.cut,mode:ce.cut.mode?0:1},Bl()),$e()}},im=()=>{if(Ii)return;let w=Te.array,L=0,F=0;for(let te=0;te<xe;te++){let de=w[te*3]**2+w[te*3+1]**2+w[te*3+2]**2;de>0&&(L+=de,F++)}if(!F)return e.toast($t(r(),"ICP: keine driftbehafteten Scans \u2013 alles bereits registriert","ICP: no drifted scans \u2013 everything already registered"),"#ffcf70");Ii={t0:g.elapsedTime,rms:Math.sqrt(L/F),n:F}},ud=()=>{if(lt!=="tls"||N.some(it=>it.state!=="idle"))return;let w=-Math.sin(zn),L=-Math.cos(zn),F=Math.max(Mt.x0,Math.min(Mt.x1,fn.x+w*2.6)),te=Math.max(Mt.z0,Math.min(Mt.z1,fn.z+L*2.6));if(ce.nbv&&bi.length){let it=bi.reduce((Ke,xt)=>Math.hypot(xt.x-F,xt.z-te)<Math.hypot(Ke.x-F,Ke.z-te)?xt:Ke);Math.hypot(it.x-F,it.z-te)<3.5&&(e.toast($t(r(),`Scanner auf Vorschlag ${bi.indexOf(it)+1} gestellt`,`Scanner placed on suggestion ${bi.indexOf(it)+1}`),"#ff9a3d"),F=it.x,te=it.z)}if(Ya=!0,N.length>=Wt()){let it=N.shift();l.remove(it.g,it.ring)}let de=Hp[(N.length+Math.floor(g.elapsedTime))%Hp.length],{g:me,head:De}=bt(de),Se=ts(F,te);me.position.set(F,Se,te);let he=15*He(),ve=new Ti(he,7);ve.translate(he/2,2,0);let Ye=new we(ve,new Bt({color:de,transparent:!0,opacity:.16,side:on,depthWrite:!1,blending:ms}));Ye.position.y=$u,Ye.visible=!1,me.add(Ye),l.add(me);let Fe=new we(new Xi(he-.06,he,128),new Bt({color:de,transparent:!0,opacity:.25,side:on,depthWrite:!1}));Fe.rotation.x=-Math.PI/2,Fe.position.set(F,Se+.03,te),l.add(Fe),N.push({g:me,head:De,sheet:Ye,ring:Fe,x:F,z:te,hy:Se+$u,c:de,buckets:null,vis:null,prog:0,nextB:0,state:"idle"})},dd=()=>{if(!(lt!=="tls"||!N.length||N.some(w=>w.state!=="idle"))){if(!t.flags.nobattery&&wt.tls<Js.tlsRun*N.length&&!Qt.tls)return e.toast($t(r(),`Akku reicht nicht f\xFCr ${N.length} Scanner (je ${Js.tlsRun} %) \u2013 Scanner einsammeln (C) oder laden`,`Battery too low for ${N.length} scanners (${Js.tlsRun} % each) \u2013 collect scanners (C) or charge`),"#ffb547");Xe("tls",Js.tlsRun*N.length)&&N.forEach(w=>(w.state="prep",w.prog=0,w.nextB=0,w.buckets=null))}},fd=()=>{N.some(w=>w.state!=="idle")||N.splice(0).forEach(w=>l.remove(w.g,w.ring))},Vl=[],sm=w=>{if(!w.vis)return;let L=Gu(H,[w.x,w.hy,w.z],1600,w.vis,!0),F=document.createElement("canvas");F.width=320,F.height=160,F.getContext("2d").drawImage(L,0,0,320,160),Vl.push({id:Vl.length+1,x:w.x,z:w.z,url:L.toDataURL("image/jpeg",.86),thumb:F.toDataURL("image/jpeg",.8)}),w.vis=null,e.panos([...Vl])},pd=w=>{let L=w.target?.tagName;if(L==="INPUT"||L==="TEXTAREA"||L==="SELECT")return;let F=w.key.toLowerCase();if(["arrowup","arrowdown","arrowleft","arrowright"," "].includes(F)&&w.preventDefault(),tr[F]=!0,["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(F)&&kn&&!t.flags.auto&&Wa(!1),w.repeat)return;if(F==="escape"&&(e.card(null),ce.measure&&Hl("measure")),F==="enter"||F==="f"){let de=Fl();de>=0&&W[de]==="done"&&e.card(de)}if(!vn)return;(F==="1"||F==="2"||F==="3")&&Ol(["drone","handheld","tls"][+F-1]),F==="p"&&ud(),F==="c"&&fd(),F===" "&&lt==="tls"&&dd(),F==="l"&&(ce.labels=!ce.labels,$e());let te=Zi.find(de=>de.key?.toLowerCase()===F);te&&((te.id==="search"||te.id==="ask")&&w.preventDefault(),Hl(te.id))},md=w=>tr[w.key.toLowerCase()]=!1,gd=()=>Object.keys(tr).forEach(w=>tr[w]=!1);a.addEventListener("pointerdown",rd),window.addEventListener("pointermove",ad),window.addEventListener("pointerup",Va),window.addEventListener("pointercancel",Va),a.addEventListener("wheel",od,{passive:!1}),window.addEventListener("keydown",pd),window.addEventListener("keyup",md),window.addEventListener("blur",gd);let xd=()=>{o.setSize(a.clientWidth,a.clientHeight),c.aspect=a.clientWidth/a.clientHeight,c.updateProjectionMatrix()};window.addEventListener("resize",xd);let _d=0,yd=0,vd=0,ir=new P,rm=new P,am=new P(0,1,0),bd=()=>{s=requestAnimationFrame(bd);let w=Math.min(.05,g.getDelta()),L=g.elapsedTime;mt.uT.value=L;let F=tr,te=lt!=="drone",de=Math.max(-1,Math.min(1,(F.w||F.arrowup?1:0)-(F.s||F.arrowdown?1:0)+Ga.f)),me=Math.max(-1,Math.min(1,(F.d||F.arrowright?1:0)-(F.a||F.arrowleft?1:0)+Ga.r));vn&&(F.q||F.e)&&(zn+=w*1.6*(F.q?1:-1));let De=new P(-Math.sin(zn),0,-Math.cos(zn)),Se=new P(-De.z,0,De.x),he=Math.hypot(vi().x-ai[0],vi().z-ai[1])<1&&(te||x.position.y<.9);["drone","handheld","tls"].forEach(X=>{let ee=X===lt?he?Zy:0:Ju*(he?2:1);wt[X]=Math.min(100,wt[X]+ee*w),Qt[X]&&wt[X]>=Fa&&(Qt[X]=!1,e.toast($t(r(),`${sn(X)} wieder einsatzbereit (${Math.round(wt[X])} %)`,`${sn(X)} ready again (${Math.round(wt[X])} %)`),"#5fd38d"))}),k.material.opacity=he?.6+.4*Math.sin(L*8):.5,x.visible=R.visible=!te;let ve=Qt.drone&&!t.flags.nobattery;if(vn&&!te){let X=F[" "]?1:F.shift?-1:0,ee=De.clone().multiplyScalar(de).add(Se.clone().multiplyScalar(me)).multiplyScalar(ve?2.5:11),Oe=0;kn&&(Oe=om(ee,L)),ee.y=ve?-6:(Oe||X)*7+(L-Nl<1.6&&x.position.y<2.4&&!kn?9:0),li.addScaledVector(ee,w),li.multiplyScalar(Math.pow(.12,w));let We=Math.hypot(li.x,li.z),ct=ve?1:5;We>ct&&(li.x*=ct/We,li.z*=ct/We),x.position.addScaledVector(li,w),x.position.x=Math.max(Mt.x0,Math.min(Mt.x1,x.position.x)),x.position.z=Math.max(Mt.z0,Math.min(Mt.z1,x.position.z)),x.position.y=Math.max(ts(x.position.x,x.position.z)+(ve||kn&&ft.phase==="charge"?.25:Mt.y0),Math.min(Mt.y1,x.position.y));let Qe=(We>.3?Math.atan2(-li.x,-li.z):ea)-ea;for(;Qe>Math.PI;)Qe-=Math.PI*2;for(;Qe<-Math.PI;)Qe+=Math.PI*2;ea+=Qe*Math.min(1,w*4),x.rotation.set(0,0,0),x.rotateY(ea);let qt=ir.copy(li).applyAxisAngle(am,-ea);x.rotateX(Math.max(-.35,Math.min(.35,qt.z*.07))),x.rotateZ(Math.max(-.35,Math.min(.35,-qt.x*.07))),x.position.y>.8&&Xe("drone",Js.droneFly*w)}x.position.y+=Math.sin(L*2.2)*.0015,b.forEach((X,ee)=>X.rotation.y+=(vn&&!ve?40:x.position.y>.4?20:2)*w*(ee%2?1:-1));let Ye=x.position.y;R.position.set(x.position.x,.02,x.position.z),R.scale.setScalar(.9+Ye*.25);let Fe=(.6+Ye*.75)*He(),it=vn&&!te&&Ye>.8&&!ve;Z.visible=E.visible=V.visible=it,Z.scale.set(Fe,Ye-.15,Fe),Z.position.set(x.position.x,(Ye-.15)/2,x.position.z),E.scale.set(Fe,Fe,1),E.position.set(x.position.x,.04,x.position.z),V.position.set(x.position.x,.05,x.position.z),V.scale.set(Fe,1,1),V.rotation.y=L*6,U.opacity=(mt.uLight.value?.06:.07)+.035*Math.sin(L*8);let Ke=!1;if(ye.visible=lt==="handheld",je.g.visible=vn&&lt==="tls"&&!N.some(X=>X.state!=="idle"),dt.visible=!1,te){let X=F.shift?5.5:3,ee=De.clone().multiplyScalar(de).add(Se.clone().multiplyScalar(me));ee.lengthSq()>1&&ee.normalize(),Ll.lerp(ee.multiplyScalar(vn?X:0),Math.min(1,w*8)),fn.addScaledVector(Ll,w),fn.x=Math.max(Mt.x0,Math.min(Mt.x1,fn.x)),fn.z=Math.max(Mt.z0,Math.min(Mt.z1,fn.z));let Oe=Ll.length()*w;Ha+=Oe*2.4;let We=ir.set(fn.x,ts(fn.x,fn.z)+Bp+Math.sin(Ha*2)*.025,fn.z);c.position.copy(We);let ct=rm.set(-Math.sin(zn)*Math.cos(er),Math.sin(er),-Math.cos(zn)*Math.cos(er));if(c.lookAt(We.x+ct.x,We.y+ct.y,We.z+ct.z),ye.position.set(.17+Math.cos(Ha)*.006,-.15+Math.abs(Math.sin(Ha))*.008,-.42),lt==="tls"&&je.g.position.set(fn.x+De.x*2.6,ts(fn.x+De.x*2.6,fn.z+De.z*2.6),fn.z+De.z*2.6),Ke=lt==="handheld"&&vn&&!!(F[" "]||F.scan)&&!Qt.handheld,ne.rotation.z+=w*(Ke?30:2),Le.material.color.setHex(Ke?Math.sin(L*20)>0?16726876:3342336:Qt.handheld?5583616:6280077),Ke&&K&&Xe("handheld",Js.hand*w)){Oe>0&&(Dt.x+=(ti.x*.04+(Math.random()-.5)*.02)*Oe,Dt.z+=(ti.z*.04+(Math.random()-.5)*.02)*Oe,Dt.y+=(Math.random()-.5)*.008*Oe,Dt.length()>.45&&Dt.setLength(.45)),Dt.length()>.15&&!Ue.has("icp")&&!Ct.drift&&(Ct.drift=!0,e.toast($t(r(),"SLAM-Drift! Ohne Registrierung verschmieren die W\xE4nde \u2026 irgendwo hoch oben gibt es Zielmarken.","SLAM drift! Without registration the walls smear \u2026 somewhere high up there are targets."),"#ffcf70"));let _t=7*He(),Qe=Math.cos(.72),qt=We.x,bn=We.y,An=We.z,Ns=ye.localToWorld(new P(0,.03,-.18)),ns=0;Oa(qt-_t,qt+_t,An-_t,An+_t,Ds=>{let Gl=$[Ds*3]-qt,Wl=$[Ds*3+1]-bn,Xl=$[Ds*3+2]-An,Sd=Gl*Gl+Wl*Wl+Xl*Xl;if(Sd>_t*_t)return!1;let Yl=Math.sqrt(Sd);return(Gl*ct.x+Wl*ct.y+Xl*ct.z)/Yl<Qe?!1:Math.random()<(Yl<3.5?1:1-.7*(Yl-3.5)/(_t-3.5))*.3},L,Ds=>{ns>=ut||Math.random()>.08||(st.set([Ns.x,Ns.y,Ns.z,$[Ds*3]+Dt.x,$[Ds*3+1]+Dt.y,$[Ds*3+2]+Dt.z],ns*6),ns++)},Dt.lengthSq()>0?Dt:void 0),vt.setDrawRange(0,ns*2),vt.attributes.position.needsUpdate=!0,dt.visible=ns>0,Ut.opacity=.35+.3*Math.random()}}else{let X=x.position.clone().add(new P(0,.25,0)),ee=new P(Math.sin(zn)*Math.cos(Qs),Math.sin(Qs),Math.cos(zn)*Math.cos(Qs)).multiplyScalar(vn?Qr:6).add(X);c.position.lerp(ee,vn?Math.min(1,w*6):.03),c.lookAt(X),(!vn||kn&&ft.phase==="tour")&&(zn+=w*.15)}if(K&&it){let X=x.position.x,ee=x.position.z,Oe=He(),We=Oa(X-Fe,X+Fe,ee-Fe,ee+Fe,ct=>{if(!kn&&!Qy(ct,pe[ct]>=0))return!1;let _t=$[ct*3+1];if(_t>Ye-.15)return!1;let Qe=(.6+(Ye-_t)*.75)*Oe,qt=$[ct*3]-X,bn=$[ct*3+2]-ee;return qt*qt+bn*bn<=Qe*Qe},L);Xe("drone",Js.droneScan*w*(We>0?1:.6))}if(K){let X=N.find(ee=>ee.state==="prep");X&&(za(X,15*He()),X.state="run",X.prog=0);for(let ee of N){if(ee.state!=="run"||!ee.buckets)continue;ee.prog=Math.min(1,ee.prog+w/3.4);let Oe=Math.floor(ee.prog*Ku);for(;ee.nextB<Oe;ee.nextB++)for(let ct of ee.buckets[ee.nextB])oe[ct]<0&&Un(ct,L);zt=!0;let We=ee.prog*2*Math.PI-Math.PI;ee.sheet.visible=!0,ee.sheet.rotation.y=-We,ee.head.rotation.y=-We,ee.prog>=1&&(ee.state="idle",ee.sheet.visible=!1,ee.buckets=null,sm(ee))}zt&&(Je.clearUpdateRanges(),Je.needsUpdate=!0,zt=!1)}if(Ii){let X=Math.min(1,(L-Ii.t0)/1.4);mt.uReg.value=X*X*(3-2*X),X>=1&&(Te.array.fill(0),Te.clearUpdateRanges(),Te.needsUpdate=!0,mt.uReg.value=0,e.toast($t(r(),`ICP: ${Ii.n.toLocaleString("de-DE")} Punkte registriert \xB7 RMS ${(Ii.rms*100).toFixed(1)} cm \u2192 < 1 mm (Simulation)`,`ICP: ${Ii.n.toLocaleString("en-GB")} points registered \xB7 RMS ${(Ii.rms*100).toFixed(1)} cm \u2192 < 1 mm (simulation)`),"#ffcf70"),Dt.set(0,0,0),Is=0,Ii=null)}if(le.group.visible=W[Zu]!=="hidden",le.mat&&W[Zu]==="done"&&le.t0<0&&(le.t0=L,e.toast($t(r(),"Easter Egg: Depth Anything V2 \u2192 Tiefenkarte \u2192 Punktwolke \xFCber Referenzebene","Easter egg: Depth Anything V2 \u2192 depth map \u2192 point cloud over a reference plane"),"#ffcf70")),le.mat&&le.t0>=0){let X=Math.min(1,(L-le.t0)/3.2);le.mat.uniforms.uSweep.value=Math.min(1.3,(L-le.t0)/1.6),le.mat.uniforms.uK.value=X*X*(3-2*X)*(1+.04*Math.sin(L*1.3))}if(ei&&K){let X=ei.update(L);mt.uWaam.value.set(X[0],X[1]??0),ei.group.visible=W[qr]!=="hidden",mt.uWaamSeen.value=W[qr]!=="hidden"?1:0}let xt=0;if(ce.mesh&&ce.meshMode!=="cad"){let X=vi(),ee=9;for(let Oe of Cn){let We=performance.now();if(xt+=Oe.m.update(ee,X.x,X.z),ee-=performance.now()-We,ee<=0)break}}L-vd>.4&&(vd=L,Jp());let en=Me?Q/Me:0;for(;Ul.length&&en>=Ul[0];){let X=Ul.shift();e.toast($t(r(),`${Math.round(X*100)} % der Halle erfasst`,`${Math.round(X*100)} % of the hall captured`),"#9b8cff")}tt.forEach((X,ee)=>{let Oe=re[ee]?I[ee]/re[ee]:0;if(W[ee]==="hidden"&&Oe>Ky&&(W[ee]="found",lt==="drone"&&!Ct.coarse&&(Ct.coarse=!0,setTimeout(()=>e.toast($t(r(),"Die Drohne sieht nur grob \u2013 f\xFCr die Analyse mit Handheld (2) oder TLS (3) nachscannen","The drone only sees coarsely \u2013 rescan with handheld (2) or TLS (3) for the analysis"),"#ffcf70"),1800)),e.toast(X.bonus?$t(r(),"\u2605 Bonus-Signal gefunden: Registrier-Zielmarken!","\u2605 Bonus signal found: registration targets!"):`${$t(r(),"Entdeckt","Discovered")}: ${Vp(X)} \xB7 ${ht(X.t,r())}`,X.c)),W[ee]==="found"&&Oe>Wu&&(W[ee]="analyzing",ze[ee]=L,mt.uAna.value[ee]=L),W[ee]==="analyzing"&&L-ze[ee]>2){W[ee]="done";for(let Qe of ju(X))Ue.has(Qe.id)||(Ue.add(Qe.id),$e(),e.banner(Qe));(t.card()===null||kn)&&(e.card(ee),kn&&(ft.cardI=ee,ft.cardT=L)),!Dl&&tt.every((Qe,qt)=>Qe.bonus||W[qt]==="done")&&(Dl=!0,e.finish(L-Dn))}let We=rt[ee];if(!We)return;let ct=W[ee];We.ring.visible=ct!=="hidden",We.gem.rotation.y+=w*(ct==="analyzing"?6:1.2),We.gem.position.y=B[ee]+Math.sin(L*2+ee)*.12,We.gem.scale.setScalar(ct==="hidden"?.7:1);let _t=(L*.6+ee*.37)%1;We.pulse.visible=vn&&ct==="hidden",We.pulse.position.y=We.gem.position.y,We.pulse.scale.setScalar(.15+_t*.75),We.pulse.lookAt(c.position),We.pulse.material.opacity=.6*(1-_t),We.ring.material.color.set(ct==="done"?6280077:We.c),We.ring.material.opacity=ct==="analyzing"?.5+.4*Math.sin(L*14):.55,We.beam.visible=ct!=="hidden",We.beam.material.opacity=ct==="done"?.1:.22}),kn&&ft.cardI>=0&&L-ft.cardT>7&&(t.card()===ft.cardI&&e.card(null),ft.cardI=-1);let an=a.clientWidth,_e=a.clientHeight,nt=vi();{let X=i.labels.children;tt.forEach((ee,Oe)=>{let We=X[Oe];if(!We)return;let ct=ir.set(ee.x,ee.bonus?5.2:B[Oe]+.6,ee.z).project(c),_t=vn&&ct.z<1&&Math.abs(ct.x)<1.15&&Math.abs(ct.y)<1.15&&!(ee.bonus&&W[Oe]==="hidden");if(We.style.display=_t?"flex":"none",!_t)return;We.style.transform=`translate(${(ct.x+1)/2*an}px, ${(1-ct.y)/2*_e}px) translate(-50%, -100%)`;let Qe=re[Oe]?Math.min(1,I[Oe]/re[Oe]/Wu):0,qt=We.querySelector(".lab-bar i");qt&&(qt.style.width=`${Math.round(Qe*100)}%`);let bn=Math.hypot(nt.x-ee.x,nt.z-ee.z),An=We.querySelector(".lab-dist");An&&(An.textContent=`${Math.round(bn)} m`),We.dataset.state=W[Oe],We.classList.toggle("far",bn>13)})}let at=L-Il<30;jr.visible=at,!at&&Ci.size&&(Ci=new Set,jr.clear()),Rt.forEach((X,ee)=>{let Oe=nd[ee];if(!Oe)return;let We=ot[ee]?rn[ee]/ot[ee]:0,ct=Ci.has(ee);if(!(vn&&(ct||ce.labels&&We>=.3&&W[X.g]!=="hidden"))){Oe.style.display="none";return}let Qe=ir.set((X.min[0]+X.max[0])/2,X.max[1]+.18,(X.min[2]+X.max[2])/2).project(c);if(Qe.z>=1||Math.abs(Qe.x)>1.1||Math.abs(Qe.y)>1.1||Math.hypot(nt.x-(X.min[0]+X.max[0])/2,nt.z-(X.min[2]+X.max[2])/2)>16){Oe.style.display="none";return}Oe.style.display="block",Oe.style.transform=`translate(${(Qe.x+1)/2*an}px, ${(1-Qe.y)/2*_e}px) translate(-50%, -100%)`,Oe.classList.toggle("hit",ct);let qt=ct?`\u201E${id}\u201C \u2192 ${ht(X.name,r())}`:`${ht(X.name,r())} \xB7 ${$t(r(),"Ziel","target")}`;Oe.textContent!==qt&&(Oe.textContent=qt)});for(let X of Ls){if(!X.b){X.el.style.display="none";continue}let ee=ir.copy(X.a).add(X.b).multiplyScalar(.5).project(c);X.el.style.display=ee.z<1?"block":"none",X.el.style.transform=`translate(${(ee.x+1)/2*an}px, ${(1-ee.y)/2*_e}px) translate(-50%, -130%)`}for(let X of bi){let ee=ir.set(X.x,1.95,X.z).project(c),Oe=vn&&ee.z<1&&Math.abs(ee.x)<1.1&&Math.abs(ee.y)<1.1;X.el.style.display=Oe?"block":"none",Oe&&(X.el.style.transform=`translate(${(ee.x+1)/2*an}px, ${(1-ee.y)/2*_e}px) translate(-50%, -100%)`),X.g.children[0].scale.setScalar(1+.15*Math.sin(L*4))}if(ce.nbv&&Ya&&L-ld>2.5&&!N.some(X=>X.state!=="idle")&&hd(),L-_d>.2){_d=L;let X=Fl(),ee=-1,Oe=9;tt.forEach((_t,Qe)=>{let qt=Math.hypot(nt.x-_t.x,nt.z-_t.z);W[Qe]==="done"&&qt<Oe&&(Oe=qt,ee=Qe)});let We={};for(let _t of Rt){if(!ot[_t.id]||rn[_t.id]/ot[_t.id]<.5)continue;let Qe=We[_t.mat]??={vol:0,mass:0,n:0};Qe.vol+=_t.vol,Qe.mass+=_t.mass,Qe.n++}let ct=0;for(let _t=0;_t<Ge*Ge;_t++)un[_t]&&oi[_t]/un[_t]>=.3&&ct++;e.hud({cov:Math.min(1,en),found:tt.filter((_t,Qe)=>!_t.bonus&&W[Qe]!=="hidden").length,done:tt.filter((_t,Qe)=>!_t.bonus&&W[Qe]==="done").length,bonus:W[Rl]!=="hidden",near:X,nearProg:X>=0&&re[X]?Math.min(1,I[X]/re[X]/Wu):0,nearState:X>=0?W[X]:"hidden",time:vn&&!Dl?L-Dn:-1,tlsN:N.length,tlsMax:Wt(),tlsRun:N.some(_t=>_t.state!=="idle"),rec:Ke,meshQ:xt,bat:{...wt},locked:{...Qt},charging:he,drift:lt==="handheld"?Dt.length():Is>0?-1:0,nearAna:ee,waamNear:Math.hypot(nt.x-tt[qr].x,nt.z-tt[qr].z)<6&&W[qr]!=="hidden",mats:Object.entries(We).map(([_t,Qe])=>({k:_t,...Qe})),floorM2:ct})}let jt=i.map();if(jt&&L-yd>.1){yd=L;let X=jt.getContext("2d");X.drawImage(Cs,0,0);let ee=Al/(Mt.x1-Mt.x0+4),[Oe,We]=es(ai[0],ai[1]);X.fillStyle="#5fd38d",X.fillRect(Oe-5,We-5,10,10),N.forEach(Qe=>{let[qt,bn]=es(Qe.x,Qe.z),An=`#${Qe.c.toString(16).padStart(6,"0")}`;X.strokeStyle=An+"55",X.lineWidth=1,X.beginPath(),X.arc(qt,bn,15*He()*ee,0,Math.PI*2),X.stroke(),X.fillStyle=An,X.fillRect(qt-4,bn-4,8,8)}),bi.forEach((Qe,qt)=>{let[bn,An]=es(Qe.x,Qe.z);X.fillStyle="#ff9a3d",X.beginPath(),X.arc(bn,An,8,0,Math.PI*2),X.fill(),X.fillStyle="#1a1406",X.font="bold 12px monospace",X.textAlign="center",X.fillText(String(qt+1),bn,An+4)}),tt.forEach((Qe,qt)=>{let[bn,An]=es(Qe.x,Qe.z),Ns=W[qt];if(!(Qe.bonus&&Ns==="hidden")){if(Ns==="hidden"){let ns=(L*.6+qt*.37)%1;X.strokeStyle=`rgba(255,255,255,${.5*(1-ns)})`,X.lineWidth=1,X.beginPath(),X.arc(bn,An,3+ns*14,0,Math.PI*2),X.stroke(),X.fillStyle="rgba(255,255,255,0.6)",X.fillRect(bn-2,An-2,4,4);return}X.strokeStyle=Ns==="done"?"#5fd38d":Qe.c,X.lineWidth=3,X.beginPath(),X.arc(bn,An,Qe.r*ee,0,Math.PI*2),X.stroke(),X.fillStyle="#e8eef5",X.font="bold 15px monospace",X.textAlign="center",X.fillText(Qe.kind==="uc"?String(Qe.uc):Qe.kind==="docs"?"D":Qe.kind==="talks"?"T":Qe.kind==="bonus"?"\u2605":"P",bn,An+5)}});let[ct,_t]=es(nt.x,nt.z);X.save(),X.translate(ct,_t),X.rotate(-zn),X.fillStyle="#ffffff",X.beginPath(),X.moveTo(0,-12),X.lineTo(8,8),X.lineTo(-8,8),X.closePath(),X.fill(),X.restore()}o.render(l,c)},om=(w,L)=>{let F=x.position,te=(he,ve,Ye,Fe=11)=>{let it=he-F.x,Ke=ve-F.z,xt=Math.hypot(it,Ke);return xt>.05?w.set(it/xt*Fe*Math.min(1,xt/1.5),0,Ke/xt*Fe*Math.min(1,xt/1.5)):w.set(0,0,0),{dd:xt,au:F.y<Ye-.15?1:F.y>Ye+.15?-1:0}};if(!t.flags.nobattery&&ft.phase!=="charge"&&wt.drone<15&&(ft.phase="charge",e.toast($t(r(),"Autopilot: Akku niedrig \u2013 fliege zur Ladestation","Autopilot: battery low \u2013 returning to the charging pad"),"#ffb547")),ft.phase==="charge"){let he=te(ai[0],ai[1],2.5);return he.dd<.35?wt.drone>=95?(ft.phase="go",1):-1:he.au}let de=tt.map((he,ve)=>ve).filter(he=>!tt[he].bonus&&W[he]!=="done"&&W[he]!=="analyzing");if(!de.length)return ft.phase="tour",ft.ang+=.0035,te(-.5+Math.cos(ft.ang)*9,1+Math.sin(ft.ang)*7,6).au;if(ft.target<0||!de.includes(ft.target)){let he=1e9;for(let ve of de){let Ye=Math.hypot(tt[ve].x-F.x,tt[ve].z-F.z);Ye<he&&(he=Ye,ft.target=ve)}ft.phase="go",ft.alt=Math.min(Mt.y1-.3,Math.max(A[ft.target]+3.4,Nt[ft.target]+1.4)),ft.lastProg=0,ft.lastProgT=L}let me=tt[ft.target],De=re[ft.target]?I[ft.target]/re[ft.target]:0;if(De>ft.lastProg+.02?(ft.lastProg=De,ft.lastProgT=L):L-ft.lastProgT>6&&(ft.alt=Math.min(6.3,ft.alt+.6),ft.lastProgT=L),ft.phase==="go"){let he=te(me.x,me.z,ft.alt);return he.dd<.8&&(ft.phase="scan",ft.t0=L),he.au}ft.ang+=.025;let Se=Math.min(me.r*.65,(L-ft.t0)*.35);return te(me.x+Math.cos(ft.ang)*Se,me.z+Math.sin(ft.ang)*Se,ft.alt,7).au};Ne().catch(w=>e.toast(String(w),"#ff5a5f")),bd();let Md={start:()=>{vn=!0,Nl=g.elapsedTime,Dn=g.elapsedTime,e.toast(lt==="tls"?$t(r(),"Scanner aufstellen (P), dann Leertaste","Set up scanners (P), then press space"):lt==="handheld"?$t(r(),"Leertaste halten zum Scannen","Hold space to scan"):$t(r(),"Scanner aktiv \u2013 finde die Signale","Scanner online \u2013 find the signals"))},reopen:w=>W[w]==="done"&&e.card(w),theme:Be,tech:Ol,skill:Hl,search:Qp,place:ud,tlsScan:dd,collect:fd,press:(w,L)=>tr[w]=L,stick:(w,L)=>{Ga.f=w,Ga.r=L,(w||L)&&kn&&!t.flags.auto&&Wa(!1)},openNear:()=>{let w=Fl();w>=0&&W[w]==="done"&&e.card(w)},labels:w=>(ce.labels=w??!ce.labels,$e()),feature:w=>td(w),mesh:(w,L)=>{ce.meshMode=w,L&&(ce.meshVS=L),ed(),$e()},measureClear:sd,cut:(w,L,F)=>{ce.cut={mode:w,pos:L,flip:F},Bl()},plan:(w,L)=>Rs.compose(w,{lang:L,cov:Me?Q/Me:0,labels:tt.filter((F,te)=>W[te]!=="hidden").map(F=>({x:F.x,z:F.z+F.r+.4,t:`${Vp(F)} \xB7 ${ht(F.t,L)}`,c:F.c})),scanners:N.map(F=>({x:F.x,z:F.z}))}),projections:()=>{let w=vi(),L=[w.x,lt==="drone"?x.position.y:ts(w.x,w.z)+Bp,w.z];return{pano:Gu(H,L,1200),cube:Up(H,L,240),persp:kp(H,1e3,620),ortho:Fp(H,1e3)}},ask:w=>Mp(w,{lang:r(),clusters:Rt,cluFrac:L=>ot[L]?rn[L]/ot[L]:0,stState:W,cov:Me?Q/Me:0,agent:{x:vi().x,z:vi().z},floorM2:(()=>{let L=0;for(let F=0;F<Ge*Ge;F++)un[F]&&oi[F]/un[F]>=.3&&L++;return L})()}),featRange:()=>Jr,goto:(w,L,F=3)=>{lt==="drone"?x.position.set(w,F,L):fn.set(w,0,L)},eggState:()=>({k:le.mat?.uniforms.uK.value,sw:le.mat?.uniforms.uSweep.value,t0:le.t0,n:le.pts?.geometry.getAttribute("position").count}),setBat:(w,L)=>wt[w]=L,pointCount:()=>xe,dbg:()=>({N:xe,hallN:Me,hallScanned:Q,ready:K,flying:vn,tech:lt,dy:+x.position.y.toFixed(2),gy:+ts(x.position.x,x.position.z).toFixed(2),bat:wt.drone,locked:Qt.drone,cs:Ee?Ee[Ge*Ge]:-1}),scannerPos:()=>N.map(w=>[w.x,w.z,w.state]),sugs:()=>bi.map(w=>({x:w.x,z:w.z,pct:Math.round(100*w.gain/Me)})),look:(w,L)=>(zn=w,lt==="drone"?Qs=L:er=L),dispose:()=>{n=!0,cancelAnimationFrame(s),a.removeEventListener("pointerdown",rd),window.removeEventListener("pointermove",ad),window.removeEventListener("pointerup",Va),window.removeEventListener("pointercancel",Va),a.removeEventListener("wheel",od),window.removeEventListener("keydown",pd),window.removeEventListener("keyup",md),window.removeEventListener("blur",gd),window.removeEventListener("resize",xd);for(let w of Cn)w.m.dispose();o.dispose(),a.removeChild(o.domElement)}};return Md};var Cl=ci($l());var Xp=ci(is()),Wp=({url:i})=>{let e=(0,Cl.useRef)(null);return(0,Cl.useEffect)(()=>{let t=e.current,n=new kr({antialias:!0});n.setPixelRatio(Math.min(2,devicePixelRatio)),n.setSize(t.clientWidth,t.clientHeight),t.appendChild(n.domElement);let s=new Fr,r=new dn(75,t.clientWidth/t.clientHeight,.1,10),a=new Br().load(i);a.colorSpace=mn;let o=new Rn(5,64,32);o.scale(-1,1,1),s.add(new we(o,new Bt({map:a})));let l=0,c=0,h=!1,u=0,d=0,f=0,g=_=>(h=!0,u=_.clientX,d=_.clientY),x=_=>{h&&(l-=(_.clientX-u)*.15,c=Math.max(-85,Math.min(85,c+(_.clientY-d)*.15)),u=_.clientX,d=_.clientY)},m=()=>h=!1,p=_=>{r.fov=Math.max(30,Math.min(100,r.fov+Math.sign(_.deltaY)*4)),r.updateProjectionMatrix(),_.preventDefault()};t.addEventListener("pointerdown",g),window.addEventListener("pointermove",x),window.addEventListener("pointerup",m),t.addEventListener("wheel",p,{passive:!1});let b=()=>{f=requestAnimationFrame(b),h||(l+=.03);let _=Pa.degToRad(90-c),y=Pa.degToRad(l);r.lookAt(Math.sin(_)*Math.cos(y),Math.cos(_),Math.sin(_)*Math.sin(y)),n.render(s,r)};return b(),()=>{cancelAnimationFrame(f),t.removeEventListener("pointerdown",g),window.removeEventListener("pointermove",x),window.removeEventListener("pointerup",m),t.removeEventListener("wheel",p),n.dispose(),a.dispose(),t.removeChild(n.domElement)}},[i]),(0,Xp.jsx)("div",{ref:e,className:"lab-panoview"})};var ws=ci($l()),Zr=ci(is()),Yp=()=>{let i="(pointer: coarse)",[e,t]=(0,ws.useState)(()=>typeof matchMedia<"u"&&(matchMedia(i).matches||location.hash.includes("touch")));return(0,ws.useEffect)(()=>{let n=matchMedia(i),s=()=>t(n.matches||location.hash.includes("touch"));return n.addEventListener("change",s),()=>n.removeEventListener("change",s)},[]),e},$p=({onMove:i,label:e})=>{let t=(0,ws.useRef)(null),[n,s]=(0,ws.useState)({x:0,y:0,on:!1}),r=(0,ws.useRef)(null),a=48,o=c=>{let h=t.current.getBoundingClientRect(),u=c.clientX-(h.left+h.width/2),d=c.clientY-(h.top+h.height/2),f=Math.hypot(u,d);f>a&&(u*=a/f,d*=a/f),s({x:u,y:d,on:!0});let g=x=>Math.abs(x)<.12?0:x;i(g(-d/a),g(u/a))},l=()=>{r.current=null,s({x:0,y:0,on:!1}),i(0,0)};return(0,Zr.jsxs)("div",{ref:t,className:`lab-ui lab-joy${n.on?" on":""}`,onPointerDown:c=>{r.current=c.pointerId,c.target.setPointerCapture(c.pointerId),o(c)},onPointerMove:c=>r.current===c.pointerId&&o(c),onPointerUp:l,onPointerCancel:l,children:[(0,Zr.jsx)("i",{style:{transform:`translate(${n.x}px, ${n.y}px)`}}),e&&!n.on&&(0,Zr.jsx)("span",{children:e})]})},Pl=({k:i,press:e,children:t,className:n})=>(0,Zr.jsx)("button",{className:`lab-hold ${n??""}`,onPointerDown:s=>{s.target.setPointerCapture(s.pointerId),e(i,!0)},onPointerUp:()=>e(i,!1),onPointerCancel:()=>e(i,!1),onContextMenu:s=>s.preventDefault(),children:t});var S=ci(is()),j=(i,e,t)=>i==="en"?t:e,qp=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`,Kp=i=>i.kind==="uc"?`UC${i.uc}`:i.kind==="docs"?"DOC":i.kind==="talks"?"TALK":i.kind==="bonus"?"\u2605":"ME",nv=i=>`rgb(${i.map(e=>Math.round(e*255)).join(",")})`,Qu=(i,e,t=2)=>i.toLocaleString(e==="en"?"en-GB":"de-DE",{maximumFractionDigits:t,minimumFractionDigits:t}),iv={cov:0,found:0,done:0,bonus:!1,near:-1,nearProg:0,nearState:"hidden",time:0,tlsN:0,tlsMax:3,tlsRun:!1,rec:!1,meshQ:0,bat:{drone:100,handheld:100,tls:100},locked:{drone:!1,handheld:!1,tls:!1},charging:!1,drift:0,nearAna:-1,waamNear:!1,mats:[],floorM2:0},sv=({lang:i})=>{let e=(0,gt.useRef)(null),t=(0,gt.useRef)(null),n=(0,gt.useRef)(null),s=(0,gt.useRef)(null),r=(0,gt.useRef)(null),a=(0,gt.useRef)(null),o=(0,gt.useRef)(null),l=(0,gt.useRef)({auto:location.hash.includes("auto"),allskills:location.hash.includes("allskills"),nobattery:location.hash.includes("nobattery"),lite:!location.hash.includes("full")&&(location.hash.includes("lite")||location.hash.includes("touch")||matchMedia("(pointer: coarse)").matches)}),[c,h]=(0,gt.useState)(0),[u,d]=(0,gt.useState)(!1),[f,g]=(0,gt.useState)(()=>location.hash.includes("light")?"light":"dark"),[x,m]=(0,gt.useState)(()=>location.hash.includes("handheld")?"handheld":location.hash.includes("tls")?"tls":"drone"),[p,b]=(0,gt.useState)(iv),[_,y]=(0,gt.useState)(null),[D,T]=(0,gt.useState)([]),[R,U]=(0,gt.useState)(null),[Z,v]=(0,gt.useState)(!1),[E,O]=(0,gt.useState)(!1),[V,Y]=(0,gt.useState)({}),ie=(I,W)=>(0,S.jsxs)("div",{className:"lab-opt-h",onClick:()=>Y(ze=>({...ze,[I]:!ze[I]})),title:V[I]?j(i,"Ausklappen","Expand"):j(i,"Einklappen \u2013 die Ansicht bleibt aktiv","Collapse \u2013 the view stays active"),children:[(0,S.jsx)("small",{children:W}),(0,S.jsx)("button",{className:"lab-opt-min",children:V[I]?"\u25B8 "+j(i,"\xF6ffnen","open"):"\u2014 "+j(i,"einklappen","collapse")})]}),[k,ae]=(0,gt.useState)({unlocked:[],color:"normal",mesh:!1,meshMode:"all",meshVS:.2,xray:!1,measure:!1,auto:!1,labels:!1,feat:6,featState:"idle",nbv:!1,cut:{mode:0,pos:1.2,flip:!1}}),[q,le]=(0,gt.useState)(null),[Ae,ye]=(0,gt.useState)(!1),[yt,Ot]=(0,gt.useState)(""),[ne,fe]=(0,gt.useState)(!1),[ke,Le]=(0,gt.useState)(""),[ut,st]=(0,gt.useState)([]),[vt,Ut]=(0,gt.useState)([]),[dt,N]=(0,gt.useState)(null),[cn,bt]=(0,gt.useState)(null),je=Yp(),[rt,mt]=(0,gt.useState)(!1),[xe,C]=(0,gt.useState)(!1),[M,G]=(0,gt.useState)(()=>matchMedia("(orientation: portrait)").matches),[$,oe]=(0,gt.useState)(!1),se=(0,gt.useRef)(!1);(0,gt.useEffect)(()=>{let I=matchMedia("(orientation: portrait)"),W=()=>G(I.matches);return I.addEventListener("change",W),()=>{I.removeEventListener("change",W),screen.orientation.unlock?.(),se.current&&document.fullscreenElement&&document.exitFullscreen().catch(()=>{})}},[]);let Pe=()=>{if(!je)return;let I=document.documentElement;(!document.fullscreenElement&&I.requestFullscreen?I.requestFullscreen({navigationUI:"hide"}):Promise.resolve()).then(()=>(se.current=!!document.fullscreenElement,screen.orientation.lock?.("landscape"))).catch(()=>{})},pe=()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.().catch(()=>{}),[Ce,Et]=(0,gt.useState)(null),ue=(0,gt.useRef)(null);ue.current=_;let Ee=(0,gt.useRef)(i);Ee.current=i,(0,gt.useEffect)(()=>{let I=0,W=[],ze=!1,Nt=()=>{let ot=W.shift();ze=!!ot,le(ot??null),ot&&setTimeout(Nt,4300)},Rt=Gp({host:e.current,labels:t.current,clu:n.current,meas:s.current,map:()=>r.current},{loaded:h,hud:b,toast:(ot,rn="#5ce1e6")=>{let un=++I;T(oi=>[...oi.slice(-3),{id:un,txt:ot,c:rn}]),setTimeout(()=>T(oi=>oi.filter(Ts=>Ts.id!==un)),4200)},card:y,banner:ot=>{W.push(ot),ze||Nt()},skills:ae,finish:U,tech:m,panos:Ut,search:()=>ye(!0),ask:()=>fe(!0)},{lang:()=>Ee.current,tech:x,card:()=>ue.current,flags:l.current});return o.current=Rt,l.current.allskills&&(window.__lab=Rt),l.current.auto&&d(!0),()=>Rt.dispose()},[]),(0,gt.useEffect)(()=>o.current?.theme(f),[f]),(0,gt.useEffect)(()=>{let I=W=>{let ze=W.target?.tagName;if(ze==="INPUT"||ze==="SELECT")return;let Nt=W.key.toLowerCase();Nt==="t"&&g(Rt=>Rt==="dark"?"light":"dark"),u&&(Nt==="k"&&N(Rt=>Rt==="plan"?null:"plan"),Nt==="j"&&N(Rt=>Rt==="proj"?null:"proj"),Nt==="u"&&N(Rt=>Rt==="pano"?null:"pano"),Nt==="escape"&&(O(!1),N(null),bt(null),ye(!1),fe(!1)))};return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[u]),(0,gt.useEffect)(()=>{if(dt!=="plan")return;let I=()=>a.current&&o.current?.plan(a.current,Ee.current);I();let W=setInterval(I,700);return()=>clearInterval(W)},[dt]);let Je=()=>{let I=o.current.projections();Et(Object.fromEntries(Object.entries(I).map(([W,ze])=>[W,ze.toDataURL("image/png")])))};(0,gt.useEffect)(()=>{dt==="proj"&&Je()},[dt]);let Ze=(I,W)=>o.current?.press(I,W),Te=I=>{if(!u)return m(I);o.current?.tech(I)},St=_!==null?tt[_]:null,qe=p.near>=0?tt[p.near]:null,Gt=x!=="drone",z=o.current?.featRange()??[],Me=()=>{let I=a.current;if(!I)return;let W=document.createElement("a");W.href=I.toDataURL("image/png"),W.download=`x-avis_grundriss_${new Date().toISOString().slice(0,10)}.png`,W.click()},Q=(()=>{if(k.color==="seg")return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:j(i,"Segmentierung \xB7 ganze Szene","Segmentation \xB7 whole scene")}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"rgb(150,72,76)"}}),j(i,"Umgebung","Environment")]}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"rgb(112,209,140)"}}),j(i,"Boden","Floor")]}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"rgb(90,180,255)"}}),j(i,"Ziel (alle wichtigen Objekte)","Target (all relevant objects)")]}),(0,S.jsx)("em",{children:j(i,"Hallenklassen: echtes RandLA-Net-Ergebnis (A1)","Hall classes: real RandLA-Net result (A1)")})]});if(k.color==="heat"){let W=yl[k.feat],ze=z[k.feat];return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:k.feat<16?`${j(i,"Merkmal","Feature")} ${k.feat+1}/16 \xB7 ${W.k}`:j(i,"Ebenheit Hallenboden","Hall floor flatness")}),(0,S.jsx)("span",{className:"lab-lg-d",children:ht(W.t,i)}),(0,S.jsx)("div",{className:`lab-ramp ${k.feat===16?"flat":"viridis"}`}),(0,S.jsx)("span",{className:"lab-ramp-l",children:k.feat===16?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("em",{children:"\u22124 cm"}),(0,S.jsx)("em",{children:"0"}),(0,S.jsx)("em",{children:"+4 cm"})]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("em",{children:ze?+ze[0].toPrecision(3):0}),(0,S.jsx)("em",{children:ze?+ze[1].toPrecision(3):1})]})}),k.featState==="loading"&&(0,S.jsx)("em",{children:j(i,"Lade Merkmale (12,7 MB) \u2026","Loading features (12.7 MB) \u2026")}),(0,S.jsx)("em",{children:j(i,"Vorab f\xFCr alle Punkte berechnet (k = 30), Darstellung 1.\u201399. Perzentil","Precomputed for all points (k = 30), shown 1st\u201399th percentile")})]})}if(k.color==="therm")return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:j(i,"Thermal (illustrativ)","Thermal (illustrative)")}),(0,S.jsx)("div",{className:"lab-ramp therm"}),(0,S.jsxs)("span",{className:"lab-ramp-l",children:[(0,S.jsx)("em",{children:j(i,"kalt","cold")}),(0,S.jsx)("em",{children:j(i,"hei\xDF","hot")})]}),(0,S.jsx)("em",{children:j(i,"frisch gescannt und frische WAAM-Schichten = hei\xDF","fresh scans and fresh WAAM layers = hot")})]});if(k.color==="mat")return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:j(i,"Materialkataster","Material register")}),Object.entries(Xn).map(([W,ze])=>(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:ze.c}}),i==="en"?ze.en:ze.de]},W))]});let I=p.nearAna>=0?tt[p.nearAna]:null;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:j(i,"Punktwolke","Point cloud")}),(0,S.jsx)("div",{className:`lab-ramp ${f==="light"?"intl":"int"}`}),(0,S.jsxs)("span",{className:"lab-ramp-l",children:[(0,S.jsx)("em",{children:j(i,"Intensit\xE4t niedrig","low intensity")}),(0,S.jsx)("em",{children:j(i,"hoch","high")})]}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:f==="light"?"#0a8cd9":"#8cf2ff"}}),j(i,"frisch gescannt","freshly scanned")]}),(0,S.jsx)("span",{className:"lab-lg-d",children:j(i,"Ungescanntes ist unsichtbar","Unscanned is invisible")}),I&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("b",{className:"lab-lg-sub",children:["X-AVIS \xB7 ",Kp(I)," ",ht(I.t,i)]}),I.parts.map((W,ze)=>(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:nv(W.c)}}),ht(W.name,i)]},ze))]}),p.waamNear&&(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"#ff8c26"}}),j(i,"frische WAAM-Schicht","fresh WAAM layer")]}),k.xray&&(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"#2a6f9a"}}),j(i,"Hologramm (R\xF6ntgenblick)","hologram (x-ray)")]})]})})(),re=I=>p.locked[I]?j(i,"l\xE4dt","charging"):`${Math.round(p.bat[I])} %`;return(0,S.jsxs)("div",{className:`lab lab-${f} lab-t-${x}${je?" lab-touch":""}`,children:[(0,S.jsx)("div",{ref:e,className:"lab-canvas"}),u&&Gt&&(0,S.jsx)("div",{className:`lab-cross${p.rec?" rec":""}${k.measure?" meas":""}`}),(0,S.jsx)("div",{ref:t,className:"lab-labels",children:tt.map((I,W)=>(0,S.jsxs)("div",{className:"lab-label","data-state":"hidden",style:{borderColor:I.c},onClick:()=>o.current?.reopen(W),children:[(0,S.jsxs)("b",{style:{background:I.c},children:[(0,S.jsx)("span",{className:"lab-known",children:Kp(I)}),(0,S.jsx)("span",{className:"lab-unk",children:"?"})]}),(0,S.jsx)("span",{className:"lab-known",children:ht(I.t,i)}),(0,S.jsx)("span",{className:"lab-unk",children:j(i,"Unbekanntes Signal","Unknown signal")}),(0,S.jsx)("span",{className:"lab-dist"}),(0,S.jsx)("span",{className:"lab-bar",children:(0,S.jsx)("i",{})})]},I.id))}),(0,S.jsx)("div",{ref:n,className:"lab-clus"}),(0,S.jsx)("div",{ref:s,className:"lab-measl"}),(0,S.jsxs)("div",{className:"lab-ui lab-top",children:[(0,S.jsxs)("a",{className:"lab-brand",href:"#/",children:[(0,S.jsx)(Ed,{size:34,frame:0}),(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{className:"lab-k",children:"Spatial AI Lab"}),(0,S.jsxs)("div",{className:"lab-p",children:["powered by ",(0,S.jsx)(wd,{height:15})]})]})]}),u&&(0,S.jsxs)("div",{className:"lab-stats",children:[(0,S.jsxs)("div",{children:[(0,S.jsx)("small",{children:j(i,"Gel\xE4nde erfasst","Area captured")}),(0,S.jsxs)("b",{children:[Math.round(p.cov*100)," %"]})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("small",{children:j(i,"Entdeckt","Discovered")}),(0,S.jsxs)("b",{children:[p.found," / ",La,p.bonus?" \u2605":""]})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("small",{children:j(i,"Analysiert","Analysed")}),(0,S.jsxs)("b",{children:[p.done," / ",La]})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("small",{children:"Skills"}),(0,S.jsxs)("b",{children:[k.unlocked.length," / ",Zi.length]})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("small",{children:j(i,"Zeit","Time")}),(0,S.jsx)("b",{children:qp(R??Math.max(0,p.time))})]})]}),(0,S.jsxs)("div",{className:"lab-tr",children:[(0,S.jsx)("button",{className:"lab-exit",onClick:()=>g(I=>I==="dark"?"light":"dark"),title:"T",children:f==="dark"?"\u25D0 "+j(i,"Wei\xDFe Leere","White void"):"\u25D1 "+j(i,"Dunkle Leere","Dark void")}),(0,S.jsxs)("a",{className:"lab-exit",href:"#/",children:["\u2715 ",j(i,"Lab verlassen","Exit lab")]})]})]}),u&&(0,S.jsxs)("div",{className:"lab-ui lab-techs",children:[uu.map(I=>(0,S.jsxs)("button",{className:`${x===I.id?"on":""}${p.locked[I.id]?" locked":""}`,onClick:()=>Te(I.id),title:ht(I.d,i),children:[(0,S.jsx)("i",{children:I.icon}),(0,S.jsx)("span",{children:ht(I.t,i).split(" \xB7 ")[I.id==="drone"?0:1]}),(0,S.jsx)("span",{className:"lab-batt","data-low":p.bat[I.id]<25?"1":"0",children:(0,S.jsx)("em",{style:{width:`${Math.round(p.bat[I.id])}%`}})}),(0,S.jsx)("small",{children:re(I.id)}),(0,S.jsx)("kbd",{children:I.key})]},I.id)),p.charging&&(0,S.jsxs)("span",{className:"lab-charging",children:["\u26A1 ",j(i,"Ladestation","charging pad")]})]}),(0,S.jsx)("div",{className:"lab-toasts",children:D.map(I=>(0,S.jsx)("div",{className:"lab-toast",style:{borderColor:I.c},children:I.txt},I.id))}),q&&(0,S.jsxs)("div",{className:"lab-unlock",children:[(0,S.jsx)("div",{className:"lab-unlock-i",children:q.icon}),(0,S.jsx)("small",{children:q.id==="icp"?j(i,"Bonus-Skill freigeschaltet","Bonus skill unlocked"):j(i,"Skill freigeschaltet","Skill unlocked")}),(0,S.jsx)("b",{children:ht(q.t,i)}),(0,S.jsx)("span",{children:ht(q.d,i)}),(0,S.jsx)("em",{children:q.key?j(i,`Taste ${q.key} oder Skill-Leiste`,`Press ${q.key} or use the skill bar`):j(i,"passiv \xB7 sofort aktiv","passive \xB7 active right away")})]},q.id),u&&_===null&&(qe||x==="tls"||p.rec||p.drift>.05)&&(0,S.jsxs)("div",{className:"lab-ui lab-prompt",onClick:()=>o.current?.openNear(),style:{borderColor:qe?p.nearState==="done"?"#5fd38d":qe.c:"#5ce1e6"},children:[qe&&p.nearState==="done"?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:ht(qe.t,i)})," \xB7 ",je?j(i,"analysiert \u2013 hier antippen f\xFCr Infos","analysed \u2013 tap here for info"):j(i,"analysiert \u2013 Enter oder Label klicken","analysed \u2013 press Enter or click the label")]}):qe&&p.nearState==="analyzing"?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:"X-AVIS"})," ",j(i,"segmentiert die Punktwolke \u2026","is segmenting the point cloud \u2026")]}):x==="tls"?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:"TLS"})," \xB7 ",p.tlsRun?j(i,"Scan l\xE4uft \u2013 alle Scanner gleichzeitig \u2026","scanning \u2013 all scanners at once \u2026"):je?j(i,`${p.tlsN}/${p.tlsMax} Scanner \xB7 je 7 % Akku pro Scan`,`${p.tlsN}/${p.tlsMax} scanners \xB7 7 % battery per scan each`):j(i,`${p.tlsN}/${p.tlsMax} Scanner \xB7 P aufstellen \xB7 Leertaste scannen (je 7 % Akku) \xB7 C einsammeln`,`${p.tlsN}/${p.tlsMax} scanners \xB7 P set up \xB7 space scan (7 % battery each) \xB7 C collect`),qe&&(0,S.jsx)("span",{className:"lab-pbar",children:(0,S.jsx)("i",{style:{width:`${Math.round(p.nearProg*100)}%`,background:qe.c}})})]}):qe?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:p.nearState==="hidden"?j(i,"Unbekanntes Signal","Unknown signal"):ht(qe.t,i)})," \xB7 ",x==="handheld"?je?j(i,"\u25CF halten und Objekt abscannen","hold \u25CF and scan the object"):j(i,"Leertaste halten und Objekt abscannen","hold space and scan the object"):j(i,"Bereich abfliegen und scannen","fly over the area to scan it"),(0,S.jsx)("span",{className:"lab-pbar",children:(0,S.jsx)("i",{style:{width:`${Math.round(p.nearProg*100)}%`,background:qe.c}})})]}):p.rec?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{className:"lab-recdot",children:"\u25CF REC"})," ",j(i,"SLAM-Scan l\xE4uft","SLAM scan running")]}):null,p.drift>.05&&(0,S.jsxs)("span",{className:"lab-drift",children:[j(i,"Drift","drift")," ",Math.round(p.drift*100)," cm",k.unlocked.includes("icp")?" \xB7 R = ICP":""]})]}),u&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("div",{className:"lab-ui lab-help",children:[x==="drone"?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:"WASD"})," ",j(i,"fliegen","fly")," \xB7 ",(0,S.jsx)("b",{children:j(i,"Leertaste / Shift","Space / Shift")})," ",j(i,"steigen / sinken","up / down")," \xB7 ",(0,S.jsx)("b",{children:"Q / E"})," ",j(i,"drehen","turn")]}):x==="handheld"?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:"WASD"})," ",j(i,"gehen","walk")," \xB7 ",(0,S.jsx)("b",{children:"Shift"})," ",j(i,"rennen","run")," \xB7 ",(0,S.jsx)("b",{children:j(i,"Leertaste halten","Hold space")})," ",j(i,"scannen","scan")]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:"WASD"})," ",j(i,"gehen","walk")," \xB7 ",(0,S.jsx)("b",{children:"P"})," ",j(i,"aufstellen","set up")," \xB7 ",(0,S.jsx)("b",{children:j(i,"Leertaste","Space")})," ",j(i,"scannen","scan")," \xB7 ",(0,S.jsx)("b",{children:"C"})," ",j(i,"einsammeln","collect")]})," ","\xB7 ",(0,S.jsx)("b",{children:j(i,"Maus","Mouse")})," ",j(i,"Ansicht","view")," \xB7 ",(0,S.jsx)("b",{children:"1 2 3"})," ",j(i,"Technologie","technology")," \xB7 ",(0,S.jsx)("b",{children:"T"})," ",j(i,"hell/dunkel","light/dark")]}),E&&(0,S.jsx)("div",{className:"lab-ui lab-mapshade",onClick:()=>O(!1)}),(0,S.jsx)("canvas",{ref:r,className:`lab-ui lab-map${E?" big":""}`,width:340,height:600,onClick:()=>O(I=>!I),title:E?j(i,"Klicken zum Schlie\xDFen","Click to close"):j(i,"Klicken f\xFCr Vollbild-Karte","Click for fullscreen map")}),E&&(0,S.jsx)("div",{className:"lab-ui lab-mapcap",children:j(i,"Karte \xB7 Halle und Referenzbaustelle \xB7 klicken oder Esc zum Schlie\xDFen","Map \xB7 hall and reference site \xB7 click or Esc to close")}),(!je||rt)&&(0,S.jsxs)("div",{className:je?"lab-ui lab-drawer":"lab-contents",onClick:I=>je&&I.target.closest("button")&&!I.target.closest(".lab-drawer-keep")&&mt(!1),children:[je&&(0,S.jsxs)("div",{className:"lab-drawer-h lab-drawer-keep",children:[(0,S.jsx)("b",{children:j(i,"Skills & Werkzeuge","Skills & tools")}),(0,S.jsx)("button",{className:"lab-x",onClick:()=>mt(!1),children:"\u2715"})]}),(0,S.jsx)("div",{className:"lab-ui lab-tools",children:vp.map(I=>{let W=I.id==="labels"?k.labels:dt===I.id;return(0,S.jsxs)("button",{className:W?"on":"",onClick:()=>I.id==="labels"?o.current?.labels():N(ze=>ze===I.id?null:I.id),children:[(0,S.jsx)("i",{children:I.icon}),(0,S.jsxs)("span",{children:[ht(I.t,i),I.id==="pano"&&vt.length?` (${vt.length})`:""]}),(0,S.jsx)("kbd",{children:I.key})]},I.id)})}),(0,S.jsx)("div",{className:"lab-ui lab-skills",children:Zi.map(I=>{let W=k.unlocked.includes(I.id);if(I.id==="icp"&&!W)return null;let ze=W&&(I.passive||I.id==="seg"&&k.color==="seg"||I.id==="heat"&&k.color==="heat"||I.id==="therm"&&k.color==="therm"||I.id==="mat"&&k.color==="mat"||I.id==="mesh"&&k.mesh||I.id==="xray"&&k.xray||I.id==="measure"&&k.measure||I.id==="auto"&&k.auto||I.id==="nbv"&&k.nbv||I.id==="cut"&&k.cut.mode>0);return(0,S.jsxs)("button",{className:`${W?"got":"lock"}${ze?" on":""}`,disabled:!W||I.passive,onClick:()=>o.current?.skill(I.id),title:W?`${ht(I.t,i)} \u2013 ${ht(I.d,i)}`:j(i,"Noch verborgen \u2013 wird durch eine Station freigeschaltet","Still hidden \u2013 unlocked by a station"),children:[(0,S.jsx)("i",{children:W?I.icon:"?"}),W&&I.key&&(0,S.jsx)("kbd",{children:I.key}),W&&(0,S.jsx)("span",{children:ht(I.t,i)})]},I.id)})}),je&&(0,S.jsxs)("div",{className:"lab-drawer-row",children:[(0,S.jsx)("button",{onClick:()=>g(I=>I==="dark"?"light":"dark"),children:f==="dark"?"\u25D0 "+j(i,"Wei\xDFe Leere","White void"):"\u25D1 "+j(i,"Dunkle Leere","Dark void")}),(0,S.jsxs)("button",{onClick:pe,children:["\u26F6 ",j(i,"Vollbild","Fullscreen")]}),(0,S.jsxs)("a",{href:"#/",children:["\u2715 ",j(i,"Lab verlassen","Exit lab")]})]})]}),(0,S.jsx)("div",{className:`lab-ui lab-legend${je&&!xe?" closed":""}`,onClick:()=>je&&C(I=>!I),children:je&&!xe?(0,S.jsxs)("b",{children:["\u25A4 ",j(i,"Legende","Legend")]}):(0,S.jsxs)(S.Fragment,{children:[Q,k.cut.mode>0&&(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"#ff7a3d"}}),j(i,"Schnittkante","cut edge")]}),k.nbv&&(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"#ff9a3d",borderRadius:8}}),j(i,"vorgeschlagener TLS-Standpunkt","suggested TLS position")]})]})}),(0,S.jsxs)("div",{className:"lab-ui lab-optstack",children:[k.cut.mode>0&&(0,S.jsxs)("div",{className:`lab-ui lab-opt lab-cutopt${V.cut?" min":""}`,children:[ie("cut",j(i,"Schnittebene","Section plane")),(0,S.jsx)("div",{className:"lab-seg3",children:[[1,j(i,"Horizontal","Horizontal")],[2,j(i,"L\xE4ngs (x)","Long. (x)")],[3,j(i,"Quer (z)","Cross (z)")]].map(([I,W])=>(0,S.jsx)("button",{className:k.cut.mode===I?"on":"",onClick:()=>o.current?.cut(I,I===1?1.2:0,k.cut.flip),children:W},I))}),(0,S.jsxs)("label",{children:[k.cut.mode===1?j(i,"Schnitth\xF6he","Cut height"):j(i,"Schnittlage","Cut position")," \xB7 ",Qu(k.cut.pos,i,2)," m",(0,S.jsx)("input",{type:"range",min:k.cut.mode===1?.1:k.cut.mode===2?-27:-20,max:k.cut.mode===1?9.5:k.cut.mode===2?20:66,step:.05,value:k.cut.pos,onChange:I=>o.current?.cut(k.cut.mode,+I.target.value,k.cut.flip)})]}),(0,S.jsxs)("button",{className:"lab-flip",onClick:()=>o.current?.cut(k.cut.mode,k.cut.pos,!k.cut.flip),children:["\u21C5 ",j(i,"Seite umkehren","Flip side")]})]}),k.color==="heat"&&(0,S.jsxs)("div",{className:`lab-ui lab-opt lab-feats${V.feats?" min":""}`,children:[ie("feats",(0,S.jsxs)(S.Fragment,{children:[j(i,"RandLA-Net-Merkmal","RandLA-Net feature"),V.feats?` \xB7 ${k.feat<16?yl[k.feat].k:j(i,"Ebenheit","flatness")}`:""]})),(0,S.jsx)("div",{className:"lab-featgrid",children:yl.map((I,W)=>(0,S.jsx)("button",{className:k.feat===W?"on":"",onClick:()=>o.current?.feature(W),title:ht(I.t,i),children:W<16?`${W+1} \xB7 ${I.k}`:j(i,"Ebenheit","flatness")},I.k))})]}),k.mesh&&(0,S.jsxs)("div",{className:`lab-ui lab-opt lab-meshopt${V.mesh?" min":""}`,children:[ie("mesh","Scan-to-Mesh"),(0,S.jsx)("div",{className:"lab-seg3",children:[["all",j(i,"Gesamt","Whole")],["obj",j(i,"Objektweise","Per object")],["cad",j(i,"Modell","Model")]].map(([I,W])=>(0,S.jsx)("button",{className:k.meshMode===I?"on":"",onClick:()=>o.current?.mesh(I),children:W},I))}),k.meshMode!=="cad"?(0,S.jsxs)("label",{children:[j(i,"Feinheit","Detail")," \xB7 ",j(i,"Voxel","voxel")," ",Math.round(k.meshVS*100)," cm",(0,S.jsx)("input",{type:"range",min:0,max:3,step:1,value:[.3,.2,.15,.1].indexOf(k.meshVS),onChange:I=>o.current?.mesh(k.meshMode,[.3,.2,.15,.1][+I.target.value])}),(0,S.jsxs)("span",{className:"lab-ramp-l",children:[(0,S.jsx)("em",{children:j(i,"grob, geschlossen","coarse, closed")}),(0,S.jsx)("em",{children:j(i,"fein, l\xF6chrig","fine, holey")})]})]}):(0,S.jsx)("em",{children:j(i,"Nachmodellierte K\xF6rper erscheinen, sobald \u2265 50 % eines Objekts gescannt sind; Hallenbl\xF6cke und Bodenplatte ab 30 %.","Reconstructed solids appear once \u2265 50 % of an object is scanned; hall blocks and floor slab from 30 %.")}),p.meshQ>0&&(0,S.jsxs)("em",{className:"lab-mq",children:["\u25B3 ",p.meshQ," ",j(i,"Kacheln in Arbeit","tiles in progress")]})]}),k.color==="mat"&&(0,S.jsxs)("div",{className:`lab-ui lab-opt lab-matpanel${V.mat?" min":""}`,children:[ie("mat",j(i,"Materialkataster \xB7 aus Modell, Objekte \u2265 50 % erfasst","Material register \xB7 from model, objects \u2265 50 % captured")),(0,S.jsx)("table",{children:(0,S.jsxs)("tbody",{children:[[...p.mats].sort((I,W)=>W.mass-I.mass).map(I=>(0,S.jsxs)("tr",{children:[(0,S.jsxs)("td",{children:[(0,S.jsx)("i",{style:{background:Xn[I.k]?.c}}),i==="en"?Xn[I.k]?.en:Xn[I.k]?.de]}),(0,S.jsxs)("td",{children:[Qu(I.vol,i,3)," m\xB3"]}),(0,S.jsx)("td",{children:I.mass?`${Qu(I.mass/1e3,i,2)} t`:"\u2013"})]},I.k)),(0,S.jsxs)("tr",{children:[(0,S.jsxs)("td",{children:[(0,S.jsx)("i",{style:{background:Xn.concrete.c}}),j(i,"Bodenplatte (Fl\xE4che)","Floor slab (area)")]}),(0,S.jsxs)("td",{colSpan:2,children:[p.floorM2," m\xB2"]})]})]})})]})]}),je&&!rt&&_===null&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)($p,{onMove:(I,W)=>o.current?.stick(I,W),label:x==="drone"?j(i,"fliegen","fly"):j(i,"gehen","walk")}),(0,S.jsxs)("div",{className:"lab-ui lab-acts",children:[x==="drone"&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(Pl,{k:" ",press:Ze,children:["\u2912",(0,S.jsx)("small",{children:j(i,"hoch","up")})]}),(0,S.jsxs)(Pl,{k:"shift",press:Ze,children:["\u2913",(0,S.jsx)("small",{children:j(i,"runter","down")})]})]}),x==="handheld"&&(0,S.jsxs)(Pl,{k:"scan",press:Ze,className:`big${p.rec?" rec":""}`,children:["\u25CF",(0,S.jsx)("small",{children:j(i,"halten = scannen","hold = scan")})]}),x==="tls"&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("button",{className:"lab-hold",onClick:()=>o.current?.place(),children:["\u2295",(0,S.jsx)("small",{children:j(i,"aufstellen","set up")})]}),(0,S.jsxs)("button",{className:"lab-hold big",onClick:()=>o.current?.tlsScan(),children:["\u25B6",(0,S.jsx)("small",{children:j(i,"alle scannen","scan all")})]}),(0,S.jsxs)("button",{className:"lab-hold",onClick:()=>o.current?.collect(),children:["\u293A",(0,S.jsx)("small",{children:j(i,"einsammeln","collect")})]})]})]}),(0,S.jsxs)("button",{className:"lab-ui lab-menu",onClick:()=>mt(I=>!I),children:["\u2630 ",(0,S.jsxs)("span",{children:["Skills ",k.unlocked.length,"/",Zi.length]})]})]})]}),Ae&&(0,S.jsxs)("form",{className:"lab-ui lab-search",onSubmit:I=>{I.preventDefault(),yt.trim()&&o.current?.search(yt.trim()),ye(!1)},children:[(0,S.jsxs)("small",{children:["Zero-Shot \xB7 ",j(i,"Textprompt \u2192 Bounding Boxes","text prompt \u2192 bounding boxes")]}),(0,S.jsx)("input",{autoFocus:!0,value:yt,onChange:I=>Ot(I.target.value),placeholder:j(i,"z. B. Bagger, Person, Stuhl, Big Bag, Stahl \u2026","e.g. excavator, person, chair, big bag, steel \u2026"),onKeyDown:I=>I.key==="Escape"&&ye(!1)}),(0,S.jsx)("button",{className:"btn",children:j(i,"Suchen","Search")})]}),ne&&(0,S.jsxs)("div",{className:"lab-ui lab-ask",children:[(0,S.jsxs)("div",{className:"lab-ask-h",children:[(0,S.jsxs)("small",{children:["\u275D ",j(i,"Frag das Lab \xB7 regelbasiert, offline, mit Quelle","Ask the lab \xB7 rule-based, offline, with source")]}),(0,S.jsx)("button",{className:"lab-x",onClick:()=>fe(!1),children:"\u2715"})]}),(0,S.jsxs)("div",{className:"lab-ask-log",children:[ut.length===0&&(0,S.jsx)("p",{className:"lab-lg-d",children:j(i,"Beispiele: \u201EWie viele Personen?\u201C \xB7 \u201EWo ist der Bagger?\u201C \xB7 \u201EWelche Abweichungen?\u201C \xB7 \u201EWie viel Stahl?\u201C",'Examples: "How many people?" \xB7 "Where is the excavator?" \xB7 "Which deviations?" \xB7 "How much steel?"')}),ut.map((I,W)=>(0,S.jsxs)("div",{className:"lab-ask-qa",children:[(0,S.jsx)("b",{children:I.q}),(0,S.jsx)("p",{children:I.a}),(0,S.jsx)("span",{children:I.src.map((ze,Nt)=>(0,S.jsx)("em",{children:ze},Nt))})]},W))]}),(0,S.jsxs)("form",{onSubmit:I=>{I.preventDefault(),!(!ke.trim()||!o.current)&&(st(W=>[...W.slice(-5),o.current.ask(ke.trim())]),Le(""))},children:[(0,S.jsx)("input",{autoFocus:!0,value:ke,onChange:I=>Le(I.target.value),placeholder:j(i,"Frage zum Scan \u2026","Question about the scan \u2026"),onKeyDown:I=>I.key==="Escape"&&fe(!1)}),(0,S.jsx)("button",{className:"btn",children:j(i,"Fragen","Ask")})]})]}),dt==="plan"&&(0,S.jsxs)("div",{className:"lab-ui lab-panel",children:[(0,S.jsxs)("div",{className:"lab-panel-h",children:[(0,S.jsxs)("b",{children:["\u25A4 ",j(i,"Grundriss \xB7 w\xE4chst mit jedem Scan","Floor plan \xB7 grows with every scan")]}),(0,S.jsx)("button",{className:"btn ghost",onClick:Me,children:"\u2913 PNG"}),(0,S.jsx)("button",{className:"lab-x",onClick:()=>N(null),children:"\u2715"})]}),(0,S.jsx)("div",{className:"lab-panel-b",children:(0,S.jsx)("canvas",{ref:a,className:"lab-plan"})})]}),dt==="proj"&&(0,S.jsxs)("div",{className:"lab-ui lab-panel",children:[(0,S.jsxs)("div",{className:"lab-panel-h",children:[(0,S.jsxs)("b",{children:["\u25EB ",j(i,"Projektionsarten der aktuellen Punktwolke","Projection types of the current point cloud")]}),(0,S.jsxs)("button",{className:"btn ghost",onClick:Je,children:["\u21BB ",j(i,"Aktualisieren","Refresh")]}),(0,S.jsx)("button",{className:"lab-x",onClick:()=>N(null),children:"\u2715"})]}),(0,S.jsxs)("div",{className:"lab-panel-b lab-projgrid",children:[Ce&&[["pano",j(i,"Panoramabild (vom aktuellen Standpunkt)","Panorama (from current position)")],["cube",j(i,"W\xFCrfelnetzbild","Cube-map net")],["persp",j(i,"Bild aus vorgegebener Kameraperspektive","Image from a given camera perspective")],["ortho",j(i,"Orthobild (Draufsicht)","Orthoimage (top view)")]].map(([I,W])=>(0,S.jsxs)("figure",{children:[(0,S.jsx)("img",{src:Ce[I],alt:""}),(0,S.jsx)("figcaption",{children:W})]},I)),(0,S.jsx)("p",{className:"lab-lg-d",children:j(i,"Wie Abb. 2.6 der Dissertation \u2013 nur aus dem, was du bisher gescannt hast.","As in Fig. 2.6 of the dissertation \u2013 built only from what you have scanned so far.")})]})]}),dt==="pano"&&(0,S.jsxs)("div",{className:"lab-ui lab-panel",children:[(0,S.jsxs)("div",{className:"lab-panel-h",children:[(0,S.jsxs)("b",{children:["\u25CE ",j(i,"360\xB0-Panoramen der TLS-Standpunkte","360\xB0 panoramas of the TLS positions")]}),(0,S.jsx)("button",{className:"lab-x",onClick:()=>(N(null),bt(null)),children:"\u2715"})]}),(0,S.jsx)("div",{className:"lab-panel-b",children:cn?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Wp,{url:cn.url}),(0,S.jsxs)("div",{className:"lab-pano-bar",children:[(0,S.jsxs)("button",{className:"btn ghost",onClick:()=>bt(null),children:["\u2190 ",j(i,"\xDCbersicht","Overview")]}),(0,S.jsxs)("span",{children:[j(i,"Standpunkt","Position")," ",cn.id," \xB7 x ",cn.x.toFixed(1)," \xB7 z ",cn.z.toFixed(1)," \xB7 ",j(i,"Intensit\xE4tsbild \xB7 ziehen zum Umsehen","intensity image \xB7 drag to look around")]})]})]}):vt.length?(0,S.jsx)("div",{className:"lab-panogrid",children:vt.map(I=>(0,S.jsxs)("button",{onClick:()=>bt(I),children:[(0,S.jsx)("img",{src:I.thumb,alt:""}),(0,S.jsxs)("span",{children:[j(i,"Standpunkt","Position")," ",I.id]})]},I.id))}):(0,S.jsx)("p",{className:"lab-lg-d",children:j(i,"Noch keine Panoramen. Wechsle zu TLS (3), stelle Scanner auf (P) und scanne (Leertaste) \u2013 jeder Standpunkt liefert ein 360\xB0-Bild.","No panoramas yet. Switch to TLS (3), set up scanners (P) and scan (space) \u2013 every position yields a 360\xB0 image.")})})]}),!u&&(0,S.jsxs)("div",{className:"lab-ui lab-intro",children:[(0,S.jsx)("div",{className:"kicker",children:"3D Operation System \xB7 powered by X-AVIS"}),(0,S.jsx)("h1",{children:"Spatial AI Lab"}),(0,S.jsx)("p",{children:j(i,"Du startest in der Leere. Nur dein Scanner sieht \u2013 was er erfasst, wird Wirklichkeit: Punkt f\xFCr Punkt legst du echte Laserscans frei: eine Stahlbauhalle und \u2013 durchs offene Tor \u2013 die Referenzbaustelle Aachen. Folge den Signalen, scanne die Stationen, und X-AVIS segmentiert, was du gefunden hast. Die Drohne findet, Handheld und TLS analysieren \u2013 und jeder Akku ist begrenzt. Manche Stationen schalten Skills frei \u2026","You start in the void. Only your scanner can see \u2013 whatever it captures becomes real: point by point you uncover real laser scans: a steel fabrication hall and \u2013 through the open gate \u2013 the Reference Construction Site Aachen. Follow the signals, scan the stations, and X-AVIS segments what you found. The drone finds, handheld and TLS analyse \u2013 and every battery is limited. Some stations unlock skills \u2026")}),(0,S.jsx)("div",{className:"lab-techpick",children:uu.map(I=>(0,S.jsxs)("button",{className:x===I.id?"on":"",onClick:()=>Te(I.id),children:[(0,S.jsx)("i",{children:I.icon}),(0,S.jsx)("b",{children:ht(I.t,i)}),(0,S.jsx)("span",{children:ht(je?I.dt:I.d,i)})]},I.id))}),(0,S.jsxs)("div",{className:"lab-modes",children:[(0,S.jsxs)("button",{className:f==="dark"?"on":"",onClick:()=>g("dark"),children:[(0,S.jsx)("i",{className:"sw-dark"}),j(i,"Dunkle Leere","Dark void")]}),(0,S.jsxs)("button",{className:f==="light"?"on":"",onClick:()=>g("light"),children:[(0,S.jsx)("i",{className:"sw-light"}),j(i,"Wei\xDFe Leere","White void")]})]}),c<1?(0,S.jsxs)("div",{className:"lab-load",children:[(0,S.jsx)("i",{style:{width:`${Math.round(c*100)}%`}}),(0,S.jsxs)("span",{children:[j(i,"Lade Punktwolke","Loading point cloud")," \xB7 ",Math.round(c*100)," %"]})]}):(0,S.jsxs)("button",{className:"btn",onClick:()=>{Pe(),o.current?.tech(x),d(!0),o.current?.start()},children:["\u25B6 ",j(i,"Scan starten","Start scanning"),je?" \xB7 "+j(i,"Vollbild quer","fullscreen landscape"):""]}),(0,S.jsx)("small",{className:"lab-note",children:j(i,"Echte Scans: Stahlbauhalle (RWTH Aachen) \xB7 Referenzbaustelle Aachen aus RefSite3D (Fahrendholz-Heiermann et al., CC BY 4.0) \xB7 einzelne Stationsobjekte synthetisch","Real scans: steel hall (RWTH Aachen) \xB7 Reference Construction Site Aachen from RefSite3D (Fahrendholz-Heiermann et al., CC BY 4.0) \xB7 some station objects synthetic")})]}),St&&(0,S.jsx)(Id,{s:St,lang:i,skills:ju(St),onClose:()=>y(null)}),R!==null&&!Z&&_===null&&dt===null&&(0,S.jsxs)("div",{className:"lab-ui lab-done",children:[(0,S.jsxs)("b",{children:[j(i,"Lab vollst\xE4ndig entdeckt","Lab fully discovered")," \u2713"]}),(0,S.jsxs)("span",{children:[j(i,`Alle ${La} Stationen analysiert in`,`All ${La} stations analysed in`)," ",(0,S.jsx)("b",{children:qp(R)})," \xB7 ",j(i,"Gel\xE4nde erfasst","area captured")," ",Math.round(p.cov*100)," % \xB7 Skills ",k.unlocked.length,"/",Zi.length,!p.bonus&&` \xB7 ${j(i,"ein Signal fehlt noch \u2026","one signal is still missing \u2026")}`]}),(0,S.jsx)("span",{children:j(i,"Vom Scan zur Entscheidung.","From scan to decision.")}),(0,S.jsxs)("div",{className:"lab-done-row",children:[(0,S.jsxs)("button",{className:"btn",onClick:()=>v(!0),children:["\u25B6 ",j(i,"Weiter erkunden","Keep exploring")]}),(0,S.jsx)("a",{className:"btn ghost",href:"#/",children:j(i,"Zur Website","Back to website")})]})]}),je&&u&&M&&!$&&(0,S.jsxs)("div",{className:"lab-ui lab-rotate",children:[(0,S.jsx)("div",{className:"lab-rotate-i",children:"\u{1F4F1}"}),(0,S.jsx)("b",{children:j(i,"Handy quer drehen","Rotate your phone")}),(0,S.jsx)("span",{children:j(i,"Das Spatial AI Lab ist f\xFCr das Querformat gemacht \u2013 mehr Halle, mehr Platz f\xFCr Joystick und Steuerung.","The Spatial AI Lab is made for landscape \u2013 more hall, more room for joystick and controls.")}),(0,S.jsxs)("button",{className:"btn",onClick:Pe,children:["\u26F6 ",j(i,"Vollbild","Fullscreen")]}),(0,S.jsx)("button",{className:"lab-flip",onClick:()=>oe(!0),children:j(i,"Trotzdem hochkant","Stay in portrait")})]}),(0,S.jsxs)("div",{className:"lab-copy",children:["\xA9 ",new Date().getFullYear()," Jan Luca Fahrendholz-Heiermann \xB7 X-AVIS"]})]})},Rb=sv;export{Rb as default};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
