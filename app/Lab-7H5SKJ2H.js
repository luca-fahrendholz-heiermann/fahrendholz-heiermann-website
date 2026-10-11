import{b as Fd,g as Od,i as zd,k as ja,l as Bd}from"./chunk-A5ZTPR6Q.js";import{A as kd,B as ht,C as Ee,b as pi,c as jl,e as os,z as Ud}from"./chunk-V3L2VTIW.js";var mt=pi(jl());var $e=pi(os()),Zn=(i,e,t)=>i==="en"?t:e,Hd=i=>`rgb(${i.map(e=>Math.round(e*255)).join(",")})`,Vd=({s:i,lang:e,skills:t,onClose:n})=>{let s=i.uc?Fd[i.uc-1]:null;return(0,$e.jsxs)("div",{className:"lab-ui lab-card",style:{borderColor:i.c},children:[(0,$e.jsx)("button",{className:"lab-x",onClick:n,children:"\u2715"}),(0,$e.jsxs)("div",{className:"kicker",style:{color:i.c},children:[i.kind==="uc"?`Use Case ${i.uc}`:ht(i.t,e)," \xB7 ",Zn(e,"gescannt & analysiert","scanned & analysed")]}),(0,$e.jsx)("h2",{children:s?ht(s.title,e):ht(i.t,e)}),t.map(r=>(0,$e.jsxs)("div",{className:"lab-skillgot",children:[(0,$e.jsx)("span",{children:r.icon}),(0,$e.jsxs)("div",{children:[(0,$e.jsx)("small",{children:Zn(e,"Skill freigeschaltet","Skill unlocked")}),(0,$e.jsxs)("b",{children:[ht(r.t,e),r.key?` [${r.key}]`:` \xB7 ${Zn(e,"passiv","passive")}`]}),(0,$e.jsx)("em",{children:ht(r.d,e)})]})]},r.id)),(0,$e.jsxs)("div",{className:"lab-parts",children:[(0,$e.jsx)("small",{children:Zn(e,"X-AVIS hat erkannt","X-AVIS detected")}),i.parts.map((r,a)=>(0,$e.jsxs)("span",{style:{borderColor:Hd(r.c)},children:[(0,$e.jsx)("i",{style:{background:Hd(r.c)}}),ht(r.name,e)]},a))]}),s&&(0,$e.jsxs)($e.Fragment,{children:[(0,$e.jsx)("p",{className:"lab-claim",children:ht(s.claim,e)}),(0,$e.jsx)("video",{src:`media/uc${s.n}_${e}.mp4`,poster:`media/thumb_uc${s.n}_${e}.jpg`,controls:!0,muted:!0,playsInline:!0},`${s.n}-${e}`),(0,$e.jsx)("ol",{children:s.flow.map((r,a)=>(0,$e.jsx)("li",{children:ht(r,e)},a))}),(0,$e.jsx)("div",{className:"lab-kpis",children:s.value.map((r,a)=>(0,$e.jsxs)("div",{children:[(0,$e.jsx)("b",{children:r.v}),(0,$e.jsx)("span",{children:ht(r.t,e)})]},a))}),(0,$e.jsxs)("a",{className:"btn",href:`#/uc/${s.n}`,children:[Zn(e,"Zur Use-Case-Seite","Open use-case page")," \u2192"]})]}),i.kind==="docs"&&(0,$e.jsxs)("div",{className:"lab-list",children:[Od.map((r,a)=>(0,$e.jsxs)("div",{children:[(0,$e.jsx)("b",{children:ht(r.t,e)}),(0,$e.jsx)("span",{children:ht(r.d,e)})]},a)),(0,$e.jsxs)("a",{className:"btn",href:"#/expertise",children:[Zn(e,"Mehr unter Expertise","More in expertise")," \u2192"]})]}),i.kind==="talks"&&(0,$e.jsx)("div",{className:"lab-list",children:zd.slice(0,6).map((r,a)=>(0,$e.jsxs)("div",{className:"lab-talk",children:[r.imgs[0]&&(0,$e.jsx)("img",{src:`media/${r.imgs[0]}`,alt:""}),(0,$e.jsxs)("div",{children:[(0,$e.jsxs)("b",{children:[r.y&&`${r.y} \xB7 `,ht(r.t,e)]}),(0,$e.jsx)("span",{children:ht(r.where,e)})]})]},a))}),i.kind==="bonus"&&(0,$e.jsxs)("div",{className:"lab-list",children:[(0,$e.jsx)("p",{className:"lab-claim",children:Zn(e,"Zielmarken sind die Br\xFCcke zwischen einzelnen Scans: \xDCber sie werden Standpunkte zueinander und zum Modell registriert. In Artefakt 2 geschieht das zielmarkenfrei \u2013 Grobregistrierung \xFCber Extended Gaussian Images (EGI) und Fourier-Mellin (FMT), Feinregistrierung per ICP, danach pr\xFCft ein MLP jedes Bauteil gegen das Soll.","Targets are the bridge between individual scans: they register positions to each other and to the model. Artefact 2 does this target-free \u2013 coarse registration via extended Gaussian images (EGI) and Fourier\u2013Mellin (FMT), fine registration via ICP, then an MLP verifies every component against the design.")}),(0,$e.jsx)("img",{className:"lab-cardimg",src:"media/diss_5-14_b3-stahlbauhalle.jpg",alt:""}),(0,$e.jsx)("img",{className:"lab-cardimg",src:"media/diss_5-19_verifikation-b3-stahlbauhalle.jpg",alt:""}),(0,$e.jsx)("p",{className:"lab-claim",children:Zn(e,"Im Lab: Handheld-Scans driften (SLAM). Mit R registrierst du sie per ICP \u2013 die verschmierten W\xE4nde rasten ein.","In the lab: handheld scans drift (SLAM). Press R to register them via ICP \u2013 the smeared walls snap into place.")}),(0,$e.jsxs)("a",{className:"btn",href:"#/expertise",children:[Zn(e,"Registrierung in der Expertise","Registration in expertise")," \u2192"]})]}),i.kind==="profile"&&(0,$e.jsxs)("div",{className:"lab-list",children:[(0,$e.jsxs)("div",{className:"lab-prof",children:[(0,$e.jsx)("img",{src:"media/profile.jpg",alt:""}),(0,$e.jsxs)("div",{children:[(0,$e.jsx)("b",{children:ja.name}),(0,$e.jsx)("span",{children:ht(ja.role,e)})]})]}),(0,$e.jsx)("p",{className:"lab-claim",children:ht(ja.summary,e)}),(0,$e.jsxs)("div",{className:"lab-egg",children:[(0,$e.jsxs)("small",{children:["\u2605 Easter Egg \xB7 ",Zn(e,"Tiefe aus einem einzigen Bild","depth from a single image")]}),(0,$e.jsxs)("div",{className:"lab-egg-imgs",children:[(0,$e.jsx)("img",{src:"media/profile.jpg",alt:""}),(0,$e.jsx)("span",{children:"\u2192"}),(0,$e.jsx)("img",{src:"media/profile_depth.png",alt:""})]}),(0,$e.jsx)("em",{children:Zn(e,"Depth Anything V2 sch\xE4tzt die relative Tiefe des Fotos. Statt \xFCber ein Lochkameramodell entsteht die Punktwolke als Relief \xFCber einer Referenzebene, dem Bildtr\xE4ger \u2013 wie bei meiner Kameramessung mit Referenzgeometrie statt LiDAR. Vorab berechnet, im Lab steht das Bild aus der Staffelei heraus.","Depth Anything V2 estimates the photo's relative depth. Instead of a pinhole camera model, the point cloud is built as relief over a reference plane, the picture itself \u2013 like my camera measurement with reference geometry instead of LiDAR. Precomputed; in the lab the picture pops out of the easel.")})]}),(0,$e.jsx)("div",{className:"lab-links",children:Bd.map(r=>(0,$e.jsxs)("a",{href:r.href,target:"_blank",rel:"noopener noreferrer",children:[r.k," \u2197"]},r.k))}),(0,$e.jsxs)("a",{className:"btn",href:"#/profil",children:[Zn(e,"Vollst\xE4ndiges Profil","Full profile")," \u2192"]})]}),(0,$e.jsx)("button",{className:"btn ghost lab-cont",onClick:n,children:Zn(e,"Weiter erkunden","Keep exploring")})]})};var Tm=0,Gd=1,Rm=2;var op=1,Cm=2,Vi=3,Ti=0,$n=1,ln=2,xs=0,Xi=1,ys=2,Wd=3,Xd=4,Pm=5,Hs=100,Im=101,Lm=102,Nm=103,Dm=104,Um=200,km=201,Fm=202,Om=203,kc=204,Fc=205,zm=206,Bm=207,Hm=208,Vm=209,Gm=210,Wm=211,Xm=212,Ym=213,$m=214,Oc=0,zc=1,Bc=2,Tr=3,Hc=4,Vc=5,Gc=6,Wc=7,lp=0,qm=1,Km=2,_s=0,Zm=1,Jm=2,jm=3,Qm=4,e0=5,t0=6,n0=7,Yd="attached",i0="detached",cp=300,Rr=301,Cr=302,Xc=303,Yc=304,_l=306,Gs=1e3,Gi=1001,va=1002,kn=1003,nu=1004;var br=1005;var Xn=1006,ma=1007;var Ai=1008;var Yi=1009,hp=1010,up=1011,ba=1012,iu=1013,Ws=1014,vi=1015,Na=1016,su=1017,ru=1018,Pr=1020,dp=35902,fp=1021,pp=1022,Yn=1023,mp=1024,gp=1025,Sr=1026,Ir=1027,au=1028,ou=1029,xp=1030,lu=1031;var cu=1033,Io=33776,Lo=33777,No=33778,Do=33779,$c=35840,qc=35841,Kc=35842,Zc=35843,Jc=36196,jc=37492,Qc=37496,eh=37808,th=37809,nh=37810,ih=37811,sh=37812,rh=37813,ah=37814,oh=37815,lh=37816,ch=37817,hh=37818,uh=37819,dh=37820,fh=37821,Uo=36492,ph=36494,mh=36495,_p=36283,gh=36284,xh=36285,_h=36286;var Lr=2300,Nr=2301,Ql=2302,$d=2400,qd=2401,Kd=2402,s0=2500;var yp=0,yl=1,Da=2,r0=3200,a0=3201;var vp=0,o0=1,ps="",gn="srgb",Rn="srgb-linear",hu="display-p3",vl="display-p3-linear",Fo="linear",on="srgb",Oo="rec709",zo="p3";var ar=7680;var Zd=519,l0=512,c0=513,h0=514,bp=515,u0=516,d0=517,f0=518,p0=519,yh=35044,bl=35048;var Jd="300 es",Wi=2e3,Bo=2001,vs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jd=1234567,Er=Math.PI/180,Dr=180/Math.PI;function bi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]).toLowerCase()}function _n(i,e,t){return Math.max(e,Math.min(t,i))}function uu(i,e){return(i%e+e)%e}function m0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function g0(i,e,t){return i!==e?(t-i)/(e-i):0}function ga(i,e,t){return(1-t)*i+t*e}function x0(i,e,t,n){return ga(i,e,1-Math.exp(-t*n))}function _0(i,e=1){return e-Math.abs(uu(i,e*2)-e)}function y0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function v0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function b0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function M0(i,e){return i+Math.random()*(e-i)}function S0(i){return i*(.5-Math.random())}function E0(i){i!==void 0&&(jd=i);let e=jd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function w0(i){return i*Er}function A0(i){return i*Dr}function T0(i){return(i&i-1)===0&&i!==0}function R0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function C0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function P0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ua={DEG2RAD:Er,RAD2DEG:Dr,generateUUID:bi,clamp:_n,euclideanModulo:uu,mapLinear:m0,inverseLerp:g0,lerp:ga,damp:x0,pingpong:_0,smoothstep:y0,smootherstep:v0,randInt:b0,randFloat:M0,randFloatSpread:S0,seededRandom:E0,degToRad:w0,radToDeg:A0,isPowerOfTwo:T0,ceilPowerOfTwo:R0,floorPowerOfTwo:C0,setQuaternionFromProperEuler:P0,normalize:qt,denormalize:yi},ke=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_n(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ct=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],M=s[1],_=s[4],y=s[7],D=s[2],T=s[5],C=s[8];return r[0]=a*x+o*M+l*D,r[3]=a*m+o*_+l*T,r[6]=a*p+o*y+l*C,r[1]=c*x+h*M+u*D,r[4]=c*m+h*_+u*T,r[7]=c*p+h*y+u*C,r[2]=d*x+f*M+g*D,r[5]=d*m+f*_+g*T,r[8]=d*p+f*y+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ec.makeScale(e,t)),this}rotate(e){return this.premultiply(ec.makeRotation(-e)),this}translate(e,t){return this.premultiply(ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ec=new Ct;function Mp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ma(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function I0(){let i=Ma("canvas");return i.style.display="block",i}var Qd={};function ko(i){i in Qd||(Qd[i]=!0,console.warn(i))}function L0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function N0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function D0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ef=new Ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),tf=new Ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ra={[Rn]:{transfer:Fo,primaries:Oo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[gn]:{transfer:on,primaries:Oo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[vl]:{transfer:Fo,primaries:zo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(tf),fromReference:i=>i.applyMatrix3(ef)},[hu]:{transfer:on,primaries:zo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(tf),fromReference:i=>i.applyMatrix3(ef).convertLinearToSRGB()}},U0=new Set([Rn,vl]),Ht={enabled:!0,_workingColorSpace:Rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!U0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=ra[e].toReference,s=ra[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ra[i].primaries},getTransfer:function(i){return i===ps?Fo:ra[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(ra[e].luminanceCoefficients)}};function wr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function tc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var or,vh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{or===void 0&&(or=Ma("canvas")),or.width=e.width,or.height=e.height;let n=or.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=or}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ma("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=wr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wr(t[n]/255)*255):t[n]=wr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},k0=0,Ho=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(nc(s[a].image)):r.push(nc(s[a]))}else r=nc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var F0=0,Tn=class i extends vs{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Gi,s=Gi,r=Xn,a=Ai,o=Yn,l=Yi,c=i.DEFAULT_ANISOTROPY,h=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=bi(),this.name="",this.source=new Ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gs:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gs:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=cp;Tn.DEFAULT_ANISOTROPY=1;var Wt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(f+1)/2,D=(p+1)/2,T=(h+d)/4,C=(u+x)/4,k=(g+m)/4;return _>y&&_>D?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=C/n):y>D?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=k/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=C/r,s=k/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bh=class extends vs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ho(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$i=class extends bh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vo=class extends Tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Mh=class extends Tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*x,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let D=Math.sqrt(_),T=Math.atan2(D,p*M);m=Math.sin(m*T)/D,o=Math.sin(o*T)/D}let y=o*M;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+x*y,m===1-o){let D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_n(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ic.copy(this).projectOnVector(e),this.sub(ic)}reflect(e){return this.sub(ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(_n(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ic=new I,nf=new Mi,qn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mi):mi.fromBufferAttribute(r,a),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qa.copy(n.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),eo.subVectors(this.max,aa),lr.subVectors(e.a,aa),cr.subVectors(e.b,aa),hr.subVectors(e.c,aa),ls.subVectors(cr,lr),cs.subVectors(hr,cr),Ds.subVectors(lr,hr);let t=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Ds.z,Ds.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Ds.z,0,-Ds.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Ds.y,Ds.x,0];return!sc(t,lr,cr,hr,eo)||(t=[1,0,0,0,1,0,0,0,1],!sc(t,lr,cr,hr,eo))?!1:(to.crossVectors(ls,cs),t=[to.x,to.y,to.z],sc(t,lr,cr,hr,eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ki=[new I,new I,new I,new I,new I,new I,new I,new I],mi=new I,Qa=new qn,lr=new I,cr=new I,hr=new I,ls=new I,cs=new I,Ds=new I,aa=new I,eo=new I,to=new I,Us=new I;function sc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Us.fromArray(i,r);let o=s.x*Math.abs(Us.x)+s.y*Math.abs(Us.y)+s.z*Math.abs(Us.z),l=e.dot(Us),c=t.dot(Us),h=n.dot(Us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var O0=new qn,oa=new I,rc=new I,Qn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):O0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);let t=oa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(oa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(rc)),this.expandByPoint(oa.copy(e.center).sub(rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Fi=new I,ac=new I,no=new I,hs=new I,oc=new I,io=new I,lc=new I,Ur=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ac.copy(e).add(t).multiplyScalar(.5),no.copy(t).sub(e).normalize(),hs.copy(this.origin).sub(ac);let r=e.distanceTo(t)*.5,a=-this.direction.dot(no),o=hs.dot(this.direction),l=-hs.dot(no),c=hs.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ac).addScaledVector(no,d),f}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);let n=Fi.dot(this.direction),s=Fi.dot(Fi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,n,s,r){oc.subVectors(t,e),io.subVectors(n,e),lc.crossVectors(oc,io);let a=this.direction.dot(lc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hs.subVectors(this.origin,e);let l=o*this.direction.dot(io.crossVectors(hs,io));if(l<0)return null;let c=o*this.direction.dot(oc.cross(hs));if(c<0||l+c>a)return null;let h=-o*hs.dot(lc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yt=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,x,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ur.setFromMatrixColumn(e,0).length(),r=1/ur.setFromMatrixColumn(e,1).length(),a=1/ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(z0,e,B0)}lookAt(e,t,n){let s=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),us.crossVectors(n,Jn),us.lengthSq()===0&&(Math.abs(n.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),us.crossVectors(n,Jn)),us.normalize(),so.crossVectors(Jn,us),s[0]=us.x,s[4]=so.x,s[8]=Jn.x,s[1]=us.y,s[5]=so.y,s[9]=Jn.y,s[2]=us.z,s[6]=so.z,s[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],M=n[3],_=n[7],y=n[11],D=n[15],T=s[0],C=s[4],k=s[8],Z=s[12],v=s[1],w=s[5],O=s[9],V=s[13],$=s[2],se=s[6],F=s[10],oe=s[14],q=s[3],ce=s[7],Ie=s[11],be=s[15];return r[0]=a*T+o*v+l*$+c*q,r[4]=a*C+o*w+l*se+c*ce,r[8]=a*k+o*O+l*F+c*Ie,r[12]=a*Z+o*V+l*oe+c*be,r[1]=h*T+u*v+d*$+f*q,r[5]=h*C+u*w+d*se+f*ce,r[9]=h*k+u*O+d*F+f*Ie,r[13]=h*Z+u*V+d*oe+f*be,r[2]=g*T+x*v+m*$+p*q,r[6]=g*C+x*w+m*se+p*ce,r[10]=g*k+x*O+m*F+p*Ie,r[14]=g*Z+x*V+m*oe+p*be,r[3]=M*T+_*v+y*$+D*q,r[7]=M*C+_*w+y*se+D*ce,r[11]=M*k+_*O+y*F+D*Ie,r[15]=M*Z+_*V+y*oe+D*be,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+x*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],M=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,_=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,y=h*x*c-g*u*c+g*o*f-a*x*f-h*o*p+a*u*p,D=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,T=t*M+n*_+s*y+r*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return e[0]=M*C,e[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*C,e[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*C,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*C,e[4]=_*C,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*C,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*C,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*C,e[8]=y*C,e[9]=(g*u*r-h*x*r-g*n*f+t*x*f+h*n*p-t*u*p)*C,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*p+t*o*p)*C,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*C,e[12]=D*C,e[13]=(h*x*s-g*u*s+g*n*d-t*x*d-h*n*m+t*u*m)*C,e[14]=(g*o*s-a*x*s-g*n*l+t*x*l+a*n*m-t*o*m)*C,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,M=l*c,_=l*h,y=l*u,D=n.x,T=n.y,C=n.z;return s[0]=(1-(x+p))*D,s[1]=(f+y)*D,s[2]=(g-_)*D,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(d+p))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+_)*C,s[9]=(m-M)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ur.set(s[0],s[1],s[2]).length(),a=ur.set(s[4],s[5],s[6]).length(),o=ur.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],gi.copy(this);let c=1/r,h=1/a,u=1/o;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=u,gi.elements[9]*=u,gi.elements[10]*=u,t.setFromRotationMatrix(gi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Wi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(o===Wi)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Bo)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Wi){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,f=(n+s)*h,g,x;if(o===Wi)g=(a+r)*u,x=-2*u;else if(o===Bo)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ur=new I,gi=new yt,z0=new I(0,0,0),B0=new I(1,1,1),us=new I,so=new I,Jn=new I,sf=new yt,rf=new Mi,Ri=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(_n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_n(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(_n(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_n(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-_n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rf.setFromEuler(this),this.setFromQuaternion(rf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ri.DEFAULT_ORDER="XYZ";var Go=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},H0=0,af=new I,dr=new Mi,Oi=new yt,ro=new I,la=new I,V0=new I,G0=new Mi,of=new I(1,0,0),lf=new I(0,1,0),cf=new I(0,0,1),hf={type:"added"},W0={type:"removed"},fr={type:"childadded",child:null},cc={type:"childremoved",child:null},hn=class i extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Ri,n=new Mi,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ct}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(of,e)}rotateY(e){return this.rotateOnAxis(lf,e)}rotateZ(e){return this.rotateOnAxis(cf,e)}translateOnAxis(e,t){return af.copy(e).applyQuaternion(this.quaternion),this.position.add(af.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(of,e)}translateY(e){return this.translateOnAxis(lf,e)}translateZ(e){return this.translateOnAxis(cf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ro.copy(e):ro.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(la,ro,this.up):Oi.lookAt(ro,la,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),dr.setFromRotationMatrix(Oi),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hf),fr.child=e,this.dispatchEvent(fr),fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(W0),cc.child=e,this.dispatchEvent(cc),cc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hf),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,V0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,G0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};hn.DEFAULT_UP=new I(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xi=new I,zi=new I,hc=new I,Bi=new I,pr=new I,mr=new I,uf=new I,uc=new I,dc=new I,fc=new I,pc=new Wt,mc=new Wt,gc=new Wt,ms=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),xi.subVectors(e,t),s.cross(xi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){xi.subVectors(s,t),zi.subVectors(n,t),hc.subVectors(e,t);let a=xi.dot(xi),o=xi.dot(zi),l=xi.dot(hc),c=zi.dot(zi),h=zi.dot(hc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bi.x),l.addScaledVector(a,Bi.y),l.addScaledVector(o,Bi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(e,t),mc.fromBufferAttribute(e,n),gc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(pc,r.x),a.addScaledVector(mc,r.y),a.addScaledVector(gc,r.z),a}static isFrontFacing(e,t,n,s){return xi.subVectors(n,t),zi.subVectors(e,t),xi.cross(zi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),xi.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;pr.subVectors(s,n),mr.subVectors(r,n),uc.subVectors(e,n);let l=pr.dot(uc),c=mr.dot(uc);if(l<=0&&c<=0)return t.copy(n);dc.subVectors(e,s);let h=pr.dot(dc),u=mr.dot(dc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(pr,a);fc.subVectors(e,r);let f=pr.dot(fc),g=mr.dot(fc);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(mr,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return uf.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(uf,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(pr,a).addScaledVector(mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},ao={h:0,s:0,l:0};function xc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var nt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ht.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ht.workingColorSpace){if(e=uu(e,1),t=_n(t,0,1),n=_n(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=xc(a,r,e+1/3),this.g=xc(a,r,e),this.b=xc(a,r,e-1/3)}return Ht.toWorkingColorSpace(this,s),this}setStyle(e,t=gn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){let n=Sp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=tc(e.r),this.g=tc(e.g),this.b=tc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return Ht.fromWorkingColorSpace(Un.copy(this),e),Math.round(_n(Un.r*255,0,255))*65536+Math.round(_n(Un.g*255,0,255))*256+Math.round(_n(Un.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.fromWorkingColorSpace(Un.copy(this),t);let n=Un.r,s=Un.g,r=Un.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=gn){Ht.fromWorkingColorSpace(Un.copy(this),e);let t=Un.r,n=Un.g,s=Un.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ds),this.setHSL(ds.h+e,ds.s+t,ds.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ds),e.getHSL(ao);let n=ga(ds.h,ao.h,t),s=ga(ds.s,ao.s,t),r=ga(ds.l,ao.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Un=new nt;nt.NAMES=Sp;var X0=0,ei=class extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Xi,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kc,this.blendDst=Fc,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==kc&&(n.blendSrc=this.blendSrc),this.blendDst!==Fc&&(n.blendDst=this.blendDst),this.blendEquation!==Hs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ft=class extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=lp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var mn=new I,oo=new ke,Pt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yh,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oo.fromBufferAttribute(this,t),oo.applyMatrix3(e),this.setXY(t,oo.x,oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),s=qt(s,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yh&&(e.usage=this.usage),e}};var Wo=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Xo=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var kt=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Y0=0,ai=new yt,_c=new hn,gr=new I,jn=new qn,ca=new qn,An=new I,Kt=class i extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mp(e)?Xo:Wo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ct().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,n){return ai.makeTranslation(e,t,n),this.applyMatrix4(ai),this}scale(e,t,n){return ai.makeScale(e,t,n),this.applyMatrix4(ai),this}lookAt(e){return _c.lookAt(e),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];jn.setFromBufferAttribute(r),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ca.setFromBufferAttribute(o),this.morphTargetsRelative?(An.addVectors(jn.min,ca.min),jn.expandByPoint(An),An.addVectors(jn.max,ca.max),jn.expandByPoint(An)):(jn.expandByPoint(ca.min),jn.expandByPoint(ca.max))}jn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)An.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(An));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)An.fromBufferAttribute(o,c),l&&(gr.fromBufferAttribute(e,c),An.add(gr)),s=Math.max(s,n.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let k=0;k<n.count;k++)o[k]=new I,l[k]=new I;let c=new I,h=new I,u=new I,d=new ke,f=new ke,g=new ke,x=new I,m=new I;function p(k,Z,v){c.fromBufferAttribute(n,k),h.fromBufferAttribute(n,Z),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,k),f.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(w),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(w),o[k].add(x),o[Z].add(x),o[v].add(x),l[k].add(m),l[Z].add(m),l[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let k=0,Z=M.length;k<Z;++k){let v=M[k],w=v.start,O=v.count;for(let V=w,$=w+O;V<$;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let _=new I,y=new I,D=new I,T=new I;function C(k){D.fromBufferAttribute(s,k),T.copy(D);let Z=o[k];_.copy(Z),_.sub(D.multiplyScalar(D.dot(Z))).normalize(),y.crossVectors(T,Z);let w=y.dot(l[k])<0?-1:1;a.setXYZW(k,_.x,_.y,_.z,w)}for(let k=0,Z=M.length;k<Z;++k){let v=M[k],w=v.start,O=v.count;for(let V=w,$=w+O;V<$;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)An.fromBufferAttribute(e,t),An.normalize(),e.setXYZ(t,An.x,An.y,An.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Pt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},df=new yt,ks=new Ur,lo=new Qn,ff=new I,co=new I,ho=new I,uo=new I,yc=new I,fo=new I,pf=new I,po=new I,we=class extends hn{constructor(e=new Kt,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(yc.fromBufferAttribute(u,e),a?fo.addScaledVector(yc,h):fo.addScaledVector(yc.sub(t),h))}t.add(fo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(r),ks.copy(e.ray).recast(e.near),!(lo.containsPoint(ks.origin)===!1&&(ks.intersectSphere(lo,ff)===null||ks.origin.distanceToSquared(ff)>(e.far-e.near)**2))&&(df.copy(r).invert(),ks.copy(e.ray).applyMatrix4(df),!(n.boundingBox!==null&&ks.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ks)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,D=_;y<D;y+=3){let T=o.getX(y),C=o.getX(y+1),k=o.getX(y+2);s=mo(this,p,e,n,c,h,u,T,C,k),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let M=o.getX(m),_=o.getX(m+1),y=o.getX(m+2);s=mo(this,a,e,n,c,h,u,M,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,D=_;y<D;y+=3){let T=y,C=y+1,k=y+2;s=mo(this,p,e,n,c,h,u,T,C,k),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let M=m,_=m+1,y=m+2;s=mo(this,a,e,n,c,h,u,M,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function $0(i,e,t,n,s,r,a,o){let l;if(e.side===$n?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ti,o),l===null)return null;po.copy(o),po.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(po);return c<t.near||c>t.far?null:{distance:c,point:po.clone(),object:i}}function mo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,co),i.getVertexPosition(l,ho),i.getVertexPosition(c,uo);let h=$0(i,e,t,n,co,ho,uo,pf);if(h){let u=new I;ms.getBarycoord(pf,co,ho,uo,u),s&&(h.uv=ms.getInterpolatedAttribute(s,o,l,c,u,new ke)),r&&(h.uv1=ms.getInterpolatedAttribute(r,o,l,c,u,new ke)),a&&(h.normal=ms.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new I,materialIndex:0};ms.getNormal(co,ho,uo,d.normal),h.face=d,h.barycoord=u}return h}var Jt=class i extends Kt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(u,2));function g(x,m,p,M,_,y,D,T,C,k,Z){let v=y/C,w=D/k,O=y/2,V=D/2,$=T/2,se=C+1,F=k+1,oe=0,q=0,ce=new I;for(let Ie=0;Ie<F;Ie++){let be=Ie*w-V;for(let St=0;St<se;St++){let zt=St*v-O;ce[x]=zt*M,ce[m]=be*_,ce[p]=$,c.push(ce.x,ce.y,ce.z),ce[x]=0,ce[m]=0,ce[p]=T>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(St/C),u.push(1-Ie/k),oe+=1}}for(let Ie=0;Ie<k;Ie++)for(let be=0;be<C;be++){let St=d+be+se*Ie,zt=d+be+se*(Ie+1),ie=d+(be+1)+se*(Ie+1),de=d+(be+1)+se*Ie;l.push(St,zt,de),l.push(zt,ie,de),q+=6}o.addGroup(f,q,Z),f+=q,d+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function kr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Hn(i){let e={};for(let t=0;t<i.length;t++){let n=kr(i[t]);for(let s in n)e[s]=n[s]}return e}function q0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ep(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ht.workingColorSpace}var K0={clone:kr,merge:Hn},Z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,J0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ti=class extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z0,this.fragmentShader=J0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=q0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Yo=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},fs=new I,mf=new ke,gf=new ke,fn=class extends Yo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dr*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,t){return this.getViewBounds(e,mf,gf),t.subVectors(gf,mf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Er*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},xr=-90,_r=1,Sh=class extends hn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fn(xr,_r,e,t);s.layers=this.layers,this.add(s);let r=new fn(xr,_r,e,t);r.layers=this.layers,this.add(r);let a=new fn(xr,_r,e,t);a.layers=this.layers,this.add(a);let o=new fn(xr,_r,e,t);o.layers=this.layers,this.add(o);let l=new fn(xr,_r,e,t);l.layers=this.layers,this.add(l);let c=new fn(xr,_r,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Wi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},$o=class extends Tn{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Rr,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Eh=class extends $i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new $o(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jt(5,5,5),r=new ti({name:"CubemapFromEquirect",uniforms:kr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$n,blending:xs});r.uniforms.tEquirect.value=t;let a=new we(s,r),o=t.minFilter;return t.minFilter===Ai&&(t.minFilter=Xn),new Sh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},vc=new I,j0=new I,Q0=new Ct,_i=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=vc.subVectors(n,t).cross(j0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(vc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Q0.getNormalMatrix(e),s=this.coplanarPoint(vc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fs=new Qn,go=new I,Sa=class{constructor(e=new _i,t=new _i,n=new _i,s=new _i,r=new _i,a=new _i){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],M=s[13],_=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,m-f,y-p).normalize(),n[1].setComponents(l+r,d+c,m+f,y+p).normalize(),n[2].setComponents(l+a,d+h,m+g,y+M).normalize(),n[3].setComponents(l-a,d-h,m-g,y-M).normalize(),n[4].setComponents(l-o,d-u,m-x,y-_).normalize(),t===Wi)n[5].setComponents(l+o,d+u,m+x,y+_).normalize();else if(t===Bo)n[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){return Fs.center.set(0,0,0),Fs.radius=.7071067811865476,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(go.x=s.normal.x>0?e.max.x:e.min.x,go.y=s.normal.y>0?e.max.y:e.min.y,go.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function wp(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function eg(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ci=class i extends Kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let M=p*d-a;for(let _=0;_<c;_++){let y=_*u-r;g.push(y,-M,0),x.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let _=M+c*p,y=M+c*(p+1),D=M+1+c*(p+1),T=M+1+c*p;f.push(_,y,T),f.push(y,D,T)}this.setIndex(f),this.setAttribute("position",new kt(g,3)),this.setAttribute("normal",new kt(x,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},tg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ng=`#ifdef USE_ALPHAHASH
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
#endif`,ig=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ag=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,og=`#ifdef USE_AOMAP
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
#endif`,lg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cg=`#ifdef USE_BATCHING
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
#endif`,hg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ug=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pg=`#ifdef USE_IRIDESCENCE
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
#endif`,mg=`#ifdef USE_BUMPMAP
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
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Eg=`#define PI 3.141592653589793
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
} // validated`,wg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ag=`vec3 transformedNormal = objectNormal;
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
#endif`,Tg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ig="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lg=`
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
}`,Ng=`#ifdef USE_ENVMAP
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
#endif`,Dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ug=`#ifdef USE_ENVMAP
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
#endif`,kg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fg=`#ifdef USE_ENVMAP
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
#endif`,Og=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vg=`#ifdef USE_GRADIENTMAP
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
}`,Gg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yg=`uniform bool receiveShadow;
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
#endif`,$g=`#ifdef USE_ENVMAP
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
#endif`,qg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jg=`PhysicalMaterial material;
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
#endif`,Qg=`struct PhysicalMaterial {
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
}`,e1=`
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
#endif`,t1=`#if defined( RE_IndirectDiffuse )
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
#endif`,n1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,o1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,h1=`#if defined( USE_POINTS_UV )
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
#endif`,u1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g1=`#ifdef USE_MORPHTARGETS
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
#endif`,x1=`#ifdef USE_MORPHTARGETS
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
vec3 nonPerturbedNormal = normal;`,y1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,v1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S1=`#ifdef USE_NORMALMAP
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
#endif`,E1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,P1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,z1=`float getShadowMask() {
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
}`,B1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H1=`#ifdef USE_SKINNING
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
#endif`,V1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G1=`#ifdef USE_SKINNING
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
#endif`,W1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,q1=`#ifdef USE_TRANSMISSION
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
#endif`,K1=`#ifdef USE_TRANSMISSION
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
#endif`,Z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tx=`uniform sampler2D t2D;
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`#include <common>
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
}`,ox=`#if DEPTH_PACKING == 3200
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
}`,lx=`#define DISTANCE
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
}`,cx=`#define DISTANCE
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
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`uniform float scale;
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
}`,fx=`uniform vec3 diffuse;
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
}`,px=`#include <common>
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
}`,mx=`uniform vec3 diffuse;
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
}`,gx=`#define LAMBERT
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
}`,xx=`#define LAMBERT
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
}`,yx=`#define MATCAP
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
}`,vx=`#define NORMAL
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
}`,bx=`#define NORMAL
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
}`,Mx=`#define PHONG
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
}`,Sx=`#define PHONG
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
}`,Ex=`#define STANDARD
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
}`,wx=`#define STANDARD
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
}`,Ax=`#define TOON
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
}`,Tx=`#define TOON
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
}`,Rx=`uniform float size;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Px=`#include <common>
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
}`,Ix=`uniform vec3 color;
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
}`,Lx=`uniform float rotation;
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
}`,Nx=`uniform vec3 diffuse;
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
}`,Rt={alphahash_fragment:tg,alphahash_pars_fragment:ng,alphamap_fragment:ig,alphamap_pars_fragment:sg,alphatest_fragment:rg,alphatest_pars_fragment:ag,aomap_fragment:og,aomap_pars_fragment:lg,batching_pars_vertex:cg,batching_vertex:hg,begin_vertex:ug,beginnormal_vertex:dg,bsdfs:fg,iridescence_fragment:pg,bumpmap_pars_fragment:mg,clipping_planes_fragment:gg,clipping_planes_pars_fragment:xg,clipping_planes_pars_vertex:_g,clipping_planes_vertex:yg,color_fragment:vg,color_pars_fragment:bg,color_pars_vertex:Mg,color_vertex:Sg,common:Eg,cube_uv_reflection_fragment:wg,defaultnormal_vertex:Ag,displacementmap_pars_vertex:Tg,displacementmap_vertex:Rg,emissivemap_fragment:Cg,emissivemap_pars_fragment:Pg,colorspace_fragment:Ig,colorspace_pars_fragment:Lg,envmap_fragment:Ng,envmap_common_pars_fragment:Dg,envmap_pars_fragment:Ug,envmap_pars_vertex:kg,envmap_physical_pars_fragment:$g,envmap_vertex:Fg,fog_vertex:Og,fog_pars_vertex:zg,fog_fragment:Bg,fog_pars_fragment:Hg,gradientmap_pars_fragment:Vg,lightmap_pars_fragment:Gg,lights_lambert_fragment:Wg,lights_lambert_pars_fragment:Xg,lights_pars_begin:Yg,lights_toon_fragment:qg,lights_toon_pars_fragment:Kg,lights_phong_fragment:Zg,lights_phong_pars_fragment:Jg,lights_physical_fragment:jg,lights_physical_pars_fragment:Qg,lights_fragment_begin:e1,lights_fragment_maps:t1,lights_fragment_end:n1,logdepthbuf_fragment:i1,logdepthbuf_pars_fragment:s1,logdepthbuf_pars_vertex:r1,logdepthbuf_vertex:a1,map_fragment:o1,map_pars_fragment:l1,map_particle_fragment:c1,map_particle_pars_fragment:h1,metalnessmap_fragment:u1,metalnessmap_pars_fragment:d1,morphinstance_vertex:f1,morphcolor_vertex:p1,morphnormal_vertex:m1,morphtarget_pars_vertex:g1,morphtarget_vertex:x1,normal_fragment_begin:_1,normal_fragment_maps:y1,normal_pars_fragment:v1,normal_pars_vertex:b1,normal_vertex:M1,normalmap_pars_fragment:S1,clearcoat_normal_fragment_begin:E1,clearcoat_normal_fragment_maps:w1,clearcoat_pars_fragment:A1,iridescence_pars_fragment:T1,opaque_fragment:R1,packing:C1,premultiplied_alpha_fragment:P1,project_vertex:I1,dithering_fragment:L1,dithering_pars_fragment:N1,roughnessmap_fragment:D1,roughnessmap_pars_fragment:U1,shadowmap_pars_fragment:k1,shadowmap_pars_vertex:F1,shadowmap_vertex:O1,shadowmask_pars_fragment:z1,skinbase_vertex:B1,skinning_pars_vertex:H1,skinning_vertex:V1,skinnormal_vertex:G1,specularmap_fragment:W1,specularmap_pars_fragment:X1,tonemapping_fragment:Y1,tonemapping_pars_fragment:$1,transmission_fragment:q1,transmission_pars_fragment:K1,uv_pars_fragment:Z1,uv_pars_vertex:J1,uv_vertex:j1,worldpos_vertex:Q1,background_vert:ex,background_frag:tx,backgroundCube_vert:nx,backgroundCube_frag:ix,cube_vert:sx,cube_frag:rx,depth_vert:ax,depth_frag:ox,distanceRGBA_vert:lx,distanceRGBA_frag:cx,equirect_vert:hx,equirect_frag:ux,linedashed_vert:dx,linedashed_frag:fx,meshbasic_vert:px,meshbasic_frag:mx,meshlambert_vert:gx,meshlambert_frag:xx,meshmatcap_vert:_x,meshmatcap_frag:yx,meshnormal_vert:vx,meshnormal_frag:bx,meshphong_vert:Mx,meshphong_frag:Sx,meshphysical_vert:Ex,meshphysical_frag:wx,meshtoon_vert:Ax,meshtoon_frag:Tx,points_vert:Rx,points_frag:Cx,shadow_vert:Px,shadow_frag:Ix,sprite_vert:Lx,sprite_frag:Nx},Ne={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ct}},envmap:{envMap:{value:null},envMapRotation:{value:new Ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ct},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}}},wi={basic:{uniforms:Hn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:Hn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new nt(0)}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:Hn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:Hn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:Hn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new nt(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:Hn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:Hn([Ne.points,Ne.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:Hn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:Hn([Ne.common,Ne.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:Hn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:Hn([Ne.sprite,Ne.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ct}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distanceRGBA:{uniforms:Hn([Ne.common,Ne.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distanceRGBA_vert,fragmentShader:Rt.distanceRGBA_frag},shadow:{uniforms:Hn([Ne.lights,Ne.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};wi.physical={uniforms:Hn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ct},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ct},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ct},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ct},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ct},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ct}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};var xo={r:0,b:0,g:0},Os=new Ri,Dx=new yt;function Ux(i,e,t,n,s,r,a){let o=new nt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?t:e).get(_)),_}function x(M){let _=!1,y=g(M);y===null?p(o,l):y&&y.isColor&&(p(y,1),_=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,_){let y=g(_);y&&(y.isCubeTexture||y.mapping===_l)?(h===void 0&&(h=new we(new Jt(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:kr(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Os.copy(_.backgroundRotation),Os.x*=-1,Os.y*=-1,Os.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(Os)),h.material.toneMapped=Ht.getTransfer(y.colorSpace)!==on,(u!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new we(new Ci(2,2),new ti({name:"BackgroundMaterial",uniforms:kr(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Ht.getTransfer(y.colorSpace)!==on,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,_){M.getRGB(xo,Ep(i)),n.buffers.color.setClear(xo.r,xo.g,xo.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(M,_=1){o.set(M),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:x,addToRenderList:m}}function kx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(v,w,O,V,$){let se=!1,F=u(V,O,w);r!==F&&(r=F,c(r.object)),se=f(v,V,O,$),se&&g(v,V,O,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(se||a)&&(a=!1,y(v,w,O,V),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,w,O){let V=O.wireframe===!0,$=n[v.id];$===void 0&&($={},n[v.id]=$);let se=$[w.id];se===void 0&&(se={},$[w.id]=se);let F=se[V];return F===void 0&&(F=d(l()),se[V]=F),F}function d(v){let w=[],O=[],V=[];for(let $=0;$<t;$++)w[$]=0,O[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:V,object:v,attributes:{},index:null}}function f(v,w,O,V){let $=r.attributes,se=w.attributes,F=0,oe=O.getAttributes();for(let q in oe)if(oe[q].location>=0){let Ie=$[q],be=se[q];if(be===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(be=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(be=v.instanceColor)),Ie===void 0||Ie.attribute!==be||be&&Ie.data!==be.data)return!0;F++}return r.attributesNum!==F||r.index!==V}function g(v,w,O,V){let $={},se=w.attributes,F=0,oe=O.getAttributes();for(let q in oe)if(oe[q].location>=0){let Ie=se[q];Ie===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(Ie=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(Ie=v.instanceColor));let be={};be.attribute=Ie,Ie&&Ie.data&&(be.data=Ie.data),$[q]=be,F++}r.attributes=$,r.attributesNum=F,r.index=V}function x(){let v=r.newAttributes;for(let w=0,O=v.length;w<O;w++)v[w]=0}function m(v){p(v,0)}function p(v,w){let O=r.newAttributes,V=r.enabledAttributes,$=r.attributeDivisors;O[v]=1,V[v]===0&&(i.enableVertexAttribArray(v),V[v]=1),$[v]!==w&&(i.vertexAttribDivisor(v,w),$[v]=w)}function M(){let v=r.newAttributes,w=r.enabledAttributes;for(let O=0,V=w.length;O<V;O++)w[O]!==v[O]&&(i.disableVertexAttribArray(O),w[O]=0)}function _(v,w,O,V,$,se,F){F===!0?i.vertexAttribIPointer(v,w,O,$,se):i.vertexAttribPointer(v,w,O,V,$,se)}function y(v,w,O,V){x();let $=V.attributes,se=O.getAttributes(),F=w.defaultAttributeValues;for(let oe in se){let q=se[oe];if(q.location>=0){let ce=$[oe];if(ce===void 0&&(oe==="instanceMatrix"&&v.instanceMatrix&&(ce=v.instanceMatrix),oe==="instanceColor"&&v.instanceColor&&(ce=v.instanceColor)),ce!==void 0){let Ie=ce.normalized,be=ce.itemSize,St=e.get(ce);if(St===void 0)continue;let zt=St.buffer,ie=St.type,de=St.bytesPerElement,He=ie===i.INT||ie===i.UNSIGNED_INT||ce.gpuType===iu;if(ce.isInterleavedBufferAttribute){let Fe=ce.data,gt=Fe.stride,at=ce.offset;if(Fe.isInstancedInterleavedBuffer){for(let Et=0;Et<q.locationSize;Et++)p(q.location+Et,Fe.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let Et=0;Et<q.locationSize;Et++)m(q.location+Et);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let Et=0;Et<q.locationSize;Et++)_(q.location+Et,be/q.locationSize,ie,Ie,gt*de,(at+be/q.locationSize*Et)*de,He)}else{if(ce.isInstancedBufferAttribute){for(let Fe=0;Fe<q.locationSize;Fe++)p(q.location+Fe,ce.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Fe=0;Fe<q.locationSize;Fe++)m(q.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let Fe=0;Fe<q.locationSize;Fe++)_(q.location+Fe,be/q.locationSize,ie,Ie,be*de,be/q.locationSize*Fe*de,He)}}else if(F!==void 0){let Ie=F[oe];if(Ie!==void 0)switch(Ie.length){case 2:i.vertexAttrib2fv(q.location,Ie);break;case 3:i.vertexAttrib3fv(q.location,Ie);break;case 4:i.vertexAttrib4fv(q.location,Ie);break;default:i.vertexAttrib1fv(q.location,Ie)}}}}M()}function D(){k();for(let v in n){let w=n[v];for(let O in w){let V=w[O];for(let $ in V)h(V[$].object),delete V[$];delete w[O]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;let w=n[v.id];for(let O in w){let V=w[O];for(let $ in V)h(V[$].object),delete V[$];delete w[O]}delete n[v.id]}function C(v){for(let w in n){let O=n[w];if(O[v.id]===void 0)continue;let V=O[v.id];for(let $ in V)h(V[$].object),delete V[$];delete O[v.id]}}function k(){Z(),a=!0,r!==s&&(r=s,c(r.object))}function Z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:k,resetDefaultState:Z,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function Fx(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x];for(let x=0;x<d.length;x++)t.update(g,n,d[x])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ox(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Yn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let k=C===Na&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Yi&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==vi&&!k)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){let C=e.get("EXT_clip_control");C.clipControlEXT(C.LOWER_LEFT_EXT,C.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:D,maxSamples:T}}function zx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new _i,o=new Ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,_=M*4,y=p.clippingState||null;l.value=y,y=h(g,d,_,f);for(let D=0;D!==_;++D)y[D]=t[D];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=f;_!==x;++_,y+=4)a.copy(u[_]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Bx(i){let e=new WeakMap;function t(a,o){return o===Xc?a.mapping=Rr:o===Yc&&(a.mapping=Cr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Xc||o===Yc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Eh(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Fr=class extends Yo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Mr=4,xf=[.125,.215,.35,.446,.526,.582],Vs=20,bc=new Fr,_f=new nt,Mc=null,Sc=0,Ec=0,wc=!1,Bs=(1+Math.sqrt(5))/2,yr=1/Bs,yf=[new I(-Bs,yr,0),new I(Bs,yr,0),new I(-yr,0,Bs),new I(yr,0,Bs),new I(0,Bs,-yr),new I(0,Bs,yr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],qo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Mc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mc,Sc,Ec),this._renderer.xr.enabled=wc,e.scissorTest=!1,_o(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rr||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Na,format:Yn,colorSpace:Rn,depthBuffer:!1},s=vf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hx(r)),this._blurMaterial=Vx(r,e,t)}return s}_compileMaterial(e){let t=new we(this._lodPlanes[0],e);this._renderer.compile(t,bc)}_sceneToCubeUV(e,t,n,s){let o=new fn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(_f),h.toneMapping=_s,h.autoClear=!1;let f=new Ft({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),g=new we(new Jt,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(_f),x=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let _=this._cubeSize;_o(s,M*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Rr||e.mapping===Cr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new we(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;_o(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,bc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=yf[(s-r-1)%yf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new we(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Vs-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Vs;m>Vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vs}`);let p=[],M=0;for(let C=0;C<Vs;++C){let k=C/x,Z=Math.exp(-k*k/2);p.push(Z),C===0?M+=Z:C<m&&(M+=2*Z)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let y=this._sizeLods[s],D=3*y*(s>_-Mr?s-_+Mr:0),T=4*(this._cubeSize-y);_o(t,D,T,3*y,2*y),l.setRenderTarget(t),l.render(u,bc)}};function Hx(i){let e=[],t=[],n=[],s=i,r=i-Mr+1+xf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Mr?l=xf[a-i+Mr-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*f),_=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let T=0;T<f;T++){let C=T%3*2/3-1,k=T>2?0:-1,Z=[C,k,0,C+2/3,k,0,C+2/3,k+1,0,C,k,0,C+2/3,k+1,0,C,k+1,0];M.set(Z,x*g*T),_.set(d,m*g*T);let v=[T,T,T,T,T,T];y.set(v,p*g*T)}let D=new Kt;D.setAttribute("position",new Pt(M,x)),D.setAttribute("uv",new Pt(_,m)),D.setAttribute("faceIndex",new Pt(y,p)),e.push(D),s>Mr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vf(i,e,t){let n=new $i(i,e,t);return n.texture.mapping=_l,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _o(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Vx(i,e,t){let n=new Float32Array(Vs),s=new I(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:du(),fragmentShader:`

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
		`,blending:xs,depthTest:!1,depthWrite:!1})}function bf(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:xs,depthTest:!1,depthWrite:!1})}function Mf(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xs,depthTest:!1,depthWrite:!1})}function du(){return`

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
	`}function Gx(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Xc||l===Yc,h=l===Rr||l===Cr;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new qo(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new qo(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Wx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ko("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Xx(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let M=f.array;x=f.version;for(let _=0,y=M.length;_<y;_+=3){let D=M[_+0],T=M[_+1],C=M[_+2];d.push(D,T,T,C,C,D)}}else if(g!==void 0){let M=g.array;x=g.version;for(let _=0,y=M.length/3-1;_<y;_+=3){let D=_+0,T=_+1,C=_+2;d.push(D,T,T,C,C,D)}}else return;let m=new(Mp(d)?Xo:Wo)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Yx(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M];for(let M=0;M<x.length;M++)t.update(p,n,x[M])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function $x(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function qx(i,e,t){let n=new WeakMap,s=new Wt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let Z=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",Z)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let y=o.attributes.position.count*_,D=1;y>e.maxTextureSize&&(D=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*D*4*u),C=new Vo(T,y,D,u);C.type=vi,C.needsUpdate=!0;let k=_*4;for(let v=0;v<u;v++){let w=m[v],O=p[v],V=M[v],$=y*D*4*v;for(let se=0;se<w.count;se++){let F=se*k;f===!0&&(s.fromBufferAttribute(w,se),T[$+F+0]=s.x,T[$+F+1]=s.y,T[$+F+2]=s.z,T[$+F+3]=0),g===!0&&(s.fromBufferAttribute(O,se),T[$+F+4]=s.x,T[$+F+5]=s.y,T[$+F+6]=s.z,T[$+F+7]=0),x===!0&&(s.fromBufferAttribute(V,se),T[$+F+8]=s.x,T[$+F+9]=s.y,T[$+F+10]=s.z,T[$+F+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new ke(y,D)},n.set(o,d),o.addEventListener("dispose",Z)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Kx(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ko=class extends Tn{constructor(e,t,n,s,r,a,o,l,c,h=Sr){if(h!==Sr&&h!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Sr&&(n=Ws),n===void 0&&h===Ir&&(n=Pr),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:kn,this.minFilter=l!==void 0?l:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ap=new Tn,Sf=new Ko(1,1),Tp=new Vo,Rp=new Mh,Cp=new $o,Ef=[],wf=[],Af=new Float32Array(16),Tf=new Float32Array(9),Rf=new Float32Array(4);function Yr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ef[s];if(r===void 0&&(r=new Float32Array(s),Ef[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function yn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ml(i,e){let t=wf[e];t===void 0&&(t=new Int32Array(e),wf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;i.uniform2fv(this.addr,e),vn(t,e)}}function jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yn(t,e))return;i.uniform3fv(this.addr,e),vn(t,e)}}function Qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;i.uniform4fv(this.addr,e),vn(t,e)}}function e_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(yn(t,n))return;Rf.set(n),i.uniformMatrix2fv(this.addr,!1,Rf),vn(t,n)}}function t_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(yn(t,n))return;Tf.set(n),i.uniformMatrix3fv(this.addr,!1,Tf),vn(t,n)}}function n_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(yn(t,n))return;Af.set(n),i.uniformMatrix4fv(this.addr,!1,Af),vn(t,n)}}function i_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function s_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;i.uniform2iv(this.addr,e),vn(t,e)}}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;i.uniform3iv(this.addr,e),vn(t,e)}}function a_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;i.uniform4iv(this.addr,e),vn(t,e)}}function o_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function l_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;i.uniform2uiv(this.addr,e),vn(t,e)}}function c_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;i.uniform3uiv(this.addr,e),vn(t,e)}}function h_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;i.uniform4uiv(this.addr,e),vn(t,e)}}function u_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sf.compareFunction=bp,r=Sf):r=Ap,t.setTexture2D(e||r,s)}function d_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Rp,s)}function f_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Cp,s)}function p_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Tp,s)}function m_(i){switch(i){case 5126:return Zx;case 35664:return Jx;case 35665:return jx;case 35666:return Qx;case 35674:return e_;case 35675:return t_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return s_;case 35668:case 35672:return r_;case 35669:case 35673:return a_;case 5125:return o_;case 36294:return l_;case 36295:return c_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return p_}}function g_(i,e){i.uniform1fv(this.addr,e)}function x_(i,e){let t=Yr(e,this.size,2);i.uniform2fv(this.addr,t)}function __(i,e){let t=Yr(e,this.size,3);i.uniform3fv(this.addr,t)}function y_(i,e){let t=Yr(e,this.size,4);i.uniform4fv(this.addr,t)}function v_(i,e){let t=Yr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function b_(i,e){let t=Yr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function M_(i,e){let t=Yr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function S_(i,e){i.uniform1iv(this.addr,e)}function E_(i,e){i.uniform2iv(this.addr,e)}function w_(i,e){i.uniform3iv(this.addr,e)}function A_(i,e){i.uniform4iv(this.addr,e)}function T_(i,e){i.uniform1uiv(this.addr,e)}function R_(i,e){i.uniform2uiv(this.addr,e)}function C_(i,e){i.uniform3uiv(this.addr,e)}function P_(i,e){i.uniform4uiv(this.addr,e)}function I_(i,e,t){let n=this.cache,s=e.length,r=Ml(t,s);yn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Ap,r[a])}function L_(i,e,t){let n=this.cache,s=e.length,r=Ml(t,s);yn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Rp,r[a])}function N_(i,e,t){let n=this.cache,s=e.length,r=Ml(t,s);yn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Cp,r[a])}function D_(i,e,t){let n=this.cache,s=e.length,r=Ml(t,s);yn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Tp,r[a])}function U_(i){switch(i){case 5126:return g_;case 35664:return x_;case 35665:return __;case 35666:return y_;case 35674:return v_;case 35675:return b_;case 35676:return M_;case 5124:case 35670:return S_;case 35667:case 35671:return E_;case 35668:case 35672:return w_;case 35669:case 35673:return A_;case 5125:return T_;case 36294:return R_;case 36295:return C_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return N_;case 36289:case 36303:case 36311:case 36292:return D_}}var wh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=m_(t.type)}},Ah=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=U_(t.type)}},Th=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ac=/(\w+)(\])?(\[|\.)?/g;function Cf(i,e){i.seq.push(e),i.map[e.id]=e}function k_(i,e,t){let n=i.name,s=n.length;for(Ac.lastIndex=0;;){let r=Ac.exec(n),a=Ac.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Cf(t,c===void 0?new wh(o,i,e):new Ah(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Th(o),Cf(t,u)),t=u}}}var Ar=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);k_(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Pf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var F_=37297,O_=0;function z_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function B_(i){let e=Ht.getPrimaries(Ht.workingColorSpace),t=Ht.getPrimaries(i),n;switch(e===t?n="":e===zo&&t===Oo?n="LinearDisplayP3ToLinearSRGB":e===Oo&&t===zo&&(n="LinearSRGBToLinearDisplayP3"),i){case Rn:case vl:return[n,"LinearTransferOETF"];case gn:case hu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function If(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+z_(i.getShaderSource(e),a)}else return s}function H_(i,e){let t=B_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function V_(i,e){let t;switch(e){case Zm:t="Linear";break;case Jm:t="Reinhard";break;case jm:t="Cineon";break;case Qm:t="ACESFilmic";break;case t0:t="AgX";break;case n0:t="Neutral";break;case e0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var yo=new I;function G_(){Ht.getLuminanceCoefficients(yo);let i=yo.x.toFixed(4),e=yo.y.toFixed(4),t=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function X_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Y_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function pa(i){return i!==""}function Lf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var $_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(i){return i.replace($_,K_)}var q_=new Map;function K_(i,e){let t=Rt[e];if(t===void 0){let n=q_.get(e);if(n!==void 0)t=Rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rh(t)}var Z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Df(i){return i.replace(Z_,J_)}function J_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function j_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===op?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function Q_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rr:case Cr:e="ENVMAP_TYPE_CUBE";break;case _l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ey(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Cr&&(e="ENVMAP_MODE_REFRACTION"),e}function ty(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lp:e="ENVMAP_BLENDING_MULTIPLY";break;case qm:e="ENVMAP_BLENDING_MIX";break;case Km:e="ENVMAP_BLENDING_ADD";break}return e}function ny(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function iy(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=j_(t),c=Q_(t),h=ey(t),u=ty(t),d=ny(t),f=W_(t),g=X_(r),x=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pa).join(`
`),p.length>0&&(p+=`
`)):(m=[Uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),p=[Uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_s?"#define TONE_MAPPING":"",t.toneMapping!==_s?Rt.tonemapping_pars_fragment:"",t.toneMapping!==_s?V_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,H_("linearToOutputTexel",t.outputColorSpace),G_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pa).join(`
`)),a=Rh(a),a=Lf(a,t),a=Nf(a,t),o=Rh(o),o=Lf(o,t),o=Nf(o,t),a=Df(a),o=Df(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Jd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=M+m+a,y=M+p+o,D=Pf(s,s.VERTEX_SHADER,_),T=Pf(s,s.FRAGMENT_SHADER,y);s.attachShader(x,D),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(w){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(x).trim(),V=s.getShaderInfoLog(D).trim(),$=s.getShaderInfoLog(T).trim(),se=!0,F=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,D,T);else{let oe=If(s,D,"vertex"),q=If(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+O+`
`+oe+`
`+q)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(V===""||$==="")&&(F=!1);F&&(w.diagnostics={runnable:se,programLog:O,vertexShader:{log:V,prefix:m},fragmentShader:{log:$,prefix:p}})}s.deleteShader(D),s.deleteShader(T),k=new Ar(s,x),Z=Y_(s,x)}let k;this.getUniforms=function(){return k===void 0&&C(this),k};let Z;this.getAttributes=function(){return Z===void 0&&C(this),Z};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,F_)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=O_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=T,this}var sy=0,Ch=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ph(e),t.set(e,n)),n}},Ph=class{constructor(e){this.id=sy++,this.code=e,this.usedTimes=0}};function ry(i,e,t,n,s,r,a){let o=new Go,l=new Ch,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,w,O,V,$){let se=V.fog,F=$.geometry,oe=v.isMeshStandardMaterial?V.environment:null,q=(v.isMeshStandardMaterial?t:e).get(v.envMap||oe),ce=q&&q.mapping===_l?q.image.height:null,Ie=x[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let be=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,St=be!==void 0?be.length:0,zt=0;F.morphAttributes.position!==void 0&&(zt=1),F.morphAttributes.normal!==void 0&&(zt=2),F.morphAttributes.color!==void 0&&(zt=3);let ie,de,He,Fe;if(Ie){let me=wi[Ie];ie=me.vertexShader,de=me.fragmentShader}else ie=v.vertexShader,de=v.fragmentShader,l.update(v),He=l.getVertexShaderID(v),Fe=l.getFragmentShaderID(v);let gt=i.getRenderTarget(),at=$.isInstancedMesh===!0,Et=$.isBatchedMesh===!0,Ut=!!v.map,xt=!!v.matcap,N=!!q,rn=!!v.aoMap,wt=!!v.lightMap,Qe=!!v.bumpMap,ot=!!v.normalMap,vt=!!v.displacementMap,fe=!!v.emissiveMap,P=!!v.metalnessMap,E=!!v.roughnessMap,X=v.anisotropy>0,re=v.clearcoat>0,j=v.dispersion>0,ne=v.iridescence>0,Xe=v.sheen>0,ge=v.transmission>0,pe=X&&!!v.anisotropyMap,Tt=re&&!!v.clearcoatMap,ue=re&&!!v.clearcoatNormalMap,Re=re&&!!v.clearcoatRoughnessMap,qe=ne&&!!v.iridescenceMap,je=ne&&!!v.iridescenceThicknessMap,Le=Xe&&!!v.sheenColorMap,lt=Xe&&!!v.sheenRoughnessMap,Ze=!!v.specularMap,Vt=!!v.specularColorMap,z=!!v.specularIntensityMap,Ce=ge&&!!v.transmissionMap,Q=ge&&!!v.thicknessMap,ae=!!v.gradientMap,Me=!!v.alphaMap,Pe=v.alphaTest>0,Oe=!!v.alphaHash,an=!!v.extensions,dn=_s;v.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(dn=i.toneMapping);let U={shaderID:Ie,shaderType:v.type,shaderName:v.name,vertexShader:ie,fragmentShader:de,defines:v.defines,customVertexShaderID:He,customFragmentShaderID:Fe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Et,batchingColor:Et&&$._colorsTexture!==null,instancing:at,instancingColor:at&&$.instanceColor!==null,instancingMorph:at&&$.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:gt===null?i.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Rn,alphaToCoverage:!!v.alphaToCoverage,map:Ut,matcap:xt,envMap:N,envMapMode:N&&q.mapping,envMapCubeUVHeight:ce,aoMap:rn,lightMap:wt,bumpMap:Qe,normalMap:ot,displacementMap:f&&vt,emissiveMap:fe,normalMapObjectSpace:ot&&v.normalMapType===o0,normalMapTangentSpace:ot&&v.normalMapType===vp,metalnessMap:P,roughnessMap:E,anisotropy:X,anisotropyMap:pe,clearcoat:re,clearcoatMap:Tt,clearcoatNormalMap:ue,clearcoatRoughnessMap:Re,dispersion:j,iridescence:ne,iridescenceMap:qe,iridescenceThicknessMap:je,sheen:Xe,sheenColorMap:Le,sheenRoughnessMap:lt,specularMap:Ze,specularColorMap:Vt,specularIntensityMap:z,transmission:ge,transmissionMap:Ce,thicknessMap:Q,gradientMap:ae,opaque:v.transparent===!1&&v.blending===Xi&&v.alphaToCoverage===!1,alphaMap:Me,alphaTest:Pe,alphaHash:Oe,combine:v.combine,mapUv:Ut&&m(v.map.channel),aoMapUv:rn&&m(v.aoMap.channel),lightMapUv:wt&&m(v.lightMap.channel),bumpMapUv:Qe&&m(v.bumpMap.channel),normalMapUv:ot&&m(v.normalMap.channel),displacementMapUv:vt&&m(v.displacementMap.channel),emissiveMapUv:fe&&m(v.emissiveMap.channel),metalnessMapUv:P&&m(v.metalnessMap.channel),roughnessMapUv:E&&m(v.roughnessMap.channel),anisotropyMapUv:pe&&m(v.anisotropyMap.channel),clearcoatMapUv:Tt&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:je&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:lt&&m(v.sheenRoughnessMap.channel),specularMapUv:Ze&&m(v.specularMap.channel),specularColorMapUv:Vt&&m(v.specularColorMap.channel),specularIntensityMapUv:z&&m(v.specularIntensityMap.channel),transmissionMapUv:Ce&&m(v.transmissionMap.channel),thicknessMapUv:Q&&m(v.thicknessMap.channel),alphaMapUv:Me&&m(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ot||X),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!F.attributes.uv&&(Ut||Me),fog:!!se,useFog:v.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:$.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:zt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:dn,decodeVideoTexture:Ut&&v.map.isVideoTexture===!0&&Ht.getTransfer(v.map.colorSpace)===on,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ln,flipSided:v.side===$n,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:an&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(an&&v.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return U.vertexUv1s=c.has(1),U.vertexUv2s=c.has(2),U.vertexUv3s=c.has(3),c.clear(),U}function M(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let O in v.defines)w.push(O),w.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(_(w,v),y(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function _(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function y(v,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),v.push(o.mask)}function D(v){let w=x[v.type],O;if(w){let V=wi[w];O=K0.clone(V.uniforms)}else O=v.uniforms;return O}function T(v,w){let O;for(let V=0,$=h.length;V<$;V++){let se=h[V];if(se.cacheKey===w){O=se,++O.usedTimes;break}}return O===void 0&&(O=new iy(i,w,v,r),h.push(O)),O}function C(v){if(--v.usedTimes===0){let w=h.indexOf(v);h[w]=h[h.length-1],h.pop(),v.destroy()}}function k(v){l.remove(v)}function Z(){l.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:D,acquireProgram:T,releaseProgram:C,releaseShaderCache:k,programs:h,dispose:Z}}function ay(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function oy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function kf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ff(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,g,x,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||oy),n.length>1&&n.sort(d||kf),s.length>1&&s.sort(d||kf)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function ly(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Ff,i.set(n,[a])):s>=r.length?(a=new Ff,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function cy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new nt};break;case"SpotLight":t={position:new I,direction:new I,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function hy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var uy=0;function dy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function fy(i){let e=new cy,t=hy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new yt,a=new yt;function o(c){let h=0,u=0,d=0;for(let Z=0;Z<9;Z++)n.probe[Z].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,M=0,_=0,y=0,D=0,T=0,C=0;c.sort(dy);for(let Z=0,v=c.length;Z<v;Z++){let w=c[Z],O=w.color,V=w.intensity,$=w.distance,se=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=O.r*V,u+=O.g*V,d+=O.b*V;else if(w.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(w.sh.coefficients[F],V);C++}else if(w.isDirectionalLight){let F=e.get(w);if(F.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let oe=w.shadow,q=t.get(w);q.shadowIntensity=oe.intensity,q.shadowBias=oe.bias,q.shadowNormalBias=oe.normalBias,q.shadowRadius=oe.radius,q.shadowMapSize=oe.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=se,n.directionalShadowMatrix[f]=w.shadow.matrix,M++}n.directional[f]=F,f++}else if(w.isSpotLight){let F=e.get(w);F.position.setFromMatrixPosition(w.matrixWorld),F.color.copy(O).multiplyScalar(V),F.distance=$,F.coneCos=Math.cos(w.angle),F.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),F.decay=w.decay,n.spot[x]=F;let oe=w.shadow;if(w.map&&(n.spotLightMap[D]=w.map,D++,oe.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[x]=oe.matrix,w.castShadow){let q=t.get(w);q.shadowIntensity=oe.intensity,q.shadowBias=oe.bias,q.shadowNormalBias=oe.normalBias,q.shadowRadius=oe.radius,q.shadowMapSize=oe.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=se,y++}x++}else if(w.isRectAreaLight){let F=e.get(w);F.color.copy(O).multiplyScalar(V),F.halfWidth.set(w.width*.5,0,0),F.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=F,m++}else if(w.isPointLight){let F=e.get(w);if(F.color.copy(w.color).multiplyScalar(w.intensity),F.distance=w.distance,F.decay=w.decay,w.castShadow){let oe=w.shadow,q=t.get(w);q.shadowIntensity=oe.intensity,q.shadowBias=oe.bias,q.shadowNormalBias=oe.normalBias,q.shadowRadius=oe.radius,q.shadowMapSize=oe.mapSize,q.shadowCameraNear=oe.camera.near,q.shadowCameraFar=oe.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=se,n.pointShadowMatrix[g]=w.shadow.matrix,_++}n.point[g]=F,g++}else if(w.isHemisphereLight){let F=e.get(w);F.skyColor.copy(w.color).multiplyScalar(V),F.groundColor.copy(w.groundColor).multiplyScalar(V),n.hemi[p]=F,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let k=n.hash;(k.directionalLength!==f||k.pointLength!==g||k.spotLength!==x||k.rectAreaLength!==m||k.hemiLength!==p||k.numDirectionalShadows!==M||k.numPointShadows!==_||k.numSpotShadows!==y||k.numSpotMaps!==D||k.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+D-T,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,k.directionalLength=f,k.pointLength=g,k.spotLength=x,k.rectAreaLength=m,k.hemiLength=p,k.numDirectionalShadows=M,k.numPointShadows=_,k.numSpotShadows=y,k.numSpotMaps=D,k.numLightProbes=C,n.version=uy++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let _=c[p];if(_.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(_.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Of(i){let e=new fy(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function py(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Of(i),e.set(s,[o])):r>=a.length?(o=new Of(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ih=class extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=r0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Lh=class extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},my=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gy=`uniform sampler2D shadow_pass;
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
}`;function xy(i,e,t){let n=new Sa,s=new ke,r=new ke,a=new Wt,o=new Ih({depthPacking:a0}),l=new Lh,c={},h=t.maxTextureSize,u={[Ti]:$n,[$n]:Ti,[ln]:ln},d=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:my,fragmentShader:gy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Kt;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new we(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=op;let p=this.type;this.render=function(T,C,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let Z=i.getRenderTarget(),v=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),O=i.state;O.setBlending(xs),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let V=p!==Vi&&this.type===Vi,$=p===Vi&&this.type!==Vi;for(let se=0,F=T.length;se<F;se++){let oe=T[se],q=oe.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ce=q.getFrameExtents();if(s.multiply(ce),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,q.mapSize.y=r.y)),q.map===null||V===!0||$===!0){let be=this.type!==Vi?{minFilter:kn,magFilter:kn}:{};q.map!==null&&q.map.dispose(),q.map=new $i(s.x,s.y,be),q.map.texture.name=oe.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let Ie=q.getViewportCount();for(let be=0;be<Ie;be++){let St=q.getViewport(be);a.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),O.viewport(a),q.updateMatrices(oe,be),n=q.getFrustum(),y(C,k,q.camera,oe,this.type)}q.isPointLightShadow!==!0&&this.type===Vi&&M(q,k),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(Z,v,w)};function M(T,C){let k=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $i(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,k,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,k,f,x,null)}function _(T,C,k,Z){let v=null,w=k.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)v=w;else if(v=k.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let O=v.uuid,V=C.uuid,$=c[O];$===void 0&&($={},c[O]=$);let se=$[V];se===void 0&&(se=v.clone(),$[V]=se,C.addEventListener("dispose",D)),v=se}if(v.visible=C.visible,v.wireframe=C.wireframe,Z===Vi?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:u[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,k.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let O=i.properties.get(v);O.light=k}return v}function y(T,C,k,Z,v){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Vi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld);let V=e.update(T),$=T.material;if(Array.isArray($)){let se=V.groups;for(let F=0,oe=se.length;F<oe;F++){let q=se[F],ce=$[q.materialIndex];if(ce&&ce.visible){let Ie=_(T,ce,Z,v);T.onBeforeShadow(i,T,C,k,V,Ie,q),i.renderBufferDirect(k,null,V,Ie,T,q),T.onAfterShadow(i,T,C,k,V,Ie,q)}}}else if($.visible){let se=_(T,$,Z,v);T.onBeforeShadow(i,T,C,k,V,se,null),i.renderBufferDirect(k,null,V,se,T,null),T.onAfterShadow(i,T,C,k,V,se,null)}}let O=T.children;for(let V=0,$=O.length;V<$;V++)y(O[V],C,k,Z,v)}function D(T){T.target.removeEventListener("dispose",D);for(let k in c){let Z=c[k],v=T.target.uuid;v in Z&&(Z[v].dispose(),delete Z[v])}}}var _y={[Oc]:zc,[Bc]:Gc,[Hc]:Wc,[Tr]:Vc,[zc]:Oc,[Gc]:Bc,[Wc]:Hc,[Vc]:Tr};function yy(i){function e(){let z=!1,Ce=new Wt,Q=null,ae=new Wt(0,0,0,0);return{setMask:function(Me){Q!==Me&&!z&&(i.colorMask(Me,Me,Me,Me),Q=Me)},setLocked:function(Me){z=Me},setClear:function(Me,Pe,Oe,an,dn){dn===!0&&(Me*=an,Pe*=an,Oe*=an),Ce.set(Me,Pe,Oe,an),ae.equals(Ce)===!1&&(i.clearColor(Me,Pe,Oe,an),ae.copy(Ce))},reset:function(){z=!1,Q=null,ae.set(-1,0,0,0)}}}function t(){let z=!1,Ce=!1,Q=null,ae=null,Me=null;return{setReversed:function(Pe){Ce=Pe},setTest:function(Pe){Pe?He(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(Pe){Q!==Pe&&!z&&(i.depthMask(Pe),Q=Pe)},setFunc:function(Pe){if(Ce&&(Pe=_y[Pe]),ae!==Pe){switch(Pe){case Oc:i.depthFunc(i.NEVER);break;case zc:i.depthFunc(i.ALWAYS);break;case Bc:i.depthFunc(i.LESS);break;case Tr:i.depthFunc(i.LEQUAL);break;case Hc:i.depthFunc(i.EQUAL);break;case Vc:i.depthFunc(i.GEQUAL);break;case Gc:i.depthFunc(i.GREATER);break;case Wc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=Pe}},setLocked:function(Pe){z=Pe},setClear:function(Pe){Me!==Pe&&(i.clearDepth(Pe),Me=Pe)},reset:function(){z=!1,Q=null,ae=null,Me=null}}}function n(){let z=!1,Ce=null,Q=null,ae=null,Me=null,Pe=null,Oe=null,an=null,dn=null;return{setTest:function(U){z||(U?He(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(U){Ce!==U&&!z&&(i.stencilMask(U),Ce=U)},setFunc:function(U,me,dt){(Q!==U||ae!==me||Me!==dt)&&(i.stencilFunc(U,me,dt),Q=U,ae=me,Me=dt)},setOp:function(U,me,dt){(Pe!==U||Oe!==me||an!==dt)&&(i.stencilOp(U,me,dt),Pe=U,Oe=me,an=dt)},setLocked:function(U){z=U},setClear:function(U){dn!==U&&(i.clearStencil(U),dn=U)},reset:function(){z=!1,Ce=null,Q=null,ae=null,Me=null,Pe=null,Oe=null,an=null,dn=null}}}let s=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,g=!1,x=null,m=null,p=null,M=null,_=null,y=null,D=null,T=new nt(0,0,0),C=0,k=!1,Z=null,v=null,w=null,O=null,V=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),se=!1,F=0,oe=i.getParameter(i.VERSION);oe.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(oe)[1]),se=F>=1):oe.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),se=F>=2);let q=null,ce={},Ie=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),St=new Wt().fromArray(Ie),zt=new Wt().fromArray(be);function ie(z,Ce,Q,ae){let Me=new Uint8Array(4),Pe=i.createTexture();i.bindTexture(z,Pe),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<Q;Oe++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(Ce,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(Ce+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return Pe}let de={};de[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),de[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),de[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),He(i.DEPTH_TEST),r.setFunc(Tr),wt(!1),Qe(Gd),He(i.CULL_FACE),N(xs);function He(z){c[z]!==!0&&(i.enable(z),c[z]=!0)}function Fe(z){c[z]!==!1&&(i.disable(z),c[z]=!1)}function gt(z,Ce){return h[z]!==Ce?(i.bindFramebuffer(z,Ce),h[z]=Ce,z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ce),z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ce),!0):!1}function at(z,Ce){let Q=d,ae=!1;if(z){Q=u.get(Ce),Q===void 0&&(Q=[],u.set(Ce,Q));let Me=z.textures;if(Q.length!==Me.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Pe=0,Oe=Me.length;Pe<Oe;Pe++)Q[Pe]=i.COLOR_ATTACHMENT0+Pe;Q.length=Me.length,ae=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ae=!0);ae&&i.drawBuffers(Q)}function Et(z){return f!==z?(i.useProgram(z),f=z,!0):!1}let Ut={[Hs]:i.FUNC_ADD,[Im]:i.FUNC_SUBTRACT,[Lm]:i.FUNC_REVERSE_SUBTRACT};Ut[Nm]=i.MIN,Ut[Dm]=i.MAX;let xt={[Um]:i.ZERO,[km]:i.ONE,[Fm]:i.SRC_COLOR,[kc]:i.SRC_ALPHA,[Gm]:i.SRC_ALPHA_SATURATE,[Hm]:i.DST_COLOR,[zm]:i.DST_ALPHA,[Om]:i.ONE_MINUS_SRC_COLOR,[Fc]:i.ONE_MINUS_SRC_ALPHA,[Vm]:i.ONE_MINUS_DST_COLOR,[Bm]:i.ONE_MINUS_DST_ALPHA,[Wm]:i.CONSTANT_COLOR,[Xm]:i.ONE_MINUS_CONSTANT_COLOR,[Ym]:i.CONSTANT_ALPHA,[$m]:i.ONE_MINUS_CONSTANT_ALPHA};function N(z,Ce,Q,ae,Me,Pe,Oe,an,dn,U){if(z===xs){g===!0&&(Fe(i.BLEND),g=!1);return}if(g===!1&&(He(i.BLEND),g=!0),z!==Pm){if(z!==x||U!==k){if((m!==Hs||_!==Hs)&&(i.blendEquation(i.FUNC_ADD),m=Hs,_=Hs),U)switch(z){case Xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.ONE,i.ONE);break;case Wd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}p=null,M=null,y=null,D=null,T.set(0,0,0),C=0,x=z,k=U}return}Me=Me||Ce,Pe=Pe||Q,Oe=Oe||ae,(Ce!==m||Me!==_)&&(i.blendEquationSeparate(Ut[Ce],Ut[Me]),m=Ce,_=Me),(Q!==p||ae!==M||Pe!==y||Oe!==D)&&(i.blendFuncSeparate(xt[Q],xt[ae],xt[Pe],xt[Oe]),p=Q,M=ae,y=Pe,D=Oe),(an.equals(T)===!1||dn!==C)&&(i.blendColor(an.r,an.g,an.b,dn),T.copy(an),C=dn),x=z,k=!1}function rn(z,Ce){z.side===ln?Fe(i.CULL_FACE):He(i.CULL_FACE);let Q=z.side===$n;Ce&&(Q=!Q),wt(Q),z.blending===Xi&&z.transparent===!1?N(xs):N(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),s.setMask(z.colorWrite);let ae=z.stencilWrite;a.setTest(ae),ae&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),vt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?He(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function wt(z){Z!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),Z=z)}function Qe(z){z!==Tm?(He(i.CULL_FACE),z!==v&&(z===Gd?i.cullFace(i.BACK):z===Rm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),v=z}function ot(z){z!==w&&(se&&i.lineWidth(z),w=z)}function vt(z,Ce,Q){z?(He(i.POLYGON_OFFSET_FILL),(O!==Ce||V!==Q)&&(i.polygonOffset(Ce,Q),O=Ce,V=Q)):Fe(i.POLYGON_OFFSET_FILL)}function fe(z){z?He(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function P(z){z===void 0&&(z=i.TEXTURE0+$-1),q!==z&&(i.activeTexture(z),q=z)}function E(z,Ce,Q){Q===void 0&&(q===null?Q=i.TEXTURE0+$-1:Q=q);let ae=ce[Q];ae===void 0&&(ae={type:void 0,texture:void 0},ce[Q]=ae),(ae.type!==z||ae.texture!==Ce)&&(q!==Q&&(i.activeTexture(Q),q=Q),i.bindTexture(z,Ce||de[z]),ae.type=z,ae.texture=Ce)}function X(){let z=ce[q];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Xe(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Tt(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function qe(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function je(z){St.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),St.copy(z))}function Le(z){zt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),zt.copy(z))}function lt(z,Ce){let Q=l.get(Ce);Q===void 0&&(Q=new WeakMap,l.set(Ce,Q));let ae=Q.get(z);ae===void 0&&(ae=i.getUniformBlockIndex(Ce,z.name),Q.set(z,ae))}function Ze(z,Ce){let ae=l.get(Ce).get(z);o.get(Ce)!==ae&&(i.uniformBlockBinding(Ce,ae,z.__bindingPointIndex),o.set(Ce,ae))}function Vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},q=null,ce={},h={},u=new WeakMap,d=[],f=null,g=!1,x=null,m=null,p=null,M=null,_=null,y=null,D=null,T=new nt(0,0,0),C=0,k=!1,Z=null,v=null,w=null,O=null,V=null,St.set(0,0,i.canvas.width,i.canvas.height),zt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:He,disable:Fe,bindFramebuffer:gt,drawBuffers:at,useProgram:Et,setBlending:N,setMaterial:rn,setFlipSided:wt,setCullFace:Qe,setLineWidth:ot,setPolygonOffset:vt,setScissorTest:fe,activeTexture:P,bindTexture:E,unbindTexture:X,compressedTexImage2D:re,compressedTexImage3D:j,texImage2D:Re,texImage3D:qe,updateUBOMapping:lt,uniformBlockBinding:Ze,texStorage2D:Tt,texStorage3D:ue,texSubImage2D:ne,texSubImage3D:Xe,compressedTexSubImage2D:ge,compressedTexSubImage3D:pe,scissor:je,viewport:Le,reset:Vt}}function zf(i,e,t,n){let s=vy(n);switch(t){case fp:return i*e;case mp:return i*e;case gp:return i*e*2;case au:return i*e/s.components*s.byteLength;case ou:return i*e/s.components*s.byteLength;case xp:return i*e*2/s.components*s.byteLength;case lu:return i*e*2/s.components*s.byteLength;case pp:return i*e*3/s.components*s.byteLength;case Yn:return i*e*4/s.components*s.byteLength;case cu:return i*e*4/s.components*s.byteLength;case Io:case Lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case No:case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qc:case Zc:return Math.max(i,16)*Math.max(e,8)/4;case $c:case Kc:return Math.max(i,8)*Math.max(e,8)/2;case Jc:case jc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case eh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case nh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ih:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case sh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case rh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ah:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case oh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case lh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ch:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case hh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case uh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case dh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case fh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Uo:case ph:case mh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _p:case gh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xh:case _h:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vy(i){switch(i){case Yi:case hp:return{byteLength:1,components:1};case ba:case up:case Na:return{byteLength:2,components:1};case su:case ru:return{byteLength:2,components:4};case Ws:case iu:case vi:return{byteLength:4,components:1};case dp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function by(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return f?new OffscreenCanvas(P,E):Ma("canvas")}function x(P,E,X){let re=1,j=fe(P);if((j.width>X||j.height>X)&&(re=X/Math.max(j.width,j.height)),re<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ne=Math.floor(re*j.width),Xe=Math.floor(re*j.height);u===void 0&&(u=g(ne,Xe));let ge=E?g(ne,Xe):u;return ge.width=ne,ge.height=Xe,ge.getContext("2d").drawImage(P,0,0,ne,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ne+"x"+Xe+")."),ge}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==kn&&P.minFilter!==Xn}function p(P){i.generateMipmap(P)}function M(P,E,X,re,j=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ne=E;if(E===i.RED&&(X===i.FLOAT&&(ne=i.R32F),X===i.HALF_FLOAT&&(ne=i.R16F),X===i.UNSIGNED_BYTE&&(ne=i.R8)),E===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ne=i.R8UI),X===i.UNSIGNED_SHORT&&(ne=i.R16UI),X===i.UNSIGNED_INT&&(ne=i.R32UI),X===i.BYTE&&(ne=i.R8I),X===i.SHORT&&(ne=i.R16I),X===i.INT&&(ne=i.R32I)),E===i.RG&&(X===i.FLOAT&&(ne=i.RG32F),X===i.HALF_FLOAT&&(ne=i.RG16F),X===i.UNSIGNED_BYTE&&(ne=i.RG8)),E===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ne=i.RG8UI),X===i.UNSIGNED_SHORT&&(ne=i.RG16UI),X===i.UNSIGNED_INT&&(ne=i.RG32UI),X===i.BYTE&&(ne=i.RG8I),X===i.SHORT&&(ne=i.RG16I),X===i.INT&&(ne=i.RG32I)),E===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),X===i.UNSIGNED_INT&&(ne=i.RGB32UI),X===i.BYTE&&(ne=i.RGB8I),X===i.SHORT&&(ne=i.RGB16I),X===i.INT&&(ne=i.RGB32I)),E===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),X===i.UNSIGNED_INT&&(ne=i.RGBA32UI),X===i.BYTE&&(ne=i.RGBA8I),X===i.SHORT&&(ne=i.RGBA16I),X===i.INT&&(ne=i.RGBA32I)),E===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),E===i.RGBA){let Xe=j?Fo:Ht.getTransfer(re);X===i.FLOAT&&(ne=i.RGBA32F),X===i.HALF_FLOAT&&(ne=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ne=Xe===on?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function _(P,E){let X;return P?E===null||E===Ws||E===Pr?X=i.DEPTH24_STENCIL8:E===vi?X=i.DEPTH32F_STENCIL8:E===ba&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ws||E===Pr?X=i.DEPTH_COMPONENT24:E===vi?X=i.DEPTH_COMPONENT32F:E===ba&&(X=i.DEPTH_COMPONENT16),X}function y(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==kn&&P.minFilter!==Xn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function D(P){let E=P.target;E.removeEventListener("dispose",D),C(E),E.isVideoTexture&&h.delete(E)}function T(P){let E=P.target;E.removeEventListener("dispose",T),Z(E)}function C(P){let E=n.get(P);if(E.__webglInit===void 0)return;let X=P.source,re=d.get(X);if(re){let j=re[E.__cacheKey];j.usedTimes--,j.usedTimes===0&&k(P),Object.keys(re).length===0&&d.delete(X)}n.remove(P)}function k(P){let E=n.get(P);i.deleteTexture(E.__webglTexture);let X=P.source,re=d.get(X);delete re[E.__cacheKey],a.memory.textures--}function Z(P){let E=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(E.__webglFramebuffer[re]))for(let j=0;j<E.__webglFramebuffer[re].length;j++)i.deleteFramebuffer(E.__webglFramebuffer[re][j]);else i.deleteFramebuffer(E.__webglFramebuffer[re]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[re])}else{if(Array.isArray(E.__webglFramebuffer))for(let re=0;re<E.__webglFramebuffer.length;re++)i.deleteFramebuffer(E.__webglFramebuffer[re]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let re=0;re<E.__webglColorRenderbuffer.length;re++)E.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[re]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let X=P.textures;for(let re=0,j=X.length;re<j;re++){let ne=n.get(X[re]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(X[re])}n.remove(P)}let v=0;function w(){v=0}function O(){let P=v;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),v+=1,P}function V(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function $(P,E){let X=n.get(P);if(P.isVideoTexture&&ot(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){let re=P.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{zt(X,P,E);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+E)}function se(P,E){let X=n.get(P);if(P.version>0&&X.__version!==P.version){zt(X,P,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+E)}function F(P,E){let X=n.get(P);if(P.version>0&&X.__version!==P.version){zt(X,P,E);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+E)}function oe(P,E){let X=n.get(P);if(P.version>0&&X.__version!==P.version){ie(X,P,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+E)}let q={[Gs]:i.REPEAT,[Gi]:i.CLAMP_TO_EDGE,[va]:i.MIRRORED_REPEAT},ce={[kn]:i.NEAREST,[nu]:i.NEAREST_MIPMAP_NEAREST,[br]:i.NEAREST_MIPMAP_LINEAR,[Xn]:i.LINEAR,[ma]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},Ie={[l0]:i.NEVER,[p0]:i.ALWAYS,[c0]:i.LESS,[bp]:i.LEQUAL,[h0]:i.EQUAL,[f0]:i.GEQUAL,[u0]:i.GREATER,[d0]:i.NOTEQUAL};function be(P,E){if(E.type===vi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Xn||E.magFilter===ma||E.magFilter===br||E.magFilter===Ai||E.minFilter===Xn||E.minFilter===ma||E.minFilter===br||E.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,q[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,q[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,q[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ce[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ce[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Ie[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===kn||E.minFilter!==br&&E.minFilter!==Ai||E.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function St(P,E){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",D));let re=E.source,j=d.get(re);j===void 0&&(j={},d.set(re,j));let ne=V(E);if(ne!==P.__cacheKey){j[ne]===void 0&&(j[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),j[ne].usedTimes++;let Xe=j[P.__cacheKey];Xe!==void 0&&(j[P.__cacheKey].usedTimes--,Xe.usedTimes===0&&k(E)),P.__cacheKey=ne,P.__webglTexture=j[ne].texture}return X}function zt(P,E,X){let re=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=i.TEXTURE_3D);let j=St(P,E),ne=E.source;t.bindTexture(re,P.__webglTexture,i.TEXTURE0+X);let Xe=n.get(ne);if(ne.version!==Xe.__version||j===!0){t.activeTexture(i.TEXTURE0+X);let ge=Ht.getPrimaries(Ht.workingColorSpace),pe=E.colorSpace===ps?null:Ht.getPrimaries(E.colorSpace),Tt=E.colorSpace===ps||ge===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let ue=x(E.image,!1,s.maxTextureSize);ue=vt(E,ue);let Re=r.convert(E.format,E.colorSpace),qe=r.convert(E.type),je=M(E.internalFormat,Re,qe,E.colorSpace,E.isVideoTexture);be(re,E);let Le,lt=E.mipmaps,Ze=E.isVideoTexture!==!0,Vt=Xe.__version===void 0||j===!0,z=ne.dataReady,Ce=y(E,ue);if(E.isDepthTexture)je=_(E.format===Ir,E.type),Vt&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,je,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,je,ue.width,ue.height,0,Re,qe,null));else if(E.isDataTexture)if(lt.length>0){Ze&&Vt&&t.texStorage2D(i.TEXTURE_2D,Ce,je,lt[0].width,lt[0].height);for(let Q=0,ae=lt.length;Q<ae;Q++)Le=lt[Q],Ze?z&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Le.width,Le.height,Re,qe,Le.data):t.texImage2D(i.TEXTURE_2D,Q,je,Le.width,Le.height,0,Re,qe,Le.data);E.generateMipmaps=!1}else Ze?(Vt&&t.texStorage2D(i.TEXTURE_2D,Ce,je,ue.width,ue.height),z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,Re,qe,ue.data)):t.texImage2D(i.TEXTURE_2D,0,je,ue.width,ue.height,0,Re,qe,ue.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ze&&Vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,je,lt[0].width,lt[0].height,ue.depth);for(let Q=0,ae=lt.length;Q<ae;Q++)if(Le=lt[Q],E.format!==Yn)if(Re!==null)if(Ze){if(z)if(E.layerUpdates.size>0){let Me=zf(Le.width,Le.height,E.format,E.type);for(let Pe of E.layerUpdates){let Oe=Le.data.subarray(Pe*Me/Le.data.BYTES_PER_ELEMENT,(Pe+1)*Me/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Pe,Le.width,Le.height,1,Re,Oe,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Le.width,Le.height,ue.depth,Re,Le.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,je,Le.width,Le.height,ue.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Le.width,Le.height,ue.depth,Re,qe,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,je,Le.width,Le.height,ue.depth,0,Re,qe,Le.data)}else{Ze&&Vt&&t.texStorage2D(i.TEXTURE_2D,Ce,je,lt[0].width,lt[0].height);for(let Q=0,ae=lt.length;Q<ae;Q++)Le=lt[Q],E.format!==Yn?Re!==null?Ze?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,Le.width,Le.height,Re,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,je,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?z&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Le.width,Le.height,Re,qe,Le.data):t.texImage2D(i.TEXTURE_2D,Q,je,Le.width,Le.height,0,Re,qe,Le.data)}else if(E.isDataArrayTexture)if(Ze){if(Vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,je,ue.width,ue.height,ue.depth),z)if(E.layerUpdates.size>0){let Q=zf(ue.width,ue.height,E.format,E.type);for(let ae of E.layerUpdates){let Me=ue.data.subarray(ae*Q/ue.data.BYTES_PER_ELEMENT,(ae+1)*Q/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,ue.width,ue.height,1,Re,qe,Me)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Re,qe,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,je,ue.width,ue.height,ue.depth,0,Re,qe,ue.data);else if(E.isData3DTexture)Ze?(Vt&&t.texStorage3D(i.TEXTURE_3D,Ce,je,ue.width,ue.height,ue.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Re,qe,ue.data)):t.texImage3D(i.TEXTURE_3D,0,je,ue.width,ue.height,ue.depth,0,Re,qe,ue.data);else if(E.isFramebufferTexture){if(Vt)if(Ze)t.texStorage2D(i.TEXTURE_2D,Ce,je,ue.width,ue.height);else{let Q=ue.width,ae=ue.height;for(let Me=0;Me<Ce;Me++)t.texImage2D(i.TEXTURE_2D,Me,je,Q,ae,0,Re,qe,null),Q>>=1,ae>>=1}}else if(lt.length>0){if(Ze&&Vt){let Q=fe(lt[0]);t.texStorage2D(i.TEXTURE_2D,Ce,je,Q.width,Q.height)}for(let Q=0,ae=lt.length;Q<ae;Q++)Le=lt[Q],Ze?z&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Re,qe,Le):t.texImage2D(i.TEXTURE_2D,Q,je,Re,qe,Le);E.generateMipmaps=!1}else if(Ze){if(Vt){let Q=fe(ue);t.texStorage2D(i.TEXTURE_2D,Ce,je,Q.width,Q.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,qe,ue)}else t.texImage2D(i.TEXTURE_2D,0,je,Re,qe,ue);m(E)&&p(re),Xe.__version=ne.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ie(P,E,X){if(E.image.length!==6)return;let re=St(P,E),j=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+X);let ne=n.get(j);if(j.version!==ne.__version||re===!0){t.activeTexture(i.TEXTURE0+X);let Xe=Ht.getPrimaries(Ht.workingColorSpace),ge=E.colorSpace===ps?null:Ht.getPrimaries(E.colorSpace),pe=E.colorSpace===ps||Xe===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Tt=E.isCompressedTexture||E.image[0].isCompressedTexture,ue=E.image[0]&&E.image[0].isDataTexture,Re=[];for(let ae=0;ae<6;ae++)!Tt&&!ue?Re[ae]=x(E.image[ae],!0,s.maxCubemapSize):Re[ae]=ue?E.image[ae].image:E.image[ae],Re[ae]=vt(E,Re[ae]);let qe=Re[0],je=r.convert(E.format,E.colorSpace),Le=r.convert(E.type),lt=M(E.internalFormat,je,Le,E.colorSpace),Ze=E.isVideoTexture!==!0,Vt=ne.__version===void 0||re===!0,z=j.dataReady,Ce=y(E,qe);be(i.TEXTURE_CUBE_MAP,E);let Q;if(Tt){Ze&&Vt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,lt,qe.width,qe.height);for(let ae=0;ae<6;ae++){Q=Re[ae].mipmaps;for(let Me=0;Me<Q.length;Me++){let Pe=Q[Me];E.format!==Yn?je!==null?Ze?z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me,0,0,Pe.width,Pe.height,je,Pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me,lt,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me,0,0,Pe.width,Pe.height,je,Le,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me,lt,Pe.width,Pe.height,0,je,Le,Pe.data)}}}else{if(Q=E.mipmaps,Ze&&Vt){Q.length>0&&Ce++;let ae=fe(Re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,lt,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(ue){Ze?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Re[ae].width,Re[ae].height,je,Le,Re[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,lt,Re[ae].width,Re[ae].height,0,je,Le,Re[ae].data);for(let Me=0;Me<Q.length;Me++){let Oe=Q[Me].image[ae].image;Ze?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me+1,0,0,Oe.width,Oe.height,je,Le,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me+1,lt,Oe.width,Oe.height,0,je,Le,Oe.data)}}else{Ze?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,je,Le,Re[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,lt,je,Le,Re[ae]);for(let Me=0;Me<Q.length;Me++){let Pe=Q[Me];Ze?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me+1,0,0,je,Le,Pe.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Me+1,lt,je,Le,Pe.image[ae])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),ne.__version=j.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function de(P,E,X,re,j,ne){let Xe=r.convert(X.format,X.colorSpace),ge=r.convert(X.type),pe=M(X.internalFormat,Xe,ge,X.colorSpace);if(!n.get(E).__hasExternalTextures){let ue=Math.max(1,E.width>>ne),Re=Math.max(1,E.height>>ne);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,ne,pe,ue,Re,E.depth,0,Xe,ge,null):t.texImage2D(j,ne,pe,ue,Re,0,Xe,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Qe(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,j,n.get(X).__webglTexture,0,wt(E)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,j,n.get(X).__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(P,E,X){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){let re=E.depthTexture,j=re&&re.isDepthTexture?re.type:null,ne=_(E.stencilBuffer,j),Xe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=wt(E);Qe(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,ne,E.width,E.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ne,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ne,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Xe,i.RENDERBUFFER,P)}else{let re=E.textures;for(let j=0;j<re.length;j++){let ne=re[j],Xe=r.convert(ne.format,ne.colorSpace),ge=r.convert(ne.type),pe=M(ne.internalFormat,Xe,ge,ne.colorSpace),Tt=wt(E);X&&Qe(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,pe,E.width,E.height):Qe(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,pe,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,pe,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);let re=n.get(E.depthTexture).__webglTexture,j=wt(E);if(E.depthTexture.format===Sr)Qe(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(E.depthTexture.format===Ir)Qe(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function gt(P){let E=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let re=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),re){let j=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,re.removeEventListener("dispose",j)};re.addEventListener("dispose",j),E.__depthDisposeCallback=j}E.__boundDepthTexture=re}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Fe(E.__webglFramebuffer,P)}else if(X){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]===void 0)E.__webglDepthbuffer[re]=i.createRenderbuffer(),He(E.__webglDepthbuffer[re],P,!1);else{let j=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=E.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),He(E.__webglDepthbuffer,P,!1);else{let re=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,j)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(P,E,X){let re=n.get(P);E!==void 0&&de(re.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&gt(P)}function Et(P){let E=P.texture,X=n.get(P),re=n.get(E);P.addEventListener("dispose",T);let j=P.textures,ne=P.isWebGLCubeRenderTarget===!0,Xe=j.length>1;if(Xe||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=E.version,a.memory.textures++),ne){X.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[ge]=[];for(let pe=0;pe<E.mipmaps.length;pe++)X.__webglFramebuffer[ge][pe]=i.createFramebuffer()}else X.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let ge=0;ge<E.mipmaps.length;ge++)X.__webglFramebuffer[ge]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Xe)for(let ge=0,pe=j.length;ge<pe;ge++){let Tt=n.get(j[ge]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Qe(P)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ge=0;ge<j.length;ge++){let pe=j[ge];X.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ge]);let Tt=r.convert(pe.format,pe.colorSpace),ue=r.convert(pe.type),Re=M(pe.internalFormat,Tt,ue,pe.colorSpace,P.isXRRenderTarget===!0),qe=wt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,Re,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,X.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),He(X.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),be(i.TEXTURE_CUBE_MAP,E);for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)de(X.__webglFramebuffer[ge][pe],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,pe);else de(X.__webglFramebuffer[ge],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let ge=0,pe=j.length;ge<pe;ge++){let Tt=j[ge],ue=n.get(Tt);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),be(i.TEXTURE_2D,Tt),de(X.__webglFramebuffer,P,Tt,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),m(Tt)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ge=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,re.__webglTexture),be(ge,E),E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)de(X.__webglFramebuffer[pe],P,E,i.COLOR_ATTACHMENT0,ge,pe);else de(X.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,ge,0);m(E)&&p(ge),t.unbindTexture()}P.depthBuffer&&gt(P)}function Ut(P){let E=P.textures;for(let X=0,re=E.length;X<re;X++){let j=E[X];if(m(j)){let ne=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Xe=n.get(j).__webglTexture;t.bindTexture(ne,Xe),p(ne),t.unbindTexture()}}}let xt=[],N=[];function rn(P){if(P.samples>0){if(Qe(P)===!1){let E=P.textures,X=P.width,re=P.height,j=i.COLOR_BUFFER_BIT,ne=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Xe=n.get(P),ge=E.length>1;if(ge)for(let pe=0;pe<E.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let pe=0;pe<E.length;pe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Xe.__webglColorRenderbuffer[pe]);let Tt=n.get(E[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Tt,0)}i.blitFramebuffer(0,0,X,re,0,0,X,re,j,i.NEAREST),l===!0&&(xt.length=0,N.length=0,xt.push(i.COLOR_ATTACHMENT0+pe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(xt.push(ne),N.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let pe=0;pe<E.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,Xe.__webglColorRenderbuffer[pe]);let Tt=n.get(E[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,Tt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function wt(P){return Math.min(s.maxSamples,P.samples)}function Qe(P){let E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ot(P){let E=a.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function vt(P,E){let X=P.colorSpace,re=P.format,j=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==Rn&&X!==ps&&(Ht.getTransfer(X)===on?(re!==Yn||j!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}function fe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=w,this.setTexture2D=$,this.setTexture2DArray=se,this.setTexture3D=F,this.setTextureCube=oe,this.rebindTextures=at,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Qe}function My(i,e){function t(n,s=ps){let r,a=Ht.getTransfer(s);if(n===Yi)return i.UNSIGNED_BYTE;if(n===su)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ru)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hp)return i.BYTE;if(n===up)return i.SHORT;if(n===ba)return i.UNSIGNED_SHORT;if(n===iu)return i.INT;if(n===Ws)return i.UNSIGNED_INT;if(n===vi)return i.FLOAT;if(n===Na)return i.HALF_FLOAT;if(n===fp)return i.ALPHA;if(n===pp)return i.RGB;if(n===Yn)return i.RGBA;if(n===mp)return i.LUMINANCE;if(n===gp)return i.LUMINANCE_ALPHA;if(n===Sr)return i.DEPTH_COMPONENT;if(n===Ir)return i.DEPTH_STENCIL;if(n===au)return i.RED;if(n===ou)return i.RED_INTEGER;if(n===xp)return i.RG;if(n===lu)return i.RG_INTEGER;if(n===cu)return i.RGBA_INTEGER;if(n===Io||n===Lo||n===No||n===Do)if(a===on)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$c||n===qc||n===Kc||n===Zc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$c)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jc||n===jc||n===Qc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jc||n===jc)return a===on?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qc)return a===on?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===eh||n===th||n===nh||n===ih||n===sh||n===rh||n===ah||n===oh||n===lh||n===ch||n===hh||n===uh||n===dh||n===fh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===eh)return a===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===th)return a===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nh)return a===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ih)return a===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sh)return a===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rh)return a===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ah)return a===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oh)return a===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lh)return a===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ch)return a===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hh)return a===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uh)return a===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dh)return a===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fh)return a===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Uo||n===ph||n===mh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Uo)return a===on?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ph)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_p||n===gh||n===xh||n===_h)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Uo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_h)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Nh=class extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Nt=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sy={type:"move"},xa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sy)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ey=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wy=`
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

}`,Dh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Tn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ti({vertexShader:Ey,fragmentShader:wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new we(new Ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uh=class extends vs{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=new Dh,m=t.getContextAttributes(),p=null,M=null,_=[],y=[],D=new ke,T=null,C=new fn;C.layers.enable(1),C.viewport=new Wt;let k=new fn;k.layers.enable(2),k.viewport=new Wt;let Z=[C,k],v=new Nh;v.layers.enable(1),v.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let de=_[ie];return de===void 0&&(de=new xa,_[ie]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ie){let de=_[ie];return de===void 0&&(de=new xa,_[ie]=de),de.getGripSpace()},this.getHand=function(ie){let de=_[ie];return de===void 0&&(de=new xa,_[ie]=de),de.getHandSpace()};function V(ie){let de=y.indexOf(ie.inputSource);if(de===-1)return;let He=_[de];He!==void 0&&(He.update(ie.inputSource,ie.frame,c||a),He.dispatchEvent({type:ie.type,data:ie.inputSource}))}function $(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",se);for(let ie=0;ie<_.length;ie++){let de=y[ie];de!==null&&(y[ie]=null,_[ie].disconnect(de))}w=null,O=null,x.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,M=null,zt.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",$),s.addEventListener("inputsourceschange",se),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){let de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new $i(f.framebufferWidth,f.framebufferHeight,{format:Yn,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let de=null,He=null,Fe=null;m.depth&&(Fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?Ir:Sr,He=m.stencil?Pr:Ws);let gt={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(gt),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new $i(d.textureWidth,d.textureHeight,{format:Yn,type:Yi,depthTexture:new Ko(d.textureWidth,d.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),zt.setContext(s),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function se(ie){for(let de=0;de<ie.removed.length;de++){let He=ie.removed[de],Fe=y.indexOf(He);Fe>=0&&(y[Fe]=null,_[Fe].disconnect(He))}for(let de=0;de<ie.added.length;de++){let He=ie.added[de],Fe=y.indexOf(He);if(Fe===-1){for(let at=0;at<_.length;at++)if(at>=y.length){y.push(He),Fe=at;break}else if(y[at]===null){y[at]=He,Fe=at;break}if(Fe===-1)break}let gt=_[Fe];gt&&gt.connect(He)}}let F=new I,oe=new I;function q(ie,de,He){F.setFromMatrixPosition(de.matrixWorld),oe.setFromMatrixPosition(He.matrixWorld);let Fe=F.distanceTo(oe),gt=de.projectionMatrix.elements,at=He.projectionMatrix.elements,Et=gt[14]/(gt[10]-1),Ut=gt[14]/(gt[10]+1),xt=(gt[9]+1)/gt[5],N=(gt[9]-1)/gt[5],rn=(gt[8]-1)/gt[0],wt=(at[8]+1)/at[0],Qe=Et*rn,ot=Et*wt,vt=Fe/(-rn+wt),fe=vt*-rn;if(de.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(fe),ie.translateZ(vt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),gt[10]===-1)ie.projectionMatrix.copy(de.projectionMatrix),ie.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{let P=Et+vt,E=Ut+vt,X=Qe-fe,re=ot+(Fe-fe),j=xt*Ut/E*P,ne=N*Ut/E*P;ie.projectionMatrix.makePerspective(X,re,j,ne,P,E),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function ce(ie,de){de===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(de.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let de=ie.near,He=ie.far;x.texture!==null&&(x.depthNear>0&&(de=x.depthNear),x.depthFar>0&&(He=x.depthFar)),v.near=k.near=C.near=de,v.far=k.far=C.far=He,(w!==v.near||O!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,O=v.far);let Fe=ie.parent,gt=v.cameras;ce(v,Fe);for(let at=0;at<gt.length;at++)ce(gt[at],Fe);gt.length===2?q(v,C,k):v.projectionMatrix.copy(C.projectionMatrix),Ie(ie,v,Fe)};function Ie(ie,de,He){He===null?ie.matrix.copy(de.matrixWorld):(ie.matrix.copy(He.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(de.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(de.projectionMatrix),ie.projectionMatrixInverse.copy(de.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Dr*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ie)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let be=null;function St(ie,de){if(h=de.getViewerPose(c||a),g=de,h!==null){let He=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Fe=!1;He.length!==v.cameras.length&&(v.cameras.length=0,Fe=!0);for(let at=0;at<He.length;at++){let Et=He[at],Ut=null;if(f!==null)Ut=f.getViewport(Et);else{let N=u.getViewSubImage(d,Et);Ut=N.viewport,at===0&&(e.setRenderTargetTextures(M,N.colorTexture,d.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(M))}let xt=Z[at];xt===void 0&&(xt=new fn,xt.layers.enable(at),xt.viewport=new Wt,Z[at]=xt),xt.matrix.fromArray(Et.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(Et.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),at===0&&(v.matrix.copy(xt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Fe===!0&&v.cameras.push(xt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")){let at=u.getDepthInformation(He[0]);at&&at.isValid&&at.texture&&x.init(e,at,s.renderState)}}for(let He=0;He<_.length;He++){let Fe=y[He],gt=_[He];Fe!==null&&gt!==void 0&&gt.update(Fe,de,c||a)}be&&be(ie,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),g=null}let zt=new wp;zt.setAnimationLoop(St),this.setAnimationLoop=function(ie){be=ie},this.dispose=function(){}}},zs=new Ri,Ay=new yt;function Ty(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ep(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$n&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$n&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),_=M.envMap,y=M.envMapRotation;_&&(m.envMap.value=_,zs.copy(y),zs.x*=-1,zs.y*=-1,zs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),m.envMapRotation.value.setFromMatrix4(Ay.makeRotationFromEuler(zs)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$n&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ry(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){let y=_.program;n.uniformBlockBinding(M,y)}function c(M,_){let y=s[M.id];y===void 0&&(g(M),y=h(M),s[M.id]=y,M.addEventListener("dispose",m));let D=_.program;n.updateUBOMapping(M,D);let T=e.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){let _=u();M.__bindingPointIndex=_;let y=i.createBuffer(),D=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,D,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let _=s[M.id],y=M.uniforms,D=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,C=y.length;T<C;T++){let k=Array.isArray(y[T])?y[T]:[y[T]];for(let Z=0,v=k.length;Z<v;Z++){let w=k[Z];if(f(w,T,Z,D)===!0){let O=w.__offset,V=Array.isArray(w.value)?w.value:[w.value],$=0;for(let se=0;se<V.length;se++){let F=V[se],oe=x(F);typeof F=="number"||typeof F=="boolean"?(w.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,O+$,w.__data)):F.isMatrix3?(w.__data[0]=F.elements[0],w.__data[1]=F.elements[1],w.__data[2]=F.elements[2],w.__data[3]=0,w.__data[4]=F.elements[3],w.__data[5]=F.elements[4],w.__data[6]=F.elements[5],w.__data[7]=0,w.__data[8]=F.elements[6],w.__data[9]=F.elements[7],w.__data[10]=F.elements[8],w.__data[11]=0):(F.toArray(w.__data,$),$+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,_,y,D){let T=M.value,C=_+"_"+y;if(D[C]===void 0)return typeof T=="number"||typeof T=="boolean"?D[C]=T:D[C]=T.clone(),!0;{let k=D[C];if(typeof T=="number"||typeof T=="boolean"){if(k!==T)return D[C]=T,!0}else if(k.equals(T)===!1)return k.copy(T),!0}return!1}function g(M){let _=M.uniforms,y=0,D=16;for(let C=0,k=_.length;C<k;C++){let Z=Array.isArray(_[C])?_[C]:[_[C]];for(let v=0,w=Z.length;v<w;v++){let O=Z[v],V=Array.isArray(O.value)?O.value:[O.value];for(let $=0,se=V.length;$<se;$++){let F=V[$],oe=x(F),q=y%D,ce=q%oe.boundary,Ie=q+ce;y+=ce,Ie!==0&&D-Ie<oe.storage&&(y+=D-Ie),O.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=oe.storage}}}let T=y%D;return T>0&&(y+=D-T),M.__size=y,M.__cache={},this}function x(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){let _=M.target;_.removeEventListener("dispose",m);let y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Or=class{constructor(e={}){let{canvas:t=I0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this.toneMapping=_s,this.toneMappingExposure=1;let _=this,y=!1,D=0,T=0,C=null,k=-1,Z=null,v=new Wt,w=new Wt,O=null,V=new nt(0),$=0,se=t.width,F=t.height,oe=1,q=null,ce=null,Ie=new Wt(0,0,se,F),be=new Wt(0,0,se,F),St=!1,zt=new Sa,ie=!1,de=!1,He=new yt,Fe=new yt,gt=new I,at=new Wt,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ut=!1;function xt(){return C===null?oe:1}let N=n;function rn(A,B){return t.getContext(A,B)}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),N===null){let B="webgl2";if(N=rn(B,A),N===null)throw rn(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let wt,Qe,ot,vt,fe,P,E,X,re,j,ne,Xe,ge,pe,Tt,ue,Re,qe,je,Le,lt,Ze,Vt,z;function Ce(){wt=new Wx(N),wt.init(),Ze=new My(N,wt),Qe=new Ox(N,wt,e,Ze),ot=new yy(N),Qe.reverseDepthBuffer&&ot.buffers.depth.setReversed(!0),vt=new $x(N),fe=new ay,P=new by(N,wt,ot,fe,Qe,Ze,vt),E=new Bx(_),X=new Gx(_),re=new eg(N),Vt=new kx(N,re),j=new Xx(N,re,vt,Vt),ne=new Kx(N,j,re,vt),je=new qx(N,Qe,P),ue=new zx(fe),Xe=new ry(_,E,X,wt,Qe,Vt,ue),ge=new Ty(_,fe),pe=new ly,Tt=new py(wt),qe=new Ux(_,E,X,ot,ne,d,l),Re=new xy(_,ne,Qe),z=new Ry(N,vt,Qe,ot),Le=new Fx(N,wt,vt),lt=new Yx(N,wt,vt),vt.programs=Xe.programs,_.capabilities=Qe,_.extensions=wt,_.properties=fe,_.renderLists=pe,_.shadowMap=Re,_.state=ot,_.info=vt}Ce();let Q=new Uh(_,N);this.xr=Q,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let A=wt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=wt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(A){A!==void 0&&(oe=A,this.setSize(se,F,!1))},this.getSize=function(A){return A.set(se,F)},this.setSize=function(A,B,K=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,F=B,t.width=Math.floor(A*oe),t.height=Math.floor(B*oe),K===!0&&(t.style.width=A+"px",t.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(se*oe,F*oe).floor()},this.setDrawingBufferSize=function(A,B,K){se=A,F=B,oe=K,t.width=Math.floor(A*K),t.height=Math.floor(B*K),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(Ie)},this.setViewport=function(A,B,K,J){A.isVector4?Ie.set(A.x,A.y,A.z,A.w):Ie.set(A,B,K,J),ot.viewport(v.copy(Ie).multiplyScalar(oe).round())},this.getScissor=function(A){return A.copy(be)},this.setScissor=function(A,B,K,J){A.isVector4?be.set(A.x,A.y,A.z,A.w):be.set(A,B,K,J),ot.scissor(w.copy(be).multiplyScalar(oe).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){ot.setScissorTest(St=A)},this.setOpaqueSort=function(A){q=A},this.setTransparentSort=function(A){ce=A},this.getClearColor=function(A){return A.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(A=!0,B=!0,K=!0){let J=0;if(A){let H=!1;if(C!==null){let _e=C.texture.format;H=_e===cu||_e===lu||_e===ou}if(H){let _e=C.texture.type,Ae=_e===Yi||_e===Ws||_e===ba||_e===Pr||_e===su||_e===ru,ze=qe.getClearColor(),Ve=qe.getClearAlpha(),ft=ze.r,pt=ze.g,Ge=ze.b;Ae?(f[0]=ft,f[1]=pt,f[2]=Ge,f[3]=Ve,N.clearBufferuiv(N.COLOR,0,f)):(g[0]=ft,g[1]=pt,g[2]=Ge,g[3]=Ve,N.clearBufferiv(N.COLOR,0,g))}else J|=N.COLOR_BUFFER_BIT}B&&(J|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),K&&(J|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),pe.dispose(),Tt.dispose(),fe.dispose(),E.dispose(),X.dispose(),ne.dispose(),Vt.dispose(),z.dispose(),Xe.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",un),Q.removeEventListener("sessionend",xn),Mn.stop()};function ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let A=vt.autoReset,B=Re.enabled,K=Re.autoUpdate,J=Re.needsUpdate,H=Re.type;Ce(),vt.autoReset=A,Re.enabled=B,Re.autoUpdate=K,Re.needsUpdate=J,Re.type=H}function Pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Oe(A){let B=A.target;B.removeEventListener("dispose",Oe),an(B)}function an(A){dn(A),fe.remove(A)}function dn(A){let B=fe.get(A).programs;B!==void 0&&(B.forEach(function(K){Xe.releaseProgram(K)}),A.isShaderMaterial&&Xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,K,J,H,_e){B===null&&(B=Et);let Ae=H.isMesh&&H.matrixWorld.determinant()<0,ze=Ga(A,B,K,J,H);ot.setMaterial(J,Ae);let Ve=K.index,ft=1;if(J.wireframe===!0){if(Ve=j.getWireframeAttribute(K),Ve===void 0)return;ft=2}let pt=K.drawRange,Ge=K.attributes.position,xe=pt.start*ft,It=(pt.start+pt.count)*ft;_e!==null&&(xe=Math.max(xe,_e.start*ft),It=Math.min(It,(_e.start+_e.count)*ft)),Ve!==null?(xe=Math.max(xe,0),It=Math.min(It,Ve.count)):Ge!=null&&(xe=Math.max(xe,0),It=Math.min(It,Ge.count));let Xt=It-xe;if(Xt<0||Xt===1/0)return;Vt.setup(H,J,ze,K,Ve);let Ln,et=Le;if(Ve!==null&&(Ln=re.get(Ve),et=lt,et.setIndex(Ln)),H.isMesh)J.wireframe===!0?(ot.setLineWidth(J.wireframeLinewidth*xt()),et.setMode(N.LINES)):et.setMode(N.TRIANGLES);else if(H.isLine){let Ue=J.linewidth;Ue===void 0&&(Ue=1),ot.setLineWidth(Ue*xt()),H.isLineSegments?et.setMode(N.LINES):H.isLineLoop?et.setMode(N.LINE_LOOP):et.setMode(N.LINE_STRIP)}else H.isPoints?et.setMode(N.POINTS):H.isSprite&&et.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)et.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(wt.get("WEBGL_multi_draw"))et.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ue=H._multiDrawStarts,Yt=H._multiDrawCounts,Lt=H._multiDrawCount,Nn=Ve?re.get(Ve).bytesPerElement:1,Kn=fe.get(J).currentProgram.getUniforms();for(let Cn=0;Cn<Lt;Cn++)Kn.setValue(N,"_gl_DrawID",Cn),et.render(Ue[Cn]/Nn,Yt[Cn])}else if(H.isInstancedMesh)et.renderInstances(xe,Xt,H.count);else if(K.isInstancedBufferGeometry){let Ue=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Yt=Math.min(K.instanceCount,Ue);et.renderInstances(xe,Xt,Yt)}else et.render(xe,Xt)};function U(A,B,K){A.transparent===!0&&A.side===ln&&A.forceSinglePass===!1?(A.side=$n,A.needsUpdate=!0,Ii(A,B,K),A.side=Ti,A.needsUpdate=!0,Ii(A,B,K),A.side=ln):Ii(A,B,K)}this.compile=function(A,B,K=null){K===null&&(K=A),m=Tt.get(K),m.init(B),M.push(m),K.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),A!==K&&A.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();let J=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let _e=H.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){let ze=_e[Ae];U(ze,K,H),J.add(ze)}else U(_e,K,H),J.add(_e)}),M.pop(),m=null,J},this.compileAsync=function(A,B,K=null){let J=this.compile(A,B,K);return new Promise(H=>{function _e(){if(J.forEach(function(Ae){fe.get(Ae).currentProgram.isReady()&&J.delete(Ae)}),J.size===0){H(A);return}setTimeout(_e,10)}wt.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let me=null;function dt(A){me&&me(A)}function un(){Mn.stop()}function xn(){Mn.start()}let Mn=new wp;Mn.setAnimationLoop(dt),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(A){me=A,Q.setAnimationLoop(A),A===null?Mn.stop():Mn.start()},Q.addEventListener("sessionstart",un),Q.addEventListener("sessionend",xn),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(B),B=Q.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,B,C),m=Tt.get(A,M.length),m.init(B),M.push(m),Fe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),zt.setFromProjectionMatrix(Fe),de=this.localClippingEnabled,ie=ue.init(this.clippingPlanes,de),x=pe.get(A,p.length),x.init(),p.push(x),Q.enabled===!0&&Q.isPresenting===!0){let _e=_.xr.getDepthSensingMesh();_e!==null&&ss(_e,B,-1/0,_.sortObjects)}ss(A,B,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(q,ce),Ut=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Ut&&qe.addToRenderList(x,A),this.info.render.frame++,ie===!0&&ue.beginShadows();let K=m.state.shadowsArray;Re.render(K,A,B),ie===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=x.opaque,H=x.transmissive;if(m.setupLights(),B.isArrayCamera){let _e=B.cameras;if(H.length>0)for(let Ae=0,ze=_e.length;Ae<ze;Ae++){let Ve=_e[Ae];Pi(J,H,A,Ve)}Ut&&qe.render(A);for(let Ae=0,ze=_e.length;Ae<ze;Ae++){let Ve=_e[Ae];rs(x,A,Ve,Ve.viewport)}}else H.length>0&&Pi(J,H,A,B),Ut&&qe.render(A),rs(x,A,B);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(_,A,B),Vt.resetDefaultState(),k=-1,Z=null,M.pop(),M.length>0?(m=M[M.length-1],ie===!0&&ue.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function ss(A,B,K,J){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||zt.intersectsSprite(A)){J&&at.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Fe);let Ae=ne.update(A),ze=A.material;ze.visible&&x.push(A,Ae,ze,K,at.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||zt.intersectsObject(A))){let Ae=ne.update(A),ze=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),at.copy(A.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),at.copy(Ae.boundingSphere.center)),at.applyMatrix4(A.matrixWorld).applyMatrix4(Fe)),Array.isArray(ze)){let Ve=Ae.groups;for(let ft=0,pt=Ve.length;ft<pt;ft++){let Ge=Ve[ft],xe=ze[Ge.materialIndex];xe&&xe.visible&&x.push(A,Ae,xe,K,at.z,Ge)}}else ze.visible&&x.push(A,Ae,ze,K,at.z,null)}}let _e=A.children;for(let Ae=0,ze=_e.length;Ae<ze;Ae++)ss(_e[Ae],B,K,J)}function rs(A,B,K,J){let H=A.opaque,_e=A.transmissive,Ae=A.transparent;m.setupLightsView(K),ie===!0&&ue.setGlobalState(_.clippingPlanes,K),J&&ot.viewport(v.copy(J)),H.length>0&&di(H,B,K),_e.length>0&&di(_e,B,K),Ae.length>0&&di(Ae,B,K),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function Pi(A,B,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[J.id]===void 0&&(m.state.transmissionRenderTarget[J.id]=new $i(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float")?Na:Yi,minFilter:Ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace}));let _e=m.state.transmissionRenderTarget[J.id],Ae=J.viewport||v;_e.setSize(Ae.z,Ae.w);let ze=_.getRenderTarget();_.setRenderTarget(_e),_.getClearColor(V),$=_.getClearAlpha(),$<1&&_.setClearColor(16777215,.5),_.clear(),Ut&&qe.render(K);let Ve=_.toneMapping;_.toneMapping=_s;let ft=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),m.setupLightsView(J),ie===!0&&ue.setGlobalState(_.clippingPlanes,J),di(A,K,J),P.updateMultisampleRenderTarget(_e),P.updateRenderTargetMipmap(_e),wt.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Ge=0,xe=B.length;Ge<xe;Ge++){let It=B[Ge],Xt=It.object,Ln=It.geometry,et=It.material,Ue=It.group;if(et.side===ln&&Xt.layers.test(J.layers)){let Yt=et.side;et.side=$n,et.needsUpdate=!0,Qr(Xt,K,J,Ln,et,Ue),et.side=Yt,et.needsUpdate=!0,pt=!0}}pt===!0&&(P.updateMultisampleRenderTarget(_e),P.updateRenderTargetMipmap(_e))}_.setRenderTarget(ze),_.setClearColor(V,$),ft!==void 0&&(J.viewport=ft),_.toneMapping=Ve}function di(A,B,K){let J=B.isScene===!0?B.overrideMaterial:null;for(let H=0,_e=A.length;H<_e;H++){let Ae=A[H],ze=Ae.object,Ve=Ae.geometry,ft=J===null?Ae.material:J,pt=Ae.group;ze.layers.test(K.layers)&&Qr(ze,B,K,Ve,ft,pt)}}function Qr(A,B,K,J,H,_e){A.onBeforeRender(_,B,K,J,H,_e),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(_,B,K,J,A,_e),H.transparent===!0&&H.side===ln&&H.forceSinglePass===!1?(H.side=$n,H.needsUpdate=!0,_.renderBufferDirect(K,B,J,H,A,_e),H.side=Ti,H.needsUpdate=!0,_.renderBufferDirect(K,B,J,H,A,_e),H.side=ln):_.renderBufferDirect(K,B,J,H,A,_e),A.onAfterRender(_,B,K,J,H,_e)}function Ii(A,B,K){B.isScene!==!0&&(B=Et);let J=fe.get(A),H=m.state.lights,_e=m.state.shadowsArray,Ae=H.state.version,ze=Xe.getParameters(A,H.state,_e,B,K),Ve=Xe.getProgramCacheKey(ze),ft=J.programs;J.environment=A.isMeshStandardMaterial?B.environment:null,J.fog=B.fog,J.envMap=(A.isMeshStandardMaterial?X:E).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,ft===void 0&&(A.addEventListener("dispose",Oe),ft=new Map,J.programs=ft);let pt=ft.get(Ve);if(pt!==void 0){if(J.currentProgram===pt&&J.lightsStateVersion===Ae)return si(A,ze),pt}else ze.uniforms=Xe.getUniforms(A),A.onBeforeCompile(ze,_),pt=Xe.acquireProgram(ze,Ve),ft.set(Ve,pt),J.uniforms=ze.uniforms;let Ge=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=ue.uniform),si(A,ze),J.needsLights=er(A),J.lightsStateVersion=Ae,J.needsLights&&(Ge.ambientLightColor.value=H.state.ambient,Ge.lightProbe.value=H.state.probe,Ge.directionalLights.value=H.state.directional,Ge.directionalLightShadows.value=H.state.directionalShadow,Ge.spotLights.value=H.state.spot,Ge.spotLightShadows.value=H.state.spotShadow,Ge.rectAreaLights.value=H.state.rectArea,Ge.ltc_1.value=H.state.rectAreaLTC1,Ge.ltc_2.value=H.state.rectAreaLTC2,Ge.pointLights.value=H.state.point,Ge.pointLightShadows.value=H.state.pointShadow,Ge.hemisphereLights.value=H.state.hemi,Ge.directionalShadowMap.value=H.state.directionalShadowMap,Ge.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ge.spotShadowMap.value=H.state.spotShadowMap,Ge.spotLightMatrix.value=H.state.spotLightMatrix,Ge.spotLightMap.value=H.state.spotLightMap,Ge.pointShadowMap.value=H.state.pointShadowMap,Ge.pointShadowMatrix.value=H.state.pointShadowMatrix),J.currentProgram=pt,J.uniformsList=null,pt}function Sn(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=Ar.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function si(A,B){let K=fe.get(A);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function Ga(A,B,K,J,H){B.isScene!==!0&&(B=Et),P.resetTextureUnits();let _e=B.fog,Ae=J.isMeshStandardMaterial?B.environment:null,ze=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Rn,Ve=(J.isMeshStandardMaterial?X:E).get(J.envMap||Ae),ft=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pt=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ge=!!K.morphAttributes.position,xe=!!K.morphAttributes.normal,It=!!K.morphAttributes.color,Xt=_s;J.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Xt=_.toneMapping);let Ln=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,et=Ln!==void 0?Ln.length:0,Ue=fe.get(J),Yt=m.state.lights;if(ie===!0&&(de===!0||A!==Z)){let en=A===Z&&J.id===k;ue.setState(J,A,en)}let Lt=!1;J.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Yt.state.version||Ue.outputColorSpace!==ze||H.isBatchedMesh&&Ue.batching===!1||!H.isBatchedMesh&&Ue.batching===!0||H.isBatchedMesh&&Ue.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ue.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ue.instancing===!1||!H.isInstancedMesh&&Ue.instancing===!0||H.isSkinnedMesh&&Ue.skinning===!1||!H.isSkinnedMesh&&Ue.skinning===!0||H.isInstancedMesh&&Ue.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ue.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ue.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ue.instancingMorph===!1&&H.morphTexture!==null||Ue.envMap!==Ve||J.fog===!0&&Ue.fog!==_e||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ue.numPlanes||Ue.numIntersection!==ue.numIntersection)||Ue.vertexAlphas!==ft||Ue.vertexTangents!==pt||Ue.morphTargets!==Ge||Ue.morphNormals!==xe||Ue.morphColors!==It||Ue.toneMapping!==Xt||Ue.morphTargetsCount!==et)&&(Lt=!0):(Lt=!0,Ue.__version=J.version);let Nn=Ue.currentProgram;Lt===!0&&(Nn=Ii(J,B,H));let Kn=!1,Cn=!1,Cs=!1,Gt=Nn.getUniforms(),ri=Ue.uniforms;if(ot.useProgram(Nn.program)&&(Kn=!0,Cn=!0,Cs=!0),J.id!==k&&(k=J.id,Cn=!0),Kn||Z!==A){Qe.reverseDepthBuffer?(He.copy(A.projectionMatrix),N0(He),D0(He),Gt.setValue(N,"projectionMatrix",He)):Gt.setValue(N,"projectionMatrix",A.projectionMatrix),Gt.setValue(N,"viewMatrix",A.matrixWorldInverse);let en=Gt.map.cameraPosition;en!==void 0&&en.setValue(N,gt.setFromMatrixPosition(A.matrixWorld)),Qe.logarithmicDepthBuffer&&Gt.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Gt.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),Z!==A&&(Z=A,Cn=!0,Cs=!0)}if(H.isSkinnedMesh){Gt.setOptional(N,H,"bindMatrix"),Gt.setOptional(N,H,"bindMatrixInverse");let en=H.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Gt.setValue(N,"boneTexture",en.boneTexture,P))}H.isBatchedMesh&&(Gt.setOptional(N,H,"batchingTexture"),Gt.setValue(N,"batchingTexture",H._matricesTexture,P),Gt.setOptional(N,H,"batchingIdTexture"),Gt.setValue(N,"batchingIdTexture",H._indirectTexture,P),Gt.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&Gt.setValue(N,"batchingColorTexture",H._colorsTexture,P));let Li=K.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&je.update(H,K,Nn),(Cn||Ue.receiveShadow!==H.receiveShadow)&&(Ue.receiveShadow=H.receiveShadow,Gt.setValue(N,"receiveShadow",H.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(ri.envMap.value=Ve,ri.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&B.environment!==null&&(ri.envMapIntensity.value=B.environmentIntensity),Cn&&(Gt.setValue(N,"toneMappingExposure",_.toneMappingExposure),Ue.needsLights&&Qs(ri,Cs),_e&&J.fog===!0&&ge.refreshFogUniforms(ri,_e),ge.refreshMaterialUniforms(ri,J,oe,F,m.state.transmissionRenderTarget[A.id]),Ar.upload(N,Sn(Ue),ri,P)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ar.upload(N,Sn(Ue),ri,P),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Gt.setValue(N,"center",H.center),Gt.setValue(N,"modelViewMatrix",H.modelViewMatrix),Gt.setValue(N,"normalMatrix",H.normalMatrix),Gt.setValue(N,"modelMatrix",H.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let en=J.uniformsGroups;for(let Ps=0,ea=en.length;Ps<ea;Ps++){let ta=en[Ps];z.update(ta,Nn),z.bind(ta,Nn)}}return Nn}function Qs(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function er(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,B,K){fe.get(A.texture).__webglTexture=B,fe.get(A.depthTexture).__webglTexture=K;let J=fe.get(A);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,B){let K=fe.get(A);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,K=0){C=A,D=B,T=K;let J=!0,H=null,_e=!1,Ae=!1;if(A){let Ve=fe.get(A);if(Ve.__useDefaultFramebuffer!==void 0)ot.bindFramebuffer(N.FRAMEBUFFER,null),J=!1;else if(Ve.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Ve.__hasExternalTextures)P.rebindTextures(A,fe.get(A.texture).__webglTexture,fe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ge=A.depthTexture;if(Ve.__boundDepthTexture!==Ge){if(Ge!==null&&fe.has(Ge)&&(A.width!==Ge.image.width||A.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}let ft=A.texture;(ft.isData3DTexture||ft.isDataArrayTexture||ft.isCompressedArrayTexture)&&(Ae=!0);let pt=fe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(pt[B])?H=pt[B][K]:H=pt[B],_e=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?H=fe.get(A).__webglMultisampledFramebuffer:Array.isArray(pt)?H=pt[K]:H=pt,v.copy(A.viewport),w.copy(A.scissor),O=A.scissorTest}else v.copy(Ie).multiplyScalar(oe).floor(),w.copy(be).multiplyScalar(oe).floor(),O=St;if(ot.bindFramebuffer(N.FRAMEBUFFER,H)&&J&&ot.drawBuffers(A,H),ot.viewport(v),ot.scissor(w),ot.setScissorTest(O),_e){let Ve=fe.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ve.__webglTexture,K)}else if(Ae){let Ve=fe.get(A.texture),ft=B||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ve.__webglTexture,K||0,ft)}k=-1},this.readRenderTargetPixels=function(A,B,K,J,H,_e,Ae){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=fe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(ze=ze[Ae]),ze){ot.bindFramebuffer(N.FRAMEBUFFER,ze);try{let Ve=A.texture,ft=Ve.format,pt=Ve.type;if(!Qe.textureFormatReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-J&&K>=0&&K<=A.height-H&&N.readPixels(B,K,J,H,Ze.convert(ft),Ze.convert(pt),_e)}finally{let Ve=C!==null?fe.get(C).__webglFramebuffer:null;ot.bindFramebuffer(N.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(A,B,K,J,H,_e,Ae){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=fe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(ze=ze[Ae]),ze){let Ve=A.texture,ft=Ve.format,pt=Ve.type;if(!Qe.textureFormatReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=A.width-J&&K>=0&&K<=A.height-H){ot.bindFramebuffer(N.FRAMEBUFFER,ze);let Ge=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ge),N.bufferData(N.PIXEL_PACK_BUFFER,_e.byteLength,N.STREAM_READ),N.readPixels(B,K,J,H,Ze.convert(ft),Ze.convert(pt),0);let xe=C!==null?fe.get(C).__webglFramebuffer:null;ot.bindFramebuffer(N.FRAMEBUFFER,xe);let It=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await L0(N,It,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ge),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,_e),N.deleteBuffer(Ge),N.deleteSync(It),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,B=null,K=0){A.isTexture!==!0&&(ko("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,A=arguments[1]);let J=Math.pow(2,-K),H=Math.floor(A.image.width*J),_e=Math.floor(A.image.height*J),Ae=B!==null?B.x:0,ze=B!==null?B.y:0;P.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,Ae,ze,H,_e),ot.unbindTexture()},this.copyTextureToTexture=function(A,B,K=null,J=null,H=0){A.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,A=arguments[1],B=arguments[2],H=arguments[3]||0,K=null);let _e,Ae,ze,Ve,ft,pt;K!==null?(_e=K.max.x-K.min.x,Ae=K.max.y-K.min.y,ze=K.min.x,Ve=K.min.y):(_e=A.image.width,Ae=A.image.height,ze=0,Ve=0),J!==null?(ft=J.x,pt=J.y):(ft=0,pt=0);let Ge=Ze.convert(B.format),xe=Ze.convert(B.type);P.setTexture2D(B,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);let It=N.getParameter(N.UNPACK_ROW_LENGTH),Xt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ln=N.getParameter(N.UNPACK_SKIP_PIXELS),et=N.getParameter(N.UNPACK_SKIP_ROWS),Ue=N.getParameter(N.UNPACK_SKIP_IMAGES),Yt=A.isCompressedTexture?A.mipmaps[H]:A.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Yt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Yt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ze),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ve),A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,H,ft,pt,_e,Ae,Ge,xe,Yt.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,H,ft,pt,Yt.width,Yt.height,Ge,Yt.data):N.texSubImage2D(N.TEXTURE_2D,H,ft,pt,_e,Ae,Ge,xe,Yt),N.pixelStorei(N.UNPACK_ROW_LENGTH,It),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Xt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ln),N.pixelStorei(N.UNPACK_SKIP_ROWS,et),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ue),H===0&&B.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),ot.unbindTexture()},this.copyTextureToTexture3D=function(A,B,K=null,J=null,H=0){A.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,J=arguments[1]||null,A=arguments[2],B=arguments[3],H=arguments[4]||0);let _e,Ae,ze,Ve,ft,pt,Ge,xe,It,Xt=A.isCompressedTexture?A.mipmaps[H]:A.image;K!==null?(_e=K.max.x-K.min.x,Ae=K.max.y-K.min.y,ze=K.max.z-K.min.z,Ve=K.min.x,ft=K.min.y,pt=K.min.z):(_e=Xt.width,Ae=Xt.height,ze=Xt.depth,Ve=0,ft=0,pt=0),J!==null?(Ge=J.x,xe=J.y,It=J.z):(Ge=0,xe=0,It=0);let Ln=Ze.convert(B.format),et=Ze.convert(B.type),Ue;if(B.isData3DTexture)P.setTexture3D(B,0),Ue=N.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)P.setTexture2DArray(B,0),Ue=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);let Yt=N.getParameter(N.UNPACK_ROW_LENGTH),Lt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Nn=N.getParameter(N.UNPACK_SKIP_PIXELS),Kn=N.getParameter(N.UNPACK_SKIP_ROWS),Cn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Xt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Xt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ve),N.pixelStorei(N.UNPACK_SKIP_ROWS,ft),N.pixelStorei(N.UNPACK_SKIP_IMAGES,pt),A.isDataTexture||A.isData3DTexture?N.texSubImage3D(Ue,H,Ge,xe,It,_e,Ae,ze,Ln,et,Xt.data):B.isCompressedArrayTexture?N.compressedTexSubImage3D(Ue,H,Ge,xe,It,_e,Ae,ze,Ln,Xt.data):N.texSubImage3D(Ue,H,Ge,xe,It,_e,Ae,ze,Ln,et,Xt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Yt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Lt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Nn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Kn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Cn),H===0&&B.generateMipmaps&&N.generateMipmap(Ue),ot.unbindTexture()},this.initRenderTarget=function(A){fe.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),ot.unbindTexture()},this.resetState=function(){D=0,T=0,C=null,ot.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===hu?"display-p3":"srgb",t.unpackColorSpace=Ht.workingColorSpace===vl?"display-p3":"srgb"}};var Zo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new nt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zr=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ea=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yh,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Bn=new I,wa=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyMatrix4(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyNormalMatrix(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.transformDirection(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),s=qt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),s=qt(s,this.array),r=qt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Bf=new I,Hf=new Wt,Vf=new Wt,Cy=new I,Gf=new yt,vo=new I,Tc=new Qn,Wf=new yt,Rc=new Ur,Jo=class extends we{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yd,this.bindMatrix=new yt,this.bindMatrixInverse=new yt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,vo),this.boundingBox.expandByPoint(vo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,vo),this.boundingSphere.expandByPoint(vo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tc.copy(this.boundingSphere),Tc.applyMatrix4(s),e.ray.intersectsSphere(Tc)!==!1&&(Wf.copy(s).invert(),Rc.copy(e.ray).applyMatrix4(Wf),!(this.boundingBox!==null&&Rc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Wt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Yd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===i0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Hf.fromBufferAttribute(s.attributes.skinIndex,e),Vf.fromBufferAttribute(s.attributes.skinWeight,e),Bf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Vf.getComponent(r);if(a!==0){let o=Hf.getComponent(r);Gf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Cy.copy(Bf).applyMatrix4(Gf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Aa=class extends hn{constructor(){super(),this.isBone=!0,this.type="Bone"}},Br=class extends Tn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=kn,h=kn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xf=new yt,Py=new yt,jo=class i{constructor(e=[],t=[]){this.uuid=bi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new yt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new yt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Py;Xf.multiplyMatrices(o,t[r]),Xf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Br(t,e,e,Yn,vi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Aa),this.bones.push(a),this.boneInverses.push(new yt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Xs=class extends Pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},vr=new yt,Yf=new yt,bo=[],$f=new qn,Iy=new yt,ha=new we,ua=new Qn,Hr=class extends we{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Iy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vr),$f.copy(e.boundingBox).applyMatrix4(vr),this.boundingBox.union($f)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vr),ua.copy(e.boundingSphere).applyMatrix4(vr),this.boundingSphere.union(ua)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ha.geometry=this.geometry,ha.material=this.material,ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(n),e.ray.intersectsSphere(ua)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vr),Yf.multiplyMatrices(n,vr),ha.matrixWorld=Yf,ha.raycast(e,bo);for(let a=0,o=bo.length;a<o;a++){let l=bo[a];l.instanceId=r,l.object=this,t.push(l)}bo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Br(new Float32Array(s*this.count),s,this.count,au,vi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var oi=class extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Qo=new I,el=new I,qf=new yt,da=new Ur,Mo=new Qn,Cc=new I,Kf=new I,qi=class extends hn{constructor(e=new Kt,t=new oi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Qo.fromBufferAttribute(t,s-1),el.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Qo.distanceTo(el);e.setAttribute("lineDistance",new kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(s),Mo.radius+=r,e.ray.intersectsSphere(Mo)===!1)return;qf.copy(s).invert(),da.copy(e.ray).applyMatrix4(qf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),M=h.getX(x+1),_=So(this,e,da,l,p,M);_&&t.push(_)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=So(this,e,da,l,x,m);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=So(this,e,da,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=So(this,e,da,l,g-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function So(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(Qo.fromBufferAttribute(a,s),el.fromBufferAttribute(a,r),t.distanceSqToSegment(Qo,el,Cc,Kf)>n)return;Cc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Cc);if(!(l<e.near||l>e.far))return{distance:l,point:Kf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Zf=new I,Jf=new I,Ki=class extends qi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Zf.fromBufferAttribute(t,s),Jf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Zf.distanceTo(Jf);e.setAttribute("lineDistance",new kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},tl=class extends qi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ta=class extends ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},jf=new yt,kh=new Ur,Eo=new Qn,wo=new I,Ys=class extends hn{constructor(e=new Kt,t=new Ta){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(s),Eo.radius+=r,e.ray.intersectsSphere(Eo)===!1)return;jf.copy(s).invert(),kh.copy(e.ray).applyMatrix4(jf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);wo.fromBufferAttribute(u,m),Qf(wo,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)wo.fromBufferAttribute(u,g),Qf(wo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Qf(i,e,t,n,s,r,a){let o=kh.distanceSqToPoint(i);if(o<t){let l=new I;kh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var nl=class extends Tn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},li=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ke:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new I,s=[],r=[],a=[],o=new I,l=new yt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(_n(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(_n(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ra=class extends li{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ke){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Fh=class extends Ra{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function fu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Ao=new I,Pc=new fu,Ic=new fu,Lc=new fu,Oh=class extends li{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ao.subVectors(s[0],s[1]).add(s[0]),c=Ao);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ao.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ao),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Pc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),Ic.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Lc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Pc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ic.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Lc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Pc.calc(l),Ic.calc(l),Lc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ep(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Ly(i,e){let t=1-i;return t*t*e}function Ny(i,e){return 2*(1-i)*i*e}function Dy(i,e){return i*i*e}function _a(i,e,t,n){return Ly(i,e)+Ny(i,t)+Dy(i,n)}function Uy(i,e){let t=1-i;return t*t*t*e}function ky(i,e){let t=1-i;return 3*t*t*i*e}function Fy(i,e){return 3*(1-i)*i*i*e}function Oy(i,e){return i*i*i*e}function ya(i,e,t,n,s){return Uy(i,e)+ky(i,t)+Fy(i,n)+Oy(i,s)}var il=class extends li{constructor(e=new ke,t=new ke,n=new ke,s=new ke){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ke){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ya(e,s.x,r.x,a.x,o.x),ya(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zh=class extends li{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ya(e,s.x,r.x,a.x,o.x),ya(e,s.y,r.y,a.y,o.y),ya(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sl=class extends li{constructor(e=new ke,t=new ke){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ke){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ke){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bh=class extends li{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rl=class extends li{constructor(e=new ke,t=new ke,n=new ke){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ke){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(_a(e,s.x,r.x,a.x),_a(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hh=class extends li{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(_a(e,s.x,r.x,a.x),_a(e,s.y,r.y,a.y),_a(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},al=class extends li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ke){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(ep(o,l.x,c.x,h.x,u.x),ep(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ke().fromArray(s))}return this}},tp=Object.freeze({__proto__:null,ArcCurve:Fh,CatmullRomCurve3:Oh,CubicBezierCurve:il,CubicBezierCurve3:zh,EllipseCurve:Ra,LineCurve:sl,LineCurve3:Bh,QuadraticBezierCurve:rl,QuadraticBezierCurve3:Hh,SplineCurve:al}),Vh=class extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tp[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new tp[s.type]().fromJSON(s))}return this}},Gh=class extends Vh{constructor(e){super(),this.type="Path",this.currentPoint=new ke,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new sl(this.currentPoint.clone(),new ke(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new rl(this.currentPoint.clone(),new ke(e,t),new ke(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new il(this.currentPoint.clone(),new ke(e,t),new ke(n,s),new ke(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new al(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Ra(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ca=class i extends Kt{constructor(e=[new ke(0,-.5),new ke(.5,0),new ke(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=_n(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new I,d=new ke,f=new I,g=new I,x=new I,m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let M=0;M<=t;M++){let _=n+M*h*s,y=Math.sin(_),D=Math.cos(_);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*y,u.y=e[T].y,u.z=e[T].x*D,a.push(u.x,u.y,u.z),d.x=M/t,d.y=T/(e.length-1),o.push(d.x,d.y);let C=l[3*T+0]*y,k=l[3*T+1],Z=l[3*T+0]*D;c.push(C,k,Z)}}for(let M=0;M<t;M++)for(let _=0;_<e.length-1;_++){let y=_+M*e.length,D=y,T=y+e.length,C=y+e.length+1,k=y+1;r.push(D,T,k),r.push(C,k,T)}this.setIndex(r),this.setAttribute("position",new kt(a,3)),this.setAttribute("uv",new kt(o,2)),this.setAttribute("normal",new kt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},ol=class i extends Ca{constructor(e=1,t=1,n=4,s=8){let r=new Gh;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}};var bn=class i extends Kt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;M(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new kt(u,3)),this.setAttribute("normal",new kt(d,3)),this.setAttribute("uv",new kt(f,2));function M(){let y=new I,D=new I,T=0,C=(t-e)/n;for(let k=0;k<=r;k++){let Z=[],v=k/r,w=v*(t-e)+e;for(let O=0;O<=s;O++){let V=O/s,$=V*l+o,se=Math.sin($),F=Math.cos($);D.x=w*se,D.y=-v*n+m,D.z=w*F,u.push(D.x,D.y,D.z),y.set(se,C,F).normalize(),d.push(y.x,y.y,y.z),f.push(V,1-v),Z.push(g++)}x.push(Z)}for(let k=0;k<s;k++)for(let Z=0;Z<r;Z++){let v=x[Z][k],w=x[Z+1][k],O=x[Z+1][k+1],V=x[Z][k+1];e>0&&(h.push(v,w,V),T+=3),t>0&&(h.push(w,O,V),T+=3)}c.addGroup(p,T,0),p+=T}function _(y){let D=g,T=new ke,C=new I,k=0,Z=y===!0?e:t,v=y===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;let w=g;for(let O=0;O<=s;O++){let $=O/s*l+o,se=Math.cos($),F=Math.sin($);C.x=Z*F,C.y=m*v,C.z=Z*se,u.push(C.x,C.y,C.z),d.push(0,v,0),T.x=se*.5+.5,T.y=F*.5*v+.5,f.push(T.x,T.y),g++}for(let O=0;O<s;O++){let V=D+O,$=w+O;y===!0?h.push($,$+1,V):h.push($+1,$,V),k+=3}c.addGroup(p,k,y===!0?1:2),p+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ll=class i extends bn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wh=class i extends Kt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new kt(r,3)),this.setAttribute("normal",new kt(r.slice(),3)),this.setAttribute("uv",new kt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let _=new I,y=new I,D=new I;for(let T=0;T<t.length;T+=3)f(t[T+0],_),f(t[T+1],y),f(t[T+2],D),l(_,y,D,M)}function l(M,_,y,D){let T=D+1,C=[];for(let k=0;k<=T;k++){C[k]=[];let Z=M.clone().lerp(y,k/T),v=_.clone().lerp(y,k/T),w=T-k;for(let O=0;O<=w;O++)O===0&&k===T?C[k][O]=Z:C[k][O]=Z.clone().lerp(v,O/w)}for(let k=0;k<T;k++)for(let Z=0;Z<2*(T-k)-1;Z++){let v=Math.floor(Z/2);Z%2===0?(d(C[k][v+1]),d(C[k+1][v]),d(C[k][v])):(d(C[k][v+1]),d(C[k+1][v+1]),d(C[k+1][v]))}}function c(M){let _=new I;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(M),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let M=new I;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let y=m(M)/2/Math.PI+.5,D=p(M)/Math.PI+.5;a.push(y,1-D)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){let _=a[M+0],y=a[M+2],D=a[M+4],T=Math.max(_,y,D),C=Math.min(_,y,D);T>.9&&C<.1&&(_<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),D<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,_){let y=M*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function g(){let M=new I,_=new I,y=new I,D=new I,T=new ke,C=new ke,k=new ke;for(let Z=0,v=0;Z<r.length;Z+=9,v+=6){M.set(r[Z+0],r[Z+1],r[Z+2]),_.set(r[Z+3],r[Z+4],r[Z+5]),y.set(r[Z+6],r[Z+7],r[Z+8]),T.set(a[v+0],a[v+1]),C.set(a[v+2],a[v+3]),k.set(a[v+4],a[v+5]),D.copy(M).add(_).add(y).divideScalar(3);let w=m(D);x(T,v+0,M,w),x(C,v+2,_,w),x(k,v+4,y,w)}}function x(M,_,y,D){D<0&&M.x===1&&(a[_]=M.x-1),y.x===0&&y.z===0&&(a[_]=D/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var To=new I,Ro=new I,Nc=new I,Co=new ms,Pa=class extends Kt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Er*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:m,c:p}=Co;if(x.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Co.getNormal(Nc),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){let _=(M+1)%3,y=u[M],D=u[_],T=Co[h[M]],C=Co[h[_]],k=`${y}_${D}`,Z=`${D}_${y}`;Z in d&&d[Z]?(Nc.dot(d[Z].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(C.x,C.y,C.z)),d[Z]=null):k in d||(d[k]={index0:c[M],index1:c[_],normal:Nc.clone()})}}for(let g in d)if(d[g]){let{index0:x,index1:m}=d[g];To.fromBufferAttribute(o,x),Ro.fromBufferAttribute(o,m),f.push(To.x,To.y,To.z),f.push(Ro.x,Ro.y,Ro.z)}this.setAttribute("position",new kt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var cl=class i extends Wh{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Zi=class i extends Kt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new I,g=new ke;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let M=p+m,_=M,y=M+n+1,D=M+n+2,T=M+1;o.push(_,y,T),o.push(y,D,T)}}this.setIndex(o),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(c,3)),this.setAttribute("uv",new kt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var In=class i extends Kt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new I,d=new I,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let M=[],_=p/n,y=0;p===0&&a===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let D=0;D<=t;D++){let T=D/t;u.x=-e*Math.cos(s+T*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(s+T*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+y,1-_),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let _=h[p][M+1],y=h[p][M],D=h[p+1][M],T=h[p+1][M+1];(p!==0||a>0)&&f.push(_,y,T),(p!==n-1||l<Math.PI)&&f.push(y,D,T)}this.setIndex(f),this.setAttribute("position",new kt(g,3)),this.setAttribute("normal",new kt(x,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var hl=class i extends Kt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,M=(s+1)*f+g;a.push(x,m,M),a.push(m,p,M)}this.setIndex(a),this.setAttribute("position",new kt(o,3)),this.setAttribute("normal",new kt(l,3)),this.setAttribute("uv",new kt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var jt=class extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vp,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ni=class extends jt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _n(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Po(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function zy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function By(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function np(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Pp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var bs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xh=class extends bs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$d,endingEnd:$d}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case qd:r=e,o=2*t-n;break;case Kd:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qd:a=e,l=2*n-t;break;case Kd:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,M=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let D=0;D!==o;++D)r[D]=p*a[h+D]+M*a[c+D]+_*a[l+D]+y*a[u+D];return r}},Yh=class extends bs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},$h=class extends bs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ci=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Po(t,this.TimeBufferType),this.values=Po(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Po(e.times,Array),values:Po(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $h(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Lr:t=this.InterpolantFactoryMethodDiscrete;break;case Nr:t=this.InterpolantFactoryMethodLinear;break;case Ql:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return Nr;case this.InterpolantFactoryMethodSmooth:return Ql}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&zy(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ql,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=Nr;var Ms=class extends ci{constructor(e,t,n){super(e,t,n)}};Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=Lr;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends ci{};ul.prototype.ValueTypeName="color";var Ji=class extends ci{};Ji.prototype.ValueTypeName="number";var qh=class extends bs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Mi.slerpFlat(r,0,a,c-o,a,c,l);return r}},ji=class extends ci{InterpolantFactoryMethodLinear(e){return new qh(this.times,this.values,this.getValueSize(),e)}};ji.prototype.ValueTypeName="quaternion";ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Ss=class extends ci{constructor(e,t,n){super(e,t,n)}};Ss.prototype.ValueTypeName="string";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=Lr;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends ci{};Qi.prototype.ValueTypeName="vector";var dl=class{constructor(e="",t=-1,n=[],s=s0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=bi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Vy(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(ci.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=By(l);l=np(l,1,h),c=np(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ji(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,x){if(f.length!==0){let m=[],p=[];Pp(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){let _=d[g];m.push(_.time),p.push(_.morphTarget===x?1:0)}s.push(new Ji(".morphTargetInfluence["+x+"]",m,p))}l=f.length*a}else{let f=".bones["+t[u].name+"]";n(Qi,f+".position",d,"pos",s),n(ji,f+".quaternion",d,"rot",s),n(Qi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Hy(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ji;case"vector":case"vector2":case"vector3":case"vector4":return Qi;case"color":return ul;case"quaternion":return ji;case"bool":case"boolean":return Ms;case"string":return Ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Vy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Hy(i.type);if(i.times===void 0){let t=[],n=[];Pp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var gs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Kh=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Gy=new Kh,es=class{constructor(e){this.manager=e!==void 0?e:Gy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};es.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hi={},Zh=class extends Error{constructor(e,t){super(e),this.response=t}},Ia=class extends es{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=gs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Hi[e]!==void 0){Hi[e].push({onLoad:t,onProgress:n,onError:s});return}Hi[e]=[],Hi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Hi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){M();function M(){u.read().then(({done:_,value:y})=>{if(_)p.close();else{x+=y.byteLength;let D=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let T=0,C=h.length;T<C;T++){let k=h[T];k.onProgress&&k.onProgress(D)}p.enqueue(y),M()}},_=>{p.error(_)})}}});return new Response(m)}else throw new Zh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{gs.add(e,c);let h=Hi[e];delete Hi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Hi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Hi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Jh=class extends es{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=gs.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Ma("img");function l(){h(),gs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Vr=class extends es{constructor(e){super(e)}load(e,t,n,s){let r=new Tn,a=new Jh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Gr=class extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},fl=class extends Gr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Dc=new yt,ip=new I,sp=new I,La=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sa,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ip.setFromMatrixPosition(e.matrixWorld),t.position.copy(ip),sp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sp),t.updateMatrixWorld(),Dc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},jh=class extends La{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Dr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},pl=class extends Gr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new jh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},rp=new yt,fa=new I,Uc=new I,Qh=class extends La{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new Wt(2,1,1,1),new Wt(0,1,1,1),new Wt(3,1,1,1),new Wt(1,1,1,1),new Wt(3,0,1,1),new Wt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),fa.setFromMatrixPosition(e.matrixWorld),n.position.copy(fa),Uc.copy(n.position),Uc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Uc),n.updateMatrixWorld(),s.makeTranslation(-fa.x,-fa.y,-fa.z),rp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rp)}},Wr=class extends Gr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Qh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},eu=class extends La{constructor(){super(new Fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xr=class extends Gr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new eu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Es=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ml=class extends es{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=gs.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return gs.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),gs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});gs.add(e,l),r.manager.itemStart(e)}};var gl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ap(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=ap();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function ap(){return performance.now()}var pu="\\[\\]\\.:\\/",Wy=new RegExp("["+pu+"]","g"),mu="[^"+pu+"]",Xy="[^"+pu.replace("\\.","")+"]",Yy=/((?:WC+[\/:])*)/.source.replace("WC",mu),$y=/(WCOD+)?/.source.replace("WCOD",Xy),qy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mu),Ky=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mu),Zy=new RegExp("^"+Yy+$y+qy+Ky+"$"),Jy=["material","materials","bones","map"],tu=class{constructor(e,t,n){let s=n||sn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},sn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wy,"")}static parseTrackName(e){let t=Zy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Jy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};sn.Composite=tu;sn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};sn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};sn.prototype.GetterByBindingType=[sn.prototype._getValue_direct,sn.prototype._getValue_array,sn.prototype._getValue_arrayElement,sn.prototype._getValue_toArray];sn.prototype.SetterByBindingTypeAndVersioning=[[sn.prototype._setValue_direct,sn.prototype._setValue_direct_setNeedsUpdate,sn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_array,sn.prototype._setValue_array_setNeedsUpdate,sn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_arrayElement,sn.prototype._setValue_arrayElement_setNeedsUpdate,sn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_fromArray,sn.prototype._setValue_fromArray_setNeedsUpdate,sn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dv=new Float32Array(1);var xl=class extends Ki{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Kt;r.setIndex(new Pt(n,1)),r.setAttribute("position",new kt(s,3)),super(r,new oi({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var Vn={hull:{de:"Hallenh\xFClle / Tragwerk",en:"Hall envelope / structure",rho:0,c:"#7d8799"},concrete:{de:"Beton",en:"Concrete",rho:2400,c:"#b8bcc4"},steel:{de:"Stahl",en:"Steel",rho:7850,c:"#4da6ff"},brick:{de:"Ziegelbruch (Sch\xFCttgut)",en:"Brick rubble (bulk)",rho:1400,c:"#c99a5b"},hazard:{de:"Schadstoff (Asbest)",en:"Hazardous (asbestos)",rho:1e3,c:"#ff5a5f"},wood:{de:"Holz",en:"Wood",rho:600,c:"#e0b07a"},soil:{de:"Sch\xFCttgut (Stein, Sand)",en:"Bulk material (stone, sand)",rho:1700,c:"#a8b06a"},masonry:{de:"Mauerwerk / Trockenbau",en:"Masonry / drywall",rho:1200,c:"#c8d2e0"},mixed:{de:"Sonstiges / Technik",en:"Other / equipment",rho:0,c:"#9b8cff"},none:{de:"Personen & Fahrzeuge",en:"People & vehicles",rho:0,c:"#5fd38d"}};var ts=[{id:"seg",st:"uc1",key:"G",icon:"\u25E7",t:Ee("Semantische Segmentierung","Semantic segmentation"),d:Ee("Die ganze Szene in Umgebung \xB7 Boden \xB7 Ziel \u2013 Ziel sind alle wichtigen Objekte (Klassen wie in Artefakt A1).","The whole scene as environment \xB7 floor \xB7 target \u2013 targets are all relevant objects (classes as in artefact A1).")},{id:"search",st:"uc2",key:"Z",icon:"\u2315",t:Ee("Zero-Shot-Suche","Zero-shot search"),d:Ee("Textprompt \u2192 Objekt-Cluster mit Bounding Box, ohne Training \u2013 wie GroundingDINO \u2192 SAM (Artefakt A3).","Text prompt \u2192 object clusters with bounding boxes, no training \u2013 like GroundingDINO \u2192 SAM (artefact A3).")},{id:"heat",st:"uc3",key:"H",icon:"\u25A6",t:Ee("Merkmals-Heatmap","Feature heatmap"),d:Ee("Die 16 Eingangsmerkmale des RandLA-Net (k = 30) auf jedem Punkt \u2013 plus Ebenheit des Hallenbodens.","The 16 RandLA-Net input features (k = 30) on every point \u2013 plus hall floor flatness.")},{id:"xray",st:"uc4",key:"X",icon:"\u29C9",t:Ee("Soll-Ist-Overlay","As-planned vs. as-built"),d:Ee("Das Planungsmodell liegt \xFCber dem Scan: gr\xFCn verifiziert, orange abweichend, rot geplant aber nicht im Scan \u2013 am ReStage-Demonstrator mit der echten Objektverifikation (Artefakt A2).","The planning model sits on top of the scan: green verified, orange deviating, red planned but not in the scan \u2013 on the ReStage demonstrator with the real object verification (artefact A2).")},{id:"mesh",st:"uc5",key:"M",icon:"\u25B3",t:Ee("Scan-to-Mesh & Modell","Scan-to-mesh & model"),d:Ee("Live-Oberfl\xE4chen (Marching Cubes) mit einstellbarer Feinheit, objektweise \u2013 oder das nachmodellierte Modell.","Live surfaces (marching cubes) with adjustable detail, per object \u2013 or the reconstructed model.")},{id:"cut",st:"uc5",key:"5",icon:"\u229F",t:Ee("Schnittebene","Section plane"),d:Ee("Horizontal-, L\xE4ngs- oder Querschnitt durch Punktwolke, Mesh und Modell \u2013 die Schnittkante leuchtet, wie in der Planungssoftware.","Horizontal, longitudinal or cross section through point cloud, mesh and model \u2013 the cut edge lights up, as in planning software.")},{id:"mat",st:"uc6",key:"V",icon:"\u2B22",t:Ee("Materialkataster","Material register"),d:Ee("Jeder Punkt nach Material, Mengen und Massen aus dem Modell \u2013 Grundlage f\xFCr R\xFCckbau und Kreislauf.","Every point by material, quantities and masses from the model \u2013 the basis for deconstruction and circularity.")},{id:"net",st:"uc7",icon:"\u2316",passive:!0,t:Ee("Scanner-Netzwerk","Scanner network"),d:Ee("Station\xE4re Laserscanner: bis zu 6 statt 3 gleichzeitig \u2013 wie das LiDAR-Netz der Smart City.","Stationary laser scanners: up to 6 instead of 3 at once \u2013 like the smart-city LiDAR network.")},{id:"nbv",st:"uc7",key:"Y",icon:"\u233E",t:Ee("Scan-Planer (Next Best View)","Scan planner (next best view)"),d:Ee("Schl\xE4gt die n\xE4chsten TLS-Standpunkte vor: gr\xF6\xDFter erwarteter Neuzuwachs bei wenig Verdeckung \u2013 weniger Standpunkte, weniger Akku.","Suggests the next TLS positions: largest expected gain with little occlusion \u2013 fewer set-ups, less battery.")},{id:"therm",st:"uc8",key:"I",icon:"\u2668",t:Ee("Thermalkamera","Thermal camera"),d:Ee("W\xE4rmebild wie im WAAM-Monitoring: frische Schichten gl\xFChen, Anlagen und Personen sind warm.","Thermal view as in WAAM monitoring: fresh layers glow, machines and people are warm.")},{id:"measure",st:"uc9",key:"N",icon:"\u27F7",t:Ee("Messwerkzeug","Measuring tool"),d:Ee("Zwei Punkte anklicken \u2192 Abstand in mm, direkt in der Punktwolke.","Click two points \u2192 distance in mm, directly in the point cloud.")},{id:"ask",st:"docs",key:"B",icon:"\u275D",t:Ee("Frag das Lab","Ask the lab"),d:Ee("Fragen zum Scan \u2013 Antworten aus Scan, Segmentierung und Modell, immer mit Quelle (regelbasiert, offline).","Questions about the scan \u2013 answers from scan, segmentation and model, always with a source (rule-based, offline).")},{id:"auto",st:"talks",key:"O",icon:"\u2708",t:Ee("Autopilot","Autopilot"),d:Ee("Pr\xE4sentationsmodus: Die Drohne fliegt, scannt und l\xE4dt selbst und zeigt jede Station.","Presentation mode: the drone flies, scans and charges by itself and presents every station.")},{id:"range",st:"profile",icon:"\u21F2",passive:!0,t:Ee("Reichweiten-Upgrade","Range upgrade"),d:Ee("+50 % Scanreichweite f\xFCr alle Technologien.","+50 % scanning range for every technology.")},{id:"icp",st:"bonus",key:"R",icon:"\u229B",t:Ee("Registrierung (ICP)","Registration (ICP)"),d:Ee("SLAM-Drift beseitigen: Scans per ICP auf die Zielmarken registrieren (Artefakt A2).","Remove SLAM drift: register scans to the targets via ICP (artefact A2).")}],Ip=[{id:"labels",key:"L",icon:"\u{1F3F7}",t:Ee("Labels","Labels")},{id:"plan",key:"K",icon:"\u25A4",t:Ee("Grundriss","Floor plan")},{id:"proj",key:"J",icon:"\u25EB",t:Ee("Projektionen","Projections")},{id:"pano",key:"U",icon:"\u25CE",t:Ee("360\xB0-Panoramen","360\xB0 panoramas")}],gu=[{id:"drone",key:"1",icon:"\u2723",t:Ee("Drohne \xB7 UAV-LiDAR","Drone \xB7 UAV LiDAR"),d:Ee("Aus der Luft, gro\xDFfl\xE4chig. H\xF6her fliegen = breiterer Scan. Akku h\xE4lt nicht ewig.","From above, large areas. Fly higher = wider scan. The battery does not last forever."),dt:Ee("Joystick links fliegen, \u2912 \u2913 H\xF6he, ein Finger dreht die Ansicht, zwei Finger zoomen.","Left joystick flies, \u2912 \u2913 altitude, one finger turns the view, two fingers zoom.")},{id:"handheld",key:"2",icon:"\u25C9",t:Ee("Handheld \xB7 SLAM","Handheld \xB7 SLAM"),d:Ee("Ego-Perspektive am Boden. Leertaste halten = scannen, wohin du schaust.","First person on the ground. Hold space = scan where you look."),dt:Ee("Ego-Perspektive. Joystick gehen, Finger umsehen, \u25CF halten = scannen, wohin du schaust.","First person. Joystick walks, finger looks around, hold \u25CF = scan where you look.")},{id:"tls",key:"3",icon:"\u2295",t:Ee("Station\xE4r \xB7 TLS","Stationary \xB7 TLS"),d:Ee("Scanner aufstellen (P), dann alle gleichzeitig scannen (Leertaste) \u2013 mit echten Scan-Schatten und 360\xB0-Panorama.","Set up scanners (P), then scan with all at once (space) \u2013 with real scan shadows and 360\xB0 panoramas."),dt:Ee("\u2295 Scanner aufstellen, \u25B6 alle gleichzeitig scannen \u2013 mit echten Scan-Schatten und 360\xB0-Panorama.","\u2295 set up scanners, \u25B6 scan with all at once \u2013 with real scan shadows and 360\xB0 panoramas.")}],$s=[{k:"x",t:Ee("Koordinate x","coordinate x"),i:0},{k:"y",t:Ee("Koordinate y","coordinate y"),i:2},{k:"z",t:Ee("Koordinate z (H\xF6he)","coordinate z (height)"),i:1},{k:"nx",t:Ee("Normale x","normal x"),i:3},{k:"ny",t:Ee("Normale y","normal y"),i:5},{k:"nz",t:Ee("Normale z (vertikal)","normal z (vertical)"),i:4},{k:"planarity",t:Ee("Planarit\xE4t (\u03BB\u2082\u2212\u03BB\u2083)/\u03BB\u2081 \u2013 Fl\xE4chen","planarity (\u03BB\u2082\u2212\u03BB\u2083)/\u03BB\u2081 \u2013 surfaces"),i:6},{k:"density",t:Ee("Punktdichte im mittleren Radius","point density in mean radius"),i:7},{k:"anisotropy",t:Ee("Anisotropie (\u03BB\u2081\u2212\u03BB\u2083)/\u03BB\u2081","anisotropy (\u03BB\u2081\u2212\u03BB\u2083)/\u03BB\u2081"),i:8},{k:"sphericity",t:Ee("Sph\xE4rizit\xE4t \u03BB\u2083/\u03BB\u2081 \u2013 Volumen, Streuung","sphericity \u03BB\u2083/\u03BB\u2081 \u2013 volume, scatter"),i:9},{k:"curvature",t:Ee("Kr\xFCmmung \u03BB\u2083/\u03A3\u03BB \u2013 Kanten","curvature \u03BB\u2083/\u03A3\u03BB \u2013 edges"),i:10},{k:"linearity",t:Ee("Linearit\xE4t (\u03BB\u2081\u2212\u03BB\u2082)/\u03BB\u2081 \u2013 St\xE4be, Kanten","linearity (\u03BB\u2081\u2212\u03BB\u2082)/\u03BB\u2081 \u2013 bars, edges"),i:11},{k:"omnivariance",t:Ee("Omnivarianz \u221B(\u03BB\u2081\u03BB\u2082\u03BB\u2083)","omnivariance \u221B(\u03BB\u2081\u03BB\u2082\u03BB\u2083)"),i:12},{k:"eigenentropy",t:Ee("Eigenentropie \u2212\u03A3\u03BB\xB7ln \u03BB","eigenentropy \u2212\u03A3\u03BB\xB7ln \u03BB"),i:13},{k:"eigen_sum",t:Ee("Eigenwertsumme \u03A3\u03BB","sum of eigenvalues \u03A3\u03BB"),i:14},{k:"gravity_dist",t:Ee("Abstand zum Schwerpunkt dichter Bereiche","distance to centre of dense regions"),i:15},{k:"flatness",t:Ee("Ebenheit Hallenboden \xB14 cm (Ausgleichsebene)","hall floor flatness \xB14 cm (best-fit plane)"),i:16}],Sl={auto:["fahrzeug","vehicle"],car:["fahrzeug","vehicle"],pkw:["fahrzeug"],mensch:["person","people"],menschen:["person","people"],human:["person","people"],personen:["person"],people:["person"],fahrrad:["radfahrer","cyclist"],bike:["radfahrer","cyclist"],stahl:["stahl","steel","tr\xE4ger","beam","st\xFCtze","binder"],steel:["stahl","steel","beam","column","truss"],bewehrung:["stab","bar"],rebar:["stab","bar"],maschine:["anlage","line"],machine:["anlage","line"],m\u00F6bel:["tisch","stuhl","furniture"],stuhl:["stuhl","chair"],chair:["chair"],tisch:["tisch","table"],roboter:["wand","wall"],drucker:["wand","wall"],waam:["wand","wall"],asbest:["asbest","asbestos","big bag"],schadstoff:["asbest","asbestos"],sch\u00FCttgut:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],schuettgut:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],haufen:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],sand:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],sandhaufen:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],steinhaufen:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],kies:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],schotter:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],schutt:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],bauschutt:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],erde:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],pile:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],bulk:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],rubble:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],gravel:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],stones:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],steine:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],dokument:["lieferschein","werkszeugnis","gutachten","dokumente"],pdf:["dokumente","documents"],scanner:["laserscanner","laser scanner"],kugel:["zielkugel"],target:["zielkugel","target"]};var jy=i=>[parseInt(i.slice(1,3),16)/255,parseInt(i.slice(3,5),16)/255,parseInt(i.slice(5,7),16)/255],Ot=(i,e,t,n,s)=>({name:Ee(i,e),c:jy(t),m:n,inst:s}),ns=(i,e,t)=>Array.from({length:t},(n,s)=>Ee(`${i} ${s+1}`,`${e} ${s+1}`)),it=[{id:"uc1",kind:"uc",uc:1,t:Ee("Vorfertigung & QC","Prefab QC"),x:-12,z:-14,r:3.2,c:"#4da6ff",parts:[Ot("Stahltr\xE4ger","steel beam","#4da6ff","steel"),Ot("Kopfplatten","end plates","#5fd38d","steel",ns("Kopfplatte","end plate",2)),Ot("Auflager","supports","#9aa8b8","wood",ns("Auflager","support",2))]},{id:"uc2",kind:"uc",uc:2,t:Ee("Material & Ressourcen","Material & resources"),x:-8,z:49.5,r:6,c:"#ffb547",parts:[Ot("Bagger","excavator","#ffb547","mixed"),Ot("Sch\xFCttgut \xB7 Steinhaufen (echt)","bulk material \xB7 stone pile (real)","#e0b07a","soil"),Ot("Minikran Jecko (echt)","Jecko mini crane (real)","#ff8a5b","mixed")]},{id:"uc3",kind:"uc",uc:3,t:Ee("Fortschritt & Qualit\xE4t","Progress & quality"),x:3,z:41,r:6,c:"#5fd38d",parts:[Ot("ReStage-Demonstrator \xB7 21 von 119 Bauteilen verifiziert","ReStage demonstrator \xB7 21 of 119 components verified","#c8d2e0","mixed")]},{id:"uc4",kind:"uc",uc:4,t:Ee("Digital Operations","Digital operations"),x:6,z:-14,r:3.2,c:"#ff8a5b",parts:[Ot("S\xE4ge-Bohr-Anlage \xB7 Warnung","saw-drill line \xB7 warning","#ff8a5b","mixed"),Ot("Rollenbahn","roller conveyor","#9aa8b8","steel",ns("Rollenbahn","conveyor",2)),Ot("Sensoren \xB7 4 live","sensors \xB7 4 live","#5fd38d","mixed",ns("Sensor","sensor",4))]},{id:"uc5",kind:"uc",uc:5,t:Ee("Scan-to-BIM","Scan-to-BIM"),x:-11,z:2,r:3.4,c:"#9b8cff",parts:[Ot("W\xE4nde \xB7 0,24 m","walls \xB7 0.24 m","#c8d2e0","masonry"),Ot("T\xFCr & Fenster \xB7 1,01 \xD7 2,10 m","door & window \xB7 1.01 \xD7 2.10 m","#8bd17c","wood",[Ee("T\xFCr","door"),Ee("Fenster","window")]),Ot("M\xF6bel \xB7 Tisch, 4 St\xFChle","furniture \xB7 table, 4 chairs","#e0b07a","wood",[Ee("Tisch","table"),...ns("Stuhl","chair",4)])]},{id:"uc6",kind:"uc",uc:6,t:Ee("Brownfield & Kreislauf","Brownfield & circularity"),x:4.5,z:53,r:5,c:"#ff5a5f",parts:[Ot("Sch\xFCttgut \xB7 Ziegelbruch","bulk material \xB7 brick rubble","#c99a5b","brick"),Ot("Big Bags \xB7 Asbest","big bags \xB7 asbestos","#ff5a5f","hazard",ns("Big Bag","big bag",8)),Ot("Stahl \xB7 wiederverwendbar","steel \xB7 reusable","#4da6ff","steel",ns("Stahlprofil","steel section",4)),Ot("Holzlager \xB7 wiederverwendbar (echt)","timber storage \xB7 reusable (real)","#e0b07a","wood")]},{id:"uc7",kind:"uc",uc:7,t:Ee("Smart City","Smart city"),x:4,z:22,r:3.8,c:"#5ce1e6",parts:[Ot("Fahrzeug","vehicle","#4da6ff","none"),Ot("Personen \xB7 3","people \xB7 3","#5fd38d","none",ns("Person","person",3)),Ot("Radfahrer","cyclist","#c792ea","none")]},{id:"uc8",kind:"uc",uc:8,t:Ee("WAAM \xB7 In-situ","WAAM \xB7 in-situ"),x:10,z:2,r:3.2,c:"#ffcf70",parts:[Ot("Wand A \xB7 45,9 mm \xB7 19,6\xB0","wall A \xB7 45.9 mm \xB7 19.6\xB0","#5fd38d","steel"),Ot("Wand B \xB7 29,4 mm \xB7 27,5\xB0","wall B \xB7 29.4 mm \xB7 27.5\xB0","#ff8a8a","steel"),Ot("Grundplatte","base plate","#9aa8b8","steel")]},{id:"uc9",kind:"uc",uc:9,t:Ee("Bewehrungspr\xFCfung","Rebar inspection"),x:-22,z:6,r:3.4,c:"#ff5a5f",parts:[Ot("St\xE4be \xB7 konform","bars \xB7 conform","#5fd38d","steel"),Ot("Stab \xB7 \xD812 statt \xD816","bar \xB7 \xD812 instead of \xD816","#ff5a5f","steel"),Ot("Stab \xB7 16 mm versetzt","bar \xB7 displaced 16 mm","#ffb547","steel")]},{id:"docs",kind:"docs",t:Ee("Document Intelligence","Document intelligence"),x:-22,z:-3,r:3,c:"#5ce1e6",parts:[Ot("Tisch","table","#9aa8b8","wood"),Ot("Dokumente \xB7 3 Typen erkannt","documents \xB7 3 types detected","#5ce1e6","mixed",[Ee("Lieferschein","delivery note"),Ee("Werkszeugnis","mill certificate"),Ee("Gutachten","survey report")])]},{id:"talks",kind:"talks",t:Ee("Vortr\xE4ge & Beitr\xE4ge","Talks & posts"),x:-4,z:4,r:3,c:"#c792ea",parts:[Ot("B\xFChne","stage","#9aa8b8","wood"),Ot("Leinwand","screen","#c792ea","mixed"),Ot("Rednerpult","lectern","#4da6ff","wood")]},{id:"profile",kind:"profile",t:Ee("Profil \xB7 Luca Fahrendholz-Heiermann","Profile \xB7 Luca Fahrendholz-Heiermann"),x:10,z:8.5,r:3,c:"#4da6ff",parts:[Ot("Scanner-Stativ","scanner tripod","#9aa8b8","steel"),Ot("Laserscanner","laser scanner","#4da6ff","mixed")]},{id:"bonus",kind:"bonus",bonus:!0,t:Ee("Bonus \xB7 Registrier-Zielmarken","Bonus \xB7 registration targets"),x:-15.2,z:-7.6,r:1.6,c:"#ffcf70",parts:[Ot("Hochregal","high rack","#9aa8b8","steel"),Ot("Zielkugeln \xB7 3","target spheres \xB7 3","#ffcf70","mixed",ns("Zielkugel","target sphere",3))]}],Fa=it.filter(i=>!i.bonus).length;var qs=(i,...e)=>e.some(t=>i.includes(t)),Lp=(i,e,t)=>{let n=Math.atan2(i,-e)*180/Math.PI;return(t?["north","north-east","east","south-east","south","south-west","west","north-west"]:["Norden","Nordosten","Osten","S\xFCdosten","S\xFCden","S\xFCdwesten","Westen","Nordwesten"])[Math.round((n+360)%360/45)%8]},Np=(i,e)=>{let t=e.lang==="en",n=i.toLowerCase(),s=(g,x)=>t?x:g,r=e.clusters.filter(g=>e.cluFrac(g.id)>=.3&&e.stState[g.g]!=="hidden"),a=new Set(["wie","viel","viele","wo","ist","sind","gibt","welche","welcher","was","der","die","das","den","ein","eine","es","hier","im","in","how","many","much","where","what","which","the","are","is","any","there"]),l=n.split(/[^a-zäöüß0-9]+/).filter(g=>g.length>2&&!a.has(g)).flatMap(g=>[g,g.replace(/(en|e|n|s)$/,""),...Sl[g]??[]]).filter(g=>g.length>2),c=g=>{let x=it[g.g],m=x.parts[g.p]??x.parts[0],p=[g.name.de,g.name.en,ht(m.name,"de"),ht(m.name,"en")].map(M=>M.toLowerCase());return l.some(M=>p.some(_=>_.includes(M)))},h=g=>{let x=it[g.g];return`${ht(g.name,e.lang)} (${x.kind==="uc"?`UC${x.uc}`:ht(x.t,e.lang)})`},u=g=>[...new Set(g.map(x=>`${s("Scan-Cluster","scan cluster")} \xB7 ${it[x.g].kind==="uc"?`UC${it[x.g].uc}`:ht(it[x.g].t,e.lang)}`))];if(!n.trim()||qs(n,"hilfe","help","was kannst","what can"))return{q:i,a:s("Frag z. B.: \u201EWie viele Personen?\u201C, \u201EWo ist der Bagger?\u201C, \u201EWelche Abweichungen gibt es?\u201C, \u201EWie viel Stahl?\u201C, \u201EGibt es Schadstoffe?\u201C, \u201EWie weit bin ich?\u201C",'Try: "How many people?", "Where is the excavator?", "Which deviations?", "How much steel?", "Any hazardous materials?", "How far am I?"'),src:[s("regelbasiert \xB7 offline","rule-based \xB7 offline")]};if(qs(n,"wie weit","fortschritt","how far","progress","abdeckung","coverage","erfasst")){let g=e.stState.filter(x=>x==="done").length;return{q:i,a:s(`Halle zu ${Math.round(e.cov*100)} % erfasst, ${g} von ${e.stState.length} Bereichen analysiert, ${r.length} Objekte segmentiert.`,`Hall ${Math.round(e.cov*100)} % captured, ${g} of ${e.stState.length} areas analysed, ${r.length} objects segmented.`),src:[s("Scan-Fortschritt","scan progress")]}}if(qs(n,"abweich","deviation","toleranz","tolerance","fehler","mangel","defect","versetzt","falsch")){let g=r.filter(x=>/abweich|versetzt|statt|warnung/i.test(ht((it[x.g].parts[x.p]??it[x.g].parts[0]).name,"de")));return g.length?{q:i,a:g.map(x=>`\u2022 ${ht((it[x.g].parts[x.p]??it[x.g].parts[0]).name,e.lang)} \u2013 ${h(x)}`).join(`
`),src:u(g)}:{q:i,a:s("Bisher keine Abweichungen in den erfassten Bereichen gefunden.","No deviations found in the captured areas so far."),src:[s("Soll-Ist-Vergleich","as-planned vs. as-built")]}}if(qs(n,"schadstoff","asbest","gefahr","hazard","asbestos","danger")){let g=r.filter(x=>x.mat==="hazard");return g.length?{q:i,a:s(`${g.length} Big Bags mit Asbest erfasst (\u2248 ${g.reduce((x,m)=>x+m.vol,0).toFixed(2)} m\xB3) \u2013 Bereich absperren, Entsorgung nach TRGS 519.`,`${g.length} big bags with asbestos captured (\u2248 ${g.reduce((x,m)=>x+m.vol,0).toFixed(2)} m\xB3) \u2013 cordon off, dispose per regulations.`),src:[...u(g),s("Materialkataster","material register")]}:{q:i,a:s("In den erfassten Bereichen sind keine Schadstoffe markiert.","No hazardous materials marked in the captured areas."),src:[s("Materialkataster","material register")]}}let d=r.filter(c);if(qs(n,"wie viele","anzahl","how many","count","z\xE4hl"))return d.length?{q:i,a:s(`${d.length} erfasst: ${d.map(h).join(", ")}.`,`${d.length} captured: ${d.map(h).join(", ")}.`),src:u(d)}:{q:i,a:s("Dazu habe ich in den erfassten Bereichen nichts gefunden \u2013 erst scannen, dann fragen.","Nothing found in the captured areas \u2013 scan first, then ask."),src:[s("Scan","scan")]};let f=Object.keys(Vn).find(g=>g!=="none"&&g!=="hull"&&l.some(x=>Vn[g].de.toLowerCase().includes(x)||Vn[g].en.toLowerCase().includes(x)));if((/wie viel(?!e)/.test(n)||qs(n,"how much","masse","mass","gewicht","weight","tonnen","volumen","volume","material"))&&f){let g=r.filter(p=>p.mat===f),x=g.reduce((p,M)=>p+M.vol,0),m=g.reduce((p,M)=>p+M.mass,0);return{q:i,a:s(`${Vn[f].de}: ${x.toFixed(3)} m\xB3${m?` \u2248 ${(m/1e3).toFixed(2)} t`:""} in ${g.length} erfassten Objekten.`,`${Vn[f].en}: ${x.toFixed(3)} m\xB3${m?` \u2248 ${(m/1e3).toFixed(2)} t`:""} in ${g.length} captured objects.`),src:[s("Mengen aus dem nachmodellierten Modell","quantities from the reconstructed model"),...u(g)]}}if(qs(n,"boden","floor","fl\xE4che","area"))return{q:i,a:s(`Erfasste Bodenfl\xE4che: ${e.floorM2} m\xB2 (1-m-Raster, Ausgleichsebene aus dem Scan).`,`Captured floor area: ${e.floorM2} m\xB2 (1 m grid, best-fit plane from the scan).`),src:[s("Segmentierung Boden (A1)","floor segmentation (A1)")]};if(d.length){let g=d[0],x=(g.min[0]+g.max[0])/2,m=(g.min[2]+g.max[2])/2,p=x-e.agent.x,M=m-e.agent.z,_=`${(g.max[0]-g.min[0]).toFixed(2)} \xD7 ${(g.max[2]-g.min[2]).toFixed(2)} \xD7 ${(g.max[1]-g.min[1]).toFixed(2)} m`;return{q:i,a:s(`${h(g)}: ${Math.round(Math.hypot(p,M))} m Richtung ${Lp(p,M,t)} \xB7 Box ${_}${d.length>1?` (+${d.length-1} weitere)`:""}.`,`${h(g)}: ${Math.round(Math.hypot(p,M))} m to the ${Lp(p,M,t)} \xB7 box ${_}${d.length>1?` (+${d.length-1} more)`:""}.`),src:u(d)}}return{q:i,a:s("Das kann ich aus dem bisherigen Scan nicht beantworten. Tipp: \u201EHilfe\u201C.",'I cannot answer that from the current scan. Tip: "help".'),src:[s("regelbasiert \xB7 offline","rule-based \xB7 offline")]}};function xu(i,e){if(e===yp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Da||e===yl){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Da)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var El=class extends es{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Eu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Ou(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Es.extractUrlBase(e);a=Es.resolveURL(c,this.path)}else a=Es.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ia(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Op){try{a[Dt.KHR_BINARY_GLTF]=new zu(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Dt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Yu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Dt.KHR_MATERIALS_UNLIT:a[u]=new Mu;break;case Dt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Bu(r,this.dracoLoader);break;case Dt.KHR_TEXTURE_TRANSFORM:a[u]=new Hu;break;case Dt.KHR_MESH_QUANTIZATION:a[u]=new Vu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Qy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},bu=class{constructor(e){this.parser=e,this.name=Dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new nt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Rn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Xr(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Wr(h),c.distance=u;break;case"spot":c=new pl(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,is(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Mu=class{constructor(){this.name=Dt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ft}extendParams(e,t,n){let s=[];e.color=new nt(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Rn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,gn))}return Promise.all(s)}},Su=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Eu=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ke(o,o)}return Promise.all(r)}},wu=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Au=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Tu=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new nt(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Rn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,gn)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Ru=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Cu=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new nt().setRGB(o[0],o[1],o[2],Rn),Promise.all(r)}},Pu=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Iu=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new nt().setRGB(o[0],o[1],o[2],Rn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,gn)),Promise.all(r)}},Lu=class{constructor(e){this.parser=e,this.name=Dt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Nu=class{constructor(e){this.parser=e,this.name=Dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Du=class{constructor(e){this.parser=e,this.name=Dt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Uu=class{constructor(e){this.parser=e,this.name=Dt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ku=class{constructor(e){this.parser=e,this.name=Dt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Fu=class{constructor(e){this.name=Dt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Ou=class{constructor(e){this.name=Dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==hi.TRIANGLES&&c.mode!==hi.TRIANGLE_STRIP&&c.mode!==hi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let x=new yt,m=new I,p=new Mi,M=new I(1,1,1),_=new Hr(g.geometry,g.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&M.fromBufferAttribute(l.SCALE,y),_.setMatrixAt(y,x.compose(m,p,M));for(let y in l)if(y==="_COLOR_0"){let D=l[y];_.instanceColor=new Xs(D.array,D.itemSize,D.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);hn.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Op="glTF",Oa=12,Dp={JSON:1313821514,BIN:5130562},zu=class{constructor(e){this.name=Dt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Oa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Op)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Oa,r=new DataView(e,Oa),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Dp.JSON){let c=new Uint8Array(e,Oa+a,o);this.content=n.decode(c)}else if(l===Dp.BIN){let c=Oa+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Bu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Wu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Wu[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=$r[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(f)},o,c,Rn,d)})})}},Hu=class{constructor(){this.name=Dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Vu=class{constructor(){this.name=Dt.KHR_MESH_QUANTIZATION}},wl=class extends bs{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,M=1-m,_=p-d+u;for(let y=0;y!==o;y++){let D=a[x+y+o],T=a[x+y+l]*h,C=a[g+y+o],k=a[g+y]*h;r[y]=M*D+_*T+m*C+p*k}return r}},ev=new Mi,Gu=class extends wl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return ev.fromArray(r).normalize().toArray(r),r}},hi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},$r={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Up={9728:kn,9729:Xn,9984:nu,9985:ma,9986:br,9987:Ai},kp={33071:Gi,33648:va,10497:Gs},_u={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ws={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tv={CUBICSPLINE:void 0,LINEAR:Nr,STEP:Lr},yu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new jt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ti})),i.DefaultMaterial}function Ks(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function is(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function iv(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function sv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function rv(i){let e,t=i.extensions&&i.extensions[Dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+vu(t.attributes):e=i.indices+":"+vu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+vu(i.targets[n]);return e}function vu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Xu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function av(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var ov=new yt,Yu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Qy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Vr(this.options.manager):this.textureLoader=new ml(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ia(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ks(r,o,s),is(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Dt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Es.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=_u[s.type],o=$r[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Pt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=_u[s.type],c=$r[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,_=t.cache.get(M);_||(x=new c(o,p*f,s.count*f/h),_=new Ea(x,f/h),t.cache.add(M,_)),m=new wa(_,l,d%f/h,g)}else o===null?x=new c(s.count*l):x=new c(o,d,s.count*l),m=new Pt(x,l,g);if(s.sparse!==void 0){let p=_u.SCALAR,M=$r[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,D=new M(a[1],_,s.sparse.count*p),T=new c(a[2],y,s.sparse.count*l);o!==null&&(m=new Pt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,k=D.length;C<k;C++){let Z=D[C];if(m.setX(Z,T[C*l]),l>=2&&m.setY(Z,T[C*l+1]),l>=3&&m.setZ(Z,T[C*l+2]),l>=4&&m.setW(Z,T[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Up[d.magFilter]||Xn,h.minFilter=Up[d.minFilter]||Ai,h.wrapS=kp[d.wrapS]||Gs,h.wrapT=kp[d.wrapT]||Gs,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Tn(x);m.needsUpdate=!0,d(m)}),t.load(Es.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),is(u,a),u.userData.mimeType=a.mimeType||av(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Dt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Dt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Dt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ta,ei.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new oi,ei.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return jt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Dt.KHR_MATERIALS_UNLIT]){let u=s[Dt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new nt(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Rn),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,gn)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=ln);let h=r.alphaMode||yu.OPAQUE;if(h===yu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===yu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ft&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ke(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Ft&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ft){let u=r.emissiveFactor;o.emissive=new nt().setRGB(u[0],u[1],u[2],Rn)}return r.emissiveTexture!==void 0&&a!==Ft&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,gn)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),is(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ks(s,u,r),u})}createUniqueName(e){let t=sn.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Fp(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=rv(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Dt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Fp(new Kt,c,t),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?nv(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=a[f],p,M=c[f];if(m.mode===hi.TRIANGLES||m.mode===hi.TRIANGLE_STRIP||m.mode===hi.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Jo(x,M):new we(x,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===hi.TRIANGLE_STRIP?p.geometry=xu(p.geometry,yl):m.mode===hi.TRIANGLE_FAN&&(p.geometry=xu(p.geometry,Da));else if(m.mode===hi.LINES)p=new Ki(x,M);else if(m.mode===hi.LINE_STRIP)p=new qi(x,M);else if(m.mode===hi.LINE_LOOP)p=new tl(x,M);else if(m.mode===hi.POINTS)p=new Ys(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&sv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),is(p,r),m.extensions&&Ks(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ks(s,u[0],r),u[0];let d=new Nt;r.extensions&&Ks(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new fn(Ua.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Fr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),is(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new yt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new jo(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let M=0,_=d.length;M<_;M++){let y=d[M],D=f[M],T=g[M],C=x[M],k=m[M];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let Z=n._createAnimationTracks(y,D,T,C,k);if(Z)for(let v=0;v<Z.length;v++)p.push(Z[v])}return new dl(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ov)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Aa:c.length>1?h=new Nt:c.length===1?h=c[0]:h=new hn,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),is(h,r),r.extensions&&Ks(n,h,r),r.matrix!==void 0){let u=new yt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Nt;n.name&&(r.name=s.createUniqueName(n.name)),is(r,n),n.extensions&&Ks(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof ei||d instanceof Tn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];ws[r.path]===ws.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(ws[r.path]){case ws.weights:c=Ji;break;case ws.rotation:c=ji;break;case ws.position:case ws.scale:c=Qi;break;default:n.itemSize===1?c=Ji:c=Qi;break}let h=s.interpolation!==void 0?tv[s.interpolation]:Nr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+ws[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Xu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ji?Gu:wl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function lv(i,e,t){let n=e.attributes,s=new qn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){let h=Xu($r[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new I,l=new I;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Xu($r[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Qn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Fp(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Wu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Ht.workingColorSpace!==Rn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ht.workingColorSpace}" not supported.`),is(i,e),lv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?iv(i,e.targets,t):i})}var zp=32,Bp=128,cv=new I(0,1,0),Hp=(i,e,t)=>{let n=new Nt,s=new Map(e.map(_=>[`${_.g}:${_.p}:${_.i}`,_.id])),r=new Map;if(t){let _=[];t.traverse(y=>y.isMesh&&_.push(y));for(let y of _){let D=y.name||y.parent?.name||"",[T,C,k]=D.split("|"),Z=it.findIndex(O=>O.id===T),v=s.get(`${Z}:${C}:${k}`);if(Z<0||v===void 0)continue;y.removeFromParent(),y.position.x+=it[Z].x,y.position.y+=i.stations[Z]?.y0??0,y.position.z+=it[Z].z;let w=y.material;w&&"envMapIntensity"in w&&(w.metalness=Math.min(w.metalness,.4)),n.add(y),r.set(v,[...r.get(v)??[],y])}}let a=[],o=new Map,l=(_,y)=>{let D=_.join(",")+y;return o.has(D)||o.set(D,new jt({color:new nt(_[0],_[1],_[2]),roughness:y?.35:.7,metalness:y?.55:.05})),o.get(D)};i.stations.forEach((_,y)=>{let D=it[y];for(let T of _.prims){let C=D.parts[T.p],k=l(C.c,C.m==="steel"),Z=[],v=O=>{O.position.x+=_.x,O.position.z+=_.z,n.add(O),Z.push(O)};if(T.k==="box"){let O=new we(new Jt(T.b[0]-T.a[0],T.b[1]-T.a[1],T.b[2]-T.a[2]),k);O.position.set((T.a[0]+T.b[0])/2,(T.a[1]+T.b[1])/2,(T.a[2]+T.b[2])/2),v(O)}else if(T.k==="rod"){let O=new I(...T.a),$=new I(...T.b).clone().sub(O),se=new we(new bn(T.r,T.r,$.length(),12),k);se.position.copy(O).addScaledVector($,.5),se.quaternion.setFromUnitVectors(cv,$.normalize()),v(se)}else if(T.k==="pile"){let O=[];for(let $=0;$<=16;$++){let se=T.R*(1-$/16);O.push(new ke(se,T.H*(1-(se/T.R)**1.6)))}let V=new we(new Ca(O,32),k);V.position.set(T.c[0],0,T.c[1]),v(V)}else if(T.k==="sph"){let O=new we(new In(T.r,20,14),k);O.position.set(...T.c),v(O)}else if(T.k==="ring"){let O=new we(new hl(T.R,T.r,10,28),k);O.position.set(...T.c),v(O)}else if(T.k==="person"){let O=new Nt,V=new we(new ol(.16,.95,4,12),k);V.position.y=.78,V.scale.z=.7;let $=new we(new In(.11,14,10),k);$.position.y=1.62,O.add(V,$),O.position.set(T.c[0],0,T.c[1]),v(O)}else if(T.k==="waam"){let O=T.h/T.L,V=[];for(let $=0;$<T.L;$++){let se=($+.5)/T.L,F=new we(new Jt(T.t*.85,O*.92,T.z1-T.z0),k);F.position.set(T.x+T.lean*se*se,T.y0+($+.5)*O,(T.z0+T.z1)/2),v(F),V.push(F)}a.push({p:T.p,L:T.L,meshes:V})}let w=s.get(`${y}:${T.p}:${T.i??0}`);w!==void 0&&r.set(w,[...r.get(w)??[],...Z])}});let c=new jt({color:9279400,roughness:.8,metalness:.1}),h=i.blocks.map(_=>{let y=new we(new Jt(_.b[0]-_.a[0],_.b[1]-_.a[1],_.b[2]-_.a[2]),c);return y.position.set((_.a[0]+_.b[0])/2,(_.a[1]+_.b[1])/2,(_.a[2]+_.b[2])/2),y.visible=!1,n.add(y),{m:y,cells:_.cells}}),[u,d,f]=i.plane,g=new Hr(new Jt(.98,.06,.98),new jt({color:11844034,roughness:.9}),i.floor.length),x=new yt,m=new yt().makeScale(0,0,0),p=i.floor.map((_,y)=>{let D=_%Bp-zp+.5,T=Math.floor(_/Bp)-zp+.5;return g.setMatrixAt(y,m),[D,u*D+d*T+f-.03,T]});g.frustumCulled=!1,n.add(g);let M=(_,y)=>{y&&x.makeTranslation(p[_][0],p[_][1],p[_][2]),g.setMatrixAt(_,y?x:m),g.instanceMatrix.needsUpdate=!0};for(let _ of r.values())for(let y of _)y.visible=!1;return n.visible=!1,{group:n,cluObjs:r,blocks:h,floor:{cells:i.floor,show:M},waam:a}};var Vp=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),Gp=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);var hv=Vp,Wp=Gp,$u=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]],uv=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]],Fn=16,za=class{constructor(e){this.group=new Nt;this.VS=e.vs,[this.X0,this.Y0,this.Z0]=e.min,this.GX=Math.max(2,Math.ceil((e.max[0]-e.min[0])/e.vs)),this.GY=Math.max(2,Math.ceil((e.max[1]-e.min[1])/e.vs)),this.GZ=Math.max(2,Math.ceil((e.max[2]-e.min[2])/e.vs)),this.NCX=Math.ceil(this.GX/Fn),this.NCZ=Math.ceil(this.GZ/Fn),this.ISO=e.iso??Math.max(.12,.7*(e.vs/.2)**2),this.cnt=new Uint16Array(this.GX*this.GY*this.GZ),this.dirty=new Uint8Array(this.NCX*this.NCZ),this.filled=new Uint8Array(this.NCX*this.NCZ),this.meshes=new Array(this.NCX*this.NCZ).fill(null),this.color=e.color,this.mat=new jt({vertexColors:!0,flatShading:!0,roughness:.85,metalness:.05,side:ln})}add(e,t,n){let s=Math.floor((e-this.X0)/this.VS),r=Math.floor((t-this.Y0)/this.VS),a=Math.floor((n-this.Z0)/this.VS);if(s<0||r<0||a<0||s>=this.GX||r>=this.GY||a>=this.GZ)return;let o=(a*this.GY+r)*this.GX+s;this.cnt[o]<65535&&this.cnt[o]++;let l=Math.floor(s/Fn),c=Math.floor(a/Fn),h=c*this.NCX+l;this.dirty[h]=1,this.filled[h]=1;let u=s%Fn,d=a%Fn;u<=1&&l>0&&(this.dirty[h-1]=1),u>=Fn-2&&l<this.NCX-1&&(this.dirty[h+1]=1),d<=1&&c>0&&(this.dirty[h-this.NCX]=1),d>=Fn-2&&c<this.NCZ-1&&(this.dirty[h+this.NCX]=1)}update(e,t,n){let s=[];for(let o=0;o<this.dirty.length;o++)if(this.dirty[o]){let l=(o%this.NCX+.5)*Fn*this.VS+this.X0,c=(Math.floor(o/this.NCX)+.5)*Fn*this.VS+this.Z0;s.push([o,(l-t)**2+(c-n)**2])}if(!s.length)return 0;s.sort((o,l)=>o[1]-l[1]);let r=performance.now(),a=0;for(;a<s.length&&performance.now()-r<e;a++)this.build(s[a][0]);return s.length-a}build(e){this.dirty[e]=0;let{GX:t,GY:n,GZ:s,VS:r,X0:a,Y0:o,Z0:l,ISO:c,cnt:h}=this,u=e%this.NCX,d=Math.floor(e/this.NCX),f=u*Fn-1,g=d*Fn-1,x=Fn+3,m=Fn+3,p=n,M=new Float32Array(x*p*m),_=(w,O,V)=>w<0||O<0||V<0||w>=t||O>=n||V>=s?0:h[(V*n+O)*t+w];for(let w=0;w<m;w++)for(let O=0;O<p;O++)for(let V=0;V<x;V++){let $=0,se=f+V,F=g+w;for(let oe=-1;oe<=1;oe++)for(let q=-1;q<=1;q++)for(let ce=-1;ce<=1;ce++)$+=_(se+ce,O+q,F+oe);M[(w*p+O)*x+V]=$/27}let y=[],D=[],T=new Float32Array(8),C=new Float32Array(36);for(let w=1;w<=Fn&&w<m-1;w++)for(let O=0;O<p-1;O++)for(let V=1;V<=Fn&&V<x-1;V++){let $=0;for(let oe=0;oe<8;oe++){let q=$u[oe];T[oe]=M[((w+q[2])*p+(O+q[1]))*x+(V+q[0])],T[oe]>c&&($|=1<<oe)}let se=hv[$];if(!se)continue;for(let oe=0;oe<12;oe++){if(!(se&1<<oe))continue;let[q,ce]=uv[oe],Ie=(c-T[q])/(T[ce]-T[q]||1e-6),be=$u[q],St=$u[ce];C[oe*3]=a+(f+V+be[0]+(St[0]-be[0])*Ie+.5)*r,C[oe*3+1]=o+(O+be[1]+(St[1]-be[1])*Ie+.5)*r,C[oe*3+2]=l+(g+w+be[2]+(St[2]-be[2])*Ie+.5)*r}let F=$*16;for(let oe=0;Wp[F+oe]!==-1;oe+=3)for(let q=0;q<3;q++){let ce=Wp[F+oe+q],Ie=C[ce*3+1];if(y.push(C[ce*3],Ie,C[ce*3+2]),this.color)D.push(this.color[0],this.color[1],this.color[2]);else{let be=Math.max(0,Math.min(1,Ie/6));D.push(.46+.16*be,.5+.1*be,.58-.08*be)}}}let k=this.meshes[e];if(k&&(this.group.remove(k),k.geometry.dispose(),this.meshes[e]=null),!y.length)return;let Z=new Kt;Z.setAttribute("position",new kt(y,3)),Z.setAttribute("color",new kt(D,3)),Z.computeVertexNormals();let v=new we(Z,this.mat);v.frustumCulled=!1,this.group.add(v),this.meshes[e]=v}touchAll(){for(let e=0;e<this.filled.length;e++)this.filled[e]&&(this.dirty[e]=1)}dispose(){for(let e of this.meshes)e&&e.geometry.dispose();this.mat.dispose(),this.group.removeFromParent()}};var Bt={x0:-28,x1:21,z0:-21,z1:67,px:.04},Ba=Math.round((Bt.x1-Bt.x0)/Bt.px),qr=Math.round((Bt.z1-Bt.z0)/Bt.px),Xp=.9,dv=1.7,Al=class{constructor(){this.base=document.createElement("canvas");this.base.width=Ba,this.base.height=qr,this.ctx=this.base.getContext("2d"),this.ctx.fillStyle="#fbfbf8",this.ctx.fillRect(0,0,Ba,qr)}add(e,t,n,s){if(e<Bt.x0||e>=Bt.x1||n<Bt.z0||n>=Bt.z1||t>6.3)return;let r=(e-Bt.x0)/Bt.px,a=(n-Bt.z0)/Bt.px,o=this.ctx;s===1?(o.fillStyle="rgba(150,156,168,0.05)",o.fillRect(r,a,2,2)):t>=Xp&&t<=dv?(o.fillStyle="rgba(18,22,30,0.5)",o.fillRect(r-.5,a-.5,2,2)):t<Xp?(o.fillStyle="rgba(80,88,100,0.16)",o.fillRect(r,a,1.5,1.5)):(o.fillStyle="rgba(90,110,150,0.035)",o.fillRect(r,a,1.5,1.5))}compose(e,t){e.width=Ba+140,e.height=qr+140+120;let r=e.getContext("2d"),a=t.lang==="en";r.fillStyle="#ffffff",r.fillRect(0,0,e.width,e.height),r.drawImage(this.base,70,70);let o=y=>70+(y-Bt.x0)/Bt.px,l=y=>70+(y-Bt.z0)/Bt.px;r.strokeStyle="rgba(200,60,60,0.35)",r.setLineDash([12,6,3,6]),r.lineWidth=1,r.font="bold 15px Inter, sans-serif",r.textAlign="center",r.textBaseline="middle";let c=0;for(let y=-15;y<=15;y+=5,c++)r.beginPath(),r.moveTo(o(y),48),r.lineTo(o(y),70+qr+10),r.stroke(),r.setLineDash([]),r.fillStyle="#fff",r.beginPath(),r.arc(o(y),34,13,0,Math.PI*2),r.fill(),r.strokeStyle="rgba(200,60,60,0.8)",r.stroke(),r.fillStyle="#b03030",r.fillText(String.fromCharCode(65+c),o(y),34),r.strokeStyle="rgba(200,60,60,0.35)",r.setLineDash([12,6,3,6]);c=1;for(let y=-10;y<=10;y+=5,c++)r.beginPath(),r.moveTo(48,l(y)),r.lineTo(70+Ba+10,l(y)),r.stroke(),r.setLineDash([]),r.fillStyle="#fff",r.beginPath(),r.arc(34,l(y),13,0,Math.PI*2),r.fill(),r.strokeStyle="rgba(200,60,60,0.8)",r.stroke(),r.fillStyle="#b03030",r.fillText(String(c),34,l(y)),r.strokeStyle="rgba(200,60,60,0.35)",r.setLineDash([12,6,3,6]);r.setLineDash([]),r.font="600 14px Inter, sans-serif";for(let y of t.labels){let D=r.measureText(y.t).width+14;r.fillStyle="rgba(255,255,255,0.85)",r.fillRect(o(y.x)-D/2,l(y.z)-11,D,22),r.strokeStyle=y.c,r.lineWidth=1.5,r.strokeRect(o(y.x)-D/2,l(y.z)-11,D,22),r.fillStyle="#1a1f29",r.fillText(y.t,o(y.x),l(y.z))}for(let y of t.scanners)r.fillStyle="#0a84c6",r.beginPath(),r.moveTo(o(y.x),l(y.z)-9),r.lineTo(o(y.x)+8,l(y.z)+6),r.lineTo(o(y.x)-8,l(y.z)+6),r.closePath(),r.fill();let h=70+qr+30,u=70;for(let y=0;y<10;y++)r.fillStyle=y%2?"#ffffff":"#1a1f29",r.fillRect(u+y/Bt.px,h,1/Bt.px,8);r.strokeStyle="#1a1f29",r.lineWidth=1,r.strokeRect(u,h,10/Bt.px,8),r.fillStyle="#1a1f29",r.font="500 12px Inter, sans-serif",r.textAlign="center";for(let y of[0,5,10])r.fillText(`${y} m`,u+y/Bt.px,h+22);let d=70+Ba-30,f=110;r.fillStyle="#1a1f29",r.beginPath(),r.moveTo(d,f-26),r.lineTo(d+11,f+12),r.lineTo(d,f+4),r.lineTo(d-11,f+12),r.closePath(),r.fill(),r.font="bold 16px Inter, sans-serif",r.fillText("N",d,f+28);let g=e.width-70-520,x=70+qr+18,m=520,p=110;r.strokeStyle="#1a1f29",r.lineWidth=1.5,r.strokeRect(g,x,m,p),r.beginPath(),r.moveTo(g,x+38),r.lineTo(g+m,x+38),r.moveTo(g+330,x+38),r.lineTo(g+330,x+p),r.stroke(),r.textAlign="left",r.font="800 19px Inter, sans-serif",r.fillText(a?"FLOOR PLAN \xB7 ground floor \xB7 section +1.20 m":"GRUNDRISS \xB7 EG \xB7 Schnitt +1,20 m",g+12,x+20),r.font="500 12.5px Inter, sans-serif";let M=new Date;(a?["Derived from scan \xB7 X-AVIS Spatial AI Lab",`Hall captured: ${Math.round(t.cov*100)} %`,"Scale 1:200 (A3) \xB7 grid 5 m",`Date ${M.toLocaleDateString("en-GB")}`]:["Aus dem Scan abgeleitet \xB7 X-AVIS Spatial AI Lab",`Halle erfasst: ${Math.round(t.cov*100)} %`,"Ma\xDFstab 1:200 (A3) \xB7 Raster 5 m",`Datum ${M.toLocaleDateString("de-DE")}`]).forEach((y,D)=>r.fillText(y,g+12,x+56+D*16)),r.font="800 15px Inter, sans-serif",r.fillText("X-AVIS",g+345,x+60),r.font="500 11px Inter, sans-serif",r.fillText("\xA9 Jan Luca Fahrendholz-Heiermann",g+345,x+80),r.fillText(a?"Plan status: preliminary":"Planstand: vorl\xE4ufig",g+345,x+96)}},Tl=(i,e,t,n)=>{let s=i.color(e),r=.25+.65*i.I[e],a=1-.35*Math.min(1,t/n);if(s)return[s[0]*255*a,s[1]*255*a,s[2]*255*a];let o=255*(1-r)*a+40*(1-a);return[o,o,o]},Rl=(i,e)=>{let t=document.createElement("canvas");t.width=i,t.height=e;let n=t.getContext("2d"),s=n.createImageData(i,e);for(let r=0;r<i*e;r++)s.data[r*4]=255,s.data[r*4+1]=255,s.data[r*4+2]=255,s.data[r*4+3]=255;return{cv:t,ctx:n,img:s,zb:new Float32Array(i*e).fill(1e9)}},Cl=(i,e,t,n,s,r,a=1)=>{for(let o=0;o<a;o++)for(let l=0;l<a;l++){let c=t+l,h=n+o;if(c<0||h<0||c>=e||h*e+c>=i.zb.length)continue;let u=h*e+c;s>=i.zb[u]||(i.zb[u]=s,i.img.data[u*4]=r[0],i.img.data[u*4+1]=r[1],i.img.data[u*4+2]=r[2])}},Pl=(i,e,t,n,s=!1)=>{let r=t/2,a=Rl(t,r),o=n?n.length:i.N;for(let l=0;l<o;l++){let c=n?n[l]:l;if(!s&&i.S[c]<0)continue;let h=i.P[c*3]-e[0],u=i.P[c*3+1]-e[1],d=i.P[c*3+2]-e[2],f=Math.hypot(h,u,d);if(f<.3)continue;let g=Math.atan2(h,-d),x=Math.asin(u/f),m=Math.floor((g+Math.PI)/(2*Math.PI)*t),p=Math.floor((Math.PI/2-x)/Math.PI*r);Cl(a,t,m,p,f,Tl(i,c,f,25),Math.round((f<4?3:f<9?2:1.3)*Math.max(1,t/1e3)))}return a.ctx.putImageData(a.img,0,0),a.cv},Yp=(i,e,t)=>{let n=t*4,s=t*3,r=Rl(n,s),a={nz:[1,1],px:[2,1],pz:[3,1],nx:[0,1],py:[1,0],ny:[1,2]};for(let o=0;o<i.N;o++){if(i.S[o]<0)continue;let l=i.P[o*3]-e[0],c=i.P[o*3+1]-e[1],h=i.P[o*3+2]-e[2],u=Math.abs(l),d=Math.abs(c),f=Math.abs(h),g,x,m,p;u>=d&&u>=f?(p=u,l>0?(g="px",x=h/p,m=-c/p):(g="nx",x=-h/p,m=-c/p)):d>=f?(p=d,c>0?(g="py",x=l/p,m=h/p):(g="ny",x=l/p,m=-h/p)):(p=f,h>0?(g="pz",x=-l/p,m=-c/p):(g="nz",x=l/p,m=-c/p));let[M,_]=a[g],y=Math.hypot(l,c,h);Cl(r,n,Math.floor(M*t+(x+1)/2*(t-1)),Math.floor(_*t+(m+1)/2*(t-1)),y,Tl(i,o,y,25),y<5?2:1)}for(let o=0;o<s;o++)for(let l=0;l<n;l++){let c=Math.floor(l/t),h=Math.floor(o/t);Object.values(a).some(([d,f])=>d===c&&f===h)||(r.img.data[(o*n+l)*4+3]=0)}return r.ctx.putImageData(r.img,0,0),r.cv},$p=(i,e,t)=>{let n=Rl(e,t),s=[48,52,78],r=[-4,0,22],a=[r[0]-s[0],r[1]-s[1],r[2]-s[2]],o=Math.hypot(a[0],a[1],a[2]),l=a.map(f=>f/o),c=[l[1]*0-l[2]*1,l[2]*0-l[0]*0,l[0]*1-l[1]*0],h=Math.hypot(c[0],c[1],c[2]);c=c.map(f=>f/h);let u=[c[1]*l[2]-c[2]*l[1],c[2]*l[0]-c[0]*l[2],c[0]*l[1]-c[1]*l[0]],d=t/2/Math.tan(34*Math.PI/360);for(let f=0;f<i.N;f++){if(i.S[f]<0)continue;let g=i.P[f*3]-s[0],x=i.P[f*3+1]-s[1],m=i.P[f*3+2]-s[2],p=g*l[0]+x*l[1]+m*l[2];if(p<1)continue;let M=g*c[0]+x*c[1]+m*c[2],_=g*u[0]+x*u[1]+m*u[2];Cl(n,e,Math.floor(e/2+M/p*d),Math.floor(t/2-_/p*d),p,Tl(i,f,p-25,40),2)}return n.ctx.putImageData(n.img,0,0),n.cv},qp=(i,e)=>{let t=Math.round(e*(Bt.z1-Bt.z0)/(Bt.x1-Bt.x0)),n=Rl(e,t),s=e/(Bt.x1-Bt.x0);for(let r=0;r<i.N;r++){if(i.S[r]<0)continue;let a=i.P[r*3],o=i.P[r*3+1],l=i.P[r*3+2];a<Bt.x0||a>=Bt.x1||l<Bt.z0||l>=Bt.z1||Cl(n,e,Math.floor((a-Bt.x0)*s),Math.floor((l-Bt.z0)*s),10-o,Tl(i,r,0,1),2)}return n.ctx.putImageData(n.img,0,0),n.cv};var Zs=.95,As=.85,Kp=.62,Ha=.28,fv=()=>{let i=new jt({color:16738835,roughness:.45,metalness:.25}),e=new jt({color:2303790,roughness:.5,metalness:.6}),t=new Nt,n=new we(new bn(.26,.3,.22,24),e);n.position.y=.11,t.add(n);let s=new Nt;s.position.y=.22,t.add(s);let r=new we(new bn(.22,.24,.3,24),i);r.position.y=.15,s.add(r);let a=new Nt;a.position.y=Kp-.22,s.add(a),a.add(new we(new In(.13,16,12),e));let o=new we(new Jt(Zs,.17,.2),i);o.position.x=Zs/2,a.add(o);let l=new Nt;l.position.x=Zs,a.add(l),l.add(new we(new In(.11,16,12),e));let c=new we(new Jt(As,.13,.15),i);c.position.x=As/2,l.add(c);let h=new Nt;h.position.x=As,l.add(h),h.add(new we(new In(.07,12,10),e));let u=new we(new bn(.025,.04,Ha,12),e);u.position.y=-Ha/2,h.add(u);let d=new we(new In(.035,12,10),new Ft({color:16765562}));d.position.y=-Ha-.01,h.add(d);let f=new Wr(16751162,0,2.5,2);return f.position.y=-Ha,h.add(f),{root:t,reach:(x,m,p)=>{let M=x-t.position.x,_=m+Ha-(t.position.y+Kp),y=p-t.position.z,D=Math.hypot(M,y);s.rotation.y=Math.atan2(-y,M);let T=Math.max(-1,Math.min(1,(D*D+_*_-Zs*Zs-As*As)/(2*Zs*As))),C=Math.acos(T),k=Math.atan2(_,D)+Math.atan2(As*Math.sin(C),Zs+As*Math.cos(C));a.rotation.z=k,l.rotation.z=-C,h.rotation.z=-(k-C)},glow:d,light:f}},Zp=(i,e,t)=>{let n=new Nt;n.position.set(e,0,t);let s=1.5,r=6,a=i.map((h,u)=>{let d=fv();return d.root.position.set(u===0?-1.35:1.45,.78,u===0?.15:-.15),n.add(d.root),d}),o=i.map(()=>0),l=Math.max(...i.map(h=>h.L))*s+r;return{group:n,update:h=>{let u=h%l;return i.forEach((d,f)=>{let g=u/s,x=g>=d.L,m=Math.min(d.L-1,Math.floor(g)),p=x?1:g-m;o[f]=x?d.L:m+p*.99;let M=(m+1)/d.L,_=d.z0+(m%2===0?p:1-p)*(d.z1-d.z0),y=a[f];x?y.reach(d.x+d.lean-.25,d.y0+d.h+.35,0):y.reach(d.x+d.lean*M*M,d.y0+(m+1)*(d.h/d.L)+.012,_);let D=!x;y.glow.visible=D,y.light.intensity=D?1.6+Math.random()*1.4:0,y.glow.scale.setScalar(D?.8+Math.random()*.6:1)}),o},prog:o}};var pv="1791744020",Js=(i,e)=>it[i]?.parts[e]??it[i]?.parts[0],At={x0:-27.5,x1:20.5,z0:-20.5,z1:66.5,y0:.6,y1:9.5},Qt=32,Ts=1,De=128,ii={x0:-2.5,x1:4.5,z:12.3},mv=.12,qu=.62,Il=340,Ku=600,Zu={dark:263690,light:15856630},Jp=1.62,Ju=1.5,Kr=720,ju=360,Qu=360,jp=[6087142,10194175,16758087,6280077,16747099,5089023],ui=[1,9],Jr=it.length,Ll=it.findIndex(i=>i.bonus),Zr=it.findIndex(i=>i.id==="uc8"),ed=it.findIndex(i=>i.id==="profile"),gv=it.findIndex(i=>i.id==="uc3"),js={droneFly:.75,droneScan:.45,hand:1.35,tlsRun:9},td=.45,xv=4,Va=50,_v=45,yv=32,vv=(i,e)=>(Math.imul(i,2654435761)>>>0)%100<(e?yv:_v),bv=`
attribute float aI; attribute float aCls; attribute float aG; attribute float aP; attribute float aClu; attribute float aW; attribute float aM;
attribute float aS; attribute float aF; attribute vec3 aC; attribute vec3 aO;
uniform float uT; uniform float uPx; uniform float uPs; uniform float uLight; uniform float uMode; uniform float uFeatK; uniform float uMesh; uniform float uXray; uniform float uReg; uniform float uWaamSeen;
uniform float uAna[${Jr}]; uniform float uHi[${Jr}]; uniform vec2 uWaam; uniform vec3 uMatC[10]; uniform float uCad[80]; uniform vec3 uCut;
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
}`,Mv=`
varying vec3 vCol;
void main(){ vec2 c = gl_PointCoord - 0.5; if (dot(c, c) > 0.25) discard; gl_FragColor = vec4(vCol, 1.0); }`,$t=(i,e,t)=>i==="en"?t:e,Qp=i=>i.kind==="uc"?`UC${i.uc}`:i.kind==="docs"?"DOC":i.kind==="talks"?"TALK":i.kind==="bonus"?"\u2605":"ME",nd=i=>ts.filter(e=>e.st===i.id);var em=(i,e,t)=>{let n=!1,s=0,r=()=>t.lang(),a=i.host,o=new Or({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1});o.setPixelRatio(Math.min(2,window.devicePixelRatio)),o.setSize(a.clientWidth,a.clientHeight),a.appendChild(o.domElement);let l=new zr;l.fog=new Zo(Zu.dark,28,70);let c=new fn(58,a.clientWidth/a.clientHeight,.03,200);l.add(c),l.add(new fl(10470655,1053724,1.1));let h=new Xr(16777215,1.4);h.position.set(6,12,4),l.add(h);let u=new jt({color:1909548,metalness:.6,roughness:.35}),d=new jt({color:15265267,metalness:.2,roughness:.4}),f=new jt({color:5089023,emissive:1727656,emissiveIntensity:.8}),g=new gl,x=new Nt;x.add(new we(new Jt(.3,.12,.42),d));let m=new we(new Jt(.2,.06,.26),u);m.position.y=.09,x.add(m);let p=new we(new Jt(.31,.02,.43),f);p.position.y=-.02,x.add(p);let M=[],_=new Ft({color:12375807,transparent:!0,opacity:.25,depthWrite:!1});for(let[b,R]of[[1,1],[1,-1],[-1,1],[-1,-1]]){let L=new we(new Jt(.04,.03,.46),u);L.position.set(b*.14,.02,R*.18),L.rotation.y=Math.atan2(b*.27,R*.36),x.add(L);let G=new we(new bn(.035,.035,.06,12),u);G.position.set(b*.27,.05,R*.36),x.add(G);let te=new we(new bn(.19,.19,.008,24),_);te.position.set(b*.27,.085,R*.36),x.add(te),M.push(te);let le=new we(new In(.02,8,8),new Ft({color:R<0?16777215:16726843}));le.position.set(b*.27,0,R*.36),x.add(le)}let y=new we(new In(.07,16,12),u);y.position.set(0,-.1,-.12),x.add(y),l.add(x),x.position.set(ui[0],.25,ui[1]);let D=document.createElement("canvas");D.width=D.height=64;{let b=D.getContext("2d"),R=b.createRadialGradient(32,32,0,32,32,32);R.addColorStop(0,"rgba(0,0,0,0.75)"),R.addColorStop(1,"rgba(0,0,0,0)"),b.fillStyle=R,b.fillRect(0,0,64,64)}let T=new Ft({map:new nl(D),transparent:!0,depthWrite:!1}),C=new we(new Ci(1,1),T);C.rotation.x=-Math.PI/2,l.add(C);let k=new Ft({color:6087142,transparent:!0,opacity:.1,side:ln,depthWrite:!1,blending:ys}),Z=new we(new ll(1,1,48,1,!0),k);l.add(Z);let v=new Ft({color:6087142,transparent:!0,opacity:.6,side:ln,depthWrite:!1}),w=new we(new Zi(.95,1,64),v);w.rotation.x=-Math.PI/2,l.add(w);let O=new oi({color:12581119,transparent:!0,opacity:.9}),V=new qi(new Kt().setFromPoints([new I(0,0,0),new I(1,0,0)]),O);l.add(V);let $=new Nt;$.position.set(ui[0],0,ui[1]);let se=new we(new bn(.85,.9,.06,40),new jt({color:2765116,metalness:.5,roughness:.4}));se.position.y=.03,$.add(se);let F=new we(new Zi(.6,.7,48),new Ft({color:6280077,transparent:!0,opacity:.8,side:ln}));F.rotation.x=-Math.PI/2,F.position.y=.065,$.add(F);let oe=new we(new Jt(.5,.01,.1),new Ft({color:6280077}));oe.position.y=.07,$.add(oe),l.add($);let q=new Nt;{let b=new jt({color:9279400,metalness:.5,roughness:.45}),R=new jt({color:16764730,roughness:.6}),L=ii.x1-ii.x0,G=(ii.x0+ii.x1)/2;for(let Te of[ii.x0-.12,ii.x1+.12]){let ye=new we(new Jt(.24,5.4,.3),b);ye.position.set(Te,2.7,ii.z),q.add(ye);for(let he=0;he<6;he++){let Se=new we(new Jt(.25,.25,.31),R);Se.position.set(Te,.3+he*.5,ii.z),Se.rotation.z=Math.PI/4,q.add(Se)}}let te=new we(new Jt(L+.6,.6,.6),b);te.position.set(G,5.4,ii.z),q.add(te);let le=new we(new Jt(L,.05,1.6),new jt({color:12107980,metalness:.4,roughness:.5}));le.position.set(G,5.25,ii.z-.9),q.add(le)}q.visible=!1,l.add(q);let ce={group:new Nt,pts:null,mat:null,t0:-1,shown:!1};ce.group.visible=!1,l.add(ce.group);let Ie=async()=>{let b=new Uint8Array(await Ve("lab/portrait.bin")),R=new DataView(b.buffer),L=R.getUint16(0,!0),G=R.getUint16(2,!0),te=R.getUint16(4,!0),le=R.getUint16(6,!0),Te=it[ed],ye=1.4,he=ye*L/G,Se=Te.x+1.55,Ye=1.55,Be=Te.z,rt=new Br(new Uint8Array(L*G*4),L,G,Yn),Je=rt.image.data;for(let ee=0;ee<G;ee++)for(let We=0;We<L;We++){let Ke=ee*L+We,ut=((G-1-ee)*L+We)*4;Je[ut]=b[8+Ke*4],Je[ut+1]=b[8+Ke*4+1],Je[ut+2]=b[8+Ke*4+2],Je[ut+3]=255}rt.colorSpace=gn,rt.needsUpdate=!0;let bt=new we(new Ci(he,ye),new Ft({map:rt}));bt.position.set(Se+.012,Ye,Be),bt.rotation.y=-Math.PI/2;let nn=new we(new Jt(.03,ye+.08,he+.08),new jt({color:2764600,roughness:.6}));nn.position.set(Se+.03,Ye,Be),ce.group.add(bt,nn);for(let ee of[-.35,.35]){let We=new we(new bn(.018,.018,2.3,8),rn);We.position.set(Se+.18,1.1,Be+ee),We.rotation.z=-.12,ce.group.add(We)}let cn=[];for(let ee=0;ee<G;ee+=2)for(let We=0;We<L;We+=2)b[8+(ee*L+We)*4+3]-te>.04*(le-te)&&cn.push(ee*L+We);let ve=cn.length,st=new Float32Array(ve*3),ct=new Uint8Array(ve*3),tn=new Float32Array(ve);for(let ee=0;ee<ve;ee++){let We=cn[ee],Ke=We%L,ut=Math.floor(We/L);st[ee*3]=Se,st[ee*3+1]=Ye+(.5-ut/G)*ye,st[ee*3+2]=Be+(Ke/L-.5)*he,ct[ee*3]=b[8+We*4],ct[ee*3+1]=b[8+We*4+1],ct[ee*3+2]=b[8+We*4+2],tn[ee]=Math.max(0,Math.min(1,(b[8+We*4+3]-te)/(le-te)))}let Y=new Kt;Y.setAttribute("position",new Pt(st,3)),Y.setAttribute("aCol",new Pt(ct,3,!0)),Y.setAttribute("aRel",new Pt(tn,1)),ce.mat=new ti({uniforms:{uK:{value:0},uPx:{value:o.getPixelRatio()},uSweep:{value:0}},vertexShader:`attribute vec3 aCol; attribute float aRel; uniform float uK; uniform float uPx; uniform float uSweep; varying vec3 vC;
        void main(){ vec3 p = position; float s = clamp((uSweep - (1.55 + 0.7 - p.y) / 1.4) * 4.0, 0.0, 1.0); p.x -= aRel * 1.35 * uK * s;
          vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; vC = mix(aCol, vec3(0.55, 0.95, 1.0), (1.0 - s) * 0.6 + (s > 0.0 && s < 1.0 ? 0.4 : 0.0));
          gl_PointSize = clamp(uPx * 7.0 / max(0.1, -mv.z), 1.0, 4.0 * uPx); if (s <= 0.0) gl_PointSize = 0.0; }`,fragmentShader:"varying vec3 vC; void main(){ vec2 c = gl_PointCoord - 0.5; if (dot(c, c) > 0.25) discard; gl_FragColor = vec4(vC, 1.0); }"}),ce.pts=new Ys(Y,ce.mat),ce.pts.frustumCulled=!1,ce.group.add(ce.pts)},be=new Nt,St=new we(new Jt(.05,.16,.06),u);St.position.set(0,-.06,0),St.rotation.x=.35,be.add(St);let zt=new we(new Jt(.08,.07,.16),u);zt.position.set(0,.03,-.04),be.add(zt);let ie=new Nt;ie.position.set(0,.03,-.14);let de=new we(new bn(.04,.04,.05,20),d);de.rotation.x=Math.PI/2,ie.add(de);let He=new we(new Jt(.012,.03,.052),f);He.position.x=.036,ie.add(He),be.add(ie);let Fe=new we(new In(.008,8,8),new Ft({color:6280077}));Fe.position.set(.03,.07,.02),be.add(Fe),be.scale.setScalar(.6),be.position.set(.17,-.15,-.42),c.add(be);let gt=48,at=new Float32Array(gt*6),Et=new Kt;Et.setAttribute("position",new Pt(at,3));let Ut=new oi({color:16726876,transparent:!0,opacity:.55,blending:ys,depthWrite:!1}),xt=new Ki(Et,Ut);xt.frustumCulled=!1,l.add(xt);let N=[],rn=new jt({color:2765116,metalness:.5,roughness:.5}),wt=(b,R=!1)=>{let L=new Nt,G=R?new Ft({color:b,transparent:!0,opacity:.16,depthWrite:!1}):rn;for(let ye=0;ye<3;ye++){let he=ye/3*Math.PI*2,Se=new we(new bn(.012,.012,1.42,6),G);Se.position.set(Math.cos(he)*.2,.68,Math.sin(he)*.2),Se.rotation.set(-Math.sin(he)*.29,0,Math.cos(he)*.29),L.add(Se)}let te=new Nt;te.position.y=Ju-.12;let le=new we(new Jt(.2,.24,.16),R?G:new jt({color:15265267,metalness:.2,roughness:.4}));le.position.y=.12,te.add(le);let Te=new we(new bn(.06,.06,.14,20),R?G:new jt({color:b,emissive:b,emissiveIntensity:.5,metalness:.6,roughness:.2}));return Te.rotation.z=Math.PI/2,Te.position.y=.2,te.add(Te),L.add(te),{g:L,head:te}},Qe=wt(6087142,!0);Qe.g.visible=!1,l.add(Qe.g);let ot=it.map(b=>{if(b.bonus)return null;let R=new nt(b.c),L=new Nt;L.position.set(b.x,0,b.z);let G=new we(new Zi(b.r-.08,b.r,72),new Ft({color:R,transparent:!0,opacity:.55,side:ln,depthWrite:!1}));G.rotation.x=-Math.PI/2,G.position.y=.03,G.visible=!1,L.add(G);let te=new we(new bn(.03,.03,7,8,1,!0),new Ft({color:R,transparent:!0,opacity:.2,depthWrite:!1}));te.position.y=3.5,L.add(te);let le=new we(new cl(.22),new jt({color:R,emissive:R,emissiveIntensity:.8,metalness:.3,roughness:.3}));le.position.y=4.1,L.add(le);let Te=new we(new Zi(.9,1,48),new Ft({color:R,transparent:!0,opacity:.5,side:ln,depthWrite:!1}));return Te.position.y=4.1,L.add(Te),l.add(L),{g:L,ring:G,beam:te,gem:le,pulse:Te,c:R}}),vt={uT:{value:0},uPx:{value:o.getPixelRatio()},uPs:{value:t.flags.lite?1.4:1},uLight:{value:0},uMode:{value:0},uFeatK:{value:6},uMesh:{value:0},uXray:{value:0},uReg:{value:0},uWaamSeen:{value:0},uAna:{value:new Array(Jr).fill(0)},uHi:{value:new Array(Jr).fill(0)},uWaam:{value:new ke(0,0)},uMatC:{value:Object.values(Vn).map(b=>new nt(b.c))},uCad:{value:new Array(80).fill(0)},uCut:{value:new I(0,1.2,1)}},fe=0,P=0,E=0,X=null,re=new Uint8Array(0),j,ne,Xe,ge,pe,Tt,ue,Re,qe,je,Le,lt,Ze,Vt,z,Ce=new Float32Array(Kr*ju),Q=0,ae=0,Me=new Array(Jr).fill(0),Pe=new Array(Jr).fill(0),Oe=it.map(()=>"hidden"),an=it.map(()=>0),dn=it.map(()=>0),U=[],me=[],dt=[],un=new Int32Array(De*De),xn=new Int32Array(De*De),Mn=new Int32Array(De*De),ss=new Int32Array(De*De),rs=new Int32Array(De*De),Pi=new Int32Array(De*De),di=null,Qr=[],Ii=[0,0,0],Sn=null,si=null,Ga=new Al,Qs=document.createElement("canvas");Qs.width=Il,Qs.height=Ku;let er=Qs.getContext("2d");er.fillStyle="#070a0f",er.fillRect(0,0,Il,Ku);let A=(b,R)=>[(b-(At.x0-2))/(At.x1-At.x0+4)*Il,(R-(At.z0-2))/(At.z1-At.z0+4)*Ku],B=new Float32Array(De*De),K=(b,R)=>B[Math.max(0,Math.min(De-1,Math.floor(R+Qt)))*De+Math.max(0,Math.min(De-1,Math.floor(b+Qt)))],J=it.map(()=>0),H=it.map(()=>4.1),_e=!1,Ae=!1,ze={P:new Float32Array(0),I:new Float32Array(0),S:new Float32Array(0),CLS:new Uint8Array(0),GRP:new Int8Array(0),N:0,color:()=>null},Ve=async(b,R)=>{let L=await fetch(b.startsWith("lab/")?`${b}?v=${pv}`:b);if(!L.ok)throw new Error(`${b}: ${L.status}`);let G=Number(L.headers.get("content-length")),te=!!L.headers.get("content-encoding");if(!L.body)return L.arrayBuffer();let le=L.body.getReader(),Te=[],ye=0;for(;;){let{done:Ye,value:Be}=await le.read();if(Ye)break;Te.push(Be),ye+=Be.length,G&&R?.(Math.min(.97,ye/(te?G*2.8:G)))}let he=new Uint8Array(ye),Se=0;for(let Ye of Te)he.set(Ye,Se),Se+=Ye.length;return he.buffer},ft=async()=>{let[b,R,L]=await Promise.all([Ve("lab/scene.bin",ve=>!n&&e.loaded(Math.min(.97,ve))),Ve("lab/clusters.json").then(ve=>JSON.parse(new TextDecoder().decode(ve))),Ve("lab/cad.json").then(ve=>JSON.parse(new TextDecoder().decode(ve)))]);if(n)return;let G=new DataView(b);fe=G.getUint32(4,!0),P=G.getUint32(8,!0);let te=new TextDecoder().decode(new Uint8Array(b,0,4))==="XAV2",le=te?[G.getFloat32(12,!0),G.getFloat32(16,!0),G.getFloat32(20,!0)]:[0,0,0],Te=te?G.getFloat32(24,!0):1e3,ye=te?28:12,he=new Int16Array(b,ye,fe*3);ye+=fe*6;let Se=new Uint8Array(b,ye,fe);ye+=fe,ge=new Uint8Array(b,ye,fe),ye+=fe,pe=new Int8Array(b,ye,fe),ye+=fe,Tt=new Int8Array(b,ye,fe),ye+=fe,ue=new Uint8Array(b,ye,fe),ye+=fe,Re=new Int16Array(b.slice(ye,ye+fe*2)),ye+=fe*2;let Ye=new Int16Array(b.slice(ye,ye+fe*2));ye+=fe*2;let Be=new Uint8Array(b,ye,fe);for(let ve=0;ve<fe;ve+=997)if(pe[ve]>=0&&!it[pe[ve]]?.parts[ue[ve]]){console.warn("Lab-Daten veraltet \u2013 bitte neu laden");break}if(E=fe,t.flags.lite){X=new Int32Array(Math.ceil(fe/2));for(let st=0;st<X.length;st++)X[st]=st*2;let ve=(st,ct=1)=>{let tn=new st.constructor(X.length*ct);for(let Y=0;Y<X.length;Y++)for(let ee=0;ee<ct;ee++)tn[Y*ct+ee]=st[X[Y]*ct+ee];return tn};he=ve(he,3),Se=ve(Se),ge=ve(ge),pe=ve(pe),Tt=ve(Tt),ue=ve(ue),Re=ve(Re),Ye=ve(Ye),Be=ve(Be),fe=X.length}U=R.clusters,Qr=R.feat,Ii=L.plane,me=new Array(U.length).fill(0),dt=new Array(U.length).fill(0),j=new Float32Array(fe*3);for(let ve=0;ve<fe*3;ve++)j[ve]=he[ve]/Te+le[ve%3];Xe=new Float32Array(fe);let rt=new Uint8Array(fe*3);qe=new Int32Array(De*De+1);for(let ve=0;ve<fe;ve++){Xe[ve]=Se[ve]/255;let st=j[ve*3],ct=j[ve*3+1],tn=j[ve*3+2],Y=Math.max(0,Math.min(De-1,Math.floor(tn+Qt)))*De+Math.max(0,Math.min(De-1,Math.floor(st+Qt)));if(qe[Y+1]++,rs[Y]++,Tt[ve]>=0&&Me[Tt[ve]]++,pe[ve]>=0){let ee=Js(pe[ve],ue[ve]).c;rt[ve*3]=ee[0]*255,rt[ve*3+1]=ee[1]*255,rt[ve*3+2]=ee[2]*255,dn[pe[ve]]=Math.max(dn[pe[ve]],ct)}else st>At.x0&&st<At.x1&&tn>At.z0&&tn<At.z1&&Q++,ge[ve]===1?un[Y]++:Mn[Y]++;Re[ve]>=0&&me[Re[ve]]++}for(let ve=1;ve<=De*De;ve++)qe[ve]+=qe[ve-1];{let ve=new Float32Array(De*De),st=new Uint32Array(De*De);for(let ct=0;ct<fe;ct++)if(ge[ct]===1&&pe[ct]<0){let tn=Math.max(0,Math.min(De-1,Math.floor(j[ct*3+2]+Qt)))*De+Math.max(0,Math.min(De-1,Math.floor(j[ct*3]+Qt)));ve[tn]+=j[ct*3+1],st[tn]++}for(let ct=0;ct<De*De;ct++)B[ct]=st[ct]?ve[ct]/st[ct]:NaN;for(let ct=0;ct<6;ct++)for(let tn=0;tn<De*De;tn++){if(!Number.isNaN(B[tn]))continue;let Y=0,ee=0;for(let We of[1,-1,De,-De]){let Ke=B[tn+We];Ke!==void 0&&!Number.isNaN(Ke)&&(Y+=Ke,ee++)}ee&&(B[tn]=Y/ee)}for(let ct=0;ct<De*De;ct++)Number.isNaN(B[ct])&&(B[ct]=0)}ne=new Float32Array(fe).fill(-1),Ze=new Int32Array(fe),Vt=new Int32Array(fe),z=new Float32Array(fe);let Je=new Kt;Je.setAttribute("position",new Pt(j,3)),Je.setAttribute("aI",new Pt(Se,1,!0)),Je.setAttribute("aCls",new Pt(ge,1)),Je.setAttribute("aG",new Pt(pe,1)),Je.setAttribute("aP",new Pt(ue,1)),Je.setAttribute("aClu",new Pt(Re,1)),Je.setAttribute("aW",new Pt(Ye,1)),Je.setAttribute("aM",new Pt(Be,1)),Je.setAttribute("aC",new Pt(rt,3,!0)),je=new Pt(ne,1),je.setUsage(bl),Je.setAttribute("aS",je),Le=new Pt(new Uint8Array(fe),1,!0),Le.setUsage(bl),Je.setAttribute("aF",Le),lt=new Pt(new Float32Array(fe*3),3),lt.setUsage(bl),Je.setAttribute("aO",lt);let bt=new Ys(Je,new ti({vertexShader:bv,fragmentShader:Mv,uniforms:vt}));bt.frustumCulled=!1,l.add(bt),re=Be,Object.assign(ze,{P:j,I:Xe,S:ne,CLS:ge,GRP:pe,N:fe,color:pm});let nn=await Ve("lab/stations.glb").then(ve=>new El().parseAsync(ve,"")).catch(()=>null);L.stations.forEach((ve,st)=>J[st]=ve.y0??0),it.forEach((ve,st)=>{H[st]=Math.max(J[st]+4.1,dn[st]+1.1);let ct=ot[st];ct&&(ct.ring.position.y=J[st]+.03,ct.beam.scale.y=(H[st]+.6)/7,ct.beam.position.y=(H[st]+.6)/2)}),Sn=Hp(L,U,nn?.scene),l.add(Sn.group);let cn=L.stations[Zr];si=Zp(cn.prims.filter(ve=>ve.k==="waam"),cn.x,cn.z),si.group.visible=!1,l.add(si.group),mm(),Ie().catch(()=>{}),Ae=!0,e.loaded(1),t.flags.allskills&&ts.forEach(ve=>Ge.add(ve.id)),It(),t.flags.auto&&setTimeout(()=>Nd.start(),300)},pt=b=>{let R=b==="light";o.setClearColor(Zu[b]),l.fog.color.setHex(Zu[b]),vt.uLight.value=R?1:0,k.blending=R?Xi:ys,k.color.setHex(R?689350:6087142),k.needsUpdate=!0,v.color.setHex(R?689350:6087142),O.color.setHex(R?683952:12581119),_.color.setHex(R?4872816:12375807),Ut.blending=R?Xi:ys,Ut.needsUpdate=!0,T.opacity=R?.55:.9};pt("dark");let Ge=new Set,xe={unlocked:[],color:"normal",mesh:!1,meshMode:"all",meshVS:.2,xray:!1,measure:!1,auto:t.flags.auto,labels:!1,feat:6,featState:"idle",nbv:!1,cut:{mode:0,pos:1.2,flip:!1}},It=()=>e.skills({...xe,unlocked:[...Ge]}),Xt=()=>Ge.has("range")?1.5:1,Ln=()=>Ge.has("net")?6:3,et=t.tech,Ue={drone:100,handheld:100,tls:100},Yt={drone:!1,handheld:!1,tls:!1},Lt={},Nn=(b,R)=>t.flags.nobattery?!0:Yt[b]?!1:(Ue[b]=Math.max(0,Ue[b]-R),Ue[b]<=25&&!Lt[b+"25"]&&(Lt[b+"25"]=!0,e.toast($t(r(),"Akku unter 25 % \u2013 effizient scannen oder zur Ladestation","Battery below 25 % \u2013 scan efficiently or return to the charging pad"),"#ffb547")),Ue[b]<=0?(Yt[b]=!0,Lt[b+"25"]=!1,e.toast($t(r(),`${Kn(b)} leer \u2013 l\xE4dt ca. ${Math.round(Va/td)} s. Teste solange die anderen Technologien (1 2 3).`,`${Kn(b)} empty \u2013 charging for about ${Math.round(Va/td)} s. Try the other technologies meanwhile (1 2 3).`),"#ff5a5f"),!1):!0),Kn=b=>b==="drone"?$t(r(),"Drohne","Drone"):b==="handheld"?"Handheld":"TLS",Cn=!1,Cs=0,Gt=[],ri=new Map,Li=null,en=new I,Ps=new I(1,0,0),ea=0,ta=(b,R,L)=>{!_e&&Math.abs(j[b*3+2]-ii.z)<1.2&&j[b*3]>ii.x0-2&&j[b*3]<ii.x1+2&&(_e=!0,q.visible=!0,e.toast($t(r(),"Hallentor entdeckt \u2013 drau\xDFen wartet die echte Referenzbaustelle Aachen","Hall gate discovered \u2013 outside awaits the real Reference Construction Site Aachen"),"#5fd38d")),Ja=!0,ne[b]=R+Math.random()*.25;let G=Tt[b];G>=0&&Pe[G]++;let te=j[b*3],le=j[b*3+1],Te=j[b*3+2];if(Re[b]>=0&&dt[Re[b]]++,L&&(L.x||L.z)&&(lt.array[b*3]=L.x,lt.array[b*3+1]=L.y,lt.array[b*3+2]=L.z,ea++),Pi[Math.max(0,Math.min(De-1,Math.floor(Te+Qt)))*De+Math.max(0,Math.min(De-1,Math.floor(te+Qt)))]++,pe[b]<0){ae++;let ye=Math.max(0,Math.min(De-1,Math.floor(Te+Qt)))*De+Math.max(0,Math.min(De-1,Math.floor(te+Qt)));if(ge[b]===1?xn[ye]++:ss[ye]++,b%3===0){let[he,Se]=A(te,Te);er.fillStyle=le>2.5?"rgba(92,225,230,0.5)":"rgba(150,170,200,0.35)",er.fillRect(he,Se,1.6,1.6)}}(ge[b]!==1||b%3===0)&&(b%2===0||pe[b]>=0)&&Ga.add(te,le,Te,ge[b]),xe.mesh&&xe.meshMode!=="cad"&&sd(b)},sd=b=>{let R=j[b*3],L=j[b*3+1],G=j[b*3+2];xe.meshMode==="all"||pe[b]<0?Li?.add(R,L,G):Re[b]>=0&&ri.get(Re[b])?.add(R,L,G)},rd=(b,R,L,G,te,le,Te,ye)=>{let he=Math.max(0,Math.floor((b+Qt)/Ts)),Se=Math.min(De-1,Math.floor((R+Qt)/Ts)),Ye=Math.max(0,Math.floor((L+Qt)/Ts)),Be=Math.min(De-1,Math.floor((G+Qt)/Ts)),rt=!1,Je=0;for(let bt=Ye;bt<=Be;bt++){let nn=qe[bt*De+he],cn=qe[bt*De+Se+1],ve=!1;for(let st=nn;st<cn;st++)ne[st]>=0||!te(st)||(ta(st,le,ye),Te?.(st),ve=!0,Je++);ve&&(je.addUpdateRange(nn,cn-nn),ye&&lt.addUpdateRange(nn*3,(cn-nn)*3),rt=!0)}return rt&&(je.needsUpdate=!0,ye&&(lt.needsUpdate=!0)),Je},om=(b,R)=>{Ce.fill(1e9);let L=b.x,G=b.z,te=Math.max(0,Math.floor((L-R+Qt)/Ts)),le=Math.min(De-1,Math.floor((L+R+Qt)/Ts)),Te=Math.max(0,Math.floor((G-R+Qt)/Ts)),ye=Math.min(De-1,Math.floor((G+R+Qt)/Ts)),he=0;for(let Be=Te;Be<=ye;Be++){let rt=qe[Be*De+te],Je=qe[Be*De+le+1];for(let bt=rt;bt<Je;bt++){let nn=j[bt*3]-L,cn=j[bt*3+1]-b.hy,ve=j[bt*3+2]-G,st=nn*nn+ve*ve,ct=Math.sqrt(st+cn*cn);if(ct>R||ct<.35)continue;let tn=Math.floor((Math.atan2(ve,nn)+Math.PI)/(2*Math.PI)*Kr)%Kr,ee=Math.min(ju-1,Math.floor((Math.atan2(cn,Math.sqrt(st))+Math.PI/2)/Math.PI*ju))*Kr+tn;ct<Ce[ee]&&(Ce[ee]=ct),Ze[he]=bt,Vt[he]=ee,z[he]=ct,he++}}let Se=Array.from({length:Qu},()=>[]),Ye=[];for(let Be=0;Be<he;Be++){let rt=Ze[Be],Je=z[Be],bt=Vt[Be];if(Je>Ce[bt]*1.02+.06||(Ye.push(rt),ne[rt]>=0))continue;let nn=Je<6?1:1-.75*(Je-6)/(R-6);Math.random()>nn||Se[Math.floor(bt%Kr/Kr*Qu)].push(rt)}b.buckets=Se,b.vis=Int32Array.from(Ye)},lm=()=>{for(let R of Gt)R.m.dispose();if(Gt=[],ri.clear(),Li=null,!xe.mesh||xe.meshMode==="cad"||!Ae)return;let b=xe.meshVS;if(Li=new za({min:[-28,-.5,-21],max:[21,10,67],vs:Math.max(b,.15)}),Gt.push({m:Li,clu:-1}),xe.meshMode==="obj")for(let R of U){let L=R.max[0]-R.min[0],G=R.max[1]-R.min[1],te=R.max[2]-R.min[2],le=Math.max(.05,2*(L*G+G*te+L*te)),Te=Math.max(.025,Math.min(.12,Math.sqrt(3.5/(R.n/le))*(b/.2))),ye=Js(R.g,R.p).c,he=new za({min:[R.min[0]-Te*2,R.min[1]-Te*2,R.min[2]-Te*2],max:[R.max[0]+Te*2,R.max[1]+Te*2,R.max[2]+Te*2],vs:Te,color:[ye[0],ye[1],ye[2]],iso:.45});ri.set(R.id,he),Gt.push({m:he,clu:R.id})}for(let R of Gt)l.add(R.m.group);for(let R=0;R<fe;R++)ne[R]>=0&&sd(R);for(let R of Gt)R.m.touchAll()},ad=()=>{vt.uMesh.value=xe.mesh?xe.meshMode==="all"?1:xe.meshMode==="obj"?2:3:0,Sn&&(Sn.group.visible=xe.mesh&&xe.meshMode==="cad"),lm(),Za()},cm=()=>{if(!(!Sn||!Sn.group.visible)){for(let[b,R]of Sn.cluObjs){let L=me[b]>0&&dt[b]/me[b]>=.5;vt.uCad.value[b]=L?1:0;for(let G of R)G.visible=L}for(let b of Sn.blocks){let R=0,L=0;for(let G of b.cells)R+=Mn[G],L+=ss[G];b.m.visible=R>0&&L/R>=.3}Sn.floor.cells.forEach((b,R)=>Sn.floor.show(R,un[b]>0&&xn[b]/un[b]>=.3));for(let b of Sn.waam){let R=si?si.prog[b.p]:b.L;b.meshes.forEach((L,G)=>L.visible=L.visible&&G<R)}}},hm=Object.values(Vn).map(b=>[parseInt(b.c.slice(1,3),16)/255,parseInt(b.c.slice(3,5),16)/255,parseInt(b.c.slice(5,7),16)/255]),um=[[.59,.28,.3],[.44,.82,.55],[.35,.7,1]],dm=b=>{let R=[[.267,.005,.329],[.231,.322,.545],[.128,.567,.551],[.369,.789,.383],[.993,.906,.144]],L=Math.max(0,Math.min(.9999,b))*4,G=Math.floor(L),te=L-G;return[0,1,2].map(le=>R[G][le]+(R[G+1][le]-R[G][le])*te)},fm=b=>{b=Math.max(0,Math.min(1,b));let R=[[.02,0,.08],[.42,0,.58],[.92,.16,.1],[1,.66,0],[1,1,.86]],L=b*3.999,G=Math.floor(L),te=L-G;return[0,1,2].map(le=>R[G][le]+(R[G+1][le]-R[G][le])*te)},pm=b=>{let R=xe.color;if(R==="seg")return um[ge[b]];if(R==="mat")return hm[re[b]];if(R==="heat"){let L=Le.array[b]/255;if(xe.feat===16){if(!(ge[b]===1&&pe[b]<0&&j[b*3+2]<12))return[.78,.8,.84];let G=L*2-1;return G<0?[.2+.05*G,.85+.45*G,.4-.6*G]:[.2+.8*G,.85-.6*G,.4-.2*G]}return dm(L)}if(R==="therm"){let L=ne[b]>=0?g.elapsedTime-ne[b]:99;return fm(.06+.34*Xe[b]+.1*Math.min(1,j[b*3+1]/6)+.55*Math.exp(-L/6))}return pe[b]>=0&&Oe[pe[b]]==="done"?Js(pe[b],ue[b]).c:null},od=async b=>{if(xe.feat=b,vt.uFeatK.value=b,b===16){let G=Le.array;for(let te=0;te<fe;te++)G[te]=ge[te]===1&&pe[te]<0&&j[te*3+2]<12?Math.round(Math.max(0,Math.min(1,(j[te*3+1]-(Ii[0]*j[te*3]+Ii[1]*j[te*3+2]+Ii[2]))/.04*.5+.5))*255):0;Le.needsUpdate=!0,It();return}if(!di){if(xe.featState==="loading")return;xe.featState="loading",It(),di=new Uint8Array(await Ve("lab/feats.bin")),xe.featState="ready"}let R=Le.array,L=($s[b]?.i??b)*E;if(X)for(let G=0;G<fe;G++)R[G]=di[L+X[G]];else R.set(di.subarray(L,L+fe));Le.needsUpdate=!0,It()},ld=[],mm=()=>{i.clu.innerHTML="";for(let b of U){let R=document.createElement("div");R.className="lab-clu";let L=Js(b.g,b.p).c;R.style.borderColor=`rgb(${L.map(G=>Math.round(G*255)).join(",")})`,i.clu.appendChild(R),ld.push(R)}},na=new Nt;l.add(na);let Ni=new Set,Ul=-99,cd="",gm=b=>{let L=b.toLowerCase().split(/[\s,;]+/).filter(le=>le.length>1).flatMap(le=>[le,...Sl[le]??[]]);na.clear(),Ni=new Set;let G=new Set;for(let le of U){let Te=Js(le.g,le.p),ye=[le.name.de,le.name.en,ht(Te.name,"de"),ht(Te.name,"en")].map(Ye=>Ye.toLowerCase());if(!L.some(Ye=>ye.some(Be=>Be.includes(Ye)))||le.g===Ll&&Oe[Ll]==="hidden")continue;Ni.add(le.id),G.add(le.g);let he=new qn(new I(le.min[0]-.05,le.min[1]-.05,le.min[2]-.05),new I(le.max[0]+.05,le.max[1]+.05,le.max[2]+.05)),Se=new xl(he,new nt(16724804));Se.material.depthTest=!1,Se.renderOrder=5,na.add(Se)}Ul=g.elapsedTime,cd=b,G.forEach(le=>vt.uHi.value[le]=Ul);let te=[...new Set(U.filter(le=>Ni.has(le.id)).map(le=>ht(Js(le.g,le.p).name,r()).split(" \xB7 ")[0]))];return e.toast(Ni.size?`Zero-Shot \u201E${b}\u201C \u2192 ${Ni.size} ${$t(r(),"Objekte","objects")}: ${te.join(", ")}`:$t(r(),`Zero-Shot \u201E${b}\u201C: kein Treffer`,`Zero-shot "${b}": no match`),"#ff3344"),Ni.size},Is=[],Wa=new Nt;l.add(Wa);let xm=new Ft({color:16764784,depthTest:!1}),_m=(b,R)=>{let L=new yt().multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse).elements,G=a.clientWidth,te=a.clientHeight,le=-1,Te=1e9;for(let ye=0;ye<fe;ye++){if(ne[ye]<0)continue;let he=j[ye*3],Se=j[ye*3+1],Ye=j[ye*3+2],Be=L[3]*he+L[7]*Se+L[11]*Ye+L[15];if(Be<=.05)continue;let rt=((L[0]*he+L[4]*Se+L[8]*Ye+L[12])/Be+1)*.5*G,Je=(1-(L[1]*he+L[5]*Se+L[9]*Ye+L[13])/Be)*.5*te,bt=(rt-b)**2+(Je-R)**2;if(bt>100)continue;let nn=Be+bt*.002;nn<Te&&(Te=nn,le=ye)}return le},ym=(b,R)=>{let L=_m(b,R);if(L<0)return e.toast($t(r(),"Kein gescannter Punkt unter dem Cursor","No scanned point under the cursor"),"#ffcf70");let G=new I(j[L*3],j[L*3+1],j[L*3+2]),te=Is[Is.length-1],le=new we(new In(.035,10,8),xm);if(le.position.copy(G),le.renderOrder=6,!te||te.b){let Te=new Nt;Te.add(le),Wa.add(Te);let ye=document.createElement("div");if(ye.className="lab-meas",i.meas.appendChild(ye),Is.push({a:G,obj:Te,el:ye}),Is.length>6){let he=Is.shift();Wa.remove(he.obj),he.el.remove()}}else{te.b=G,te.obj.add(le);let Te=new qi(new Kt().setFromPoints([te.a,G]),new oi({color:16764784,depthTest:!1}));Te.renderOrder=6,te.obj.add(Te);let ye=te.a.distanceTo(G);te.el.textContent=`${(ye*1e3).toLocaleString(r()==="en"?"en-GB":"de-DE",{maximumFractionDigits:0})} mm`}},hd=()=>{Is.splice(0).forEach(b=>(Wa.remove(b.obj),b.el.remove()))},Gn=0,tr=.42,ia=4.2,nr=-.12,fi=new I,pn=new I(ui[0],0,ui[1]),kl=new I,Xa=0,sa=0,En=!1,Fl=0,Ol=!1,On=t.flags.auto,_t={phase:"go",target:-1,t0:0,lastProg:0,lastProgT:0,alt:3.6,ang:0,cardI:-1,cardT:0},zl=[.1,.25,.5,.75],ir={},Si=()=>et==="drone"?x.position:pn,Di=new Map,sr=0,Bl=()=>{let[b,R]=[...Di.values()];return Math.hypot(b.x-R.x,b.y-R.y)},ud=b=>{b.target.closest(".lab-ui, .lab-label")||(Di.set(b.pointerId,{x:b.clientX,y:b.clientY,moved:0}),Di.size===2&&(sr=Bl()))},dd=b=>{let R=Di.get(b.pointerId);if(!R)return;let L=b.clientX-R.x,G=b.clientY-R.y;if(R.moved+=Math.abs(L)+Math.abs(G),R.x=b.clientX,R.y=b.clientY,Di.size>=2){let le=Bl();sr>0&&le>0&&(et==="drone"?ia=Math.max(1.8,Math.min(14,ia*(sr/le))):(c.fov=Math.max(35,Math.min(80,c.fov*(sr/le))),c.updateProjectionMatrix())),sr=le;return}let te=b.pointerType==="touch"?1.5:1;et==="drone"?(Gn-=L*.006*te,tr=Math.max(.05,Math.min(1.35,tr+G*.004*te))):(Gn-=L*.005*te,nr=Math.max(-1.3,Math.min(1.3,nr-G*.004*te)))},Ya=b=>{let R=Di.get(b.pointerId);if(R){if(Di.size===1&&R.moved<8&&xe.measure&&Ae){let L=a.getBoundingClientRect();ym(b.clientX-L.left,b.clientY-L.top)}Di.delete(b.pointerId),sr=Di.size===2?Bl():0}},$a={f:0,r:0},fd=b=>{ia=Math.max(1.8,Math.min(14,ia*(1+Math.sign(b.deltaY)*.1))),b.preventDefault()},Hl=()=>{let b=Si(),R=-1,L=1e9;return it.forEach((G,te)=>{if(G.bonus&&Oe[te]==="hidden")return;let le=Math.hypot(b.x-G.x,b.z-G.z);le<G.r+1.2&&le<L&&(L=le,R=te)}),R},Vl=b=>{if(b===et)return!0;if(Yt[b])return e.toast($t(r(),`${Kn(b)} l\xE4dt noch (${Math.round(Ue[b])} %) \u2013 ab ${Va} % wieder einsatzbereit`,`${Kn(b)} still charging (${Math.round(Ue[b])} %) \u2013 ready again at ${Va} %`),"#ffb547"),e.tech(et),!1;if(b==="drone"?(x.position.set(pn.x,1.4,pn.z),fi.set(0,0,0),Fl=g.elapsedTime):(pn.set(Si().x,0,Si().z),On&&!t.flags.auto&&qa(!1)),b==="handheld"){en.set(0,0,0);let R=Math.random()*Math.PI*2;Ps.set(Math.cos(R),0,Math.sin(R))}return et=b,e.tech(b),!0},qa=b=>{On=b,xe.auto=b,_t.phase="go",_t.target=-1,It()},Ka=b=>{xe.color=xe.color===b?"normal":b,vt.uMode.value={normal:0,seg:1,heat:2,therm:3,mat:4}[xe.color],xe.color==="heat"&&od(xe.feat),It()},Ui=null,Gl=new _i(new I(0,-1,0),1.2),Wn=new Nt;Wn.add(new we(new Ci(1,1),new Ft({color:16742973,transparent:!0,opacity:.06,side:ln,depthWrite:!1}))),Wn.add(new Ki(new Pa(new Ci(1,1)),new oi({color:16742973,transparent:!0,opacity:.7}))),Wn.visible=!1,l.add(Wn),o.localClippingEnabled=!0;let Za=()=>{let{mode:b,pos:R,flip:L}=xe.cut,G=L?-1:1;vt.uCut.value.set(b,R,G);let te=b===2?new I(1,0,0):b===3?new I(0,0,1):new I(0,1,0);Gl.normal.copy(te).multiplyScalar(-G),Gl.constant=R*G;let le=new Set,Te=Be=>Be?.traverse(rt=>{let Je=rt.material;Je&&(Array.isArray(Je)?Je:[Je]).forEach(bt=>le.add(bt))});Te(Sn?.group),Te(si?.group),Te(zn.group);for(let Be of Gt)le.add(Be.m.mat);for(let Be of le){let rt=b?[Gl]:null;(Be.clippingPlanes?.length??0)!==(rt?.length??0)&&(Be.clippingPlanes=rt,Be.needsUpdate=!0)}Wn.visible=b>0;let ye=At.x1-At.x0+2,he=At.z1-At.z0+2,Se=(At.x0+At.x1)/2,Ye=(At.z0+At.z1)/2;Wn.rotation.set(0,0,0),b===1?(Wn.position.set(Se,R,Ye),Wn.rotation.x=-Math.PI/2,Wn.scale.set(ye,he,1)):b===2?(Wn.position.set(R,3.3,Ye),Wn.rotation.y=Math.PI/2,Wn.scale.set(he,6.8,1)):b===3&&(Wn.position.set(Se,3.3,R),Wn.scale.set(ye,6.8,1)),It()},Ei=[],Ja=!1,pd=-99,md=()=>{for(let b of Ei)l.remove(b.g),b.el.remove();Ei=[]},Av=b=>b>=1e3?(b/1e3).toLocaleString(r()==="en"?"en-GB":"de-DE",{maximumFractionDigits:1})+"k":String(Math.round(b)),gd=()=>{if(!Ae)return;Ja=!1,pd=g.elapsedTime;let b=new Float32Array(De*De),R=new Uint16Array(De*De);for(let he=0;he<De*De;he++)for(let Se=qe[he];Se<qe[he+1];Se++)if(ne[Se]<0){let Ye=j[Se*3],Be=j[Se*3+2];(pe[Se]>=0||Ye>At.x0&&Ye<At.x1&&Be>At.z0&&Be<At.z1)&&b[he]++}else ge[Se]!==1&&j[Se*3+1]>.3&&j[Se*3+1]<2.2&&R[he]++;let L=he=>R[he]>(X?15:30),G=15*Xt(),te=Math.ceil(G),le=[];for(let he=Math.ceil(At.z0+Qt)+1;he<At.z1+Qt-1;he+=2)for(let Se=Math.ceil(At.x0+Qt)+1;Se<At.x1+Qt-1;Se+=2){let Ye=he*De+Se;if(!un[Ye]||L(Ye))continue;let Be=0;for(let rt=-te;rt<=te;rt++)for(let Je=-te;Je<=te;Je++){let bt=Se+Je,nn=he+rt;if(bt<0||nn<0||bt>=De||nn>=De)continue;let cn=b[nn*De+bt];if(!cn)continue;let ve=Math.hypot(Je,rt);if(ve>G)continue;let st=(ve<6?1:1-.75*(ve-6)/(G-6))*1.1,ct=1,tn=Math.ceil(ve*2);for(let Y=2;Y<tn-1;Y++)if(L(Math.round(he+rt*Y/tn)*De+Math.round(Se+Je*Y/tn))){ct=.12;break}Be+=cn*st*ct}le.push({x:Se-Qt+.5,z:he-Qt+.5,gain:Be})}le.sort((he,Se)=>Se.gain-he.gain);let Te=[];for(let he of le){if(Te.length>=3||he.gain<Q*.005)break;Te.every(Se=>Math.hypot(Se.x-he.x,Se.z-he.z)>6)&&N.every(Se=>Math.hypot(Se.x-he.x,Se.z-he.z)>2.5)&&Te.push(he)}md();let ye=16751165;Te.forEach((he,Se)=>{let Ye=new Nt;Ye.position.set(he.x,0,he.z);let Be=new we(new Zi(.42,.5,40),new Ft({color:ye,transparent:!0,opacity:.85,side:ln,depthWrite:!1}));Be.rotation.x=-Math.PI/2,Be.position.y=.04,Ye.add(Be),Ye.add(wt(ye,!0).g);let rt=new we(new bn(.02,.02,3.2,6,1,!0),new Ft({color:ye,transparent:!0,opacity:.35,depthWrite:!1}));rt.position.y=3.4,Ye.add(rt),l.add(Ye);let Je=document.createElement("div");Je.className="lab-nbv",Je.textContent=`${Se+1} \xB7 +${Math.max(1,Math.round(100*he.gain/Q))} % ${$t(r(),"Halle","hall")}`,i.meas.appendChild(Je),Ei.push({...he,g:Ye,el:Je})}),Te.length||e.toast($t(r(),"Scan-Planer: kaum noch Neuzuwachs \u2013 die Halle ist weitgehend erfasst","Scan planner: hardly any gain left \u2013 the hall is largely captured"),"#ff9a3d")},xd=[8161952,4054148,16758087,16731486],_d=xd.map((b,R)=>new Ft({color:b,transparent:!0,opacity:[.07,.3,.42,.42][R],depthWrite:!1,side:ln})),yd=xd.map((b,R)=>new oi({color:b,transparent:!0,opacity:[.25,.8,.95,.95][R]})),zn={group:new Nt,items:[],state:"idle",t:-9};zn.group.visible=!1,l.add(zn.group);let vd=(b,R)=>{b.computeBoundingBox();let L=b.boundingBox,G=new we(b,_d[0]),te=new Ki(new Pa(b,25),yd[0]);G.renderOrder=3,te.renderOrder=4,zn.group.add(G,te),zn.items.push({fill:G,line:te,bb:[L.min.x,L.min.z,L.max.x,L.max.z],st:-1,g:-1,...R})},vm=async()=>{if(zn.state="loading",Sn){Sn.group.updateMatrixWorld(!0);for(let[b,R]of Sn.cluObjs){let L=U[b],G=/statt|versetzt|abweichung/i.test(ht(Js(L.g,L.p).name,"de"));for(let te of R)te.traverse(le=>{let Te=le;if(!Te.isMesh)return;let ye=Te.geometry.clone();ye.applyMatrix4(Te.matrixWorld),vd(ye,{clu:b,dev:G,g:L.g})})}}try{let b=await Ve("lab/plan.bin"),R=new DataView(b),L=R.getUint32(4,!0),G=8;for(let te=0;te<L;te++){let le=R.getUint8(G+1),Te=R.getUint32(G+2,!0),ye=R.getUint32(G+6,!0);G+=10;let he=new Float32Array(b.slice(G,G+Te*12));G+=Te*12;let Se=new Uint32Array(b.slice(G,G+ye*12));G+=ye*12;let Ye=new Kt;Ye.setAttribute("position",new Pt(he,3)),Ye.setIndex(new Pt(Se,1)),vd(Ye,{ver:le,g:gv})}}catch(b){console.error("plan.bin "+String(b?.stack??b)),e.toast($t(r(),"Planungsmodell konnte nicht geladen werden","Planning model could not be loaded"),"#ff5a5f")}zn.state="ready",Za(),Xl(!0)},bm=b=>{let R=0,L=0;for(let G=Math.floor(b[1]+Qt);G<=Math.floor(b[3]+Qt);G++)for(let te=Math.floor(b[0]+Qt);te<=Math.floor(b[2]+Qt);te++)te<0||G<0||te>=De||G>=De||(R+=rs[G*De+te],L+=Pi[G*De+te]);return R?L/R:0},Wl=null,Xl=(b=!1)=>{if(zn.state!=="ready")return;let R={ok:0,dev:0,miss:0,open:0,total:zn.items.length,rs:{ok:0,miss:0,open:0,total:0}};for(let L of zn.items){let G=Oe[L.g]!=="hidden";if(L.fill.visible=L.line.visible=G,!G)continue;let te;L.clu!==void 0?te=(me[L.clu]?dt[L.clu]/me[L.clu]:0)>=.5?L.dev?2:1:0:(te=bm(L.bb)>=.45?L.ver?1:3:0,R.rs.total++,te===1?R.rs.ok++:te===3?R.rs.miss++:R.rs.open++),te===1?R.ok++:te===2?R.dev++:te===3?R.miss++:R.open++,(b||te!==L.st)&&(L.st=te,L.fill.material=_d[te],L.line.material=yd[te])}Wl=R},Yl=b=>{if(Ge.has(b)){if(b==="seg"&&Ka("seg"),b==="heat"&&Ka("heat"),b==="therm"&&Ka("therm"),b==="mat"&&Ka("mat"),b==="mesh"&&(xe.mesh=!xe.mesh,ad()),b==="xray"&&(xe.xray=!xe.xray,zn.group.visible=xe.xray,xe.xray&&zn.state==="idle"&&vm(),xe.xray?zn.state==="ready"&&Xl(!0):Wl=null),b==="measure"&&(xe.measure=!xe.measure,xe.measure?e.toast($t(r(),"Messen: zwei gescannte Punkte anklicken","Measure: click two scanned points"),"#ffcf70"):hd()),b==="auto"){if(!On&&Yt.drone)return e.toast($t(r(),"Drohne l\xE4dt noch \u2013 Autopilot sp\xE4ter","Drone still charging \u2013 autopilot later"),"#ffb547");qa(!On),On&&Vl("drone")}b==="search"&&e.search(),b==="ask"&&e.ask(),b==="icp"&&Mm(),b==="nbv"&&(xe.nbv=!xe.nbv,xe.nbv?(gd(),et!=="tls"&&e.toast($t(r(),"Scan-Planer: orange Standpunkte \u2013 wechsle zu TLS (3) und stelle dort Scanner auf (P)","Scan planner: orange positions \u2013 switch to TLS (3) and set up scanners there (P)"),"#ff9a3d")):md()),b==="cut"&&(xe.cut={...xe.cut,mode:xe.cut.mode?0:1},Za()),It()}},Mm=()=>{if(Ui)return;let b=lt.array,R=0,L=0;for(let G=0;G<fe;G++){let te=b[G*3]**2+b[G*3+1]**2+b[G*3+2]**2;te>0&&(R+=te,L++)}if(!L)return e.toast($t(r(),"ICP: keine driftbehafteten Scans \u2013 alles bereits registriert","ICP: no drifted scans \u2013 everything already registered"),"#ffcf70");Ui={t0:g.elapsedTime,rms:Math.sqrt(R/L),n:L}},bd=()=>{if(et!=="tls"||N.some(rt=>rt.state!=="idle"))return;let b=-Math.sin(Gn),R=-Math.cos(Gn),L=Math.max(At.x0,Math.min(At.x1,pn.x+b*2.6)),G=Math.max(At.z0,Math.min(At.z1,pn.z+R*2.6));if(xe.nbv&&Ei.length){let rt=Ei.reduce((Je,bt)=>Math.hypot(bt.x-L,bt.z-G)<Math.hypot(Je.x-L,Je.z-G)?bt:Je);Math.hypot(rt.x-L,rt.z-G)<3.5&&(e.toast($t(r(),`Scanner auf Vorschlag ${Ei.indexOf(rt)+1} gestellt`,`Scanner placed on suggestion ${Ei.indexOf(rt)+1}`),"#ff9a3d"),L=rt.x,G=rt.z)}if(Ja=!0,N.length>=Ln()){let rt=N.shift();l.remove(rt.g,rt.ring)}let te=jp[(N.length+Math.floor(g.elapsedTime))%jp.length],{g:le,head:Te}=wt(te),ye=K(L,G);le.position.set(L,ye,G);let he=15*Xt(),Se=new Ci(he,7);Se.translate(he/2,2,0);let Ye=new we(Se,new Ft({color:te,transparent:!0,opacity:.16,side:ln,depthWrite:!1,blending:ys}));Ye.position.y=Ju,Ye.visible=!1,le.add(Ye),l.add(le);let Be=new we(new Zi(he-.06,he,128),new Ft({color:te,transparent:!0,opacity:.25,side:ln,depthWrite:!1}));Be.rotation.x=-Math.PI/2,Be.position.set(L,ye+.03,G),l.add(Be),N.push({g:le,head:Te,sheet:Ye,ring:Be,x:L,z:G,hy:ye+Ju,c:te,buckets:null,vis:null,prog:0,nextB:0,state:"idle"})},Md=()=>{if(!(et!=="tls"||!N.length||N.some(b=>b.state!=="idle"))){if(!t.flags.nobattery&&Ue.tls<js.tlsRun*N.length&&!Yt.tls)return e.toast($t(r(),`Akku reicht nicht f\xFCr ${N.length} Scanner (je ${js.tlsRun} %) \u2013 Scanner einsammeln (C) oder laden`,`Battery too low for ${N.length} scanners (${js.tlsRun} % each) \u2013 collect scanners (C) or charge`),"#ffb547");Nn("tls",js.tlsRun*N.length)&&N.forEach(b=>(b.state="prep",b.prog=0,b.nextB=0,b.buckets=null))}},Sd=()=>{N.some(b=>b.state!=="idle")||N.splice(0).forEach(b=>l.remove(b.g,b.ring))},$l=[],Ed=new Map,Sm=b=>{if(!b.vis)return;let R=Pl(ze,[b.x,b.hy,b.z],640,b.vis,!0),L=$l.length+1;Ed.set(L,{eye:[b.x,b.hy,b.z],vis:b.vis}),$l.push({id:L,x:b.x,z:b.z,thumb:R.toDataURL("image/jpeg",.8)}),b.vis=null,e.panos([...$l])},wd=b=>{let R=b.target?.tagName;if(R==="INPUT"||R==="TEXTAREA"||R==="SELECT")return;let L=b.key.toLowerCase();if(["arrowup","arrowdown","arrowleft","arrowright"," "].includes(L)&&b.preventDefault(),ir[L]=!0,["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(L)&&On&&!t.flags.auto&&qa(!1),b.repeat)return;if(L==="escape"&&(e.card(null),xe.measure&&Yl("measure")),L==="enter"||L==="f"){let te=Hl();te>=0&&Oe[te]==="done"&&e.card(te)}if(!En)return;(L==="1"||L==="2"||L==="3")&&Vl(["drone","handheld","tls"][+L-1]),L==="p"&&bd(),L==="c"&&Sd(),L===" "&&et==="tls"&&Md(),L==="l"&&(xe.labels=!xe.labels,It());let G=ts.find(te=>te.key?.toLowerCase()===L);G&&((G.id==="search"||G.id==="ask")&&b.preventDefault(),Yl(G.id))},Ad=b=>ir[b.key.toLowerCase()]=!1,Td=()=>Object.keys(ir).forEach(b=>ir[b]=!1);a.addEventListener("pointerdown",ud),window.addEventListener("pointermove",dd),window.addEventListener("pointerup",Ya),window.addEventListener("pointercancel",Ya),a.addEventListener("wheel",fd,{passive:!1}),window.addEventListener("keydown",wd),window.addEventListener("keyup",Ad),window.addEventListener("blur",Td);let Rd=()=>{o.setSize(a.clientWidth,a.clientHeight),c.aspect=a.clientWidth/a.clientHeight,c.updateProjectionMatrix()};window.addEventListener("resize",Rd);let Cd=0,Pd=0,Id=0,rr=new I,Em=new I,wm=new I(0,1,0),Ld=()=>{s=requestAnimationFrame(Ld);let b=Math.min(.05,g.getDelta()),R=g.elapsedTime;vt.uT.value=R;let L=ir,G=et!=="drone",te=Math.max(-1,Math.min(1,(L.w||L.arrowup?1:0)-(L.s||L.arrowdown?1:0)+$a.f)),le=Math.max(-1,Math.min(1,(L.d||L.arrowright?1:0)-(L.a||L.arrowleft?1:0)+$a.r));En&&(L.q||L.e)&&(Gn+=b*1.6*(L.q?1:-1));let Te=new I(-Math.sin(Gn),0,-Math.cos(Gn)),ye=new I(-Te.z,0,Te.x),he=Math.hypot(Si().x-ui[0],Si().z-ui[1])<1&&(G||x.position.y<.9);["drone","handheld","tls"].forEach(Y=>{let ee=Y===et?he?xv:0:td*(he?2:1);Ue[Y]=Math.min(100,Ue[Y]+ee*b),Yt[Y]&&Ue[Y]>=Va&&(Yt[Y]=!1,e.toast($t(r(),`${Kn(Y)} wieder einsatzbereit (${Math.round(Ue[Y])} %)`,`${Kn(Y)} ready again (${Math.round(Ue[Y])} %)`),"#5fd38d"))}),F.material.opacity=he?.6+.4*Math.sin(R*8):.5,x.visible=C.visible=!G;let Se=Yt.drone&&!t.flags.nobattery;if(En&&!G){let Y=L[" "]?1:L.shift?-1:0,ee=Te.clone().multiplyScalar(te).add(ye.clone().multiplyScalar(le)).multiplyScalar(Se?2.5:11),We=0;On&&(We=Am(ee,R)),ee.y=Se?-6:(We||Y)*7+(R-Fl<1.6&&x.position.y<2.4&&!On?9:0),fi.addScaledVector(ee,b),fi.multiplyScalar(Math.pow(.12,b));let Ke=Math.hypot(fi.x,fi.z),ut=Se?1:5;Ke>ut&&(fi.x*=ut/Ke,fi.z*=ut/Ke),x.position.addScaledVector(fi,b),x.position.x=Math.max(At.x0,Math.min(At.x1,x.position.x)),x.position.z=Math.max(At.z0,Math.min(At.z1,x.position.z)),x.position.y=Math.max(K(x.position.x,x.position.z)+(Se||On&&_t.phase==="charge"?.25:At.y0),Math.min(At.y1,x.position.y));let tt=(Ke>.3?Math.atan2(-fi.x,-fi.z):sa)-sa;for(;tt>Math.PI;)tt-=Math.PI*2;for(;tt<-Math.PI;)tt+=Math.PI*2;sa+=tt*Math.min(1,b*4),x.rotation.set(0,0,0),x.rotateY(sa);let Zt=rr.copy(fi).applyAxisAngle(wm,-sa);x.rotateX(Math.max(-.35,Math.min(.35,Zt.z*.07))),x.rotateZ(Math.max(-.35,Math.min(.35,-Zt.x*.07))),x.position.y>.8&&Nn("drone",js.droneFly*b)}x.position.y+=Math.sin(R*2.2)*.0015,M.forEach((Y,ee)=>Y.rotation.y+=(En&&!Se?40:x.position.y>.4?20:2)*b*(ee%2?1:-1));let Ye=x.position.y;C.position.set(x.position.x,.02,x.position.z),C.scale.setScalar(.9+Ye*.25);let Be=(.6+Ye*.75)*Xt(),rt=En&&!G&&Ye>.8&&!Se;Z.visible=w.visible=V.visible=rt,Z.scale.set(Be,Ye-.15,Be),Z.position.set(x.position.x,(Ye-.15)/2,x.position.z),w.scale.set(Be,Be,1),w.position.set(x.position.x,.04,x.position.z),V.position.set(x.position.x,.05,x.position.z),V.scale.set(Be,1,1),V.rotation.y=R*6,k.opacity=(vt.uLight.value?.06:.07)+.035*Math.sin(R*8);let Je=!1;if(be.visible=et==="handheld",Qe.g.visible=En&&et==="tls"&&!N.some(Y=>Y.state!=="idle"),xt.visible=!1,G){let Y=L.shift?5.5:3,ee=Te.clone().multiplyScalar(te).add(ye.clone().multiplyScalar(le));ee.lengthSq()>1&&ee.normalize(),kl.lerp(ee.multiplyScalar(En?Y:0),Math.min(1,b*8)),pn.addScaledVector(kl,b),pn.x=Math.max(At.x0,Math.min(At.x1,pn.x)),pn.z=Math.max(At.z0,Math.min(At.z1,pn.z));let We=kl.length()*b;Xa+=We*2.4;let Ke=rr.set(pn.x,K(pn.x,pn.z)+Jp+Math.sin(Xa*2)*.025,pn.z);c.position.copy(Ke);let ut=Em.set(-Math.sin(Gn)*Math.cos(nr),Math.sin(nr),-Math.cos(Gn)*Math.cos(nr));if(c.lookAt(Ke.x+ut.x,Ke.y+ut.y,Ke.z+ut.z),be.position.set(.17+Math.cos(Xa)*.006,-.15+Math.abs(Math.sin(Xa))*.008,-.42),et==="tls"&&Qe.g.position.set(pn.x+Te.x*2.6,K(pn.x+Te.x*2.6,pn.z+Te.z*2.6),pn.z+Te.z*2.6),Je=et==="handheld"&&En&&!!(L[" "]||L.scan)&&!Yt.handheld,ie.rotation.z+=b*(Je?30:2),Fe.material.color.setHex(Je?Math.sin(R*20)>0?16726876:3342336:Yt.handheld?5583616:6280077),Je&&Ae&&Nn("handheld",js.hand*b)){We>0&&(en.x+=(Ps.x*.04+(Math.random()-.5)*.02)*We,en.z+=(Ps.z*.04+(Math.random()-.5)*.02)*We,en.y+=(Math.random()-.5)*.008*We,en.length()>.45&&en.setLength(.45)),en.length()>.15&&!Ge.has("icp")&&!Lt.drift&&(Lt.drift=!0,e.toast($t(r(),"SLAM-Drift! Ohne Registrierung verschmieren die W\xE4nde \u2026 irgendwo hoch oben gibt es Zielmarken.","SLAM drift! Without registration the walls smear \u2026 somewhere high up there are targets."),"#ffcf70"));let Mt=7*Xt(),tt=Math.cos(.72),Zt=Ke.x,wn=Ke.y,Pn=Ke.z,Ls=be.localToWorld(new I(0,.03,-.18)),as=0;rd(Zt-Mt,Zt+Mt,Pn-Mt,Pn+Mt,Ns=>{let ql=j[Ns*3]-Zt,Kl=j[Ns*3+1]-wn,Zl=j[Ns*3+2]-Pn,Dd=ql*ql+Kl*Kl+Zl*Zl;if(Dd>Mt*Mt)return!1;let Jl=Math.sqrt(Dd);return(ql*ut.x+Kl*ut.y+Zl*ut.z)/Jl<tt?!1:Math.random()<(Jl<3.5?1:1-.7*(Jl-3.5)/(Mt-3.5))*.3},R,Ns=>{as>=gt||Math.random()>.08||(at.set([Ls.x,Ls.y,Ls.z,j[Ns*3]+en.x,j[Ns*3+1]+en.y,j[Ns*3+2]+en.z],as*6),as++)},en.lengthSq()>0?en:void 0),Et.setDrawRange(0,as*2),Et.attributes.position.needsUpdate=!0,xt.visible=as>0,Ut.opacity=.35+.3*Math.random()}}else{let Y=x.position.clone().add(new I(0,.25,0)),ee=new I(Math.sin(Gn)*Math.cos(tr),Math.sin(tr),Math.cos(Gn)*Math.cos(tr)).multiplyScalar(En?ia:6).add(Y);c.position.lerp(ee,En?Math.min(1,b*6):.03),c.lookAt(Y),(!En||On&&_t.phase==="tour")&&(Gn+=b*.15)}if(Ae&&rt){let Y=x.position.x,ee=x.position.z,We=Xt(),Ke=rd(Y-Be,Y+Be,ee-Be,ee+Be,ut=>{if(!On&&!vv(ut,pe[ut]>=0))return!1;let Mt=j[ut*3+1];if(Mt>Ye-.15)return!1;let tt=(.6+(Ye-Mt)*.75)*We,Zt=j[ut*3]-Y,wn=j[ut*3+2]-ee;return Zt*Zt+wn*wn<=tt*tt},R);Nn("drone",js.droneScan*b*(Ke>0?1:.6))}if(Ae){let Y=N.find(ee=>ee.state==="prep");Y&&(om(Y,15*Xt()),Y.state="run",Y.prog=0);for(let ee of N){if(ee.state!=="run"||!ee.buckets)continue;ee.prog=Math.min(1,ee.prog+b/3.4);let We=Math.floor(ee.prog*Qu);for(;ee.nextB<We;ee.nextB++)for(let ut of ee.buckets[ee.nextB])ne[ut]<0&&ta(ut,R);Cn=!0;let Ke=ee.prog*2*Math.PI-Math.PI;ee.sheet.visible=!0,ee.sheet.rotation.y=-Ke,ee.head.rotation.y=-Ke,ee.prog>=1&&(ee.state="idle",ee.sheet.visible=!1,ee.buckets=null,Sm(ee))}Cn&&(je.clearUpdateRanges(),je.needsUpdate=!0,Cn=!1)}if(Ui){let Y=Math.min(1,(R-Ui.t0)/1.4);vt.uReg.value=Y*Y*(3-2*Y),Y>=1&&(lt.array.fill(0),lt.clearUpdateRanges(),lt.needsUpdate=!0,vt.uReg.value=0,e.toast($t(r(),`ICP: ${Ui.n.toLocaleString("de-DE")} Punkte registriert \xB7 RMS ${(Ui.rms*100).toFixed(1)} cm \u2192 < 1 mm (Simulation)`,`ICP: ${Ui.n.toLocaleString("en-GB")} points registered \xB7 RMS ${(Ui.rms*100).toFixed(1)} cm \u2192 < 1 mm (simulation)`),"#ffcf70"),en.set(0,0,0),ea=0,Ui=null)}if(ce.group.visible=Oe[ed]!=="hidden",ce.mat&&Oe[ed]==="done"&&ce.t0<0&&(ce.t0=R,e.toast($t(r(),"Easter Egg: Depth Anything V2 \u2192 Tiefenkarte \u2192 Punktwolke \xFCber Referenzebene","Easter egg: Depth Anything V2 \u2192 depth map \u2192 point cloud over a reference plane"),"#ffcf70")),ce.mat&&ce.t0>=0){let Y=Math.min(1,(R-ce.t0)/3.2);ce.mat.uniforms.uSweep.value=Math.min(1.3,(R-ce.t0)/1.6),ce.mat.uniforms.uK.value=Y*Y*(3-2*Y)*(1+.04*Math.sin(R*1.3))}if(si&&Ae){let Y=si.update(R);vt.uWaam.value.set(Y[0],Y[1]??0),si.group.visible=Oe[Zr]!=="hidden",vt.uWaamSeen.value=Oe[Zr]!=="hidden"?1:0}let bt=0;if(xe.mesh&&xe.meshMode!=="cad"){let Y=Si(),ee=9;for(let We of Gt){let Ke=performance.now();if(bt+=We.m.update(ee,Y.x,Y.z),ee-=performance.now()-Ke,ee<=0)break}}xe.xray&&R-zn.t>.5&&(zn.t=R,Xl()),R-Id>.4&&(Id=R,cm());let nn=Q?ae/Q:0;for(;zl.length&&nn>=zl[0];){let Y=zl.shift();e.toast($t(r(),`${Math.round(Y*100)} % der Halle erfasst`,`${Math.round(Y*100)} % of the hall captured`),"#9b8cff")}it.forEach((Y,ee)=>{let We=Me[ee]?Pe[ee]/Me[ee]:0;if(Oe[ee]==="hidden"&&We>mv&&(Oe[ee]="found",et==="drone"&&!Lt.coarse&&(Lt.coarse=!0,setTimeout(()=>e.toast($t(r(),"Die Drohne sieht nur grob \u2013 f\xFCr die Analyse mit Handheld (2) oder TLS (3) nachscannen","The drone only sees coarsely \u2013 rescan with handheld (2) or TLS (3) for the analysis"),"#ffcf70"),1800)),e.toast(Y.bonus?$t(r(),"\u2605 Bonus-Signal gefunden: Registrier-Zielmarken!","\u2605 Bonus signal found: registration targets!"):`${$t(r(),"Entdeckt","Discovered")}: ${Qp(Y)} \xB7 ${ht(Y.t,r())}`,Y.c)),Oe[ee]==="found"&&We>qu&&(Oe[ee]="analyzing",an[ee]=R,vt.uAna.value[ee]=R),Oe[ee]==="analyzing"&&R-an[ee]>2){Oe[ee]="done";for(let tt of nd(Y))Ge.has(tt.id)||(Ge.add(tt.id),It(),e.banner(tt));(t.card()===null||On)&&(e.card(ee),On&&(_t.cardI=ee,_t.cardT=R)),!Ol&&it.every((tt,Zt)=>tt.bonus||Oe[Zt]==="done")&&(Ol=!0,e.finish(R-Cs))}let Ke=ot[ee];if(!Ke)return;let ut=Oe[ee];Ke.ring.visible=ut!=="hidden",Ke.gem.rotation.y+=b*(ut==="analyzing"?6:1.2),Ke.gem.position.y=H[ee]+Math.sin(R*2+ee)*.12,Ke.gem.scale.setScalar(ut==="hidden"?.7:1);let Mt=(R*.6+ee*.37)%1;Ke.pulse.visible=En&&ut==="hidden",Ke.pulse.position.y=Ke.gem.position.y,Ke.pulse.scale.setScalar(.15+Mt*.75),Ke.pulse.lookAt(c.position),Ke.pulse.material.opacity=.6*(1-Mt),Ke.ring.material.color.set(ut==="done"?6280077:Ke.c),Ke.ring.material.opacity=ut==="analyzing"?.5+.4*Math.sin(R*14):.55,Ke.beam.visible=ut!=="hidden",Ke.beam.material.opacity=ut==="done"?.1:.22}),On&&_t.cardI>=0&&R-_t.cardT>7&&(t.card()===_t.cardI&&e.card(null),_t.cardI=-1);let cn=a.clientWidth,ve=a.clientHeight,st=Si();{let Y=i.labels.children;it.forEach((ee,We)=>{let Ke=Y[We];if(!Ke)return;let ut=rr.set(ee.x,ee.bonus?5.2:H[We]+.6,ee.z).project(c),Mt=En&&ut.z<1&&Math.abs(ut.x)<1.15&&Math.abs(ut.y)<1.15&&!(ee.bonus&&Oe[We]==="hidden");if(Ke.style.display=Mt?"flex":"none",!Mt)return;Ke.style.transform=`translate(${(ut.x+1)/2*cn}px, ${(1-ut.y)/2*ve}px) translate(-50%, -100%)`;let tt=Me[We]?Math.min(1,Pe[We]/Me[We]/qu):0,Zt=Ke.querySelector(".lab-bar i");Zt&&(Zt.style.width=`${Math.round(tt*100)}%`);let wn=Math.hypot(st.x-ee.x,st.z-ee.z),Pn=Ke.querySelector(".lab-dist");Pn&&(Pn.textContent=`${Math.round(wn)} m`),Ke.dataset.state=Oe[We],Ke.classList.toggle("far",wn>13)})}let ct=R-Ul<30;na.visible=ct,!ct&&Ni.size&&(Ni=new Set,na.clear()),U.forEach((Y,ee)=>{let We=ld[ee];if(!We)return;let Ke=me[ee]?dt[ee]/me[ee]:0,ut=Ni.has(ee);if(!(En&&(ut||xe.labels&&Ke>=.3&&Oe[Y.g]!=="hidden"))){We.style.display="none";return}let tt=rr.set((Y.min[0]+Y.max[0])/2,Y.max[1]+.18,(Y.min[2]+Y.max[2])/2).project(c);if(tt.z>=1||Math.abs(tt.x)>1.1||Math.abs(tt.y)>1.1||Math.hypot(st.x-(Y.min[0]+Y.max[0])/2,st.z-(Y.min[2]+Y.max[2])/2)>16){We.style.display="none";return}We.style.display="block",We.style.transform=`translate(${(tt.x+1)/2*cn}px, ${(1-tt.y)/2*ve}px) translate(-50%, -100%)`,We.classList.toggle("hit",ut);let Zt=ut?`\u201E${cd}\u201C \u2192 ${ht(Y.name,r())}`:`${ht(Y.name,r())} \xB7 ${$t(r(),"Ziel","target")}`;We.textContent!==Zt&&(We.textContent=Zt)});for(let Y of Is){if(!Y.b){Y.el.style.display="none";continue}let ee=rr.copy(Y.a).add(Y.b).multiplyScalar(.5).project(c);Y.el.style.display=ee.z<1?"block":"none",Y.el.style.transform=`translate(${(ee.x+1)/2*cn}px, ${(1-ee.y)/2*ve}px) translate(-50%, -130%)`}for(let Y of Ei){let ee=rr.set(Y.x,1.95,Y.z).project(c),We=En&&ee.z<1&&Math.abs(ee.x)<1.1&&Math.abs(ee.y)<1.1;Y.el.style.display=We?"block":"none",We&&(Y.el.style.transform=`translate(${(ee.x+1)/2*cn}px, ${(1-ee.y)/2*ve}px) translate(-50%, -100%)`),Y.g.children[0].scale.setScalar(1+.15*Math.sin(R*4))}if(xe.nbv&&Ja&&R-pd>2.5&&!N.some(Y=>Y.state!=="idle")&&gd(),R-Cd>.2){Cd=R;let Y=Hl(),ee=-1,We=9;it.forEach((Mt,tt)=>{let Zt=Math.hypot(st.x-Mt.x,st.z-Mt.z);Oe[tt]==="done"&&Zt<We&&(We=Zt,ee=tt)});let Ke={};for(let Mt of U){if(!me[Mt.id]||dt[Mt.id]/me[Mt.id]<.5)continue;let tt=Ke[Mt.mat]??={vol:0,mass:0,n:0};tt.vol+=Mt.vol,tt.mass+=Mt.mass,tt.n++}let ut=0;for(let Mt=0;Mt<De*De;Mt++)un[Mt]&&xn[Mt]/un[Mt]>=.3&&ut++;e.hud({cov:Math.min(1,nn),found:it.filter((Mt,tt)=>!Mt.bonus&&Oe[tt]!=="hidden").length,done:it.filter((Mt,tt)=>!Mt.bonus&&Oe[tt]==="done").length,bonus:Oe[Ll]!=="hidden",near:Y,nearProg:Y>=0&&Me[Y]?Math.min(1,Pe[Y]/Me[Y]/qu):0,nearState:Y>=0?Oe[Y]:"hidden",time:En&&!Ol?R-Cs:-1,tlsN:N.length,tlsMax:Ln(),tlsRun:N.some(Mt=>Mt.state!=="idle"),rec:Je,meshQ:bt,bat:{...Ue},locked:{...Yt},charging:he,drift:et==="handheld"?en.length():ea>0?-1:0,nearAna:ee,waamNear:Math.hypot(st.x-it[Zr].x,st.z-it[Zr].z)<6&&Oe[Zr]!=="hidden",mats:Object.entries(Ke).map(([Mt,tt])=>({k:Mt,...tt})),floorM2:ut,plan:xe.xray?Wl:null})}let tn=i.map();if(tn&&R-Pd>.1){Pd=R;let Y=tn.getContext("2d");Y.drawImage(Qs,0,0);let ee=Il/(At.x1-At.x0+4),[We,Ke]=A(ui[0],ui[1]);Y.fillStyle="#5fd38d",Y.fillRect(We-5,Ke-5,10,10),N.forEach(tt=>{let[Zt,wn]=A(tt.x,tt.z),Pn=`#${tt.c.toString(16).padStart(6,"0")}`;Y.strokeStyle=Pn+"55",Y.lineWidth=1,Y.beginPath(),Y.arc(Zt,wn,15*Xt()*ee,0,Math.PI*2),Y.stroke(),Y.fillStyle=Pn,Y.fillRect(Zt-4,wn-4,8,8)}),Ei.forEach((tt,Zt)=>{let[wn,Pn]=A(tt.x,tt.z);Y.fillStyle="#ff9a3d",Y.beginPath(),Y.arc(wn,Pn,8,0,Math.PI*2),Y.fill(),Y.fillStyle="#1a1406",Y.font="bold 12px monospace",Y.textAlign="center",Y.fillText(String(Zt+1),wn,Pn+4)}),it.forEach((tt,Zt)=>{let[wn,Pn]=A(tt.x,tt.z),Ls=Oe[Zt];if(!(tt.bonus&&Ls==="hidden")){if(Ls==="hidden"){let as=(R*.6+Zt*.37)%1;Y.strokeStyle=`rgba(255,255,255,${.5*(1-as)})`,Y.lineWidth=1,Y.beginPath(),Y.arc(wn,Pn,3+as*14,0,Math.PI*2),Y.stroke(),Y.fillStyle="rgba(255,255,255,0.6)",Y.fillRect(wn-2,Pn-2,4,4);return}Y.strokeStyle=Ls==="done"?"#5fd38d":tt.c,Y.lineWidth=3,Y.beginPath(),Y.arc(wn,Pn,tt.r*ee,0,Math.PI*2),Y.stroke(),Y.fillStyle="#e8eef5",Y.font="bold 15px monospace",Y.textAlign="center",Y.fillText(tt.kind==="uc"?String(tt.uc):tt.kind==="docs"?"D":tt.kind==="talks"?"T":tt.kind==="bonus"?"\u2605":"P",wn,Pn+5)}});let[ut,Mt]=A(st.x,st.z);Y.save(),Y.translate(ut,Mt),Y.rotate(-Gn),Y.fillStyle="#ffffff",Y.beginPath(),Y.moveTo(0,-12),Y.lineTo(8,8),Y.lineTo(-8,8),Y.closePath(),Y.fill(),Y.restore()}o.render(l,c)},Am=(b,R)=>{let L=x.position,G=(he,Se,Ye,Be=11)=>{let rt=he-L.x,Je=Se-L.z,bt=Math.hypot(rt,Je);return bt>.05?b.set(rt/bt*Be*Math.min(1,bt/1.5),0,Je/bt*Be*Math.min(1,bt/1.5)):b.set(0,0,0),{dd:bt,au:L.y<Ye-.15?1:L.y>Ye+.15?-1:0}};if(!t.flags.nobattery&&_t.phase!=="charge"&&Ue.drone<15&&(_t.phase="charge",e.toast($t(r(),"Autopilot: Akku niedrig \u2013 fliege zur Ladestation","Autopilot: battery low \u2013 returning to the charging pad"),"#ffb547")),_t.phase==="charge"){let he=G(ui[0],ui[1],2.5);return he.dd<.35?Ue.drone>=95?(_t.phase="go",1):-1:he.au}let te=it.map((he,Se)=>Se).filter(he=>!it[he].bonus&&Oe[he]!=="done"&&Oe[he]!=="analyzing");if(!te.length)return _t.phase="tour",_t.ang+=.0035,G(-.5+Math.cos(_t.ang)*9,1+Math.sin(_t.ang)*7,6).au;if(_t.target<0||!te.includes(_t.target)){let he=1e9;for(let Se of te){let Ye=Math.hypot(it[Se].x-L.x,it[Se].z-L.z);Ye<he&&(he=Ye,_t.target=Se)}_t.phase="go",_t.alt=Math.min(At.y1-.3,Math.max(J[_t.target]+3.4,dn[_t.target]+1.4)),_t.lastProg=0,_t.lastProgT=R}let le=it[_t.target],Te=Me[_t.target]?Pe[_t.target]/Me[_t.target]:0;if(Te>_t.lastProg+.02?(_t.lastProg=Te,_t.lastProgT=R):R-_t.lastProgT>6&&(_t.alt=Math.min(6.3,_t.alt+.6),_t.lastProgT=R),_t.phase==="go"){let he=G(le.x,le.z,_t.alt);return he.dd<.8&&(_t.phase="scan",_t.t0=R),he.au}_t.ang+=.025;let ye=Math.min(le.r*.65,(R-_t.t0)*.35);return G(le.x+Math.cos(_t.ang)*ye,le.z+Math.sin(_t.ang)*ye,_t.alt,7).au};ft().catch(b=>e.toast(String(b),"#ff5a5f")),Ld();let Nd={start:()=>{En=!0,Fl=g.elapsedTime,Cs=g.elapsedTime,e.toast(et==="tls"?$t(r(),"Scanner aufstellen (P), dann Leertaste","Set up scanners (P), then press space"):et==="handheld"?$t(r(),"Leertaste halten zum Scannen","Hold space to scan"):$t(r(),"Scanner aktiv \u2013 finde die Signale","Scanner online \u2013 find the signals"))},reopen:b=>Oe[b]==="done"&&e.card(b),theme:pt,tech:Vl,skill:Yl,search:gm,place:bd,tlsScan:Md,collect:Sd,press:(b,R)=>ir[b]=R,stick:(b,R)=>{$a.f=b,$a.r=R,(b||R)&&On&&!t.flags.auto&&qa(!1)},openNear:()=>{let b=Hl();b>=0&&Oe[b]==="done"&&e.card(b)},labels:b=>(xe.labels=b??!xe.labels,It()),feature:b=>od(b),mesh:(b,R)=>{xe.meshMode=b,R&&(xe.meshVS=R),ad(),It()},measureClear:hd,cut:(b,R,L)=>{xe.cut={mode:b,pos:R,flip:L},Za()},plan:(b,R)=>Ga.compose(b,{lang:R,cov:Q?ae/Q:0,labels:it.filter((L,G)=>Oe[G]!=="hidden").map(L=>({x:L.x,z:L.z+L.r+.4,t:`${Qp(L)} \xB7 ${ht(L.t,R)}`,c:L.c})),scanners:N.map(L=>({x:L.x,z:L.z}))}),panoImage:(b,R=2400)=>{let L=Ed.get(b);return L?Pl(ze,L.eye,R,L.vis,!0):null},snapshot:()=>(o.render(l,c),o.domElement.toDataURL("image/png")),projections:()=>{let b=Si(),R=[b.x,et==="drone"?x.position.y:K(b.x,b.z)+Jp,b.z];return{pano:Pl(ze,R,1200),cube:Yp(ze,R,240),persp:$p(ze,1e3,620),ortho:qp(ze,1e3)}},ask:b=>Np(b,{lang:r(),clusters:U,cluFrac:R=>me[R]?dt[R]/me[R]:0,stState:Oe,cov:Q?ae/Q:0,agent:{x:Si().x,z:Si().z},floorM2:(()=>{let R=0;for(let L=0;L<De*De;L++)un[L]&&xn[L]/un[L]>=.3&&R++;return R})()}),featRange:()=>Qr,goto:(b,R,L=3)=>{et==="drone"?x.position.set(b,L,R):pn.set(b,0,R)},eggState:()=>({k:ce.mat?.uniforms.uK.value,sw:ce.mat?.uniforms.uSweep.value,t0:ce.t0,n:ce.pts?.geometry.getAttribute("position").count}),setBat:(b,R)=>Ue[b]=R,pointCount:()=>fe,dbg:()=>({N:fe,hallN:Q,hallScanned:ae,ready:Ae,flying:En,tech:et,dy:+x.position.y.toFixed(2),gy:+K(x.position.x,x.position.z).toFixed(2),bat:Ue.drone,locked:Yt.drone,cs:qe?qe[De*De]:-1}),scannerPos:()=>N.map(b=>[b.x,b.z,b.state]),sugs:()=>Ei.map(b=>({x:b.x,z:b.z,pct:Math.round(100*b.gain/Q)})),look:(b,R)=>(Gn=b,et==="drone"?tr=R:nr=R),dispose:()=>{n=!0,cancelAnimationFrame(s),a.removeEventListener("pointerdown",ud),window.removeEventListener("pointermove",dd),window.removeEventListener("pointerup",Ya),window.removeEventListener("pointercancel",Ya),a.removeEventListener("wheel",fd),window.removeEventListener("keydown",wd),window.removeEventListener("keyup",Ad),window.removeEventListener("blur",Td),window.removeEventListener("resize",Rd);for(let b of Gt)b.m.dispose();o.dispose(),a.removeChild(o.domElement)}};return Nd};var Nl=pi(jl());var nm=pi(os()),tm=({url:i})=>{let e=(0,Nl.useRef)(null);return(0,Nl.useEffect)(()=>{let t=e.current,n=new Or({antialias:!0});n.setPixelRatio(Math.min(2,devicePixelRatio)),n.setSize(t.clientWidth,t.clientHeight),t.appendChild(n.domElement);let s=new zr,r=new fn(75,t.clientWidth/t.clientHeight,.1,10),a=new Vr().load(i);a.colorSpace=gn;let o=new In(5,64,32);o.scale(-1,1,1),s.add(new we(o,new Ft({map:a})));let l=0,c=0,h=!1,u=0,d=0,f=0,g=_=>(h=!0,u=_.clientX,d=_.clientY),x=_=>{h&&(l-=(_.clientX-u)*.15,c=Math.max(-85,Math.min(85,c+(_.clientY-d)*.15)),u=_.clientX,d=_.clientY)},m=()=>h=!1,p=_=>{r.fov=Math.max(30,Math.min(100,r.fov+Math.sign(_.deltaY)*4)),r.updateProjectionMatrix(),_.preventDefault()};t.addEventListener("pointerdown",g),window.addEventListener("pointermove",x),window.addEventListener("pointerup",m),t.addEventListener("wheel",p,{passive:!1});let M=()=>{f=requestAnimationFrame(M),h||(l+=.03);let _=Ua.degToRad(90-c),y=Ua.degToRad(l);r.lookAt(Math.sin(_)*Math.cos(y),Math.cos(_),Math.sin(_)*Math.sin(y)),n.render(s,r)};return M(),()=>{cancelAnimationFrame(f),t.removeEventListener("pointerdown",g),window.removeEventListener("pointermove",x),window.removeEventListener("pointerup",m),t.removeEventListener("wheel",p),n.dispose(),a.dispose(),t.removeChild(n.domElement)}},[i]),(0,nm.jsx)("div",{ref:e,className:"lab-panoview"})};var Rs=pi(jl()),jr=pi(os()),im=()=>{let i="(pointer: coarse)",[e,t]=(0,Rs.useState)(()=>typeof matchMedia<"u"&&(matchMedia(i).matches||location.hash.includes("touch")));return(0,Rs.useEffect)(()=>{let n=matchMedia(i),s=()=>t(n.matches||location.hash.includes("touch"));return n.addEventListener("change",s),()=>n.removeEventListener("change",s)},[]),e},sm=({onMove:i,label:e})=>{let t=(0,Rs.useRef)(null),[n,s]=(0,Rs.useState)({x:0,y:0,on:!1}),r=(0,Rs.useRef)(null),a=48,o=c=>{let h=t.current.getBoundingClientRect(),u=c.clientX-(h.left+h.width/2),d=c.clientY-(h.top+h.height/2),f=Math.hypot(u,d);f>a&&(u*=a/f,d*=a/f),s({x:u,y:d,on:!0});let g=x=>Math.abs(x)<.12?0:x;i(g(-d/a),g(u/a))},l=()=>{r.current=null,s({x:0,y:0,on:!1}),i(0,0)};return(0,jr.jsxs)("div",{ref:t,className:`lab-ui lab-joy${n.on?" on":""}`,onPointerDown:c=>{r.current=c.pointerId,c.target.setPointerCapture(c.pointerId),o(c)},onPointerMove:c=>r.current===c.pointerId&&o(c),onPointerUp:l,onPointerCancel:l,children:[(0,jr.jsx)("i",{style:{transform:`translate(${n.x}px, ${n.y}px)`}}),e&&!n.on&&(0,jr.jsx)("span",{children:e})]})},Dl=({k:i,press:e,children:t,className:n})=>(0,jr.jsx)("button",{className:`lab-hold ${n??""}`,onPointerDown:s=>{s.target.setPointerCapture(s.pointerId),e(i,!0)},onPointerUp:()=>e(i,!1),onPointerCancel:()=>e(i,!1),onContextMenu:s=>s.preventDefault(),children:t});var S=pi(os()),W=(i,e,t)=>i==="en"?t:e,rm=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`,am=i=>i.kind==="uc"?`UC${i.uc}`:i.kind==="docs"?"DOC":i.kind==="talks"?"TALK":i.kind==="bonus"?"\u2605":"ME",Sv=i=>`rgb(${i.map(e=>Math.round(e*255)).join(",")})`,id=(i,e,t=2)=>i.toLocaleString(e==="en"?"en-GB":"de-DE",{maximumFractionDigits:t,minimumFractionDigits:t}),Ev={cov:0,found:0,done:0,bonus:!1,near:-1,nearProg:0,nearState:"hidden",time:0,tlsN:0,tlsMax:3,tlsRun:!1,rec:!1,meshQ:0,bat:{drone:100,handheld:100,tls:100},locked:{drone:!1,handheld:!1,tls:!1},charging:!1,drift:0,nearAna:-1,waamNear:!1,mats:[],floorM2:0,plan:null},wv=({lang:i})=>{let e=(0,mt.useRef)(null),t=(0,mt.useRef)(null),n=(0,mt.useRef)(null),s=(0,mt.useRef)(null),r=(0,mt.useRef)(null),a=(0,mt.useRef)(null),o=(0,mt.useRef)(null),l=(0,mt.useRef)({auto:location.hash.includes("auto"),allskills:location.hash.includes("allskills"),nobattery:location.hash.includes("nobattery"),lite:!location.hash.includes("full")&&(location.hash.includes("lite")||location.hash.includes("touch")||matchMedia("(pointer: coarse)").matches)}),[c,h]=(0,mt.useState)(0),[u,d]=(0,mt.useState)(!1),[f,g]=(0,mt.useState)(()=>location.hash.includes("light")?"light":"dark"),[x,m]=(0,mt.useState)(()=>location.hash.includes("handheld")?"handheld":location.hash.includes("tls")?"tls":"drone"),[p,M]=(0,mt.useState)(Ev),[_,y]=(0,mt.useState)(null),[D,T]=(0,mt.useState)([]),[C,k]=(0,mt.useState)(null),[Z,v]=(0,mt.useState)(!1),[w,O]=(0,mt.useState)(!1),[V,$]=(0,mt.useState)({}),se=(U,me)=>(0,S.jsxs)("div",{className:"lab-opt-h",onClick:()=>$(dt=>({...dt,[U]:!dt[U]})),title:V[U]?W(i,"Ausklappen","Expand"):W(i,"Einklappen \u2013 die Ansicht bleibt aktiv","Collapse \u2013 the view stays active"),children:[(0,S.jsx)("small",{children:me}),(0,S.jsx)("button",{className:"lab-opt-min",children:V[U]?"\u25B8 "+W(i,"\xF6ffnen","open"):"\u2014 "+W(i,"einklappen","collapse")})]}),[F,oe]=(0,mt.useState)({unlocked:[],color:"normal",mesh:!1,meshMode:"all",meshVS:.2,xray:!1,measure:!1,auto:!1,labels:!1,feat:6,featState:"idle",nbv:!1,cut:{mode:0,pos:1.2,flip:!1}}),[q,ce]=(0,mt.useState)(null),[Ie,be]=(0,mt.useState)(!1),[St,zt]=(0,mt.useState)(""),[ie,de]=(0,mt.useState)(!1),[He,Fe]=(0,mt.useState)(""),[gt,at]=(0,mt.useState)([]),[Et,Ut]=(0,mt.useState)([]),[xt,N]=(0,mt.useState)(null),[rn,wt]=(0,mt.useState)(null),Qe=im(),[ot,vt]=(0,mt.useState)(!1),[fe,P]=(0,mt.useState)(!1),[E,X]=(0,mt.useState)(()=>matchMedia("(orientation: portrait)").matches),[re,j]=(0,mt.useState)(!1),ne=(0,mt.useRef)(!1);(0,mt.useEffect)(()=>{let U=matchMedia("(orientation: portrait)"),me=()=>X(U.matches);return U.addEventListener("change",me),()=>{U.removeEventListener("change",me),screen.orientation.unlock?.(),ne.current&&document.fullscreenElement&&document.exitFullscreen().catch(()=>{})}},[]);let Xe=()=>{if(!Qe)return;let U=document.documentElement;(!document.fullscreenElement&&U.requestFullscreen?U.requestFullscreen({navigationUI:"hide"}):Promise.resolve()).then(()=>(ne.current=!!document.fullscreenElement,screen.orientation.lock?.("landscape"))).catch(()=>{})},ge=()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.().catch(()=>{}),[pe,Tt]=(0,mt.useState)(null),ue=(0,mt.useRef)(null);ue.current=_;let Re=(0,mt.useRef)(i);Re.current=i,(0,mt.useEffect)(()=>{let U=0,me=[],dt=!1,un=()=>{let Mn=me.shift();dt=!!Mn,ce(Mn??null),Mn&&setTimeout(un,4300)},xn=em({host:e.current,labels:t.current,clu:n.current,meas:s.current,map:()=>r.current},{loaded:h,hud:M,toast:(Mn,ss="#5ce1e6")=>{let rs=++U;T(Pi=>[...Pi.slice(-3),{id:rs,txt:Mn,c:ss}]),setTimeout(()=>T(Pi=>Pi.filter(di=>di.id!==rs)),4200)},card:y,banner:Mn=>{me.push(Mn),dt||un()},skills:oe,finish:k,tech:m,panos:Ut,search:()=>be(!0),ask:()=>de(!0)},{lang:()=>Re.current,tech:x,card:()=>ue.current,flags:l.current});return o.current=xn,l.current.allskills&&(window.__lab=xn),l.current.auto&&d(!0),()=>xn.dispose()},[]),(0,mt.useEffect)(()=>o.current?.theme(f),[f]),(0,mt.useEffect)(()=>{let U=me=>{let dt=me.target?.tagName;if(dt==="INPUT"||dt==="SELECT")return;let un=me.key.toLowerCase();un==="t"&&g(xn=>xn==="dark"?"light":"dark"),u&&(un==="k"&&N(xn=>xn==="plan"?null:"plan"),un==="j"&&N(xn=>xn==="proj"?null:"proj"),un==="u"&&N(xn=>xn==="pano"?null:"pano"),un==="escape"&&(O(!1),N(null),wt(null),be(!1),de(!1)))};return window.addEventListener("keydown",U),()=>window.removeEventListener("keydown",U)},[u]),(0,mt.useEffect)(()=>{if(xt!=="plan")return;let U=()=>a.current&&o.current?.plan(a.current,Re.current);U();let me=setInterval(U,700);return()=>clearInterval(me)},[xt]);let qe=()=>{let U=o.current.projections();Tt(Object.fromEntries(Object.entries(U).map(([me,dt])=>[me,dt.toDataURL("image/png")])))};(0,mt.useEffect)(()=>{xt==="proj"&&qe()},[xt,F.color,F.feat]);let je=(U,me)=>o.current?.press(U,me),Le=U=>{if(!u)return m(U);o.current?.tech(U)},lt=_!==null?it[_]:null,Ze=p.near>=0?it[p.near]:null,Vt=x!=="drone",z=o.current?.featRange()??[],Ce=(U,me)=>{let dt=document.createElement("a");dt.href=U,dt.download=`x-avis_${me}_${new Date().toISOString().slice(0,19).replace(/[:T]/g,"-")}.png`,dt.click()},[Q,ae]=(0,mt.useState)("360"),[Me,Pe]=(0,mt.useState)(null);(0,mt.useEffect)(()=>{if(!rn)return Pe(null);let U=o.current?.panoImage(rn.id);Pe(U?U.toDataURL("image/png"):null)},[rn,F.color,F.feat]);let Oe=()=>{let U=a.current;if(!U)return;let me=document.createElement("a");me.href=U.toDataURL("image/png"),me.download=`x-avis_grundriss_${new Date().toISOString().slice(0,10)}.png`,me.click()},an=(()=>{if(F.color==="seg")return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:W(i,"Segmentierung \xB7 ganze Szene","Segmentation \xB7 whole scene")}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"rgb(150,72,76)"}}),W(i,"Umgebung","Environment")]}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"rgb(112,209,140)"}}),W(i,"Boden","Floor")]}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"rgb(90,180,255)"}}),W(i,"Ziel (alle wichtigen Objekte)","Target (all relevant objects)")]}),(0,S.jsx)("em",{children:W(i,"Hallenklassen: echtes RandLA-Net-Ergebnis (A1)","Hall classes: real RandLA-Net result (A1)")})]});if(F.color==="heat"){let me=$s[F.feat],dt=z[$s[F.feat]?.i??F.feat];return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:F.feat<16?`${W(i,"Merkmal","Feature")} ${F.feat+1}/16 \xB7 ${me.k}`:W(i,"Ebenheit Hallenboden","Hall floor flatness")}),(0,S.jsx)("span",{className:"lab-lg-d",children:ht(me.t,i)}),(0,S.jsx)("div",{className:`lab-ramp ${F.feat===16?"flat":"viridis"}`}),(0,S.jsx)("span",{className:"lab-ramp-l",children:F.feat===16?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("em",{children:"\u22124 cm"}),(0,S.jsx)("em",{children:"0"}),(0,S.jsx)("em",{children:"+4 cm"})]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("em",{children:dt?+dt[0].toPrecision(3):0}),(0,S.jsx)("em",{children:dt?+dt[1].toPrecision(3):1})]})}),F.featState==="loading"&&(0,S.jsx)("em",{children:W(i,"Lade Merkmale (12,7 MB) \u2026","Loading features (12.7 MB) \u2026")}),(0,S.jsx)("em",{children:W(i,"Vorab f\xFCr alle Punkte berechnet (k = 30), Darstellung 1.\u201399. Perzentil","Precomputed for all points (k = 30), shown 1st\u201399th percentile")})]})}if(F.color==="therm")return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:W(i,"Thermal (illustrativ)","Thermal (illustrative)")}),(0,S.jsx)("div",{className:"lab-ramp therm"}),(0,S.jsxs)("span",{className:"lab-ramp-l",children:[(0,S.jsx)("em",{children:W(i,"kalt","cold")}),(0,S.jsx)("em",{children:W(i,"hei\xDF","hot")})]}),(0,S.jsx)("em",{children:W(i,"frisch gescannt und frische WAAM-Schichten = hei\xDF","fresh scans and fresh WAAM layers = hot")})]});if(F.color==="mat")return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:W(i,"Materialkataster","Material register")}),Object.entries(Vn).map(([me,dt])=>(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:dt.c}}),i==="en"?dt.en:dt.de]},me))]});let U=p.nearAna>=0?it[p.nearAna]:null;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:W(i,"Punktwolke","Point cloud")}),(0,S.jsx)("div",{className:`lab-ramp ${f==="light"?"intl":"int"}`}),(0,S.jsxs)("span",{className:"lab-ramp-l",children:[(0,S.jsx)("em",{children:W(i,"Intensit\xE4t niedrig","low intensity")}),(0,S.jsx)("em",{children:W(i,"hoch","high")})]}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:f==="light"?"#0a8cd9":"#8cf2ff"}}),W(i,"frisch gescannt","freshly scanned")]}),(0,S.jsx)("span",{className:"lab-lg-d",children:W(i,"Ungescanntes ist unsichtbar","Unscanned is invisible")}),U&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("b",{className:"lab-lg-sub",children:["X-AVIS \xB7 ",am(U)," ",ht(U.t,i)]}),U.parts.map((me,dt)=>(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:Sv(me.c)}}),ht(me.name,i)]},dt))]}),p.waamNear&&(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"#ff8c26"}}),W(i,"frische WAAM-Schicht","fresh WAAM layer")]}),F.xray&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{className:"lab-lg-sub",children:W(i,"Soll-Ist \xB7 Planungsmodell","As-planned vs. as-built")}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"#3ddc84"}}),W(i,"verifiziert (Soll = Ist)","verified (planned = built)")]}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"#ffb547"}}),W(i,"abweichend","deviating")]}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"#ff4d5e"}}),W(i,"geplant, nicht im Scan","planned, not in scan")]}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"#7c8aa0"}}),W(i,"noch nicht erfasst","not yet captured")]}),p.plan&&p.plan.rs.total>0&&(0,S.jsxs)("em",{children:[W(i,"ReStage-Demonstrator","ReStage demonstrator"),": ",p.plan.rs.ok," ",W(i,"verifiziert","verified")," \xB7 ",p.plan.rs.miss," ",W(i,"fehlen","missing")," \xB7 ",p.plan.rs.open," ",W(i,"offen","open")," (",W(i,"von","of")," ",p.plan.rs.total,")"]}),!p.plan&&(0,S.jsx)("em",{children:W(i,"Lade Planungsmodell \u2026","Loading planning model \u2026")})]})]})})(),dn=U=>p.locked[U]?W(i,"l\xE4dt","charging"):`${Math.round(p.bat[U])} %`;return(0,S.jsxs)("div",{className:`lab lab-${f} lab-t-${x}${Qe?" lab-touch":""}`,children:[(0,S.jsx)("div",{ref:e,className:"lab-canvas"}),u&&Vt&&(0,S.jsx)("div",{className:`lab-cross${p.rec?" rec":""}${F.measure?" meas":""}`}),(0,S.jsx)("div",{ref:t,className:"lab-labels",children:it.map((U,me)=>(0,S.jsxs)("div",{className:"lab-label","data-state":"hidden",style:{borderColor:U.c},onClick:()=>o.current?.reopen(me),children:[(0,S.jsxs)("b",{style:{background:U.c},children:[(0,S.jsx)("span",{className:"lab-known",children:am(U)}),(0,S.jsx)("span",{className:"lab-unk",children:"?"})]}),(0,S.jsx)("span",{className:"lab-known",children:ht(U.t,i)}),(0,S.jsx)("span",{className:"lab-unk",children:W(i,"Unbekanntes Signal","Unknown signal")}),(0,S.jsx)("span",{className:"lab-dist"}),(0,S.jsx)("span",{className:"lab-bar",children:(0,S.jsx)("i",{})})]},U.id))}),(0,S.jsx)("div",{ref:n,className:"lab-clus"}),(0,S.jsx)("div",{ref:s,className:"lab-measl"}),(0,S.jsxs)("div",{className:"lab-ui lab-top",children:[(0,S.jsxs)("a",{className:"lab-brand",href:"#/",children:[(0,S.jsx)(Ud,{size:34,frame:0}),(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{className:"lab-k",children:"Spatial AI Lab"}),(0,S.jsxs)("div",{className:"lab-p",children:["powered by ",(0,S.jsx)(kd,{height:15})]})]})]}),u&&(0,S.jsxs)("div",{className:"lab-stats",children:[(0,S.jsxs)("div",{children:[(0,S.jsx)("small",{children:W(i,"Gel\xE4nde erfasst","Area captured")}),(0,S.jsxs)("b",{children:[Math.round(p.cov*100)," %"]})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("small",{children:W(i,"Entdeckt","Discovered")}),(0,S.jsxs)("b",{children:[p.found," / ",Fa,p.bonus?" \u2605":""]})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("small",{children:W(i,"Analysiert","Analysed")}),(0,S.jsxs)("b",{children:[p.done," / ",Fa]})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("small",{children:"Skills"}),(0,S.jsxs)("b",{children:[F.unlocked.length," / ",ts.length]})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("small",{children:W(i,"Zeit","Time")}),(0,S.jsx)("b",{children:rm(C??Math.max(0,p.time))})]})]}),(0,S.jsxs)("div",{className:"lab-tr",children:[(0,S.jsx)("button",{className:"lab-exit",onClick:()=>g(U=>U==="dark"?"light":"dark"),title:"T",children:f==="dark"?"\u25D0 "+W(i,"Wei\xDFe Leere","White void"):"\u25D1 "+W(i,"Dunkle Leere","Dark void")}),(0,S.jsxs)("a",{className:"lab-exit",href:"#/",children:["\u2715 ",W(i,"Lab verlassen","Exit lab")]})]})]}),u&&(0,S.jsxs)("div",{className:"lab-ui lab-techs",children:[gu.map(U=>(0,S.jsxs)("button",{className:`${x===U.id?"on":""}${p.locked[U.id]?" locked":""}`,onClick:()=>Le(U.id),title:ht(U.d,i),children:[(0,S.jsx)("i",{children:U.icon}),(0,S.jsx)("span",{children:ht(U.t,i).split(" \xB7 ")[U.id==="drone"?0:1]}),(0,S.jsx)("span",{className:"lab-batt","data-low":p.bat[U.id]<25?"1":"0",children:(0,S.jsx)("em",{style:{width:`${Math.round(p.bat[U.id])}%`}})}),(0,S.jsx)("small",{children:dn(U.id)}),(0,S.jsx)("kbd",{children:U.key})]},U.id)),p.charging&&(0,S.jsxs)("span",{className:"lab-charging",children:["\u26A1 ",W(i,"Ladestation","charging pad")]})]}),(0,S.jsx)("div",{className:"lab-toasts",children:D.map(U=>(0,S.jsx)("div",{className:"lab-toast",style:{borderColor:U.c},children:U.txt},U.id))}),q&&(0,S.jsxs)("div",{className:"lab-unlock",children:[(0,S.jsx)("div",{className:"lab-unlock-i",children:q.icon}),(0,S.jsx)("small",{children:q.id==="icp"?W(i,"Bonus-Skill freigeschaltet","Bonus skill unlocked"):W(i,"Skill freigeschaltet","Skill unlocked")}),(0,S.jsx)("b",{children:ht(q.t,i)}),(0,S.jsx)("span",{children:ht(q.d,i)}),(0,S.jsx)("em",{children:q.key?W(i,`Taste ${q.key} oder Skill-Leiste`,`Press ${q.key} or use the skill bar`):W(i,"passiv \xB7 sofort aktiv","passive \xB7 active right away")})]},q.id),u&&_===null&&(Ze||x==="tls"||p.rec||p.drift>.05)&&(0,S.jsxs)("div",{className:"lab-ui lab-prompt",onClick:()=>o.current?.openNear(),style:{borderColor:Ze?p.nearState==="done"?"#5fd38d":Ze.c:"#5ce1e6"},children:[Ze&&p.nearState==="done"?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:ht(Ze.t,i)})," \xB7 ",Qe?W(i,"analysiert \u2013 hier antippen f\xFCr Infos","analysed \u2013 tap here for info"):W(i,"analysiert \u2013 Enter oder Label klicken","analysed \u2013 press Enter or click the label")]}):Ze&&p.nearState==="analyzing"?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:"X-AVIS"})," ",W(i,"segmentiert die Punktwolke \u2026","is segmenting the point cloud \u2026")]}):x==="tls"?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:"TLS"})," \xB7 ",p.tlsRun?W(i,"Scan l\xE4uft \u2013 alle Scanner gleichzeitig \u2026","scanning \u2013 all scanners at once \u2026"):Qe?W(i,`${p.tlsN}/${p.tlsMax} Scanner \xB7 je 7 % Akku pro Scan`,`${p.tlsN}/${p.tlsMax} scanners \xB7 7 % battery per scan each`):W(i,`${p.tlsN}/${p.tlsMax} Scanner \xB7 P aufstellen \xB7 Leertaste scannen (je 7 % Akku) \xB7 C einsammeln`,`${p.tlsN}/${p.tlsMax} scanners \xB7 P set up \xB7 space scan (7 % battery each) \xB7 C collect`),Ze&&(0,S.jsx)("span",{className:"lab-pbar",children:(0,S.jsx)("i",{style:{width:`${Math.round(p.nearProg*100)}%`,background:Ze.c}})})]}):Ze?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:p.nearState==="hidden"?W(i,"Unbekanntes Signal","Unknown signal"):ht(Ze.t,i)})," \xB7 ",x==="handheld"?Qe?W(i,"\u25CF halten und Objekt abscannen","hold \u25CF and scan the object"):W(i,"Leertaste halten und Objekt abscannen","hold space and scan the object"):W(i,"Bereich abfliegen und scannen","fly over the area to scan it"),(0,S.jsx)("span",{className:"lab-pbar",children:(0,S.jsx)("i",{style:{width:`${Math.round(p.nearProg*100)}%`,background:Ze.c}})})]}):p.rec?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{className:"lab-recdot",children:"\u25CF REC"})," ",W(i,"SLAM-Scan l\xE4uft","SLAM scan running")]}):null,p.drift>.05&&(0,S.jsxs)("span",{className:"lab-drift",children:[W(i,"Drift","drift")," ",Math.round(p.drift*100)," cm",F.unlocked.includes("icp")?" \xB7 R = ICP":""]})]}),u&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("div",{className:"lab-ui lab-help",children:[x==="drone"?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:"WASD"})," ",W(i,"fliegen","fly")," \xB7 ",(0,S.jsx)("b",{children:W(i,"Leertaste / Shift","Space / Shift")})," ",W(i,"steigen / sinken","up / down")," \xB7 ",(0,S.jsx)("b",{children:"Q / E"})," ",W(i,"drehen","turn")]}):x==="handheld"?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:"WASD"})," ",W(i,"gehen","walk")," \xB7 ",(0,S.jsx)("b",{children:"Shift"})," ",W(i,"rennen","run")," \xB7 ",(0,S.jsx)("b",{children:W(i,"Leertaste halten","Hold space")})," ",W(i,"scannen","scan")]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:"WASD"})," ",W(i,"gehen","walk")," \xB7 ",(0,S.jsx)("b",{children:"P"})," ",W(i,"aufstellen","set up")," \xB7 ",(0,S.jsx)("b",{children:W(i,"Leertaste","Space")})," ",W(i,"scannen","scan")," \xB7 ",(0,S.jsx)("b",{children:"C"})," ",W(i,"einsammeln","collect")]})," ","\xB7 ",(0,S.jsx)("b",{children:W(i,"Maus","Mouse")})," ",W(i,"Ansicht","view")," \xB7 ",(0,S.jsx)("b",{children:"1 2 3"})," ",W(i,"Technologie","technology")," \xB7 ",(0,S.jsx)("b",{children:"T"})," ",W(i,"hell/dunkel","light/dark")]}),w&&(0,S.jsx)("div",{className:"lab-ui lab-mapshade",onClick:()=>O(!1)}),(0,S.jsx)("canvas",{ref:r,className:`lab-ui lab-map${w?" big":""}`,width:340,height:600,onClick:()=>O(U=>!U),title:w?W(i,"Klicken zum Schlie\xDFen","Click to close"):W(i,"Klicken f\xFCr Vollbild-Karte","Click for fullscreen map")}),w&&(0,S.jsx)("div",{className:"lab-ui lab-mapcap",children:W(i,"Karte \xB7 Halle und Referenzbaustelle \xB7 klicken oder Esc zum Schlie\xDFen","Map \xB7 hall and reference site \xB7 click or Esc to close")}),(!Qe||ot)&&(0,S.jsxs)("div",{className:Qe?"lab-ui lab-drawer":"lab-contents",onClick:U=>Qe&&U.target.closest("button")&&!U.target.closest(".lab-drawer-keep")&&vt(!1),children:[Qe&&(0,S.jsxs)("div",{className:"lab-drawer-h lab-drawer-keep",children:[(0,S.jsx)("b",{children:W(i,"Skills & Werkzeuge","Skills & tools")}),(0,S.jsx)("button",{className:"lab-x",onClick:()=>vt(!1),children:"\u2715"})]}),(0,S.jsxs)("div",{className:"lab-ui lab-tools",children:[(0,S.jsxs)("button",{onClick:()=>{let U=o.current?.snapshot();U&&Ce(U,"ansicht")},title:W(i,"Aktuelle 3D-Ansicht als PNG speichern","Save the current 3D view as PNG"),children:[(0,S.jsx)("i",{children:"\u{1F4F7}"}),(0,S.jsx)("span",{children:W(i,"Ansicht als PNG","View as PNG")})]}),Ip.map(U=>{let me=U.id==="labels"?F.labels:xt===U.id;return(0,S.jsxs)("button",{className:me?"on":"",onClick:()=>U.id==="labels"?o.current?.labels():N(dt=>dt===U.id?null:U.id),children:[(0,S.jsx)("i",{children:U.icon}),(0,S.jsxs)("span",{children:[ht(U.t,i),U.id==="pano"&&Et.length?` (${Et.length})`:""]}),(0,S.jsx)("kbd",{children:U.key})]},U.id)})]}),(0,S.jsx)("div",{className:"lab-ui lab-skills",children:ts.map(U=>{let me=F.unlocked.includes(U.id);if(U.id==="icp"&&!me)return null;let dt=me&&(U.passive||U.id==="seg"&&F.color==="seg"||U.id==="heat"&&F.color==="heat"||U.id==="therm"&&F.color==="therm"||U.id==="mat"&&F.color==="mat"||U.id==="mesh"&&F.mesh||U.id==="xray"&&F.xray||U.id==="measure"&&F.measure||U.id==="auto"&&F.auto||U.id==="nbv"&&F.nbv||U.id==="cut"&&F.cut.mode>0);return(0,S.jsxs)("button",{className:`${me?"got":"lock"}${dt?" on":""}`,disabled:!me||U.passive,onClick:()=>o.current?.skill(U.id),title:me?`${ht(U.t,i)} \u2013 ${ht(U.d,i)}`:W(i,"Noch verborgen \u2013 wird durch eine Station freigeschaltet","Still hidden \u2013 unlocked by a station"),children:[(0,S.jsx)("i",{children:me?U.icon:"?"}),me&&U.key&&(0,S.jsx)("kbd",{children:U.key}),me&&(0,S.jsx)("span",{children:ht(U.t,i)})]},U.id)})}),Qe&&(0,S.jsxs)("div",{className:"lab-drawer-row",children:[(0,S.jsx)("button",{onClick:()=>g(U=>U==="dark"?"light":"dark"),children:f==="dark"?"\u25D0 "+W(i,"Wei\xDFe Leere","White void"):"\u25D1 "+W(i,"Dunkle Leere","Dark void")}),(0,S.jsxs)("button",{onClick:ge,children:["\u26F6 ",W(i,"Vollbild","Fullscreen")]}),(0,S.jsxs)("a",{href:"#/",children:["\u2715 ",W(i,"Lab verlassen","Exit lab")]})]})]}),(0,S.jsx)("div",{className:`lab-ui lab-legend${Qe&&!fe?" closed":""}`,onClick:()=>Qe&&P(U=>!U),children:Qe&&!fe?(0,S.jsxs)("b",{children:["\u25A4 ",W(i,"Legende","Legend")]}):(0,S.jsxs)(S.Fragment,{children:[an,F.cut.mode>0&&(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"#ff7a3d"}}),W(i,"Schnittkante","cut edge")]}),F.nbv&&(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"#ff9a3d",borderRadius:8}}),W(i,"vorgeschlagener TLS-Standpunkt","suggested TLS position")]})]})}),(0,S.jsxs)("div",{className:"lab-ui lab-optstack",children:[F.cut.mode>0&&(0,S.jsxs)("div",{className:`lab-ui lab-opt lab-cutopt${V.cut?" min":""}`,children:[se("cut",W(i,"Schnittebene","Section plane")),(0,S.jsx)("div",{className:"lab-seg3",children:[[1,W(i,"Horizontal (z)","Horizontal (z)")],[2,W(i,"L\xE4ngs (x)","Long. (x)")],[3,W(i,"Quer (y)","Cross (y)")]].map(([U,me])=>(0,S.jsx)("button",{className:F.cut.mode===U?"on":"",onClick:()=>o.current?.cut(U,U===1?1.2:0,F.cut.flip),children:me},U))}),(0,S.jsxs)("label",{children:[F.cut.mode===1?W(i,"Schnitth\xF6he z","Cut height z"):F.cut.mode===2?W(i,"Schnittlage x","Cut position x"):W(i,"Schnittlage y","Cut position y")," = ",id(F.cut.mode===3?-F.cut.pos:F.cut.pos,i,2)," m",(0,S.jsx)("input",{type:"range",min:F.cut.mode===1?.1:F.cut.mode===2?-27:-20,max:F.cut.mode===1?9.5:F.cut.mode===2?20:66,step:.05,value:F.cut.pos,onChange:U=>o.current?.cut(F.cut.mode,+U.target.value,F.cut.flip)})]}),(0,S.jsxs)("button",{className:"lab-flip",onClick:()=>o.current?.cut(F.cut.mode,F.cut.pos,!F.cut.flip),children:["\u21C5 ",W(i,"Seite umkehren","Flip side")]})]}),F.color==="heat"&&(0,S.jsxs)("div",{className:`lab-ui lab-opt lab-feats${V.feats?" min":""}`,children:[se("feats",(0,S.jsxs)(S.Fragment,{children:[W(i,"RandLA-Net-Merkmal","RandLA-Net feature"),V.feats?` \xB7 ${F.feat<16?$s[F.feat].k:W(i,"Ebenheit","flatness")}`:""]})),(0,S.jsx)("div",{className:"lab-featgrid",children:$s.map((U,me)=>(0,S.jsx)("button",{className:F.feat===me?"on":"",onClick:()=>o.current?.feature(me),title:ht(U.t,i),children:me<16?`${me+1} \xB7 ${U.k}`:W(i,"Ebenheit","flatness")},U.k))})]}),F.mesh&&(0,S.jsxs)("div",{className:`lab-ui lab-opt lab-meshopt${V.mesh?" min":""}`,children:[se("mesh","Scan-to-Mesh"),(0,S.jsx)("div",{className:"lab-seg3",children:[["all",W(i,"Gesamt","Whole")],["obj",W(i,"Objektweise","Per object")],["cad",W(i,"Modell","Model")]].map(([U,me])=>(0,S.jsx)("button",{className:F.meshMode===U?"on":"",onClick:()=>o.current?.mesh(U),children:me},U))}),F.meshMode!=="cad"?(0,S.jsxs)("label",{children:[W(i,"Feinheit","Detail")," \xB7 ",W(i,"Voxel","voxel")," ",Math.round(F.meshVS*100)," cm",(0,S.jsx)("input",{type:"range",min:0,max:3,step:1,value:[.3,.2,.15,.1].indexOf(F.meshVS),onChange:U=>o.current?.mesh(F.meshMode,[.3,.2,.15,.1][+U.target.value])}),(0,S.jsxs)("span",{className:"lab-ramp-l",children:[(0,S.jsx)("em",{children:W(i,"grob, geschlossen","coarse, closed")}),(0,S.jsx)("em",{children:W(i,"fein, l\xF6chrig","fine, holey")})]})]}):(0,S.jsx)("em",{children:W(i,"Nachmodellierte K\xF6rper erscheinen, sobald \u2265 50 % eines Objekts gescannt sind; Hallenbl\xF6cke und Bodenplatte ab 30 %.","Reconstructed solids appear once \u2265 50 % of an object is scanned; hall blocks and floor slab from 30 %.")}),p.meshQ>0&&(0,S.jsxs)("em",{className:"lab-mq",children:["\u25B3 ",p.meshQ," ",W(i,"Kacheln in Arbeit","tiles in progress")]})]}),F.color==="mat"&&(0,S.jsxs)("div",{className:`lab-ui lab-opt lab-matpanel${V.mat?" min":""}`,children:[se("mat",W(i,"Materialkataster \xB7 aus Modell, Objekte \u2265 50 % erfasst","Material register \xB7 from model, objects \u2265 50 % captured")),(0,S.jsx)("table",{children:(0,S.jsxs)("tbody",{children:[[...p.mats].sort((U,me)=>me.mass-U.mass).map(U=>(0,S.jsxs)("tr",{children:[(0,S.jsxs)("td",{children:[(0,S.jsx)("i",{style:{background:Vn[U.k]?.c}}),i==="en"?Vn[U.k]?.en:Vn[U.k]?.de]}),(0,S.jsxs)("td",{children:[id(U.vol,i,3)," m\xB3"]}),(0,S.jsx)("td",{children:U.mass?`${id(U.mass/1e3,i,2)} t`:"\u2013"})]},U.k)),(0,S.jsxs)("tr",{children:[(0,S.jsxs)("td",{children:[(0,S.jsx)("i",{style:{background:Vn.concrete.c}}),W(i,"Bodenplatte (Fl\xE4che)","Floor slab (area)")]}),(0,S.jsxs)("td",{colSpan:2,children:[p.floorM2," m\xB2"]})]})]})})]})]}),Qe&&!ot&&_===null&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(sm,{onMove:(U,me)=>o.current?.stick(U,me),label:x==="drone"?W(i,"fliegen","fly"):W(i,"gehen","walk")}),(0,S.jsxs)("div",{className:"lab-ui lab-acts",children:[x==="drone"&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(Dl,{k:" ",press:je,children:["\u2912",(0,S.jsx)("small",{children:W(i,"hoch","up")})]}),(0,S.jsxs)(Dl,{k:"shift",press:je,children:["\u2913",(0,S.jsx)("small",{children:W(i,"runter","down")})]})]}),x==="handheld"&&(0,S.jsxs)(Dl,{k:"scan",press:je,className:`big${p.rec?" rec":""}`,children:["\u25CF",(0,S.jsx)("small",{children:W(i,"halten = scannen","hold = scan")})]}),x==="tls"&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("button",{className:"lab-hold",onClick:()=>o.current?.place(),children:["\u2295",(0,S.jsx)("small",{children:W(i,"aufstellen","set up")})]}),(0,S.jsxs)("button",{className:"lab-hold big",onClick:()=>o.current?.tlsScan(),children:["\u25B6",(0,S.jsx)("small",{children:W(i,"alle scannen","scan all")})]}),(0,S.jsxs)("button",{className:"lab-hold",onClick:()=>o.current?.collect(),children:["\u293A",(0,S.jsx)("small",{children:W(i,"einsammeln","collect")})]})]})]}),(0,S.jsxs)("button",{className:"lab-ui lab-menu",onClick:()=>vt(U=>!U),children:["\u2630 ",(0,S.jsxs)("span",{children:["Skills ",F.unlocked.length,"/",ts.length]})]})]})]}),Ie&&(0,S.jsxs)("form",{className:"lab-ui lab-search",onSubmit:U=>{U.preventDefault(),St.trim()&&o.current?.search(St.trim()),be(!1)},children:[(0,S.jsxs)("small",{children:["Zero-Shot \xB7 ",W(i,"Textprompt \u2192 Bounding Boxes","text prompt \u2192 bounding boxes")]}),(0,S.jsx)("input",{autoFocus:!0,value:St,onChange:U=>zt(U.target.value),placeholder:W(i,"z. B. Bagger, Person, Stuhl, Big Bag, Stahl \u2026","e.g. excavator, person, chair, big bag, steel \u2026"),onKeyDown:U=>U.key==="Escape"&&be(!1)}),(0,S.jsx)("button",{className:"btn",children:W(i,"Suchen","Search")})]}),ie&&(0,S.jsxs)("div",{className:"lab-ui lab-ask",children:[(0,S.jsxs)("div",{className:"lab-ask-h",children:[(0,S.jsxs)("small",{children:["\u275D ",W(i,"Frag das Lab \xB7 regelbasiert, offline, mit Quelle","Ask the lab \xB7 rule-based, offline, with source")]}),(0,S.jsx)("button",{className:"lab-x",onClick:()=>de(!1),children:"\u2715"})]}),(0,S.jsxs)("div",{className:"lab-ask-log",children:[gt.length===0&&(0,S.jsx)("p",{className:"lab-lg-d",children:W(i,"Beispiele: \u201EWie viele Personen?\u201C \xB7 \u201EWo ist der Bagger?\u201C \xB7 \u201EWelche Abweichungen?\u201C \xB7 \u201EWie viel Stahl?\u201C",'Examples: "How many people?" \xB7 "Where is the excavator?" \xB7 "Which deviations?" \xB7 "How much steel?"')}),gt.map((U,me)=>(0,S.jsxs)("div",{className:"lab-ask-qa",children:[(0,S.jsx)("b",{children:U.q}),(0,S.jsx)("p",{children:U.a}),(0,S.jsx)("span",{children:U.src.map((dt,un)=>(0,S.jsx)("em",{children:dt},un))})]},me))]}),(0,S.jsxs)("form",{onSubmit:U=>{U.preventDefault(),!(!He.trim()||!o.current)&&(at(me=>[...me.slice(-5),o.current.ask(He.trim())]),Fe(""))},children:[(0,S.jsx)("input",{autoFocus:!0,value:He,onChange:U=>Fe(U.target.value),placeholder:W(i,"Frage zum Scan \u2026","Question about the scan \u2026"),onKeyDown:U=>U.key==="Escape"&&de(!1)}),(0,S.jsx)("button",{className:"btn",children:W(i,"Fragen","Ask")})]})]}),xt==="plan"&&(0,S.jsxs)("div",{className:"lab-ui lab-panel",children:[(0,S.jsxs)("div",{className:"lab-panel-h",children:[(0,S.jsxs)("b",{children:["\u25A4 ",W(i,"Grundriss \xB7 w\xE4chst mit jedem Scan","Floor plan \xB7 grows with every scan")]}),(0,S.jsx)("button",{className:"btn ghost",onClick:Oe,children:"\u2913 PNG"}),(0,S.jsx)("button",{className:"lab-x",onClick:()=>N(null),children:"\u2715"})]}),(0,S.jsx)("div",{className:"lab-panel-b",children:(0,S.jsx)("canvas",{ref:a,className:"lab-plan"})})]}),xt==="proj"&&(0,S.jsxs)("div",{className:"lab-ui lab-panel",children:[(0,S.jsxs)("div",{className:"lab-panel-h",children:[(0,S.jsxs)("b",{children:["\u25EB ",W(i,"Projektionsarten der aktuellen Punktwolke","Projection types of the current point cloud")]}),(0,S.jsxs)("button",{className:"btn ghost",onClick:qe,children:["\u21BB ",W(i,"Aktualisieren","Refresh")]}),(0,S.jsx)("button",{className:"lab-x",onClick:()=>N(null),children:"\u2715"})]}),(0,S.jsxs)("div",{className:"lab-panel-b lab-projgrid",children:[pe&&[["pano",W(i,"Panoramabild (vom aktuellen Standpunkt)","Panorama (from current position)")],["cube",W(i,"W\xFCrfelnetzbild","Cube-map net")],["persp",W(i,"Bild aus vorgegebener Kameraperspektive","Image from a given camera perspective")],["ortho",W(i,"Orthobild (Draufsicht)","Orthoimage (top view)")]].map(([U,me])=>(0,S.jsxs)("figure",{children:[(0,S.jsx)("img",{src:pe[U],alt:""}),(0,S.jsxs)("figcaption",{children:[me,(0,S.jsx)("button",{className:"lab-png",onClick:()=>Ce(pe[U],`projektion_${U}`),children:"\u2913 PNG"})]})]},U)),(0,S.jsx)("p",{className:"lab-lg-d",children:W(i,"Wie Abb. 2.6 der Dissertation \u2013 nur aus dem, was du bisher gescannt hast, in der aktuellen F\xE4rbung (Merkmal, Segmentierung, Material \u2026).","As in Fig. 2.6 of the dissertation \u2013 built only from what you have scanned so far, in the current colouring (feature, segmentation, material \u2026).")})]})]}),xt==="pano"&&(0,S.jsxs)("div",{className:"lab-ui lab-panel",children:[(0,S.jsxs)("div",{className:"lab-panel-h",children:[(0,S.jsxs)("b",{children:["\u25CE ",W(i,"360\xB0-Panoramen der TLS-Standpunkte","360\xB0 panoramas of the TLS positions")]}),(0,S.jsx)("button",{className:"lab-x",onClick:()=>(N(null),wt(null)),children:"\u2715"})]}),(0,S.jsx)("div",{className:"lab-panel-b",children:rn?(0,S.jsxs)(S.Fragment,{children:[Me&&(Q==="360"?(0,S.jsx)(tm,{url:Me}):(0,S.jsx)("div",{className:"lab-panoflat",children:(0,S.jsx)("img",{src:Me,alt:""})})),(0,S.jsxs)("div",{className:"lab-pano-bar",children:[(0,S.jsxs)("button",{className:"btn ghost",onClick:()=>wt(null),children:["\u2190 ",W(i,"\xDCbersicht","Overview")]}),(0,S.jsxs)("div",{className:"lab-seg3 lab-seg2",children:[(0,S.jsxs)("button",{className:Q==="360"?"on":"",onClick:()=>ae("360"),children:["\u25CE ",W(i,"360\xB0 umsehen","360\xB0 look around")]}),(0,S.jsxs)("button",{className:Q==="flat"?"on":"",onClick:()=>ae("flat"),children:["\u25AD ",W(i,"Bild","Image")]})]}),(0,S.jsx)("button",{className:"btn ghost",onClick:()=>Me&&Ce(Me,`panorama_${rn.id}`),children:"\u2913 PNG"}),(0,S.jsxs)("span",{children:[W(i,"Standpunkt","Position")," ",rn.id," \xB7 x ",rn.x.toFixed(1)," \xB7 y ",(-rn.z).toFixed(1)," \xB7 ",W(i,"F\xE4rbung wie im Lab","colouring as in the lab"),Q==="360"?" \xB7 "+W(i,"ziehen zum Umsehen","drag to look around"):""]})]})]}):Et.length?(0,S.jsx)("div",{className:"lab-panogrid",children:Et.map(U=>(0,S.jsxs)("button",{onClick:()=>wt(U),children:[(0,S.jsx)("img",{src:U.thumb,alt:""}),(0,S.jsxs)("span",{children:[W(i,"Standpunkt","Position")," ",U.id]})]},U.id))}):(0,S.jsx)("p",{className:"lab-lg-d",children:W(i,"Noch keine Panoramen. Wechsle zu TLS (3), stelle Scanner auf (P) und scanne (Leertaste) \u2013 jeder Standpunkt liefert ein 360\xB0-Bild.","No panoramas yet. Switch to TLS (3), set up scanners (P) and scan (space) \u2013 every position yields a 360\xB0 image.")})})]}),!u&&(0,S.jsxs)("div",{className:"lab-ui lab-intro",children:[(0,S.jsx)("div",{className:"kicker",children:"3D Operation System \xB7 powered by X-AVIS"}),(0,S.jsx)("h1",{children:"Spatial AI Lab"}),(0,S.jsx)("p",{children:W(i,"Du startest in der Leere. Nur dein Scanner sieht \u2013 was er erfasst, wird Wirklichkeit: Punkt f\xFCr Punkt legst du echte Laserscans frei: eine Stahlbauhalle und \u2013 durchs offene Tor \u2013 die Referenzbaustelle Aachen. Folge den Signalen, scanne die Stationen, und X-AVIS segmentiert, was du gefunden hast. Die Drohne findet, Handheld und TLS analysieren \u2013 und jeder Akku ist begrenzt. Manche Stationen schalten Skills frei \u2026","You start in the void. Only your scanner can see \u2013 whatever it captures becomes real: point by point you uncover real laser scans: a steel fabrication hall and \u2013 through the open gate \u2013 the Reference Construction Site Aachen. Follow the signals, scan the stations, and X-AVIS segments what you found. The drone finds, handheld and TLS analyse \u2013 and every battery is limited. Some stations unlock skills \u2026")}),(0,S.jsx)("div",{className:"lab-techpick",children:gu.map(U=>(0,S.jsxs)("button",{className:x===U.id?"on":"",onClick:()=>Le(U.id),children:[(0,S.jsx)("i",{children:U.icon}),(0,S.jsx)("b",{children:ht(U.t,i)}),(0,S.jsx)("span",{children:ht(Qe?U.dt:U.d,i)})]},U.id))}),(0,S.jsxs)("div",{className:"lab-modes",children:[(0,S.jsxs)("button",{className:f==="dark"?"on":"",onClick:()=>g("dark"),children:[(0,S.jsx)("i",{className:"sw-dark"}),W(i,"Dunkle Leere","Dark void")]}),(0,S.jsxs)("button",{className:f==="light"?"on":"",onClick:()=>g("light"),children:[(0,S.jsx)("i",{className:"sw-light"}),W(i,"Wei\xDFe Leere","White void")]})]}),c<1?(0,S.jsxs)("div",{className:"lab-load",children:[(0,S.jsx)("i",{style:{width:`${Math.round(c*100)}%`}}),(0,S.jsxs)("span",{children:[W(i,"Lade Punktwolke","Loading point cloud")," \xB7 ",Math.round(c*100)," %"]})]}):(0,S.jsxs)("button",{className:"btn",onClick:()=>{Xe(),o.current?.tech(x),d(!0),o.current?.start()},children:["\u25B6 ",W(i,"Scan starten","Start scanning"),Qe?" \xB7 "+W(i,"Vollbild quer","fullscreen landscape"):""]}),(0,S.jsx)("small",{className:"lab-note",children:W(i,"Echte Scans: Stahlbauhalle (RWTH Aachen) \xB7 Referenzbaustelle Aachen aus RefSite3D (Fahrendholz-Heiermann et al., CC BY 4.0) \xB7 einzelne Stationsobjekte synthetisch","Real scans: steel hall (RWTH Aachen) \xB7 Reference Construction Site Aachen from RefSite3D (Fahrendholz-Heiermann et al., CC BY 4.0) \xB7 some station objects synthetic")})]}),lt&&(0,S.jsx)(Vd,{s:lt,lang:i,skills:nd(lt),onClose:()=>y(null)}),C!==null&&!Z&&_===null&&xt===null&&(0,S.jsxs)("div",{className:"lab-ui lab-done",children:[(0,S.jsxs)("b",{children:[W(i,"Lab vollst\xE4ndig entdeckt","Lab fully discovered")," \u2713"]}),(0,S.jsxs)("span",{children:[W(i,`Alle ${Fa} Stationen analysiert in`,`All ${Fa} stations analysed in`)," ",(0,S.jsx)("b",{children:rm(C)})," \xB7 ",W(i,"Gel\xE4nde erfasst","area captured")," ",Math.round(p.cov*100)," % \xB7 Skills ",F.unlocked.length,"/",ts.length,!p.bonus&&` \xB7 ${W(i,"ein Signal fehlt noch \u2026","one signal is still missing \u2026")}`]}),(0,S.jsx)("span",{children:W(i,"Vom Scan zur Entscheidung.","From scan to decision.")}),(0,S.jsxs)("div",{className:"lab-done-row",children:[(0,S.jsxs)("button",{className:"btn",onClick:()=>v(!0),children:["\u25B6 ",W(i,"Weiter erkunden","Keep exploring")]}),(0,S.jsx)("a",{className:"btn ghost",href:"#/",children:W(i,"Zur Website","Back to website")})]})]}),Qe&&u&&E&&!re&&(0,S.jsxs)("div",{className:"lab-ui lab-rotate",children:[(0,S.jsx)("div",{className:"lab-rotate-i",children:"\u{1F4F1}"}),(0,S.jsx)("b",{children:W(i,"Handy quer drehen","Rotate your phone")}),(0,S.jsx)("span",{children:W(i,"Das Spatial AI Lab ist f\xFCr das Querformat gemacht \u2013 mehr Halle, mehr Platz f\xFCr Joystick und Steuerung.","The Spatial AI Lab is made for landscape \u2013 more hall, more room for joystick and controls.")}),(0,S.jsxs)("button",{className:"btn",onClick:Xe,children:["\u26F6 ",W(i,"Vollbild","Fullscreen")]}),(0,S.jsx)("button",{className:"lab-flip",onClick:()=>j(!0),children:W(i,"Trotzdem hochkant","Stay in portrait")})]}),(0,S.jsxs)("div",{className:"lab-copy",children:["\xA9 ",new Date().getFullYear()," Jan Luca Fahrendholz-Heiermann \xB7 X-AVIS"]})]})},Kb=wv;export{Kb as default};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
