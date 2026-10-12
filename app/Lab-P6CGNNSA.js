import{b as Od,g as zd,i as Bd,k as ja,l as Hd}from"./chunk-PANZ7R32.js";import{A as Fd,B as ut,C as be,b as gi,c as jl,e as as,z as kd}from"./chunk-V3L2VTIW.js";var dt=gi(jl());var $e=gi(as()),jn=(i,e,t)=>i==="en"?t:e,Vd=i=>`rgb(${i.map(e=>Math.round(e*255)).join(",")})`,Gd=({s:i,lang:e,skills:t,onClose:n})=>{let s=i.uc?Od[i.uc-1]:null;return(0,$e.jsxs)("div",{className:"lab-ui lab-card",style:{borderColor:i.c},children:[(0,$e.jsx)("button",{className:"lab-x",onClick:n,children:"\u2715"}),(0,$e.jsxs)("div",{className:"kicker",style:{color:i.c},children:[i.kind==="uc"?`Use Case ${i.uc}`:ut(i.t,e)," \xB7 ",jn(e,"gescannt & analysiert","scanned & analysed")]}),(0,$e.jsx)("h2",{children:s?ut(s.title,e):ut(i.t,e)}),t.map(r=>(0,$e.jsxs)("div",{className:"lab-skillgot",children:[(0,$e.jsx)("span",{children:r.icon}),(0,$e.jsxs)("div",{children:[(0,$e.jsx)("small",{children:jn(e,"Skill freigeschaltet","Skill unlocked")}),(0,$e.jsxs)("b",{children:[ut(r.t,e),r.key?` [${r.key}]`:` \xB7 ${jn(e,"passiv","passive")}`]}),(0,$e.jsx)("em",{children:ut(r.d,e)})]})]},r.id)),(0,$e.jsxs)("div",{className:"lab-parts",children:[(0,$e.jsx)("small",{children:jn(e,"X-AVIS hat erkannt","X-AVIS detected")}),i.parts.map((r,a)=>(0,$e.jsxs)("span",{style:{borderColor:Vd(r.c)},children:[(0,$e.jsx)("i",{style:{background:Vd(r.c)}}),ut(r.name,e)]},a))]}),s&&(0,$e.jsxs)($e.Fragment,{children:[(0,$e.jsx)("p",{className:"lab-claim",children:ut(s.claim,e)}),(0,$e.jsx)("video",{src:`media/uc${s.n}_${e}.mp4`,poster:`media/thumb_uc${s.n}_${e}.jpg`,controls:!0,muted:!0,playsInline:!0},`${s.n}-${e}`),(0,$e.jsx)("ol",{children:s.flow.map((r,a)=>(0,$e.jsx)("li",{children:ut(r,e)},a))}),(0,$e.jsx)("div",{className:"lab-kpis",children:s.value.map((r,a)=>(0,$e.jsxs)("div",{children:[(0,$e.jsx)("b",{children:r.v}),(0,$e.jsx)("span",{children:ut(r.t,e)})]},a))}),(0,$e.jsxs)("a",{className:"btn",href:`#/uc/${s.n}`,children:[jn(e,"Zur Use-Case-Seite","Open use-case page")," \u2192"]})]}),i.kind==="docs"&&(0,$e.jsxs)("div",{className:"lab-list",children:[zd.map((r,a)=>(0,$e.jsxs)("div",{children:[(0,$e.jsx)("b",{children:ut(r.t,e)}),(0,$e.jsx)("span",{children:ut(r.d,e)})]},a)),(0,$e.jsxs)("a",{className:"btn",href:"#/expertise",children:[jn(e,"Mehr unter Expertise","More in expertise")," \u2192"]})]}),i.kind==="talks"&&(0,$e.jsx)("div",{className:"lab-list",children:Bd.slice(0,6).map((r,a)=>(0,$e.jsxs)("div",{className:"lab-talk",children:[r.imgs[0]&&(0,$e.jsx)("img",{src:`media/${r.imgs[0]}`,alt:""}),(0,$e.jsxs)("div",{children:[(0,$e.jsxs)("b",{children:[r.y&&`${r.y} \xB7 `,ut(r.t,e)]}),(0,$e.jsx)("span",{children:ut(r.where,e)})]})]},a))}),i.kind==="bonus"&&(0,$e.jsxs)("div",{className:"lab-list",children:[(0,$e.jsx)("p",{className:"lab-claim",children:jn(e,"Zielmarken sind die Br\xFCcke zwischen einzelnen Scans: \xDCber sie werden Standpunkte zueinander und zum Modell registriert. In Artefakt 2 geschieht das zielmarkenfrei \u2013 Grobregistrierung \xFCber Extended Gaussian Images (EGI) und Fourier-Mellin (FMT), Feinregistrierung per ICP, danach pr\xFCft ein MLP jedes Bauteil gegen das Soll.","Targets are the bridge between individual scans: they register positions to each other and to the model. Artefact 2 does this target-free \u2013 coarse registration via extended Gaussian images (EGI) and Fourier\u2013Mellin (FMT), fine registration via ICP, then an MLP verifies every component against the design.")}),(0,$e.jsx)("img",{className:"lab-cardimg",src:"media/diss_5-14_b3-stahlbauhalle.jpg",alt:""}),(0,$e.jsx)("img",{className:"lab-cardimg",src:"media/diss_5-19_verifikation-b3-stahlbauhalle.jpg",alt:""}),(0,$e.jsx)("p",{className:"lab-claim",children:jn(e,"Im Lab: Handheld-Scans driften (SLAM). Mit R registrierst du sie per ICP \u2013 die verschmierten W\xE4nde rasten ein.","In the lab: handheld scans drift (SLAM). Press R to register them via ICP \u2013 the smeared walls snap into place.")}),(0,$e.jsxs)("a",{className:"btn",href:"#/expertise",children:[jn(e,"Registrierung in der Expertise","Registration in expertise")," \u2192"]})]}),i.kind==="profile"&&(0,$e.jsxs)("div",{className:"lab-list",children:[(0,$e.jsxs)("div",{className:"lab-prof",children:[(0,$e.jsx)("img",{src:"media/profile.jpg",alt:""}),(0,$e.jsxs)("div",{children:[(0,$e.jsx)("b",{children:ja.name}),(0,$e.jsx)("span",{children:ut(ja.role,e)})]})]}),(0,$e.jsx)("p",{className:"lab-claim",children:ut(ja.summary,e)}),(0,$e.jsxs)("div",{className:"lab-egg",children:[(0,$e.jsxs)("small",{children:["\u2605 Easter Egg \xB7 ",jn(e,"Tiefe aus einem einzigen Bild","depth from a single image")]}),(0,$e.jsxs)("div",{className:"lab-egg-imgs",children:[(0,$e.jsx)("img",{src:"media/profile.jpg",alt:""}),(0,$e.jsx)("span",{children:"\u2192"}),(0,$e.jsx)("img",{src:"media/profile_depth.png",alt:""})]}),(0,$e.jsx)("em",{children:jn(e,"Depth Anything V2 sch\xE4tzt die relative Tiefe des Fotos. Statt \xFCber ein Lochkameramodell entsteht die Punktwolke als Relief \xFCber einer Referenzebene, dem Bildtr\xE4ger \u2013 wie bei meiner Kameramessung mit Referenzgeometrie statt LiDAR. Vorab berechnet, im Lab steht das Bild aus der Staffelei heraus.","Depth Anything V2 estimates the photo's relative depth. Instead of a pinhole camera model, the point cloud is built as relief over a reference plane, the picture itself \u2013 like my camera measurement with reference geometry instead of LiDAR. Precomputed; in the lab the picture pops out of the easel.")})]}),(0,$e.jsx)("div",{className:"lab-links",children:Hd.map(r=>(0,$e.jsxs)("a",{href:r.href,target:"_blank",rel:"noopener noreferrer",children:[r.k," \u2197"]},r.k))}),(0,$e.jsxs)("a",{className:"btn",href:"#/profil",children:[jn(e,"Vollst\xE4ndiges Profil","Full profile")," \u2192"]})]}),(0,$e.jsx)("button",{className:"btn ghost lab-cont",onClick:n,children:jn(e,"Weiter erkunden","Keep exploring")})]})};var Rm=0,Wd=1,Cm=2;var lp=1,Pm=2,Vi=3,Ci=0,Kn=1,hn=2,gs=0,Xi=1,ys=2,Xd=3,Yd=4,Im=5,Vs=100,Lm=101,Nm=102,Dm=103,Um=104,km=200,Fm=201,Om=202,zm=203,kc=204,Fc=205,Bm=206,Hm=207,Vm=208,Gm=209,Wm=210,Xm=211,Ym=212,$m=213,qm=214,Oc=0,zc=1,Bc=2,Cr=3,Hc=4,Vc=5,Gc=6,Wc=7,cp=0,Km=1,Zm=2,xs=0,Jm=1,jm=2,Qm=3,e0=4,t0=5,n0=6,i0=7,$d="attached",s0="detached",hp=300,Pr=301,Ir=302,Xc=303,Yc=304,yl=306,Ws=1e3,Gi=1001,va=1002,On=1003,nu=1004;var Sr=1005;var $n=1006,ma=1007;var Ri=1008;var Yi=1009,up=1010,dp=1011,ba=1012,iu=1013,Xs=1014,Mi=1015,Na=1016,su=1017,ru=1018,Lr=1020,fp=35902,pp=1021,mp=1022,qn=1023,gp=1024,xp=1025,wr=1026,Nr=1027,au=1028,ou=1029,yp=1030,lu=1031;var cu=1033,Io=33776,Lo=33777,No=33778,Do=33779,$c=35840,qc=35841,Kc=35842,Zc=35843,Jc=36196,jc=37492,Qc=37496,eh=37808,th=37809,nh=37810,ih=37811,sh=37812,rh=37813,ah=37814,oh=37815,lh=37816,ch=37817,hh=37818,uh=37819,dh=37820,fh=37821,Uo=36492,ph=36494,mh=36495,_p=36283,gh=36284,xh=36285,yh=36286;var Dr=2300,Ur=2301,Ql=2302,qd=2400,Kd=2401,Zd=2402,r0=2500;var vp=0,_l=1,Da=2,a0=3200,o0=3201;var bp=0,l0=1,fs="",_n="srgb",Nn="srgb-linear",hu="display-p3",vl="display-p3-linear",Fo="linear",ln="srgb",Oo="rec709",zo="p3";var lr=7680;var Jd=519,c0=512,h0=513,u0=514,Mp=515,d0=516,f0=517,p0=518,m0=519,_h=35044,bl=35048;var jd="300 es",Wi=2e3,Bo=2001,_s=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qd=1234567,Ar=Math.PI/180,kr=180/Math.PI;function Si(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kn[i&255]+kn[i>>8&255]+kn[i>>16&255]+kn[i>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[t&63|128]+kn[t>>8&255]+"-"+kn[t>>16&255]+kn[t>>24&255]+kn[n&255]+kn[n>>8&255]+kn[n>>16&255]+kn[n>>24&255]).toLowerCase()}function Mn(i,e,t){return Math.max(e,Math.min(t,i))}function uu(i,e){return(i%e+e)%e}function g0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function x0(i,e,t){return i!==e?(t-i)/(e-i):0}function ga(i,e,t){return(1-t)*i+t*e}function y0(i,e,t,n){return ga(i,e,1-Math.exp(-t*n))}function _0(i,e=1){return e-Math.abs(uu(i,e*2)-e)}function v0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function b0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function M0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function S0(i,e){return i+Math.random()*(e-i)}function E0(i){return i*(.5-Math.random())}function w0(i){i!==void 0&&(Qd=i);let e=Qd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function A0(i){return i*Ar}function T0(i){return i*kr}function R0(i){return(i&i-1)===0&&i!==0}function C0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function P0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function I0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ua={DEG2RAD:Ar,RAD2DEG:kr,generateUUID:Si,clamp:Mn,euclideanModulo:uu,mapLinear:g0,inverseLerp:x0,lerp:ga,damp:y0,pingpong:_0,smoothstep:v0,smootherstep:b0,randInt:M0,randFloat:S0,randFloatSpread:E0,seededRandom:w0,degToRad:A0,radToDeg:T0,isPowerOfTwo:R0,ceilPowerOfTwo:C0,floorPowerOfTwo:P0,setQuaternionFromProperEuler:I0,normalize:Kt,denormalize:bi},ze=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},It=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],p=s[3],m=s[6],y=s[1],M=s[4],_=s[7],I=s[2],C=s[5],A=s[8];return r[0]=a*x+o*y+l*I,r[3]=a*p+o*M+l*C,r[6]=a*m+o*_+l*A,r[1]=c*x+h*y+u*I,r[4]=c*p+h*M+u*C,r[7]=c*m+h*_+u*A,r[2]=d*x+f*y+g*I,r[5]=d*p+f*M+g*C,r[8]=d*m+f*_+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ec.makeScale(e,t)),this}rotate(e){return this.premultiply(ec.makeRotation(-e)),this}translate(e,t){return this.premultiply(ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ec=new It;function Sp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ma(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function L0(){let i=Ma("canvas");return i.style.display="block",i}var ef={};function ko(i){i in ef||(ef[i]=!0,console.warn(i))}function N0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function D0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function U0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var tf=new It().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nf=new It().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ra={[Nn]:{transfer:Fo,primaries:Oo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[_n]:{transfer:ln,primaries:Oo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[vl]:{transfer:Fo,primaries:zo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(nf),fromReference:i=>i.applyMatrix3(tf)},[hu]:{transfer:ln,primaries:zo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(nf),fromReference:i=>i.applyMatrix3(tf).convertLinearToSRGB()}},k0=new Set([Nn,vl]),Yt={enabled:!0,_workingColorSpace:Nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!k0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=ra[e].toReference,s=ra[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ra[i].primaries},getTransfer:function(i){return i===fs?Fo:ra[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(ra[e].luminanceCoefficients)}};function Tr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function tc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var cr,vh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cr===void 0&&(cr=Ma("canvas")),cr.width=e.width,cr.height=e.height;let n=cr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=cr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ma("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Tr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tr(t[n]/255)*255):t[n]=Tr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},F0=0,Ho=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(nc(s[a].image)):r.push(nc(s[a]))}else r=nc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var O0=0,Ln=class i extends _s{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Gi,s=Gi,r=$n,a=Ri,o=qn,l=Yi,c=i.DEFAULT_ANISOTROPY,h=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Si(),this.name="",this.source=new Ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ws:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ws:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=hp;Ln.DEFAULT_ANISOTROPY=1;var $t=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,_=(f+1)/2,I=(m+1)/2,C=(h+d)/4,A=(u+x)/4,U=(g+p)/4;return M>_&&M>I?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=C/n,r=A/n):_>I?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=C/s,r=U/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=A/r,s=U/r),this.set(n,s,r,t),this}let y=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bh=class extends _s{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ln(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ho(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$i=class extends bh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vo=class extends Ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Mh=class extends Ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ei=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let p=1-o,m=l*d+c*f+h*g+u*x,y=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let I=Math.sqrt(M),C=Math.atan2(I,m*y);p=Math.sin(p*C)/I,o=Math.sin(o*C)/I}let _=o*y;if(l=l*p+d*_,c=c*p+f*_,h=h*p+g*_,u=u*p+x*_,p===1-o){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ic.copy(this).projectOnVector(e),this.sub(ic)}reflect(e){return this.sub(ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ic=new L,sf=new Ei,Zn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xi):xi.fromBufferAttribute(r,a),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qa.copy(n.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),eo.subVectors(this.max,aa),hr.subVectors(e.a,aa),ur.subVectors(e.b,aa),dr.subVectors(e.c,aa),os.subVectors(ur,hr),ls.subVectors(dr,ur),Us.subVectors(hr,dr);let t=[0,-os.z,os.y,0,-ls.z,ls.y,0,-Us.z,Us.y,os.z,0,-os.x,ls.z,0,-ls.x,Us.z,0,-Us.x,-os.y,os.x,0,-ls.y,ls.x,0,-Us.y,Us.x,0];return!sc(t,hr,ur,dr,eo)||(t=[1,0,0,0,1,0,0,0,1],!sc(t,hr,ur,dr,eo))?!1:(to.crossVectors(os,ls),t=[to.x,to.y,to.z],sc(t,hr,ur,dr,eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ki=[new L,new L,new L,new L,new L,new L,new L,new L],xi=new L,Qa=new Zn,hr=new L,ur=new L,dr=new L,os=new L,ls=new L,Us=new L,aa=new L,eo=new L,to=new L,ks=new L;function sc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ks.fromArray(i,r);let o=s.x*Math.abs(ks.x)+s.y*Math.abs(ks.y)+s.z*Math.abs(ks.z),l=e.dot(ks),c=t.dot(ks),h=n.dot(ks);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var z0=new Zn,oa=new L,rc=new L,ti=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):z0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);let t=oa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(oa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(rc)),this.expandByPoint(oa.copy(e.center).sub(rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Fi=new L,ac=new L,no=new L,cs=new L,oc=new L,io=new L,lc=new L,Fr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ac.copy(e).add(t).multiplyScalar(.5),no.copy(t).sub(e).normalize(),cs.copy(this.origin).sub(ac);let r=e.distanceTo(t)*.5,a=-this.direction.dot(no),o=cs.dot(this.direction),l=-cs.dot(no),c=cs.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ac).addScaledVector(no,d),f}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);let n=Fi.dot(this.direction),s=Fi.dot(Fi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,n,s,r){oc.subVectors(t,e),io.subVectors(n,e),lc.crossVectors(oc,io);let a=this.direction.dot(lc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;cs.subVectors(this.origin,e);let l=o*this.direction.dot(io.crossVectors(cs,io));if(l<0)return null;let c=o*this.direction.dot(oc.cross(cs));if(c<0||l+c>a)return null;let h=-o*cs.dot(lc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yt=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,x,p)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/fr.setFromMatrixColumn(e,0).length(),r=1/fr.setFromMatrixColumn(e,1).length(),a=1/fr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(B0,e,H0)}lookAt(e,t,n){let s=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),hs.crossVectors(n,Qn),hs.lengthSq()===0&&(Math.abs(n.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),hs.crossVectors(n,Qn)),hs.normalize(),so.crossVectors(Qn,hs),s[0]=hs.x,s[4]=so.x,s[8]=Qn.x,s[1]=hs.y,s[5]=so.y,s[9]=Qn.y,s[2]=hs.z,s[6]=so.z,s[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],y=n[3],M=n[7],_=n[11],I=n[15],C=s[0],A=s[4],U=s[8],J=s[12],b=s[1],w=s[5],V=s[9],F=s[13],q=s[2],se=s[6],K=s[10],B=s[14],Q=s[3],le=s[7],Pe=s[11],Me=s[15];return r[0]=a*C+o*b+l*q+c*Q,r[4]=a*A+o*w+l*se+c*le,r[8]=a*U+o*V+l*K+c*Pe,r[12]=a*J+o*F+l*B+c*Me,r[1]=h*C+u*b+d*q+f*Q,r[5]=h*A+u*w+d*se+f*le,r[9]=h*U+u*V+d*K+f*Pe,r[13]=h*J+u*F+d*B+f*Me,r[2]=g*C+x*b+p*q+m*Q,r[6]=g*A+x*w+p*se+m*le,r[10]=g*U+x*V+p*K+m*Pe,r[14]=g*J+x*F+p*B+m*Me,r[3]=y*C+M*b+_*q+I*Q,r[7]=y*A+M*w+_*se+I*le,r[11]=y*U+M*V+_*K+I*Pe,r[15]=y*J+M*F+_*B+I*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+x*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+p*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+m*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],y=u*p*c-x*d*c+x*l*f-o*p*f-u*l*m+o*d*m,M=g*d*c-h*p*c-g*l*f+a*p*f+h*l*m-a*d*m,_=h*x*c-g*u*c+g*o*f-a*x*f-h*o*m+a*u*m,I=g*u*l-h*x*l-g*o*d+a*x*d+h*o*p-a*u*p,C=t*y+n*M+s*_+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/C;return e[0]=y*A,e[1]=(x*d*r-u*p*r-x*s*f+n*p*f+u*s*m-n*d*m)*A,e[2]=(o*p*r-x*l*r+x*s*c-n*p*c-o*s*m+n*l*m)*A,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*A,e[4]=M*A,e[5]=(h*p*r-g*d*r+g*s*f-t*p*f-h*s*m+t*d*m)*A,e[6]=(g*l*r-a*p*r-g*s*c+t*p*c+a*s*m-t*l*m)*A,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*A,e[8]=_*A,e[9]=(g*u*r-h*x*r-g*n*f+t*x*f+h*n*m-t*u*m)*A,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*m+t*o*m)*A,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*A,e[12]=I*A,e[13]=(h*x*s-g*u*s+g*n*d-t*x*d-h*n*p+t*u*p)*A,e[14]=(g*o*s-a*x*s-g*n*l+t*x*l+a*n*p-t*o*p)*A,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,p=a*u,m=o*u,y=l*c,M=l*h,_=l*u,I=n.x,C=n.y,A=n.z;return s[0]=(1-(x+m))*I,s[1]=(f+_)*I,s[2]=(g-M)*I,s[3]=0,s[4]=(f-_)*C,s[5]=(1-(d+m))*C,s[6]=(p+y)*C,s[7]=0,s[8]=(g+M)*A,s[9]=(p-y)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=fr.set(s[0],s[1],s[2]).length(),a=fr.set(s[4],s[5],s[6]).length(),o=fr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],yi.copy(this);let c=1/r,h=1/a,u=1/o;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=h,yi.elements[5]*=h,yi.elements[6]*=h,yi.elements[8]*=u,yi.elements[9]*=u,yi.elements[10]*=u,t.setFromRotationMatrix(yi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Wi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(o===Wi)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Bo)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Wi){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,f=(n+s)*h,g,x;if(o===Wi)g=(a+r)*u,x=-2*u;else if(o===Bo)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},fr=new L,yi=new yt,B0=new L(0,0,0),H0=new L(1,1,1),hs=new L,so=new L,Qn=new L,rf=new yt,af=new Ei,Pi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return af.setFromEuler(this),this.setFromQuaternion(af,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pi.DEFAULT_ORDER="XYZ";var Go=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},V0=0,of=new L,pr=new Ei,Oi=new yt,ro=new L,la=new L,G0=new L,W0=new Ei,lf=new L(1,0,0),cf=new L(0,1,0),hf=new L(0,0,1),uf={type:"added"},X0={type:"removed"},mr={type:"childadded",child:null},cc={type:"childremoved",child:null},dn=class i extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Pi,n=new Ei,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new It}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(lf,e)}rotateY(e){return this.rotateOnAxis(cf,e)}rotateZ(e){return this.rotateOnAxis(hf,e)}translateOnAxis(e,t){return of.copy(e).applyQuaternion(this.quaternion),this.position.add(of.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lf,e)}translateY(e){return this.translateOnAxis(cf,e)}translateZ(e){return this.translateOnAxis(hf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ro.copy(e):ro.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(la,ro,this.up):Oi.lookAt(ro,la,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),pr.setFromRotationMatrix(Oi),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uf),mr.child=e,this.dispatchEvent(mr),mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(X0),cc.child=e,this.dispatchEvent(cc),cc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uf),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,G0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,W0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};dn.DEFAULT_UP=new L(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _i=new L,zi=new L,hc=new L,Bi=new L,gr=new L,xr=new L,df=new L,uc=new L,dc=new L,fc=new L,pc=new $t,mc=new $t,gc=new $t,ps=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),_i.subVectors(e,t),s.cross(_i);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){_i.subVectors(s,t),zi.subVectors(n,t),hc.subVectors(e,t);let a=_i.dot(_i),o=_i.dot(zi),l=_i.dot(hc),c=zi.dot(zi),h=zi.dot(hc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bi.x),l.addScaledVector(a,Bi.y),l.addScaledVector(o,Bi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(e,t),mc.fromBufferAttribute(e,n),gc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(pc,r.x),a.addScaledVector(mc,r.y),a.addScaledVector(gc,r.z),a}static isFrontFacing(e,t,n,s){return _i.subVectors(n,t),zi.subVectors(e,t),_i.cross(zi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),_i.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;gr.subVectors(s,n),xr.subVectors(r,n),uc.subVectors(e,n);let l=gr.dot(uc),c=xr.dot(uc);if(l<=0&&c<=0)return t.copy(n);dc.subVectors(e,s);let h=gr.dot(dc),u=xr.dot(dc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(gr,a);fc.subVectors(e,r);let f=gr.dot(fc),g=xr.dot(fc);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(xr,o);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return df.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(df,o);let m=1/(p+x+d);return a=x*m,o=d*m,t.copy(n).addScaledVector(gr,a).addScaledVector(xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},ao={h:0,s:0,l:0};function xc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ot=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Yt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Yt.workingColorSpace){if(e=uu(e,1),t=Mn(t,0,1),n=Mn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=xc(a,r,e+1/3),this.g=xc(a,r,e),this.b=xc(a,r,e-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(e,t=_n){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){let n=Ep[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=tc(e.r),this.g=tc(e.g),this.b=tc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return Yt.fromWorkingColorSpace(Fn.copy(this),e),Math.round(Mn(Fn.r*255,0,255))*65536+Math.round(Mn(Fn.g*255,0,255))*256+Math.round(Mn(Fn.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Fn.copy(this),t);let n=Fn.r,s=Fn.g,r=Fn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=_n){Yt.fromWorkingColorSpace(Fn.copy(this),e);let t=Fn.r,n=Fn.g,s=Fn.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(ao);let n=ga(us.h,ao.h,t),s=ga(us.s,ao.s,t),r=ga(us.l,ao.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new ot;ot.NAMES=Ep;var Y0=0,ni=class extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=Xi,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kc,this.blendDst=Fc,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lr,this.stencilZFail=lr,this.stencilZPass=lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==kc&&(n.blendSrc=this.blendSrc),this.blendDst!==Fc&&(n.blendDst=this.blendDst),this.blendEquation!==Vs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==lr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==lr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Gt=class extends ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=cp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var yn=new L,oo=new ze,Lt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_h,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oo.fromBufferAttribute(this,t),oo.applyMatrix3(e),this.setXY(t,oo.x,oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix3(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),s=Kt(s,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_h&&(e.usage=this.usage),e}};var Wo=class extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Xo=class extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Vt=class extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}},$0=0,ai=new yt,yc=new dn,yr=new L,ei=new Zn,ca=new Zn,In=new L,Zt=class i extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sp(e)?Xo:Wo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new It().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,n){return ai.makeTranslation(e,t,n),this.applyMatrix4(ai),this}scale(e,t,n){return ai.makeScale(e,t,n),this.applyMatrix4(ai),this}lookAt(e){return yc.lookAt(e),yc.updateMatrix(),this.applyMatrix4(yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Vt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ca.setFromBufferAttribute(o),this.morphTargetsRelative?(In.addVectors(ei.min,ca.min),ei.expandByPoint(In),In.addVectors(ei.max,ca.max),ei.expandByPoint(In)):(ei.expandByPoint(ca.min),ei.expandByPoint(ca.max))}ei.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)In.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(In));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)In.fromBufferAttribute(o,c),l&&(yr.fromBufferAttribute(e,c),In.add(yr)),s=Math.max(s,n.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new L,l[U]=new L;let c=new L,h=new L,u=new L,d=new ze,f=new ze,g=new ze,x=new L,p=new L;function m(U,J,b){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,J),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,U),f.fromBufferAttribute(r,J),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(w),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(w),o[U].add(x),o[J].add(x),o[b].add(x),l[U].add(p),l[J].add(p),l[b].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let U=0,J=y.length;U<J;++U){let b=y[U],w=b.start,V=b.count;for(let F=w,q=w+V;F<q;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let M=new L,_=new L,I=new L,C=new L;function A(U){I.fromBufferAttribute(s,U),C.copy(I);let J=o[U];M.copy(J),M.sub(I.multiplyScalar(I.dot(J))).normalize(),_.crossVectors(C,J);let w=_.dot(l[U])<0?-1:1;a.setXYZW(U,M.x,M.y,M.z,w)}for(let U=0,J=y.length;U<J;++U){let b=y[U],w=b.start,V=b.count;for(let F=w,q=w+V;F<q;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)In.fromBufferAttribute(e,t),In.normalize(),e.setXYZ(t,In.x,In.y,In.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new Lt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ff=new yt,Fs=new Fr,lo=new ti,pf=new L,co=new L,ho=new L,uo=new L,_c=new L,fo=new L,mf=new L,po=new L,Ee=class extends dn{constructor(e=new Zt,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(_c.fromBufferAttribute(u,e),a?fo.addScaledVector(_c,h):fo.addScaledVector(_c.sub(t),h))}t.add(fo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(r),Fs.copy(e.ray).recast(e.near),!(lo.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(lo,pf)===null||Fs.origin.distanceToSquared(pf)>(e.far-e.near)**2))&&(ff.copy(r).invert(),Fs.copy(e.ray).applyMatrix4(ff),!(n.boundingBox!==null&&Fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=a[p.materialIndex],y=Math.max(p.start,f.start),M=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let _=y,I=M;_<I;_+=3){let C=o.getX(_),A=o.getX(_+1),U=o.getX(_+2);s=mo(this,m,e,n,c,h,u,C,A,U),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let y=o.getX(p),M=o.getX(p+1),_=o.getX(p+2);s=mo(this,a,e,n,c,h,u,y,M,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=a[p.materialIndex],y=Math.max(p.start,f.start),M=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let _=y,I=M;_<I;_+=3){let C=_,A=_+1,U=_+2;s=mo(this,m,e,n,c,h,u,C,A,U),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let y=p,M=p+1,_=p+2;s=mo(this,a,e,n,c,h,u,y,M,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function q0(i,e,t,n,s,r,a,o){let l;if(e.side===Kn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ci,o),l===null)return null;po.copy(o),po.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(po);return c<t.near||c>t.far?null:{distance:c,point:po.clone(),object:i}}function mo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,co),i.getVertexPosition(l,ho),i.getVertexPosition(c,uo);let h=q0(i,e,t,n,co,ho,uo,mf);if(h){let u=new L;ps.getBarycoord(mf,co,ho,uo,u),s&&(h.uv=ps.getInterpolatedAttribute(s,o,l,c,u,new ze)),r&&(h.uv1=ps.getInterpolatedAttribute(r,o,l,c,u,new ze)),a&&(h.normal=ps.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};ps.getNormal(co,ho,uo,d.normal),h.face=d,h.barycoord=u}return h}var Qt=class i extends Zt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(u,2));function g(x,p,m,y,M,_,I,C,A,U,J){let b=_/A,w=I/U,V=_/2,F=I/2,q=C/2,se=A+1,K=U+1,B=0,Q=0,le=new L;for(let Pe=0;Pe<K;Pe++){let Me=Pe*w-F;for(let vt=0;vt<se;vt++){let Ot=vt*b-V;le[x]=Ot*y,le[p]=Me*M,le[m]=q,c.push(le.x,le.y,le.z),le[x]=0,le[p]=0,le[m]=C>0?1:-1,h.push(le.x,le.y,le.z),u.push(vt/A),u.push(1-Pe/U),B+=1}}for(let Pe=0;Pe<U;Pe++)for(let Me=0;Me<A;Me++){let vt=d+Me+se*Pe,Ot=d+Me+se*(Pe+1),ae=d+(Me+1)+se*(Pe+1),fe=d+(Me+1)+se*Pe;l.push(vt,Ot,fe),l.push(Ot,ae,fe),Q+=6}o.addGroup(f,Q,J),f+=Q,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Or(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Gn(i){let e={};for(let t=0;t<i.length;t++){let n=Or(i[t]);for(let s in n)e[s]=n[s]}return e}function K0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Yt.workingColorSpace}var Z0={clone:Or,merge:Gn},J0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ii=class extends ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J0,this.fragmentShader=j0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=K0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Yo=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ds=new L,gf=new ze,xf=new ze,mn=class extends Yo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ds.x,ds.y).multiplyScalar(-e/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ds.x,ds.y).multiplyScalar(-e/ds.z)}getViewSize(e,t){return this.getViewBounds(e,gf,xf),t.subVectors(xf,gf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_r=-90,vr=1,Sh=class extends dn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(_r,vr,e,t);s.layers=this.layers,this.add(s);let r=new mn(_r,vr,e,t);r.layers=this.layers,this.add(r);let a=new mn(_r,vr,e,t);a.layers=this.layers,this.add(a);let o=new mn(_r,vr,e,t);o.layers=this.layers,this.add(o);let l=new mn(_r,vr,e,t);l.layers=this.layers,this.add(l);let c=new mn(_r,vr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Wi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},$o=class extends Ln{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Pr,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Eh=class extends $i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new $o(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qt(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:Or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kn,blending:gs});r.uniforms.tEquirect.value=t;let a=new Ee(s,r),o=t.minFilter;return t.minFilter===Ri&&(t.minFilter=$n),new Sh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},vc=new L,Q0=new L,eg=new It,vi=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=vc.subVectors(n,t).cross(Q0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(vc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||eg.getNormalMatrix(e),s=this.coplanarPoint(vc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Os=new ti,go=new L,Sa=class{constructor(e=new vi,t=new vi,n=new vi,s=new vi,r=new vi,a=new vi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],p=s[11],m=s[12],y=s[13],M=s[14],_=s[15];if(n[0].setComponents(l-r,d-c,p-f,_-m).normalize(),n[1].setComponents(l+r,d+c,p+f,_+m).normalize(),n[2].setComponents(l+a,d+h,p+g,_+y).normalize(),n[3].setComponents(l-a,d-h,p-g,_-y).normalize(),n[4].setComponents(l-o,d-u,p-x,_-M).normalize(),t===Wi)n[5].setComponents(l+o,d+u,p+x,_+M).normalize();else if(t===Bo)n[5].setComponents(o,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(e){return Os.center.set(0,0,0),Os.radius=.7071067811865476,Os.applyMatrix4(e.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(go.x=s.normal.x>0?e.max.x:e.min.x,go.y=s.normal.y>0?e.max.y:e.min.y,go.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ap(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function tg(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ii=class i extends Zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let y=m*d-a;for(let M=0;M<c;M++){let _=M*u-r;g.push(_,-y,0),x.push(0,0,1),p.push(M/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let M=y+c*m,_=y+c*(m+1),I=y+1+c*(m+1),C=y+1+c*m;f.push(M,_,C),f.push(_,I,C)}this.setIndex(f),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ng=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ig=`#ifdef USE_ALPHAHASH
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
#endif`,sg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ag=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,og=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lg=`#ifdef USE_AOMAP
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
#endif`,cg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hg=`#ifdef USE_BATCHING
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
#endif`,ug=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mg=`#ifdef USE_IRIDESCENCE
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
#endif`,gg=`#ifdef USE_BUMPMAP
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
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Eg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wg=`#define PI 3.141592653589793
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
} // validated`,Ag=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tg=`vec3 transformedNormal = objectNormal;
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
#endif`,Rg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ig=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ng=`
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
}`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Ug=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kg=`#ifdef USE_ENVMAP
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
#endif`,Fg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Og=`#ifdef USE_ENVMAP
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
#endif`,zg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gg=`#ifdef USE_GRADIENTMAP
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
}`,Wg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$g=`uniform bool receiveShadow;
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
#endif`,qg=`#ifdef USE_ENVMAP
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
#endif`,Kg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qg=`PhysicalMaterial material;
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
#endif`,e1=`struct PhysicalMaterial {
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
}`,t1=`
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
#endif`,n1=`#if defined( RE_IndirectDiffuse )
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
#endif`,i1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,u1=`#if defined( USE_POINTS_UV )
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
#endif`,d1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x1=`#ifdef USE_MORPHTARGETS
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
#endif`,y1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,v1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,E1=`#ifdef USE_NORMALMAP
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
#endif`,w1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,I1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,B1=`float getShadowMask() {
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
}`,H1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V1=`#ifdef USE_SKINNING
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
#endif`,G1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W1=`#ifdef USE_SKINNING
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
#endif`,X1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K1=`#ifdef USE_TRANSMISSION
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
#endif`,Z1=`#ifdef USE_TRANSMISSION
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
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nx=`uniform sampler2D t2D;
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
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`#include <common>
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
}`,lx=`#if DEPTH_PACKING == 3200
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
}`,cx=`#define DISTANCE
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
}`,hx=`#define DISTANCE
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
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`uniform float scale;
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
}`,px=`uniform vec3 diffuse;
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
}`,mx=`#include <common>
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
}`,gx=`uniform vec3 diffuse;
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
}`,xx=`#define LAMBERT
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
}`,yx=`#define LAMBERT
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
}`,_x=`#define MATCAP
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
}`,vx=`#define MATCAP
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
}`,bx=`#define NORMAL
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
}`,Mx=`#define NORMAL
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
}`,Sx=`#define PHONG
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
}`,Ex=`#define PHONG
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
}`,wx=`#define STANDARD
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
}`,Ax=`#define STANDARD
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
}`,Tx=`#define TOON
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
}`,Rx=`#define TOON
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
}`,Cx=`uniform float size;
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
}`,Px=`uniform vec3 diffuse;
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
}`,Ix=`#include <common>
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
}`,Lx=`uniform vec3 color;
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
}`,Nx=`uniform float rotation;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Pt={alphahash_fragment:ng,alphahash_pars_fragment:ig,alphamap_fragment:sg,alphamap_pars_fragment:rg,alphatest_fragment:ag,alphatest_pars_fragment:og,aomap_fragment:lg,aomap_pars_fragment:cg,batching_pars_vertex:hg,batching_vertex:ug,begin_vertex:dg,beginnormal_vertex:fg,bsdfs:pg,iridescence_fragment:mg,bumpmap_pars_fragment:gg,clipping_planes_fragment:xg,clipping_planes_pars_fragment:yg,clipping_planes_pars_vertex:_g,clipping_planes_vertex:vg,color_fragment:bg,color_pars_fragment:Mg,color_pars_vertex:Sg,color_vertex:Eg,common:wg,cube_uv_reflection_fragment:Ag,defaultnormal_vertex:Tg,displacementmap_pars_vertex:Rg,displacementmap_vertex:Cg,emissivemap_fragment:Pg,emissivemap_pars_fragment:Ig,colorspace_fragment:Lg,colorspace_pars_fragment:Ng,envmap_fragment:Dg,envmap_common_pars_fragment:Ug,envmap_pars_fragment:kg,envmap_pars_vertex:Fg,envmap_physical_pars_fragment:qg,envmap_vertex:Og,fog_vertex:zg,fog_pars_vertex:Bg,fog_fragment:Hg,fog_pars_fragment:Vg,gradientmap_pars_fragment:Gg,lightmap_pars_fragment:Wg,lights_lambert_fragment:Xg,lights_lambert_pars_fragment:Yg,lights_pars_begin:$g,lights_toon_fragment:Kg,lights_toon_pars_fragment:Zg,lights_phong_fragment:Jg,lights_phong_pars_fragment:jg,lights_physical_fragment:Qg,lights_physical_pars_fragment:e1,lights_fragment_begin:t1,lights_fragment_maps:n1,lights_fragment_end:i1,logdepthbuf_fragment:s1,logdepthbuf_pars_fragment:r1,logdepthbuf_pars_vertex:a1,logdepthbuf_vertex:o1,map_fragment:l1,map_pars_fragment:c1,map_particle_fragment:h1,map_particle_pars_fragment:u1,metalnessmap_fragment:d1,metalnessmap_pars_fragment:f1,morphinstance_vertex:p1,morphcolor_vertex:m1,morphnormal_vertex:g1,morphtarget_pars_vertex:x1,morphtarget_vertex:y1,normal_fragment_begin:_1,normal_fragment_maps:v1,normal_pars_fragment:b1,normal_pars_vertex:M1,normal_vertex:S1,normalmap_pars_fragment:E1,clearcoat_normal_fragment_begin:w1,clearcoat_normal_fragment_maps:A1,clearcoat_pars_fragment:T1,iridescence_pars_fragment:R1,opaque_fragment:C1,packing:P1,premultiplied_alpha_fragment:I1,project_vertex:L1,dithering_fragment:N1,dithering_pars_fragment:D1,roughnessmap_fragment:U1,roughnessmap_pars_fragment:k1,shadowmap_pars_fragment:F1,shadowmap_pars_vertex:O1,shadowmap_vertex:z1,shadowmask_pars_fragment:B1,skinbase_vertex:H1,skinning_pars_vertex:V1,skinning_vertex:G1,skinnormal_vertex:W1,specularmap_fragment:X1,specularmap_pars_fragment:Y1,tonemapping_fragment:$1,tonemapping_pars_fragment:q1,transmission_fragment:K1,transmission_pars_fragment:Z1,uv_pars_fragment:J1,uv_pars_vertex:j1,uv_vertex:Q1,worldpos_vertex:ex,background_vert:tx,background_frag:nx,backgroundCube_vert:ix,backgroundCube_frag:sx,cube_vert:rx,cube_frag:ax,depth_vert:ox,depth_frag:lx,distanceRGBA_vert:cx,distanceRGBA_frag:hx,equirect_vert:ux,equirect_frag:dx,linedashed_vert:fx,linedashed_frag:px,meshbasic_vert:mx,meshbasic_frag:gx,meshlambert_vert:xx,meshlambert_frag:yx,meshmatcap_vert:_x,meshmatcap_frag:vx,meshnormal_vert:bx,meshnormal_frag:Mx,meshphong_vert:Sx,meshphong_frag:Ex,meshphysical_vert:wx,meshphysical_frag:Ax,meshtoon_vert:Tx,meshtoon_frag:Rx,points_vert:Cx,points_frag:Px,shadow_vert:Ix,shadow_frag:Lx,sprite_vert:Nx,sprite_frag:Dx},Le={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},Ti={basic:{uniforms:Gn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:Gn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new ot(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:Gn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:Gn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:Gn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new ot(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:Gn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:Gn([Le.points,Le.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:Gn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:Gn([Le.common,Le.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:Gn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:Gn([Le.sprite,Le.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:Gn([Le.common,Le.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:Gn([Le.lights,Le.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};Ti.physical={uniforms:Gn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};var xo={r:0,b:0,g:0},zs=new Pi,Ux=new yt;function kx(i,e,t,n,s,r,a){let o=new ot(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?t:e).get(M)),M}function x(y){let M=!1,_=g(y);_===null?m(o,l):_&&_.isColor&&(m(_,1),M=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,M){let _=g(M);_&&(_.isCubeTexture||_.mapping===yl)?(h===void 0&&(h=new Ee(new Qt(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Or(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),zs.copy(M.backgroundRotation),zs.x*=-1,zs.y*=-1,zs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ux.makeRotationFromEuler(zs)),h.material.toneMapped=Yt.getTransfer(_.colorSpace)!==ln,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ee(new Ii(2,2),new ii({name:"BackgroundMaterial",uniforms:Or(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(_.colorSpace)!==ln,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,M){y.getRGB(xo,wp(i)),n.buffers.color.setClear(xo.r,xo.g,xo.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),l=M,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:x,addToRenderList:p}}function Fx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(b,w,V,F,q){let se=!1,K=u(F,V,w);r!==K&&(r=K,c(r.object)),se=f(b,F,V,q),se&&g(b,F,V,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(se||a)&&(a=!1,_(b,w,V,F),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,w,V){let F=V.wireframe===!0,q=n[b.id];q===void 0&&(q={},n[b.id]=q);let se=q[w.id];se===void 0&&(se={},q[w.id]=se);let K=se[F];return K===void 0&&(K=d(l()),se[F]=K),K}function d(b){let w=[],V=[],F=[];for(let q=0;q<t;q++)w[q]=0,V[q]=0,F[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:V,attributeDivisors:F,object:b,attributes:{},index:null}}function f(b,w,V,F){let q=r.attributes,se=w.attributes,K=0,B=V.getAttributes();for(let Q in B)if(B[Q].location>=0){let Pe=q[Q],Me=se[Q];if(Me===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(Me=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(Me=b.instanceColor)),Pe===void 0||Pe.attribute!==Me||Me&&Pe.data!==Me.data)return!0;K++}return r.attributesNum!==K||r.index!==F}function g(b,w,V,F){let q={},se=w.attributes,K=0,B=V.getAttributes();for(let Q in B)if(B[Q].location>=0){let Pe=se[Q];Pe===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(Pe=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(Pe=b.instanceColor));let Me={};Me.attribute=Pe,Pe&&Pe.data&&(Me.data=Pe.data),q[Q]=Me,K++}r.attributes=q,r.attributesNum=K,r.index=F}function x(){let b=r.newAttributes;for(let w=0,V=b.length;w<V;w++)b[w]=0}function p(b){m(b,0)}function m(b,w){let V=r.newAttributes,F=r.enabledAttributes,q=r.attributeDivisors;V[b]=1,F[b]===0&&(i.enableVertexAttribArray(b),F[b]=1),q[b]!==w&&(i.vertexAttribDivisor(b,w),q[b]=w)}function y(){let b=r.newAttributes,w=r.enabledAttributes;for(let V=0,F=w.length;V<F;V++)w[V]!==b[V]&&(i.disableVertexAttribArray(V),w[V]=0)}function M(b,w,V,F,q,se,K){K===!0?i.vertexAttribIPointer(b,w,V,q,se):i.vertexAttribPointer(b,w,V,F,q,se)}function _(b,w,V,F){x();let q=F.attributes,se=V.getAttributes(),K=w.defaultAttributeValues;for(let B in se){let Q=se[B];if(Q.location>=0){let le=q[B];if(le===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(le=b.instanceColor)),le!==void 0){let Pe=le.normalized,Me=le.itemSize,vt=e.get(le);if(vt===void 0)continue;let Ot=vt.buffer,ae=vt.type,fe=vt.bytesPerElement,He=ae===i.INT||ae===i.UNSIGNED_INT||le.gpuType===iu;if(le.isInterleavedBufferAttribute){let ke=le.data,ft=ke.stride,ct=le.offset;if(ke.isInstancedInterleavedBuffer){for(let Rt=0;Rt<Q.locationSize;Rt++)m(Q.location+Rt,ke.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let Rt=0;Rt<Q.locationSize;Rt++)p(Q.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let Rt=0;Rt<Q.locationSize;Rt++)M(Q.location+Rt,Me/Q.locationSize,ae,Pe,ft*fe,(ct+Me/Q.locationSize*Rt)*fe,He)}else{if(le.isInstancedBufferAttribute){for(let ke=0;ke<Q.locationSize;ke++)m(Q.location+ke,le.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ke=0;ke<Q.locationSize;ke++)p(Q.location+ke);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let ke=0;ke<Q.locationSize;ke++)M(Q.location+ke,Me/Q.locationSize,ae,Pe,Me*fe,Me/Q.locationSize*ke*fe,He)}}else if(K!==void 0){let Pe=K[B];if(Pe!==void 0)switch(Pe.length){case 2:i.vertexAttrib2fv(Q.location,Pe);break;case 3:i.vertexAttrib3fv(Q.location,Pe);break;case 4:i.vertexAttrib4fv(Q.location,Pe);break;default:i.vertexAttrib1fv(Q.location,Pe)}}}}y()}function I(){U();for(let b in n){let w=n[b];for(let V in w){let F=w[V];for(let q in F)h(F[q].object),delete F[q];delete w[V]}delete n[b]}}function C(b){if(n[b.id]===void 0)return;let w=n[b.id];for(let V in w){let F=w[V];for(let q in F)h(F[q].object),delete F[q];delete w[V]}delete n[b.id]}function A(b){for(let w in n){let V=n[w];if(V[b.id]===void 0)continue;let F=V[b.id];for(let q in F)h(F[q].object),delete F[q];delete V[b.id]}}function U(){J(),a=!0,r!==s&&(r=s,c(r.object))}function J(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:J,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:p,disableUnusedAttributes:y}}function Ox(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x];for(let x=0;x<d.length;x++)t.update(g,n,d[x])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function zx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==qn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let U=A===Na&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Yi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Mi&&!U)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){let A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:I,maxSamples:C}}function Bx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new vi,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let y=r?0:n,M=y*4,_=m.clippingState||null;l.value=_,_=h(g,d,M,f);for(let I=0;I!==M;++I)_[I]=t[I];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=f+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,_=f;M!==x;++M,_+=4)a.copy(u[M]).applyMatrix4(y,o),a.normal.toArray(p,_),p[_+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Hx(i){let e=new WeakMap;function t(a,o){return o===Xc?a.mapping=Pr:o===Yc&&(a.mapping=Ir),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Xc||o===Yc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Eh(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var zr=class extends Yo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Er=4,yf=[.125,.215,.35,.446,.526,.582],Gs=20,bc=new zr,_f=new ot,Mc=null,Sc=0,Ec=0,wc=!1,Hs=(1+Math.sqrt(5))/2,br=1/Hs,vf=[new L(-Hs,br,0),new L(Hs,br,0),new L(-br,0,Hs),new L(br,0,Hs),new L(0,Hs,-br),new L(0,Hs,br),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],qo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Mc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mc,Sc,Ec),this._renderer.xr.enabled=wc,e.scissorTest=!1,yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pr||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:Na,format:qn,colorSpace:Nn,depthBuffer:!1},s=bf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vx(r)),this._blurMaterial=Gx(r,e,t)}return s}_compileMaterial(e){let t=new Ee(this._lodPlanes[0],e);this._renderer.compile(t,bc)}_sceneToCubeUV(e,t,n,s){let o=new mn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(_f),h.toneMapping=xs,h.autoClear=!1;let f=new Gt({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),g=new Ee(new Qt,f),x=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,x=!0):(f.color.copy(_f),x=!0);for(let m=0;m<6;m++){let y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let M=this._cubeSize;yo(s,y*M,m>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Pr||e.mapping===Ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ee(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;yo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,bc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vf[(s-r-1)%vf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ee(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gs-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):Gs;p>Gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gs}`);let m=[],y=0;for(let A=0;A<Gs;++A){let U=A/x,J=Math.exp(-U*U/2);m.push(J),A===0?y+=J:A<p&&(y+=2*J)}for(let A=0;A<m.length;A++)m[A]=m[A]/y;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;let _=this._sizeLods[s],I=3*_*(s>M-Er?s-M+Er:0),C=4*(this._cubeSize-_);yo(t,I,C,3*_,2*_),l.setRenderTarget(t),l.render(u,bc)}};function Vx(i){let e=[],t=[],n=[],s=i,r=i-Er+1+yf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Er?l=yf[a-i+Er-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,p=2,m=1,y=new Float32Array(x*g*f),M=new Float32Array(p*g*f),_=new Float32Array(m*g*f);for(let C=0;C<f;C++){let A=C%3*2/3-1,U=C>2?0:-1,J=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];y.set(J,x*g*C),M.set(d,p*g*C);let b=[C,C,C,C,C,C];_.set(b,m*g*C)}let I=new Zt;I.setAttribute("position",new Lt(y,x)),I.setAttribute("uv",new Lt(M,p)),I.setAttribute("faceIndex",new Lt(_,m)),e.push(I),s>Er&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bf(i,e,t){let n=new $i(i,e,t);return n.texture.mapping=yl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Gx(i,e,t){let n=new Float32Array(Gs),s=new L(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:du(),fragmentShader:`

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
		`,blending:gs,depthTest:!1,depthWrite:!1})}function Mf(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:gs,depthTest:!1,depthWrite:!1})}function Sf(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function du(){return`

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
	`}function Wx(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Xc||l===Yc,h=l===Pr||l===Ir;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new qo(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new qo(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Xx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ko("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Yx(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)e.remove(x[p])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let p=0,m=x.length;p<m;p++)e.update(x[p],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let M=0,_=y.length;M<_;M+=3){let I=y[M+0],C=y[M+1],A=y[M+2];d.push(I,C,C,A,A,I)}}else if(g!==void 0){let y=g.array;x=g.version;for(let M=0,_=y.length/3-1;M<_;M+=3){let I=M+0,C=M+1,A=M+2;d.push(I,C,C,A,A,I)}}else return;let p=new(Sp(d)?Xo:Wo)(d,1);p.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function $x(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function u(d,f,g,x){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let m=0;for(let y=0;y<g;y++)m+=f[y];for(let y=0;y<x.length;y++)t.update(m,n,x[y])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function qx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Kx(i,e,t){let n=new WeakMap,s=new $t;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let J=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",J)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let _=o.attributes.position.count*M,I=1;_>e.maxTextureSize&&(I=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let C=new Float32Array(_*I*4*u),A=new Vo(C,_,I,u);A.type=Mi,A.needsUpdate=!0;let U=M*4;for(let b=0;b<u;b++){let w=p[b],V=m[b],F=y[b],q=_*I*4*b;for(let se=0;se<w.count;se++){let K=se*U;f===!0&&(s.fromBufferAttribute(w,se),C[q+K+0]=s.x,C[q+K+1]=s.y,C[q+K+2]=s.z,C[q+K+3]=0),g===!0&&(s.fromBufferAttribute(V,se),C[q+K+4]=s.x,C[q+K+5]=s.y,C[q+K+6]=s.z,C[q+K+7]=0),x===!0&&(s.fromBufferAttribute(F,se),C[q+K+8]=s.x,C[q+K+9]=s.y,C[q+K+10]=s.z,C[q+K+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new ze(_,I)},n.set(o,d),o.addEventListener("dispose",J)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Zx(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ko=class extends Ln{constructor(e,t,n,s,r,a,o,l,c,h=wr){if(h!==wr&&h!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===wr&&(n=Xs),n===void 0&&h===Nr&&(n=Lr),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:On,this.minFilter=l!==void 0?l:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Tp=new Ln,Ef=new Ko(1,1),Rp=new Vo,Cp=new Mh,Pp=new $o,wf=[],Af=[],Tf=new Float32Array(16),Rf=new Float32Array(9),Cf=new Float32Array(4);function qr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=wf[s];if(r===void 0&&(r=new Float32Array(s),wf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function En(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ml(i,e){let t=Af[e];t===void 0&&(t=new Int32Array(e),Af[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Jx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;i.uniform2fv(this.addr,e),En(t,e)}}function Qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;i.uniform3fv(this.addr,e),En(t,e)}}function ey(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;i.uniform4fv(this.addr,e),En(t,e)}}function ty(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),En(t,e)}else{if(Sn(t,n))return;Cf.set(n),i.uniformMatrix2fv(this.addr,!1,Cf),En(t,n)}}function ny(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),En(t,e)}else{if(Sn(t,n))return;Rf.set(n),i.uniformMatrix3fv(this.addr,!1,Rf),En(t,n)}}function iy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),En(t,e)}else{if(Sn(t,n))return;Tf.set(n),i.uniformMatrix4fv(this.addr,!1,Tf),En(t,n)}}function sy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ry(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;i.uniform2iv(this.addr,e),En(t,e)}}function ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;i.uniform3iv(this.addr,e),En(t,e)}}function oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;i.uniform4iv(this.addr,e),En(t,e)}}function ly(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function cy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;i.uniform2uiv(this.addr,e),En(t,e)}}function hy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;i.uniform3uiv(this.addr,e),En(t,e)}}function uy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;i.uniform4uiv(this.addr,e),En(t,e)}}function dy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ef.compareFunction=Mp,r=Ef):r=Tp,t.setTexture2D(e||r,s)}function fy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Cp,s)}function py(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Pp,s)}function my(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Rp,s)}function gy(i){switch(i){case 5126:return Jx;case 35664:return jx;case 35665:return Qx;case 35666:return ey;case 35674:return ty;case 35675:return ny;case 35676:return iy;case 5124:case 35670:return sy;case 35667:case 35671:return ry;case 35668:case 35672:return ay;case 35669:case 35673:return oy;case 5125:return ly;case 36294:return cy;case 36295:return hy;case 36296:return uy;case 35678:case 36198:case 36298:case 36306:case 35682:return dy;case 35679:case 36299:case 36307:return fy;case 35680:case 36300:case 36308:case 36293:return py;case 36289:case 36303:case 36311:case 36292:return my}}function xy(i,e){i.uniform1fv(this.addr,e)}function yy(i,e){let t=qr(e,this.size,2);i.uniform2fv(this.addr,t)}function _y(i,e){let t=qr(e,this.size,3);i.uniform3fv(this.addr,t)}function vy(i,e){let t=qr(e,this.size,4);i.uniform4fv(this.addr,t)}function by(i,e){let t=qr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function My(i,e){let t=qr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Sy(i,e){let t=qr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ey(i,e){i.uniform1iv(this.addr,e)}function wy(i,e){i.uniform2iv(this.addr,e)}function Ay(i,e){i.uniform3iv(this.addr,e)}function Ty(i,e){i.uniform4iv(this.addr,e)}function Ry(i,e){i.uniform1uiv(this.addr,e)}function Cy(i,e){i.uniform2uiv(this.addr,e)}function Py(i,e){i.uniform3uiv(this.addr,e)}function Iy(i,e){i.uniform4uiv(this.addr,e)}function Ly(i,e,t){let n=this.cache,s=e.length,r=Ml(t,s);Sn(n,r)||(i.uniform1iv(this.addr,r),En(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Tp,r[a])}function Ny(i,e,t){let n=this.cache,s=e.length,r=Ml(t,s);Sn(n,r)||(i.uniform1iv(this.addr,r),En(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Cp,r[a])}function Dy(i,e,t){let n=this.cache,s=e.length,r=Ml(t,s);Sn(n,r)||(i.uniform1iv(this.addr,r),En(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Pp,r[a])}function Uy(i,e,t){let n=this.cache,s=e.length,r=Ml(t,s);Sn(n,r)||(i.uniform1iv(this.addr,r),En(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Rp,r[a])}function ky(i){switch(i){case 5126:return xy;case 35664:return yy;case 35665:return _y;case 35666:return vy;case 35674:return by;case 35675:return My;case 35676:return Sy;case 5124:case 35670:return Ey;case 35667:case 35671:return wy;case 35668:case 35672:return Ay;case 35669:case 35673:return Ty;case 5125:return Ry;case 36294:return Cy;case 36295:return Py;case 36296:return Iy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ly;case 35679:case 36299:case 36307:return Ny;case 35680:case 36300:case 36308:case 36293:return Dy;case 36289:case 36303:case 36311:case 36292:return Uy}}var wh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gy(t.type)}},Ah=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ky(t.type)}},Th=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ac=/(\w+)(\])?(\[|\.)?/g;function Pf(i,e){i.seq.push(e),i.map[e.id]=e}function Fy(i,e,t){let n=i.name,s=n.length;for(Ac.lastIndex=0;;){let r=Ac.exec(n),a=Ac.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Pf(t,c===void 0?new wh(o,i,e):new Ah(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Th(o),Pf(t,u)),t=u}}}var Rr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Fy(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function If(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Oy=37297,zy=0;function By(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Hy(i){let e=Yt.getPrimaries(Yt.workingColorSpace),t=Yt.getPrimaries(i),n;switch(e===t?n="":e===zo&&t===Oo?n="LinearDisplayP3ToLinearSRGB":e===Oo&&t===zo&&(n="LinearSRGBToLinearDisplayP3"),i){case Nn:case vl:return[n,"LinearTransferOETF"];case _n:case hu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Lf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+By(i.getShaderSource(e),a)}else return s}function Vy(i,e){let t=Hy(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Gy(i,e){let t;switch(e){case Jm:t="Linear";break;case jm:t="Reinhard";break;case Qm:t="Cineon";break;case e0:t="ACESFilmic";break;case n0:t="AgX";break;case i0:t="Neutral";break;case t0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var _o=new L;function Wy(){Yt.getLuminanceCoefficients(_o);let i=_o.x.toFixed(4),e=_o.y.toFixed(4),t=_o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function Yy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $y(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function pa(i){return i!==""}function Nf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Df(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var qy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(i){return i.replace(qy,Zy)}var Ky=new Map;function Zy(i,e){let t=Pt[e];if(t===void 0){let n=Ky.get(e);if(n!==void 0)t=Pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rh(t)}var Jy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uf(i){return i.replace(Jy,jy)}function jy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Qy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Pm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function e_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pr:case Ir:e="ENVMAP_TYPE_CUBE";break;case yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function t_(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ir&&(e="ENVMAP_MODE_REFRACTION"),e}function n_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cp:e="ENVMAP_BLENDING_MULTIPLY";break;case Km:e="ENVMAP_BLENDING_MIX";break;case Zm:e="ENVMAP_BLENDING_ADD";break}return e}function i_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function s_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Qy(t),c=e_(t),h=t_(t),u=n_(t),d=i_(t),f=Xy(t),g=Yy(r),x=s.createProgram(),p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pa).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pa).join(`
`),m.length>0&&(m+=`
`)):(p=[kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),m=[kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xs?"#define TONE_MAPPING":"",t.toneMapping!==xs?Pt.tonemapping_pars_fragment:"",t.toneMapping!==xs?Gy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,Vy("linearToOutputTexel",t.outputColorSpace),Wy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pa).join(`
`)),a=Rh(a),a=Nf(a,t),a=Df(a,t),o=Rh(o),o=Nf(o,t),o=Df(o,t),a=Uf(a),o=Uf(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===jd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=y+p+a,_=y+m+o,I=If(s,s.VERTEX_SHADER,M),C=If(s,s.FRAGMENT_SHADER,_);s.attachShader(x,I),s.attachShader(x,C),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(w){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(I).trim(),q=s.getShaderInfoLog(C).trim(),se=!0,K=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,I,C);else{let B=Lf(s,I,"vertex"),Q=Lf(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+V+`
`+B+`
`+Q)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(F===""||q==="")&&(K=!1);K&&(w.diagnostics={runnable:se,programLog:V,vertexShader:{log:F,prefix:p},fragmentShader:{log:q,prefix:m}})}s.deleteShader(I),s.deleteShader(C),U=new Rr(s,x),J=$y(s,x)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let J;this.getAttributes=function(){return J===void 0&&A(this),J};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,Oy)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=C,this}var r_=0,Ch=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ph(e),t.set(e,n)),n}},Ph=class{constructor(e){this.id=r_++,this.code=e,this.usedTimes=0}};function a_(i,e,t,n,s,r,a){let o=new Go,l=new Ch,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,w,V,F,q){let se=F.fog,K=q.geometry,B=b.isMeshStandardMaterial?F.environment:null,Q=(b.isMeshStandardMaterial?t:e).get(b.envMap||B),le=Q&&Q.mapping===yl?Q.image.height:null,Pe=x[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));let Me=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,vt=Me!==void 0?Me.length:0,Ot=0;K.morphAttributes.position!==void 0&&(Ot=1),K.morphAttributes.normal!==void 0&&(Ot=2),K.morphAttributes.color!==void 0&&(Ot=3);let ae,fe,He,ke;if(Pe){let k=Ti[Pe];ae=k.vertexShader,fe=k.fragmentShader}else ae=b.vertexShader,fe=b.fragmentShader,l.update(b),He=l.getVertexShaderID(b),ke=l.getFragmentShaderID(b);let ft=i.getRenderTarget(),ct=q.isInstancedMesh===!0,Rt=q.isBatchedMesh===!0,Nt=!!b.map,Ct=!!b.matcap,D=!!Q,an=!!b.aoMap,mt=!!b.lightMap,Et=!!b.bumpMap,Xe=!!b.normalMap,bt=!!b.displacementMap,ue=!!b.emissiveMap,P=!!b.metalnessMap,E=!!b.roughnessMap,Y=b.anisotropy>0,oe=b.clearcoat>0,he=b.dispersion>0,W=b.iridescence>0,Fe=b.sheen>0,we=b.transmission>0,Se=Y&&!!b.anisotropyMap,Ze=oe&&!!b.clearcoatMap,de=oe&&!!b.clearcoatNormalMap,Ne=oe&&!!b.clearcoatRoughnessMap,Je=W&&!!b.iridescenceMap,Ke=W&&!!b.iridescenceThicknessMap,Ie=Fe&&!!b.sheenColorMap,_t=Fe&&!!b.sheenRoughnessMap,Qe=!!b.specularMap,wt=!!b.specularColorMap,O=!!b.specularIntensityMap,Ue=we&&!!b.transmissionMap,ee=we&&!!b.thicknessMap,re=!!b.gradientMap,Re=!!b.alphaMap,ve=b.alphaTest>0,At=!!b.alphaHash,tt=!!b.extensions,vn=xs;b.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(vn=i.toneMapping);let Dt={shaderID:Pe,shaderType:b.type,shaderName:b.name,vertexShader:ae,fragmentShader:fe,defines:b.defines,customVertexShaderID:He,customFragmentShaderID:ke,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Rt,batchingColor:Rt&&q._colorsTexture!==null,instancing:ct,instancingColor:ct&&q.instanceColor!==null,instancingMorph:ct&&q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Nn,alphaToCoverage:!!b.alphaToCoverage,map:Nt,matcap:Ct,envMap:D,envMapMode:D&&Q.mapping,envMapCubeUVHeight:le,aoMap:an,lightMap:mt,bumpMap:Et,normalMap:Xe,displacementMap:f&&bt,emissiveMap:ue,normalMapObjectSpace:Xe&&b.normalMapType===l0,normalMapTangentSpace:Xe&&b.normalMapType===bp,metalnessMap:P,roughnessMap:E,anisotropy:Y,anisotropyMap:Se,clearcoat:oe,clearcoatMap:Ze,clearcoatNormalMap:de,clearcoatRoughnessMap:Ne,dispersion:he,iridescence:W,iridescenceMap:Je,iridescenceThicknessMap:Ke,sheen:Fe,sheenColorMap:Ie,sheenRoughnessMap:_t,specularMap:Qe,specularColorMap:wt,specularIntensityMap:O,transmission:we,transmissionMap:Ue,thicknessMap:ee,gradientMap:re,opaque:b.transparent===!1&&b.blending===Xi&&b.alphaToCoverage===!1,alphaMap:Re,alphaTest:ve,alphaHash:At,combine:b.combine,mapUv:Nt&&p(b.map.channel),aoMapUv:an&&p(b.aoMap.channel),lightMapUv:mt&&p(b.lightMap.channel),bumpMapUv:Et&&p(b.bumpMap.channel),normalMapUv:Xe&&p(b.normalMap.channel),displacementMapUv:bt&&p(b.displacementMap.channel),emissiveMapUv:ue&&p(b.emissiveMap.channel),metalnessMapUv:P&&p(b.metalnessMap.channel),roughnessMapUv:E&&p(b.roughnessMap.channel),anisotropyMapUv:Se&&p(b.anisotropyMap.channel),clearcoatMapUv:Ze&&p(b.clearcoatMap.channel),clearcoatNormalMapUv:de&&p(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&p(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&p(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&p(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&p(b.sheenColorMap.channel),sheenRoughnessMapUv:_t&&p(b.sheenRoughnessMap.channel),specularMapUv:Qe&&p(b.specularMap.channel),specularColorMapUv:wt&&p(b.specularColorMap.channel),specularIntensityMapUv:O&&p(b.specularIntensityMap.channel),transmissionMapUv:Ue&&p(b.transmissionMap.channel),thicknessMapUv:ee&&p(b.thicknessMap.channel),alphaMapUv:Re&&p(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Xe||Y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!K.attributes.uv&&(Nt||Re),fog:!!se,useFog:b.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:q.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Ot,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:vn,decodeVideoTexture:Nt&&b.map.isVideoTexture===!0&&Yt.getTransfer(b.map.colorSpace)===ln,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===hn,flipSided:b.side===Kn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:tt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&b.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function y(b){let w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(let V in b.defines)w.push(V),w.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(M(w,b),_(w,b),w.push(i.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function M(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function _(b,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),b.push(o.mask)}function I(b){let w=x[b.type],V;if(w){let F=Ti[w];V=Z0.clone(F.uniforms)}else V=b.uniforms;return V}function C(b,w){let V;for(let F=0,q=h.length;F<q;F++){let se=h[F];if(se.cacheKey===w){V=se,++V.usedTimes;break}}return V===void 0&&(V=new s_(i,w,b,r),h.push(V)),V}function A(b){if(--b.usedTimes===0){let w=h.indexOf(b);h[w]=h[h.length-1],h.pop(),b.destroy()}}function U(b){l.remove(b)}function J(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:I,acquireProgram:C,releaseProgram:A,releaseShaderCache:U,programs:h,dispose:J}}function o_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function l_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ff(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Of(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,g,x,p){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},i[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=p),e++,m}function o(u,d,f,g,x,p){let m=a(u,d,f,g,x,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(u,d,f,g,x,p){let m=a(u,d,f,g,x,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||l_),n.length>1&&n.sort(d||Ff),s.length>1&&s.sort(d||Ff)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function c_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Of,i.set(n,[a])):s>=r.length?(a=new Of,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function h_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ot};break;case"SpotLight":t={position:new L,direction:new L,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function u_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var d_=0;function f_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function p_(i){let e=new h_,t=u_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new yt,a=new yt;function o(c){let h=0,u=0,d=0;for(let J=0;J<9;J++)n.probe[J].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,y=0,M=0,_=0,I=0,C=0,A=0;c.sort(f_);for(let J=0,b=c.length;J<b;J++){let w=c[J],V=w.color,F=w.intensity,q=w.distance,se=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=V.r*F,u+=V.g*F,d+=V.b*F;else if(w.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(w.sh.coefficients[K],F);A++}else if(w.isDirectionalLight){let K=e.get(w);if(K.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let B=w.shadow,Q=t.get(w);Q.shadowIntensity=B.intensity,Q.shadowBias=B.bias,Q.shadowNormalBias=B.normalBias,Q.shadowRadius=B.radius,Q.shadowMapSize=B.mapSize,n.directionalShadow[f]=Q,n.directionalShadowMap[f]=se,n.directionalShadowMatrix[f]=w.shadow.matrix,y++}n.directional[f]=K,f++}else if(w.isSpotLight){let K=e.get(w);K.position.setFromMatrixPosition(w.matrixWorld),K.color.copy(V).multiplyScalar(F),K.distance=q,K.coneCos=Math.cos(w.angle),K.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),K.decay=w.decay,n.spot[x]=K;let B=w.shadow;if(w.map&&(n.spotLightMap[I]=w.map,I++,B.updateMatrices(w),w.castShadow&&C++),n.spotLightMatrix[x]=B.matrix,w.castShadow){let Q=t.get(w);Q.shadowIntensity=B.intensity,Q.shadowBias=B.bias,Q.shadowNormalBias=B.normalBias,Q.shadowRadius=B.radius,Q.shadowMapSize=B.mapSize,n.spotShadow[x]=Q,n.spotShadowMap[x]=se,_++}x++}else if(w.isRectAreaLight){let K=e.get(w);K.color.copy(V).multiplyScalar(F),K.halfWidth.set(w.width*.5,0,0),K.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=K,p++}else if(w.isPointLight){let K=e.get(w);if(K.color.copy(w.color).multiplyScalar(w.intensity),K.distance=w.distance,K.decay=w.decay,w.castShadow){let B=w.shadow,Q=t.get(w);Q.shadowIntensity=B.intensity,Q.shadowBias=B.bias,Q.shadowNormalBias=B.normalBias,Q.shadowRadius=B.radius,Q.shadowMapSize=B.mapSize,Q.shadowCameraNear=B.camera.near,Q.shadowCameraFar=B.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=se,n.pointShadowMatrix[g]=w.shadow.matrix,M++}n.point[g]=K,g++}else if(w.isHemisphereLight){let K=e.get(w);K.skyColor.copy(w.color).multiplyScalar(F),K.groundColor.copy(w.groundColor).multiplyScalar(F),n.hemi[m]=K,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let U=n.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==p||U.hemiLength!==m||U.numDirectionalShadows!==y||U.numPointShadows!==M||U.numSpotShadows!==_||U.numSpotMaps!==I||U.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+I-C,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,U.directionalLength=f,U.pointLength=g,U.spotLength=x,U.rectAreaLength=p,U.hemiLength=m,U.numDirectionalShadows=y,U.numPointShadows=M,U.numSpotShadows=_,U.numSpotMaps=I,U.numLightProbes=A,n.version=d_++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let M=c[m];if(M.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),u++}else if(M.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),f++}else if(M.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:n}}function zf(i){let e=new p_(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function m_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new zf(i),e.set(s,[o])):r>=a.length?(o=new zf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ih=class extends ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=a0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Lh=class extends ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},g_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x_=`uniform sampler2D shadow_pass;
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
}`;function y_(i,e,t){let n=new Sa,s=new ze,r=new ze,a=new $t,o=new Ih({depthPacking:o0}),l=new Lh,c={},h=t.maxTextureSize,u={[Ci]:Kn,[Kn]:Ci,[hn]:hn},d=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:g_,fragmentShader:x_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Zt;g.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ee(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lp;let m=this.type;this.render=function(C,A,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;let J=i.getRenderTarget(),b=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),V=i.state;V.setBlending(gs),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let F=m!==Vi&&this.type===Vi,q=m===Vi&&this.type!==Vi;for(let se=0,K=C.length;se<K;se++){let B=C[se],Q=B.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let le=Q.getFrameExtents();if(s.multiply(le),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/le.x),s.x=r.x*le.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/le.y),s.y=r.y*le.y,Q.mapSize.y=r.y)),Q.map===null||F===!0||q===!0){let Me=this.type!==Vi?{minFilter:On,magFilter:On}:{};Q.map!==null&&Q.map.dispose(),Q.map=new $i(s.x,s.y,Me),Q.map.texture.name=B.name+".shadowMap",Q.camera.updateProjectionMatrix()}i.setRenderTarget(Q.map),i.clear();let Pe=Q.getViewportCount();for(let Me=0;Me<Pe;Me++){let vt=Q.getViewport(Me);a.set(r.x*vt.x,r.y*vt.y,r.x*vt.z,r.y*vt.w),V.viewport(a),Q.updateMatrices(B,Me),n=Q.getFrustum(),_(A,U,Q.camera,B,this.type)}Q.isPointLightShadow!==!0&&this.type===Vi&&y(Q,U),Q.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(J,b,w)};function y(C,A){let U=e.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new $i(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,U,d,x,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,U,f,x,null)}function M(C,A,U,J){let b=null,w=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)b=w;else if(b=U.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let V=b.uuid,F=A.uuid,q=c[V];q===void 0&&(q={},c[V]=q);let se=q[F];se===void 0&&(se=b.clone(),q[F]=se,A.addEventListener("dispose",I)),b=se}if(b.visible=A.visible,b.wireframe=A.wireframe,J===Vi?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let V=i.properties.get(b);V.light=U}return b}function _(C,A,U,J,b){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===Vi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);let F=e.update(C),q=C.material;if(Array.isArray(q)){let se=F.groups;for(let K=0,B=se.length;K<B;K++){let Q=se[K],le=q[Q.materialIndex];if(le&&le.visible){let Pe=M(C,le,J,b);C.onBeforeShadow(i,C,A,U,F,Pe,Q),i.renderBufferDirect(U,null,F,Pe,C,Q),C.onAfterShadow(i,C,A,U,F,Pe,Q)}}}else if(q.visible){let se=M(C,q,J,b);C.onBeforeShadow(i,C,A,U,F,se,null),i.renderBufferDirect(U,null,F,se,C,null),C.onAfterShadow(i,C,A,U,F,se,null)}}let V=C.children;for(let F=0,q=V.length;F<q;F++)_(V[F],A,U,J,b)}function I(C){C.target.removeEventListener("dispose",I);for(let U in c){let J=c[U],b=C.target.uuid;b in J&&(J[b].dispose(),delete J[b])}}}var __={[Oc]:zc,[Bc]:Gc,[Hc]:Wc,[Cr]:Vc,[zc]:Oc,[Gc]:Bc,[Wc]:Hc,[Vc]:Cr};function v_(i){function e(){let O=!1,Ue=new $t,ee=null,re=new $t(0,0,0,0);return{setMask:function(Re){ee!==Re&&!O&&(i.colorMask(Re,Re,Re,Re),ee=Re)},setLocked:function(Re){O=Re},setClear:function(Re,ve,At,tt,vn){vn===!0&&(Re*=tt,ve*=tt,At*=tt),Ue.set(Re,ve,At,tt),re.equals(Ue)===!1&&(i.clearColor(Re,ve,At,tt),re.copy(Ue))},reset:function(){O=!1,ee=null,re.set(-1,0,0,0)}}}function t(){let O=!1,Ue=!1,ee=null,re=null,Re=null;return{setReversed:function(ve){Ue=ve},setTest:function(ve){ve?He(i.DEPTH_TEST):ke(i.DEPTH_TEST)},setMask:function(ve){ee!==ve&&!O&&(i.depthMask(ve),ee=ve)},setFunc:function(ve){if(Ue&&(ve=__[ve]),re!==ve){switch(ve){case Oc:i.depthFunc(i.NEVER);break;case zc:i.depthFunc(i.ALWAYS);break;case Bc:i.depthFunc(i.LESS);break;case Cr:i.depthFunc(i.LEQUAL);break;case Hc:i.depthFunc(i.EQUAL);break;case Vc:i.depthFunc(i.GEQUAL);break;case Gc:i.depthFunc(i.GREATER);break;case Wc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=ve}},setLocked:function(ve){O=ve},setClear:function(ve){Re!==ve&&(i.clearDepth(ve),Re=ve)},reset:function(){O=!1,ee=null,re=null,Re=null}}}function n(){let O=!1,Ue=null,ee=null,re=null,Re=null,ve=null,At=null,tt=null,vn=null;return{setTest:function(Dt){O||(Dt?He(i.STENCIL_TEST):ke(i.STENCIL_TEST))},setMask:function(Dt){Ue!==Dt&&!O&&(i.stencilMask(Dt),Ue=Dt)},setFunc:function(Dt,k,xe){(ee!==Dt||re!==k||Re!==xe)&&(i.stencilFunc(Dt,k,xe),ee=Dt,re=k,Re=xe)},setOp:function(Dt,k,xe){(ve!==Dt||At!==k||tt!==xe)&&(i.stencilOp(Dt,k,xe),ve=Dt,At=k,tt=xe)},setLocked:function(Dt){O=Dt},setClear:function(Dt){vn!==Dt&&(i.clearStencil(Dt),vn=Dt)},reset:function(){O=!1,Ue=null,ee=null,re=null,Re=null,ve=null,At=null,tt=null,vn=null}}}let s=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,g=!1,x=null,p=null,m=null,y=null,M=null,_=null,I=null,C=new ot(0,0,0),A=0,U=!1,J=null,b=null,w=null,V=null,F=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),se=!1,K=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(B)[1]),se=K>=1):B.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),se=K>=2);let Q=null,le={},Pe=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),vt=new $t().fromArray(Pe),Ot=new $t().fromArray(Me);function ae(O,Ue,ee,re){let Re=new Uint8Array(4),ve=i.createTexture();i.bindTexture(O,ve),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<ee;At++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(Ue,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(Ue+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return ve}let fe={};fe[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),He(i.DEPTH_TEST),r.setFunc(Cr),mt(!1),Et(Wd),He(i.CULL_FACE),D(gs);function He(O){c[O]!==!0&&(i.enable(O),c[O]=!0)}function ke(O){c[O]!==!1&&(i.disable(O),c[O]=!1)}function ft(O,Ue){return h[O]!==Ue?(i.bindFramebuffer(O,Ue),h[O]=Ue,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ue),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ue),!0):!1}function ct(O,Ue){let ee=d,re=!1;if(O){ee=u.get(Ue),ee===void 0&&(ee=[],u.set(Ue,ee));let Re=O.textures;if(ee.length!==Re.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let ve=0,At=Re.length;ve<At;ve++)ee[ve]=i.COLOR_ATTACHMENT0+ve;ee.length=Re.length,re=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,re=!0);re&&i.drawBuffers(ee)}function Rt(O){return f!==O?(i.useProgram(O),f=O,!0):!1}let Nt={[Vs]:i.FUNC_ADD,[Lm]:i.FUNC_SUBTRACT,[Nm]:i.FUNC_REVERSE_SUBTRACT};Nt[Dm]=i.MIN,Nt[Um]=i.MAX;let Ct={[km]:i.ZERO,[Fm]:i.ONE,[Om]:i.SRC_COLOR,[kc]:i.SRC_ALPHA,[Wm]:i.SRC_ALPHA_SATURATE,[Vm]:i.DST_COLOR,[Bm]:i.DST_ALPHA,[zm]:i.ONE_MINUS_SRC_COLOR,[Fc]:i.ONE_MINUS_SRC_ALPHA,[Gm]:i.ONE_MINUS_DST_COLOR,[Hm]:i.ONE_MINUS_DST_ALPHA,[Xm]:i.CONSTANT_COLOR,[Ym]:i.ONE_MINUS_CONSTANT_COLOR,[$m]:i.CONSTANT_ALPHA,[qm]:i.ONE_MINUS_CONSTANT_ALPHA};function D(O,Ue,ee,re,Re,ve,At,tt,vn,Dt){if(O===gs){g===!0&&(ke(i.BLEND),g=!1);return}if(g===!1&&(He(i.BLEND),g=!0),O!==Im){if(O!==x||Dt!==U){if((p!==Vs||M!==Vs)&&(i.blendEquation(i.FUNC_ADD),p=Vs,M=Vs),Dt)switch(O){case Xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.ONE,i.ONE);break;case Xd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}m=null,y=null,_=null,I=null,C.set(0,0,0),A=0,x=O,U=Dt}return}Re=Re||Ue,ve=ve||ee,At=At||re,(Ue!==p||Re!==M)&&(i.blendEquationSeparate(Nt[Ue],Nt[Re]),p=Ue,M=Re),(ee!==m||re!==y||ve!==_||At!==I)&&(i.blendFuncSeparate(Ct[ee],Ct[re],Ct[ve],Ct[At]),m=ee,y=re,_=ve,I=At),(tt.equals(C)===!1||vn!==A)&&(i.blendColor(tt.r,tt.g,tt.b,vn),C.copy(tt),A=vn),x=O,U=!1}function an(O,Ue){O.side===hn?ke(i.CULL_FACE):He(i.CULL_FACE);let ee=O.side===Kn;Ue&&(ee=!ee),mt(ee),O.blending===Xi&&O.transparent===!1?D(gs):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),s.setMask(O.colorWrite);let re=O.stencilWrite;a.setTest(re),re&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),bt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?He(i.SAMPLE_ALPHA_TO_COVERAGE):ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(O){J!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),J=O)}function Et(O){O!==Rm?(He(i.CULL_FACE),O!==b&&(O===Wd?i.cullFace(i.BACK):O===Cm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ke(i.CULL_FACE),b=O}function Xe(O){O!==w&&(se&&i.lineWidth(O),w=O)}function bt(O,Ue,ee){O?(He(i.POLYGON_OFFSET_FILL),(V!==Ue||F!==ee)&&(i.polygonOffset(Ue,ee),V=Ue,F=ee)):ke(i.POLYGON_OFFSET_FILL)}function ue(O){O?He(i.SCISSOR_TEST):ke(i.SCISSOR_TEST)}function P(O){O===void 0&&(O=i.TEXTURE0+q-1),Q!==O&&(i.activeTexture(O),Q=O)}function E(O,Ue,ee){ee===void 0&&(Q===null?ee=i.TEXTURE0+q-1:ee=Q);let re=le[ee];re===void 0&&(re={type:void 0,texture:void 0},le[ee]=re),(re.type!==O||re.texture!==Ue)&&(Q!==ee&&(i.activeTexture(ee),Q=ee),i.bindTexture(O,Ue||fe[O]),re.type=O,re.texture=Ue)}function Y(){let O=le[Q];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Fe(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ze(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Je(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ke(O){vt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),vt.copy(O))}function Ie(O){Ot.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Ot.copy(O))}function _t(O,Ue){let ee=l.get(Ue);ee===void 0&&(ee=new WeakMap,l.set(Ue,ee));let re=ee.get(O);re===void 0&&(re=i.getUniformBlockIndex(Ue,O.name),ee.set(O,re))}function Qe(O,Ue){let re=l.get(Ue).get(O);o.get(Ue)!==re&&(i.uniformBlockBinding(Ue,re,O.__bindingPointIndex),o.set(Ue,re))}function wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},Q=null,le={},h={},u=new WeakMap,d=[],f=null,g=!1,x=null,p=null,m=null,y=null,M=null,_=null,I=null,C=new ot(0,0,0),A=0,U=!1,J=null,b=null,w=null,V=null,F=null,vt.set(0,0,i.canvas.width,i.canvas.height),Ot.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:He,disable:ke,bindFramebuffer:ft,drawBuffers:ct,useProgram:Rt,setBlending:D,setMaterial:an,setFlipSided:mt,setCullFace:Et,setLineWidth:Xe,setPolygonOffset:bt,setScissorTest:ue,activeTexture:P,bindTexture:E,unbindTexture:Y,compressedTexImage2D:oe,compressedTexImage3D:he,texImage2D:Ne,texImage3D:Je,updateUBOMapping:_t,uniformBlockBinding:Qe,texStorage2D:Ze,texStorage3D:de,texSubImage2D:W,texSubImage3D:Fe,compressedTexSubImage2D:we,compressedTexSubImage3D:Se,scissor:Ke,viewport:Ie,reset:wt}}function Bf(i,e,t,n){let s=b_(n);switch(t){case pp:return i*e;case gp:return i*e;case xp:return i*e*2;case au:return i*e/s.components*s.byteLength;case ou:return i*e/s.components*s.byteLength;case yp:return i*e*2/s.components*s.byteLength;case lu:return i*e*2/s.components*s.byteLength;case mp:return i*e*3/s.components*s.byteLength;case qn:return i*e*4/s.components*s.byteLength;case cu:return i*e*4/s.components*s.byteLength;case Io:case Lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case No:case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qc:case Zc:return Math.max(i,16)*Math.max(e,8)/4;case $c:case Kc:return Math.max(i,8)*Math.max(e,8)/2;case Jc:case jc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case eh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case nh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ih:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case sh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case rh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ah:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case oh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case lh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ch:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case hh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case uh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case dh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case fh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Uo:case ph:case mh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _p:case gh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xh:case yh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function b_(i){switch(i){case Yi:case up:return{byteLength:1,components:1};case ba:case dp:case Na:return{byteLength:2,components:1};case su:case ru:return{byteLength:2,components:4};case Xs:case iu:case Mi:return{byteLength:4,components:1};case fp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function M_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return f?new OffscreenCanvas(P,E):Ma("canvas")}function x(P,E,Y){let oe=1,he=ue(P);if((he.width>Y||he.height>Y)&&(oe=Y/Math.max(he.width,he.height)),oe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let W=Math.floor(oe*he.width),Fe=Math.floor(oe*he.height);u===void 0&&(u=g(W,Fe));let we=E?g(W,Fe):u;return we.width=W,we.height=Fe,we.getContext("2d").drawImage(P,0,0,W,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+W+"x"+Fe+")."),we}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),P;return P}function p(P){return P.generateMipmaps&&P.minFilter!==On&&P.minFilter!==$n}function m(P){i.generateMipmap(P)}function y(P,E,Y,oe,he=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let W=E;if(E===i.RED&&(Y===i.FLOAT&&(W=i.R32F),Y===i.HALF_FLOAT&&(W=i.R16F),Y===i.UNSIGNED_BYTE&&(W=i.R8)),E===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(W=i.R8UI),Y===i.UNSIGNED_SHORT&&(W=i.R16UI),Y===i.UNSIGNED_INT&&(W=i.R32UI),Y===i.BYTE&&(W=i.R8I),Y===i.SHORT&&(W=i.R16I),Y===i.INT&&(W=i.R32I)),E===i.RG&&(Y===i.FLOAT&&(W=i.RG32F),Y===i.HALF_FLOAT&&(W=i.RG16F),Y===i.UNSIGNED_BYTE&&(W=i.RG8)),E===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(W=i.RG8UI),Y===i.UNSIGNED_SHORT&&(W=i.RG16UI),Y===i.UNSIGNED_INT&&(W=i.RG32UI),Y===i.BYTE&&(W=i.RG8I),Y===i.SHORT&&(W=i.RG16I),Y===i.INT&&(W=i.RG32I)),E===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(W=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(W=i.RGB16UI),Y===i.UNSIGNED_INT&&(W=i.RGB32UI),Y===i.BYTE&&(W=i.RGB8I),Y===i.SHORT&&(W=i.RGB16I),Y===i.INT&&(W=i.RGB32I)),E===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),Y===i.UNSIGNED_INT&&(W=i.RGBA32UI),Y===i.BYTE&&(W=i.RGBA8I),Y===i.SHORT&&(W=i.RGBA16I),Y===i.INT&&(W=i.RGBA32I)),E===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),E===i.RGBA){let Fe=he?Fo:Yt.getTransfer(oe);Y===i.FLOAT&&(W=i.RGBA32F),Y===i.HALF_FLOAT&&(W=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(W=Fe===ln?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function M(P,E){let Y;return P?E===null||E===Xs||E===Lr?Y=i.DEPTH24_STENCIL8:E===Mi?Y=i.DEPTH32F_STENCIL8:E===ba&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xs||E===Lr?Y=i.DEPTH_COMPONENT24:E===Mi?Y=i.DEPTH_COMPONENT32F:E===ba&&(Y=i.DEPTH_COMPONENT16),Y}function _(P,E){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==On&&P.minFilter!==$n?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function I(P){let E=P.target;E.removeEventListener("dispose",I),A(E),E.isVideoTexture&&h.delete(E)}function C(P){let E=P.target;E.removeEventListener("dispose",C),J(E)}function A(P){let E=n.get(P);if(E.__webglInit===void 0)return;let Y=P.source,oe=d.get(Y);if(oe){let he=oe[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&U(P),Object.keys(oe).length===0&&d.delete(Y)}n.remove(P)}function U(P){let E=n.get(P);i.deleteTexture(E.__webglTexture);let Y=P.source,oe=d.get(Y);delete oe[E.__cacheKey],a.memory.textures--}function J(P){let E=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(E.__webglFramebuffer[oe]))for(let he=0;he<E.__webglFramebuffer[oe].length;he++)i.deleteFramebuffer(E.__webglFramebuffer[oe][he]);else i.deleteFramebuffer(E.__webglFramebuffer[oe]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[oe])}else{if(Array.isArray(E.__webglFramebuffer))for(let oe=0;oe<E.__webglFramebuffer.length;oe++)i.deleteFramebuffer(E.__webglFramebuffer[oe]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let oe=0;oe<E.__webglColorRenderbuffer.length;oe++)E.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[oe]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let Y=P.textures;for(let oe=0,he=Y.length;oe<he;oe++){let W=n.get(Y[oe]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(Y[oe])}n.remove(P)}let b=0;function w(){b=0}function V(){let P=b;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),b+=1,P}function F(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function q(P,E){let Y=n.get(P);if(P.isVideoTexture&&Xe(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){let oe=P.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ot(Y,P,E);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+E)}function se(P,E){let Y=n.get(P);if(P.version>0&&Y.__version!==P.version){Ot(Y,P,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+E)}function K(P,E){let Y=n.get(P);if(P.version>0&&Y.__version!==P.version){Ot(Y,P,E);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+E)}function B(P,E){let Y=n.get(P);if(P.version>0&&Y.__version!==P.version){ae(Y,P,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+E)}let Q={[Ws]:i.REPEAT,[Gi]:i.CLAMP_TO_EDGE,[va]:i.MIRRORED_REPEAT},le={[On]:i.NEAREST,[nu]:i.NEAREST_MIPMAP_NEAREST,[Sr]:i.NEAREST_MIPMAP_LINEAR,[$n]:i.LINEAR,[ma]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},Pe={[c0]:i.NEVER,[m0]:i.ALWAYS,[h0]:i.LESS,[Mp]:i.LEQUAL,[u0]:i.EQUAL,[p0]:i.GEQUAL,[d0]:i.GREATER,[f0]:i.NOTEQUAL};function Me(P,E){if(E.type===Mi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===$n||E.magFilter===ma||E.magFilter===Sr||E.magFilter===Ri||E.minFilter===$n||E.minFilter===ma||E.minFilter===Sr||E.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Q[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Q[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Q[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,le[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,le[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Pe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===On||E.minFilter!==Sr&&E.minFilter!==Ri||E.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function vt(P,E){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",I));let oe=E.source,he=d.get(oe);he===void 0&&(he={},d.set(oe,he));let W=F(E);if(W!==P.__cacheKey){he[W]===void 0&&(he[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),he[W].usedTimes++;let Fe=he[P.__cacheKey];Fe!==void 0&&(he[P.__cacheKey].usedTimes--,Fe.usedTimes===0&&U(E)),P.__cacheKey=W,P.__webglTexture=he[W].texture}return Y}function Ot(P,E,Y){let oe=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(oe=i.TEXTURE_3D);let he=vt(P,E),W=E.source;t.bindTexture(oe,P.__webglTexture,i.TEXTURE0+Y);let Fe=n.get(W);if(W.version!==Fe.__version||he===!0){t.activeTexture(i.TEXTURE0+Y);let we=Yt.getPrimaries(Yt.workingColorSpace),Se=E.colorSpace===fs?null:Yt.getPrimaries(E.colorSpace),Ze=E.colorSpace===fs||we===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let de=x(E.image,!1,s.maxTextureSize);de=bt(E,de);let Ne=r.convert(E.format,E.colorSpace),Je=r.convert(E.type),Ke=y(E.internalFormat,Ne,Je,E.colorSpace,E.isVideoTexture);Me(oe,E);let Ie,_t=E.mipmaps,Qe=E.isVideoTexture!==!0,wt=Fe.__version===void 0||he===!0,O=W.dataReady,Ue=_(E,de);if(E.isDepthTexture)Ke=M(E.format===Nr,E.type),wt&&(Qe?t.texStorage2D(i.TEXTURE_2D,1,Ke,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Ke,de.width,de.height,0,Ne,Je,null));else if(E.isDataTexture)if(_t.length>0){Qe&&wt&&t.texStorage2D(i.TEXTURE_2D,Ue,Ke,_t[0].width,_t[0].height);for(let ee=0,re=_t.length;ee<re;ee++)Ie=_t[ee],Qe?O&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,Ie.width,Ie.height,Ne,Je,Ie.data):t.texImage2D(i.TEXTURE_2D,ee,Ke,Ie.width,Ie.height,0,Ne,Je,Ie.data);E.generateMipmaps=!1}else Qe?(wt&&t.texStorage2D(i.TEXTURE_2D,Ue,Ke,de.width,de.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,Ne,Je,de.data)):t.texImage2D(i.TEXTURE_2D,0,Ke,de.width,de.height,0,Ne,Je,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Qe&&wt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Ke,_t[0].width,_t[0].height,de.depth);for(let ee=0,re=_t.length;ee<re;ee++)if(Ie=_t[ee],E.format!==qn)if(Ne!==null)if(Qe){if(O)if(E.layerUpdates.size>0){let Re=Bf(Ie.width,Ie.height,E.format,E.type);for(let ve of E.layerUpdates){let At=Ie.data.subarray(ve*Re/Ie.data.BYTES_PER_ELEMENT,(ve+1)*Re/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,ve,Ie.width,Ie.height,1,Ne,At,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,Ie.width,Ie.height,de.depth,Ne,Ie.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,Ke,Ie.width,Ie.height,de.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,Ie.width,Ie.height,de.depth,Ne,Je,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,Ke,Ie.width,Ie.height,de.depth,0,Ne,Je,Ie.data)}else{Qe&&wt&&t.texStorage2D(i.TEXTURE_2D,Ue,Ke,_t[0].width,_t[0].height);for(let ee=0,re=_t.length;ee<re;ee++)Ie=_t[ee],E.format!==qn?Ne!==null?Qe?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,Ie.width,Ie.height,Ne,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,Ke,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?O&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,Ie.width,Ie.height,Ne,Je,Ie.data):t.texImage2D(i.TEXTURE_2D,ee,Ke,Ie.width,Ie.height,0,Ne,Je,Ie.data)}else if(E.isDataArrayTexture)if(Qe){if(wt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Ke,de.width,de.height,de.depth),O)if(E.layerUpdates.size>0){let ee=Bf(de.width,de.height,E.format,E.type);for(let re of E.layerUpdates){let Re=de.data.subarray(re*ee/de.data.BYTES_PER_ELEMENT,(re+1)*ee/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,de.width,de.height,1,Ne,Je,Re)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ne,Je,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ke,de.width,de.height,de.depth,0,Ne,Je,de.data);else if(E.isData3DTexture)Qe?(wt&&t.texStorage3D(i.TEXTURE_3D,Ue,Ke,de.width,de.height,de.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ne,Je,de.data)):t.texImage3D(i.TEXTURE_3D,0,Ke,de.width,de.height,de.depth,0,Ne,Je,de.data);else if(E.isFramebufferTexture){if(wt)if(Qe)t.texStorage2D(i.TEXTURE_2D,Ue,Ke,de.width,de.height);else{let ee=de.width,re=de.height;for(let Re=0;Re<Ue;Re++)t.texImage2D(i.TEXTURE_2D,Re,Ke,ee,re,0,Ne,Je,null),ee>>=1,re>>=1}}else if(_t.length>0){if(Qe&&wt){let ee=ue(_t[0]);t.texStorage2D(i.TEXTURE_2D,Ue,Ke,ee.width,ee.height)}for(let ee=0,re=_t.length;ee<re;ee++)Ie=_t[ee],Qe?O&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,Ne,Je,Ie):t.texImage2D(i.TEXTURE_2D,ee,Ke,Ne,Je,Ie);E.generateMipmaps=!1}else if(Qe){if(wt){let ee=ue(de);t.texStorage2D(i.TEXTURE_2D,Ue,Ke,ee.width,ee.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ne,Je,de)}else t.texImage2D(i.TEXTURE_2D,0,Ke,Ne,Je,de);p(E)&&m(oe),Fe.__version=W.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ae(P,E,Y){if(E.image.length!==6)return;let oe=vt(P,E),he=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+Y);let W=n.get(he);if(he.version!==W.__version||oe===!0){t.activeTexture(i.TEXTURE0+Y);let Fe=Yt.getPrimaries(Yt.workingColorSpace),we=E.colorSpace===fs?null:Yt.getPrimaries(E.colorSpace),Se=E.colorSpace===fs||Fe===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let Ze=E.isCompressedTexture||E.image[0].isCompressedTexture,de=E.image[0]&&E.image[0].isDataTexture,Ne=[];for(let re=0;re<6;re++)!Ze&&!de?Ne[re]=x(E.image[re],!0,s.maxCubemapSize):Ne[re]=de?E.image[re].image:E.image[re],Ne[re]=bt(E,Ne[re]);let Je=Ne[0],Ke=r.convert(E.format,E.colorSpace),Ie=r.convert(E.type),_t=y(E.internalFormat,Ke,Ie,E.colorSpace),Qe=E.isVideoTexture!==!0,wt=W.__version===void 0||oe===!0,O=he.dataReady,Ue=_(E,Je);Me(i.TEXTURE_CUBE_MAP,E);let ee;if(Ze){Qe&&wt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,_t,Je.width,Je.height);for(let re=0;re<6;re++){ee=Ne[re].mipmaps;for(let Re=0;Re<ee.length;Re++){let ve=ee[Re];E.format!==qn?Ke!==null?Qe?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,0,0,ve.width,ve.height,Ke,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,_t,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,0,0,ve.width,ve.height,Ke,Ie,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,_t,ve.width,ve.height,0,Ke,Ie,ve.data)}}}else{if(ee=E.mipmaps,Qe&&wt){ee.length>0&&Ue++;let re=ue(Ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,_t,re.width,re.height)}for(let re=0;re<6;re++)if(de){Qe?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ne[re].width,Ne[re].height,Ke,Ie,Ne[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,_t,Ne[re].width,Ne[re].height,0,Ke,Ie,Ne[re].data);for(let Re=0;Re<ee.length;Re++){let At=ee[Re].image[re].image;Qe?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,0,0,At.width,At.height,Ke,Ie,At.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,_t,At.width,At.height,0,Ke,Ie,At.data)}}else{Qe?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ke,Ie,Ne[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,_t,Ke,Ie,Ne[re]);for(let Re=0;Re<ee.length;Re++){let ve=ee[Re];Qe?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,0,0,Ke,Ie,ve.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,_t,Ke,Ie,ve.image[re])}}}p(E)&&m(i.TEXTURE_CUBE_MAP),W.__version=he.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function fe(P,E,Y,oe,he,W){let Fe=r.convert(Y.format,Y.colorSpace),we=r.convert(Y.type),Se=y(Y.internalFormat,Fe,we,Y.colorSpace);if(!n.get(E).__hasExternalTextures){let de=Math.max(1,E.width>>W),Ne=Math.max(1,E.height>>W);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,W,Se,de,Ne,E.depth,0,Fe,we,null):t.texImage2D(he,W,Se,de,Ne,0,Fe,we,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Et(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,he,n.get(Y).__webglTexture,0,mt(E)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,he,n.get(Y).__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(P,E,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){let oe=E.depthTexture,he=oe&&oe.isDepthTexture?oe.type:null,W=M(E.stencilBuffer,he),Fe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=mt(E);Et(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,W,E.width,E.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,W,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,W,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Fe,i.RENDERBUFFER,P)}else{let oe=E.textures;for(let he=0;he<oe.length;he++){let W=oe[he],Fe=r.convert(W.format,W.colorSpace),we=r.convert(W.type),Se=y(W.internalFormat,Fe,we,W.colorSpace),Ze=mt(E);Y&&Et(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,Se,E.width,E.height):Et(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze,Se,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Se,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);let oe=n.get(E.depthTexture).__webglTexture,he=mt(E);if(E.depthTexture.format===wr)Et(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(E.depthTexture.format===Nr)Et(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function ft(P){let E=n.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let oe=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),oe){let he=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,oe.removeEventListener("dispose",he)};oe.addEventListener("dispose",he),E.__depthDisposeCallback=he}E.__boundDepthTexture=oe}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ke(E.__webglFramebuffer,P)}else if(Y){E.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[oe]),E.__webglDepthbuffer[oe]===void 0)E.__webglDepthbuffer[oe]=i.createRenderbuffer(),He(E.__webglDepthbuffer[oe],P,!1);else{let he=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=E.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,W)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),He(E.__webglDepthbuffer,P,!1);else{let oe=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,he)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(P,E,Y){let oe=n.get(P);E!==void 0&&fe(oe.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&ft(P)}function Rt(P){let E=P.texture,Y=n.get(P),oe=n.get(E);P.addEventListener("dispose",C);let he=P.textures,W=P.isWebGLCubeRenderTarget===!0,Fe=he.length>1;if(Fe||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=E.version,a.memory.textures++),W){Y.__webglFramebuffer=[];for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[we]=[];for(let Se=0;Se<E.mipmaps.length;Se++)Y.__webglFramebuffer[we][Se]=i.createFramebuffer()}else Y.__webglFramebuffer[we]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let we=0;we<E.mipmaps.length;we++)Y.__webglFramebuffer[we]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Fe)for(let we=0,Se=he.length;we<Se;we++){let Ze=n.get(he[we]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Et(P)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let we=0;we<he.length;we++){let Se=he[we];Y.__webglColorRenderbuffer[we]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[we]);let Ze=r.convert(Se.format,Se.colorSpace),de=r.convert(Se.type),Ne=y(Se.internalFormat,Ze,de,Se.colorSpace,P.isXRRenderTarget===!0),Je=mt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,Ne,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Y.__webglColorRenderbuffer[we])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),He(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),Me(i.TEXTURE_CUBE_MAP,E);for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)fe(Y.__webglFramebuffer[we][Se],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Se);else fe(Y.__webglFramebuffer[we],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);p(E)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let we=0,Se=he.length;we<Se;we++){let Ze=he[we],de=n.get(Ze);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),Me(i.TEXTURE_2D,Ze),fe(Y.__webglFramebuffer,P,Ze,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,0),p(Ze)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let we=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(we=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,oe.__webglTexture),Me(we,E),E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)fe(Y.__webglFramebuffer[Se],P,E,i.COLOR_ATTACHMENT0,we,Se);else fe(Y.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,we,0);p(E)&&m(we),t.unbindTexture()}P.depthBuffer&&ft(P)}function Nt(P){let E=P.textures;for(let Y=0,oe=E.length;Y<oe;Y++){let he=E[Y];if(p(he)){let W=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Fe=n.get(he).__webglTexture;t.bindTexture(W,Fe),m(W),t.unbindTexture()}}}let Ct=[],D=[];function an(P){if(P.samples>0){if(Et(P)===!1){let E=P.textures,Y=P.width,oe=P.height,he=i.COLOR_BUFFER_BIT,W=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=n.get(P),we=E.length>1;if(we)for(let Se=0;Se<E.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Se=0;Se<E.length;Se++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),we){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Se]);let Ze=n.get(E[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ze,0)}i.blitFramebuffer(0,0,Y,oe,0,0,Y,oe,he,i.NEAREST),l===!0&&(Ct.length=0,D.length=0,Ct.push(i.COLOR_ATTACHMENT0+Se),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ct.push(W),D.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),we)for(let Se=0;Se<E.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Se]);let Ze=n.get(E[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,Ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function mt(P){return Math.min(s.maxSamples,P.samples)}function Et(P){let E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Xe(P){let E=a.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function bt(P,E){let Y=P.colorSpace,oe=P.format,he=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==Nn&&Y!==fs&&(Yt.getTransfer(Y)===ln?(oe!==qn||he!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),E}function ue(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=w,this.setTexture2D=q,this.setTexture2DArray=se,this.setTexture3D=K,this.setTextureCube=B,this.rebindTextures=ct,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Et}function S_(i,e){function t(n,s=fs){let r,a=Yt.getTransfer(s);if(n===Yi)return i.UNSIGNED_BYTE;if(n===su)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ru)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===up)return i.BYTE;if(n===dp)return i.SHORT;if(n===ba)return i.UNSIGNED_SHORT;if(n===iu)return i.INT;if(n===Xs)return i.UNSIGNED_INT;if(n===Mi)return i.FLOAT;if(n===Na)return i.HALF_FLOAT;if(n===pp)return i.ALPHA;if(n===mp)return i.RGB;if(n===qn)return i.RGBA;if(n===gp)return i.LUMINANCE;if(n===xp)return i.LUMINANCE_ALPHA;if(n===wr)return i.DEPTH_COMPONENT;if(n===Nr)return i.DEPTH_STENCIL;if(n===au)return i.RED;if(n===ou)return i.RED_INTEGER;if(n===yp)return i.RG;if(n===lu)return i.RG_INTEGER;if(n===cu)return i.RGBA_INTEGER;if(n===Io||n===Lo||n===No||n===Do)if(a===ln)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$c||n===qc||n===Kc||n===Zc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$c)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jc||n===jc||n===Qc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jc||n===jc)return a===ln?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qc)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===eh||n===th||n===nh||n===ih||n===sh||n===rh||n===ah||n===oh||n===lh||n===ch||n===hh||n===uh||n===dh||n===fh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===eh)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===th)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nh)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ih)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sh)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rh)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ah)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oh)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lh)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ch)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hh)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uh)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dh)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fh)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Uo||n===ph||n===mh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Uo)return a===ln?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ph)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_p||n===gh||n===xh||n===yh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Uo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Lr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Nh=class extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},kt=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},E_={type:"move"},xa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(E_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},w_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A_=`
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

}`,Dh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Ln,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ii({vertexShader:w_,fragmentShader:A_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ee(new Ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uh=class extends _s{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=new Dh,p=t.getContextAttributes(),m=null,y=null,M=[],_=[],I=new ze,C=null,A=new mn;A.layers.enable(1),A.viewport=new $t;let U=new mn;U.layers.enable(2),U.viewport=new $t;let J=[A,U],b=new Nh;b.layers.enable(1),b.layers.enable(2);let w=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let fe=M[ae];return fe===void 0&&(fe=new xa,M[ae]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ae){let fe=M[ae];return fe===void 0&&(fe=new xa,M[ae]=fe),fe.getGripSpace()},this.getHand=function(ae){let fe=M[ae];return fe===void 0&&(fe=new xa,M[ae]=fe),fe.getHandSpace()};function F(ae){let fe=_.indexOf(ae.inputSource);if(fe===-1)return;let He=M[fe];He!==void 0&&(He.update(ae.inputSource,ae.frame,c||a),He.dispatchEvent({type:ae.type,data:ae.inputSource}))}function q(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",se);for(let ae=0;ae<M.length;ae++){let fe=_[ae];fe!==null&&(_[ae]=null,M[ae].disconnect(fe))}w=null,V=null,x.reset(),e.setRenderTarget(m),f=null,d=null,u=null,s=null,y=null,Ot.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){r=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){o=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ae){c=ae},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ae){if(s=ae,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",q),s.addEventListener("inputsourceschange",se),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){let fe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new $i(f.framebufferWidth,f.framebufferHeight,{format:qn,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let fe=null,He=null,ke=null;p.depth&&(ke=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=p.stencil?Nr:wr,He=p.stencil?Lr:Xs);let ft={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(ft),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new $i(d.textureWidth,d.textureHeight,{format:qn,type:Yi,depthTexture:new Ko(d.textureWidth,d.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ot.setContext(s),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function se(ae){for(let fe=0;fe<ae.removed.length;fe++){let He=ae.removed[fe],ke=_.indexOf(He);ke>=0&&(_[ke]=null,M[ke].disconnect(He))}for(let fe=0;fe<ae.added.length;fe++){let He=ae.added[fe],ke=_.indexOf(He);if(ke===-1){for(let ct=0;ct<M.length;ct++)if(ct>=_.length){_.push(He),ke=ct;break}else if(_[ct]===null){_[ct]=He,ke=ct;break}if(ke===-1)break}let ft=M[ke];ft&&ft.connect(He)}}let K=new L,B=new L;function Q(ae,fe,He){K.setFromMatrixPosition(fe.matrixWorld),B.setFromMatrixPosition(He.matrixWorld);let ke=K.distanceTo(B),ft=fe.projectionMatrix.elements,ct=He.projectionMatrix.elements,Rt=ft[14]/(ft[10]-1),Nt=ft[14]/(ft[10]+1),Ct=(ft[9]+1)/ft[5],D=(ft[9]-1)/ft[5],an=(ft[8]-1)/ft[0],mt=(ct[8]+1)/ct[0],Et=Rt*an,Xe=Rt*mt,bt=ke/(-an+mt),ue=bt*-an;if(fe.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(ue),ae.translateZ(bt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),ft[10]===-1)ae.projectionMatrix.copy(fe.projectionMatrix),ae.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{let P=Rt+bt,E=Nt+bt,Y=Et-ue,oe=Xe+(ke-ue),he=Ct*Nt/E*P,W=D*Nt/E*P;ae.projectionMatrix.makePerspective(Y,oe,he,W,P,E),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function le(ae,fe){fe===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(fe.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(s===null)return;let fe=ae.near,He=ae.far;x.texture!==null&&(x.depthNear>0&&(fe=x.depthNear),x.depthFar>0&&(He=x.depthFar)),b.near=U.near=A.near=fe,b.far=U.far=A.far=He,(w!==b.near||V!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,V=b.far);let ke=ae.parent,ft=b.cameras;le(b,ke);for(let ct=0;ct<ft.length;ct++)le(ft[ct],ke);ft.length===2?Q(b,A,U):b.projectionMatrix.copy(A.projectionMatrix),Pe(ae,b,ke)};function Pe(ae,fe,He){He===null?ae.matrix.copy(fe.matrixWorld):(ae.matrix.copy(He.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(fe.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(fe.projectionMatrix),ae.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=kr*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ae){l=ae,d!==null&&(d.fixedFoveation=ae),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ae)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let Me=null;function vt(ae,fe){if(h=fe.getViewerPose(c||a),g=fe,h!==null){let He=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ke=!1;He.length!==b.cameras.length&&(b.cameras.length=0,ke=!0);for(let ct=0;ct<He.length;ct++){let Rt=He[ct],Nt=null;if(f!==null)Nt=f.getViewport(Rt);else{let D=u.getViewSubImage(d,Rt);Nt=D.viewport,ct===0&&(e.setRenderTargetTextures(y,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(y))}let Ct=J[ct];Ct===void 0&&(Ct=new mn,Ct.layers.enable(ct),Ct.viewport=new $t,J[ct]=Ct),Ct.matrix.fromArray(Rt.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(Rt.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),ct===0&&(b.matrix.copy(Ct.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ke===!0&&b.cameras.push(Ct)}let ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")){let ct=u.getDepthInformation(He[0]);ct&&ct.isValid&&ct.texture&&x.init(e,ct,s.renderState)}}for(let He=0;He<M.length;He++){let ke=_[He],ft=M[He];ke!==null&&ft!==void 0&&ft.update(ke,fe,c||a)}Me&&Me(ae,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),g=null}let Ot=new Ap;Ot.setAnimationLoop(vt),this.setAnimationLoop=function(ae){Me=ae},this.dispose=function(){}}},Bs=new Pi,T_=new yt;function R_(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,wp(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,M,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Kn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Kn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y=e.get(m),M=y.envMap,_=y.envMapRotation;M&&(p.envMap.value=M,Bs.copy(_),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),p.envMapRotation.value.setFromMatrix4(T_.makeRotationFromEuler(Bs)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Kn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function C_(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let _=M.program;n.uniformBlockBinding(y,_)}function c(y,M){let _=s[y.id];_===void 0&&(g(y),_=h(y),s[y.id]=_,y.addEventListener("dispose",p));let I=M.program;n.updateUBOMapping(y,I);let C=e.render.frame;r[y.id]!==C&&(d(y),r[y.id]=C)}function h(y){let M=u();y.__bindingPointIndex=M;let _=i.createBuffer(),I=y.__size,C=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,I,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let M=s[y.id],_=y.uniforms,I=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let C=0,A=_.length;C<A;C++){let U=Array.isArray(_[C])?_[C]:[_[C]];for(let J=0,b=U.length;J<b;J++){let w=U[J];if(f(w,C,J,I)===!0){let V=w.__offset,F=Array.isArray(w.value)?w.value:[w.value],q=0;for(let se=0;se<F.length;se++){let K=F[se],B=x(K);typeof K=="number"||typeof K=="boolean"?(w.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,V+q,w.__data)):K.isMatrix3?(w.__data[0]=K.elements[0],w.__data[1]=K.elements[1],w.__data[2]=K.elements[2],w.__data[3]=0,w.__data[4]=K.elements[3],w.__data[5]=K.elements[4],w.__data[6]=K.elements[5],w.__data[7]=0,w.__data[8]=K.elements[6],w.__data[9]=K.elements[7],w.__data[10]=K.elements[8],w.__data[11]=0):(K.toArray(w.__data,q),q+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,M,_,I){let C=y.value,A=M+"_"+_;if(I[A]===void 0)return typeof C=="number"||typeof C=="boolean"?I[A]=C:I[A]=C.clone(),!0;{let U=I[A];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return I[A]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(y){let M=y.uniforms,_=0,I=16;for(let A=0,U=M.length;A<U;A++){let J=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,w=J.length;b<w;b++){let V=J[b],F=Array.isArray(V.value)?V.value:[V.value];for(let q=0,se=F.length;q<se;q++){let K=F[q],B=x(K),Q=_%I,le=Q%B.boundary,Pe=Q+le;_+=le,Pe!==0&&I-Pe<B.storage&&(_+=I-Pe),V.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=_,_+=B.storage}}}let C=_%I;return C>0&&(_+=I-C),y.__size=_,y.__cache={},this}function x(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function p(y){let M=y.target;M.removeEventListener("dispose",p);let _=a.indexOf(M.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Br=class{constructor(e={}){let{canvas:t=L0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this.toneMapping=xs,this.toneMappingExposure=1;let M=this,_=!1,I=0,C=0,A=null,U=-1,J=null,b=new $t,w=new $t,V=null,F=new ot(0),q=0,se=t.width,K=t.height,B=1,Q=null,le=null,Pe=new $t(0,0,se,K),Me=new $t(0,0,se,K),vt=!1,Ot=new Sa,ae=!1,fe=!1,He=new yt,ke=new yt,ft=new L,ct=new $t,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Nt=!1;function Ct(){return A===null?B:1}let D=n;function an(T,z){return t.getContext(T,z)}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",ve,!1),D===null){let z="webgl2";if(D=an(z,T),D===null)throw an(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let mt,Et,Xe,bt,ue,P,E,Y,oe,he,W,Fe,we,Se,Ze,de,Ne,Je,Ke,Ie,_t,Qe,wt,O;function Ue(){mt=new Xx(D),mt.init(),Qe=new S_(D,mt),Et=new zx(D,mt,e,Qe),Xe=new v_(D),Et.reverseDepthBuffer&&Xe.buffers.depth.setReversed(!0),bt=new qx(D),ue=new o_,P=new M_(D,mt,Xe,ue,Et,Qe,bt),E=new Hx(M),Y=new Wx(M),oe=new tg(D),wt=new Fx(D,oe),he=new Yx(D,oe,bt,wt),W=new Zx(D,he,oe,bt),Ke=new Kx(D,Et,P),de=new Bx(ue),Fe=new a_(M,E,Y,mt,Et,wt,de),we=new R_(M,ue),Se=new c_,Ze=new m_(mt),Je=new kx(M,E,Y,Xe,W,d,l),Ne=new y_(M,W,Et),O=new C_(D,bt,Et,Xe),Ie=new Ox(D,mt,bt),_t=new $x(D,mt,bt),bt.programs=Fe.programs,M.capabilities=Et,M.extensions=mt,M.properties=ue,M.renderLists=Se,M.shadowMap=Ne,M.state=Xe,M.info=bt}Ue();let ee=new Uh(M,D);this.xr=ee,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=mt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=mt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(se,K,!1))},this.getSize=function(T){return T.set(se,K)},this.setSize=function(T,z,Z=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=T,K=z,t.width=Math.floor(T*B),t.height=Math.floor(z*B),Z===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(se*B,K*B).floor()},this.setDrawingBufferSize=function(T,z,Z){se=T,K=z,B=Z,t.width=Math.floor(T*Z),t.height=Math.floor(z*Z),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy(Pe)},this.setViewport=function(T,z,Z,j){T.isVector4?Pe.set(T.x,T.y,T.z,T.w):Pe.set(T,z,Z,j),Xe.viewport(b.copy(Pe).multiplyScalar(B).round())},this.getScissor=function(T){return T.copy(Me)},this.setScissor=function(T,z,Z,j){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,z,Z,j),Xe.scissor(w.copy(Me).multiplyScalar(B).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(T){Xe.setScissorTest(vt=T)},this.setOpaqueSort=function(T){Q=T},this.setTransparentSort=function(T){le=T},this.getClearColor=function(T){return T.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(T=!0,z=!0,Z=!0){let j=0;if(T){let H=!1;if(A!==null){let pe=A.texture.format;H=pe===cu||pe===lu||pe===ou}if(H){let pe=A.texture.type,Oe=pe===Yi||pe===Xs||pe===ba||pe===Lr||pe===su||pe===ru,Be=Je.getClearColor(),Ge=Je.getClearAlpha(),st=Be.r,pt=Be.g,et=Be.b;Oe?(f[0]=st,f[1]=pt,f[2]=et,f[3]=Ge,D.clearBufferuiv(D.COLOR,0,f)):(g[0]=st,g[1]=pt,g[2]=et,g[3]=Ge,D.clearBufferiv(D.COLOR,0,g))}else j|=D.COLOR_BUFFER_BIT}z&&(j|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Z&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Se.dispose(),Ze.dispose(),ue.dispose(),E.dispose(),Y.dispose(),W.dispose(),wt.dispose(),O.dispose(),Fe.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Tt),ee.removeEventListener("sessionend",fn),cn.stop()};function re(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let T=bt.autoReset,z=Ne.enabled,Z=Ne.autoUpdate,j=Ne.needsUpdate,H=Ne.type;Ue(),bt.autoReset=T,Ne.enabled=z,Ne.autoUpdate=Z,Ne.needsUpdate=j,Ne.type=H}function ve(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function At(T){let z=T.target;z.removeEventListener("dispose",At),tt(z)}function tt(T){vn(T),ue.remove(T)}function vn(T){let z=ue.get(T).programs;z!==void 0&&(z.forEach(function(Z){Fe.releaseProgram(Z)}),T.isShaderMaterial&&Fe.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,Z,j,H,pe){z===null&&(z=Rt);let Oe=H.isMesh&&H.matrixWorld.determinant()<0,Be=fi(T,z,Z,j,H);Xe.setMaterial(j,Oe);let Ge=Z.index,st=1;if(j.wireframe===!0){if(Ge=he.getWireframeAttribute(Z),Ge===void 0)return;st=2}let pt=Z.drawRange,et=Z.attributes.position,Ut=pt.start*st,_e=(pt.start+pt.count)*st;pe!==null&&(Ut=Math.max(Ut,pe.start*st),_e=Math.min(_e,(pe.start+pe.count)*st)),Ge!==null?(Ut=Math.max(Ut,0),_e=Math.min(_e,Ge.count)):et!=null&&(Ut=Math.max(Ut,0),_e=Math.min(_e,et.count));let Bt=_e-Ut;if(Bt<0||Bt===1/0)return;wt.setup(H,j,Be,Z,Ge);let pn,Xt=Ie;if(Ge!==null&&(pn=oe.get(Ge),Xt=_t,Xt.setIndex(pn)),H.isMesh)j.wireframe===!0?(Xe.setLineWidth(j.wireframeLinewidth*Ct()),Xt.setMode(D.LINES)):Xt.setMode(D.TRIANGLES);else if(H.isLine){let Ae=j.linewidth;Ae===void 0&&(Ae=1),Xe.setLineWidth(Ae*Ct()),H.isLineSegments?Xt.setMode(D.LINES):H.isLineLoop?Xt.setMode(D.LINE_LOOP):Xt.setMode(D.LINE_STRIP)}else H.isPoints?Xt.setMode(D.POINTS):H.isSprite&&Xt.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Xt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))Xt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ae=H._multiDrawStarts,Ht=H._multiDrawCounts,Mt=H._multiDrawCount,bn=Ge?oe.get(Ge).bytesPerElement:1,pi=ue.get(j).currentProgram.getUniforms();for(let gn=0;gn<Mt;gn++)pi.setValue(D,"_gl_DrawID",gn),Xt.render(Ae[gn]/bn,Ht[gn])}else if(H.isInstancedMesh)Xt.renderInstances(Ut,Bt,H.count);else if(Z.isInstancedBufferGeometry){let Ae=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ht=Math.min(Z.instanceCount,Ae);Xt.renderInstances(Ut,Bt,Ht)}else Xt.render(Ut,Bt)};function Dt(T,z,Z){T.transparent===!0&&T.side===hn&&T.forceSinglePass===!1?(T.side=Kn,T.needsUpdate=!0,Rs(T,z,Z),T.side=Ci,T.needsUpdate=!0,Rs(T,z,Z),T.side=hn):Rs(T,z,Z)}this.compile=function(T,z,Z=null){Z===null&&(Z=T),p=Ze.get(Z),p.init(z),y.push(p),Z.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),T!==Z&&T.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();let j=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let pe=H.material;if(pe)if(Array.isArray(pe))for(let Oe=0;Oe<pe.length;Oe++){let Be=pe[Oe];Dt(Be,Z,H),j.add(Be)}else Dt(pe,Z,H),j.add(pe)}),y.pop(),p=null,j},this.compileAsync=function(T,z,Z=null){let j=this.compile(T,z,Z);return new Promise(H=>{function pe(){if(j.forEach(function(Oe){ue.get(Oe).currentProgram.isReady()&&j.delete(Oe)}),j.size===0){H(T);return}setTimeout(pe,10)}mt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let k=null;function xe(T){k&&k(T)}function Tt(){cn.stop()}function fn(){cn.start()}let cn=new Ap;cn.setAnimationLoop(xe),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(T){k=T,ee.setAnimationLoop(T),T===null?cn.stop():cn.start()},ee.addEventListener("sessionstart",Tt),ee.addEventListener("sessionend",fn),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(z),z=ee.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,z,A),p=Ze.get(T,y.length),p.init(z),y.push(p),ke.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ot.setFromProjectionMatrix(ke),fe=this.localClippingEnabled,ae=de.init(this.clippingPlanes,fe),x=Se.get(T,m.length),x.init(),m.push(x),ee.enabled===!0&&ee.isPresenting===!0){let pe=M.xr.getDepthSensingMesh();pe!==null&&Jn(pe,z,-1/0,M.sortObjects)}Jn(T,z,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(Q,le),Nt=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Nt&&Je.addToRenderList(x,T),this.info.render.frame++,ae===!0&&de.beginShadows();let Z=p.state.shadowsArray;Ne.render(Z,T,z),ae===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=x.opaque,H=x.transmissive;if(p.setupLights(),z.isArrayCamera){let pe=z.cameras;if(H.length>0)for(let Oe=0,Be=pe.length;Oe<Be;Oe++){let Ge=pe[Oe];ss(j,H,T,Ge)}Nt&&Je.render(T);for(let Oe=0,Be=pe.length;Oe<Be;Oe++){let Ge=pe[Oe];er(x,T,Ge,Ge.viewport)}}else H.length>0&&ss(j,H,T,z),Nt&&Je.render(T),er(x,T,z);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(M,T,z),wt.resetDefaultState(),U=-1,J=null,y.pop(),y.length>0?(p=y[y.length-1],ae===!0&&de.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Jn(T,z,Z,j){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ot.intersectsSprite(T)){j&&ct.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ke);let Oe=W.update(T),Be=T.material;Be.visible&&x.push(T,Oe,Be,Z,ct.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ot.intersectsObject(T))){let Oe=W.update(T),Be=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ct.copy(T.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),ct.copy(Oe.boundingSphere.center)),ct.applyMatrix4(T.matrixWorld).applyMatrix4(ke)),Array.isArray(Be)){let Ge=Oe.groups;for(let st=0,pt=Ge.length;st<pt;st++){let et=Ge[st],Ut=Be[et.materialIndex];Ut&&Ut.visible&&x.push(T,Oe,Ut,Z,ct.z,et)}}else Be.visible&&x.push(T,Oe,Be,Z,ct.z,null)}}let pe=T.children;for(let Oe=0,Be=pe.length;Oe<Be;Oe++)Jn(pe[Oe],z,Z,j)}function er(T,z,Z,j){let H=T.opaque,pe=T.transmissive,Oe=T.transparent;p.setupLightsView(Z),ae===!0&&de.setGlobalState(M.clippingPlanes,Z),j&&Xe.viewport(b.copy(j)),H.length>0&&di(H,z,Z),pe.length>0&&di(pe,z,Z),Oe.length>0&&di(Oe,z,Z),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function ss(T,z,Z,j){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new $i(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Na:Yi,minFilter:Ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));let pe=p.state.transmissionRenderTarget[j.id],Oe=j.viewport||b;pe.setSize(Oe.z,Oe.w);let Be=M.getRenderTarget();M.setRenderTarget(pe),M.getClearColor(F),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),M.clear(),Nt&&Je.render(Z);let Ge=M.toneMapping;M.toneMapping=xs;let st=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),ae===!0&&de.setGlobalState(M.clippingPlanes,j),di(T,Z,j),P.updateMultisampleRenderTarget(pe),P.updateRenderTargetMipmap(pe),mt.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let et=0,Ut=z.length;et<Ut;et++){let _e=z[et],Bt=_e.object,pn=_e.geometry,Xt=_e.material,Ae=_e.group;if(Xt.side===hn&&Bt.layers.test(j.layers)){let Ht=Xt.side;Xt.side=Kn,Xt.needsUpdate=!0,Li(Bt,Z,j,pn,Xt,Ae),Xt.side=Ht,Xt.needsUpdate=!0,pt=!0}}pt===!0&&(P.updateMultisampleRenderTarget(pe),P.updateRenderTargetMipmap(pe))}M.setRenderTarget(Be),M.setClearColor(F,q),st!==void 0&&(j.viewport=st),M.toneMapping=Ge}function di(T,z,Z){let j=z.isScene===!0?z.overrideMaterial:null;for(let H=0,pe=T.length;H<pe;H++){let Oe=T[H],Be=Oe.object,Ge=Oe.geometry,st=j===null?Oe.material:j,pt=Oe.group;Be.layers.test(Z.layers)&&Li(Be,z,Z,Ge,st,pt)}}function Li(T,z,Z,j,H,pe){T.onBeforeRender(M,z,Z,j,H,pe),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(M,z,Z,j,T,pe),H.transparent===!0&&H.side===hn&&H.forceSinglePass===!1?(H.side=Kn,H.needsUpdate=!0,M.renderBufferDirect(Z,z,j,H,T,pe),H.side=Ci,H.needsUpdate=!0,M.renderBufferDirect(Z,z,j,H,T,pe),H.side=hn):M.renderBufferDirect(Z,z,j,H,T,pe),T.onAfterRender(M,z,Z,j,H,pe)}function Rs(T,z,Z){z.isScene!==!0&&(z=Rt);let j=ue.get(T),H=p.state.lights,pe=p.state.shadowsArray,Oe=H.state.version,Be=Fe.getParameters(T,H.state,pe,z,Z),Ge=Fe.getProgramCacheKey(Be),st=j.programs;j.environment=T.isMeshStandardMaterial?z.environment:null,j.fog=z.fog,j.envMap=(T.isMeshStandardMaterial?Y:E).get(T.envMap||j.environment),j.envMapRotation=j.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,st===void 0&&(T.addEventListener("dispose",At),st=new Map,j.programs=st);let pt=st.get(Ge);if(pt!==void 0){if(j.currentProgram===pt&&j.lightsStateVersion===Oe)return nn(T,Be),pt}else Be.uniforms=Fe.getUniforms(T),T.onBeforeCompile(Be,M),pt=Fe.acquireProgram(Be,Ge),st.set(Ge,pt),j.uniforms=Be.uniforms;let et=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(et.clippingPlanes=de.uniform),nn(T,Be),j.needsLights=tr(T),j.lightsStateVersion=Oe,j.needsLights&&(et.ambientLightColor.value=H.state.ambient,et.lightProbe.value=H.state.probe,et.directionalLights.value=H.state.directional,et.directionalLightShadows.value=H.state.directionalShadow,et.spotLights.value=H.state.spot,et.spotLightShadows.value=H.state.spotShadow,et.rectAreaLights.value=H.state.rectArea,et.ltc_1.value=H.state.rectAreaLTC1,et.ltc_2.value=H.state.rectAreaLTC2,et.pointLights.value=H.state.point,et.pointLightShadows.value=H.state.pointShadow,et.hemisphereLights.value=H.state.hemi,et.directionalShadowMap.value=H.state.directionalShadowMap,et.directionalShadowMatrix.value=H.state.directionalShadowMatrix,et.spotShadowMap.value=H.state.spotShadowMap,et.spotLightMatrix.value=H.state.spotLightMatrix,et.spotLightMap.value=H.state.spotLightMap,et.pointShadowMap.value=H.state.pointShadowMap,et.pointShadowMatrix.value=H.state.pointShadowMatrix),j.currentProgram=pt,j.uniformsList=null,pt}function Cs(T){if(T.uniformsList===null){let z=T.currentProgram.getUniforms();T.uniformsList=Rr.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function nn(T,z){let Z=ue.get(T);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function fi(T,z,Z,j,H){z.isScene!==!0&&(z=Rt),P.resetTextureUnits();let pe=z.fog,Oe=j.isMeshStandardMaterial?z.environment:null,Be=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Nn,Ge=(j.isMeshStandardMaterial?Y:E).get(j.envMap||Oe),st=j.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pt=!!Z.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),et=!!Z.morphAttributes.position,Ut=!!Z.morphAttributes.normal,_e=!!Z.morphAttributes.color,Bt=xs;j.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Bt=M.toneMapping);let pn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Xt=pn!==void 0?pn.length:0,Ae=ue.get(j),Ht=p.state.lights;if(ae===!0&&(fe===!0||T!==J)){let Tn=T===J&&j.id===U;de.setState(j,T,Tn)}let Mt=!1;j.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Ht.state.version||Ae.outputColorSpace!==Be||H.isBatchedMesh&&Ae.batching===!1||!H.isBatchedMesh&&Ae.batching===!0||H.isBatchedMesh&&Ae.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ae.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ae.instancing===!1||!H.isInstancedMesh&&Ae.instancing===!0||H.isSkinnedMesh&&Ae.skinning===!1||!H.isSkinnedMesh&&Ae.skinning===!0||H.isInstancedMesh&&Ae.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ae.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ae.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ae.instancingMorph===!1&&H.morphTexture!==null||Ae.envMap!==Ge||j.fog===!0&&Ae.fog!==pe||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==de.numPlanes||Ae.numIntersection!==de.numIntersection)||Ae.vertexAlphas!==st||Ae.vertexTangents!==pt||Ae.morphTargets!==et||Ae.morphNormals!==Ut||Ae.morphColors!==_e||Ae.toneMapping!==Bt||Ae.morphTargetsCount!==Xt)&&(Mt=!0):(Mt=!0,Ae.__version=j.version);let bn=Ae.currentProgram;Mt===!0&&(bn=Rs(j,z,H));let pi=!1,gn=!1,Ps=!1,on=bn.getUniforms(),An=Ae.uniforms;if(Xe.useProgram(bn.program)&&(pi=!0,gn=!0,Ps=!0),j.id!==U&&(U=j.id,gn=!0),pi||J!==T){Et.reverseDepthBuffer?(He.copy(T.projectionMatrix),D0(He),U0(He),on.setValue(D,"projectionMatrix",He)):on.setValue(D,"projectionMatrix",T.projectionMatrix),on.setValue(D,"viewMatrix",T.matrixWorldInverse);let Tn=on.map.cameraPosition;Tn!==void 0&&Tn.setValue(D,ft.setFromMatrixPosition(T.matrixWorld)),Et.logarithmicDepthBuffer&&on.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&on.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),J!==T&&(J=T,gn=!0,Ps=!0)}if(H.isSkinnedMesh){on.setOptional(D,H,"bindMatrix"),on.setOptional(D,H,"bindMatrixInverse");let Tn=H.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),on.setValue(D,"boneTexture",Tn.boneTexture,P))}H.isBatchedMesh&&(on.setOptional(D,H,"batchingTexture"),on.setValue(D,"batchingTexture",H._matricesTexture,P),on.setOptional(D,H,"batchingIdTexture"),on.setValue(D,"batchingIdTexture",H._indirectTexture,P),on.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&on.setValue(D,"batchingColorTexture",H._colorsTexture,P));let Is=Z.morphAttributes;if((Is.position!==void 0||Is.normal!==void 0||Is.color!==void 0)&&Ke.update(H,Z,bn),(gn||Ae.receiveShadow!==H.receiveShadow)&&(Ae.receiveShadow=H.receiveShadow,on.setValue(D,"receiveShadow",H.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(An.envMap.value=Ge,An.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&z.environment!==null&&(An.envMapIntensity.value=z.environmentIntensity),gn&&(on.setValue(D,"toneMappingExposure",M.toneMappingExposure),Ae.needsLights&&Ga(An,Ps),pe&&j.fog===!0&&we.refreshFogUniforms(An,pe),we.refreshMaterialUniforms(An,j,B,K,p.state.transmissionRenderTarget[T.id]),Rr.upload(D,Cs(Ae),An,P)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Rr.upload(D,Cs(Ae),An,P),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&on.setValue(D,"center",H.center),on.setValue(D,"modelViewMatrix",H.modelViewMatrix),on.setValue(D,"normalMatrix",H.normalMatrix),on.setValue(D,"modelMatrix",H.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let Tn=j.uniformsGroups;for(let Rn=0,ta=Tn.length;Rn<ta;Rn++){let nr=Tn[Rn];O.update(nr,bn),O.bind(nr,bn)}}return bn}function Ga(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function tr(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,z,Z){ue.get(T.texture).__webglTexture=z,ue.get(T.depthTexture).__webglTexture=Z;let j=ue.get(T);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Z===void 0,j.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,z){let Z=ue.get(T);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,Z=0){A=T,I=z,C=Z;let j=!0,H=null,pe=!1,Oe=!1;if(T){let Ge=ue.get(T);if(Ge.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(D.FRAMEBUFFER,null),j=!1;else if(Ge.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(Ge.__hasExternalTextures)P.rebindTextures(T,ue.get(T.texture).__webglTexture,ue.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let et=T.depthTexture;if(Ge.__boundDepthTexture!==et){if(et!==null&&ue.has(et)&&(T.width!==et.image.width||T.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}let st=T.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Oe=!0);let pt=ue.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(pt[z])?H=pt[z][Z]:H=pt[z],pe=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?H=ue.get(T).__webglMultisampledFramebuffer:Array.isArray(pt)?H=pt[Z]:H=pt,b.copy(T.viewport),w.copy(T.scissor),V=T.scissorTest}else b.copy(Pe).multiplyScalar(B).floor(),w.copy(Me).multiplyScalar(B).floor(),V=vt;if(Xe.bindFramebuffer(D.FRAMEBUFFER,H)&&j&&Xe.drawBuffers(T,H),Xe.viewport(b),Xe.scissor(w),Xe.setScissorTest(V),pe){let Ge=ue.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ge.__webglTexture,Z)}else if(Oe){let Ge=ue.get(T.texture),st=z||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ge.__webglTexture,Z||0,st)}U=-1},this.readRenderTargetPixels=function(T,z,Z,j,H,pe,Oe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=ue.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Oe!==void 0&&(Be=Be[Oe]),Be){Xe.bindFramebuffer(D.FRAMEBUFFER,Be);try{let Ge=T.texture,st=Ge.format,pt=Ge.type;if(!Et.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-j&&Z>=0&&Z<=T.height-H&&D.readPixels(z,Z,j,H,Qe.convert(st),Qe.convert(pt),pe)}finally{let Ge=A!==null?ue.get(A).__webglFramebuffer:null;Xe.bindFramebuffer(D.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(T,z,Z,j,H,pe,Oe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=ue.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Oe!==void 0&&(Be=Be[Oe]),Be){let Ge=T.texture,st=Ge.format,pt=Ge.type;if(!Et.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=T.width-j&&Z>=0&&Z<=T.height-H){Xe.bindFramebuffer(D.FRAMEBUFFER,Be);let et=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.bufferData(D.PIXEL_PACK_BUFFER,pe.byteLength,D.STREAM_READ),D.readPixels(z,Z,j,H,Qe.convert(st),Qe.convert(pt),0);let Ut=A!==null?ue.get(A).__webglFramebuffer:null;Xe.bindFramebuffer(D.FRAMEBUFFER,Ut);let _e=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await N0(D,_e,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pe),D.deleteBuffer(et),D.deleteSync(_e),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,z=null,Z=0){T.isTexture!==!0&&(ko("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1]);let j=Math.pow(2,-Z),H=Math.floor(T.image.width*j),pe=Math.floor(T.image.height*j),Oe=z!==null?z.x:0,Be=z!==null?z.y:0;P.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,Z,0,0,Oe,Be,H,pe),Xe.unbindTexture()},this.copyTextureToTexture=function(T,z,Z=null,j=null,H=0){T.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,T=arguments[1],z=arguments[2],H=arguments[3]||0,Z=null);let pe,Oe,Be,Ge,st,pt;Z!==null?(pe=Z.max.x-Z.min.x,Oe=Z.max.y-Z.min.y,Be=Z.min.x,Ge=Z.min.y):(pe=T.image.width,Oe=T.image.height,Be=0,Ge=0),j!==null?(st=j.x,pt=j.y):(st=0,pt=0);let et=Qe.convert(z.format),Ut=Qe.convert(z.type);P.setTexture2D(z,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);let _e=D.getParameter(D.UNPACK_ROW_LENGTH),Bt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),pn=D.getParameter(D.UNPACK_SKIP_PIXELS),Xt=D.getParameter(D.UNPACK_SKIP_ROWS),Ae=D.getParameter(D.UNPACK_SKIP_IMAGES),Ht=T.isCompressedTexture?T.mipmaps[H]:T.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ht.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ht.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Be),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ge),T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,H,st,pt,pe,Oe,et,Ut,Ht.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,H,st,pt,Ht.width,Ht.height,et,Ht.data):D.texSubImage2D(D.TEXTURE_2D,H,st,pt,pe,Oe,et,Ut,Ht),D.pixelStorei(D.UNPACK_ROW_LENGTH,_e),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Bt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,pn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ae),H===0&&z.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Xe.unbindTexture()},this.copyTextureToTexture3D=function(T,z,Z=null,j=null,H=0){T.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,j=arguments[1]||null,T=arguments[2],z=arguments[3],H=arguments[4]||0);let pe,Oe,Be,Ge,st,pt,et,Ut,_e,Bt=T.isCompressedTexture?T.mipmaps[H]:T.image;Z!==null?(pe=Z.max.x-Z.min.x,Oe=Z.max.y-Z.min.y,Be=Z.max.z-Z.min.z,Ge=Z.min.x,st=Z.min.y,pt=Z.min.z):(pe=Bt.width,Oe=Bt.height,Be=Bt.depth,Ge=0,st=0,pt=0),j!==null?(et=j.x,Ut=j.y,_e=j.z):(et=0,Ut=0,_e=0);let pn=Qe.convert(z.format),Xt=Qe.convert(z.type),Ae;if(z.isData3DTexture)P.setTexture3D(z,0),Ae=D.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)P.setTexture2DArray(z,0),Ae=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);let Ht=D.getParameter(D.UNPACK_ROW_LENGTH),Mt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),bn=D.getParameter(D.UNPACK_SKIP_PIXELS),pi=D.getParameter(D.UNPACK_SKIP_ROWS),gn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Bt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Bt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ge),D.pixelStorei(D.UNPACK_SKIP_ROWS,st),D.pixelStorei(D.UNPACK_SKIP_IMAGES,pt),T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Ae,H,et,Ut,_e,pe,Oe,Be,pn,Xt,Bt.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Ae,H,et,Ut,_e,pe,Oe,Be,pn,Bt.data):D.texSubImage3D(Ae,H,et,Ut,_e,pe,Oe,Be,pn,Xt,Bt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ht),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Mt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,bn),D.pixelStorei(D.UNPACK_SKIP_ROWS,pi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,gn),H===0&&z.generateMipmaps&&D.generateMipmap(Ae),Xe.unbindTexture()},this.initRenderTarget=function(T){ue.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),Xe.unbindTexture()},this.resetState=function(){I=0,C=0,A=null,Xe.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===hu?"display-p3":"srgb",t.unpackColorSpace=Yt.workingColorSpace===vl?"display-p3":"srgb"}};var Zo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ot(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Hr=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ea=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_h,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Vn=new L,wa=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.applyMatrix4(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.applyNormalMatrix(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.transformDirection(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),s=Kt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),s=Kt(s,this.array),r=Kt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Hf=new L,Vf=new $t,Gf=new $t,P_=new L,Wf=new yt,vo=new L,Tc=new ti,Xf=new yt,Rc=new Fr,Jo=class extends Ee{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$d,this.bindMatrix=new yt,this.bindMatrixInverse=new yt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,vo),this.boundingBox.expandByPoint(vo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ti),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,vo),this.boundingSphere.expandByPoint(vo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tc.copy(this.boundingSphere),Tc.applyMatrix4(s),e.ray.intersectsSphere(Tc)!==!1&&(Xf.copy(s).invert(),Rc.copy(e.ray).applyMatrix4(Xf),!(this.boundingBox!==null&&Rc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new $t,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$d?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===s0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Vf.fromBufferAttribute(s.attributes.skinIndex,e),Gf.fromBufferAttribute(s.attributes.skinWeight,e),Hf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Gf.getComponent(r);if(a!==0){let o=Vf.getComponent(r);Wf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(P_.copy(Hf).applyMatrix4(Wf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Aa=class extends dn{constructor(){super(),this.isBone=!0,this.type="Bone"}},Vr=class extends Ln{constructor(e=null,t=1,n=1,s,r,a,o,l,c=On,h=On,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Yf=new yt,I_=new yt,jo=class i{constructor(e=[],t=[]){this.uuid=Si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new yt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new yt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:I_;Yf.multiplyMatrices(o,t[r]),Yf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Vr(t,e,e,qn,Mi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Aa),this.bones.push(a),this.boneInverses.push(new yt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Ys=class extends Lt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Mr=new yt,$f=new yt,bo=[],qf=new Zn,L_=new yt,ha=new Ee,ua=new ti,Gr=class extends Ee{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ys(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,L_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mr),qf.copy(e.boundingBox).applyMatrix4(Mr),this.boundingBox.union(qf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mr),ua.copy(e.boundingSphere).applyMatrix4(Mr),this.boundingSphere.union(ua)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ha.geometry=this.geometry,ha.material=this.material,ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(n),e.ray.intersectsSphere(ua)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mr),$f.multiplyMatrices(n,Mr),ha.matrixWorld=$f,ha.raycast(e,bo);for(let a=0,o=bo.length;a<o;a++){let l=bo[a];l.instanceId=r,l.object=this,t.push(l)}bo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ys(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vr(new Float32Array(s*this.count),s,this.count,au,Mi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var oi=class extends ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Qo=new L,el=new L,Kf=new yt,da=new Fr,Mo=new ti,Cc=new L,Zf=new L,qi=class extends dn{constructor(e=new Zt,t=new oi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Qo.fromBufferAttribute(t,s-1),el.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Qo.distanceTo(el);e.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(s),Mo.radius+=r,e.ray.intersectsSphere(Mo)===!1)return;Kf.copy(s).invert(),da.copy(e.ray).applyMatrix4(Kf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,p=g-1;x<p;x+=c){let m=h.getX(x),y=h.getX(x+1),M=So(this,e,da,l,m,y);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(g-1),p=h.getX(f),m=So(this,e,da,l,x,p);m&&t.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,p=g-1;x<p;x+=c){let m=So(this,e,da,l,x,x+1);m&&t.push(m)}if(this.isLineLoop){let x=So(this,e,da,l,g-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function So(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(Qo.fromBufferAttribute(a,s),el.fromBufferAttribute(a,r),t.distanceSqToSegment(Qo,el,Cc,Zf)>n)return;Cc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Cc);if(!(l<e.near||l>e.far))return{distance:l,point:Zf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Jf=new L,jf=new L,Ki=class extends qi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Jf.fromBufferAttribute(t,s),jf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Jf.distanceTo(jf);e.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},tl=class extends qi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ta=class extends ni{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qf=new yt,kh=new Fr,Eo=new ti,wo=new L,$s=class extends dn{constructor(e=new Zt,t=new Ta){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(s),Eo.radius+=r,e.ray.intersectsSphere(Eo)===!1)return;Qf.copy(s).invert(),kh.copy(e.ray).applyMatrix4(Qf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let p=c.getX(g);wo.fromBufferAttribute(u,p),ep(wo,p,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)wo.fromBufferAttribute(u,g),ep(wo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ep(i,e,t,n,s,r,a){let o=kh.distanceSqToPoint(i);if(o<t){let l=new L;kh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var nl=class extends Ln{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},li=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ze:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,s=[],r=[],a=[],o=new L,l=new yt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Mn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Mn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ra=class extends li{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ze){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Fh=class extends Ra{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function fu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Ao=new L,Pc=new fu,Ic=new fu,Lc=new fu,Oh=class extends li{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ao.subVectors(s[0],s[1]).add(s[0]),c=Ao);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ao.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ao),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Pc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,p),Ic.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,p),Lc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(Pc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ic.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Lc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Pc.calc(l),Ic.calc(l),Lc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function tp(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function N_(i,e){let t=1-i;return t*t*e}function D_(i,e){return 2*(1-i)*i*e}function U_(i,e){return i*i*e}function ya(i,e,t,n){return N_(i,e)+D_(i,t)+U_(i,n)}function k_(i,e){let t=1-i;return t*t*t*e}function F_(i,e){let t=1-i;return 3*t*t*i*e}function O_(i,e){return 3*(1-i)*i*i*e}function z_(i,e){return i*i*i*e}function _a(i,e,t,n,s){return k_(i,e)+F_(i,t)+O_(i,n)+z_(i,s)}var il=class extends li{constructor(e=new ze,t=new ze,n=new ze,s=new ze){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ze){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_a(e,s.x,r.x,a.x,o.x),_a(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zh=class extends li{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_a(e,s.x,r.x,a.x,o.x),_a(e,s.y,r.y,a.y,o.y),_a(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sl=class extends li{constructor(e=new ze,t=new ze){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ze){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ze){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bh=class extends li{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rl=class extends li{constructor(e=new ze,t=new ze,n=new ze){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ze){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ya(e,s.x,r.x,a.x),ya(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hh=class extends li{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ya(e,s.x,r.x,a.x),ya(e,s.y,r.y,a.y),ya(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},al=class extends li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ze){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(tp(o,l.x,c.x,h.x,u.x),tp(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ze().fromArray(s))}return this}},np=Object.freeze({__proto__:null,ArcCurve:Fh,CatmullRomCurve3:Oh,CubicBezierCurve:il,CubicBezierCurve3:zh,EllipseCurve:Ra,LineCurve:sl,LineCurve3:Bh,QuadraticBezierCurve:rl,QuadraticBezierCurve3:Hh,SplineCurve:al}),Vh=class extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new np[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new np[s.type]().fromJSON(s))}return this}},Gh=class extends Vh{constructor(e){super(),this.type="Path",this.currentPoint=new ze,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new sl(this.currentPoint.clone(),new ze(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new rl(this.currentPoint.clone(),new ze(e,t),new ze(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new il(this.currentPoint.clone(),new ze(e,t),new ze(n,s),new ze(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new al(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Ra(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ca=class i extends Zt{constructor(e=[new ze(0,-.5),new ze(.5,0),new ze(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Mn(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new L,d=new ze,f=new L,g=new L,x=new L,p=0,m=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:p=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:p=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=t;y++){let M=n+y*h*s,_=Math.sin(M),I=Math.cos(M);for(let C=0;C<=e.length-1;C++){u.x=e[C].x*_,u.y=e[C].y,u.z=e[C].x*I,a.push(u.x,u.y,u.z),d.x=y/t,d.y=C/(e.length-1),o.push(d.x,d.y);let A=l[3*C+0]*_,U=l[3*C+1],J=l[3*C+0]*I;c.push(A,U,J)}}for(let y=0;y<t;y++)for(let M=0;M<e.length-1;M++){let _=M+y*e.length,I=_,C=_+e.length,A=_+e.length+1,U=_+1;r.push(I,C,U),r.push(A,U,C)}this.setIndex(r),this.setAttribute("position",new Vt(a,3)),this.setAttribute("uv",new Vt(o,2)),this.setAttribute("normal",new Vt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},ol=class i extends Ca{constructor(e=1,t=1,n=4,s=8){let r=new Gh;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}};var wn=class i extends Zt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],p=n/2,m=0;y(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(d,3)),this.setAttribute("uv",new Vt(f,2));function y(){let _=new L,I=new L,C=0,A=(t-e)/n;for(let U=0;U<=r;U++){let J=[],b=U/r,w=b*(t-e)+e;for(let V=0;V<=s;V++){let F=V/s,q=F*l+o,se=Math.sin(q),K=Math.cos(q);I.x=w*se,I.y=-b*n+p,I.z=w*K,u.push(I.x,I.y,I.z),_.set(se,A,K).normalize(),d.push(_.x,_.y,_.z),f.push(F,1-b),J.push(g++)}x.push(J)}for(let U=0;U<s;U++)for(let J=0;J<r;J++){let b=x[J][U],w=x[J+1][U],V=x[J+1][U+1],F=x[J][U+1];e>0&&(h.push(b,w,F),C+=3),t>0&&(h.push(w,V,F),C+=3)}c.addGroup(m,C,0),m+=C}function M(_){let I=g,C=new ze,A=new L,U=0,J=_===!0?e:t,b=_===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,p*b,0),d.push(0,b,0),f.push(.5,.5),g++;let w=g;for(let V=0;V<=s;V++){let q=V/s*l+o,se=Math.cos(q),K=Math.sin(q);A.x=J*K,A.y=p*b,A.z=J*se,u.push(A.x,A.y,A.z),d.push(0,b,0),C.x=se*.5+.5,C.y=K*.5*b+.5,f.push(C.x,C.y),g++}for(let V=0;V<s;V++){let F=I+V,q=w+V;_===!0?h.push(q,q+1,F):h.push(q+1,q,F),U+=3}c.addGroup(m,U,_===!0?1:2),m+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ll=class i extends wn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wh=class i extends Zt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(r.slice(),3)),this.setAttribute("uv",new Vt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let M=new L,_=new L,I=new L;for(let C=0;C<t.length;C+=3)f(t[C+0],M),f(t[C+1],_),f(t[C+2],I),l(M,_,I,y)}function l(y,M,_,I){let C=I+1,A=[];for(let U=0;U<=C;U++){A[U]=[];let J=y.clone().lerp(_,U/C),b=M.clone().lerp(_,U/C),w=C-U;for(let V=0;V<=w;V++)V===0&&U===C?A[U][V]=J:A[U][V]=J.clone().lerp(b,V/w)}for(let U=0;U<C;U++)for(let J=0;J<2*(C-U)-1;J++){let b=Math.floor(J/2);J%2===0?(d(A[U][b+1]),d(A[U+1][b]),d(A[U][b])):(d(A[U][b+1]),d(A[U+1][b+1]),d(A[U+1][b]))}}function c(y){let M=new L;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(y),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function h(){let y=new L;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];let _=p(y)/2/Math.PI+.5,I=m(y)/Math.PI+.5;a.push(_,1-I)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let M=a[y+0],_=a[y+2],I=a[y+4],C=Math.max(M,_,I),A=Math.min(M,_,I);C>.9&&A<.1&&(M<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),I<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,M){let _=y*3;M.x=e[_+0],M.y=e[_+1],M.z=e[_+2]}function g(){let y=new L,M=new L,_=new L,I=new L,C=new ze,A=new ze,U=new ze;for(let J=0,b=0;J<r.length;J+=9,b+=6){y.set(r[J+0],r[J+1],r[J+2]),M.set(r[J+3],r[J+4],r[J+5]),_.set(r[J+6],r[J+7],r[J+8]),C.set(a[b+0],a[b+1]),A.set(a[b+2],a[b+3]),U.set(a[b+4],a[b+5]),I.copy(y).add(M).add(_).divideScalar(3);let w=p(I);x(C,b+0,y,w),x(A,b+2,M,w),x(U,b+4,_,w)}}function x(y,M,_,I){I<0&&y.x===1&&(a[M]=y.x-1),_.x===0&&_.z===0&&(a[M]=I/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var To=new L,Ro=new L,Nc=new L,Co=new ps,Pa=class extends Zt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Ar*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:p,c:m}=Co;if(x.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),Co.getNormal(Nc),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){let M=(y+1)%3,_=u[y],I=u[M],C=Co[h[y]],A=Co[h[M]],U=`${_}_${I}`,J=`${I}_${_}`;J in d&&d[J]?(Nc.dot(d[J].normal)<=r&&(f.push(C.x,C.y,C.z),f.push(A.x,A.y,A.z)),d[J]=null):U in d||(d[U]={index0:c[y],index1:c[M],normal:Nc.clone()})}}for(let g in d)if(d[g]){let{index0:x,index1:p}=d[g];To.fromBufferAttribute(o,x),Ro.fromBufferAttribute(o,p),f.push(To.x,To.y,To.z),f.push(Ro.x,Ro.y,Ro.z)}this.setAttribute("position",new Vt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var cl=class i extends Wh{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Zi=class i extends Zt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new L,g=new ze;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){let m=r+p/n*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let p=x*(n+1);for(let m=0;m<n;m++){let y=m+p,M=y,_=y+n+1,I=y+n+2,C=y+1;o.push(M,_,C),o.push(_,I,C)}}this.setIndex(o),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Un=class i extends Zt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new L,d=new L,f=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){let y=[],M=m/n,_=0;m===0&&a===0?_=.5/t:m===n&&l===Math.PI&&(_=-.5/t);for(let I=0;I<=t;I++){let C=I/t;u.x=-e*Math.cos(s+C*r)*Math.sin(a+M*o),u.y=e*Math.cos(a+M*o),u.z=e*Math.sin(s+C*r)*Math.sin(a+M*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(C+_,1-M),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){let M=h[m][y+1],_=h[m][y],I=h[m+1][y],C=h[m+1][y+1];(m!==0||a>0)&&f.push(M,_,C),(m!==n-1||l<Math.PI)&&f.push(_,I,C)}this.setIndex(f),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var hl=class i extends Zt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,p=f/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(x),u.y=(e+t*Math.cos(p))*Math.sin(x),u.z=t*Math.sin(p),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,y=(s+1)*f+g;a.push(x,p,y),a.push(p,m,y)}this.setIndex(a),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var en=class extends ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bp,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},si=class extends en{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Po(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function B_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function H_(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function ip(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Ip(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var vs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xh=class extends vs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qd,endingEnd:qd}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kd:r=e,o=2*t-n;break;case Zd:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Kd:a=e,l=2*n-t;break;case Zd:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,p=x*g,m=-d*p+2*d*x-d*g,y=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,M=(-1-f)*p+(1.5+f)*x+.5*g,_=f*p-f*x;for(let I=0;I!==o;++I)r[I]=m*a[h+I]+y*a[c+I]+M*a[l+I]+_*a[u+I];return r}},Yh=class extends vs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},$h=class extends vs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ci=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Po(t,this.TimeBufferType),this.values=Po(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Po(e.times,Array),values:Po(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $h(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Dr:t=this.InterpolantFactoryMethodDiscrete;break;case Ur:t=this.InterpolantFactoryMethodLinear;break;case Ql:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dr;case this.InterpolantFactoryMethodLinear:return Ur;case this.InterpolantFactoryMethodSmooth:return Ql}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&B_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ql,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=Ur;var bs=class extends ci{constructor(e,t,n){super(e,t,n)}};bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=Dr;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends ci{};ul.prototype.ValueTypeName="color";var Ji=class extends ci{};Ji.prototype.ValueTypeName="number";var qh=class extends vs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ei.slerpFlat(r,0,a,c-o,a,c,l);return r}},ji=class extends ci{InterpolantFactoryMethodLinear(e){return new qh(this.times,this.values,this.getValueSize(),e)}};ji.prototype.ValueTypeName="quaternion";ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Ms=class extends ci{constructor(e,t,n){super(e,t,n)}};Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=Dr;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends ci{};Qi.prototype.ValueTypeName="vector";var dl=class{constructor(e="",t=-1,n=[],s=r0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Si(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(G_(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(ci.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=H_(l);l=ip(l,1,h),c=ip(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ji(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,x){if(f.length!==0){let p=[],m=[];Ip(f,p,m,g),p.length!==0&&x.push(new u(d,p,m))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let p=[],m=[];for(let y=0;y!==d[g].morphTargets.length;++y){let M=d[g];p.push(M.time),m.push(M.morphTarget===x?1:0)}s.push(new Ji(".morphTargetInfluence["+x+"]",p,m))}l=f.length*a}else{let f=".bones["+t[u].name+"]";n(Qi,f+".position",d,"pos",s),n(ji,f+".quaternion",d,"rot",s),n(Qi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function V_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ji;case"vector":case"vector2":case"vector3":case"vector4":return Qi;case"color":return ul;case"quaternion":return ji;case"bool":case"boolean":return bs;case"string":return Ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function G_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=V_(i.type);if(i.times===void 0){let t=[],n=[];Ip(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var ms={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Kh=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},W_=new Kh,es=class{constructor(e){this.manager=e!==void 0?e:W_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};es.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hi={},Zh=class extends Error{constructor(e,t){super(e),this.response=t}},Ia=class extends es{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ms.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Hi[e]!==void 0){Hi[e].push({onLoad:t,onProgress:n,onError:s});return}Hi[e]=[],Hi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Hi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,p=new ReadableStream({start(m){y();function y(){u.read().then(({done:M,value:_})=>{if(M)m.close();else{x+=_.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let C=0,A=h.length;C<A;C++){let U=h[C];U.onProgress&&U.onProgress(I)}m.enqueue(_),y()}},M=>{m.error(M)})}}});return new Response(p)}else throw new Zh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ms.add(e,c);let h=Hi[e];delete Hi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Hi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Hi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Jh=class extends es{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ms.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Ma("img");function l(){h(),ms.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Wr=class extends es{constructor(e){super(e)}load(e,t,n,s){let r=new Ln,a=new Jh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Xr=class extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},fl=class extends Xr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Dc=new yt,sp=new L,rp=new L,La=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sa,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;sp.setFromMatrixPosition(e.matrixWorld),t.position.copy(sp),rp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rp),t.updateMatrixWorld(),Dc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},jh=class extends La{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=kr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},pl=class extends Xr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new jh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ap=new yt,fa=new L,Uc=new L,Qh=class extends La{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new $t(2,1,1,1),new $t(0,1,1,1),new $t(3,1,1,1),new $t(1,1,1,1),new $t(3,0,1,1),new $t(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),fa.setFromMatrixPosition(e.matrixWorld),n.position.copy(fa),Uc.copy(n.position),Uc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Uc),n.updateMatrixWorld(),s.makeTranslation(-fa.x,-fa.y,-fa.z),ap.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ap)}},Yr=class extends Xr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Qh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},eu=class extends La{constructor(){super(new zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$r=class extends Xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new eu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ss=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ml=class extends es{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ms.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ms.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ms.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ms.add(e,l),r.manager.itemStart(e)}};var gl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=op(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=op();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function op(){return performance.now()}var pu="\\[\\]\\.:\\/",X_=new RegExp("["+pu+"]","g"),mu="[^"+pu+"]",Y_="[^"+pu.replace("\\.","")+"]",$_=/((?:WC+[\/:])*)/.source.replace("WC",mu),q_=/(WCOD+)?/.source.replace("WCOD",Y_),K_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mu),Z_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mu),J_=new RegExp("^"+$_+q_+K_+Z_+"$"),j_=["material","materials","bones","map"],tu=class{constructor(e,t,n){let s=n||rn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(X_,"")}static parseTrackName(e){let t=J_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);j_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rn.Composite=tu;rn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rn.prototype.GetterByBindingType=[rn.prototype._getValue_direct,rn.prototype._getValue_array,rn.prototype._getValue_arrayElement,rn.prototype._getValue_toArray];rn.prototype.SetterByBindingTypeAndVersioning=[[rn.prototype._setValue_direct,rn.prototype._setValue_direct_setNeedsUpdate,rn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_array,rn.prototype._setValue_array_setNeedsUpdate,rn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_arrayElement,rn.prototype._setValue_arrayElement_setNeedsUpdate,rn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rn.prototype._setValue_fromArray,rn.prototype._setValue_fromArray_setNeedsUpdate,rn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Uv=new Float32Array(1);var xl=class extends Ki{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Zt;r.setIndex(new Lt(n,1)),r.setAttribute("position",new Vt(s,3)),super(r,new oi({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var Wn={hull:{de:"Hallenh\xFClle / Tragwerk",en:"Hall envelope / structure",rho:0,c:"#7d8799"},concrete:{de:"Beton",en:"Concrete",rho:2400,c:"#b8bcc4"},steel:{de:"Stahl",en:"Steel",rho:7850,c:"#4da6ff"},brick:{de:"Ziegelbruch (Sch\xFCttgut)",en:"Brick rubble (bulk)",rho:1400,c:"#c99a5b"},hazard:{de:"Schadstoff (Asbest)",en:"Hazardous (asbestos)",rho:1e3,c:"#ff5a5f"},wood:{de:"Holz",en:"Wood",rho:600,c:"#e0b07a"},soil:{de:"Sch\xFCttgut (Stein, Sand)",en:"Bulk material (stone, sand)",rho:1700,c:"#a8b06a"},masonry:{de:"Mauerwerk / Trockenbau",en:"Masonry / drywall",rho:1200,c:"#c8d2e0"},mixed:{de:"Sonstiges / Technik",en:"Other / equipment",rho:0,c:"#9b8cff"},none:{de:"Personen & Fahrzeuge",en:"People & vehicles",rho:0,c:"#5fd38d"}};var ts=[{id:"seg",st:"uc1",key:"G",icon:"\u25E7",t:be("Semantische Segmentierung","Semantic segmentation"),d:be("Die ganze Szene in Umgebung \xB7 Boden \xB7 Ziel \u2013 Ziel sind alle wichtigen Objekte (Klassen wie in Artefakt A1).","The whole scene as environment \xB7 floor \xB7 target \u2013 targets are all relevant objects (classes as in artefact A1).")},{id:"search",st:"uc2",key:"Z",icon:"\u2315",t:be("Zero-Shot-Suche","Zero-shot search"),d:be("Textprompt \u2192 Objekt-Cluster mit Bounding Box, ohne Training \u2013 wie GroundingDINO \u2192 SAM (Artefakt A3).","Text prompt \u2192 object clusters with bounding boxes, no training \u2013 like GroundingDINO \u2192 SAM (artefact A3).")},{id:"heat",st:"uc3",key:"H",icon:"\u25A6",t:be("Merkmals-Heatmap","Feature heatmap"),d:be("Die 16 Eingangsmerkmale des RandLA-Net (k = 30) auf jedem Punkt \u2013 plus Ebenheit des Hallenbodens.","The 16 RandLA-Net input features (k = 30) on every point \u2013 plus hall floor flatness.")},{id:"xray",st:"uc4",key:"X",icon:"\u29C9",t:be("Soll-Ist-Overlay","As-planned vs. as-built"),d:be("Das Planungsmodell liegt \xFCber dem Scan: gr\xFCn verifiziert, orange abweichend, rot geplant aber nicht im Scan \u2013 am ReStage-Demonstrator mit der echten Objektverifikation (Artefakt A2).","The planning model sits on top of the scan: green verified, orange deviating, red planned but not in the scan \u2013 on the ReStage demonstrator with the real object verification (artefact A2).")},{id:"mesh",st:"uc5",key:"M",icon:"\u25B3",t:be("Scan-to-Mesh & Modell","Scan-to-mesh & model"),d:be("Live-Oberfl\xE4chen (Marching Cubes) mit einstellbarer Feinheit, objektweise \u2013 oder das nachmodellierte Modell.","Live surfaces (marching cubes) with adjustable detail, per object \u2013 or the reconstructed model.")},{id:"cut",st:"uc5",key:"5",icon:"\u229F",t:be("Schnittebene","Section plane"),d:be("Horizontal-, L\xE4ngs- oder Querschnitt durch Punktwolke, Mesh und Modell \u2013 die Schnittkante leuchtet, wie in der Planungssoftware.","Horizontal, longitudinal or cross section through point cloud, mesh and model \u2013 the cut edge lights up, as in planning software.")},{id:"mat",st:"uc6",key:"V",icon:"\u2B22",t:be("Materialkataster","Material register"),d:be("Jeder Punkt nach Material, Mengen und Massen aus dem Modell \u2013 Grundlage f\xFCr R\xFCckbau und Kreislauf.","Every point by material, quantities and masses from the model \u2013 the basis for deconstruction and circularity.")},{id:"net",st:"uc7",icon:"\u2316",passive:!0,t:be("Scanner-Netzwerk","Scanner network"),d:be("Station\xE4re Laserscanner: bis zu 6 statt 3 gleichzeitig \u2013 wie das LiDAR-Netz der Smart City.","Stationary laser scanners: up to 6 instead of 3 at once \u2013 like the smart-city LiDAR network.")},{id:"nbv",st:"uc7",key:"Y",icon:"\u233E",t:be("Scan-Planer (Next Best View)","Scan planner (next best view)"),d:be("Schl\xE4gt die n\xE4chsten TLS-Standpunkte vor: gr\xF6\xDFter erwarteter Neuzuwachs bei wenig Verdeckung \u2013 weniger Standpunkte, weniger Akku.","Suggests the next TLS positions: largest expected gain with little occlusion \u2013 fewer set-ups, less battery.")},{id:"therm",st:"uc8",key:"I",icon:"\u2668",t:be("Thermalkamera","Thermal camera"),d:be("W\xE4rmebild wie im WAAM-Monitoring: frische Schichten gl\xFChen, Anlagen und Personen sind warm.","Thermal view as in WAAM monitoring: fresh layers glow, machines and people are warm.")},{id:"measure",st:"uc9",key:"N",icon:"\u27F7",t:be("Messwerkzeug","Measuring tool"),d:be("Zwei Punkte anklicken \u2192 Abstand in mm, direkt in der Punktwolke.","Click two points \u2192 distance in mm, directly in the point cloud.")},{id:"ask",st:"docs",key:"B",icon:"\u275D",t:be("Frag das Lab","Ask the lab"),d:be("Fragen zum Scan \u2013 Antworten aus Scan, Segmentierung und Modell, immer mit Quelle (regelbasiert, offline).","Questions about the scan \u2013 answers from scan, segmentation and model, always with a source (rule-based, offline).")},{id:"auto",st:"talks",key:"O",icon:"\u2708",t:be("Autopilot","Autopilot"),d:be("Pr\xE4sentationsmodus: Die Drohne fliegt, scannt und l\xE4dt selbst und zeigt jede Station.","Presentation mode: the drone flies, scans and charges by itself and presents every station.")},{id:"range",st:"profile",icon:"\u21F2",passive:!0,t:be("Reichweiten-Upgrade","Range upgrade"),d:be("+50 % Scanreichweite f\xFCr alle Technologien.","+50 % scanning range for every technology.")},{id:"icp",st:"bonus",key:"R",icon:"\u229B",t:be("Registrierung (ICP)","Registration (ICP)"),d:be("SLAM-Drift beseitigen: Scans per ICP auf die Zielmarken registrieren (Artefakt A2).","Remove SLAM drift: register scans to the targets via ICP (artefact A2).")}],Lp=[{id:"labels",key:"L",icon:"\u{1F3F7}",t:be("Labels","Labels")},{id:"plan",key:"K",icon:"\u25A4",t:be("Grundriss","Floor plan")},{id:"proj",key:"J",icon:"\u25EB",t:be("Projektionen","Projections")},{id:"pano",key:"U",icon:"\u25CE",t:be("360\xB0-Panoramen","360\xB0 panoramas")}],gu=[{id:"drone",key:"1",icon:"\u2723",t:be("Drohne \xB7 UAV-LiDAR","Drone \xB7 UAV LiDAR"),d:be("Aus der Luft, gro\xDFfl\xE4chig. H\xF6her fliegen = breiterer Scan. Akku h\xE4lt nicht ewig.","From above, large areas. Fly higher = wider scan. The battery does not last forever."),dt:be("Joystick links fliegen, \u2912 \u2913 H\xF6he, ein Finger dreht die Ansicht, zwei Finger zoomen.","Left joystick flies, \u2912 \u2913 altitude, one finger turns the view, two fingers zoom.")},{id:"handheld",key:"2",icon:"\u25C9",t:be("Handheld \xB7 SLAM","Handheld \xB7 SLAM"),d:be("Ego-Perspektive am Boden. Leertaste halten = scannen, wohin du schaust.","First person on the ground. Hold space = scan where you look."),dt:be("Ego-Perspektive. Joystick gehen, Finger umsehen, \u25CF halten = scannen, wohin du schaust.","First person. Joystick walks, finger looks around, hold \u25CF = scan where you look.")},{id:"tls",key:"3",icon:"\u2295",t:be("Station\xE4r \xB7 TLS","Stationary \xB7 TLS"),d:be("Scanner aufstellen (P), dann alle gleichzeitig scannen (Leertaste) \u2013 mit echten Scan-Schatten und 360\xB0-Panorama.","Set up scanners (P), then scan with all at once (space) \u2013 with real scan shadows and 360\xB0 panoramas."),dt:be("\u2295 Scanner aufstellen, \u25B6 alle gleichzeitig scannen \u2013 mit echten Scan-Schatten und 360\xB0-Panorama.","\u2295 set up scanners, \u25B6 scan with all at once \u2013 with real scan shadows and 360\xB0 panoramas.")}],qs=[{k:"x",t:be("Koordinate x","coordinate x"),i:0},{k:"y",t:be("Koordinate y","coordinate y"),i:2},{k:"z",t:be("Koordinate z (H\xF6he)","coordinate z (height)"),i:1},{k:"nx",t:be("Normale x","normal x"),i:3},{k:"ny",t:be("Normale y","normal y"),i:5},{k:"nz",t:be("Normale z (vertikal)","normal z (vertical)"),i:4},{k:"planarity",t:be("Planarit\xE4t (\u03BB\u2082\u2212\u03BB\u2083)/\u03BB\u2081 \u2013 Fl\xE4chen","planarity (\u03BB\u2082\u2212\u03BB\u2083)/\u03BB\u2081 \u2013 surfaces"),i:6},{k:"density",t:be("Punktdichte im mittleren Radius","point density in mean radius"),i:7},{k:"anisotropy",t:be("Anisotropie (\u03BB\u2081\u2212\u03BB\u2083)/\u03BB\u2081","anisotropy (\u03BB\u2081\u2212\u03BB\u2083)/\u03BB\u2081"),i:8},{k:"sphericity",t:be("Sph\xE4rizit\xE4t \u03BB\u2083/\u03BB\u2081 \u2013 Volumen, Streuung","sphericity \u03BB\u2083/\u03BB\u2081 \u2013 volume, scatter"),i:9},{k:"curvature",t:be("Kr\xFCmmung \u03BB\u2083/\u03A3\u03BB \u2013 Kanten","curvature \u03BB\u2083/\u03A3\u03BB \u2013 edges"),i:10},{k:"linearity",t:be("Linearit\xE4t (\u03BB\u2081\u2212\u03BB\u2082)/\u03BB\u2081 \u2013 St\xE4be, Kanten","linearity (\u03BB\u2081\u2212\u03BB\u2082)/\u03BB\u2081 \u2013 bars, edges"),i:11},{k:"omnivariance",t:be("Omnivarianz \u221B(\u03BB\u2081\u03BB\u2082\u03BB\u2083)","omnivariance \u221B(\u03BB\u2081\u03BB\u2082\u03BB\u2083)"),i:12},{k:"eigenentropy",t:be("Eigenentropie \u2212\u03A3\u03BB\xB7ln \u03BB","eigenentropy \u2212\u03A3\u03BB\xB7ln \u03BB"),i:13},{k:"eigen_sum",t:be("Eigenwertsumme \u03A3\u03BB","sum of eigenvalues \u03A3\u03BB"),i:14},{k:"gravity_dist",t:be("Abstand zum Schwerpunkt dichter Bereiche","distance to centre of dense regions"),i:15},{k:"flatness",t:be("Ebenheit Hallenboden \xB14 cm (Ausgleichsebene)","hall floor flatness \xB14 cm (best-fit plane)"),i:16}],Sl={auto:["fahrzeug","vehicle"],car:["fahrzeug","vehicle"],pkw:["fahrzeug"],mensch:["person","people"],menschen:["person","people"],human:["person","people"],personen:["person"],people:["person"],fahrrad:["radfahrer","cyclist"],bike:["radfahrer","cyclist"],stahl:["stahl","steel","tr\xE4ger","beam","st\xFCtze","binder"],steel:["stahl","steel","beam","column","truss"],bewehrung:["stab","bar"],rebar:["stab","bar"],maschine:["anlage","line"],machine:["anlage","line"],m\u00F6bel:["tisch","stuhl","furniture"],stuhl:["stuhl","chair"],chair:["chair"],tisch:["tisch","table"],roboter:["wand","wall"],drucker:["wand","wall"],waam:["wand","wall"],asbest:["asbest","asbestos","big bag"],schadstoff:["asbest","asbestos","big bag"],assembly:["baugruppe","assembl"],assemblies:["baugruppe","assembl"],baugruppe:["baugruppe","assembl"],stahlbaugruppe:["stahlbaugruppe","steel assembl"],lager:["lager","storage"],storage:["lager","storage"],excavator:["bagger","excavator"],digger:["bagger","excavator"],crane:["kran","crane","jecko"],minicrane:["jecko"],vehicle:["fahrzeug","vehicle"],truck:["fahrzeug","vehicle"],cyclist:["radfahrer","cyclist"],bicycle:["radfahrer","cyclist"],pedestrian:["person"],worker:["person"],building:["demonstrator"],house:["demonstrator"],module:["demonstrator"],demonstrator:["demonstrator"],wood:["holz","timber","auflager","support"],timber:["holz","timber"],lumber:["holz","timber"],holz:["holz","timber","auflager"],furniture:["tisch","stuhl","table","chair"],table:["tisch","table"],door:["t\xFCr","door"],window:["fenster","window"],wall:["wand","wall"],walls:["wand","wall"],column:["st\xFCtze","column"],beam:["tr\xE4ger","beam"],truss:["binder","truss"],bracing:["verband","bracing"],sensor:["sensor"],conveyor:["rollenbahn","conveyor"],hazardous:["asbest","asbestos","big bag"],asbestos:["asbest","asbestos","big bag"],bigbag:["big bag"],bag:["big bag"],documents:["lieferschein","werkszeugnis","gutachten","dokumente"],document:["lieferschein","werkszeugnis","gutachten"],certificate:["werkszeugnis"],stage:["b\xFChne","stage"],screen:["leinwand","screen"],lectern:["rednerpult","lectern"],tripod:["stativ","tripod"],sphere:["zielkugel"],targets:["zielkugel"],sch\u00FCttgut:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],schuettgut:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],haufen:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],sand:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],sandhaufen:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],steinhaufen:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],kies:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],schotter:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],schutt:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],bauschutt:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],erde:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],pile:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],bulk:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],rubble:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],gravel:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],stones:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],steine:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],dokument:["lieferschein","werkszeugnis","gutachten","dokumente"],pdf:["dokumente","documents"],scanner:["laserscanner","laser scanner"],kugel:["zielkugel"],target:["zielkugel","target"]};var Q_=i=>[parseInt(i.slice(1,3),16)/255,parseInt(i.slice(3,5),16)/255,parseInt(i.slice(5,7),16)/255],zt=(i,e,t,n,s)=>({name:be(i,e),c:Q_(t),m:n,inst:s}),ns=(i,e,t)=>Array.from({length:t},(n,s)=>be(`${i} ${s+1}`,`${e} ${s+1}`)),lt=[{id:"uc1",kind:"uc",uc:1,t:be("Vorfertigung & QC","Prefab QC"),x:-12,z:-14,r:3.2,c:"#4da6ff",parts:[zt("Stahltr\xE4ger","steel beam","#4da6ff","steel"),zt("Kopfplatten","end plates","#5fd38d","steel",ns("Kopfplatte","end plate",2)),zt("Auflager","supports","#9aa8b8","wood",ns("Auflager","support",2))]},{id:"uc2",kind:"uc",uc:2,t:be("Material & Ressourcen","Material & resources"),x:-8,z:49.5,r:6,c:"#ffb547",parts:[zt("Bagger","excavator","#ffb547","mixed"),zt("Sch\xFCttgut \xB7 Steinhaufen (echt)","bulk material \xB7 stone pile (real)","#e0b07a","soil"),zt("Minikran Jecko (echt)","Jecko mini crane (real)","#ff8a5b","mixed")]},{id:"uc3",kind:"uc",uc:3,t:be("Fortschritt & Qualit\xE4t","Progress & quality"),x:3,z:41,r:6,c:"#5fd38d",parts:[zt("ReStage-Demonstrator \xB7 21 von 119 Bauteilen verifiziert","ReStage demonstrator \xB7 21 of 119 components verified","#c8d2e0","mixed"),zt("Stahlbaugruppen \xB7 Lager (echt)","steel assemblies \xB7 storage (real)","#4da6ff","steel")]},{id:"uc4",kind:"uc",uc:4,t:be("Digital Operations","Digital operations"),x:6,z:-14,r:3.2,c:"#ff8a5b",parts:[zt("S\xE4ge-Bohr-Anlage \xB7 Warnung","saw-drill line \xB7 warning","#ff8a5b","mixed"),zt("Rollenbahn","roller conveyor","#9aa8b8","steel",ns("Rollenbahn","conveyor",2)),zt("Sensoren \xB7 4 live","sensors \xB7 4 live","#5fd38d","mixed",ns("Sensor","sensor",4))]},{id:"uc5",kind:"uc",uc:5,t:be("Scan-to-BIM","Scan-to-BIM"),x:-11,z:2,r:3.4,c:"#9b8cff",parts:[zt("W\xE4nde \xB7 0,24 m","walls \xB7 0.24 m","#c8d2e0","masonry"),zt("T\xFCr & Fenster \xB7 1,01 \xD7 2,10 m","door & window \xB7 1.01 \xD7 2.10 m","#8bd17c","wood",[be("T\xFCr","door"),be("Fenster","window")]),zt("M\xF6bel \xB7 Tisch, 4 St\xFChle","furniture \xB7 table, 4 chairs","#e0b07a","wood",[be("Tisch","table"),...ns("Stuhl","chair",4)])]},{id:"uc6",kind:"uc",uc:6,t:be("Brownfield & Kreislauf","Brownfield & circularity"),x:4.5,z:53,r:5,c:"#ff5a5f",parts:[zt("Sch\xFCttgut \xB7 Ziegelbruch","bulk material \xB7 brick rubble","#c99a5b","brick"),zt("Big Bags \xB7 Asbest","big bags \xB7 asbestos","#ff5a5f","hazard",ns("Big Bag","big bag",8)),zt("Stahl \xB7 wiederverwendbar","steel \xB7 reusable","#4da6ff","steel",ns("Stahlprofil","steel section",4)),zt("Holzlager \xB7 wiederverwendbar (echt)","timber storage \xB7 reusable (real)","#e0b07a","wood")]},{id:"uc7",kind:"uc",uc:7,t:be("Smart City","Smart city"),x:4,z:22,r:3.8,c:"#5ce1e6",parts:[zt("Fahrzeug","vehicle","#4da6ff","none"),zt("Personen \xB7 3","people \xB7 3","#5fd38d","none",ns("Person","person",3)),zt("Radfahrer","cyclist","#c792ea","none")]},{id:"uc8",kind:"uc",uc:8,t:be("WAAM \xB7 In-situ","WAAM \xB7 in-situ"),x:10,z:2,r:3.2,c:"#ffcf70",parts:[zt("Wand A \xB7 45,9 mm \xB7 19,6\xB0","wall A \xB7 45.9 mm \xB7 19.6\xB0","#5fd38d","steel"),zt("Wand B \xB7 29,4 mm \xB7 27,5\xB0","wall B \xB7 29.4 mm \xB7 27.5\xB0","#ff8a8a","steel"),zt("Grundplatte","base plate","#9aa8b8","steel")]},{id:"uc9",kind:"uc",uc:9,t:be("Bewehrungspr\xFCfung","Rebar inspection"),x:-22,z:6,r:3.4,c:"#ff5a5f",parts:[zt("St\xE4be \xB7 konform","bars \xB7 conform","#5fd38d","steel"),zt("Stab \xB7 \xD812 statt \xD816","bar \xB7 \xD812 instead of \xD816","#ff5a5f","steel"),zt("Stab \xB7 16 mm versetzt","bar \xB7 displaced 16 mm","#ffb547","steel")]},{id:"docs",kind:"docs",t:be("Document Intelligence","Document intelligence"),x:-22,z:-3,r:3,c:"#5ce1e6",parts:[zt("Tisch","table","#9aa8b8","wood"),zt("Dokumente \xB7 3 Typen erkannt","documents \xB7 3 types detected","#5ce1e6","mixed",[be("Lieferschein","delivery note"),be("Werkszeugnis","mill certificate"),be("Gutachten","survey report")])]},{id:"talks",kind:"talks",t:be("Vortr\xE4ge & Beitr\xE4ge","Talks & posts"),x:-4,z:4,r:3,c:"#c792ea",parts:[zt("B\xFChne","stage","#9aa8b8","wood"),zt("Leinwand","screen","#c792ea","mixed"),zt("Rednerpult","lectern","#4da6ff","wood")]},{id:"profile",kind:"profile",t:be("Profil \xB7 Luca Fahrendholz-Heiermann","Profile \xB7 Luca Fahrendholz-Heiermann"),x:10,z:8.5,r:3,c:"#4da6ff",parts:[zt("Scanner-Stativ","scanner tripod","#9aa8b8","steel"),zt("Laserscanner","laser scanner","#4da6ff","mixed")]},{id:"bonus",kind:"bonus",bonus:!0,t:be("Bonus \xB7 Registrier-Zielmarken","Bonus \xB7 registration targets"),x:-15.2,z:-7.6,r:1.6,c:"#ffcf70",parts:[zt("Hochregal","high rack","#9aa8b8","steel"),zt("Zielkugeln \xB7 3","target spheres \xB7 3","#ffcf70","mixed",ns("Zielkugel","target sphere",3))]}],Fa=lt.filter(i=>!i.bonus).length;var Ks=(i,...e)=>e.some(t=>i.includes(t)),Np=(i,e,t)=>{let n=Math.atan2(i,-e)*180/Math.PI;return(t?["north","north-east","east","south-east","south","south-west","west","north-west"]:["Norden","Nordosten","Osten","S\xFCdosten","S\xFCden","S\xFCdwesten","Westen","Nordwesten"])[Math.round((n+360)%360/45)%8]},Dp=(i,e)=>{let t=e.lang==="en",n=i.toLowerCase(),s=(g,x)=>t?x:g,r=e.clusters.filter(g=>e.cluFrac(g.id)>=.3&&e.stState[g.g]!=="hidden"),a=new Set(["wie","viel","viele","wo","ist","sind","gibt","welche","welcher","was","der","die","das","den","ein","eine","es","hier","im","in","how","many","much","where","what","which","the","are","is","any","there"]),l=n.split(/[^a-zäöüß0-9]+/).filter(g=>g.length>2&&!a.has(g)).flatMap(g=>[g,g.replace(/(en|e|n|s)$/,""),...Sl[g]??[]]).filter(g=>g.length>2),c=g=>{let x=lt[g.g],p=x.parts[g.p]??x.parts[0],m=[g.name.de,g.name.en,ut(p.name,"de"),ut(p.name,"en")].map(y=>y.toLowerCase());return l.some(y=>m.some(M=>M.includes(y)))},h=g=>{let x=lt[g.g];return`${ut(g.name,e.lang)} (${x.kind==="uc"?`UC${x.uc}`:ut(x.t,e.lang)})`},u=g=>[...new Set(g.map(x=>`${s("Scan-Cluster","scan cluster")} \xB7 ${lt[x.g].kind==="uc"?`UC${lt[x.g].uc}`:ut(lt[x.g].t,e.lang)}`))];if(!n.trim()||Ks(n,"hilfe","help","was kannst","what can"))return{q:i,a:s("Frag z. B.: \u201EWie viele Personen?\u201C, \u201EWo ist der Bagger?\u201C, \u201EWelche Abweichungen gibt es?\u201C, \u201EWie viel Stahl?\u201C, \u201EGibt es Schadstoffe?\u201C, \u201EWie weit bin ich?\u201C",'Try: "How many people?", "Where is the excavator?", "Which deviations?", "How much steel?", "Any hazardous materials?", "How far am I?"'),src:[s("regelbasiert \xB7 offline","rule-based \xB7 offline")]};if(Ks(n,"wie weit","fortschritt","how far","progress","abdeckung","coverage","erfasst")){let g=e.stState.filter(x=>x==="done").length;return{q:i,a:s(`Halle zu ${Math.round(e.cov*100)} % erfasst, ${g} von ${e.stState.length} Bereichen analysiert, ${r.length} Objekte segmentiert.`,`Hall ${Math.round(e.cov*100)} % captured, ${g} of ${e.stState.length} areas analysed, ${r.length} objects segmented.`),src:[s("Scan-Fortschritt","scan progress")]}}if(Ks(n,"abweich","deviation","toleranz","tolerance","fehler","mangel","defect","versetzt","falsch")){let g=r.filter(x=>/abweich|versetzt|statt|warnung/i.test(ut((lt[x.g].parts[x.p]??lt[x.g].parts[0]).name,"de")));return g.length?{q:i,a:g.map(x=>`\u2022 ${ut((lt[x.g].parts[x.p]??lt[x.g].parts[0]).name,e.lang)} \u2013 ${h(x)}`).join(`
`),src:u(g)}:{q:i,a:s("Bisher keine Abweichungen in den erfassten Bereichen gefunden.","No deviations found in the captured areas so far."),src:[s("Soll-Ist-Vergleich","as-planned vs. as-built")]}}if(Ks(n,"schadstoff","asbest","gefahr","hazard","asbestos","danger")){let g=r.filter(x=>x.mat==="hazard");return g.length?{q:i,a:s(`${g.length} Big Bags mit Asbest erfasst (\u2248 ${g.reduce((x,p)=>x+p.vol,0).toFixed(2)} m\xB3) \u2013 Bereich absperren, Entsorgung nach TRGS 519.`,`${g.length} big bags with asbestos captured (\u2248 ${g.reduce((x,p)=>x+p.vol,0).toFixed(2)} m\xB3) \u2013 cordon off, dispose per regulations.`),src:[...u(g),s("Materialkataster","material register")]}:{q:i,a:s("In den erfassten Bereichen sind keine Schadstoffe markiert.","No hazardous materials marked in the captured areas."),src:[s("Materialkataster","material register")]}}let d=r.filter(c);if(Ks(n,"wie viele","anzahl","how many","count","z\xE4hl"))return d.length?{q:i,a:s(`${d.length} erfasst: ${d.map(h).join(", ")}.`,`${d.length} captured: ${d.map(h).join(", ")}.`),src:u(d)}:{q:i,a:s("Dazu habe ich in den erfassten Bereichen nichts gefunden \u2013 erst scannen, dann fragen.","Nothing found in the captured areas \u2013 scan first, then ask."),src:[s("Scan","scan")]};let f=Object.keys(Wn).find(g=>g!=="none"&&g!=="hull"&&l.some(x=>Wn[g].de.toLowerCase().includes(x)||Wn[g].en.toLowerCase().includes(x)));if((/wie viel(?!e)/.test(n)||Ks(n,"how much","masse","mass","gewicht","weight","tonnen","volumen","volume","material"))&&f){let g=r.filter(m=>m.mat===f),x=g.reduce((m,y)=>m+y.vol,0),p=g.reduce((m,y)=>m+y.mass,0);return{q:i,a:s(`${Wn[f].de}: ${x.toFixed(3)} m\xB3${p?` \u2248 ${(p/1e3).toFixed(2)} t`:""} in ${g.length} erfassten Objekten.`,`${Wn[f].en}: ${x.toFixed(3)} m\xB3${p?` \u2248 ${(p/1e3).toFixed(2)} t`:""} in ${g.length} captured objects.`),src:[s("Mengen aus dem nachmodellierten Modell","quantities from the reconstructed model"),...u(g)]}}if(Ks(n,"boden","floor","fl\xE4che","area"))return{q:i,a:s(`Erfasste Bodenfl\xE4che: ${e.floorM2} m\xB2 (1-m-Raster, Ausgleichsebene aus dem Scan).`,`Captured floor area: ${e.floorM2} m\xB2 (1 m grid, best-fit plane from the scan).`),src:[s("Segmentierung Boden (A1)","floor segmentation (A1)")]};if(d.length){let g=d[0],x=(g.min[0]+g.max[0])/2,p=(g.min[2]+g.max[2])/2,m=x-e.agent.x,y=p-e.agent.z,M=`${(g.max[0]-g.min[0]).toFixed(2)} \xD7 ${(g.max[2]-g.min[2]).toFixed(2)} \xD7 ${(g.max[1]-g.min[1]).toFixed(2)} m`;return{q:i,a:s(`${h(g)}: ${Math.round(Math.hypot(m,y))} m Richtung ${Np(m,y,t)} \xB7 Box ${M}${d.length>1?` (+${d.length-1} weitere)`:""}.`,`${h(g)}: ${Math.round(Math.hypot(m,y))} m to the ${Np(m,y,t)} \xB7 box ${M}${d.length>1?` (+${d.length-1} more)`:""}.`),src:u(d)}}return{q:i,a:s("Das kann ich aus dem bisherigen Scan nicht beantworten. Tipp: \u201EHilfe\u201C.",'I cannot answer that from the current scan. Tip: "help".'),src:[s("regelbasiert \xB7 offline","rule-based \xB7 offline")]}};function xu(i,e){if(e===vp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Da||e===_l){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Da)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var El=class extends es{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Eu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Ou(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Ss.extractUrlBase(e);a=Ss.resolveURL(c,this.path)}else a=Ss.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ia(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===zp){try{a[Ft.KHR_BINARY_GLTF]=new zu(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Ft.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Yu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ft.KHR_MATERIALS_UNLIT:a[u]=new Mu;break;case Ft.KHR_DRACO_MESH_COMPRESSION:a[u]=new Bu(r,this.dracoLoader);break;case Ft.KHR_TEXTURE_TRANSFORM:a[u]=new Hu;break;case Ft.KHR_MESH_QUANTIZATION:a[u]=new Vu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function ev(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},bu=class{constructor(e){this.parser=e,this.name=Ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new ot(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Nn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new $r(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Yr(h),c.distance=u;break;case"spot":c=new pl(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,is(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Mu=class{constructor(){this.name=Ft.KHR_MATERIALS_UNLIT}getMaterialType(){return Gt}extendParams(e,t,n){let s=[];e.color=new ot(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Nn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,_n))}return Promise.all(s)}},Su=class{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Eu=class{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ze(o,o)}return Promise.all(r)}},wu=class{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Au=class{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Tu=class{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ot(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Nn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,_n)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Ru=class{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Cu=class{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ot().setRGB(o[0],o[1],o[2],Nn),Promise.all(r)}},Pu=class{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Iu=class{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new ot().setRGB(o[0],o[1],o[2],Nn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,_n)),Promise.all(r)}},Lu=class{constructor(e){this.parser=e,this.name=Ft.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Nu=class{constructor(e){this.parser=e,this.name=Ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Du=class{constructor(e){this.parser=e,this.name=Ft.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Uu=class{constructor(e){this.parser=e,this.name=Ft.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ku=class{constructor(e){this.parser=e,this.name=Ft.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Fu=class{constructor(e){this.name=Ft.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Ou=class{constructor(e){this.name=Ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==hi.TRIANGLES&&c.mode!==hi.TRIANGLE_STRIP&&c.mode!==hi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let x=new yt,p=new L,m=new Ei,y=new L(1,1,1),M=new Gr(g.geometry,g.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,_),l.SCALE&&y.fromBufferAttribute(l.SCALE,_),M.setMatrixAt(_,x.compose(p,m,y));for(let _ in l)if(_==="_COLOR_0"){let I=l[_];M.instanceColor=new Ys(I.array,I.itemSize,I.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);dn.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},zp="glTF",Oa=12,Up={JSON:1313821514,BIN:5130562},zu=class{constructor(e){this.name=Ft.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Oa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Oa,r=new DataView(e,Oa),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Up.JSON){let c=new Uint8Array(e,Oa+a,o);this.content=n.decode(c)}else if(l===Up.BIN){let c=Oa+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Bu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Wu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Wu[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Kr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],p=l[g];p!==void 0&&(x.normalized=p)}u(f)},o,c,Nn,d)})})}},Hu=class{constructor(){this.name=Ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Vu=class{constructor(){this.name=Ft.KHR_MESH_QUANTIZATION}},wl=class extends vs{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,x=g-c,p=-2*f+3*d,m=f-d,y=1-p,M=m-d+u;for(let _=0;_!==o;_++){let I=a[x+_+o],C=a[x+_+l]*h,A=a[g+_+o],U=a[g+_]*h;r[_]=y*I+M*C+p*A+m*U}return r}},tv=new Ei,Gu=class extends wl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return tv.fromArray(r).normalize().toArray(r),r}},hi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},kp={9728:On,9729:$n,9984:nu,9985:ma,9986:Sr,9987:Ri},Fp={33071:Gi,33648:va,10497:Ws},yu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Es={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},nv={CUBICSPLINE:void 0,LINEAR:Ur,STEP:Dr},_u={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function iv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new en({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ci})),i.DefaultMaterial}function Zs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function is(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function sv(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function rv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function av(i){let e,t=i.extensions&&i.extensions[Ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+vu(t.attributes):e=i.indices+":"+vu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+vu(i.targets[n]);return e}function vu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Xu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ov(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var lv=new yt,Yu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ev,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Wr(this.options.manager):this.textureLoader=new ml(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ia(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Zs(r,o,s),is(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ft.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Ss.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=yu[s.type],o=Kr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Lt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=yu[s.type],c=Kr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,p;if(f&&f!==u){let m=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,M=t.cache.get(y);M||(x=new c(o,m*f,s.count*f/h),M=new Ea(x,f/h),t.cache.add(y,M)),p=new wa(M,l,d%f/h,g)}else o===null?x=new c(s.count*l):x=new c(o,d,s.count*l),p=new Lt(x,l,g);if(s.sparse!==void 0){let m=yu.SCALAR,y=Kr[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,I=new y(a[1],M,s.sparse.count*m),C=new c(a[2],_,s.sparse.count*l);o!==null&&(p=new Lt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let A=0,U=I.length;A<U;A++){let J=I[A];if(p.setX(J,C[A*l]),l>=2&&p.setY(J,C[A*l+1]),l>=3&&p.setZ(J,C[A*l+2]),l>=4&&p.setW(J,C[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=kp[d.magFilter]||$n,h.minFilter=kp[d.minFilter]||Ri,h.wrapS=Fp[d.wrapS]||Ws,h.wrapT=Fp[d.wrapT]||Ws,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let p=new Ln(x);p.needsUpdate=!0,d(p)}),t.load(Ss.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),is(u,a),u.userData.mimeType=a.mimeType||ov(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ft.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ft.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Ft.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ta,ni.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new oi,ni.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return en}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Ft.KHR_MATERIALS_UNLIT]){let u=s[Ft.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new ot(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Nn),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,_n)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=hn);let h=r.alphaMode||_u.OPAQUE;if(h===_u.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===_u.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Gt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ze(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Gt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Gt){let u=r.emissiveFactor;o.emissive=new ot().setRGB(u[0],u[1],u[2],Nn)}return r.emissiveTexture!==void 0&&a!==Gt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,_n)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),is(u,r),t.associations.set(u,{materials:e}),r.extensions&&Zs(s,u,r),u})}createUniqueName(e){let t=rn.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Op(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=av(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Ft.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Op(new Zt,c,t),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?iv(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],p=a[f],m,y=c[f];if(p.mode===hi.TRIANGLES||p.mode===hi.TRIANGLE_STRIP||p.mode===hi.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new Jo(x,y):new Ee(x,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===hi.TRIANGLE_STRIP?m.geometry=xu(m.geometry,_l):p.mode===hi.TRIANGLE_FAN&&(m.geometry=xu(m.geometry,Da));else if(p.mode===hi.LINES)m=new Ki(x,y);else if(p.mode===hi.LINE_STRIP)m=new qi(x,y);else if(p.mode===hi.LINE_LOOP)m=new tl(x,y);else if(p.mode===hi.POINTS)m=new $s(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&rv(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),is(m,r),p.extensions&&Zs(s,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Zs(s,u[0],r),u[0];let d=new kt;r.extensions&&Zs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new mn(Ua.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new zr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),is(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new yt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new jo(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],x=f.target,p=x.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],p=u[4],m=[];for(let y=0,M=d.length;y<M;y++){let _=d[y],I=f[y],C=g[y],A=x[y],U=p[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let J=n._createAnimationTracks(_,I,C,A,U);if(J)for(let b=0;b<J.length;b++)m.push(J[b])}return new dl(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,lv)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Aa:c.length>1?h=new kt:c.length===1?h=c[0]:h=new dn,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),is(h,r),r.extensions&&Zs(n,h,r),r.matrix!==void 0){let u=new yt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new kt;n.name&&(r.name=s.createUniqueName(n.name)),is(r,n),n.extensions&&Zs(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof ni||d instanceof Ln)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];Es[r.path]===Es.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Es[r.path]){case Es.weights:c=Ji;break;case Es.rotation:c=ji;break;case Es.position:case Es.scale:c=Qi;break;default:n.itemSize===1?c=Ji:c=Qi;break}let h=s.interpolation!==void 0?nv[s.interpolation]:Ur,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+Es[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Xu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ji?Gu:wl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function cv(i,e,t){let n=e.attributes,s=new Zn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){let h=Xu(Kr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new L,l=new L;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Xu(Kr[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new ti;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Op(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Wu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Yt.workingColorSpace!==Nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Yt.workingColorSpace}" not supported.`),is(i,e),cv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?sv(i,e.targets,t):i})}var Bp=32,Hp=128,hv=new L(0,1,0),Vp=(i,e,t)=>{let n=new kt,s=new Map(e.map(_=>[`${_.g}:${_.p}:${_.i}`,_.id])),r=new Map;if(t){let _=[];t.traverse(I=>I.isMesh&&_.push(I));for(let I of _){let C=I.name||I.parent?.name||"",[A,U,J]=C.split("|"),b=lt.findIndex(F=>F.id===A),w=s.get(`${b}:${U}:${J}`);if(b<0||w===void 0)continue;I.removeFromParent(),I.position.x+=lt[b].x,I.position.y+=i.stations[b]?.y0??0,I.position.z+=lt[b].z;let V=I.material;V&&"envMapIntensity"in V&&(V.metalness=Math.min(V.metalness,.4)),n.add(I),r.set(w,[...r.get(w)??[],I])}}let a=[],o=new Map,l=(_,I)=>{let C=_.join(",")+I;return o.has(C)||o.set(C,new en({color:new ot(_[0],_[1],_[2]),roughness:I?.35:.7,metalness:I?.55:.05})),o.get(C)};i.stations.forEach((_,I)=>{let C=lt[I];for(let A of _.prims){let U=C.parts[A.p],J=l(U.c,U.m==="steel"),b=[],w=F=>{F.position.x+=_.x,F.position.z+=_.z,n.add(F),b.push(F)};if(A.k==="box"){let F=new Ee(new Qt(A.b[0]-A.a[0],A.b[1]-A.a[1],A.b[2]-A.a[2]),J);F.position.set((A.a[0]+A.b[0])/2,(A.a[1]+A.b[1])/2,(A.a[2]+A.b[2])/2),w(F)}else if(A.k==="rod"){let F=new L(...A.a),se=new L(...A.b).clone().sub(F),K=new Ee(new wn(A.r,A.r,se.length(),12),J);K.position.copy(F).addScaledVector(se,.5),K.quaternion.setFromUnitVectors(hv,se.normalize()),w(K)}else if(A.k==="pile"){let F=[];for(let se=0;se<=16;se++){let K=A.R*(1-se/16);F.push(new ze(K,A.H*(1-(K/A.R)**1.6)))}let q=new Ee(new Ca(F,32),J);q.position.set(A.c[0],0,A.c[1]),w(q)}else if(A.k==="sph"){let F=new Ee(new Un(A.r,20,14),J);F.position.set(...A.c),w(F)}else if(A.k==="ring"){let F=new Ee(new hl(A.R,A.r,10,28),J);F.position.set(...A.c),w(F)}else if(A.k==="person"){let F=new kt,q=new Ee(new ol(.16,.95,4,12),J);q.position.y=.78,q.scale.z=.7;let se=new Ee(new Un(.11,14,10),J);se.position.y=1.62,F.add(q,se),F.position.set(A.c[0],0,A.c[1]),w(F)}else if(A.k==="waam"){let F=A.h/A.L,q=[];for(let se=0;se<A.L;se++){let K=(se+.5)/A.L,B=new Ee(new Qt(A.t*.85,F*.92,A.z1-A.z0),J);B.position.set(A.x+A.lean*K*K,A.y0+(se+.5)*F,(A.z0+A.z1)/2),w(B),q.push(B)}a.push({p:A.p,L:A.L,meshes:q})}let V=s.get(`${I}:${A.p}:${A.i??0}`);V!==void 0&&r.set(V,[...r.get(V)??[],...b])}});let c=new en({color:9279400,roughness:.8,metalness:.1}),h=new Qt(1,1,1),u=i.blocks.map(_=>{let I=new Ee(h,c);return I.scale.set(_.b[0]-_.a[0],1,_.b[2]-_.a[2]),I.position.set((_.a[0]+_.b[0])/2,0,(_.a[2]+_.b[2])/2),I.visible=!1,n.add(I),{m:I,cells:_.cells,a:_.a,b:_.b,tot:0,scan:0,lo:1e9,hi:-1e9}}),[d,f,g]=i.plane,x=new Gr(new Qt(.98,.06,.98),new en({color:11844034,roughness:.9}),i.floor.length),p=new yt,m=new yt().makeScale(0,0,0),y=i.floor.map((_,I)=>{let C=_%Hp-Bp+.5,A=Math.floor(_/Hp)-Bp+.5;return x.setMatrixAt(I,m),[C,d*C+f*A+g-.03,A]});x.frustumCulled=!1,n.add(x);let M=(_,I)=>{I&&p.makeTranslation(y[_][0],y[_][1],y[_][2]),x.setMatrixAt(_,I?p:m),x.instanceMatrix.needsUpdate=!0};for(let _ of r.values())for(let I of _)I.visible=!1;return n.visible=!1,{group:n,cluObjs:r,blocks:u,floor:{cells:i.floor,show:M},waam:a}};var Gp=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),Wp=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);var uv=Gp,Xp=Wp,$u=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]],dv=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]],zn=16,za=class{constructor(e){this.group=new kt;this.VS=e.vs,[this.X0,this.Y0,this.Z0]=e.min,this.GX=Math.max(2,Math.ceil((e.max[0]-e.min[0])/e.vs)),this.GY=Math.max(2,Math.ceil((e.max[1]-e.min[1])/e.vs)),this.GZ=Math.max(2,Math.ceil((e.max[2]-e.min[2])/e.vs)),this.NCX=Math.ceil(this.GX/zn),this.NCZ=Math.ceil(this.GZ/zn),this.ISO=e.iso??Math.max(.12,.7*(e.vs/.2)**2),this.cnt=new Uint16Array(this.GX*this.GY*this.GZ),this.dirty=new Uint8Array(this.NCX*this.NCZ),this.filled=new Uint8Array(this.NCX*this.NCZ),this.meshes=new Array(this.NCX*this.NCZ).fill(null),this.color=e.color,this.mat=new en({vertexColors:!0,flatShading:!0,roughness:.85,metalness:.05,side:hn})}add(e,t,n){let s=Math.floor((e-this.X0)/this.VS),r=Math.floor((t-this.Y0)/this.VS),a=Math.floor((n-this.Z0)/this.VS);if(s<0||r<0||a<0||s>=this.GX||r>=this.GY||a>=this.GZ)return;let o=(a*this.GY+r)*this.GX+s;this.cnt[o]<65535&&this.cnt[o]++;let l=Math.floor(s/zn),c=Math.floor(a/zn),h=c*this.NCX+l;this.dirty[h]=1,this.filled[h]=1;let u=s%zn,d=a%zn;u<=1&&l>0&&(this.dirty[h-1]=1),u>=zn-2&&l<this.NCX-1&&(this.dirty[h+1]=1),d<=1&&c>0&&(this.dirty[h-this.NCX]=1),d>=zn-2&&c<this.NCZ-1&&(this.dirty[h+this.NCX]=1)}update(e,t,n){let s=[];for(let o=0;o<this.dirty.length;o++)if(this.dirty[o]){let l=(o%this.NCX+.5)*zn*this.VS+this.X0,c=(Math.floor(o/this.NCX)+.5)*zn*this.VS+this.Z0;s.push([o,(l-t)**2+(c-n)**2])}if(!s.length)return 0;s.sort((o,l)=>o[1]-l[1]);let r=performance.now(),a=0;for(;a<s.length&&performance.now()-r<e;a++)this.build(s[a][0]);return s.length-a}build(e){this.dirty[e]=0;let{GX:t,GY:n,GZ:s,VS:r,X0:a,Y0:o,Z0:l,ISO:c,cnt:h}=this,u=e%this.NCX,d=Math.floor(e/this.NCX),f=u*zn-1,g=d*zn-1,x=zn+3,p=zn+3,m=n,y=new Float32Array(x*m*p),M=(w,V,F)=>w<0||V<0||F<0||w>=t||V>=n||F>=s?0:h[(F*n+V)*t+w];for(let w=0;w<p;w++)for(let V=0;V<m;V++)for(let F=0;F<x;F++){let q=0,se=f+F,K=g+w;for(let B=-1;B<=1;B++)for(let Q=-1;Q<=1;Q++)for(let le=-1;le<=1;le++)q+=M(se+le,V+Q,K+B);y[(w*m+V)*x+F]=q/27}let _=[],I=[],C=new Float32Array(8),A=new Float32Array(36);for(let w=1;w<=zn&&w<p-1;w++)for(let V=0;V<m-1;V++)for(let F=1;F<=zn&&F<x-1;F++){let q=0;for(let B=0;B<8;B++){let Q=$u[B];C[B]=y[((w+Q[2])*m+(V+Q[1]))*x+(F+Q[0])],C[B]>c&&(q|=1<<B)}let se=uv[q];if(!se)continue;for(let B=0;B<12;B++){if(!(se&1<<B))continue;let[Q,le]=dv[B],Pe=(c-C[Q])/(C[le]-C[Q]||1e-6),Me=$u[Q],vt=$u[le];A[B*3]=a+(f+F+Me[0]+(vt[0]-Me[0])*Pe+.5)*r,A[B*3+1]=o+(V+Me[1]+(vt[1]-Me[1])*Pe+.5)*r,A[B*3+2]=l+(g+w+Me[2]+(vt[2]-Me[2])*Pe+.5)*r}let K=q*16;for(let B=0;Xp[K+B]!==-1;B+=3)for(let Q=0;Q<3;Q++){let le=Xp[K+B+Q],Pe=A[le*3+1];if(_.push(A[le*3],Pe,A[le*3+2]),this.color)I.push(this.color[0],this.color[1],this.color[2]);else{let Me=Math.max(0,Math.min(1,Pe/6));I.push(.46+.16*Me,.5+.1*Me,.58-.08*Me)}}}let U=this.meshes[e];if(U&&(this.group.remove(U),U.geometry.dispose(),this.meshes[e]=null),!_.length)return;let J=new Zt;J.setAttribute("position",new Vt(_,3)),J.setAttribute("color",new Vt(I,3)),J.computeVertexNormals();let b=new Ee(J,this.mat);b.frustumCulled=!1,this.group.add(b),this.meshes[e]=b}touchAll(){for(let e=0;e<this.filled.length;e++)this.filled[e]&&(this.dirty[e]=1)}dispose(){for(let e of this.meshes)e&&e.geometry.dispose();this.mat.dispose(),this.group.removeFromParent()}};var Wt={x0:-28,x1:21,z0:-21,z1:67,px:.04},Ba=Math.round((Wt.x1-Wt.x0)/Wt.px),Zr=Math.round((Wt.z1-Wt.z0)/Wt.px),Yp=.9,fv=1.7,Al=class{constructor(){this.base=document.createElement("canvas");this.base.width=Ba,this.base.height=Zr,this.ctx=this.base.getContext("2d"),this.ctx.fillStyle="#fbfbf8",this.ctx.fillRect(0,0,Ba,Zr)}add(e,t,n,s){if(e<Wt.x0||e>=Wt.x1||n<Wt.z0||n>=Wt.z1||t>6.3)return;let r=(e-Wt.x0)/Wt.px,a=(n-Wt.z0)/Wt.px,o=this.ctx;s===1?(o.fillStyle="rgba(150,156,168,0.05)",o.fillRect(r,a,2,2)):t>=Yp&&t<=fv?(o.fillStyle="rgba(18,22,30,0.5)",o.fillRect(r-.5,a-.5,2,2)):t<Yp?(o.fillStyle="rgba(80,88,100,0.16)",o.fillRect(r,a,1.5,1.5)):(o.fillStyle="rgba(90,110,150,0.035)",o.fillRect(r,a,1.5,1.5))}compose(e,t){e.width=Ba+140,e.height=Zr+140+120;let r=e.getContext("2d"),a=t.lang==="en";r.fillStyle="#ffffff",r.fillRect(0,0,e.width,e.height),r.drawImage(this.base,70,70);let o=_=>70+(_-Wt.x0)/Wt.px,l=_=>70+(_-Wt.z0)/Wt.px;r.strokeStyle="rgba(200,60,60,0.35)",r.setLineDash([12,6,3,6]),r.lineWidth=1,r.font="bold 15px Inter, sans-serif",r.textAlign="center",r.textBaseline="middle";let c=0;for(let _=-15;_<=15;_+=5,c++)r.beginPath(),r.moveTo(o(_),48),r.lineTo(o(_),70+Zr+10),r.stroke(),r.setLineDash([]),r.fillStyle="#fff",r.beginPath(),r.arc(o(_),34,13,0,Math.PI*2),r.fill(),r.strokeStyle="rgba(200,60,60,0.8)",r.stroke(),r.fillStyle="#b03030",r.fillText(String.fromCharCode(65+c),o(_),34),r.strokeStyle="rgba(200,60,60,0.35)",r.setLineDash([12,6,3,6]);c=1;for(let _=-10;_<=10;_+=5,c++)r.beginPath(),r.moveTo(48,l(_)),r.lineTo(70+Ba+10,l(_)),r.stroke(),r.setLineDash([]),r.fillStyle="#fff",r.beginPath(),r.arc(34,l(_),13,0,Math.PI*2),r.fill(),r.strokeStyle="rgba(200,60,60,0.8)",r.stroke(),r.fillStyle="#b03030",r.fillText(String(c),34,l(_)),r.strokeStyle="rgba(200,60,60,0.35)",r.setLineDash([12,6,3,6]);r.setLineDash([]),r.font="600 14px Inter, sans-serif";for(let _ of t.labels){let I=r.measureText(_.t).width+14;r.fillStyle="rgba(255,255,255,0.85)",r.fillRect(o(_.x)-I/2,l(_.z)-11,I,22),r.strokeStyle=_.c,r.lineWidth=1.5,r.strokeRect(o(_.x)-I/2,l(_.z)-11,I,22),r.fillStyle="#1a1f29",r.fillText(_.t,o(_.x),l(_.z))}for(let _ of t.scanners)r.fillStyle="#0a84c6",r.beginPath(),r.moveTo(o(_.x),l(_.z)-9),r.lineTo(o(_.x)+8,l(_.z)+6),r.lineTo(o(_.x)-8,l(_.z)+6),r.closePath(),r.fill();let h=70+Zr+30,u=70;for(let _=0;_<10;_++)r.fillStyle=_%2?"#ffffff":"#1a1f29",r.fillRect(u+_/Wt.px,h,1/Wt.px,8);r.strokeStyle="#1a1f29",r.lineWidth=1,r.strokeRect(u,h,10/Wt.px,8),r.fillStyle="#1a1f29",r.font="500 12px Inter, sans-serif",r.textAlign="center";for(let _ of[0,5,10])r.fillText(`${_} m`,u+_/Wt.px,h+22);let d=70+Ba-30,f=110;r.fillStyle="#1a1f29",r.beginPath(),r.moveTo(d,f-26),r.lineTo(d+11,f+12),r.lineTo(d,f+4),r.lineTo(d-11,f+12),r.closePath(),r.fill(),r.font="bold 16px Inter, sans-serif",r.fillText("N",d,f+28);let g=e.width-70-520,x=70+Zr+18,p=520,m=110;r.strokeStyle="#1a1f29",r.lineWidth=1.5,r.strokeRect(g,x,p,m),r.beginPath(),r.moveTo(g,x+38),r.lineTo(g+p,x+38),r.moveTo(g+330,x+38),r.lineTo(g+330,x+m),r.stroke(),r.textAlign="left",r.font="800 19px Inter, sans-serif",r.fillText(a?"FLOOR PLAN \xB7 ground floor \xB7 section +1.20 m":"GRUNDRISS \xB7 EG \xB7 Schnitt +1,20 m",g+12,x+20),r.font="500 12.5px Inter, sans-serif";let y=new Date;(a?["Derived from scan \xB7 X-AVIS Spatial AI Lab",`Hall captured: ${Math.round(t.cov*100)} %`,"Scale 1:200 (A3) \xB7 grid 5 m",`Date ${y.toLocaleDateString("en-GB")}`]:["Aus dem Scan abgeleitet \xB7 X-AVIS Spatial AI Lab",`Halle erfasst: ${Math.round(t.cov*100)} %`,"Ma\xDFstab 1:200 (A3) \xB7 Raster 5 m",`Datum ${y.toLocaleDateString("de-DE")}`]).forEach((_,I)=>r.fillText(_,g+12,x+56+I*16)),r.font="800 15px Inter, sans-serif",r.fillText("X-AVIS",g+345,x+60),r.font="500 11px Inter, sans-serif",r.fillText("\xA9 Jan Luca Fahrendholz-Heiermann",g+345,x+80),r.fillText(a?"Plan status: preliminary":"Planstand: vorl\xE4ufig",g+345,x+96)}},Tl=(i,e,t,n)=>{let s=i.color(e),r=.25+.65*i.I[e],a=1-.35*Math.min(1,t/n);if(s)return[s[0]*255*a,s[1]*255*a,s[2]*255*a];let o=255*(1-r)*a+40*(1-a);return[o,o,o]},Rl=(i,e)=>{let t=document.createElement("canvas");t.width=i,t.height=e;let n=t.getContext("2d"),s=n.createImageData(i,e);for(let r=0;r<i*e;r++)s.data[r*4]=255,s.data[r*4+1]=255,s.data[r*4+2]=255,s.data[r*4+3]=255;return{cv:t,ctx:n,img:s,zb:new Float32Array(i*e).fill(1e9)}},Cl=(i,e,t,n,s,r,a=1)=>{for(let o=0;o<a;o++)for(let l=0;l<a;l++){let c=t+l,h=n+o;if(c<0||h<0||c>=e||h*e+c>=i.zb.length)continue;let u=h*e+c;s>=i.zb[u]||(i.zb[u]=s,i.img.data[u*4]=r[0],i.img.data[u*4+1]=r[1],i.img.data[u*4+2]=r[2])}},Pl=(i,e,t,n,s=!1)=>{let r=t/2,a=Rl(t,r),o=n?n.length:i.N;for(let l=0;l<o;l++){let c=n?n[l]:l;if(!s&&i.S[c]<0)continue;let h=i.P[c*3]-e[0],u=i.P[c*3+1]-e[1],d=i.P[c*3+2]-e[2],f=Math.hypot(h,u,d);if(f<.3)continue;let g=Math.atan2(h,-d),x=Math.asin(u/f),p=Math.floor((g+Math.PI)/(2*Math.PI)*t),m=Math.floor((Math.PI/2-x)/Math.PI*r);Cl(a,t,p,m,f,Tl(i,c,f,25),Math.round((f<4?3:f<9?2:1.3)*Math.max(1,t/1e3)))}return a.ctx.putImageData(a.img,0,0),a.cv},$p=(i,e,t)=>{let n=t*4,s=t*3,r=Rl(n,s),a={nz:[1,1],px:[2,1],pz:[3,1],nx:[0,1],py:[1,0],ny:[1,2]};for(let o=0;o<i.N;o++){if(i.S[o]<0)continue;let l=i.P[o*3]-e[0],c=i.P[o*3+1]-e[1],h=i.P[o*3+2]-e[2],u=Math.abs(l),d=Math.abs(c),f=Math.abs(h),g,x,p,m;u>=d&&u>=f?(m=u,l>0?(g="px",x=h/m,p=-c/m):(g="nx",x=-h/m,p=-c/m)):d>=f?(m=d,c>0?(g="py",x=l/m,p=h/m):(g="ny",x=l/m,p=-h/m)):(m=f,h>0?(g="pz",x=-l/m,p=-c/m):(g="nz",x=l/m,p=-c/m));let[y,M]=a[g],_=Math.hypot(l,c,h);Cl(r,n,Math.floor(y*t+(x+1)/2*(t-1)),Math.floor(M*t+(p+1)/2*(t-1)),_,Tl(i,o,_,25),_<5?2:1)}for(let o=0;o<s;o++)for(let l=0;l<n;l++){let c=Math.floor(l/t),h=Math.floor(o/t);Object.values(a).some(([d,f])=>d===c&&f===h)||(r.img.data[(o*n+l)*4+3]=0)}return r.ctx.putImageData(r.img,0,0),r.cv},qp=(i,e,t)=>{let n=Rl(e,t),s=[48,52,78],r=[-4,0,22],a=[r[0]-s[0],r[1]-s[1],r[2]-s[2]],o=Math.hypot(a[0],a[1],a[2]),l=a.map(f=>f/o),c=[l[1]*0-l[2]*1,l[2]*0-l[0]*0,l[0]*1-l[1]*0],h=Math.hypot(c[0],c[1],c[2]);c=c.map(f=>f/h);let u=[c[1]*l[2]-c[2]*l[1],c[2]*l[0]-c[0]*l[2],c[0]*l[1]-c[1]*l[0]],d=t/2/Math.tan(34*Math.PI/360);for(let f=0;f<i.N;f++){if(i.S[f]<0)continue;let g=i.P[f*3]-s[0],x=i.P[f*3+1]-s[1],p=i.P[f*3+2]-s[2],m=g*l[0]+x*l[1]+p*l[2];if(m<1)continue;let y=g*c[0]+x*c[1]+p*c[2],M=g*u[0]+x*u[1]+p*u[2];Cl(n,e,Math.floor(e/2+y/m*d),Math.floor(t/2-M/m*d),m,Tl(i,f,m-25,40),2)}return n.ctx.putImageData(n.img,0,0),n.cv},Kp=(i,e)=>{let t=Math.round(e*(Wt.z1-Wt.z0)/(Wt.x1-Wt.x0)),n=Rl(e,t),s=e/(Wt.x1-Wt.x0);for(let r=0;r<i.N;r++){if(i.S[r]<0)continue;let a=i.P[r*3],o=i.P[r*3+1],l=i.P[r*3+2];a<Wt.x0||a>=Wt.x1||l<Wt.z0||l>=Wt.z1||Cl(n,e,Math.floor((a-Wt.x0)*s),Math.floor((l-Wt.z0)*s),10-o,Tl(i,r,0,1),2)}return n.ctx.putImageData(n.img,0,0),n.cv};var Js=.95,ws=.85,Zp=.62,Ha=.28,pv=()=>{let i=new en({color:16738835,roughness:.45,metalness:.25}),e=new en({color:2303790,roughness:.5,metalness:.6}),t=new kt,n=new Ee(new wn(.26,.3,.22,24),e);n.position.y=.11,t.add(n);let s=new kt;s.position.y=.22,t.add(s);let r=new Ee(new wn(.22,.24,.3,24),i);r.position.y=.15,s.add(r);let a=new kt;a.position.y=Zp-.22,s.add(a),a.add(new Ee(new Un(.13,16,12),e));let o=new Ee(new Qt(Js,.17,.2),i);o.position.x=Js/2,a.add(o);let l=new kt;l.position.x=Js,a.add(l),l.add(new Ee(new Un(.11,16,12),e));let c=new Ee(new Qt(ws,.13,.15),i);c.position.x=ws/2,l.add(c);let h=new kt;h.position.x=ws,l.add(h),h.add(new Ee(new Un(.07,12,10),e));let u=new Ee(new wn(.025,.04,Ha,12),e);u.position.y=-Ha/2,h.add(u);let d=new Ee(new Un(.035,12,10),new Gt({color:16765562}));d.position.y=-Ha-.01,h.add(d);let f=new Yr(16751162,0,2.5,2);return f.position.y=-Ha,h.add(f),{root:t,reach:(x,p,m)=>{let y=x-t.position.x,M=p+Ha-(t.position.y+Zp),_=m-t.position.z,I=Math.hypot(y,_);s.rotation.y=Math.atan2(-_,y);let C=Math.max(-1,Math.min(1,(I*I+M*M-Js*Js-ws*ws)/(2*Js*ws))),A=Math.acos(C),U=Math.atan2(M,I)+Math.atan2(ws*Math.sin(A),Js+ws*Math.cos(A));a.rotation.z=U,l.rotation.z=-A,h.rotation.z=-(U-A)},glow:d,light:f}},Jp=(i,e,t)=>{let n=new kt;n.position.set(e,0,t);let s=1.5,r=6,a=i.map((h,u)=>{let d=pv();return d.root.position.set(u===0?-1.35:1.45,.78,u===0?.15:-.15),n.add(d.root),d}),o=i.map(()=>0),l=Math.max(...i.map(h=>h.L))*s+r;return{group:n,update:h=>{let u=h%l;return i.forEach((d,f)=>{let g=u/s,x=g>=d.L,p=Math.min(d.L-1,Math.floor(g)),m=x?1:g-p;o[f]=x?d.L:p+m*.99;let y=(p+1)/d.L,M=d.z0+(p%2===0?m:1-m)*(d.z1-d.z0),_=a[f];x?_.reach(d.x+d.lean-.25,d.y0+d.h+.35,0):_.reach(d.x+d.lean*y*y,d.y0+(p+1)*(d.h/d.L)+.012,M);let I=!x;_.glow.visible=I,_.light.intensity=I?1.6+Math.random()*1.4:0,_.glow.scale.setScalar(I?.8+Math.random()*.6:1)}),o},prog:o}};var mv="1791749770",js=(i,e)=>lt[i]?.parts[e]??lt[i]?.parts[0],St={x0:-27.5,x1:20.5,z0:-20.5,z1:66.5,y0:.6,y1:9.5},tn=32,As=1,De=128,ri={x0:-2.5,x1:4.5,z:12.3},gv=.12,qu=.62,Il=340,Ku=600,Zu={dark:263690,light:15856630},jp=1.62,Ju=1.5,Jr=720,ju=360,Qu=360,Qp=[6087142,10194175,16758087,6280077,16747099,5089023],ui=[1,9],Qr=lt.length,Ll=lt.findIndex(i=>i.bonus),jr=lt.findIndex(i=>i.id==="uc8"),ed=lt.findIndex(i=>i.id==="profile"),xv=lt.findIndex(i=>i.id==="uc3"),Qs={droneFly:.75,droneScan:.45,hand:1.35,tlsRun:9},td=.45,yv=4,Va=50,_v=45,vv=32,bv=(i,e)=>(Math.imul(i,2654435761)>>>0)%100<(e?vv:_v),Mv=`
attribute float aI; attribute float aCls; attribute float aG; attribute float aP; attribute float aClu; attribute float aW; attribute float aM;
attribute float aS; attribute float aF; attribute vec3 aC; attribute vec3 aO;
uniform float uT; uniform float uPx; uniform float uPs; uniform float uLight; uniform float uMode; uniform float uFeatK; uniform float uMesh; uniform float uXray; uniform float uReg; uniform float uWaamSeen;
uniform float uAna[${Qr}]; uniform float uHi[${Qr}]; uniform vec2 uWaam; uniform vec3 uMatC[10]; uniform float uCad[80]; uniform vec3 uCut;
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
    if (uXray > 0.5 && aG >= 0.0 && gi != ${Ll}) holo = true;
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
}`,Sv=`
varying vec3 vCol;
void main(){ vec2 c = gl_PointCoord - 0.5; if (dot(c, c) > 0.25) discard; gl_FragColor = vec4(vCol, 1.0); }`,qt=(i,e,t)=>i==="en"?t:e,em=i=>i.kind==="uc"?`UC${i.uc}`:i.kind==="docs"?"DOC":i.kind==="talks"?"TALK":i.kind==="bonus"?"\u2605":"ME",nd=i=>ts.filter(e=>e.st===i.id);var tm=(i,e,t)=>{let n=!1,s=0,r=()=>t.lang(),a=i.host,o=new Br({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1});o.setPixelRatio(Math.min(2,window.devicePixelRatio)),o.setSize(a.clientWidth,a.clientHeight),a.appendChild(o.domElement);let l=new Hr;l.fog=new Zo(Zu.dark,28,70);let c=new mn(58,a.clientWidth/a.clientHeight,.03,200);l.add(c),l.add(new fl(10470655,1053724,1.1));let h=new $r(16777215,1.4);h.position.set(6,12,4),l.add(h);let u=new en({color:1909548,metalness:.6,roughness:.35}),d=new en({color:15265267,metalness:.2,roughness:.4}),f=new en({color:5089023,emissive:1727656,emissiveIntensity:.8}),g=new gl,x=new kt;x.add(new Ee(new Qt(.3,.12,.42),d));let p=new Ee(new Qt(.2,.06,.26),u);p.position.y=.09,x.add(p);let m=new Ee(new Qt(.31,.02,.43),f);m.position.y=-.02,x.add(m);let y=[],M=new Gt({color:12375807,transparent:!0,opacity:.25,depthWrite:!1});for(let[v,R]of[[1,1],[1,-1],[-1,1],[-1,-1]]){let N=new Ee(new Qt(.04,.03,.46),u);N.position.set(v*.14,.02,R*.18),N.rotation.y=Math.atan2(v*.27,R*.36),x.add(N);let G=new Ee(new wn(.035,.035,.06,12),u);G.position.set(v*.27,.05,R*.36),x.add(G);let ne=new Ee(new wn(.19,.19,.008,24),M);ne.position.set(v*.27,.085,R*.36),x.add(ne),y.push(ne);let ge=new Ee(new Un(.02,8,8),new Gt({color:R<0?16777215:16726843}));ge.position.set(v*.27,0,R*.36),x.add(ge)}let _=new Ee(new Un(.07,16,12),u);_.position.set(0,-.1,-.12),x.add(_),l.add(x),x.position.set(ui[0],.25,ui[1]);let I=document.createElement("canvas");I.width=I.height=64;{let v=I.getContext("2d"),R=v.createRadialGradient(32,32,0,32,32,32);R.addColorStop(0,"rgba(0,0,0,0.75)"),R.addColorStop(1,"rgba(0,0,0,0)"),v.fillStyle=R,v.fillRect(0,0,64,64)}let C=new Gt({map:new nl(I),transparent:!0,depthWrite:!1}),A=new Ee(new Ii(1,1),C);A.rotation.x=-Math.PI/2,l.add(A);let U=new Gt({color:6087142,transparent:!0,opacity:.1,side:hn,depthWrite:!1,blending:ys}),J=new Ee(new ll(1,1,48,1,!0),U);l.add(J);let b=new Gt({color:6087142,transparent:!0,opacity:.6,side:hn,depthWrite:!1}),w=new Ee(new Zi(.95,1,64),b);w.rotation.x=-Math.PI/2,l.add(w);let V=new oi({color:12581119,transparent:!0,opacity:.9}),F=new qi(new Zt().setFromPoints([new L(0,0,0),new L(1,0,0)]),V);l.add(F);let q=new kt;q.position.set(ui[0],0,ui[1]);let se=new Ee(new wn(.85,.9,.06,40),new en({color:2765116,metalness:.5,roughness:.4}));se.position.y=.03,q.add(se);let K=new Ee(new Zi(.6,.7,48),new Gt({color:6280077,transparent:!0,opacity:.8,side:hn}));K.rotation.x=-Math.PI/2,K.position.y=.065,q.add(K);let B=new Ee(new Qt(.5,.01,.1),new Gt({color:6280077}));B.position.y=.07,q.add(B),l.add(q);let Q=new kt;{let v=new en({color:9279400,metalness:.5,roughness:.45}),R=new en({color:16764730,roughness:.6}),N=ri.x1-ri.x0,G=(ri.x0+ri.x1)/2;for(let Ce of[ri.x0-.12,ri.x1+.12]){let ie=new Ee(new Qt(.24,5.4,.3),v);ie.position.set(Ce,2.7,ri.z),Q.add(ie);for(let ce=0;ce<6;ce++){let ye=new Ee(new Qt(.25,.25,.31),R);ye.position.set(Ce,.3+ce*.5,ri.z),ye.rotation.z=Math.PI/4,Q.add(ye)}}let ne=new Ee(new Qt(N+.6,.6,.6),v);ne.position.set(G,5.4,ri.z),Q.add(ne);let ge=new Ee(new Qt(N,.05,1.6),new en({color:12107980,metalness:.4,roughness:.5}));ge.position.set(G,5.25,ri.z-.9),Q.add(ge)}Q.visible=!1,l.add(Q);let le={group:new kt,pts:null,mat:null,t0:-1,shown:!1};le.group.visible=!1,l.add(le.group);let Pe=async()=>{let v=new Uint8Array(await st("lab/portrait.bin")),R=new DataView(v.buffer),N=R.getUint16(0,!0),G=R.getUint16(2,!0),ne=R.getUint16(4,!0),ge=R.getUint16(6,!0),Ce=lt[ed],ie=1.4,ce=ie*N/G,ye=Ce.x+1.55,qe=1.55,Ve=Ce.z,nt=new Vr(new Uint8Array(N*G*4),N,G,qn),Ye=nt.image.data;for(let te=0;te<G;te++)for(let Te=0;Te<N;Te++){let We=te*N+Te,je=((G-1-te)*N+Te)*4;Ye[je]=v[8+We*4],Ye[je+1]=v[8+We*4+1],Ye[je+2]=v[8+We*4+2],Ye[je+3]=255}nt.colorSpace=_n,nt.needsUpdate=!0;let xt=new Ee(new Ii(ce,ie),new Gt({map:nt}));xt.position.set(ye+.012,qe,Ve),xt.rotation.y=-Math.PI/2;let sn=new Ee(new Qt(.03,ie+.08,ce+.08),new en({color:2764600,roughness:.6}));sn.position.set(ye+.03,qe,Ve),le.group.add(xt,sn);for(let te of[-.35,.35]){let Te=new Ee(new wn(.018,.018,2.3,8),an);Te.position.set(ye+.18,1.1,Ve+te),Te.rotation.z=-.12,le.group.add(Te)}let un=[];for(let te=0;te<G;te+=2)for(let Te=0;Te<N;Te+=2)v[8+(te*N+Te)*4+3]-ne>.04*(ge-ne)&&un.push(te*N+Te);let me=un.length,at=new Float32Array(me*3),ht=new Uint8Array(me*3),Jt=new Float32Array(me);for(let te=0;te<me;te++){let Te=un[te],We=Te%N,je=Math.floor(Te/N);at[te*3]=ye,at[te*3+1]=qe+(.5-je/G)*ie,at[te*3+2]=Ve+(We/N-.5)*ce,ht[te*3]=v[8+Te*4],ht[te*3+1]=v[8+Te*4+1],ht[te*3+2]=v[8+Te*4+2],Jt[te]=Math.max(0,Math.min(1,(v[8+Te*4+3]-ne)/(ge-ne)))}let $=new Zt;$.setAttribute("position",new Lt(at,3)),$.setAttribute("aCol",new Lt(ht,3,!0)),$.setAttribute("aRel",new Lt(Jt,1)),le.mat=new ii({uniforms:{uK:{value:0},uPx:{value:o.getPixelRatio()},uSweep:{value:0}},vertexShader:`attribute vec3 aCol; attribute float aRel; uniform float uK; uniform float uPx; uniform float uSweep; varying vec3 vC;
        void main(){ vec3 p = position; float s = clamp((uSweep - (1.55 + 0.7 - p.y) / 1.4) * 4.0, 0.0, 1.0); p.x -= aRel * 1.35 * uK * s;
          vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; vC = mix(aCol, vec3(0.55, 0.95, 1.0), (1.0 - s) * 0.6 + (s > 0.0 && s < 1.0 ? 0.4 : 0.0));
          gl_PointSize = clamp(uPx * 7.0 / max(0.1, -mv.z), 1.0, 4.0 * uPx); if (s <= 0.0) gl_PointSize = 0.0; }`,fragmentShader:"varying vec3 vC; void main(){ vec2 c = gl_PointCoord - 0.5; if (dot(c, c) > 0.25) discard; gl_FragColor = vec4(vC, 1.0); }"}),le.pts=new $s($,le.mat),le.pts.frustumCulled=!1,le.group.add(le.pts)},Me=new kt,vt=new Ee(new Qt(.05,.16,.06),u);vt.position.set(0,-.06,0),vt.rotation.x=.35,Me.add(vt);let Ot=new Ee(new Qt(.08,.07,.16),u);Ot.position.set(0,.03,-.04),Me.add(Ot);let ae=new kt;ae.position.set(0,.03,-.14);let fe=new Ee(new wn(.04,.04,.05,20),d);fe.rotation.x=Math.PI/2,ae.add(fe);let He=new Ee(new Qt(.012,.03,.052),f);He.position.x=.036,ae.add(He),Me.add(ae);let ke=new Ee(new Un(.008,8,8),new Gt({color:6280077}));ke.position.set(.03,.07,.02),Me.add(ke),Me.scale.setScalar(.6),Me.position.set(.17,-.15,-.42),c.add(Me);let ft=48,ct=new Float32Array(ft*6),Rt=new Zt;Rt.setAttribute("position",new Lt(ct,3));let Nt=new oi({color:16726876,transparent:!0,opacity:.55,blending:ys,depthWrite:!1}),Ct=new Ki(Rt,Nt);Ct.frustumCulled=!1,l.add(Ct);let D=[],an=new en({color:2765116,metalness:.5,roughness:.5}),mt=(v,R=!1)=>{let N=new kt,G=R?new Gt({color:v,transparent:!0,opacity:.16,depthWrite:!1}):an;for(let ie=0;ie<3;ie++){let ce=ie/3*Math.PI*2,ye=new Ee(new wn(.012,.012,1.42,6),G);ye.position.set(Math.cos(ce)*.2,.68,Math.sin(ce)*.2),ye.rotation.set(-Math.sin(ce)*.29,0,Math.cos(ce)*.29),N.add(ye)}let ne=new kt;ne.position.y=Ju-.12;let ge=new Ee(new Qt(.2,.24,.16),R?G:new en({color:15265267,metalness:.2,roughness:.4}));ge.position.y=.12,ne.add(ge);let Ce=new Ee(new wn(.06,.06,.14,20),R?G:new en({color:v,emissive:v,emissiveIntensity:.5,metalness:.6,roughness:.2}));return Ce.rotation.z=Math.PI/2,Ce.position.y=.2,ne.add(Ce),N.add(ne),{g:N,head:ne}},Et=mt(6087142,!0);Et.g.visible=!1,l.add(Et.g);let Xe=lt.map(v=>{if(v.bonus)return null;let R=new ot(v.c),N=new kt;N.position.set(v.x,0,v.z);let G=new Ee(new Zi(v.r-.08,v.r,72),new Gt({color:R,transparent:!0,opacity:.55,side:hn,depthWrite:!1}));G.rotation.x=-Math.PI/2,G.position.y=.03,G.visible=!1,N.add(G);let ne=new Ee(new wn(.03,.03,7,8,1,!0),new Gt({color:R,transparent:!0,opacity:.2,depthWrite:!1}));ne.position.y=3.5,N.add(ne);let ge=new Ee(new cl(.22),new en({color:R,emissive:R,emissiveIntensity:.8,metalness:.3,roughness:.3}));ge.position.y=4.1,N.add(ge);let Ce=new Ee(new Zi(.9,1,48),new Gt({color:R,transparent:!0,opacity:.5,side:hn,depthWrite:!1}));return Ce.position.y=4.1,N.add(Ce),l.add(N),{g:N,ring:G,beam:ne,gem:ge,pulse:Ce,c:R}}),bt={uT:{value:0},uPx:{value:o.getPixelRatio()},uPs:{value:t.flags.lite?1.4:1},uLight:{value:0},uMode:{value:0},uFeatK:{value:6},uMesh:{value:0},uXray:{value:0},uReg:{value:0},uWaamSeen:{value:0},uAna:{value:new Array(Qr).fill(0)},uHi:{value:new Array(Qr).fill(0)},uWaam:{value:new ze(0,0)},uMatC:{value:Object.values(Wn).map(v=>new ot(v.c))},uCad:{value:new Array(80).fill(0)},uCut:{value:new L(0,1.2,1)}},ue=0,P=0,E=0,Y=null,oe=new Uint8Array(0),he=new Int16Array(0),W,Fe,we,Se,Ze,de,Ne,Je,Ke,Ie,_t,Qe,wt,O,Ue,ee=new Float32Array(Jr*ju),re=0,Re=0,ve=new Array(Qr).fill(0),At=new Array(Qr).fill(0),tt=lt.map(()=>"hidden"),vn=lt.map(()=>0),Dt=lt.map(()=>0),k=[],xe=[],Tt=[],fn=new Int32Array(De*De),cn=new Int32Array(De*De),Jn=new Int32Array(De*De),er=new Int32Array(De*De),ss=new Int32Array(De*De),di=new Int32Array(De*De),Li=null,Rs=[],Cs=[0,0,0],nn=null,fi=null,Ga=new Al,tr=document.createElement("canvas");tr.width=Il,tr.height=Ku;let T=tr.getContext("2d");T.fillStyle="#070a0f",T.fillRect(0,0,Il,Ku);let z=(v,R)=>[(v-(St.x0-2))/(St.x1-St.x0+4)*Il,(R-(St.z0-2))/(St.z1-St.z0+4)*Ku],Z=new Float32Array(De*De),j=(v,R)=>Z[Math.max(0,Math.min(De-1,Math.floor(R+tn)))*De+Math.max(0,Math.min(De-1,Math.floor(v+tn)))],H=lt.map(()=>0),pe=lt.map(()=>4.1),Oe=!1,Be=!1,Ge={P:new Float32Array(0),I:new Float32Array(0),S:new Float32Array(0),CLS:new Uint8Array(0),GRP:new Int8Array(0),N:0,color:()=>null},st=async(v,R)=>{let N=await fetch(v.startsWith("lab/")?`${v}?v=${mv}`:v);if(!N.ok)throw new Error(`${v}: ${N.status}`);let G=Number(N.headers.get("content-length")),ne=!!N.headers.get("content-encoding");if(!N.body)return N.arrayBuffer();let ge=N.body.getReader(),Ce=[],ie=0;for(;;){let{done:qe,value:Ve}=await ge.read();if(qe)break;Ce.push(Ve),ie+=Ve.length,G&&R?.(Math.min(.97,ie/(ne?G*2.8:G)))}let ce=new Uint8Array(ie),ye=0;for(let qe of Ce)ce.set(qe,ye),ye+=qe.length;return ce.buffer},pt=async()=>{let[v,R,N]=await Promise.all([st("lab/scene.bin",me=>!n&&e.loaded(Math.min(.97,me))),st("lab/clusters.json").then(me=>JSON.parse(new TextDecoder().decode(me))),st("lab/cad.json").then(me=>JSON.parse(new TextDecoder().decode(me)))]);if(n)return;let G=new DataView(v);ue=G.getUint32(4,!0),P=G.getUint32(8,!0);let ne=new TextDecoder().decode(new Uint8Array(v,0,4))==="XAV2",ge=ne?[G.getFloat32(12,!0),G.getFloat32(16,!0),G.getFloat32(20,!0)]:[0,0,0],Ce=ne?G.getFloat32(24,!0):1e3,ie=ne?28:12,ce=new Int16Array(v,ie,ue*3);ie+=ue*6;let ye=new Uint8Array(v,ie,ue);ie+=ue,Se=new Uint8Array(v,ie,ue),ie+=ue,Ze=new Int8Array(v,ie,ue),ie+=ue,de=new Int8Array(v,ie,ue),ie+=ue,Ne=new Uint8Array(v,ie,ue),ie+=ue,Je=new Int16Array(v.slice(ie,ie+ue*2)),ie+=ue*2;let qe=new Int16Array(v.slice(ie,ie+ue*2));ie+=ue*2;let Ve=new Uint8Array(v,ie,ue);for(let me=0;me<ue;me+=997)if(Ze[me]>=0&&!lt[Ze[me]]?.parts[Ne[me]]){console.warn("Lab-Daten veraltet \u2013 bitte neu laden");break}if(E=ue,t.flags.lite){Y=new Int32Array(Math.ceil(ue/2));for(let at=0;at<Y.length;at++)Y[at]=at*2;let me=(at,ht=1)=>{let Jt=new at.constructor(Y.length*ht);for(let $=0;$<Y.length;$++)for(let te=0;te<ht;te++)Jt[$*ht+te]=at[Y[$]*ht+te];return Jt};ce=me(ce,3),ye=me(ye),Se=me(Se),Ze=me(Ze),de=me(de),Ne=me(Ne),Je=me(Je),qe=me(qe),Ve=me(Ve),ue=Y.length}k=R.clusters,Rs=R.feat,Cs=N.plane,xe=new Array(k.length).fill(0),Tt=new Array(k.length).fill(0),W=new Float32Array(ue*3);for(let me=0;me<ue*3;me++)W[me]=ce[me]/Ce+ge[me%3];we=new Float32Array(ue);let nt=new Uint8Array(ue*3);Ke=new Int32Array(De*De+1);for(let me=0;me<ue;me++){we[me]=ye[me]/255;let at=W[me*3],ht=W[me*3+1],Jt=W[me*3+2],$=Math.max(0,Math.min(De-1,Math.floor(Jt+tn)))*De+Math.max(0,Math.min(De-1,Math.floor(at+tn)));if(Ke[$+1]++,ss[$]++,de[me]>=0&&ve[de[me]]++,Ze[me]>=0){let te=js(Ze[me],Ne[me]).c;nt[me*3]=te[0]*255,nt[me*3+1]=te[1]*255,nt[me*3+2]=te[2]*255,Dt[Ze[me]]=Math.max(Dt[Ze[me]],ht)}else at>St.x0&&at<St.x1&&Jt>St.z0&&Jt<St.z1&&re++,Se[me]===1?fn[$]++:Jn[$]++;Je[me]>=0&&xe[Je[me]]++}for(let me=1;me<=De*De;me++)Ke[me]+=Ke[me-1];{let me=new Float32Array(De*De),at=new Uint32Array(De*De);for(let ht=0;ht<ue;ht++)if(Se[ht]===1&&Ze[ht]<0){let Jt=Math.max(0,Math.min(De-1,Math.floor(W[ht*3+2]+tn)))*De+Math.max(0,Math.min(De-1,Math.floor(W[ht*3]+tn)));me[Jt]+=W[ht*3+1],at[Jt]++}for(let ht=0;ht<De*De;ht++)Z[ht]=at[ht]?me[ht]/at[ht]:NaN;for(let ht=0;ht<6;ht++)for(let Jt=0;Jt<De*De;Jt++){if(!Number.isNaN(Z[Jt]))continue;let $=0,te=0;for(let Te of[1,-1,De,-De]){let We=Z[Jt+Te];We!==void 0&&!Number.isNaN(We)&&($+=We,te++)}te&&(Z[Jt]=$/te)}for(let ht=0;ht<De*De;ht++)Number.isNaN(Z[ht])&&(Z[ht]=0)}Fe=new Float32Array(ue).fill(-1),wt=new Int32Array(ue),O=new Int32Array(ue),Ue=new Float32Array(ue);let Ye=new Zt;Ye.setAttribute("position",new Lt(W,3)),Ye.setAttribute("aI",new Lt(ye,1,!0)),Ye.setAttribute("aCls",new Lt(Se,1)),Ye.setAttribute("aG",new Lt(Ze,1)),Ye.setAttribute("aP",new Lt(Ne,1)),Ye.setAttribute("aClu",new Lt(Je,1)),Ye.setAttribute("aW",new Lt(qe,1)),Ye.setAttribute("aM",new Lt(Ve,1)),Ye.setAttribute("aC",new Lt(nt,3,!0)),Ie=new Lt(Fe,1),Ie.setUsage(bl),Ye.setAttribute("aS",Ie),_t=new Lt(new Uint8Array(ue),1,!0),_t.setUsage(bl),Ye.setAttribute("aF",_t),Qe=new Lt(new Float32Array(ue*3),3),Qe.setUsage(bl),Ye.setAttribute("aO",Qe);let xt=new $s(Ye,new ii({vertexShader:Mv,fragmentShader:Sv,uniforms:bt}));xt.frustumCulled=!1,l.add(xt),oe=Ve,Object.assign(Ge,{P:W,I:we,S:Fe,CLS:Se,GRP:Ze,N:ue,color:mm});let sn=await st("lab/stations.glb").then(me=>new El().parseAsync(me,"")).catch(()=>null);N.stations.forEach((me,at)=>H[at]=me.y0??0),lt.forEach((me,at)=>{pe[at]=Math.max(H[at]+4.1,Dt[at]+1.1);let ht=Xe[at];ht&&(ht.ring.position.y=H[at]+.03,ht.beam.scale.y=(pe[at]+.6)/7,ht.beam.position.y=(pe[at]+.6)/2)}),nn=Vp(N,k,sn?.scene);{let te=new Int16Array(68992).fill(-1);nn.blocks.forEach((Te,We)=>{for(let je=Math.floor((Te.a[2]- -21)/.25);je<Math.ceil((Te.b[2]- -21)/.25);je++)for(let it=Math.floor((Te.a[0]- -28)/.25);it<Math.ceil((Te.b[0]- -28)/.25);it++)it>=0&&je>=0&&it<196&&je<352&&(te[je*196+it]=We)}),he=new Int16Array(ue).fill(-1);for(let Te=0;Te<ue;Te++){if(Ze[Te]>=0||Se[Te]===1)continue;let We=Math.floor((W[Te*3]- -28)/.25),je=Math.floor((W[Te*3+2]- -21)/.25);if(We<0||je<0||We>=196||je>=352)continue;let it=te[je*196+We];it<0||W[Te*3+1]<nn.blocks[it].a[1]-.1||W[Te*3+1]>nn.blocks[it].b[1]+.1||(he[Te]=it,nn.blocks[it].tot++)}}l.add(nn.group);let un=N.stations[jr];fi=Jp(un.prims.filter(me=>me.k==="waam"),un.x,un.z),fi.group.visible=!1,l.add(fi.group),gm(),Pe().catch(()=>{}),Be=!0,e.loaded(1),t.flags.allskills&&ts.forEach(me=>Ut.add(me.id)),Bt(),t.flags.auto&&setTimeout(()=>Dd.start(),300)},et=v=>{let R=v==="light";o.setClearColor(Zu[v]),l.fog.color.setHex(Zu[v]),bt.uLight.value=R?1:0,U.blending=R?Xi:ys,U.color.setHex(R?689350:6087142),U.needsUpdate=!0,b.color.setHex(R?689350:6087142),V.color.setHex(R?683952:12581119),M.color.setHex(R?4872816:12375807),Nt.blending=R?Xi:ys,Nt.needsUpdate=!0,C.opacity=R?.55:.9};et("dark");let Ut=new Set,_e={unlocked:[],color:"normal",mesh:!1,meshMode:"all",meshVS:.2,xray:!1,measure:!1,auto:t.flags.auto,labels:!1,feat:6,featState:"idle",nbv:!1,cut:{mode:0,pos:1.2,flip:!1}},Bt=()=>e.skills({..._e,unlocked:[...Ut]}),pn=()=>Ut.has("range")?1.5:1,Xt=()=>Ut.has("net")?6:3,Ae=t.tech,Ht={drone:100,handheld:100,tls:100},Mt={drone:!1,handheld:!1,tls:!1},bn={},pi=(v,R)=>t.flags.nobattery?!0:Mt[v]?!1:(Ht[v]=Math.max(0,Ht[v]-R),Ht[v]<=25&&!bn[v+"25"]&&(bn[v+"25"]=!0,e.toast(qt(r(),"Akku unter 25 % \u2013 effizient scannen oder zur Ladestation","Battery below 25 % \u2013 scan efficiently or return to the charging pad"),"#ffb547")),Ht[v]<=0?(Mt[v]=!0,bn[v+"25"]=!1,e.toast(qt(r(),`${gn(v)} leer \u2013 l\xE4dt ca. ${Math.round(Va/td)} s. Teste solange die anderen Technologien (1 2 3).`,`${gn(v)} empty \u2013 charging for about ${Math.round(Va/td)} s. Try the other technologies meanwhile (1 2 3).`),"#ff5a5f"),!1):!0),gn=v=>v==="drone"?qt(r(),"Drohne","Drone"):v==="handheld"?"Handheld":"TLS",Ps=!1,on=0,An=[],Is=new Map,Tn=null,Rn=new L,ta=new L(1,0,0),nr=0,sd=(v,R,N)=>{!Oe&&Math.abs(W[v*3+2]-ri.z)<1.2&&W[v*3]>ri.x0-2&&W[v*3]<ri.x1+2&&(Oe=!0,Q.visible=!0,e.toast(qt(r(),"Hallentor entdeckt \u2013 drau\xDFen wartet die echte Referenzbaustelle Aachen","Hall gate discovered \u2013 outside awaits the real Reference Construction Site Aachen"),"#5fd38d")),Ja=!0,Fe[v]=R+Math.random()*.25;let G=de[v];G>=0&&At[G]++;let ne=W[v*3],ge=W[v*3+1],Ce=W[v*3+2];if(Je[v]>=0&&Tt[Je[v]]++,N&&(N.x||N.z)&&(Qe.array[v*3]=N.x,Qe.array[v*3+1]=N.y,Qe.array[v*3+2]=N.z,nr++),di[Math.max(0,Math.min(De-1,Math.floor(Ce+tn)))*De+Math.max(0,Math.min(De-1,Math.floor(ne+tn)))]++,he[v]>=0&&nn){let ie=nn.blocks[he[v]];ie.scan++,ge<ie.lo&&(ie.lo=ge),ge>ie.hi&&(ie.hi=ge)}if(Ze[v]<0){Re++;let ie=Math.max(0,Math.min(De-1,Math.floor(Ce+tn)))*De+Math.max(0,Math.min(De-1,Math.floor(ne+tn)));if(Se[v]===1?cn[ie]++:er[ie]++,v%3===0){let[ce,ye]=z(ne,Ce);T.fillStyle=ge>2.5?"rgba(92,225,230,0.5)":"rgba(150,170,200,0.35)",T.fillRect(ce,ye,1.6,1.6)}}(Se[v]!==1||v%3===0)&&(v%2===0||Ze[v]>=0)&&Ga.add(ne,ge,Ce,Se[v]),_e.mesh&&_e.meshMode!=="cad"&&rd(v)},rd=v=>{let R=W[v*3],N=W[v*3+1],G=W[v*3+2];_e.meshMode==="all"||Ze[v]<0?Tn?.add(R,N,G):Je[v]>=0&&Is.get(Je[v])?.add(R,N,G)},ad=(v,R,N,G,ne,ge,Ce,ie)=>{let ce=Math.max(0,Math.floor((v+tn)/As)),ye=Math.min(De-1,Math.floor((R+tn)/As)),qe=Math.max(0,Math.floor((N+tn)/As)),Ve=Math.min(De-1,Math.floor((G+tn)/As)),nt=!1,Ye=0;for(let xt=qe;xt<=Ve;xt++){let sn=Ke[xt*De+ce],un=Ke[xt*De+ye+1],me=!1;for(let at=sn;at<un;at++)Fe[at]>=0||!ne(at)||(sd(at,ge,ie),Ce?.(at),me=!0,Ye++);me&&(Ie.addUpdateRange(sn,un-sn),ie&&Qe.addUpdateRange(sn*3,(un-sn)*3),nt=!0)}return nt&&(Ie.needsUpdate=!0,ie&&(Qe.needsUpdate=!0)),Ye},lm=(v,R)=>{ee.fill(1e9);let N=v.x,G=v.z,ne=Math.max(0,Math.floor((N-R+tn)/As)),ge=Math.min(De-1,Math.floor((N+R+tn)/As)),Ce=Math.max(0,Math.floor((G-R+tn)/As)),ie=Math.min(De-1,Math.floor((G+R+tn)/As)),ce=0;for(let Ve=Ce;Ve<=ie;Ve++){let nt=Ke[Ve*De+ne],Ye=Ke[Ve*De+ge+1];for(let xt=nt;xt<Ye;xt++){let sn=W[xt*3]-N,un=W[xt*3+1]-v.hy,me=W[xt*3+2]-G,at=sn*sn+me*me,ht=Math.sqrt(at+un*un);if(ht>R||ht<.35)continue;let Jt=Math.floor((Math.atan2(me,sn)+Math.PI)/(2*Math.PI)*Jr)%Jr,te=Math.min(ju-1,Math.floor((Math.atan2(un,Math.sqrt(at))+Math.PI/2)/Math.PI*ju))*Jr+Jt;ht<ee[te]&&(ee[te]=ht),wt[ce]=xt,O[ce]=te,Ue[ce]=ht,ce++}}let ye=Array.from({length:Qu},()=>[]),qe=[];for(let Ve=0;Ve<ce;Ve++){let nt=wt[Ve],Ye=Ue[Ve],xt=O[Ve];if(Ye>ee[xt]*1.02+.06||(qe.push(nt),Fe[nt]>=0))continue;let sn=Ye<6?1:1-.75*(Ye-6)/(R-6);Math.random()>sn||ye[Math.floor(xt%Jr/Jr*Qu)].push(nt)}v.buckets=ye,v.vis=Int32Array.from(qe)},cm=()=>{for(let R of An)R.m.dispose();if(An=[],Is.clear(),Tn=null,!_e.mesh||_e.meshMode==="cad"||!Be)return;let v=_e.meshVS;if(Tn=new za({min:[-28,-.5,-21],max:[21,10,67],vs:Math.max(v,.15)}),An.push({m:Tn,clu:-1}),_e.meshMode==="obj")for(let R of k){let N=R.max[0]-R.min[0],G=R.max[1]-R.min[1],ne=R.max[2]-R.min[2],ge=Math.max(.05,2*(N*G+G*ne+N*ne)),Ce=Math.max(.025,Math.min(.12,Math.sqrt(3.5/(R.n/ge))*(v/.2))),ie=js(R.g,R.p).c,ce=new za({min:[R.min[0]-Ce*2,R.min[1]-Ce*2,R.min[2]-Ce*2],max:[R.max[0]+Ce*2,R.max[1]+Ce*2,R.max[2]+Ce*2],vs:Ce,color:[ie[0],ie[1],ie[2]],iso:.45});Is.set(R.id,ce),An.push({m:ce,clu:R.id})}for(let R of An)l.add(R.m.group);for(let R=0;R<ue;R++)Fe[R]>=0&&rd(R);for(let R of An)R.m.touchAll()},od=()=>{bt.uMesh.value=_e.mesh?_e.meshMode==="all"?1:_e.meshMode==="obj"?2:3:0,nn&&(nn.group.visible=_e.mesh&&_e.meshMode==="cad"),cm(),Za()},hm=()=>{if(!(!nn||!nn.group.visible)){for(let[v,R]of nn.cluObjs){let N=xe[v]>0&&Tt[v]/xe[v]>=.5;bt.uCad.value[v]=N?1:0;for(let G of R)G.visible=N}for(let v of nn.blocks){let R=Math.max(.1,(v.b[1]-v.a[1])*Math.max(v.b[0]-v.a[0],v.b[2]-v.a[2])),N=v.tot/R>=(Y?60:120)&&v.scan/v.tot>=.35&&v.hi-v.lo>.3;if(v.m.visible=N,N){let G=v.lo<v.a[1]+.4?v.a[1]:v.lo;v.m.scale.y=v.hi-G,v.m.position.y=(v.hi+G)/2}}nn.floor.cells.forEach((v,R)=>nn.floor.show(R,fn[v]>0&&cn[v]/fn[v]>=.3));for(let v of nn.waam){let R=fi?fi.prog[v.p]:v.L;v.meshes.forEach((N,G)=>N.visible=N.visible&&G<R)}}},um=Object.values(Wn).map(v=>[parseInt(v.c.slice(1,3),16)/255,parseInt(v.c.slice(3,5),16)/255,parseInt(v.c.slice(5,7),16)/255]),dm=[[.59,.28,.3],[.44,.82,.55],[.35,.7,1]],fm=v=>{let R=[[.267,.005,.329],[.231,.322,.545],[.128,.567,.551],[.369,.789,.383],[.993,.906,.144]],N=Math.max(0,Math.min(.9999,v))*4,G=Math.floor(N),ne=N-G;return[0,1,2].map(ge=>R[G][ge]+(R[G+1][ge]-R[G][ge])*ne)},pm=v=>{v=Math.max(0,Math.min(1,v));let R=[[.02,0,.08],[.42,0,.58],[.92,.16,.1],[1,.66,0],[1,1,.86]],N=v*3.999,G=Math.floor(N),ne=N-G;return[0,1,2].map(ge=>R[G][ge]+(R[G+1][ge]-R[G][ge])*ne)},mm=v=>{let R=_e.color;if(R==="seg")return dm[Se[v]];if(R==="mat")return um[oe[v]];if(R==="heat"){let N=_t.array[v]/255;if(_e.feat===16){if(!(Se[v]===1&&Ze[v]<0&&W[v*3+2]<12))return[.78,.8,.84];let G=N*2-1;return G<0?[.2+.05*G,.85+.45*G,.4-.6*G]:[.2+.8*G,.85-.6*G,.4-.2*G]}return fm(N)}if(R==="therm"){let N=Fe[v]>=0?g.elapsedTime-Fe[v]:99;return pm(.06+.34*we[v]+.1*Math.min(1,W[v*3+1]/6)+.55*Math.exp(-N/6))}return Ze[v]>=0&&tt[Ze[v]]==="done"?js(Ze[v],Ne[v]).c:null},ld=async v=>{if(_e.feat=v,bt.uFeatK.value=v,v===16){let G=_t.array;for(let ne=0;ne<ue;ne++)G[ne]=Se[ne]===1&&Ze[ne]<0&&W[ne*3+2]<12?Math.round(Math.max(0,Math.min(1,(W[ne*3+1]-(Cs[0]*W[ne*3]+Cs[1]*W[ne*3+2]+Cs[2]))/.04*.5+.5))*255):0;_t.needsUpdate=!0,Bt();return}if(!Li){if(_e.featState==="loading")return;_e.featState="loading",Bt(),Li=new Uint8Array(await st("lab/feats.bin")),_e.featState="ready"}let R=_t.array,N=(qs[v]?.i??v)*E;if(Y)for(let G=0;G<ue;G++)R[G]=Li[N+Y[G]];else R.set(Li.subarray(N,N+ue));_t.needsUpdate=!0,Bt()},cd=[],gm=()=>{i.clu.innerHTML="";for(let v of k){let R=document.createElement("div");R.className="lab-clu";let N=js(v.g,v.p).c;R.style.borderColor=`rgb(${N.map(G=>Math.round(G*255)).join(",")})`,i.clu.appendChild(R),cd.push(R)}},na=new kt;l.add(na);let Ni=new Set,Ul=-99,hd="",xm=v=>{let R=v.toLowerCase().split(/[\s,;]+/).filter(ie=>ie.length>1),N=ie=>ie.replace(/ü/g,"u").replace(/ä/g,"a").replace(/ö/g,"o"),G=ie=>{let ce=[ie,ie.replace(/(es|s)$/,""),ie.replace(/(en|n|e)$/,"")];return[...new Set([...ce,...ce.map(N)])].filter(ye=>ye.length>1)},ne=R.flatMap(ie=>G(ie).flatMap(ce=>[ce,...Sl[ce]??[]]));na.clear(),Ni=new Set;let ge=new Set;for(let ie of k){let ce=js(ie.g,ie.p),ye=(ce.inst?[ie.name.de,ie.name.en]:[ie.name.de,ie.name.en,ut(ce.name,"de"),ut(ce.name,"en")]).map(Ye=>Ye.toLowerCase()),qe=Ye=>ye.some(xt=>Ye.length<=3?xt.split(/[^a-zäöüß0-9]+/).includes(Ye):xt.includes(Ye));if(!ne.some(qe)||ie.g===Ll&&tt[Ll]==="hidden")continue;Ni.add(ie.id),ge.add(ie.g);let Ve=new Zn(new L(ie.min[0]-.05,ie.min[1]-.05,ie.min[2]-.05),new L(ie.max[0]+.05,ie.max[1]+.05,ie.max[2]+.05)),nt=new xl(Ve,new ot(16724804));nt.material.depthTest=!1,nt.renderOrder=5,na.add(nt)}Ul=g.elapsedTime,hd=v,ge.forEach(ie=>bt.uHi.value[ie]=Ul);let Ce=[...new Set(k.filter(ie=>Ni.has(ie.id)).map(ie=>ut(js(ie.g,ie.p).name,r()).split(" \xB7 ")[0]))];return e.toast(Ni.size?`Zero-Shot \u201E${v}\u201C \u2192 ${Ni.size} ${qt(r(),"Objekte","objects")}: ${Ce.join(", ")}`:qt(r(),`Zero-Shot \u201E${v}\u201C: kein Treffer`,`Zero-shot "${v}": no match`),"#ff3344"),Ni.size},Ls=[],Wa=new kt;l.add(Wa);let ym=new Gt({color:16764784,depthTest:!1}),_m=(v,R)=>{let N=new yt().multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse).elements,G=a.clientWidth,ne=a.clientHeight,ge=-1,Ce=1e9;for(let ie=0;ie<ue;ie++){if(Fe[ie]<0)continue;let ce=W[ie*3],ye=W[ie*3+1],qe=W[ie*3+2],Ve=N[3]*ce+N[7]*ye+N[11]*qe+N[15];if(Ve<=.05)continue;let nt=((N[0]*ce+N[4]*ye+N[8]*qe+N[12])/Ve+1)*.5*G,Ye=(1-(N[1]*ce+N[5]*ye+N[9]*qe+N[13])/Ve)*.5*ne,xt=(nt-v)**2+(Ye-R)**2;if(xt>100)continue;let sn=Ve+xt*.002;sn<Ce&&(Ce=sn,ge=ie)}return ge},vm=(v,R)=>{let N=_m(v,R);if(N<0)return e.toast(qt(r(),"Kein gescannter Punkt unter dem Cursor","No scanned point under the cursor"),"#ffcf70");let G=new L(W[N*3],W[N*3+1],W[N*3+2]),ne=Ls[Ls.length-1],ge=new Ee(new Un(.035,10,8),ym);if(ge.position.copy(G),ge.renderOrder=6,!ne||ne.b){let Ce=new kt;Ce.add(ge),Wa.add(Ce);let ie=document.createElement("div");if(ie.className="lab-meas",i.meas.appendChild(ie),Ls.push({a:G,obj:Ce,el:ie}),Ls.length>6){let ce=Ls.shift();Wa.remove(ce.obj),ce.el.remove()}}else{ne.b=G,ne.obj.add(ge);let Ce=new qi(new Zt().setFromPoints([ne.a,G]),new oi({color:16764784,depthTest:!1}));Ce.renderOrder=6,ne.obj.add(Ce);let ie=ne.a.distanceTo(G);ne.el.textContent=`${(ie*1e3).toLocaleString(r()==="en"?"en-GB":"de-DE",{maximumFractionDigits:0})} mm`}},ud=()=>{Ls.splice(0).forEach(v=>(Wa.remove(v.obj),v.el.remove()))},Xn=0,ir=.42,ia=4.2,sr=-.12,mi=new L,xn=new L(ui[0],0,ui[1]),kl=new L,Xa=0,sa=0,Cn=!1,Fl=0,Ol=!1,Bn=t.flags.auto,gt={phase:"go",target:-1,t0:0,lastProg:0,lastProgT:0,alt:3.6,ang:0,cardI:-1,cardT:0},zl=[.1,.25,.5,.75],rr={},wi=()=>Ae==="drone"?x.position:xn,Di=new Map,ar=0,Bl=()=>{let[v,R]=[...Di.values()];return Math.hypot(v.x-R.x,v.y-R.y)},dd=v=>{v.target.closest(".lab-ui, .lab-label")||(Di.set(v.pointerId,{x:v.clientX,y:v.clientY,moved:0}),Di.size===2&&(ar=Bl()))},fd=v=>{let R=Di.get(v.pointerId);if(!R)return;let N=v.clientX-R.x,G=v.clientY-R.y;if(R.moved+=Math.abs(N)+Math.abs(G),R.x=v.clientX,R.y=v.clientY,Di.size>=2){let ge=Bl();ar>0&&ge>0&&(Ae==="drone"?ia=Math.max(1.8,Math.min(14,ia*(ar/ge))):(c.fov=Math.max(35,Math.min(80,c.fov*(ar/ge))),c.updateProjectionMatrix())),ar=ge;return}let ne=v.pointerType==="touch"?1.5:1;Ae==="drone"?(Xn-=N*.006*ne,ir=Math.max(.05,Math.min(1.35,ir+G*.004*ne))):(Xn-=N*.005*ne,sr=Math.max(-1.3,Math.min(1.3,sr-G*.004*ne)))},Ya=v=>{let R=Di.get(v.pointerId);if(R){if(Di.size===1&&R.moved<8&&_e.measure&&Be){let N=a.getBoundingClientRect();vm(v.clientX-N.left,v.clientY-N.top)}Di.delete(v.pointerId),ar=Di.size===2?Bl():0}},$a={f:0,r:0},pd=v=>{ia=Math.max(1.8,Math.min(14,ia*(1+Math.sign(v.deltaY)*.1))),v.preventDefault()},Hl=()=>{let v=wi(),R=-1,N=1e9;return lt.forEach((G,ne)=>{if(G.bonus&&tt[ne]==="hidden")return;let ge=Math.hypot(v.x-G.x,v.z-G.z);ge<G.r+1.2&&ge<N&&(N=ge,R=ne)}),R},Vl=v=>{if(v===Ae)return!0;if(Mt[v])return e.toast(qt(r(),`${gn(v)} l\xE4dt noch (${Math.round(Ht[v])} %) \u2013 ab ${Va} % wieder einsatzbereit`,`${gn(v)} still charging (${Math.round(Ht[v])} %) \u2013 ready again at ${Va} %`),"#ffb547"),e.tech(Ae),!1;if(v==="drone"?(x.position.set(xn.x,1.4,xn.z),mi.set(0,0,0),Fl=g.elapsedTime):(xn.set(wi().x,0,wi().z),Bn&&!t.flags.auto&&qa(!1)),v==="handheld"){Rn.set(0,0,0);let R=Math.random()*Math.PI*2;ta.set(Math.cos(R),0,Math.sin(R))}return Ae=v,e.tech(v),!0},qa=v=>{Bn=v,_e.auto=v,gt.phase="go",gt.target=-1,Bt()},Ka=v=>{_e.color=_e.color===v?"normal":v,bt.uMode.value={normal:0,seg:1,heat:2,therm:3,mat:4}[_e.color],_e.color==="heat"&&ld(_e.feat),Bt()},Ui=null,Gl=new vi(new L(0,-1,0),1.2),Yn=new kt;Yn.add(new Ee(new Ii(1,1),new Gt({color:16742973,transparent:!0,opacity:.06,side:hn,depthWrite:!1}))),Yn.add(new Ki(new Pa(new Ii(1,1)),new oi({color:16742973,transparent:!0,opacity:.7}))),Yn.visible=!1,l.add(Yn),o.localClippingEnabled=!0;let Za=()=>{let{mode:v,pos:R,flip:N}=_e.cut,G=N?-1:1;bt.uCut.value.set(v,R,G);let ne=v===2?new L(1,0,0):v===3?new L(0,0,1):new L(0,1,0);Gl.normal.copy(ne).multiplyScalar(-G),Gl.constant=R*G;let ge=new Set,Ce=Ve=>Ve?.traverse(nt=>{let Ye=nt.material;Ye&&(Array.isArray(Ye)?Ye:[Ye]).forEach(xt=>ge.add(xt))});Ce(nn?.group),Ce(fi?.group),Ce(Hn.group);for(let Ve of An)ge.add(Ve.m.mat);for(let Ve of ge){let nt=v?[Gl]:null;(Ve.clippingPlanes?.length??0)!==(nt?.length??0)&&(Ve.clippingPlanes=nt,Ve.needsUpdate=!0)}Yn.visible=v>0;let ie=St.x1-St.x0+2,ce=St.z1-St.z0+2,ye=(St.x0+St.x1)/2,qe=(St.z0+St.z1)/2;Yn.rotation.set(0,0,0),v===1?(Yn.position.set(ye,R,qe),Yn.rotation.x=-Math.PI/2,Yn.scale.set(ie,ce,1)):v===2?(Yn.position.set(R,3.3,qe),Yn.rotation.y=Math.PI/2,Yn.scale.set(ce,6.8,1)):v===3&&(Yn.position.set(ye,3.3,R),Yn.scale.set(ie,6.8,1)),Bt()},Ai=[],Ja=!1,md=-99,gd=()=>{for(let v of Ai)l.remove(v.g),v.el.remove();Ai=[]},Tv=v=>v>=1e3?(v/1e3).toLocaleString(r()==="en"?"en-GB":"de-DE",{maximumFractionDigits:1})+"k":String(Math.round(v)),xd=()=>{if(!Be)return;Ja=!1,md=g.elapsedTime;let v=new Float32Array(De*De),R=new Uint16Array(De*De);for(let ce=0;ce<De*De;ce++)for(let ye=Ke[ce];ye<Ke[ce+1];ye++)if(Fe[ye]<0){let qe=W[ye*3],Ve=W[ye*3+2];(Ze[ye]>=0||qe>St.x0&&qe<St.x1&&Ve>St.z0&&Ve<St.z1)&&v[ce]++}else Se[ye]!==1&&W[ye*3+1]>.3&&W[ye*3+1]<2.2&&R[ce]++;let N=ce=>R[ce]>(Y?15:30),G=15*pn(),ne=Math.ceil(G),ge=[];for(let ce=Math.ceil(St.z0+tn)+1;ce<St.z1+tn-1;ce+=2)for(let ye=Math.ceil(St.x0+tn)+1;ye<St.x1+tn-1;ye+=2){let qe=ce*De+ye;if(!fn[qe]||N(qe))continue;let Ve=0;for(let nt=-ne;nt<=ne;nt++)for(let Ye=-ne;Ye<=ne;Ye++){let xt=ye+Ye,sn=ce+nt;if(xt<0||sn<0||xt>=De||sn>=De)continue;let un=v[sn*De+xt];if(!un)continue;let me=Math.hypot(Ye,nt);if(me>G)continue;let at=(me<6?1:1-.75*(me-6)/(G-6))*1.1,ht=1,Jt=Math.ceil(me*2);for(let $=2;$<Jt-1;$++)if(N(Math.round(ce+nt*$/Jt)*De+Math.round(ye+Ye*$/Jt))){ht=.12;break}Ve+=un*at*ht}ge.push({x:ye-tn+.5,z:ce-tn+.5,gain:Ve})}ge.sort((ce,ye)=>ye.gain-ce.gain);let Ce=[];for(let ce of ge){if(Ce.length>=3||ce.gain<re*.005)break;Ce.every(ye=>Math.hypot(ye.x-ce.x,ye.z-ce.z)>6)&&D.every(ye=>Math.hypot(ye.x-ce.x,ye.z-ce.z)>2.5)&&Ce.push(ce)}gd();let ie=16751165;Ce.forEach((ce,ye)=>{let qe=new kt;qe.position.set(ce.x,0,ce.z);let Ve=new Ee(new Zi(.42,.5,40),new Gt({color:ie,transparent:!0,opacity:.85,side:hn,depthWrite:!1}));Ve.rotation.x=-Math.PI/2,Ve.position.y=.04,qe.add(Ve),qe.add(mt(ie,!0).g);let nt=new Ee(new wn(.02,.02,3.2,6,1,!0),new Gt({color:ie,transparent:!0,opacity:.35,depthWrite:!1}));nt.position.y=3.4,qe.add(nt),l.add(qe);let Ye=document.createElement("div");Ye.className="lab-nbv",Ye.textContent=`${ye+1} \xB7 +${Math.max(1,Math.round(100*ce.gain/re))} % ${qt(r(),"Halle","hall")}`,i.meas.appendChild(Ye),Ai.push({...ce,g:qe,el:Ye})}),Ce.length||e.toast(qt(r(),"Scan-Planer: kaum noch Neuzuwachs \u2013 die Halle ist weitgehend erfasst","Scan planner: hardly any gain left \u2013 the hall is largely captured"),"#ff9a3d")},yd=[8161952,4054148,16758087,16731486],_d=yd.map((v,R)=>new Gt({color:v,transparent:!0,opacity:[.07,.3,.42,.42][R],depthWrite:!1,side:hn})),vd=yd.map((v,R)=>new oi({color:v,transparent:!0,opacity:[.25,.8,.95,.95][R]})),Hn={group:new kt,items:[],state:"idle",t:-9};Hn.group.visible=!1,l.add(Hn.group);let bd=(v,R)=>{v.computeBoundingBox();let N=v.boundingBox,G=new Ee(v,_d[0]),ne=new Ki(new Pa(v,25),vd[0]);G.renderOrder=3,ne.renderOrder=4,Hn.group.add(G,ne),Hn.items.push({fill:G,line:ne,bb:[N.min.x,N.min.z,N.max.x,N.max.z],st:-1,g:-1,...R})},bm=async()=>{if(Hn.state="loading",nn){nn.group.updateMatrixWorld(!0);for(let[v,R]of nn.cluObjs){let N=k[v],G=/statt|versetzt|abweichung/i.test(ut(js(N.g,N.p).name,"de"));for(let ne of R)ne.traverse(ge=>{let Ce=ge;if(!Ce.isMesh)return;let ie=Ce.geometry.clone();ie.applyMatrix4(Ce.matrixWorld),bd(ie,{clu:v,dev:G,g:N.g})})}}try{let v=await st("lab/plan.bin"),R=new DataView(v),N=R.getUint32(4,!0),G=8;for(let ne=0;ne<N;ne++){let ge=R.getUint8(G+1),Ce=R.getUint32(G+2,!0),ie=R.getUint32(G+6,!0);G+=10;let ce=new Float32Array(v.slice(G,G+Ce*12));G+=Ce*12;let ye=new Uint32Array(v.slice(G,G+ie*12));G+=ie*12;let qe=new Zt;qe.setAttribute("position",new Lt(ce,3)),qe.setIndex(new Lt(ye,1)),bd(qe,{ver:ge,g:xv})}}catch(v){console.error("plan.bin "+String(v?.stack??v)),e.toast(qt(r(),"Planungsmodell konnte nicht geladen werden","Planning model could not be loaded"),"#ff5a5f")}Hn.state="ready",Za(),Xl(!0)},Mm=v=>{let R=0,N=0;for(let G=Math.floor(v[1]+tn);G<=Math.floor(v[3]+tn);G++)for(let ne=Math.floor(v[0]+tn);ne<=Math.floor(v[2]+tn);ne++)ne<0||G<0||ne>=De||G>=De||(R+=ss[G*De+ne],N+=di[G*De+ne]);return R?N/R:0},Wl=null,Xl=(v=!1)=>{if(Hn.state!=="ready")return;let R={ok:0,dev:0,miss:0,open:0,total:Hn.items.length,rs:{ok:0,miss:0,open:0,total:0}};for(let N of Hn.items){let G=tt[N.g]!=="hidden";if(N.fill.visible=N.line.visible=G,!G)continue;let ne;N.clu!==void 0?ne=(xe[N.clu]?Tt[N.clu]/xe[N.clu]:0)>=.5?N.dev?2:1:0:(ne=Mm(N.bb)>=.45?N.ver?1:3:0,R.rs.total++,ne===1?R.rs.ok++:ne===3?R.rs.miss++:R.rs.open++),ne===1?R.ok++:ne===2?R.dev++:ne===3?R.miss++:R.open++,(v||ne!==N.st)&&(N.st=ne,N.fill.material=_d[ne],N.line.material=vd[ne])}Wl=R},Yl=v=>{if(Ut.has(v)){if(v==="seg"&&Ka("seg"),v==="heat"&&Ka("heat"),v==="therm"&&Ka("therm"),v==="mat"&&Ka("mat"),v==="mesh"&&(_e.mesh=!_e.mesh,od()),v==="xray"&&(_e.xray=!_e.xray,Hn.group.visible=_e.xray,_e.xray&&Hn.state==="idle"&&bm(),_e.xray?Hn.state==="ready"&&Xl(!0):Wl=null),v==="measure"&&(_e.measure=!_e.measure,_e.measure?e.toast(qt(r(),"Messen: zwei gescannte Punkte anklicken","Measure: click two scanned points"),"#ffcf70"):ud()),v==="auto"){if(!Bn&&Mt.drone)return e.toast(qt(r(),"Drohne l\xE4dt noch \u2013 Autopilot sp\xE4ter","Drone still charging \u2013 autopilot later"),"#ffb547");qa(!Bn),Bn&&Vl("drone")}v==="search"&&e.search(),v==="ask"&&e.ask(),v==="icp"&&Sm(),v==="nbv"&&(_e.nbv=!_e.nbv,_e.nbv?(xd(),Ae!=="tls"&&e.toast(qt(r(),"Scan-Planer: orange Standpunkte \u2013 wechsle zu TLS (3) und stelle dort Scanner auf (P)","Scan planner: orange positions \u2013 switch to TLS (3) and set up scanners there (P)"),"#ff9a3d")):gd()),v==="cut"&&(_e.cut={..._e.cut,mode:_e.cut.mode?0:1},Za()),Bt()}},Sm=()=>{if(Ui)return;let v=Qe.array,R=0,N=0;for(let G=0;G<ue;G++){let ne=v[G*3]**2+v[G*3+1]**2+v[G*3+2]**2;ne>0&&(R+=ne,N++)}if(!N)return e.toast(qt(r(),"ICP: keine driftbehafteten Scans \u2013 alles bereits registriert","ICP: no drifted scans \u2013 everything already registered"),"#ffcf70");Ui={t0:g.elapsedTime,rms:Math.sqrt(R/N),n:N}},Md=()=>{if(Ae!=="tls"||D.some(nt=>nt.state!=="idle"))return;let v=-Math.sin(Xn),R=-Math.cos(Xn),N=Math.max(St.x0,Math.min(St.x1,xn.x+v*2.6)),G=Math.max(St.z0,Math.min(St.z1,xn.z+R*2.6));if(_e.nbv&&Ai.length){let nt=Ai.reduce((Ye,xt)=>Math.hypot(xt.x-N,xt.z-G)<Math.hypot(Ye.x-N,Ye.z-G)?xt:Ye);Math.hypot(nt.x-N,nt.z-G)<3.5&&(e.toast(qt(r(),`Scanner auf Vorschlag ${Ai.indexOf(nt)+1} gestellt`,`Scanner placed on suggestion ${Ai.indexOf(nt)+1}`),"#ff9a3d"),N=nt.x,G=nt.z)}if(Ja=!0,D.length>=Xt()){let nt=D.shift();l.remove(nt.g,nt.ring)}let ne=Qp[(D.length+Math.floor(g.elapsedTime))%Qp.length],{g:ge,head:Ce}=mt(ne),ie=j(N,G);ge.position.set(N,ie,G);let ce=15*pn(),ye=new Ii(ce,7);ye.translate(ce/2,2,0);let qe=new Ee(ye,new Gt({color:ne,transparent:!0,opacity:.16,side:hn,depthWrite:!1,blending:ys}));qe.position.y=Ju,qe.visible=!1,ge.add(qe),l.add(ge);let Ve=new Ee(new Zi(ce-.06,ce,128),new Gt({color:ne,transparent:!0,opacity:.25,side:hn,depthWrite:!1}));Ve.rotation.x=-Math.PI/2,Ve.position.set(N,ie+.03,G),l.add(Ve),D.push({g:ge,head:Ce,sheet:qe,ring:Ve,x:N,z:G,hy:ie+Ju,c:ne,buckets:null,vis:null,prog:0,nextB:0,state:"idle"})},Sd=()=>{if(!(Ae!=="tls"||!D.length||D.some(v=>v.state!=="idle"))){if(!t.flags.nobattery&&Ht.tls<Qs.tlsRun*D.length&&!Mt.tls)return e.toast(qt(r(),`Akku reicht nicht f\xFCr ${D.length} Scanner (je ${Qs.tlsRun} %) \u2013 Scanner einsammeln (C) oder laden`,`Battery too low for ${D.length} scanners (${Qs.tlsRun} % each) \u2013 collect scanners (C) or charge`),"#ffb547");pi("tls",Qs.tlsRun*D.length)&&D.forEach(v=>(v.state="prep",v.prog=0,v.nextB=0,v.buckets=null))}},Ed=()=>{D.some(v=>v.state!=="idle")||D.splice(0).forEach(v=>l.remove(v.g,v.ring))},$l=[],wd=new Map,Em=v=>{if(!v.vis)return;let R=Pl(Ge,[v.x,v.hy,v.z],640,v.vis,!0),N=$l.length+1;wd.set(N,{eye:[v.x,v.hy,v.z],vis:v.vis}),$l.push({id:N,x:v.x,z:v.z,thumb:R.toDataURL("image/jpeg",.8)}),v.vis=null,e.panos([...$l])},Ad=v=>{let R=v.target?.tagName;if(R==="INPUT"||R==="TEXTAREA"||R==="SELECT")return;let N=v.key.toLowerCase();if(["arrowup","arrowdown","arrowleft","arrowright"," "].includes(N)&&v.preventDefault(),rr[N]=!0,["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(N)&&Bn&&!t.flags.auto&&qa(!1),v.repeat)return;if(N==="escape"&&(e.card(null),_e.measure&&Yl("measure")),N==="enter"||N==="f"){let ne=Hl();ne>=0&&tt[ne]==="done"&&e.card(ne)}if(!Cn)return;(N==="1"||N==="2"||N==="3")&&Vl(["drone","handheld","tls"][+N-1]),N==="p"&&Md(),N==="c"&&Ed(),N===" "&&Ae==="tls"&&Sd(),N==="l"&&(_e.labels=!_e.labels,Bt());let G=ts.find(ne=>ne.key?.toLowerCase()===N);G&&((G.id==="search"||G.id==="ask")&&v.preventDefault(),Yl(G.id))},Td=v=>rr[v.key.toLowerCase()]=!1,Rd=()=>Object.keys(rr).forEach(v=>rr[v]=!1);a.addEventListener("pointerdown",dd),window.addEventListener("pointermove",fd),window.addEventListener("pointerup",Ya),window.addEventListener("pointercancel",Ya),a.addEventListener("wheel",pd,{passive:!1}),window.addEventListener("keydown",Ad),window.addEventListener("keyup",Td),window.addEventListener("blur",Rd);let Cd=()=>{o.setSize(a.clientWidth,a.clientHeight),c.aspect=a.clientWidth/a.clientHeight,c.updateProjectionMatrix()};window.addEventListener("resize",Cd);let Pd=0,Id=0,Ld=0,or=new L,wm=new L,Am=new L(0,1,0),Nd=()=>{s=requestAnimationFrame(Nd);let v=Math.min(.05,g.getDelta()),R=g.elapsedTime;bt.uT.value=R;let N=rr,G=Ae!=="drone",ne=Math.max(-1,Math.min(1,(N.w||N.arrowup?1:0)-(N.s||N.arrowdown?1:0)+$a.f)),ge=Math.max(-1,Math.min(1,(N.d||N.arrowright?1:0)-(N.a||N.arrowleft?1:0)+$a.r));Cn&&(N.q||N.e)&&(Xn+=v*1.6*(N.q?1:-1));let Ce=new L(-Math.sin(Xn),0,-Math.cos(Xn)),ie=new L(-Ce.z,0,Ce.x),ce=Math.hypot(wi().x-ui[0],wi().z-ui[1])<1&&(G||x.position.y<.9);["drone","handheld","tls"].forEach($=>{let te=$===Ae?ce?yv:0:td*(ce?2:1);Ht[$]=Math.min(100,Ht[$]+te*v),Mt[$]&&Ht[$]>=Va&&(Mt[$]=!1,e.toast(qt(r(),`${gn($)} wieder einsatzbereit (${Math.round(Ht[$])} %)`,`${gn($)} ready again (${Math.round(Ht[$])} %)`),"#5fd38d"))}),K.material.opacity=ce?.6+.4*Math.sin(R*8):.5,x.visible=A.visible=!G;let ye=Mt.drone&&!t.flags.nobattery;if(Cn&&!G){let $=N[" "]?1:N.shift?-1:0,te=Ce.clone().multiplyScalar(ne).add(ie.clone().multiplyScalar(ge)).multiplyScalar(ye?2.5:11),Te=0;Bn&&(Te=Tm(te,R)),te.y=ye?-6:(Te||$)*7+(R-Fl<1.6&&x.position.y<2.4&&!Bn?9:0),mi.addScaledVector(te,v),mi.multiplyScalar(Math.pow(.12,v));let We=Math.hypot(mi.x,mi.z),je=ye?1:5;We>je&&(mi.x*=je/We,mi.z*=je/We),x.position.addScaledVector(mi,v),x.position.x=Math.max(St.x0,Math.min(St.x1,x.position.x)),x.position.z=Math.max(St.z0,Math.min(St.z1,x.position.z)),x.position.y=Math.max(j(x.position.x,x.position.z)+(ye||Bn&&gt.phase==="charge"?.25:St.y0),Math.min(St.y1,x.position.y));let rt=(We>.3?Math.atan2(-mi.x,-mi.z):sa)-sa;for(;rt>Math.PI;)rt-=Math.PI*2;for(;rt<-Math.PI;)rt+=Math.PI*2;sa+=rt*Math.min(1,v*4),x.rotation.set(0,0,0),x.rotateY(sa);let jt=or.copy(mi).applyAxisAngle(Am,-sa);x.rotateX(Math.max(-.35,Math.min(.35,jt.z*.07))),x.rotateZ(Math.max(-.35,Math.min(.35,-jt.x*.07))),x.position.y>.8&&pi("drone",Qs.droneFly*v)}x.position.y+=Math.sin(R*2.2)*.0015,y.forEach(($,te)=>$.rotation.y+=(Cn&&!ye?40:x.position.y>.4?20:2)*v*(te%2?1:-1));let qe=x.position.y;A.position.set(x.position.x,.02,x.position.z),A.scale.setScalar(.9+qe*.25);let Ve=(.6+qe*.75)*pn(),nt=Cn&&!G&&qe>.8&&!ye;J.visible=w.visible=F.visible=nt,J.scale.set(Ve,qe-.15,Ve),J.position.set(x.position.x,(qe-.15)/2,x.position.z),w.scale.set(Ve,Ve,1),w.position.set(x.position.x,.04,x.position.z),F.position.set(x.position.x,.05,x.position.z),F.scale.set(Ve,1,1),F.rotation.y=R*6,U.opacity=(bt.uLight.value?.06:.07)+.035*Math.sin(R*8);let Ye=!1;if(Me.visible=Ae==="handheld",Et.g.visible=Cn&&Ae==="tls"&&!D.some($=>$.state!=="idle"),Ct.visible=!1,G){let $=N.shift?5.5:3,te=Ce.clone().multiplyScalar(ne).add(ie.clone().multiplyScalar(ge));te.lengthSq()>1&&te.normalize(),kl.lerp(te.multiplyScalar(Cn?$:0),Math.min(1,v*8)),xn.addScaledVector(kl,v),xn.x=Math.max(St.x0,Math.min(St.x1,xn.x)),xn.z=Math.max(St.z0,Math.min(St.z1,xn.z));let Te=kl.length()*v;Xa+=Te*2.4;let We=or.set(xn.x,j(xn.x,xn.z)+jp+Math.sin(Xa*2)*.025,xn.z);c.position.copy(We);let je=wm.set(-Math.sin(Xn)*Math.cos(sr),Math.sin(sr),-Math.cos(Xn)*Math.cos(sr));if(c.lookAt(We.x+je.x,We.y+je.y,We.z+je.z),Me.position.set(.17+Math.cos(Xa)*.006,-.15+Math.abs(Math.sin(Xa))*.008,-.42),Ae==="tls"&&Et.g.position.set(xn.x+Ce.x*2.6,j(xn.x+Ce.x*2.6,xn.z+Ce.z*2.6),xn.z+Ce.z*2.6),Ye=Ae==="handheld"&&Cn&&!!(N[" "]||N.scan)&&!Mt.handheld,ae.rotation.z+=v*(Ye?30:2),ke.material.color.setHex(Ye?Math.sin(R*20)>0?16726876:3342336:Mt.handheld?5583616:6280077),Ye&&Be&&pi("handheld",Qs.hand*v)){Te>0&&(Rn.x+=(ta.x*.04+(Math.random()-.5)*.02)*Te,Rn.z+=(ta.z*.04+(Math.random()-.5)*.02)*Te,Rn.y+=(Math.random()-.5)*.008*Te,Rn.length()>.45&&Rn.setLength(.45)),Rn.length()>.15&&!Ut.has("icp")&&!bn.drift&&(bn.drift=!0,e.toast(qt(r(),"SLAM-Drift! Ohne Registrierung verschmieren die W\xE4nde \u2026 irgendwo hoch oben gibt es Zielmarken.","SLAM drift! Without registration the walls smear \u2026 somewhere high up there are targets."),"#ffcf70"));let it=7*pn(),rt=Math.cos(.72),jt=We.x,Pn=We.y,Dn=We.z,Ns=Me.localToWorld(new L(0,.03,-.18)),rs=0;ad(jt-it,jt+it,Dn-it,Dn+it,Ds=>{let ql=W[Ds*3]-jt,Kl=W[Ds*3+1]-Pn,Zl=W[Ds*3+2]-Dn,Ud=ql*ql+Kl*Kl+Zl*Zl;if(Ud>it*it)return!1;let Jl=Math.sqrt(Ud);return(ql*je.x+Kl*je.y+Zl*je.z)/Jl<rt?!1:Math.random()<(Jl<3.5?1:1-.7*(Jl-3.5)/(it-3.5))*.3},R,Ds=>{rs>=ft||Math.random()>.08||(ct.set([Ns.x,Ns.y,Ns.z,W[Ds*3]+Rn.x,W[Ds*3+1]+Rn.y,W[Ds*3+2]+Rn.z],rs*6),rs++)},Rn.lengthSq()>0?Rn:void 0),Rt.setDrawRange(0,rs*2),Rt.attributes.position.needsUpdate=!0,Ct.visible=rs>0,Nt.opacity=.35+.3*Math.random()}}else{let $=x.position.clone().add(new L(0,.25,0)),te=new L(Math.sin(Xn)*Math.cos(ir),Math.sin(ir),Math.cos(Xn)*Math.cos(ir)).multiplyScalar(Cn?ia:6).add($);c.position.lerp(te,Cn?Math.min(1,v*6):.03),c.lookAt($),(!Cn||Bn&&gt.phase==="tour")&&(Xn+=v*.15)}if(Be&&nt){let $=x.position.x,te=x.position.z,Te=pn(),We=ad($-Ve,$+Ve,te-Ve,te+Ve,je=>{if(!Bn&&!bv(je,Ze[je]>=0))return!1;let it=W[je*3+1];if(it>qe-.15)return!1;let rt=(.6+(qe-it)*.75)*Te,jt=W[je*3]-$,Pn=W[je*3+2]-te;return jt*jt+Pn*Pn<=rt*rt},R);pi("drone",Qs.droneScan*v*(We>0?1:.6))}if(Be){let $=D.find(te=>te.state==="prep");$&&(lm($,15*pn()),$.state="run",$.prog=0);for(let te of D){if(te.state!=="run"||!te.buckets)continue;te.prog=Math.min(1,te.prog+v/3.4);let Te=Math.floor(te.prog*Qu);for(;te.nextB<Te;te.nextB++)for(let je of te.buckets[te.nextB])Fe[je]<0&&sd(je,R);Ps=!0;let We=te.prog*2*Math.PI-Math.PI;te.sheet.visible=!0,te.sheet.rotation.y=-We,te.head.rotation.y=-We,te.prog>=1&&(te.state="idle",te.sheet.visible=!1,te.buckets=null,Em(te))}Ps&&(Ie.clearUpdateRanges(),Ie.needsUpdate=!0,Ps=!1)}if(Ui){let $=Math.min(1,(R-Ui.t0)/1.4);bt.uReg.value=$*$*(3-2*$),$>=1&&(Qe.array.fill(0),Qe.clearUpdateRanges(),Qe.needsUpdate=!0,bt.uReg.value=0,e.toast(qt(r(),`ICP: ${Ui.n.toLocaleString("de-DE")} Punkte registriert \xB7 RMS ${(Ui.rms*100).toFixed(1)} cm \u2192 < 1 mm (Simulation)`,`ICP: ${Ui.n.toLocaleString("en-GB")} points registered \xB7 RMS ${(Ui.rms*100).toFixed(1)} cm \u2192 < 1 mm (simulation)`),"#ffcf70"),Rn.set(0,0,0),nr=0,Ui=null)}if(le.group.visible=tt[ed]!=="hidden",le.mat&&tt[ed]==="done"&&le.t0<0&&(le.t0=R,e.toast(qt(r(),"Easter Egg: Depth Anything V2 \u2192 Tiefenkarte \u2192 Punktwolke \xFCber Referenzebene","Easter egg: Depth Anything V2 \u2192 depth map \u2192 point cloud over a reference plane"),"#ffcf70")),le.mat&&le.t0>=0){let $=Math.min(1,(R-le.t0)/3.2);le.mat.uniforms.uSweep.value=Math.min(1.3,(R-le.t0)/1.6),le.mat.uniforms.uK.value=$*$*(3-2*$)*(1+.04*Math.sin(R*1.3))}if(fi&&Be){let $=fi.update(R);bt.uWaam.value.set($[0],$[1]??0),fi.group.visible=tt[jr]!=="hidden",bt.uWaamSeen.value=tt[jr]!=="hidden"?1:0}let xt=0;if(_e.mesh&&_e.meshMode!=="cad"){let $=wi(),te=9;for(let Te of An){let We=performance.now();if(xt+=Te.m.update(te,$.x,$.z),te-=performance.now()-We,te<=0)break}}_e.xray&&R-Hn.t>.5&&(Hn.t=R,Xl()),R-Ld>.4&&(Ld=R,hm());let sn=re?Re/re:0;for(;zl.length&&sn>=zl[0];){let $=zl.shift();e.toast(qt(r(),`${Math.round($*100)} % der Halle erfasst`,`${Math.round($*100)} % of the hall captured`),"#9b8cff")}lt.forEach(($,te)=>{let Te=ve[te]?At[te]/ve[te]:0;if(tt[te]==="hidden"&&Te>gv&&(tt[te]="found",Ae==="drone"&&!bn.coarse&&(bn.coarse=!0,setTimeout(()=>e.toast(qt(r(),"Die Drohne sieht nur grob \u2013 f\xFCr die Analyse mit Handheld (2) oder TLS (3) nachscannen","The drone only sees coarsely \u2013 rescan with handheld (2) or TLS (3) for the analysis"),"#ffcf70"),1800)),e.toast($.bonus?qt(r(),"\u2605 Bonus-Signal gefunden: Registrier-Zielmarken!","\u2605 Bonus signal found: registration targets!"):`${qt(r(),"Entdeckt","Discovered")}: ${em($)} \xB7 ${ut($.t,r())}`,$.c)),tt[te]==="found"&&Te>qu&&(tt[te]="analyzing",vn[te]=R,bt.uAna.value[te]=R),tt[te]==="analyzing"&&R-vn[te]>2){tt[te]="done";for(let rt of nd($))Ut.has(rt.id)||(Ut.add(rt.id),Bt(),e.banner(rt));(t.card()===null||Bn)&&(e.card(te),Bn&&(gt.cardI=te,gt.cardT=R)),!Ol&&lt.every((rt,jt)=>rt.bonus||tt[jt]==="done")&&(Ol=!0,e.finish(R-on))}let We=Xe[te];if(!We)return;let je=tt[te];We.ring.visible=je!=="hidden",We.gem.rotation.y+=v*(je==="analyzing"?6:1.2),We.gem.position.y=pe[te]+Math.sin(R*2+te)*.12,We.gem.scale.setScalar(je==="hidden"?.7:1);let it=(R*.6+te*.37)%1;We.pulse.visible=Cn&&je==="hidden",We.pulse.position.y=We.gem.position.y,We.pulse.scale.setScalar(.15+it*.75),We.pulse.lookAt(c.position),We.pulse.material.opacity=.6*(1-it),We.ring.material.color.set(je==="done"?6280077:We.c),We.ring.material.opacity=je==="analyzing"?.5+.4*Math.sin(R*14):.55,We.beam.visible=je!=="hidden",We.beam.material.opacity=je==="done"?.1:.22}),Bn&&gt.cardI>=0&&R-gt.cardT>7&&(t.card()===gt.cardI&&e.card(null),gt.cardI=-1);let un=a.clientWidth,me=a.clientHeight,at=wi();{let $=i.labels.children;lt.forEach((te,Te)=>{let We=$[Te];if(!We)return;let je=or.set(te.x,te.bonus?5.2:pe[Te]+.6,te.z).project(c),it=Cn&&je.z<1&&Math.abs(je.x)<1.15&&Math.abs(je.y)<1.15&&!(te.bonus&&tt[Te]==="hidden");if(We.style.display=it?"flex":"none",!it)return;We.style.transform=`translate(${(je.x+1)/2*un}px, ${(1-je.y)/2*me}px) translate(-50%, -100%)`;let rt=ve[Te]?Math.min(1,At[Te]/ve[Te]/qu):0,jt=We.querySelector(".lab-bar i");jt&&(jt.style.width=`${Math.round(rt*100)}%`);let Pn=Math.hypot(at.x-te.x,at.z-te.z),Dn=We.querySelector(".lab-dist");Dn&&(Dn.textContent=`${Math.round(Pn)} m`),We.dataset.state=tt[Te],We.classList.toggle("far",Pn>13)})}let ht=R-Ul<30;na.visible=ht,!ht&&Ni.size&&(Ni=new Set,na.clear()),k.forEach(($,te)=>{let Te=cd[te];if(!Te)return;let We=xe[te]?Tt[te]/xe[te]:0,je=Ni.has(te);if(!(Cn&&(je||_e.labels&&We>=.3&&tt[$.g]!=="hidden"))){Te.style.display="none";return}let rt=or.set(($.min[0]+$.max[0])/2,$.max[1]+.18,($.min[2]+$.max[2])/2).project(c);if(rt.z>=1||Math.abs(rt.x)>1.1||Math.abs(rt.y)>1.1||Math.hypot(at.x-($.min[0]+$.max[0])/2,at.z-($.min[2]+$.max[2])/2)>16){Te.style.display="none";return}Te.style.display="block",Te.style.transform=`translate(${(rt.x+1)/2*un}px, ${(1-rt.y)/2*me}px) translate(-50%, -100%)`,Te.classList.toggle("hit",je);let jt=je?`\u201E${hd}\u201C \u2192 ${ut($.name,r())}`:`${ut($.name,r())} \xB7 ${qt(r(),"Ziel","target")}`;Te.textContent!==jt&&(Te.textContent=jt)});for(let $ of Ls){if(!$.b){$.el.style.display="none";continue}let te=or.copy($.a).add($.b).multiplyScalar(.5).project(c);$.el.style.display=te.z<1?"block":"none",$.el.style.transform=`translate(${(te.x+1)/2*un}px, ${(1-te.y)/2*me}px) translate(-50%, -130%)`}for(let $ of Ai){let te=or.set($.x,1.95,$.z).project(c),Te=Cn&&te.z<1&&Math.abs(te.x)<1.1&&Math.abs(te.y)<1.1;$.el.style.display=Te?"block":"none",Te&&($.el.style.transform=`translate(${(te.x+1)/2*un}px, ${(1-te.y)/2*me}px) translate(-50%, -100%)`),$.g.children[0].scale.setScalar(1+.15*Math.sin(R*4))}if(_e.nbv&&Ja&&R-md>2.5&&!D.some($=>$.state!=="idle")&&xd(),R-Pd>.2){Pd=R;let $=Hl(),te=-1,Te=9;lt.forEach((it,rt)=>{let jt=Math.hypot(at.x-it.x,at.z-it.z);tt[rt]==="done"&&jt<Te&&(Te=jt,te=rt)});let We={};for(let it of k){if(!xe[it.id]||Tt[it.id]/xe[it.id]<.5)continue;let rt=We[it.mat]??={vol:0,mass:0,n:0};rt.vol+=it.vol,rt.mass+=it.mass,rt.n++}let je=0;for(let it=0;it<De*De;it++)fn[it]&&cn[it]/fn[it]>=.3&&je++;e.hud({cov:Math.min(1,sn),found:lt.filter((it,rt)=>!it.bonus&&tt[rt]!=="hidden").length,done:lt.filter((it,rt)=>!it.bonus&&tt[rt]==="done").length,bonus:tt[Ll]!=="hidden",near:$,nearProg:$>=0&&ve[$]?Math.min(1,At[$]/ve[$]/qu):0,nearState:$>=0?tt[$]:"hidden",time:Cn&&!Ol?R-on:-1,tlsN:D.length,tlsMax:Xt(),tlsRun:D.some(it=>it.state!=="idle"),rec:Ye,meshQ:xt,bat:{...Ht},locked:{...Mt},charging:ce,drift:Ae==="handheld"?Rn.length():nr>0?-1:0,nearAna:te,waamNear:Math.hypot(at.x-lt[jr].x,at.z-lt[jr].z)<6&&tt[jr]!=="hidden",mats:Object.entries(We).map(([it,rt])=>({k:it,...rt})),floorM2:je,plan:_e.xray?Wl:null})}let Jt=i.map();if(Jt&&R-Id>.1){Id=R;let $=Jt.getContext("2d");$.drawImage(tr,0,0);let te=Il/(St.x1-St.x0+4),[Te,We]=z(ui[0],ui[1]);$.fillStyle="#5fd38d",$.fillRect(Te-5,We-5,10,10),D.forEach(rt=>{let[jt,Pn]=z(rt.x,rt.z),Dn=`#${rt.c.toString(16).padStart(6,"0")}`;$.strokeStyle=Dn+"55",$.lineWidth=1,$.beginPath(),$.arc(jt,Pn,15*pn()*te,0,Math.PI*2),$.stroke(),$.fillStyle=Dn,$.fillRect(jt-4,Pn-4,8,8)}),Ai.forEach((rt,jt)=>{let[Pn,Dn]=z(rt.x,rt.z);$.fillStyle="#ff9a3d",$.beginPath(),$.arc(Pn,Dn,8,0,Math.PI*2),$.fill(),$.fillStyle="#1a1406",$.font="bold 12px monospace",$.textAlign="center",$.fillText(String(jt+1),Pn,Dn+4)}),lt.forEach((rt,jt)=>{let[Pn,Dn]=z(rt.x,rt.z),Ns=tt[jt];if(!(rt.bonus&&Ns==="hidden")){if(Ns==="hidden"){let rs=(R*.6+jt*.37)%1;$.strokeStyle=`rgba(255,255,255,${.5*(1-rs)})`,$.lineWidth=1,$.beginPath(),$.arc(Pn,Dn,3+rs*14,0,Math.PI*2),$.stroke(),$.fillStyle="rgba(255,255,255,0.6)",$.fillRect(Pn-2,Dn-2,4,4);return}$.strokeStyle=Ns==="done"?"#5fd38d":rt.c,$.lineWidth=3,$.beginPath(),$.arc(Pn,Dn,rt.r*te,0,Math.PI*2),$.stroke(),$.fillStyle="#e8eef5",$.font="bold 15px monospace",$.textAlign="center",$.fillText(rt.kind==="uc"?String(rt.uc):rt.kind==="docs"?"D":rt.kind==="talks"?"T":rt.kind==="bonus"?"\u2605":"P",Pn,Dn+5)}});let[je,it]=z(at.x,at.z);$.save(),$.translate(je,it),$.rotate(-Xn),$.fillStyle="#ffffff",$.beginPath(),$.moveTo(0,-12),$.lineTo(8,8),$.lineTo(-8,8),$.closePath(),$.fill(),$.restore()}o.render(l,c)},Tm=(v,R)=>{let N=x.position,G=(ce,ye,qe,Ve=11)=>{let nt=ce-N.x,Ye=ye-N.z,xt=Math.hypot(nt,Ye);return xt>.05?v.set(nt/xt*Ve*Math.min(1,xt/1.5),0,Ye/xt*Ve*Math.min(1,xt/1.5)):v.set(0,0,0),{dd:xt,au:N.y<qe-.15?1:N.y>qe+.15?-1:0}};if(!t.flags.nobattery&&gt.phase!=="charge"&&Ht.drone<15&&(gt.phase="charge",e.toast(qt(r(),"Autopilot: Akku niedrig \u2013 fliege zur Ladestation","Autopilot: battery low \u2013 returning to the charging pad"),"#ffb547")),gt.phase==="charge"){let ce=G(ui[0],ui[1],2.5);return ce.dd<.35?Ht.drone>=95?(gt.phase="go",1):-1:ce.au}let ne=lt.map((ce,ye)=>ye).filter(ce=>!lt[ce].bonus&&tt[ce]!=="done"&&tt[ce]!=="analyzing");if(!ne.length)return gt.phase="tour",gt.ang+=.0035,G(-.5+Math.cos(gt.ang)*9,1+Math.sin(gt.ang)*7,6).au;if(gt.target<0||!ne.includes(gt.target)){let ce=1e9;for(let ye of ne){let qe=Math.hypot(lt[ye].x-N.x,lt[ye].z-N.z);qe<ce&&(ce=qe,gt.target=ye)}gt.phase="go",gt.alt=Math.min(St.y1-.3,Math.max(H[gt.target]+3.4,Dt[gt.target]+1.4)),gt.lastProg=0,gt.lastProgT=R}let ge=lt[gt.target],Ce=ve[gt.target]?At[gt.target]/ve[gt.target]:0;if(Ce>gt.lastProg+.02?(gt.lastProg=Ce,gt.lastProgT=R):R-gt.lastProgT>6&&(gt.alt=Math.min(6.3,gt.alt+.6),gt.lastProgT=R),gt.phase==="go"){let ce=G(ge.x,ge.z,gt.alt);return ce.dd<.8&&(gt.phase="scan",gt.t0=R),ce.au}gt.ang+=.025;let ie=Math.min(ge.r*.65,(R-gt.t0)*.35);return G(ge.x+Math.cos(gt.ang)*ie,ge.z+Math.sin(gt.ang)*ie,gt.alt,7).au};pt().catch(v=>e.toast(String(v),"#ff5a5f")),Nd();let Dd={start:()=>{Cn=!0,Fl=g.elapsedTime,on=g.elapsedTime,e.toast(Ae==="tls"?qt(r(),"Scanner aufstellen (P), dann Leertaste","Set up scanners (P), then press space"):Ae==="handheld"?qt(r(),"Leertaste halten zum Scannen","Hold space to scan"):qt(r(),"Scanner aktiv \u2013 finde die Signale","Scanner online \u2013 find the signals"))},reopen:v=>tt[v]==="done"&&e.card(v),theme:et,tech:Vl,skill:Yl,search:xm,place:Md,tlsScan:Sd,collect:Ed,press:(v,R)=>rr[v]=R,stick:(v,R)=>{$a.f=v,$a.r=R,(v||R)&&Bn&&!t.flags.auto&&qa(!1)},openNear:()=>{let v=Hl();v>=0&&tt[v]==="done"&&e.card(v)},labels:v=>(_e.labels=v??!_e.labels,Bt()),feature:v=>ld(v),mesh:(v,R)=>{_e.meshMode=v,R&&(_e.meshVS=R),od(),Bt()},measureClear:ud,cut:(v,R,N)=>{_e.cut={mode:v,pos:R,flip:N},Za()},plan:(v,R)=>Ga.compose(v,{lang:R,cov:re?Re/re:0,labels:lt.filter((N,G)=>tt[G]!=="hidden").map(N=>({x:N.x,z:N.z+N.r+.4,t:`${em(N)} \xB7 ${ut(N.t,R)}`,c:N.c})),scanners:D.map(N=>({x:N.x,z:N.z}))}),panoImage:(v,R=2400)=>{let N=wd.get(v);return N?Pl(Ge,N.eye,R,N.vis,!0):null},snapshot:()=>(o.render(l,c),o.domElement.toDataURL("image/png")),projections:()=>{let v=wi(),R=[v.x,Ae==="drone"?x.position.y:j(v.x,v.z)+jp,v.z];return{pano:Pl(Ge,R,1200),cube:$p(Ge,R,240),persp:qp(Ge,1e3,620),ortho:Kp(Ge,1e3)}},ask:v=>Dp(v,{lang:r(),clusters:k,cluFrac:R=>xe[R]?Tt[R]/xe[R]:0,stState:tt,cov:re?Re/re:0,agent:{x:wi().x,z:wi().z},floorM2:(()=>{let R=0;for(let N=0;N<De*De;N++)fn[N]&&cn[N]/fn[N]>=.3&&R++;return R})()}),featRange:()=>Rs,goto:(v,R,N=3)=>{Ae==="drone"?x.position.set(v,N,R):xn.set(v,0,R)},eggState:()=>({k:le.mat?.uniforms.uK.value,sw:le.mat?.uniforms.uSweep.value,t0:le.t0,n:le.pts?.geometry.getAttribute("position").count}),setBat:(v,R)=>Ht[v]=R,pointCount:()=>ue,blkDbg:()=>nn?nn.blocks.filter(v=>v.m.visible).map(v=>({a:v.a.map(R=>+R.toFixed(1)),b:v.b.map(R=>+R.toFixed(1)),tot:v.tot,scan:v.scan,lo:+v.lo.toFixed(2),hi:+v.hi.toFixed(2),sy:+v.m.scale.y.toFixed(2)})):[],dbg:()=>({N:ue,hallN:re,hallScanned:Re,ready:Be,flying:Cn,tech:Ae,dy:+x.position.y.toFixed(2),gy:+j(x.position.x,x.position.z).toFixed(2),bat:Ht.drone,locked:Mt.drone,cs:Ke?Ke[De*De]:-1}),scannerPos:()=>D.map(v=>[v.x,v.z,v.state]),sugs:()=>Ai.map(v=>({x:v.x,z:v.z,pct:Math.round(100*v.gain/re)})),look:(v,R)=>(Xn=v,Ae==="drone"?ir=R:sr=R),dispose:()=>{n=!0,cancelAnimationFrame(s),a.removeEventListener("pointerdown",dd),window.removeEventListener("pointermove",fd),window.removeEventListener("pointerup",Ya),window.removeEventListener("pointercancel",Ya),a.removeEventListener("wheel",pd),window.removeEventListener("keydown",Ad),window.removeEventListener("keyup",Td),window.removeEventListener("blur",Rd),window.removeEventListener("resize",Cd);for(let v of An)v.m.dispose();o.dispose(),a.removeChild(o.domElement)}};return Dd};var Nl=gi(jl());var im=gi(as()),nm=({url:i})=>{let e=(0,Nl.useRef)(null);return(0,Nl.useEffect)(()=>{let t=e.current,n=new Br({antialias:!0});n.setPixelRatio(Math.min(2,devicePixelRatio)),n.setSize(t.clientWidth,t.clientHeight),t.appendChild(n.domElement);let s=new Hr,r=new mn(75,t.clientWidth/t.clientHeight,.1,10),a=new Wr().load(i);a.colorSpace=_n;let o=new Un(5,64,32);o.scale(-1,1,1),s.add(new Ee(o,new Gt({map:a})));let l=0,c=0,h=!1,u=0,d=0,f=0,g=M=>(h=!0,u=M.clientX,d=M.clientY),x=M=>{h&&(l-=(M.clientX-u)*.15,c=Math.max(-85,Math.min(85,c+(M.clientY-d)*.15)),u=M.clientX,d=M.clientY)},p=()=>h=!1,m=M=>{r.fov=Math.max(30,Math.min(100,r.fov+Math.sign(M.deltaY)*4)),r.updateProjectionMatrix(),M.preventDefault()};t.addEventListener("pointerdown",g),window.addEventListener("pointermove",x),window.addEventListener("pointerup",p),t.addEventListener("wheel",m,{passive:!1});let y=()=>{f=requestAnimationFrame(y),h||(l+=.03);let M=Ua.degToRad(90-c),_=Ua.degToRad(l);r.lookAt(Math.sin(M)*Math.cos(_),Math.cos(M),Math.sin(M)*Math.sin(_)),n.render(s,r)};return y(),()=>{cancelAnimationFrame(f),t.removeEventListener("pointerdown",g),window.removeEventListener("pointermove",x),window.removeEventListener("pointerup",p),t.removeEventListener("wheel",m),n.dispose(),a.dispose(),t.removeChild(n.domElement)}},[i]),(0,im.jsx)("div",{ref:e,className:"lab-panoview"})};var Ts=gi(jl()),ea=gi(as()),sm=()=>{let i="(pointer: coarse)",[e,t]=(0,Ts.useState)(()=>typeof matchMedia<"u"&&(matchMedia(i).matches||location.hash.includes("touch")));return(0,Ts.useEffect)(()=>{let n=matchMedia(i),s=()=>t(n.matches||location.hash.includes("touch"));return n.addEventListener("change",s),()=>n.removeEventListener("change",s)},[]),e},rm=({onMove:i,label:e})=>{let t=(0,Ts.useRef)(null),[n,s]=(0,Ts.useState)({x:0,y:0,on:!1}),r=(0,Ts.useRef)(null),a=48,o=c=>{let h=t.current.getBoundingClientRect(),u=c.clientX-(h.left+h.width/2),d=c.clientY-(h.top+h.height/2),f=Math.hypot(u,d);f>a&&(u*=a/f,d*=a/f),s({x:u,y:d,on:!0});let g=x=>Math.abs(x)<.12?0:x;i(g(-d/a),g(u/a))},l=()=>{r.current=null,s({x:0,y:0,on:!1}),i(0,0)};return(0,ea.jsxs)("div",{ref:t,className:`lab-ui lab-joy${n.on?" on":""}`,onPointerDown:c=>{r.current=c.pointerId,c.target.setPointerCapture(c.pointerId),o(c)},onPointerMove:c=>r.current===c.pointerId&&o(c),onPointerUp:l,onPointerCancel:l,children:[(0,ea.jsx)("i",{style:{transform:`translate(${n.x}px, ${n.y}px)`}}),e&&!n.on&&(0,ea.jsx)("span",{children:e})]})},Dl=({k:i,press:e,children:t,className:n})=>(0,ea.jsx)("button",{className:`lab-hold ${n??""}`,onPointerDown:s=>{s.target.setPointerCapture(s.pointerId),e(i,!0)},onPointerUp:()=>e(i,!1),onPointerCancel:()=>e(i,!1),onContextMenu:s=>s.preventDefault(),children:t});var S=gi(as()),X=(i,e,t)=>i==="en"?t:e,am=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`,om=i=>i.kind==="uc"?`UC${i.uc}`:i.kind==="docs"?"DOC":i.kind==="talks"?"TALK":i.kind==="bonus"?"\u2605":"ME",Ev=i=>`rgb(${i.map(e=>Math.round(e*255)).join(",")})`,id=(i,e,t=2)=>i.toLocaleString(e==="en"?"en-GB":"de-DE",{maximumFractionDigits:t,minimumFractionDigits:t}),wv={cov:0,found:0,done:0,bonus:!1,near:-1,nearProg:0,nearState:"hidden",time:0,tlsN:0,tlsMax:3,tlsRun:!1,rec:!1,meshQ:0,bat:{drone:100,handheld:100,tls:100},locked:{drone:!1,handheld:!1,tls:!1},charging:!1,drift:0,nearAna:-1,waamNear:!1,mats:[],floorM2:0,plan:null},Av=({lang:i,setLang:e})=>{let t=(0,dt.useRef)(null),n=(0,dt.useRef)(null),s=(0,dt.useRef)(null),r=(0,dt.useRef)(null),a=(0,dt.useRef)(null),o=(0,dt.useRef)(null),l=(0,dt.useRef)(null),c=(0,dt.useRef)({auto:location.hash.includes("auto"),allskills:location.hash.includes("allskills"),nobattery:location.hash.includes("nobattery"),lite:!location.hash.includes("full")&&(location.hash.includes("lite")||location.hash.includes("touch")||matchMedia("(pointer: coarse)").matches)}),[h,u]=(0,dt.useState)(0),[d,f]=(0,dt.useState)(!1),[g,x]=(0,dt.useState)(()=>location.hash.includes("light")?"light":"dark"),[p,m]=(0,dt.useState)(()=>location.hash.includes("handheld")?"handheld":location.hash.includes("tls")?"tls":"drone"),[y,M]=(0,dt.useState)(wv),[_,I]=(0,dt.useState)(null),[C,A]=(0,dt.useState)([]),[U,J]=(0,dt.useState)(null),[b,w]=(0,dt.useState)(!1),[V,F]=(0,dt.useState)(!1),[q,se]=(0,dt.useState)({}),K=(k,xe)=>(0,S.jsxs)("div",{className:"lab-opt-h",onClick:()=>se(Tt=>({...Tt,[k]:!Tt[k]})),title:q[k]?X(i,"Ausklappen","Expand"):X(i,"Einklappen \u2013 die Ansicht bleibt aktiv","Collapse \u2013 the view stays active"),children:[(0,S.jsx)("small",{children:xe}),(0,S.jsx)("button",{className:"lab-opt-min",children:q[k]?"\u25B8 "+X(i,"\xF6ffnen","open"):"\u2014 "+X(i,"einklappen","collapse")})]}),[B,Q]=(0,dt.useState)({unlocked:[],color:"normal",mesh:!1,meshMode:"all",meshVS:.2,xray:!1,measure:!1,auto:!1,labels:!1,feat:6,featState:"idle",nbv:!1,cut:{mode:0,pos:1.2,flip:!1}}),[le,Pe]=(0,dt.useState)(null),[Me,vt]=(0,dt.useState)(!1),[Ot,ae]=(0,dt.useState)(""),[fe,He]=(0,dt.useState)(!1),[ke,ft]=(0,dt.useState)(""),[ct,Rt]=(0,dt.useState)([]),[Nt,Ct]=(0,dt.useState)([]),[D,an]=(0,dt.useState)(null),[mt,Et]=(0,dt.useState)(null),Xe=sm(),[bt,ue]=(0,dt.useState)(!1),[P,E]=(0,dt.useState)(!1),[Y,oe]=(0,dt.useState)(()=>matchMedia("(orientation: portrait)").matches),[he,W]=(0,dt.useState)(!1),Fe=(0,dt.useRef)(!1);(0,dt.useEffect)(()=>{let k=matchMedia("(orientation: portrait)"),xe=()=>oe(k.matches);return k.addEventListener("change",xe),()=>{k.removeEventListener("change",xe),screen.orientation.unlock?.(),Fe.current&&document.fullscreenElement&&document.exitFullscreen().catch(()=>{})}},[]);let we=()=>{if(!Xe)return;let k=document.documentElement;(!document.fullscreenElement&&k.requestFullscreen?k.requestFullscreen({navigationUI:"hide"}):Promise.resolve()).then(()=>(Fe.current=!!document.fullscreenElement,screen.orientation.lock?.("landscape"))).catch(()=>{})},Se=()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.().catch(()=>{}),[Ze,de]=(0,dt.useState)(null),Ne=(0,dt.useRef)(null);Ne.current=_;let Je=(0,dt.useRef)(i);Je.current=i,(0,dt.useEffect)(()=>{let k=0,xe=[],Tt=!1,fn=()=>{let Jn=xe.shift();Tt=!!Jn,Pe(Jn??null),Jn&&setTimeout(fn,4300)},cn=tm({host:t.current,labels:n.current,clu:s.current,meas:r.current,map:()=>a.current},{loaded:u,hud:M,toast:(Jn,er="#5ce1e6")=>{let ss=++k;A(di=>[...di.slice(-3),{id:ss,txt:Jn,c:er}]),setTimeout(()=>A(di=>di.filter(Li=>Li.id!==ss)),4200)},card:I,banner:Jn=>{xe.push(Jn),Tt||fn()},skills:Q,finish:J,tech:m,panos:Ct,search:()=>vt(!0),ask:()=>He(!0)},{lang:()=>Je.current,tech:p,card:()=>Ne.current,flags:c.current});return l.current=cn,c.current.allskills&&(window.__lab=cn),c.current.auto&&f(!0),()=>cn.dispose()},[]),(0,dt.useEffect)(()=>l.current?.theme(g),[g]),(0,dt.useEffect)(()=>{let k=xe=>{let Tt=xe.target?.tagName;if(Tt==="INPUT"||Tt==="SELECT")return;let fn=xe.key.toLowerCase();fn==="t"&&x(cn=>cn==="dark"?"light":"dark"),d&&(fn==="k"&&an(cn=>cn==="plan"?null:"plan"),fn==="j"&&an(cn=>cn==="proj"?null:"proj"),fn==="u"&&an(cn=>cn==="pano"?null:"pano"),fn==="escape"&&(F(!1),an(null),Et(null),vt(!1),He(!1)))};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[d]),(0,dt.useEffect)(()=>{if(D!=="plan")return;let k=()=>o.current&&l.current?.plan(o.current,Je.current);k();let xe=setInterval(k,700);return()=>clearInterval(xe)},[D]);let Ke=()=>{let k=l.current.projections();de(Object.fromEntries(Object.entries(k).map(([xe,Tt])=>[xe,Tt.toDataURL("image/png")])))};(0,dt.useEffect)(()=>{D==="proj"&&Ke()},[D,B.color,B.feat]);let Ie=(k,xe)=>l.current?.press(k,xe),_t=k=>{if(!d)return m(k);l.current?.tech(k)},Qe=_!==null?lt[_]:null,wt=y.near>=0?lt[y.near]:null,O=p!=="drone",Ue=l.current?.featRange()??[],ee=(k,xe)=>{let Tt=document.createElement("a");Tt.href=k,Tt.download=`x-avis_${xe}_${new Date().toISOString().slice(0,19).replace(/[:T]/g,"-")}.png`,Tt.click()},[re,Re]=(0,dt.useState)("360"),[ve,At]=(0,dt.useState)(null);(0,dt.useEffect)(()=>{if(!mt)return At(null);let k=l.current?.panoImage(mt.id);At(k?k.toDataURL("image/png"):null)},[mt,B.color,B.feat]);let tt=()=>{let k=o.current;if(!k)return;let xe=document.createElement("a");xe.href=k.toDataURL("image/png"),xe.download=`x-avis_grundriss_${new Date().toISOString().slice(0,10)}.png`,xe.click()},vn=(()=>{if(B.color==="seg")return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:X(i,"Segmentierung \xB7 ganze Szene","Segmentation \xB7 whole scene")}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"rgb(150,72,76)"}}),X(i,"Umgebung","Environment")]}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"rgb(112,209,140)"}}),X(i,"Boden","Floor")]}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"rgb(90,180,255)"}}),X(i,"Ziel (alle wichtigen Objekte)","Target (all relevant objects)")]}),(0,S.jsx)("em",{children:X(i,"Hallenklassen: echtes RandLA-Net-Ergebnis (A1)","Hall classes: real RandLA-Net result (A1)")})]});if(B.color==="heat"){let xe=qs[B.feat],Tt=Ue[qs[B.feat]?.i??B.feat];return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:B.feat<16?`${X(i,"Merkmal","Feature")} ${B.feat+1}/16 \xB7 ${xe.k}`:X(i,"Ebenheit Hallenboden","Hall floor flatness")}),(0,S.jsx)("span",{className:"lab-lg-d",children:ut(xe.t,i)}),(0,S.jsx)("div",{className:`lab-ramp ${B.feat===16?"flat":"viridis"}`}),(0,S.jsx)("span",{className:"lab-ramp-l",children:B.feat===16?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("em",{children:"\u22124 cm"}),(0,S.jsx)("em",{children:"0"}),(0,S.jsx)("em",{children:"+4 cm"})]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("em",{children:Tt?+Tt[0].toPrecision(3):0}),(0,S.jsx)("em",{children:Tt?+Tt[1].toPrecision(3):1})]})}),B.featState==="loading"&&(0,S.jsx)("em",{children:X(i,"Lade Merkmale (12,7 MB) \u2026","Loading features (12.7 MB) \u2026")}),(0,S.jsx)("em",{children:X(i,"Vorab f\xFCr alle Punkte berechnet (k = 30), Darstellung 1.\u201399. Perzentil","Precomputed for all points (k = 30), shown 1st\u201399th percentile")})]})}if(B.color==="therm")return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:X(i,"Thermal (illustrativ)","Thermal (illustrative)")}),(0,S.jsx)("div",{className:"lab-ramp therm"}),(0,S.jsxs)("span",{className:"lab-ramp-l",children:[(0,S.jsx)("em",{children:X(i,"kalt","cold")}),(0,S.jsx)("em",{children:X(i,"hei\xDF","hot")})]}),(0,S.jsx)("em",{children:X(i,"frisch gescannt und frische WAAM-Schichten = hei\xDF","fresh scans and fresh WAAM layers = hot")})]});if(B.color==="mat")return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:X(i,"Materialkataster","Material register")}),Object.entries(Wn).map(([xe,Tt])=>(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:Tt.c}}),i==="en"?Tt.en:Tt.de]},xe))]});let k=y.nearAna>=0?lt[y.nearAna]:null;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:X(i,"Punktwolke","Point cloud")}),(0,S.jsx)("div",{className:`lab-ramp ${g==="light"?"intl":"int"}`}),(0,S.jsxs)("span",{className:"lab-ramp-l",children:[(0,S.jsx)("em",{children:X(i,"Intensit\xE4t niedrig","low intensity")}),(0,S.jsx)("em",{children:X(i,"hoch","high")})]}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:g==="light"?"#0a8cd9":"#8cf2ff"}}),X(i,"frisch gescannt","freshly scanned")]}),(0,S.jsx)("span",{className:"lab-lg-d",children:X(i,"Ungescanntes ist unsichtbar","Unscanned is invisible")}),k&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("b",{className:"lab-lg-sub",children:["X-AVIS \xB7 ",om(k)," ",ut(k.t,i)]}),k.parts.map((xe,Tt)=>(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:Ev(xe.c)}}),ut(xe.name,i)]},Tt))]}),y.waamNear&&(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"#ff8c26"}}),X(i,"frische WAAM-Schicht","fresh WAAM layer")]}),B.xray&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{className:"lab-lg-sub",children:X(i,"Soll-Ist \xB7 Planungsmodell","As-planned vs. as-built")}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"#3ddc84"}}),X(i,"verifiziert (Soll = Ist)","verified (planned = built)")]}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"#ffb547"}}),X(i,"abweichend","deviating")]}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"#ff4d5e"}}),X(i,"geplant, nicht im Scan","planned, not in scan")]}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"#7c8aa0"}}),X(i,"noch nicht erfasst","not yet captured")]}),y.plan&&y.plan.rs.total>0&&(0,S.jsxs)("em",{children:[X(i,"ReStage-Demonstrator","ReStage demonstrator"),": ",y.plan.rs.ok," ",X(i,"verifiziert","verified")," \xB7 ",y.plan.rs.miss," ",X(i,"fehlen","missing")," \xB7 ",y.plan.rs.open," ",X(i,"offen","open")," (",X(i,"von","of")," ",y.plan.rs.total,")"]}),!y.plan&&(0,S.jsx)("em",{children:X(i,"Lade Planungsmodell \u2026","Loading planning model \u2026")})]})]})})(),Dt=k=>y.locked[k]?X(i,"l\xE4dt","charging"):`${Math.round(y.bat[k])} %`;return(0,S.jsxs)("div",{className:`lab lab-${g} lab-t-${p}${Xe?" lab-touch":""}`,children:[(0,S.jsx)("div",{ref:t,className:"lab-canvas"}),d&&O&&(0,S.jsx)("div",{className:`lab-cross${y.rec?" rec":""}${B.measure?" meas":""}`}),(0,S.jsx)("div",{ref:n,className:"lab-labels",children:lt.map((k,xe)=>(0,S.jsxs)("div",{className:"lab-label","data-state":"hidden",style:{borderColor:k.c},onClick:()=>l.current?.reopen(xe),children:[(0,S.jsxs)("b",{style:{background:k.c},children:[(0,S.jsx)("span",{className:"lab-known",children:om(k)}),(0,S.jsx)("span",{className:"lab-unk",children:"?"})]}),(0,S.jsx)("span",{className:"lab-known",children:ut(k.t,i)}),(0,S.jsx)("span",{className:"lab-unk",children:X(i,"Unbekanntes Signal","Unknown signal")}),(0,S.jsx)("span",{className:"lab-dist"}),(0,S.jsx)("span",{className:"lab-bar",children:(0,S.jsx)("i",{})})]},k.id))}),(0,S.jsx)("div",{ref:s,className:"lab-clus"}),(0,S.jsx)("div",{ref:r,className:"lab-measl"}),(0,S.jsxs)("div",{className:"lab-ui lab-top",children:[(0,S.jsxs)("a",{className:"lab-brand",href:"#/",children:[(0,S.jsx)(kd,{size:34,frame:0}),(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{className:"lab-k",children:"Spatial AI Lab"}),(0,S.jsxs)("div",{className:"lab-p",children:["powered by ",(0,S.jsx)(Fd,{height:15})]})]})]}),d&&(0,S.jsxs)("div",{className:"lab-stats",children:[(0,S.jsxs)("div",{children:[(0,S.jsx)("small",{children:X(i,"Gel\xE4nde erfasst","Area captured")}),(0,S.jsxs)("b",{children:[Math.round(y.cov*100)," %"]})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("small",{children:X(i,"Entdeckt","Discovered")}),(0,S.jsxs)("b",{children:[y.found," / ",Fa,y.bonus?" \u2605":""]})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("small",{children:X(i,"Analysiert","Analysed")}),(0,S.jsxs)("b",{children:[y.done," / ",Fa]})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("small",{children:"Skills"}),(0,S.jsxs)("b",{children:[B.unlocked.length," / ",ts.length]})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("small",{children:X(i,"Zeit","Time")}),(0,S.jsx)("b",{children:am(U??Math.max(0,y.time))})]})]}),(0,S.jsxs)("div",{className:"lab-tr",children:[(0,S.jsx)("button",{className:"lab-exit",onClick:()=>x(k=>k==="dark"?"light":"dark"),title:"T",children:g==="dark"?"\u25D0 "+X(i,"Wei\xDFe Leere","White void"):"\u25D1 "+X(i,"Dunkle Leere","Dark void")}),e&&(0,S.jsx)("div",{className:"lab-lang",children:["de","en"].map(k=>(0,S.jsx)("button",{className:k===i?"on":"",onClick:()=>e(k),children:k.toUpperCase()},k))}),(0,S.jsxs)("a",{className:"lab-exit",href:"#/",children:["\u2715 ",X(i,"Lab verlassen","Exit lab")]})]})]}),d&&(0,S.jsxs)("div",{className:"lab-ui lab-techs",children:[gu.map(k=>(0,S.jsxs)("button",{className:`${p===k.id?"on":""}${y.locked[k.id]?" locked":""}`,onClick:()=>_t(k.id),title:ut(k.d,i),children:[(0,S.jsx)("i",{children:k.icon}),(0,S.jsx)("span",{children:ut(k.t,i).split(" \xB7 ")[k.id==="drone"?0:1]}),(0,S.jsx)("span",{className:"lab-batt","data-low":y.bat[k.id]<25?"1":"0",children:(0,S.jsx)("em",{style:{width:`${Math.round(y.bat[k.id])}%`}})}),(0,S.jsx)("small",{children:Dt(k.id)}),(0,S.jsx)("kbd",{children:k.key})]},k.id)),y.charging&&(0,S.jsxs)("span",{className:"lab-charging",children:["\u26A1 ",X(i,"Ladestation","charging pad")]})]}),(0,S.jsx)("div",{className:"lab-toasts",children:C.map(k=>(0,S.jsx)("div",{className:"lab-toast",style:{borderColor:k.c},children:k.txt},k.id))}),le&&(0,S.jsxs)("div",{className:"lab-unlock",children:[(0,S.jsx)("div",{className:"lab-unlock-i",children:le.icon}),(0,S.jsx)("small",{children:le.id==="icp"?X(i,"Bonus-Skill freigeschaltet","Bonus skill unlocked"):X(i,"Skill freigeschaltet","Skill unlocked")}),(0,S.jsx)("b",{children:ut(le.t,i)}),(0,S.jsx)("span",{children:ut(le.d,i)}),(0,S.jsx)("em",{children:le.key?X(i,`Taste ${le.key} oder Skill-Leiste`,`Press ${le.key} or use the skill bar`):X(i,"passiv \xB7 sofort aktiv","passive \xB7 active right away")})]},le.id),d&&_===null&&(wt||p==="tls"||y.rec||y.drift>.05)&&(0,S.jsxs)("div",{className:"lab-ui lab-prompt",onClick:()=>l.current?.openNear(),style:{borderColor:wt?y.nearState==="done"?"#5fd38d":wt.c:"#5ce1e6"},children:[wt&&y.nearState==="done"?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:ut(wt.t,i)})," \xB7 ",Xe?X(i,"analysiert \u2013 hier antippen f\xFCr Infos","analysed \u2013 tap here for info"):X(i,"analysiert \u2013 Enter oder Label klicken","analysed \u2013 press Enter or click the label")]}):wt&&y.nearState==="analyzing"?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:"X-AVIS"})," ",X(i,"segmentiert die Punktwolke \u2026","is segmenting the point cloud \u2026")]}):p==="tls"?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:"TLS"})," \xB7 ",y.tlsRun?X(i,"Scan l\xE4uft \u2013 alle Scanner gleichzeitig \u2026","scanning \u2013 all scanners at once \u2026"):Xe?X(i,`${y.tlsN}/${y.tlsMax} Scanner \xB7 je 7 % Akku pro Scan`,`${y.tlsN}/${y.tlsMax} scanners \xB7 7 % battery per scan each`):X(i,`${y.tlsN}/${y.tlsMax} Scanner \xB7 P aufstellen \xB7 Leertaste scannen (je 7 % Akku) \xB7 C einsammeln`,`${y.tlsN}/${y.tlsMax} scanners \xB7 P set up \xB7 space scan (7 % battery each) \xB7 C collect`),wt&&(0,S.jsx)("span",{className:"lab-pbar",children:(0,S.jsx)("i",{style:{width:`${Math.round(y.nearProg*100)}%`,background:wt.c}})})]}):wt?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:y.nearState==="hidden"?X(i,"Unbekanntes Signal","Unknown signal"):ut(wt.t,i)})," \xB7 ",p==="handheld"?Xe?X(i,"\u25CF halten und Objekt abscannen","hold \u25CF and scan the object"):X(i,"Leertaste halten und Objekt abscannen","hold space and scan the object"):X(i,"Bereich abfliegen und scannen","fly over the area to scan it"),(0,S.jsx)("span",{className:"lab-pbar",children:(0,S.jsx)("i",{style:{width:`${Math.round(y.nearProg*100)}%`,background:wt.c}})})]}):y.rec?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{className:"lab-recdot",children:"\u25CF REC"})," ",X(i,"SLAM-Scan l\xE4uft","SLAM scan running")]}):null,y.drift>.05&&(0,S.jsxs)("span",{className:"lab-drift",children:[X(i,"Drift","drift")," ",Math.round(y.drift*100)," cm",B.unlocked.includes("icp")?" \xB7 R = ICP":""]})]}),d&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("div",{className:"lab-ui lab-help",children:[p==="drone"?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:"WASD"})," ",X(i,"fliegen","fly")," \xB7 ",(0,S.jsx)("b",{children:X(i,"Leertaste / Shift","Space / Shift")})," ",X(i,"steigen / sinken","up / down")," \xB7 ",(0,S.jsx)("b",{children:"Q / E"})," ",X(i,"drehen","turn")]}):p==="handheld"?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:"WASD"})," ",X(i,"gehen","walk")," \xB7 ",(0,S.jsx)("b",{children:"Shift"})," ",X(i,"rennen","run")," \xB7 ",(0,S.jsx)("b",{children:X(i,"Leertaste halten","Hold space")})," ",X(i,"scannen","scan")]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:"WASD"})," ",X(i,"gehen","walk")," \xB7 ",(0,S.jsx)("b",{children:"P"})," ",X(i,"aufstellen","set up")," \xB7 ",(0,S.jsx)("b",{children:X(i,"Leertaste","Space")})," ",X(i,"scannen","scan")," \xB7 ",(0,S.jsx)("b",{children:"C"})," ",X(i,"einsammeln","collect")]})," ","\xB7 ",(0,S.jsx)("b",{children:X(i,"Maus","Mouse")})," ",X(i,"Ansicht","view")," \xB7 ",(0,S.jsx)("b",{children:"1 2 3"})," ",X(i,"Technologie","technology")," \xB7 ",(0,S.jsx)("b",{children:"T"})," ",X(i,"hell/dunkel","light/dark")]}),V&&(0,S.jsx)("div",{className:"lab-ui lab-mapshade",onClick:()=>F(!1)}),(0,S.jsx)("canvas",{ref:a,className:`lab-ui lab-map${V?" big":""}`,width:340,height:600,onClick:()=>F(k=>!k),title:V?X(i,"Klicken zum Schlie\xDFen","Click to close"):X(i,"Klicken f\xFCr Vollbild-Karte","Click for fullscreen map")}),V&&(0,S.jsx)("div",{className:"lab-ui lab-mapcap",children:X(i,"Karte \xB7 Halle und Referenzbaustelle \xB7 klicken oder Esc zum Schlie\xDFen","Map \xB7 hall and reference site \xB7 click or Esc to close")}),(!Xe||bt)&&(0,S.jsxs)("div",{className:Xe?"lab-ui lab-drawer":"lab-contents",onClick:k=>Xe&&k.target.closest("button")&&!k.target.closest(".lab-drawer-keep")&&ue(!1),children:[Xe&&(0,S.jsxs)("div",{className:"lab-drawer-h lab-drawer-keep",children:[(0,S.jsx)("b",{children:X(i,"Skills & Werkzeuge","Skills & tools")}),(0,S.jsx)("button",{className:"lab-x",onClick:()=>ue(!1),children:"\u2715"})]}),(0,S.jsxs)("div",{className:"lab-ui lab-tools",children:[(0,S.jsxs)("button",{onClick:()=>{let k=l.current?.snapshot();k&&ee(k,"ansicht")},title:X(i,"Aktuelle 3D-Ansicht als PNG speichern","Save the current 3D view as PNG"),children:[(0,S.jsx)("i",{children:"\u{1F4F7}"}),(0,S.jsx)("span",{children:X(i,"Ansicht als PNG","View as PNG")})]}),Lp.map(k=>{let xe=k.id==="labels"?B.labels:D===k.id;return(0,S.jsxs)("button",{className:xe?"on":"",onClick:()=>k.id==="labels"?l.current?.labels():an(Tt=>Tt===k.id?null:k.id),children:[(0,S.jsx)("i",{children:k.icon}),(0,S.jsxs)("span",{children:[ut(k.t,i),k.id==="pano"&&Nt.length?` (${Nt.length})`:""]}),(0,S.jsx)("kbd",{children:k.key})]},k.id)})]}),(0,S.jsx)("div",{className:"lab-ui lab-skills",children:ts.map(k=>{let xe=B.unlocked.includes(k.id);if(k.id==="icp"&&!xe)return null;let Tt=xe&&(k.passive||k.id==="seg"&&B.color==="seg"||k.id==="heat"&&B.color==="heat"||k.id==="therm"&&B.color==="therm"||k.id==="mat"&&B.color==="mat"||k.id==="mesh"&&B.mesh||k.id==="xray"&&B.xray||k.id==="measure"&&B.measure||k.id==="auto"&&B.auto||k.id==="nbv"&&B.nbv||k.id==="cut"&&B.cut.mode>0);return(0,S.jsxs)("button",{className:`${xe?"got":"lock"}${Tt?" on":""}`,disabled:!xe||k.passive,onClick:()=>l.current?.skill(k.id),title:xe?`${ut(k.t,i)} \u2013 ${ut(k.d,i)}`:X(i,"Noch verborgen \u2013 wird durch eine Station freigeschaltet","Still hidden \u2013 unlocked by a station"),children:[(0,S.jsx)("i",{children:xe?k.icon:"?"}),xe&&k.key&&(0,S.jsx)("kbd",{children:k.key}),xe&&(0,S.jsx)("span",{children:ut(k.t,i)})]},k.id)})}),Xe&&(0,S.jsxs)("div",{className:"lab-drawer-row",children:[(0,S.jsx)("button",{onClick:()=>x(k=>k==="dark"?"light":"dark"),children:g==="dark"?"\u25D0 "+X(i,"Wei\xDFe Leere","White void"):"\u25D1 "+X(i,"Dunkle Leere","Dark void")}),(0,S.jsxs)("button",{onClick:Se,children:["\u26F6 ",X(i,"Vollbild","Fullscreen")]}),e&&(0,S.jsxs)("button",{onClick:()=>e(i==="de"?"en":"de"),children:["\u{1F310} ",i==="de"?"English":"Deutsch"]}),(0,S.jsxs)("a",{href:"#/",children:["\u2715 ",X(i,"Lab verlassen","Exit lab")]})]})]}),(0,S.jsx)("div",{className:`lab-ui lab-legend${Xe&&!P?" closed":""}`,onClick:()=>Xe&&E(k=>!k),children:Xe&&!P?(0,S.jsxs)("b",{children:["\u25A4 ",X(i,"Legende","Legend")]}):(0,S.jsxs)(S.Fragment,{children:[vn,B.cut.mode>0&&(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"#ff7a3d"}}),X(i,"Schnittkante","cut edge")]}),B.nbv&&(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"#ff9a3d",borderRadius:8}}),X(i,"vorgeschlagener TLS-Standpunkt","suggested TLS position")]})]})}),(0,S.jsxs)("div",{className:"lab-ui lab-optstack",children:[B.cut.mode>0&&(0,S.jsxs)("div",{className:`lab-ui lab-opt lab-cutopt${q.cut?" min":""}`,children:[K("cut",X(i,"Schnittebene","Section plane")),(0,S.jsx)("div",{className:"lab-seg3",children:[[1,X(i,"Horizontal (z)","Horizontal (z)")],[2,X(i,"L\xE4ngs (x)","Long. (x)")],[3,X(i,"Quer (y)","Cross (y)")]].map(([k,xe])=>(0,S.jsx)("button",{className:B.cut.mode===k?"on":"",onClick:()=>l.current?.cut(k,k===1?1.2:0,B.cut.flip),children:xe},k))}),(0,S.jsxs)("label",{children:[B.cut.mode===1?X(i,"Schnitth\xF6he z","Cut height z"):B.cut.mode===2?X(i,"Schnittlage x","Cut position x"):X(i,"Schnittlage y","Cut position y")," = ",id(B.cut.mode===3?-B.cut.pos:B.cut.pos,i,2)," m",(0,S.jsx)("input",{type:"range",min:B.cut.mode===1?.1:B.cut.mode===2?-27:-20,max:B.cut.mode===1?9.5:B.cut.mode===2?20:66,step:.05,value:B.cut.pos,onChange:k=>l.current?.cut(B.cut.mode,+k.target.value,B.cut.flip)})]}),(0,S.jsxs)("button",{className:"lab-flip",onClick:()=>l.current?.cut(B.cut.mode,B.cut.pos,!B.cut.flip),children:["\u21C5 ",X(i,"Seite umkehren","Flip side")]})]}),B.color==="heat"&&(0,S.jsxs)("div",{className:`lab-ui lab-opt lab-feats${q.feats?" min":""}`,children:[K("feats",(0,S.jsxs)(S.Fragment,{children:[X(i,"RandLA-Net-Merkmal","RandLA-Net feature"),q.feats?` \xB7 ${B.feat<16?qs[B.feat].k:X(i,"Ebenheit","flatness")}`:""]})),(0,S.jsx)("div",{className:"lab-featgrid",children:qs.map((k,xe)=>(0,S.jsx)("button",{className:B.feat===xe?"on":"",onClick:()=>l.current?.feature(xe),title:ut(k.t,i),children:xe<16?`${xe+1} \xB7 ${k.k}`:X(i,"Ebenheit","flatness")},k.k))})]}),B.mesh&&(0,S.jsxs)("div",{className:`lab-ui lab-opt lab-meshopt${q.mesh?" min":""}`,children:[K("mesh","Scan-to-Mesh"),(0,S.jsx)("div",{className:"lab-seg3",children:[["all",X(i,"Gesamt","Whole")],["obj",X(i,"Objektweise","Per object")],["cad",X(i,"Modell","Model")]].map(([k,xe])=>(0,S.jsx)("button",{className:B.meshMode===k?"on":"",onClick:()=>l.current?.mesh(k),children:xe},k))}),B.meshMode!=="cad"?(0,S.jsxs)("label",{children:[X(i,"Feinheit","Detail")," \xB7 ",X(i,"Voxel","voxel")," ",Math.round(B.meshVS*100)," cm",(0,S.jsx)("input",{type:"range",min:0,max:3,step:1,value:[.3,.2,.15,.1].indexOf(B.meshVS),onChange:k=>l.current?.mesh(B.meshMode,[.3,.2,.15,.1][+k.target.value])}),(0,S.jsxs)("span",{className:"lab-ramp-l",children:[(0,S.jsx)("em",{children:X(i,"grob, geschlossen","coarse, closed")}),(0,S.jsx)("em",{children:X(i,"fein, l\xF6chrig","fine, holey")})]})]}):(0,S.jsx)("em",{children:X(i,"Nachmodellierte K\xF6rper erscheinen, sobald \u2265 50 % eines Objekts gescannt sind; Hallenbl\xF6cke und Bodenplatte ab 30 %.","Reconstructed solids appear once \u2265 50 % of an object is scanned; hall blocks and floor slab from 30 %.")}),y.meshQ>0&&(0,S.jsxs)("em",{className:"lab-mq",children:["\u25B3 ",y.meshQ," ",X(i,"Kacheln in Arbeit","tiles in progress")]})]}),B.color==="mat"&&(0,S.jsxs)("div",{className:`lab-ui lab-opt lab-matpanel${q.mat?" min":""}`,children:[K("mat",X(i,"Materialkataster \xB7 aus Modell, Objekte \u2265 50 % erfasst","Material register \xB7 from model, objects \u2265 50 % captured")),(0,S.jsx)("table",{children:(0,S.jsxs)("tbody",{children:[[...y.mats].sort((k,xe)=>xe.mass-k.mass).map(k=>(0,S.jsxs)("tr",{children:[(0,S.jsxs)("td",{children:[(0,S.jsx)("i",{style:{background:Wn[k.k]?.c}}),i==="en"?Wn[k.k]?.en:Wn[k.k]?.de]}),(0,S.jsxs)("td",{children:[id(k.vol,i,3)," m\xB3"]}),(0,S.jsx)("td",{children:k.mass?`${id(k.mass/1e3,i,2)} t`:"\u2013"})]},k.k)),(0,S.jsxs)("tr",{children:[(0,S.jsxs)("td",{children:[(0,S.jsx)("i",{style:{background:Wn.concrete.c}}),X(i,"Bodenplatte (Fl\xE4che)","Floor slab (area)")]}),(0,S.jsxs)("td",{colSpan:2,children:[y.floorM2," m\xB2"]})]})]})})]})]}),Xe&&!bt&&_===null&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(rm,{onMove:(k,xe)=>l.current?.stick(k,xe),label:p==="drone"?X(i,"fliegen","fly"):X(i,"gehen","walk")}),(0,S.jsxs)("div",{className:"lab-ui lab-acts",children:[p==="drone"&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(Dl,{k:" ",press:Ie,children:["\u2912",(0,S.jsx)("small",{children:X(i,"hoch","up")})]}),(0,S.jsxs)(Dl,{k:"shift",press:Ie,children:["\u2913",(0,S.jsx)("small",{children:X(i,"runter","down")})]})]}),p==="handheld"&&(0,S.jsxs)(Dl,{k:"scan",press:Ie,className:`big${y.rec?" rec":""}`,children:["\u25CF",(0,S.jsx)("small",{children:X(i,"halten = scannen","hold = scan")})]}),p==="tls"&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("button",{className:"lab-hold",onClick:()=>l.current?.place(),children:["\u2295",(0,S.jsx)("small",{children:X(i,"aufstellen","set up")})]}),(0,S.jsxs)("button",{className:"lab-hold big",onClick:()=>l.current?.tlsScan(),children:["\u25B6",(0,S.jsx)("small",{children:X(i,"alle scannen","scan all")})]}),(0,S.jsxs)("button",{className:"lab-hold",onClick:()=>l.current?.collect(),children:["\u293A",(0,S.jsx)("small",{children:X(i,"einsammeln","collect")})]})]})]}),(0,S.jsxs)("button",{className:"lab-ui lab-menu",onClick:()=>ue(k=>!k),children:["\u2630 ",(0,S.jsxs)("span",{children:["Skills ",B.unlocked.length,"/",ts.length]})]})]})]}),Me&&(0,S.jsxs)("form",{className:"lab-ui lab-search",onSubmit:k=>{k.preventDefault(),Ot.trim()&&l.current?.search(Ot.trim()),vt(!1)},children:[(0,S.jsxs)("small",{children:["Zero-Shot \xB7 ",X(i,"Textprompt \u2192 Bounding Boxes","text prompt \u2192 bounding boxes")]}),(0,S.jsx)("input",{autoFocus:!0,value:Ot,onChange:k=>ae(k.target.value),placeholder:X(i,"z. B. Bagger, Person, Stuhl, Big Bag, Stahl \u2026","e.g. excavator, person, chair, big bag, steel \u2026"),onKeyDown:k=>k.key==="Escape"&&vt(!1)}),(0,S.jsx)("button",{className:"btn",children:X(i,"Suchen","Search")})]}),fe&&(0,S.jsxs)("div",{className:"lab-ui lab-ask",children:[(0,S.jsxs)("div",{className:"lab-ask-h",children:[(0,S.jsxs)("small",{children:["\u275D ",X(i,"Frag das Lab \xB7 regelbasiert, offline, mit Quelle","Ask the lab \xB7 rule-based, offline, with source")]}),(0,S.jsx)("button",{className:"lab-x",onClick:()=>He(!1),children:"\u2715"})]}),(0,S.jsxs)("div",{className:"lab-ask-log",children:[ct.length===0&&(0,S.jsx)("p",{className:"lab-lg-d",children:X(i,"Beispiele: \u201EWie viele Personen?\u201C \xB7 \u201EWo ist der Bagger?\u201C \xB7 \u201EWelche Abweichungen?\u201C \xB7 \u201EWie viel Stahl?\u201C",'Examples: "How many people?" \xB7 "Where is the excavator?" \xB7 "Which deviations?" \xB7 "How much steel?"')}),ct.map((k,xe)=>(0,S.jsxs)("div",{className:"lab-ask-qa",children:[(0,S.jsx)("b",{children:k.q}),(0,S.jsx)("p",{children:k.a}),(0,S.jsx)("span",{children:k.src.map((Tt,fn)=>(0,S.jsx)("em",{children:Tt},fn))})]},xe))]}),(0,S.jsxs)("form",{onSubmit:k=>{k.preventDefault(),!(!ke.trim()||!l.current)&&(Rt(xe=>[...xe.slice(-5),l.current.ask(ke.trim())]),ft(""))},children:[(0,S.jsx)("input",{autoFocus:!0,value:ke,onChange:k=>ft(k.target.value),placeholder:X(i,"Frage zum Scan \u2026","Question about the scan \u2026"),onKeyDown:k=>k.key==="Escape"&&He(!1)}),(0,S.jsx)("button",{className:"btn",children:X(i,"Fragen","Ask")})]})]}),D==="plan"&&(0,S.jsxs)("div",{className:"lab-ui lab-panel",children:[(0,S.jsxs)("div",{className:"lab-panel-h",children:[(0,S.jsxs)("b",{children:["\u25A4 ",X(i,"Grundriss \xB7 w\xE4chst mit jedem Scan","Floor plan \xB7 grows with every scan")]}),(0,S.jsx)("button",{className:"btn ghost",onClick:tt,children:"\u2913 PNG"}),(0,S.jsx)("button",{className:"lab-x",onClick:()=>an(null),children:"\u2715"})]}),(0,S.jsx)("div",{className:"lab-panel-b",children:(0,S.jsx)("canvas",{ref:o,className:"lab-plan"})})]}),D==="proj"&&(0,S.jsxs)("div",{className:"lab-ui lab-panel",children:[(0,S.jsxs)("div",{className:"lab-panel-h",children:[(0,S.jsxs)("b",{children:["\u25EB ",X(i,"Projektionsarten der aktuellen Punktwolke","Projection types of the current point cloud")]}),(0,S.jsxs)("button",{className:"btn ghost",onClick:Ke,children:["\u21BB ",X(i,"Aktualisieren","Refresh")]}),(0,S.jsx)("button",{className:"lab-x",onClick:()=>an(null),children:"\u2715"})]}),(0,S.jsxs)("div",{className:"lab-panel-b lab-projgrid",children:[Ze&&[["pano",X(i,"Panoramabild (vom aktuellen Standpunkt)","Panorama (from current position)")],["cube",X(i,"W\xFCrfelnetzbild","Cube-map net")],["persp",X(i,"Bild aus vorgegebener Kameraperspektive","Image from a given camera perspective")],["ortho",X(i,"Orthobild (Draufsicht)","Orthoimage (top view)")]].map(([k,xe])=>(0,S.jsxs)("figure",{children:[(0,S.jsx)("img",{src:Ze[k],alt:""}),(0,S.jsxs)("figcaption",{children:[xe,(0,S.jsx)("button",{className:"lab-png",onClick:()=>ee(Ze[k],`projektion_${k}`),children:"\u2913 PNG"})]})]},k)),(0,S.jsx)("p",{className:"lab-lg-d",children:X(i,"Wie Abb. 2.6 der Dissertation \u2013 nur aus dem, was du bisher gescannt hast, in der aktuellen F\xE4rbung (Merkmal, Segmentierung, Material \u2026).","As in Fig. 2.6 of the dissertation \u2013 built only from what you have scanned so far, in the current colouring (feature, segmentation, material \u2026).")})]})]}),D==="pano"&&(0,S.jsxs)("div",{className:"lab-ui lab-panel",children:[(0,S.jsxs)("div",{className:"lab-panel-h",children:[(0,S.jsxs)("b",{children:["\u25CE ",X(i,"360\xB0-Panoramen der TLS-Standpunkte","360\xB0 panoramas of the TLS positions")]}),(0,S.jsx)("button",{className:"lab-x",onClick:()=>(an(null),Et(null)),children:"\u2715"})]}),(0,S.jsx)("div",{className:"lab-panel-b",children:mt?(0,S.jsxs)(S.Fragment,{children:[ve&&(re==="360"?(0,S.jsx)(nm,{url:ve}):(0,S.jsx)("div",{className:"lab-panoflat",children:(0,S.jsx)("img",{src:ve,alt:""})})),(0,S.jsxs)("div",{className:"lab-pano-bar",children:[(0,S.jsxs)("button",{className:"btn ghost",onClick:()=>Et(null),children:["\u2190 ",X(i,"\xDCbersicht","Overview")]}),(0,S.jsxs)("div",{className:"lab-seg3 lab-seg2",children:[(0,S.jsxs)("button",{className:re==="360"?"on":"",onClick:()=>Re("360"),children:["\u25CE ",X(i,"360\xB0 umsehen","360\xB0 look around")]}),(0,S.jsxs)("button",{className:re==="flat"?"on":"",onClick:()=>Re("flat"),children:["\u25AD ",X(i,"Bild","Image")]})]}),(0,S.jsx)("button",{className:"btn ghost",onClick:()=>ve&&ee(ve,`panorama_${mt.id}`),children:"\u2913 PNG"}),(0,S.jsxs)("span",{children:[X(i,"Standpunkt","Position")," ",mt.id," \xB7 x ",mt.x.toFixed(1)," \xB7 y ",(-mt.z).toFixed(1)," \xB7 ",X(i,"F\xE4rbung wie im Lab","colouring as in the lab"),re==="360"?" \xB7 "+X(i,"ziehen zum Umsehen","drag to look around"):""]})]})]}):Nt.length?(0,S.jsx)("div",{className:"lab-panogrid",children:Nt.map(k=>(0,S.jsxs)("button",{onClick:()=>Et(k),children:[(0,S.jsx)("img",{src:k.thumb,alt:""}),(0,S.jsxs)("span",{children:[X(i,"Standpunkt","Position")," ",k.id]})]},k.id))}):(0,S.jsx)("p",{className:"lab-lg-d",children:X(i,"Noch keine Panoramen. Wechsle zu TLS (3), stelle Scanner auf (P) und scanne (Leertaste) \u2013 jeder Standpunkt liefert ein 360\xB0-Bild.","No panoramas yet. Switch to TLS (3), set up scanners (P) and scan (space) \u2013 every position yields a 360\xB0 image.")})})]}),!d&&(0,S.jsxs)("div",{className:"lab-ui lab-intro",children:[(0,S.jsx)("div",{className:"kicker",children:"3D Operation System \xB7 powered by X-AVIS"}),(0,S.jsx)("h1",{children:"Spatial AI Lab"}),(0,S.jsx)("p",{children:X(i,"Du startest in der Leere. Nur dein Scanner sieht \u2013 was er erfasst, wird Wirklichkeit: Punkt f\xFCr Punkt legst du echte Laserscans frei: eine Stahlbauhalle und \u2013 durchs offene Tor \u2013 die Referenzbaustelle Aachen. Folge den Signalen, scanne die Stationen, und X-AVIS segmentiert, was du gefunden hast. Die Drohne findet, Handheld und TLS analysieren \u2013 und jeder Akku ist begrenzt. Manche Stationen schalten Skills frei \u2026","You start in the void. Only your scanner can see \u2013 whatever it captures becomes real: point by point you uncover real laser scans: a steel fabrication hall and \u2013 through the open gate \u2013 the Reference Construction Site Aachen. Follow the signals, scan the stations, and X-AVIS segments what you found. The drone finds, handheld and TLS analyse \u2013 and every battery is limited. Some stations unlock skills \u2026")}),(0,S.jsx)("div",{className:"lab-techpick",children:gu.map(k=>(0,S.jsxs)("button",{className:p===k.id?"on":"",onClick:()=>_t(k.id),children:[(0,S.jsx)("i",{children:k.icon}),(0,S.jsx)("b",{children:ut(k.t,i)}),(0,S.jsx)("span",{children:ut(Xe?k.dt:k.d,i)})]},k.id))}),(0,S.jsxs)("div",{className:"lab-modes",children:[e&&(0,S.jsxs)("button",{onClick:()=>e(i==="de"?"en":"de"),children:[(0,S.jsx)("i",{className:"sw-lang",children:i==="de"?"EN":"DE"}),i==="de"?"English":"Deutsch"]}),(0,S.jsxs)("button",{className:g==="dark"?"on":"",onClick:()=>x("dark"),children:[(0,S.jsx)("i",{className:"sw-dark"}),X(i,"Dunkle Leere","Dark void")]}),(0,S.jsxs)("button",{className:g==="light"?"on":"",onClick:()=>x("light"),children:[(0,S.jsx)("i",{className:"sw-light"}),X(i,"Wei\xDFe Leere","White void")]})]}),h<1?(0,S.jsxs)("div",{className:"lab-load",children:[(0,S.jsx)("i",{style:{width:`${Math.round(h*100)}%`}}),(0,S.jsxs)("span",{children:[X(i,"Lade Punktwolke","Loading point cloud")," \xB7 ",Math.round(h*100)," %"]})]}):(0,S.jsxs)("button",{className:"btn",onClick:()=>{we(),l.current?.tech(p),f(!0),l.current?.start()},children:["\u25B6 ",X(i,"Scan starten","Start scanning"),Xe?" \xB7 "+X(i,"Vollbild quer","fullscreen landscape"):""]}),(0,S.jsx)("small",{className:"lab-note",children:X(i,"Echte Scans: Stahlbauhalle (RWTH Aachen) \xB7 Referenzbaustelle Aachen aus RefSite3D (Fahrendholz-Heiermann et al., CC BY 4.0) \xB7 einzelne Stationsobjekte synthetisch","Real scans: steel hall (RWTH Aachen) \xB7 Reference Construction Site Aachen from RefSite3D (Fahrendholz-Heiermann et al., CC BY 4.0) \xB7 some station objects synthetic")})]}),Qe&&(0,S.jsx)(Gd,{s:Qe,lang:i,skills:nd(Qe),onClose:()=>I(null)}),U!==null&&!b&&_===null&&D===null&&(0,S.jsxs)("div",{className:"lab-ui lab-done",children:[(0,S.jsxs)("b",{children:[X(i,"Lab vollst\xE4ndig entdeckt","Lab fully discovered")," \u2713"]}),(0,S.jsxs)("span",{children:[X(i,`Alle ${Fa} Stationen analysiert in`,`All ${Fa} stations analysed in`)," ",(0,S.jsx)("b",{children:am(U)})," \xB7 ",X(i,"Gel\xE4nde erfasst","area captured")," ",Math.round(y.cov*100)," % \xB7 Skills ",B.unlocked.length,"/",ts.length,!y.bonus&&` \xB7 ${X(i,"ein Signal fehlt noch \u2026","one signal is still missing \u2026")}`]}),(0,S.jsx)("span",{children:X(i,"Vom Scan zur Entscheidung.","From scan to decision.")}),(0,S.jsxs)("div",{className:"lab-done-row",children:[(0,S.jsxs)("button",{className:"btn",onClick:()=>w(!0),children:["\u25B6 ",X(i,"Weiter erkunden","Keep exploring")]}),(0,S.jsx)("a",{className:"btn ghost",href:"#/",children:X(i,"Zur Website","Back to website")})]})]}),Xe&&d&&Y&&!he&&(0,S.jsxs)("div",{className:"lab-ui lab-rotate",children:[(0,S.jsx)("div",{className:"lab-rotate-i",children:"\u{1F4F1}"}),(0,S.jsx)("b",{children:X(i,"Handy quer drehen","Rotate your phone")}),(0,S.jsx)("span",{children:X(i,"Das Spatial AI Lab ist f\xFCr das Querformat gemacht \u2013 mehr Halle, mehr Platz f\xFCr Joystick und Steuerung.","The Spatial AI Lab is made for landscape \u2013 more hall, more room for joystick and controls.")}),(0,S.jsxs)("button",{className:"btn",onClick:we,children:["\u26F6 ",X(i,"Vollbild","Fullscreen")]}),(0,S.jsx)("button",{className:"lab-flip",onClick:()=>W(!0),children:X(i,"Trotzdem hochkant","Stay in portrait")})]}),(0,S.jsxs)("div",{className:"lab-copy",children:["\xA9 ",new Date().getFullYear()," Jan Luca Fahrendholz-Heiermann \xB7 X-AVIS"]})]})},Zb=Av;export{Zb as default};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
