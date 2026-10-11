import{b as Dd,g as Ud,i as kd,k as Za,l as Fd}from"./chunk-A5ZTPR6Q.js";import{A as Nd,B as ot,C as Me,b as di,c as Zl,e as is,z as Ld}from"./chunk-V3L2VTIW.js";var mt=di(Zl());var Ge=di(is()),Kn=(i,e,t)=>i==="en"?t:e,Od=i=>`rgb(${i.map(e=>Math.round(e*255)).join(",")})`,zd=({s:i,lang:e,skills:t,onClose:n})=>{let s=i.uc?Dd[i.uc-1]:null;return(0,Ge.jsxs)("div",{className:"lab-ui lab-card",style:{borderColor:i.c},children:[(0,Ge.jsx)("button",{className:"lab-x",onClick:n,children:"\u2715"}),(0,Ge.jsxs)("div",{className:"kicker",style:{color:i.c},children:[i.kind==="uc"?`Use Case ${i.uc}`:ot(i.t,e)," \xB7 ",Kn(e,"gescannt & analysiert","scanned & analysed")]}),(0,Ge.jsx)("h2",{children:s?ot(s.title,e):ot(i.t,e)}),t.map(r=>(0,Ge.jsxs)("div",{className:"lab-skillgot",children:[(0,Ge.jsx)("span",{children:r.icon}),(0,Ge.jsxs)("div",{children:[(0,Ge.jsx)("small",{children:Kn(e,"Skill freigeschaltet","Skill unlocked")}),(0,Ge.jsxs)("b",{children:[ot(r.t,e),r.key?` [${r.key}]`:` \xB7 ${Kn(e,"passiv","passive")}`]}),(0,Ge.jsx)("em",{children:ot(r.d,e)})]})]},r.id)),(0,Ge.jsxs)("div",{className:"lab-parts",children:[(0,Ge.jsx)("small",{children:Kn(e,"X-AVIS hat erkannt","X-AVIS detected")}),i.parts.map((r,a)=>(0,Ge.jsxs)("span",{style:{borderColor:Od(r.c)},children:[(0,Ge.jsx)("i",{style:{background:Od(r.c)}}),ot(r.name,e)]},a))]}),s&&(0,Ge.jsxs)(Ge.Fragment,{children:[(0,Ge.jsx)("p",{className:"lab-claim",children:ot(s.claim,e)}),(0,Ge.jsx)("video",{src:`media/uc${s.n}_${e}.mp4`,poster:`media/thumb_uc${s.n}_${e}.jpg`,controls:!0,muted:!0,playsInline:!0},`${s.n}-${e}`),(0,Ge.jsx)("ol",{children:s.flow.map((r,a)=>(0,Ge.jsx)("li",{children:ot(r,e)},a))}),(0,Ge.jsx)("div",{className:"lab-kpis",children:s.value.map((r,a)=>(0,Ge.jsxs)("div",{children:[(0,Ge.jsx)("b",{children:r.v}),(0,Ge.jsx)("span",{children:ot(r.t,e)})]},a))}),(0,Ge.jsxs)("a",{className:"btn",href:`#/uc/${s.n}`,children:[Kn(e,"Zur Use-Case-Seite","Open use-case page")," \u2192"]})]}),i.kind==="docs"&&(0,Ge.jsxs)("div",{className:"lab-list",children:[Ud.map((r,a)=>(0,Ge.jsxs)("div",{children:[(0,Ge.jsx)("b",{children:ot(r.t,e)}),(0,Ge.jsx)("span",{children:ot(r.d,e)})]},a)),(0,Ge.jsxs)("a",{className:"btn",href:"#/expertise",children:[Kn(e,"Mehr unter Expertise","More in expertise")," \u2192"]})]}),i.kind==="talks"&&(0,Ge.jsx)("div",{className:"lab-list",children:kd.slice(0,6).map((r,a)=>(0,Ge.jsxs)("div",{className:"lab-talk",children:[r.imgs[0]&&(0,Ge.jsx)("img",{src:`media/${r.imgs[0]}`,alt:""}),(0,Ge.jsxs)("div",{children:[(0,Ge.jsxs)("b",{children:[r.y&&`${r.y} \xB7 `,ot(r.t,e)]}),(0,Ge.jsx)("span",{children:ot(r.where,e)})]})]},a))}),i.kind==="bonus"&&(0,Ge.jsxs)("div",{className:"lab-list",children:[(0,Ge.jsx)("p",{className:"lab-claim",children:Kn(e,"Zielmarken sind die Br\xFCcke zwischen einzelnen Scans: \xDCber sie werden Standpunkte zueinander und zum Modell registriert. In Artefakt 2 geschieht das zielmarkenfrei \u2013 Grobregistrierung \xFCber Extended Gaussian Images (EGI) und Fourier-Mellin (FMT), Feinregistrierung per ICP, danach pr\xFCft ein MLP jedes Bauteil gegen das Soll.","Targets are the bridge between individual scans: they register positions to each other and to the model. Artefact 2 does this target-free \u2013 coarse registration via extended Gaussian images (EGI) and Fourier\u2013Mellin (FMT), fine registration via ICP, then an MLP verifies every component against the design.")}),(0,Ge.jsx)("img",{className:"lab-cardimg",src:"media/diss_5-14_b3-stahlbauhalle.jpg",alt:""}),(0,Ge.jsx)("img",{className:"lab-cardimg",src:"media/diss_5-19_verifikation-b3-stahlbauhalle.jpg",alt:""}),(0,Ge.jsx)("p",{className:"lab-claim",children:Kn(e,"Im Lab: Handheld-Scans driften (SLAM). Mit R registrierst du sie per ICP \u2013 die verschmierten W\xE4nde rasten ein.","In the lab: handheld scans drift (SLAM). Press R to register them via ICP \u2013 the smeared walls snap into place.")}),(0,Ge.jsxs)("a",{className:"btn",href:"#/expertise",children:[Kn(e,"Registrierung in der Expertise","Registration in expertise")," \u2192"]})]}),i.kind==="profile"&&(0,Ge.jsxs)("div",{className:"lab-list",children:[(0,Ge.jsxs)("div",{className:"lab-prof",children:[(0,Ge.jsx)("img",{src:"media/profile.jpg",alt:""}),(0,Ge.jsxs)("div",{children:[(0,Ge.jsx)("b",{children:Za.name}),(0,Ge.jsx)("span",{children:ot(Za.role,e)})]})]}),(0,Ge.jsx)("p",{className:"lab-claim",children:ot(Za.summary,e)}),(0,Ge.jsxs)("div",{className:"lab-egg",children:[(0,Ge.jsxs)("small",{children:["\u2605 Easter Egg \xB7 ",Kn(e,"Tiefe aus einem einzigen Bild","depth from a single image")]}),(0,Ge.jsxs)("div",{className:"lab-egg-imgs",children:[(0,Ge.jsx)("img",{src:"media/profile.jpg",alt:""}),(0,Ge.jsx)("span",{children:"\u2192"}),(0,Ge.jsx)("img",{src:"media/profile_depth.png",alt:""})]}),(0,Ge.jsx)("em",{children:Kn(e,"Depth Anything V2 sch\xE4tzt die relative Tiefe des Fotos. Statt \xFCber ein Lochkameramodell entsteht die Punktwolke als Relief \xFCber einer Referenzebene, dem Bildtr\xE4ger \u2013 wie bei meiner Kameramessung mit Referenzgeometrie statt LiDAR. Vorab berechnet, im Lab steht das Bild aus der Staffelei heraus.","Depth Anything V2 estimates the photo's relative depth. Instead of a pinhole camera model, the point cloud is built as relief over a reference plane, the picture itself \u2013 like my camera measurement with reference geometry instead of LiDAR. Precomputed; in the lab the picture pops out of the easel.")})]}),(0,Ge.jsx)("div",{className:"lab-links",children:Fd.map(r=>(0,Ge.jsxs)("a",{href:r.href,target:"_blank",rel:"noopener noreferrer",children:[r.k," \u2197"]},r.k))}),(0,Ge.jsxs)("a",{className:"btn",href:"#/profil",children:[Kn(e,"Vollst\xE4ndiges Profil","Full profile")," \u2192"]})]}),(0,Ge.jsx)("button",{className:"btn ghost lab-cont",onClick:n,children:Kn(e,"Weiter erkunden","Keep exploring")})]})};var ym=0,Bd=1,vm=2;var sp=1,bm=2,zi=3,Ai=0,Xn=1,on=2,fs=0,Vi=1,ms=2,Hd=3,Vd=4,Mm=5,Bs=100,Sm=101,Em=102,wm=103,Tm=104,Am=200,Rm=201,Cm=202,Pm=203,Dc=204,Uc=205,Im=206,Lm=207,Nm=208,Dm=209,Um=210,km=211,Fm=212,Om=213,zm=214,kc=0,Fc=1,Oc=2,wr=3,zc=4,Bc=5,Hc=6,Vc=7,rp=0,Bm=1,Hm=2,ps=0,Vm=1,Gm=2,Wm=3,Xm=4,Ym=5,$m=6,qm=7,Gd="attached",Km="detached",ap=300,Tr=301,Ar=302,Gc=303,Wc=304,gl=306,Vs=1e3,Bi=1001,_a=1002,Dn=1003,eu=1004;var yr=1005;var Gn=1006,fa=1007;var Ti=1008;var Gi=1009,op=1010,lp=1011,ya=1012,tu=1013,Gs=1014,_i=1015,Ia=1016,nu=1017,iu=1018,Rr=1020,cp=35902,hp=1021,up=1022,Wn=1023,dp=1024,fp=1025,br=1026,Cr=1027,su=1028,ru=1029,pp=1030,au=1031;var ou=1033,Co=33776,Po=33777,Io=33778,Lo=33779,Xc=35840,Yc=35841,$c=35842,qc=35843,Kc=36196,Zc=37492,Jc=37496,jc=37808,Qc=37809,eh=37810,th=37811,nh=37812,ih=37813,sh=37814,rh=37815,ah=37816,oh=37817,lh=37818,ch=37819,hh=37820,uh=37821,No=36492,dh=36494,fh=36495,mp=36283,ph=36284,mh=36285,gh=36286;var Pr=2300,Ir=2301,Jl=2302,Wd=2400,Xd=2401,Yd=2402,Zm=2500;var gp=0,xl=1,La=2,Jm=3200,jm=3201;var xp=0,Qm=1,hs="",gn="srgb",An="srgb-linear",lu="display-p3",_l="display-p3-linear",Uo="linear",rn="srgb",ko="rec709",Fo="p3";var sr=7680;var $d=519,e0=512,t0=513,n0=514,_p=515,i0=516,s0=517,r0=518,a0=519,xh=35044,yl=35048;var qd="300 es",Hi=2e3,Oo=2001,gs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kd=1234567,Mr=Math.PI/180,Lr=180/Math.PI;function yi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function xn(i,e,t){return Math.max(e,Math.min(t,i))}function cu(i,e){return(i%e+e)%e}function o0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function l0(i,e,t){return i!==e?(t-i)/(e-i):0}function pa(i,e,t){return(1-t)*i+t*e}function c0(i,e,t,n){return pa(i,e,1-Math.exp(-t*n))}function h0(i,e=1){return e-Math.abs(cu(i,e*2)-e)}function u0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function d0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function f0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function p0(i,e){return i+Math.random()*(e-i)}function m0(i){return i*(.5-Math.random())}function g0(i){i!==void 0&&(Kd=i);let e=Kd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function x0(i){return i*Mr}function _0(i){return i*Lr}function y0(i){return(i&i-1)===0&&i!==0}function v0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function b0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function M0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Na={DEG2RAD:Mr,RAD2DEG:Lr,generateUUID:yi,clamp:xn,euclideanModulo:cu,mapLinear:o0,inverseLerp:l0,lerp:pa,damp:c0,pingpong:h0,smoothstep:u0,smootherstep:d0,randInt:f0,randFloat:p0,randFloatSpread:m0,seededRandom:g0,degToRad:x0,radToDeg:_0,isPowerOfTwo:y0,ceilPowerOfTwo:v0,floorPowerOfTwo:b0,setQuaternionFromProperEuler:M0,normalize:Yt,denormalize:xi},De=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(xn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},At=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],b=s[1],_=s[4],y=s[7],D=s[2],A=s[5],R=s[8];return r[0]=a*x+o*b+l*D,r[3]=a*m+o*_+l*A,r[6]=a*p+o*y+l*R,r[1]=c*x+h*b+u*D,r[4]=c*m+h*_+u*A,r[7]=c*p+h*y+u*R,r[2]=d*x+f*b+g*D,r[5]=d*m+f*_+g*A,r[8]=d*p+f*y+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(jl.makeScale(e,t)),this}rotate(e){return this.premultiply(jl.makeRotation(-e)),this}translate(e,t){return this.premultiply(jl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jl=new At;function yp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function va(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function S0(){let i=va("canvas");return i.style.display="block",i}var Zd={};function Do(i){i in Zd||(Zd[i]=!0,console.warn(i))}function E0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function w0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function T0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Jd=new At().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jd=new At().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ia={[An]:{transfer:Uo,primaries:ko,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[gn]:{transfer:rn,primaries:ko,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[_l]:{transfer:Uo,primaries:Fo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(jd),fromReference:i=>i.applyMatrix3(Jd)},[lu]:{transfer:rn,primaries:Fo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(jd),fromReference:i=>i.applyMatrix3(Jd).convertLinearToSRGB()}},A0=new Set([An,_l]),Vt={enabled:!0,_workingColorSpace:An,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!A0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=ia[e].toReference,s=ia[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ia[i].primaries},getTransfer:function(i){return i===hs?Uo:ia[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(ia[e].luminanceCoefficients)}};function Sr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ql(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rr,_h=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rr===void 0&&(rr=va("canvas")),rr.width=e.width,rr.height=e.height;let n=rr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=va("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Sr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Sr(t[n]/255)*255):t[n]=Sr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},R0=0,zo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ec(s[a].image)):r.push(ec(s[a]))}else r=ec(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ec(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_h.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var C0=0,Tn=class i extends gs{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Bi,s=Bi,r=Gn,a=Ti,o=Wn,l=Gi,c=i.DEFAULT_ANISOTROPY,h=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=yi(),this.name="",this.source=new zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ap)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vs:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case _a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vs:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case _a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=ap;Tn.DEFAULT_ANISOTROPY=1;var Wt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(f+1)/2,D=(p+1)/2,A=(h+d)/4,R=(u+x)/4,k=(g+m)/4;return _>y&&_>D?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=R/n):y>D?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=k/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=R/r,s=k/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yh=class extends gs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new zo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wi=class extends yh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Bo=class extends Tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var vh=class extends Tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*x,b=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let D=Math.sqrt(_),A=Math.atan2(D,p*b);m=Math.sin(m*A)/D,o=Math.sin(o*A)/D}let y=o*b;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+x*y,m===1-o){let D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tc.copy(this).projectOnVector(e),this.sub(tc)}reflect(e){return this.sub(tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(xn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tc=new I,Qd=new vi,Yn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fi):fi.fromBufferAttribute(r,a),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ja.copy(n.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),ja.subVectors(this.max,sa),ar.subVectors(e.a,sa),or.subVectors(e.b,sa),lr.subVectors(e.c,sa),ss.subVectors(or,ar),rs.subVectors(lr,or),Ns.subVectors(ar,lr);let t=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Ns.z,Ns.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Ns.z,0,-Ns.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Ns.y,Ns.x,0];return!nc(t,ar,or,lr,ja)||(t=[1,0,0,0,1,0,0,0,1],!nc(t,ar,or,lr,ja))?!1:(Qa.crossVectors(ss,rs),t=[Qa.x,Qa.y,Qa.z],nc(t,ar,or,lr,ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ni=[new I,new I,new I,new I,new I,new I,new I,new I],fi=new I,Ja=new Yn,ar=new I,or=new I,lr=new I,ss=new I,rs=new I,Ns=new I,sa=new I,ja=new I,Qa=new I,Ds=new I;function nc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ds.fromArray(i,r);let o=s.x*Math.abs(Ds.x)+s.y*Math.abs(Ds.y)+s.z*Math.abs(Ds.z),l=e.dot(Ds),c=t.dot(Ds),h=n.dot(Ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var P0=new Yn,ra=new I,ic=new I,jn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):P0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ra.subVectors(e,this.center);let t=ra.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ra,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ra.copy(e.center).add(ic)),this.expandByPoint(ra.copy(e.center).sub(ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Di=new I,sc=new I,eo=new I,as=new I,rc=new I,to=new I,ac=new I,Nr=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){sc.copy(e).add(t).multiplyScalar(.5),eo.copy(t).sub(e).normalize(),as.copy(this.origin).sub(sc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(eo),o=as.dot(this.direction),l=-as.dot(eo),c=as.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(sc).addScaledVector(eo,d),f}intersectSphere(e,t){Di.subVectors(e.center,this.origin);let n=Di.dot(this.direction),s=Di.dot(Di)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,n,s,r){rc.subVectors(t,e),to.subVectors(n,e),ac.crossVectors(rc,to);let a=this.direction.dot(ac),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;as.subVectors(this.origin,e);let l=o*this.direction.dot(to.crossVectors(as,to));if(l<0)return null;let c=o*this.direction.dot(rc.cross(as));if(c<0||l+c>a)return null;let h=-o*as.dot(ac);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pt=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,x,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/cr.setFromMatrixColumn(e,0).length(),r=1/cr.setFromMatrixColumn(e,1).length(),a=1/cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(I0,e,L0)}lookAt(e,t,n){let s=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),os.crossVectors(n,Zn),os.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),os.crossVectors(n,Zn)),os.normalize(),no.crossVectors(Zn,os),s[0]=os.x,s[4]=no.x,s[8]=Zn.x,s[1]=os.y,s[5]=no.y,s[9]=Zn.y,s[2]=os.z,s[6]=no.z,s[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],b=n[3],_=n[7],y=n[11],D=n[15],A=s[0],R=s[4],k=s[8],J=s[12],v=s[1],w=s[5],O=s[9],H=s[13],Y=s[2],se=s[6],F=s[10],le=s[14],K=s[3],he=s[7],Ce=s[11],ve=s[15];return r[0]=a*A+o*v+l*Y+c*K,r[4]=a*R+o*w+l*se+c*he,r[8]=a*k+o*O+l*F+c*Ce,r[12]=a*J+o*H+l*le+c*ve,r[1]=h*A+u*v+d*Y+f*K,r[5]=h*R+u*w+d*se+f*he,r[9]=h*k+u*O+d*F+f*Ce,r[13]=h*J+u*H+d*le+f*ve,r[2]=g*A+x*v+m*Y+p*K,r[6]=g*R+x*w+m*se+p*he,r[10]=g*k+x*O+m*F+p*Ce,r[14]=g*J+x*H+m*le+p*ve,r[3]=b*A+_*v+y*Y+D*K,r[7]=b*R+_*w+y*se+D*he,r[11]=b*k+_*O+y*F+D*Ce,r[15]=b*J+_*H+y*le+D*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+x*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],b=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,_=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,y=h*x*c-g*u*c+g*o*f-a*x*f-h*o*p+a*u*p,D=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,A=t*b+n*_+s*y+r*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return e[0]=b*R,e[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*R,e[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*R,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*R,e[4]=_*R,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*R,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*R,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*R,e[8]=y*R,e[9]=(g*u*r-h*x*r-g*n*f+t*x*f+h*n*p-t*u*p)*R,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*p+t*o*p)*R,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*R,e[12]=D*R,e[13]=(h*x*s-g*u*s+g*n*d-t*x*d-h*n*m+t*u*m)*R,e[14]=(g*o*s-a*x*s-g*n*l+t*x*l+a*n*m-t*o*m)*R,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,b=l*c,_=l*h,y=l*u,D=n.x,A=n.y,R=n.z;return s[0]=(1-(x+p))*D,s[1]=(f+y)*D,s[2]=(g-_)*D,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(d+p))*A,s[6]=(m+b)*A,s[7]=0,s[8]=(g+_)*R,s[9]=(m-b)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=cr.set(s[0],s[1],s[2]).length(),a=cr.set(s[4],s[5],s[6]).length(),o=cr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],pi.copy(this);let c=1/r,h=1/a,u=1/o;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=h,pi.elements[5]*=h,pi.elements[6]*=h,pi.elements[8]*=u,pi.elements[9]*=u,pi.elements[10]*=u,t.setFromRotationMatrix(pi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Hi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(o===Hi)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Oo)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Hi){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,f=(n+s)*h,g,x;if(o===Hi)g=(a+r)*u,x=-2*u;else if(o===Oo)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},cr=new I,pi=new pt,I0=new I(0,0,0),L0=new I(1,1,1),os=new I,no=new I,Zn=new I,ef=new pt,tf=new vi,Ri=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ef.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ef,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tf.setFromEuler(this),this.setFromQuaternion(tf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ri.DEFAULT_ORDER="XYZ";var Ho=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},N0=0,nf=new I,hr=new vi,Ui=new pt,io=new I,aa=new I,D0=new I,U0=new vi,sf=new I(1,0,0),rf=new I(0,1,0),af=new I(0,0,1),of={type:"added"},k0={type:"removed"},ur={type:"childadded",child:null},oc={type:"childremoved",child:null},cn=class i extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Ri,n=new vi,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new At}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(sf,e)}rotateY(e){return this.rotateOnAxis(rf,e)}rotateZ(e){return this.rotateOnAxis(af,e)}translateOnAxis(e,t){return nf.copy(e).applyQuaternion(this.quaternion),this.position.add(nf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sf,e)}translateY(e){return this.translateOnAxis(rf,e)}translateZ(e){return this.translateOnAxis(af,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?io.copy(e):io.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(aa,io,this.up):Ui.lookAt(io,aa,this.up),this.quaternion.setFromRotationMatrix(Ui),s&&(Ui.extractRotation(s.matrixWorld),hr.setFromRotationMatrix(Ui),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(of),ur.child=e,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(k0),oc.child=e,this.dispatchEvent(oc),oc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(of),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,D0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,U0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};cn.DEFAULT_UP=new I(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mi=new I,ki=new I,lc=new I,Fi=new I,dr=new I,fr=new I,lf=new I,cc=new I,hc=new I,uc=new I,dc=new Wt,fc=new Wt,pc=new Wt,us=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mi.subVectors(e,t),s.cross(mi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mi.subVectors(s,t),ki.subVectors(n,t),lc.subVectors(e,t);let a=mi.dot(mi),o=mi.dot(ki),l=mi.dot(lc),c=ki.dot(ki),h=ki.dot(lc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fi.x),l.addScaledVector(a,Fi.y),l.addScaledVector(o,Fi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return dc.setScalar(0),fc.setScalar(0),pc.setScalar(0),dc.fromBufferAttribute(e,t),fc.fromBufferAttribute(e,n),pc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(dc,r.x),a.addScaledVector(fc,r.y),a.addScaledVector(pc,r.z),a}static isFrontFacing(e,t,n,s){return mi.subVectors(n,t),ki.subVectors(e,t),mi.cross(ki).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),mi.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;dr.subVectors(s,n),fr.subVectors(r,n),cc.subVectors(e,n);let l=dr.dot(cc),c=fr.dot(cc);if(l<=0&&c<=0)return t.copy(n);hc.subVectors(e,s);let h=dr.dot(hc),u=fr.dot(hc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(dr,a);uc.subVectors(e,r);let f=dr.dot(uc),g=fr.dot(uc);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(fr,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return lf.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(lf,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(dr,a).addScaledVector(fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},so={h:0,s:0,l:0};function mc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var et=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Vt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Vt.workingColorSpace){if(e=cu(e,1),t=xn(t,0,1),n=xn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=mc(a,r,e+1/3),this.g=mc(a,r,e),this.b=mc(a,r,e-1/3)}return Vt.toWorkingColorSpace(this,s),this}setStyle(e,t=gn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){let n=vp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}copyLinearToSRGB(e){return this.r=Ql(e.r),this.g=Ql(e.g),this.b=Ql(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return Vt.fromWorkingColorSpace(Nn.copy(this),e),Math.round(xn(Nn.r*255,0,255))*65536+Math.round(xn(Nn.g*255,0,255))*256+Math.round(xn(Nn.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vt.workingColorSpace){Vt.fromWorkingColorSpace(Nn.copy(this),t);let n=Nn.r,s=Nn.g,r=Nn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Vt.workingColorSpace){return Vt.fromWorkingColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=gn){Vt.fromWorkingColorSpace(Nn.copy(this),e);let t=Nn.r,n=Nn.g,s=Nn.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+t,ls.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ls),e.getHSL(so);let n=pa(ls.h,so.h,t),s=pa(ls.s,so.s,t),r=pa(ls.l,so.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nn=new et;et.NAMES=vp;var F0=0,Qn=class extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=Vi,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dc,this.blendDst=Uc,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Dc&&(n.blendSrc=this.blendSrc),this.blendDst!==Uc&&(n.blendDst=this.blendDst),this.blendEquation!==Bs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$d&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ft=class extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=rp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var mn=new I,ro=new De,Ct=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xh,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ro.fromBufferAttribute(this,t),ro.applyMatrix3(e),this.setXY(t,ro.x,ro.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),s=Yt(s,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xh&&(e.usage=this.usage),e}};var Vo=class extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Go=class extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var kt=class extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}},O0=0,si=new pt,gc=new cn,pr=new I,Jn=new Yn,oa=new Yn,wn=new I,$t=class i extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yp(e)?Go:Vo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new At().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return gc.lookAt(e),gc.updateMatrix(),this.applyMatrix4(gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];oa.setFromBufferAttribute(o),this.morphTargetsRelative?(wn.addVectors(Jn.min,oa.min),Jn.expandByPoint(wn),wn.addVectors(Jn.max,oa.max),Jn.expandByPoint(wn)):(Jn.expandByPoint(oa.min),Jn.expandByPoint(oa.max))}Jn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)wn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(wn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)wn.fromBufferAttribute(o,c),l&&(pr.fromBufferAttribute(e,c),wn.add(pr)),s=Math.max(s,n.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let k=0;k<n.count;k++)o[k]=new I,l[k]=new I;let c=new I,h=new I,u=new I,d=new De,f=new De,g=new De,x=new I,m=new I;function p(k,J,v){c.fromBufferAttribute(n,k),h.fromBufferAttribute(n,J),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,k),f.fromBufferAttribute(r,J),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(w),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(w),o[k].add(x),o[J].add(x),o[v].add(x),l[k].add(m),l[J].add(m),l[v].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let k=0,J=b.length;k<J;++k){let v=b[k],w=v.start,O=v.count;for(let H=w,Y=w+O;H<Y;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let _=new I,y=new I,D=new I,A=new I;function R(k){D.fromBufferAttribute(s,k),A.copy(D);let J=o[k];_.copy(J),_.sub(D.multiplyScalar(D.dot(J))).normalize(),y.crossVectors(A,J);let w=y.dot(l[k])<0?-1:1;a.setXYZW(k,_.x,_.y,_.z,w)}for(let k=0,J=b.length;k<J;++k){let v=b[k],w=v.start,O=v.count;for(let H=w,Y=w+O;H<Y;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wn.fromBufferAttribute(e,t),wn.normalize(),e.setXYZ(t,wn.x,wn.y,wn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ct(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},cf=new pt,Us=new Nr,ao=new jn,hf=new I,oo=new I,lo=new I,co=new I,xc=new I,ho=new I,uf=new I,uo=new I,Ee=class extends cn{constructor(e=new $t,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(xc.fromBufferAttribute(u,e),a?ho.addScaledVector(xc,h):ho.addScaledVector(xc.sub(t),h))}t.add(ho)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(r),Us.copy(e.ray).recast(e.near),!(ao.containsPoint(Us.origin)===!1&&(Us.intersectSphere(ao,hf)===null||Us.origin.distanceToSquared(hf)>(e.far-e.near)**2))&&(cf.copy(r).invert(),Us.copy(e.ray).applyMatrix4(cf),!(n.boundingBox!==null&&Us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Us)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,D=_;y<D;y+=3){let A=o.getX(y),R=o.getX(y+1),k=o.getX(y+2);s=fo(this,p,e,n,c,h,u,A,R,k),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let b=o.getX(m),_=o.getX(m+1),y=o.getX(m+2);s=fo(this,a,e,n,c,h,u,b,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,D=_;y<D;y+=3){let A=y,R=y+1,k=y+2;s=fo(this,p,e,n,c,h,u,A,R,k),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let b=m,_=m+1,y=m+2;s=fo(this,a,e,n,c,h,u,b,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function z0(i,e,t,n,s,r,a,o){let l;if(e.side===Xn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ai,o),l===null)return null;uo.copy(o),uo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(uo);return c<t.near||c>t.far?null:{distance:c,point:uo.clone(),object:i}}function fo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,oo),i.getVertexPosition(l,lo),i.getVertexPosition(c,co);let h=z0(i,e,t,n,oo,lo,co,uf);if(h){let u=new I;us.getBarycoord(uf,oo,lo,co,u),s&&(h.uv=us.getInterpolatedAttribute(s,o,l,c,u,new De)),r&&(h.uv1=us.getInterpolatedAttribute(r,o,l,c,u,new De)),a&&(h.normal=us.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new I,materialIndex:0};us.getNormal(oo,lo,co,d.normal),h.face=d,h.barycoord=u}return h}var Kt=class i extends $t{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(u,2));function g(x,m,p,b,_,y,D,A,R,k,J){let v=y/R,w=D/k,O=y/2,H=D/2,Y=A/2,se=R+1,F=k+1,le=0,K=0,he=new I;for(let Ce=0;Ce<F;Ce++){let ve=Ce*w-H;for(let yt=0;yt<se;yt++){let zt=yt*v-O;he[x]=zt*b,he[m]=ve*_,he[p]=Y,c.push(he.x,he.y,he.z),he[x]=0,he[m]=0,he[p]=A>0?1:-1,h.push(he.x,he.y,he.z),u.push(yt/R),u.push(1-Ce/k),le+=1}}for(let Ce=0;Ce<k;Ce++)for(let ve=0;ve<R;ve++){let yt=d+ve+se*Ce,zt=d+ve+se*(Ce+1),ie=d+(ve+1)+se*(Ce+1),pe=d+(ve+1)+se*Ce;l.push(yt,zt,pe),l.push(zt,ie,pe),K+=6}o.addGroup(f,K,J),f+=K,d+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Dr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function zn(i){let e={};for(let t=0;t<i.length;t++){let n=Dr(i[t]);for(let s in n)e[s]=n[s]}return e}function B0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function bp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Vt.workingColorSpace}var H0={clone:Dr,merge:zn},V0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ei=class extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V0,this.fragmentShader=G0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=B0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Wo=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},cs=new I,df=new De,ff=new De,dn=class extends Wo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,t){return this.getViewBounds(e,df,ff),t.subVectors(ff,df)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},mr=-90,gr=1,bh=class extends cn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(mr,gr,e,t);s.layers=this.layers,this.add(s);let r=new dn(mr,gr,e,t);r.layers=this.layers,this.add(r);let a=new dn(mr,gr,e,t);a.layers=this.layers,this.add(a);let o=new dn(mr,gr,e,t);o.layers=this.layers,this.add(o);let l=new dn(mr,gr,e,t);l.layers=this.layers,this.add(l);let c=new dn(mr,gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Hi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Xo=class extends Tn{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Tr,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mh=class extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Xo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Kt(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xn,blending:fs});r.uniforms.tEquirect.value=t;let a=new Ee(s,r),o=t.minFilter;return t.minFilter===Ti&&(t.minFilter=Gn),new bh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},_c=new I,W0=new I,X0=new At,gi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=_c.subVectors(n,t).cross(W0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(_c),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||X0.getNormalMatrix(e),s=this.coplanarPoint(_c).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ks=new jn,po=new I,ba=class{constructor(e=new gi,t=new gi,n=new gi,s=new gi,r=new gi,a=new gi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],b=s[13],_=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,m-f,y-p).normalize(),n[1].setComponents(l+r,d+c,m+f,y+p).normalize(),n[2].setComponents(l+a,d+h,m+g,y+b).normalize(),n[3].setComponents(l-a,d-h,m-g,y-b).normalize(),n[4].setComponents(l-o,d-u,m-x,y-_).normalize(),t===Hi)n[5].setComponents(l+o,d+u,m+x,y+_).normalize();else if(t===Oo)n[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(e){return ks.center.set(0,0,0),ks.radius=.7071067811865476,ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(po.x=s.normal.x>0?e.max.x:e.min.x,po.y=s.normal.y>0?e.max.y:e.min.y,po.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(po)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Mp(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Y0(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ci=class i extends $t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let b=p*d-a;for(let _=0;_<c;_++){let y=_*u-r;g.push(y,-b,0),x.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let _=b+c*p,y=b+c*(p+1),D=b+1+c*(p+1),A=b+1+c*p;f.push(_,y,A),f.push(y,D,A)}this.setIndex(f),this.setAttribute("position",new kt(g,3)),this.setAttribute("normal",new kt(x,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},$0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,q0=`#ifdef USE_ALPHAHASH
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
#endif`,K0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Z0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,j0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q0=`#ifdef USE_AOMAP
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
#endif`,eg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tg=`#ifdef USE_BATCHING
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
#endif`,ng=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ig=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ag=`#ifdef USE_IRIDESCENCE
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
#endif`,og=`#ifdef USE_BUMPMAP
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
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gg=`#define PI 3.141592653589793
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
} // validated`,xg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_g=`vec3 transformedNormal = objectNormal;
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
#endif`,yg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eg=`
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
}`,wg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ag=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Pg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ig=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ng=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dg=`#ifdef USE_GRADIENTMAP
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
}`,Ug=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Og=`uniform bool receiveShadow;
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
#endif`,zg=`#ifdef USE_ENVMAP
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
#endif`,Bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wg=`PhysicalMaterial material;
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
#endif`,Xg=`struct PhysicalMaterial {
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
}`,Yg=`
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
#endif`,$g=`#if defined( RE_IndirectDiffuse )
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
#endif`,qg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,n1=`#if defined( USE_POINTS_UV )
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
#endif`,i1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l1=`#ifdef USE_MORPHTARGETS
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
#endif`,c1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,u1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,d1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m1=`#ifdef USE_NORMALMAP
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
#endif`,g1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,I1=`float getShadowMask() {
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
}`,L1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N1=`#ifdef USE_SKINNING
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
#endif`,D1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U1=`#ifdef USE_SKINNING
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
#endif`,k1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B1=`#ifdef USE_TRANSMISSION
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
#endif`,H1=`#ifdef USE_TRANSMISSION
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
#endif`,V1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Y1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$1=`uniform sampler2D t2D;
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
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j1=`#include <common>
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
}`,Q1=`#if DEPTH_PACKING == 3200
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
}`,ex=`#define DISTANCE
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
}`,tx=`#define DISTANCE
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ix=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sx=`uniform float scale;
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
}`,rx=`uniform vec3 diffuse;
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
}`,ax=`#include <common>
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
}`,ox=`uniform vec3 diffuse;
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
}`,lx=`#define LAMBERT
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
}`,cx=`#define LAMBERT
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
}`,hx=`#define MATCAP
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
}`,ux=`#define MATCAP
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
}`,dx=`#define NORMAL
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
}`,fx=`#define NORMAL
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
}`,px=`#define PHONG
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
}`,mx=`#define PHONG
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
}`,gx=`#define STANDARD
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
}`,xx=`#define STANDARD
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
}`,_x=`#define TOON
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
}`,yx=`#define TOON
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
}`,vx=`uniform float size;
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
}`,bx=`uniform vec3 diffuse;
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
}`,Mx=`#include <common>
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
}`,Sx=`uniform vec3 color;
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
}`,Ex=`uniform float rotation;
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
}`,wx=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:$0,alphahash_pars_fragment:q0,alphamap_fragment:K0,alphamap_pars_fragment:Z0,alphatest_fragment:J0,alphatest_pars_fragment:j0,aomap_fragment:Q0,aomap_pars_fragment:eg,batching_pars_vertex:tg,batching_vertex:ng,begin_vertex:ig,beginnormal_vertex:sg,bsdfs:rg,iridescence_fragment:ag,bumpmap_pars_fragment:og,clipping_planes_fragment:lg,clipping_planes_pars_fragment:cg,clipping_planes_pars_vertex:hg,clipping_planes_vertex:ug,color_fragment:dg,color_pars_fragment:fg,color_pars_vertex:pg,color_vertex:mg,common:gg,cube_uv_reflection_fragment:xg,defaultnormal_vertex:_g,displacementmap_pars_vertex:yg,displacementmap_vertex:vg,emissivemap_fragment:bg,emissivemap_pars_fragment:Mg,colorspace_fragment:Sg,colorspace_pars_fragment:Eg,envmap_fragment:wg,envmap_common_pars_fragment:Tg,envmap_pars_fragment:Ag,envmap_pars_vertex:Rg,envmap_physical_pars_fragment:zg,envmap_vertex:Cg,fog_vertex:Pg,fog_pars_vertex:Ig,fog_fragment:Lg,fog_pars_fragment:Ng,gradientmap_pars_fragment:Dg,lightmap_pars_fragment:Ug,lights_lambert_fragment:kg,lights_lambert_pars_fragment:Fg,lights_pars_begin:Og,lights_toon_fragment:Bg,lights_toon_pars_fragment:Hg,lights_phong_fragment:Vg,lights_phong_pars_fragment:Gg,lights_physical_fragment:Wg,lights_physical_pars_fragment:Xg,lights_fragment_begin:Yg,lights_fragment_maps:$g,lights_fragment_end:qg,logdepthbuf_fragment:Kg,logdepthbuf_pars_fragment:Zg,logdepthbuf_pars_vertex:Jg,logdepthbuf_vertex:jg,map_fragment:Qg,map_pars_fragment:e1,map_particle_fragment:t1,map_particle_pars_fragment:n1,metalnessmap_fragment:i1,metalnessmap_pars_fragment:s1,morphinstance_vertex:r1,morphcolor_vertex:a1,morphnormal_vertex:o1,morphtarget_pars_vertex:l1,morphtarget_vertex:c1,normal_fragment_begin:h1,normal_fragment_maps:u1,normal_pars_fragment:d1,normal_pars_vertex:f1,normal_vertex:p1,normalmap_pars_fragment:m1,clearcoat_normal_fragment_begin:g1,clearcoat_normal_fragment_maps:x1,clearcoat_pars_fragment:_1,iridescence_pars_fragment:y1,opaque_fragment:v1,packing:b1,premultiplied_alpha_fragment:M1,project_vertex:S1,dithering_fragment:E1,dithering_pars_fragment:w1,roughnessmap_fragment:T1,roughnessmap_pars_fragment:A1,shadowmap_pars_fragment:R1,shadowmap_pars_vertex:C1,shadowmap_vertex:P1,shadowmask_pars_fragment:I1,skinbase_vertex:L1,skinning_pars_vertex:N1,skinning_vertex:D1,skinnormal_vertex:U1,specularmap_fragment:k1,specularmap_pars_fragment:F1,tonemapping_fragment:O1,tonemapping_pars_fragment:z1,transmission_fragment:B1,transmission_pars_fragment:H1,uv_pars_fragment:V1,uv_pars_vertex:G1,uv_vertex:W1,worldpos_vertex:X1,background_vert:Y1,background_frag:$1,backgroundCube_vert:q1,backgroundCube_frag:K1,cube_vert:Z1,cube_frag:J1,depth_vert:j1,depth_frag:Q1,distanceRGBA_vert:ex,distanceRGBA_frag:tx,equirect_vert:nx,equirect_frag:ix,linedashed_vert:sx,linedashed_frag:rx,meshbasic_vert:ax,meshbasic_frag:ox,meshlambert_vert:lx,meshlambert_frag:cx,meshmatcap_vert:hx,meshmatcap_frag:ux,meshnormal_vert:dx,meshnormal_frag:fx,meshphong_vert:px,meshphong_frag:mx,meshphysical_vert:gx,meshphysical_frag:xx,meshtoon_vert:_x,meshtoon_frag:yx,points_vert:vx,points_frag:bx,shadow_vert:Mx,shadow_frag:Sx,sprite_vert:Ex,sprite_frag:wx},Pe={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},envMapRotation:{value:new At},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},wi={basic:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new et(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:zn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:zn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new et(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:zn([Pe.points,Pe.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:zn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:zn([Pe.common,Pe.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:zn([Pe.sprite,Pe.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new At}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:zn([Pe.common,Pe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:zn([Pe.lights,Pe.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};wi.physical={uniforms:zn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};var mo={r:0,b:0,g:0},Fs=new Ri,Tx=new pt;function Ax(i,e,t,n,s,r,a){let o=new et(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?t:e).get(_)),_}function x(b){let _=!1,y=g(b);y===null?p(o,l):y&&y.isColor&&(p(y,1),_=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,_){let y=g(_);y&&(y.isCubeTexture||y.mapping===gl)?(h===void 0&&(h=new Ee(new Kt(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:Dr(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Fs.copy(_.backgroundRotation),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Tx.makeRotationFromEuler(Fs)),h.material.toneMapped=Vt.getTransfer(y.colorSpace)!==rn,(u!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ee(new Ci(2,2),new ei({name:"BackgroundMaterial",uniforms:Dr(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Vt.getTransfer(y.colorSpace)!==rn,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,_){b.getRGB(mo,bp(i)),n.buffers.color.setClear(mo.r,mo.g,mo.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(b,_=1){o.set(b),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:x,addToRenderList:m}}function Rx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(v,w,O,H,Y){let se=!1,F=u(H,O,w);r!==F&&(r=F,c(r.object)),se=f(v,H,O,Y),se&&g(v,H,O,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(se||a)&&(a=!1,y(v,w,O,H),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,w,O){let H=O.wireframe===!0,Y=n[v.id];Y===void 0&&(Y={},n[v.id]=Y);let se=Y[w.id];se===void 0&&(se={},Y[w.id]=se);let F=se[H];return F===void 0&&(F=d(l()),se[H]=F),F}function d(v){let w=[],O=[],H=[];for(let Y=0;Y<t;Y++)w[Y]=0,O[Y]=0,H[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:H,object:v,attributes:{},index:null}}function f(v,w,O,H){let Y=r.attributes,se=w.attributes,F=0,le=O.getAttributes();for(let K in le)if(le[K].location>=0){let Ce=Y[K],ve=se[K];if(ve===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(ve=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(ve=v.instanceColor)),Ce===void 0||Ce.attribute!==ve||ve&&Ce.data!==ve.data)return!0;F++}return r.attributesNum!==F||r.index!==H}function g(v,w,O,H){let Y={},se=w.attributes,F=0,le=O.getAttributes();for(let K in le)if(le[K].location>=0){let Ce=se[K];Ce===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(Ce=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(Ce=v.instanceColor));let ve={};ve.attribute=Ce,Ce&&Ce.data&&(ve.data=Ce.data),Y[K]=ve,F++}r.attributes=Y,r.attributesNum=F,r.index=H}function x(){let v=r.newAttributes;for(let w=0,O=v.length;w<O;w++)v[w]=0}function m(v){p(v,0)}function p(v,w){let O=r.newAttributes,H=r.enabledAttributes,Y=r.attributeDivisors;O[v]=1,H[v]===0&&(i.enableVertexAttribArray(v),H[v]=1),Y[v]!==w&&(i.vertexAttribDivisor(v,w),Y[v]=w)}function b(){let v=r.newAttributes,w=r.enabledAttributes;for(let O=0,H=w.length;O<H;O++)w[O]!==v[O]&&(i.disableVertexAttribArray(O),w[O]=0)}function _(v,w,O,H,Y,se,F){F===!0?i.vertexAttribIPointer(v,w,O,Y,se):i.vertexAttribPointer(v,w,O,H,Y,se)}function y(v,w,O,H){x();let Y=H.attributes,se=O.getAttributes(),F=w.defaultAttributeValues;for(let le in se){let K=se[le];if(K.location>=0){let he=Y[le];if(he===void 0&&(le==="instanceMatrix"&&v.instanceMatrix&&(he=v.instanceMatrix),le==="instanceColor"&&v.instanceColor&&(he=v.instanceColor)),he!==void 0){let Ce=he.normalized,ve=he.itemSize,yt=e.get(he);if(yt===void 0)continue;let zt=yt.buffer,ie=yt.type,pe=yt.bytesPerElement,Oe=ie===i.INT||ie===i.UNSIGNED_INT||he.gpuType===tu;if(he.isInterleavedBufferAttribute){let Ue=he.data,ht=Ue.stride,st=he.offset;if(Ue.isInstancedInterleavedBuffer){for(let vt=0;vt<K.locationSize;vt++)p(K.location+vt,Ue.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let vt=0;vt<K.locationSize;vt++)m(K.location+vt);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let vt=0;vt<K.locationSize;vt++)_(K.location+vt,ve/K.locationSize,ie,Ce,ht*pe,(st+ve/K.locationSize*vt)*pe,Oe)}else{if(he.isInstancedBufferAttribute){for(let Ue=0;Ue<K.locationSize;Ue++)p(K.location+Ue,he.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ue=0;Ue<K.locationSize;Ue++)m(K.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let Ue=0;Ue<K.locationSize;Ue++)_(K.location+Ue,ve/K.locationSize,ie,Ce,ve*pe,ve/K.locationSize*Ue*pe,Oe)}}else if(F!==void 0){let Ce=F[le];if(Ce!==void 0)switch(Ce.length){case 2:i.vertexAttrib2fv(K.location,Ce);break;case 3:i.vertexAttrib3fv(K.location,Ce);break;case 4:i.vertexAttrib4fv(K.location,Ce);break;default:i.vertexAttrib1fv(K.location,Ce)}}}}b()}function D(){k();for(let v in n){let w=n[v];for(let O in w){let H=w[O];for(let Y in H)h(H[Y].object),delete H[Y];delete w[O]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;let w=n[v.id];for(let O in w){let H=w[O];for(let Y in H)h(H[Y].object),delete H[Y];delete w[O]}delete n[v.id]}function R(v){for(let w in n){let O=n[w];if(O[v.id]===void 0)continue;let H=O[v.id];for(let Y in H)h(H[Y].object),delete H[Y];delete O[v.id]}}function k(){J(),a=!0,r!==s&&(r=s,c(r.object))}function J(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:k,resetDefaultState:J,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function Cx(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x];for(let x=0;x<d.length;x++)t.update(g,n,d[x])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Px(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Wn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let k=R===Ia&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Gi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==_i&&!k)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){let R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:D,maxSamples:A}}function Ix(i){let e=this,t=null,n=0,s=!1,r=!1,a=new gi,o=new At,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,_=b*4,y=p.clippingState||null;l.value=y,y=h(g,d,_,f);for(let D=0;D!==_;++D)y[D]=t[D];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=f;_!==x;++_,y+=4)a.copy(u[_]).applyMatrix4(b,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Lx(i){let e=new WeakMap;function t(a,o){return o===Gc?a.mapping=Tr:o===Wc&&(a.mapping=Ar),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Gc||o===Wc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Mh(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ur=class extends Wo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vr=4,pf=[.125,.215,.35,.446,.526,.582],Hs=20,yc=new Ur,mf=new et,vc=null,bc=0,Mc=0,Sc=!1,zs=(1+Math.sqrt(5))/2,xr=1/zs,gf=[new I(-zs,xr,0),new I(zs,xr,0),new I(-xr,0,zs),new I(xr,0,zs),new I(0,zs,-xr),new I(0,zs,xr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Yo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){vc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vc,bc,Mc),this._renderer.xr.enabled=Sc,e.scissorTest=!1,go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Tr||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Ia,format:Wn,colorSpace:An,depthBuffer:!1},s=xf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nx(r)),this._blurMaterial=Dx(r,e,t)}return s}_compileMaterial(e){let t=new Ee(this._lodPlanes[0],e);this._renderer.compile(t,yc)}_sceneToCubeUV(e,t,n,s){let o=new dn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(mf),h.toneMapping=ps,h.autoClear=!1;let f=new Ft({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),g=new Ee(new Kt,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(mf),x=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let _=this._cubeSize;go(s,b*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Tr||e.mapping===Ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_f());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ee(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;go(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,yc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=gf[(s-r-1)%gf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ee(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Hs-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Hs;m>Hs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hs}`);let p=[],b=0;for(let R=0;R<Hs;++R){let k=R/x,J=Math.exp(-k*k/2);p.push(J),R===0?b+=J:R<m&&(b+=2*J)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let y=this._sizeLods[s],D=3*y*(s>_-vr?s-_+vr:0),A=4*(this._cubeSize-y);go(t,D,A,3*y,2*y),l.setRenderTarget(t),l.render(u,yc)}};function Nx(i){let e=[],t=[],n=[],s=i,r=i-vr+1+pf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-vr?l=pf[a-i+vr-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,b=new Float32Array(x*g*f),_=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let A=0;A<f;A++){let R=A%3*2/3-1,k=A>2?0:-1,J=[R,k,0,R+2/3,k,0,R+2/3,k+1,0,R,k,0,R+2/3,k+1,0,R,k+1,0];b.set(J,x*g*A),_.set(d,m*g*A);let v=[A,A,A,A,A,A];y.set(v,p*g*A)}let D=new $t;D.setAttribute("position",new Ct(b,x)),D.setAttribute("uv",new Ct(_,m)),D.setAttribute("faceIndex",new Ct(y,p)),e.push(D),s>vr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xf(i,e,t){let n=new Wi(i,e,t);return n.texture.mapping=gl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function go(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Dx(i,e,t){let n=new Float32Array(Hs),s=new I(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hu(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function _f(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function yf(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function hu(){return`

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
	`}function Ux(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Gc||l===Wc,h=l===Tr||l===Ar;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Yo(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Yo(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function kx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Do("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Fx(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let b=f.array;x=f.version;for(let _=0,y=b.length;_<y;_+=3){let D=b[_+0],A=b[_+1],R=b[_+2];d.push(D,A,A,R,R,D)}}else if(g!==void 0){let b=g.array;x=g.version;for(let _=0,y=b.length/3-1;_<y;_+=3){let D=_+0,A=_+1,R=_+2;d.push(D,A,A,R,R,D)}}else return;let m=new(yp(d)?Go:Vo)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Ox(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b];for(let b=0;b<x.length;b++)t.update(p,n,x[b])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function zx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Bx(i,e,t){let n=new WeakMap,s=new Wt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let J=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",J)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let y=o.attributes.position.count*_,D=1;y>e.maxTextureSize&&(D=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*D*4*u),R=new Bo(A,y,D,u);R.type=_i,R.needsUpdate=!0;let k=_*4;for(let v=0;v<u;v++){let w=m[v],O=p[v],H=b[v],Y=y*D*4*v;for(let se=0;se<w.count;se++){let F=se*k;f===!0&&(s.fromBufferAttribute(w,se),A[Y+F+0]=s.x,A[Y+F+1]=s.y,A[Y+F+2]=s.z,A[Y+F+3]=0),g===!0&&(s.fromBufferAttribute(O,se),A[Y+F+4]=s.x,A[Y+F+5]=s.y,A[Y+F+6]=s.z,A[Y+F+7]=0),x===!0&&(s.fromBufferAttribute(H,se),A[Y+F+8]=s.x,A[Y+F+9]=s.y,A[Y+F+10]=s.z,A[Y+F+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new De(y,D)},n.set(o,d),o.addEventListener("dispose",J)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Hx(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var $o=class extends Tn{constructor(e,t,n,s,r,a,o,l,c,h=br){if(h!==br&&h!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===br&&(n=Gs),n===void 0&&h===Cr&&(n=Rr),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Dn,this.minFilter=l!==void 0?l:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Sp=new Tn,vf=new $o(1,1),Ep=new Bo,wp=new vh,Tp=new Xo,bf=[],Mf=[],Sf=new Float32Array(16),Ef=new Float32Array(9),wf=new Float32Array(4);function Wr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=bf[s];if(r===void 0&&(r=new Float32Array(s),bf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function _n(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vl(i,e){let t=Mf[e];t===void 0&&(t=new Int32Array(e),Mf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;i.uniform2fv(this.addr,e),yn(t,e)}}function Wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;i.uniform3fv(this.addr,e),yn(t,e)}}function Xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;i.uniform4fv(this.addr,e),yn(t,e)}}function Yx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,n))return;wf.set(n),i.uniformMatrix2fv(this.addr,!1,wf),yn(t,n)}}function $x(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,n))return;Ef.set(n),i.uniformMatrix3fv(this.addr,!1,Ef),yn(t,n)}}function qx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,n))return;Sf.set(n),i.uniformMatrix4fv(this.addr,!1,Sf),yn(t,n)}}function Kx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;i.uniform2iv(this.addr,e),yn(t,e)}}function Jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;i.uniform3iv(this.addr,e),yn(t,e)}}function jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;i.uniform4iv(this.addr,e),yn(t,e)}}function Qx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function e_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;i.uniform2uiv(this.addr,e),yn(t,e)}}function t_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;i.uniform3uiv(this.addr,e),yn(t,e)}}function n_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;i.uniform4uiv(this.addr,e),yn(t,e)}}function i_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vf.compareFunction=_p,r=vf):r=Sp,t.setTexture2D(e||r,s)}function s_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wp,s)}function r_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Tp,s)}function a_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ep,s)}function o_(i){switch(i){case 5126:return Vx;case 35664:return Gx;case 35665:return Wx;case 35666:return Xx;case 35674:return Yx;case 35675:return $x;case 35676:return qx;case 5124:case 35670:return Kx;case 35667:case 35671:return Zx;case 35668:case 35672:return Jx;case 35669:case 35673:return jx;case 5125:return Qx;case 36294:return e_;case 36295:return t_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return a_}}function l_(i,e){i.uniform1fv(this.addr,e)}function c_(i,e){let t=Wr(e,this.size,2);i.uniform2fv(this.addr,t)}function h_(i,e){let t=Wr(e,this.size,3);i.uniform3fv(this.addr,t)}function u_(i,e){let t=Wr(e,this.size,4);i.uniform4fv(this.addr,t)}function d_(i,e){let t=Wr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function f_(i,e){let t=Wr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function p_(i,e){let t=Wr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function m_(i,e){i.uniform1iv(this.addr,e)}function g_(i,e){i.uniform2iv(this.addr,e)}function x_(i,e){i.uniform3iv(this.addr,e)}function __(i,e){i.uniform4iv(this.addr,e)}function y_(i,e){i.uniform1uiv(this.addr,e)}function v_(i,e){i.uniform2uiv(this.addr,e)}function b_(i,e){i.uniform3uiv(this.addr,e)}function M_(i,e){i.uniform4uiv(this.addr,e)}function S_(i,e,t){let n=this.cache,s=e.length,r=vl(t,s);_n(n,r)||(i.uniform1iv(this.addr,r),yn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Sp,r[a])}function E_(i,e,t){let n=this.cache,s=e.length,r=vl(t,s);_n(n,r)||(i.uniform1iv(this.addr,r),yn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||wp,r[a])}function w_(i,e,t){let n=this.cache,s=e.length,r=vl(t,s);_n(n,r)||(i.uniform1iv(this.addr,r),yn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Tp,r[a])}function T_(i,e,t){let n=this.cache,s=e.length,r=vl(t,s);_n(n,r)||(i.uniform1iv(this.addr,r),yn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ep,r[a])}function A_(i){switch(i){case 5126:return l_;case 35664:return c_;case 35665:return h_;case 35666:return u_;case 35674:return d_;case 35675:return f_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return x_;case 35669:case 35673:return __;case 5125:return y_;case 36294:return v_;case 36295:return b_;case 36296:return M_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return T_}}var Sh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=o_(t.type)}},Eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A_(t.type)}},wh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ec=/(\w+)(\])?(\[|\.)?/g;function Tf(i,e){i.seq.push(e),i.map[e.id]=e}function R_(i,e,t){let n=i.name,s=n.length;for(Ec.lastIndex=0;;){let r=Ec.exec(n),a=Ec.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Tf(t,c===void 0?new Sh(o,i,e):new Eh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new wh(o),Tf(t,u)),t=u}}}var Er=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);R_(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Af(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var C_=37297,P_=0;function I_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function L_(i){let e=Vt.getPrimaries(Vt.workingColorSpace),t=Vt.getPrimaries(i),n;switch(e===t?n="":e===Fo&&t===ko?n="LinearDisplayP3ToLinearSRGB":e===ko&&t===Fo&&(n="LinearSRGBToLinearDisplayP3"),i){case An:case _l:return[n,"LinearTransferOETF"];case gn:case lu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Rf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+I_(i.getShaderSource(e),a)}else return s}function N_(i,e){let t=L_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function D_(i,e){let t;switch(e){case Vm:t="Linear";break;case Gm:t="Reinhard";break;case Wm:t="Cineon";break;case Xm:t="ACESFilmic";break;case $m:t="AgX";break;case qm:t="Neutral";break;case Ym:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var xo=new I;function U_(){Vt.getLuminanceCoefficients(xo);let i=xo.x.toFixed(4),e=xo.y.toFixed(4),t=xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function F_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function O_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function da(i){return i!==""}function Cf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Th(i){return i.replace(z_,H_)}var B_=new Map;function H_(i,e){let t=Tt[e];if(t===void 0){let n=B_.get(e);if(n!==void 0)t=Tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Th(t)}var V_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function If(i){return i.replace(V_,G_)}function G_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function W_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===bm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function X_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Tr:case Ar:e="ENVMAP_TYPE_CUBE";break;case gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Y_(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ar&&(e="ENVMAP_MODE_REFRACTION"),e}function $_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case rp:e="ENVMAP_BLENDING_MULTIPLY";break;case Bm:e="ENVMAP_BLENDING_MIX";break;case Hm:e="ENVMAP_BLENDING_ADD";break}return e}function q_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function K_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=W_(t),c=X_(t),h=Y_(t),u=$_(t),d=q_(t),f=k_(t),g=F_(r),x=s.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(da).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(da).join(`
`),p.length>0&&(p+=`
`)):(m=[Lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),p=[Lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ps?"#define TONE_MAPPING":"",t.toneMapping!==ps?Tt.tonemapping_pars_fragment:"",t.toneMapping!==ps?D_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,N_("linearToOutputTexel",t.outputColorSpace),U_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(da).join(`
`)),a=Th(a),a=Cf(a,t),a=Pf(a,t),o=Th(o),o=Cf(o,t),o=Pf(o,t),a=If(a),o=If(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===qd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=b+m+a,y=b+p+o,D=Af(s,s.VERTEX_SHADER,_),A=Af(s,s.FRAGMENT_SHADER,y);s.attachShader(x,D),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(w){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(x).trim(),H=s.getShaderInfoLog(D).trim(),Y=s.getShaderInfoLog(A).trim(),se=!0,F=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,D,A);else{let le=Rf(s,D,"vertex"),K=Rf(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+O+`
`+le+`
`+K)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(H===""||Y==="")&&(F=!1);F&&(w.diagnostics={runnable:se,programLog:O,vertexShader:{log:H,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(D),s.deleteShader(A),k=new Er(s,x),J=O_(s,x)}let k;this.getUniforms=function(){return k===void 0&&R(this),k};let J;this.getAttributes=function(){return J===void 0&&R(this),J};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,C_)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=P_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=A,this}var Z_=0,Ah=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rh(e),t.set(e,n)),n}},Rh=class{constructor(e){this.id=Z_++,this.code=e,this.usedTimes=0}};function J_(i,e,t,n,s,r,a){let o=new Ho,l=new Ah,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,w,O,H,Y){let se=H.fog,F=Y.geometry,le=v.isMeshStandardMaterial?H.environment:null,K=(v.isMeshStandardMaterial?t:e).get(v.envMap||le),he=K&&K.mapping===gl?K.image.height:null,Ce=x[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let ve=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,yt=ve!==void 0?ve.length:0,zt=0;F.morphAttributes.position!==void 0&&(zt=1),F.morphAttributes.normal!==void 0&&(zt=2),F.morphAttributes.color!==void 0&&(zt=3);let ie,pe,Oe,Ue;if(Ce){let an=wi[Ce];ie=an.vertexShader,pe=an.fragmentShader}else ie=v.vertexShader,pe=v.fragmentShader,l.update(v),Oe=l.getVertexShaderID(v),Ue=l.getFragmentShaderID(v);let ht=i.getRenderTarget(),st=Y.isInstancedMesh===!0,vt=Y.isBatchedMesh===!0,Dt=!!v.map,ut=!!v.matcap,N=!!K,hn=!!v.aoMap,bt=!!v.lightMap,Je=!!v.bumpMap,rt=!!v.normalMap,gt=!!v.displacementMap,xe=!!v.emissiveMap,P=!!v.metalnessMap,E=!!v.roughnessMap,W=v.anisotropy>0,$=v.clearcoat>0,ce=v.dispersion>0,re=v.iridescence>0,Ne=v.sheen>0,me=v.transmission>0,Ie=W&&!!v.anisotropyMap,wt=$&&!!v.clearcoatMap,de=$&&!!v.clearcoatNormalMap,we=$&&!!v.clearcoatRoughnessMap,Ke=re&&!!v.iridescenceMap,qe=re&&!!v.iridescenceThicknessMap,Te=Ne&&!!v.sheenColorMap,St=Ne&&!!v.sheenRoughnessMap,Ye=!!v.specularMap,Gt=!!v.specularColorMap,z=!!v.specularIntensityMap,Se=me&&!!v.transmissionMap,ee=me&&!!v.thicknessMap,ae=!!v.gradientMap,L=!!v.alphaMap,G=v.alphaTest>0,He=!!v.alphaHash,Nt=!!v.extensions,Rt=ps;v.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Rt=i.toneMapping);let nt={shaderID:Ce,shaderType:v.type,shaderName:v.name,vertexShader:ie,fragmentShader:pe,defines:v.defines,customVertexShaderID:Oe,customFragmentShaderID:Ue,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:vt,batchingColor:vt&&Y._colorsTexture!==null,instancing:st,instancingColor:st&&Y.instanceColor!==null,instancingMorph:st&&Y.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:An,alphaToCoverage:!!v.alphaToCoverage,map:Dt,matcap:ut,envMap:N,envMapMode:N&&K.mapping,envMapCubeUVHeight:he,aoMap:hn,lightMap:bt,bumpMap:Je,normalMap:rt,displacementMap:f&&gt,emissiveMap:xe,normalMapObjectSpace:rt&&v.normalMapType===Qm,normalMapTangentSpace:rt&&v.normalMapType===xp,metalnessMap:P,roughnessMap:E,anisotropy:W,anisotropyMap:Ie,clearcoat:$,clearcoatMap:wt,clearcoatNormalMap:de,clearcoatRoughnessMap:we,dispersion:ce,iridescence:re,iridescenceMap:Ke,iridescenceThicknessMap:qe,sheen:Ne,sheenColorMap:Te,sheenRoughnessMap:St,specularMap:Ye,specularColorMap:Gt,specularIntensityMap:z,transmission:me,transmissionMap:Se,thicknessMap:ee,gradientMap:ae,opaque:v.transparent===!1&&v.blending===Vi&&v.alphaToCoverage===!1,alphaMap:L,alphaTest:G,alphaHash:He,combine:v.combine,mapUv:Dt&&m(v.map.channel),aoMapUv:hn&&m(v.aoMap.channel),lightMapUv:bt&&m(v.lightMap.channel),bumpMapUv:Je&&m(v.bumpMap.channel),normalMapUv:rt&&m(v.normalMap.channel),displacementMapUv:gt&&m(v.displacementMap.channel),emissiveMapUv:xe&&m(v.emissiveMap.channel),metalnessMapUv:P&&m(v.metalnessMap.channel),roughnessMapUv:E&&m(v.roughnessMap.channel),anisotropyMapUv:Ie&&m(v.anisotropyMap.channel),clearcoatMapUv:wt&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:de&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:St&&m(v.sheenRoughnessMap.channel),specularMapUv:Ye&&m(v.specularMap.channel),specularColorMapUv:Gt&&m(v.specularColorMap.channel),specularIntensityMapUv:z&&m(v.specularIntensityMap.channel),transmissionMapUv:Se&&m(v.transmissionMap.channel),thicknessMapUv:ee&&m(v.thicknessMap.channel),alphaMapUv:L&&m(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(rt||W),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!F.attributes.uv&&(Dt||L),fog:!!se,useFog:v.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:Y.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:zt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Rt,decodeVideoTexture:Dt&&v.map.isVideoTexture===!0&&Vt.getTransfer(v.map.colorSpace)===rn,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===on,flipSided:v.side===Xn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Nt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&v.extensions.multiDraw===!0||vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function b(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let O in v.defines)w.push(O),w.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(_(w,v),y(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function _(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function y(v,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),v.push(o.mask)}function D(v){let w=x[v.type],O;if(w){let H=wi[w];O=H0.clone(H.uniforms)}else O=v.uniforms;return O}function A(v,w){let O;for(let H=0,Y=h.length;H<Y;H++){let se=h[H];if(se.cacheKey===w){O=se,++O.usedTimes;break}}return O===void 0&&(O=new K_(i,w,v,r),h.push(O)),O}function R(v){if(--v.usedTimes===0){let w=h.indexOf(v);h[w]=h[h.length-1],h.pop(),v.destroy()}}function k(v){l.remove(v)}function J(){l.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:D,acquireProgram:A,releaseProgram:R,releaseShaderCache:k,programs:h,dispose:J}}function j_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Q_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Nf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Df(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,g,x,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Q_),n.length>1&&n.sort(d||Nf),s.length>1&&s.sort(d||Nf)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function ey(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Df,i.set(n,[a])):s>=r.length?(a=new Df,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ty(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new et};break;case"SpotLight":t={position:new I,direction:new I,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function ny(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var iy=0;function sy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ry(i){let e=new ty,t=ny(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new pt,a=new pt;function o(c){let h=0,u=0,d=0;for(let J=0;J<9;J++)n.probe[J].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,b=0,_=0,y=0,D=0,A=0,R=0;c.sort(sy);for(let J=0,v=c.length;J<v;J++){let w=c[J],O=w.color,H=w.intensity,Y=w.distance,se=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=O.r*H,u+=O.g*H,d+=O.b*H;else if(w.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(w.sh.coefficients[F],H);R++}else if(w.isDirectionalLight){let F=e.get(w);if(F.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let le=w.shadow,K=t.get(w);K.shadowIntensity=le.intensity,K.shadowBias=le.bias,K.shadowNormalBias=le.normalBias,K.shadowRadius=le.radius,K.shadowMapSize=le.mapSize,n.directionalShadow[f]=K,n.directionalShadowMap[f]=se,n.directionalShadowMatrix[f]=w.shadow.matrix,b++}n.directional[f]=F,f++}else if(w.isSpotLight){let F=e.get(w);F.position.setFromMatrixPosition(w.matrixWorld),F.color.copy(O).multiplyScalar(H),F.distance=Y,F.coneCos=Math.cos(w.angle),F.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),F.decay=w.decay,n.spot[x]=F;let le=w.shadow;if(w.map&&(n.spotLightMap[D]=w.map,D++,le.updateMatrices(w),w.castShadow&&A++),n.spotLightMatrix[x]=le.matrix,w.castShadow){let K=t.get(w);K.shadowIntensity=le.intensity,K.shadowBias=le.bias,K.shadowNormalBias=le.normalBias,K.shadowRadius=le.radius,K.shadowMapSize=le.mapSize,n.spotShadow[x]=K,n.spotShadowMap[x]=se,y++}x++}else if(w.isRectAreaLight){let F=e.get(w);F.color.copy(O).multiplyScalar(H),F.halfWidth.set(w.width*.5,0,0),F.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=F,m++}else if(w.isPointLight){let F=e.get(w);if(F.color.copy(w.color).multiplyScalar(w.intensity),F.distance=w.distance,F.decay=w.decay,w.castShadow){let le=w.shadow,K=t.get(w);K.shadowIntensity=le.intensity,K.shadowBias=le.bias,K.shadowNormalBias=le.normalBias,K.shadowRadius=le.radius,K.shadowMapSize=le.mapSize,K.shadowCameraNear=le.camera.near,K.shadowCameraFar=le.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=se,n.pointShadowMatrix[g]=w.shadow.matrix,_++}n.point[g]=F,g++}else if(w.isHemisphereLight){let F=e.get(w);F.skyColor.copy(w.color).multiplyScalar(H),F.groundColor.copy(w.groundColor).multiplyScalar(H),n.hemi[p]=F,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let k=n.hash;(k.directionalLength!==f||k.pointLength!==g||k.spotLength!==x||k.rectAreaLength!==m||k.hemiLength!==p||k.numDirectionalShadows!==b||k.numPointShadows!==_||k.numSpotShadows!==y||k.numSpotMaps!==D||k.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+D-A,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,k.directionalLength=f,k.pointLength=g,k.spotLength=x,k.rectAreaLength=m,k.hemiLength=p,k.numDirectionalShadows=b,k.numPointShadows=_,k.numSpotShadows=y,k.numSpotMaps=D,k.numLightProbes=R,n.version=iy++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let _=c[p];if(_.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(_.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Uf(i){let e=new ry(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ay(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Uf(i),e.set(s,[o])):r>=a.length?(o=new Uf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ch=class extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ph=class extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},oy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ly=`uniform sampler2D shadow_pass;
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
}`;function cy(i,e,t){let n=new ba,s=new De,r=new De,a=new Wt,o=new Ch({depthPacking:jm}),l=new Ph,c={},h=t.maxTextureSize,u={[Ai]:Xn,[Xn]:Ai,[on]:on},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:oy,fragmentShader:ly}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new $t;g.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ee(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sp;let p=this.type;this.render=function(A,R,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let J=i.getRenderTarget(),v=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),O=i.state;O.setBlending(fs),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let H=p!==zi&&this.type===zi,Y=p===zi&&this.type!==zi;for(let se=0,F=A.length;se<F;se++){let le=A[se],K=le.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let he=K.getFrameExtents();if(s.multiply(he),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/he.x),s.x=r.x*he.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/he.y),s.y=r.y*he.y,K.mapSize.y=r.y)),K.map===null||H===!0||Y===!0){let ve=this.type!==zi?{minFilter:Dn,magFilter:Dn}:{};K.map!==null&&K.map.dispose(),K.map=new Wi(s.x,s.y,ve),K.map.texture.name=le.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let Ce=K.getViewportCount();for(let ve=0;ve<Ce;ve++){let yt=K.getViewport(ve);a.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),O.viewport(a),K.updateMatrices(le,ve),n=K.getFrustum(),y(R,k,K.camera,le,this.type)}K.isPointLightShadow!==!0&&this.type===zi&&b(K,k),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(J,v,w)};function b(A,R){let k=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Wi(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,k,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,k,f,x,null)}function _(A,R,k,J){let v=null,w=k.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)v=w;else if(v=k.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let O=v.uuid,H=R.uuid,Y=c[O];Y===void 0&&(Y={},c[O]=Y);let se=Y[H];se===void 0&&(se=v.clone(),Y[H]=se,R.addEventListener("dispose",D)),v=se}if(v.visible=R.visible,v.wireframe=R.wireframe,J===zi?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:u[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,k.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let O=i.properties.get(v);O.light=k}return v}function y(A,R,k,J,v){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===zi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld);let H=e.update(A),Y=A.material;if(Array.isArray(Y)){let se=H.groups;for(let F=0,le=se.length;F<le;F++){let K=se[F],he=Y[K.materialIndex];if(he&&he.visible){let Ce=_(A,he,J,v);A.onBeforeShadow(i,A,R,k,H,Ce,K),i.renderBufferDirect(k,null,H,Ce,A,K),A.onAfterShadow(i,A,R,k,H,Ce,K)}}}else if(Y.visible){let se=_(A,Y,J,v);A.onBeforeShadow(i,A,R,k,H,se,null),i.renderBufferDirect(k,null,H,se,A,null),A.onAfterShadow(i,A,R,k,H,se,null)}}let O=A.children;for(let H=0,Y=O.length;H<Y;H++)y(O[H],R,k,J,v)}function D(A){A.target.removeEventListener("dispose",D);for(let k in c){let J=c[k],v=A.target.uuid;v in J&&(J[v].dispose(),delete J[v])}}}var hy={[kc]:Fc,[Oc]:Hc,[zc]:Vc,[wr]:Bc,[Fc]:kc,[Hc]:Oc,[Vc]:zc,[Bc]:wr};function uy(i){function e(){let z=!1,Se=new Wt,ee=null,ae=new Wt(0,0,0,0);return{setMask:function(L){ee!==L&&!z&&(i.colorMask(L,L,L,L),ee=L)},setLocked:function(L){z=L},setClear:function(L,G,He,Nt,Rt){Rt===!0&&(L*=Nt,G*=Nt,He*=Nt),Se.set(L,G,He,Nt),ae.equals(Se)===!1&&(i.clearColor(L,G,He,Nt),ae.copy(Se))},reset:function(){z=!1,ee=null,ae.set(-1,0,0,0)}}}function t(){let z=!1,Se=!1,ee=null,ae=null,L=null;return{setReversed:function(G){Se=G},setTest:function(G){G?Oe(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(G){ee!==G&&!z&&(i.depthMask(G),ee=G)},setFunc:function(G){if(Se&&(G=hy[G]),ae!==G){switch(G){case kc:i.depthFunc(i.NEVER);break;case Fc:i.depthFunc(i.ALWAYS);break;case Oc:i.depthFunc(i.LESS);break;case wr:i.depthFunc(i.LEQUAL);break;case zc:i.depthFunc(i.EQUAL);break;case Bc:i.depthFunc(i.GEQUAL);break;case Hc:i.depthFunc(i.GREATER);break;case Vc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=G}},setLocked:function(G){z=G},setClear:function(G){L!==G&&(i.clearDepth(G),L=G)},reset:function(){z=!1,ee=null,ae=null,L=null}}}function n(){let z=!1,Se=null,ee=null,ae=null,L=null,G=null,He=null,Nt=null,Rt=null;return{setTest:function(nt){z||(nt?Oe(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(nt){Se!==nt&&!z&&(i.stencilMask(nt),Se=nt)},setFunc:function(nt,an,un){(ee!==nt||ae!==an||L!==un)&&(i.stencilFunc(nt,an,un),ee=nt,ae=an,L=un)},setOp:function(nt,an,un){(G!==nt||He!==an||Nt!==un)&&(i.stencilOp(nt,an,un),G=nt,He=an,Nt=un)},setLocked:function(nt){z=nt},setClear:function(nt){Rt!==nt&&(i.clearStencil(nt),Rt=nt)},reset:function(){z=!1,Se=null,ee=null,ae=null,L=null,G=null,He=null,Nt=null,Rt=null}}}let s=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,g=!1,x=null,m=null,p=null,b=null,_=null,y=null,D=null,A=new et(0,0,0),R=0,k=!1,J=null,v=null,w=null,O=null,H=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),se=!1,F=0,le=i.getParameter(i.VERSION);le.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(le)[1]),se=F>=1):le.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),se=F>=2);let K=null,he={},Ce=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),yt=new Wt().fromArray(Ce),zt=new Wt().fromArray(ve);function ie(z,Se,ee,ae){let L=new Uint8Array(4),G=i.createTexture();i.bindTexture(z,G),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<ee;He++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,L):i.texImage2D(Se+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,L);return G}let pe={};pe[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Oe(i.DEPTH_TEST),r.setFunc(wr),bt(!1),Je(Bd),Oe(i.CULL_FACE),N(fs);function Oe(z){c[z]!==!0&&(i.enable(z),c[z]=!0)}function Ue(z){c[z]!==!1&&(i.disable(z),c[z]=!1)}function ht(z,Se){return h[z]!==Se?(i.bindFramebuffer(z,Se),h[z]=Se,z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Se),z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function st(z,Se){let ee=d,ae=!1;if(z){ee=u.get(Se),ee===void 0&&(ee=[],u.set(Se,ee));let L=z.textures;if(ee.length!==L.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let G=0,He=L.length;G<He;G++)ee[G]=i.COLOR_ATTACHMENT0+G;ee.length=L.length,ae=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,ae=!0);ae&&i.drawBuffers(ee)}function vt(z){return f!==z?(i.useProgram(z),f=z,!0):!1}let Dt={[Bs]:i.FUNC_ADD,[Sm]:i.FUNC_SUBTRACT,[Em]:i.FUNC_REVERSE_SUBTRACT};Dt[wm]=i.MIN,Dt[Tm]=i.MAX;let ut={[Am]:i.ZERO,[Rm]:i.ONE,[Cm]:i.SRC_COLOR,[Dc]:i.SRC_ALPHA,[Um]:i.SRC_ALPHA_SATURATE,[Nm]:i.DST_COLOR,[Im]:i.DST_ALPHA,[Pm]:i.ONE_MINUS_SRC_COLOR,[Uc]:i.ONE_MINUS_SRC_ALPHA,[Dm]:i.ONE_MINUS_DST_COLOR,[Lm]:i.ONE_MINUS_DST_ALPHA,[km]:i.CONSTANT_COLOR,[Fm]:i.ONE_MINUS_CONSTANT_COLOR,[Om]:i.CONSTANT_ALPHA,[zm]:i.ONE_MINUS_CONSTANT_ALPHA};function N(z,Se,ee,ae,L,G,He,Nt,Rt,nt){if(z===fs){g===!0&&(Ue(i.BLEND),g=!1);return}if(g===!1&&(Oe(i.BLEND),g=!0),z!==Mm){if(z!==x||nt!==k){if((m!==Bs||_!==Bs)&&(i.blendEquation(i.FUNC_ADD),m=Bs,_=Bs),nt)switch(z){case Vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ms:i.blendFunc(i.ONE,i.ONE);break;case Hd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ms:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Hd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}p=null,b=null,y=null,D=null,A.set(0,0,0),R=0,x=z,k=nt}return}L=L||Se,G=G||ee,He=He||ae,(Se!==m||L!==_)&&(i.blendEquationSeparate(Dt[Se],Dt[L]),m=Se,_=L),(ee!==p||ae!==b||G!==y||He!==D)&&(i.blendFuncSeparate(ut[ee],ut[ae],ut[G],ut[He]),p=ee,b=ae,y=G,D=He),(Nt.equals(A)===!1||Rt!==R)&&(i.blendColor(Nt.r,Nt.g,Nt.b,Rt),A.copy(Nt),R=Rt),x=z,k=!1}function hn(z,Se){z.side===on?Ue(i.CULL_FACE):Oe(i.CULL_FACE);let ee=z.side===Xn;Se&&(ee=!ee),bt(ee),z.blending===Vi&&z.transparent===!1?N(fs):N(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),s.setMask(z.colorWrite);let ae=z.stencilWrite;a.setTest(ae),ae&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),gt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Oe(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function bt(z){J!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),J=z)}function Je(z){z!==ym?(Oe(i.CULL_FACE),z!==v&&(z===Bd?i.cullFace(i.BACK):z===vm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),v=z}function rt(z){z!==w&&(se&&i.lineWidth(z),w=z)}function gt(z,Se,ee){z?(Oe(i.POLYGON_OFFSET_FILL),(O!==Se||H!==ee)&&(i.polygonOffset(Se,ee),O=Se,H=ee)):Ue(i.POLYGON_OFFSET_FILL)}function xe(z){z?Oe(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function P(z){z===void 0&&(z=i.TEXTURE0+Y-1),K!==z&&(i.activeTexture(z),K=z)}function E(z,Se,ee){ee===void 0&&(K===null?ee=i.TEXTURE0+Y-1:ee=K);let ae=he[ee];ae===void 0&&(ae={type:void 0,texture:void 0},he[ee]=ae),(ae.type!==z||ae.texture!==Se)&&(K!==ee&&(i.activeTexture(ee),K=ee),i.bindTexture(z,Se||pe[z]),ae.type=z,ae.texture=Se)}function W(){let z=he[K];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ne(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function wt(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function we(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ke(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function qe(z){yt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),yt.copy(z))}function Te(z){zt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),zt.copy(z))}function St(z,Se){let ee=l.get(Se);ee===void 0&&(ee=new WeakMap,l.set(Se,ee));let ae=ee.get(z);ae===void 0&&(ae=i.getUniformBlockIndex(Se,z.name),ee.set(z,ae))}function Ye(z,Se){let ae=l.get(Se).get(z);o.get(Se)!==ae&&(i.uniformBlockBinding(Se,ae,z.__bindingPointIndex),o.set(Se,ae))}function Gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},K=null,he={},h={},u=new WeakMap,d=[],f=null,g=!1,x=null,m=null,p=null,b=null,_=null,y=null,D=null,A=new et(0,0,0),R=0,k=!1,J=null,v=null,w=null,O=null,H=null,yt.set(0,0,i.canvas.width,i.canvas.height),zt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:Oe,disable:Ue,bindFramebuffer:ht,drawBuffers:st,useProgram:vt,setBlending:N,setMaterial:hn,setFlipSided:bt,setCullFace:Je,setLineWidth:rt,setPolygonOffset:gt,setScissorTest:xe,activeTexture:P,bindTexture:E,unbindTexture:W,compressedTexImage2D:$,compressedTexImage3D:ce,texImage2D:we,texImage3D:Ke,updateUBOMapping:St,uniformBlockBinding:Ye,texStorage2D:wt,texStorage3D:de,texSubImage2D:re,texSubImage3D:Ne,compressedTexSubImage2D:me,compressedTexSubImage3D:Ie,scissor:qe,viewport:Te,reset:Gt}}function kf(i,e,t,n){let s=dy(n);switch(t){case hp:return i*e;case dp:return i*e;case fp:return i*e*2;case su:return i*e/s.components*s.byteLength;case ru:return i*e/s.components*s.byteLength;case pp:return i*e*2/s.components*s.byteLength;case au:return i*e*2/s.components*s.byteLength;case up:return i*e*3/s.components*s.byteLength;case Wn:return i*e*4/s.components*s.byteLength;case ou:return i*e*4/s.components*s.byteLength;case Co:case Po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Io:case Lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yc:case qc:return Math.max(i,16)*Math.max(e,8)/4;case Xc:case $c:return Math.max(i,8)*Math.max(e,8)/2;case Kc:case Zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case eh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case th:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case nh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ih:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case sh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case rh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ah:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case oh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case lh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ch:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case hh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case uh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case No:case dh:case fh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case mp:case ph:return Math.ceil(i/4)*Math.ceil(e/4)*8;case mh:case gh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dy(i){switch(i){case Gi:case op:return{byteLength:1,components:1};case ya:case lp:case Ia:return{byteLength:2,components:1};case nu:case iu:return{byteLength:2,components:4};case Gs:case tu:case _i:return{byteLength:4,components:1};case cp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function fy(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return f?new OffscreenCanvas(P,E):va("canvas")}function x(P,E,W){let $=1,ce=xe(P);if((ce.width>W||ce.height>W)&&($=W/Math.max(ce.width,ce.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let re=Math.floor($*ce.width),Ne=Math.floor($*ce.height);u===void 0&&(u=g(re,Ne));let me=E?g(re,Ne):u;return me.width=re,me.height=Ne,me.getContext("2d").drawImage(P,0,0,re,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+re+"x"+Ne+")."),me}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==Dn&&P.minFilter!==Gn}function p(P){i.generateMipmap(P)}function b(P,E,W,$,ce=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let re=E;if(E===i.RED&&(W===i.FLOAT&&(re=i.R32F),W===i.HALF_FLOAT&&(re=i.R16F),W===i.UNSIGNED_BYTE&&(re=i.R8)),E===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(re=i.R8UI),W===i.UNSIGNED_SHORT&&(re=i.R16UI),W===i.UNSIGNED_INT&&(re=i.R32UI),W===i.BYTE&&(re=i.R8I),W===i.SHORT&&(re=i.R16I),W===i.INT&&(re=i.R32I)),E===i.RG&&(W===i.FLOAT&&(re=i.RG32F),W===i.HALF_FLOAT&&(re=i.RG16F),W===i.UNSIGNED_BYTE&&(re=i.RG8)),E===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(re=i.RG8UI),W===i.UNSIGNED_SHORT&&(re=i.RG16UI),W===i.UNSIGNED_INT&&(re=i.RG32UI),W===i.BYTE&&(re=i.RG8I),W===i.SHORT&&(re=i.RG16I),W===i.INT&&(re=i.RG32I)),E===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(re=i.RGB8UI),W===i.UNSIGNED_SHORT&&(re=i.RGB16UI),W===i.UNSIGNED_INT&&(re=i.RGB32UI),W===i.BYTE&&(re=i.RGB8I),W===i.SHORT&&(re=i.RGB16I),W===i.INT&&(re=i.RGB32I)),E===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),W===i.UNSIGNED_INT&&(re=i.RGBA32UI),W===i.BYTE&&(re=i.RGBA8I),W===i.SHORT&&(re=i.RGBA16I),W===i.INT&&(re=i.RGBA32I)),E===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),E===i.RGBA){let Ne=ce?Uo:Vt.getTransfer($);W===i.FLOAT&&(re=i.RGBA32F),W===i.HALF_FLOAT&&(re=i.RGBA16F),W===i.UNSIGNED_BYTE&&(re=Ne===rn?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function _(P,E){let W;return P?E===null||E===Gs||E===Rr?W=i.DEPTH24_STENCIL8:E===_i?W=i.DEPTH32F_STENCIL8:E===ya&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Gs||E===Rr?W=i.DEPTH_COMPONENT24:E===_i?W=i.DEPTH_COMPONENT32F:E===ya&&(W=i.DEPTH_COMPONENT16),W}function y(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Dn&&P.minFilter!==Gn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function D(P){let E=P.target;E.removeEventListener("dispose",D),R(E),E.isVideoTexture&&h.delete(E)}function A(P){let E=P.target;E.removeEventListener("dispose",A),J(E)}function R(P){let E=n.get(P);if(E.__webglInit===void 0)return;let W=P.source,$=d.get(W);if($){let ce=$[E.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&k(P),Object.keys($).length===0&&d.delete(W)}n.remove(P)}function k(P){let E=n.get(P);i.deleteTexture(E.__webglTexture);let W=P.source,$=d.get(W);delete $[E.__cacheKey],a.memory.textures--}function J(P){let E=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let ce=0;ce<E.__webglFramebuffer[$].length;ce++)i.deleteFramebuffer(E.__webglFramebuffer[$][ce]);else i.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)i.deleteFramebuffer(E.__webglFramebuffer[$]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let W=P.textures;for(let $=0,ce=W.length;$<ce;$++){let re=n.get(W[$]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove(W[$])}n.remove(P)}let v=0;function w(){v=0}function O(){let P=v;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),v+=1,P}function H(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function Y(P,E){let W=n.get(P);if(P.isVideoTexture&&rt(P),P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){let $=P.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{zt(W,P,E);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+E)}function se(P,E){let W=n.get(P);if(P.version>0&&W.__version!==P.version){zt(W,P,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+E)}function F(P,E){let W=n.get(P);if(P.version>0&&W.__version!==P.version){zt(W,P,E);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+E)}function le(P,E){let W=n.get(P);if(P.version>0&&W.__version!==P.version){ie(W,P,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+E)}let K={[Vs]:i.REPEAT,[Bi]:i.CLAMP_TO_EDGE,[_a]:i.MIRRORED_REPEAT},he={[Dn]:i.NEAREST,[eu]:i.NEAREST_MIPMAP_NEAREST,[yr]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[fa]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},Ce={[e0]:i.NEVER,[a0]:i.ALWAYS,[t0]:i.LESS,[_p]:i.LEQUAL,[n0]:i.EQUAL,[r0]:i.GEQUAL,[i0]:i.GREATER,[s0]:i.NOTEQUAL};function ve(P,E){if(E.type===_i&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Gn||E.magFilter===fa||E.magFilter===yr||E.magFilter===Ti||E.minFilter===Gn||E.minFilter===fa||E.minFilter===yr||E.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,K[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,K[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,K[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,he[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,he[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Dn||E.minFilter!==yr&&E.minFilter!==Ti||E.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function yt(P,E){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",D));let $=E.source,ce=d.get($);ce===void 0&&(ce={},d.set($,ce));let re=H(E);if(re!==P.__cacheKey){ce[re]===void 0&&(ce[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ce[re].usedTimes++;let Ne=ce[P.__cacheKey];Ne!==void 0&&(ce[P.__cacheKey].usedTimes--,Ne.usedTimes===0&&k(E)),P.__cacheKey=re,P.__webglTexture=ce[re].texture}return W}function zt(P,E,W){let $=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&($=i.TEXTURE_3D);let ce=yt(P,E),re=E.source;t.bindTexture($,P.__webglTexture,i.TEXTURE0+W);let Ne=n.get(re);if(re.version!==Ne.__version||ce===!0){t.activeTexture(i.TEXTURE0+W);let me=Vt.getPrimaries(Vt.workingColorSpace),Ie=E.colorSpace===hs?null:Vt.getPrimaries(E.colorSpace),wt=E.colorSpace===hs||me===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let de=x(E.image,!1,s.maxTextureSize);de=gt(E,de);let we=r.convert(E.format,E.colorSpace),Ke=r.convert(E.type),qe=b(E.internalFormat,we,Ke,E.colorSpace,E.isVideoTexture);ve($,E);let Te,St=E.mipmaps,Ye=E.isVideoTexture!==!0,Gt=Ne.__version===void 0||ce===!0,z=re.dataReady,Se=y(E,de);if(E.isDepthTexture)qe=_(E.format===Cr,E.type),Gt&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,qe,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,qe,de.width,de.height,0,we,Ke,null));else if(E.isDataTexture)if(St.length>0){Ye&&Gt&&t.texStorage2D(i.TEXTURE_2D,Se,qe,St[0].width,St[0].height);for(let ee=0,ae=St.length;ee<ae;ee++)Te=St[ee],Ye?z&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,Te.width,Te.height,we,Ke,Te.data):t.texImage2D(i.TEXTURE_2D,ee,qe,Te.width,Te.height,0,we,Ke,Te.data);E.generateMipmaps=!1}else Ye?(Gt&&t.texStorage2D(i.TEXTURE_2D,Se,qe,de.width,de.height),z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,we,Ke,de.data)):t.texImage2D(i.TEXTURE_2D,0,qe,de.width,de.height,0,we,Ke,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ye&&Gt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,qe,St[0].width,St[0].height,de.depth);for(let ee=0,ae=St.length;ee<ae;ee++)if(Te=St[ee],E.format!==Wn)if(we!==null)if(Ye){if(z)if(E.layerUpdates.size>0){let L=kf(Te.width,Te.height,E.format,E.type);for(let G of E.layerUpdates){let He=Te.data.subarray(G*L/Te.data.BYTES_PER_ELEMENT,(G+1)*L/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,G,Te.width,Te.height,1,we,He,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,Te.width,Te.height,de.depth,we,Te.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,qe,Te.width,Te.height,de.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,Te.width,Te.height,de.depth,we,Ke,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,qe,Te.width,Te.height,de.depth,0,we,Ke,Te.data)}else{Ye&&Gt&&t.texStorage2D(i.TEXTURE_2D,Se,qe,St[0].width,St[0].height);for(let ee=0,ae=St.length;ee<ae;ee++)Te=St[ee],E.format!==Wn?we!==null?Ye?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,Te.width,Te.height,we,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,qe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?z&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,Te.width,Te.height,we,Ke,Te.data):t.texImage2D(i.TEXTURE_2D,ee,qe,Te.width,Te.height,0,we,Ke,Te.data)}else if(E.isDataArrayTexture)if(Ye){if(Gt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,qe,de.width,de.height,de.depth),z)if(E.layerUpdates.size>0){let ee=kf(de.width,de.height,E.format,E.type);for(let ae of E.layerUpdates){let L=de.data.subarray(ae*ee/de.data.BYTES_PER_ELEMENT,(ae+1)*ee/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,de.width,de.height,1,we,Ke,L)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,we,Ke,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,qe,de.width,de.height,de.depth,0,we,Ke,de.data);else if(E.isData3DTexture)Ye?(Gt&&t.texStorage3D(i.TEXTURE_3D,Se,qe,de.width,de.height,de.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,we,Ke,de.data)):t.texImage3D(i.TEXTURE_3D,0,qe,de.width,de.height,de.depth,0,we,Ke,de.data);else if(E.isFramebufferTexture){if(Gt)if(Ye)t.texStorage2D(i.TEXTURE_2D,Se,qe,de.width,de.height);else{let ee=de.width,ae=de.height;for(let L=0;L<Se;L++)t.texImage2D(i.TEXTURE_2D,L,qe,ee,ae,0,we,Ke,null),ee>>=1,ae>>=1}}else if(St.length>0){if(Ye&&Gt){let ee=xe(St[0]);t.texStorage2D(i.TEXTURE_2D,Se,qe,ee.width,ee.height)}for(let ee=0,ae=St.length;ee<ae;ee++)Te=St[ee],Ye?z&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,we,Ke,Te):t.texImage2D(i.TEXTURE_2D,ee,qe,we,Ke,Te);E.generateMipmaps=!1}else if(Ye){if(Gt){let ee=xe(de);t.texStorage2D(i.TEXTURE_2D,Se,qe,ee.width,ee.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,Ke,de)}else t.texImage2D(i.TEXTURE_2D,0,qe,we,Ke,de);m(E)&&p($),Ne.__version=re.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ie(P,E,W){if(E.image.length!==6)return;let $=yt(P,E),ce=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+W);let re=n.get(ce);if(ce.version!==re.__version||$===!0){t.activeTexture(i.TEXTURE0+W);let Ne=Vt.getPrimaries(Vt.workingColorSpace),me=E.colorSpace===hs?null:Vt.getPrimaries(E.colorSpace),Ie=E.colorSpace===hs||Ne===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let wt=E.isCompressedTexture||E.image[0].isCompressedTexture,de=E.image[0]&&E.image[0].isDataTexture,we=[];for(let ae=0;ae<6;ae++)!wt&&!de?we[ae]=x(E.image[ae],!0,s.maxCubemapSize):we[ae]=de?E.image[ae].image:E.image[ae],we[ae]=gt(E,we[ae]);let Ke=we[0],qe=r.convert(E.format,E.colorSpace),Te=r.convert(E.type),St=b(E.internalFormat,qe,Te,E.colorSpace),Ye=E.isVideoTexture!==!0,Gt=re.__version===void 0||$===!0,z=ce.dataReady,Se=y(E,Ke);ve(i.TEXTURE_CUBE_MAP,E);let ee;if(wt){Ye&&Gt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,St,Ke.width,Ke.height);for(let ae=0;ae<6;ae++){ee=we[ae].mipmaps;for(let L=0;L<ee.length;L++){let G=ee[L];E.format!==Wn?qe!==null?Ye?z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,L,0,0,G.width,G.height,qe,G.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,L,St,G.width,G.height,0,G.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,L,0,0,G.width,G.height,qe,Te,G.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,L,St,G.width,G.height,0,qe,Te,G.data)}}}else{if(ee=E.mipmaps,Ye&&Gt){ee.length>0&&Se++;let ae=xe(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,St,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(de){Ye?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,we[ae].width,we[ae].height,qe,Te,we[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,St,we[ae].width,we[ae].height,0,qe,Te,we[ae].data);for(let L=0;L<ee.length;L++){let He=ee[L].image[ae].image;Ye?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,L+1,0,0,He.width,He.height,qe,Te,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,L+1,St,He.width,He.height,0,qe,Te,He.data)}}else{Ye?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,qe,Te,we[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,St,qe,Te,we[ae]);for(let L=0;L<ee.length;L++){let G=ee[L];Ye?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,L+1,0,0,qe,Te,G.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,L+1,St,qe,Te,G.image[ae])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),re.__version=ce.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function pe(P,E,W,$,ce,re){let Ne=r.convert(W.format,W.colorSpace),me=r.convert(W.type),Ie=b(W.internalFormat,Ne,me,W.colorSpace);if(!n.get(E).__hasExternalTextures){let de=Math.max(1,E.width>>re),we=Math.max(1,E.height>>re);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,re,Ie,de,we,E.depth,0,Ne,me,null):t.texImage2D(ce,re,Ie,de,we,0,Ne,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Je(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ce,n.get(W).__webglTexture,0,bt(E)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ce,n.get(W).__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(P,E,W){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){let $=E.depthTexture,ce=$&&$.isDepthTexture?$.type:null,re=_(E.stencilBuffer,ce),Ne=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=bt(E);Je(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,re,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,re,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,re,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ne,i.RENDERBUFFER,P)}else{let $=E.textures;for(let ce=0;ce<$.length;ce++){let re=$[ce],Ne=r.convert(re.format,re.colorSpace),me=r.convert(re.type),Ie=b(re.internalFormat,Ne,me,re.colorSpace),wt=bt(E);W&&Je(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,Ie,E.width,E.height):Je(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt,Ie,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);let $=n.get(E.depthTexture).__webglTexture,ce=bt(E);if(E.depthTexture.format===br)Je(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(E.depthTexture.format===Cr)Je(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ht(P){let E=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let $=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),$){let ce=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,$.removeEventListener("dispose",ce)};$.addEventListener("dispose",ce),E.__depthDisposeCallback=ce}E.__boundDepthTexture=$}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ue(E.__webglFramebuffer,P)}else if(W){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]===void 0)E.__webglDepthbuffer[$]=i.createRenderbuffer(),Oe(E.__webglDepthbuffer[$],P,!1);else{let ce=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,re)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Oe(E.__webglDepthbuffer,P,!1);else{let $=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ce)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(P,E,W){let $=n.get(P);E!==void 0&&pe($.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&ht(P)}function vt(P){let E=P.texture,W=n.get(P),$=n.get(E);P.addEventListener("dispose",A);let ce=P.textures,re=P.isWebGLCubeRenderTarget===!0,Ne=ce.length>1;if(Ne||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=E.version,a.memory.textures++),re){W.__webglFramebuffer=[];for(let me=0;me<6;me++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[me]=[];for(let Ie=0;Ie<E.mipmaps.length;Ie++)W.__webglFramebuffer[me][Ie]=i.createFramebuffer()}else W.__webglFramebuffer[me]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let me=0;me<E.mipmaps.length;me++)W.__webglFramebuffer[me]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Ne)for(let me=0,Ie=ce.length;me<Ie;me++){let wt=n.get(ce[me]);wt.__webglTexture===void 0&&(wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Je(P)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let me=0;me<ce.length;me++){let Ie=ce[me];W.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[me]);let wt=r.convert(Ie.format,Ie.colorSpace),de=r.convert(Ie.type),we=b(Ie.internalFormat,wt,de,Ie.colorSpace,P.isXRRenderTarget===!0),Ke=bt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,we,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,W.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ve(i.TEXTURE_CUBE_MAP,E);for(let me=0;me<6;me++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ie=0;Ie<E.mipmaps.length;Ie++)pe(W.__webglFramebuffer[me][Ie],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie);else pe(W.__webglFramebuffer[me],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let me=0,Ie=ce.length;me<Ie;me++){let wt=ce[me],de=n.get(wt);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),ve(i.TEXTURE_2D,wt),pe(W.__webglFramebuffer,P,wt,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),m(wt)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(me=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,$.__webglTexture),ve(me,E),E.mipmaps&&E.mipmaps.length>0)for(let Ie=0;Ie<E.mipmaps.length;Ie++)pe(W.__webglFramebuffer[Ie],P,E,i.COLOR_ATTACHMENT0,me,Ie);else pe(W.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,me,0);m(E)&&p(me),t.unbindTexture()}P.depthBuffer&&ht(P)}function Dt(P){let E=P.textures;for(let W=0,$=E.length;W<$;W++){let ce=E[W];if(m(ce)){let re=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ne=n.get(ce).__webglTexture;t.bindTexture(re,Ne),p(re),t.unbindTexture()}}}let ut=[],N=[];function hn(P){if(P.samples>0){if(Je(P)===!1){let E=P.textures,W=P.width,$=P.height,ce=i.COLOR_BUFFER_BIT,re=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=n.get(P),me=E.length>1;if(me)for(let Ie=0;Ie<E.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ie=0;Ie<E.length;Ie++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ie]);let wt=n.get(E[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,wt,0)}i.blitFramebuffer(0,0,W,$,0,0,W,$,ce,i.NEAREST),l===!0&&(ut.length=0,N.length=0,ut.push(i.COLOR_ATTACHMENT0+Ie),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ut.push(re),N.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let Ie=0;Ie<E.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ie]);let wt=n.get(E[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,wt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function bt(P){return Math.min(s.maxSamples,P.samples)}function Je(P){let E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function rt(P){let E=a.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function gt(P,E){let W=P.colorSpace,$=P.format,ce=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==An&&W!==hs&&(Vt.getTransfer(W)===rn?($!==Wn||ce!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function xe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=w,this.setTexture2D=Y,this.setTexture2DArray=se,this.setTexture3D=F,this.setTextureCube=le,this.rebindTextures=st,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Je}function py(i,e){function t(n,s=hs){let r,a=Vt.getTransfer(s);if(n===Gi)return i.UNSIGNED_BYTE;if(n===nu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===iu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===cp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===op)return i.BYTE;if(n===lp)return i.SHORT;if(n===ya)return i.UNSIGNED_SHORT;if(n===tu)return i.INT;if(n===Gs)return i.UNSIGNED_INT;if(n===_i)return i.FLOAT;if(n===Ia)return i.HALF_FLOAT;if(n===hp)return i.ALPHA;if(n===up)return i.RGB;if(n===Wn)return i.RGBA;if(n===dp)return i.LUMINANCE;if(n===fp)return i.LUMINANCE_ALPHA;if(n===br)return i.DEPTH_COMPONENT;if(n===Cr)return i.DEPTH_STENCIL;if(n===su)return i.RED;if(n===ru)return i.RED_INTEGER;if(n===pp)return i.RG;if(n===au)return i.RG_INTEGER;if(n===ou)return i.RGBA_INTEGER;if(n===Co||n===Po||n===Io||n===Lo)if(a===rn)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xc||n===Yc||n===$c||n===qc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kc||n===Zc||n===Jc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Kc||n===Zc)return a===rn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jc)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===jc||n===Qc||n===eh||n===th||n===nh||n===ih||n===sh||n===rh||n===ah||n===oh||n===lh||n===ch||n===hh||n===uh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jc)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qc)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===eh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===th)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ih)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ah)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ch)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===No||n===dh||n===fh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===No)return a===rn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mp||n===ph||n===mh||n===gh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===No)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ph)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ih=class extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},It=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},my={type:"move"},ma=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(my)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new It;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},gy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xy=`
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

}`,Lh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Tn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ei({vertexShader:gy,fragmentShader:xy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ee(new Ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nh=class extends gs{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=new Lh,m=t.getContextAttributes(),p=null,b=null,_=[],y=[],D=new De,A=null,R=new dn;R.layers.enable(1),R.viewport=new Wt;let k=new dn;k.layers.enable(2),k.viewport=new Wt;let J=[R,k],v=new Ih;v.layers.enable(1),v.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let pe=_[ie];return pe===void 0&&(pe=new ma,_[ie]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ie){let pe=_[ie];return pe===void 0&&(pe=new ma,_[ie]=pe),pe.getGripSpace()},this.getHand=function(ie){let pe=_[ie];return pe===void 0&&(pe=new ma,_[ie]=pe),pe.getHandSpace()};function H(ie){let pe=y.indexOf(ie.inputSource);if(pe===-1)return;let Oe=_[pe];Oe!==void 0&&(Oe.update(ie.inputSource,ie.frame,c||a),Oe.dispatchEvent({type:ie.type,data:ie.inputSource}))}function Y(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",se);for(let ie=0;ie<_.length;ie++){let pe=y[ie];pe!==null&&(y[ie]=null,_[ie].disconnect(pe))}w=null,O=null,x.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,b=null,zt.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",se),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){let pe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Wi(f.framebufferWidth,f.framebufferHeight,{format:Wn,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let pe=null,Oe=null,Ue=null;m.depth&&(Ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=m.stencil?Cr:br,Oe=m.stencil?Rr:Gs);let ht={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(ht),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Wi(d.textureWidth,d.textureHeight,{format:Wn,type:Gi,depthTexture:new $o(d.textureWidth,d.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),zt.setContext(s),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function se(ie){for(let pe=0;pe<ie.removed.length;pe++){let Oe=ie.removed[pe],Ue=y.indexOf(Oe);Ue>=0&&(y[Ue]=null,_[Ue].disconnect(Oe))}for(let pe=0;pe<ie.added.length;pe++){let Oe=ie.added[pe],Ue=y.indexOf(Oe);if(Ue===-1){for(let st=0;st<_.length;st++)if(st>=y.length){y.push(Oe),Ue=st;break}else if(y[st]===null){y[st]=Oe,Ue=st;break}if(Ue===-1)break}let ht=_[Ue];ht&&ht.connect(Oe)}}let F=new I,le=new I;function K(ie,pe,Oe){F.setFromMatrixPosition(pe.matrixWorld),le.setFromMatrixPosition(Oe.matrixWorld);let Ue=F.distanceTo(le),ht=pe.projectionMatrix.elements,st=Oe.projectionMatrix.elements,vt=ht[14]/(ht[10]-1),Dt=ht[14]/(ht[10]+1),ut=(ht[9]+1)/ht[5],N=(ht[9]-1)/ht[5],hn=(ht[8]-1)/ht[0],bt=(st[8]+1)/st[0],Je=vt*hn,rt=vt*bt,gt=Ue/(-hn+bt),xe=gt*-hn;if(pe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(xe),ie.translateZ(gt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),ht[10]===-1)ie.projectionMatrix.copy(pe.projectionMatrix),ie.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{let P=vt+gt,E=Dt+gt,W=Je-xe,$=rt+(Ue-xe),ce=ut*Dt/E*P,re=N*Dt/E*P;ie.projectionMatrix.makePerspective(W,$,ce,re,P,E),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function he(ie,pe){pe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(pe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let pe=ie.near,Oe=ie.far;x.texture!==null&&(x.depthNear>0&&(pe=x.depthNear),x.depthFar>0&&(Oe=x.depthFar)),v.near=k.near=R.near=pe,v.far=k.far=R.far=Oe,(w!==v.near||O!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,O=v.far);let Ue=ie.parent,ht=v.cameras;he(v,Ue);for(let st=0;st<ht.length;st++)he(ht[st],Ue);ht.length===2?K(v,R,k):v.projectionMatrix.copy(R.projectionMatrix),Ce(ie,v,Ue)};function Ce(ie,pe,Oe){Oe===null?ie.matrix.copy(pe.matrixWorld):(ie.matrix.copy(Oe.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(pe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(pe.projectionMatrix),ie.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Lr*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ie)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let ve=null;function yt(ie,pe){if(h=pe.getViewerPose(c||a),g=pe,h!==null){let Oe=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Ue=!1;Oe.length!==v.cameras.length&&(v.cameras.length=0,Ue=!0);for(let st=0;st<Oe.length;st++){let vt=Oe[st],Dt=null;if(f!==null)Dt=f.getViewport(vt);else{let N=u.getViewSubImage(d,vt);Dt=N.viewport,st===0&&(e.setRenderTargetTextures(b,N.colorTexture,d.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(b))}let ut=J[st];ut===void 0&&(ut=new dn,ut.layers.enable(st),ut.viewport=new Wt,J[st]=ut),ut.matrix.fromArray(vt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(vt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),st===0&&(v.matrix.copy(ut.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Ue===!0&&v.cameras.push(ut)}let ht=s.enabledFeatures;if(ht&&ht.includes("depth-sensing")){let st=u.getDepthInformation(Oe[0]);st&&st.isValid&&st.texture&&x.init(e,st,s.renderState)}}for(let Oe=0;Oe<_.length;Oe++){let Ue=y[Oe],ht=_[Oe];Ue!==null&&ht!==void 0&&ht.update(Ue,pe,c||a)}ve&&ve(ie,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),g=null}let zt=new Mp;zt.setAnimationLoop(yt),this.setAnimationLoop=function(ie){ve=ie},this.dispose=function(){}}},Os=new Ri,_y=new pt;function yy(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,bp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),_=b.envMap,y=b.envMapRotation;_&&(m.envMap.value=_,Os.copy(y),Os.x*=-1,Os.y*=-1,Os.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),m.envMapRotation.value.setFromMatrix4(_y.makeRotationFromEuler(Os)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vy(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){let y=_.program;n.uniformBlockBinding(b,y)}function c(b,_){let y=s[b.id];y===void 0&&(g(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",m));let D=_.program;n.updateUBOMapping(b,D);let A=e.render.frame;r[b.id]!==A&&(d(b),r[b.id]=A)}function h(b){let _=u();b.__bindingPointIndex=_;let y=i.createBuffer(),D=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,D,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let _=s[b.id],y=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,R=y.length;A<R;A++){let k=Array.isArray(y[A])?y[A]:[y[A]];for(let J=0,v=k.length;J<v;J++){let w=k[J];if(f(w,A,J,D)===!0){let O=w.__offset,H=Array.isArray(w.value)?w.value:[w.value],Y=0;for(let se=0;se<H.length;se++){let F=H[se],le=x(F);typeof F=="number"||typeof F=="boolean"?(w.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,O+Y,w.__data)):F.isMatrix3?(w.__data[0]=F.elements[0],w.__data[1]=F.elements[1],w.__data[2]=F.elements[2],w.__data[3]=0,w.__data[4]=F.elements[3],w.__data[5]=F.elements[4],w.__data[6]=F.elements[5],w.__data[7]=0,w.__data[8]=F.elements[6],w.__data[9]=F.elements[7],w.__data[10]=F.elements[8],w.__data[11]=0):(F.toArray(w.__data,Y),Y+=le.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,_,y,D){let A=b.value,R=_+"_"+y;if(D[R]===void 0)return typeof A=="number"||typeof A=="boolean"?D[R]=A:D[R]=A.clone(),!0;{let k=D[R];if(typeof A=="number"||typeof A=="boolean"){if(k!==A)return D[R]=A,!0}else if(k.equals(A)===!1)return k.copy(A),!0}return!1}function g(b){let _=b.uniforms,y=0,D=16;for(let R=0,k=_.length;R<k;R++){let J=Array.isArray(_[R])?_[R]:[_[R]];for(let v=0,w=J.length;v<w;v++){let O=J[v],H=Array.isArray(O.value)?O.value:[O.value];for(let Y=0,se=H.length;Y<se;Y++){let F=H[Y],le=x(F),K=y%D,he=K%le.boundary,Ce=K+he;y+=he,Ce!==0&&D-Ce<le.storage&&(y+=D-Ce),O.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=le.storage}}}let A=y%D;return A>0&&(y+=D-A),b.__size=y,b.__cache={},this}function x(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){let _=b.target;_.removeEventListener("dispose",m);let y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var kr=class{constructor(e={}){let{canvas:t=S0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this.toneMapping=ps,this.toneMappingExposure=1;let _=this,y=!1,D=0,A=0,R=null,k=-1,J=null,v=new Wt,w=new Wt,O=null,H=new et(0),Y=0,se=t.width,F=t.height,le=1,K=null,he=null,Ce=new Wt(0,0,se,F),ve=new Wt(0,0,se,F),yt=!1,zt=new ba,ie=!1,pe=!1,Oe=new pt,Ue=new pt,ht=new I,st=new Wt,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Dt=!1;function ut(){return R===null?le:1}let N=n;function hn(T,B){return t.getContext(T,B)}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",G,!1),N===null){let B="webgl2";if(N=hn(B,T),N===null)throw hn(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let bt,Je,rt,gt,xe,P,E,W,$,ce,re,Ne,me,Ie,wt,de,we,Ke,qe,Te,St,Ye,Gt,z;function Se(){bt=new kx(N),bt.init(),Ye=new py(N,bt),Je=new Px(N,bt,e,Ye),rt=new uy(N),Je.reverseDepthBuffer&&rt.buffers.depth.setReversed(!0),gt=new zx(N),xe=new j_,P=new fy(N,bt,rt,xe,Je,Ye,gt),E=new Lx(_),W=new Ux(_),$=new Y0(N),Gt=new Rx(N,$),ce=new Fx(N,$,gt,Gt),re=new Hx(N,ce,$,gt),qe=new Bx(N,Je,P),de=new Ix(xe),Ne=new J_(_,E,W,bt,Je,Gt,de),me=new yy(_,xe),Ie=new ey,wt=new ay(bt),Ke=new Ax(_,E,W,rt,re,d,l),we=new cy(_,re,Je),z=new vy(N,gt,Je,rt),Te=new Cx(N,bt,gt),St=new Ox(N,bt,gt),gt.programs=Ne.programs,_.capabilities=Je,_.extensions=bt,_.properties=xe,_.renderLists=Ie,_.shadowMap=we,_.state=rt,_.info=gt}Se();let ee=new Nh(_,N);this.xr=ee,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let T=bt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=bt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(T){T!==void 0&&(le=T,this.setSize(se,F,!1))},this.getSize=function(T){return T.set(se,F)},this.setSize=function(T,B,j=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=T,F=B,t.width=Math.floor(T*le),t.height=Math.floor(B*le),j===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(se*le,F*le).floor()},this.setDrawingBufferSize=function(T,B,j){se=T,F=B,le=j,t.width=Math.floor(T*j),t.height=Math.floor(B*j),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(v)},this.getViewport=function(T){return T.copy(Ce)},this.setViewport=function(T,B,j,Q){T.isVector4?Ce.set(T.x,T.y,T.z,T.w):Ce.set(T,B,j,Q),rt.viewport(v.copy(Ce).multiplyScalar(le).round())},this.getScissor=function(T){return T.copy(ve)},this.setScissor=function(T,B,j,Q){T.isVector4?ve.set(T.x,T.y,T.z,T.w):ve.set(T,B,j,Q),rt.scissor(w.copy(ve).multiplyScalar(le).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(T){rt.setScissorTest(yt=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){he=T},this.getClearColor=function(T){return T.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(T=!0,B=!0,j=!0){let Q=0;if(T){let V=!1;if(R!==null){let ge=R.texture.format;V=ge===ou||ge===au||ge===ru}if(V){let ge=R.texture.type,Re=ge===Gi||ge===Gs||ge===ya||ge===Rr||ge===nu||ge===iu,ke=Ke.getClearColor(),We=Ke.getClearAlpha(),lt=ke.r,je=ke.g,oe=ke.b;Re?(f[0]=lt,f[1]=je,f[2]=oe,f[3]=We,N.clearBufferuiv(N.COLOR,0,f)):(g[0]=lt,g[1]=je,g[2]=oe,g[3]=We,N.clearBufferiv(N.COLOR,0,g))}else Q|=N.COLOR_BUFFER_BIT}B&&(Q|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),j&&(Q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",G,!1),Ie.dispose(),wt.dispose(),xe.dispose(),E.dispose(),W.dispose(),re.dispose(),Gt.dispose(),z.dispose(),Ne.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",hi),ee.removeEventListener("sessionend",ws),bi.stop()};function ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let T=gt.autoReset,B=we.enabled,j=we.autoUpdate,Q=we.needsUpdate,V=we.type;Se(),gt.autoReset=T,we.enabled=B,we.autoUpdate=j,we.needsUpdate=Q,we.type=V}function G(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function He(T){let B=T.target;B.removeEventListener("dispose",He),Nt(B)}function Nt(T){Rt(T),xe.remove(T)}function Rt(T){let B=xe.get(T).programs;B!==void 0&&(B.forEach(function(j){Ne.releaseProgram(j)}),T.isShaderMaterial&&Ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,j,Q,V,ge){B===null&&(B=vt);let Re=V.isMesh&&V.matrixWorld.determinant()<0,ke=Js(T,B,j,Q,V);rt.setMaterial(Q,Re);let We=j.index,lt=1;if(Q.wireframe===!0){if(We=ce.getWireframeAttribute(j),We===void 0)return;lt=2}let je=j.drawRange,oe=j.attributes.position,Et=je.start*lt,Ht=(je.start+je.count)*lt;ge!==null&&(Et=Math.max(Et,ge.start*lt),Ht=Math.min(Ht,(ge.start+ge.count)*lt)),We!==null?(Et=Math.max(Et,0),Ht=Math.min(Ht,We.count)):oe!=null&&(Et=Math.max(Et,0),Ht=Math.min(Ht,oe.count));let tn=Ht-Et;if(tn<0||tn===1/0)return;Gt.setup(V,Q,ke,j,We);let Pt,dt=Te;if(We!==null&&(Pt=$.get(We),dt=St,dt.setIndex(Pt)),V.isMesh)Q.wireframe===!0?(rt.setLineWidth(Q.wireframeLinewidth*ut()),dt.setMode(N.LINES)):dt.setMode(N.TRIANGLES);else if(V.isLine){let Fe=Q.linewidth;Fe===void 0&&(Fe=1),rt.setLineWidth(Fe*ut()),V.isLineSegments?dt.setMode(N.LINES):V.isLineLoop?dt.setMode(N.LINE_LOOP):dt.setMode(N.LINE_STRIP)}else V.isPoints?dt.setMode(N.POINTS):V.isSprite&&dt.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)dt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(bt.get("WEBGL_multi_draw"))dt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Fe=V._multiDrawStarts,nn=V._multiDrawCounts,Ut=V._multiDrawCount,bn=We?$.get(We).bytesPerElement:1,Mi=xe.get(Q).currentProgram.getUniforms();for(let Rn=0;Rn<Ut;Rn++)Mi.setValue(N,"_gl_DrawID",Rn),dt.render(Fe[Rn]/bn,nn[Rn])}else if(V.isInstancedMesh)dt.renderInstances(Et,tn,V.count);else if(j.isInstancedBufferGeometry){let Fe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,nn=Math.min(j.instanceCount,Fe);dt.renderInstances(Et,tn,nn)}else dt.render(Et,tn)};function nt(T,B,j){T.transparent===!0&&T.side===on&&T.forceSinglePass===!1?(T.side=Xn,T.needsUpdate=!0,fn(T,B,j),T.side=Ai,T.needsUpdate=!0,fn(T,B,j),T.side=on):fn(T,B,j)}this.compile=function(T,B,j=null){j===null&&(j=T),m=wt.get(j),m.init(B),b.push(m),j.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),T!==j&&T.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();let Q=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ge=V.material;if(ge)if(Array.isArray(ge))for(let Re=0;Re<ge.length;Re++){let ke=ge[Re];nt(ke,j,V),Q.add(ke)}else nt(ge,j,V),Q.add(ge)}),b.pop(),m=null,Q},this.compileAsync=function(T,B,j=null){let Q=this.compile(T,B,j);return new Promise(V=>{function ge(){if(Q.forEach(function(Re){xe.get(Re).currentProgram.isReady()&&Q.delete(Re)}),Q.size===0){V(T);return}setTimeout(ge,10)}bt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let an=null;function un(T){an&&an(T)}function hi(){bi.stop()}function ws(){bi.start()}let bi=new Mp;bi.setAnimationLoop(un),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(T){an=T,ee.setAnimationLoop(T),T===null?bi.stop():bi.start()},ee.addEventListener("sessionstart",hi),ee.addEventListener("sessionend",ws),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(B),B=ee.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,B,R),m=wt.get(T,b.length),m.init(B),b.push(m),Ue.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),zt.setFromProjectionMatrix(Ue),pe=this.localClippingEnabled,ie=de.init(this.clippingPlanes,pe),x=Ie.get(T,p.length),x.init(),p.push(x),ee.enabled===!0&&ee.isPresenting===!0){let ge=_.xr.getDepthSensingMesh();ge!==null&&Zs(ge,B,-1/0,_.sortObjects)}Zs(T,B,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(K,he),Dt=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Dt&&Ke.addToRenderList(x,T),this.info.render.frame++,ie===!0&&de.beginShadows();let j=m.state.shadowsArray;we.render(j,T,B),ie===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=x.opaque,V=x.transmissive;if(m.setupLights(),B.isArrayCamera){let ge=B.cameras;if(V.length>0)for(let Re=0,ke=ge.length;Re<ke;Re++){let We=ge[Re];Ts(Q,V,T,We)}Dt&&Ke.render(T);for(let Re=0,ke=ge.length;Re<ke;Re++){let We=ge[Re];Jr(x,T,We,We.viewport)}}else V.length>0&&Ts(Q,V,T,B),Dt&&Ke.render(T),Jr(x,T,B);R!==null&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(_,T,B),Gt.resetDefaultState(),k=-1,J=null,b.pop(),b.length>0?(m=b[b.length-1],ie===!0&&de.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Zs(T,B,j,Q){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||zt.intersectsSprite(T)){Q&&st.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ue);let Re=re.update(T),ke=T.material;ke.visible&&x.push(T,Re,ke,j,st.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||zt.intersectsObject(T))){let Re=re.update(T),ke=T.material;if(Q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),st.copy(T.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),st.copy(Re.boundingSphere.center)),st.applyMatrix4(T.matrixWorld).applyMatrix4(Ue)),Array.isArray(ke)){let We=Re.groups;for(let lt=0,je=We.length;lt<je;lt++){let oe=We[lt],Et=ke[oe.materialIndex];Et&&Et.visible&&x.push(T,Re,Et,j,st.z,oe)}}else ke.visible&&x.push(T,Re,ke,j,st.z,null)}}let ge=T.children;for(let Re=0,ke=ge.length;Re<ke;Re++)Zs(ge[Re],B,j,Q)}function Jr(T,B,j,Q){let V=T.opaque,ge=T.transmissive,Re=T.transparent;m.setupLightsView(j),ie===!0&&de.setGlobalState(_.clippingPlanes,j),Q&&rt.viewport(v.copy(Q)),V.length>0&&As(V,B,j),ge.length>0&&As(ge,B,j),Re.length>0&&As(Re,B,j),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function Ts(T,B,j,Q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Q.id]===void 0&&(m.state.transmissionRenderTarget[Q.id]=new Wi(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float")?Ia:Gi,minFilter:Ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Vt.workingColorSpace}));let ge=m.state.transmissionRenderTarget[Q.id],Re=Q.viewport||v;ge.setSize(Re.z,Re.w);let ke=_.getRenderTarget();_.setRenderTarget(ge),_.getClearColor(H),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),Dt&&Ke.render(j);let We=_.toneMapping;_.toneMapping=ps;let lt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),m.setupLightsView(Q),ie===!0&&de.setGlobalState(_.clippingPlanes,Q),As(T,j,Q),P.updateMultisampleRenderTarget(ge),P.updateRenderTargetMipmap(ge),bt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let oe=0,Et=B.length;oe<Et;oe++){let Ht=B[oe],tn=Ht.object,Pt=Ht.geometry,dt=Ht.material,Fe=Ht.group;if(dt.side===on&&tn.layers.test(Q.layers)){let nn=dt.side;dt.side=Xn,dt.needsUpdate=!0,Rs(tn,j,Q,Pt,dt,Fe),dt.side=nn,dt.needsUpdate=!0,je=!0}}je===!0&&(P.updateMultisampleRenderTarget(ge),P.updateRenderTargetMipmap(ge))}_.setRenderTarget(ke),_.setClearColor(H,Y),lt!==void 0&&(Q.viewport=lt),_.toneMapping=We}function As(T,B,j){let Q=B.isScene===!0?B.overrideMaterial:null;for(let V=0,ge=T.length;V<ge;V++){let Re=T[V],ke=Re.object,We=Re.geometry,lt=Q===null?Re.material:Q,je=Re.group;ke.layers.test(j.layers)&&Rs(ke,B,j,We,lt,je)}}function Rs(T,B,j,Q,V,ge){T.onBeforeRender(_,B,j,Q,V,ge),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(_,B,j,Q,T,ge),V.transparent===!0&&V.side===on&&V.forceSinglePass===!1?(V.side=Xn,V.needsUpdate=!0,_.renderBufferDirect(j,B,Q,V,T,ge),V.side=Ai,V.needsUpdate=!0,_.renderBufferDirect(j,B,Q,V,T,ge),V.side=on):_.renderBufferDirect(j,B,Q,V,T,ge),T.onAfterRender(_,B,j,Q,V,ge)}function fn(T,B,j){B.isScene!==!0&&(B=vt);let Q=xe.get(T),V=m.state.lights,ge=m.state.shadowsArray,Re=V.state.version,ke=Ne.getParameters(T,V.state,ge,B,j),We=Ne.getProgramCacheKey(ke),lt=Q.programs;Q.environment=T.isMeshStandardMaterial?B.environment:null,Q.fog=B.fog,Q.envMap=(T.isMeshStandardMaterial?W:E).get(T.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,lt===void 0&&(T.addEventListener("dispose",He),lt=new Map,Q.programs=lt);let je=lt.get(We);if(je!==void 0){if(Q.currentProgram===je&&Q.lightsStateVersion===Re)return jr(T,ke),je}else ke.uniforms=Ne.getUniforms(T),T.onBeforeCompile(ke,_),je=Ne.acquireProgram(ke,We),lt.set(We,je),Q.uniforms=ke.uniforms;let oe=Q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(oe.clippingPlanes=de.uniform),jr(T,ke),Q.needsLights=ts(T),Q.lightsStateVersion=Re,Q.needsLights&&(oe.ambientLightColor.value=V.state.ambient,oe.lightProbe.value=V.state.probe,oe.directionalLights.value=V.state.directional,oe.directionalLightShadows.value=V.state.directionalShadow,oe.spotLights.value=V.state.spot,oe.spotLightShadows.value=V.state.spotShadow,oe.rectAreaLights.value=V.state.rectArea,oe.ltc_1.value=V.state.rectAreaLTC1,oe.ltc_2.value=V.state.rectAreaLTC2,oe.pointLights.value=V.state.point,oe.pointLightShadows.value=V.state.pointShadow,oe.hemisphereLights.value=V.state.hemi,oe.directionalShadowMap.value=V.state.directionalShadowMap,oe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,oe.spotShadowMap.value=V.state.spotShadowMap,oe.spotLightMatrix.value=V.state.spotLightMatrix,oe.spotLightMap.value=V.state.spotLightMap,oe.pointShadowMap.value=V.state.pointShadowMap,oe.pointShadowMatrix.value=V.state.pointShadowMatrix),Q.currentProgram=je,Q.uniformsList=null,je}function ii(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=Er.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function jr(T,B){let j=xe.get(T);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function Js(T,B,j,Q,V){B.isScene!==!0&&(B=vt),P.resetTextureUnits();let ge=B.fog,Re=Q.isMeshStandardMaterial?B.environment:null,ke=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:An,We=(Q.isMeshStandardMaterial?W:E).get(Q.envMap||Re),lt=Q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,je=!!j.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),oe=!!j.morphAttributes.position,Et=!!j.morphAttributes.normal,Ht=!!j.morphAttributes.color,tn=ps;Q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(tn=_.toneMapping);let Pt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,dt=Pt!==void 0?Pt.length:0,Fe=xe.get(Q),nn=m.state.lights;if(ie===!0&&(pe===!0||T!==J)){let In=T===J&&Q.id===k;de.setState(Q,T,In)}let Ut=!1;Q.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==nn.state.version||Fe.outputColorSpace!==ke||V.isBatchedMesh&&Fe.batching===!1||!V.isBatchedMesh&&Fe.batching===!0||V.isBatchedMesh&&Fe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Fe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Fe.instancing===!1||!V.isInstancedMesh&&Fe.instancing===!0||V.isSkinnedMesh&&Fe.skinning===!1||!V.isSkinnedMesh&&Fe.skinning===!0||V.isInstancedMesh&&Fe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Fe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Fe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Fe.instancingMorph===!1&&V.morphTexture!==null||Fe.envMap!==We||Q.fog===!0&&Fe.fog!==ge||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==de.numPlanes||Fe.numIntersection!==de.numIntersection)||Fe.vertexAlphas!==lt||Fe.vertexTangents!==je||Fe.morphTargets!==oe||Fe.morphNormals!==Et||Fe.morphColors!==Ht||Fe.toneMapping!==tn||Fe.morphTargetsCount!==dt)&&(Ut=!0):(Ut=!0,Fe.__version=Q.version);let bn=Fe.currentProgram;Ut===!0&&(bn=fn(Q,B,V));let Mi=!1,Rn=!1,qn=!1,sn=bn.getUniforms(),Bn=Fe.uniforms;if(rt.useProgram(bn.program)&&(Mi=!0,Rn=!0,qn=!0),Q.id!==k&&(k=Q.id,Rn=!0),Mi||J!==T){Je.reverseDepthBuffer?(Oe.copy(T.projectionMatrix),w0(Oe),T0(Oe),sn.setValue(N,"projectionMatrix",Oe)):sn.setValue(N,"projectionMatrix",T.projectionMatrix),sn.setValue(N,"viewMatrix",T.matrixWorldInverse);let In=sn.map.cameraPosition;In!==void 0&&In.setValue(N,ht.setFromMatrixPosition(T.matrixWorld)),Je.logarithmicDepthBuffer&&sn.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&sn.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),J!==T&&(J=T,Rn=!0,qn=!0)}if(V.isSkinnedMesh){sn.setOptional(N,V,"bindMatrix"),sn.setOptional(N,V,"bindMatrixInverse");let In=V.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),sn.setValue(N,"boneTexture",In.boneTexture,P))}V.isBatchedMesh&&(sn.setOptional(N,V,"batchingTexture"),sn.setValue(N,"batchingTexture",V._matricesTexture,P),sn.setOptional(N,V,"batchingIdTexture"),sn.setValue(N,"batchingIdTexture",V._indirectTexture,P),sn.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&sn.setValue(N,"batchingColorTexture",V._colorsTexture,P));let Mn=j.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&qe.update(V,j,bn),(Rn||Fe.receiveShadow!==V.receiveShadow)&&(Fe.receiveShadow=V.receiveShadow,sn.setValue(N,"receiveShadow",V.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Bn.envMap.value=We,Bn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&B.environment!==null&&(Bn.envMapIntensity.value=B.environmentIntensity),Rn&&(sn.setValue(N,"toneMappingExposure",_.toneMappingExposure),Fe.needsLights&&js(Bn,qn),ge&&Q.fog===!0&&me.refreshFogUniforms(Bn,ge),me.refreshMaterialUniforms(Bn,Q,le,F,m.state.transmissionRenderTarget[T.id]),Er.upload(N,ii(Fe),Bn,P)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Er.upload(N,ii(Fe),Bn,P),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&sn.setValue(N,"center",V.center),sn.setValue(N,"modelViewMatrix",V.modelViewMatrix),sn.setValue(N,"normalMatrix",V.normalMatrix),sn.setValue(N,"modelMatrix",V.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let In=Q.uniformsGroups;for(let Cs=0,Ha=In.length;Cs<Ha;Cs++){let Qr=In[Cs];z.update(Qr,bn),z.bind(Qr,bn)}}return bn}function js(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function ts(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,B,j){xe.get(T.texture).__webglTexture=B,xe.get(T.depthTexture).__webglTexture=j;let Q=xe.get(T);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=j===void 0,Q.__autoAllocateDepthBuffer||bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){let j=xe.get(T);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,j=0){R=T,D=B,A=j;let Q=!0,V=null,ge=!1,Re=!1;if(T){let We=xe.get(T);if(We.__useDefaultFramebuffer!==void 0)rt.bindFramebuffer(N.FRAMEBUFFER,null),Q=!1;else if(We.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(We.__hasExternalTextures)P.rebindTextures(T,xe.get(T.texture).__webglTexture,xe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let oe=T.depthTexture;if(We.__boundDepthTexture!==oe){if(oe!==null&&xe.has(oe)&&(T.width!==oe.image.width||T.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}let lt=T.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Re=!0);let je=xe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(je[B])?V=je[B][j]:V=je[B],ge=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?V=xe.get(T).__webglMultisampledFramebuffer:Array.isArray(je)?V=je[j]:V=je,v.copy(T.viewport),w.copy(T.scissor),O=T.scissorTest}else v.copy(Ce).multiplyScalar(le).floor(),w.copy(ve).multiplyScalar(le).floor(),O=yt;if(rt.bindFramebuffer(N.FRAMEBUFFER,V)&&Q&&rt.drawBuffers(T,V),rt.viewport(v),rt.scissor(w),rt.setScissorTest(O),ge){let We=xe.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,We.__webglTexture,j)}else if(Re){let We=xe.get(T.texture),lt=B||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,We.__webglTexture,j||0,lt)}k=-1},this.readRenderTargetPixels=function(T,B,j,Q,V,ge,Re){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=xe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(ke=ke[Re]),ke){rt.bindFramebuffer(N.FRAMEBUFFER,ke);try{let We=T.texture,lt=We.format,je=We.type;if(!Je.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Q&&j>=0&&j<=T.height-V&&N.readPixels(B,j,Q,V,Ye.convert(lt),Ye.convert(je),ge)}finally{let We=R!==null?xe.get(R).__webglFramebuffer:null;rt.bindFramebuffer(N.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(T,B,j,Q,V,ge,Re){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=xe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(ke=ke[Re]),ke){let We=T.texture,lt=We.format,je=We.type;if(!Je.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-Q&&j>=0&&j<=T.height-V){rt.bindFramebuffer(N.FRAMEBUFFER,ke);let oe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,oe),N.bufferData(N.PIXEL_PACK_BUFFER,ge.byteLength,N.STREAM_READ),N.readPixels(B,j,Q,V,Ye.convert(lt),Ye.convert(je),0);let Et=R!==null?xe.get(R).__webglFramebuffer:null;rt.bindFramebuffer(N.FRAMEBUFFER,Et);let Ht=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await E0(N,Ht,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,oe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ge),N.deleteBuffer(oe),N.deleteSync(Ht),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,j=0){T.isTexture!==!0&&(Do("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);let Q=Math.pow(2,-j),V=Math.floor(T.image.width*Q),ge=Math.floor(T.image.height*Q),Re=B!==null?B.x:0,ke=B!==null?B.y:0;P.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,j,0,0,Re,ke,V,ge),rt.unbindTexture()},this.copyTextureToTexture=function(T,B,j=null,Q=null,V=0){T.isTexture!==!0&&(Do("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,T=arguments[1],B=arguments[2],V=arguments[3]||0,j=null);let ge,Re,ke,We,lt,je;j!==null?(ge=j.max.x-j.min.x,Re=j.max.y-j.min.y,ke=j.min.x,We=j.min.y):(ge=T.image.width,Re=T.image.height,ke=0,We=0),Q!==null?(lt=Q.x,je=Q.y):(lt=0,je=0);let oe=Ye.convert(B.format),Et=Ye.convert(B.type);P.setTexture2D(B,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);let Ht=N.getParameter(N.UNPACK_ROW_LENGTH),tn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Pt=N.getParameter(N.UNPACK_SKIP_PIXELS),dt=N.getParameter(N.UNPACK_SKIP_ROWS),Fe=N.getParameter(N.UNPACK_SKIP_IMAGES),nn=T.isCompressedTexture?T.mipmaps[V]:T.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,nn.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,nn.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ke),N.pixelStorei(N.UNPACK_SKIP_ROWS,We),T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,V,lt,je,ge,Re,oe,Et,nn.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,V,lt,je,nn.width,nn.height,oe,nn.data):N.texSubImage2D(N.TEXTURE_2D,V,lt,je,ge,Re,oe,Et,nn),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ht),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,tn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Pt),N.pixelStorei(N.UNPACK_SKIP_ROWS,dt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Fe),V===0&&B.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),rt.unbindTexture()},this.copyTextureToTexture3D=function(T,B,j=null,Q=null,V=0){T.isTexture!==!0&&(Do("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Q=arguments[1]||null,T=arguments[2],B=arguments[3],V=arguments[4]||0);let ge,Re,ke,We,lt,je,oe,Et,Ht,tn=T.isCompressedTexture?T.mipmaps[V]:T.image;j!==null?(ge=j.max.x-j.min.x,Re=j.max.y-j.min.y,ke=j.max.z-j.min.z,We=j.min.x,lt=j.min.y,je=j.min.z):(ge=tn.width,Re=tn.height,ke=tn.depth,We=0,lt=0,je=0),Q!==null?(oe=Q.x,Et=Q.y,Ht=Q.z):(oe=0,Et=0,Ht=0);let Pt=Ye.convert(B.format),dt=Ye.convert(B.type),Fe;if(B.isData3DTexture)P.setTexture3D(B,0),Fe=N.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)P.setTexture2DArray(B,0),Fe=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);let nn=N.getParameter(N.UNPACK_ROW_LENGTH),Ut=N.getParameter(N.UNPACK_IMAGE_HEIGHT),bn=N.getParameter(N.UNPACK_SKIP_PIXELS),Mi=N.getParameter(N.UNPACK_SKIP_ROWS),Rn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,tn.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,tn.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,We),N.pixelStorei(N.UNPACK_SKIP_ROWS,lt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,je),T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Fe,V,oe,Et,Ht,ge,Re,ke,Pt,dt,tn.data):B.isCompressedArrayTexture?N.compressedTexSubImage3D(Fe,V,oe,Et,Ht,ge,Re,ke,Pt,tn.data):N.texSubImage3D(Fe,V,oe,Et,Ht,ge,Re,ke,Pt,dt,tn),N.pixelStorei(N.UNPACK_ROW_LENGTH,nn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ut),N.pixelStorei(N.UNPACK_SKIP_PIXELS,bn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Mi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Rn),V===0&&B.generateMipmaps&&N.generateMipmap(Fe),rt.unbindTexture()},this.initRenderTarget=function(T){xe.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),rt.unbindTexture()},this.resetState=function(){D=0,A=0,R=null,rt.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===lu?"display-p3":"srgb",t.unpackColorSpace=Vt.workingColorSpace===_l?"display-p3":"srgb"}};var qo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new et(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fr=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ma=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xh,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},On=new I,Sa=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=xi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),s=Yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),s=Yt(s,this.array),r=Yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Ff=new I,Of=new Wt,zf=new Wt,by=new I,Bf=new pt,_o=new I,wc=new jn,Hf=new pt,Tc=new Nr,Ko=class extends Ee{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gd,this.bindMatrix=new pt,this.bindMatrixInverse=new pt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_o),this.boundingBox.expandByPoint(_o)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_o),this.boundingSphere.expandByPoint(_o)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wc.copy(this.boundingSphere),wc.applyMatrix4(s),e.ray.intersectsSphere(wc)!==!1&&(Hf.copy(s).invert(),Tc.copy(e.ray).applyMatrix4(Hf),!(this.boundingBox!==null&&Tc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Tc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Wt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Km?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Of.fromBufferAttribute(s.attributes.skinIndex,e),zf.fromBufferAttribute(s.attributes.skinWeight,e),Ff.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=zf.getComponent(r);if(a!==0){let o=Of.getComponent(r);Bf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(by.copy(Ff).applyMatrix4(Bf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ea=class extends cn{constructor(){super(),this.isBone=!0,this.type="Bone"}},Or=class extends Tn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Dn,h=Dn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Vf=new pt,My=new pt,Zo=class i{constructor(e=[],t=[]){this.uuid=yi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new pt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new pt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:My;Vf.multiplyMatrices(o,t[r]),Vf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Or(t,e,e,Wn,_i);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Ea),this.bones.push(a),this.boneInverses.push(new pt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Ws=class extends Ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},_r=new pt,Gf=new pt,yo=[],Wf=new Yn,Sy=new pt,la=new Ee,ca=new jn,zr=class extends Ee{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ws(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Sy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_r),Wf.copy(e.boundingBox).applyMatrix4(_r),this.boundingBox.union(Wf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_r),ca.copy(e.boundingSphere).applyMatrix4(_r),this.boundingSphere.union(ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(la.geometry=this.geometry,la.material=this.material,la.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ca.copy(this.boundingSphere),ca.applyMatrix4(n),e.ray.intersectsSphere(ca)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_r),Gf.multiplyMatrices(n,_r),la.matrixWorld=Gf,la.raycast(e,yo);for(let a=0,o=yo.length;a<o;a++){let l=yo[a];l.instanceId=r,l.object=this,t.push(l)}yo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ws(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Or(new Float32Array(s*this.count),s,this.count,su,_i));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ri=class extends Qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Jo=new I,jo=new I,Xf=new pt,ha=new Nr,vo=new jn,Ac=new I,Yf=new I,Xi=class extends cn{constructor(e=new $t,t=new ri){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Jo.fromBufferAttribute(t,s-1),jo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Jo.distanceTo(jo);e.setAttribute("lineDistance",new kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(s),vo.radius+=r,e.ray.intersectsSphere(vo)===!1)return;Xf.copy(s).invert(),ha.copy(e.ray).applyMatrix4(Xf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),b=h.getX(x+1),_=bo(this,e,ha,l,p,b);_&&t.push(_)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=bo(this,e,ha,l,x,m);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=bo(this,e,ha,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=bo(this,e,ha,l,g-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function bo(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(Jo.fromBufferAttribute(a,s),jo.fromBufferAttribute(a,r),t.distanceSqToSegment(Jo,jo,Ac,Yf)>n)return;Ac.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ac);if(!(l<e.near||l>e.far))return{distance:l,point:Yf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var $f=new I,qf=new I,Yi=class extends Xi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)$f.fromBufferAttribute(t,s),qf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+$f.distanceTo(qf);e.setAttribute("lineDistance",new kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Qo=class extends Xi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},wa=class extends Qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Kf=new pt,Dh=new Nr,Mo=new jn,So=new I,Xs=class extends cn{constructor(e=new $t,t=new wa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(s),Mo.radius+=r,e.ray.intersectsSphere(Mo)===!1)return;Kf.copy(s).invert(),Dh.copy(e.ray).applyMatrix4(Kf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);So.fromBufferAttribute(u,m),Zf(So,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)So.fromBufferAttribute(u,g),Zf(So,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zf(i,e,t,n,s,r,a){let o=Dh.distanceSqToPoint(i);if(o<t){let l=new I;Dh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var el=class extends Tn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new De:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new I,s=[],r=[],a=[],o=new I,l=new pt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(xn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(xn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ta=class extends ai{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new De){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Uh=class extends Ta{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function uu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Eo=new I,Rc=new uu,Cc=new uu,Pc=new uu,kh=class extends ai{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Eo.subVectors(s[0],s[1]).add(s[0]),c=Eo);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Eo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Eo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Rc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),Cc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Pc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Rc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Cc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Pc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Rc.calc(l),Cc.calc(l),Pc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Jf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Ey(i,e){let t=1-i;return t*t*e}function wy(i,e){return 2*(1-i)*i*e}function Ty(i,e){return i*i*e}function ga(i,e,t,n){return Ey(i,e)+wy(i,t)+Ty(i,n)}function Ay(i,e){let t=1-i;return t*t*t*e}function Ry(i,e){let t=1-i;return 3*t*t*i*e}function Cy(i,e){return 3*(1-i)*i*i*e}function Py(i,e){return i*i*i*e}function xa(i,e,t,n,s){return Ay(i,e)+Ry(i,t)+Cy(i,n)+Py(i,s)}var tl=class extends ai{constructor(e=new De,t=new De,n=new De,s=new De){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new De){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xa(e,s.x,r.x,a.x,o.x),xa(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fh=class extends ai{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xa(e,s.x,r.x,a.x,o.x),xa(e,s.y,r.y,a.y,o.y),xa(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nl=class extends ai{constructor(e=new De,t=new De){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new De){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new De){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oh=class extends ai{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},il=class extends ai{constructor(e=new De,t=new De,n=new De){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new De){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ga(e,s.x,r.x,a.x),ga(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zh=class extends ai{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ga(e,s.x,r.x,a.x),ga(e,s.y,r.y,a.y),ga(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sl=class extends ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new De){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Jf(o,l.x,c.x,h.x,u.x),Jf(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new De().fromArray(s))}return this}},jf=Object.freeze({__proto__:null,ArcCurve:Uh,CatmullRomCurve3:kh,CubicBezierCurve:tl,CubicBezierCurve3:Fh,EllipseCurve:Ta,LineCurve:nl,LineCurve3:Oh,QuadraticBezierCurve:il,QuadraticBezierCurve3:zh,SplineCurve:sl}),Bh=class extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jf[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new jf[s.type]().fromJSON(s))}return this}},Hh=class extends Bh{constructor(e){super(),this.type="Path",this.currentPoint=new De,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new nl(this.currentPoint.clone(),new De(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new il(this.currentPoint.clone(),new De(e,t),new De(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new tl(this.currentPoint.clone(),new De(e,t),new De(n,s),new De(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new sl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Ta(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Aa=class i extends $t{constructor(e=[new De(0,-.5),new De(.5,0),new De(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=xn(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new I,d=new De,f=new I,g=new I,x=new I,m=0,p=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let b=0;b<=t;b++){let _=n+b*h*s,y=Math.sin(_),D=Math.cos(_);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*y,u.y=e[A].y,u.z=e[A].x*D,a.push(u.x,u.y,u.z),d.x=b/t,d.y=A/(e.length-1),o.push(d.x,d.y);let R=l[3*A+0]*y,k=l[3*A+1],J=l[3*A+0]*D;c.push(R,k,J)}}for(let b=0;b<t;b++)for(let _=0;_<e.length-1;_++){let y=_+b*e.length,D=y,A=y+e.length,R=y+e.length+1,k=y+1;r.push(D,A,k),r.push(R,k,A)}this.setIndex(r),this.setAttribute("position",new kt(a,3)),this.setAttribute("uv",new kt(o,2)),this.setAttribute("normal",new kt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},rl=class i extends Aa{constructor(e=1,t=1,n=4,s=8){let r=new Hh;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}};var vn=class i extends $t{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;b(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new kt(u,3)),this.setAttribute("normal",new kt(d,3)),this.setAttribute("uv",new kt(f,2));function b(){let y=new I,D=new I,A=0,R=(t-e)/n;for(let k=0;k<=r;k++){let J=[],v=k/r,w=v*(t-e)+e;for(let O=0;O<=s;O++){let H=O/s,Y=H*l+o,se=Math.sin(Y),F=Math.cos(Y);D.x=w*se,D.y=-v*n+m,D.z=w*F,u.push(D.x,D.y,D.z),y.set(se,R,F).normalize(),d.push(y.x,y.y,y.z),f.push(H,1-v),J.push(g++)}x.push(J)}for(let k=0;k<s;k++)for(let J=0;J<r;J++){let v=x[J][k],w=x[J+1][k],O=x[J+1][k+1],H=x[J][k+1];e>0&&(h.push(v,w,H),A+=3),t>0&&(h.push(w,O,H),A+=3)}c.addGroup(p,A,0),p+=A}function _(y){let D=g,A=new De,R=new I,k=0,J=y===!0?e:t,v=y===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;let w=g;for(let O=0;O<=s;O++){let Y=O/s*l+o,se=Math.cos(Y),F=Math.sin(Y);R.x=J*F,R.y=m*v,R.z=J*se,u.push(R.x,R.y,R.z),d.push(0,v,0),A.x=se*.5+.5,A.y=F*.5*v+.5,f.push(A.x,A.y),g++}for(let O=0;O<s;O++){let H=D+O,Y=w+O;y===!0?h.push(Y,Y+1,H):h.push(Y+1,Y,H),k+=3}c.addGroup(p,k,y===!0?1:2),p+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},al=class i extends vn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Vh=class i extends $t{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new kt(r,3)),this.setAttribute("normal",new kt(r.slice(),3)),this.setAttribute("uv",new kt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let _=new I,y=new I,D=new I;for(let A=0;A<t.length;A+=3)f(t[A+0],_),f(t[A+1],y),f(t[A+2],D),l(_,y,D,b)}function l(b,_,y,D){let A=D+1,R=[];for(let k=0;k<=A;k++){R[k]=[];let J=b.clone().lerp(y,k/A),v=_.clone().lerp(y,k/A),w=A-k;for(let O=0;O<=w;O++)O===0&&k===A?R[k][O]=J:R[k][O]=J.clone().lerp(v,O/w)}for(let k=0;k<A;k++)for(let J=0;J<2*(A-k)-1;J++){let v=Math.floor(J/2);J%2===0?(d(R[k][v+1]),d(R[k+1][v]),d(R[k][v])):(d(R[k][v+1]),d(R[k+1][v+1]),d(R[k+1][v]))}}function c(b){let _=new I;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(b),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let b=new I;for(let _=0;_<r.length;_+=3){b.x=r[_+0],b.y=r[_+1],b.z=r[_+2];let y=m(b)/2/Math.PI+.5,D=p(b)/Math.PI+.5;a.push(y,1-D)}g(),u()}function u(){for(let b=0;b<a.length;b+=6){let _=a[b+0],y=a[b+2],D=a[b+4],A=Math.max(_,y,D),R=Math.min(_,y,D);A>.9&&R<.1&&(_<.2&&(a[b+0]+=1),y<.2&&(a[b+2]+=1),D<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,_){let y=b*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function g(){let b=new I,_=new I,y=new I,D=new I,A=new De,R=new De,k=new De;for(let J=0,v=0;J<r.length;J+=9,v+=6){b.set(r[J+0],r[J+1],r[J+2]),_.set(r[J+3],r[J+4],r[J+5]),y.set(r[J+6],r[J+7],r[J+8]),A.set(a[v+0],a[v+1]),R.set(a[v+2],a[v+3]),k.set(a[v+4],a[v+5]),D.copy(b).add(_).add(y).divideScalar(3);let w=m(D);x(A,v+0,b,w),x(R,v+2,_,w),x(k,v+4,y,w)}}function x(b,_,y,D){D<0&&b.x===1&&(a[_]=b.x-1),y.x===0&&y.z===0&&(a[_]=D/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var wo=new I,To=new I,Ic=new I,Ao=new us,Ra=class extends $t{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Mr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:m,c:p}=Ao;if(x.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Ao.getNormal(Ic),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let b=0;b<3;b++){let _=(b+1)%3,y=u[b],D=u[_],A=Ao[h[b]],R=Ao[h[_]],k=`${y}_${D}`,J=`${D}_${y}`;J in d&&d[J]?(Ic.dot(d[J].normal)<=r&&(f.push(A.x,A.y,A.z),f.push(R.x,R.y,R.z)),d[J]=null):k in d||(d[k]={index0:c[b],index1:c[_],normal:Ic.clone()})}}for(let g in d)if(d[g]){let{index0:x,index1:m}=d[g];wo.fromBufferAttribute(o,x),To.fromBufferAttribute(o,m),f.push(wo.x,wo.y,wo.z),f.push(To.x,To.y,To.z)}this.setAttribute("position",new kt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var ol=class i extends Vh{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},$i=class i extends $t{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new I,g=new De;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let b=p+m,_=b,y=b+n+1,D=b+n+2,A=b+1;o.push(_,y,A),o.push(y,D,A)}}this.setIndex(o),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(c,3)),this.setAttribute("uv",new kt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Pn=class i extends $t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new I,d=new I,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let b=[],_=p/n,y=0;p===0&&a===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let D=0;D<=t;D++){let A=D/t;u.x=-e*Math.cos(s+A*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(s+A*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(A+y,1-_),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){let _=h[p][b+1],y=h[p][b],D=h[p+1][b],A=h[p+1][b+1];(p!==0||a>0)&&f.push(_,y,A),(p!==n-1||l<Math.PI)&&f.push(y,D,A)}this.setIndex(f),this.setAttribute("position",new kt(g,3)),this.setAttribute("normal",new kt(x,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ll=class i extends $t{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,b=(s+1)*f+g;a.push(x,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new kt(o,3)),this.setAttribute("normal",new kt(l,3)),this.setAttribute("uv",new kt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Zt=class extends Qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xp,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ti=class extends Zt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Ro(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Iy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ly(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Qf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Ap(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var xs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gh=class extends xs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wd,endingEnd:Wd}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xd:r=e,o=2*t-n;break;case Yd:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xd:a=e,l=2*n-t;break;case Yd:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,b=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let D=0;D!==o;++D)r[D]=p*a[h+D]+b*a[c+D]+_*a[l+D]+y*a[u+D];return r}},Wh=class extends xs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Xh=class extends xs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},oi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ro(t,this.TimeBufferType),this.values=Ro(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ro(e.times,Array),values:Ro(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Pr:t=this.InterpolantFactoryMethodDiscrete;break;case Ir:t=this.InterpolantFactoryMethodLinear;break;case Jl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return Jl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Iy(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Jl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=Ir;var _s=class extends oi{constructor(e,t,n){super(e,t,n)}};_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=Pr;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends oi{};cl.prototype.ValueTypeName="color";var qi=class extends oi{};qi.prototype.ValueTypeName="number";var Yh=class extends xs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)vi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ki=class extends oi{InterpolantFactoryMethodLinear(e){return new Yh(this.times,this.values,this.getValueSize(),e)}};Ki.prototype.ValueTypeName="quaternion";Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var ys=class extends oi{constructor(e,t,n){super(e,t,n)}};ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=Pr;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends oi{};Zi.prototype.ValueTypeName="vector";var hl=class{constructor(e="",t=-1,n=[],s=Zm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=yi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Dy(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(oi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Ly(l);l=Qf(l,1,h),c=Qf(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new qi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,x){if(f.length!==0){let m=[],p=[];Ap(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let b=0;b!==d[g].morphTargets.length;++b){let _=d[g];m.push(_.time),p.push(_.morphTarget===x?1:0)}s.push(new qi(".morphTargetInfluence["+x+"]",m,p))}l=f.length*a}else{let f=".bones["+t[u].name+"]";n(Zi,f+".position",d,"pos",s),n(Ki,f+".quaternion",d,"rot",s),n(Zi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Ny(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qi;case"vector":case"vector2":case"vector3":case"vector4":return Zi;case"color":return cl;case"quaternion":return Ki;case"bool":case"boolean":return _s;case"string":return ys}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Dy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Ny(i.type);if(i.times===void 0){let t=[],n=[];Ap(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var ds={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},$h=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Uy=new $h,Ji=class{constructor(e){this.manager=e!==void 0?e:Uy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ji.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oi={},qh=class extends Error{constructor(e,t){super(e),this.response=t}},Ca=class extends Ji{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ds.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Oi[e]!==void 0){Oi[e].push({onLoad:t,onProgress:n,onError:s});return}Oi[e]=[],Oi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Oi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){b();function b(){u.read().then(({done:_,value:y})=>{if(_)p.close();else{x+=y.byteLength;let D=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let A=0,R=h.length;A<R;A++){let k=h[A];k.onProgress&&k.onProgress(D)}p.enqueue(y),b()}},_=>{p.error(_)})}}});return new Response(m)}else throw new qh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ds.add(e,c);let h=Oi[e];delete Oi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Oi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Oi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Kh=class extends Ji{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ds.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=va("img");function l(){h(),ds.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Br=class extends Ji{constructor(e){super(e)}load(e,t,n,s){let r=new Tn,a=new Kh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Hr=class extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ul=class extends Hr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Lc=new pt,ep=new I,tp=new I,Pa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ba,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ep.setFromMatrixPosition(e.matrixWorld),t.position.copy(ep),tp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tp),t.updateMatrixWorld(),Lc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zh=class extends Pa{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Lr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},dl=class extends Hr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Zh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},np=new pt,ua=new I,Nc=new I,Jh=class extends Pa{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new Wt(2,1,1,1),new Wt(0,1,1,1),new Wt(3,1,1,1),new Wt(1,1,1,1),new Wt(3,0,1,1),new Wt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ua.setFromMatrixPosition(e.matrixWorld),n.position.copy(ua),Nc.copy(n.position),Nc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Nc),n.updateMatrixWorld(),s.makeTranslation(-ua.x,-ua.y,-ua.z),np.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(np)}},Vr=class extends Hr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},jh=class extends Pa{constructor(){super(new Ur(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gr=class extends Hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new jh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var vs=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var fl=class extends Ji{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ds.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ds.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ds.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ds.add(e,l),r.manager.itemStart(e)}};var pl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ip(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=ip();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function ip(){return performance.now()}var du="\\[\\]\\.:\\/",ky=new RegExp("["+du+"]","g"),fu="[^"+du+"]",Fy="[^"+du.replace("\\.","")+"]",Oy=/((?:WC+[\/:])*)/.source.replace("WC",fu),zy=/(WCOD+)?/.source.replace("WCOD",Fy),By=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fu),Hy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fu),Vy=new RegExp("^"+Oy+zy+By+Hy+"$"),Gy=["material","materials","bones","map"],Qh=class{constructor(e,t,n){let s=n||en.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},en=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ky,"")}static parseTrackName(e){let t=Vy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};en.Composite=Qh;en.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};en.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};en.prototype.GetterByBindingType=[en.prototype._getValue_direct,en.prototype._getValue_array,en.prototype._getValue_arrayElement,en.prototype._getValue_toArray];en.prototype.SetterByBindingTypeAndVersioning=[[en.prototype._setValue_direct,en.prototype._setValue_direct_setNeedsUpdate,en.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[en.prototype._setValue_array,en.prototype._setValue_array_setNeedsUpdate,en.prototype._setValue_array_setMatrixWorldNeedsUpdate],[en.prototype._setValue_arrayElement,en.prototype._setValue_arrayElement_setNeedsUpdate,en.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[en.prototype._setValue_fromArray,en.prototype._setValue_fromArray_setNeedsUpdate,en.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wv=new Float32Array(1);var ml=class extends Yi{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new $t;r.setIndex(new Ct(n,1)),r.setAttribute("position",new kt(s,3)),super(r,new ri({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var $n={hull:{de:"Hallenh\xFClle / Tragwerk",en:"Hall envelope / structure",rho:0,c:"#7d8799"},concrete:{de:"Beton",en:"Concrete",rho:2400,c:"#b8bcc4"},steel:{de:"Stahl",en:"Steel",rho:7850,c:"#4da6ff"},brick:{de:"Ziegelbruch (Sch\xFCttgut)",en:"Brick rubble (bulk)",rho:1400,c:"#c99a5b"},hazard:{de:"Schadstoff (Asbest)",en:"Hazardous (asbestos)",rho:1e3,c:"#ff5a5f"},wood:{de:"Holz",en:"Wood",rho:600,c:"#e0b07a"},soil:{de:"Sch\xFCttgut (Stein, Sand)",en:"Bulk material (stone, sand)",rho:1700,c:"#a8b06a"},masonry:{de:"Mauerwerk / Trockenbau",en:"Masonry / drywall",rho:1200,c:"#c8d2e0"},mixed:{de:"Sonstiges / Technik",en:"Other / equipment",rho:0,c:"#9b8cff"},none:{de:"Personen & Fahrzeuge",en:"People & vehicles",rho:0,c:"#5fd38d"}};var ji=[{id:"seg",st:"uc1",key:"G",icon:"\u25E7",t:Me("Semantische Segmentierung","Semantic segmentation"),d:Me("Die ganze Szene in Umgebung \xB7 Boden \xB7 Ziel \u2013 Ziel sind alle wichtigen Objekte (Klassen wie in Artefakt A1).","The whole scene as environment \xB7 floor \xB7 target \u2013 targets are all relevant objects (classes as in artefact A1).")},{id:"search",st:"uc2",key:"Z",icon:"\u2315",t:Me("Zero-Shot-Suche","Zero-shot search"),d:Me("Textprompt \u2192 Objekt-Cluster mit Bounding Box, ohne Training \u2013 wie GroundingDINO \u2192 SAM (Artefakt A3).","Text prompt \u2192 object clusters with bounding boxes, no training \u2013 like GroundingDINO \u2192 SAM (artefact A3).")},{id:"heat",st:"uc3",key:"H",icon:"\u25A6",t:Me("Merkmals-Heatmap","Feature heatmap"),d:Me("Die 16 Eingangsmerkmale des RandLA-Net (k = 30) auf jedem Punkt \u2013 plus Ebenheit des Hallenbodens.","The 16 RandLA-Net input features (k = 30) on every point \u2013 plus hall floor flatness.")},{id:"xray",st:"uc4",key:"X",icon:"\u29C9",t:Me("Soll-Ist-Overlay","As-planned vs. as-built"),d:Me("Das Planungsmodell liegt \xFCber dem Scan: gr\xFCn verifiziert, orange abweichend, rot geplant aber nicht im Scan \u2013 am ReStage-Demonstrator mit der echten Objektverifikation (Artefakt A2).","The planning model sits on top of the scan: green verified, orange deviating, red planned but not in the scan \u2013 on the ReStage demonstrator with the real object verification (artefact A2).")},{id:"mesh",st:"uc5",key:"M",icon:"\u25B3",t:Me("Scan-to-Mesh & Modell","Scan-to-mesh & model"),d:Me("Live-Oberfl\xE4chen (Marching Cubes) mit einstellbarer Feinheit, objektweise \u2013 oder das nachmodellierte Modell.","Live surfaces (marching cubes) with adjustable detail, per object \u2013 or the reconstructed model.")},{id:"cut",st:"uc5",key:"5",icon:"\u229F",t:Me("Schnittebene","Section plane"),d:Me("Horizontal-, L\xE4ngs- oder Querschnitt durch Punktwolke, Mesh und Modell \u2013 die Schnittkante leuchtet, wie in der Planungssoftware.","Horizontal, longitudinal or cross section through point cloud, mesh and model \u2013 the cut edge lights up, as in planning software.")},{id:"mat",st:"uc6",key:"V",icon:"\u2B22",t:Me("Materialkataster","Material register"),d:Me("Jeder Punkt nach Material, Mengen und Massen aus dem Modell \u2013 Grundlage f\xFCr R\xFCckbau und Kreislauf.","Every point by material, quantities and masses from the model \u2013 the basis for deconstruction and circularity.")},{id:"net",st:"uc7",icon:"\u2316",passive:!0,t:Me("Scanner-Netzwerk","Scanner network"),d:Me("Station\xE4re Laserscanner: bis zu 6 statt 3 gleichzeitig \u2013 wie das LiDAR-Netz der Smart City.","Stationary laser scanners: up to 6 instead of 3 at once \u2013 like the smart-city LiDAR network.")},{id:"nbv",st:"uc7",key:"Y",icon:"\u233E",t:Me("Scan-Planer (Next Best View)","Scan planner (next best view)"),d:Me("Schl\xE4gt die n\xE4chsten TLS-Standpunkte vor: gr\xF6\xDFter erwarteter Neuzuwachs bei wenig Verdeckung \u2013 weniger Standpunkte, weniger Akku.","Suggests the next TLS positions: largest expected gain with little occlusion \u2013 fewer set-ups, less battery.")},{id:"therm",st:"uc8",key:"I",icon:"\u2668",t:Me("Thermalkamera","Thermal camera"),d:Me("W\xE4rmebild wie im WAAM-Monitoring: frische Schichten gl\xFChen, Anlagen und Personen sind warm.","Thermal view as in WAAM monitoring: fresh layers glow, machines and people are warm.")},{id:"measure",st:"uc9",key:"N",icon:"\u27F7",t:Me("Messwerkzeug","Measuring tool"),d:Me("Zwei Punkte anklicken \u2192 Abstand in mm, direkt in der Punktwolke.","Click two points \u2192 distance in mm, directly in the point cloud.")},{id:"ask",st:"docs",key:"B",icon:"\u275D",t:Me("Frag das Lab","Ask the lab"),d:Me("Fragen zum Scan \u2013 Antworten aus Scan, Segmentierung und Modell, immer mit Quelle (regelbasiert, offline).","Questions about the scan \u2013 answers from scan, segmentation and model, always with a source (rule-based, offline).")},{id:"auto",st:"talks",key:"O",icon:"\u2708",t:Me("Autopilot","Autopilot"),d:Me("Pr\xE4sentationsmodus: Die Drohne fliegt, scannt und l\xE4dt selbst und zeigt jede Station.","Presentation mode: the drone flies, scans and charges by itself and presents every station.")},{id:"range",st:"profile",icon:"\u21F2",passive:!0,t:Me("Reichweiten-Upgrade","Range upgrade"),d:Me("+50 % Scanreichweite f\xFCr alle Technologien.","+50 % scanning range for every technology.")},{id:"icp",st:"bonus",key:"R",icon:"\u229B",t:Me("Registrierung (ICP)","Registration (ICP)"),d:Me("SLAM-Drift beseitigen: Scans per ICP auf die Zielmarken registrieren (Artefakt A2).","Remove SLAM drift: register scans to the targets via ICP (artefact A2).")}],Rp=[{id:"labels",key:"L",icon:"\u{1F3F7}",t:Me("Labels","Labels")},{id:"plan",key:"K",icon:"\u25A4",t:Me("Grundriss","Floor plan")},{id:"proj",key:"J",icon:"\u25EB",t:Me("Projektionen","Projections")},{id:"pano",key:"U",icon:"\u25CE",t:Me("360\xB0-Panoramen","360\xB0 panoramas")}],pu=[{id:"drone",key:"1",icon:"\u2723",t:Me("Drohne \xB7 UAV-LiDAR","Drone \xB7 UAV LiDAR"),d:Me("Aus der Luft, gro\xDFfl\xE4chig. H\xF6her fliegen = breiterer Scan. Akku h\xE4lt nicht ewig.","From above, large areas. Fly higher = wider scan. The battery does not last forever."),dt:Me("Joystick links fliegen, \u2912 \u2913 H\xF6he, ein Finger dreht die Ansicht, zwei Finger zoomen.","Left joystick flies, \u2912 \u2913 altitude, one finger turns the view, two fingers zoom.")},{id:"handheld",key:"2",icon:"\u25C9",t:Me("Handheld \xB7 SLAM","Handheld \xB7 SLAM"),d:Me("Ego-Perspektive am Boden. Leertaste halten = scannen, wohin du schaust.","First person on the ground. Hold space = scan where you look."),dt:Me("Ego-Perspektive. Joystick gehen, Finger umsehen, \u25CF halten = scannen, wohin du schaust.","First person. Joystick walks, finger looks around, hold \u25CF = scan where you look.")},{id:"tls",key:"3",icon:"\u2295",t:Me("Station\xE4r \xB7 TLS","Stationary \xB7 TLS"),d:Me("Scanner aufstellen (P), dann alle gleichzeitig scannen (Leertaste) \u2013 mit echten Scan-Schatten und 360\xB0-Panorama.","Set up scanners (P), then scan with all at once (space) \u2013 with real scan shadows and 360\xB0 panoramas."),dt:Me("\u2295 Scanner aufstellen, \u25B6 alle gleichzeitig scannen \u2013 mit echten Scan-Schatten und 360\xB0-Panorama.","\u2295 set up scanners, \u25B6 scan with all at once \u2013 with real scan shadows and 360\xB0 panoramas.")}],bl=[{k:"x",t:Me("Koordinate x","coordinate x")},{k:"y",t:Me("Koordinate y (H\xF6he)","coordinate y (height)")},{k:"z",t:Me("Koordinate z","coordinate z")},{k:"nx",t:Me("Normale x","normal x")},{k:"ny",t:Me("Normale y (vertikal)","normal y (vertical)")},{k:"nz",t:Me("Normale z","normal z")},{k:"planarity",t:Me("Planarit\xE4t (\u03BB\u2082\u2212\u03BB\u2083)/\u03BB\u2081 \u2013 Fl\xE4chen","planarity (\u03BB\u2082\u2212\u03BB\u2083)/\u03BB\u2081 \u2013 surfaces")},{k:"density",t:Me("Punktdichte im mittleren Radius","point density in mean radius")},{k:"anisotropy",t:Me("Anisotropie (\u03BB\u2081\u2212\u03BB\u2083)/\u03BB\u2081","anisotropy (\u03BB\u2081\u2212\u03BB\u2083)/\u03BB\u2081")},{k:"sphericity",t:Me("Sph\xE4rizit\xE4t \u03BB\u2083/\u03BB\u2081 \u2013 Volumen, Streuung","sphericity \u03BB\u2083/\u03BB\u2081 \u2013 volume, scatter")},{k:"curvature",t:Me("Kr\xFCmmung \u03BB\u2083/\u03A3\u03BB \u2013 Kanten","curvature \u03BB\u2083/\u03A3\u03BB \u2013 edges")},{k:"linearity",t:Me("Linearit\xE4t (\u03BB\u2081\u2212\u03BB\u2082)/\u03BB\u2081 \u2013 St\xE4be, Kanten","linearity (\u03BB\u2081\u2212\u03BB\u2082)/\u03BB\u2081 \u2013 bars, edges")},{k:"omnivariance",t:Me("Omnivarianz \u221B(\u03BB\u2081\u03BB\u2082\u03BB\u2083)","omnivariance \u221B(\u03BB\u2081\u03BB\u2082\u03BB\u2083)")},{k:"eigenentropy",t:Me("Eigenentropie \u2212\u03A3\u03BB\xB7ln \u03BB","eigenentropy \u2212\u03A3\u03BB\xB7ln \u03BB")},{k:"eigen_sum",t:Me("Eigenwertsumme \u03A3\u03BB","sum of eigenvalues \u03A3\u03BB")},{k:"gravity_dist",t:Me("Abstand zum Schwerpunkt dichter Bereiche","distance to centre of dense regions")},{k:"flatness",t:Me("Ebenheit Hallenboden \xB14 cm (Ausgleichsebene)","hall floor flatness \xB14 cm (best-fit plane)")}],Ml={auto:["fahrzeug","vehicle"],car:["fahrzeug","vehicle"],pkw:["fahrzeug"],mensch:["person","people"],menschen:["person","people"],human:["person","people"],personen:["person"],people:["person"],fahrrad:["radfahrer","cyclist"],bike:["radfahrer","cyclist"],stahl:["stahl","steel","tr\xE4ger","beam","st\xFCtze","binder"],steel:["stahl","steel","beam","column","truss"],bewehrung:["stab","bar"],rebar:["stab","bar"],maschine:["anlage","line"],machine:["anlage","line"],m\u00F6bel:["tisch","stuhl","furniture"],stuhl:["stuhl","chair"],chair:["chair"],tisch:["tisch","table"],roboter:["wand","wall"],drucker:["wand","wall"],waam:["wand","wall"],asbest:["asbest","asbestos","big bag"],schadstoff:["asbest","asbestos"],sch\u00FCttgut:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],schuettgut:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],haufen:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],sand:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],sandhaufen:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],steinhaufen:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],kies:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],schotter:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],schutt:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],bauschutt:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],erde:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],pile:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],bulk:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],rubble:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],gravel:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],stones:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],steine:["sch\xFCttgut","steinhaufen","ziegelbruch","bulk","stone pile","brick rubble"],dokument:["lieferschein","werkszeugnis","gutachten","dokumente"],pdf:["dokumente","documents"],scanner:["laserscanner","laser scanner"],kugel:["zielkugel"],target:["zielkugel","target"]};var Wy=i=>[parseInt(i.slice(1,3),16)/255,parseInt(i.slice(3,5),16)/255,parseInt(i.slice(5,7),16)/255],Ot=(i,e,t,n,s)=>({name:Me(i,e),c:Wy(t),m:n,inst:s}),Qi=(i,e,t)=>Array.from({length:t},(n,s)=>Me(`${i} ${s+1}`,`${e} ${s+1}`)),Ze=[{id:"uc1",kind:"uc",uc:1,t:Me("Vorfertigung & QC","Prefab QC"),x:-12,z:-14,r:3.2,c:"#4da6ff",parts:[Ot("Stahltr\xE4ger","steel beam","#4da6ff","steel"),Ot("Kopfplatten","end plates","#5fd38d","steel",Qi("Kopfplatte","end plate",2)),Ot("Auflager","supports","#9aa8b8","wood",Qi("Auflager","support",2))]},{id:"uc2",kind:"uc",uc:2,t:Me("Material & Ressourcen","Material & resources"),x:-8,z:49.5,r:6,c:"#ffb547",parts:[Ot("Bagger","excavator","#ffb547","mixed"),Ot("Sch\xFCttgut \xB7 Steinhaufen (echt)","bulk material \xB7 stone pile (real)","#e0b07a","soil"),Ot("Minikran Jecko (echt)","Jecko mini crane (real)","#ff8a5b","mixed")]},{id:"uc3",kind:"uc",uc:3,t:Me("Fortschritt & Qualit\xE4t","Progress & quality"),x:3,z:41,r:6,c:"#5fd38d",parts:[Ot("ReStage-Demonstrator \xB7 21 von 119 Bauteilen verifiziert","ReStage demonstrator \xB7 21 of 119 components verified","#c8d2e0","mixed")]},{id:"uc4",kind:"uc",uc:4,t:Me("Digital Operations","Digital operations"),x:6,z:-14,r:3.2,c:"#ff8a5b",parts:[Ot("S\xE4ge-Bohr-Anlage \xB7 Warnung","saw-drill line \xB7 warning","#ff8a5b","mixed"),Ot("Rollenbahn","roller conveyor","#9aa8b8","steel",Qi("Rollenbahn","conveyor",2)),Ot("Sensoren \xB7 4 live","sensors \xB7 4 live","#5fd38d","mixed",Qi("Sensor","sensor",4))]},{id:"uc5",kind:"uc",uc:5,t:Me("Scan-to-BIM","Scan-to-BIM"),x:-11,z:2,r:3.4,c:"#9b8cff",parts:[Ot("W\xE4nde \xB7 0,24 m","walls \xB7 0.24 m","#c8d2e0","masonry"),Ot("T\xFCr & Fenster \xB7 1,01 \xD7 2,10 m","door & window \xB7 1.01 \xD7 2.10 m","#8bd17c","wood",[Me("T\xFCr","door"),Me("Fenster","window")]),Ot("M\xF6bel \xB7 Tisch, 4 St\xFChle","furniture \xB7 table, 4 chairs","#e0b07a","wood",[Me("Tisch","table"),...Qi("Stuhl","chair",4)])]},{id:"uc6",kind:"uc",uc:6,t:Me("Brownfield & Kreislauf","Brownfield & circularity"),x:4.5,z:53,r:5,c:"#ff5a5f",parts:[Ot("Sch\xFCttgut \xB7 Ziegelbruch","bulk material \xB7 brick rubble","#c99a5b","brick"),Ot("Big Bags \xB7 Asbest","big bags \xB7 asbestos","#ff5a5f","hazard",Qi("Big Bag","big bag",8)),Ot("Stahl \xB7 wiederverwendbar","steel \xB7 reusable","#4da6ff","steel",Qi("Stahlprofil","steel section",4)),Ot("Holzlager \xB7 wiederverwendbar (echt)","timber storage \xB7 reusable (real)","#e0b07a","wood")]},{id:"uc7",kind:"uc",uc:7,t:Me("Smart City","Smart city"),x:4,z:22,r:3.8,c:"#5ce1e6",parts:[Ot("Fahrzeug","vehicle","#4da6ff","none"),Ot("Personen \xB7 3","people \xB7 3","#5fd38d","none",Qi("Person","person",3)),Ot("Radfahrer","cyclist","#c792ea","none")]},{id:"uc8",kind:"uc",uc:8,t:Me("WAAM \xB7 In-situ","WAAM \xB7 in-situ"),x:10,z:2,r:3.2,c:"#ffcf70",parts:[Ot("Wand A \xB7 45,9 mm \xB7 19,6\xB0","wall A \xB7 45.9 mm \xB7 19.6\xB0","#5fd38d","steel"),Ot("Wand B \xB7 29,4 mm \xB7 27,5\xB0","wall B \xB7 29.4 mm \xB7 27.5\xB0","#ff8a8a","steel"),Ot("Grundplatte","base plate","#9aa8b8","steel")]},{id:"uc9",kind:"uc",uc:9,t:Me("Bewehrungspr\xFCfung","Rebar inspection"),x:-22,z:6,r:3.4,c:"#ff5a5f",parts:[Ot("St\xE4be \xB7 konform","bars \xB7 conform","#5fd38d","steel"),Ot("Stab \xB7 \xD812 statt \xD816","bar \xB7 \xD812 instead of \xD816","#ff5a5f","steel"),Ot("Stab \xB7 16 mm versetzt","bar \xB7 displaced 16 mm","#ffb547","steel")]},{id:"docs",kind:"docs",t:Me("Document Intelligence","Document intelligence"),x:-22,z:-3,r:3,c:"#5ce1e6",parts:[Ot("Tisch","table","#9aa8b8","wood"),Ot("Dokumente \xB7 3 Typen erkannt","documents \xB7 3 types detected","#5ce1e6","mixed",[Me("Lieferschein","delivery note"),Me("Werkszeugnis","mill certificate"),Me("Gutachten","survey report")])]},{id:"talks",kind:"talks",t:Me("Vortr\xE4ge & Beitr\xE4ge","Talks & posts"),x:-4,z:4,r:3,c:"#c792ea",parts:[Ot("B\xFChne","stage","#9aa8b8","wood"),Ot("Leinwand","screen","#c792ea","mixed"),Ot("Rednerpult","lectern","#4da6ff","wood")]},{id:"profile",kind:"profile",t:Me("Profil \xB7 Luca Fahrendholz-Heiermann","Profile \xB7 Luca Fahrendholz-Heiermann"),x:10,z:8.5,r:3,c:"#4da6ff",parts:[Ot("Scanner-Stativ","scanner tripod","#9aa8b8","steel"),Ot("Laserscanner","laser scanner","#4da6ff","mixed")]},{id:"bonus",kind:"bonus",bonus:!0,t:Me("Bonus \xB7 Registrier-Zielmarken","Bonus \xB7 registration targets"),x:-15.2,z:-7.6,r:1.6,c:"#ffcf70",parts:[Ot("Hochregal","high rack","#9aa8b8","steel"),Ot("Zielkugeln \xB7 3","target spheres \xB7 3","#ffcf70","mixed",Qi("Zielkugel","target sphere",3))]}],Ua=Ze.filter(i=>!i.bonus).length;var Ys=(i,...e)=>e.some(t=>i.includes(t)),Cp=(i,e,t)=>{let n=Math.atan2(i,-e)*180/Math.PI;return(t?["north","north-east","east","south-east","south","south-west","west","north-west"]:["Norden","Nordosten","Osten","S\xFCdosten","S\xFCden","S\xFCdwesten","Westen","Nordwesten"])[Math.round((n+360)%360/45)%8]},Pp=(i,e)=>{let t=e.lang==="en",n=i.toLowerCase(),s=(g,x)=>t?x:g,r=e.clusters.filter(g=>e.cluFrac(g.id)>=.3&&e.stState[g.g]!=="hidden"),a=new Set(["wie","viel","viele","wo","ist","sind","gibt","welche","welcher","was","der","die","das","den","ein","eine","es","hier","im","in","how","many","much","where","what","which","the","are","is","any","there"]),l=n.split(/[^a-zäöüß0-9]+/).filter(g=>g.length>2&&!a.has(g)).flatMap(g=>[g,g.replace(/(en|e|n|s)$/,""),...Ml[g]??[]]).filter(g=>g.length>2),c=g=>{let x=Ze[g.g],m=x.parts[g.p],p=[g.name.de,g.name.en,ot(m.name,"de"),ot(m.name,"en")].map(b=>b.toLowerCase());return l.some(b=>p.some(_=>_.includes(b)))},h=g=>{let x=Ze[g.g];return`${ot(g.name,e.lang)} (${x.kind==="uc"?`UC${x.uc}`:ot(x.t,e.lang)})`},u=g=>[...new Set(g.map(x=>`${s("Scan-Cluster","scan cluster")} \xB7 ${Ze[x.g].kind==="uc"?`UC${Ze[x.g].uc}`:ot(Ze[x.g].t,e.lang)}`))];if(!n.trim()||Ys(n,"hilfe","help","was kannst","what can"))return{q:i,a:s("Frag z. B.: \u201EWie viele Personen?\u201C, \u201EWo ist der Bagger?\u201C, \u201EWelche Abweichungen gibt es?\u201C, \u201EWie viel Stahl?\u201C, \u201EGibt es Schadstoffe?\u201C, \u201EWie weit bin ich?\u201C",'Try: "How many people?", "Where is the excavator?", "Which deviations?", "How much steel?", "Any hazardous materials?", "How far am I?"'),src:[s("regelbasiert \xB7 offline","rule-based \xB7 offline")]};if(Ys(n,"wie weit","fortschritt","how far","progress","abdeckung","coverage","erfasst")){let g=e.stState.filter(x=>x==="done").length;return{q:i,a:s(`Halle zu ${Math.round(e.cov*100)} % erfasst, ${g} von ${e.stState.length} Bereichen analysiert, ${r.length} Objekte segmentiert.`,`Hall ${Math.round(e.cov*100)} % captured, ${g} of ${e.stState.length} areas analysed, ${r.length} objects segmented.`),src:[s("Scan-Fortschritt","scan progress")]}}if(Ys(n,"abweich","deviation","toleranz","tolerance","fehler","mangel","defect","versetzt","falsch")){let g=r.filter(x=>/abweich|versetzt|statt|warnung/i.test(ot(Ze[x.g].parts[x.p].name,"de")));return g.length?{q:i,a:g.map(x=>`\u2022 ${ot(Ze[x.g].parts[x.p].name,e.lang)} \u2013 ${h(x)}`).join(`
`),src:u(g)}:{q:i,a:s("Bisher keine Abweichungen in den erfassten Bereichen gefunden.","No deviations found in the captured areas so far."),src:[s("Soll-Ist-Vergleich","as-planned vs. as-built")]}}if(Ys(n,"schadstoff","asbest","gefahr","hazard","asbestos","danger")){let g=r.filter(x=>x.mat==="hazard");return g.length?{q:i,a:s(`${g.length} Big Bags mit Asbest erfasst (\u2248 ${g.reduce((x,m)=>x+m.vol,0).toFixed(2)} m\xB3) \u2013 Bereich absperren, Entsorgung nach TRGS 519.`,`${g.length} big bags with asbestos captured (\u2248 ${g.reduce((x,m)=>x+m.vol,0).toFixed(2)} m\xB3) \u2013 cordon off, dispose per regulations.`),src:[...u(g),s("Materialkataster","material register")]}:{q:i,a:s("In den erfassten Bereichen sind keine Schadstoffe markiert.","No hazardous materials marked in the captured areas."),src:[s("Materialkataster","material register")]}}let d=r.filter(c);if(Ys(n,"wie viele","anzahl","how many","count","z\xE4hl"))return d.length?{q:i,a:s(`${d.length} erfasst: ${d.map(h).join(", ")}.`,`${d.length} captured: ${d.map(h).join(", ")}.`),src:u(d)}:{q:i,a:s("Dazu habe ich in den erfassten Bereichen nichts gefunden \u2013 erst scannen, dann fragen.","Nothing found in the captured areas \u2013 scan first, then ask."),src:[s("Scan","scan")]};let f=Object.keys($n).find(g=>g!=="none"&&g!=="hull"&&l.some(x=>$n[g].de.toLowerCase().includes(x)||$n[g].en.toLowerCase().includes(x)));if((/wie viel(?!e)/.test(n)||Ys(n,"how much","masse","mass","gewicht","weight","tonnen","volumen","volume","material"))&&f){let g=r.filter(p=>p.mat===f),x=g.reduce((p,b)=>p+b.vol,0),m=g.reduce((p,b)=>p+b.mass,0);return{q:i,a:s(`${$n[f].de}: ${x.toFixed(3)} m\xB3${m?` \u2248 ${(m/1e3).toFixed(2)} t`:""} in ${g.length} erfassten Objekten.`,`${$n[f].en}: ${x.toFixed(3)} m\xB3${m?` \u2248 ${(m/1e3).toFixed(2)} t`:""} in ${g.length} captured objects.`),src:[s("Mengen aus dem nachmodellierten Modell","quantities from the reconstructed model"),...u(g)]}}if(Ys(n,"boden","floor","fl\xE4che","area"))return{q:i,a:s(`Erfasste Bodenfl\xE4che: ${e.floorM2} m\xB2 (1-m-Raster, Ausgleichsebene aus dem Scan).`,`Captured floor area: ${e.floorM2} m\xB2 (1 m grid, best-fit plane from the scan).`),src:[s("Segmentierung Boden (A1)","floor segmentation (A1)")]};if(d.length){let g=d[0],x=(g.min[0]+g.max[0])/2,m=(g.min[2]+g.max[2])/2,p=x-e.agent.x,b=m-e.agent.z,_=`${(g.max[0]-g.min[0]).toFixed(2)} \xD7 ${(g.max[2]-g.min[2]).toFixed(2)} \xD7 ${(g.max[1]-g.min[1]).toFixed(2)} m`;return{q:i,a:s(`${h(g)}: ${Math.round(Math.hypot(p,b))} m Richtung ${Cp(p,b,t)} \xB7 Box ${_}${d.length>1?` (+${d.length-1} weitere)`:""}.`,`${h(g)}: ${Math.round(Math.hypot(p,b))} m to the ${Cp(p,b,t)} \xB7 box ${_}${d.length>1?` (+${d.length-1} more)`:""}.`),src:u(d)}}return{q:i,a:s("Das kann ich aus dem bisherigen Scan nicht beantworten. Tipp: \u201EHilfe\u201C.",'I cannot answer that from the current scan. Tip: "help".'),src:[s("regelbasiert \xB7 offline","rule-based \xB7 offline")]}};function mu(i,e){if(e===gp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===La||e===xl){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===La)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Sl=class extends Ji{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Mu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new ku(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=vs.extractUrlBase(e);a=vs.resolveURL(c,this.path)}else a=vs.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ca(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Up){try{a[Lt.KHR_BINARY_GLTF]=new Fu(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Lt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Wu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Lt.KHR_MATERIALS_UNLIT:a[u]=new vu;break;case Lt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Ou(r,this.dracoLoader);break;case Lt.KHR_TEXTURE_TRANSFORM:a[u]=new zu;break;case Lt.KHR_MESH_QUANTIZATION:a[u]=new Bu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Xy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},yu=class{constructor(e){this.parser=e,this.name=Lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new et(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],An);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Gr(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Vr(h),c.distance=u;break;case"spot":c=new dl(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,es(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},vu=class{constructor(){this.name=Lt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ft}extendParams(e,t,n){let s=[];e.color=new et(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],An),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,gn))}return Promise.all(s)}},bu=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Mu=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new De(o,o)}return Promise.all(r)}},Su=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Eu=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},wu=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new et(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],An)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,gn)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Tu=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Au=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new et().setRGB(o[0],o[1],o[2],An),Promise.all(r)}},Ru=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Cu=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new et().setRGB(o[0],o[1],o[2],An),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,gn)),Promise.all(r)}},Pu=class{constructor(e){this.parser=e,this.name=Lt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Iu=class{constructor(e){this.parser=e,this.name=Lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Lu=class{constructor(e){this.parser=e,this.name=Lt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Nu=class{constructor(e){this.parser=e,this.name=Lt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Du=class{constructor(e){this.parser=e,this.name=Lt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Uu=class{constructor(e){this.name=Lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},ku=class{constructor(e){this.name=Lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==li.TRIANGLES&&c.mode!==li.TRIANGLE_STRIP&&c.mode!==li.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let x=new pt,m=new I,p=new vi,b=new I(1,1,1),_=new zr(g.geometry,g.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&b.fromBufferAttribute(l.SCALE,y),_.setMatrixAt(y,x.compose(m,p,b));for(let y in l)if(y==="_COLOR_0"){let D=l[y];_.instanceColor=new Ws(D.array,D.itemSize,D.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);cn.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Up="glTF",ka=12,Ip={JSON:1313821514,BIN:5130562},Fu=class{constructor(e){this.name=Lt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ka),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Up)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ka,r=new DataView(e,ka),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Ip.JSON){let c=new Uint8Array(e,ka+a,o);this.content=n.decode(c)}else if(l===Ip.BIN){let c=ka+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ou=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Vu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Vu[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Xr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(f)},o,c,An,d)})})}},zu=class{constructor(){this.name=Lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Bu=class{constructor(){this.name=Lt.KHR_MESH_QUANTIZATION}},El=class extends xs{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,b=1-m,_=p-d+u;for(let y=0;y!==o;y++){let D=a[x+y+o],A=a[x+y+l]*h,R=a[g+y+o],k=a[g+y]*h;r[y]=b*D+_*A+m*R+p*k}return r}},Yy=new vi,Hu=class extends El{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Yy.fromArray(r).normalize().toArray(r),r}},li={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Xr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Lp={9728:Dn,9729:Gn,9984:eu,9985:fa,9986:yr,9987:Ti},Np={33071:Bi,33648:_a,10497:Vs},gu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Vu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$y={CUBICSPLINE:void 0,LINEAR:Ir,STEP:Pr},xu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function qy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Zt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ai})),i.DefaultMaterial}function $s(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function es(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ky(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Zy(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Jy(i){let e,t=i.extensions&&i.extensions[Lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+_u(t.attributes):e=i.indices+":"+_u(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+_u(i.targets[n]);return e}function _u(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Gu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Qy=new pt,Wu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Xy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Br(this.options.manager):this.textureLoader=new fl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ca(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return $s(r,o,s),es(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Lt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(vs.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=gu[s.type],o=Xr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Ct(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=gu[s.type],c=Xr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,_=t.cache.get(b);_||(x=new c(o,p*f,s.count*f/h),_=new Ma(x,f/h),t.cache.add(b,_)),m=new Sa(_,l,d%f/h,g)}else o===null?x=new c(s.count*l):x=new c(o,d,s.count*l),m=new Ct(x,l,g);if(s.sparse!==void 0){let p=gu.SCALAR,b=Xr[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,D=new b(a[1],_,s.sparse.count*p),A=new c(a[2],y,s.sparse.count*l);o!==null&&(m=new Ct(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,k=D.length;R<k;R++){let J=D[R];if(m.setX(J,A[R*l]),l>=2&&m.setY(J,A[R*l+1]),l>=3&&m.setZ(J,A[R*l+2]),l>=4&&m.setW(J,A[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Lp[d.magFilter]||Gn,h.minFilter=Lp[d.minFilter]||Ti,h.wrapS=Np[d.wrapS]||Vs,h.wrapT=Np[d.wrapT]||Vs,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Tn(x);m.needsUpdate=!0,d(m)}),t.load(vs.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),es(u,a),u.userData.mimeType=a.mimeType||jy(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Lt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Lt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Lt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new wa,Qn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ri,Qn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Zt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Lt.KHR_MATERIALS_UNLIT]){let u=s[Lt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new et(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],An),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,gn)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=on);let h=r.alphaMode||xu.OPAQUE;if(h===xu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===xu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ft&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new De(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Ft&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ft){let u=r.emissiveFactor;o.emissive=new et().setRGB(u[0],u[1],u[2],An)}return r.emissiveTexture!==void 0&&a!==Ft&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,gn)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),es(u,r),t.associations.set(u,{materials:e}),r.extensions&&$s(s,u,r),u})}createUniqueName(e){let t=en.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Dp(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Jy(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Lt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Dp(new $t,c,t),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?qy(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=a[f],p,b=c[f];if(m.mode===li.TRIANGLES||m.mode===li.TRIANGLE_STRIP||m.mode===li.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Ko(x,b):new Ee(x,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===li.TRIANGLE_STRIP?p.geometry=mu(p.geometry,xl):m.mode===li.TRIANGLE_FAN&&(p.geometry=mu(p.geometry,La));else if(m.mode===li.LINES)p=new Yi(x,b);else if(m.mode===li.LINE_STRIP)p=new Xi(x,b);else if(m.mode===li.LINE_LOOP)p=new Qo(x,b);else if(m.mode===li.POINTS)p=new Xs(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Zy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),es(p,r),m.extensions&&$s(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&$s(s,u[0],r),u[0];let d=new It;r.extensions&&$s(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new dn(Na.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ur(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),es(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new pt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Zo(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,b=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(g),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let b=0,_=d.length;b<_;b++){let y=d[b],D=f[b],A=g[b],R=x[b],k=m[b];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let J=n._createAnimationTracks(y,D,A,R,k);if(J)for(let v=0;v<J.length;v++)p.push(J[v])}return new hl(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Qy)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Ea:c.length>1?h=new It:c.length===1?h=c[0]:h=new cn,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),es(h,r),r.extensions&&$s(n,h,r),r.matrix!==void 0){let u=new pt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new It;n.name&&(r.name=s.createUniqueName(n.name)),es(r,n),n.extensions&&$s(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Qn||d instanceof Tn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];bs[r.path]===bs.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(bs[r.path]){case bs.weights:c=qi;break;case bs.rotation:c=Ki;break;case bs.position:case bs.scale:c=Zi;break;default:n.itemSize===1?c=qi:c=Zi;break}let h=s.interpolation!==void 0?$y[s.interpolation]:Ir,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+bs[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Gu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ki?Hu:El;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ev(i,e,t){let n=e.attributes,s=new Yn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){let h=Gu(Xr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new I,l=new I;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Gu(Xr[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new jn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Dp(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Vu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Vt.workingColorSpace!==An&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Vt.workingColorSpace}" not supported.`),es(i,e),ev(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Ky(i,e.targets,t):i})}var kp=32,Fp=128,tv=new I(0,1,0),Op=(i,e,t)=>{let n=new It,s=new Map(e.map(_=>[`${_.g}:${_.p}:${_.i}`,_.id])),r=new Map;if(t){let _=[];t.traverse(y=>y.isMesh&&_.push(y));for(let y of _){let D=y.name||y.parent?.name||"",[A,R,k]=D.split("|"),J=Ze.findIndex(O=>O.id===A),v=s.get(`${J}:${R}:${k}`);if(J<0||v===void 0)continue;y.removeFromParent(),y.position.x+=Ze[J].x,y.position.y+=i.stations[J]?.y0??0,y.position.z+=Ze[J].z;let w=y.material;w&&"envMapIntensity"in w&&(w.metalness=Math.min(w.metalness,.4)),n.add(y),r.set(v,[...r.get(v)??[],y])}}let a=[],o=new Map,l=(_,y)=>{let D=_.join(",")+y;return o.has(D)||o.set(D,new Zt({color:new et(_[0],_[1],_[2]),roughness:y?.35:.7,metalness:y?.55:.05})),o.get(D)};i.stations.forEach((_,y)=>{let D=Ze[y];for(let A of _.prims){let R=D.parts[A.p],k=l(R.c,R.m==="steel"),J=[],v=O=>{O.position.x+=_.x,O.position.z+=_.z,n.add(O),J.push(O)};if(A.k==="box"){let O=new Ee(new Kt(A.b[0]-A.a[0],A.b[1]-A.a[1],A.b[2]-A.a[2]),k);O.position.set((A.a[0]+A.b[0])/2,(A.a[1]+A.b[1])/2,(A.a[2]+A.b[2])/2),v(O)}else if(A.k==="rod"){let O=new I(...A.a),Y=new I(...A.b).clone().sub(O),se=new Ee(new vn(A.r,A.r,Y.length(),12),k);se.position.copy(O).addScaledVector(Y,.5),se.quaternion.setFromUnitVectors(tv,Y.normalize()),v(se)}else if(A.k==="pile"){let O=[];for(let Y=0;Y<=16;Y++){let se=A.R*(1-Y/16);O.push(new De(se,A.H*(1-(se/A.R)**1.6)))}let H=new Ee(new Aa(O,32),k);H.position.set(A.c[0],0,A.c[1]),v(H)}else if(A.k==="sph"){let O=new Ee(new Pn(A.r,20,14),k);O.position.set(...A.c),v(O)}else if(A.k==="ring"){let O=new Ee(new ll(A.R,A.r,10,28),k);O.position.set(...A.c),v(O)}else if(A.k==="person"){let O=new It,H=new Ee(new rl(.16,.95,4,12),k);H.position.y=.78,H.scale.z=.7;let Y=new Ee(new Pn(.11,14,10),k);Y.position.y=1.62,O.add(H,Y),O.position.set(A.c[0],0,A.c[1]),v(O)}else if(A.k==="waam"){let O=A.h/A.L,H=[];for(let Y=0;Y<A.L;Y++){let se=(Y+.5)/A.L,F=new Ee(new Kt(A.t*.85,O*.92,A.z1-A.z0),k);F.position.set(A.x+A.lean*se*se,A.y0+(Y+.5)*O,(A.z0+A.z1)/2),v(F),H.push(F)}a.push({p:A.p,L:A.L,meshes:H})}let w=s.get(`${y}:${A.p}:${A.i??0}`);w!==void 0&&r.set(w,[...r.get(w)??[],...J])}});let c=new Zt({color:9279400,roughness:.8,metalness:.1}),h=i.blocks.map(_=>{let y=new Ee(new Kt(_.b[0]-_.a[0],_.b[1]-_.a[1],_.b[2]-_.a[2]),c);return y.position.set((_.a[0]+_.b[0])/2,(_.a[1]+_.b[1])/2,(_.a[2]+_.b[2])/2),y.visible=!1,n.add(y),{m:y,cells:_.cells}}),[u,d,f]=i.plane,g=new zr(new Kt(.98,.06,.98),new Zt({color:11844034,roughness:.9}),i.floor.length),x=new pt,m=new pt().makeScale(0,0,0),p=i.floor.map((_,y)=>{let D=_%Fp-kp+.5,A=Math.floor(_/Fp)-kp+.5;return g.setMatrixAt(y,m),[D,u*D+d*A+f-.03,A]});g.frustumCulled=!1,n.add(g);let b=(_,y)=>{y&&x.makeTranslation(p[_][0],p[_][1],p[_][2]),g.setMatrixAt(_,y?x:m),g.instanceMatrix.needsUpdate=!0};for(let _ of r.values())for(let y of _)y.visible=!1;return n.visible=!1,{group:n,cluObjs:r,blocks:h,floor:{cells:i.floor,show:b},waam:a}};var zp=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),Bp=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);var nv=zp,Hp=Bp,Xu=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]],iv=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]],Un=16,Fa=class{constructor(e){this.group=new It;this.VS=e.vs,[this.X0,this.Y0,this.Z0]=e.min,this.GX=Math.max(2,Math.ceil((e.max[0]-e.min[0])/e.vs)),this.GY=Math.max(2,Math.ceil((e.max[1]-e.min[1])/e.vs)),this.GZ=Math.max(2,Math.ceil((e.max[2]-e.min[2])/e.vs)),this.NCX=Math.ceil(this.GX/Un),this.NCZ=Math.ceil(this.GZ/Un),this.ISO=e.iso??Math.max(.12,.7*(e.vs/.2)**2),this.cnt=new Uint16Array(this.GX*this.GY*this.GZ),this.dirty=new Uint8Array(this.NCX*this.NCZ),this.filled=new Uint8Array(this.NCX*this.NCZ),this.meshes=new Array(this.NCX*this.NCZ).fill(null),this.color=e.color,this.mat=new Zt({vertexColors:!0,flatShading:!0,roughness:.85,metalness:.05,side:on})}add(e,t,n){let s=Math.floor((e-this.X0)/this.VS),r=Math.floor((t-this.Y0)/this.VS),a=Math.floor((n-this.Z0)/this.VS);if(s<0||r<0||a<0||s>=this.GX||r>=this.GY||a>=this.GZ)return;let o=(a*this.GY+r)*this.GX+s;this.cnt[o]<65535&&this.cnt[o]++;let l=Math.floor(s/Un),c=Math.floor(a/Un),h=c*this.NCX+l;this.dirty[h]=1,this.filled[h]=1;let u=s%Un,d=a%Un;u<=1&&l>0&&(this.dirty[h-1]=1),u>=Un-2&&l<this.NCX-1&&(this.dirty[h+1]=1),d<=1&&c>0&&(this.dirty[h-this.NCX]=1),d>=Un-2&&c<this.NCZ-1&&(this.dirty[h+this.NCX]=1)}update(e,t,n){let s=[];for(let o=0;o<this.dirty.length;o++)if(this.dirty[o]){let l=(o%this.NCX+.5)*Un*this.VS+this.X0,c=(Math.floor(o/this.NCX)+.5)*Un*this.VS+this.Z0;s.push([o,(l-t)**2+(c-n)**2])}if(!s.length)return 0;s.sort((o,l)=>o[1]-l[1]);let r=performance.now(),a=0;for(;a<s.length&&performance.now()-r<e;a++)this.build(s[a][0]);return s.length-a}build(e){this.dirty[e]=0;let{GX:t,GY:n,GZ:s,VS:r,X0:a,Y0:o,Z0:l,ISO:c,cnt:h}=this,u=e%this.NCX,d=Math.floor(e/this.NCX),f=u*Un-1,g=d*Un-1,x=Un+3,m=Un+3,p=n,b=new Float32Array(x*p*m),_=(w,O,H)=>w<0||O<0||H<0||w>=t||O>=n||H>=s?0:h[(H*n+O)*t+w];for(let w=0;w<m;w++)for(let O=0;O<p;O++)for(let H=0;H<x;H++){let Y=0,se=f+H,F=g+w;for(let le=-1;le<=1;le++)for(let K=-1;K<=1;K++)for(let he=-1;he<=1;he++)Y+=_(se+he,O+K,F+le);b[(w*p+O)*x+H]=Y/27}let y=[],D=[],A=new Float32Array(8),R=new Float32Array(36);for(let w=1;w<=Un&&w<m-1;w++)for(let O=0;O<p-1;O++)for(let H=1;H<=Un&&H<x-1;H++){let Y=0;for(let le=0;le<8;le++){let K=Xu[le];A[le]=b[((w+K[2])*p+(O+K[1]))*x+(H+K[0])],A[le]>c&&(Y|=1<<le)}let se=nv[Y];if(!se)continue;for(let le=0;le<12;le++){if(!(se&1<<le))continue;let[K,he]=iv[le],Ce=(c-A[K])/(A[he]-A[K]||1e-6),ve=Xu[K],yt=Xu[he];R[le*3]=a+(f+H+ve[0]+(yt[0]-ve[0])*Ce+.5)*r,R[le*3+1]=o+(O+ve[1]+(yt[1]-ve[1])*Ce+.5)*r,R[le*3+2]=l+(g+w+ve[2]+(yt[2]-ve[2])*Ce+.5)*r}let F=Y*16;for(let le=0;Hp[F+le]!==-1;le+=3)for(let K=0;K<3;K++){let he=Hp[F+le+K],Ce=R[he*3+1];if(y.push(R[he*3],Ce,R[he*3+2]),this.color)D.push(this.color[0],this.color[1],this.color[2]);else{let ve=Math.max(0,Math.min(1,Ce/6));D.push(.46+.16*ve,.5+.1*ve,.58-.08*ve)}}}let k=this.meshes[e];if(k&&(this.group.remove(k),k.geometry.dispose(),this.meshes[e]=null),!y.length)return;let J=new $t;J.setAttribute("position",new kt(y,3)),J.setAttribute("color",new kt(D,3)),J.computeVertexNormals();let v=new Ee(J,this.mat);v.frustumCulled=!1,this.group.add(v),this.meshes[e]=v}touchAll(){for(let e=0;e<this.filled.length;e++)this.filled[e]&&(this.dirty[e]=1)}dispose(){for(let e of this.meshes)e&&e.geometry.dispose();this.mat.dispose(),this.group.removeFromParent()}};var Bt={x0:-28,x1:21,z0:-21,z1:67,px:.04},Oa=Math.round((Bt.x1-Bt.x0)/Bt.px),Yr=Math.round((Bt.z1-Bt.z0)/Bt.px),Vp=.9,sv=1.7,wl=class{constructor(){this.base=document.createElement("canvas");this.base.width=Oa,this.base.height=Yr,this.ctx=this.base.getContext("2d"),this.ctx.fillStyle="#fbfbf8",this.ctx.fillRect(0,0,Oa,Yr)}add(e,t,n,s){if(e<Bt.x0||e>=Bt.x1||n<Bt.z0||n>=Bt.z1||t>6.3)return;let r=(e-Bt.x0)/Bt.px,a=(n-Bt.z0)/Bt.px,o=this.ctx;s===1?(o.fillStyle="rgba(150,156,168,0.05)",o.fillRect(r,a,2,2)):t>=Vp&&t<=sv?(o.fillStyle="rgba(18,22,30,0.5)",o.fillRect(r-.5,a-.5,2,2)):t<Vp?(o.fillStyle="rgba(80,88,100,0.16)",o.fillRect(r,a,1.5,1.5)):(o.fillStyle="rgba(90,110,150,0.035)",o.fillRect(r,a,1.5,1.5))}compose(e,t){e.width=Oa+140,e.height=Yr+140+120;let r=e.getContext("2d"),a=t.lang==="en";r.fillStyle="#ffffff",r.fillRect(0,0,e.width,e.height),r.drawImage(this.base,70,70);let o=y=>70+(y-Bt.x0)/Bt.px,l=y=>70+(y-Bt.z0)/Bt.px;r.strokeStyle="rgba(200,60,60,0.35)",r.setLineDash([12,6,3,6]),r.lineWidth=1,r.font="bold 15px Inter, sans-serif",r.textAlign="center",r.textBaseline="middle";let c=0;for(let y=-15;y<=15;y+=5,c++)r.beginPath(),r.moveTo(o(y),48),r.lineTo(o(y),70+Yr+10),r.stroke(),r.setLineDash([]),r.fillStyle="#fff",r.beginPath(),r.arc(o(y),34,13,0,Math.PI*2),r.fill(),r.strokeStyle="rgba(200,60,60,0.8)",r.stroke(),r.fillStyle="#b03030",r.fillText(String.fromCharCode(65+c),o(y),34),r.strokeStyle="rgba(200,60,60,0.35)",r.setLineDash([12,6,3,6]);c=1;for(let y=-10;y<=10;y+=5,c++)r.beginPath(),r.moveTo(48,l(y)),r.lineTo(70+Oa+10,l(y)),r.stroke(),r.setLineDash([]),r.fillStyle="#fff",r.beginPath(),r.arc(34,l(y),13,0,Math.PI*2),r.fill(),r.strokeStyle="rgba(200,60,60,0.8)",r.stroke(),r.fillStyle="#b03030",r.fillText(String(c),34,l(y)),r.strokeStyle="rgba(200,60,60,0.35)",r.setLineDash([12,6,3,6]);r.setLineDash([]),r.font="600 14px Inter, sans-serif";for(let y of t.labels){let D=r.measureText(y.t).width+14;r.fillStyle="rgba(255,255,255,0.85)",r.fillRect(o(y.x)-D/2,l(y.z)-11,D,22),r.strokeStyle=y.c,r.lineWidth=1.5,r.strokeRect(o(y.x)-D/2,l(y.z)-11,D,22),r.fillStyle="#1a1f29",r.fillText(y.t,o(y.x),l(y.z))}for(let y of t.scanners)r.fillStyle="#0a84c6",r.beginPath(),r.moveTo(o(y.x),l(y.z)-9),r.lineTo(o(y.x)+8,l(y.z)+6),r.lineTo(o(y.x)-8,l(y.z)+6),r.closePath(),r.fill();let h=70+Yr+30,u=70;for(let y=0;y<10;y++)r.fillStyle=y%2?"#ffffff":"#1a1f29",r.fillRect(u+y/Bt.px,h,1/Bt.px,8);r.strokeStyle="#1a1f29",r.lineWidth=1,r.strokeRect(u,h,10/Bt.px,8),r.fillStyle="#1a1f29",r.font="500 12px Inter, sans-serif",r.textAlign="center";for(let y of[0,5,10])r.fillText(`${y} m`,u+y/Bt.px,h+22);let d=70+Oa-30,f=110;r.fillStyle="#1a1f29",r.beginPath(),r.moveTo(d,f-26),r.lineTo(d+11,f+12),r.lineTo(d,f+4),r.lineTo(d-11,f+12),r.closePath(),r.fill(),r.font="bold 16px Inter, sans-serif",r.fillText("N",d,f+28);let g=e.width-70-520,x=70+Yr+18,m=520,p=110;r.strokeStyle="#1a1f29",r.lineWidth=1.5,r.strokeRect(g,x,m,p),r.beginPath(),r.moveTo(g,x+38),r.lineTo(g+m,x+38),r.moveTo(g+330,x+38),r.lineTo(g+330,x+p),r.stroke(),r.textAlign="left",r.font="800 19px Inter, sans-serif",r.fillText(a?"FLOOR PLAN \xB7 ground floor \xB7 section +1.20 m":"GRUNDRISS \xB7 EG \xB7 Schnitt +1,20 m",g+12,x+20),r.font="500 12.5px Inter, sans-serif";let b=new Date;(a?["Derived from scan \xB7 X-AVIS Spatial AI Lab",`Hall captured: ${Math.round(t.cov*100)} %`,"Scale 1:200 (A3) \xB7 grid 5 m",`Date ${b.toLocaleDateString("en-GB")}`]:["Aus dem Scan abgeleitet \xB7 X-AVIS Spatial AI Lab",`Halle erfasst: ${Math.round(t.cov*100)} %`,"Ma\xDFstab 1:200 (A3) \xB7 Raster 5 m",`Datum ${b.toLocaleDateString("de-DE")}`]).forEach((y,D)=>r.fillText(y,g+12,x+56+D*16)),r.font="800 15px Inter, sans-serif",r.fillText("X-AVIS",g+345,x+60),r.font="500 11px Inter, sans-serif",r.fillText("\xA9 Jan Luca Fahrendholz-Heiermann",g+345,x+80),r.fillText(a?"Plan status: preliminary":"Planstand: vorl\xE4ufig",g+345,x+96)}},Tl=(i,e,t,n)=>{let s=i.color(e),r=.25+.65*i.I[e],a=1-.35*Math.min(1,t/n);if(s)return[s[0]*255*a,s[1]*255*a,s[2]*255*a];let o=255*(1-r)*a+40*(1-a);return[o,o,o]},Al=(i,e)=>{let t=document.createElement("canvas");t.width=i,t.height=e;let n=t.getContext("2d"),s=n.createImageData(i,e);for(let r=0;r<i*e;r++)s.data[r*4]=255,s.data[r*4+1]=255,s.data[r*4+2]=255,s.data[r*4+3]=255;return{cv:t,ctx:n,img:s,zb:new Float32Array(i*e).fill(1e9)}},Rl=(i,e,t,n,s,r,a=1)=>{for(let o=0;o<a;o++)for(let l=0;l<a;l++){let c=t+l,h=n+o;if(c<0||h<0||c>=e||h*e+c>=i.zb.length)continue;let u=h*e+c;s>=i.zb[u]||(i.zb[u]=s,i.img.data[u*4]=r[0],i.img.data[u*4+1]=r[1],i.img.data[u*4+2]=r[2])}},Yu=(i,e,t,n,s=!1)=>{let r=t/2,a=Al(t,r),o=n?n.length:i.N;for(let l=0;l<o;l++){let c=n?n[l]:l;if(!s&&i.S[c]<0)continue;let h=i.P[c*3]-e[0],u=i.P[c*3+1]-e[1],d=i.P[c*3+2]-e[2],f=Math.hypot(h,u,d);if(f<.3)continue;let g=Math.atan2(h,-d),x=Math.asin(u/f),m=Math.floor((g+Math.PI)/(2*Math.PI)*t),p=Math.floor((Math.PI/2-x)/Math.PI*r);Rl(a,t,m,p,f,Tl(i,c,f,25),f<4?3:f<9?2:1)}return a.ctx.putImageData(a.img,0,0),a.cv},Gp=(i,e,t)=>{let n=t*4,s=t*3,r=Al(n,s),a={nz:[1,1],px:[2,1],pz:[3,1],nx:[0,1],py:[1,0],ny:[1,2]};for(let o=0;o<i.N;o++){if(i.S[o]<0)continue;let l=i.P[o*3]-e[0],c=i.P[o*3+1]-e[1],h=i.P[o*3+2]-e[2],u=Math.abs(l),d=Math.abs(c),f=Math.abs(h),g,x,m,p;u>=d&&u>=f?(p=u,l>0?(g="px",x=h/p,m=-c/p):(g="nx",x=-h/p,m=-c/p)):d>=f?(p=d,c>0?(g="py",x=l/p,m=h/p):(g="ny",x=l/p,m=-h/p)):(p=f,h>0?(g="pz",x=-l/p,m=-c/p):(g="nz",x=l/p,m=-c/p));let[b,_]=a[g],y=Math.hypot(l,c,h);Rl(r,n,Math.floor(b*t+(x+1)/2*(t-1)),Math.floor(_*t+(m+1)/2*(t-1)),y,Tl(i,o,y,25),y<5?2:1)}for(let o=0;o<s;o++)for(let l=0;l<n;l++){let c=Math.floor(l/t),h=Math.floor(o/t);Object.values(a).some(([d,f])=>d===c&&f===h)||(r.img.data[(o*n+l)*4+3]=0)}return r.ctx.putImageData(r.img,0,0),r.cv},Wp=(i,e,t)=>{let n=Al(e,t),s=[48,52,78],r=[-4,0,22],a=[r[0]-s[0],r[1]-s[1],r[2]-s[2]],o=Math.hypot(a[0],a[1],a[2]),l=a.map(f=>f/o),c=[l[1]*0-l[2]*1,l[2]*0-l[0]*0,l[0]*1-l[1]*0],h=Math.hypot(c[0],c[1],c[2]);c=c.map(f=>f/h);let u=[c[1]*l[2]-c[2]*l[1],c[2]*l[0]-c[0]*l[2],c[0]*l[1]-c[1]*l[0]],d=t/2/Math.tan(34*Math.PI/360);for(let f=0;f<i.N;f++){if(i.S[f]<0)continue;let g=i.P[f*3]-s[0],x=i.P[f*3+1]-s[1],m=i.P[f*3+2]-s[2],p=g*l[0]+x*l[1]+m*l[2];if(p<1)continue;let b=g*c[0]+x*c[1]+m*c[2],_=g*u[0]+x*u[1]+m*u[2];Rl(n,e,Math.floor(e/2+b/p*d),Math.floor(t/2-_/p*d),p,Tl(i,f,p-25,40),2)}return n.ctx.putImageData(n.img,0,0),n.cv},Xp=(i,e)=>{let t=Math.round(e*(Bt.z1-Bt.z0)/(Bt.x1-Bt.x0)),n=Al(e,t),s=e/(Bt.x1-Bt.x0);for(let r=0;r<i.N;r++){if(i.S[r]<0)continue;let a=i.P[r*3],o=i.P[r*3+1],l=i.P[r*3+2];a<Bt.x0||a>=Bt.x1||l<Bt.z0||l>=Bt.z1||Rl(n,e,Math.floor((a-Bt.x0)*s),Math.floor((l-Bt.z0)*s),10-o,Tl(i,r,0,1),2)}return n.ctx.putImageData(n.img,0,0),n.cv};var qs=.95,Ms=.85,Yp=.62,za=.28,rv=()=>{let i=new Zt({color:16738835,roughness:.45,metalness:.25}),e=new Zt({color:2303790,roughness:.5,metalness:.6}),t=new It,n=new Ee(new vn(.26,.3,.22,24),e);n.position.y=.11,t.add(n);let s=new It;s.position.y=.22,t.add(s);let r=new Ee(new vn(.22,.24,.3,24),i);r.position.y=.15,s.add(r);let a=new It;a.position.y=Yp-.22,s.add(a),a.add(new Ee(new Pn(.13,16,12),e));let o=new Ee(new Kt(qs,.17,.2),i);o.position.x=qs/2,a.add(o);let l=new It;l.position.x=qs,a.add(l),l.add(new Ee(new Pn(.11,16,12),e));let c=new Ee(new Kt(Ms,.13,.15),i);c.position.x=Ms/2,l.add(c);let h=new It;h.position.x=Ms,l.add(h),h.add(new Ee(new Pn(.07,12,10),e));let u=new Ee(new vn(.025,.04,za,12),e);u.position.y=-za/2,h.add(u);let d=new Ee(new Pn(.035,12,10),new Ft({color:16765562}));d.position.y=-za-.01,h.add(d);let f=new Vr(16751162,0,2.5,2);return f.position.y=-za,h.add(f),{root:t,reach:(x,m,p)=>{let b=x-t.position.x,_=m+za-(t.position.y+Yp),y=p-t.position.z,D=Math.hypot(b,y);s.rotation.y=Math.atan2(-y,b);let A=Math.max(-1,Math.min(1,(D*D+_*_-qs*qs-Ms*Ms)/(2*qs*Ms))),R=Math.acos(A),k=Math.atan2(_,D)+Math.atan2(Ms*Math.sin(R),qs+Ms*Math.cos(R));a.rotation.z=k,l.rotation.z=-R,h.rotation.z=-(k-R)},glow:d,light:f}},$p=(i,e,t)=>{let n=new It;n.position.set(e,0,t);let s=1.5,r=6,a=i.map((h,u)=>{let d=rv();return d.root.position.set(u===0?-1.35:1.45,.78,u===0?.15:-.15),n.add(d.root),d}),o=i.map(()=>0),l=Math.max(...i.map(h=>h.L))*s+r;return{group:n,update:h=>{let u=h%l;return i.forEach((d,f)=>{let g=u/s,x=g>=d.L,m=Math.min(d.L-1,Math.floor(g)),p=x?1:g-m;o[f]=x?d.L:m+p*.99;let b=(m+1)/d.L,_=d.z0+(m%2===0?p:1-p)*(d.z1-d.z0),y=a[f];x?y.reach(d.x+d.lean-.25,d.y0+d.h+.35,0):y.reach(d.x+d.lean*b*b,d.y0+(m+1)*(d.h/d.L)+.012,_);let D=!x;y.glow.visible=D,y.light.intensity=D?1.6+Math.random()*1.4:0,y.glow.scale.setScalar(D?.8+Math.random()*.6:1)}),o},prog:o}};var Mt={x0:-27.5,x1:20.5,z0:-20.5,z1:66.5,y0:.6,y1:9.5},Jt=32,Ss=1,Le=128,ni={x0:-2.5,x1:4.5,z:12.3},av=.12,$u=.62,Cl=340,qu=600,Ku={dark:263690,light:15856630},qp=1.62,Zu=1.5,$r=720,Ju=360,ju=360,Kp=[6087142,10194175,16758087,6280077,16747099,5089023],ci=[1,9],Kr=Ze.length,Pl=Ze.findIndex(i=>i.bonus),qr=Ze.findIndex(i=>i.id==="uc8"),Qu=Ze.findIndex(i=>i.id==="profile"),ov=Ze.findIndex(i=>i.id==="uc3"),Ks={droneFly:.75,droneScan:.45,hand:1.35,tlsRun:9},ed=.45,lv=4,Ba=50,cv=45,hv=32,uv=(i,e)=>(Math.imul(i,2654435761)>>>0)%100<(e?hv:cv),dv=`
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
    if (uXray > 0.5 && aG >= 0.0 && gi != ${Pl}) holo = true;
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
}`,fv=`
varying vec3 vCol;
void main(){ vec2 c = gl_PointCoord - 0.5; if (dot(c, c) > 0.25) discard; gl_FragColor = vec4(vCol, 1.0); }`,Xt=(i,e,t)=>i==="en"?t:e,Zp=i=>i.kind==="uc"?`UC${i.uc}`:i.kind==="docs"?"DOC":i.kind==="talks"?"TALK":i.kind==="bonus"?"\u2605":"ME",td=i=>ji.filter(e=>e.st===i.id);var Jp=(i,e,t)=>{let n=!1,s=0,r=()=>t.lang(),a=i.host,o=new kr({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1});o.setPixelRatio(Math.min(2,window.devicePixelRatio)),o.setSize(a.clientWidth,a.clientHeight),a.appendChild(o.domElement);let l=new Fr;l.fog=new qo(Ku.dark,28,70);let c=new dn(58,a.clientWidth/a.clientHeight,.03,200);l.add(c),l.add(new ul(10470655,1053724,1.1));let h=new Gr(16777215,1.4);h.position.set(6,12,4),l.add(h);let u=new Zt({color:1909548,metalness:.6,roughness:.35}),d=new Zt({color:15265267,metalness:.2,roughness:.4}),f=new Zt({color:5089023,emissive:1727656,emissiveIntensity:.8}),g=new pl,x=new It;x.add(new Ee(new Kt(.3,.12,.42),d));let m=new Ee(new Kt(.2,.06,.26),u);m.position.y=.09,x.add(m);let p=new Ee(new Kt(.31,.02,.43),f);p.position.y=-.02,x.add(p);let b=[],_=new Ft({color:12375807,transparent:!0,opacity:.25,depthWrite:!1});for(let[M,C]of[[1,1],[1,-1],[-1,1],[-1,-1]]){let U=new Ee(new Kt(.04,.03,.46),u);U.position.set(M*.14,.02,C*.18),U.rotation.y=Math.atan2(M*.27,C*.36),x.add(U);let Z=new Ee(new vn(.035,.035,.06,12),u);Z.position.set(M*.27,.05,C*.36),x.add(Z);let ne=new Ee(new vn(.19,.19,.008,24),_);ne.position.set(M*.27,.085,C*.36),x.add(ne),b.push(ne);let fe=new Ee(new Pn(.02,8,8),new Ft({color:C<0?16777215:16726843}));fe.position.set(M*.27,0,C*.36),x.add(fe)}let y=new Ee(new Pn(.07,16,12),u);y.position.set(0,-.1,-.12),x.add(y),l.add(x),x.position.set(ci[0],.25,ci[1]);let D=document.createElement("canvas");D.width=D.height=64;{let M=D.getContext("2d"),C=M.createRadialGradient(32,32,0,32,32,32);C.addColorStop(0,"rgba(0,0,0,0.75)"),C.addColorStop(1,"rgba(0,0,0,0)"),M.fillStyle=C,M.fillRect(0,0,64,64)}let A=new Ft({map:new el(D),transparent:!0,depthWrite:!1}),R=new Ee(new Ci(1,1),A);R.rotation.x=-Math.PI/2,l.add(R);let k=new Ft({color:6087142,transparent:!0,opacity:.1,side:on,depthWrite:!1,blending:ms}),J=new Ee(new al(1,1,48,1,!0),k);l.add(J);let v=new Ft({color:6087142,transparent:!0,opacity:.6,side:on,depthWrite:!1}),w=new Ee(new $i(.95,1,64),v);w.rotation.x=-Math.PI/2,l.add(w);let O=new ri({color:12581119,transparent:!0,opacity:.9}),H=new Xi(new $t().setFromPoints([new I(0,0,0),new I(1,0,0)]),O);l.add(H);let Y=new It;Y.position.set(ci[0],0,ci[1]);let se=new Ee(new vn(.85,.9,.06,40),new Zt({color:2765116,metalness:.5,roughness:.4}));se.position.y=.03,Y.add(se);let F=new Ee(new $i(.6,.7,48),new Ft({color:6280077,transparent:!0,opacity:.8,side:on}));F.rotation.x=-Math.PI/2,F.position.y=.065,Y.add(F);let le=new Ee(new Kt(.5,.01,.1),new Ft({color:6280077}));le.position.y=.07,Y.add(le),l.add(Y);let K=new It;{let M=new Zt({color:9279400,metalness:.5,roughness:.45}),C=new Zt({color:16764730,roughness:.6}),U=ni.x1-ni.x0,Z=(ni.x0+ni.x1)/2;for(let Ae of[ni.x0-.12,ni.x1+.12]){let _e=new Ee(new Kt(.24,5.4,.3),M);_e.position.set(Ae,2.7,ni.z),K.add(_e);for(let ue=0;ue<6;ue++){let be=new Ee(new Kt(.25,.25,.31),C);be.position.set(Ae,.3+ue*.5,ni.z),be.rotation.z=Math.PI/4,K.add(be)}}let ne=new Ee(new Kt(U+.6,.6,.6),M);ne.position.set(Z,5.4,ni.z),K.add(ne);let fe=new Ee(new Kt(U,.05,1.6),new Zt({color:12107980,metalness:.4,roughness:.5}));fe.position.set(Z,5.25,ni.z-.9),K.add(fe)}K.visible=!1,l.add(K);let he={group:new It,pts:null,mat:null,t0:-1,shown:!1};he.group.visible=!1,l.add(he.group);let Ce=async()=>{let M=new Uint8Array(await ke("lab/portrait.bin")),C=new DataView(M.buffer),U=C.getUint16(0,!0),Z=C.getUint16(2,!0),ne=C.getUint16(4,!0),fe=C.getUint16(6,!0),Ae=Ze[Qu],_e=1.4,ue=_e*U/Z,be=Ae.x+1.55,Ve=1.55,ze=Ae.z,it=new Or(new Uint8Array(U*Z*4),U,Z,Wn),$e=it.image.data;for(let te=0;te<Z;te++)for(let Be=0;Be<U;Be++){let Xe=te*U+Be,ct=((Z-1-te)*U+Be)*4;$e[ct]=M[8+Xe*4],$e[ct+1]=M[8+Xe*4+1],$e[ct+2]=M[8+Xe*4+2],$e[ct+3]=255}it.colorSpace=gn,it.needsUpdate=!0;let xt=new Ee(new Ci(ue,_e),new Ft({map:it}));xt.position.set(be+.012,Ve,ze),xt.rotation.y=-Math.PI/2;let Qt=new Ee(new Kt(.03,_e+.08,ue+.08),new Zt({color:2764600,roughness:.6}));Qt.position.set(be+.03,Ve,ze),he.group.add(xt,Qt);for(let te of[-.35,.35]){let Be=new Ee(new vn(.018,.018,2.3,8),hn);Be.position.set(be+.18,1.1,ze+te),Be.rotation.z=-.12,he.group.add(Be)}let ln=[];for(let te=0;te<Z;te+=2)for(let Be=0;Be<U;Be+=2)M[8+(te*U+Be)*4+3]-ne>.04*(fe-ne)&&ln.push(te*U+Be);let ye=ln.length,tt=new Float32Array(ye*3),at=new Uint8Array(ye*3),jt=new Float32Array(ye);for(let te=0;te<ye;te++){let Be=ln[te],Xe=Be%U,ct=Math.floor(Be/U);tt[te*3]=be,tt[te*3+1]=Ve+(.5-ct/Z)*_e,tt[te*3+2]=ze+(Xe/U-.5)*ue,at[te*3]=M[8+Be*4],at[te*3+1]=M[8+Be*4+1],at[te*3+2]=M[8+Be*4+2],jt[te]=Math.max(0,Math.min(1,(M[8+Be*4+3]-ne)/(fe-ne)))}let X=new $t;X.setAttribute("position",new Ct(tt,3)),X.setAttribute("aCol",new Ct(at,3,!0)),X.setAttribute("aRel",new Ct(jt,1)),he.mat=new ei({uniforms:{uK:{value:0},uPx:{value:o.getPixelRatio()},uSweep:{value:0}},vertexShader:`attribute vec3 aCol; attribute float aRel; uniform float uK; uniform float uPx; uniform float uSweep; varying vec3 vC;
        void main(){ vec3 p = position; float s = clamp((uSweep - (1.55 + 0.7 - p.y) / 1.4) * 4.0, 0.0, 1.0); p.x -= aRel * 1.35 * uK * s;
          vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; vC = mix(aCol, vec3(0.55, 0.95, 1.0), (1.0 - s) * 0.6 + (s > 0.0 && s < 1.0 ? 0.4 : 0.0));
          gl_PointSize = clamp(uPx * 7.0 / max(0.1, -mv.z), 1.0, 4.0 * uPx); if (s <= 0.0) gl_PointSize = 0.0; }`,fragmentShader:"varying vec3 vC; void main(){ vec2 c = gl_PointCoord - 0.5; if (dot(c, c) > 0.25) discard; gl_FragColor = vec4(vC, 1.0); }"}),he.pts=new Xs(X,he.mat),he.pts.frustumCulled=!1,he.group.add(he.pts)},ve=new It,yt=new Ee(new Kt(.05,.16,.06),u);yt.position.set(0,-.06,0),yt.rotation.x=.35,ve.add(yt);let zt=new Ee(new Kt(.08,.07,.16),u);zt.position.set(0,.03,-.04),ve.add(zt);let ie=new It;ie.position.set(0,.03,-.14);let pe=new Ee(new vn(.04,.04,.05,20),d);pe.rotation.x=Math.PI/2,ie.add(pe);let Oe=new Ee(new Kt(.012,.03,.052),f);Oe.position.x=.036,ie.add(Oe),ve.add(ie);let Ue=new Ee(new Pn(.008,8,8),new Ft({color:6280077}));Ue.position.set(.03,.07,.02),ve.add(Ue),ve.scale.setScalar(.6),ve.position.set(.17,-.15,-.42),c.add(ve);let ht=48,st=new Float32Array(ht*6),vt=new $t;vt.setAttribute("position",new Ct(st,3));let Dt=new ri({color:16726876,transparent:!0,opacity:.55,blending:ms,depthWrite:!1}),ut=new Yi(vt,Dt);ut.frustumCulled=!1,l.add(ut);let N=[],hn=new Zt({color:2765116,metalness:.5,roughness:.5}),bt=(M,C=!1)=>{let U=new It,Z=C?new Ft({color:M,transparent:!0,opacity:.16,depthWrite:!1}):hn;for(let _e=0;_e<3;_e++){let ue=_e/3*Math.PI*2,be=new Ee(new vn(.012,.012,1.42,6),Z);be.position.set(Math.cos(ue)*.2,.68,Math.sin(ue)*.2),be.rotation.set(-Math.sin(ue)*.29,0,Math.cos(ue)*.29),U.add(be)}let ne=new It;ne.position.y=Zu-.12;let fe=new Ee(new Kt(.2,.24,.16),C?Z:new Zt({color:15265267,metalness:.2,roughness:.4}));fe.position.y=.12,ne.add(fe);let Ae=new Ee(new vn(.06,.06,.14,20),C?Z:new Zt({color:M,emissive:M,emissiveIntensity:.5,metalness:.6,roughness:.2}));return Ae.rotation.z=Math.PI/2,Ae.position.y=.2,ne.add(Ae),U.add(ne),{g:U,head:ne}},Je=bt(6087142,!0);Je.g.visible=!1,l.add(Je.g);let rt=Ze.map(M=>{if(M.bonus)return null;let C=new et(M.c),U=new It;U.position.set(M.x,0,M.z);let Z=new Ee(new $i(M.r-.08,M.r,72),new Ft({color:C,transparent:!0,opacity:.55,side:on,depthWrite:!1}));Z.rotation.x=-Math.PI/2,Z.position.y=.03,Z.visible=!1,U.add(Z);let ne=new Ee(new vn(.03,.03,7,8,1,!0),new Ft({color:C,transparent:!0,opacity:.2,depthWrite:!1}));ne.position.y=3.5,U.add(ne);let fe=new Ee(new ol(.22),new Zt({color:C,emissive:C,emissiveIntensity:.8,metalness:.3,roughness:.3}));fe.position.y=4.1,U.add(fe);let Ae=new Ee(new $i(.9,1,48),new Ft({color:C,transparent:!0,opacity:.5,side:on,depthWrite:!1}));return Ae.position.y=4.1,U.add(Ae),l.add(U),{g:U,ring:Z,beam:ne,gem:fe,pulse:Ae,c:C}}),gt={uT:{value:0},uPx:{value:o.getPixelRatio()},uPs:{value:t.flags.lite?1.4:1},uLight:{value:0},uMode:{value:0},uFeatK:{value:6},uMesh:{value:0},uXray:{value:0},uReg:{value:0},uWaamSeen:{value:0},uAna:{value:new Array(Kr).fill(0)},uHi:{value:new Array(Kr).fill(0)},uWaam:{value:new De(0,0)},uMatC:{value:Object.values($n).map(M=>new et(M.c))},uCad:{value:new Array(80).fill(0)},uCut:{value:new I(0,1.2,1)}},xe=0,P=0,E=0,W=null,$,ce,re,Ne,me,Ie,wt,de,we,Ke,qe,Te,St,Ye,Gt,z=new Float32Array($r*Ju),Se=0,ee=0,ae=new Array(Kr).fill(0),L=new Array(Kr).fill(0),G=Ze.map(()=>"hidden"),He=Ze.map(()=>0),Nt=Ze.map(()=>0),Rt=[],nt=[],an=[],un=new Int32Array(Le*Le),hi=new Int32Array(Le*Le),ws=new Int32Array(Le*Le),bi=new Int32Array(Le*Le),Zs=new Int32Array(Le*Le),Jr=new Int32Array(Le*Le),Ts=null,As=[],Rs=[0,0,0],fn=null,ii=null,jr=new wl,Js=document.createElement("canvas");Js.width=Cl,Js.height=qu;let js=Js.getContext("2d");js.fillStyle="#070a0f",js.fillRect(0,0,Cl,qu);let ts=(M,C)=>[(M-(Mt.x0-2))/(Mt.x1-Mt.x0+4)*Cl,(C-(Mt.z0-2))/(Mt.z1-Mt.z0+4)*qu],T=new Float32Array(Le*Le),B=(M,C)=>T[Math.max(0,Math.min(Le-1,Math.floor(C+Jt)))*Le+Math.max(0,Math.min(Le-1,Math.floor(M+Jt)))],j=Ze.map(()=>0),Q=Ze.map(()=>4.1),V=!1,ge=!1,Re={P:new Float32Array(0),I:new Float32Array(0),S:new Float32Array(0),CLS:new Uint8Array(0),GRP:new Int8Array(0),N:0,color:()=>null},ke=async(M,C)=>{let U=await fetch(M);if(!U.ok)throw new Error(`${M}: ${U.status}`);let Z=Number(U.headers.get("content-length")),ne=!!U.headers.get("content-encoding");if(!U.body)return U.arrayBuffer();let fe=U.body.getReader(),Ae=[],_e=0;for(;;){let{done:Ve,value:ze}=await fe.read();if(Ve)break;Ae.push(ze),_e+=ze.length,Z&&C?.(Math.min(.97,_e/(ne?Z*2.8:Z)))}let ue=new Uint8Array(_e),be=0;for(let Ve of Ae)ue.set(Ve,be),be+=Ve.length;return ue.buffer},We=async()=>{let[M,C,U]=await Promise.all([ke("lab/scene.bin",ye=>!n&&e.loaded(Math.min(.97,ye))),ke("lab/clusters.json").then(ye=>JSON.parse(new TextDecoder().decode(ye))),ke("lab/cad.json").then(ye=>JSON.parse(new TextDecoder().decode(ye)))]);if(n)return;let Z=new DataView(M);xe=Z.getUint32(4,!0),P=Z.getUint32(8,!0);let ne=new TextDecoder().decode(new Uint8Array(M,0,4))==="XAV2",fe=ne?[Z.getFloat32(12,!0),Z.getFloat32(16,!0),Z.getFloat32(20,!0)]:[0,0,0],Ae=ne?Z.getFloat32(24,!0):1e3,_e=ne?28:12,ue=new Int16Array(M,_e,xe*3);_e+=xe*6;let be=new Uint8Array(M,_e,xe);_e+=xe,Ne=new Uint8Array(M,_e,xe),_e+=xe,me=new Int8Array(M,_e,xe),_e+=xe,Ie=new Int8Array(M,_e,xe),_e+=xe,wt=new Uint8Array(M,_e,xe),_e+=xe,de=new Int16Array(M.slice(_e,_e+xe*2)),_e+=xe*2;let Ve=new Int16Array(M.slice(_e,_e+xe*2));_e+=xe*2;let ze=new Uint8Array(M,_e,xe);if(E=xe,t.flags.lite){W=new Int32Array(Math.ceil(xe/2));for(let tt=0;tt<W.length;tt++)W[tt]=tt*2;let ye=(tt,at=1)=>{let jt=new tt.constructor(W.length*at);for(let X=0;X<W.length;X++)for(let te=0;te<at;te++)jt[X*at+te]=tt[W[X]*at+te];return jt};ue=ye(ue,3),be=ye(be),Ne=ye(Ne),me=ye(me),Ie=ye(Ie),wt=ye(wt),de=ye(de),Ve=ye(Ve),ze=ye(ze),xe=W.length}Rt=C.clusters,As=C.feat,Rs=U.plane,nt=new Array(Rt.length).fill(0),an=new Array(Rt.length).fill(0),$=new Float32Array(xe*3);for(let ye=0;ye<xe*3;ye++)$[ye]=ue[ye]/Ae+fe[ye%3];re=new Float32Array(xe);let it=new Uint8Array(xe*3);we=new Int32Array(Le*Le+1);for(let ye=0;ye<xe;ye++){re[ye]=be[ye]/255;let tt=$[ye*3],at=$[ye*3+1],jt=$[ye*3+2],X=Math.max(0,Math.min(Le-1,Math.floor(jt+Jt)))*Le+Math.max(0,Math.min(Le-1,Math.floor(tt+Jt)));if(we[X+1]++,Zs[X]++,Ie[ye]>=0&&ae[Ie[ye]]++,me[ye]>=0){let te=Ze[me[ye]].parts[wt[ye]].c;it[ye*3]=te[0]*255,it[ye*3+1]=te[1]*255,it[ye*3+2]=te[2]*255,Nt[me[ye]]=Math.max(Nt[me[ye]],at)}else tt>Mt.x0&&tt<Mt.x1&&jt>Mt.z0&&jt<Mt.z1&&Se++,Ne[ye]===1?un[X]++:ws[X]++;de[ye]>=0&&nt[de[ye]]++}for(let ye=1;ye<=Le*Le;ye++)we[ye]+=we[ye-1];{let ye=new Float32Array(Le*Le),tt=new Uint32Array(Le*Le);for(let at=0;at<xe;at++)if(Ne[at]===1&&me[at]<0){let jt=Math.max(0,Math.min(Le-1,Math.floor($[at*3+2]+Jt)))*Le+Math.max(0,Math.min(Le-1,Math.floor($[at*3]+Jt)));ye[jt]+=$[at*3+1],tt[jt]++}for(let at=0;at<Le*Le;at++)T[at]=tt[at]?ye[at]/tt[at]:NaN;for(let at=0;at<6;at++)for(let jt=0;jt<Le*Le;jt++){if(!Number.isNaN(T[jt]))continue;let X=0,te=0;for(let Be of[1,-1,Le,-Le]){let Xe=T[jt+Be];Xe!==void 0&&!Number.isNaN(Xe)&&(X+=Xe,te++)}te&&(T[jt]=X/te)}for(let at=0;at<Le*Le;at++)Number.isNaN(T[at])&&(T[at]=0)}ce=new Float32Array(xe).fill(-1),St=new Int32Array(xe),Ye=new Int32Array(xe),Gt=new Float32Array(xe);let $e=new $t;$e.setAttribute("position",new Ct($,3)),$e.setAttribute("aI",new Ct(be,1,!0)),$e.setAttribute("aCls",new Ct(Ne,1)),$e.setAttribute("aG",new Ct(me,1)),$e.setAttribute("aP",new Ct(wt,1)),$e.setAttribute("aClu",new Ct(de,1)),$e.setAttribute("aW",new Ct(Ve,1)),$e.setAttribute("aM",new Ct(ze,1)),$e.setAttribute("aC",new Ct(it,3,!0)),Ke=new Ct(ce,1),Ke.setUsage(yl),$e.setAttribute("aS",Ke),qe=new Ct(new Uint8Array(xe),1,!0),qe.setUsage(yl),$e.setAttribute("aF",qe),Te=new Ct(new Float32Array(xe*3),3),Te.setUsage(yl),$e.setAttribute("aO",Te);let xt=new Xs($e,new ei({vertexShader:dv,fragmentShader:fv,uniforms:gt}));xt.frustumCulled=!1,l.add(xt),Object.assign(Re,{P:$,I:re,S:ce,CLS:Ne,GRP:me,N:xe,color:ye=>me[ye]>=0&&G[me[ye]]==="done"?Ze[me[ye]].parts[wt[ye]].c:null});let Qt=await ke("lab/stations.glb").then(ye=>new Sl().parseAsync(ye,"")).catch(()=>null);U.stations.forEach((ye,tt)=>j[tt]=ye.y0??0),Ze.forEach((ye,tt)=>{Q[tt]=Math.max(j[tt]+4.1,Nt[tt]+1.1);let at=rt[tt];at&&(at.ring.position.y=j[tt]+.03,at.beam.scale.y=(Q[tt]+.6)/7,at.beam.position.y=(Q[tt]+.6)/2)}),fn=Op(U,Rt,Qt?.scene),l.add(fn.group);let ln=U.stations[qr];ii=$p(ln.prims.filter(ye=>ye.k==="waam"),ln.x,ln.z),ii.group.visible=!1,l.add(ii.group),om(),Ce().catch(()=>{}),ge=!0,e.loaded(1),t.flags.allskills&&ji.forEach(ye=>je.add(ye.id)),Et(),t.flags.auto&&setTimeout(()=>Pd.start(),300)},lt=M=>{let C=M==="light";o.setClearColor(Ku[M]),l.fog.color.setHex(Ku[M]),gt.uLight.value=C?1:0,k.blending=C?Vi:ms,k.color.setHex(C?689350:6087142),k.needsUpdate=!0,v.color.setHex(C?689350:6087142),O.color.setHex(C?683952:12581119),_.color.setHex(C?4872816:12375807),Dt.blending=C?Vi:ms,Dt.needsUpdate=!0,A.opacity=C?.55:.9};lt("dark");let je=new Set,oe={unlocked:[],color:"normal",mesh:!1,meshMode:"all",meshVS:.2,xray:!1,measure:!1,auto:t.flags.auto,labels:!1,feat:6,featState:"idle",nbv:!1,cut:{mode:0,pos:1.2,flip:!1}},Et=()=>e.skills({...oe,unlocked:[...je]}),Ht=()=>je.has("range")?1.5:1,tn=()=>je.has("net")?6:3,Pt=t.tech,dt={drone:100,handheld:100,tls:100},Fe={drone:!1,handheld:!1,tls:!1},nn={},Ut=(M,C)=>t.flags.nobattery?!0:Fe[M]?!1:(dt[M]=Math.max(0,dt[M]-C),dt[M]<=25&&!nn[M+"25"]&&(nn[M+"25"]=!0,e.toast(Xt(r(),"Akku unter 25 % \u2013 effizient scannen oder zur Ladestation","Battery below 25 % \u2013 scan efficiently or return to the charging pad"),"#ffb547")),dt[M]<=0?(Fe[M]=!0,nn[M+"25"]=!1,e.toast(Xt(r(),`${bn(M)} leer \u2013 l\xE4dt ca. ${Math.round(Ba/ed)} s. Teste solange die anderen Technologien (1 2 3).`,`${bn(M)} empty \u2013 charging for about ${Math.round(Ba/ed)} s. Try the other technologies meanwhile (1 2 3).`),"#ff5a5f"),!1):!0),bn=M=>M==="drone"?Xt(r(),"Drohne","Drone"):M==="handheld"?"Handheld":"TLS",Mi=!1,Rn=0,qn=[],sn=new Map,Bn=null,Mn=new I,In=new I(1,0,0),Cs=0,Ha=(M,C,U)=>{!V&&Math.abs($[M*3+2]-ni.z)<1.2&&$[M*3]>ni.x0-2&&$[M*3]<ni.x1+2&&(V=!0,K.visible=!0,e.toast(Xt(r(),"Hallentor entdeckt \u2013 drau\xDFen wartet die echte Referenzbaustelle Aachen","Hall gate discovered \u2013 outside awaits the real Reference Construction Site Aachen"),"#5fd38d")),Ka=!0,ce[M]=C+Math.random()*.25;let Z=Ie[M];Z>=0&&L[Z]++;let ne=$[M*3],fe=$[M*3+1],Ae=$[M*3+2];if(de[M]>=0&&an[de[M]]++,U&&(U.x||U.z)&&(Te.array[M*3]=U.x,Te.array[M*3+1]=U.y,Te.array[M*3+2]=U.z,Cs++),Jr[Math.max(0,Math.min(Le-1,Math.floor(Ae+Jt)))*Le+Math.max(0,Math.min(Le-1,Math.floor(ne+Jt)))]++,me[M]<0){ee++;let _e=Math.max(0,Math.min(Le-1,Math.floor(Ae+Jt)))*Le+Math.max(0,Math.min(Le-1,Math.floor(ne+Jt)));if(Ne[M]===1?hi[_e]++:bi[_e]++,M%3===0){let[ue,be]=ts(ne,Ae);js.fillStyle=fe>2.5?"rgba(92,225,230,0.5)":"rgba(150,170,200,0.35)",js.fillRect(ue,be,1.6,1.6)}}(Ne[M]!==1||M%3===0)&&(M%2===0||me[M]>=0)&&jr.add(ne,fe,Ae,Ne[M]),oe.mesh&&oe.meshMode!=="cad"&&Qr(M)},Qr=M=>{let C=$[M*3],U=$[M*3+1],Z=$[M*3+2];oe.meshMode==="all"||me[M]<0?Bn?.add(C,U,Z):de[M]>=0&&sn.get(de[M])?.add(C,U,Z)},id=(M,C,U,Z,ne,fe,Ae,_e)=>{let ue=Math.max(0,Math.floor((M+Jt)/Ss)),be=Math.min(Le-1,Math.floor((C+Jt)/Ss)),Ve=Math.max(0,Math.floor((U+Jt)/Ss)),ze=Math.min(Le-1,Math.floor((Z+Jt)/Ss)),it=!1,$e=0;for(let xt=Ve;xt<=ze;xt++){let Qt=we[xt*Le+ue],ln=we[xt*Le+be+1],ye=!1;for(let tt=Qt;tt<ln;tt++)ce[tt]>=0||!ne(tt)||(Ha(tt,fe,_e),Ae?.(tt),ye=!0,$e++);ye&&(Ke.addUpdateRange(Qt,ln-Qt),_e&&Te.addUpdateRange(Qt*3,(ln-Qt)*3),it=!0)}return it&&(Ke.needsUpdate=!0,_e&&(Te.needsUpdate=!0)),$e},sm=(M,C)=>{z.fill(1e9);let U=M.x,Z=M.z,ne=Math.max(0,Math.floor((U-C+Jt)/Ss)),fe=Math.min(Le-1,Math.floor((U+C+Jt)/Ss)),Ae=Math.max(0,Math.floor((Z-C+Jt)/Ss)),_e=Math.min(Le-1,Math.floor((Z+C+Jt)/Ss)),ue=0;for(let ze=Ae;ze<=_e;ze++){let it=we[ze*Le+ne],$e=we[ze*Le+fe+1];for(let xt=it;xt<$e;xt++){let Qt=$[xt*3]-U,ln=$[xt*3+1]-M.hy,ye=$[xt*3+2]-Z,tt=Qt*Qt+ye*ye,at=Math.sqrt(tt+ln*ln);if(at>C||at<.35)continue;let jt=Math.floor((Math.atan2(ye,Qt)+Math.PI)/(2*Math.PI)*$r)%$r,te=Math.min(Ju-1,Math.floor((Math.atan2(ln,Math.sqrt(tt))+Math.PI/2)/Math.PI*Ju))*$r+jt;at<z[te]&&(z[te]=at),St[ue]=xt,Ye[ue]=te,Gt[ue]=at,ue++}}let be=Array.from({length:ju},()=>[]),Ve=[];for(let ze=0;ze<ue;ze++){let it=St[ze],$e=Gt[ze],xt=Ye[ze];if($e>z[xt]*1.02+.06||(Ve.push(it),ce[it]>=0))continue;let Qt=$e<6?1:1-.75*($e-6)/(C-6);Math.random()>Qt||be[Math.floor(xt%$r/$r*ju)].push(it)}M.buckets=be,M.vis=Int32Array.from(Ve)},rm=()=>{for(let C of qn)C.m.dispose();if(qn=[],sn.clear(),Bn=null,!oe.mesh||oe.meshMode==="cad"||!ge)return;let M=oe.meshVS;if(Bn=new Fa({min:[-28,-.5,-21],max:[21,10,67],vs:Math.max(M,.15)}),qn.push({m:Bn,clu:-1}),oe.meshMode==="obj")for(let C of Rt){let U=C.max[0]-C.min[0],Z=C.max[1]-C.min[1],ne=C.max[2]-C.min[2],fe=Math.max(.05,2*(U*Z+Z*ne+U*ne)),Ae=Math.max(.025,Math.min(.12,Math.sqrt(3.5/(C.n/fe))*(M/.2))),_e=Ze[C.g].parts[C.p].c,ue=new Fa({min:[C.min[0]-Ae*2,C.min[1]-Ae*2,C.min[2]-Ae*2],max:[C.max[0]+Ae*2,C.max[1]+Ae*2,C.max[2]+Ae*2],vs:Ae,color:[_e[0],_e[1],_e[2]],iso:.45});sn.set(C.id,ue),qn.push({m:ue,clu:C.id})}for(let C of qn)l.add(C.m.group);for(let C=0;C<xe;C++)ce[C]>=0&&Qr(C);for(let C of qn)C.m.touchAll()},sd=()=>{gt.uMesh.value=oe.mesh?oe.meshMode==="all"?1:oe.meshMode==="obj"?2:3:0,fn&&(fn.group.visible=oe.mesh&&oe.meshMode==="cad"),rm(),qa()},am=()=>{if(!(!fn||!fn.group.visible)){for(let[M,C]of fn.cluObjs){let U=nt[M]>0&&an[M]/nt[M]>=.5;gt.uCad.value[M]=U?1:0;for(let Z of C)Z.visible=U}for(let M of fn.blocks){let C=0,U=0;for(let Z of M.cells)C+=ws[Z],U+=bi[Z];M.m.visible=C>0&&U/C>=.3}fn.floor.cells.forEach((M,C)=>fn.floor.show(C,un[M]>0&&hi[M]/un[M]>=.3));for(let M of fn.waam){let C=ii?ii.prog[M.p]:M.L;M.meshes.forEach((U,Z)=>U.visible=U.visible&&Z<C)}}},rd=async M=>{if(oe.feat=M,gt.uFeatK.value=M,M===16){let Z=qe.array;for(let ne=0;ne<xe;ne++)Z[ne]=Ne[ne]===1&&me[ne]<0&&$[ne*3+2]<12?Math.round(Math.max(0,Math.min(1,($[ne*3+1]-(Rs[0]*$[ne*3]+Rs[1]*$[ne*3+2]+Rs[2]))/.04*.5+.5))*255):0;qe.needsUpdate=!0,Et();return}if(!Ts){if(oe.featState==="loading")return;oe.featState="loading",Et(),Ts=new Uint8Array(await ke("lab/feats.bin")),oe.featState="ready"}let C=qe.array,U=M*E;if(W)for(let Z=0;Z<xe;Z++)C[Z]=Ts[U+W[Z]];else C.set(Ts.subarray(U,U+xe));qe.needsUpdate=!0,Et()},ad=[],om=()=>{i.clu.innerHTML="";for(let M of Rt){let C=document.createElement("div");C.className="lab-clu";let U=Ze[M.g].parts[M.p].c;C.style.borderColor=`rgb(${U.map(Z=>Math.round(Z*255)).join(",")})`,i.clu.appendChild(C),ad.push(C)}},ea=new It;l.add(ea);let Pi=new Set,Nl=-99,od="",lm=M=>{let U=M.toLowerCase().split(/[\s,;]+/).filter(fe=>fe.length>1).flatMap(fe=>[fe,...Ml[fe]??[]]);ea.clear(),Pi=new Set;let Z=new Set;for(let fe of Rt){let Ae=Ze[fe.g].parts[fe.p],_e=[fe.name.de,fe.name.en,ot(Ae.name,"de"),ot(Ae.name,"en")].map(Ve=>Ve.toLowerCase());if(!U.some(Ve=>_e.some(ze=>ze.includes(Ve)))||fe.g===Pl&&G[Pl]==="hidden")continue;Pi.add(fe.id),Z.add(fe.g);let ue=new Yn(new I(fe.min[0]-.05,fe.min[1]-.05,fe.min[2]-.05),new I(fe.max[0]+.05,fe.max[1]+.05,fe.max[2]+.05)),be=new ml(ue,new et(16724804));be.material.depthTest=!1,be.renderOrder=5,ea.add(be)}Nl=g.elapsedTime,od=M,Z.forEach(fe=>gt.uHi.value[fe]=Nl);let ne=[...new Set(Rt.filter(fe=>Pi.has(fe.id)).map(fe=>ot(Ze[fe.g].parts[fe.p].name,r()).split(" \xB7 ")[0]))];return e.toast(Pi.size?`Zero-Shot \u201E${M}\u201C \u2192 ${Pi.size} ${Xt(r(),"Objekte","objects")}: ${ne.join(", ")}`:Xt(r(),`Zero-Shot \u201E${M}\u201C: kein Treffer`,`Zero-shot "${M}": no match`),"#ff3344"),Pi.size},Ps=[],Va=new It;l.add(Va);let cm=new Ft({color:16764784,depthTest:!1}),hm=(M,C)=>{let U=new pt().multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse).elements,Z=a.clientWidth,ne=a.clientHeight,fe=-1,Ae=1e9;for(let _e=0;_e<xe;_e++){if(ce[_e]<0)continue;let ue=$[_e*3],be=$[_e*3+1],Ve=$[_e*3+2],ze=U[3]*ue+U[7]*be+U[11]*Ve+U[15];if(ze<=.05)continue;let it=((U[0]*ue+U[4]*be+U[8]*Ve+U[12])/ze+1)*.5*Z,$e=(1-(U[1]*ue+U[5]*be+U[9]*Ve+U[13])/ze)*.5*ne,xt=(it-M)**2+($e-C)**2;if(xt>100)continue;let Qt=ze+xt*.002;Qt<Ae&&(Ae=Qt,fe=_e)}return fe},um=(M,C)=>{let U=hm(M,C);if(U<0)return e.toast(Xt(r(),"Kein gescannter Punkt unter dem Cursor","No scanned point under the cursor"),"#ffcf70");let Z=new I($[U*3],$[U*3+1],$[U*3+2]),ne=Ps[Ps.length-1],fe=new Ee(new Pn(.035,10,8),cm);if(fe.position.copy(Z),fe.renderOrder=6,!ne||ne.b){let Ae=new It;Ae.add(fe),Va.add(Ae);let _e=document.createElement("div");if(_e.className="lab-meas",i.meas.appendChild(_e),Ps.push({a:Z,obj:Ae,el:_e}),Ps.length>6){let ue=Ps.shift();Va.remove(ue.obj),ue.el.remove()}}else{ne.b=Z,ne.obj.add(fe);let Ae=new Xi(new $t().setFromPoints([ne.a,Z]),new ri({color:16764784,depthTest:!1}));Ae.renderOrder=6,ne.obj.add(Ae);let _e=ne.a.distanceTo(Z);ne.el.textContent=`${(_e*1e3).toLocaleString(r()==="en"?"en-GB":"de-DE",{maximumFractionDigits:0})} mm`}},ld=()=>{Ps.splice(0).forEach(M=>(Va.remove(M.obj),M.el.remove()))},Hn=0,Qs=.42,ta=4.2,er=-.12,ui=new I,pn=new I(ci[0],0,ci[1]),Dl=new I,Ga=0,na=0,Sn=!1,Ul=0,kl=!1,kn=t.flags.auto,ft={phase:"go",target:-1,t0:0,lastProg:0,lastProgT:0,alt:3.6,ang:0,cardI:-1,cardT:0},Fl=[.1,.25,.5,.75],tr={},Si=()=>Pt==="drone"?x.position:pn,Ii=new Map,nr=0,Ol=()=>{let[M,C]=[...Ii.values()];return Math.hypot(M.x-C.x,M.y-C.y)},cd=M=>{M.target.closest(".lab-ui, .lab-label")||(Ii.set(M.pointerId,{x:M.clientX,y:M.clientY,moved:0}),Ii.size===2&&(nr=Ol()))},hd=M=>{let C=Ii.get(M.pointerId);if(!C)return;let U=M.clientX-C.x,Z=M.clientY-C.y;if(C.moved+=Math.abs(U)+Math.abs(Z),C.x=M.clientX,C.y=M.clientY,Ii.size>=2){let fe=Ol();nr>0&&fe>0&&(Pt==="drone"?ta=Math.max(1.8,Math.min(14,ta*(nr/fe))):(c.fov=Math.max(35,Math.min(80,c.fov*(nr/fe))),c.updateProjectionMatrix())),nr=fe;return}let ne=M.pointerType==="touch"?1.5:1;Pt==="drone"?(Hn-=U*.006*ne,Qs=Math.max(.05,Math.min(1.35,Qs+Z*.004*ne))):(Hn-=U*.005*ne,er=Math.max(-1.3,Math.min(1.3,er-Z*.004*ne)))},Wa=M=>{let C=Ii.get(M.pointerId);if(C){if(Ii.size===1&&C.moved<8&&oe.measure&&ge){let U=a.getBoundingClientRect();um(M.clientX-U.left,M.clientY-U.top)}Ii.delete(M.pointerId),nr=Ii.size===2?Ol():0}},Xa={f:0,r:0},ud=M=>{ta=Math.max(1.8,Math.min(14,ta*(1+Math.sign(M.deltaY)*.1))),M.preventDefault()},zl=()=>{let M=Si(),C=-1,U=1e9;return Ze.forEach((Z,ne)=>{if(Z.bonus&&G[ne]==="hidden")return;let fe=Math.hypot(M.x-Z.x,M.z-Z.z);fe<Z.r+1.2&&fe<U&&(U=fe,C=ne)}),C},Bl=M=>{if(M===Pt)return!0;if(Fe[M])return e.toast(Xt(r(),`${bn(M)} l\xE4dt noch (${Math.round(dt[M])} %) \u2013 ab ${Ba} % wieder einsatzbereit`,`${bn(M)} still charging (${Math.round(dt[M])} %) \u2013 ready again at ${Ba} %`),"#ffb547"),e.tech(Pt),!1;if(M==="drone"?(x.position.set(pn.x,1.4,pn.z),ui.set(0,0,0),Ul=g.elapsedTime):(pn.set(Si().x,0,Si().z),kn&&!t.flags.auto&&Ya(!1)),M==="handheld"){Mn.set(0,0,0);let C=Math.random()*Math.PI*2;In.set(Math.cos(C),0,Math.sin(C))}return Pt=M,e.tech(M),!0},Ya=M=>{kn=M,oe.auto=M,ft.phase="go",ft.target=-1,Et()},$a=M=>{oe.color=oe.color===M?"normal":M,gt.uMode.value={normal:0,seg:1,heat:2,therm:3,mat:4}[oe.color],oe.color==="heat"&&rd(oe.feat),Et()},Li=null,Hl=new gi(new I(0,-1,0),1.2),Vn=new It;Vn.add(new Ee(new Ci(1,1),new Ft({color:16742973,transparent:!0,opacity:.06,side:on,depthWrite:!1}))),Vn.add(new Yi(new Ra(new Ci(1,1)),new ri({color:16742973,transparent:!0,opacity:.7}))),Vn.visible=!1,l.add(Vn),o.localClippingEnabled=!0;let qa=()=>{let{mode:M,pos:C,flip:U}=oe.cut,Z=U?-1:1;gt.uCut.value.set(M,C,Z);let ne=M===2?new I(1,0,0):M===3?new I(0,0,1):new I(0,1,0);Hl.normal.copy(ne).multiplyScalar(-Z),Hl.constant=C*Z;let fe=new Set,Ae=ze=>ze?.traverse(it=>{let $e=it.material;$e&&(Array.isArray($e)?$e:[$e]).forEach(xt=>fe.add(xt))});Ae(fn?.group),Ae(ii?.group),Ae(Fn.group);for(let ze of qn)fe.add(ze.m.mat);for(let ze of fe){let it=M?[Hl]:null;(ze.clippingPlanes?.length??0)!==(it?.length??0)&&(ze.clippingPlanes=it,ze.needsUpdate=!0)}Vn.visible=M>0;let _e=Mt.x1-Mt.x0+2,ue=Mt.z1-Mt.z0+2,be=(Mt.x0+Mt.x1)/2,Ve=(Mt.z0+Mt.z1)/2;Vn.rotation.set(0,0,0),M===1?(Vn.position.set(be,C,Ve),Vn.rotation.x=-Math.PI/2,Vn.scale.set(_e,ue,1)):M===2?(Vn.position.set(C,3.3,Ve),Vn.rotation.y=Math.PI/2,Vn.scale.set(ue,6.8,1)):M===3&&(Vn.position.set(be,3.3,C),Vn.scale.set(_e,6.8,1)),Et()},Ei=[],Ka=!1,dd=-99,fd=()=>{for(let M of Ei)l.remove(M.g),M.el.remove();Ei=[]},xv=M=>M>=1e3?(M/1e3).toLocaleString(r()==="en"?"en-GB":"de-DE",{maximumFractionDigits:1})+"k":String(Math.round(M)),pd=()=>{if(!ge)return;Ka=!1,dd=g.elapsedTime;let M=new Float32Array(Le*Le),C=new Uint16Array(Le*Le);for(let ue=0;ue<Le*Le;ue++)for(let be=we[ue];be<we[ue+1];be++)if(ce[be]<0){let Ve=$[be*3],ze=$[be*3+2];(me[be]>=0||Ve>Mt.x0&&Ve<Mt.x1&&ze>Mt.z0&&ze<Mt.z1)&&M[ue]++}else Ne[be]!==1&&$[be*3+1]>.3&&$[be*3+1]<2.2&&C[ue]++;let U=ue=>C[ue]>(W?15:30),Z=15*Ht(),ne=Math.ceil(Z),fe=[];for(let ue=Math.ceil(Mt.z0+Jt)+1;ue<Mt.z1+Jt-1;ue+=2)for(let be=Math.ceil(Mt.x0+Jt)+1;be<Mt.x1+Jt-1;be+=2){let Ve=ue*Le+be;if(!un[Ve]||U(Ve))continue;let ze=0;for(let it=-ne;it<=ne;it++)for(let $e=-ne;$e<=ne;$e++){let xt=be+$e,Qt=ue+it;if(xt<0||Qt<0||xt>=Le||Qt>=Le)continue;let ln=M[Qt*Le+xt];if(!ln)continue;let ye=Math.hypot($e,it);if(ye>Z)continue;let tt=(ye<6?1:1-.75*(ye-6)/(Z-6))*1.1,at=1,jt=Math.ceil(ye*2);for(let X=2;X<jt-1;X++)if(U(Math.round(ue+it*X/jt)*Le+Math.round(be+$e*X/jt))){at=.12;break}ze+=ln*tt*at}fe.push({x:be-Jt+.5,z:ue-Jt+.5,gain:ze})}fe.sort((ue,be)=>be.gain-ue.gain);let Ae=[];for(let ue of fe){if(Ae.length>=3||ue.gain<Se*.005)break;Ae.every(be=>Math.hypot(be.x-ue.x,be.z-ue.z)>6)&&N.every(be=>Math.hypot(be.x-ue.x,be.z-ue.z)>2.5)&&Ae.push(ue)}fd();let _e=16751165;Ae.forEach((ue,be)=>{let Ve=new It;Ve.position.set(ue.x,0,ue.z);let ze=new Ee(new $i(.42,.5,40),new Ft({color:_e,transparent:!0,opacity:.85,side:on,depthWrite:!1}));ze.rotation.x=-Math.PI/2,ze.position.y=.04,Ve.add(ze),Ve.add(bt(_e,!0).g);let it=new Ee(new vn(.02,.02,3.2,6,1,!0),new Ft({color:_e,transparent:!0,opacity:.35,depthWrite:!1}));it.position.y=3.4,Ve.add(it),l.add(Ve);let $e=document.createElement("div");$e.className="lab-nbv",$e.textContent=`${be+1} \xB7 +${Math.max(1,Math.round(100*ue.gain/Se))} % ${Xt(r(),"Halle","hall")}`,i.meas.appendChild($e),Ei.push({...ue,g:Ve,el:$e})}),Ae.length||e.toast(Xt(r(),"Scan-Planer: kaum noch Neuzuwachs \u2013 die Halle ist weitgehend erfasst","Scan planner: hardly any gain left \u2013 the hall is largely captured"),"#ff9a3d")},md=[8161952,4054148,16758087,16731486],gd=md.map((M,C)=>new Ft({color:M,transparent:!0,opacity:[.07,.3,.42,.42][C],depthWrite:!1,side:on})),xd=md.map((M,C)=>new ri({color:M,transparent:!0,opacity:[.25,.8,.95,.95][C]})),Fn={group:new It,items:[],state:"idle",t:-9};Fn.group.visible=!1,l.add(Fn.group);let _d=(M,C)=>{M.computeBoundingBox();let U=M.boundingBox,Z=new Ee(M,gd[0]),ne=new Yi(new Ra(M,25),xd[0]);Z.renderOrder=3,ne.renderOrder=4,Fn.group.add(Z,ne),Fn.items.push({fill:Z,line:ne,bb:[U.min.x,U.min.z,U.max.x,U.max.z],st:-1,g:-1,...C})},dm=async()=>{if(Fn.state="loading",fn){fn.group.updateMatrixWorld(!0);for(let[M,C]of fn.cluObjs){let U=Rt[M],Z=/statt|versetzt|abweichung/i.test(ot(Ze[U.g].parts[U.p].name,"de"));for(let ne of C)ne.traverse(fe=>{let Ae=fe;if(!Ae.isMesh)return;let _e=Ae.geometry.clone();_e.applyMatrix4(Ae.matrixWorld),_d(_e,{clu:M,dev:Z,g:U.g})})}}try{let M=await ke("lab/plan.bin"),C=new DataView(M),U=C.getUint32(4,!0),Z=8;for(let ne=0;ne<U;ne++){let fe=C.getUint8(Z+1),Ae=C.getUint32(Z+2,!0),_e=C.getUint32(Z+6,!0);Z+=10;let ue=new Float32Array(M.slice(Z,Z+Ae*12));Z+=Ae*12;let be=new Uint32Array(M.slice(Z,Z+_e*12));Z+=_e*12;let Ve=new $t;Ve.setAttribute("position",new Ct(ue,3)),Ve.setIndex(new Ct(be,1)),_d(Ve,{ver:fe,g:ov})}}catch(M){console.error("plan.bin "+String(M?.stack??M)),e.toast(Xt(r(),"Planungsmodell konnte nicht geladen werden","Planning model could not be loaded"),"#ff5a5f")}Fn.state="ready",qa(),Gl(!0)},fm=M=>{let C=0,U=0;for(let Z=Math.floor(M[1]+Jt);Z<=Math.floor(M[3]+Jt);Z++)for(let ne=Math.floor(M[0]+Jt);ne<=Math.floor(M[2]+Jt);ne++)ne<0||Z<0||ne>=Le||Z>=Le||(C+=Zs[Z*Le+ne],U+=Jr[Z*Le+ne]);return C?U/C:0},Vl=null,Gl=(M=!1)=>{if(Fn.state!=="ready")return;let C={ok:0,dev:0,miss:0,open:0,total:Fn.items.length,rs:{ok:0,miss:0,open:0,total:0}};for(let U of Fn.items){let Z=G[U.g]!=="hidden";if(U.fill.visible=U.line.visible=Z,!Z)continue;let ne;U.clu!==void 0?ne=(nt[U.clu]?an[U.clu]/nt[U.clu]:0)>=.5?U.dev?2:1:0:(ne=fm(U.bb)>=.45?U.ver?1:3:0,C.rs.total++,ne===1?C.rs.ok++:ne===3?C.rs.miss++:C.rs.open++),ne===1?C.ok++:ne===2?C.dev++:ne===3?C.miss++:C.open++,(M||ne!==U.st)&&(U.st=ne,U.fill.material=gd[ne],U.line.material=xd[ne])}Vl=C},Wl=M=>{if(je.has(M)){if(M==="seg"&&$a("seg"),M==="heat"&&$a("heat"),M==="therm"&&$a("therm"),M==="mat"&&$a("mat"),M==="mesh"&&(oe.mesh=!oe.mesh,sd()),M==="xray"&&(oe.xray=!oe.xray,Fn.group.visible=oe.xray,oe.xray&&Fn.state==="idle"&&dm(),oe.xray?Fn.state==="ready"&&Gl(!0):Vl=null),M==="measure"&&(oe.measure=!oe.measure,oe.measure?e.toast(Xt(r(),"Messen: zwei gescannte Punkte anklicken","Measure: click two scanned points"),"#ffcf70"):ld()),M==="auto"){if(!kn&&Fe.drone)return e.toast(Xt(r(),"Drohne l\xE4dt noch \u2013 Autopilot sp\xE4ter","Drone still charging \u2013 autopilot later"),"#ffb547");Ya(!kn),kn&&Bl("drone")}M==="search"&&e.search(),M==="ask"&&e.ask(),M==="icp"&&pm(),M==="nbv"&&(oe.nbv=!oe.nbv,oe.nbv?(pd(),Pt!=="tls"&&e.toast(Xt(r(),"Scan-Planer: orange Standpunkte \u2013 wechsle zu TLS (3) und stelle dort Scanner auf (P)","Scan planner: orange positions \u2013 switch to TLS (3) and set up scanners there (P)"),"#ff9a3d")):fd()),M==="cut"&&(oe.cut={...oe.cut,mode:oe.cut.mode?0:1},qa()),Et()}},pm=()=>{if(Li)return;let M=Te.array,C=0,U=0;for(let Z=0;Z<xe;Z++){let ne=M[Z*3]**2+M[Z*3+1]**2+M[Z*3+2]**2;ne>0&&(C+=ne,U++)}if(!U)return e.toast(Xt(r(),"ICP: keine driftbehafteten Scans \u2013 alles bereits registriert","ICP: no drifted scans \u2013 everything already registered"),"#ffcf70");Li={t0:g.elapsedTime,rms:Math.sqrt(C/U),n:U}},yd=()=>{if(Pt!=="tls"||N.some(it=>it.state!=="idle"))return;let M=-Math.sin(Hn),C=-Math.cos(Hn),U=Math.max(Mt.x0,Math.min(Mt.x1,pn.x+M*2.6)),Z=Math.max(Mt.z0,Math.min(Mt.z1,pn.z+C*2.6));if(oe.nbv&&Ei.length){let it=Ei.reduce(($e,xt)=>Math.hypot(xt.x-U,xt.z-Z)<Math.hypot($e.x-U,$e.z-Z)?xt:$e);Math.hypot(it.x-U,it.z-Z)<3.5&&(e.toast(Xt(r(),`Scanner auf Vorschlag ${Ei.indexOf(it)+1} gestellt`,`Scanner placed on suggestion ${Ei.indexOf(it)+1}`),"#ff9a3d"),U=it.x,Z=it.z)}if(Ka=!0,N.length>=tn()){let it=N.shift();l.remove(it.g,it.ring)}let ne=Kp[(N.length+Math.floor(g.elapsedTime))%Kp.length],{g:fe,head:Ae}=bt(ne),_e=B(U,Z);fe.position.set(U,_e,Z);let ue=15*Ht(),be=new Ci(ue,7);be.translate(ue/2,2,0);let Ve=new Ee(be,new Ft({color:ne,transparent:!0,opacity:.16,side:on,depthWrite:!1,blending:ms}));Ve.position.y=Zu,Ve.visible=!1,fe.add(Ve),l.add(fe);let ze=new Ee(new $i(ue-.06,ue,128),new Ft({color:ne,transparent:!0,opacity:.25,side:on,depthWrite:!1}));ze.rotation.x=-Math.PI/2,ze.position.set(U,_e+.03,Z),l.add(ze),N.push({g:fe,head:Ae,sheet:Ve,ring:ze,x:U,z:Z,hy:_e+Zu,c:ne,buckets:null,vis:null,prog:0,nextB:0,state:"idle"})},vd=()=>{if(!(Pt!=="tls"||!N.length||N.some(M=>M.state!=="idle"))){if(!t.flags.nobattery&&dt.tls<Ks.tlsRun*N.length&&!Fe.tls)return e.toast(Xt(r(),`Akku reicht nicht f\xFCr ${N.length} Scanner (je ${Ks.tlsRun} %) \u2013 Scanner einsammeln (C) oder laden`,`Battery too low for ${N.length} scanners (${Ks.tlsRun} % each) \u2013 collect scanners (C) or charge`),"#ffb547");Ut("tls",Ks.tlsRun*N.length)&&N.forEach(M=>(M.state="prep",M.prog=0,M.nextB=0,M.buckets=null))}},bd=()=>{N.some(M=>M.state!=="idle")||N.splice(0).forEach(M=>l.remove(M.g,M.ring))},Xl=[],mm=M=>{if(!M.vis)return;let C=Yu(Re,[M.x,M.hy,M.z],1600,M.vis,!0),U=document.createElement("canvas");U.width=320,U.height=160,U.getContext("2d").drawImage(C,0,0,320,160),Xl.push({id:Xl.length+1,x:M.x,z:M.z,url:C.toDataURL("image/jpeg",.86),thumb:U.toDataURL("image/jpeg",.8)}),M.vis=null,e.panos([...Xl])},Md=M=>{let C=M.target?.tagName;if(C==="INPUT"||C==="TEXTAREA"||C==="SELECT")return;let U=M.key.toLowerCase();if(["arrowup","arrowdown","arrowleft","arrowright"," "].includes(U)&&M.preventDefault(),tr[U]=!0,["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(U)&&kn&&!t.flags.auto&&Ya(!1),M.repeat)return;if(U==="escape"&&(e.card(null),oe.measure&&Wl("measure")),U==="enter"||U==="f"){let ne=zl();ne>=0&&G[ne]==="done"&&e.card(ne)}if(!Sn)return;(U==="1"||U==="2"||U==="3")&&Bl(["drone","handheld","tls"][+U-1]),U==="p"&&yd(),U==="c"&&bd(),U===" "&&Pt==="tls"&&vd(),U==="l"&&(oe.labels=!oe.labels,Et());let Z=ji.find(ne=>ne.key?.toLowerCase()===U);Z&&((Z.id==="search"||Z.id==="ask")&&M.preventDefault(),Wl(Z.id))},Sd=M=>tr[M.key.toLowerCase()]=!1,Ed=()=>Object.keys(tr).forEach(M=>tr[M]=!1);a.addEventListener("pointerdown",cd),window.addEventListener("pointermove",hd),window.addEventListener("pointerup",Wa),window.addEventListener("pointercancel",Wa),a.addEventListener("wheel",ud,{passive:!1}),window.addEventListener("keydown",Md),window.addEventListener("keyup",Sd),window.addEventListener("blur",Ed);let wd=()=>{o.setSize(a.clientWidth,a.clientHeight),c.aspect=a.clientWidth/a.clientHeight,c.updateProjectionMatrix()};window.addEventListener("resize",wd);let Td=0,Ad=0,Rd=0,ir=new I,gm=new I,xm=new I(0,1,0),Cd=()=>{s=requestAnimationFrame(Cd);let M=Math.min(.05,g.getDelta()),C=g.elapsedTime;gt.uT.value=C;let U=tr,Z=Pt!=="drone",ne=Math.max(-1,Math.min(1,(U.w||U.arrowup?1:0)-(U.s||U.arrowdown?1:0)+Xa.f)),fe=Math.max(-1,Math.min(1,(U.d||U.arrowright?1:0)-(U.a||U.arrowleft?1:0)+Xa.r));Sn&&(U.q||U.e)&&(Hn+=M*1.6*(U.q?1:-1));let Ae=new I(-Math.sin(Hn),0,-Math.cos(Hn)),_e=new I(-Ae.z,0,Ae.x),ue=Math.hypot(Si().x-ci[0],Si().z-ci[1])<1&&(Z||x.position.y<.9);["drone","handheld","tls"].forEach(X=>{let te=X===Pt?ue?lv:0:ed*(ue?2:1);dt[X]=Math.min(100,dt[X]+te*M),Fe[X]&&dt[X]>=Ba&&(Fe[X]=!1,e.toast(Xt(r(),`${bn(X)} wieder einsatzbereit (${Math.round(dt[X])} %)`,`${bn(X)} ready again (${Math.round(dt[X])} %)`),"#5fd38d"))}),F.material.opacity=ue?.6+.4*Math.sin(C*8):.5,x.visible=R.visible=!Z;let be=Fe.drone&&!t.flags.nobattery;if(Sn&&!Z){let X=U[" "]?1:U.shift?-1:0,te=Ae.clone().multiplyScalar(ne).add(_e.clone().multiplyScalar(fe)).multiplyScalar(be?2.5:11),Be=0;kn&&(Be=_m(te,C)),te.y=be?-6:(Be||X)*7+(C-Ul<1.6&&x.position.y<2.4&&!kn?9:0),ui.addScaledVector(te,M),ui.multiplyScalar(Math.pow(.12,M));let Xe=Math.hypot(ui.x,ui.z),ct=be?1:5;Xe>ct&&(ui.x*=ct/Xe,ui.z*=ct/Xe),x.position.addScaledVector(ui,M),x.position.x=Math.max(Mt.x0,Math.min(Mt.x1,x.position.x)),x.position.z=Math.max(Mt.z0,Math.min(Mt.z1,x.position.z)),x.position.y=Math.max(B(x.position.x,x.position.z)+(be||kn&&ft.phase==="charge"?.25:Mt.y0),Math.min(Mt.y1,x.position.y));let Qe=(Xe>.3?Math.atan2(-ui.x,-ui.z):na)-na;for(;Qe>Math.PI;)Qe-=Math.PI*2;for(;Qe<-Math.PI;)Qe+=Math.PI*2;na+=Qe*Math.min(1,M*4),x.rotation.set(0,0,0),x.rotateY(na);let qt=ir.copy(ui).applyAxisAngle(xm,-na);x.rotateX(Math.max(-.35,Math.min(.35,qt.z*.07))),x.rotateZ(Math.max(-.35,Math.min(.35,-qt.x*.07))),x.position.y>.8&&Ut("drone",Ks.droneFly*M)}x.position.y+=Math.sin(C*2.2)*.0015,b.forEach((X,te)=>X.rotation.y+=(Sn&&!be?40:x.position.y>.4?20:2)*M*(te%2?1:-1));let Ve=x.position.y;R.position.set(x.position.x,.02,x.position.z),R.scale.setScalar(.9+Ve*.25);let ze=(.6+Ve*.75)*Ht(),it=Sn&&!Z&&Ve>.8&&!be;J.visible=w.visible=H.visible=it,J.scale.set(ze,Ve-.15,ze),J.position.set(x.position.x,(Ve-.15)/2,x.position.z),w.scale.set(ze,ze,1),w.position.set(x.position.x,.04,x.position.z),H.position.set(x.position.x,.05,x.position.z),H.scale.set(ze,1,1),H.rotation.y=C*6,k.opacity=(gt.uLight.value?.06:.07)+.035*Math.sin(C*8);let $e=!1;if(ve.visible=Pt==="handheld",Je.g.visible=Sn&&Pt==="tls"&&!N.some(X=>X.state!=="idle"),ut.visible=!1,Z){let X=U.shift?5.5:3,te=Ae.clone().multiplyScalar(ne).add(_e.clone().multiplyScalar(fe));te.lengthSq()>1&&te.normalize(),Dl.lerp(te.multiplyScalar(Sn?X:0),Math.min(1,M*8)),pn.addScaledVector(Dl,M),pn.x=Math.max(Mt.x0,Math.min(Mt.x1,pn.x)),pn.z=Math.max(Mt.z0,Math.min(Mt.z1,pn.z));let Be=Dl.length()*M;Ga+=Be*2.4;let Xe=ir.set(pn.x,B(pn.x,pn.z)+qp+Math.sin(Ga*2)*.025,pn.z);c.position.copy(Xe);let ct=gm.set(-Math.sin(Hn)*Math.cos(er),Math.sin(er),-Math.cos(Hn)*Math.cos(er));if(c.lookAt(Xe.x+ct.x,Xe.y+ct.y,Xe.z+ct.z),ve.position.set(.17+Math.cos(Ga)*.006,-.15+Math.abs(Math.sin(Ga))*.008,-.42),Pt==="tls"&&Je.g.position.set(pn.x+Ae.x*2.6,B(pn.x+Ae.x*2.6,pn.z+Ae.z*2.6),pn.z+Ae.z*2.6),$e=Pt==="handheld"&&Sn&&!!(U[" "]||U.scan)&&!Fe.handheld,ie.rotation.z+=M*($e?30:2),Ue.material.color.setHex($e?Math.sin(C*20)>0?16726876:3342336:Fe.handheld?5583616:6280077),$e&&ge&&Ut("handheld",Ks.hand*M)){Be>0&&(Mn.x+=(In.x*.04+(Math.random()-.5)*.02)*Be,Mn.z+=(In.z*.04+(Math.random()-.5)*.02)*Be,Mn.y+=(Math.random()-.5)*.008*Be,Mn.length()>.45&&Mn.setLength(.45)),Mn.length()>.15&&!je.has("icp")&&!nn.drift&&(nn.drift=!0,e.toast(Xt(r(),"SLAM-Drift! Ohne Registrierung verschmieren die W\xE4nde \u2026 irgendwo hoch oben gibt es Zielmarken.","SLAM drift! Without registration the walls smear \u2026 somewhere high up there are targets."),"#ffcf70"));let _t=7*Ht(),Qe=Math.cos(.72),qt=Xe.x,En=Xe.y,Cn=Xe.z,Is=ve.localToWorld(new I(0,.03,-.18)),ns=0;id(qt-_t,qt+_t,Cn-_t,Cn+_t,Ls=>{let Yl=$[Ls*3]-qt,$l=$[Ls*3+1]-En,ql=$[Ls*3+2]-Cn,Id=Yl*Yl+$l*$l+ql*ql;if(Id>_t*_t)return!1;let Kl=Math.sqrt(Id);return(Yl*ct.x+$l*ct.y+ql*ct.z)/Kl<Qe?!1:Math.random()<(Kl<3.5?1:1-.7*(Kl-3.5)/(_t-3.5))*.3},C,Ls=>{ns>=ht||Math.random()>.08||(st.set([Is.x,Is.y,Is.z,$[Ls*3]+Mn.x,$[Ls*3+1]+Mn.y,$[Ls*3+2]+Mn.z],ns*6),ns++)},Mn.lengthSq()>0?Mn:void 0),vt.setDrawRange(0,ns*2),vt.attributes.position.needsUpdate=!0,ut.visible=ns>0,Dt.opacity=.35+.3*Math.random()}}else{let X=x.position.clone().add(new I(0,.25,0)),te=new I(Math.sin(Hn)*Math.cos(Qs),Math.sin(Qs),Math.cos(Hn)*Math.cos(Qs)).multiplyScalar(Sn?ta:6).add(X);c.position.lerp(te,Sn?Math.min(1,M*6):.03),c.lookAt(X),(!Sn||kn&&ft.phase==="tour")&&(Hn+=M*.15)}if(ge&&it){let X=x.position.x,te=x.position.z,Be=Ht(),Xe=id(X-ze,X+ze,te-ze,te+ze,ct=>{if(!kn&&!uv(ct,me[ct]>=0))return!1;let _t=$[ct*3+1];if(_t>Ve-.15)return!1;let Qe=(.6+(Ve-_t)*.75)*Be,qt=$[ct*3]-X,En=$[ct*3+2]-te;return qt*qt+En*En<=Qe*Qe},C);Ut("drone",Ks.droneScan*M*(Xe>0?1:.6))}if(ge){let X=N.find(te=>te.state==="prep");X&&(sm(X,15*Ht()),X.state="run",X.prog=0);for(let te of N){if(te.state!=="run"||!te.buckets)continue;te.prog=Math.min(1,te.prog+M/3.4);let Be=Math.floor(te.prog*ju);for(;te.nextB<Be;te.nextB++)for(let ct of te.buckets[te.nextB])ce[ct]<0&&Ha(ct,C);Mi=!0;let Xe=te.prog*2*Math.PI-Math.PI;te.sheet.visible=!0,te.sheet.rotation.y=-Xe,te.head.rotation.y=-Xe,te.prog>=1&&(te.state="idle",te.sheet.visible=!1,te.buckets=null,mm(te))}Mi&&(Ke.clearUpdateRanges(),Ke.needsUpdate=!0,Mi=!1)}if(Li){let X=Math.min(1,(C-Li.t0)/1.4);gt.uReg.value=X*X*(3-2*X),X>=1&&(Te.array.fill(0),Te.clearUpdateRanges(),Te.needsUpdate=!0,gt.uReg.value=0,e.toast(Xt(r(),`ICP: ${Li.n.toLocaleString("de-DE")} Punkte registriert \xB7 RMS ${(Li.rms*100).toFixed(1)} cm \u2192 < 1 mm (Simulation)`,`ICP: ${Li.n.toLocaleString("en-GB")} points registered \xB7 RMS ${(Li.rms*100).toFixed(1)} cm \u2192 < 1 mm (simulation)`),"#ffcf70"),Mn.set(0,0,0),Cs=0,Li=null)}if(he.group.visible=G[Qu]!=="hidden",he.mat&&G[Qu]==="done"&&he.t0<0&&(he.t0=C,e.toast(Xt(r(),"Easter Egg: Depth Anything V2 \u2192 Tiefenkarte \u2192 Punktwolke \xFCber Referenzebene","Easter egg: Depth Anything V2 \u2192 depth map \u2192 point cloud over a reference plane"),"#ffcf70")),he.mat&&he.t0>=0){let X=Math.min(1,(C-he.t0)/3.2);he.mat.uniforms.uSweep.value=Math.min(1.3,(C-he.t0)/1.6),he.mat.uniforms.uK.value=X*X*(3-2*X)*(1+.04*Math.sin(C*1.3))}if(ii&&ge){let X=ii.update(C);gt.uWaam.value.set(X[0],X[1]??0),ii.group.visible=G[qr]!=="hidden",gt.uWaamSeen.value=G[qr]!=="hidden"?1:0}let xt=0;if(oe.mesh&&oe.meshMode!=="cad"){let X=Si(),te=9;for(let Be of qn){let Xe=performance.now();if(xt+=Be.m.update(te,X.x,X.z),te-=performance.now()-Xe,te<=0)break}}oe.xray&&C-Fn.t>.5&&(Fn.t=C,Gl()),C-Rd>.4&&(Rd=C,am());let Qt=Se?ee/Se:0;for(;Fl.length&&Qt>=Fl[0];){let X=Fl.shift();e.toast(Xt(r(),`${Math.round(X*100)} % der Halle erfasst`,`${Math.round(X*100)} % of the hall captured`),"#9b8cff")}Ze.forEach((X,te)=>{let Be=ae[te]?L[te]/ae[te]:0;if(G[te]==="hidden"&&Be>av&&(G[te]="found",Pt==="drone"&&!nn.coarse&&(nn.coarse=!0,setTimeout(()=>e.toast(Xt(r(),"Die Drohne sieht nur grob \u2013 f\xFCr die Analyse mit Handheld (2) oder TLS (3) nachscannen","The drone only sees coarsely \u2013 rescan with handheld (2) or TLS (3) for the analysis"),"#ffcf70"),1800)),e.toast(X.bonus?Xt(r(),"\u2605 Bonus-Signal gefunden: Registrier-Zielmarken!","\u2605 Bonus signal found: registration targets!"):`${Xt(r(),"Entdeckt","Discovered")}: ${Zp(X)} \xB7 ${ot(X.t,r())}`,X.c)),G[te]==="found"&&Be>$u&&(G[te]="analyzing",He[te]=C,gt.uAna.value[te]=C),G[te]==="analyzing"&&C-He[te]>2){G[te]="done";for(let Qe of td(X))je.has(Qe.id)||(je.add(Qe.id),Et(),e.banner(Qe));(t.card()===null||kn)&&(e.card(te),kn&&(ft.cardI=te,ft.cardT=C)),!kl&&Ze.every((Qe,qt)=>Qe.bonus||G[qt]==="done")&&(kl=!0,e.finish(C-Rn))}let Xe=rt[te];if(!Xe)return;let ct=G[te];Xe.ring.visible=ct!=="hidden",Xe.gem.rotation.y+=M*(ct==="analyzing"?6:1.2),Xe.gem.position.y=Q[te]+Math.sin(C*2+te)*.12,Xe.gem.scale.setScalar(ct==="hidden"?.7:1);let _t=(C*.6+te*.37)%1;Xe.pulse.visible=Sn&&ct==="hidden",Xe.pulse.position.y=Xe.gem.position.y,Xe.pulse.scale.setScalar(.15+_t*.75),Xe.pulse.lookAt(c.position),Xe.pulse.material.opacity=.6*(1-_t),Xe.ring.material.color.set(ct==="done"?6280077:Xe.c),Xe.ring.material.opacity=ct==="analyzing"?.5+.4*Math.sin(C*14):.55,Xe.beam.visible=ct!=="hidden",Xe.beam.material.opacity=ct==="done"?.1:.22}),kn&&ft.cardI>=0&&C-ft.cardT>7&&(t.card()===ft.cardI&&e.card(null),ft.cardI=-1);let ln=a.clientWidth,ye=a.clientHeight,tt=Si();{let X=i.labels.children;Ze.forEach((te,Be)=>{let Xe=X[Be];if(!Xe)return;let ct=ir.set(te.x,te.bonus?5.2:Q[Be]+.6,te.z).project(c),_t=Sn&&ct.z<1&&Math.abs(ct.x)<1.15&&Math.abs(ct.y)<1.15&&!(te.bonus&&G[Be]==="hidden");if(Xe.style.display=_t?"flex":"none",!_t)return;Xe.style.transform=`translate(${(ct.x+1)/2*ln}px, ${(1-ct.y)/2*ye}px) translate(-50%, -100%)`;let Qe=ae[Be]?Math.min(1,L[Be]/ae[Be]/$u):0,qt=Xe.querySelector(".lab-bar i");qt&&(qt.style.width=`${Math.round(Qe*100)}%`);let En=Math.hypot(tt.x-te.x,tt.z-te.z),Cn=Xe.querySelector(".lab-dist");Cn&&(Cn.textContent=`${Math.round(En)} m`),Xe.dataset.state=G[Be],Xe.classList.toggle("far",En>13)})}let at=C-Nl<30;ea.visible=at,!at&&Pi.size&&(Pi=new Set,ea.clear()),Rt.forEach((X,te)=>{let Be=ad[te];if(!Be)return;let Xe=nt[te]?an[te]/nt[te]:0,ct=Pi.has(te);if(!(Sn&&(ct||oe.labels&&Xe>=.3&&G[X.g]!=="hidden"))){Be.style.display="none";return}let Qe=ir.set((X.min[0]+X.max[0])/2,X.max[1]+.18,(X.min[2]+X.max[2])/2).project(c);if(Qe.z>=1||Math.abs(Qe.x)>1.1||Math.abs(Qe.y)>1.1||Math.hypot(tt.x-(X.min[0]+X.max[0])/2,tt.z-(X.min[2]+X.max[2])/2)>16){Be.style.display="none";return}Be.style.display="block",Be.style.transform=`translate(${(Qe.x+1)/2*ln}px, ${(1-Qe.y)/2*ye}px) translate(-50%, -100%)`,Be.classList.toggle("hit",ct);let qt=ct?`\u201E${od}\u201C \u2192 ${ot(X.name,r())}`:`${ot(X.name,r())} \xB7 ${Xt(r(),"Ziel","target")}`;Be.textContent!==qt&&(Be.textContent=qt)});for(let X of Ps){if(!X.b){X.el.style.display="none";continue}let te=ir.copy(X.a).add(X.b).multiplyScalar(.5).project(c);X.el.style.display=te.z<1?"block":"none",X.el.style.transform=`translate(${(te.x+1)/2*ln}px, ${(1-te.y)/2*ye}px) translate(-50%, -130%)`}for(let X of Ei){let te=ir.set(X.x,1.95,X.z).project(c),Be=Sn&&te.z<1&&Math.abs(te.x)<1.1&&Math.abs(te.y)<1.1;X.el.style.display=Be?"block":"none",Be&&(X.el.style.transform=`translate(${(te.x+1)/2*ln}px, ${(1-te.y)/2*ye}px) translate(-50%, -100%)`),X.g.children[0].scale.setScalar(1+.15*Math.sin(C*4))}if(oe.nbv&&Ka&&C-dd>2.5&&!N.some(X=>X.state!=="idle")&&pd(),C-Td>.2){Td=C;let X=zl(),te=-1,Be=9;Ze.forEach((_t,Qe)=>{let qt=Math.hypot(tt.x-_t.x,tt.z-_t.z);G[Qe]==="done"&&qt<Be&&(Be=qt,te=Qe)});let Xe={};for(let _t of Rt){if(!nt[_t.id]||an[_t.id]/nt[_t.id]<.5)continue;let Qe=Xe[_t.mat]??={vol:0,mass:0,n:0};Qe.vol+=_t.vol,Qe.mass+=_t.mass,Qe.n++}let ct=0;for(let _t=0;_t<Le*Le;_t++)un[_t]&&hi[_t]/un[_t]>=.3&&ct++;e.hud({cov:Math.min(1,Qt),found:Ze.filter((_t,Qe)=>!_t.bonus&&G[Qe]!=="hidden").length,done:Ze.filter((_t,Qe)=>!_t.bonus&&G[Qe]==="done").length,bonus:G[Pl]!=="hidden",near:X,nearProg:X>=0&&ae[X]?Math.min(1,L[X]/ae[X]/$u):0,nearState:X>=0?G[X]:"hidden",time:Sn&&!kl?C-Rn:-1,tlsN:N.length,tlsMax:tn(),tlsRun:N.some(_t=>_t.state!=="idle"),rec:$e,meshQ:xt,bat:{...dt},locked:{...Fe},charging:ue,drift:Pt==="handheld"?Mn.length():Cs>0?-1:0,nearAna:te,waamNear:Math.hypot(tt.x-Ze[qr].x,tt.z-Ze[qr].z)<6&&G[qr]!=="hidden",mats:Object.entries(Xe).map(([_t,Qe])=>({k:_t,...Qe})),floorM2:ct,plan:oe.xray?Vl:null})}let jt=i.map();if(jt&&C-Ad>.1){Ad=C;let X=jt.getContext("2d");X.drawImage(Js,0,0);let te=Cl/(Mt.x1-Mt.x0+4),[Be,Xe]=ts(ci[0],ci[1]);X.fillStyle="#5fd38d",X.fillRect(Be-5,Xe-5,10,10),N.forEach(Qe=>{let[qt,En]=ts(Qe.x,Qe.z),Cn=`#${Qe.c.toString(16).padStart(6,"0")}`;X.strokeStyle=Cn+"55",X.lineWidth=1,X.beginPath(),X.arc(qt,En,15*Ht()*te,0,Math.PI*2),X.stroke(),X.fillStyle=Cn,X.fillRect(qt-4,En-4,8,8)}),Ei.forEach((Qe,qt)=>{let[En,Cn]=ts(Qe.x,Qe.z);X.fillStyle="#ff9a3d",X.beginPath(),X.arc(En,Cn,8,0,Math.PI*2),X.fill(),X.fillStyle="#1a1406",X.font="bold 12px monospace",X.textAlign="center",X.fillText(String(qt+1),En,Cn+4)}),Ze.forEach((Qe,qt)=>{let[En,Cn]=ts(Qe.x,Qe.z),Is=G[qt];if(!(Qe.bonus&&Is==="hidden")){if(Is==="hidden"){let ns=(C*.6+qt*.37)%1;X.strokeStyle=`rgba(255,255,255,${.5*(1-ns)})`,X.lineWidth=1,X.beginPath(),X.arc(En,Cn,3+ns*14,0,Math.PI*2),X.stroke(),X.fillStyle="rgba(255,255,255,0.6)",X.fillRect(En-2,Cn-2,4,4);return}X.strokeStyle=Is==="done"?"#5fd38d":Qe.c,X.lineWidth=3,X.beginPath(),X.arc(En,Cn,Qe.r*te,0,Math.PI*2),X.stroke(),X.fillStyle="#e8eef5",X.font="bold 15px monospace",X.textAlign="center",X.fillText(Qe.kind==="uc"?String(Qe.uc):Qe.kind==="docs"?"D":Qe.kind==="talks"?"T":Qe.kind==="bonus"?"\u2605":"P",En,Cn+5)}});let[ct,_t]=ts(tt.x,tt.z);X.save(),X.translate(ct,_t),X.rotate(-Hn),X.fillStyle="#ffffff",X.beginPath(),X.moveTo(0,-12),X.lineTo(8,8),X.lineTo(-8,8),X.closePath(),X.fill(),X.restore()}o.render(l,c)},_m=(M,C)=>{let U=x.position,Z=(ue,be,Ve,ze=11)=>{let it=ue-U.x,$e=be-U.z,xt=Math.hypot(it,$e);return xt>.05?M.set(it/xt*ze*Math.min(1,xt/1.5),0,$e/xt*ze*Math.min(1,xt/1.5)):M.set(0,0,0),{dd:xt,au:U.y<Ve-.15?1:U.y>Ve+.15?-1:0}};if(!t.flags.nobattery&&ft.phase!=="charge"&&dt.drone<15&&(ft.phase="charge",e.toast(Xt(r(),"Autopilot: Akku niedrig \u2013 fliege zur Ladestation","Autopilot: battery low \u2013 returning to the charging pad"),"#ffb547")),ft.phase==="charge"){let ue=Z(ci[0],ci[1],2.5);return ue.dd<.35?dt.drone>=95?(ft.phase="go",1):-1:ue.au}let ne=Ze.map((ue,be)=>be).filter(ue=>!Ze[ue].bonus&&G[ue]!=="done"&&G[ue]!=="analyzing");if(!ne.length)return ft.phase="tour",ft.ang+=.0035,Z(-.5+Math.cos(ft.ang)*9,1+Math.sin(ft.ang)*7,6).au;if(ft.target<0||!ne.includes(ft.target)){let ue=1e9;for(let be of ne){let Ve=Math.hypot(Ze[be].x-U.x,Ze[be].z-U.z);Ve<ue&&(ue=Ve,ft.target=be)}ft.phase="go",ft.alt=Math.min(Mt.y1-.3,Math.max(j[ft.target]+3.4,Nt[ft.target]+1.4)),ft.lastProg=0,ft.lastProgT=C}let fe=Ze[ft.target],Ae=ae[ft.target]?L[ft.target]/ae[ft.target]:0;if(Ae>ft.lastProg+.02?(ft.lastProg=Ae,ft.lastProgT=C):C-ft.lastProgT>6&&(ft.alt=Math.min(6.3,ft.alt+.6),ft.lastProgT=C),ft.phase==="go"){let ue=Z(fe.x,fe.z,ft.alt);return ue.dd<.8&&(ft.phase="scan",ft.t0=C),ue.au}ft.ang+=.025;let _e=Math.min(fe.r*.65,(C-ft.t0)*.35);return Z(fe.x+Math.cos(ft.ang)*_e,fe.z+Math.sin(ft.ang)*_e,ft.alt,7).au};We().catch(M=>e.toast(String(M),"#ff5a5f")),Cd();let Pd={start:()=>{Sn=!0,Ul=g.elapsedTime,Rn=g.elapsedTime,e.toast(Pt==="tls"?Xt(r(),"Scanner aufstellen (P), dann Leertaste","Set up scanners (P), then press space"):Pt==="handheld"?Xt(r(),"Leertaste halten zum Scannen","Hold space to scan"):Xt(r(),"Scanner aktiv \u2013 finde die Signale","Scanner online \u2013 find the signals"))},reopen:M=>G[M]==="done"&&e.card(M),theme:lt,tech:Bl,skill:Wl,search:lm,place:yd,tlsScan:vd,collect:bd,press:(M,C)=>tr[M]=C,stick:(M,C)=>{Xa.f=M,Xa.r=C,(M||C)&&kn&&!t.flags.auto&&Ya(!1)},openNear:()=>{let M=zl();M>=0&&G[M]==="done"&&e.card(M)},labels:M=>(oe.labels=M??!oe.labels,Et()),feature:M=>rd(M),mesh:(M,C)=>{oe.meshMode=M,C&&(oe.meshVS=C),sd(),Et()},measureClear:ld,cut:(M,C,U)=>{oe.cut={mode:M,pos:C,flip:U},qa()},plan:(M,C)=>jr.compose(M,{lang:C,cov:Se?ee/Se:0,labels:Ze.filter((U,Z)=>G[Z]!=="hidden").map(U=>({x:U.x,z:U.z+U.r+.4,t:`${Zp(U)} \xB7 ${ot(U.t,C)}`,c:U.c})),scanners:N.map(U=>({x:U.x,z:U.z}))}),projections:()=>{let M=Si(),C=[M.x,Pt==="drone"?x.position.y:B(M.x,M.z)+qp,M.z];return{pano:Yu(Re,C,1200),cube:Gp(Re,C,240),persp:Wp(Re,1e3,620),ortho:Xp(Re,1e3)}},ask:M=>Pp(M,{lang:r(),clusters:Rt,cluFrac:C=>nt[C]?an[C]/nt[C]:0,stState:G,cov:Se?ee/Se:0,agent:{x:Si().x,z:Si().z},floorM2:(()=>{let C=0;for(let U=0;U<Le*Le;U++)un[U]&&hi[U]/un[U]>=.3&&C++;return C})()}),featRange:()=>As,goto:(M,C,U=3)=>{Pt==="drone"?x.position.set(M,U,C):pn.set(M,0,C)},eggState:()=>({k:he.mat?.uniforms.uK.value,sw:he.mat?.uniforms.uSweep.value,t0:he.t0,n:he.pts?.geometry.getAttribute("position").count}),setBat:(M,C)=>dt[M]=C,pointCount:()=>xe,dbg:()=>({N:xe,hallN:Se,hallScanned:ee,ready:ge,flying:Sn,tech:Pt,dy:+x.position.y.toFixed(2),gy:+B(x.position.x,x.position.z).toFixed(2),bat:dt.drone,locked:Fe.drone,cs:we?we[Le*Le]:-1}),scannerPos:()=>N.map(M=>[M.x,M.z,M.state]),sugs:()=>Ei.map(M=>({x:M.x,z:M.z,pct:Math.round(100*M.gain/Se)})),look:(M,C)=>(Hn=M,Pt==="drone"?Qs=C:er=C),dispose:()=>{n=!0,cancelAnimationFrame(s),a.removeEventListener("pointerdown",cd),window.removeEventListener("pointermove",hd),window.removeEventListener("pointerup",Wa),window.removeEventListener("pointercancel",Wa),a.removeEventListener("wheel",ud),window.removeEventListener("keydown",Md),window.removeEventListener("keyup",Sd),window.removeEventListener("blur",Ed),window.removeEventListener("resize",wd);for(let M of qn)M.m.dispose();o.dispose(),a.removeChild(o.domElement)}};return Pd};var Il=di(Zl());var Qp=di(is()),jp=({url:i})=>{let e=(0,Il.useRef)(null);return(0,Il.useEffect)(()=>{let t=e.current,n=new kr({antialias:!0});n.setPixelRatio(Math.min(2,devicePixelRatio)),n.setSize(t.clientWidth,t.clientHeight),t.appendChild(n.domElement);let s=new Fr,r=new dn(75,t.clientWidth/t.clientHeight,.1,10),a=new Br().load(i);a.colorSpace=gn;let o=new Pn(5,64,32);o.scale(-1,1,1),s.add(new Ee(o,new Ft({map:a})));let l=0,c=0,h=!1,u=0,d=0,f=0,g=_=>(h=!0,u=_.clientX,d=_.clientY),x=_=>{h&&(l-=(_.clientX-u)*.15,c=Math.max(-85,Math.min(85,c+(_.clientY-d)*.15)),u=_.clientX,d=_.clientY)},m=()=>h=!1,p=_=>{r.fov=Math.max(30,Math.min(100,r.fov+Math.sign(_.deltaY)*4)),r.updateProjectionMatrix(),_.preventDefault()};t.addEventListener("pointerdown",g),window.addEventListener("pointermove",x),window.addEventListener("pointerup",m),t.addEventListener("wheel",p,{passive:!1});let b=()=>{f=requestAnimationFrame(b),h||(l+=.03);let _=Na.degToRad(90-c),y=Na.degToRad(l);r.lookAt(Math.sin(_)*Math.cos(y),Math.cos(_),Math.sin(_)*Math.sin(y)),n.render(s,r)};return b(),()=>{cancelAnimationFrame(f),t.removeEventListener("pointerdown",g),window.removeEventListener("pointermove",x),window.removeEventListener("pointerup",m),t.removeEventListener("wheel",p),n.dispose(),a.dispose(),t.removeChild(n.domElement)}},[i]),(0,Qp.jsx)("div",{ref:e,className:"lab-panoview"})};var Es=di(Zl()),Zr=di(is()),em=()=>{let i="(pointer: coarse)",[e,t]=(0,Es.useState)(()=>typeof matchMedia<"u"&&(matchMedia(i).matches||location.hash.includes("touch")));return(0,Es.useEffect)(()=>{let n=matchMedia(i),s=()=>t(n.matches||location.hash.includes("touch"));return n.addEventListener("change",s),()=>n.removeEventListener("change",s)},[]),e},tm=({onMove:i,label:e})=>{let t=(0,Es.useRef)(null),[n,s]=(0,Es.useState)({x:0,y:0,on:!1}),r=(0,Es.useRef)(null),a=48,o=c=>{let h=t.current.getBoundingClientRect(),u=c.clientX-(h.left+h.width/2),d=c.clientY-(h.top+h.height/2),f=Math.hypot(u,d);f>a&&(u*=a/f,d*=a/f),s({x:u,y:d,on:!0});let g=x=>Math.abs(x)<.12?0:x;i(g(-d/a),g(u/a))},l=()=>{r.current=null,s({x:0,y:0,on:!1}),i(0,0)};return(0,Zr.jsxs)("div",{ref:t,className:`lab-ui lab-joy${n.on?" on":""}`,onPointerDown:c=>{r.current=c.pointerId,c.target.setPointerCapture(c.pointerId),o(c)},onPointerMove:c=>r.current===c.pointerId&&o(c),onPointerUp:l,onPointerCancel:l,children:[(0,Zr.jsx)("i",{style:{transform:`translate(${n.x}px, ${n.y}px)`}}),e&&!n.on&&(0,Zr.jsx)("span",{children:e})]})},Ll=({k:i,press:e,children:t,className:n})=>(0,Zr.jsx)("button",{className:`lab-hold ${n??""}`,onPointerDown:s=>{s.target.setPointerCapture(s.pointerId),e(i,!0)},onPointerUp:()=>e(i,!1),onPointerCancel:()=>e(i,!1),onContextMenu:s=>s.preventDefault(),children:t});var S=di(is()),q=(i,e,t)=>i==="en"?t:e,nm=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`,im=i=>i.kind==="uc"?`UC${i.uc}`:i.kind==="docs"?"DOC":i.kind==="talks"?"TALK":i.kind==="bonus"?"\u2605":"ME",pv=i=>`rgb(${i.map(e=>Math.round(e*255)).join(",")})`,nd=(i,e,t=2)=>i.toLocaleString(e==="en"?"en-GB":"de-DE",{maximumFractionDigits:t,minimumFractionDigits:t}),mv={cov:0,found:0,done:0,bonus:!1,near:-1,nearProg:0,nearState:"hidden",time:0,tlsN:0,tlsMax:3,tlsRun:!1,rec:!1,meshQ:0,bat:{drone:100,handheld:100,tls:100},locked:{drone:!1,handheld:!1,tls:!1},charging:!1,drift:0,nearAna:-1,waamNear:!1,mats:[],floorM2:0,plan:null},gv=({lang:i})=>{let e=(0,mt.useRef)(null),t=(0,mt.useRef)(null),n=(0,mt.useRef)(null),s=(0,mt.useRef)(null),r=(0,mt.useRef)(null),a=(0,mt.useRef)(null),o=(0,mt.useRef)(null),l=(0,mt.useRef)({auto:location.hash.includes("auto"),allskills:location.hash.includes("allskills"),nobattery:location.hash.includes("nobattery"),lite:!location.hash.includes("full")&&(location.hash.includes("lite")||location.hash.includes("touch")||matchMedia("(pointer: coarse)").matches)}),[c,h]=(0,mt.useState)(0),[u,d]=(0,mt.useState)(!1),[f,g]=(0,mt.useState)(()=>location.hash.includes("light")?"light":"dark"),[x,m]=(0,mt.useState)(()=>location.hash.includes("handheld")?"handheld":location.hash.includes("tls")?"tls":"drone"),[p,b]=(0,mt.useState)(mv),[_,y]=(0,mt.useState)(null),[D,A]=(0,mt.useState)([]),[R,k]=(0,mt.useState)(null),[J,v]=(0,mt.useState)(!1),[w,O]=(0,mt.useState)(!1),[H,Y]=(0,mt.useState)({}),se=(L,G)=>(0,S.jsxs)("div",{className:"lab-opt-h",onClick:()=>Y(He=>({...He,[L]:!He[L]})),title:H[L]?q(i,"Ausklappen","Expand"):q(i,"Einklappen \u2013 die Ansicht bleibt aktiv","Collapse \u2013 the view stays active"),children:[(0,S.jsx)("small",{children:G}),(0,S.jsx)("button",{className:"lab-opt-min",children:H[L]?"\u25B8 "+q(i,"\xF6ffnen","open"):"\u2014 "+q(i,"einklappen","collapse")})]}),[F,le]=(0,mt.useState)({unlocked:[],color:"normal",mesh:!1,meshMode:"all",meshVS:.2,xray:!1,measure:!1,auto:!1,labels:!1,feat:6,featState:"idle",nbv:!1,cut:{mode:0,pos:1.2,flip:!1}}),[K,he]=(0,mt.useState)(null),[Ce,ve]=(0,mt.useState)(!1),[yt,zt]=(0,mt.useState)(""),[ie,pe]=(0,mt.useState)(!1),[Oe,Ue]=(0,mt.useState)(""),[ht,st]=(0,mt.useState)([]),[vt,Dt]=(0,mt.useState)([]),[ut,N]=(0,mt.useState)(null),[hn,bt]=(0,mt.useState)(null),Je=em(),[rt,gt]=(0,mt.useState)(!1),[xe,P]=(0,mt.useState)(!1),[E,W]=(0,mt.useState)(()=>matchMedia("(orientation: portrait)").matches),[$,ce]=(0,mt.useState)(!1),re=(0,mt.useRef)(!1);(0,mt.useEffect)(()=>{let L=matchMedia("(orientation: portrait)"),G=()=>W(L.matches);return L.addEventListener("change",G),()=>{L.removeEventListener("change",G),screen.orientation.unlock?.(),re.current&&document.fullscreenElement&&document.exitFullscreen().catch(()=>{})}},[]);let Ne=()=>{if(!Je)return;let L=document.documentElement;(!document.fullscreenElement&&L.requestFullscreen?L.requestFullscreen({navigationUI:"hide"}):Promise.resolve()).then(()=>(re.current=!!document.fullscreenElement,screen.orientation.lock?.("landscape"))).catch(()=>{})},me=()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.().catch(()=>{}),[Ie,wt]=(0,mt.useState)(null),de=(0,mt.useRef)(null);de.current=_;let we=(0,mt.useRef)(i);we.current=i,(0,mt.useEffect)(()=>{let L=0,G=[],He=!1,Nt=()=>{let nt=G.shift();He=!!nt,he(nt??null),nt&&setTimeout(Nt,4300)},Rt=Jp({host:e.current,labels:t.current,clu:n.current,meas:s.current,map:()=>r.current},{loaded:h,hud:b,toast:(nt,an="#5ce1e6")=>{let un=++L;A(hi=>[...hi.slice(-3),{id:un,txt:nt,c:an}]),setTimeout(()=>A(hi=>hi.filter(ws=>ws.id!==un)),4200)},card:y,banner:nt=>{G.push(nt),He||Nt()},skills:le,finish:k,tech:m,panos:Dt,search:()=>ve(!0),ask:()=>pe(!0)},{lang:()=>we.current,tech:x,card:()=>de.current,flags:l.current});return o.current=Rt,l.current.allskills&&(window.__lab=Rt),l.current.auto&&d(!0),()=>Rt.dispose()},[]),(0,mt.useEffect)(()=>o.current?.theme(f),[f]),(0,mt.useEffect)(()=>{let L=G=>{let He=G.target?.tagName;if(He==="INPUT"||He==="SELECT")return;let Nt=G.key.toLowerCase();Nt==="t"&&g(Rt=>Rt==="dark"?"light":"dark"),u&&(Nt==="k"&&N(Rt=>Rt==="plan"?null:"plan"),Nt==="j"&&N(Rt=>Rt==="proj"?null:"proj"),Nt==="u"&&N(Rt=>Rt==="pano"?null:"pano"),Nt==="escape"&&(O(!1),N(null),bt(null),ve(!1),pe(!1)))};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[u]),(0,mt.useEffect)(()=>{if(ut!=="plan")return;let L=()=>a.current&&o.current?.plan(a.current,we.current);L();let G=setInterval(L,700);return()=>clearInterval(G)},[ut]);let Ke=()=>{let L=o.current.projections();wt(Object.fromEntries(Object.entries(L).map(([G,He])=>[G,He.toDataURL("image/png")])))};(0,mt.useEffect)(()=>{ut==="proj"&&Ke()},[ut]);let qe=(L,G)=>o.current?.press(L,G),Te=L=>{if(!u)return m(L);o.current?.tech(L)},St=_!==null?Ze[_]:null,Ye=p.near>=0?Ze[p.near]:null,Gt=x!=="drone",z=o.current?.featRange()??[],Se=()=>{let L=a.current;if(!L)return;let G=document.createElement("a");G.href=L.toDataURL("image/png"),G.download=`x-avis_grundriss_${new Date().toISOString().slice(0,10)}.png`,G.click()},ee=(()=>{if(F.color==="seg")return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:q(i,"Segmentierung \xB7 ganze Szene","Segmentation \xB7 whole scene")}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"rgb(150,72,76)"}}),q(i,"Umgebung","Environment")]}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"rgb(112,209,140)"}}),q(i,"Boden","Floor")]}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"rgb(90,180,255)"}}),q(i,"Ziel (alle wichtigen Objekte)","Target (all relevant objects)")]}),(0,S.jsx)("em",{children:q(i,"Hallenklassen: echtes RandLA-Net-Ergebnis (A1)","Hall classes: real RandLA-Net result (A1)")})]});if(F.color==="heat"){let G=bl[F.feat],He=z[F.feat];return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:F.feat<16?`${q(i,"Merkmal","Feature")} ${F.feat+1}/16 \xB7 ${G.k}`:q(i,"Ebenheit Hallenboden","Hall floor flatness")}),(0,S.jsx)("span",{className:"lab-lg-d",children:ot(G.t,i)}),(0,S.jsx)("div",{className:`lab-ramp ${F.feat===16?"flat":"viridis"}`}),(0,S.jsx)("span",{className:"lab-ramp-l",children:F.feat===16?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("em",{children:"\u22124 cm"}),(0,S.jsx)("em",{children:"0"}),(0,S.jsx)("em",{children:"+4 cm"})]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("em",{children:He?+He[0].toPrecision(3):0}),(0,S.jsx)("em",{children:He?+He[1].toPrecision(3):1})]})}),F.featState==="loading"&&(0,S.jsx)("em",{children:q(i,"Lade Merkmale (12,7 MB) \u2026","Loading features (12.7 MB) \u2026")}),(0,S.jsx)("em",{children:q(i,"Vorab f\xFCr alle Punkte berechnet (k = 30), Darstellung 1.\u201399. Perzentil","Precomputed for all points (k = 30), shown 1st\u201399th percentile")})]})}if(F.color==="therm")return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:q(i,"Thermal (illustrativ)","Thermal (illustrative)")}),(0,S.jsx)("div",{className:"lab-ramp therm"}),(0,S.jsxs)("span",{className:"lab-ramp-l",children:[(0,S.jsx)("em",{children:q(i,"kalt","cold")}),(0,S.jsx)("em",{children:q(i,"hei\xDF","hot")})]}),(0,S.jsx)("em",{children:q(i,"frisch gescannt und frische WAAM-Schichten = hei\xDF","fresh scans and fresh WAAM layers = hot")})]});if(F.color==="mat")return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:q(i,"Materialkataster","Material register")}),Object.entries($n).map(([G,He])=>(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:He.c}}),i==="en"?He.en:He.de]},G))]});let L=p.nearAna>=0?Ze[p.nearAna]:null;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:q(i,"Punktwolke","Point cloud")}),(0,S.jsx)("div",{className:`lab-ramp ${f==="light"?"intl":"int"}`}),(0,S.jsxs)("span",{className:"lab-ramp-l",children:[(0,S.jsx)("em",{children:q(i,"Intensit\xE4t niedrig","low intensity")}),(0,S.jsx)("em",{children:q(i,"hoch","high")})]}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:f==="light"?"#0a8cd9":"#8cf2ff"}}),q(i,"frisch gescannt","freshly scanned")]}),(0,S.jsx)("span",{className:"lab-lg-d",children:q(i,"Ungescanntes ist unsichtbar","Unscanned is invisible")}),L&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("b",{className:"lab-lg-sub",children:["X-AVIS \xB7 ",im(L)," ",ot(L.t,i)]}),L.parts.map((G,He)=>(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:pv(G.c)}}),ot(G.name,i)]},He))]}),p.waamNear&&(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"#ff8c26"}}),q(i,"frische WAAM-Schicht","fresh WAAM layer")]}),F.xray&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{className:"lab-lg-sub",children:q(i,"Soll-Ist \xB7 Planungsmodell","As-planned vs. as-built")}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"#3ddc84"}}),q(i,"verifiziert (Soll = Ist)","verified (planned = built)")]}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"#ffb547"}}),q(i,"abweichend","deviating")]}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"#ff4d5e"}}),q(i,"geplant, nicht im Scan","planned, not in scan")]}),(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"#7c8aa0"}}),q(i,"noch nicht erfasst","not yet captured")]}),p.plan&&p.plan.rs.total>0&&(0,S.jsxs)("em",{children:[q(i,"ReStage-Demonstrator","ReStage demonstrator"),": ",p.plan.rs.ok," ",q(i,"verifiziert","verified")," \xB7 ",p.plan.rs.miss," ",q(i,"fehlen","missing")," \xB7 ",p.plan.rs.open," ",q(i,"offen","open")," (",q(i,"von","of")," ",p.plan.rs.total,")"]}),!p.plan&&(0,S.jsx)("em",{children:q(i,"Lade Planungsmodell \u2026","Loading planning model \u2026")})]})]})})(),ae=L=>p.locked[L]?q(i,"l\xE4dt","charging"):`${Math.round(p.bat[L])} %`;return(0,S.jsxs)("div",{className:`lab lab-${f} lab-t-${x}${Je?" lab-touch":""}`,children:[(0,S.jsx)("div",{ref:e,className:"lab-canvas"}),u&&Gt&&(0,S.jsx)("div",{className:`lab-cross${p.rec?" rec":""}${F.measure?" meas":""}`}),(0,S.jsx)("div",{ref:t,className:"lab-labels",children:Ze.map((L,G)=>(0,S.jsxs)("div",{className:"lab-label","data-state":"hidden",style:{borderColor:L.c},onClick:()=>o.current?.reopen(G),children:[(0,S.jsxs)("b",{style:{background:L.c},children:[(0,S.jsx)("span",{className:"lab-known",children:im(L)}),(0,S.jsx)("span",{className:"lab-unk",children:"?"})]}),(0,S.jsx)("span",{className:"lab-known",children:ot(L.t,i)}),(0,S.jsx)("span",{className:"lab-unk",children:q(i,"Unbekanntes Signal","Unknown signal")}),(0,S.jsx)("span",{className:"lab-dist"}),(0,S.jsx)("span",{className:"lab-bar",children:(0,S.jsx)("i",{})})]},L.id))}),(0,S.jsx)("div",{ref:n,className:"lab-clus"}),(0,S.jsx)("div",{ref:s,className:"lab-measl"}),(0,S.jsxs)("div",{className:"lab-ui lab-top",children:[(0,S.jsxs)("a",{className:"lab-brand",href:"#/",children:[(0,S.jsx)(Ld,{size:34,frame:0}),(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{className:"lab-k",children:"Spatial AI Lab"}),(0,S.jsxs)("div",{className:"lab-p",children:["powered by ",(0,S.jsx)(Nd,{height:15})]})]})]}),u&&(0,S.jsxs)("div",{className:"lab-stats",children:[(0,S.jsxs)("div",{children:[(0,S.jsx)("small",{children:q(i,"Gel\xE4nde erfasst","Area captured")}),(0,S.jsxs)("b",{children:[Math.round(p.cov*100)," %"]})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("small",{children:q(i,"Entdeckt","Discovered")}),(0,S.jsxs)("b",{children:[p.found," / ",Ua,p.bonus?" \u2605":""]})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("small",{children:q(i,"Analysiert","Analysed")}),(0,S.jsxs)("b",{children:[p.done," / ",Ua]})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("small",{children:"Skills"}),(0,S.jsxs)("b",{children:[F.unlocked.length," / ",ji.length]})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("small",{children:q(i,"Zeit","Time")}),(0,S.jsx)("b",{children:nm(R??Math.max(0,p.time))})]})]}),(0,S.jsxs)("div",{className:"lab-tr",children:[(0,S.jsx)("button",{className:"lab-exit",onClick:()=>g(L=>L==="dark"?"light":"dark"),title:"T",children:f==="dark"?"\u25D0 "+q(i,"Wei\xDFe Leere","White void"):"\u25D1 "+q(i,"Dunkle Leere","Dark void")}),(0,S.jsxs)("a",{className:"lab-exit",href:"#/",children:["\u2715 ",q(i,"Lab verlassen","Exit lab")]})]})]}),u&&(0,S.jsxs)("div",{className:"lab-ui lab-techs",children:[pu.map(L=>(0,S.jsxs)("button",{className:`${x===L.id?"on":""}${p.locked[L.id]?" locked":""}`,onClick:()=>Te(L.id),title:ot(L.d,i),children:[(0,S.jsx)("i",{children:L.icon}),(0,S.jsx)("span",{children:ot(L.t,i).split(" \xB7 ")[L.id==="drone"?0:1]}),(0,S.jsx)("span",{className:"lab-batt","data-low":p.bat[L.id]<25?"1":"0",children:(0,S.jsx)("em",{style:{width:`${Math.round(p.bat[L.id])}%`}})}),(0,S.jsx)("small",{children:ae(L.id)}),(0,S.jsx)("kbd",{children:L.key})]},L.id)),p.charging&&(0,S.jsxs)("span",{className:"lab-charging",children:["\u26A1 ",q(i,"Ladestation","charging pad")]})]}),(0,S.jsx)("div",{className:"lab-toasts",children:D.map(L=>(0,S.jsx)("div",{className:"lab-toast",style:{borderColor:L.c},children:L.txt},L.id))}),K&&(0,S.jsxs)("div",{className:"lab-unlock",children:[(0,S.jsx)("div",{className:"lab-unlock-i",children:K.icon}),(0,S.jsx)("small",{children:K.id==="icp"?q(i,"Bonus-Skill freigeschaltet","Bonus skill unlocked"):q(i,"Skill freigeschaltet","Skill unlocked")}),(0,S.jsx)("b",{children:ot(K.t,i)}),(0,S.jsx)("span",{children:ot(K.d,i)}),(0,S.jsx)("em",{children:K.key?q(i,`Taste ${K.key} oder Skill-Leiste`,`Press ${K.key} or use the skill bar`):q(i,"passiv \xB7 sofort aktiv","passive \xB7 active right away")})]},K.id),u&&_===null&&(Ye||x==="tls"||p.rec||p.drift>.05)&&(0,S.jsxs)("div",{className:"lab-ui lab-prompt",onClick:()=>o.current?.openNear(),style:{borderColor:Ye?p.nearState==="done"?"#5fd38d":Ye.c:"#5ce1e6"},children:[Ye&&p.nearState==="done"?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:ot(Ye.t,i)})," \xB7 ",Je?q(i,"analysiert \u2013 hier antippen f\xFCr Infos","analysed \u2013 tap here for info"):q(i,"analysiert \u2013 Enter oder Label klicken","analysed \u2013 press Enter or click the label")]}):Ye&&p.nearState==="analyzing"?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:"X-AVIS"})," ",q(i,"segmentiert die Punktwolke \u2026","is segmenting the point cloud \u2026")]}):x==="tls"?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:"TLS"})," \xB7 ",p.tlsRun?q(i,"Scan l\xE4uft \u2013 alle Scanner gleichzeitig \u2026","scanning \u2013 all scanners at once \u2026"):Je?q(i,`${p.tlsN}/${p.tlsMax} Scanner \xB7 je 7 % Akku pro Scan`,`${p.tlsN}/${p.tlsMax} scanners \xB7 7 % battery per scan each`):q(i,`${p.tlsN}/${p.tlsMax} Scanner \xB7 P aufstellen \xB7 Leertaste scannen (je 7 % Akku) \xB7 C einsammeln`,`${p.tlsN}/${p.tlsMax} scanners \xB7 P set up \xB7 space scan (7 % battery each) \xB7 C collect`),Ye&&(0,S.jsx)("span",{className:"lab-pbar",children:(0,S.jsx)("i",{style:{width:`${Math.round(p.nearProg*100)}%`,background:Ye.c}})})]}):Ye?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:p.nearState==="hidden"?q(i,"Unbekanntes Signal","Unknown signal"):ot(Ye.t,i)})," \xB7 ",x==="handheld"?Je?q(i,"\u25CF halten und Objekt abscannen","hold \u25CF and scan the object"):q(i,"Leertaste halten und Objekt abscannen","hold space and scan the object"):q(i,"Bereich abfliegen und scannen","fly over the area to scan it"),(0,S.jsx)("span",{className:"lab-pbar",children:(0,S.jsx)("i",{style:{width:`${Math.round(p.nearProg*100)}%`,background:Ye.c}})})]}):p.rec?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{className:"lab-recdot",children:"\u25CF REC"})," ",q(i,"SLAM-Scan l\xE4uft","SLAM scan running")]}):null,p.drift>.05&&(0,S.jsxs)("span",{className:"lab-drift",children:[q(i,"Drift","drift")," ",Math.round(p.drift*100)," cm",F.unlocked.includes("icp")?" \xB7 R = ICP":""]})]}),u&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("div",{className:"lab-ui lab-help",children:[x==="drone"?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:"WASD"})," ",q(i,"fliegen","fly")," \xB7 ",(0,S.jsx)("b",{children:q(i,"Leertaste / Shift","Space / Shift")})," ",q(i,"steigen / sinken","up / down")," \xB7 ",(0,S.jsx)("b",{children:"Q / E"})," ",q(i,"drehen","turn")]}):x==="handheld"?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:"WASD"})," ",q(i,"gehen","walk")," \xB7 ",(0,S.jsx)("b",{children:"Shift"})," ",q(i,"rennen","run")," \xB7 ",(0,S.jsx)("b",{children:q(i,"Leertaste halten","Hold space")})," ",q(i,"scannen","scan")]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("b",{children:"WASD"})," ",q(i,"gehen","walk")," \xB7 ",(0,S.jsx)("b",{children:"P"})," ",q(i,"aufstellen","set up")," \xB7 ",(0,S.jsx)("b",{children:q(i,"Leertaste","Space")})," ",q(i,"scannen","scan")," \xB7 ",(0,S.jsx)("b",{children:"C"})," ",q(i,"einsammeln","collect")]})," ","\xB7 ",(0,S.jsx)("b",{children:q(i,"Maus","Mouse")})," ",q(i,"Ansicht","view")," \xB7 ",(0,S.jsx)("b",{children:"1 2 3"})," ",q(i,"Technologie","technology")," \xB7 ",(0,S.jsx)("b",{children:"T"})," ",q(i,"hell/dunkel","light/dark")]}),w&&(0,S.jsx)("div",{className:"lab-ui lab-mapshade",onClick:()=>O(!1)}),(0,S.jsx)("canvas",{ref:r,className:`lab-ui lab-map${w?" big":""}`,width:340,height:600,onClick:()=>O(L=>!L),title:w?q(i,"Klicken zum Schlie\xDFen","Click to close"):q(i,"Klicken f\xFCr Vollbild-Karte","Click for fullscreen map")}),w&&(0,S.jsx)("div",{className:"lab-ui lab-mapcap",children:q(i,"Karte \xB7 Halle und Referenzbaustelle \xB7 klicken oder Esc zum Schlie\xDFen","Map \xB7 hall and reference site \xB7 click or Esc to close")}),(!Je||rt)&&(0,S.jsxs)("div",{className:Je?"lab-ui lab-drawer":"lab-contents",onClick:L=>Je&&L.target.closest("button")&&!L.target.closest(".lab-drawer-keep")&&gt(!1),children:[Je&&(0,S.jsxs)("div",{className:"lab-drawer-h lab-drawer-keep",children:[(0,S.jsx)("b",{children:q(i,"Skills & Werkzeuge","Skills & tools")}),(0,S.jsx)("button",{className:"lab-x",onClick:()=>gt(!1),children:"\u2715"})]}),(0,S.jsx)("div",{className:"lab-ui lab-tools",children:Rp.map(L=>{let G=L.id==="labels"?F.labels:ut===L.id;return(0,S.jsxs)("button",{className:G?"on":"",onClick:()=>L.id==="labels"?o.current?.labels():N(He=>He===L.id?null:L.id),children:[(0,S.jsx)("i",{children:L.icon}),(0,S.jsxs)("span",{children:[ot(L.t,i),L.id==="pano"&&vt.length?` (${vt.length})`:""]}),(0,S.jsx)("kbd",{children:L.key})]},L.id)})}),(0,S.jsx)("div",{className:"lab-ui lab-skills",children:ji.map(L=>{let G=F.unlocked.includes(L.id);if(L.id==="icp"&&!G)return null;let He=G&&(L.passive||L.id==="seg"&&F.color==="seg"||L.id==="heat"&&F.color==="heat"||L.id==="therm"&&F.color==="therm"||L.id==="mat"&&F.color==="mat"||L.id==="mesh"&&F.mesh||L.id==="xray"&&F.xray||L.id==="measure"&&F.measure||L.id==="auto"&&F.auto||L.id==="nbv"&&F.nbv||L.id==="cut"&&F.cut.mode>0);return(0,S.jsxs)("button",{className:`${G?"got":"lock"}${He?" on":""}`,disabled:!G||L.passive,onClick:()=>o.current?.skill(L.id),title:G?`${ot(L.t,i)} \u2013 ${ot(L.d,i)}`:q(i,"Noch verborgen \u2013 wird durch eine Station freigeschaltet","Still hidden \u2013 unlocked by a station"),children:[(0,S.jsx)("i",{children:G?L.icon:"?"}),G&&L.key&&(0,S.jsx)("kbd",{children:L.key}),G&&(0,S.jsx)("span",{children:ot(L.t,i)})]},L.id)})}),Je&&(0,S.jsxs)("div",{className:"lab-drawer-row",children:[(0,S.jsx)("button",{onClick:()=>g(L=>L==="dark"?"light":"dark"),children:f==="dark"?"\u25D0 "+q(i,"Wei\xDFe Leere","White void"):"\u25D1 "+q(i,"Dunkle Leere","Dark void")}),(0,S.jsxs)("button",{onClick:me,children:["\u26F6 ",q(i,"Vollbild","Fullscreen")]}),(0,S.jsxs)("a",{href:"#/",children:["\u2715 ",q(i,"Lab verlassen","Exit lab")]})]})]}),(0,S.jsx)("div",{className:`lab-ui lab-legend${Je&&!xe?" closed":""}`,onClick:()=>Je&&P(L=>!L),children:Je&&!xe?(0,S.jsxs)("b",{children:["\u25A4 ",q(i,"Legende","Legend")]}):(0,S.jsxs)(S.Fragment,{children:[ee,F.cut.mode>0&&(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"#ff7a3d"}}),q(i,"Schnittkante","cut edge")]}),F.nbv&&(0,S.jsxs)("span",{children:[(0,S.jsx)("i",{style:{background:"#ff9a3d",borderRadius:8}}),q(i,"vorgeschlagener TLS-Standpunkt","suggested TLS position")]})]})}),(0,S.jsxs)("div",{className:"lab-ui lab-optstack",children:[F.cut.mode>0&&(0,S.jsxs)("div",{className:`lab-ui lab-opt lab-cutopt${H.cut?" min":""}`,children:[se("cut",q(i,"Schnittebene","Section plane")),(0,S.jsx)("div",{className:"lab-seg3",children:[[1,q(i,"Horizontal","Horizontal")],[2,q(i,"L\xE4ngs (x)","Long. (x)")],[3,q(i,"Quer (z)","Cross (z)")]].map(([L,G])=>(0,S.jsx)("button",{className:F.cut.mode===L?"on":"",onClick:()=>o.current?.cut(L,L===1?1.2:0,F.cut.flip),children:G},L))}),(0,S.jsxs)("label",{children:[F.cut.mode===1?q(i,"Schnitth\xF6he","Cut height"):q(i,"Schnittlage","Cut position")," \xB7 ",nd(F.cut.pos,i,2)," m",(0,S.jsx)("input",{type:"range",min:F.cut.mode===1?.1:F.cut.mode===2?-27:-20,max:F.cut.mode===1?9.5:F.cut.mode===2?20:66,step:.05,value:F.cut.pos,onChange:L=>o.current?.cut(F.cut.mode,+L.target.value,F.cut.flip)})]}),(0,S.jsxs)("button",{className:"lab-flip",onClick:()=>o.current?.cut(F.cut.mode,F.cut.pos,!F.cut.flip),children:["\u21C5 ",q(i,"Seite umkehren","Flip side")]})]}),F.color==="heat"&&(0,S.jsxs)("div",{className:`lab-ui lab-opt lab-feats${H.feats?" min":""}`,children:[se("feats",(0,S.jsxs)(S.Fragment,{children:[q(i,"RandLA-Net-Merkmal","RandLA-Net feature"),H.feats?` \xB7 ${F.feat<16?bl[F.feat].k:q(i,"Ebenheit","flatness")}`:""]})),(0,S.jsx)("div",{className:"lab-featgrid",children:bl.map((L,G)=>(0,S.jsx)("button",{className:F.feat===G?"on":"",onClick:()=>o.current?.feature(G),title:ot(L.t,i),children:G<16?`${G+1} \xB7 ${L.k}`:q(i,"Ebenheit","flatness")},L.k))})]}),F.mesh&&(0,S.jsxs)("div",{className:`lab-ui lab-opt lab-meshopt${H.mesh?" min":""}`,children:[se("mesh","Scan-to-Mesh"),(0,S.jsx)("div",{className:"lab-seg3",children:[["all",q(i,"Gesamt","Whole")],["obj",q(i,"Objektweise","Per object")],["cad",q(i,"Modell","Model")]].map(([L,G])=>(0,S.jsx)("button",{className:F.meshMode===L?"on":"",onClick:()=>o.current?.mesh(L),children:G},L))}),F.meshMode!=="cad"?(0,S.jsxs)("label",{children:[q(i,"Feinheit","Detail")," \xB7 ",q(i,"Voxel","voxel")," ",Math.round(F.meshVS*100)," cm",(0,S.jsx)("input",{type:"range",min:0,max:3,step:1,value:[.3,.2,.15,.1].indexOf(F.meshVS),onChange:L=>o.current?.mesh(F.meshMode,[.3,.2,.15,.1][+L.target.value])}),(0,S.jsxs)("span",{className:"lab-ramp-l",children:[(0,S.jsx)("em",{children:q(i,"grob, geschlossen","coarse, closed")}),(0,S.jsx)("em",{children:q(i,"fein, l\xF6chrig","fine, holey")})]})]}):(0,S.jsx)("em",{children:q(i,"Nachmodellierte K\xF6rper erscheinen, sobald \u2265 50 % eines Objekts gescannt sind; Hallenbl\xF6cke und Bodenplatte ab 30 %.","Reconstructed solids appear once \u2265 50 % of an object is scanned; hall blocks and floor slab from 30 %.")}),p.meshQ>0&&(0,S.jsxs)("em",{className:"lab-mq",children:["\u25B3 ",p.meshQ," ",q(i,"Kacheln in Arbeit","tiles in progress")]})]}),F.color==="mat"&&(0,S.jsxs)("div",{className:`lab-ui lab-opt lab-matpanel${H.mat?" min":""}`,children:[se("mat",q(i,"Materialkataster \xB7 aus Modell, Objekte \u2265 50 % erfasst","Material register \xB7 from model, objects \u2265 50 % captured")),(0,S.jsx)("table",{children:(0,S.jsxs)("tbody",{children:[[...p.mats].sort((L,G)=>G.mass-L.mass).map(L=>(0,S.jsxs)("tr",{children:[(0,S.jsxs)("td",{children:[(0,S.jsx)("i",{style:{background:$n[L.k]?.c}}),i==="en"?$n[L.k]?.en:$n[L.k]?.de]}),(0,S.jsxs)("td",{children:[nd(L.vol,i,3)," m\xB3"]}),(0,S.jsx)("td",{children:L.mass?`${nd(L.mass/1e3,i,2)} t`:"\u2013"})]},L.k)),(0,S.jsxs)("tr",{children:[(0,S.jsxs)("td",{children:[(0,S.jsx)("i",{style:{background:$n.concrete.c}}),q(i,"Bodenplatte (Fl\xE4che)","Floor slab (area)")]}),(0,S.jsxs)("td",{colSpan:2,children:[p.floorM2," m\xB2"]})]})]})})]})]}),Je&&!rt&&_===null&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(tm,{onMove:(L,G)=>o.current?.stick(L,G),label:x==="drone"?q(i,"fliegen","fly"):q(i,"gehen","walk")}),(0,S.jsxs)("div",{className:"lab-ui lab-acts",children:[x==="drone"&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(Ll,{k:" ",press:qe,children:["\u2912",(0,S.jsx)("small",{children:q(i,"hoch","up")})]}),(0,S.jsxs)(Ll,{k:"shift",press:qe,children:["\u2913",(0,S.jsx)("small",{children:q(i,"runter","down")})]})]}),x==="handheld"&&(0,S.jsxs)(Ll,{k:"scan",press:qe,className:`big${p.rec?" rec":""}`,children:["\u25CF",(0,S.jsx)("small",{children:q(i,"halten = scannen","hold = scan")})]}),x==="tls"&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("button",{className:"lab-hold",onClick:()=>o.current?.place(),children:["\u2295",(0,S.jsx)("small",{children:q(i,"aufstellen","set up")})]}),(0,S.jsxs)("button",{className:"lab-hold big",onClick:()=>o.current?.tlsScan(),children:["\u25B6",(0,S.jsx)("small",{children:q(i,"alle scannen","scan all")})]}),(0,S.jsxs)("button",{className:"lab-hold",onClick:()=>o.current?.collect(),children:["\u293A",(0,S.jsx)("small",{children:q(i,"einsammeln","collect")})]})]})]}),(0,S.jsxs)("button",{className:"lab-ui lab-menu",onClick:()=>gt(L=>!L),children:["\u2630 ",(0,S.jsxs)("span",{children:["Skills ",F.unlocked.length,"/",ji.length]})]})]})]}),Ce&&(0,S.jsxs)("form",{className:"lab-ui lab-search",onSubmit:L=>{L.preventDefault(),yt.trim()&&o.current?.search(yt.trim()),ve(!1)},children:[(0,S.jsxs)("small",{children:["Zero-Shot \xB7 ",q(i,"Textprompt \u2192 Bounding Boxes","text prompt \u2192 bounding boxes")]}),(0,S.jsx)("input",{autoFocus:!0,value:yt,onChange:L=>zt(L.target.value),placeholder:q(i,"z. B. Bagger, Person, Stuhl, Big Bag, Stahl \u2026","e.g. excavator, person, chair, big bag, steel \u2026"),onKeyDown:L=>L.key==="Escape"&&ve(!1)}),(0,S.jsx)("button",{className:"btn",children:q(i,"Suchen","Search")})]}),ie&&(0,S.jsxs)("div",{className:"lab-ui lab-ask",children:[(0,S.jsxs)("div",{className:"lab-ask-h",children:[(0,S.jsxs)("small",{children:["\u275D ",q(i,"Frag das Lab \xB7 regelbasiert, offline, mit Quelle","Ask the lab \xB7 rule-based, offline, with source")]}),(0,S.jsx)("button",{className:"lab-x",onClick:()=>pe(!1),children:"\u2715"})]}),(0,S.jsxs)("div",{className:"lab-ask-log",children:[ht.length===0&&(0,S.jsx)("p",{className:"lab-lg-d",children:q(i,"Beispiele: \u201EWie viele Personen?\u201C \xB7 \u201EWo ist der Bagger?\u201C \xB7 \u201EWelche Abweichungen?\u201C \xB7 \u201EWie viel Stahl?\u201C",'Examples: "How many people?" \xB7 "Where is the excavator?" \xB7 "Which deviations?" \xB7 "How much steel?"')}),ht.map((L,G)=>(0,S.jsxs)("div",{className:"lab-ask-qa",children:[(0,S.jsx)("b",{children:L.q}),(0,S.jsx)("p",{children:L.a}),(0,S.jsx)("span",{children:L.src.map((He,Nt)=>(0,S.jsx)("em",{children:He},Nt))})]},G))]}),(0,S.jsxs)("form",{onSubmit:L=>{L.preventDefault(),!(!Oe.trim()||!o.current)&&(st(G=>[...G.slice(-5),o.current.ask(Oe.trim())]),Ue(""))},children:[(0,S.jsx)("input",{autoFocus:!0,value:Oe,onChange:L=>Ue(L.target.value),placeholder:q(i,"Frage zum Scan \u2026","Question about the scan \u2026"),onKeyDown:L=>L.key==="Escape"&&pe(!1)}),(0,S.jsx)("button",{className:"btn",children:q(i,"Fragen","Ask")})]})]}),ut==="plan"&&(0,S.jsxs)("div",{className:"lab-ui lab-panel",children:[(0,S.jsxs)("div",{className:"lab-panel-h",children:[(0,S.jsxs)("b",{children:["\u25A4 ",q(i,"Grundriss \xB7 w\xE4chst mit jedem Scan","Floor plan \xB7 grows with every scan")]}),(0,S.jsx)("button",{className:"btn ghost",onClick:Se,children:"\u2913 PNG"}),(0,S.jsx)("button",{className:"lab-x",onClick:()=>N(null),children:"\u2715"})]}),(0,S.jsx)("div",{className:"lab-panel-b",children:(0,S.jsx)("canvas",{ref:a,className:"lab-plan"})})]}),ut==="proj"&&(0,S.jsxs)("div",{className:"lab-ui lab-panel",children:[(0,S.jsxs)("div",{className:"lab-panel-h",children:[(0,S.jsxs)("b",{children:["\u25EB ",q(i,"Projektionsarten der aktuellen Punktwolke","Projection types of the current point cloud")]}),(0,S.jsxs)("button",{className:"btn ghost",onClick:Ke,children:["\u21BB ",q(i,"Aktualisieren","Refresh")]}),(0,S.jsx)("button",{className:"lab-x",onClick:()=>N(null),children:"\u2715"})]}),(0,S.jsxs)("div",{className:"lab-panel-b lab-projgrid",children:[Ie&&[["pano",q(i,"Panoramabild (vom aktuellen Standpunkt)","Panorama (from current position)")],["cube",q(i,"W\xFCrfelnetzbild","Cube-map net")],["persp",q(i,"Bild aus vorgegebener Kameraperspektive","Image from a given camera perspective")],["ortho",q(i,"Orthobild (Draufsicht)","Orthoimage (top view)")]].map(([L,G])=>(0,S.jsxs)("figure",{children:[(0,S.jsx)("img",{src:Ie[L],alt:""}),(0,S.jsx)("figcaption",{children:G})]},L)),(0,S.jsx)("p",{className:"lab-lg-d",children:q(i,"Wie Abb. 2.6 der Dissertation \u2013 nur aus dem, was du bisher gescannt hast.","As in Fig. 2.6 of the dissertation \u2013 built only from what you have scanned so far.")})]})]}),ut==="pano"&&(0,S.jsxs)("div",{className:"lab-ui lab-panel",children:[(0,S.jsxs)("div",{className:"lab-panel-h",children:[(0,S.jsxs)("b",{children:["\u25CE ",q(i,"360\xB0-Panoramen der TLS-Standpunkte","360\xB0 panoramas of the TLS positions")]}),(0,S.jsx)("button",{className:"lab-x",onClick:()=>(N(null),bt(null)),children:"\u2715"})]}),(0,S.jsx)("div",{className:"lab-panel-b",children:hn?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(jp,{url:hn.url}),(0,S.jsxs)("div",{className:"lab-pano-bar",children:[(0,S.jsxs)("button",{className:"btn ghost",onClick:()=>bt(null),children:["\u2190 ",q(i,"\xDCbersicht","Overview")]}),(0,S.jsxs)("span",{children:[q(i,"Standpunkt","Position")," ",hn.id," \xB7 x ",hn.x.toFixed(1)," \xB7 z ",hn.z.toFixed(1)," \xB7 ",q(i,"Intensit\xE4tsbild \xB7 ziehen zum Umsehen","intensity image \xB7 drag to look around")]})]})]}):vt.length?(0,S.jsx)("div",{className:"lab-panogrid",children:vt.map(L=>(0,S.jsxs)("button",{onClick:()=>bt(L),children:[(0,S.jsx)("img",{src:L.thumb,alt:""}),(0,S.jsxs)("span",{children:[q(i,"Standpunkt","Position")," ",L.id]})]},L.id))}):(0,S.jsx)("p",{className:"lab-lg-d",children:q(i,"Noch keine Panoramen. Wechsle zu TLS (3), stelle Scanner auf (P) und scanne (Leertaste) \u2013 jeder Standpunkt liefert ein 360\xB0-Bild.","No panoramas yet. Switch to TLS (3), set up scanners (P) and scan (space) \u2013 every position yields a 360\xB0 image.")})})]}),!u&&(0,S.jsxs)("div",{className:"lab-ui lab-intro",children:[(0,S.jsx)("div",{className:"kicker",children:"3D Operation System \xB7 powered by X-AVIS"}),(0,S.jsx)("h1",{children:"Spatial AI Lab"}),(0,S.jsx)("p",{children:q(i,"Du startest in der Leere. Nur dein Scanner sieht \u2013 was er erfasst, wird Wirklichkeit: Punkt f\xFCr Punkt legst du echte Laserscans frei: eine Stahlbauhalle und \u2013 durchs offene Tor \u2013 die Referenzbaustelle Aachen. Folge den Signalen, scanne die Stationen, und X-AVIS segmentiert, was du gefunden hast. Die Drohne findet, Handheld und TLS analysieren \u2013 und jeder Akku ist begrenzt. Manche Stationen schalten Skills frei \u2026","You start in the void. Only your scanner can see \u2013 whatever it captures becomes real: point by point you uncover real laser scans: a steel fabrication hall and \u2013 through the open gate \u2013 the Reference Construction Site Aachen. Follow the signals, scan the stations, and X-AVIS segments what you found. The drone finds, handheld and TLS analyse \u2013 and every battery is limited. Some stations unlock skills \u2026")}),(0,S.jsx)("div",{className:"lab-techpick",children:pu.map(L=>(0,S.jsxs)("button",{className:x===L.id?"on":"",onClick:()=>Te(L.id),children:[(0,S.jsx)("i",{children:L.icon}),(0,S.jsx)("b",{children:ot(L.t,i)}),(0,S.jsx)("span",{children:ot(Je?L.dt:L.d,i)})]},L.id))}),(0,S.jsxs)("div",{className:"lab-modes",children:[(0,S.jsxs)("button",{className:f==="dark"?"on":"",onClick:()=>g("dark"),children:[(0,S.jsx)("i",{className:"sw-dark"}),q(i,"Dunkle Leere","Dark void")]}),(0,S.jsxs)("button",{className:f==="light"?"on":"",onClick:()=>g("light"),children:[(0,S.jsx)("i",{className:"sw-light"}),q(i,"Wei\xDFe Leere","White void")]})]}),c<1?(0,S.jsxs)("div",{className:"lab-load",children:[(0,S.jsx)("i",{style:{width:`${Math.round(c*100)}%`}}),(0,S.jsxs)("span",{children:[q(i,"Lade Punktwolke","Loading point cloud")," \xB7 ",Math.round(c*100)," %"]})]}):(0,S.jsxs)("button",{className:"btn",onClick:()=>{Ne(),o.current?.tech(x),d(!0),o.current?.start()},children:["\u25B6 ",q(i,"Scan starten","Start scanning"),Je?" \xB7 "+q(i,"Vollbild quer","fullscreen landscape"):""]}),(0,S.jsx)("small",{className:"lab-note",children:q(i,"Echte Scans: Stahlbauhalle (RWTH Aachen) \xB7 Referenzbaustelle Aachen aus RefSite3D (Fahrendholz-Heiermann et al., CC BY 4.0) \xB7 einzelne Stationsobjekte synthetisch","Real scans: steel hall (RWTH Aachen) \xB7 Reference Construction Site Aachen from RefSite3D (Fahrendholz-Heiermann et al., CC BY 4.0) \xB7 some station objects synthetic")})]}),St&&(0,S.jsx)(zd,{s:St,lang:i,skills:td(St),onClose:()=>y(null)}),R!==null&&!J&&_===null&&ut===null&&(0,S.jsxs)("div",{className:"lab-ui lab-done",children:[(0,S.jsxs)("b",{children:[q(i,"Lab vollst\xE4ndig entdeckt","Lab fully discovered")," \u2713"]}),(0,S.jsxs)("span",{children:[q(i,`Alle ${Ua} Stationen analysiert in`,`All ${Ua} stations analysed in`)," ",(0,S.jsx)("b",{children:nm(R)})," \xB7 ",q(i,"Gel\xE4nde erfasst","area captured")," ",Math.round(p.cov*100)," % \xB7 Skills ",F.unlocked.length,"/",ji.length,!p.bonus&&` \xB7 ${q(i,"ein Signal fehlt noch \u2026","one signal is still missing \u2026")}`]}),(0,S.jsx)("span",{children:q(i,"Vom Scan zur Entscheidung.","From scan to decision.")}),(0,S.jsxs)("div",{className:"lab-done-row",children:[(0,S.jsxs)("button",{className:"btn",onClick:()=>v(!0),children:["\u25B6 ",q(i,"Weiter erkunden","Keep exploring")]}),(0,S.jsx)("a",{className:"btn ghost",href:"#/",children:q(i,"Zur Website","Back to website")})]})]}),Je&&u&&E&&!$&&(0,S.jsxs)("div",{className:"lab-ui lab-rotate",children:[(0,S.jsx)("div",{className:"lab-rotate-i",children:"\u{1F4F1}"}),(0,S.jsx)("b",{children:q(i,"Handy quer drehen","Rotate your phone")}),(0,S.jsx)("span",{children:q(i,"Das Spatial AI Lab ist f\xFCr das Querformat gemacht \u2013 mehr Halle, mehr Platz f\xFCr Joystick und Steuerung.","The Spatial AI Lab is made for landscape \u2013 more hall, more room for joystick and controls.")}),(0,S.jsxs)("button",{className:"btn",onClick:Ne,children:["\u26F6 ",q(i,"Vollbild","Fullscreen")]}),(0,S.jsx)("button",{className:"lab-flip",onClick:()=>ce(!0),children:q(i,"Trotzdem hochkant","Stay in portrait")})]}),(0,S.jsxs)("div",{className:"lab-copy",children:["\xA9 ",new Date().getFullYear()," Jan Luca Fahrendholz-Heiermann \xB7 X-AVIS"]})]})},Bb=gv;export{Bb as default};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
