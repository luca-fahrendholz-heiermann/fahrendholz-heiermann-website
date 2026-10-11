import{b as Md,g as Sd,i as Ed,k as Ya,l as wd}from"./chunk-A5ZTPR6Q.js";import{A as bd,B as rt,C as ye,b as ai,c as Yl,e as ts,z as vd}from"./chunk-V3L2VTIW.js";var dt=ai(Yl());var Ge=ai(ts()),Xn=(i,e,t)=>i==="en"?t:e,Ad=i=>`rgb(${i.map(e=>Math.round(e*255)).join(",")})`,Td=({s:i,lang:e,skills:t,onClose:n})=>{let s=i.uc?Md[i.uc-1]:null;return(0,Ge.jsxs)("div",{className:"lab-ui lab-card",style:{borderColor:i.c},children:[(0,Ge.jsx)("button",{className:"lab-x",onClick:n,children:"\u2715"}),(0,Ge.jsxs)("div",{className:"kicker",style:{color:i.c},children:[i.kind==="uc"?`Use Case ${i.uc}`:rt(i.t,e)," \xB7 ",Xn(e,"gescannt & analysiert","scanned & analysed")]}),(0,Ge.jsx)("h2",{children:s?rt(s.title,e):rt(i.t,e)}),t.map(r=>(0,Ge.jsxs)("div",{className:"lab-skillgot",children:[(0,Ge.jsx)("span",{children:r.icon}),(0,Ge.jsxs)("div",{children:[(0,Ge.jsx)("small",{children:Xn(e,"Skill freigeschaltet","Skill unlocked")}),(0,Ge.jsxs)("b",{children:[rt(r.t,e),r.key?` [${r.key}]`:` \xB7 ${Xn(e,"passiv","passive")}`]}),(0,Ge.jsx)("em",{children:rt(r.d,e)})]})]},r.id)),(0,Ge.jsxs)("div",{className:"lab-parts",children:[(0,Ge.jsx)("small",{children:Xn(e,"X-AVIS hat erkannt","X-AVIS detected")}),i.parts.map((r,a)=>(0,Ge.jsxs)("span",{style:{borderColor:Ad(r.c)},children:[(0,Ge.jsx)("i",{style:{background:Ad(r.c)}}),rt(r.name,e)]},a))]}),s&&(0,Ge.jsxs)(Ge.Fragment,{children:[(0,Ge.jsx)("p",{className:"lab-claim",children:rt(s.claim,e)}),(0,Ge.jsx)("video",{src:`media/uc${s.n}_${e}.mp4`,poster:`media/thumb_uc${s.n}_${e}.jpg`,controls:!0,muted:!0,playsInline:!0},`${s.n}-${e}`),(0,Ge.jsx)("ol",{children:s.flow.map((r,a)=>(0,Ge.jsx)("li",{children:rt(r,e)},a))}),(0,Ge.jsx)("div",{className:"lab-kpis",children:s.value.map((r,a)=>(0,Ge.jsxs)("div",{children:[(0,Ge.jsx)("b",{children:r.v}),(0,Ge.jsx)("span",{children:rt(r.t,e)})]},a))}),(0,Ge.jsxs)("a",{className:"btn",href:`#/uc/${s.n}`,children:[Xn(e,"Zur Use-Case-Seite","Open use-case page")," \u2192"]})]}),i.kind==="docs"&&(0,Ge.jsxs)("div",{className:"lab-list",children:[Sd.map((r,a)=>(0,Ge.jsxs)("div",{children:[(0,Ge.jsx)("b",{children:rt(r.t,e)}),(0,Ge.jsx)("span",{children:rt(r.d,e)})]},a)),(0,Ge.jsxs)("a",{className:"btn",href:"#/expertise",children:[Xn(e,"Mehr unter Expertise","More in expertise")," \u2192"]})]}),i.kind==="talks"&&(0,Ge.jsx)("div",{className:"lab-list",children:Ed.slice(0,6).map((r,a)=>(0,Ge.jsxs)("div",{className:"lab-talk",children:[r.imgs[0]&&(0,Ge.jsx)("img",{src:`media/${r.imgs[0]}`,alt:""}),(0,Ge.jsxs)("div",{children:[(0,Ge.jsxs)("b",{children:[r.y&&`${r.y} \xB7 `,rt(r.t,e)]}),(0,Ge.jsx)("span",{children:rt(r.where,e)})]})]},a))}),i.kind==="bonus"&&(0,Ge.jsxs)("div",{className:"lab-list",children:[(0,Ge.jsx)("p",{className:"lab-claim",children:Xn(e,"Zielmarken sind die Br\xFCcke zwischen einzelnen Scans: \xDCber sie werden Standpunkte zueinander und zum Modell registriert. In Artefakt 2 geschieht das zielmarkenfrei \u2013 Grobregistrierung \xFCber Extended Gaussian Images (EGI) und Fourier-Mellin (FMT), Feinregistrierung per ICP, danach pr\xFCft ein MLP jedes Bauteil gegen das Soll.","Targets are the bridge between individual scans: they register positions to each other and to the model. Artefact 2 does this target-free \u2013 coarse registration via extended Gaussian images (EGI) and Fourier\u2013Mellin (FMT), fine registration via ICP, then an MLP verifies every component against the design.")}),(0,Ge.jsx)("img",{className:"lab-cardimg",src:"media/diss_5-14_b3-stahlbauhalle.jpg",alt:""}),(0,Ge.jsx)("img",{className:"lab-cardimg",src:"media/diss_5-19_verifikation-b3-stahlbauhalle.jpg",alt:""}),(0,Ge.jsx)("p",{className:"lab-claim",children:Xn(e,"Im Lab: Handheld-Scans driften (SLAM). Mit R registrierst du sie per ICP \u2013 die verschmierten W\xE4nde rasten ein.","In the lab: handheld scans drift (SLAM). Press R to register them via ICP \u2013 the smeared walls snap into place.")}),(0,Ge.jsxs)("a",{className:"btn",href:"#/expertise",children:[Xn(e,"Registrierung in der Expertise","Registration in expertise")," \u2192"]})]}),i.kind==="profile"&&(0,Ge.jsxs)("div",{className:"lab-list",children:[(0,Ge.jsxs)("div",{className:"lab-prof",children:[(0,Ge.jsx)("img",{src:"media/profile.jpg",alt:""}),(0,Ge.jsxs)("div",{children:[(0,Ge.jsx)("b",{children:Ya.name}),(0,Ge.jsx)("span",{children:rt(Ya.role,e)})]})]}),(0,Ge.jsx)("p",{className:"lab-claim",children:rt(Ya.summary,e)}),(0,Ge.jsxs)("div",{className:"lab-egg",children:[(0,Ge.jsxs)("small",{children:["\u2605 Easter Egg \xB7 ",Xn(e,"Tiefe aus einem einzigen Bild","depth from a single image")]}),(0,Ge.jsxs)("div",{className:"lab-egg-imgs",children:[(0,Ge.jsx)("img",{src:"media/profile.jpg",alt:""}),(0,Ge.jsx)("span",{children:"\u2192"}),(0,Ge.jsx)("img",{src:"media/profile_depth.png",alt:""})]}),(0,Ge.jsx)("em",{children:Xn(e,"Depth Anything V2 sch\xE4tzt die relative Tiefe des Fotos. Statt \xFCber ein Lochkameramodell entsteht die Punktwolke als Relief \xFCber einer Referenzebene, dem Bildtr\xE4ger \u2013 wie bei meiner Kameramessung mit Referenzgeometrie statt LiDAR. Vorab berechnet, im Lab steht das Bild aus der Staffelei heraus.","Depth Anything V2 estimates the photo's relative depth. Instead of a pinhole camera model, the point cloud is built as relief over a reference plane, the picture itself \u2013 like my camera measurement with reference geometry instead of LiDAR. Precomputed; in the lab the picture pops out of the easel.")})]}),(0,Ge.jsx)("div",{className:"lab-links",children:wd.map(r=>(0,Ge.jsxs)("a",{href:r.href,target:"_blank",rel:"noopener noreferrer",children:[r.k," \u2197"]},r.k))}),(0,Ge.jsxs)("a",{className:"btn",href:"#/profil",children:[Xn(e,"Vollst\xE4ndiges Profil","Full profile")," \u2192"]})]}),(0,Ge.jsx)("button",{className:"btn ghost lab-cont",onClick:n,children:Xn(e,"Weiter erkunden","Keep exploring")})]})};var tm=0,Rd=1,nm=2;var Yf=1,im=2,ki=3,Si=0,Vn=1,an=2,us=0,Hi=1,fs=2,Cd=3,Pd=4,sm=5,Fs=100,rm=101,am=102,om=103,lm=104,cm=200,hm=201,um=202,dm=203,Pc=204,Ic=205,fm=206,pm=207,mm=208,gm=209,xm=210,_m=211,ym=212,vm=213,bm=214,Lc=0,Nc=1,Dc=2,Mr=3,Uc=4,Fc=5,Oc=6,kc=7,$f=0,Mm=1,Sm=2,ds=0,Em=1,wm=2,Am=3,Tm=4,Rm=5,Cm=6,Pm=7,Id="attached",Im="detached",qf=300,Sr=301,Er=302,zc=303,Bc=304,fl=306,ks=1e3,zi=1001,ma=1002,Rn=1003,Zh=1004;var gr=1005;var Bn=1006,ha=1007;var Mi=1008;var Vi=1009,Kf=1010,Zf=1011,ga=1012,Jh=1013,zs=1014,di=1015,Ta=1016,jh=1017,Qh=1018,wr=1020,Jf=35902,jf=1021,Qf=1022,Hn=1023,ep=1024,tp=1025,_r=1026,Ar=1027,eu=1028,tu=1029,np=1030,nu=1031;var iu=1033,wo=33776,Ao=33777,To=33778,Ro=33779,Hc=35840,Vc=35841,Gc=35842,Wc=35843,Xc=36196,Yc=37492,$c=37496,qc=37808,Kc=37809,Zc=37810,Jc=37811,jc=37812,Qc=37813,eh=37814,th=37815,nh=37816,ih=37817,sh=37818,rh=37819,ah=37820,oh=37821,Co=36492,lh=36494,ch=36495,ip=36283,hh=36284,uh=36285,dh=36286;var Tr=2300,Rr=2301,$l=2302,Ld=2400,Nd=2401,Dd=2402,Lm=2500;var sp=0,pl=1,Ra=2,Nm=3200,Dm=3201;var rp=0,Um=1,ls="",hn="srgb",yn="srgb-linear",su="display-p3",ml="display-p3-linear",Io="linear",Qt="srgb",Lo="rec709",No="p3";var tr=7680;var Ud=519,Fm=512,Om=513,km=514,ap=515,zm=516,Bm=517,Hm=518,Vm=519,fh=35044,gl=35048;var Fd="300 es",Bi=2e3,Do=2001,ps=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Od=1234567,yr=Math.PI/180,Cr=180/Math.PI;function fi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]).toLowerCase()}function dn(i,e,t){return Math.max(e,Math.min(t,i))}function ru(i,e){return(i%e+e)%e}function Gm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Wm(i,e,t){return i!==e?(t-i)/(e-i):0}function ua(i,e,t){return(1-t)*i+t*e}function Xm(i,e,t,n){return ua(i,e,1-Math.exp(-t*n))}function Ym(i,e=1){return e-Math.abs(ru(i,e*2)-e)}function $m(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function qm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Km(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Zm(i,e){return i+Math.random()*(e-i)}function Jm(i){return i*(.5-Math.random())}function jm(i){i!==void 0&&(Od=i);let e=Od+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qm(i){return i*yr}function e0(i){return i*Cr}function t0(i){return(i&i-1)===0&&i!==0}function n0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function i0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function s0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ui(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ca={DEG2RAD:yr,RAD2DEG:Cr,generateUUID:fi,clamp:dn,euclideanModulo:ru,mapLinear:Gm,inverseLerp:Wm,lerp:ua,damp:Xm,pingpong:Ym,smoothstep:$m,smootherstep:qm,randInt:Km,randFloat:Zm,randFloatSpread:Jm,seededRandom:jm,degToRad:Qm,radToDeg:e0,isPowerOfTwo:t0,ceilPowerOfTwo:n0,floorPowerOfTwo:i0,setQuaternionFromProperEuler:s0,normalize:Gt,denormalize:ui},Ue=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},bt=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],b=s[1],_=s[4],y=s[7],I=s[2],A=s[5],R=s[8];return r[0]=a*x+o*b+l*I,r[3]=a*m+o*_+l*A,r[6]=a*p+o*y+l*R,r[1]=c*x+h*b+u*I,r[4]=c*m+h*_+u*A,r[7]=c*p+h*y+u*R,r[2]=d*x+f*b+g*I,r[5]=d*m+f*_+g*A,r[8]=d*p+f*y+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ql.makeScale(e,t)),this}rotate(e){return this.premultiply(ql.makeRotation(-e)),this}translate(e,t){return this.premultiply(ql.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ql=new bt;function op(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function r0(){let i=xa("canvas");return i.style.display="block",i}var kd={};function Po(i){i in kd||(kd[i]=!0,console.warn(i))}function a0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function o0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function l0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var zd=new bt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bd=new bt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ea={[yn]:{transfer:Io,primaries:Lo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[hn]:{transfer:Qt,primaries:Lo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ml]:{transfer:Io,primaries:No,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Bd),fromReference:i=>i.applyMatrix3(zd)},[su]:{transfer:Qt,primaries:No,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Bd),fromReference:i=>i.applyMatrix3(zd).convertLinearToSRGB()}},c0=new Set([yn,ml]),kt={enabled:!0,_workingColorSpace:yn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!c0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=ea[e].toReference,s=ea[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ea[i].primaries},getTransfer:function(i){return i===ls?Io:ea[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(ea[e].luminanceCoefficients)}};function vr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Kl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var nr,ph=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{nr===void 0&&(nr=xa("canvas")),nr.width=e.width,nr.height=e.height;let n=nr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=nr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=vr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vr(t[n]/255)*255):t[n]=vr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},h0=0,Uo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=fi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Zl(s[a].image)):r.push(Zl(s[a]))}else r=Zl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Zl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ph.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var u0=0,_n=class i extends ps{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=zi,s=zi,r=Bn,a=Mi,o=Hn,l=Vi,c=i.DEFAULT_ANISOTROPY,h=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=fi(),this.name="",this.source=new Uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ks:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ks:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=qf;_n.DEFAULT_ANISOTROPY=1;var Ht=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(f+1)/2,I=(p+1)/2,A=(h+d)/4,R=(u+x)/4,N=(g+m)/4;return _>y&&_>I?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=R/n):y>I?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=N/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=R/r,s=N/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mh=class extends ps{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new _n(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Uo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gi=class extends mh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Fo=class extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var gh=class extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*x,b=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let I=Math.sqrt(_),A=Math.atan2(I,p*b);m=Math.sin(m*A)/I,o=Math.sin(o*A)/I}let y=o*b;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+x*y,m===1-o){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jl.copy(this).projectOnVector(e),this.sub(Jl)}reflect(e){return this.sub(Jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jl=new P,Hd=new pi,Gn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,oi):oi.fromBufferAttribute(r,a),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$a.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$a.copy(n.boundingBox)),$a.applyMatrix4(e.matrixWorld),this.union($a)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),qa.subVectors(this.max,ta),ir.subVectors(e.a,ta),sr.subVectors(e.b,ta),rr.subVectors(e.c,ta),ns.subVectors(sr,ir),is.subVectors(rr,sr),Cs.subVectors(ir,rr);let t=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Cs.z,Cs.y,ns.z,0,-ns.x,is.z,0,-is.x,Cs.z,0,-Cs.x,-ns.y,ns.x,0,-is.y,is.x,0,-Cs.y,Cs.x,0];return!jl(t,ir,sr,rr,qa)||(t=[1,0,0,0,1,0,0,0,1],!jl(t,ir,sr,rr,qa))?!1:(Ka.crossVectors(ns,is),t=[Ka.x,Ka.y,Ka.z],jl(t,ir,sr,rr,qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Li=[new P,new P,new P,new P,new P,new P,new P,new P],oi=new P,$a=new Gn,ir=new P,sr=new P,rr=new P,ns=new P,is=new P,Cs=new P,ta=new P,qa=new P,Ka=new P,Ps=new P;function jl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ps.fromArray(i,r);let o=s.x*Math.abs(Ps.x)+s.y*Math.abs(Ps.y)+s.z*Math.abs(Ps.z),l=e.dot(Ps),c=t.dot(Ps),h=n.dot(Ps);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var d0=new Gn,na=new P,Ql=new P,qn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):d0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);let t=na.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(na,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(Ql)),this.expandByPoint(na.copy(e.center).sub(Ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ni=new P,ec=new P,Za=new P,ss=new P,tc=new P,Ja=new P,nc=new P,Pr=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ec.copy(e).add(t).multiplyScalar(.5),Za.copy(t).sub(e).normalize(),ss.copy(this.origin).sub(ec);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Za),o=ss.dot(this.direction),l=-ss.dot(Za),c=ss.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ec).addScaledVector(Za,d),f}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);let n=Ni.dot(this.direction),s=Ni.dot(Ni)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,n,s,r){tc.subVectors(t,e),Ja.subVectors(n,e),nc.crossVectors(tc,Ja);let a=this.direction.dot(nc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ss.subVectors(this.origin,e);let l=o*this.direction.dot(Ja.crossVectors(ss,Ja));if(l<0)return null;let c=o*this.direction.dot(tc.cross(ss));if(c<0||l+c>a)return null;let h=-o*ss.dot(nc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ct=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,x,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ar.setFromMatrixColumn(e,0).length(),r=1/ar.setFromMatrixColumn(e,1).length(),a=1/ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f0,e,p0)}lookAt(e,t,n){let s=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),rs.crossVectors(n,Yn),rs.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),rs.crossVectors(n,Yn)),rs.normalize(),ja.crossVectors(Yn,rs),s[0]=rs.x,s[4]=ja.x,s[8]=Yn.x,s[1]=rs.y,s[5]=ja.y,s[9]=Yn.y,s[2]=rs.z,s[6]=ja.z,s[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],b=n[3],_=n[7],y=n[11],I=n[15],A=s[0],R=s[4],N=s[8],D=s[12],v=s[1],S=s[5],B=s[9],W=s[13],Y=s[2],te=s[6],q=s[10],se=s[14],X=s[3],be=s[7],ge=s[11],Ee=s[15];return r[0]=a*A+o*v+l*Y+c*X,r[4]=a*R+o*S+l*te+c*be,r[8]=a*N+o*B+l*q+c*ge,r[12]=a*D+o*W+l*se+c*Ee,r[1]=h*A+u*v+d*Y+f*X,r[5]=h*R+u*S+d*te+f*be,r[9]=h*N+u*B+d*q+f*ge,r[13]=h*D+u*W+d*se+f*Ee,r[2]=g*A+x*v+m*Y+p*X,r[6]=g*R+x*S+m*te+p*be,r[10]=g*N+x*B+m*q+p*ge,r[14]=g*D+x*W+m*se+p*Ee,r[3]=b*A+_*v+y*Y+I*X,r[7]=b*R+_*S+y*te+I*be,r[11]=b*N+_*B+y*q+I*ge,r[15]=b*D+_*W+y*se+I*Ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+x*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],b=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,_=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,y=h*x*c-g*u*c+g*o*f-a*x*f-h*o*p+a*u*p,I=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,A=t*b+n*_+s*y+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return e[0]=b*R,e[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*R,e[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*R,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*R,e[4]=_*R,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*R,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*R,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*R,e[8]=y*R,e[9]=(g*u*r-h*x*r-g*n*f+t*x*f+h*n*p-t*u*p)*R,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*p+t*o*p)*R,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*R,e[12]=I*R,e[13]=(h*x*s-g*u*s+g*n*d-t*x*d-h*n*m+t*u*m)*R,e[14]=(g*o*s-a*x*s-g*n*l+t*x*l+a*n*m-t*o*m)*R,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,b=l*c,_=l*h,y=l*u,I=n.x,A=n.y,R=n.z;return s[0]=(1-(x+p))*I,s[1]=(f+y)*I,s[2]=(g-_)*I,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(d+p))*A,s[6]=(m+b)*A,s[7]=0,s[8]=(g+_)*R,s[9]=(m-b)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ar.set(s[0],s[1],s[2]).length(),a=ar.set(s[4],s[5],s[6]).length(),o=ar.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],li.copy(this);let c=1/r,h=1/a,u=1/o;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=u,li.elements[9]*=u,li.elements[10]*=u,t.setFromRotationMatrix(li),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Bi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(o===Bi)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Do)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Bi){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,f=(n+s)*h,g,x;if(o===Bi)g=(a+r)*u,x=-2*u;else if(o===Do)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ar=new P,li=new ct,f0=new P(0,0,0),p0=new P(1,1,1),rs=new P,ja=new P,Yn=new P,Vd=new ct,Gd=new pi,Ei=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(dn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gd.setFromEuler(this),this.setFromQuaternion(Gd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ei.DEFAULT_ORDER="XYZ";var Oo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},m0=0,Wd=new P,or=new pi,Di=new ct,Qa=new P,ia=new P,g0=new P,x0=new pi,Xd=new P(1,0,0),Yd=new P(0,1,0),$d=new P(0,0,1),qd={type:"added"},_0={type:"removed"},lr={type:"childadded",child:null},ic={type:"childremoved",child:null},on=class i extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new Ei,n=new pi,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new bt}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(Xd,e)}rotateY(e){return this.rotateOnAxis(Yd,e)}rotateZ(e){return this.rotateOnAxis($d,e)}translateOnAxis(e,t){return Wd.copy(e).applyQuaternion(this.quaternion),this.position.add(Wd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xd,e)}translateY(e){return this.translateOnAxis(Yd,e)}translateZ(e){return this.translateOnAxis($d,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qa.copy(e):Qa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(ia,Qa,this.up):Di.lookAt(Qa,ia,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),or.setFromRotationMatrix(Di),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qd),lr.child=e,this.dispatchEvent(lr),lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_0),ic.child=e,this.dispatchEvent(ic),ic.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qd),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,g0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,x0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};on.DEFAULT_UP=new P(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ci=new P,Ui=new P,sc=new P,Fi=new P,cr=new P,hr=new P,Kd=new P,rc=new P,ac=new P,oc=new P,lc=new Ht,cc=new Ht,hc=new Ht,cs=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ci.subVectors(e,t),s.cross(ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ci.subVectors(s,t),Ui.subVectors(n,t),sc.subVectors(e,t);let a=ci.dot(ci),o=ci.dot(Ui),l=ci.dot(sc),c=Ui.dot(Ui),h=Ui.dot(sc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fi.x),l.addScaledVector(a,Fi.y),l.addScaledVector(o,Fi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return lc.setScalar(0),cc.setScalar(0),hc.setScalar(0),lc.fromBufferAttribute(e,t),cc.fromBufferAttribute(e,n),hc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(lc,r.x),a.addScaledVector(cc,r.y),a.addScaledVector(hc,r.z),a}static isFrontFacing(e,t,n,s){return ci.subVectors(n,t),Ui.subVectors(e,t),ci.cross(Ui).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ci.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;cr.subVectors(s,n),hr.subVectors(r,n),rc.subVectors(e,n);let l=cr.dot(rc),c=hr.dot(rc);if(l<=0&&c<=0)return t.copy(n);ac.subVectors(e,s);let h=cr.dot(ac),u=hr.dot(ac);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(cr,a);oc.subVectors(e,r);let f=cr.dot(oc),g=hr.dot(oc);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(hr,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Kd.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Kd,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(cr,a).addScaledVector(hr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},eo={h:0,s:0,l:0};function uc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var tt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=kt.workingColorSpace){return this.r=e,this.g=t,this.b=n,kt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=kt.workingColorSpace){if(e=ru(e,1),t=dn(t,0,1),n=dn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=uc(a,r,e+1/3),this.g=uc(a,r,e),this.b=uc(a,r,e-1/3)}return kt.toWorkingColorSpace(this,s),this}setStyle(e,t=hn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){let n=lp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=Kl(e.r),this.g=Kl(e.g),this.b=Kl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return kt.fromWorkingColorSpace(Tn.copy(this),e),Math.round(dn(Tn.r*255,0,255))*65536+Math.round(dn(Tn.g*255,0,255))*256+Math.round(dn(Tn.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kt.workingColorSpace){kt.fromWorkingColorSpace(Tn.copy(this),t);let n=Tn.r,s=Tn.g,r=Tn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=kt.workingColorSpace){return kt.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=hn){kt.fromWorkingColorSpace(Tn.copy(this),e);let t=Tn.r,n=Tn.g,s=Tn.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(as),this.setHSL(as.h+e,as.s+t,as.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(as),e.getHSL(eo);let n=ua(as.h,eo.h,t),s=ua(as.s,eo.s,t),r=ua(as.l,eo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new tt;tt.NAMES=lp;var y0=0,Kn=class extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=Hi,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pc,this.blendDst=Ic,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pc&&(n.blendSrc=this.blendSrc),this.blendDst!==Ic&&(n.blendDst=this.blendDst),this.blendEquation!==Fs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ud&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ft=class extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=$f,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var cn=new P,to=new Ue,wt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fh,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)to.fromBufferAttribute(this,t),to.applyMatrix3(e),this.setXY(t,to.x,to.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fh&&(e.usage=this.usage),e}};var ko=class extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var zo=class extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Lt=class extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}},v0=0,Qn=new ct,dc=new on,ur=new P,$n=new Gn,sa=new Gn,xn=new P,Yt=class i extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(op(e)?zo:ko)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new bt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,n){return Qn.makeTranslation(e,t,n),this.applyMatrix4(Qn),this}scale(e,t,n){return Qn.makeScale(e,t,n),this.applyMatrix4(Qn),this}lookAt(e){return dc.lookAt(e),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];$n.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];sa.setFromBufferAttribute(o),this.morphTargetsRelative?(xn.addVectors($n.min,sa.min),$n.expandByPoint(xn),xn.addVectors($n.max,sa.max),$n.expandByPoint(xn)):($n.expandByPoint(sa.min),$n.expandByPoint(sa.max))}$n.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)xn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(xn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)xn.fromBufferAttribute(o,c),l&&(ur.fromBufferAttribute(e,c),xn.add(ur)),s=Math.max(s,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new P,l[N]=new P;let c=new P,h=new P,u=new P,d=new Ue,f=new Ue,g=new Ue,x=new P,m=new P;function p(N,D,v){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,N),f.fromBufferAttribute(r,D),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(S),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),o[N].add(x),o[D].add(x),o[v].add(x),l[N].add(m),l[D].add(m),l[v].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,D=b.length;N<D;++N){let v=b[N],S=v.start,B=v.count;for(let W=S,Y=S+B;W<Y;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let _=new P,y=new P,I=new P,A=new P;function R(N){I.fromBufferAttribute(s,N),A.copy(I);let D=o[N];_.copy(D),_.sub(I.multiplyScalar(I.dot(D))).normalize(),y.crossVectors(A,D);let S=y.dot(l[N])<0?-1:1;a.setXYZW(N,_.x,_.y,_.z,S)}for(let N=0,D=b.length;N<D;++N){let v=b[N],S=v.start,B=v.count;for(let W=S,Y=S+B;W<Y;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new wt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zd=new ct,Is=new Pr,no=new qn,Jd=new P,io=new P,so=new P,ro=new P,fc=new P,ao=new P,jd=new P,oo=new P,Ae=class extends on{constructor(e=new Yt,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ao.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(fc.fromBufferAttribute(u,e),a?ao.addScaledVector(fc,h):ao.addScaledVector(fc.sub(t),h))}t.add(ao)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),Is.copy(e.ray).recast(e.near),!(no.containsPoint(Is.origin)===!1&&(Is.intersectSphere(no,Jd)===null||Is.origin.distanceToSquared(Jd)>(e.far-e.near)**2))&&(Zd.copy(r).invert(),Is.copy(e.ray).applyMatrix4(Zd),!(n.boundingBox!==null&&Is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Is)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,I=_;y<I;y+=3){let A=o.getX(y),R=o.getX(y+1),N=o.getX(y+2);s=lo(this,p,e,n,c,h,u,A,R,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let b=o.getX(m),_=o.getX(m+1),y=o.getX(m+2);s=lo(this,a,e,n,c,h,u,b,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,I=_;y<I;y+=3){let A=y,R=y+1,N=y+2;s=lo(this,p,e,n,c,h,u,A,R,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let b=m,_=m+1,y=m+2;s=lo(this,a,e,n,c,h,u,b,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function b0(i,e,t,n,s,r,a,o){let l;if(e.side===Vn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Si,o),l===null)return null;oo.copy(o),oo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(oo);return c<t.near||c>t.far?null:{distance:c,point:oo.clone(),object:i}}function lo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,io),i.getVertexPosition(l,so),i.getVertexPosition(c,ro);let h=b0(i,e,t,n,io,so,ro,jd);if(h){let u=new P;cs.getBarycoord(jd,io,so,ro,u),s&&(h.uv=cs.getInterpolatedAttribute(s,o,l,c,u,new Ue)),r&&(h.uv1=cs.getInterpolatedAttribute(r,o,l,c,u,new Ue)),a&&(h.normal=cs.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};cs.getNormal(io,so,ro,d.normal),h.face=d,h.barycoord=u}return h}var tn=class i extends Yt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(u,2));function g(x,m,p,b,_,y,I,A,R,N,D){let v=y/R,S=I/N,B=y/2,W=I/2,Y=A/2,te=R+1,q=N+1,se=0,X=0,be=new P;for(let ge=0;ge<q;ge++){let Ee=ge*S-W;for(let _t=0;_t<te;_t++){let yt=_t*v-B;be[x]=yt*b,be[m]=Ee*_,be[p]=Y,c.push(be.x,be.y,be.z),be[x]=0,be[m]=0,be[p]=A>0?1:-1,h.push(be.x,be.y,be.z),u.push(_t/R),u.push(1-ge/N),se+=1}}for(let ge=0;ge<N;ge++)for(let Ee=0;Ee<R;Ee++){let _t=d+Ee+te*ge,yt=d+Ee+te*(ge+1),ne=d+(Ee+1)+te*(ge+1),he=d+(Ee+1)+te*ge;l.push(_t,yt,he),l.push(yt,ne,he),X+=6}o.addGroup(f,X,D),f+=X,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ir(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Nn(i){let e={};for(let t=0;t<i.length;t++){let n=Ir(i[t]);for(let s in n)e[s]=n[s]}return e}function M0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:kt.workingColorSpace}var S0={clone:Ir,merge:Nn},E0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zn=class extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E0,this.fragmentShader=w0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=M0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Bo=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},os=new P,Qd=new Ue,ef=new Ue,ln=class extends Bo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,Qd,ef),t.subVectors(ef,Qd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},dr=-90,fr=1,xh=class extends on{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(dr,fr,e,t);s.layers=this.layers,this.add(s);let r=new ln(dr,fr,e,t);r.layers=this.layers,this.add(r);let a=new ln(dr,fr,e,t);a.layers=this.layers,this.add(a);let o=new ln(dr,fr,e,t);o.layers=this.layers,this.add(o);let l=new ln(dr,fr,e,t);l.layers=this.layers,this.add(l);let c=new ln(dr,fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Do)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ho=class extends _n{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Sr,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_h=class extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ho(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new tn(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vn,blending:us});r.uniforms.tEquirect.value=t;let a=new Ae(s,r),o=t.minFilter;return t.minFilter===Mi&&(t.minFilter=Bn),new xh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},pc=new P,A0=new P,T0=new bt,hi=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=pc.subVectors(n,t).cross(A0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(pc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||T0.getNormalMatrix(e),s=this.coplanarPoint(pc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ls=new qn,co=new P,_a=class{constructor(e=new hi,t=new hi,n=new hi,s=new hi,r=new hi,a=new hi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],b=s[13],_=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,m-f,y-p).normalize(),n[1].setComponents(l+r,d+c,m+f,y+p).normalize(),n[2].setComponents(l+a,d+h,m+g,y+b).normalize(),n[3].setComponents(l-a,d-h,m-g,y-b).normalize(),n[4].setComponents(l-o,d-u,m-x,y-_).normalize(),t===Bi)n[5].setComponents(l+o,d+u,m+x,y+_).normalize();else if(t===Do)n[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){return Ls.center.set(0,0,0),Ls.radius=.7071067811865476,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(co.x=s.normal.x>0?e.max.x:e.min.x,co.y=s.normal.y>0?e.max.y:e.min.y,co.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(co)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hp(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function R0(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var wi=class i extends Yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let b=p*d-a;for(let _=0;_<c;_++){let y=_*u-r;g.push(y,-b,0),x.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let _=b+c*p,y=b+c*(p+1),I=b+1+c*(p+1),A=b+1+c*p;f.push(_,y,A),f.push(y,I,A)}this.setIndex(f),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},C0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P0=`#ifdef USE_ALPHAHASH
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
#endif`,I0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,D0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U0=`#ifdef USE_AOMAP
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
#endif`,F0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O0=`#ifdef USE_BATCHING
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
#endif`,k0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,V0=`#ifdef USE_IRIDESCENCE
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
#endif`,G0=`#ifdef USE_BUMPMAP
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
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,j0=`#define PI 3.141592653589793
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
} // validated`,Q0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eg=`vec3 transformedNormal = objectNormal;
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
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ag=`
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
}`,og=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cg=`#ifdef USE_ENVMAP
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
#endif`,hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gg=`#ifdef USE_GRADIENTMAP
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
}`,xg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_g=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vg=`uniform bool receiveShadow;
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
#endif`,bg=`#ifdef USE_ENVMAP
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
#endif`,Mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ag=`PhysicalMaterial material;
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
#endif`,Tg=`struct PhysicalMaterial {
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
}`,Rg=`
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
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ig=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ng=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ug=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Og=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kg=`#if defined( USE_POINTS_UV )
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
#endif`,zg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wg=`#ifdef USE_MORPHTARGETS
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
#endif`,Xg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$g=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jg=`#ifdef USE_NORMALMAP
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
#endif`,jg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f1=`float getShadowMask() {
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
}`,p1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m1=`#ifdef USE_SKINNING
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
#endif`,g1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x1=`#ifdef USE_SKINNING
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
#endif`,_1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,M1=`#ifdef USE_TRANSMISSION
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
#endif`,S1=`#ifdef USE_TRANSMISSION
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
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,R1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C1=`uniform sampler2D t2D;
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
}`,P1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`#include <common>
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
}`,U1=`#if DEPTH_PACKING == 3200
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
}`,F1=`#define DISTANCE
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
}`,O1=`#define DISTANCE
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
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`uniform float scale;
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
}`,H1=`uniform vec3 diffuse;
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
}`,V1=`#include <common>
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
}`,G1=`uniform vec3 diffuse;
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
}`,W1=`#define LAMBERT
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
}`,X1=`#define LAMBERT
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
}`,Y1=`#define MATCAP
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
}`,$1=`#define MATCAP
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
}`,q1=`#define NORMAL
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
}`,K1=`#define NORMAL
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
}`,Z1=`#define PHONG
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
}`,J1=`#define PHONG
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
}`,j1=`#define STANDARD
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
}`,Q1=`#define STANDARD
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
}`,ex=`#define TOON
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
}`,tx=`#define TOON
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
}`,nx=`uniform float size;
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
}`,ix=`uniform vec3 diffuse;
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
}`,sx=`#include <common>
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
}`,rx=`uniform vec3 color;
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
}`,ax=`uniform float rotation;
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
}`,ox=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:C0,alphahash_pars_fragment:P0,alphamap_fragment:I0,alphamap_pars_fragment:L0,alphatest_fragment:N0,alphatest_pars_fragment:D0,aomap_fragment:U0,aomap_pars_fragment:F0,batching_pars_vertex:O0,batching_vertex:k0,begin_vertex:z0,beginnormal_vertex:B0,bsdfs:H0,iridescence_fragment:V0,bumpmap_pars_fragment:G0,clipping_planes_fragment:W0,clipping_planes_pars_fragment:X0,clipping_planes_pars_vertex:Y0,clipping_planes_vertex:$0,color_fragment:q0,color_pars_fragment:K0,color_pars_vertex:Z0,color_vertex:J0,common:j0,cube_uv_reflection_fragment:Q0,defaultnormal_vertex:eg,displacementmap_pars_vertex:tg,displacementmap_vertex:ng,emissivemap_fragment:ig,emissivemap_pars_fragment:sg,colorspace_fragment:rg,colorspace_pars_fragment:ag,envmap_fragment:og,envmap_common_pars_fragment:lg,envmap_pars_fragment:cg,envmap_pars_vertex:hg,envmap_physical_pars_fragment:bg,envmap_vertex:ug,fog_vertex:dg,fog_pars_vertex:fg,fog_fragment:pg,fog_pars_fragment:mg,gradientmap_pars_fragment:gg,lightmap_pars_fragment:xg,lights_lambert_fragment:_g,lights_lambert_pars_fragment:yg,lights_pars_begin:vg,lights_toon_fragment:Mg,lights_toon_pars_fragment:Sg,lights_phong_fragment:Eg,lights_phong_pars_fragment:wg,lights_physical_fragment:Ag,lights_physical_pars_fragment:Tg,lights_fragment_begin:Rg,lights_fragment_maps:Cg,lights_fragment_end:Pg,logdepthbuf_fragment:Ig,logdepthbuf_pars_fragment:Lg,logdepthbuf_pars_vertex:Ng,logdepthbuf_vertex:Dg,map_fragment:Ug,map_pars_fragment:Fg,map_particle_fragment:Og,map_particle_pars_fragment:kg,metalnessmap_fragment:zg,metalnessmap_pars_fragment:Bg,morphinstance_vertex:Hg,morphcolor_vertex:Vg,morphnormal_vertex:Gg,morphtarget_pars_vertex:Wg,morphtarget_vertex:Xg,normal_fragment_begin:Yg,normal_fragment_maps:$g,normal_pars_fragment:qg,normal_pars_vertex:Kg,normal_vertex:Zg,normalmap_pars_fragment:Jg,clearcoat_normal_fragment_begin:jg,clearcoat_normal_fragment_maps:Qg,clearcoat_pars_fragment:e1,iridescence_pars_fragment:t1,opaque_fragment:n1,packing:i1,premultiplied_alpha_fragment:s1,project_vertex:r1,dithering_fragment:a1,dithering_pars_fragment:o1,roughnessmap_fragment:l1,roughnessmap_pars_fragment:c1,shadowmap_pars_fragment:h1,shadowmap_pars_vertex:u1,shadowmap_vertex:d1,shadowmask_pars_fragment:f1,skinbase_vertex:p1,skinning_pars_vertex:m1,skinning_vertex:g1,skinnormal_vertex:x1,specularmap_fragment:_1,specularmap_pars_fragment:y1,tonemapping_fragment:v1,tonemapping_pars_fragment:b1,transmission_fragment:M1,transmission_pars_fragment:S1,uv_pars_fragment:E1,uv_pars_vertex:w1,uv_vertex:A1,worldpos_vertex:T1,background_vert:R1,background_frag:C1,backgroundCube_vert:P1,backgroundCube_frag:I1,cube_vert:L1,cube_frag:N1,depth_vert:D1,depth_frag:U1,distanceRGBA_vert:F1,distanceRGBA_frag:O1,equirect_vert:k1,equirect_frag:z1,linedashed_vert:B1,linedashed_frag:H1,meshbasic_vert:V1,meshbasic_frag:G1,meshlambert_vert:W1,meshlambert_frag:X1,meshmatcap_vert:Y1,meshmatcap_frag:$1,meshnormal_vert:q1,meshnormal_frag:K1,meshphong_vert:Z1,meshphong_frag:J1,meshphysical_vert:j1,meshphysical_frag:Q1,meshtoon_vert:ex,meshtoon_frag:tx,points_vert:nx,points_frag:ix,shadow_vert:sx,shadow_frag:rx,sprite_vert:ax,sprite_frag:ox},Re={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bt}},envmap:{envMap:{value:null},envMapRotation:{value:new bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bt},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}}},bi={basic:{uniforms:Nn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Nn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new tt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Nn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Nn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Nn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new tt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Nn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Nn([Re.points,Re.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Nn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Nn([Re.common,Re.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Nn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Nn([Re.sprite,Re.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new bt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:Nn([Re.common,Re.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:Nn([Re.lights,Re.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};bi.physical={uniforms:Nn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bt},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bt},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bt},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bt},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bt},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};var ho={r:0,b:0,g:0},Ns=new Ei,lx=new ct;function cx(i,e,t,n,s,r,a){let o=new tt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?t:e).get(_)),_}function x(b){let _=!1,y=g(b);y===null?p(o,l):y&&y.isColor&&(p(y,1),_=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,_){let y=g(_);y&&(y.isCubeTexture||y.mapping===fl)?(h===void 0&&(h=new Ae(new tn(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Ir(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ns.copy(_.backgroundRotation),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(lx.makeRotationFromEuler(Ns)),h.material.toneMapped=kt.getTransfer(y.colorSpace)!==Qt,(u!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ae(new wi(2,2),new Zn({name:"BackgroundMaterial",uniforms:Ir(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=kt.getTransfer(y.colorSpace)!==Qt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,_){b.getRGB(ho,cp(i)),n.buffers.color.setClear(ho.r,ho.g,ho.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(b,_=1){o.set(b),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:x,addToRenderList:m}}function hx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(v,S,B,W,Y){let te=!1,q=u(W,B,S);r!==q&&(r=q,c(r.object)),te=f(v,W,B,Y),te&&g(v,W,B,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,y(v,S,B,W),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,S,B){let W=B.wireframe===!0,Y=n[v.id];Y===void 0&&(Y={},n[v.id]=Y);let te=Y[S.id];te===void 0&&(te={},Y[S.id]=te);let q=te[W];return q===void 0&&(q=d(l()),te[W]=q),q}function d(v){let S=[],B=[],W=[];for(let Y=0;Y<t;Y++)S[Y]=0,B[Y]=0,W[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:B,attributeDivisors:W,object:v,attributes:{},index:null}}function f(v,S,B,W){let Y=r.attributes,te=S.attributes,q=0,se=B.getAttributes();for(let X in se)if(se[X].location>=0){let ge=Y[X],Ee=te[X];if(Ee===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(Ee=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(Ee=v.instanceColor)),ge===void 0||ge.attribute!==Ee||Ee&&ge.data!==Ee.data)return!0;q++}return r.attributesNum!==q||r.index!==W}function g(v,S,B,W){let Y={},te=S.attributes,q=0,se=B.getAttributes();for(let X in se)if(se[X].location>=0){let ge=te[X];ge===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(ge=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(ge=v.instanceColor));let Ee={};Ee.attribute=ge,ge&&ge.data&&(Ee.data=ge.data),Y[X]=Ee,q++}r.attributes=Y,r.attributesNum=q,r.index=W}function x(){let v=r.newAttributes;for(let S=0,B=v.length;S<B;S++)v[S]=0}function m(v){p(v,0)}function p(v,S){let B=r.newAttributes,W=r.enabledAttributes,Y=r.attributeDivisors;B[v]=1,W[v]===0&&(i.enableVertexAttribArray(v),W[v]=1),Y[v]!==S&&(i.vertexAttribDivisor(v,S),Y[v]=S)}function b(){let v=r.newAttributes,S=r.enabledAttributes;for(let B=0,W=S.length;B<W;B++)S[B]!==v[B]&&(i.disableVertexAttribArray(B),S[B]=0)}function _(v,S,B,W,Y,te,q){q===!0?i.vertexAttribIPointer(v,S,B,Y,te):i.vertexAttribPointer(v,S,B,W,Y,te)}function y(v,S,B,W){x();let Y=W.attributes,te=B.getAttributes(),q=S.defaultAttributeValues;for(let se in te){let X=te[se];if(X.location>=0){let be=Y[se];if(be===void 0&&(se==="instanceMatrix"&&v.instanceMatrix&&(be=v.instanceMatrix),se==="instanceColor"&&v.instanceColor&&(be=v.instanceColor)),be!==void 0){let ge=be.normalized,Ee=be.itemSize,_t=e.get(be);if(_t===void 0)continue;let yt=_t.buffer,ne=_t.type,he=_t.bytesPerElement,Pe=ne===i.INT||ne===i.UNSIGNED_INT||be.gpuType===Jh;if(be.isInterleavedBufferAttribute){let Ie=be.data,st=Ie.stride,Oe=be.offset;if(Ie.isInstancedInterleavedBuffer){for(let pt=0;pt<X.locationSize;pt++)p(X.location+pt,Ie.meshPerAttribute);v.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let pt=0;pt<X.locationSize;pt++)m(X.location+pt);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let pt=0;pt<X.locationSize;pt++)_(X.location+pt,Ee/X.locationSize,ne,ge,st*he,(Oe+Ee/X.locationSize*pt)*he,Pe)}else{if(be.isInstancedBufferAttribute){for(let Ie=0;Ie<X.locationSize;Ie++)p(X.location+Ie,be.meshPerAttribute);v.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Ie=0;Ie<X.locationSize;Ie++)m(X.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let Ie=0;Ie<X.locationSize;Ie++)_(X.location+Ie,Ee/X.locationSize,ne,ge,Ee*he,Ee/X.locationSize*Ie*he,Pe)}}else if(q!==void 0){let ge=q[se];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(X.location,ge);break;case 3:i.vertexAttrib3fv(X.location,ge);break;case 4:i.vertexAttrib4fv(X.location,ge);break;default:i.vertexAttrib1fv(X.location,ge)}}}}b()}function I(){N();for(let v in n){let S=n[v];for(let B in S){let W=S[B];for(let Y in W)h(W[Y].object),delete W[Y];delete S[B]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;let S=n[v.id];for(let B in S){let W=S[B];for(let Y in W)h(W[Y].object),delete W[Y];delete S[B]}delete n[v.id]}function R(v){for(let S in n){let B=n[S];if(B[v.id]===void 0)continue;let W=B[v.id];for(let Y in W)h(W[Y].object),delete W[Y];delete B[v.id]}}function N(){D(),a=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:D,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function ux(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x];for(let x=0;x<d.length;x++)t.update(g,n,d[x])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function dx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Hn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let N=R===Ta&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Vi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==di&&!N)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){let R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:I,maxSamples:A}}function fx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new hi,o=new bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,_=b*4,y=p.clippingState||null;l.value=y,y=h(g,d,_,f);for(let I=0;I!==_;++I)y[I]=t[I];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=f;_!==x;++_,y+=4)a.copy(u[_]).applyMatrix4(b,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function px(i){let e=new WeakMap;function t(a,o){return o===zc?a.mapping=Sr:o===Bc&&(a.mapping=Er),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===zc||o===Bc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new _h(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Lr=class extends Bo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xr=4,tf=[.125,.215,.35,.446,.526,.582],Os=20,mc=new Lr,nf=new tt,gc=null,xc=0,_c=0,yc=!1,Us=(1+Math.sqrt(5))/2,pr=1/Us,sf=[new P(-Us,pr,0),new P(Us,pr,0),new P(-pr,0,Us),new P(pr,0,Us),new P(0,Us,-pr),new P(0,Us,pr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Vo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){gc=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gc,xc,_c),this._renderer.xr.enabled=yc,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gc=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Ta,format:Hn,colorSpace:yn,depthBuffer:!1},s=rf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mx(r)),this._blurMaterial=gx(r,e,t)}return s}_compileMaterial(e){let t=new Ae(this._lodPlanes[0],e);this._renderer.compile(t,mc)}_sceneToCubeUV(e,t,n,s){let o=new ln(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(nf),h.toneMapping=ds,h.autoClear=!1;let f=new Ft({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),g=new Ae(new tn,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(nf),x=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let _=this._cubeSize;uo(s,b*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Sr||e.mapping===Er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=of()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=af());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ae(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;uo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,mc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=sf[(s-r-1)%sf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ae(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Os-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Os;m>Os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Os}`);let p=[],b=0;for(let R=0;R<Os;++R){let N=R/x,D=Math.exp(-N*N/2);p.push(D),R===0?b+=D:R<m&&(b+=2*D)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let y=this._sizeLods[s],I=3*y*(s>_-xr?s-_+xr:0),A=4*(this._cubeSize-y);uo(t,I,A,3*y,2*y),l.setRenderTarget(t),l.render(u,mc)}};function mx(i){let e=[],t=[],n=[],s=i,r=i-xr+1+tf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-xr?l=tf[a-i+xr-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,b=new Float32Array(x*g*f),_=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let A=0;A<f;A++){let R=A%3*2/3-1,N=A>2?0:-1,D=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];b.set(D,x*g*A),_.set(d,m*g*A);let v=[A,A,A,A,A,A];y.set(v,p*g*A)}let I=new Yt;I.setAttribute("position",new wt(b,x)),I.setAttribute("uv",new wt(_,m)),I.setAttribute("faceIndex",new wt(y,p)),e.push(I),s>xr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rf(i,e,t){let n=new Gi(i,e,t);return n.texture.mapping=fl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function uo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function gx(i,e,t){let n=new Float32Array(Os),s=new P(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:au(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function af(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:au(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function of(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function au(){return`

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
	`}function xx(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===zc||l===Bc,h=l===Sr||l===Er;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Vo(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Vo(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function _x(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Po("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function yx(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let b=f.array;x=f.version;for(let _=0,y=b.length;_<y;_+=3){let I=b[_+0],A=b[_+1],R=b[_+2];d.push(I,A,A,R,R,I)}}else if(g!==void 0){let b=g.array;x=g.version;for(let _=0,y=b.length/3-1;_<y;_+=3){let I=_+0,A=_+1,R=_+2;d.push(I,A,A,R,R,I)}}else return;let m=new(op(d)?zo:ko)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function vx(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b];for(let b=0;b<x.length;b++)t.update(p,n,x[b])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function bx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Mx(i,e,t){let n=new WeakMap,s=new Ht;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let D=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let y=o.attributes.position.count*_,I=1;y>e.maxTextureSize&&(I=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*I*4*u),R=new Fo(A,y,I,u);R.type=di,R.needsUpdate=!0;let N=_*4;for(let v=0;v<u;v++){let S=m[v],B=p[v],W=b[v],Y=y*I*4*v;for(let te=0;te<S.count;te++){let q=te*N;f===!0&&(s.fromBufferAttribute(S,te),A[Y+q+0]=s.x,A[Y+q+1]=s.y,A[Y+q+2]=s.z,A[Y+q+3]=0),g===!0&&(s.fromBufferAttribute(B,te),A[Y+q+4]=s.x,A[Y+q+5]=s.y,A[Y+q+6]=s.z,A[Y+q+7]=0),x===!0&&(s.fromBufferAttribute(W,te),A[Y+q+8]=s.x,A[Y+q+9]=s.y,A[Y+q+10]=s.z,A[Y+q+11]=W.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new Ue(y,I)},n.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Sx(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Go=class extends _n{constructor(e,t,n,s,r,a,o,l,c,h=_r){if(h!==_r&&h!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===_r&&(n=zs),n===void 0&&h===Ar&&(n=wr),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Rn,this.minFilter=l!==void 0?l:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},up=new _n,lf=new Go(1,1),dp=new Fo,fp=new gh,pp=new Ho,cf=[],hf=[],uf=new Float32Array(16),df=new Float32Array(9),ff=new Float32Array(4);function Hr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=cf[s];if(r===void 0&&(r=new Float32Array(s),cf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function fn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xl(i,e){let t=hf[e];t===void 0&&(t=new Int32Array(e),hf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ex(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2fv(this.addr,e),pn(t,e)}}function Ax(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;i.uniform3fv(this.addr,e),pn(t,e)}}function Tx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4fv(this.addr,e),pn(t,e)}}function Rx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;ff.set(n),i.uniformMatrix2fv(this.addr,!1,ff),pn(t,n)}}function Cx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;df.set(n),i.uniformMatrix3fv(this.addr,!1,df),pn(t,n)}}function Px(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;uf.set(n),i.uniformMatrix4fv(this.addr,!1,uf),pn(t,n)}}function Ix(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2iv(this.addr,e),pn(t,e)}}function Nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;i.uniform3iv(this.addr,e),pn(t,e)}}function Dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4iv(this.addr,e),pn(t,e)}}function Ux(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Fx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2uiv(this.addr,e),pn(t,e)}}function Ox(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;i.uniform3uiv(this.addr,e),pn(t,e)}}function kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4uiv(this.addr,e),pn(t,e)}}function zx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lf.compareFunction=ap,r=lf):r=up,t.setTexture2D(e||r,s)}function Bx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||fp,s)}function Hx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||pp,s)}function Vx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||dp,s)}function Gx(i){switch(i){case 5126:return Ex;case 35664:return wx;case 35665:return Ax;case 35666:return Tx;case 35674:return Rx;case 35675:return Cx;case 35676:return Px;case 5124:case 35670:return Ix;case 35667:case 35671:return Lx;case 35668:case 35672:return Nx;case 35669:case 35673:return Dx;case 5125:return Ux;case 36294:return Fx;case 36295:return Ox;case 36296:return kx;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return Bx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return Vx}}function Wx(i,e){i.uniform1fv(this.addr,e)}function Xx(i,e){let t=Hr(e,this.size,2);i.uniform2fv(this.addr,t)}function Yx(i,e){let t=Hr(e,this.size,3);i.uniform3fv(this.addr,t)}function $x(i,e){let t=Hr(e,this.size,4);i.uniform4fv(this.addr,t)}function qx(i,e){let t=Hr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Kx(i,e){let t=Hr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Zx(i,e){let t=Hr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Jx(i,e){i.uniform1iv(this.addr,e)}function jx(i,e){i.uniform2iv(this.addr,e)}function Qx(i,e){i.uniform3iv(this.addr,e)}function e_(i,e){i.uniform4iv(this.addr,e)}function t_(i,e){i.uniform1uiv(this.addr,e)}function n_(i,e){i.uniform2uiv(this.addr,e)}function i_(i,e){i.uniform3uiv(this.addr,e)}function s_(i,e){i.uniform4uiv(this.addr,e)}function r_(i,e,t){let n=this.cache,s=e.length,r=xl(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||up,r[a])}function a_(i,e,t){let n=this.cache,s=e.length,r=xl(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||fp,r[a])}function o_(i,e,t){let n=this.cache,s=e.length,r=xl(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||pp,r[a])}function l_(i,e,t){let n=this.cache,s=e.length,r=xl(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),pn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||dp,r[a])}function c_(i){switch(i){case 5126:return Wx;case 35664:return Xx;case 35665:return Yx;case 35666:return $x;case 35674:return qx;case 35675:return Kx;case 35676:return Zx;case 5124:case 35670:return Jx;case 35667:case 35671:return jx;case 35668:case 35672:return Qx;case 35669:case 35673:return e_;case 5125:return t_;case 36294:return n_;case 36295:return i_;case 36296:return s_;case 35678:case 36198:case 36298:case 36306:case 35682:return r_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return o_;case 36289:case 36303:case 36311:case 36292:return l_}}var yh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gx(t.type)}},vh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=c_(t.type)}},bh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},vc=/(\w+)(\])?(\[|\.)?/g;function pf(i,e){i.seq.push(e),i.map[e.id]=e}function h_(i,e,t){let n=i.name,s=n.length;for(vc.lastIndex=0;;){let r=vc.exec(n),a=vc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){pf(t,c===void 0?new yh(o,i,e):new vh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new bh(o),pf(t,u)),t=u}}}var br=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);h_(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function mf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var u_=37297,d_=0;function f_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function p_(i){let e=kt.getPrimaries(kt.workingColorSpace),t=kt.getPrimaries(i),n;switch(e===t?n="":e===No&&t===Lo?n="LinearDisplayP3ToLinearSRGB":e===Lo&&t===No&&(n="LinearSRGBToLinearDisplayP3"),i){case yn:case ml:return[n,"LinearTransferOETF"];case hn:case su:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function gf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+f_(i.getShaderSource(e),a)}else return s}function m_(i,e){let t=p_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function g_(i,e){let t;switch(e){case Em:t="Linear";break;case wm:t="Reinhard";break;case Am:t="Cineon";break;case Tm:t="ACESFilmic";break;case Cm:t="AgX";break;case Pm:t="Neutral";break;case Rm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fo=new P;function x_(){kt.getLuminanceCoefficients(fo);let i=fo.x.toFixed(4),e=fo.y.toFixed(4),t=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function __(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function y_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function v_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ca(i){return i!==""}function xf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _f(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var b_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(i){return i.replace(b_,S_)}var M_=new Map;function S_(i,e){let t=vt[e];if(t===void 0){let n=M_.get(e);if(n!==void 0)t=vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Mh(t)}var E_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yf(i){return i.replace(E_,w_)}function w_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function A_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===im?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function T_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Sr:case Er:e="ENVMAP_TYPE_CUBE";break;case fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function R_(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Er&&(e="ENVMAP_MODE_REFRACTION"),e}function C_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $f:e="ENVMAP_BLENDING_MULTIPLY";break;case Mm:e="ENVMAP_BLENDING_MIX";break;case Sm:e="ENVMAP_BLENDING_ADD";break}return e}function P_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function I_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=A_(t),c=T_(t),h=R_(t),u=C_(t),d=P_(t),f=__(t),g=y_(r),x=s.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ca).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ca).join(`
`),p.length>0&&(p+=`
`)):(m=[vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),p=[vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ds?"#define TONE_MAPPING":"",t.toneMapping!==ds?vt.tonemapping_pars_fragment:"",t.toneMapping!==ds?g_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,m_("linearToOutputTexel",t.outputColorSpace),x_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ca).join(`
`)),a=Mh(a),a=xf(a,t),a=_f(a,t),o=Mh(o),o=xf(o,t),o=_f(o,t),a=yf(a),o=yf(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Fd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=b+m+a,y=b+p+o,I=mf(s,s.VERTEX_SHADER,_),A=mf(s,s.FRAGMENT_SHADER,y);s.attachShader(x,I),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(S){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(x).trim(),W=s.getShaderInfoLog(I).trim(),Y=s.getShaderInfoLog(A).trim(),te=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,I,A);else{let se=gf(s,I,"vertex"),X=gf(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+B+`
`+se+`
`+X)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(W===""||Y==="")&&(q=!1);q&&(S.diagnostics={runnable:te,programLog:B,vertexShader:{log:W,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(I),s.deleteShader(A),N=new br(s,x),D=v_(s,x)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let D;this.getAttributes=function(){return D===void 0&&R(this),D};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,u_)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=A,this}var L_=0,Sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Eh(e),t.set(e,n)),n}},Eh=class{constructor(e){this.id=L_++,this.code=e,this.usedTimes=0}};function N_(i,e,t,n,s,r,a){let o=new Oo,l=new Sh,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,S,B,W,Y){let te=W.fog,q=Y.geometry,se=v.isMeshStandardMaterial?W.environment:null,X=(v.isMeshStandardMaterial?t:e).get(v.envMap||se),be=X&&X.mapping===fl?X.image.height:null,ge=x[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let Ee=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,_t=Ee!==void 0?Ee.length:0,yt=0;q.morphAttributes.position!==void 0&&(yt=1),q.morphAttributes.normal!==void 0&&(yt=2),q.morphAttributes.color!==void 0&&(yt=3);let ne,he,Pe,Ie;if(ge){let nn=bi[ge];ne=nn.vertexShader,he=nn.fragmentShader}else ne=v.vertexShader,he=v.fragmentShader,l.update(v),Pe=l.getVertexShaderID(v),Ie=l.getFragmentShaderID(v);let st=i.getRenderTarget(),Oe=Y.isInstancedMesh===!0,pt=Y.isBatchedMesh===!0,Et=!!v.map,Xe=!!v.matcap,F=!!X,un=!!v.aoMap,mt=!!v.lightMap,Tt=!!v.bumpMap,He=!!v.normalMap,ke=!!v.displacementMap,at=!!v.emissiveMap,C=!!v.metalnessMap,M=!!v.roughnessMap,z=v.anisotropy>0,Q=v.clearcoat>0,ce=v.dispersion>0,j=v.iridescence>0,Se=v.sheen>0,ve=v.transmission>0,Te=z&&!!v.anisotropyMap,je=Q&&!!v.clearcoatMap,ue=Q&&!!v.clearcoatNormalMap,Le=Q&&!!v.clearcoatRoughnessMap,Qe=j&&!!v.iridescenceMap,qe=j&&!!v.iridescenceThicknessMap,ze=Se&&!!v.sheenColorMap,O=Se&&!!v.sheenRoughnessMap,oe=!!v.specularMap,Je=!!v.specularColorMap,U=!!v.specularIntensityMap,xe=ve&&!!v.transmissionMap,Z=ve&&!!v.thicknessMap,re=!!v.gradientMap,le=!!v.alphaMap,Ce=v.alphaTest>0,Mt=!!v.alphaHash,zt=!!v.extensions,Jt=ds;v.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Jt=i.toneMapping);let St={shaderID:ge,shaderType:v.type,shaderName:v.name,vertexShader:ne,fragmentShader:he,defines:v.defines,customVertexShaderID:Pe,customFragmentShaderID:Ie,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:pt,batchingColor:pt&&Y._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&Y.instanceColor!==null,instancingMorph:Oe&&Y.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:yn,alphaToCoverage:!!v.alphaToCoverage,map:Et,matcap:Xe,envMap:F,envMapMode:F&&X.mapping,envMapCubeUVHeight:be,aoMap:un,lightMap:mt,bumpMap:Tt,normalMap:He,displacementMap:f&&ke,emissiveMap:at,normalMapObjectSpace:He&&v.normalMapType===Um,normalMapTangentSpace:He&&v.normalMapType===rp,metalnessMap:C,roughnessMap:M,anisotropy:z,anisotropyMap:Te,clearcoat:Q,clearcoatMap:je,clearcoatNormalMap:ue,clearcoatRoughnessMap:Le,dispersion:ce,iridescence:j,iridescenceMap:Qe,iridescenceThicknessMap:qe,sheen:Se,sheenColorMap:ze,sheenRoughnessMap:O,specularMap:oe,specularColorMap:Je,specularIntensityMap:U,transmission:ve,transmissionMap:xe,thicknessMap:Z,gradientMap:re,opaque:v.transparent===!1&&v.blending===Hi&&v.alphaToCoverage===!1,alphaMap:le,alphaTest:Ce,alphaHash:Mt,combine:v.combine,mapUv:Et&&m(v.map.channel),aoMapUv:un&&m(v.aoMap.channel),lightMapUv:mt&&m(v.lightMap.channel),bumpMapUv:Tt&&m(v.bumpMap.channel),normalMapUv:He&&m(v.normalMap.channel),displacementMapUv:ke&&m(v.displacementMap.channel),emissiveMapUv:at&&m(v.emissiveMap.channel),metalnessMapUv:C&&m(v.metalnessMap.channel),roughnessMapUv:M&&m(v.roughnessMap.channel),anisotropyMapUv:Te&&m(v.anisotropyMap.channel),clearcoatMapUv:je&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:O&&m(v.sheenRoughnessMap.channel),specularMapUv:oe&&m(v.specularMap.channel),specularColorMapUv:Je&&m(v.specularColorMap.channel),specularIntensityMapUv:U&&m(v.specularIntensityMap.channel),transmissionMapUv:xe&&m(v.transmissionMap.channel),thicknessMapUv:Z&&m(v.thicknessMap.channel),alphaMapUv:le&&m(v.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(He||z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!q.attributes.uv&&(Et||le),fog:!!te,useFog:v.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:Y.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:yt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Jt,decodeVideoTexture:Et&&v.map.isVideoTexture===!0&&kt.getTransfer(v.map.colorSpace)===Qt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===an,flipSided:v.side===Vn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:zt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&v.extensions.multiDraw===!0||pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function b(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let B in v.defines)S.push(B),S.push(v.defines[B]);return v.isRawShaderMaterial===!1&&(_(S,v),y(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function _(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function y(v,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),v.push(o.mask)}function I(v){let S=x[v.type],B;if(S){let W=bi[S];B=S0.clone(W.uniforms)}else B=v.uniforms;return B}function A(v,S){let B;for(let W=0,Y=h.length;W<Y;W++){let te=h[W];if(te.cacheKey===S){B=te,++B.usedTimes;break}}return B===void 0&&(B=new I_(i,S,v,r),h.push(B)),B}function R(v){if(--v.usedTimes===0){let S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),v.destroy()}}function N(v){l.remove(v)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:I,acquireProgram:A,releaseProgram:R,releaseShaderCache:N,programs:h,dispose:D}}function D_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function U_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Mf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,g,x,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||U_),n.length>1&&n.sort(d||bf),s.length>1&&s.sort(d||bf)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function F_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Mf,i.set(n,[a])):s>=r.length?(a=new Mf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function O_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new tt};break;case"SpotLight":t={position:new P,direction:new P,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function k_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var z_=0;function B_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function H_(i){let e=new O_,t=k_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new ct,a=new ct;function o(c){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,b=0,_=0,y=0,I=0,A=0,R=0;c.sort(B_);for(let D=0,v=c.length;D<v;D++){let S=c[D],B=S.color,W=S.intensity,Y=S.distance,te=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=B.r*W,u+=B.g*W,d+=B.b*W;else if(S.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(S.sh.coefficients[q],W);R++}else if(S.isDirectionalLight){let q=e.get(S);if(q.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let se=S.shadow,X=t.get(S);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=te,n.directionalShadowMatrix[f]=S.shadow.matrix,b++}n.directional[f]=q,f++}else if(S.isSpotLight){let q=e.get(S);q.position.setFromMatrixPosition(S.matrixWorld),q.color.copy(B).multiplyScalar(W),q.distance=Y,q.coneCos=Math.cos(S.angle),q.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),q.decay=S.decay,n.spot[x]=q;let se=S.shadow;if(S.map&&(n.spotLightMap[I]=S.map,I++,se.updateMatrices(S),S.castShadow&&A++),n.spotLightMatrix[x]=se.matrix,S.castShadow){let X=t.get(S);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=te,y++}x++}else if(S.isRectAreaLight){let q=e.get(S);q.color.copy(B).multiplyScalar(W),q.halfWidth.set(S.width*.5,0,0),q.halfHeight.set(0,S.height*.5,0),n.rectArea[m]=q,m++}else if(S.isPointLight){let q=e.get(S);if(q.color.copy(S.color).multiplyScalar(S.intensity),q.distance=S.distance,q.decay=S.decay,S.castShadow){let se=S.shadow,X=t.get(S);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,X.shadowCameraNear=se.camera.near,X.shadowCameraFar=se.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=te,n.pointShadowMatrix[g]=S.shadow.matrix,_++}n.point[g]=q,g++}else if(S.isHemisphereLight){let q=e.get(S);q.skyColor.copy(S.color).multiplyScalar(W),q.groundColor.copy(S.groundColor).multiplyScalar(W),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let N=n.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==b||N.numPointShadows!==_||N.numSpotShadows!==y||N.numSpotMaps!==I||N.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,N.directionalLength=f,N.pointLength=g,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=b,N.numPointShadows=_,N.numSpotShadows=y,N.numSpotMaps=I,N.numLightProbes=R,n.version=z_++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let _=c[p];if(_.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(_.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Sf(i){let e=new H_(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function V_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Sf(i),e.set(s,[o])):r>=a.length?(o=new Sf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var wh=class extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ah=class extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},G_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W_=`uniform sampler2D shadow_pass;
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
}`;function X_(i,e,t){let n=new _a,s=new Ue,r=new Ue,a=new Ht,o=new wh({depthPacking:Dm}),l=new Ah,c={},h=t.maxTextureSize,u={[Si]:Vn,[Vn]:Si,[an]:an},d=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:G_,fragmentShader:W_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Yt;g.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ae(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yf;let p=this.type;this.render=function(A,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let D=i.getRenderTarget(),v=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),B=i.state;B.setBlending(us),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let W=p!==ki&&this.type===ki,Y=p===ki&&this.type!==ki;for(let te=0,q=A.length;te<q;te++){let se=A[te],X=se.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let be=X.getFrameExtents();if(s.multiply(be),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/be.x),s.x=r.x*be.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/be.y),s.y=r.y*be.y,X.mapSize.y=r.y)),X.map===null||W===!0||Y===!0){let Ee=this.type!==ki?{minFilter:Rn,magFilter:Rn}:{};X.map!==null&&X.map.dispose(),X.map=new Gi(s.x,s.y,Ee),X.map.texture.name=se.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let ge=X.getViewportCount();for(let Ee=0;Ee<ge;Ee++){let _t=X.getViewport(Ee);a.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),B.viewport(a),X.updateMatrices(se,Ee),n=X.getFrustum(),y(R,N,X.camera,se,this.type)}X.isPointLightShadow!==!0&&this.type===ki&&b(X,N),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(D,v,S)};function b(A,R){let N=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Gi(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,N,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,N,f,x,null)}function _(A,R,N,D){let v=null,S=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(S!==void 0)v=S;else if(v=N.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let B=v.uuid,W=R.uuid,Y=c[B];Y===void 0&&(Y={},c[B]=Y);let te=Y[W];te===void 0&&(te=v.clone(),Y[W]=te,R.addEventListener("dispose",I)),v=te}if(v.visible=R.visible,v.wireframe=R.wireframe,D===ki?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:u[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,N.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let B=i.properties.get(v);B.light=N}return v}function y(A,R,N,D,v){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===ki)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);let W=e.update(A),Y=A.material;if(Array.isArray(Y)){let te=W.groups;for(let q=0,se=te.length;q<se;q++){let X=te[q],be=Y[X.materialIndex];if(be&&be.visible){let ge=_(A,be,D,v);A.onBeforeShadow(i,A,R,N,W,ge,X),i.renderBufferDirect(N,null,W,ge,A,X),A.onAfterShadow(i,A,R,N,W,ge,X)}}}else if(Y.visible){let te=_(A,Y,D,v);A.onBeforeShadow(i,A,R,N,W,te,null),i.renderBufferDirect(N,null,W,te,A,null),A.onAfterShadow(i,A,R,N,W,te,null)}}let B=A.children;for(let W=0,Y=B.length;W<Y;W++)y(B[W],R,N,D,v)}function I(A){A.target.removeEventListener("dispose",I);for(let N in c){let D=c[N],v=A.target.uuid;v in D&&(D[v].dispose(),delete D[v])}}}var Y_={[Lc]:Nc,[Dc]:Oc,[Uc]:kc,[Mr]:Fc,[Nc]:Lc,[Oc]:Dc,[kc]:Uc,[Fc]:Mr};function $_(i){function e(){let U=!1,xe=new Ht,Z=null,re=new Ht(0,0,0,0);return{setMask:function(le){Z!==le&&!U&&(i.colorMask(le,le,le,le),Z=le)},setLocked:function(le){U=le},setClear:function(le,Ce,Mt,zt,Jt){Jt===!0&&(le*=zt,Ce*=zt,Mt*=zt),xe.set(le,Ce,Mt,zt),re.equals(xe)===!1&&(i.clearColor(le,Ce,Mt,zt),re.copy(xe))},reset:function(){U=!1,Z=null,re.set(-1,0,0,0)}}}function t(){let U=!1,xe=!1,Z=null,re=null,le=null;return{setReversed:function(Ce){xe=Ce},setTest:function(Ce){Ce?Pe(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(Ce){Z!==Ce&&!U&&(i.depthMask(Ce),Z=Ce)},setFunc:function(Ce){if(xe&&(Ce=Y_[Ce]),re!==Ce){switch(Ce){case Lc:i.depthFunc(i.NEVER);break;case Nc:i.depthFunc(i.ALWAYS);break;case Dc:i.depthFunc(i.LESS);break;case Mr:i.depthFunc(i.LEQUAL);break;case Uc:i.depthFunc(i.EQUAL);break;case Fc:i.depthFunc(i.GEQUAL);break;case Oc:i.depthFunc(i.GREATER);break;case kc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=Ce}},setLocked:function(Ce){U=Ce},setClear:function(Ce){le!==Ce&&(i.clearDepth(Ce),le=Ce)},reset:function(){U=!1,Z=null,re=null,le=null}}}function n(){let U=!1,xe=null,Z=null,re=null,le=null,Ce=null,Mt=null,zt=null,Jt=null;return{setTest:function(St){U||(St?Pe(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(St){xe!==St&&!U&&(i.stencilMask(St),xe=St)},setFunc:function(St,nn,Dn){(Z!==St||re!==nn||le!==Dn)&&(i.stencilFunc(St,nn,Dn),Z=St,re=nn,le=Dn)},setOp:function(St,nn,Dn){(Ce!==St||Mt!==nn||zt!==Dn)&&(i.stencilOp(St,nn,Dn),Ce=St,Mt=nn,zt=Dn)},setLocked:function(St){U=St},setClear:function(St){Jt!==St&&(i.clearStencil(St),Jt=St)},reset:function(){U=!1,xe=null,Z=null,re=null,le=null,Ce=null,Mt=null,zt=null,Jt=null}}}let s=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,g=!1,x=null,m=null,p=null,b=null,_=null,y=null,I=null,A=new tt(0,0,0),R=0,N=!1,D=null,v=null,S=null,B=null,W=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,q=0,se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(se)[1]),te=q>=1):se.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),te=q>=2);let X=null,be={},ge=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),_t=new Ht().fromArray(ge),yt=new Ht().fromArray(Ee);function ne(U,xe,Z,re){let le=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(U,Ce),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Mt=0;Mt<Z;Mt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(xe+Mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return Ce}let he={};he[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Pe(i.DEPTH_TEST),r.setFunc(Mr),mt(!1),Tt(Rd),Pe(i.CULL_FACE),F(us);function Pe(U){c[U]!==!0&&(i.enable(U),c[U]=!0)}function Ie(U){c[U]!==!1&&(i.disable(U),c[U]=!1)}function st(U,xe){return h[U]!==xe?(i.bindFramebuffer(U,xe),h[U]=xe,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=xe),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function Oe(U,xe){let Z=d,re=!1;if(U){Z=u.get(xe),Z===void 0&&(Z=[],u.set(xe,Z));let le=U.textures;if(Z.length!==le.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Ce=0,Mt=le.length;Ce<Mt;Ce++)Z[Ce]=i.COLOR_ATTACHMENT0+Ce;Z.length=le.length,re=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,re=!0);re&&i.drawBuffers(Z)}function pt(U){return f!==U?(i.useProgram(U),f=U,!0):!1}let Et={[Fs]:i.FUNC_ADD,[rm]:i.FUNC_SUBTRACT,[am]:i.FUNC_REVERSE_SUBTRACT};Et[om]=i.MIN,Et[lm]=i.MAX;let Xe={[cm]:i.ZERO,[hm]:i.ONE,[um]:i.SRC_COLOR,[Pc]:i.SRC_ALPHA,[xm]:i.SRC_ALPHA_SATURATE,[mm]:i.DST_COLOR,[fm]:i.DST_ALPHA,[dm]:i.ONE_MINUS_SRC_COLOR,[Ic]:i.ONE_MINUS_SRC_ALPHA,[gm]:i.ONE_MINUS_DST_COLOR,[pm]:i.ONE_MINUS_DST_ALPHA,[_m]:i.CONSTANT_COLOR,[ym]:i.ONE_MINUS_CONSTANT_COLOR,[vm]:i.CONSTANT_ALPHA,[bm]:i.ONE_MINUS_CONSTANT_ALPHA};function F(U,xe,Z,re,le,Ce,Mt,zt,Jt,St){if(U===us){g===!0&&(Ie(i.BLEND),g=!1);return}if(g===!1&&(Pe(i.BLEND),g=!0),U!==sm){if(U!==x||St!==N){if((m!==Fs||_!==Fs)&&(i.blendEquation(i.FUNC_ADD),m=Fs,_=Fs),St)switch(U){case Hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fs:i.blendFunc(i.ONE,i.ONE);break;case Cd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Cd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}p=null,b=null,y=null,I=null,A.set(0,0,0),R=0,x=U,N=St}return}le=le||xe,Ce=Ce||Z,Mt=Mt||re,(xe!==m||le!==_)&&(i.blendEquationSeparate(Et[xe],Et[le]),m=xe,_=le),(Z!==p||re!==b||Ce!==y||Mt!==I)&&(i.blendFuncSeparate(Xe[Z],Xe[re],Xe[Ce],Xe[Mt]),p=Z,b=re,y=Ce,I=Mt),(zt.equals(A)===!1||Jt!==R)&&(i.blendColor(zt.r,zt.g,zt.b,Jt),A.copy(zt),R=Jt),x=U,N=!1}function un(U,xe){U.side===an?Ie(i.CULL_FACE):Pe(i.CULL_FACE);let Z=U.side===Vn;xe&&(Z=!Z),mt(Z),U.blending===Hi&&U.transparent===!1?F(us):F(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);let re=U.stencilWrite;a.setTest(re),re&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ke(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Pe(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(U){D!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),D=U)}function Tt(U){U!==tm?(Pe(i.CULL_FACE),U!==v&&(U===Rd?i.cullFace(i.BACK):U===nm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),v=U}function He(U){U!==S&&(te&&i.lineWidth(U),S=U)}function ke(U,xe,Z){U?(Pe(i.POLYGON_OFFSET_FILL),(B!==xe||W!==Z)&&(i.polygonOffset(xe,Z),B=xe,W=Z)):Ie(i.POLYGON_OFFSET_FILL)}function at(U){U?Pe(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function C(U){U===void 0&&(U=i.TEXTURE0+Y-1),X!==U&&(i.activeTexture(U),X=U)}function M(U,xe,Z){Z===void 0&&(X===null?Z=i.TEXTURE0+Y-1:Z=X);let re=be[Z];re===void 0&&(re={type:void 0,texture:void 0},be[Z]=re),(re.type!==U||re.texture!==xe)&&(X!==Z&&(i.activeTexture(Z),X=Z),i.bindTexture(U,xe||he[U]),re.type=U,re.texture=xe)}function z(){let U=be[X];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function je(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Qe(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qe(U){_t.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),_t.copy(U))}function ze(U){yt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),yt.copy(U))}function O(U,xe){let Z=l.get(xe);Z===void 0&&(Z=new WeakMap,l.set(xe,Z));let re=Z.get(U);re===void 0&&(re=i.getUniformBlockIndex(xe,U.name),Z.set(U,re))}function oe(U,xe){let re=l.get(xe).get(U);o.get(xe)!==re&&(i.uniformBlockBinding(xe,re,U.__bindingPointIndex),o.set(xe,re))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},X=null,be={},h={},u=new WeakMap,d=[],f=null,g=!1,x=null,m=null,p=null,b=null,_=null,y=null,I=null,A=new tt(0,0,0),R=0,N=!1,D=null,v=null,S=null,B=null,W=null,_t.set(0,0,i.canvas.width,i.canvas.height),yt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:Pe,disable:Ie,bindFramebuffer:st,drawBuffers:Oe,useProgram:pt,setBlending:F,setMaterial:un,setFlipSided:mt,setCullFace:Tt,setLineWidth:He,setPolygonOffset:ke,setScissorTest:at,activeTexture:C,bindTexture:M,unbindTexture:z,compressedTexImage2D:Q,compressedTexImage3D:ce,texImage2D:Le,texImage3D:Qe,updateUBOMapping:O,uniformBlockBinding:oe,texStorage2D:je,texStorage3D:ue,texSubImage2D:j,texSubImage3D:Se,compressedTexSubImage2D:ve,compressedTexSubImage3D:Te,scissor:qe,viewport:ze,reset:Je}}function Ef(i,e,t,n){let s=q_(n);switch(t){case jf:return i*e;case ep:return i*e;case tp:return i*e*2;case eu:return i*e/s.components*s.byteLength;case tu:return i*e/s.components*s.byteLength;case np:return i*e*2/s.components*s.byteLength;case nu:return i*e*2/s.components*s.byteLength;case Qf:return i*e*3/s.components*s.byteLength;case Hn:return i*e*4/s.components*s.byteLength;case iu:return i*e*4/s.components*s.byteLength;case wo:case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case To:case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vc:case Wc:return Math.max(i,16)*Math.max(e,8)/4;case Hc:case Gc:return Math.max(i,8)*Math.max(e,8)/2;case Xc:case Yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $c:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case jc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case eh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case th:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case nh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ih:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case sh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case rh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ah:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case oh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Co:case lh:case ch:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ip:case hh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case uh:case dh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function q_(i){switch(i){case Vi:case Kf:return{byteLength:1,components:1};case ga:case Zf:case Ta:return{byteLength:2,components:1};case jh:case Qh:return{byteLength:2,components:4};case zs:case Jh:case di:return{byteLength:4,components:1};case Jf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function K_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return f?new OffscreenCanvas(C,M):xa("canvas")}function x(C,M,z){let Q=1,ce=at(C);if((ce.width>z||ce.height>z)&&(Q=z/Math.max(ce.width,ce.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let j=Math.floor(Q*ce.width),Se=Math.floor(Q*ce.height);u===void 0&&(u=g(j,Se));let ve=M?g(j,Se):u;return ve.width=j,ve.height=Se,ve.getContext("2d").drawImage(C,0,0,j,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+j+"x"+Se+")."),ve}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==Rn&&C.minFilter!==Bn}function p(C){i.generateMipmap(C)}function b(C,M,z,Q,ce=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=M;if(M===i.RED&&(z===i.FLOAT&&(j=i.R32F),z===i.HALF_FLOAT&&(j=i.R16F),z===i.UNSIGNED_BYTE&&(j=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.R8UI),z===i.UNSIGNED_SHORT&&(j=i.R16UI),z===i.UNSIGNED_INT&&(j=i.R32UI),z===i.BYTE&&(j=i.R8I),z===i.SHORT&&(j=i.R16I),z===i.INT&&(j=i.R32I)),M===i.RG&&(z===i.FLOAT&&(j=i.RG32F),z===i.HALF_FLOAT&&(j=i.RG16F),z===i.UNSIGNED_BYTE&&(j=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RG8UI),z===i.UNSIGNED_SHORT&&(j=i.RG16UI),z===i.UNSIGNED_INT&&(j=i.RG32UI),z===i.BYTE&&(j=i.RG8I),z===i.SHORT&&(j=i.RG16I),z===i.INT&&(j=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGB8UI),z===i.UNSIGNED_SHORT&&(j=i.RGB16UI),z===i.UNSIGNED_INT&&(j=i.RGB32UI),z===i.BYTE&&(j=i.RGB8I),z===i.SHORT&&(j=i.RGB16I),z===i.INT&&(j=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),z===i.UNSIGNED_INT&&(j=i.RGBA32UI),z===i.BYTE&&(j=i.RGBA8I),z===i.SHORT&&(j=i.RGBA16I),z===i.INT&&(j=i.RGBA32I)),M===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),M===i.RGBA){let Se=ce?Io:kt.getTransfer(Q);z===i.FLOAT&&(j=i.RGBA32F),z===i.HALF_FLOAT&&(j=i.RGBA16F),z===i.UNSIGNED_BYTE&&(j=Se===Qt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function _(C,M){let z;return C?M===null||M===zs||M===wr?z=i.DEPTH24_STENCIL8:M===di?z=i.DEPTH32F_STENCIL8:M===ga&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===zs||M===wr?z=i.DEPTH_COMPONENT24:M===di?z=i.DEPTH_COMPONENT32F:M===ga&&(z=i.DEPTH_COMPONENT16),z}function y(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Rn&&C.minFilter!==Bn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function I(C){let M=C.target;M.removeEventListener("dispose",I),R(M),M.isVideoTexture&&h.delete(M)}function A(C){let M=C.target;M.removeEventListener("dispose",A),D(M)}function R(C){let M=n.get(C);if(M.__webglInit===void 0)return;let z=C.source,Q=d.get(z);if(Q){let ce=Q[M.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&N(C),Object.keys(Q).length===0&&d.delete(z)}n.remove(C)}function N(C){let M=n.get(C);i.deleteTexture(M.__webglTexture);let z=C.source,Q=d.get(z);delete Q[M.__cacheKey],a.memory.textures--}function D(C){let M=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let ce=0;ce<M.__webglFramebuffer[Q].length;ce++)i.deleteFramebuffer(M.__webglFramebuffer[Q][ce]);else i.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[Q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=C.textures;for(let Q=0,ce=z.length;Q<ce;Q++){let j=n.get(z[Q]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(z[Q])}n.remove(C)}let v=0;function S(){v=0}function B(){let C=v;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),v+=1,C}function W(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function Y(C,M){let z=n.get(C);if(C.isVideoTexture&&He(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){let Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(z,C,M);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function te(C,M){let z=n.get(C);if(C.version>0&&z.__version!==C.version){yt(z,C,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function q(C,M){let z=n.get(C);if(C.version>0&&z.__version!==C.version){yt(z,C,M);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function se(C,M){let z=n.get(C);if(C.version>0&&z.__version!==C.version){ne(z,C,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}let X={[ks]:i.REPEAT,[zi]:i.CLAMP_TO_EDGE,[ma]:i.MIRRORED_REPEAT},be={[Rn]:i.NEAREST,[Zh]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[Bn]:i.LINEAR,[ha]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},ge={[Fm]:i.NEVER,[Vm]:i.ALWAYS,[Om]:i.LESS,[ap]:i.LEQUAL,[km]:i.EQUAL,[Hm]:i.GEQUAL,[zm]:i.GREATER,[Bm]:i.NOTEQUAL};function Ee(C,M){if(M.type===di&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Bn||M.magFilter===ha||M.magFilter===gr||M.magFilter===Mi||M.minFilter===Bn||M.minFilter===ha||M.minFilter===gr||M.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,X[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,X[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,X[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,be[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,be[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ge[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Rn||M.minFilter!==gr&&M.minFilter!==Mi||M.type===di&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function _t(C,M){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",I));let Q=M.source,ce=d.get(Q);ce===void 0&&(ce={},d.set(Q,ce));let j=W(M);if(j!==C.__cacheKey){ce[j]===void 0&&(ce[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ce[j].usedTimes++;let Se=ce[C.__cacheKey];Se!==void 0&&(ce[C.__cacheKey].usedTimes--,Se.usedTimes===0&&N(M)),C.__cacheKey=j,C.__webglTexture=ce[j].texture}return z}function yt(C,M,z){let Q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=i.TEXTURE_3D);let ce=_t(C,M),j=M.source;t.bindTexture(Q,C.__webglTexture,i.TEXTURE0+z);let Se=n.get(j);if(j.version!==Se.__version||ce===!0){t.activeTexture(i.TEXTURE0+z);let ve=kt.getPrimaries(kt.workingColorSpace),Te=M.colorSpace===ls?null:kt.getPrimaries(M.colorSpace),je=M.colorSpace===ls||ve===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ue=x(M.image,!1,s.maxTextureSize);ue=ke(M,ue);let Le=r.convert(M.format,M.colorSpace),Qe=r.convert(M.type),qe=b(M.internalFormat,Le,Qe,M.colorSpace,M.isVideoTexture);Ee(Q,M);let ze,O=M.mipmaps,oe=M.isVideoTexture!==!0,Je=Se.__version===void 0||ce===!0,U=j.dataReady,xe=y(M,ue);if(M.isDepthTexture)qe=_(M.format===Ar,M.type),Je&&(oe?t.texStorage2D(i.TEXTURE_2D,1,qe,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,qe,ue.width,ue.height,0,Le,Qe,null));else if(M.isDataTexture)if(O.length>0){oe&&Je&&t.texStorage2D(i.TEXTURE_2D,xe,qe,O[0].width,O[0].height);for(let Z=0,re=O.length;Z<re;Z++)ze=O[Z],oe?U&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ze.width,ze.height,Le,Qe,ze.data):t.texImage2D(i.TEXTURE_2D,Z,qe,ze.width,ze.height,0,Le,Qe,ze.data);M.generateMipmaps=!1}else oe?(Je&&t.texStorage2D(i.TEXTURE_2D,xe,qe,ue.width,ue.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,Le,Qe,ue.data)):t.texImage2D(i.TEXTURE_2D,0,qe,ue.width,ue.height,0,Le,Qe,ue.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){oe&&Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,qe,O[0].width,O[0].height,ue.depth);for(let Z=0,re=O.length;Z<re;Z++)if(ze=O[Z],M.format!==Hn)if(Le!==null)if(oe){if(U)if(M.layerUpdates.size>0){let le=Ef(ze.width,ze.height,M.format,M.type);for(let Ce of M.layerUpdates){let Mt=ze.data.subarray(Ce*le/ze.data.BYTES_PER_ELEMENT,(Ce+1)*le/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,Ce,ze.width,ze.height,1,Le,Mt,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ze.width,ze.height,ue.depth,Le,ze.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,qe,ze.width,ze.height,ue.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ze.width,ze.height,ue.depth,Le,Qe,ze.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,qe,ze.width,ze.height,ue.depth,0,Le,Qe,ze.data)}else{oe&&Je&&t.texStorage2D(i.TEXTURE_2D,xe,qe,O[0].width,O[0].height);for(let Z=0,re=O.length;Z<re;Z++)ze=O[Z],M.format!==Hn?Le!==null?oe?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ze.width,ze.height,Le,ze.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,qe,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?U&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ze.width,ze.height,Le,Qe,ze.data):t.texImage2D(i.TEXTURE_2D,Z,qe,ze.width,ze.height,0,Le,Qe,ze.data)}else if(M.isDataArrayTexture)if(oe){if(Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,qe,ue.width,ue.height,ue.depth),U)if(M.layerUpdates.size>0){let Z=Ef(ue.width,ue.height,M.format,M.type);for(let re of M.layerUpdates){let le=ue.data.subarray(re*Z/ue.data.BYTES_PER_ELEMENT,(re+1)*Z/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,ue.width,ue.height,1,Le,Qe,le)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Le,Qe,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,qe,ue.width,ue.height,ue.depth,0,Le,Qe,ue.data);else if(M.isData3DTexture)oe?(Je&&t.texStorage3D(i.TEXTURE_3D,xe,qe,ue.width,ue.height,ue.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Le,Qe,ue.data)):t.texImage3D(i.TEXTURE_3D,0,qe,ue.width,ue.height,ue.depth,0,Le,Qe,ue.data);else if(M.isFramebufferTexture){if(Je)if(oe)t.texStorage2D(i.TEXTURE_2D,xe,qe,ue.width,ue.height);else{let Z=ue.width,re=ue.height;for(let le=0;le<xe;le++)t.texImage2D(i.TEXTURE_2D,le,qe,Z,re,0,Le,Qe,null),Z>>=1,re>>=1}}else if(O.length>0){if(oe&&Je){let Z=at(O[0]);t.texStorage2D(i.TEXTURE_2D,xe,qe,Z.width,Z.height)}for(let Z=0,re=O.length;Z<re;Z++)ze=O[Z],oe?U&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Le,Qe,ze):t.texImage2D(i.TEXTURE_2D,Z,qe,Le,Qe,ze);M.generateMipmaps=!1}else if(oe){if(Je){let Z=at(ue);t.texStorage2D(i.TEXTURE_2D,xe,qe,Z.width,Z.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,Qe,ue)}else t.texImage2D(i.TEXTURE_2D,0,qe,Le,Qe,ue);m(M)&&p(Q),Se.__version=j.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ne(C,M,z){if(M.image.length!==6)return;let Q=_t(C,M),ce=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);let j=n.get(ce);if(ce.version!==j.__version||Q===!0){t.activeTexture(i.TEXTURE0+z);let Se=kt.getPrimaries(kt.workingColorSpace),ve=M.colorSpace===ls?null:kt.getPrimaries(M.colorSpace),Te=M.colorSpace===ls||Se===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let je=M.isCompressedTexture||M.image[0].isCompressedTexture,ue=M.image[0]&&M.image[0].isDataTexture,Le=[];for(let re=0;re<6;re++)!je&&!ue?Le[re]=x(M.image[re],!0,s.maxCubemapSize):Le[re]=ue?M.image[re].image:M.image[re],Le[re]=ke(M,Le[re]);let Qe=Le[0],qe=r.convert(M.format,M.colorSpace),ze=r.convert(M.type),O=b(M.internalFormat,qe,ze,M.colorSpace),oe=M.isVideoTexture!==!0,Je=j.__version===void 0||Q===!0,U=ce.dataReady,xe=y(M,Qe);Ee(i.TEXTURE_CUBE_MAP,M);let Z;if(je){oe&&Je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,O,Qe.width,Qe.height);for(let re=0;re<6;re++){Z=Le[re].mipmaps;for(let le=0;le<Z.length;le++){let Ce=Z[le];M.format!==Hn?qe!==null?oe?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,le,0,0,Ce.width,Ce.height,qe,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,le,O,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,le,0,0,Ce.width,Ce.height,qe,ze,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,le,O,Ce.width,Ce.height,0,qe,ze,Ce.data)}}}else{if(Z=M.mipmaps,oe&&Je){Z.length>0&&xe++;let re=at(Le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,O,re.width,re.height)}for(let re=0;re<6;re++)if(ue){oe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Le[re].width,Le[re].height,qe,ze,Le[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,O,Le[re].width,Le[re].height,0,qe,ze,Le[re].data);for(let le=0;le<Z.length;le++){let Mt=Z[le].image[re].image;oe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,le+1,0,0,Mt.width,Mt.height,qe,ze,Mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,le+1,O,Mt.width,Mt.height,0,qe,ze,Mt.data)}}else{oe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,qe,ze,Le[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,O,qe,ze,Le[re]);for(let le=0;le<Z.length;le++){let Ce=Z[le];oe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,le+1,0,0,qe,ze,Ce.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,le+1,O,qe,ze,Ce.image[re])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),j.__version=ce.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function he(C,M,z,Q,ce,j){let Se=r.convert(z.format,z.colorSpace),ve=r.convert(z.type),Te=b(z.internalFormat,Se,ve,z.colorSpace);if(!n.get(M).__hasExternalTextures){let ue=Math.max(1,M.width>>j),Le=Math.max(1,M.height>>j);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,j,Te,ue,Le,M.depth,0,Se,ve,null):t.texImage2D(ce,j,Te,ue,Le,0,Se,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Tt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ce,n.get(z).__webglTexture,0,mt(M)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ce,n.get(z).__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(C,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer){let Q=M.depthTexture,ce=Q&&Q.isDepthTexture?Q.type:null,j=_(M.stencilBuffer,ce),Se=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=mt(M);Tt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,j,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,j,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,j,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,C)}else{let Q=M.textures;for(let ce=0;ce<Q.length;ce++){let j=Q[ce],Se=r.convert(j.format,j.colorSpace),ve=r.convert(j.type),Te=b(j.internalFormat,Se,ve,j.colorSpace),je=mt(M);z&&Tt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,je,Te,M.width,M.height):Tt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je,Te,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Te,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);let Q=n.get(M.depthTexture).__webglTexture,ce=mt(M);if(M.depthTexture.format===_r)Tt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Ar)Tt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function st(C){let M=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let Q=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){let ce=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",ce)};Q.addEventListener("dispose",ce),M.__depthDisposeCallback=ce}M.__boundDepthTexture=Q}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ie(M.__webglFramebuffer,C)}else if(z){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=i.createRenderbuffer(),Pe(M.__webglDepthbuffer[Q],C,!1);else{let ce=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,j)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Pe(M.__webglDepthbuffer,C,!1);else{let Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ce)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(C,M,z){let Q=n.get(C);M!==void 0&&he(Q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&st(C)}function pt(C){let M=C.texture,z=n.get(C),Q=n.get(M);C.addEventListener("dispose",A);let ce=C.textures,j=C.isWebGLCubeRenderTarget===!0,Se=ce.length>1;if(Se||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=M.version,a.memory.textures++),j){z.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ve]=[];for(let Te=0;Te<M.mipmaps.length;Te++)z.__webglFramebuffer[ve][Te]=i.createFramebuffer()}else z.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ve=0;ve<M.mipmaps.length;ve++)z.__webglFramebuffer[ve]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Se)for(let ve=0,Te=ce.length;ve<Te;ve++){let je=n.get(ce[ve]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Tt(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ve=0;ve<ce.length;ve++){let Te=ce[ve];z.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ve]);let je=r.convert(Te.format,Te.colorSpace),ue=r.convert(Te.type),Le=b(Te.internalFormat,je,ue,Te.colorSpace,C.isXRRenderTarget===!0),Qe=mt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,Le,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,z.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,M);for(let ve=0;ve<6;ve++)if(M.mipmaps&&M.mipmaps.length>0)for(let Te=0;Te<M.mipmaps.length;Te++)he(z.__webglFramebuffer[ve][Te],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Te);else he(z.__webglFramebuffer[ve],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ve=0,Te=ce.length;ve<Te;ve++){let je=ce[ve],ue=n.get(je);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),Ee(i.TEXTURE_2D,je),he(z.__webglFramebuffer,C,je,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,0),m(je)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ve=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,Q.__webglTexture),Ee(ve,M),M.mipmaps&&M.mipmaps.length>0)for(let Te=0;Te<M.mipmaps.length;Te++)he(z.__webglFramebuffer[Te],C,M,i.COLOR_ATTACHMENT0,ve,Te);else he(z.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,ve,0);m(M)&&p(ve),t.unbindTexture()}C.depthBuffer&&st(C)}function Et(C){let M=C.textures;for(let z=0,Q=M.length;z<Q;z++){let ce=M[z];if(m(ce)){let j=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Se=n.get(ce).__webglTexture;t.bindTexture(j,Se),p(j),t.unbindTexture()}}}let Xe=[],F=[];function un(C){if(C.samples>0){if(Tt(C)===!1){let M=C.textures,z=C.width,Q=C.height,ce=i.COLOR_BUFFER_BIT,j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(C),ve=M.length>1;if(ve)for(let Te=0;Te<M.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Te=0;Te<M.length;Te++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Te]);let je=n.get(M[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,je,0)}i.blitFramebuffer(0,0,z,Q,0,0,z,Q,ce,i.NEAREST),l===!0&&(Xe.length=0,F.length=0,Xe.push(i.COLOR_ATTACHMENT0+Te),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Xe.push(j),F.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let Te=0;Te<M.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Te]);let je=n.get(M[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function mt(C){return Math.min(s.maxSamples,C.samples)}function Tt(C){let M=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function He(C){let M=a.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function ke(C,M){let z=C.colorSpace,Q=C.format,ce=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==yn&&z!==ls&&(kt.getTransfer(z)===Qt?(Q!==Hn||ce!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function at(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=S,this.setTexture2D=Y,this.setTexture2DArray=te,this.setTexture3D=q,this.setTextureCube=se,this.rebindTextures=Oe,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=un,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Tt}function Z_(i,e){function t(n,s=ls){let r,a=kt.getTransfer(s);if(n===Vi)return i.UNSIGNED_BYTE;if(n===jh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kf)return i.BYTE;if(n===Zf)return i.SHORT;if(n===ga)return i.UNSIGNED_SHORT;if(n===Jh)return i.INT;if(n===zs)return i.UNSIGNED_INT;if(n===di)return i.FLOAT;if(n===Ta)return i.HALF_FLOAT;if(n===jf)return i.ALPHA;if(n===Qf)return i.RGB;if(n===Hn)return i.RGBA;if(n===ep)return i.LUMINANCE;if(n===tp)return i.LUMINANCE_ALPHA;if(n===_r)return i.DEPTH_COMPONENT;if(n===Ar)return i.DEPTH_STENCIL;if(n===eu)return i.RED;if(n===tu)return i.RED_INTEGER;if(n===np)return i.RG;if(n===nu)return i.RG_INTEGER;if(n===iu)return i.RGBA_INTEGER;if(n===wo||n===Ao||n===To||n===Ro)if(a===Qt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hc||n===Vc||n===Gc||n===Wc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Hc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xc||n===Yc||n===$c)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xc||n===Yc)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$c)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qc||n===Kc||n===Zc||n===Jc||n===jc||n===Qc||n===eh||n===th||n===nh||n===ih||n===sh||n===rh||n===ah||n===oh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qc)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eh)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===th)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nh)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ih)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sh)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rh)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ah)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oh)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Co||n===lh||n===ch)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Co)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ch)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ip||n===hh||n===uh||n===dh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Co)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Th=class extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},It=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},J_={type:"move"},da=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(J_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new It;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},j_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q_=`
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

}`,Rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new _n,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Zn({vertexShader:j_,fragmentShader:Q_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ae(new wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ch=class extends ps{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=new Rh,m=t.getContextAttributes(),p=null,b=null,_=[],y=[],I=new Ue,A=null,R=new ln;R.layers.enable(1),R.viewport=new Ht;let N=new ln;N.layers.enable(2),N.viewport=new Ht;let D=[R,N],v=new Th;v.layers.enable(1),v.layers.enable(2);let S=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let he=_[ne];return he===void 0&&(he=new da,_[ne]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ne){let he=_[ne];return he===void 0&&(he=new da,_[ne]=he),he.getGripSpace()},this.getHand=function(ne){let he=_[ne];return he===void 0&&(he=new da,_[ne]=he),he.getHandSpace()};function W(ne){let he=y.indexOf(ne.inputSource);if(he===-1)return;let Pe=_[he];Pe!==void 0&&(Pe.update(ne.inputSource,ne.frame,c||a),Pe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function Y(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",te);for(let ne=0;ne<_.length;ne++){let he=y[ne];he!==null&&(y[ne]=null,_[ne].disconnect(he))}S=null,B=null,x.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,b=null,yt.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",te),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){let he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Gi(f.framebufferWidth,f.framebufferHeight,{format:Hn,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let he=null,Pe=null,Ie=null;m.depth&&(Ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=m.stencil?Ar:_r,Pe=m.stencil?wr:zs);let st={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(st),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Gi(d.textureWidth,d.textureHeight,{format:Hn,type:Vi,depthTexture:new Go(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),yt.setContext(s),yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function te(ne){for(let he=0;he<ne.removed.length;he++){let Pe=ne.removed[he],Ie=y.indexOf(Pe);Ie>=0&&(y[Ie]=null,_[Ie].disconnect(Pe))}for(let he=0;he<ne.added.length;he++){let Pe=ne.added[he],Ie=y.indexOf(Pe);if(Ie===-1){for(let Oe=0;Oe<_.length;Oe++)if(Oe>=y.length){y.push(Pe),Ie=Oe;break}else if(y[Oe]===null){y[Oe]=Pe,Ie=Oe;break}if(Ie===-1)break}let st=_[Ie];st&&st.connect(Pe)}}let q=new P,se=new P;function X(ne,he,Pe){q.setFromMatrixPosition(he.matrixWorld),se.setFromMatrixPosition(Pe.matrixWorld);let Ie=q.distanceTo(se),st=he.projectionMatrix.elements,Oe=Pe.projectionMatrix.elements,pt=st[14]/(st[10]-1),Et=st[14]/(st[10]+1),Xe=(st[9]+1)/st[5],F=(st[9]-1)/st[5],un=(st[8]-1)/st[0],mt=(Oe[8]+1)/Oe[0],Tt=pt*un,He=pt*mt,ke=Ie/(-un+mt),at=ke*-un;if(he.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(at),ne.translateZ(ke),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),st[10]===-1)ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{let C=pt+ke,M=Et+ke,z=Tt-at,Q=He+(Ie-at),ce=Xe*Et/M*C,j=F*Et/M*C;ne.projectionMatrix.makePerspective(z,Q,ce,j,C,M),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function be(ne,he){he===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(he.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let he=ne.near,Pe=ne.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(Pe=x.depthFar)),v.near=N.near=R.near=he,v.far=N.far=R.far=Pe,(S!==v.near||B!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,B=v.far);let Ie=ne.parent,st=v.cameras;be(v,Ie);for(let Oe=0;Oe<st.length;Oe++)be(st[Oe],Ie);st.length===2?X(v,R,N):v.projectionMatrix.copy(R.projectionMatrix),ge(ne,v,Ie)};function ge(ne,he,Pe){Pe===null?ne.matrix.copy(he.matrixWorld):(ne.matrix.copy(Pe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(he.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Cr*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let Ee=null;function _t(ne,he){if(h=he.getViewerPose(c||a),g=he,h!==null){let Pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Ie=!1;Pe.length!==v.cameras.length&&(v.cameras.length=0,Ie=!0);for(let Oe=0;Oe<Pe.length;Oe++){let pt=Pe[Oe],Et=null;if(f!==null)Et=f.getViewport(pt);else{let F=u.getViewSubImage(d,pt);Et=F.viewport,Oe===0&&(e.setRenderTargetTextures(b,F.colorTexture,d.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(b))}let Xe=D[Oe];Xe===void 0&&(Xe=new ln,Xe.layers.enable(Oe),Xe.viewport=new Ht,D[Oe]=Xe),Xe.matrix.fromArray(pt.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(pt.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Et.x,Et.y,Et.width,Et.height),Oe===0&&(v.matrix.copy(Xe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Ie===!0&&v.cameras.push(Xe)}let st=s.enabledFeatures;if(st&&st.includes("depth-sensing")){let Oe=u.getDepthInformation(Pe[0]);Oe&&Oe.isValid&&Oe.texture&&x.init(e,Oe,s.renderState)}}for(let Pe=0;Pe<_.length;Pe++){let Ie=y[Pe],st=_[Pe];Ie!==null&&st!==void 0&&st.update(Ie,he,c||a)}Ee&&Ee(ne,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),g=null}let yt=new hp;yt.setAnimationLoop(_t),this.setAnimationLoop=function(ne){Ee=ne},this.dispose=function(){}}},Ds=new Ei,ey=new ct;function ty(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,cp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),_=b.envMap,y=b.envMapRotation;_&&(m.envMap.value=_,Ds.copy(y),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),m.envMapRotation.value.setFromMatrix4(ey.makeRotationFromEuler(Ds)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ny(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){let y=_.program;n.uniformBlockBinding(b,y)}function c(b,_){let y=s[b.id];y===void 0&&(g(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",m));let I=_.program;n.updateUBOMapping(b,I);let A=e.render.frame;r[b.id]!==A&&(d(b),r[b.id]=A)}function h(b){let _=u();b.__bindingPointIndex=_;let y=i.createBuffer(),I=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,I,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let _=s[b.id],y=b.uniforms,I=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,R=y.length;A<R;A++){let N=Array.isArray(y[A])?y[A]:[y[A]];for(let D=0,v=N.length;D<v;D++){let S=N[D];if(f(S,A,D,I)===!0){let B=S.__offset,W=Array.isArray(S.value)?S.value:[S.value],Y=0;for(let te=0;te<W.length;te++){let q=W[te],se=x(q);typeof q=="number"||typeof q=="boolean"?(S.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,B+Y,S.__data)):q.isMatrix3?(S.__data[0]=q.elements[0],S.__data[1]=q.elements[1],S.__data[2]=q.elements[2],S.__data[3]=0,S.__data[4]=q.elements[3],S.__data[5]=q.elements[4],S.__data[6]=q.elements[5],S.__data[7]=0,S.__data[8]=q.elements[6],S.__data[9]=q.elements[7],S.__data[10]=q.elements[8],S.__data[11]=0):(q.toArray(S.__data,Y),Y+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,_,y,I){let A=b.value,R=_+"_"+y;if(I[R]===void 0)return typeof A=="number"||typeof A=="boolean"?I[R]=A:I[R]=A.clone(),!0;{let N=I[R];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return I[R]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(b){let _=b.uniforms,y=0,I=16;for(let R=0,N=_.length;R<N;R++){let D=Array.isArray(_[R])?_[R]:[_[R]];for(let v=0,S=D.length;v<S;v++){let B=D[v],W=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,te=W.length;Y<te;Y++){let q=W[Y],se=x(q),X=y%I,be=X%se.boundary,ge=X+be;y+=be,ge!==0&&I-ge<se.storage&&(y+=I-ge),B.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=se.storage}}}let A=y%I;return A>0&&(y+=I-A),b.__size=y,b.__cache={},this}function x(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){let _=b.target;_.removeEventListener("dispose",m);let y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Nr=class{constructor(e={}){let{canvas:t=r0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this.toneMapping=ds,this.toneMappingExposure=1;let _=this,y=!1,I=0,A=0,R=null,N=-1,D=null,v=new Ht,S=new Ht,B=null,W=new tt(0),Y=0,te=t.width,q=t.height,se=1,X=null,be=null,ge=new Ht(0,0,te,q),Ee=new Ht(0,0,te,q),_t=!1,yt=new _a,ne=!1,he=!1,Pe=new ct,Ie=new ct,st=new P,Oe=new Ht,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Et=!1;function Xe(){return R===null?se:1}let F=n;function un(T,G){return t.getContext(T,G)}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),F===null){let G="webgl2";if(F=un(G,T),F===null)throw un(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let mt,Tt,He,ke,at,C,M,z,Q,ce,j,Se,ve,Te,je,ue,Le,Qe,qe,ze,O,oe,Je,U;function xe(){mt=new _x(F),mt.init(),oe=new Z_(F,mt),Tt=new dx(F,mt,e,oe),He=new $_(F),Tt.reverseDepthBuffer&&He.buffers.depth.setReversed(!0),ke=new bx(F),at=new D_,C=new K_(F,mt,He,at,Tt,oe,ke),M=new px(_),z=new xx(_),Q=new R0(F),Je=new hx(F,Q),ce=new yx(F,Q,ke,Je),j=new Sx(F,ce,Q,ke),qe=new Mx(F,Tt,C),ue=new fx(at),Se=new N_(_,M,z,mt,Tt,Je,ue),ve=new ty(_,at),Te=new F_,je=new V_(mt),Qe=new cx(_,M,z,He,j,d,l),Le=new X_(_,j,Tt),U=new ny(F,ke,Tt,He),ze=new ux(F,mt,ke),O=new vx(F,mt,ke),ke.programs=Se.programs,_.capabilities=Tt,_.extensions=mt,_.properties=at,_.renderLists=Te,_.shadowMap=Le,_.state=He,_.info=ke}xe();let Z=new Ch(_,F);this.xr=Z,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=mt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=mt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(T){T!==void 0&&(se=T,this.setSize(te,q,!1))},this.getSize=function(T){return T.set(te,q)},this.setSize=function(T,G,$=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=T,q=G,t.width=Math.floor(T*se),t.height=Math.floor(G*se),$===!0&&(t.style.width=T+"px",t.style.height=G+"px"),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(te*se,q*se).floor()},this.setDrawingBufferSize=function(T,G,$){te=T,q=G,se=$,t.width=Math.floor(T*$),t.height=Math.floor(G*$),this.setViewport(0,0,T,G)},this.getCurrentViewport=function(T){return T.copy(v)},this.getViewport=function(T){return T.copy(ge)},this.setViewport=function(T,G,$,k){T.isVector4?ge.set(T.x,T.y,T.z,T.w):ge.set(T,G,$,k),He.viewport(v.copy(ge).multiplyScalar(se).round())},this.getScissor=function(T){return T.copy(Ee)},this.setScissor=function(T,G,$,k){T.isVector4?Ee.set(T.x,T.y,T.z,T.w):Ee.set(T,G,$,k),He.scissor(S.copy(Ee).multiplyScalar(se).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(T){He.setScissorTest(_t=T)},this.setOpaqueSort=function(T){X=T},this.setTransparentSort=function(T){be=T},this.getClearColor=function(T){return T.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(T=!0,G=!0,$=!0){let k=0;if(T){let V=!1;if(R!==null){let pe=R.texture.format;V=pe===iu||pe===nu||pe===tu}if(V){let pe=R.texture.type,De=pe===Vi||pe===zs||pe===ga||pe===wr||pe===jh||pe===Qh,_e=Qe.getClearColor(),we=Qe.getClearAlpha(),Ke=_e.r,nt=_e.g,Ye=_e.b;De?(f[0]=Ke,f[1]=nt,f[2]=Ye,f[3]=we,F.clearBufferuiv(F.COLOR,0,f)):(g[0]=Ke,g[1]=nt,g[2]=Ye,g[3]=we,F.clearBufferiv(F.COLOR,0,g))}else k|=F.COLOR_BUFFER_BIT}G&&(k|=F.DEPTH_BUFFER_BIT,F.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),$&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Te.dispose(),je.dispose(),at.dispose(),M.dispose(),z.dispose(),j.dispose(),Je.dispose(),U.dispose(),Se.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",qr),Z.removeEventListener("sessionend",Kr),jn.stop()};function re(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let T=ke.autoReset,G=Le.enabled,$=Le.autoUpdate,k=Le.needsUpdate,V=Le.type;xe(),ke.autoReset=T,Le.enabled=G,Le.autoUpdate=$,Le.needsUpdate=k,Le.type=V}function Ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Mt(T){let G=T.target;G.removeEventListener("dispose",Mt),zt(G)}function zt(T){Jt(T),at.remove(T)}function Jt(T){let G=at.get(T).programs;G!==void 0&&(G.forEach(function($){Se.releaseProgram($)}),T.isShaderMaterial&&Se.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,$,k,V,pe){G===null&&(G=pt);let De=V.isMesh&&V.matrixWorld.determinant()<0,_e=xi(T,G,$,k,V);He.setMaterial(k,De);let we=$.index,Ke=1;if(k.wireframe===!0){if(we=ce.getWireframeAttribute($),we===void 0)return;Ke=2}let nt=$.drawRange,Ye=$.attributes.position,Rt=nt.start*Ke,Vt=(nt.start+nt.count)*Ke;pe!==null&&(Rt=Math.max(Rt,pe.start*Ke),Vt=Math.min(Vt,(pe.start+pe.count)*Ke)),we!==null?(Rt=Math.max(Rt,0),Vt=Math.min(Vt,we.count)):Ye!=null&&(Rt=Math.max(Rt,0),Vt=Math.min(Vt,Ye.count));let qt=Vt-Rt;if(qt<0||qt===1/0)return;Je.setup(V,k,_e,$,we);let sn,Dt=ze;if(we!==null&&(sn=Q.get(we),Dt=O,Dt.setIndex(sn)),V.isMesh)k.wireframe===!0?(He.setLineWidth(k.wireframeLinewidth*Xe()),Dt.setMode(F.LINES)):Dt.setMode(F.TRIANGLES);else if(V.isLine){let $e=k.linewidth;$e===void 0&&($e=1),He.setLineWidth($e*Xe()),V.isLineSegments?Dt.setMode(F.LINES):V.isLineLoop?Dt.setMode(F.LINE_LOOP):Dt.setMode(F.LINE_STRIP)}else V.isPoints?Dt.setMode(F.POINTS):V.isSprite&&Dt.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Dt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let $e=V._multiDrawStarts,Bt=V._multiDrawCounts,Ut=V._multiDrawCount,In=we?Q.get(we).bytesPerElement:1,Ri=at.get(k).currentProgram.getUniforms();for(let En=0;En<Ut;En++)Ri.setValue(F,"_gl_DrawID",En),Dt.render($e[En]/In,Bt[En])}else if(V.isInstancedMesh)Dt.renderInstances(Rt,qt,V.count);else if($.isInstancedBufferGeometry){let $e=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Bt=Math.min($.instanceCount,$e);Dt.renderInstances(Rt,qt,Bt)}else Dt.render(Rt,qt)};function St(T,G,$){T.transparent===!0&&T.side===an&&T.forceSinglePass===!1?(T.side=Vn,T.needsUpdate=!0,Ai(T,G,$),T.side=Si,T.needsUpdate=!0,Ai(T,G,$),T.side=an):Ai(T,G,$)}this.compile=function(T,G,$=null){$===null&&($=T),m=je.get($),m.init(G),b.push(m),$.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),T!==$&&T.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();let k=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let pe=V.material;if(pe)if(Array.isArray(pe))for(let De=0;De<pe.length;De++){let _e=pe[De];St(_e,$,V),k.add(_e)}else St(pe,$,V),k.add(pe)}),b.pop(),m=null,k},this.compileAsync=function(T,G,$=null){let k=this.compile(T,G,$);return new Promise(V=>{function pe(){if(k.forEach(function(De){at.get(De).currentProgram.isReady()&&k.delete(De)}),k.size===0){V(T);return}setTimeout(pe,10)}mt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let nn=null;function Dn(T){nn&&nn(T)}function qr(){jn.stop()}function Kr(){jn.start()}let jn=new hp;jn.setAnimationLoop(Dn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(T){nn=T,Z.setAnimationLoop(T),T===null?jn.stop():jn.start()},Z.addEventListener("sessionstart",qr),Z.addEventListener("sessionend",Kr),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(G),G=Z.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,G,R),m=je.get(T,b.length),m.init(G),b.push(m),Ie.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),yt.setFromProjectionMatrix(Ie),he=this.localClippingEnabled,ne=ue.init(this.clippingPlanes,he),x=Te.get(T,p.length),x.init(),p.push(x),Z.enabled===!0&&Z.isPresenting===!0){let pe=_.xr.getDepthSensingMesh();pe!==null&&Ys(pe,G,-1/0,_.sortObjects)}Ys(T,G,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(X,be),Et=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Et&&Qe.addToRenderList(x,T),this.info.render.frame++,ne===!0&&ue.beginShadows();let $=m.state.shadowsArray;Le.render($,T,G),ne===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=x.opaque,V=x.transmissive;if(m.setupLights(),G.isArrayCamera){let pe=G.cameras;if(V.length>0)for(let De=0,_e=pe.length;De<_e;De++){let we=pe[De];Pn(k,V,T,we)}Et&&Qe.render(T);for(let De=0,_e=pe.length;De<_e;De++){let we=pe[De];Es(x,T,we,we.viewport)}}else V.length>0&&Pn(k,V,T,G),Et&&Qe.render(T),Es(x,T,G);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(_,T,G),Je.resetDefaultState(),N=-1,D=null,b.pop(),b.length>0?(m=b[b.length-1],ne===!0&&ue.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Ys(T,G,$,k){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||yt.intersectsSprite(T)){k&&Oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ie);let De=j.update(T),_e=T.material;_e.visible&&x.push(T,De,_e,$,Oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||yt.intersectsObject(T))){let De=j.update(T),_e=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Oe.copy(T.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Oe.copy(De.boundingSphere.center)),Oe.applyMatrix4(T.matrixWorld).applyMatrix4(Ie)),Array.isArray(_e)){let we=De.groups;for(let Ke=0,nt=we.length;Ke<nt;Ke++){let Ye=we[Ke],Rt=_e[Ye.materialIndex];Rt&&Rt.visible&&x.push(T,De,Rt,$,Oe.z,Ye)}}else _e.visible&&x.push(T,De,_e,$,Oe.z,null)}}let pe=T.children;for(let De=0,_e=pe.length;De<_e;De++)Ys(pe[De],G,$,k)}function Es(T,G,$,k){let V=T.opaque,pe=T.transmissive,De=T.transparent;m.setupLightsView($),ne===!0&&ue.setGlobalState(_.clippingPlanes,$),k&&He.viewport(v.copy(k)),V.length>0&&Un(V,G,$),pe.length>0&&Un(pe,G,$),De.length>0&&Un(De,G,$),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function Pn(T,G,$,k){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[k.id]===void 0&&(m.state.transmissionRenderTarget[k.id]=new Gi(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Ta:Vi,minFilter:Mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:kt.workingColorSpace}));let pe=m.state.transmissionRenderTarget[k.id],De=k.viewport||v;pe.setSize(De.z,De.w);let _e=_.getRenderTarget();_.setRenderTarget(pe),_.getClearColor(W),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),Et&&Qe.render($);let we=_.toneMapping;_.toneMapping=ds;let Ke=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),m.setupLightsView(k),ne===!0&&ue.setGlobalState(_.clippingPlanes,k),Un(T,$,k),C.updateMultisampleRenderTarget(pe),C.updateRenderTargetMipmap(pe),mt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Ye=0,Rt=G.length;Ye<Rt;Ye++){let Vt=G[Ye],qt=Vt.object,sn=Vt.geometry,Dt=Vt.material,$e=Vt.group;if(Dt.side===an&&qt.layers.test(k.layers)){let Bt=Dt.side;Dt.side=Vn,Dt.needsUpdate=!0,Zr(qt,$,k,sn,Dt,$e),Dt.side=Bt,Dt.needsUpdate=!0,nt=!0}}nt===!0&&(C.updateMultisampleRenderTarget(pe),C.updateRenderTargetMipmap(pe))}_.setRenderTarget(_e),_.setClearColor(W,Y),Ke!==void 0&&(k.viewport=Ke),_.toneMapping=we}function Un(T,G,$){let k=G.isScene===!0?G.overrideMaterial:null;for(let V=0,pe=T.length;V<pe;V++){let De=T[V],_e=De.object,we=De.geometry,Ke=k===null?De.material:k,nt=De.group;_e.layers.test($.layers)&&Zr(_e,G,$,we,Ke,nt)}}function Zr(T,G,$,k,V,pe){T.onBeforeRender(_,G,$,k,V,pe),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(_,G,$,k,T,pe),V.transparent===!0&&V.side===an&&V.forceSinglePass===!1?(V.side=Vn,V.needsUpdate=!0,_.renderBufferDirect($,G,k,V,T,pe),V.side=Si,V.needsUpdate=!0,_.renderBufferDirect($,G,k,V,T,pe),V.side=an):_.renderBufferDirect($,G,k,V,T,pe),T.onAfterRender(_,G,$,k,V,pe)}function Ai(T,G,$){G.isScene!==!0&&(G=pt);let k=at.get(T),V=m.state.lights,pe=m.state.shadowsArray,De=V.state.version,_e=Se.getParameters(T,V.state,pe,G,$),we=Se.getProgramCacheKey(_e),Ke=k.programs;k.environment=T.isMeshStandardMaterial?G.environment:null,k.fog=G.fog,k.envMap=(T.isMeshStandardMaterial?z:M).get(T.envMap||k.environment),k.envMapRotation=k.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,Ke===void 0&&(T.addEventListener("dispose",Mt),Ke=new Map,k.programs=Ke);let nt=Ke.get(we);if(nt!==void 0){if(k.currentProgram===nt&&k.lightsStateVersion===De)return Ti(T,_e),nt}else _e.uniforms=Se.getUniforms(T),T.onBeforeCompile(_e,_),nt=Se.acquireProgram(_e,we),Ke.set(we,nt),k.uniforms=_e.uniforms;let Ye=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ye.clippingPlanes=ue.uniform),Ti(T,_e),k.needsLights=Qi(T),k.lightsStateVersion=De,k.needsLights&&(Ye.ambientLightColor.value=V.state.ambient,Ye.lightProbe.value=V.state.probe,Ye.directionalLights.value=V.state.directional,Ye.directionalLightShadows.value=V.state.directionalShadow,Ye.spotLights.value=V.state.spot,Ye.spotLightShadows.value=V.state.spotShadow,Ye.rectAreaLights.value=V.state.rectArea,Ye.ltc_1.value=V.state.rectAreaLTC1,Ye.ltc_2.value=V.state.rectAreaLTC2,Ye.pointLights.value=V.state.point,Ye.pointLightShadows.value=V.state.pointShadow,Ye.hemisphereLights.value=V.state.hemi,Ye.directionalShadowMap.value=V.state.directionalShadowMap,Ye.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ye.spotShadowMap.value=V.state.spotShadowMap,Ye.spotLightMatrix.value=V.state.spotLightMatrix,Ye.spotLightMap.value=V.state.spotLightMap,Ye.pointShadowMap.value=V.state.pointShadowMap,Ye.pointShadowMatrix.value=V.state.pointShadowMatrix),k.currentProgram=nt,k.uniformsList=null,nt}function ws(T){if(T.uniformsList===null){let G=T.currentProgram.getUniforms();T.uniformsList=br.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function Ti(T,G){let $=at.get(T);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.batchingColor=G.batchingColor,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.instancingMorph=G.instancingMorph,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function xi(T,G,$,k,V){G.isScene!==!0&&(G=pt),C.resetTextureUnits();let pe=G.fog,De=k.isMeshStandardMaterial?G.environment:null,_e=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:yn,we=(k.isMeshStandardMaterial?z:M).get(k.envMap||De),Ke=k.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,nt=!!$.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ye=!!$.morphAttributes.position,Rt=!!$.morphAttributes.normal,Vt=!!$.morphAttributes.color,qt=ds;k.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(qt=_.toneMapping);let sn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Dt=sn!==void 0?sn.length:0,$e=at.get(k),Bt=m.state.lights;if(ne===!0&&(he===!0||T!==D)){let Fn=T===D&&k.id===N;ue.setState(k,T,Fn)}let Ut=!1;k.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Bt.state.version||$e.outputColorSpace!==_e||V.isBatchedMesh&&$e.batching===!1||!V.isBatchedMesh&&$e.batching===!0||V.isBatchedMesh&&$e.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&$e.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&$e.instancing===!1||!V.isInstancedMesh&&$e.instancing===!0||V.isSkinnedMesh&&$e.skinning===!1||!V.isSkinnedMesh&&$e.skinning===!0||V.isInstancedMesh&&$e.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&$e.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&$e.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&$e.instancingMorph===!1&&V.morphTexture!==null||$e.envMap!==we||k.fog===!0&&$e.fog!==pe||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ue.numPlanes||$e.numIntersection!==ue.numIntersection)||$e.vertexAlphas!==Ke||$e.vertexTangents!==nt||$e.morphTargets!==Ye||$e.morphNormals!==Rt||$e.morphColors!==Vt||$e.toneMapping!==qt||$e.morphTargetsCount!==Dt)&&(Ut=!0):(Ut=!0,$e.__version=k.version);let In=$e.currentProgram;Ut===!0&&(In=Ai(k,G,V));let Ri=!1,En=!1,$s=!1,rn=In.getUniforms(),_i=$e.uniforms;if(He.useProgram(In.program)&&(Ri=!0,En=!0,$s=!0),k.id!==N&&(N=k.id,En=!0),Ri||D!==T){Tt.reverseDepthBuffer?(Pe.copy(T.projectionMatrix),o0(Pe),l0(Pe),rn.setValue(F,"projectionMatrix",Pe)):rn.setValue(F,"projectionMatrix",T.projectionMatrix),rn.setValue(F,"viewMatrix",T.matrixWorldInverse);let Fn=rn.map.cameraPosition;Fn!==void 0&&Fn.setValue(F,st.setFromMatrixPosition(T.matrixWorld)),Tt.logarithmicDepthBuffer&&rn.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&rn.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),D!==T&&(D=T,En=!0,$s=!0)}if(V.isSkinnedMesh){rn.setOptional(F,V,"bindMatrix"),rn.setOptional(F,V,"bindMatrixInverse");let Fn=V.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),rn.setValue(F,"boneTexture",Fn.boneTexture,C))}V.isBatchedMesh&&(rn.setOptional(F,V,"batchingTexture"),rn.setValue(F,"batchingTexture",V._matricesTexture,C),rn.setOptional(F,V,"batchingIdTexture"),rn.setValue(F,"batchingIdTexture",V._indirectTexture,C),rn.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&rn.setValue(F,"batchingColorTexture",V._colorsTexture,C));let qs=$.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0)&&qe.update(V,$,In),(En||$e.receiveShadow!==V.receiveShadow)&&($e.receiveShadow=V.receiveShadow,rn.setValue(F,"receiveShadow",V.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(_i.envMap.value=we,_i.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&G.environment!==null&&(_i.envMapIntensity.value=G.environmentIntensity),En&&(rn.setValue(F,"toneMappingExposure",_.toneMappingExposure),$e.needsLights&&ji(_i,$s),pe&&k.fog===!0&&ve.refreshFogUniforms(_i,pe),ve.refreshMaterialUniforms(_i,k,se,q,m.state.transmissionRenderTarget[T.id]),br.upload(F,ws($e),_i,C)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(br.upload(F,ws($e),_i,C),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&rn.setValue(F,"center",V.center),rn.setValue(F,"modelViewMatrix",V.modelViewMatrix),rn.setValue(F,"normalMatrix",V.normalMatrix),rn.setValue(F,"modelMatrix",V.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Fn=k.uniformsGroups;for(let Ks=0,Oa=Fn.length;Ks<Oa;Ks++){let ka=Fn[Ks];U.update(ka,In),U.bind(ka,In)}}return In}function ji(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function Qi(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,G,$){at.get(T.texture).__webglTexture=G,at.get(T.depthTexture).__webglTexture=$;let k=at.get(T);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=$===void 0,k.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,G){let $=at.get(T);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(T,G=0,$=0){R=T,I=G,A=$;let k=!0,V=null,pe=!1,De=!1;if(T){let we=at.get(T);if(we.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(F.FRAMEBUFFER,null),k=!1;else if(we.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(we.__hasExternalTextures)C.rebindTextures(T,at.get(T.texture).__webglTexture,at.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ye=T.depthTexture;if(we.__boundDepthTexture!==Ye){if(Ye!==null&&at.has(Ye)&&(T.width!==Ye.image.width||T.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}let Ke=T.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(De=!0);let nt=at.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(nt[G])?V=nt[G][$]:V=nt[G],pe=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?V=at.get(T).__webglMultisampledFramebuffer:Array.isArray(nt)?V=nt[$]:V=nt,v.copy(T.viewport),S.copy(T.scissor),B=T.scissorTest}else v.copy(ge).multiplyScalar(se).floor(),S.copy(Ee).multiplyScalar(se).floor(),B=_t;if(He.bindFramebuffer(F.FRAMEBUFFER,V)&&k&&He.drawBuffers(T,V),He.viewport(v),He.scissor(S),He.setScissorTest(B),pe){let we=at.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+G,we.__webglTexture,$)}else if(De){let we=at.get(T.texture),Ke=G||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,we.__webglTexture,$||0,Ke)}N=-1},this.readRenderTargetPixels=function(T,G,$,k,V,pe,De){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=at.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(_e=_e[De]),_e){He.bindFramebuffer(F.FRAMEBUFFER,_e);try{let we=T.texture,Ke=we.format,nt=we.type;if(!Tt.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-k&&$>=0&&$<=T.height-V&&F.readPixels(G,$,k,V,oe.convert(Ke),oe.convert(nt),pe)}finally{let we=R!==null?at.get(R).__webglFramebuffer:null;He.bindFramebuffer(F.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(T,G,$,k,V,pe,De){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=at.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(_e=_e[De]),_e){let we=T.texture,Ke=we.format,nt=we.type;if(!Tt.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=T.width-k&&$>=0&&$<=T.height-V){He.bindFramebuffer(F.FRAMEBUFFER,_e);let Ye=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ye),F.bufferData(F.PIXEL_PACK_BUFFER,pe.byteLength,F.STREAM_READ),F.readPixels(G,$,k,V,oe.convert(Ke),oe.convert(nt),0);let Rt=R!==null?at.get(R).__webglFramebuffer:null;He.bindFramebuffer(F.FRAMEBUFFER,Rt);let Vt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await a0(F,Vt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ye),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,pe),F.deleteBuffer(Ye),F.deleteSync(Vt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,G=null,$=0){T.isTexture!==!0&&(Po("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1]);let k=Math.pow(2,-$),V=Math.floor(T.image.width*k),pe=Math.floor(T.image.height*k),De=G!==null?G.x:0,_e=G!==null?G.y:0;C.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,De,_e,V,pe),He.unbindTexture()},this.copyTextureToTexture=function(T,G,$=null,k=null,V=0){T.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1],G=arguments[2],V=arguments[3]||0,$=null);let pe,De,_e,we,Ke,nt;$!==null?(pe=$.max.x-$.min.x,De=$.max.y-$.min.y,_e=$.min.x,we=$.min.y):(pe=T.image.width,De=T.image.height,_e=0,we=0),k!==null?(Ke=k.x,nt=k.y):(Ke=0,nt=0);let Ye=oe.convert(G.format),Rt=oe.convert(G.type);C.setTexture2D(G,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);let Vt=F.getParameter(F.UNPACK_ROW_LENGTH),qt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),sn=F.getParameter(F.UNPACK_SKIP_PIXELS),Dt=F.getParameter(F.UNPACK_SKIP_ROWS),$e=F.getParameter(F.UNPACK_SKIP_IMAGES),Bt=T.isCompressedTexture?T.mipmaps[V]:T.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Bt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Bt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,_e),F.pixelStorei(F.UNPACK_SKIP_ROWS,we),T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,V,Ke,nt,pe,De,Ye,Rt,Bt.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,V,Ke,nt,Bt.width,Bt.height,Ye,Bt.data):F.texSubImage2D(F.TEXTURE_2D,V,Ke,nt,pe,De,Ye,Rt,Bt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Vt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,qt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,sn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Dt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,$e),V===0&&G.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),He.unbindTexture()},this.copyTextureToTexture3D=function(T,G,$=null,k=null,V=0){T.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,k=arguments[1]||null,T=arguments[2],G=arguments[3],V=arguments[4]||0);let pe,De,_e,we,Ke,nt,Ye,Rt,Vt,qt=T.isCompressedTexture?T.mipmaps[V]:T.image;$!==null?(pe=$.max.x-$.min.x,De=$.max.y-$.min.y,_e=$.max.z-$.min.z,we=$.min.x,Ke=$.min.y,nt=$.min.z):(pe=qt.width,De=qt.height,_e=qt.depth,we=0,Ke=0,nt=0),k!==null?(Ye=k.x,Rt=k.y,Vt=k.z):(Ye=0,Rt=0,Vt=0);let sn=oe.convert(G.format),Dt=oe.convert(G.type),$e;if(G.isData3DTexture)C.setTexture3D(G,0),$e=F.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)C.setTexture2DArray(G,0),$e=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);let Bt=F.getParameter(F.UNPACK_ROW_LENGTH),Ut=F.getParameter(F.UNPACK_IMAGE_HEIGHT),In=F.getParameter(F.UNPACK_SKIP_PIXELS),Ri=F.getParameter(F.UNPACK_SKIP_ROWS),En=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,qt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,qt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,we),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ke),F.pixelStorei(F.UNPACK_SKIP_IMAGES,nt),T.isDataTexture||T.isData3DTexture?F.texSubImage3D($e,V,Ye,Rt,Vt,pe,De,_e,sn,Dt,qt.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D($e,V,Ye,Rt,Vt,pe,De,_e,sn,qt.data):F.texSubImage3D($e,V,Ye,Rt,Vt,pe,De,_e,sn,Dt,qt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Bt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ut),F.pixelStorei(F.UNPACK_SKIP_PIXELS,In),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ri),F.pixelStorei(F.UNPACK_SKIP_IMAGES,En),V===0&&G.generateMipmaps&&F.generateMipmap($e),He.unbindTexture()},this.initRenderTarget=function(T){at.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),He.unbindTexture()},this.resetState=function(){I=0,A=0,R=null,He.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===su?"display-p3":"srgb",t.unpackColorSpace=kt.workingColorSpace===ml?"display-p3":"srgb"}};var Wo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new tt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Dr=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ya=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fh,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ln=new P,va=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ui(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ui(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ui(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ui(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array),r=Gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var wf=new P,Af=new Ht,Tf=new Ht,iy=new P,Rf=new ct,po=new P,bc=new qn,Cf=new ct,Mc=new Pr,Xo=class extends Ae{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Id,this.bindMatrix=new ct,this.bindMatrixInverse=new ct,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,po),this.boundingBox.expandByPoint(po)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,po),this.boundingSphere.expandByPoint(po)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bc.copy(this.boundingSphere),bc.applyMatrix4(s),e.ray.intersectsSphere(bc)!==!1&&(Cf.copy(s).invert(),Mc.copy(e.ray).applyMatrix4(Cf),!(this.boundingBox!==null&&Mc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Mc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ht,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Id?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Im?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Af.fromBufferAttribute(s.attributes.skinIndex,e),Tf.fromBufferAttribute(s.attributes.skinWeight,e),wf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Tf.getComponent(r);if(a!==0){let o=Af.getComponent(r);Rf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(iy.copy(wf).applyMatrix4(Rf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},ba=class extends on{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ur=class extends _n{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Rn,h=Rn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Pf=new ct,sy=new ct,Yo=class i{constructor(e=[],t=[]){this.uuid=fi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ct)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ct;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:sy;Pf.multiplyMatrices(o,t[r]),Pf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ur(t,e,e,Hn,di);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ba),this.bones.push(a),this.boneInverses.push(new ct().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Bs=class extends wt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},mr=new ct,If=new ct,mo=[],Lf=new Gn,ry=new ct,ra=new Ae,aa=new qn,Fr=class extends Ae{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ry)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),Lf.copy(e.boundingBox).applyMatrix4(mr),this.boundingBox.union(Lf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),aa.copy(e.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(aa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ra.geometry=this.geometry,ra.material=this.material,ra.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),aa.copy(this.boundingSphere),aa.applyMatrix4(n),e.ray.intersectsSphere(aa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,mr),If.multiplyMatrices(n,mr),ra.matrixWorld=If,ra.raycast(e,mo);for(let a=0,o=mo.length;a<o;a++){let l=mo[a];l.instanceId=r,l.object=this,t.push(l)}mo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Bs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ur(new Float32Array(s*this.count),s,this.count,eu,di));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var mi=class extends Kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$o=new P,qo=new P,Nf=new ct,oa=new Pr,go=new qn,Sc=new P,Df=new P,Wi=class extends on{constructor(e=new Yt,t=new mi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)$o.fromBufferAttribute(t,s-1),qo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=$o.distanceTo(qo);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(s),go.radius+=r,e.ray.intersectsSphere(go)===!1)return;Nf.copy(s).invert(),oa.copy(e.ray).applyMatrix4(Nf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),b=h.getX(x+1),_=xo(this,e,oa,l,p,b);_&&t.push(_)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=xo(this,e,oa,l,x,m);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=xo(this,e,oa,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=xo(this,e,oa,l,g-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function xo(i,e,t,n,s,r){let a=i.geometry.attributes.position;if($o.fromBufferAttribute(a,s),qo.fromBufferAttribute(a,r),t.distanceSqToSegment($o,qo,Sc,Df)>n)return;Sc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Sc);if(!(l<e.near||l>e.far))return{distance:l,point:Df.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Uf=new P,Ff=new P,ms=class extends Wi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Uf.fromBufferAttribute(t,s),Ff.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Uf.distanceTo(Ff);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ko=class extends Wi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ma=class extends Kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Of=new ct,Ph=new Pr,_o=new qn,yo=new P,Hs=class extends on{constructor(e=new Yt,t=new Ma){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(s),_o.radius+=r,e.ray.intersectsSphere(_o)===!1)return;Of.copy(s).invert(),Ph.copy(e.ray).applyMatrix4(Of);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);yo.fromBufferAttribute(u,m),kf(yo,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)yo.fromBufferAttribute(u,g),kf(yo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function kf(i,e,t,n,s,r,a){let o=Ph.distanceSqToPoint(i);if(o<t){let l=new P;Ph.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Zo=class extends _n{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ei=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Ue:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new P,s=[],r=[],a=[],o=new P,l=new ct;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(dn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(dn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Sa=class extends ei{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Ue){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ih=class extends Sa{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ou(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var vo=new P,Ec=new ou,wc=new ou,Ac=new ou,Lh=class extends ei{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(vo.subVectors(s[0],s[1]).add(s[0]),c=vo);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(vo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=vo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ec.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),wc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Ac.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Ec.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),wc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ac.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ec.calc(l),wc.calc(l),Ac.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function zf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function ay(i,e){let t=1-i;return t*t*e}function oy(i,e){return 2*(1-i)*i*e}function ly(i,e){return i*i*e}function fa(i,e,t,n){return ay(i,e)+oy(i,t)+ly(i,n)}function cy(i,e){let t=1-i;return t*t*t*e}function hy(i,e){let t=1-i;return 3*t*t*i*e}function uy(i,e){return 3*(1-i)*i*i*e}function dy(i,e){return i*i*i*e}function pa(i,e,t,n,s){return cy(i,e)+hy(i,t)+uy(i,n)+dy(i,s)}var Jo=class extends ei{constructor(e=new Ue,t=new Ue,n=new Ue,s=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ue){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(pa(e,s.x,r.x,a.x,o.x),pa(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nh=class extends ei{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(pa(e,s.x,r.x,a.x,o.x),pa(e,s.y,r.y,a.y,o.y),pa(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},jo=class extends ei{constructor(e=new Ue,t=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ue){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dh=class extends ei{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qo=class extends ei{constructor(e=new Ue,t=new Ue,n=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ue){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(fa(e,s.x,r.x,a.x),fa(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uh=class extends ei{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(fa(e,s.x,r.x,a.x),fa(e,s.y,r.y,a.y),fa(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},el=class extends ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ue){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(zf(o,l.x,c.x,h.x,u.x),zf(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ue().fromArray(s))}return this}},Bf=Object.freeze({__proto__:null,ArcCurve:Ih,CatmullRomCurve3:Lh,CubicBezierCurve:Jo,CubicBezierCurve3:Nh,EllipseCurve:Sa,LineCurve:jo,LineCurve3:Dh,QuadraticBezierCurve:Qo,QuadraticBezierCurve3:Uh,SplineCurve:el}),Fh=class extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bf[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Bf[s.type]().fromJSON(s))}return this}},Oh=class extends Fh{constructor(e){super(),this.type="Path",this.currentPoint=new Ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new jo(this.currentPoint.clone(),new Ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Qo(this.currentPoint.clone(),new Ue(e,t),new Ue(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Jo(this.currentPoint.clone(),new Ue(e,t),new Ue(n,s),new Ue(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new el(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Sa(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ea=class i extends Yt{constructor(e=[new Ue(0,-.5),new Ue(.5,0),new Ue(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=dn(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new P,d=new Ue,f=new P,g=new P,x=new P,m=0,p=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let b=0;b<=t;b++){let _=n+b*h*s,y=Math.sin(_),I=Math.cos(_);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*y,u.y=e[A].y,u.z=e[A].x*I,a.push(u.x,u.y,u.z),d.x=b/t,d.y=A/(e.length-1),o.push(d.x,d.y);let R=l[3*A+0]*y,N=l[3*A+1],D=l[3*A+0]*I;c.push(R,N,D)}}for(let b=0;b<t;b++)for(let _=0;_<e.length-1;_++){let y=_+b*e.length,I=y,A=y+e.length,R=y+e.length+1,N=y+1;r.push(I,A,N),r.push(R,N,A)}this.setIndex(r),this.setAttribute("position",new Lt(a,3)),this.setAttribute("uv",new Lt(o,2)),this.setAttribute("normal",new Lt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},tl=class i extends Ea{constructor(e=1,t=1,n=4,s=8){let r=new Oh;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}};var mn=class i extends Yt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;b(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Lt(u,3)),this.setAttribute("normal",new Lt(d,3)),this.setAttribute("uv",new Lt(f,2));function b(){let y=new P,I=new P,A=0,R=(t-e)/n;for(let N=0;N<=r;N++){let D=[],v=N/r,S=v*(t-e)+e;for(let B=0;B<=s;B++){let W=B/s,Y=W*l+o,te=Math.sin(Y),q=Math.cos(Y);I.x=S*te,I.y=-v*n+m,I.z=S*q,u.push(I.x,I.y,I.z),y.set(te,R,q).normalize(),d.push(y.x,y.y,y.z),f.push(W,1-v),D.push(g++)}x.push(D)}for(let N=0;N<s;N++)for(let D=0;D<r;D++){let v=x[D][N],S=x[D+1][N],B=x[D+1][N+1],W=x[D][N+1];e>0&&(h.push(v,S,W),A+=3),t>0&&(h.push(S,B,W),A+=3)}c.addGroup(p,A,0),p+=A}function _(y){let I=g,A=new Ue,R=new P,N=0,D=y===!0?e:t,v=y===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;let S=g;for(let B=0;B<=s;B++){let Y=B/s*l+o,te=Math.cos(Y),q=Math.sin(Y);R.x=D*q,R.y=m*v,R.z=D*te,u.push(R.x,R.y,R.z),d.push(0,v,0),A.x=te*.5+.5,A.y=q*.5*v+.5,f.push(A.x,A.y),g++}for(let B=0;B<s;B++){let W=I+B,Y=S+B;y===!0?h.push(Y,Y+1,W):h.push(Y+1,Y,W),N+=3}c.addGroup(p,N,y===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},nl=class i extends mn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},kh=class i extends Yt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Lt(r,3)),this.setAttribute("normal",new Lt(r.slice(),3)),this.setAttribute("uv",new Lt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let _=new P,y=new P,I=new P;for(let A=0;A<t.length;A+=3)f(t[A+0],_),f(t[A+1],y),f(t[A+2],I),l(_,y,I,b)}function l(b,_,y,I){let A=I+1,R=[];for(let N=0;N<=A;N++){R[N]=[];let D=b.clone().lerp(y,N/A),v=_.clone().lerp(y,N/A),S=A-N;for(let B=0;B<=S;B++)B===0&&N===A?R[N][B]=D:R[N][B]=D.clone().lerp(v,B/S)}for(let N=0;N<A;N++)for(let D=0;D<2*(A-N)-1;D++){let v=Math.floor(D/2);D%2===0?(d(R[N][v+1]),d(R[N+1][v]),d(R[N][v])):(d(R[N][v+1]),d(R[N+1][v+1]),d(R[N+1][v]))}}function c(b){let _=new P;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(b),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let b=new P;for(let _=0;_<r.length;_+=3){b.x=r[_+0],b.y=r[_+1],b.z=r[_+2];let y=m(b)/2/Math.PI+.5,I=p(b)/Math.PI+.5;a.push(y,1-I)}g(),u()}function u(){for(let b=0;b<a.length;b+=6){let _=a[b+0],y=a[b+2],I=a[b+4],A=Math.max(_,y,I),R=Math.min(_,y,I);A>.9&&R<.1&&(_<.2&&(a[b+0]+=1),y<.2&&(a[b+2]+=1),I<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,_){let y=b*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function g(){let b=new P,_=new P,y=new P,I=new P,A=new Ue,R=new Ue,N=new Ue;for(let D=0,v=0;D<r.length;D+=9,v+=6){b.set(r[D+0],r[D+1],r[D+2]),_.set(r[D+3],r[D+4],r[D+5]),y.set(r[D+6],r[D+7],r[D+8]),A.set(a[v+0],a[v+1]),R.set(a[v+2],a[v+3]),N.set(a[v+4],a[v+5]),I.copy(b).add(_).add(y).divideScalar(3);let S=m(I);x(A,v+0,b,S),x(R,v+2,_,S),x(N,v+4,y,S)}}function x(b,_,y,I){I<0&&b.x===1&&(a[_]=b.x-1),y.x===0&&y.z===0&&(a[_]=I/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var bo=new P,Mo=new P,Tc=new P,So=new cs,il=class extends Yt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(yr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:m,c:p}=So;if(x.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),So.getNormal(Tc),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let b=0;b<3;b++){let _=(b+1)%3,y=u[b],I=u[_],A=So[h[b]],R=So[h[_]],N=`${y}_${I}`,D=`${I}_${y}`;D in d&&d[D]?(Tc.dot(d[D].normal)<=r&&(f.push(A.x,A.y,A.z),f.push(R.x,R.y,R.z)),d[D]=null):N in d||(d[N]={index0:c[b],index1:c[_],normal:Tc.clone()})}}for(let g in d)if(d[g]){let{index0:x,index1:m}=d[g];bo.fromBufferAttribute(o,x),Mo.fromBufferAttribute(o,m),f.push(bo.x,bo.y,bo.z),f.push(Mo.x,Mo.y,Mo.z)}this.setAttribute("position",new Lt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var sl=class i extends kh{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Xi=class i extends Yt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new P,g=new Ue;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let b=p+m,_=b,y=b+n+1,I=b+n+2,A=b+1;o.push(_,y,A),o.push(y,I,A)}}this.setIndex(o),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Sn=class i extends Yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,d=new P,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let b=[],_=p/n,y=0;p===0&&a===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let I=0;I<=t;I++){let A=I/t;u.x=-e*Math.cos(s+A*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(s+A*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(A+y,1-_),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){let _=h[p][b+1],y=h[p][b],I=h[p+1][b],A=h[p+1][b+1];(p!==0||a>0)&&f.push(_,y,A),(p!==n-1||l<Math.PI)&&f.push(y,I,A)}this.setIndex(f),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var rl=class i extends Yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,b=(s+1)*f+g;a.push(x,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new Lt(o,3)),this.setAttribute("normal",new Lt(l,3)),this.setAttribute("uv",new Lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var en=class extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rp,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jn=class extends en{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Eo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function fy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function py(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Hf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function mp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var gs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zh=class extends gs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ld,endingEnd:Ld}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nd:r=e,o=2*t-n;break;case Dd:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nd:a=e,l=2*n-t;break;case Dd:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,b=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let I=0;I!==o;++I)r[I]=p*a[h+I]+b*a[c+I]+_*a[l+I]+y*a[u+I];return r}},Bh=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Hh=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ti=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Eo(t,this.TimeBufferType),this.values=Eo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Eo(e.times,Array),values:Eo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Tr:t=this.InterpolantFactoryMethodDiscrete;break;case Rr:t=this.InterpolantFactoryMethodLinear;break;case $l:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return Rr;case this.InterpolantFactoryMethodSmooth:return $l}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&fy(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$l,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=Rr;var xs=class extends ti{constructor(e,t,n){super(e,t,n)}};xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Tr;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends ti{};al.prototype.ValueTypeName="color";var Yi=class extends ti{};Yi.prototype.ValueTypeName="number";var Vh=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)pi.slerpFlat(r,0,a,c-o,a,c,l);return r}},$i=class extends ti{InterpolantFactoryMethodLinear(e){return new Vh(this.times,this.values,this.getValueSize(),e)}};$i.prototype.ValueTypeName="quaternion";$i.prototype.InterpolantFactoryMethodSmooth=void 0;var _s=class extends ti{constructor(e,t,n){super(e,t,n)}};_s.prototype.ValueTypeName="string";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=Tr;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends ti{};qi.prototype.ValueTypeName="vector";var ol=class{constructor(e="",t=-1,n=[],s=Lm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=fi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(gy(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(ti.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=py(l);l=Hf(l,1,h),c=Hf(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Yi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,x){if(f.length!==0){let m=[],p=[];mp(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let b=0;b!==d[g].morphTargets.length;++b){let _=d[g];m.push(_.time),p.push(_.morphTarget===x?1:0)}s.push(new Yi(".morphTargetInfluence["+x+"]",m,p))}l=f.length*a}else{let f=".bones["+t[u].name+"]";n(qi,f+".position",d,"pos",s),n($i,f+".quaternion",d,"rot",s),n(qi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function my(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yi;case"vector":case"vector2":case"vector3":case"vector4":return qi;case"color":return al;case"quaternion":return $i;case"bool":case"boolean":return xs;case"string":return _s}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function gy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=my(i.type);if(i.times===void 0){let t=[],n=[];mp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var hs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Gh=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},xy=new Gh,Ki=class{constructor(e){this.manager=e!==void 0?e:xy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ki.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oi={},Wh=class extends Error{constructor(e,t){super(e),this.response=t}},wa=class extends Ki{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=hs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Oi[e]!==void 0){Oi[e].push({onLoad:t,onProgress:n,onError:s});return}Oi[e]=[],Oi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Oi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){b();function b(){u.read().then(({done:_,value:y})=>{if(_)p.close();else{x+=y.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let A=0,R=h.length;A<R;A++){let N=h[A];N.onProgress&&N.onProgress(I)}p.enqueue(y),b()}},_=>{p.error(_)})}}});return new Response(m)}else throw new Wh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{hs.add(e,c);let h=Oi[e];delete Oi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Oi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Oi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Xh=class extends Ki{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=hs.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=xa("img");function l(){h(),hs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Or=class extends Ki{constructor(e){super(e)}load(e,t,n,s){let r=new _n,a=new Xh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},kr=class extends on{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ll=class extends kr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Rc=new ct,Vf=new P,Gf=new P,Aa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _a,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Vf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vf),Gf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gf),t.updateMatrixWorld(),Rc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Yh=class extends Aa{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Cr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},cl=class extends kr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Yh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Wf=new ct,la=new P,Cc=new P,$h=class extends Aa{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new Ht(2,1,1,1),new Ht(0,1,1,1),new Ht(3,1,1,1),new Ht(1,1,1,1),new Ht(3,0,1,1),new Ht(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),la.setFromMatrixPosition(e.matrixWorld),n.position.copy(la),Cc.copy(n.position),Cc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Cc),n.updateMatrixWorld(),s.makeTranslation(-la.x,-la.y,-la.z),Wf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wf)}},zr=class extends kr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new $h}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},qh=class extends Aa{constructor(){super(new Lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Br=class extends kr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new qh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ys=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var hl=class extends Ki{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=hs.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return hs.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),hs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});hs.add(e,l),r.manager.itemStart(e)}};var ul=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Xf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Xf(){return performance.now()}var lu="\\[\\]\\.:\\/",_y=new RegExp("["+lu+"]","g"),cu="[^"+lu+"]",yy="[^"+lu.replace("\\.","")+"]",vy=/((?:WC+[\/:])*)/.source.replace("WC",cu),by=/(WCOD+)?/.source.replace("WCOD",yy),My=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cu),Sy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cu),Ey=new RegExp("^"+vy+by+My+Sy+"$"),wy=["material","materials","bones","map"],Kh=class{constructor(e,t,n){let s=n||Zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Zt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_y,"")}static parseTrackName(e){let t=Ey.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);wy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Zt.Composite=Kh;Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iv=new Float32Array(1);var dl=class extends ms{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Yt;r.setIndex(new wt(n,1)),r.setAttribute("position",new Lt(s,3)),super(r,new mi({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var Wn={hull:{de:"Hallenh\xFClle / Tragwerk",en:"Hall envelope / structure",rho:0,c:"#7d8799"},concrete:{de:"Beton",en:"Concrete",rho:2400,c:"#b8bcc4"},steel:{de:"Stahl",en:"Steel",rho:7850,c:"#4da6ff"},brick:{de:"Ziegelbruch",en:"Brick rubble",rho:1400,c:"#e5835a"},hazard:{de:"Schadstoff (Asbest)",en:"Hazardous (asbestos)",rho:1e3,c:"#ff5a5f"},wood:{de:"Holz",en:"Wood",rho:600,c:"#e0b07a"},soil:{de:"Sch\xFCttgut",en:"Bulk material",rho:1700,c:"#c9a46a"},masonry:{de:"Mauerwerk / Trockenbau",en:"Masonry / drywall",rho:1200,c:"#c8d2e0"},mixed:{de:"Sonstiges / Technik",en:"Other / equipment",rho:0,c:"#9b8cff"},none:{de:"Personen & Fahrzeuge",en:"People & vehicles",rho:0,c:"#5fd38d"}};var Zi=[{id:"seg",st:"uc1",key:"G",icon:"\u25E7",t:ye("Semantische Segmentierung","Semantic segmentation"),d:ye("Die ganze Szene in Umgebung \xB7 Boden \xB7 Ziel \u2013 Ziel sind alle wichtigen Objekte (Klassen wie in Artefakt A1).","The whole scene as environment \xB7 floor \xB7 target \u2013 targets are all relevant objects (classes as in artefact A1).")},{id:"search",st:"uc2",key:"Z",icon:"\u2315",t:ye("Zero-Shot-Suche","Zero-shot search"),d:ye("Textprompt \u2192 Objekt-Cluster mit Bounding Box, ohne Training \u2013 wie GroundingDINO \u2192 SAM (Artefakt A3).","Text prompt \u2192 object clusters with bounding boxes, no training \u2013 like GroundingDINO \u2192 SAM (artefact A3).")},{id:"heat",st:"uc3",key:"H",icon:"\u25A6",t:ye("Merkmals-Heatmap","Feature heatmap"),d:ye("Die 16 Eingangsmerkmale des RandLA-Net (k = 30) auf jedem Punkt \u2013 plus Ebenheit des Hallenbodens.","The 16 RandLA-Net input features (k = 30) on every point \u2013 plus hall floor flatness.")},{id:"xray",st:"uc4",key:"X",icon:"\u25CC",t:ye("R\xF6ntgenblick","X-ray view"),d:ye("Halle wird durchsichtig, verborgene Objekte erscheinen als Hologramm \u2013 wie Anlagen hinter Verkleidungen.","The hall turns see-through, hidden objects appear as holograms \u2013 like equipment behind cladding.")},{id:"mesh",st:"uc5",key:"M",icon:"\u25B3",t:ye("Scan-to-Mesh & Modell","Scan-to-mesh & model"),d:ye("Live-Oberfl\xE4chen (Marching Cubes) mit einstellbarer Feinheit, objektweise \u2013 oder das nachmodellierte Modell.","Live surfaces (marching cubes) with adjustable detail, per object \u2013 or the reconstructed model.")},{id:"cut",st:"uc5",key:"5",icon:"\u229F",t:ye("Schnittebene","Section plane"),d:ye("Horizontal-, L\xE4ngs- oder Querschnitt durch Punktwolke, Mesh und Modell \u2013 die Schnittkante leuchtet, wie in der Planungssoftware.","Horizontal, longitudinal or cross section through point cloud, mesh and model \u2013 the cut edge lights up, as in planning software.")},{id:"mat",st:"uc6",key:"V",icon:"\u2B22",t:ye("Materialkataster","Material register"),d:ye("Jeder Punkt nach Material, Mengen und Massen aus dem Modell \u2013 Grundlage f\xFCr R\xFCckbau und Kreislauf.","Every point by material, quantities and masses from the model \u2013 the basis for deconstruction and circularity.")},{id:"net",st:"uc7",icon:"\u2316",passive:!0,t:ye("Scanner-Netzwerk","Scanner network"),d:ye("Station\xE4re Laserscanner: bis zu 6 statt 3 gleichzeitig \u2013 wie das LiDAR-Netz der Smart City.","Stationary laser scanners: up to 6 instead of 3 at once \u2013 like the smart-city LiDAR network.")},{id:"nbv",st:"uc7",key:"Y",icon:"\u233E",t:ye("Scan-Planer (Next Best View)","Scan planner (next best view)"),d:ye("Schl\xE4gt die n\xE4chsten TLS-Standpunkte vor: gr\xF6\xDFter erwarteter Neuzuwachs bei wenig Verdeckung \u2013 weniger Standpunkte, weniger Akku.","Suggests the next TLS positions: largest expected gain with little occlusion \u2013 fewer set-ups, less battery.")},{id:"therm",st:"uc8",key:"I",icon:"\u2668",t:ye("Thermalkamera","Thermal camera"),d:ye("W\xE4rmebild wie im WAAM-Monitoring: frische Schichten gl\xFChen, Anlagen und Personen sind warm.","Thermal view as in WAAM monitoring: fresh layers glow, machines and people are warm.")},{id:"measure",st:"uc9",key:"N",icon:"\u27F7",t:ye("Messwerkzeug","Measuring tool"),d:ye("Zwei Punkte anklicken \u2192 Abstand in mm, direkt in der Punktwolke.","Click two points \u2192 distance in mm, directly in the point cloud.")},{id:"ask",st:"docs",key:"B",icon:"\u275D",t:ye("Frag das Lab","Ask the lab"),d:ye("Fragen zum Scan \u2013 Antworten aus Scan, Segmentierung und Modell, immer mit Quelle (regelbasiert, offline).","Questions about the scan \u2013 answers from scan, segmentation and model, always with a source (rule-based, offline).")},{id:"auto",st:"talks",key:"O",icon:"\u2708",t:ye("Autopilot","Autopilot"),d:ye("Pr\xE4sentationsmodus: Die Drohne fliegt, scannt und l\xE4dt selbst und zeigt jede Station.","Presentation mode: the drone flies, scans and charges by itself and presents every station.")},{id:"range",st:"profile",icon:"\u21F2",passive:!0,t:ye("Reichweiten-Upgrade","Range upgrade"),d:ye("+50 % Scanreichweite f\xFCr alle Technologien.","+50 % scanning range for every technology.")},{id:"icp",st:"bonus",key:"R",icon:"\u229B",t:ye("Registrierung (ICP)","Registration (ICP)"),d:ye("SLAM-Drift beseitigen: Scans per ICP auf die Zielmarken registrieren (Artefakt A2).","Remove SLAM drift: register scans to the targets via ICP (artefact A2).")}],gp=[{id:"labels",key:"L",icon:"\u{1F3F7}",t:ye("Labels","Labels")},{id:"plan",key:"K",icon:"\u25A4",t:ye("Grundriss","Floor plan")},{id:"proj",key:"J",icon:"\u25EB",t:ye("Projektionen","Projections")},{id:"pano",key:"U",icon:"\u25CE",t:ye("360\xB0-Panoramen","360\xB0 panoramas")}],hu=[{id:"drone",key:"1",icon:"\u2723",t:ye("Drohne \xB7 UAV-LiDAR","Drone \xB7 UAV LiDAR"),d:ye("Aus der Luft, gro\xDFfl\xE4chig. H\xF6her fliegen = breiterer Scan. Akku h\xE4lt nicht ewig.","From above, large areas. Fly higher = wider scan. The battery does not last forever."),dt:ye("Joystick links fliegen, \u2912 \u2913 H\xF6he, ein Finger dreht die Ansicht, zwei Finger zoomen.","Left joystick flies, \u2912 \u2913 altitude, one finger turns the view, two fingers zoom.")},{id:"handheld",key:"2",icon:"\u25C9",t:ye("Handheld \xB7 SLAM","Handheld \xB7 SLAM"),d:ye("Ego-Perspektive am Boden. Leertaste halten = scannen, wohin du schaust.","First person on the ground. Hold space = scan where you look."),dt:ye("Ego-Perspektive. Joystick gehen, Finger umsehen, \u25CF halten = scannen, wohin du schaust.","First person. Joystick walks, finger looks around, hold \u25CF = scan where you look.")},{id:"tls",key:"3",icon:"\u2295",t:ye("Station\xE4r \xB7 TLS","Stationary \xB7 TLS"),d:ye("Scanner aufstellen (P), dann alle gleichzeitig scannen (Leertaste) \u2013 mit echten Scan-Schatten und 360\xB0-Panorama.","Set up scanners (P), then scan with all at once (space) \u2013 with real scan shadows and 360\xB0 panoramas."),dt:ye("\u2295 Scanner aufstellen, \u25B6 alle gleichzeitig scannen \u2013 mit echten Scan-Schatten und 360\xB0-Panorama.","\u2295 set up scanners, \u25B6 scan with all at once \u2013 with real scan shadows and 360\xB0 panoramas.")}],uu=[{k:"x",t:ye("Koordinate x","coordinate x")},{k:"y",t:ye("Koordinate y (H\xF6he)","coordinate y (height)")},{k:"z",t:ye("Koordinate z","coordinate z")},{k:"nx",t:ye("Normale x","normal x")},{k:"ny",t:ye("Normale y (vertikal)","normal y (vertical)")},{k:"nz",t:ye("Normale z","normal z")},{k:"planarity",t:ye("Planarit\xE4t (\u03BB\u2082\u2212\u03BB\u2083)/\u03BB\u2081 \u2013 Fl\xE4chen","planarity (\u03BB\u2082\u2212\u03BB\u2083)/\u03BB\u2081 \u2013 surfaces")},{k:"density",t:ye("Punktdichte im mittleren Radius","point density in mean radius")},{k:"anisotropy",t:ye("Anisotropie (\u03BB\u2081\u2212\u03BB\u2083)/\u03BB\u2081","anisotropy (\u03BB\u2081\u2212\u03BB\u2083)/\u03BB\u2081")},{k:"sphericity",t:ye("Sph\xE4rizit\xE4t \u03BB\u2083/\u03BB\u2081 \u2013 Volumen, Streuung","sphericity \u03BB\u2083/\u03BB\u2081 \u2013 volume, scatter")},{k:"curvature",t:ye("Kr\xFCmmung \u03BB\u2083/\u03A3\u03BB \u2013 Kanten","curvature \u03BB\u2083/\u03A3\u03BB \u2013 edges")},{k:"linearity",t:ye("Linearit\xE4t (\u03BB\u2081\u2212\u03BB\u2082)/\u03BB\u2081 \u2013 St\xE4be, Kanten","linearity (\u03BB\u2081\u2212\u03BB\u2082)/\u03BB\u2081 \u2013 bars, edges")},{k:"omnivariance",t:ye("Omnivarianz \u221B(\u03BB\u2081\u03BB\u2082\u03BB\u2083)","omnivariance \u221B(\u03BB\u2081\u03BB\u2082\u03BB\u2083)")},{k:"eigenentropy",t:ye("Eigenentropie \u2212\u03A3\u03BB\xB7ln \u03BB","eigenentropy \u2212\u03A3\u03BB\xB7ln \u03BB")},{k:"eigen_sum",t:ye("Eigenwertsumme \u03A3\u03BB","sum of eigenvalues \u03A3\u03BB")},{k:"gravity_dist",t:ye("Abstand zum Schwerpunkt dichter Bereiche","distance to centre of dense regions")},{k:"flatness",t:ye("Ebenheit Hallenboden \xB14 cm (Ausgleichsebene)","hall floor flatness \xB14 cm (best-fit plane)")}],_l={auto:["fahrzeug","vehicle"],car:["fahrzeug","vehicle"],pkw:["fahrzeug"],mensch:["person","people"],menschen:["person","people"],human:["person","people"],personen:["person"],people:["person"],fahrrad:["radfahrer","cyclist"],bike:["radfahrer","cyclist"],stahl:["stahl","steel","tr\xE4ger","beam","st\xFCtze","binder"],steel:["stahl","steel","beam","column","truss"],bewehrung:["stab","bar"],rebar:["stab","bar"],maschine:["anlage","line"],machine:["anlage","line"],m\u00F6bel:["tisch","stuhl","furniture"],stuhl:["stuhl","chair"],chair:["chair"],tisch:["tisch","table"],roboter:["wand","wall"],drucker:["wand","wall"],waam:["wand","wall"],asbest:["asbest","asbestos","big bag"],schadstoff:["asbest","asbestos"],dokument:["lieferschein","werkszeugnis","gutachten","dokumente"],pdf:["dokumente","documents"],scanner:["laserscanner","laser scanner"],kugel:["zielkugel"],target:["zielkugel","target"]};var Ay=i=>[parseInt(i.slice(1,3),16)/255,parseInt(i.slice(3,5),16)/255,parseInt(i.slice(5,7),16)/255],Nt=(i,e,t,n,s)=>({name:ye(i,e),c:Ay(t),m:n,inst:s}),gi=(i,e,t)=>Array.from({length:t},(n,s)=>ye(`${i} ${s+1}`,`${e} ${s+1}`)),it=[{id:"uc1",kind:"uc",uc:1,t:ye("Vorfertigung & QC","Prefab QC"),x:-11,z:-4.5,r:3.2,c:"#4da6ff",parts:[Nt("Stahltr\xE4ger","steel beam","#4da6ff","steel"),Nt("Kopfplatten","end plates","#5fd38d","steel",gi("Kopfplatte","end plate",2)),Nt("Auflager","supports","#9aa8b8","wood",gi("Auflager","support",2))]},{id:"uc2",kind:"uc",uc:2,t:ye("Material & Ressourcen","Material & resources"),x:-3.5,z:-5,r:3.4,c:"#ffb547",parts:[Nt("Bagger","excavator","#ffb547","mixed"),Nt("Sch\xFCttgut \xB7 6,8 m\xB3","bulk material \xB7 6.8 m\xB3","#e0b07a","soil")]},{id:"uc3",kind:"uc",uc:3,t:ye("Fortschritt & Qualit\xE4t","Progress & quality"),x:4.5,z:-5,r:3.4,c:"#5fd38d",parts:[Nt("St\xFCtzen \xB7 montiert","columns \xB7 erected","#5fd38d","steel",gi("St\xFCtze","column",4)),Nt("Binder \xB7 montiert","truss \xB7 erected","#5fd38d","steel",gi("Binder","truss",2)),Nt("Verband \xB7 Abweichung 2,6 cm","bracing \xB7 deviation 2.6 cm","#ffb547","steel")]},{id:"uc4",kind:"uc",uc:4,t:ye("Digital Operations","Digital operations"),x:11,z:-4.5,r:3.2,c:"#ff8a5b",parts:[Nt("S\xE4ge-Bohr-Anlage \xB7 Warnung","saw-drill line \xB7 warning","#ff8a5b","mixed"),Nt("Rollenbahn","roller conveyor","#9aa8b8","steel",gi("Rollenbahn","conveyor",2)),Nt("Sensoren \xB7 4 live","sensors \xB7 4 live","#5fd38d","mixed",gi("Sensor","sensor",4))]},{id:"uc5",kind:"uc",uc:5,t:ye("Scan-to-BIM","Scan-to-BIM"),x:-11,z:2,r:3.4,c:"#9b8cff",parts:[Nt("W\xE4nde \xB7 0,24 m","walls \xB7 0.24 m","#c8d2e0","masonry"),Nt("T\xFCr & Fenster \xB7 1,01 \xD7 2,10 m","door & window \xB7 1.01 \xD7 2.10 m","#8bd17c","wood",[ye("T\xFCr","door"),ye("Fenster","window")]),Nt("M\xF6bel \xB7 Tisch, 4 St\xFChle","furniture \xB7 table, 4 chairs","#e0b07a","wood",[ye("Tisch","table"),...gi("Stuhl","chair",4)])]},{id:"uc6",kind:"uc",uc:6,t:ye("Brownfield & Kreislauf","Brownfield & circularity"),x:-3.5,z:2.5,r:3.4,c:"#ff5a5f",parts:[Nt("Ziegelbruch \xB7 9,4 m\xB3","brick rubble \xB7 9.4 m\xB3","#e5835a","brick"),Nt("Big Bags \xB7 Asbest","big bags \xB7 asbestos","#ff5a5f","hazard",gi("Big Bag","big bag",8)),Nt("Stahl \xB7 wiederverwendbar","steel \xB7 reusable","#4da6ff","steel",gi("Stahlprofil","steel section",4))]},{id:"uc7",kind:"uc",uc:7,t:ye("Smart City","Smart city"),x:4.5,z:2.5,r:3.4,c:"#5ce1e6",parts:[Nt("Fahrzeug","vehicle","#4da6ff","none"),Nt("Personen \xB7 3","people \xB7 3","#5fd38d","none",gi("Person","person",3)),Nt("Radfahrer","cyclist","#c792ea","none")]},{id:"uc8",kind:"uc",uc:8,t:ye("WAAM \xB7 In-situ","WAAM \xB7 in-situ"),x:11,z:2,r:3.2,c:"#ffcf70",parts:[Nt("Wand A \xB7 45,9 mm \xB7 19,6\xB0","wall A \xB7 45.9 mm \xB7 19.6\xB0","#5fd38d","steel"),Nt("Wand B \xB7 29,4 mm \xB7 27,5\xB0","wall B \xB7 29.4 mm \xB7 27.5\xB0","#ff8a8a","steel"),Nt("Grundplatte","base plate","#9aa8b8","steel")]},{id:"uc9",kind:"uc",uc:9,t:ye("Bewehrungspr\xFCfung","Rebar inspection"),x:-11,z:8.5,r:3.4,c:"#ff5a5f",parts:[Nt("St\xE4be \xB7 konform","bars \xB7 conform","#5fd38d","steel"),Nt("Stab \xB7 \xD812 statt \xD816","bar \xB7 \xD812 instead of \xD816","#ff5a5f","steel"),Nt("Stab \xB7 16 mm versetzt","bar \xB7 displaced 16 mm","#ffb547","steel")]},{id:"docs",kind:"docs",t:ye("Document Intelligence","Document intelligence"),x:-3.5,z:8.5,r:3,c:"#5ce1e6",parts:[Nt("Tisch","table","#9aa8b8","wood"),Nt("Dokumente \xB7 3 Typen erkannt","documents \xB7 3 types detected","#5ce1e6","mixed",[ye("Lieferschein","delivery note"),ye("Werkszeugnis","mill certificate"),ye("Gutachten","survey report")])]},{id:"talks",kind:"talks",t:ye("Vortr\xE4ge & Beitr\xE4ge","Talks & posts"),x:4.5,z:8.5,r:3,c:"#c792ea",parts:[Nt("B\xFChne","stage","#9aa8b8","wood"),Nt("Leinwand","screen","#c792ea","mixed"),Nt("Rednerpult","lectern","#4da6ff","wood")]},{id:"profile",kind:"profile",t:ye("Profil \xB7 Luca Fahrendholz-Heiermann","Profile \xB7 Luca Fahrendholz-Heiermann"),x:11,z:8.5,r:3,c:"#4da6ff",parts:[Nt("Scanner-Stativ","scanner tripod","#9aa8b8","steel"),Nt("Laserscanner","laser scanner","#4da6ff","mixed")]},{id:"bonus",kind:"bonus",bonus:!0,t:ye("Bonus \xB7 Registrier-Zielmarken","Bonus \xB7 registration targets"),x:-15.2,z:-7.6,r:1.6,c:"#ffcf70",parts:[Nt("Hochregal","high rack","#9aa8b8","steel"),Nt("Zielkugeln \xB7 3","target spheres \xB7 3","#ffcf70","mixed",gi("Zielkugel","target sphere",3))]}],Ia=it.filter(i=>!i.bonus).length;var Vs=(i,...e)=>e.some(t=>i.includes(t)),xp=(i,e,t)=>{let n=Math.atan2(i,-e)*180/Math.PI;return(t?["north","north-east","east","south-east","south","south-west","west","north-west"]:["Norden","Nordosten","Osten","S\xFCdosten","S\xFCden","S\xFCdwesten","Westen","Nordwesten"])[Math.round((n+360)%360/45)%8]},_p=(i,e)=>{let t=e.lang==="en",n=i.toLowerCase(),s=(g,x)=>t?x:g,r=e.clusters.filter(g=>e.cluFrac(g.id)>=.3&&e.stState[g.g]!=="hidden"),a=new Set(["wie","viel","viele","wo","ist","sind","gibt","welche","welcher","was","der","die","das","den","ein","eine","es","hier","im","in","how","many","much","where","what","which","the","are","is","any","there"]),l=n.split(/[^a-zäöüß0-9]+/).filter(g=>g.length>2&&!a.has(g)).flatMap(g=>[g,g.replace(/(en|e|n|s)$/,""),..._l[g]??[]]).filter(g=>g.length>2),c=g=>{let x=it[g.g],m=x.parts[g.p],p=[g.name.de,g.name.en,rt(m.name,"de"),rt(m.name,"en")].map(b=>b.toLowerCase());return l.some(b=>p.some(_=>_.includes(b)))},h=g=>{let x=it[g.g];return`${rt(g.name,e.lang)} (${x.kind==="uc"?`UC${x.uc}`:rt(x.t,e.lang)})`},u=g=>[...new Set(g.map(x=>`${s("Scan-Cluster","scan cluster")} \xB7 ${it[x.g].kind==="uc"?`UC${it[x.g].uc}`:rt(it[x.g].t,e.lang)}`))];if(!n.trim()||Vs(n,"hilfe","help","was kannst","what can"))return{q:i,a:s("Frag z. B.: \u201EWie viele Personen?\u201C, \u201EWo ist der Bagger?\u201C, \u201EWelche Abweichungen gibt es?\u201C, \u201EWie viel Stahl?\u201C, \u201EGibt es Schadstoffe?\u201C, \u201EWie weit bin ich?\u201C",'Try: "How many people?", "Where is the excavator?", "Which deviations?", "How much steel?", "Any hazardous materials?", "How far am I?"'),src:[s("regelbasiert \xB7 offline","rule-based \xB7 offline")]};if(Vs(n,"wie weit","fortschritt","how far","progress","abdeckung","coverage","erfasst")){let g=e.stState.filter(x=>x==="done").length;return{q:i,a:s(`Halle zu ${Math.round(e.cov*100)} % erfasst, ${g} von ${e.stState.length} Bereichen analysiert, ${r.length} Objekte segmentiert.`,`Hall ${Math.round(e.cov*100)} % captured, ${g} of ${e.stState.length} areas analysed, ${r.length} objects segmented.`),src:[s("Scan-Fortschritt","scan progress")]}}if(Vs(n,"abweich","deviation","toleranz","tolerance","fehler","mangel","defect","versetzt","falsch")){let g=r.filter(x=>/abweich|versetzt|statt|warnung/i.test(rt(it[x.g].parts[x.p].name,"de")));return g.length?{q:i,a:g.map(x=>`\u2022 ${rt(it[x.g].parts[x.p].name,e.lang)} \u2013 ${h(x)}`).join(`
`),src:u(g)}:{q:i,a:s("Bisher keine Abweichungen in den erfassten Bereichen gefunden.","No deviations found in the captured areas so far."),src:[s("Soll-Ist-Vergleich","as-planned vs. as-built")]}}if(Vs(n,"schadstoff","asbest","gefahr","hazard","asbestos","danger")){let g=r.filter(x=>x.mat==="hazard");return g.length?{q:i,a:s(`${g.length} Big Bags mit Asbest erfasst (\u2248 ${g.reduce((x,m)=>x+m.vol,0).toFixed(2)} m\xB3) \u2013 Bereich absperren, Entsorgung nach TRGS 519.`,`${g.length} big bags with asbestos captured (\u2248 ${g.reduce((x,m)=>x+m.vol,0).toFixed(2)} m\xB3) \u2013 cordon off, dispose per regulations.`),src:[...u(g),s("Materialkataster","material register")]}:{q:i,a:s("In den erfassten Bereichen sind keine Schadstoffe markiert.","No hazardous materials marked in the captured areas."),src:[s("Materialkataster","material register")]}}let d=r.filter(c);if(Vs(n,"wie viele","anzahl","how many","count","z\xE4hl"))return d.length?{q:i,a:s(`${d.length} erfasst: ${d.map(h).join(", ")}.`,`${d.length} captured: ${d.map(h).join(", ")}.`),src:u(d)}:{q:i,a:s("Dazu habe ich in den erfassten Bereichen nichts gefunden \u2013 erst scannen, dann fragen.","Nothing found in the captured areas \u2013 scan first, then ask."),src:[s("Scan","scan")]};let f=Object.keys(Wn).find(g=>g!=="none"&&g!=="hull"&&l.some(x=>Wn[g].de.toLowerCase().includes(x)||Wn[g].en.toLowerCase().includes(x)));if((/wie viel(?!e)/.test(n)||Vs(n,"how much","masse","mass","gewicht","weight","tonnen","volumen","volume","material"))&&f){let g=r.filter(p=>p.mat===f),x=g.reduce((p,b)=>p+b.vol,0),m=g.reduce((p,b)=>p+b.mass,0);return{q:i,a:s(`${Wn[f].de}: ${x.toFixed(3)} m\xB3${m?` \u2248 ${(m/1e3).toFixed(2)} t`:""} in ${g.length} erfassten Objekten.`,`${Wn[f].en}: ${x.toFixed(3)} m\xB3${m?` \u2248 ${(m/1e3).toFixed(2)} t`:""} in ${g.length} captured objects.`),src:[s("Mengen aus dem nachmodellierten Modell","quantities from the reconstructed model"),...u(g)]}}if(Vs(n,"boden","floor","fl\xE4che","area"))return{q:i,a:s(`Erfasste Bodenfl\xE4che: ${e.floorM2} m\xB2 (1-m-Raster, Ausgleichsebene aus dem Scan).`,`Captured floor area: ${e.floorM2} m\xB2 (1 m grid, best-fit plane from the scan).`),src:[s("Segmentierung Boden (A1)","floor segmentation (A1)")]};if(d.length){let g=d[0],x=(g.min[0]+g.max[0])/2,m=(g.min[2]+g.max[2])/2,p=x-e.agent.x,b=m-e.agent.z,_=`${(g.max[0]-g.min[0]).toFixed(2)} \xD7 ${(g.max[2]-g.min[2]).toFixed(2)} \xD7 ${(g.max[1]-g.min[1]).toFixed(2)} m`;return{q:i,a:s(`${h(g)}: ${Math.round(Math.hypot(p,b))} m Richtung ${xp(p,b,t)} \xB7 Box ${_}${d.length>1?` (+${d.length-1} weitere)`:""}.`,`${h(g)}: ${Math.round(Math.hypot(p,b))} m to the ${xp(p,b,t)} \xB7 box ${_}${d.length>1?` (+${d.length-1} more)`:""}.`),src:u(d)}}return{q:i,a:s("Das kann ich aus dem bisherigen Scan nicht beantworten. Tipp: \u201EHilfe\u201C.",'I cannot answer that from the current scan. Tip: "help".'),src:[s("regelbasiert \xB7 offline","rule-based \xB7 offline")]}};function du(i,e){if(e===sp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ra||e===pl){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Ra)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var yl=class extends Ki{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new yu(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Nu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=ys.extractUrlBase(e);a=ys.resolveURL(c,this.path)}else a=ys.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new wa(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Sp){try{a[At.KHR_BINARY_GLTF]=new Du(e)}catch(u){s&&s(u);return}r=JSON.parse(a[At.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Hu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case At.KHR_MATERIALS_UNLIT:a[u]=new xu;break;case At.KHR_DRACO_MESH_COMPRESSION:a[u]=new Uu(r,this.dracoLoader);break;case At.KHR_TEXTURE_TRANSFORM:a[u]=new Fu;break;case At.KHR_MESH_QUANTIZATION:a[u]=new Ou;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Ty(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var At={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},gu=class{constructor(e){this.parser=e,this.name=At.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new tt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],yn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Br(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new zr(h),c.distance=u;break;case"spot":c=new cl(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ji(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},xu=class{constructor(){this.name=At.KHR_MATERIALS_UNLIT}getMaterialType(){return Ft}extendParams(e,t,n){let s=[];e.color=new tt(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],yn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,hn))}return Promise.all(s)}},_u=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},yu=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(o,o)}return Promise.all(r)}},vu=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},bu=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Mu=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new tt(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],yn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,hn)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Su=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Eu=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new tt().setRGB(o[0],o[1],o[2],yn),Promise.all(r)}},wu=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Au=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new tt().setRGB(o[0],o[1],o[2],yn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,hn)),Promise.all(r)}},Tu=class{constructor(e){this.parser=e,this.name=At.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Ru=class{constructor(e){this.parser=e,this.name=At.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Cu=class{constructor(e){this.parser=e,this.name=At.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Pu=class{constructor(e){this.parser=e,this.name=At.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Iu=class{constructor(e){this.parser=e,this.name=At.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Lu=class{constructor(e){this.name=At.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Nu=class{constructor(e){this.name=At.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==ni.TRIANGLES&&c.mode!==ni.TRIANGLE_STRIP&&c.mode!==ni.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let x=new ct,m=new P,p=new pi,b=new P(1,1,1),_=new Fr(g.geometry,g.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&b.fromBufferAttribute(l.SCALE,y),_.setMatrixAt(y,x.compose(m,p,b));for(let y in l)if(y==="_COLOR_0"){let I=l[y];_.instanceColor=new Bs(I.array,I.itemSize,I.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);on.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Sp="glTF",La=12,yp={JSON:1313821514,BIN:5130562},Du=class{constructor(e){this.name=At.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,La),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Sp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-La,r=new DataView(e,La),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===yp.JSON){let c=new Uint8Array(e,La+a,o);this.content=n.decode(c)}else if(l===yp.BIN){let c=La+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Uu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=At.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=zu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=zu[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Vr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(f)},o,c,yn,d)})})}},Fu=class{constructor(){this.name=At.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Ou=class{constructor(){this.name=At.KHR_MESH_QUANTIZATION}},vl=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,b=1-m,_=p-d+u;for(let y=0;y!==o;y++){let I=a[x+y+o],A=a[x+y+l]*h,R=a[g+y+o],N=a[g+y]*h;r[y]=b*I+_*A+m*R+p*N}return r}},Ry=new pi,ku=class extends vl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Ry.fromArray(r).normalize().toArray(r),r}},ni={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Vr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},vp={9728:Rn,9729:Bn,9984:Zh,9985:ha,9986:gr,9987:Mi},bp={33071:zi,33648:ma,10497:ks},fu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Cy={CUBICSPLINE:void 0,LINEAR:Rr,STEP:Tr},pu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Py(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new en({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Si})),i.DefaultMaterial}function Gs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ji(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Iy(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Ly(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ny(i){let e,t=i.extensions&&i.extensions[At.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+mu(t.attributes):e=i.indices+":"+mu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+mu(i.targets[n]);return e}function mu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Bu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Dy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Uy=new ct,Hu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ty,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Or(this.options.manager):this.textureLoader=new hl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new wa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Gs(r,o,s),Ji(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[At.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(ys.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=fu[s.type],o=Vr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new wt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=fu[s.type],c=Vr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,_=t.cache.get(b);_||(x=new c(o,p*f,s.count*f/h),_=new ya(x,f/h),t.cache.add(b,_)),m=new va(_,l,d%f/h,g)}else o===null?x=new c(s.count*l):x=new c(o,d,s.count*l),m=new wt(x,l,g);if(s.sparse!==void 0){let p=fu.SCALAR,b=Vr[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,I=new b(a[1],_,s.sparse.count*p),A=new c(a[2],y,s.sparse.count*l);o!==null&&(m=new wt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,N=I.length;R<N;R++){let D=I[R];if(m.setX(D,A[R*l]),l>=2&&m.setY(D,A[R*l+1]),l>=3&&m.setZ(D,A[R*l+2]),l>=4&&m.setW(D,A[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=vp[d.magFilter]||Bn,h.minFilter=vp[d.minFilter]||Mi,h.wrapS=bp[d.wrapS]||ks,h.wrapT=bp[d.wrapT]||ks,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new _n(x);m.needsUpdate=!0,d(m)}),t.load(ys.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Ji(u,a),u.userData.mimeType=a.mimeType||Dy(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[At.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[At.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[At.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ma,Kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new mi,Kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return en}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[At.KHR_MATERIALS_UNLIT]){let u=s[At.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new tt(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],yn),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,hn)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=an);let h=r.alphaMode||pu.OPAQUE;if(h===pu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===pu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ft&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ue(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Ft&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ft){let u=r.emissiveFactor;o.emissive=new tt().setRGB(u[0],u[1],u[2],yn)}return r.emissiveTexture!==void 0&&a!==Ft&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,hn)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Ji(u,r),t.associations.set(u,{materials:e}),r.extensions&&Gs(s,u,r),u})}createUniqueName(e){let t=Zt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[At.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Mp(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Ny(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[At.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Mp(new Yt,c,t),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?Py(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=a[f],p,b=c[f];if(m.mode===ni.TRIANGLES||m.mode===ni.TRIANGLE_STRIP||m.mode===ni.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Xo(x,b):new Ae(x,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ni.TRIANGLE_STRIP?p.geometry=du(p.geometry,pl):m.mode===ni.TRIANGLE_FAN&&(p.geometry=du(p.geometry,Ra));else if(m.mode===ni.LINES)p=new ms(x,b);else if(m.mode===ni.LINE_STRIP)p=new Wi(x,b);else if(m.mode===ni.LINE_LOOP)p=new Ko(x,b);else if(m.mode===ni.POINTS)p=new Hs(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Ly(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ji(p,r),m.extensions&&Gs(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Gs(s,u[0],r),u[0];let d=new It;r.extensions&&Gs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new ln(Ca.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Lr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ji(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new ct;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Yo(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,b=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(g),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let b=0,_=d.length;b<_;b++){let y=d[b],I=f[b],A=g[b],R=x[b],N=m[b];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let D=n._createAnimationTracks(y,I,A,R,N);if(D)for(let v=0;v<D.length;v++)p.push(D[v])}return new ol(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Uy)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new ba:c.length>1?h=new It:c.length===1?h=c[0]:h=new on,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Ji(h,r),r.extensions&&Gs(n,h,r),r.matrix!==void 0){let u=new ct;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new It;n.name&&(r.name=s.createUniqueName(n.name)),Ji(r,n),n.extensions&&Gs(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Kn||d instanceof _n)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];vs[r.path]===vs.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(vs[r.path]){case vs.weights:c=Yi;break;case vs.rotation:c=$i;break;case vs.position:case vs.scale:c=qi;break;default:n.itemSize===1?c=Yi:c=qi;break}let h=s.interpolation!==void 0?Cy[s.interpolation]:Rr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+vs[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Bu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof $i?ku:vl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Fy(i,e,t){let n=e.attributes,s=new Gn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){let h=Bu(Vr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,l=new P;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Bu(Vr[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new qn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Mp(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=zu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return kt.workingColorSpace!==yn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${kt.workingColorSpace}" not supported.`),Ji(i,e),Fy(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Iy(i,e.targets,t):i})}var Ep=32,wp=64,Oy=new P(0,1,0),Ap=(i,e,t)=>{let n=new It,s=new Map(e.map(_=>[`${_.g}:${_.p}:${_.i}`,_.id])),r=new Map;if(t){let _=[];t.traverse(y=>y.isMesh&&_.push(y));for(let y of _){let I=y.name||y.parent?.name||"",[A,R,N]=I.split("|"),D=it.findIndex(B=>B.id===A),v=s.get(`${D}:${R}:${N}`);if(D<0||v===void 0)continue;y.removeFromParent(),y.position.x+=it[D].x,y.position.z+=it[D].z;let S=y.material;S&&"envMapIntensity"in S&&(S.metalness=Math.min(S.metalness,.4)),n.add(y),r.set(v,[...r.get(v)??[],y])}}let a=[],o=new Map,l=(_,y)=>{let I=_.join(",")+y;return o.has(I)||o.set(I,new en({color:new tt(_[0],_[1],_[2]),roughness:y?.35:.7,metalness:y?.55:.05})),o.get(I)};i.stations.forEach((_,y)=>{let I=it[y];for(let A of _.prims){let R=I.parts[A.p],N=l(R.c,R.m==="steel"),D=[],v=B=>{B.position.x+=_.x,B.position.z+=_.z,n.add(B),D.push(B)};if(A.k==="box"){let B=new Ae(new tn(A.b[0]-A.a[0],A.b[1]-A.a[1],A.b[2]-A.a[2]),N);B.position.set((A.a[0]+A.b[0])/2,(A.a[1]+A.b[1])/2,(A.a[2]+A.b[2])/2),v(B)}else if(A.k==="rod"){let B=new P(...A.a),Y=new P(...A.b).clone().sub(B),te=new Ae(new mn(A.r,A.r,Y.length(),12),N);te.position.copy(B).addScaledVector(Y,.5),te.quaternion.setFromUnitVectors(Oy,Y.normalize()),v(te)}else if(A.k==="pile"){let B=[];for(let Y=0;Y<=16;Y++){let te=A.R*(1-Y/16);B.push(new Ue(te,A.H*(1-(te/A.R)**1.6)))}let W=new Ae(new Ea(B,32),N);W.position.set(A.c[0],0,A.c[1]),v(W)}else if(A.k==="sph"){let B=new Ae(new Sn(A.r,20,14),N);B.position.set(...A.c),v(B)}else if(A.k==="ring"){let B=new Ae(new rl(A.R,A.r,10,28),N);B.position.set(...A.c),v(B)}else if(A.k==="person"){let B=new It,W=new Ae(new tl(.16,.95,4,12),N);W.position.y=.78,W.scale.z=.7;let Y=new Ae(new Sn(.11,14,10),N);Y.position.y=1.62,B.add(W,Y),B.position.set(A.c[0],0,A.c[1]),v(B)}else if(A.k==="waam"){let B=A.h/A.L,W=[];for(let Y=0;Y<A.L;Y++){let te=(Y+.5)/A.L,q=new Ae(new tn(A.t*.85,B*.92,A.z1-A.z0),N);q.position.set(A.x+A.lean*te*te,A.y0+(Y+.5)*B,(A.z0+A.z1)/2),v(q),W.push(q)}a.push({p:A.p,L:A.L,meshes:W})}let S=s.get(`${y}:${A.p}:${A.i??0}`);S!==void 0&&r.set(S,[...r.get(S)??[],...D])}});let c=new en({color:9279400,roughness:.8,metalness:.1}),h=i.blocks.map(_=>{let y=new Ae(new tn(_.b[0]-_.a[0],_.b[1]-_.a[1],_.b[2]-_.a[2]),c);return y.position.set((_.a[0]+_.b[0])/2,(_.a[1]+_.b[1])/2,(_.a[2]+_.b[2])/2),y.visible=!1,n.add(y),{m:y,cells:_.cells}}),[u,d,f]=i.plane,g=new Fr(new tn(.98,.06,.98),new en({color:11844034,roughness:.9}),i.floor.length),x=new ct,m=new ct().makeScale(0,0,0),p=i.floor.map((_,y)=>{let I=_%wp-Ep+.5,A=Math.floor(_/wp)-Ep+.5;return g.setMatrixAt(y,m),[I,u*I+d*A+f-.03,A]});g.frustumCulled=!1,n.add(g);let b=(_,y)=>{y&&x.makeTranslation(p[_][0],p[_][1],p[_][2]),g.setMatrixAt(_,y?x:m),g.instanceMatrix.needsUpdate=!0};for(let _ of r.values())for(let y of _)y.visible=!1;return n.visible=!1,{group:n,cluObjs:r,blocks:h,floor:{cells:i.floor,show:b},waam:a}};var Tp=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),Rp=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);var ky=Tp,Cp=Rp,Vu=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]],zy=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]],Cn=16,Na=class{constructor(e){this.group=new It;this.VS=e.vs,[this.X0,this.Y0,this.Z0]=e.min,this.GX=Math.max(2,Math.ceil((e.max[0]-e.min[0])/e.vs)),this.GY=Math.max(2,Math.ceil((e.max[1]-e.min[1])/e.vs)),this.GZ=Math.max(2,Math.ceil((e.max[2]-e.min[2])/e.vs)),this.NCX=Math.ceil(this.GX/Cn),this.NCZ=Math.ceil(this.GZ/Cn),this.ISO=e.iso??Math.max(.12,.7*(e.vs/.2)**2),this.cnt=new Uint16Array(this.GX*this.GY*this.GZ),this.dirty=new Uint8Array(this.NCX*this.NCZ),this.filled=new Uint8Array(this.NCX*this.NCZ),this.meshes=new Array(this.NCX*this.NCZ).fill(null),this.color=e.color,this.mat=new en({vertexColors:!0,flatShading:!0,roughness:.85,metalness:.05,side:an})}add(e,t,n){let s=Math.floor((e-this.X0)/this.VS),r=Math.floor((t-this.Y0)/this.VS),a=Math.floor((n-this.Z0)/this.VS);if(s<0||r<0||a<0||s>=this.GX||r>=this.GY||a>=this.GZ)return;let o=(a*this.GY+r)*this.GX+s;this.cnt[o]<65535&&this.cnt[o]++;let l=Math.floor(s/Cn),c=Math.floor(a/Cn),h=c*this.NCX+l;this.dirty[h]=1,this.filled[h]=1;let u=s%Cn,d=a%Cn;u<=1&&l>0&&(this.dirty[h-1]=1),u>=Cn-2&&l<this.NCX-1&&(this.dirty[h+1]=1),d<=1&&c>0&&(this.dirty[h-this.NCX]=1),d>=Cn-2&&c<this.NCZ-1&&(this.dirty[h+this.NCX]=1)}update(e,t,n){let s=[];for(let o=0;o<this.dirty.length;o++)if(this.dirty[o]){let l=(o%this.NCX+.5)*Cn*this.VS+this.X0,c=(Math.floor(o/this.NCX)+.5)*Cn*this.VS+this.Z0;s.push([o,(l-t)**2+(c-n)**2])}if(!s.length)return 0;s.sort((o,l)=>o[1]-l[1]);let r=performance.now(),a=0;for(;a<s.length&&performance.now()-r<e;a++)this.build(s[a][0]);return s.length-a}build(e){this.dirty[e]=0;let{GX:t,GY:n,GZ:s,VS:r,X0:a,Y0:o,Z0:l,ISO:c,cnt:h}=this,u=e%this.NCX,d=Math.floor(e/this.NCX),f=u*Cn-1,g=d*Cn-1,x=Cn+3,m=Cn+3,p=n,b=new Float32Array(x*p*m),_=(S,B,W)=>S<0||B<0||W<0||S>=t||B>=n||W>=s?0:h[(W*n+B)*t+S];for(let S=0;S<m;S++)for(let B=0;B<p;B++)for(let W=0;W<x;W++){let Y=0,te=f+W,q=g+S;for(let se=-1;se<=1;se++)for(let X=-1;X<=1;X++)for(let be=-1;be<=1;be++)Y+=_(te+be,B+X,q+se);b[(S*p+B)*x+W]=Y/27}let y=[],I=[],A=new Float32Array(8),R=new Float32Array(36);for(let S=1;S<=Cn&&S<m-1;S++)for(let B=0;B<p-1;B++)for(let W=1;W<=Cn&&W<x-1;W++){let Y=0;for(let se=0;se<8;se++){let X=Vu[se];A[se]=b[((S+X[2])*p+(B+X[1]))*x+(W+X[0])],A[se]>c&&(Y|=1<<se)}let te=ky[Y];if(!te)continue;for(let se=0;se<12;se++){if(!(te&1<<se))continue;let[X,be]=zy[se],ge=(c-A[X])/(A[be]-A[X]||1e-6),Ee=Vu[X],_t=Vu[be];R[se*3]=a+(f+W+Ee[0]+(_t[0]-Ee[0])*ge+.5)*r,R[se*3+1]=o+(B+Ee[1]+(_t[1]-Ee[1])*ge+.5)*r,R[se*3+2]=l+(g+S+Ee[2]+(_t[2]-Ee[2])*ge+.5)*r}let q=Y*16;for(let se=0;Cp[q+se]!==-1;se+=3)for(let X=0;X<3;X++){let be=Cp[q+se+X],ge=R[be*3+1];if(y.push(R[be*3],ge,R[be*3+2]),this.color)I.push(this.color[0],this.color[1],this.color[2]);else{let Ee=Math.max(0,Math.min(1,ge/6));I.push(.46+.16*Ee,.5+.1*Ee,.58-.08*Ee)}}}let N=this.meshes[e];if(N&&(this.group.remove(N),N.geometry.dispose(),this.meshes[e]=null),!y.length)return;let D=new Yt;D.setAttribute("position",new Lt(y,3)),D.setAttribute("color",new Lt(I,3)),D.computeVertexNormals();let v=new Ae(D,this.mat);v.frustumCulled=!1,this.group.add(v),this.meshes[e]=v}touchAll(){for(let e=0;e<this.filled.length;e++)this.filled[e]&&(this.dirty[e]=1)}dispose(){for(let e of this.meshes)e&&e.geometry.dispose();this.mat.dispose(),this.group.removeFromParent()}};var Ot={x0:-18,x1:17,z0:-11,z1:13,px:.025},Da=Math.round((Ot.x1-Ot.x0)/Ot.px),Gr=Math.round((Ot.z1-Ot.z0)/Ot.px),Pp=.9,By=1.7,bl=class{constructor(){this.base=document.createElement("canvas");this.base.width=Da,this.base.height=Gr,this.ctx=this.base.getContext("2d"),this.ctx.fillStyle="#fbfbf8",this.ctx.fillRect(0,0,Da,Gr)}add(e,t,n,s){if(e<Ot.x0||e>=Ot.x1||n<Ot.z0||n>=Ot.z1||t>6.3)return;let r=(e-Ot.x0)/Ot.px,a=(n-Ot.z0)/Ot.px,o=this.ctx;s===1?(o.fillStyle="rgba(150,156,168,0.05)",o.fillRect(r,a,2,2)):t>=Pp&&t<=By?(o.fillStyle="rgba(18,22,30,0.5)",o.fillRect(r-.5,a-.5,2,2)):t<Pp?(o.fillStyle="rgba(80,88,100,0.16)",o.fillRect(r,a,1.5,1.5)):(o.fillStyle="rgba(90,110,150,0.035)",o.fillRect(r,a,1.5,1.5))}compose(e,t){e.width=Da+140,e.height=Gr+140+120;let r=e.getContext("2d"),a=t.lang==="en";r.fillStyle="#ffffff",r.fillRect(0,0,e.width,e.height),r.drawImage(this.base,70,70);let o=y=>70+(y-Ot.x0)/Ot.px,l=y=>70+(y-Ot.z0)/Ot.px;r.strokeStyle="rgba(200,60,60,0.35)",r.setLineDash([12,6,3,6]),r.lineWidth=1,r.font="bold 15px Inter, sans-serif",r.textAlign="center",r.textBaseline="middle";let c=0;for(let y=-15;y<=15;y+=5,c++)r.beginPath(),r.moveTo(o(y),48),r.lineTo(o(y),70+Gr+10),r.stroke(),r.setLineDash([]),r.fillStyle="#fff",r.beginPath(),r.arc(o(y),34,13,0,Math.PI*2),r.fill(),r.strokeStyle="rgba(200,60,60,0.8)",r.stroke(),r.fillStyle="#b03030",r.fillText(String.fromCharCode(65+c),o(y),34),r.strokeStyle="rgba(200,60,60,0.35)",r.setLineDash([12,6,3,6]);c=1;for(let y=-10;y<=10;y+=5,c++)r.beginPath(),r.moveTo(48,l(y)),r.lineTo(70+Da+10,l(y)),r.stroke(),r.setLineDash([]),r.fillStyle="#fff",r.beginPath(),r.arc(34,l(y),13,0,Math.PI*2),r.fill(),r.strokeStyle="rgba(200,60,60,0.8)",r.stroke(),r.fillStyle="#b03030",r.fillText(String(c),34,l(y)),r.strokeStyle="rgba(200,60,60,0.35)",r.setLineDash([12,6,3,6]);r.setLineDash([]),r.font="600 14px Inter, sans-serif";for(let y of t.labels){let I=r.measureText(y.t).width+14;r.fillStyle="rgba(255,255,255,0.85)",r.fillRect(o(y.x)-I/2,l(y.z)-11,I,22),r.strokeStyle=y.c,r.lineWidth=1.5,r.strokeRect(o(y.x)-I/2,l(y.z)-11,I,22),r.fillStyle="#1a1f29",r.fillText(y.t,o(y.x),l(y.z))}for(let y of t.scanners)r.fillStyle="#0a84c6",r.beginPath(),r.moveTo(o(y.x),l(y.z)-9),r.lineTo(o(y.x)+8,l(y.z)+6),r.lineTo(o(y.x)-8,l(y.z)+6),r.closePath(),r.fill();let h=70+Gr+30,u=70;for(let y=0;y<10;y++)r.fillStyle=y%2?"#ffffff":"#1a1f29",r.fillRect(u+y/Ot.px,h,1/Ot.px,8);r.strokeStyle="#1a1f29",r.lineWidth=1,r.strokeRect(u,h,10/Ot.px,8),r.fillStyle="#1a1f29",r.font="500 12px Inter, sans-serif",r.textAlign="center";for(let y of[0,5,10])r.fillText(`${y} m`,u+y/Ot.px,h+22);let d=70+Da-30,f=110;r.fillStyle="#1a1f29",r.beginPath(),r.moveTo(d,f-26),r.lineTo(d+11,f+12),r.lineTo(d,f+4),r.lineTo(d-11,f+12),r.closePath(),r.fill(),r.font="bold 16px Inter, sans-serif",r.fillText("N",d,f+28);let g=e.width-70-520,x=70+Gr+18,m=520,p=110;r.strokeStyle="#1a1f29",r.lineWidth=1.5,r.strokeRect(g,x,m,p),r.beginPath(),r.moveTo(g,x+38),r.lineTo(g+m,x+38),r.moveTo(g+330,x+38),r.lineTo(g+330,x+p),r.stroke(),r.textAlign="left",r.font="800 19px Inter, sans-serif",r.fillText(a?"FLOOR PLAN \xB7 ground floor \xB7 section +1.20 m":"GRUNDRISS \xB7 EG \xB7 Schnitt +1,20 m",g+12,x+20),r.font="500 12.5px Inter, sans-serif";let b=new Date;(a?["Derived from scan \xB7 X-AVIS Spatial AI Lab",`Hall captured: ${Math.round(t.cov*100)} %`,"Scale 1:200 (A3) \xB7 grid 5 m",`Date ${b.toLocaleDateString("en-GB")}`]:["Aus dem Scan abgeleitet \xB7 X-AVIS Spatial AI Lab",`Halle erfasst: ${Math.round(t.cov*100)} %`,"Ma\xDFstab 1:200 (A3) \xB7 Raster 5 m",`Datum ${b.toLocaleDateString("de-DE")}`]).forEach((y,I)=>r.fillText(y,g+12,x+56+I*16)),r.font="800 15px Inter, sans-serif",r.fillText("X-AVIS",g+345,x+60),r.font="500 11px Inter, sans-serif",r.fillText("\xA9 Jan Luca Fahrendholz-Heiermann",g+345,x+80),r.fillText(a?"Plan status: preliminary":"Planstand: vorl\xE4ufig",g+345,x+96)}},Ml=(i,e,t,n)=>{let s=i.color(e),r=.25+.65*i.I[e],a=1-.35*Math.min(1,t/n);if(s)return[s[0]*255*a,s[1]*255*a,s[2]*255*a];let o=255*(1-r)*a+40*(1-a);return[o,o,o]},Sl=(i,e)=>{let t=document.createElement("canvas");t.width=i,t.height=e;let n=t.getContext("2d"),s=n.createImageData(i,e);for(let r=0;r<i*e;r++)s.data[r*4]=255,s.data[r*4+1]=255,s.data[r*4+2]=255,s.data[r*4+3]=255;return{cv:t,ctx:n,img:s,zb:new Float32Array(i*e).fill(1e9)}},El=(i,e,t,n,s,r,a=1)=>{for(let o=0;o<a;o++)for(let l=0;l<a;l++){let c=t+l,h=n+o;if(c<0||h<0||c>=e||h*e+c>=i.zb.length)continue;let u=h*e+c;s>=i.zb[u]||(i.zb[u]=s,i.img.data[u*4]=r[0],i.img.data[u*4+1]=r[1],i.img.data[u*4+2]=r[2])}},Gu=(i,e,t,n,s=!1)=>{let r=t/2,a=Sl(t,r),o=n?n.length:i.N;for(let l=0;l<o;l++){let c=n?n[l]:l;if(!s&&i.S[c]<0)continue;let h=i.P[c*3]-e[0],u=i.P[c*3+1]-e[1],d=i.P[c*3+2]-e[2],f=Math.hypot(h,u,d);if(f<.3)continue;let g=Math.atan2(h,-d),x=Math.asin(u/f),m=Math.floor((g+Math.PI)/(2*Math.PI)*t),p=Math.floor((Math.PI/2-x)/Math.PI*r);El(a,t,m,p,f,Ml(i,c,f,25),f<4?3:f<9?2:1)}return a.ctx.putImageData(a.img,0,0),a.cv},Ip=(i,e,t)=>{let n=t*4,s=t*3,r=Sl(n,s),a={nz:[1,1],px:[2,1],pz:[3,1],nx:[0,1],py:[1,0],ny:[1,2]};for(let o=0;o<i.N;o++){if(i.S[o]<0)continue;let l=i.P[o*3]-e[0],c=i.P[o*3+1]-e[1],h=i.P[o*3+2]-e[2],u=Math.abs(l),d=Math.abs(c),f=Math.abs(h),g,x,m,p;u>=d&&u>=f?(p=u,l>0?(g="px",x=h/p,m=-c/p):(g="nx",x=-h/p,m=-c/p)):d>=f?(p=d,c>0?(g="py",x=l/p,m=h/p):(g="ny",x=l/p,m=-h/p)):(p=f,h>0?(g="pz",x=-l/p,m=-c/p):(g="nz",x=l/p,m=-c/p));let[b,_]=a[g],y=Math.hypot(l,c,h);El(r,n,Math.floor(b*t+(x+1)/2*(t-1)),Math.floor(_*t+(m+1)/2*(t-1)),y,Ml(i,o,y,25),y<5?2:1)}for(let o=0;o<s;o++)for(let l=0;l<n;l++){let c=Math.floor(l/t),h=Math.floor(o/t);Object.values(a).some(([d,f])=>d===c&&f===h)||(r.img.data[(o*n+l)*4+3]=0)}return r.ctx.putImageData(r.img,0,0),r.cv},Lp=(i,e,t)=>{let n=Sl(e,t),s=[26,22,30],r=[-1,.5,1],a=[r[0]-s[0],r[1]-s[1],r[2]-s[2]],o=Math.hypot(a[0],a[1],a[2]),l=a.map(f=>f/o),c=[l[1]*0-l[2]*1,l[2]*0-l[0]*0,l[0]*1-l[1]*0],h=Math.hypot(c[0],c[1],c[2]);c=c.map(f=>f/h);let u=[c[1]*l[2]-c[2]*l[1],c[2]*l[0]-c[0]*l[2],c[0]*l[1]-c[1]*l[0]],d=t/2/Math.tan(34*Math.PI/360);for(let f=0;f<i.N;f++){if(i.S[f]<0)continue;let g=i.P[f*3]-s[0],x=i.P[f*3+1]-s[1],m=i.P[f*3+2]-s[2],p=g*l[0]+x*l[1]+m*l[2];if(p<1)continue;let b=g*c[0]+x*c[1]+m*c[2],_=g*u[0]+x*u[1]+m*u[2];El(n,e,Math.floor(e/2+b/p*d),Math.floor(t/2-_/p*d),p,Ml(i,f,p-25,40),2)}return n.ctx.putImageData(n.img,0,0),n.cv},Np=(i,e)=>{let t=Math.round(e*(Ot.z1-Ot.z0)/(Ot.x1-Ot.x0)),n=Sl(e,t),s=e/(Ot.x1-Ot.x0);for(let r=0;r<i.N;r++){if(i.S[r]<0)continue;let a=i.P[r*3],o=i.P[r*3+1],l=i.P[r*3+2];a<Ot.x0||a>=Ot.x1||l<Ot.z0||l>=Ot.z1||El(n,e,Math.floor((a-Ot.x0)*s),Math.floor((l-Ot.z0)*s),10-o,Ml(i,r,0,1),2)}return n.ctx.putImageData(n.img,0,0),n.cv};var Ws=.95,bs=.85,Dp=.62,Ua=.28,Hy=()=>{let i=new en({color:16738835,roughness:.45,metalness:.25}),e=new en({color:2303790,roughness:.5,metalness:.6}),t=new It,n=new Ae(new mn(.26,.3,.22,24),e);n.position.y=.11,t.add(n);let s=new It;s.position.y=.22,t.add(s);let r=new Ae(new mn(.22,.24,.3,24),i);r.position.y=.15,s.add(r);let a=new It;a.position.y=Dp-.22,s.add(a),a.add(new Ae(new Sn(.13,16,12),e));let o=new Ae(new tn(Ws,.17,.2),i);o.position.x=Ws/2,a.add(o);let l=new It;l.position.x=Ws,a.add(l),l.add(new Ae(new Sn(.11,16,12),e));let c=new Ae(new tn(bs,.13,.15),i);c.position.x=bs/2,l.add(c);let h=new It;h.position.x=bs,l.add(h),h.add(new Ae(new Sn(.07,12,10),e));let u=new Ae(new mn(.025,.04,Ua,12),e);u.position.y=-Ua/2,h.add(u);let d=new Ae(new Sn(.035,12,10),new Ft({color:16765562}));d.position.y=-Ua-.01,h.add(d);let f=new zr(16751162,0,2.5,2);return f.position.y=-Ua,h.add(f),{root:t,reach:(x,m,p)=>{let b=x-t.position.x,_=m+Ua-(t.position.y+Dp),y=p-t.position.z,I=Math.hypot(b,y);s.rotation.y=Math.atan2(-y,b);let A=Math.max(-1,Math.min(1,(I*I+_*_-Ws*Ws-bs*bs)/(2*Ws*bs))),R=Math.acos(A),N=Math.atan2(_,I)+Math.atan2(bs*Math.sin(R),Ws+bs*Math.cos(R));a.rotation.z=N,l.rotation.z=-R,h.rotation.z=-(N-R)},glow:d,light:f}},Up=(i,e,t)=>{let n=new It;n.position.set(e,0,t);let s=1.5,r=6,a=i.map((h,u)=>{let d=Hy();return d.root.position.set(u===0?-1.35:1.45,.78,u===0?.15:-.15),n.add(d.root),d}),o=i.map(()=>0),l=Math.max(...i.map(h=>h.L))*s+r;return{group:n,update:h=>{let u=h%l;return i.forEach((d,f)=>{let g=u/s,x=g>=d.L,m=Math.min(d.L-1,Math.floor(g)),p=x?1:g-m;o[f]=x?d.L:m+p*.99;let b=(m+1)/d.L,_=d.z0+(m%2===0?p:1-p)*(d.z1-d.z0),y=a[f];x?y.reach(d.x+d.lean-.25,d.y0+d.h+.35,0):y.reach(d.x+d.lean*b*b,d.y0+(m+1)*(d.h/d.L)+.012,_);let I=!x;y.glow.visible=I,y.light.intensity=I?1.6+Math.random()*1.4:0,y.glow.scale.setScalar(I?.8+Math.random()*.6:1)}),o},prog:o}};var ft={x0:-18,x1:17,z0:-11,z1:13,y0:.6,y1:6.5},vn=32,Ms=1,xt=64,Vy=.12,Wu=.62,wl=260,Xu=190,Yu={dark:263690,light:15856630},Fp=1.62,Al=1.5,Wr=720,$u=360,qu=360,Op=[6087142,10194175,16758087,6280077,16747099,5089023],ii=[.5,12.5],Yr=it.length,Tl=it.findIndex(i=>i.bonus),Xr=it.findIndex(i=>i.id==="uc8"),Ku=it.findIndex(i=>i.id==="profile"),Xs={droneFly:.42,droneScan:.28,hand:1.15,tlsRun:7},Zu=.85,Gy=4.5,Fa=60,Wy=`
attribute float aI; attribute float aCls; attribute float aG; attribute float aP; attribute float aClu; attribute float aW; attribute float aM;
attribute float aS; attribute float aF; attribute vec3 aC; attribute vec3 aO;
uniform float uT; uniform float uPx; uniform float uPs; uniform float uLight; uniform float uMode; uniform float uFeatK; uniform float uMesh; uniform float uXray; uniform float uReg; uniform float uWaamSeen;
uniform float uAna[${Yr}]; uniform float uHi[${Yr}]; uniform vec2 uWaam; uniform vec3 uMatC[10]; uniform float uCad[80]; uniform vec3 uCut;
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
    if (uXray > 0.5 && aG >= 0.0 && gi != ${Tl}) holo = true;
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
}`,Xy=`
varying vec3 vCol;
void main(){ vec2 c = gl_PointCoord - 0.5; if (dot(c, c) > 0.25) discard; gl_FragColor = vec4(vCol, 1.0); }`,$t=(i,e,t)=>i==="en"?t:e,kp=i=>i.kind==="uc"?`UC${i.uc}`:i.kind==="docs"?"DOC":i.kind==="talks"?"TALK":i.kind==="bonus"?"\u2605":"ME",Ju=i=>Zi.filter(e=>e.st===i.id);var zp=(i,e,t)=>{let n=!1,s=0,r=()=>t.lang(),a=i.host,o=new Nr({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1});o.setPixelRatio(Math.min(2,window.devicePixelRatio)),o.setSize(a.clientWidth,a.clientHeight),a.appendChild(o.domElement);let l=new Dr;l.fog=new Wo(Yu.dark,28,70);let c=new ln(58,a.clientWidth/a.clientHeight,.03,200);l.add(c),l.add(new ll(10470655,1053724,1.1));let h=new Br(16777215,1.4);h.position.set(6,12,4),l.add(h);let u=new en({color:1909548,metalness:.6,roughness:.35}),d=new en({color:15265267,metalness:.2,roughness:.4}),f=new en({color:5089023,emissive:1727656,emissiveIntensity:.8}),g=new ul,x=new It;x.add(new Ae(new tn(.3,.12,.42),d));let m=new Ae(new tn(.2,.06,.26),u);m.position.y=.09,x.add(m);let p=new Ae(new tn(.31,.02,.43),f);p.position.y=-.02,x.add(p);let b=[],_=new Ft({color:12375807,transparent:!0,opacity:.25,depthWrite:!1});for(let[w,L]of[[1,1],[1,-1],[-1,1],[-1,-1]]){let H=new Ae(new tn(.04,.03,.46),u);H.position.set(w*.14,.02,L*.18),H.rotation.y=Math.atan2(w*.27,L*.36),x.add(H);let ee=new Ae(new mn(.035,.035,.06,12),u);ee.position.set(w*.27,.05,L*.36),x.add(ee);let ae=new Ae(new mn(.19,.19,.008,24),_);ae.position.set(w*.27,.085,L*.36),x.add(ae),b.push(ae);let me=new Ae(new Sn(.02,8,8),new Ft({color:L<0?16777215:16726843}));me.position.set(w*.27,0,L*.36),x.add(me)}let y=new Ae(new Sn(.07,16,12),u);y.position.set(0,-.1,-.12),x.add(y),l.add(x),x.position.set(ii[0],.25,ii[1]);let I=document.createElement("canvas");I.width=I.height=64;{let w=I.getContext("2d"),L=w.createRadialGradient(32,32,0,32,32,32);L.addColorStop(0,"rgba(0,0,0,0.75)"),L.addColorStop(1,"rgba(0,0,0,0)"),w.fillStyle=L,w.fillRect(0,0,64,64)}let A=new Ft({map:new Zo(I),transparent:!0,depthWrite:!1}),R=new Ae(new wi(1,1),A);R.rotation.x=-Math.PI/2,l.add(R);let N=new Ft({color:6087142,transparent:!0,opacity:.1,side:an,depthWrite:!1,blending:fs}),D=new Ae(new nl(1,1,48,1,!0),N);l.add(D);let v=new Ft({color:6087142,transparent:!0,opacity:.6,side:an,depthWrite:!1}),S=new Ae(new Xi(.95,1,64),v);S.rotation.x=-Math.PI/2,l.add(S);let B=new mi({color:12581119,transparent:!0,opacity:.9}),W=new Wi(new Yt().setFromPoints([new P(0,0,0),new P(1,0,0)]),B);l.add(W);let Y=new It;Y.position.set(ii[0],0,ii[1]);let te=new Ae(new mn(.85,.9,.06,40),new en({color:2765116,metalness:.5,roughness:.4}));te.position.y=.03,Y.add(te);let q=new Ae(new Xi(.6,.7,48),new Ft({color:6280077,transparent:!0,opacity:.8,side:an}));q.rotation.x=-Math.PI/2,q.position.y=.065,Y.add(q);let se=new Ae(new tn(.5,.01,.1),new Ft({color:6280077}));se.position.y=.07,Y.add(se),l.add(Y);let X={group:new It,pts:null,mat:null,t0:-1,shown:!1};X.group.visible=!1,l.add(X.group);let be=async()=>{let w=new Uint8Array(await Qi("lab/portrait.bin")),L=new DataView(w.buffer),H=L.getUint16(0,!0),ee=L.getUint16(2,!0),ae=L.getUint16(4,!0),me=L.getUint16(6,!0),Be=it[Ku],Ve=1.4,fe=Ve*H/ee,Me=Be.x+1.55,Fe=1.55,Ne=Be.z,gt=new Ur(new Uint8Array(H*ee*4),H,ee,Hn),ot=gt.image.data;for(let ie=0;ie<ee;ie++)for(let We=0;We<H;We++){let Ze=ie*H+We,lt=((ee-1-ie)*H+We)*4;ot[lt]=w[8+Ze*4],ot[lt+1]=w[8+Ze*4+1],ot[lt+2]=w[8+Ze*4+2],ot[lt+3]=255}gt.colorSpace=hn,gt.needsUpdate=!0;let de=new Ae(new wi(fe,Ve),new Ft({map:gt}));de.position.set(Me+.012,Fe,Ne),de.rotation.y=-Math.PI/2;let Ct=new Ae(new tn(.03,Ve+.08,fe+.08),new en({color:2764600,roughness:.6}));Ct.position.set(Me+.03,Fe,Ne),X.group.add(de,Ct);for(let ie of[-.35,.35]){let We=new Ae(new mn(.018,.018,2.3,8),F);We.position.set(Me+.18,1.1,Ne+ie),We.rotation.z=-.12,X.group.add(We)}let Kt=[];for(let ie=0;ie<ee;ie+=2)for(let We=0;We<H;We+=2)w[8+(ie*H+We)*4+3]-ae>.04*(me-ae)&&Kt.push(ie*H+We);let Wt=Kt.length,Pt=new Float32Array(Wt*3),jt=new Uint8Array(Wt*3),ri=new Float32Array(Wt);for(let ie=0;ie<Wt;ie++){let We=Kt[ie],Ze=We%H,lt=Math.floor(We/H);Pt[ie*3]=Me,Pt[ie*3+1]=Fe+(.5-lt/ee)*Ve,Pt[ie*3+2]=Ne+(Ze/H-.5)*fe,jt[ie*3]=w[8+We*4],jt[ie*3+1]=w[8+We*4+1],jt[ie*3+2]=w[8+We*4+2],ri[ie]=Math.max(0,Math.min(1,(w[8+We*4+3]-ae)/(me-ae)))}let K=new Yt;K.setAttribute("position",new wt(Pt,3)),K.setAttribute("aCol",new wt(jt,3,!0)),K.setAttribute("aRel",new wt(ri,1)),X.mat=new Zn({uniforms:{uK:{value:0},uPx:{value:o.getPixelRatio()},uSweep:{value:0}},vertexShader:`attribute vec3 aCol; attribute float aRel; uniform float uK; uniform float uPx; uniform float uSweep; varying vec3 vC;
        void main(){ vec3 p = position; float s = clamp((uSweep - (1.55 + 0.7 - p.y) / 1.4) * 4.0, 0.0, 1.0); p.x -= aRel * 0.45 * uK * s;
          vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; vC = mix(aCol, vec3(0.55, 0.95, 1.0), (1.0 - s) * 0.6 + (s > 0.0 && s < 1.0 ? 0.4 : 0.0));
          gl_PointSize = clamp(uPx * 7.0 / max(0.1, -mv.z), 1.0, 4.0 * uPx); if (s <= 0.0) gl_PointSize = 0.0; }`,fragmentShader:"varying vec3 vC; void main(){ vec2 c = gl_PointCoord - 0.5; if (dot(c, c) > 0.25) discard; gl_FragColor = vec4(vC, 1.0); }"}),X.pts=new Hs(K,X.mat),X.pts.frustumCulled=!1,X.group.add(X.pts)},ge=new It,Ee=new Ae(new tn(.05,.16,.06),u);Ee.position.set(0,-.06,0),Ee.rotation.x=.35,ge.add(Ee);let _t=new Ae(new tn(.08,.07,.16),u);_t.position.set(0,.03,-.04),ge.add(_t);let yt=new It;yt.position.set(0,.03,-.14);let ne=new Ae(new mn(.04,.04,.05,20),d);ne.rotation.x=Math.PI/2,yt.add(ne);let he=new Ae(new tn(.012,.03,.052),f);he.position.x=.036,yt.add(he),ge.add(yt);let Pe=new Ae(new Sn(.008,8,8),new Ft({color:6280077}));Pe.position.set(.03,.07,.02),ge.add(Pe),ge.scale.setScalar(.6),ge.position.set(.17,-.15,-.42),c.add(ge);let Ie=48,st=new Float32Array(Ie*6),Oe=new Yt;Oe.setAttribute("position",new wt(st,3));let pt=new mi({color:16726876,transparent:!0,opacity:.55,blending:fs,depthWrite:!1}),Et=new ms(Oe,pt);Et.frustumCulled=!1,l.add(Et);let Xe=[],F=new en({color:2765116,metalness:.5,roughness:.5}),un=(w,L=!1)=>{let H=new It,ee=L?new Ft({color:w,transparent:!0,opacity:.16,depthWrite:!1}):F;for(let Ve=0;Ve<3;Ve++){let fe=Ve/3*Math.PI*2,Me=new Ae(new mn(.012,.012,1.42,6),ee);Me.position.set(Math.cos(fe)*.2,.68,Math.sin(fe)*.2),Me.rotation.set(-Math.sin(fe)*.29,0,Math.cos(fe)*.29),H.add(Me)}let ae=new It;ae.position.y=Al-.12;let me=new Ae(new tn(.2,.24,.16),L?ee:new en({color:15265267,metalness:.2,roughness:.4}));me.position.y=.12,ae.add(me);let Be=new Ae(new mn(.06,.06,.14,20),L?ee:new en({color:w,emissive:w,emissiveIntensity:.5,metalness:.6,roughness:.2}));return Be.rotation.z=Math.PI/2,Be.position.y=.2,ae.add(Be),H.add(ae),{g:H,head:ae}},mt=un(6087142,!0);mt.g.visible=!1,l.add(mt.g);let Tt=it.map(w=>{if(w.bonus)return null;let L=new tt(w.c),H=new It;H.position.set(w.x,0,w.z);let ee=new Ae(new Xi(w.r-.08,w.r,72),new Ft({color:L,transparent:!0,opacity:.55,side:an,depthWrite:!1}));ee.rotation.x=-Math.PI/2,ee.position.y=.03,ee.visible=!1,H.add(ee);let ae=new Ae(new mn(.03,.03,7,8,1,!0),new Ft({color:L,transparent:!0,opacity:.2,depthWrite:!1}));ae.position.y=3.5,H.add(ae);let me=new Ae(new sl(.22),new en({color:L,emissive:L,emissiveIntensity:.8,metalness:.3,roughness:.3}));me.position.y=4.1,H.add(me);let Be=new Ae(new Xi(.9,1,48),new Ft({color:L,transparent:!0,opacity:.5,side:an,depthWrite:!1}));return Be.position.y=4.1,H.add(Be),l.add(H),{g:H,ring:ee,beam:ae,gem:me,pulse:Be,c:L}}),He={uT:{value:0},uPx:{value:o.getPixelRatio()},uPs:{value:t.flags.lite?1.4:1},uLight:{value:0},uMode:{value:0},uFeatK:{value:6},uMesh:{value:0},uXray:{value:0},uReg:{value:0},uWaamSeen:{value:0},uAna:{value:new Array(Yr).fill(0)},uHi:{value:new Array(Yr).fill(0)},uWaam:{value:new Ue(0,0)},uMatC:{value:Object.values(Wn).map(w=>new tt(w.c))},uCad:{value:new Array(80).fill(0)},uCut:{value:new P(0,1.2,1)}},ke=0,at=0,C=0,M=null,z,Q,ce,j,Se,ve,Te,je,ue,Le,Qe,qe,ze,O,oe,Je=new Float32Array(Wr*$u),U=0,xe=0,Z=new Array(Yr).fill(0),re=new Array(Yr).fill(0),le=it.map(()=>"hidden"),Ce=it.map(()=>0),Mt=it.map(()=>0),zt=[],Jt=[],St=[],nn=new Int32Array(xt*xt),Dn=new Int32Array(xt*xt),qr=new Int32Array(xt*xt),Kr=new Int32Array(xt*xt),jn=null,Ys=[],Es=[0,0,0],Pn=null,Un=null,Zr=new bl,Ai=document.createElement("canvas");Ai.width=wl,Ai.height=Xu;let ws=Ai.getContext("2d");ws.fillStyle="#070a0f",ws.fillRect(0,0,wl,Xu);let Ti=(w,L)=>[(w-(ft.x0-2))/(ft.x1-ft.x0+4)*wl,(L-(ft.z0-2))/(ft.z1-ft.z0+4)*Xu],xi=!1,ji={P:new Float32Array(0),I:new Float32Array(0),S:new Float32Array(0),CLS:new Uint8Array(0),GRP:new Int8Array(0),N:0,color:()=>null},Qi=async(w,L)=>{let H=await fetch(w);if(!H.ok)throw new Error(`${w}: ${H.status}`);let ee=Number(H.headers.get("content-length")),ae=!!H.headers.get("content-encoding");if(!H.body)return H.arrayBuffer();let me=H.body.getReader(),Be=[],Ve=0;for(;;){let{done:Fe,value:Ne}=await me.read();if(Fe)break;Be.push(Ne),Ve+=Ne.length,ee&&L?.(Math.min(.97,Ve/(ae?ee*2.8:ee)))}let fe=new Uint8Array(Ve),Me=0;for(let Fe of Be)fe.set(Fe,Me),Me+=Fe.length;return fe.buffer},T=async()=>{let[w,L,H]=await Promise.all([Qi("lab/scene.bin",de=>!n&&e.loaded(Math.min(.97,de))),Qi("lab/clusters.json").then(de=>JSON.parse(new TextDecoder().decode(de))),Qi("lab/cad.json").then(de=>JSON.parse(new TextDecoder().decode(de)))]);if(n)return;let ee=new DataView(w);ke=ee.getUint32(4,!0),at=ee.getUint32(8,!0);let ae=12,me=new Int16Array(w,ae,ke*3);ae+=ke*6;let Be=new Uint8Array(w,ae,ke);ae+=ke,j=new Uint8Array(w,ae,ke),ae+=ke,Se=new Int8Array(w,ae,ke),ae+=ke,ve=new Int8Array(w,ae,ke),ae+=ke,Te=new Uint8Array(w,ae,ke),ae+=ke,je=new Int16Array(w.slice(ae,ae+ke*2)),ae+=ke*2;let Ve=new Int16Array(w.slice(ae,ae+ke*2));ae+=ke*2;let fe=new Uint8Array(w,ae,ke);if(C=ke,t.flags.lite){M=new Int32Array(Math.ceil(ke/2));for(let Ct=0;Ct<M.length;Ct++)M[Ct]=Ct*2;let de=(Ct,Kt=1)=>{let Wt=new Ct.constructor(M.length*Kt);for(let Pt=0;Pt<M.length;Pt++)for(let jt=0;jt<Kt;jt++)Wt[Pt*Kt+jt]=Ct[M[Pt]*Kt+jt];return Wt};me=de(me,3),Be=de(Be),j=de(j),Se=de(Se),ve=de(ve),Te=de(Te),je=de(je),Ve=de(Ve),fe=de(fe),ke=M.length}zt=L.clusters,Ys=L.feat,Es=H.plane,Jt=new Array(zt.length).fill(0),St=new Array(zt.length).fill(0),z=new Float32Array(ke*3);for(let de=0;de<ke*3;de++)z[de]=me[de]/1e3;ce=new Float32Array(ke);let Me=new Uint8Array(ke*3);ue=new Int32Array(xt*xt+1);for(let de=0;de<ke;de++){ce[de]=Be[de]/255;let Ct=z[de*3],Kt=z[de*3+1],Wt=z[de*3+2],Pt=Math.max(0,Math.min(xt-1,Math.floor(Wt+vn)))*xt+Math.max(0,Math.min(xt-1,Math.floor(Ct+vn)));if(ue[Pt+1]++,ve[de]>=0&&Z[ve[de]]++,Se[de]>=0){let jt=it[Se[de]].parts[Te[de]].c;Me[de*3]=jt[0]*255,Me[de*3+1]=jt[1]*255,Me[de*3+2]=jt[2]*255,Mt[Se[de]]=Math.max(Mt[Se[de]],Kt)}else Ct>ft.x0&&Ct<ft.x1&&Wt>ft.z0&&Wt<ft.z1&&U++,j[de]===1?nn[Pt]++:qr[Pt]++;je[de]>=0&&Jt[je[de]]++}for(let de=1;de<=xt*xt;de++)ue[de]+=ue[de-1];Q=new Float32Array(ke).fill(-1),ze=new Int32Array(ke),O=new Int32Array(ke),oe=new Float32Array(ke);let Fe=new Yt;Fe.setAttribute("position",new wt(z,3)),Fe.setAttribute("aI",new wt(Be,1,!0)),Fe.setAttribute("aCls",new wt(j,1)),Fe.setAttribute("aG",new wt(Se,1)),Fe.setAttribute("aP",new wt(Te,1)),Fe.setAttribute("aClu",new wt(je,1)),Fe.setAttribute("aW",new wt(Ve,1)),Fe.setAttribute("aM",new wt(fe,1)),Fe.setAttribute("aC",new wt(Me,3,!0)),Le=new wt(Q,1),Le.setUsage(gl),Fe.setAttribute("aS",Le),Qe=new wt(new Uint8Array(ke),1,!0),Qe.setUsage(gl),Fe.setAttribute("aF",Qe),qe=new wt(new Float32Array(ke*3),3),qe.setUsage(gl),Fe.setAttribute("aO",qe);let Ne=new Hs(Fe,new Zn({vertexShader:Wy,fragmentShader:Xy,uniforms:He}));Ne.frustumCulled=!1,l.add(Ne),Object.assign(ji,{P:z,I:ce,S:Q,CLS:j,GRP:Se,N:ke,color:de=>Se[de]>=0&&le[Se[de]]==="done"?it[Se[de]].parts[Te[de]].c:null});let gt=await Qi("lab/stations.glb").then(de=>new yl().parseAsync(de,"")).catch(()=>null);Pn=Ap(H,zt,gt?.scene),l.add(Pn.group);let ot=H.stations[Xr];Un=Up(ot.prims.filter(de=>de.k==="waam"),ot.x,ot.z),Un.group.visible=!1,l.add(Un.group),ka(),be().catch(()=>{}),xi=!0,e.loaded(1),t.flags.allskills&&Zi.forEach(de=>$.add(de.id)),V(),t.flags.auto&&setTimeout(()=>_d.start(),300)},G=w=>{let L=w==="light";o.setClearColor(Yu[w]),l.fog.color.setHex(Yu[w]),He.uLight.value=L?1:0,N.blending=L?Hi:fs,N.color.setHex(L?689350:6087142),N.needsUpdate=!0,v.color.setHex(L?689350:6087142),B.color.setHex(L?683952:12581119),_.color.setHex(L?4872816:12375807),pt.blending=L?Hi:fs,pt.needsUpdate=!0,A.opacity=L?.55:.9};G("dark");let $=new Set,k={unlocked:[],color:"normal",mesh:!1,meshMode:"all",meshVS:.2,xray:!1,measure:!1,auto:t.flags.auto,labels:!1,feat:6,featState:"idle",nbv:!1,cut:{mode:0,pos:1.2,flip:!1}},V=()=>e.skills({...k,unlocked:[...$]}),pe=()=>$.has("range")?1.5:1,De=()=>$.has("net")?6:3,_e=t.tech,we={drone:100,handheld:100,tls:100},Ke={drone:!1,handheld:!1,tls:!1},nt={},Ye=(w,L)=>t.flags.nobattery?!0:Ke[w]?!1:(we[w]=Math.max(0,we[w]-L),we[w]<=25&&!nt[w+"25"]&&(nt[w+"25"]=!0,e.toast($t(r(),"Akku unter 25 % \u2013 effizient scannen oder zur Ladestation","Battery below 25 % \u2013 scan efficiently or return to the charging pad"),"#ffb547")),we[w]<=0?(Ke[w]=!0,nt[w+"25"]=!1,e.toast($t(r(),`${Rt(w)} leer \u2013 l\xE4dt ca. ${Math.round(Fa/Zu)} s. Teste solange die anderen Technologien (1 2 3).`,`${Rt(w)} empty \u2013 charging for about ${Math.round(Fa/Zu)} s. Try the other technologies meanwhile (1 2 3).`),"#ff5a5f"),!1):!0),Rt=w=>w==="drone"?$t(r(),"Drohne","Drone"):w==="handheld"?"Handheld":"TLS",Vt=!1,qt=0,sn=[],Dt=new Map,$e=null,Bt=new P,Ut=new P(1,0,0),In=0,Ri=(w,L,H)=>{Xa=!0,Q[w]=L+Math.random()*.25;let ee=ve[w];ee>=0&&re[ee]++;let ae=z[w*3],me=z[w*3+1],Be=z[w*3+2];if(je[w]>=0&&St[je[w]]++,H&&(H.x||H.z)&&(qe.array[w*3]=H.x,qe.array[w*3+1]=H.y,qe.array[w*3+2]=H.z,In++),Se[w]<0){xe++;let Ve=Math.max(0,Math.min(xt-1,Math.floor(Be+vn)))*xt+Math.max(0,Math.min(xt-1,Math.floor(ae+vn)));if(j[w]===1?Dn[Ve]++:Kr[Ve]++,w%3===0){let[fe,Me]=Ti(ae,Be);ws.fillStyle=me>2.5?"rgba(92,225,230,0.5)":"rgba(150,170,200,0.35)",ws.fillRect(fe,Me,1,1)}}(j[w]!==1||w%3===0)&&(w%2===0||Se[w]>=0)&&Zr.add(ae,me,Be,j[w]),k.mesh&&k.meshMode!=="cad"&&En(w)},En=w=>{let L=z[w*3],H=z[w*3+1],ee=z[w*3+2];k.meshMode==="all"||Se[w]<0?$e?.add(L,H,ee):je[w]>=0&&Dt.get(je[w])?.add(L,H,ee)},$s=(w,L,H,ee,ae,me,Be,Ve)=>{let fe=Math.max(0,Math.floor((w+vn)/Ms)),Me=Math.min(xt-1,Math.floor((L+vn)/Ms)),Fe=Math.max(0,Math.floor((H+vn)/Ms)),Ne=Math.min(xt-1,Math.floor((ee+vn)/Ms)),gt=!1,ot=0;for(let de=Fe;de<=Ne;de++){let Ct=ue[de*xt+fe],Kt=ue[de*xt+Me+1],Wt=!1;for(let Pt=Ct;Pt<Kt;Pt++)Q[Pt]>=0||!ae(Pt)||(Ri(Pt,me,Ve),Be?.(Pt),Wt=!0,ot++);Wt&&(Le.addUpdateRange(Ct,Kt-Ct),Ve&&qe.addUpdateRange(Ct*3,(Kt-Ct)*3),gt=!0)}return gt&&(Le.needsUpdate=!0,Ve&&(qe.needsUpdate=!0)),ot},rn=(w,L)=>{Je.fill(1e9);let H=w.x,ee=w.z,ae=Math.max(0,Math.floor((H-L+vn)/Ms)),me=Math.min(xt-1,Math.floor((H+L+vn)/Ms)),Be=Math.max(0,Math.floor((ee-L+vn)/Ms)),Ve=Math.min(xt-1,Math.floor((ee+L+vn)/Ms)),fe=0;for(let Ne=Be;Ne<=Ve;Ne++){let gt=ue[Ne*xt+ae],ot=ue[Ne*xt+me+1];for(let de=gt;de<ot;de++){let Ct=z[de*3]-H,Kt=z[de*3+1]-Al,Wt=z[de*3+2]-ee,Pt=Ct*Ct+Wt*Wt,jt=Math.sqrt(Pt+Kt*Kt);if(jt>L||jt<.35)continue;let ri=Math.floor((Math.atan2(Wt,Ct)+Math.PI)/(2*Math.PI)*Wr)%Wr,ie=Math.min($u-1,Math.floor((Math.atan2(Kt,Math.sqrt(Pt))+Math.PI/2)/Math.PI*$u))*Wr+ri;jt<Je[ie]&&(Je[ie]=jt),ze[fe]=de,O[fe]=ie,oe[fe]=jt,fe++}}let Me=Array.from({length:qu},()=>[]),Fe=[];for(let Ne=0;Ne<fe;Ne++){let gt=ze[Ne],ot=oe[Ne],de=O[Ne];if(ot>Je[de]*1.02+.06||(Fe.push(gt),Q[gt]>=0))continue;let Ct=ot<6?1:1-.75*(ot-6)/(L-6);Math.random()>Ct||Me[Math.floor(de%Wr/Wr*qu)].push(gt)}w.buckets=Me,w.vis=Int32Array.from(Fe)},_i=()=>{for(let L of sn)L.m.dispose();if(sn=[],Dt.clear(),$e=null,!k.mesh||k.meshMode==="cad"||!xi)return;let w=k.meshVS;if($e=new Na({min:[-20,-.3,-13],max:[19,6.7,15],vs:w}),sn.push({m:$e,clu:-1}),k.meshMode==="obj")for(let L of zt){let H=L.max[0]-L.min[0],ee=L.max[1]-L.min[1],ae=L.max[2]-L.min[2],me=Math.max(.05,2*(H*ee+ee*ae+H*ae)),Be=Math.max(.025,Math.min(.12,Math.sqrt(3.5/(L.n/me))*(w/.2))),Ve=it[L.g].parts[L.p].c,fe=new Na({min:[L.min[0]-Be*2,L.min[1]-Be*2,L.min[2]-Be*2],max:[L.max[0]+Be*2,L.max[1]+Be*2,L.max[2]+Be*2],vs:Be,color:[Ve[0],Ve[1],Ve[2]],iso:.45});Dt.set(L.id,fe),sn.push({m:fe,clu:L.id})}for(let L of sn)l.add(L.m.group);for(let L=0;L<ke;L++)Q[L]>=0&&En(L);for(let L of sn)L.m.touchAll()},qs=()=>{He.uMesh.value=k.mesh?k.meshMode==="all"?1:k.meshMode==="obj"?2:3:0,Pn&&(Pn.group.visible=k.mesh&&k.meshMode==="cad"),_i(),zl()},Fn=()=>{if(!(!Pn||!Pn.group.visible)){for(let[w,L]of Pn.cluObjs){let H=Jt[w]>0&&St[w]/Jt[w]>=.5;He.uCad.value[w]=H?1:0;for(let ee of L)ee.visible=H}for(let w of Pn.blocks){let L=0,H=0;for(let ee of w.cells)L+=qr[ee],H+=Kr[ee];w.m.visible=L>0&&H/L>=.3}Pn.floor.cells.forEach((w,L)=>Pn.floor.show(L,nn[w]>0&&Dn[w]/nn[w]>=.3));for(let w of Pn.waam){let L=Un?Un.prog[w.p]:w.L;w.meshes.forEach((H,ee)=>H.visible=H.visible&&ee<L)}}},Ks=async w=>{if(k.feat=w,He.uFeatK.value=w,w===16){let ee=Qe.array;for(let ae=0;ae<ke;ae++)ee[ae]=j[ae]===1&&Se[ae]<0?Math.round(Math.max(0,Math.min(1,(z[ae*3+1]-(Es[0]*z[ae*3]+Es[1]*z[ae*3+2]+Es[2]))/.04*.5+.5))*255):0;Qe.needsUpdate=!0,V();return}if(!jn){if(k.featState==="loading")return;k.featState="loading",V(),jn=new Uint8Array(await Qi("lab/feats.bin")),k.featState="ready"}let L=Qe.array,H=w*C;if(M)for(let ee=0;ee<ke;ee++)L[ee]=jn[H+M[ee]];else L.set(jn.subarray(H,H+ke));Qe.needsUpdate=!0,V()},Oa=[],ka=()=>{i.clu.innerHTML="";for(let w of zt){let L=document.createElement("div");L.className="lab-clu";let H=it[w.g].parts[w.p].c;L.style.borderColor=`rgb(${H.map(ee=>Math.round(ee*255)).join(",")})`,i.clu.appendChild(L),Oa.push(L)}},Jr=new It;l.add(Jr);let Ci=new Set,Pl=-99,Qu="",Yp=w=>{let H=w.toLowerCase().split(/[\s,;]+/).filter(me=>me.length>1).flatMap(me=>[me,..._l[me]??[]]);Jr.clear(),Ci=new Set;let ee=new Set;for(let me of zt){let Be=it[me.g].parts[me.p],Ve=[me.name.de,me.name.en,rt(Be.name,"de"),rt(Be.name,"en")].map(Fe=>Fe.toLowerCase());if(!H.some(Fe=>Ve.some(Ne=>Ne.includes(Fe)))||me.g===Tl&&le[Tl]==="hidden")continue;Ci.add(me.id),ee.add(me.g);let fe=new Gn(new P(me.min[0]-.05,me.min[1]-.05,me.min[2]-.05),new P(me.max[0]+.05,me.max[1]+.05,me.max[2]+.05)),Me=new dl(fe,new tt(16724804));Me.material.depthTest=!1,Me.renderOrder=5,Jr.add(Me)}Pl=g.elapsedTime,Qu=w,ee.forEach(me=>He.uHi.value[me]=Pl);let ae=[...new Set(zt.filter(me=>Ci.has(me.id)).map(me=>rt(it[me.g].parts[me.p].name,r()).split(" \xB7 ")[0]))];return e.toast(Ci.size?`Zero-Shot \u201E${w}\u201C \u2192 ${Ci.size} ${$t(r(),"Objekte","objects")}: ${ae.join(", ")}`:$t(r(),`Zero-Shot \u201E${w}\u201C: kein Treffer`,`Zero-shot "${w}": no match`),"#ff3344"),Ci.size},As=[],za=new It;l.add(za);let $p=new Ft({color:16764784,depthTest:!1}),qp=(w,L)=>{let H=new ct().multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse).elements,ee=a.clientWidth,ae=a.clientHeight,me=-1,Be=1e9;for(let Ve=0;Ve<ke;Ve++){if(Q[Ve]<0)continue;let fe=z[Ve*3],Me=z[Ve*3+1],Fe=z[Ve*3+2],Ne=H[3]*fe+H[7]*Me+H[11]*Fe+H[15];if(Ne<=.05)continue;let gt=((H[0]*fe+H[4]*Me+H[8]*Fe+H[12])/Ne+1)*.5*ee,ot=(1-(H[1]*fe+H[5]*Me+H[9]*Fe+H[13])/Ne)*.5*ae,de=(gt-w)**2+(ot-L)**2;if(de>100)continue;let Ct=Ne+de*.002;Ct<Be&&(Be=Ct,me=Ve)}return me},Kp=(w,L)=>{let H=qp(w,L);if(H<0)return e.toast($t(r(),"Kein gescannter Punkt unter dem Cursor","No scanned point under the cursor"),"#ffcf70");let ee=new P(z[H*3],z[H*3+1],z[H*3+2]),ae=As[As.length-1],me=new Ae(new Sn(.035,10,8),$p);if(me.position.copy(ee),me.renderOrder=6,!ae||ae.b){let Be=new It;Be.add(me),za.add(Be);let Ve=document.createElement("div");if(Ve.className="lab-meas",i.meas.appendChild(Ve),As.push({a:ee,obj:Be,el:Ve}),As.length>6){let fe=As.shift();za.remove(fe.obj),fe.el.remove()}}else{ae.b=ee,ae.obj.add(me);let Be=new Wi(new Yt().setFromPoints([ae.a,ee]),new mi({color:16764784,depthTest:!1}));Be.renderOrder=6,ae.obj.add(Be);let Ve=ae.a.distanceTo(ee);ae.el.textContent=`${(Ve*1e3).toLocaleString(r()==="en"?"en-GB":"de-DE",{maximumFractionDigits:0})} mm`}},ed=()=>{As.splice(0).forEach(w=>(za.remove(w.obj),w.el.remove()))},On=0,Zs=.42,jr=4.2,Js=-.12,si=new P,wn=new P(ii[0],0,ii[1]),Il=new P,Ba=0,Qr=0,bn=!1,Ll=0,Nl=!1,kn=t.flags.auto,ht={phase:"go",target:-1,t0:0,lastProg:0,lastProgT:0,alt:3.6,ang:0,cardI:-1,cardT:0},Dl=[.1,.25,.5,.75],js={},yi=()=>_e==="drone"?x.position:wn,Pi=new Map,Qs=0,Ul=()=>{let[w,L]=[...Pi.values()];return Math.hypot(w.x-L.x,w.y-L.y)},td=w=>{w.target.closest(".lab-ui, .lab-label")||(Pi.set(w.pointerId,{x:w.clientX,y:w.clientY,moved:0}),Pi.size===2&&(Qs=Ul()))},nd=w=>{let L=Pi.get(w.pointerId);if(!L)return;let H=w.clientX-L.x,ee=w.clientY-L.y;if(L.moved+=Math.abs(H)+Math.abs(ee),L.x=w.clientX,L.y=w.clientY,Pi.size>=2){let me=Ul();Qs>0&&me>0&&(_e==="drone"?jr=Math.max(1.8,Math.min(14,jr*(Qs/me))):(c.fov=Math.max(35,Math.min(80,c.fov*(Qs/me))),c.updateProjectionMatrix())),Qs=me;return}let ae=w.pointerType==="touch"?1.5:1;_e==="drone"?(On-=H*.006*ae,Zs=Math.max(.05,Math.min(1.35,Zs+ee*.004*ae))):(On-=H*.005*ae,Js=Math.max(-1.3,Math.min(1.3,Js-ee*.004*ae)))},Ha=w=>{let L=Pi.get(w.pointerId);if(L){if(Pi.size===1&&L.moved<8&&k.measure&&xi){let H=a.getBoundingClientRect();Kp(w.clientX-H.left,w.clientY-H.top)}Pi.delete(w.pointerId),Qs=Pi.size===2?Ul():0}},Va={f:0,r:0},id=w=>{jr=Math.max(1.8,Math.min(14,jr*(1+Math.sign(w.deltaY)*.1))),w.preventDefault()},Fl=()=>{let w=yi(),L=-1,H=1e9;return it.forEach((ee,ae)=>{if(ee.bonus&&le[ae]==="hidden")return;let me=Math.hypot(w.x-ee.x,w.z-ee.z);me<ee.r+1.2&&me<H&&(H=me,L=ae)}),L},Ol=w=>{if(w===_e)return!0;if(Ke[w])return e.toast($t(r(),`${Rt(w)} l\xE4dt noch (${Math.round(we[w])} %) \u2013 ab ${Fa} % wieder einsatzbereit`,`${Rt(w)} still charging (${Math.round(we[w])} %) \u2013 ready again at ${Fa} %`),"#ffb547"),e.tech(_e),!1;if(w==="drone"?(x.position.set(wn.x,1.4,wn.z),si.set(0,0,0),Ll=g.elapsedTime):(wn.set(yi().x,0,yi().z),kn&&!t.flags.auto&&Ga(!1)),w==="handheld"){Bt.set(0,0,0);let L=Math.random()*Math.PI*2;Ut.set(Math.cos(L),0,Math.sin(L))}return _e=w,e.tech(w),!0},Ga=w=>{kn=w,k.auto=w,ht.phase="go",ht.target=-1,V()},Wa=w=>{k.color=k.color===w?"normal":w,He.uMode.value={normal:0,seg:1,heat:2,therm:3,mat:4}[k.color],k.color==="heat"&&Ks(k.feat),V()},Ii=null,kl=new hi(new P(0,-1,0),1.2),zn=new It;zn.add(new Ae(new wi(1,1),new Ft({color:16742973,transparent:!0,opacity:.06,side:an,depthWrite:!1}))),zn.add(new ms(new il(new wi(1,1)),new mi({color:16742973,transparent:!0,opacity:.7}))),zn.visible=!1,l.add(zn),o.localClippingEnabled=!0;let zl=()=>{let{mode:w,pos:L,flip:H}=k.cut,ee=H?-1:1;He.uCut.value.set(w,L,ee);let ae=w===2?new P(1,0,0):w===3?new P(0,0,1):new P(0,1,0);kl.normal.copy(ae).multiplyScalar(-ee),kl.constant=L*ee;let me=new Set,Be=Ne=>Ne?.traverse(gt=>{let ot=gt.material;ot&&(Array.isArray(ot)?ot:[ot]).forEach(de=>me.add(de))});Be(Pn?.group),Be(Un?.group);for(let Ne of sn)me.add(Ne.m.mat);for(let Ne of me){let gt=w?[kl]:null;(Ne.clippingPlanes?.length??0)!==(gt?.length??0)&&(Ne.clippingPlanes=gt,Ne.needsUpdate=!0)}zn.visible=w>0;let Ve=ft.x1-ft.x0+2,fe=ft.z1-ft.z0+2,Me=(ft.x0+ft.x1)/2,Fe=(ft.z0+ft.z1)/2;zn.rotation.set(0,0,0),w===1?(zn.position.set(Me,L,Fe),zn.rotation.x=-Math.PI/2,zn.scale.set(Ve,fe,1)):w===2?(zn.position.set(L,3.3,Fe),zn.rotation.y=Math.PI/2,zn.scale.set(fe,6.8,1)):w===3&&(zn.position.set(Me,3.3,L),zn.scale.set(Ve,6.8,1)),V()},vi=[],Xa=!1,sd=-99,rd=()=>{for(let w of vi)l.remove(w.g),w.el.remove();vi=[]},Ky=w=>w>=1e3?(w/1e3).toLocaleString(r()==="en"?"en-GB":"de-DE",{maximumFractionDigits:1})+"k":String(Math.round(w)),ad=()=>{if(!xi)return;Xa=!1,sd=g.elapsedTime;let w=new Float32Array(xt*xt),L=new Uint16Array(xt*xt);for(let fe=0;fe<xt*xt;fe++)for(let Me=ue[fe];Me<ue[fe+1];Me++)if(Q[Me]<0){let Fe=z[Me*3],Ne=z[Me*3+2];(Se[Me]>=0||Fe>ft.x0&&Fe<ft.x1&&Ne>ft.z0&&Ne<ft.z1)&&w[fe]++}else j[Me]!==1&&z[Me*3+1]>.3&&z[Me*3+1]<2.2&&L[fe]++;let H=fe=>L[fe]>(M?15:30),ee=15*pe(),ae=Math.ceil(ee),me=[];for(let fe=Math.ceil(ft.z0+vn)+1;fe<ft.z1+vn-1;fe+=2)for(let Me=Math.ceil(ft.x0+vn)+1;Me<ft.x1+vn-1;Me+=2){let Fe=fe*xt+Me;if(!nn[Fe]||H(Fe))continue;let Ne=0;for(let gt=-ae;gt<=ae;gt++)for(let ot=-ae;ot<=ae;ot++){let de=Me+ot,Ct=fe+gt;if(de<0||Ct<0||de>=xt||Ct>=xt)continue;let Kt=w[Ct*xt+de];if(!Kt)continue;let Wt=Math.hypot(ot,gt);if(Wt>ee)continue;let Pt=(Wt<6?1:1-.75*(Wt-6)/(ee-6))*1.1,jt=1,ri=Math.ceil(Wt*2);for(let K=2;K<ri-1;K++)if(H(Math.round(fe+gt*K/ri)*xt+Math.round(Me+ot*K/ri))){jt=.12;break}Ne+=Kt*Pt*jt}me.push({x:Me-vn+.5,z:fe-vn+.5,gain:Ne})}me.sort((fe,Me)=>Me.gain-fe.gain);let Be=[];for(let fe of me){if(Be.length>=3||fe.gain<U*.005)break;Be.every(Me=>Math.hypot(Me.x-fe.x,Me.z-fe.z)>6)&&Xe.every(Me=>Math.hypot(Me.x-fe.x,Me.z-fe.z)>2.5)&&Be.push(fe)}rd();let Ve=16751165;Be.forEach((fe,Me)=>{let Fe=new It;Fe.position.set(fe.x,0,fe.z);let Ne=new Ae(new Xi(.42,.5,40),new Ft({color:Ve,transparent:!0,opacity:.85,side:an,depthWrite:!1}));Ne.rotation.x=-Math.PI/2,Ne.position.y=.04,Fe.add(Ne),Fe.add(un(Ve,!0).g);let gt=new Ae(new mn(.02,.02,3.2,6,1,!0),new Ft({color:Ve,transparent:!0,opacity:.35,depthWrite:!1}));gt.position.y=3.4,Fe.add(gt),l.add(Fe);let ot=document.createElement("div");ot.className="lab-nbv",ot.textContent=`${Me+1} \xB7 +${Math.max(1,Math.round(100*fe.gain/U))} % ${$t(r(),"Halle","hall")}`,i.meas.appendChild(ot),vi.push({...fe,g:Fe,el:ot})}),Be.length||e.toast($t(r(),"Scan-Planer: kaum noch Neuzuwachs \u2013 die Halle ist weitgehend erfasst","Scan planner: hardly any gain left \u2013 the hall is largely captured"),"#ff9a3d")},Bl=w=>{if($.has(w)){if(w==="seg"&&Wa("seg"),w==="heat"&&Wa("heat"),w==="therm"&&Wa("therm"),w==="mat"&&Wa("mat"),w==="mesh"&&(k.mesh=!k.mesh,qs()),w==="xray"&&(k.xray=!k.xray,He.uXray.value=k.xray?1:0),w==="measure"&&(k.measure=!k.measure,k.measure?e.toast($t(r(),"Messen: zwei gescannte Punkte anklicken","Measure: click two scanned points"),"#ffcf70"):ed()),w==="auto"){if(!kn&&Ke.drone)return e.toast($t(r(),"Drohne l\xE4dt noch \u2013 Autopilot sp\xE4ter","Drone still charging \u2013 autopilot later"),"#ffb547");Ga(!kn),kn&&Ol("drone")}w==="search"&&e.search(),w==="ask"&&e.ask(),w==="icp"&&Zp(),w==="nbv"&&(k.nbv=!k.nbv,k.nbv?(ad(),_e!=="tls"&&e.toast($t(r(),"Scan-Planer: orange Standpunkte \u2013 wechsle zu TLS (3) und stelle dort Scanner auf (P)","Scan planner: orange positions \u2013 switch to TLS (3) and set up scanners there (P)"),"#ff9a3d")):rd()),w==="cut"&&(k.cut={...k.cut,mode:k.cut.mode?0:1},zl()),V()}},Zp=()=>{if(Ii)return;let w=qe.array,L=0,H=0;for(let ee=0;ee<ke;ee++){let ae=w[ee*3]**2+w[ee*3+1]**2+w[ee*3+2]**2;ae>0&&(L+=ae,H++)}if(!H)return e.toast($t(r(),"ICP: keine driftbehafteten Scans \u2013 alles bereits registriert","ICP: no drifted scans \u2013 everything already registered"),"#ffcf70");Ii={t0:g.elapsedTime,rms:Math.sqrt(L/H),n:H}},od=()=>{if(_e!=="tls"||Xe.some(Ne=>Ne.state!=="idle"))return;let w=-Math.sin(On),L=-Math.cos(On),H=Math.max(ft.x0,Math.min(ft.x1,wn.x+w*2.6)),ee=Math.max(ft.z0,Math.min(ft.z1,wn.z+L*2.6));if(k.nbv&&vi.length){let Ne=vi.reduce((gt,ot)=>Math.hypot(ot.x-H,ot.z-ee)<Math.hypot(gt.x-H,gt.z-ee)?ot:gt);Math.hypot(Ne.x-H,Ne.z-ee)<3.5&&(e.toast($t(r(),`Scanner auf Vorschlag ${vi.indexOf(Ne)+1} gestellt`,`Scanner placed on suggestion ${vi.indexOf(Ne)+1}`),"#ff9a3d"),H=Ne.x,ee=Ne.z)}if(Xa=!0,Xe.length>=De()){let Ne=Xe.shift();l.remove(Ne.g,Ne.ring)}let ae=Op[(Xe.length+Math.floor(g.elapsedTime))%Op.length],{g:me,head:Be}=un(ae);me.position.set(H,0,ee);let Ve=15*pe(),fe=new wi(Ve,7);fe.translate(Ve/2,2,0);let Me=new Ae(fe,new Ft({color:ae,transparent:!0,opacity:.16,side:an,depthWrite:!1,blending:fs}));Me.position.y=Al,Me.visible=!1,me.add(Me),l.add(me);let Fe=new Ae(new Xi(Ve-.06,Ve,128),new Ft({color:ae,transparent:!0,opacity:.25,side:an,depthWrite:!1}));Fe.rotation.x=-Math.PI/2,Fe.position.set(H,.03,ee),l.add(Fe),Xe.push({g:me,head:Be,sheet:Me,ring:Fe,x:H,z:ee,c:ae,buckets:null,vis:null,prog:0,nextB:0,state:"idle"})},ld=()=>{if(!(_e!=="tls"||!Xe.length||Xe.some(w=>w.state!=="idle"))){if(!t.flags.nobattery&&we.tls<Xs.tlsRun*Xe.length&&!Ke.tls)return e.toast($t(r(),`Akku reicht nicht f\xFCr ${Xe.length} Scanner (je ${Xs.tlsRun} %) \u2013 Scanner einsammeln (C) oder laden`,`Battery too low for ${Xe.length} scanners (${Xs.tlsRun} % each) \u2013 collect scanners (C) or charge`),"#ffb547");Ye("tls",Xs.tlsRun*Xe.length)&&Xe.forEach(w=>(w.state="prep",w.prog=0,w.nextB=0,w.buckets=null))}},cd=()=>{Xe.some(w=>w.state!=="idle")||Xe.splice(0).forEach(w=>l.remove(w.g,w.ring))},Hl=[],Jp=w=>{if(!w.vis)return;let L=Gu(ji,[w.x,Al,w.z],1600,w.vis,!0),H=document.createElement("canvas");H.width=320,H.height=160,H.getContext("2d").drawImage(L,0,0,320,160),Hl.push({id:Hl.length+1,x:w.x,z:w.z,url:L.toDataURL("image/jpeg",.86),thumb:H.toDataURL("image/jpeg",.8)}),w.vis=null,e.panos([...Hl])},hd=w=>{let L=w.target?.tagName;if(L==="INPUT"||L==="TEXTAREA"||L==="SELECT")return;let H=w.key.toLowerCase();if(["arrowup","arrowdown","arrowleft","arrowright"," "].includes(H)&&w.preventDefault(),js[H]=!0,["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(H)&&kn&&!t.flags.auto&&Ga(!1),w.repeat)return;if(H==="escape"&&(e.card(null),k.measure&&Bl("measure")),H==="enter"||H==="f"){let ae=Fl();ae>=0&&le[ae]==="done"&&e.card(ae)}if(!bn)return;(H==="1"||H==="2"||H==="3")&&Ol(["drone","handheld","tls"][+H-1]),H==="p"&&od(),H==="c"&&cd(),H===" "&&_e==="tls"&&ld(),H==="l"&&(k.labels=!k.labels,V());let ee=Zi.find(ae=>ae.key?.toLowerCase()===H);ee&&((ee.id==="search"||ee.id==="ask")&&w.preventDefault(),Bl(ee.id))},ud=w=>js[w.key.toLowerCase()]=!1,dd=()=>Object.keys(js).forEach(w=>js[w]=!1);a.addEventListener("pointerdown",td),window.addEventListener("pointermove",nd),window.addEventListener("pointerup",Ha),window.addEventListener("pointercancel",Ha),a.addEventListener("wheel",id,{passive:!1}),window.addEventListener("keydown",hd),window.addEventListener("keyup",ud),window.addEventListener("blur",dd);let fd=()=>{o.setSize(a.clientWidth,a.clientHeight),c.aspect=a.clientWidth/a.clientHeight,c.updateProjectionMatrix()};window.addEventListener("resize",fd);let pd=0,md=0,gd=0,er=new P,jp=new P,Qp=new P(0,1,0),xd=()=>{s=requestAnimationFrame(xd);let w=Math.min(.05,g.getDelta()),L=g.elapsedTime;He.uT.value=L;let H=js,ee=_e!=="drone",ae=Math.max(-1,Math.min(1,(H.w||H.arrowup?1:0)-(H.s||H.arrowdown?1:0)+Va.f)),me=Math.max(-1,Math.min(1,(H.d||H.arrowright?1:0)-(H.a||H.arrowleft?1:0)+Va.r));bn&&(H.q||H.e)&&(On+=w*1.6*(H.q?1:-1));let Be=new P(-Math.sin(On),0,-Math.cos(On)),Ve=new P(-Be.z,0,Be.x),fe=Math.hypot(yi().x-ii[0],yi().z-ii[1])<1&&(ee||x.position.y<.9);["drone","handheld","tls"].forEach(K=>{let ie=K===_e?fe?Gy:0:Zu*(fe?2:1);we[K]=Math.min(100,we[K]+ie*w),Ke[K]&&we[K]>=Fa&&(Ke[K]=!1,e.toast($t(r(),`${Rt(K)} wieder einsatzbereit (${Math.round(we[K])} %)`,`${Rt(K)} ready again (${Math.round(we[K])} %)`),"#5fd38d"))}),q.material.opacity=fe?.6+.4*Math.sin(L*8):.5,x.visible=R.visible=!ee;let Me=Ke.drone&&!t.flags.nobattery;if(bn&&!ee){let K=H[" "]?1:H.shift?-1:0,ie=Be.clone().multiplyScalar(ae).add(Ve.clone().multiplyScalar(me)).multiplyScalar(Me?2.5:11),We=0;kn&&(We=em(ie,L)),ie.y=Me?-6:(We||K)*7+(L-Ll<1.6&&x.position.y<2.4&&!kn?9:0),si.addScaledVector(ie,w),si.multiplyScalar(Math.pow(.12,w));let Ze=Math.hypot(si.x,si.z),lt=Me?1:5;Ze>lt&&(si.x*=lt/Ze,si.z*=lt/Ze),x.position.addScaledVector(si,w),x.position.x=Math.max(ft.x0,Math.min(ft.x1,x.position.x)),x.position.z=Math.max(ft.z0,Math.min(ft.z1,x.position.z)),x.position.y=Math.max(Me||kn&&ht.phase==="charge"?.25:ft.y0,Math.min(ft.y1,x.position.y));let et=(Ze>.3?Math.atan2(-si.x,-si.z):Qr)-Qr;for(;et>Math.PI;)et-=Math.PI*2;for(;et<-Math.PI;)et+=Math.PI*2;Qr+=et*Math.min(1,w*4),x.rotation.set(0,0,0),x.rotateY(Qr);let Xt=er.copy(si).applyAxisAngle(Qp,-Qr);x.rotateX(Math.max(-.35,Math.min(.35,Xt.z*.07))),x.rotateZ(Math.max(-.35,Math.min(.35,-Xt.x*.07))),x.position.y>.8&&Ye("drone",Xs.droneFly*w)}x.position.y+=Math.sin(L*2.2)*.0015,b.forEach((K,ie)=>K.rotation.y+=(bn&&!Me?40:x.position.y>.4?20:2)*w*(ie%2?1:-1));let Fe=x.position.y;R.position.set(x.position.x,.02,x.position.z),R.scale.setScalar(.9+Fe*.25);let Ne=(.6+Fe*.75)*pe(),gt=bn&&!ee&&Fe>.8&&!Me;D.visible=S.visible=W.visible=gt,D.scale.set(Ne,Fe-.15,Ne),D.position.set(x.position.x,(Fe-.15)/2,x.position.z),S.scale.set(Ne,Ne,1),S.position.set(x.position.x,.04,x.position.z),W.position.set(x.position.x,.05,x.position.z),W.scale.set(Ne,1,1),W.rotation.y=L*6,N.opacity=(He.uLight.value?.06:.07)+.035*Math.sin(L*8);let ot=!1;if(ge.visible=_e==="handheld",mt.g.visible=bn&&_e==="tls"&&!Xe.some(K=>K.state!=="idle"),Et.visible=!1,ee){let K=H.shift?5.5:3,ie=Be.clone().multiplyScalar(ae).add(Ve.clone().multiplyScalar(me));ie.lengthSq()>1&&ie.normalize(),Il.lerp(ie.multiplyScalar(bn?K:0),Math.min(1,w*8)),wn.addScaledVector(Il,w),wn.x=Math.max(ft.x0,Math.min(ft.x1,wn.x)),wn.z=Math.max(ft.z0,Math.min(ft.z1,wn.z));let We=Il.length()*w;Ba+=We*2.4;let Ze=er.set(wn.x,Fp+Math.sin(Ba*2)*.025,wn.z);c.position.copy(Ze);let lt=jp.set(-Math.sin(On)*Math.cos(Js),Math.sin(Js),-Math.cos(On)*Math.cos(Js));if(c.lookAt(Ze.x+lt.x,Ze.y+lt.y,Ze.z+lt.z),ge.position.set(.17+Math.cos(Ba)*.006,-.15+Math.abs(Math.sin(Ba))*.008,-.42),_e==="tls"&&mt.g.position.set(wn.x+Be.x*2.6,0,wn.z+Be.z*2.6),ot=_e==="handheld"&&bn&&!!(H[" "]||H.scan)&&!Ke.handheld,yt.rotation.z+=w*(ot?30:2),Pe.material.color.setHex(ot?Math.sin(L*20)>0?16726876:3342336:Ke.handheld?5583616:6280077),ot&&xi&&Ye("handheld",Xs.hand*w)){We>0&&(Bt.x+=(Ut.x*.04+(Math.random()-.5)*.02)*We,Bt.z+=(Ut.z*.04+(Math.random()-.5)*.02)*We,Bt.y+=(Math.random()-.5)*.008*We,Bt.length()>.45&&Bt.setLength(.45)),Bt.length()>.15&&!$.has("icp")&&!nt.drift&&(nt.drift=!0,e.toast($t(r(),"SLAM-Drift! Ohne Registrierung verschmieren die W\xE4nde \u2026 irgendwo hoch oben gibt es Zielmarken.","SLAM drift! Without registration the walls smear \u2026 somewhere high up there are targets."),"#ffcf70"));let ut=7*pe(),et=Math.cos(.72),Xt=Ze.x,gn=Ze.y,Mn=Ze.z,Ts=ge.localToWorld(new P(0,.03,-.18)),es=0;$s(Xt-ut,Xt+ut,Mn-ut,Mn+ut,Rs=>{let Vl=z[Rs*3]-Xt,Gl=z[Rs*3+1]-gn,Wl=z[Rs*3+2]-Mn,yd=Vl*Vl+Gl*Gl+Wl*Wl;if(yd>ut*ut)return!1;let Xl=Math.sqrt(yd);return(Vl*lt.x+Gl*lt.y+Wl*lt.z)/Xl<et?!1:Math.random()<(Xl<3.5?1:1-.7*(Xl-3.5)/(ut-3.5))*.3},L,Rs=>{es>=Ie||Math.random()>.08||(st.set([Ts.x,Ts.y,Ts.z,z[Rs*3]+Bt.x,z[Rs*3+1]+Bt.y,z[Rs*3+2]+Bt.z],es*6),es++)},Bt.lengthSq()>0?Bt:void 0),Oe.setDrawRange(0,es*2),Oe.attributes.position.needsUpdate=!0,Et.visible=es>0,pt.opacity=.35+.3*Math.random()}}else{let K=x.position.clone().add(new P(0,.25,0)),ie=new P(Math.sin(On)*Math.cos(Zs),Math.sin(Zs),Math.cos(On)*Math.cos(Zs)).multiplyScalar(bn?jr:6).add(K);c.position.lerp(ie,bn?Math.min(1,w*6):.03),c.lookAt(K),(!bn||kn&&ht.phase==="tour")&&(On+=w*.15)}if(xi&&gt){let K=x.position.x,ie=x.position.z,We=pe(),Ze=$s(K-Ne,K+Ne,ie-Ne,ie+Ne,lt=>{let ut=z[lt*3+1];if(ut>Fe-.15)return!1;let et=(.6+(Fe-ut)*.75)*We,Xt=z[lt*3]-K,gn=z[lt*3+2]-ie;return Xt*Xt+gn*gn<=et*et},L);Ye("drone",Xs.droneScan*w*(Ze>0?1:.6))}if(xi){let K=Xe.find(ie=>ie.state==="prep");K&&(rn(K,15*pe()),K.state="run",K.prog=0);for(let ie of Xe){if(ie.state!=="run"||!ie.buckets)continue;ie.prog=Math.min(1,ie.prog+w/3.4);let We=Math.floor(ie.prog*qu);for(;ie.nextB<We;ie.nextB++)for(let lt of ie.buckets[ie.nextB])Q[lt]<0&&Ri(lt,L);Vt=!0;let Ze=ie.prog*2*Math.PI-Math.PI;ie.sheet.visible=!0,ie.sheet.rotation.y=-Ze,ie.head.rotation.y=-Ze,ie.prog>=1&&(ie.state="idle",ie.sheet.visible=!1,ie.buckets=null,Jp(ie))}Vt&&(Le.clearUpdateRanges(),Le.needsUpdate=!0,Vt=!1)}if(Ii){let K=Math.min(1,(L-Ii.t0)/1.4);He.uReg.value=K*K*(3-2*K),K>=1&&(qe.array.fill(0),qe.clearUpdateRanges(),qe.needsUpdate=!0,He.uReg.value=0,e.toast($t(r(),`ICP: ${Ii.n.toLocaleString("de-DE")} Punkte registriert \xB7 RMS ${(Ii.rms*100).toFixed(1)} cm \u2192 < 1 mm (Simulation)`,`ICP: ${Ii.n.toLocaleString("en-GB")} points registered \xB7 RMS ${(Ii.rms*100).toFixed(1)} cm \u2192 < 1 mm (simulation)`),"#ffcf70"),Bt.set(0,0,0),In=0,Ii=null)}if(X.group.visible=le[Ku]!=="hidden",X.mat&&le[Ku]==="done"&&X.t0<0&&(X.t0=L,e.toast($t(r(),"Easter Egg: Depth Anything V2 \u2192 Tiefenkarte \u2192 Punktwolke \xFCber Referenzebene","Easter egg: Depth Anything V2 \u2192 depth map \u2192 point cloud over a reference plane"),"#ffcf70")),X.mat&&X.t0>=0){let K=Math.min(1,(L-X.t0)/3.2);X.mat.uniforms.uSweep.value=Math.min(1.3,(L-X.t0)/1.6),X.mat.uniforms.uK.value=K*K*(3-2*K)*(1+.04*Math.sin(L*1.3))}if(Un&&xi){let K=Un.update(L);He.uWaam.value.set(K[0],K[1]??0),Un.group.visible=le[Xr]!=="hidden",He.uWaamSeen.value=le[Xr]!=="hidden"?1:0}let de=0;if(k.mesh&&k.meshMode!=="cad"){let K=yi(),ie=9;for(let We of sn){let Ze=performance.now();if(de+=We.m.update(ie,K.x,K.z),ie-=performance.now()-Ze,ie<=0)break}}L-gd>.4&&(gd=L,Fn());let Ct=U?xe/U:0;for(;Dl.length&&Ct>=Dl[0];){let K=Dl.shift();e.toast($t(r(),`${Math.round(K*100)} % der Halle erfasst`,`${Math.round(K*100)} % of the hall captured`),"#9b8cff")}it.forEach((K,ie)=>{let We=Z[ie]?re[ie]/Z[ie]:0;if(le[ie]==="hidden"&&We>Vy&&(le[ie]="found",e.toast(K.bonus?$t(r(),"\u2605 Bonus-Signal gefunden: Registrier-Zielmarken!","\u2605 Bonus signal found: registration targets!"):`${$t(r(),"Entdeckt","Discovered")}: ${kp(K)} \xB7 ${rt(K.t,r())}`,K.c)),le[ie]==="found"&&We>Wu&&(le[ie]="analyzing",Ce[ie]=L,He.uAna.value[ie]=L),le[ie]==="analyzing"&&L-Ce[ie]>2){le[ie]="done";for(let et of Ju(K))$.has(et.id)||($.add(et.id),V(),e.banner(et));(t.card()===null||kn)&&(e.card(ie),kn&&(ht.cardI=ie,ht.cardT=L)),!Nl&&it.every((et,Xt)=>et.bonus||le[Xt]==="done")&&(Nl=!0,e.finish(L-qt))}let Ze=Tt[ie];if(!Ze)return;let lt=le[ie];Ze.ring.visible=lt!=="hidden",Ze.gem.rotation.y+=w*(lt==="analyzing"?6:1.2),Ze.gem.position.y=4.1+Math.sin(L*2+ie)*.12,Ze.gem.scale.setScalar(lt==="hidden"?.7:1);let ut=(L*.6+ie*.37)%1;Ze.pulse.visible=bn&&lt==="hidden",Ze.pulse.position.y=Ze.gem.position.y,Ze.pulse.scale.setScalar(.15+ut*.75),Ze.pulse.lookAt(c.position),Ze.pulse.material.opacity=.6*(1-ut),Ze.ring.material.color.set(lt==="done"?6280077:Ze.c),Ze.ring.material.opacity=lt==="analyzing"?.5+.4*Math.sin(L*14):.55,Ze.beam.visible=lt!=="hidden",Ze.beam.material.opacity=lt==="done"?.1:.22}),kn&&ht.cardI>=0&&L-ht.cardT>7&&(t.card()===ht.cardI&&e.card(null),ht.cardI=-1);let Kt=a.clientWidth,Wt=a.clientHeight,Pt=yi();{let K=i.labels.children;it.forEach((ie,We)=>{let Ze=K[We];if(!Ze)return;let lt=er.set(ie.x,ie.bonus?5.2:4.7,ie.z).project(c),ut=bn&&lt.z<1&&Math.abs(lt.x)<1.15&&Math.abs(lt.y)<1.15&&!(ie.bonus&&le[We]==="hidden");if(Ze.style.display=ut?"flex":"none",!ut)return;Ze.style.transform=`translate(${(lt.x+1)/2*Kt}px, ${(1-lt.y)/2*Wt}px) translate(-50%, -100%)`;let et=Z[We]?Math.min(1,re[We]/Z[We]/Wu):0,Xt=Ze.querySelector(".lab-bar i");Xt&&(Xt.style.width=`${Math.round(et*100)}%`);let gn=Math.hypot(Pt.x-ie.x,Pt.z-ie.z),Mn=Ze.querySelector(".lab-dist");Mn&&(Mn.textContent=`${Math.round(gn)} m`),Ze.dataset.state=le[We],Ze.classList.toggle("far",gn>13)})}let jt=L-Pl<30;Jr.visible=jt,!jt&&Ci.size&&(Ci=new Set,Jr.clear()),zt.forEach((K,ie)=>{let We=Oa[ie];if(!We)return;let Ze=Jt[ie]?St[ie]/Jt[ie]:0,lt=Ci.has(ie);if(!(bn&&(lt||k.labels&&Ze>=.3&&le[K.g]!=="hidden"))){We.style.display="none";return}let et=er.set((K.min[0]+K.max[0])/2,K.max[1]+.18,(K.min[2]+K.max[2])/2).project(c);if(et.z>=1||Math.abs(et.x)>1.1||Math.abs(et.y)>1.1||Math.hypot(Pt.x-(K.min[0]+K.max[0])/2,Pt.z-(K.min[2]+K.max[2])/2)>16){We.style.display="none";return}We.style.display="block",We.style.transform=`translate(${(et.x+1)/2*Kt}px, ${(1-et.y)/2*Wt}px) translate(-50%, -100%)`,We.classList.toggle("hit",lt);let Xt=lt?`\u201E${Qu}\u201C \u2192 ${rt(K.name,r())}`:`${rt(K.name,r())} \xB7 ${$t(r(),"Ziel","target")}`;We.textContent!==Xt&&(We.textContent=Xt)});for(let K of As){if(!K.b){K.el.style.display="none";continue}let ie=er.copy(K.a).add(K.b).multiplyScalar(.5).project(c);K.el.style.display=ie.z<1?"block":"none",K.el.style.transform=`translate(${(ie.x+1)/2*Kt}px, ${(1-ie.y)/2*Wt}px) translate(-50%, -130%)`}for(let K of vi){let ie=er.set(K.x,1.95,K.z).project(c),We=bn&&ie.z<1&&Math.abs(ie.x)<1.1&&Math.abs(ie.y)<1.1;K.el.style.display=We?"block":"none",We&&(K.el.style.transform=`translate(${(ie.x+1)/2*Kt}px, ${(1-ie.y)/2*Wt}px) translate(-50%, -100%)`),K.g.children[0].scale.setScalar(1+.15*Math.sin(L*4))}if(k.nbv&&Xa&&L-sd>2.5&&!Xe.some(K=>K.state!=="idle")&&ad(),L-pd>.2){pd=L;let K=Fl(),ie=-1,We=9;it.forEach((ut,et)=>{let Xt=Math.hypot(Pt.x-ut.x,Pt.z-ut.z);le[et]==="done"&&Xt<We&&(We=Xt,ie=et)});let Ze={};for(let ut of zt){if(!Jt[ut.id]||St[ut.id]/Jt[ut.id]<.5)continue;let et=Ze[ut.mat]??={vol:0,mass:0,n:0};et.vol+=ut.vol,et.mass+=ut.mass,et.n++}let lt=0;for(let ut=0;ut<xt*xt;ut++)nn[ut]&&Dn[ut]/nn[ut]>=.3&&lt++;e.hud({cov:Math.min(1,Ct),found:it.filter((ut,et)=>!ut.bonus&&le[et]!=="hidden").length,done:it.filter((ut,et)=>!ut.bonus&&le[et]==="done").length,bonus:le[Tl]!=="hidden",near:K,nearProg:K>=0&&Z[K]?Math.min(1,re[K]/Z[K]/Wu):0,nearState:K>=0?le[K]:"hidden",time:bn&&!Nl?L-qt:-1,tlsN:Xe.length,tlsMax:De(),tlsRun:Xe.some(ut=>ut.state!=="idle"),rec:ot,meshQ:de,bat:{...we},locked:{...Ke},charging:fe,drift:_e==="handheld"?Bt.length():In>0?-1:0,nearAna:ie,waamNear:Math.hypot(Pt.x-it[Xr].x,Pt.z-it[Xr].z)<6&&le[Xr]!=="hidden",mats:Object.entries(Ze).map(([ut,et])=>({k:ut,...et})),floorM2:lt})}let ri=i.map();if(ri&&L-md>.1){md=L;let K=ri.getContext("2d");K.drawImage(Ai,0,0);let ie=wl/(ft.x1-ft.x0+4),[We,Ze]=Ti(ii[0],ii[1]);K.fillStyle="#5fd38d",K.fillRect(We-3,Ze-3,6,6),Xe.forEach(et=>{let[Xt,gn]=Ti(et.x,et.z),Mn=`#${et.c.toString(16).padStart(6,"0")}`;K.strokeStyle=Mn+"55",K.lineWidth=1,K.beginPath(),K.arc(Xt,gn,15*pe()*ie,0,Math.PI*2),K.stroke(),K.fillStyle=Mn,K.fillRect(Xt-2.5,gn-2.5,5,5)}),vi.forEach((et,Xt)=>{let[gn,Mn]=Ti(et.x,et.z);K.fillStyle="#ff9a3d",K.beginPath(),K.arc(gn,Mn,4.5,0,Math.PI*2),K.fill(),K.fillStyle="#1a1406",K.font="bold 7px monospace",K.textAlign="center",K.fillText(String(Xt+1),gn,Mn+2.5)}),it.forEach((et,Xt)=>{let[gn,Mn]=Ti(et.x,et.z),Ts=le[Xt];if(!(et.bonus&&Ts==="hidden")){if(Ts==="hidden"){let es=(L*.6+Xt*.37)%1;K.strokeStyle=`rgba(255,255,255,${.5*(1-es)})`,K.lineWidth=1,K.beginPath(),K.arc(gn,Mn,2+es*8,0,Math.PI*2),K.stroke(),K.fillStyle="rgba(255,255,255,0.6)",K.fillRect(gn-1,Mn-1,2,2);return}K.strokeStyle=Ts==="done"?"#5fd38d":et.c,K.lineWidth=2,K.beginPath(),K.arc(gn,Mn,et.r*ie,0,Math.PI*2),K.stroke(),K.fillStyle="#e8eef5",K.font="bold 9px monospace",K.textAlign="center",K.fillText(et.kind==="uc"?String(et.uc):et.kind==="docs"?"D":et.kind==="talks"?"T":et.kind==="bonus"?"\u2605":"P",gn,Mn+3)}});let[lt,ut]=Ti(Pt.x,Pt.z);K.save(),K.translate(lt,ut),K.rotate(-On),K.fillStyle="#ffffff",K.beginPath(),K.moveTo(0,-7),K.lineTo(5,5),K.lineTo(-5,5),K.closePath(),K.fill(),K.restore()}o.render(l,c)},em=(w,L)=>{let H=x.position,ee=(fe,Me,Fe,Ne=11)=>{let gt=fe-H.x,ot=Me-H.z,de=Math.hypot(gt,ot);return de>.05?w.set(gt/de*Ne*Math.min(1,de/1.5),0,ot/de*Ne*Math.min(1,de/1.5)):w.set(0,0,0),{dd:de,au:H.y<Fe-.15?1:H.y>Fe+.15?-1:0}};if(!t.flags.nobattery&&ht.phase!=="charge"&&we.drone<15&&(ht.phase="charge",e.toast($t(r(),"Autopilot: Akku niedrig \u2013 fliege zur Ladestation","Autopilot: battery low \u2013 returning to the charging pad"),"#ffb547")),ht.phase==="charge"){let fe=ee(ii[0],ii[1],2.5);return fe.dd<.35?we.drone>=95?(ht.phase="go",1):-1:fe.au}let ae=it.map((fe,Me)=>Me).filter(fe=>!it[fe].bonus&&le[fe]!=="done"&&le[fe]!=="analyzing");if(!ae.length)return ht.phase="tour",ht.ang+=.0035,ee(-.5+Math.cos(ht.ang)*9,1+Math.sin(ht.ang)*7,6).au;if(ht.target<0||!ae.includes(ht.target)){let fe=1e9;for(let Me of ae){let Fe=Math.hypot(it[Me].x-H.x,it[Me].z-H.z);Fe<fe&&(fe=Fe,ht.target=Me)}ht.phase="go",ht.alt=Math.min(6.2,Math.max(3.4,Mt[ht.target]+1.4)),ht.lastProg=0,ht.lastProgT=L}let me=it[ht.target],Be=Z[ht.target]?re[ht.target]/Z[ht.target]:0;if(Be>ht.lastProg+.02?(ht.lastProg=Be,ht.lastProgT=L):L-ht.lastProgT>6&&(ht.alt=Math.min(6.3,ht.alt+.6),ht.lastProgT=L),ht.phase==="go"){let fe=ee(me.x,me.z,ht.alt);return fe.dd<.8&&(ht.phase="scan",ht.t0=L),fe.au}ht.ang+=.025;let Ve=Math.min(me.r*.65,(L-ht.t0)*.35);return ee(me.x+Math.cos(ht.ang)*Ve,me.z+Math.sin(ht.ang)*Ve,ht.alt,7).au};T().catch(w=>e.toast(String(w),"#ff5a5f")),xd();let _d={start:()=>{bn=!0,Ll=g.elapsedTime,qt=g.elapsedTime,e.toast(_e==="tls"?$t(r(),"Scanner aufstellen (P), dann Leertaste","Set up scanners (P), then press space"):_e==="handheld"?$t(r(),"Leertaste halten zum Scannen","Hold space to scan"):$t(r(),"Scanner aktiv \u2013 finde die Signale","Scanner online \u2013 find the signals"))},reopen:w=>le[w]==="done"&&e.card(w),theme:G,tech:Ol,skill:Bl,search:Yp,place:od,tlsScan:ld,collect:cd,press:(w,L)=>js[w]=L,stick:(w,L)=>{Va.f=w,Va.r=L,(w||L)&&kn&&!t.flags.auto&&Ga(!1)},openNear:()=>{let w=Fl();w>=0&&le[w]==="done"&&e.card(w)},labels:w=>(k.labels=w??!k.labels,V()),feature:w=>Ks(w),mesh:(w,L)=>{k.meshMode=w,L&&(k.meshVS=L),qs(),V()},measureClear:ed,cut:(w,L,H)=>{k.cut={mode:w,pos:L,flip:H},zl()},plan:(w,L)=>Zr.compose(w,{lang:L,cov:U?xe/U:0,labels:it.filter((H,ee)=>le[ee]!=="hidden").map(H=>({x:H.x,z:H.z+H.r+.4,t:`${kp(H)} \xB7 ${rt(H.t,L)}`,c:H.c})),scanners:Xe.map(H=>({x:H.x,z:H.z}))}),projections:()=>{let w=yi(),L=[w.x,_e==="drone"?x.position.y:Fp,w.z];return{pano:Gu(ji,L,1200),cube:Ip(ji,L,240),persp:Lp(ji,1e3,620),ortho:Np(ji,1e3)}},ask:w=>_p(w,{lang:r(),clusters:zt,cluFrac:L=>Jt[L]?St[L]/Jt[L]:0,stState:le,cov:U?xe/U:0,agent:{x:yi().x,z:yi().z},floorM2:(()=>{let L=0;for(let H=0;H<xt*xt;H++)nn[H]&&Dn[H]/nn[H]>=.3&&L++;return L})()}),featRange:()=>Ys,goto:(w,L,H=3)=>{_e==="drone"?x.position.set(w,H,L):wn.set(w,0,L)},eggState:()=>({k:X.mat?.uniforms.uK.value,sw:X.mat?.uniforms.uSweep.value,t0:X.t0,n:X.pts?.geometry.getAttribute("position").count}),setBat:(w,L)=>we[w]=L,pointCount:()=>ke,scannerPos:()=>Xe.map(w=>[w.x,w.z,w.state]),sugs:()=>vi.map(w=>({x:w.x,z:w.z,pct:Math.round(100*w.gain/U)})),look:(w,L)=>(On=w,_e==="drone"?Zs=L:Js=L),dispose:()=>{n=!0,cancelAnimationFrame(s),a.removeEventListener("pointerdown",td),window.removeEventListener("pointermove",nd),window.removeEventListener("pointerup",Ha),window.removeEventListener("pointercancel",Ha),a.removeEventListener("wheel",id),window.removeEventListener("keydown",hd),window.removeEventListener("keyup",ud),window.removeEventListener("blur",dd),window.removeEventListener("resize",fd);for(let w of sn)w.m.dispose();o.dispose(),a.removeChild(o.domElement)}};return _d};var Rl=ai(Yl());var Hp=ai(ts()),Bp=({url:i})=>{let e=(0,Rl.useRef)(null);return(0,Rl.useEffect)(()=>{let t=e.current,n=new Nr({antialias:!0});n.setPixelRatio(Math.min(2,devicePixelRatio)),n.setSize(t.clientWidth,t.clientHeight),t.appendChild(n.domElement);let s=new Dr,r=new ln(75,t.clientWidth/t.clientHeight,.1,10),a=new Or().load(i);a.colorSpace=hn;let o=new Sn(5,64,32);o.scale(-1,1,1),s.add(new Ae(o,new Ft({map:a})));let l=0,c=0,h=!1,u=0,d=0,f=0,g=_=>(h=!0,u=_.clientX,d=_.clientY),x=_=>{h&&(l-=(_.clientX-u)*.15,c=Math.max(-85,Math.min(85,c+(_.clientY-d)*.15)),u=_.clientX,d=_.clientY)},m=()=>h=!1,p=_=>{r.fov=Math.max(30,Math.min(100,r.fov+Math.sign(_.deltaY)*4)),r.updateProjectionMatrix(),_.preventDefault()};t.addEventListener("pointerdown",g),window.addEventListener("pointermove",x),window.addEventListener("pointerup",m),t.addEventListener("wheel",p,{passive:!1});let b=()=>{f=requestAnimationFrame(b),h||(l+=.03);let _=Ca.degToRad(90-c),y=Ca.degToRad(l);r.lookAt(Math.sin(_)*Math.cos(y),Math.cos(_),Math.sin(_)*Math.sin(y)),n.render(s,r)};return b(),()=>{cancelAnimationFrame(f),t.removeEventListener("pointerdown",g),window.removeEventListener("pointermove",x),window.removeEventListener("pointerup",m),t.removeEventListener("wheel",p),n.dispose(),a.dispose(),t.removeChild(n.domElement)}},[i]),(0,Hp.jsx)("div",{ref:e,className:"lab-panoview"})};var Ss=ai(Yl()),$r=ai(ts()),Vp=()=>{let i="(pointer: coarse)",[e,t]=(0,Ss.useState)(()=>typeof matchMedia<"u"&&(matchMedia(i).matches||location.hash.includes("touch")));return(0,Ss.useEffect)(()=>{let n=matchMedia(i),s=()=>t(n.matches||location.hash.includes("touch"));return n.addEventListener("change",s),()=>n.removeEventListener("change",s)},[]),e},Gp=({onMove:i,label:e})=>{let t=(0,Ss.useRef)(null),[n,s]=(0,Ss.useState)({x:0,y:0,on:!1}),r=(0,Ss.useRef)(null),a=48,o=c=>{let h=t.current.getBoundingClientRect(),u=c.clientX-(h.left+h.width/2),d=c.clientY-(h.top+h.height/2),f=Math.hypot(u,d);f>a&&(u*=a/f,d*=a/f),s({x:u,y:d,on:!0});let g=x=>Math.abs(x)<.12?0:x;i(g(-d/a),g(u/a))},l=()=>{r.current=null,s({x:0,y:0,on:!1}),i(0,0)};return(0,$r.jsxs)("div",{ref:t,className:`lab-ui lab-joy${n.on?" on":""}`,onPointerDown:c=>{r.current=c.pointerId,c.target.setPointerCapture(c.pointerId),o(c)},onPointerMove:c=>r.current===c.pointerId&&o(c),onPointerUp:l,onPointerCancel:l,children:[(0,$r.jsx)("i",{style:{transform:`translate(${n.x}px, ${n.y}px)`}}),e&&!n.on&&(0,$r.jsx)("span",{children:e})]})},Cl=({k:i,press:e,children:t,className:n})=>(0,$r.jsx)("button",{className:`lab-hold ${n??""}`,onPointerDown:s=>{s.target.setPointerCapture(s.pointerId),e(i,!0)},onPointerUp:()=>e(i,!1),onPointerCancel:()=>e(i,!1),onContextMenu:s=>s.preventDefault(),children:t});var E=ai(ts()),J=(i,e,t)=>i==="en"?t:e,Wp=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`,Xp=i=>i.kind==="uc"?`UC${i.uc}`:i.kind==="docs"?"DOC":i.kind==="talks"?"TALK":i.kind==="bonus"?"\u2605":"ME",Yy=i=>`rgb(${i.map(e=>Math.round(e*255)).join(",")})`,ju=(i,e,t=2)=>i.toLocaleString(e==="en"?"en-GB":"de-DE",{maximumFractionDigits:t,minimumFractionDigits:t}),$y={cov:0,found:0,done:0,bonus:!1,near:-1,nearProg:0,nearState:"hidden",time:0,tlsN:0,tlsMax:3,tlsRun:!1,rec:!1,meshQ:0,bat:{drone:100,handheld:100,tls:100},locked:{drone:!1,handheld:!1,tls:!1},charging:!1,drift:0,nearAna:-1,waamNear:!1,mats:[],floorM2:0},qy=({lang:i})=>{let e=(0,dt.useRef)(null),t=(0,dt.useRef)(null),n=(0,dt.useRef)(null),s=(0,dt.useRef)(null),r=(0,dt.useRef)(null),a=(0,dt.useRef)(null),o=(0,dt.useRef)(null),l=(0,dt.useRef)({auto:location.hash.includes("auto"),allskills:location.hash.includes("allskills"),nobattery:location.hash.includes("nobattery"),lite:!location.hash.includes("full")&&(location.hash.includes("lite")||location.hash.includes("touch")||matchMedia("(pointer: coarse)").matches)}),[c,h]=(0,dt.useState)(0),[u,d]=(0,dt.useState)(!1),[f,g]=(0,dt.useState)(()=>location.hash.includes("light")?"light":"dark"),[x,m]=(0,dt.useState)(()=>location.hash.includes("handheld")?"handheld":location.hash.includes("tls")?"tls":"drone"),[p,b]=(0,dt.useState)($y),[_,y]=(0,dt.useState)(null),[I,A]=(0,dt.useState)([]),[R,N]=(0,dt.useState)(null),[D,v]=(0,dt.useState)({unlocked:[],color:"normal",mesh:!1,meshMode:"all",meshVS:.2,xray:!1,measure:!1,auto:!1,labels:!1,feat:6,featState:"idle",nbv:!1,cut:{mode:0,pos:1.2,flip:!1}}),[S,B]=(0,dt.useState)(null),[W,Y]=(0,dt.useState)(!1),[te,q]=(0,dt.useState)(""),[se,X]=(0,dt.useState)(!1),[be,ge]=(0,dt.useState)(""),[Ee,_t]=(0,dt.useState)([]),[yt,ne]=(0,dt.useState)([]),[he,Pe]=(0,dt.useState)(null),[Ie,st]=(0,dt.useState)(null),Oe=Vp(),[pt,Et]=(0,dt.useState)(!1),[Xe,F]=(0,dt.useState)(!1),[un,mt]=(0,dt.useState)(()=>matchMedia("(orientation: portrait)").matches),[Tt,He]=(0,dt.useState)(!1),ke=(0,dt.useRef)(!1);(0,dt.useEffect)(()=>{let O=matchMedia("(orientation: portrait)"),oe=()=>mt(O.matches);return O.addEventListener("change",oe),()=>{O.removeEventListener("change",oe),screen.orientation.unlock?.(),ke.current&&document.fullscreenElement&&document.exitFullscreen().catch(()=>{})}},[]);let at=()=>{if(!Oe)return;let O=document.documentElement;(!document.fullscreenElement&&O.requestFullscreen?O.requestFullscreen({navigationUI:"hide"}):Promise.resolve()).then(()=>(ke.current=!!document.fullscreenElement,screen.orientation.lock?.("landscape"))).catch(()=>{})},C=()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.().catch(()=>{}),[M,z]=(0,dt.useState)(null),Q=(0,dt.useRef)(null);Q.current=_;let ce=(0,dt.useRef)(i);ce.current=i,(0,dt.useEffect)(()=>{let O=0,oe=[],Je=!1,U=()=>{let Z=oe.shift();Je=!!Z,B(Z??null),Z&&setTimeout(U,4300)},xe=zp({host:e.current,labels:t.current,clu:n.current,meas:s.current,map:()=>r.current},{loaded:h,hud:b,toast:(Z,re="#5ce1e6")=>{let le=++O;A(Ce=>[...Ce.slice(-3),{id:le,txt:Z,c:re}]),setTimeout(()=>A(Ce=>Ce.filter(Mt=>Mt.id!==le)),4200)},card:y,banner:Z=>{oe.push(Z),Je||U()},skills:v,finish:N,tech:m,panos:ne,search:()=>Y(!0),ask:()=>X(!0)},{lang:()=>ce.current,tech:x,card:()=>Q.current,flags:l.current});return o.current=xe,l.current.allskills&&(window.__lab=xe),l.current.auto&&d(!0),()=>xe.dispose()},[]),(0,dt.useEffect)(()=>o.current?.theme(f),[f]),(0,dt.useEffect)(()=>{let O=oe=>{let Je=oe.target?.tagName;if(Je==="INPUT"||Je==="SELECT")return;let U=oe.key.toLowerCase();U==="t"&&g(xe=>xe==="dark"?"light":"dark"),u&&(U==="k"&&Pe(xe=>xe==="plan"?null:"plan"),U==="j"&&Pe(xe=>xe==="proj"?null:"proj"),U==="u"&&Pe(xe=>xe==="pano"?null:"pano"),U==="escape"&&(Pe(null),st(null),Y(!1),X(!1)))};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[u]),(0,dt.useEffect)(()=>{if(he!=="plan")return;let O=()=>a.current&&o.current?.plan(a.current,ce.current);O();let oe=setInterval(O,700);return()=>clearInterval(oe)},[he]);let j=()=>{let O=o.current.projections();z(Object.fromEntries(Object.entries(O).map(([oe,Je])=>[oe,Je.toDataURL("image/png")])))};(0,dt.useEffect)(()=>{he==="proj"&&j()},[he]);let Se=(O,oe)=>o.current?.press(O,oe),ve=O=>{if(!u)return m(O);o.current?.tech(O)},Te=_!==null?it[_]:null,je=p.near>=0?it[p.near]:null,ue=x!=="drone",Le=o.current?.featRange()??[],Qe=()=>{let O=a.current;if(!O)return;let oe=document.createElement("a");oe.href=O.toDataURL("image/png"),oe.download=`x-avis_grundriss_${new Date().toISOString().slice(0,10)}.png`,oe.click()},qe=(()=>{if(D.color==="seg")return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("b",{children:J(i,"Segmentierung \xB7 ganze Szene","Segmentation \xB7 whole scene")}),(0,E.jsxs)("span",{children:[(0,E.jsx)("i",{style:{background:"rgb(150,72,76)"}}),J(i,"Umgebung","Environment")]}),(0,E.jsxs)("span",{children:[(0,E.jsx)("i",{style:{background:"rgb(112,209,140)"}}),J(i,"Boden","Floor")]}),(0,E.jsxs)("span",{children:[(0,E.jsx)("i",{style:{background:"rgb(90,180,255)"}}),J(i,"Ziel (alle wichtigen Objekte)","Target (all relevant objects)")]}),(0,E.jsx)("em",{children:J(i,"Hallenklassen: echtes RandLA-Net-Ergebnis (A1)","Hall classes: real RandLA-Net result (A1)")})]});if(D.color==="heat"){let oe=uu[D.feat],Je=Le[D.feat];return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("b",{children:D.feat<16?`${J(i,"Merkmal","Feature")} ${D.feat+1}/16 \xB7 ${oe.k}`:J(i,"Ebenheit Hallenboden","Hall floor flatness")}),(0,E.jsx)("span",{className:"lab-lg-d",children:rt(oe.t,i)}),(0,E.jsx)("div",{className:`lab-ramp ${D.feat===16?"flat":"viridis"}`}),(0,E.jsx)("span",{className:"lab-ramp-l",children:D.feat===16?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("em",{children:"\u22124 cm"}),(0,E.jsx)("em",{children:"0"}),(0,E.jsx)("em",{children:"+4 cm"})]}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("em",{children:Je?+Je[0].toPrecision(3):0}),(0,E.jsx)("em",{children:Je?+Je[1].toPrecision(3):1})]})}),D.featState==="loading"&&(0,E.jsx)("em",{children:J(i,"Lade Merkmale (12,7 MB) \u2026","Loading features (12.7 MB) \u2026")}),(0,E.jsx)("em",{children:J(i,"Vorab f\xFCr alle Punkte berechnet (k = 30), Darstellung 1.\u201399. Perzentil","Precomputed for all points (k = 30), shown 1st\u201399th percentile")})]})}if(D.color==="therm")return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("b",{children:J(i,"Thermal (illustrativ)","Thermal (illustrative)")}),(0,E.jsx)("div",{className:"lab-ramp therm"}),(0,E.jsxs)("span",{className:"lab-ramp-l",children:[(0,E.jsx)("em",{children:J(i,"kalt","cold")}),(0,E.jsx)("em",{children:J(i,"hei\xDF","hot")})]}),(0,E.jsx)("em",{children:J(i,"frisch gescannt und frische WAAM-Schichten = hei\xDF","fresh scans and fresh WAAM layers = hot")})]});if(D.color==="mat")return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("b",{children:J(i,"Materialkataster","Material register")}),Object.entries(Wn).map(([oe,Je])=>(0,E.jsxs)("span",{children:[(0,E.jsx)("i",{style:{background:Je.c}}),i==="en"?Je.en:Je.de]},oe))]});let O=p.nearAna>=0?it[p.nearAna]:null;return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("b",{children:J(i,"Punktwolke","Point cloud")}),(0,E.jsx)("div",{className:`lab-ramp ${f==="light"?"intl":"int"}`}),(0,E.jsxs)("span",{className:"lab-ramp-l",children:[(0,E.jsx)("em",{children:J(i,"Intensit\xE4t niedrig","low intensity")}),(0,E.jsx)("em",{children:J(i,"hoch","high")})]}),(0,E.jsxs)("span",{children:[(0,E.jsx)("i",{style:{background:f==="light"?"#0a8cd9":"#8cf2ff"}}),J(i,"frisch gescannt","freshly scanned")]}),(0,E.jsx)("span",{className:"lab-lg-d",children:J(i,"Ungescanntes ist unsichtbar","Unscanned is invisible")}),O&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)("b",{className:"lab-lg-sub",children:["X-AVIS \xB7 ",Xp(O)," ",rt(O.t,i)]}),O.parts.map((oe,Je)=>(0,E.jsxs)("span",{children:[(0,E.jsx)("i",{style:{background:Yy(oe.c)}}),rt(oe.name,i)]},Je))]}),p.waamNear&&(0,E.jsxs)("span",{children:[(0,E.jsx)("i",{style:{background:"#ff8c26"}}),J(i,"frische WAAM-Schicht","fresh WAAM layer")]}),D.xray&&(0,E.jsxs)("span",{children:[(0,E.jsx)("i",{style:{background:"#2a6f9a"}}),J(i,"Hologramm (R\xF6ntgenblick)","hologram (x-ray)")]})]})})(),ze=O=>p.locked[O]?J(i,"l\xE4dt","charging"):`${Math.round(p.bat[O])} %`;return(0,E.jsxs)("div",{className:`lab lab-${f} lab-t-${x}${Oe?" lab-touch":""}`,children:[(0,E.jsx)("div",{ref:e,className:"lab-canvas"}),u&&ue&&(0,E.jsx)("div",{className:`lab-cross${p.rec?" rec":""}${D.measure?" meas":""}`}),(0,E.jsx)("div",{ref:t,className:"lab-labels",children:it.map((O,oe)=>(0,E.jsxs)("div",{className:"lab-label","data-state":"hidden",style:{borderColor:O.c},onClick:()=>o.current?.reopen(oe),children:[(0,E.jsxs)("b",{style:{background:O.c},children:[(0,E.jsx)("span",{className:"lab-known",children:Xp(O)}),(0,E.jsx)("span",{className:"lab-unk",children:"?"})]}),(0,E.jsx)("span",{className:"lab-known",children:rt(O.t,i)}),(0,E.jsx)("span",{className:"lab-unk",children:J(i,"Unbekanntes Signal","Unknown signal")}),(0,E.jsx)("span",{className:"lab-dist"}),(0,E.jsx)("span",{className:"lab-bar",children:(0,E.jsx)("i",{})})]},O.id))}),(0,E.jsx)("div",{ref:n,className:"lab-clus"}),(0,E.jsx)("div",{ref:s,className:"lab-measl"}),(0,E.jsxs)("div",{className:"lab-ui lab-top",children:[(0,E.jsxs)("a",{className:"lab-brand",href:"#/",children:[(0,E.jsx)(vd,{size:34,frame:0}),(0,E.jsxs)("div",{children:[(0,E.jsx)("div",{className:"lab-k",children:"Spatial AI Lab"}),(0,E.jsxs)("div",{className:"lab-p",children:["powered by ",(0,E.jsx)(bd,{height:15})]})]})]}),u&&(0,E.jsxs)("div",{className:"lab-stats",children:[(0,E.jsxs)("div",{children:[(0,E.jsx)("small",{children:J(i,"Halle erfasst","Hall captured")}),(0,E.jsxs)("b",{children:[Math.round(p.cov*100)," %"]})]}),(0,E.jsxs)("div",{children:[(0,E.jsx)("small",{children:J(i,"Entdeckt","Discovered")}),(0,E.jsxs)("b",{children:[p.found," / ",Ia,p.bonus?" \u2605":""]})]}),(0,E.jsxs)("div",{children:[(0,E.jsx)("small",{children:J(i,"Analysiert","Analysed")}),(0,E.jsxs)("b",{children:[p.done," / ",Ia]})]}),(0,E.jsxs)("div",{children:[(0,E.jsx)("small",{children:"Skills"}),(0,E.jsxs)("b",{children:[D.unlocked.length," / ",Zi.length]})]}),(0,E.jsxs)("div",{children:[(0,E.jsx)("small",{children:J(i,"Zeit","Time")}),(0,E.jsx)("b",{children:Wp(R??Math.max(0,p.time))})]})]}),(0,E.jsxs)("div",{className:"lab-tr",children:[(0,E.jsx)("button",{className:"lab-exit",onClick:()=>g(O=>O==="dark"?"light":"dark"),title:"T",children:f==="dark"?"\u25D0 "+J(i,"Wei\xDFe Leere","White void"):"\u25D1 "+J(i,"Dunkle Leere","Dark void")}),(0,E.jsxs)("a",{className:"lab-exit",href:"#/",children:["\u2715 ",J(i,"Lab verlassen","Exit lab")]})]})]}),u&&(0,E.jsxs)("div",{className:"lab-ui lab-techs",children:[hu.map(O=>(0,E.jsxs)("button",{className:`${x===O.id?"on":""}${p.locked[O.id]?" locked":""}`,onClick:()=>ve(O.id),title:rt(O.d,i),children:[(0,E.jsx)("i",{children:O.icon}),(0,E.jsx)("span",{children:rt(O.t,i).split(" \xB7 ")[O.id==="drone"?0:1]}),(0,E.jsx)("span",{className:"lab-batt","data-low":p.bat[O.id]<25?"1":"0",children:(0,E.jsx)("em",{style:{width:`${Math.round(p.bat[O.id])}%`}})}),(0,E.jsx)("small",{children:ze(O.id)}),(0,E.jsx)("kbd",{children:O.key})]},O.id)),p.charging&&(0,E.jsxs)("span",{className:"lab-charging",children:["\u26A1 ",J(i,"Ladestation","charging pad")]})]}),(0,E.jsx)("div",{className:"lab-toasts",children:I.map(O=>(0,E.jsx)("div",{className:"lab-toast",style:{borderColor:O.c},children:O.txt},O.id))}),S&&(0,E.jsxs)("div",{className:"lab-unlock",children:[(0,E.jsx)("div",{className:"lab-unlock-i",children:S.icon}),(0,E.jsx)("small",{children:S.id==="icp"?J(i,"Bonus-Skill freigeschaltet","Bonus skill unlocked"):J(i,"Skill freigeschaltet","Skill unlocked")}),(0,E.jsx)("b",{children:rt(S.t,i)}),(0,E.jsx)("span",{children:rt(S.d,i)}),(0,E.jsx)("em",{children:S.key?J(i,`Taste ${S.key} oder Skill-Leiste`,`Press ${S.key} or use the skill bar`):J(i,"passiv \xB7 sofort aktiv","passive \xB7 active right away")})]},S.id),u&&_===null&&(je||x==="tls"||p.rec||p.drift>.05)&&(0,E.jsxs)("div",{className:"lab-ui lab-prompt",onClick:()=>o.current?.openNear(),style:{borderColor:je?p.nearState==="done"?"#5fd38d":je.c:"#5ce1e6"},children:[je&&p.nearState==="done"?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("b",{children:rt(je.t,i)})," \xB7 ",Oe?J(i,"analysiert \u2013 hier antippen f\xFCr Infos","analysed \u2013 tap here for info"):J(i,"analysiert \u2013 Enter oder Label klicken","analysed \u2013 press Enter or click the label")]}):je&&p.nearState==="analyzing"?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("b",{children:"X-AVIS"})," ",J(i,"segmentiert die Punktwolke \u2026","is segmenting the point cloud \u2026")]}):x==="tls"?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("b",{children:"TLS"})," \xB7 ",p.tlsRun?J(i,"Scan l\xE4uft \u2013 alle Scanner gleichzeitig \u2026","scanning \u2013 all scanners at once \u2026"):Oe?J(i,`${p.tlsN}/${p.tlsMax} Scanner \xB7 je 7 % Akku pro Scan`,`${p.tlsN}/${p.tlsMax} scanners \xB7 7 % battery per scan each`):J(i,`${p.tlsN}/${p.tlsMax} Scanner \xB7 P aufstellen \xB7 Leertaste scannen (je 7 % Akku) \xB7 C einsammeln`,`${p.tlsN}/${p.tlsMax} scanners \xB7 P set up \xB7 space scan (7 % battery each) \xB7 C collect`),je&&(0,E.jsx)("span",{className:"lab-pbar",children:(0,E.jsx)("i",{style:{width:`${Math.round(p.nearProg*100)}%`,background:je.c}})})]}):je?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("b",{children:p.nearState==="hidden"?J(i,"Unbekanntes Signal","Unknown signal"):rt(je.t,i)})," \xB7 ",x==="handheld"?Oe?J(i,"\u25CF halten und Objekt abscannen","hold \u25CF and scan the object"):J(i,"Leertaste halten und Objekt abscannen","hold space and scan the object"):J(i,"Bereich abfliegen und scannen","fly over the area to scan it"),(0,E.jsx)("span",{className:"lab-pbar",children:(0,E.jsx)("i",{style:{width:`${Math.round(p.nearProg*100)}%`,background:je.c}})})]}):p.rec?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("b",{className:"lab-recdot",children:"\u25CF REC"})," ",J(i,"SLAM-Scan l\xE4uft","SLAM scan running")]}):null,p.drift>.05&&(0,E.jsxs)("span",{className:"lab-drift",children:[J(i,"Drift","drift")," ",Math.round(p.drift*100)," cm",D.unlocked.includes("icp")?" \xB7 R = ICP":""]})]}),u&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)("div",{className:"lab-ui lab-help",children:[x==="drone"?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("b",{children:"WASD"})," ",J(i,"fliegen","fly")," \xB7 ",(0,E.jsx)("b",{children:J(i,"Leertaste / Shift","Space / Shift")})," ",J(i,"steigen / sinken","up / down")," \xB7 ",(0,E.jsx)("b",{children:"Q / E"})," ",J(i,"drehen","turn")]}):x==="handheld"?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("b",{children:"WASD"})," ",J(i,"gehen","walk")," \xB7 ",(0,E.jsx)("b",{children:"Shift"})," ",J(i,"rennen","run")," \xB7 ",(0,E.jsx)("b",{children:J(i,"Leertaste halten","Hold space")})," ",J(i,"scannen","scan")]}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("b",{children:"WASD"})," ",J(i,"gehen","walk")," \xB7 ",(0,E.jsx)("b",{children:"P"})," ",J(i,"aufstellen","set up")," \xB7 ",(0,E.jsx)("b",{children:J(i,"Leertaste","Space")})," ",J(i,"scannen","scan")," \xB7 ",(0,E.jsx)("b",{children:"C"})," ",J(i,"einsammeln","collect")]})," ","\xB7 ",(0,E.jsx)("b",{children:J(i,"Maus","Mouse")})," ",J(i,"Ansicht","view")," \xB7 ",(0,E.jsx)("b",{children:"1 2 3"})," ",J(i,"Technologie","technology")," \xB7 ",(0,E.jsx)("b",{children:"T"})," ",J(i,"hell/dunkel","light/dark")]}),(0,E.jsx)("canvas",{ref:r,className:"lab-ui lab-map",width:260,height:190}),(!Oe||pt)&&(0,E.jsxs)("div",{className:Oe?"lab-ui lab-drawer":"lab-contents",onClick:O=>Oe&&O.target.closest("button")&&!O.target.closest(".lab-drawer-keep")&&Et(!1),children:[Oe&&(0,E.jsxs)("div",{className:"lab-drawer-h lab-drawer-keep",children:[(0,E.jsx)("b",{children:J(i,"Skills & Werkzeuge","Skills & tools")}),(0,E.jsx)("button",{className:"lab-x",onClick:()=>Et(!1),children:"\u2715"})]}),(0,E.jsx)("div",{className:"lab-ui lab-tools",children:gp.map(O=>{let oe=O.id==="labels"?D.labels:he===O.id;return(0,E.jsxs)("button",{className:oe?"on":"",onClick:()=>O.id==="labels"?o.current?.labels():Pe(Je=>Je===O.id?null:O.id),children:[(0,E.jsx)("i",{children:O.icon}),(0,E.jsxs)("span",{children:[rt(O.t,i),O.id==="pano"&&yt.length?` (${yt.length})`:""]}),(0,E.jsx)("kbd",{children:O.key})]},O.id)})}),(0,E.jsx)("div",{className:"lab-ui lab-skills",children:Zi.map(O=>{let oe=D.unlocked.includes(O.id);if(O.id==="icp"&&!oe)return null;let Je=oe&&(O.passive||O.id==="seg"&&D.color==="seg"||O.id==="heat"&&D.color==="heat"||O.id==="therm"&&D.color==="therm"||O.id==="mat"&&D.color==="mat"||O.id==="mesh"&&D.mesh||O.id==="xray"&&D.xray||O.id==="measure"&&D.measure||O.id==="auto"&&D.auto||O.id==="nbv"&&D.nbv||O.id==="cut"&&D.cut.mode>0);return(0,E.jsxs)("button",{className:`${oe?"got":"lock"}${Je?" on":""}`,disabled:!oe||O.passive,onClick:()=>o.current?.skill(O.id),title:oe?`${rt(O.t,i)} \u2013 ${rt(O.d,i)}`:J(i,"Noch verborgen \u2013 wird durch eine Station freigeschaltet","Still hidden \u2013 unlocked by a station"),children:[(0,E.jsx)("i",{children:oe?O.icon:"?"}),oe&&O.key&&(0,E.jsx)("kbd",{children:O.key}),oe&&(0,E.jsx)("span",{children:rt(O.t,i)})]},O.id)})}),Oe&&(0,E.jsxs)("div",{className:"lab-drawer-row",children:[(0,E.jsx)("button",{onClick:()=>g(O=>O==="dark"?"light":"dark"),children:f==="dark"?"\u25D0 "+J(i,"Wei\xDFe Leere","White void"):"\u25D1 "+J(i,"Dunkle Leere","Dark void")}),(0,E.jsxs)("button",{onClick:C,children:["\u26F6 ",J(i,"Vollbild","Fullscreen")]}),(0,E.jsxs)("a",{href:"#/",children:["\u2715 ",J(i,"Lab verlassen","Exit lab")]})]})]}),(0,E.jsx)("div",{className:`lab-ui lab-legend${Oe&&!Xe?" closed":""}`,onClick:()=>Oe&&F(O=>!O),children:Oe&&!Xe?(0,E.jsxs)("b",{children:["\u25A4 ",J(i,"Legende","Legend")]}):(0,E.jsxs)(E.Fragment,{children:[qe,D.cut.mode>0&&(0,E.jsxs)("span",{children:[(0,E.jsx)("i",{style:{background:"#ff7a3d"}}),J(i,"Schnittkante","cut edge")]}),D.nbv&&(0,E.jsxs)("span",{children:[(0,E.jsx)("i",{style:{background:"#ff9a3d",borderRadius:8}}),J(i,"vorgeschlagener TLS-Standpunkt","suggested TLS position")]})]})}),(0,E.jsxs)("div",{className:"lab-ui lab-optstack",children:[D.cut.mode>0&&(0,E.jsxs)("div",{className:"lab-ui lab-opt lab-cutopt",children:[(0,E.jsx)("small",{children:J(i,"Schnittebene","Section plane")}),(0,E.jsx)("div",{className:"lab-seg3",children:[[1,J(i,"Horizontal","Horizontal")],[2,J(i,"L\xE4ngs (x)","Long. (x)")],[3,J(i,"Quer (z)","Cross (z)")]].map(([O,oe])=>(0,E.jsx)("button",{className:D.cut.mode===O?"on":"",onClick:()=>o.current?.cut(O,O===1?1.2:0,D.cut.flip),children:oe},O))}),(0,E.jsxs)("label",{children:[D.cut.mode===1?J(i,"Schnitth\xF6he","Cut height"):J(i,"Schnittlage","Cut position")," \xB7 ",ju(D.cut.pos,i,2)," m",(0,E.jsx)("input",{type:"range",min:D.cut.mode===1?.1:D.cut.mode===2?-18:-11,max:D.cut.mode===1?6.5:D.cut.mode===2?17:13,step:.05,value:D.cut.pos,onChange:O=>o.current?.cut(D.cut.mode,+O.target.value,D.cut.flip)})]}),(0,E.jsxs)("button",{className:"lab-flip",onClick:()=>o.current?.cut(D.cut.mode,D.cut.pos,!D.cut.flip),children:["\u21C5 ",J(i,"Seite umkehren","Flip side")]})]}),D.color==="heat"&&(0,E.jsxs)("div",{className:"lab-ui lab-opt lab-feats",children:[(0,E.jsx)("small",{children:J(i,"RandLA-Net-Merkmal","RandLA-Net feature")}),(0,E.jsx)("div",{className:"lab-featgrid",children:uu.map((O,oe)=>(0,E.jsx)("button",{className:D.feat===oe?"on":"",onClick:()=>o.current?.feature(oe),title:rt(O.t,i),children:oe<16?`${oe+1} \xB7 ${O.k}`:J(i,"Ebenheit","flatness")},O.k))})]}),D.mesh&&(0,E.jsxs)("div",{className:"lab-ui lab-opt lab-meshopt",children:[(0,E.jsx)("small",{children:"Scan-to-Mesh"}),(0,E.jsx)("div",{className:"lab-seg3",children:[["all",J(i,"Gesamt","Whole")],["obj",J(i,"Objektweise","Per object")],["cad",J(i,"Modell","Model")]].map(([O,oe])=>(0,E.jsx)("button",{className:D.meshMode===O?"on":"",onClick:()=>o.current?.mesh(O),children:oe},O))}),D.meshMode!=="cad"?(0,E.jsxs)("label",{children:[J(i,"Feinheit","Detail")," \xB7 ",J(i,"Voxel","voxel")," ",Math.round(D.meshVS*100)," cm",(0,E.jsx)("input",{type:"range",min:0,max:3,step:1,value:[.3,.2,.15,.1].indexOf(D.meshVS),onChange:O=>o.current?.mesh(D.meshMode,[.3,.2,.15,.1][+O.target.value])}),(0,E.jsxs)("span",{className:"lab-ramp-l",children:[(0,E.jsx)("em",{children:J(i,"grob, geschlossen","coarse, closed")}),(0,E.jsx)("em",{children:J(i,"fein, l\xF6chrig","fine, holey")})]})]}):(0,E.jsx)("em",{children:J(i,"Nachmodellierte K\xF6rper erscheinen, sobald \u2265 50 % eines Objekts gescannt sind; Hallenbl\xF6cke und Bodenplatte ab 30 %.","Reconstructed solids appear once \u2265 50 % of an object is scanned; hall blocks and floor slab from 30 %.")}),p.meshQ>0&&(0,E.jsxs)("em",{className:"lab-mq",children:["\u25B3 ",p.meshQ," ",J(i,"Kacheln in Arbeit","tiles in progress")]})]}),D.color==="mat"&&(0,E.jsxs)("div",{className:"lab-ui lab-opt lab-matpanel",children:[(0,E.jsx)("small",{children:J(i,"Materialkataster \xB7 aus Modell, Objekte \u2265 50 % erfasst","Material register \xB7 from model, objects \u2265 50 % captured")}),(0,E.jsx)("table",{children:(0,E.jsxs)("tbody",{children:[[...p.mats].sort((O,oe)=>oe.mass-O.mass).map(O=>(0,E.jsxs)("tr",{children:[(0,E.jsxs)("td",{children:[(0,E.jsx)("i",{style:{background:Wn[O.k]?.c}}),i==="en"?Wn[O.k]?.en:Wn[O.k]?.de]}),(0,E.jsxs)("td",{children:[ju(O.vol,i,3)," m\xB3"]}),(0,E.jsx)("td",{children:O.mass?`${ju(O.mass/1e3,i,2)} t`:"\u2013"})]},O.k)),(0,E.jsxs)("tr",{children:[(0,E.jsxs)("td",{children:[(0,E.jsx)("i",{style:{background:Wn.concrete.c}}),J(i,"Bodenplatte (Fl\xE4che)","Floor slab (area)")]}),(0,E.jsxs)("td",{colSpan:2,children:[p.floorM2," m\xB2"]})]})]})})]})]}),Oe&&!pt&&_===null&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Gp,{onMove:(O,oe)=>o.current?.stick(O,oe),label:x==="drone"?J(i,"fliegen","fly"):J(i,"gehen","walk")}),(0,E.jsxs)("div",{className:"lab-ui lab-acts",children:[x==="drone"&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(Cl,{k:" ",press:Se,children:["\u2912",(0,E.jsx)("small",{children:J(i,"hoch","up")})]}),(0,E.jsxs)(Cl,{k:"shift",press:Se,children:["\u2913",(0,E.jsx)("small",{children:J(i,"runter","down")})]})]}),x==="handheld"&&(0,E.jsxs)(Cl,{k:"scan",press:Se,className:`big${p.rec?" rec":""}`,children:["\u25CF",(0,E.jsx)("small",{children:J(i,"halten = scannen","hold = scan")})]}),x==="tls"&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)("button",{className:"lab-hold",onClick:()=>o.current?.place(),children:["\u2295",(0,E.jsx)("small",{children:J(i,"aufstellen","set up")})]}),(0,E.jsxs)("button",{className:"lab-hold big",onClick:()=>o.current?.tlsScan(),children:["\u25B6",(0,E.jsx)("small",{children:J(i,"alle scannen","scan all")})]}),(0,E.jsxs)("button",{className:"lab-hold",onClick:()=>o.current?.collect(),children:["\u293A",(0,E.jsx)("small",{children:J(i,"einsammeln","collect")})]})]})]}),(0,E.jsxs)("button",{className:"lab-ui lab-menu",onClick:()=>Et(O=>!O),children:["\u2630 ",(0,E.jsxs)("span",{children:["Skills ",D.unlocked.length,"/",Zi.length]})]})]})]}),W&&(0,E.jsxs)("form",{className:"lab-ui lab-search",onSubmit:O=>{O.preventDefault(),te.trim()&&o.current?.search(te.trim()),Y(!1)},children:[(0,E.jsxs)("small",{children:["Zero-Shot \xB7 ",J(i,"Textprompt \u2192 Bounding Boxes","text prompt \u2192 bounding boxes")]}),(0,E.jsx)("input",{autoFocus:!0,value:te,onChange:O=>q(O.target.value),placeholder:J(i,"z. B. Bagger, Person, Stuhl, Big Bag, Stahl \u2026","e.g. excavator, person, chair, big bag, steel \u2026"),onKeyDown:O=>O.key==="Escape"&&Y(!1)}),(0,E.jsx)("button",{className:"btn",children:J(i,"Suchen","Search")})]}),se&&(0,E.jsxs)("div",{className:"lab-ui lab-ask",children:[(0,E.jsxs)("div",{className:"lab-ask-h",children:[(0,E.jsxs)("small",{children:["\u275D ",J(i,"Frag das Lab \xB7 regelbasiert, offline, mit Quelle","Ask the lab \xB7 rule-based, offline, with source")]}),(0,E.jsx)("button",{className:"lab-x",onClick:()=>X(!1),children:"\u2715"})]}),(0,E.jsxs)("div",{className:"lab-ask-log",children:[Ee.length===0&&(0,E.jsx)("p",{className:"lab-lg-d",children:J(i,"Beispiele: \u201EWie viele Personen?\u201C \xB7 \u201EWo ist der Bagger?\u201C \xB7 \u201EWelche Abweichungen?\u201C \xB7 \u201EWie viel Stahl?\u201C",'Examples: "How many people?" \xB7 "Where is the excavator?" \xB7 "Which deviations?" \xB7 "How much steel?"')}),Ee.map((O,oe)=>(0,E.jsxs)("div",{className:"lab-ask-qa",children:[(0,E.jsx)("b",{children:O.q}),(0,E.jsx)("p",{children:O.a}),(0,E.jsx)("span",{children:O.src.map((Je,U)=>(0,E.jsx)("em",{children:Je},U))})]},oe))]}),(0,E.jsxs)("form",{onSubmit:O=>{O.preventDefault(),!(!be.trim()||!o.current)&&(_t(oe=>[...oe.slice(-5),o.current.ask(be.trim())]),ge(""))},children:[(0,E.jsx)("input",{autoFocus:!0,value:be,onChange:O=>ge(O.target.value),placeholder:J(i,"Frage zum Scan \u2026","Question about the scan \u2026"),onKeyDown:O=>O.key==="Escape"&&X(!1)}),(0,E.jsx)("button",{className:"btn",children:J(i,"Fragen","Ask")})]})]}),he==="plan"&&(0,E.jsxs)("div",{className:"lab-ui lab-panel",children:[(0,E.jsxs)("div",{className:"lab-panel-h",children:[(0,E.jsxs)("b",{children:["\u25A4 ",J(i,"Grundriss \xB7 w\xE4chst mit jedem Scan","Floor plan \xB7 grows with every scan")]}),(0,E.jsx)("button",{className:"btn ghost",onClick:Qe,children:"\u2913 PNG"}),(0,E.jsx)("button",{className:"lab-x",onClick:()=>Pe(null),children:"\u2715"})]}),(0,E.jsx)("div",{className:"lab-panel-b",children:(0,E.jsx)("canvas",{ref:a,className:"lab-plan"})})]}),he==="proj"&&(0,E.jsxs)("div",{className:"lab-ui lab-panel",children:[(0,E.jsxs)("div",{className:"lab-panel-h",children:[(0,E.jsxs)("b",{children:["\u25EB ",J(i,"Projektionsarten der aktuellen Punktwolke","Projection types of the current point cloud")]}),(0,E.jsxs)("button",{className:"btn ghost",onClick:j,children:["\u21BB ",J(i,"Aktualisieren","Refresh")]}),(0,E.jsx)("button",{className:"lab-x",onClick:()=>Pe(null),children:"\u2715"})]}),(0,E.jsxs)("div",{className:"lab-panel-b lab-projgrid",children:[M&&[["pano",J(i,"Panoramabild (vom aktuellen Standpunkt)","Panorama (from current position)")],["cube",J(i,"W\xFCrfelnetzbild","Cube-map net")],["persp",J(i,"Bild aus vorgegebener Kameraperspektive","Image from a given camera perspective")],["ortho",J(i,"Orthobild (Draufsicht)","Orthoimage (top view)")]].map(([O,oe])=>(0,E.jsxs)("figure",{children:[(0,E.jsx)("img",{src:M[O],alt:""}),(0,E.jsx)("figcaption",{children:oe})]},O)),(0,E.jsx)("p",{className:"lab-lg-d",children:J(i,"Wie Abb. 2.6 der Dissertation \u2013 nur aus dem, was du bisher gescannt hast.","As in Fig. 2.6 of the dissertation \u2013 built only from what you have scanned so far.")})]})]}),he==="pano"&&(0,E.jsxs)("div",{className:"lab-ui lab-panel",children:[(0,E.jsxs)("div",{className:"lab-panel-h",children:[(0,E.jsxs)("b",{children:["\u25CE ",J(i,"360\xB0-Panoramen der TLS-Standpunkte","360\xB0 panoramas of the TLS positions")]}),(0,E.jsx)("button",{className:"lab-x",onClick:()=>(Pe(null),st(null)),children:"\u2715"})]}),(0,E.jsx)("div",{className:"lab-panel-b",children:Ie?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Bp,{url:Ie.url}),(0,E.jsxs)("div",{className:"lab-pano-bar",children:[(0,E.jsxs)("button",{className:"btn ghost",onClick:()=>st(null),children:["\u2190 ",J(i,"\xDCbersicht","Overview")]}),(0,E.jsxs)("span",{children:[J(i,"Standpunkt","Position")," ",Ie.id," \xB7 x ",Ie.x.toFixed(1)," \xB7 z ",Ie.z.toFixed(1)," \xB7 ",J(i,"Intensit\xE4tsbild \xB7 ziehen zum Umsehen","intensity image \xB7 drag to look around")]})]})]}):yt.length?(0,E.jsx)("div",{className:"lab-panogrid",children:yt.map(O=>(0,E.jsxs)("button",{onClick:()=>st(O),children:[(0,E.jsx)("img",{src:O.thumb,alt:""}),(0,E.jsxs)("span",{children:[J(i,"Standpunkt","Position")," ",O.id]})]},O.id))}):(0,E.jsx)("p",{className:"lab-lg-d",children:J(i,"Noch keine Panoramen. Wechsle zu TLS (3), stelle Scanner auf (P) und scanne (Leertaste) \u2013 jeder Standpunkt liefert ein 360\xB0-Bild.","No panoramas yet. Switch to TLS (3), set up scanners (P) and scan (space) \u2013 every position yields a 360\xB0 image.")})})]}),!u&&(0,E.jsxs)("div",{className:"lab-ui lab-intro",children:[(0,E.jsx)("div",{className:"kicker",children:"3D Operation System \xB7 powered by X-AVIS"}),(0,E.jsx)("h1",{children:"Spatial AI Lab"}),(0,E.jsx)("p",{children:J(i,"Du startest in der Leere. Nur dein Scanner sieht \u2013 was er erfasst, wird Wirklichkeit: Punkt f\xFCr Punkt legst du den echten Laserscan einer Stahlbauhalle frei. Folge den Signalen, scanne die Stationen, und X-AVIS segmentiert, was du gefunden hast. Jeder Akku ist begrenzt \u2013 scanne effizient. Manche Stationen schalten Skills frei \u2026","You start in the void. Only your scanner can see \u2013 whatever it captures becomes real: point by point you uncover the actual laser scan of a steel fabrication hall. Follow the signals, scan the stations, and X-AVIS segments what you found. Every battery is limited \u2013 scan efficiently. Some stations unlock skills \u2026")}),(0,E.jsx)("div",{className:"lab-techpick",children:hu.map(O=>(0,E.jsxs)("button",{className:x===O.id?"on":"",onClick:()=>ve(O.id),children:[(0,E.jsx)("i",{children:O.icon}),(0,E.jsx)("b",{children:rt(O.t,i)}),(0,E.jsx)("span",{children:rt(Oe?O.dt:O.d,i)})]},O.id))}),(0,E.jsxs)("div",{className:"lab-modes",children:[(0,E.jsxs)("button",{className:f==="dark"?"on":"",onClick:()=>g("dark"),children:[(0,E.jsx)("i",{className:"sw-dark"}),J(i,"Dunkle Leere","Dark void")]}),(0,E.jsxs)("button",{className:f==="light"?"on":"",onClick:()=>g("light"),children:[(0,E.jsx)("i",{className:"sw-light"}),J(i,"Wei\xDFe Leere","White void")]})]}),c<1?(0,E.jsxs)("div",{className:"lab-load",children:[(0,E.jsx)("i",{style:{width:`${Math.round(c*100)}%`}}),(0,E.jsxs)("span",{children:[J(i,"Lade Punktwolke","Loading point cloud")," \xB7 ",Math.round(c*100)," %"]})]}):(0,E.jsxs)("button",{className:"btn",onClick:()=>{at(),o.current?.tech(x),d(!0),o.current?.start()},children:["\u25B6 ",J(i,"Scan starten","Start scanning"),Oe?" \xB7 "+J(i,"Vollbild quer","fullscreen landscape"):""]}),(0,E.jsx)("small",{className:"lab-note",children:J(i,"Realer Hallenscan (RWTH Aachen, ca. 700.000 Punkte) \xB7 Stationsobjekte synthetisch \xB7 alles vorab berechnet, l\xE4uft statisch","Real hall scan (RWTH Aachen, approx. 700,000 points) \xB7 station objects synthetic \xB7 everything precomputed, runs statically")})]}),Te&&(0,E.jsx)(Td,{s:Te,lang:i,skills:Ju(Te),onClose:()=>y(null)}),R!==null&&_===null&&he===null&&(0,E.jsxs)("div",{className:"lab-ui lab-done",children:[(0,E.jsxs)("b",{children:[J(i,"Lab vollst\xE4ndig entdeckt","Lab fully discovered")," \u2713"]}),(0,E.jsxs)("span",{children:[J(i,`Alle ${Ia} Stationen analysiert in`,`All ${Ia} stations analysed in`)," ",(0,E.jsx)("b",{children:Wp(R)})," \xB7 ",J(i,"Halle erfasst","hall captured")," ",Math.round(p.cov*100)," % \xB7 Skills ",D.unlocked.length,"/",Zi.length,!p.bonus&&` \xB7 ${J(i,"ein Signal fehlt noch \u2026","one signal is still missing \u2026")}`]}),(0,E.jsx)("span",{children:J(i,"Vom Scan zur Entscheidung.","From scan to decision.")}),(0,E.jsx)("a",{className:"btn",href:"#/",children:J(i,"Zur Website","Back to website")})]}),Oe&&u&&un&&!Tt&&(0,E.jsxs)("div",{className:"lab-ui lab-rotate",children:[(0,E.jsx)("div",{className:"lab-rotate-i",children:"\u{1F4F1}"}),(0,E.jsx)("b",{children:J(i,"Handy quer drehen","Rotate your phone")}),(0,E.jsx)("span",{children:J(i,"Das Spatial AI Lab ist f\xFCr das Querformat gemacht \u2013 mehr Halle, mehr Platz f\xFCr Joystick und Steuerung.","The Spatial AI Lab is made for landscape \u2013 more hall, more room for joystick and controls.")}),(0,E.jsxs)("button",{className:"btn",onClick:at,children:["\u26F6 ",J(i,"Vollbild","Fullscreen")]}),(0,E.jsx)("button",{className:"lab-flip",onClick:()=>He(!0),children:J(i,"Trotzdem hochkant","Stay in portrait")})]}),(0,E.jsxs)("div",{className:"lab-copy",children:["\xA9 ",new Date().getFullYear()," Jan Luca Fahrendholz-Heiermann \xB7 X-AVIS"]})]})},_b=qy;export{_b as default};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
