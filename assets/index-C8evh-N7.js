var au=Object.defineProperty;var ou=(i,e,t)=>e in i?au(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var kt=(i,e,t)=>ou(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eo="176",mr={ROTATE:0,DOLLY:1,PAN:2},dr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lu=0,Yo=1,cu=2,Ql=1,uu=2,ri=3,bi=0,_n=1,si=2,Ei=0,gr=1,$o=2,Ko=3,Zo=4,hu=5,zi=100,fu=101,du=102,pu=103,mu=104,gu=200,_u=201,vu=202,xu=203,Na=204,Fa=205,Mu=206,Su=207,yu=208,Eu=209,Tu=210,bu=211,Au=212,wu=213,Cu=214,Oa=0,Ba=1,za=2,vr=3,Ha=4,ka=5,Va=6,Ga=7,ec=0,Ru=1,Pu=2,Ti=0,Du=1,Lu=2,Uu=3,Iu=4,Nu=5,Fu=6,Ou=7,tc=300,xr=301,Mr=302,Wa=303,Xa=304,ks=306,qa=1e3,ki=1001,ja=1002,Nn=1003,Bu=1004,rs=1005,Vn=1006,ra=1007,Vi=1008,Xn=1009,nc=1010,ic=1011,kr=1012,To=1013,Gi=1014,ai=1015,qr=1016,bo=1017,Ao=1018,Vr=1020,rc=35902,sc=1021,ac=1022,In=1023,Gr=1026,Wr=1027,oc=1028,wo=1029,lc=1030,Co=1031,Ro=1033,Cs=33776,Rs=33777,Ps=33778,Ds=33779,Ya=35840,$a=35841,Ka=35842,Za=35843,Ja=36196,Qa=37492,eo=37496,to=37808,no=37809,io=37810,ro=37811,so=37812,ao=37813,oo=37814,lo=37815,co=37816,uo=37817,ho=37818,fo=37819,po=37820,mo=37821,Ls=36492,go=36494,_o=36495,cc=36283,vo=36284,xo=36285,Mo=36286,zu=3200,Hu=3201,uc=0,ku=1,yi="",bn="srgb",Sr="srgb-linear",Bs="linear",Ut="srgb",Qi=7680,Jo=519,Vu=512,Gu=513,Wu=514,hc=515,Xu=516,qu=517,ju=518,Yu=519,Qo=35044,el="300 es",oi=2e3,zs=2001;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Us=Math.PI/180,So=180/Math.PI;function jr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function $u(i,e){return(i%e+e)%e}function sa(i,e,t){return(1-t)*i+t*e}function Nr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ku={DEG2RAD:Us};class st{constructor(e=0,t=0){st.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*n-c*s+e.x,this.y=a*s+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,n,s,a,c,h,d,m){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,c,h,d,m)}set(e,t,n,s,a,c,h,d,m){const v=this.elements;return v[0]=e,v[1]=s,v[2]=h,v[3]=t,v[4]=a,v[5]=d,v[6]=n,v[7]=c,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,c=n[0],h=n[3],d=n[6],m=n[1],v=n[4],x=n[7],M=n[2],y=n[5],b=n[8],w=s[0],S=s[3],p=s[6],F=s[1],N=s[4],D=s[7],X=s[2],V=s[5],l=s[8];return a[0]=c*w+h*F+d*X,a[3]=c*S+h*N+d*V,a[6]=c*p+h*D+d*l,a[1]=m*w+v*F+x*X,a[4]=m*S+v*N+x*V,a[7]=m*p+v*D+x*l,a[2]=M*w+y*F+b*X,a[5]=M*S+y*N+b*V,a[8]=M*p+y*D+b*l,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],h=e[5],d=e[6],m=e[7],v=e[8];return t*c*v-t*h*m-n*a*v+n*h*d+s*a*m-s*c*d}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],h=e[5],d=e[6],m=e[7],v=e[8],x=v*c-h*m,M=h*d-v*a,y=m*a-c*d,b=t*x+n*M+s*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=x*w,e[1]=(s*m-v*n)*w,e[2]=(h*n-s*c)*w,e[3]=M*w,e[4]=(v*t-s*d)*w,e[5]=(s*a-h*t)*w,e[6]=y*w,e[7]=(n*d-m*t)*w,e[8]=(c*t-n*a)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,c,h){const d=Math.cos(a),m=Math.sin(a);return this.set(n*d,n*m,-n*(d*c+m*h)+c+e,-s*m,s*d,-s*(-m*c+d*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(aa.makeScale(e,t)),this}rotate(e){return this.premultiply(aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new rt;function fc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zu(){const i=Hs("canvas");return i.style.display="block",i}const tl={};function Is(i){i in tl||(tl[i]=!0,console.warn(i))}function Ju(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function Qu(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function eh(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nl=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),il=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function th(){const i={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Ut&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ut&&(s.r=_r(s.r),s.g=_r(s.g),s.b=_r(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yi?Bs:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Sr]:{primaries:e,whitePoint:n,transfer:Bs,toXYZ:nl,fromXYZ:il,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:n,transfer:Ut,toXYZ:nl,fromXYZ:il,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),i}const wt=th();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let er;class nh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{er===void 0&&(er=Hs("canvas")),er.width=e.width,er.height=e.height;const s=er.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=er}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=li(a[c]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(li(t[n]/255)*255):t[n]=li(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ih=0;class Po{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=jr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,h=s.length;c<h;c++)s[c].isDataTexture?a.push(oa(s[c].image)):a.push(oa(s[c]))}else a=oa(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function oa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rh=0;class vn extends ji{constructor(e=vn.DEFAULT_IMAGE,t=vn.DEFAULT_MAPPING,n=ki,s=ki,a=Vn,c=Vi,h=In,d=Xn,m=vn.DEFAULT_ANISOTROPY,v=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=jr(),this.name="",this.source=new Po(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=d,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qa:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qa:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=tc;vn.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,t=0,n=0,s=1){Gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*n+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*n+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*n+c[11]*s+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const d=e.elements,m=d[0],v=d[4],x=d[8],M=d[1],y=d[5],b=d[9],w=d[2],S=d[6],p=d[10];if(Math.abs(v-M)<.01&&Math.abs(x-w)<.01&&Math.abs(b-S)<.01){if(Math.abs(v+M)<.1&&Math.abs(x+w)<.1&&Math.abs(b+S)<.1&&Math.abs(m+y+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(m+1)/2,D=(y+1)/2,X=(p+1)/2,V=(v+M)/4,l=(x+w)/4,q=(b+S)/4;return N>D&&N>X?N<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(N),s=V/n,a=l/n):D>X?D<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(D),n=V/s,a=q/s):X<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(X),n=l/a,s=q/a),this.set(n,s,a,t),this}let F=Math.sqrt((S-b)*(S-b)+(x-w)*(x-w)+(M-v)*(M-v));return Math.abs(F)<.001&&(F=1),this.x=(S-b)/F,this.y=(x-w)/F,this.z=(M-v)/F,this.w=Math.acos((m+y+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sh extends ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t);const s={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const a=new vn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const c=n.count;for(let h=0;h<c;h++)this.textures[h]=a.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Po(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends sh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dc extends vn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ah extends vn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,c,h){let d=n[s+0],m=n[s+1],v=n[s+2],x=n[s+3];const M=a[c+0],y=a[c+1],b=a[c+2],w=a[c+3];if(h===0){e[t+0]=d,e[t+1]=m,e[t+2]=v,e[t+3]=x;return}if(h===1){e[t+0]=M,e[t+1]=y,e[t+2]=b,e[t+3]=w;return}if(x!==w||d!==M||m!==y||v!==b){let S=1-h;const p=d*M+m*y+v*b+x*w,F=p>=0?1:-1,N=1-p*p;if(N>Number.EPSILON){const X=Math.sqrt(N),V=Math.atan2(X,p*F);S=Math.sin(S*V)/X,h=Math.sin(h*V)/X}const D=h*F;if(d=d*S+M*D,m=m*S+y*D,v=v*S+b*D,x=x*S+w*D,S===1-h){const X=1/Math.sqrt(d*d+m*m+v*v+x*x);d*=X,m*=X,v*=X,x*=X}}e[t]=d,e[t+1]=m,e[t+2]=v,e[t+3]=x}static multiplyQuaternionsFlat(e,t,n,s,a,c){const h=n[s],d=n[s+1],m=n[s+2],v=n[s+3],x=a[c],M=a[c+1],y=a[c+2],b=a[c+3];return e[t]=h*b+v*x+d*y-m*M,e[t+1]=d*b+v*M+m*x-h*y,e[t+2]=m*b+v*y+h*M-d*x,e[t+3]=v*b-h*x-d*M-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,c=e._order,h=Math.cos,d=Math.sin,m=h(n/2),v=h(s/2),x=h(a/2),M=d(n/2),y=d(s/2),b=d(a/2);switch(c){case"XYZ":this._x=M*v*x+m*y*b,this._y=m*y*x-M*v*b,this._z=m*v*b+M*y*x,this._w=m*v*x-M*y*b;break;case"YXZ":this._x=M*v*x+m*y*b,this._y=m*y*x-M*v*b,this._z=m*v*b-M*y*x,this._w=m*v*x+M*y*b;break;case"ZXY":this._x=M*v*x-m*y*b,this._y=m*y*x+M*v*b,this._z=m*v*b+M*y*x,this._w=m*v*x-M*y*b;break;case"ZYX":this._x=M*v*x-m*y*b,this._y=m*y*x+M*v*b,this._z=m*v*b-M*y*x,this._w=m*v*x+M*y*b;break;case"YZX":this._x=M*v*x+m*y*b,this._y=m*y*x+M*v*b,this._z=m*v*b-M*y*x,this._w=m*v*x-M*y*b;break;case"XZY":this._x=M*v*x-m*y*b,this._y=m*y*x-M*v*b,this._z=m*v*b+M*y*x,this._w=m*v*x+M*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],c=t[1],h=t[5],d=t[9],m=t[2],v=t[6],x=t[10],M=n+h+x;if(M>0){const y=.5/Math.sqrt(M+1);this._w=.25/y,this._x=(v-d)*y,this._y=(a-m)*y,this._z=(c-s)*y}else if(n>h&&n>x){const y=2*Math.sqrt(1+n-h-x);this._w=(v-d)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(a+m)/y}else if(h>x){const y=2*Math.sqrt(1+h-n-x);this._w=(a-m)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(d+v)/y}else{const y=2*Math.sqrt(1+x-n-h);this._w=(c-s)/y,this._x=(a+m)/y,this._y=(d+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,c=e._w,h=t._x,d=t._y,m=t._z,v=t._w;return this._x=n*v+c*h+s*m-a*d,this._y=s*v+c*d+a*h-n*m,this._z=a*v+c*m+n*d-s*h,this._w=c*v-n*h-s*d-a*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,c=this._w;let h=c*e._w+n*e._x+s*e._y+a*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=c,this._x=n,this._y=s,this._z=a,this;const d=1-h*h;if(d<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*n+t*this._x,this._y=y*s+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const m=Math.sqrt(d),v=Math.atan2(m,h),x=Math.sin((1-t)*v)/m,M=Math.sin(t*v)/m;return this._w=c*x+this._w*M,this._x=n*x+this._x*M,this._y=s*x+this._y*M,this._z=a*x+this._z*M,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,c=e.y,h=e.z,d=e.w,m=2*(c*s-h*n),v=2*(h*t-a*s),x=2*(a*n-c*t);return this.x=t+d*m+c*x-h*v,this.y=n+d*v+h*m-a*x,this.z=s+d*x+a*v-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,c=t.x,h=t.y,d=t.z;return this.x=s*d-a*h,this.y=a*c-n*d,this.z=n*h-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return la.copy(this).projectOnVector(e),this.sub(la)}reflect(e){return this.sub(la.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const la=new j,rl=new Xi;class qi{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,h=a.count;c<h;c++)e.isMesh===!0?e.getVertexPosition(c,Pn):Pn.fromBufferAttribute(a,c),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ss.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ss.copy(n.boundingBox)),ss.applyMatrix4(e.matrixWorld),this.union(ss)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),as.subVectors(this.max,Fr),tr.subVectors(e.a,Fr),nr.subVectors(e.b,Fr),ir.subVectors(e.c,Fr),mi.subVectors(nr,tr),gi.subVectors(ir,nr),Li.subVectors(tr,ir);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Li.z,Li.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Li.z,0,-Li.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Li.y,Li.x,0];return!ca(t,tr,nr,ir,as)||(t=[1,0,0,0,1,0,0,0,1],!ca(t,tr,nr,ir,as))?!1:(os.crossVectors(mi,gi),t=[os.x,os.y,os.z],ca(t,tr,nr,ir,as))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new j,new j,new j,new j,new j,new j,new j,new j],Pn=new j,ss=new qi,tr=new j,nr=new j,ir=new j,mi=new j,gi=new j,Li=new j,Fr=new j,as=new j,os=new j,Ui=new j;function ca(i,e,t,n,s){for(let a=0,c=i.length-3;a<=c;a+=3){Ui.fromArray(i,a);const h=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),d=e.dot(Ui),m=t.dot(Ui),v=n.dot(Ui);if(Math.max(-Math.max(d,m,v),Math.min(d,m,v))>h)return!1}return!0}const oh=new qi,Or=new j,ua=new j;let Do=class{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):oh.setFromPoints(e).getCenter(n);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);const t=Or.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Or,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(ua)),this.expandByPoint(Or.copy(e.center).sub(ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const ei=new j,ha=new j,ls=new j,_i=new j,fa=new j,cs=new j,da=new j;class pc{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ha.copy(e).add(t).multiplyScalar(.5),ls.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(ha);const a=e.distanceTo(t)*.5,c=-this.direction.dot(ls),h=_i.dot(this.direction),d=-_i.dot(ls),m=_i.lengthSq(),v=Math.abs(1-c*c);let x,M,y,b;if(v>0)if(x=c*d-h,M=c*h-d,b=a*v,x>=0)if(M>=-b)if(M<=b){const w=1/v;x*=w,M*=w,y=x*(x+c*M+2*h)+M*(c*x+M+2*d)+m}else M=a,x=Math.max(0,-(c*M+h)),y=-x*x+M*(M+2*d)+m;else M=-a,x=Math.max(0,-(c*M+h)),y=-x*x+M*(M+2*d)+m;else M<=-b?(x=Math.max(0,-(-c*a+h)),M=x>0?-a:Math.min(Math.max(-a,-d),a),y=-x*x+M*(M+2*d)+m):M<=b?(x=0,M=Math.min(Math.max(-a,-d),a),y=M*(M+2*d)+m):(x=Math.max(0,-(c*a+h)),M=x>0?a:Math.min(Math.max(-a,-d),a),y=-x*x+M*(M+2*d)+m);else M=c>0?-a:a,x=Math.max(0,-(c*M+h)),y=-x*x+M*(M+2*d)+m;return n&&n.copy(this.origin).addScaledVector(this.direction,x),s&&s.copy(ha).addScaledVector(ls,M),y}intersectSphere(e,t){ei.subVectors(e.center,this.origin);const n=ei.dot(this.direction),s=ei.dot(ei)-n*n,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),h=n-c,d=n+c;return d<0?null:h<0?this.at(d,t):this.at(h,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,c,h,d;const m=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,M=this.origin;return m>=0?(n=(e.min.x-M.x)*m,s=(e.max.x-M.x)*m):(n=(e.max.x-M.x)*m,s=(e.min.x-M.x)*m),v>=0?(a=(e.min.y-M.y)*v,c=(e.max.y-M.y)*v):(a=(e.max.y-M.y)*v,c=(e.min.y-M.y)*v),n>c||a>s||((a>n||isNaN(n))&&(n=a),(c<s||isNaN(s))&&(s=c),x>=0?(h=(e.min.z-M.z)*x,d=(e.max.z-M.z)*x):(h=(e.max.z-M.z)*x,d=(e.min.z-M.z)*x),n>d||h>s)||((h>n||n!==n)&&(n=h),(d<s||s!==s)&&(s=d),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,s,a){fa.subVectors(t,e),cs.subVectors(n,e),da.crossVectors(fa,cs);let c=this.direction.dot(da),h;if(c>0){if(s)return null;h=1}else if(c<0)h=-1,c=-c;else return null;_i.subVectors(this.origin,e);const d=h*this.direction.dot(cs.crossVectors(_i,cs));if(d<0)return null;const m=h*this.direction.dot(fa.cross(_i));if(m<0||d+m>c)return null;const v=-h*_i.dot(da);return v<0?null:this.at(v/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,t,n,s,a,c,h,d,m,v,x,M,y,b,w,S){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,c,h,d,m,v,x,M,y,b,w,S)}set(e,t,n,s,a,c,h,d,m,v,x,M,y,b,w,S){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=a,p[5]=c,p[9]=h,p[13]=d,p[2]=m,p[6]=v,p[10]=x,p[14]=M,p[3]=y,p[7]=b,p[11]=w,p[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/rr.setFromMatrixColumn(e,0).length(),a=1/rr.setFromMatrixColumn(e,1).length(),c=1/rr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,c=Math.cos(n),h=Math.sin(n),d=Math.cos(s),m=Math.sin(s),v=Math.cos(a),x=Math.sin(a);if(e.order==="XYZ"){const M=c*v,y=c*x,b=h*v,w=h*x;t[0]=d*v,t[4]=-d*x,t[8]=m,t[1]=y+b*m,t[5]=M-w*m,t[9]=-h*d,t[2]=w-M*m,t[6]=b+y*m,t[10]=c*d}else if(e.order==="YXZ"){const M=d*v,y=d*x,b=m*v,w=m*x;t[0]=M+w*h,t[4]=b*h-y,t[8]=c*m,t[1]=c*x,t[5]=c*v,t[9]=-h,t[2]=y*h-b,t[6]=w+M*h,t[10]=c*d}else if(e.order==="ZXY"){const M=d*v,y=d*x,b=m*v,w=m*x;t[0]=M-w*h,t[4]=-c*x,t[8]=b+y*h,t[1]=y+b*h,t[5]=c*v,t[9]=w-M*h,t[2]=-c*m,t[6]=h,t[10]=c*d}else if(e.order==="ZYX"){const M=c*v,y=c*x,b=h*v,w=h*x;t[0]=d*v,t[4]=b*m-y,t[8]=M*m+w,t[1]=d*x,t[5]=w*m+M,t[9]=y*m-b,t[2]=-m,t[6]=h*d,t[10]=c*d}else if(e.order==="YZX"){const M=c*d,y=c*m,b=h*d,w=h*m;t[0]=d*v,t[4]=w-M*x,t[8]=b*x+y,t[1]=x,t[5]=c*v,t[9]=-h*v,t[2]=-m*v,t[6]=y*x+b,t[10]=M-w*x}else if(e.order==="XZY"){const M=c*d,y=c*m,b=h*d,w=h*m;t[0]=d*v,t[4]=-x,t[8]=m*v,t[1]=M*x+w,t[5]=c*v,t[9]=y*x-b,t[2]=b*x-y,t[6]=h*v,t[10]=w*x+M}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lh,e,ch)}lookAt(e,t,n){const s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),vi.crossVectors(n,xn),vi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),vi.crossVectors(n,xn)),vi.normalize(),us.crossVectors(xn,vi),s[0]=vi.x,s[4]=us.x,s[8]=xn.x,s[1]=vi.y,s[5]=us.y,s[9]=xn.y,s[2]=vi.z,s[6]=us.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,c=n[0],h=n[4],d=n[8],m=n[12],v=n[1],x=n[5],M=n[9],y=n[13],b=n[2],w=n[6],S=n[10],p=n[14],F=n[3],N=n[7],D=n[11],X=n[15],V=s[0],l=s[4],q=s[8],R=s[12],C=s[1],z=s[5],ue=s[9],Y=s[13],de=s[2],me=s[6],fe=s[10],pe=s[14],se=s[3],Se=s[7],Ue=s[11],Ve=s[15];return a[0]=c*V+h*C+d*de+m*se,a[4]=c*l+h*z+d*me+m*Se,a[8]=c*q+h*ue+d*fe+m*Ue,a[12]=c*R+h*Y+d*pe+m*Ve,a[1]=v*V+x*C+M*de+y*se,a[5]=v*l+x*z+M*me+y*Se,a[9]=v*q+x*ue+M*fe+y*Ue,a[13]=v*R+x*Y+M*pe+y*Ve,a[2]=b*V+w*C+S*de+p*se,a[6]=b*l+w*z+S*me+p*Se,a[10]=b*q+w*ue+S*fe+p*Ue,a[14]=b*R+w*Y+S*pe+p*Ve,a[3]=F*V+N*C+D*de+X*se,a[7]=F*l+N*z+D*me+X*Se,a[11]=F*q+N*ue+D*fe+X*Ue,a[15]=F*R+N*Y+D*pe+X*Ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],c=e[1],h=e[5],d=e[9],m=e[13],v=e[2],x=e[6],M=e[10],y=e[14],b=e[3],w=e[7],S=e[11],p=e[15];return b*(+a*d*x-s*m*x-a*h*M+n*m*M+s*h*y-n*d*y)+w*(+t*d*y-t*m*M+a*c*M-s*c*y+s*m*v-a*d*v)+S*(+t*m*x-t*h*y-a*c*x+n*c*y+a*h*v-n*m*v)+p*(-s*h*v-t*d*x+t*h*M+s*c*x-n*c*M+n*d*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],h=e[5],d=e[6],m=e[7],v=e[8],x=e[9],M=e[10],y=e[11],b=e[12],w=e[13],S=e[14],p=e[15],F=x*S*m-w*M*m+w*d*y-h*S*y-x*d*p+h*M*p,N=b*M*m-v*S*m-b*d*y+c*S*y+v*d*p-c*M*p,D=v*w*m-b*x*m+b*h*y-c*w*y-v*h*p+c*x*p,X=b*x*d-v*w*d-b*h*M+c*w*M+v*h*S-c*x*S,V=t*F+n*N+s*D+a*X;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const l=1/V;return e[0]=F*l,e[1]=(w*M*a-x*S*a-w*s*y+n*S*y+x*s*p-n*M*p)*l,e[2]=(h*S*a-w*d*a+w*s*m-n*S*m-h*s*p+n*d*p)*l,e[3]=(x*d*a-h*M*a-x*s*m+n*M*m+h*s*y-n*d*y)*l,e[4]=N*l,e[5]=(v*S*a-b*M*a+b*s*y-t*S*y-v*s*p+t*M*p)*l,e[6]=(b*d*a-c*S*a-b*s*m+t*S*m+c*s*p-t*d*p)*l,e[7]=(c*M*a-v*d*a+v*s*m-t*M*m-c*s*y+t*d*y)*l,e[8]=D*l,e[9]=(b*x*a-v*w*a-b*n*y+t*w*y+v*n*p-t*x*p)*l,e[10]=(c*w*a-b*h*a+b*n*m-t*w*m-c*n*p+t*h*p)*l,e[11]=(v*h*a-c*x*a-v*n*m+t*x*m+c*n*y-t*h*y)*l,e[12]=X*l,e[13]=(v*w*s-b*x*s+b*n*M-t*w*M-v*n*S+t*x*S)*l,e[14]=(b*h*s-c*w*s-b*n*d+t*w*d+c*n*S-t*h*S)*l,e[15]=(c*x*s-v*h*s+v*n*d-t*x*d-c*n*M+t*h*M)*l,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,c=e.x,h=e.y,d=e.z,m=a*c,v=a*h;return this.set(m*c+n,m*h-s*d,m*d+s*h,0,m*h+s*d,v*h+n,v*d-s*c,0,m*d-s*h,v*d+s*c,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,c){return this.set(1,n,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,c=t._y,h=t._z,d=t._w,m=a+a,v=c+c,x=h+h,M=a*m,y=a*v,b=a*x,w=c*v,S=c*x,p=h*x,F=d*m,N=d*v,D=d*x,X=n.x,V=n.y,l=n.z;return s[0]=(1-(w+p))*X,s[1]=(y+D)*X,s[2]=(b-N)*X,s[3]=0,s[4]=(y-D)*V,s[5]=(1-(M+p))*V,s[6]=(S+F)*V,s[7]=0,s[8]=(b+N)*l,s[9]=(S-F)*l,s[10]=(1-(M+w))*l,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=rr.set(s[0],s[1],s[2]).length();const c=rr.set(s[4],s[5],s[6]).length(),h=rr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Dn.copy(this);const m=1/a,v=1/c,x=1/h;return Dn.elements[0]*=m,Dn.elements[1]*=m,Dn.elements[2]*=m,Dn.elements[4]*=v,Dn.elements[5]*=v,Dn.elements[6]*=v,Dn.elements[8]*=x,Dn.elements[9]*=x,Dn.elements[10]*=x,t.setFromRotationMatrix(Dn),n.x=a,n.y=c,n.z=h,this}makePerspective(e,t,n,s,a,c,h=oi){const d=this.elements,m=2*a/(t-e),v=2*a/(n-s),x=(t+e)/(t-e),M=(n+s)/(n-s);let y,b;if(h===oi)y=-(c+a)/(c-a),b=-2*c*a/(c-a);else if(h===zs)y=-c/(c-a),b=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=m,d[4]=0,d[8]=x,d[12]=0,d[1]=0,d[5]=v,d[9]=M,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=b,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,s,a,c,h=oi){const d=this.elements,m=1/(t-e),v=1/(n-s),x=1/(c-a),M=(t+e)*m,y=(n+s)*v;let b,w;if(h===oi)b=(c+a)*x,w=-2*x;else if(h===zs)b=a*x,w=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=2*m,d[4]=0,d[8]=0,d[12]=-M,d[1]=0,d[5]=2*v,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=w,d[14]=-b,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const rr=new j,Dn=new Wt,lh=new j(0,0,0),ch=new j(1,1,1),vi=new j,us=new j,xn=new j,sl=new Wt,al=new Xi;class qn{constructor(e=0,t=0,n=0,s=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],c=s[4],h=s[8],d=s[1],m=s[5],v=s[9],x=s[2],M=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(M,m),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(d,m)):(this._y=Math.atan2(-x,a),this._z=0);break;case"ZXY":this._x=Math.asin(_t(M,-1,1)),Math.abs(M)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-_t(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(M,y),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-x,a)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(M,m),this._y=Math.atan2(h,a)):(this._x=Math.atan2(-v,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return al.setFromEuler(this),this.setFromQuaternion(al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class mc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uh=0;const ol=new j,sr=new Xi,ti=new Wt,hs=new j,Br=new j,hh=new j,fh=new Xi,ll=new j(1,0,0),cl=new j(0,1,0),ul=new j(0,0,1),hl={type:"added"},dh={type:"removed"},ar={type:"childadded",child:null},pa={type:"childremoved",child:null};class on extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new j,t=new qn,n=new Xi,s=new j(1,1,1);function a(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Wt},normalMatrix:{value:new rt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(ll,e)}rotateY(e){return this.rotateOnAxis(cl,e)}rotateZ(e){return this.rotateOnAxis(ul,e)}translateOnAxis(e,t){return ol.copy(e).applyQuaternion(this.quaternion),this.position.add(ol.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ll,e)}translateY(e){return this.translateOnAxis(cl,e)}translateZ(e){return this.translateOnAxis(ul,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hs.copy(e):hs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Br,hs,this.up):ti.lookAt(hs,Br,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),sr.setFromRotationMatrix(ti),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hl),ar.child=e,this.dispatchEvent(ar),ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dh),pa.child=e,this.dispatchEvent(pa),pa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hl),ar.child=e,this.dispatchEvent(ar),ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,e,hh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,fh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?{min:h.boundingBox.min.toArray(),max:h.boundingBox.max.toArray()}:void 0,boundingSphere:h.boundingSphere?{radius:h.boundingSphere.radius,center:h.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(h=>({...h})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function a(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let m=0,v=d.length;m<v;m++){const x=d[m];a(e.shapes,x)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,m=this.material.length;d<m;d++)h.push(a(e.materials,this.material[d]));s.material=h}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let h=0;h<this.children.length;h++)s.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];s.animations.push(a(e.animations,d))}}if(t){const h=c(e.geometries),d=c(e.materials),m=c(e.textures),v=c(e.images),x=c(e.shapes),M=c(e.skeletons),y=c(e.animations),b=c(e.nodes);h.length>0&&(n.geometries=h),d.length>0&&(n.materials=d),m.length>0&&(n.textures=m),v.length>0&&(n.images=v),x.length>0&&(n.shapes=x),M.length>0&&(n.skeletons=M),y.length>0&&(n.animations=y),b.length>0&&(n.nodes=b)}return n.object=s,n;function c(h){const d=[];for(const m in h){const v=h[m];delete v.metadata,d.push(v)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}on.DEFAULT_UP=new j(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new j,ni=new j,ma=new j,ii=new j,or=new j,lr=new j,fl=new j,ga=new j,_a=new j,va=new j,xa=new Gt,Ma=new Gt,Sa=new Gt;class Un{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ln.subVectors(e,t),s.cross(Ln);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){Ln.subVectors(s,t),ni.subVectors(n,t),ma.subVectors(e,t);const c=Ln.dot(Ln),h=Ln.dot(ni),d=Ln.dot(ma),m=ni.dot(ni),v=ni.dot(ma),x=c*m-h*h;if(x===0)return a.set(0,0,0),null;const M=1/x,y=(m*d-h*v)*M,b=(c*v-h*d)*M;return a.set(1-y-b,b,y)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,n,s,a,c,h,d){return this.getBarycoord(e,t,n,s,ii)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,ii.x),d.addScaledVector(c,ii.y),d.addScaledVector(h,ii.z),d)}static getInterpolatedAttribute(e,t,n,s,a,c){return xa.setScalar(0),Ma.setScalar(0),Sa.setScalar(0),xa.fromBufferAttribute(e,t),Ma.fromBufferAttribute(e,n),Sa.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(xa,a.x),c.addScaledVector(Ma,a.y),c.addScaledVector(Sa,a.z),c}static isFrontFacing(e,t,n,s){return Ln.subVectors(n,t),ni.subVectors(e,t),Ln.cross(ni).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Ln.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return Un.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let c,h;or.subVectors(s,n),lr.subVectors(a,n),ga.subVectors(e,n);const d=or.dot(ga),m=lr.dot(ga);if(d<=0&&m<=0)return t.copy(n);_a.subVectors(e,s);const v=or.dot(_a),x=lr.dot(_a);if(v>=0&&x<=v)return t.copy(s);const M=d*x-v*m;if(M<=0&&d>=0&&v<=0)return c=d/(d-v),t.copy(n).addScaledVector(or,c);va.subVectors(e,a);const y=or.dot(va),b=lr.dot(va);if(b>=0&&y<=b)return t.copy(a);const w=y*m-d*b;if(w<=0&&m>=0&&b<=0)return h=m/(m-b),t.copy(n).addScaledVector(lr,h);const S=v*b-y*x;if(S<=0&&x-v>=0&&y-b>=0)return fl.subVectors(a,s),h=(x-v)/(x-v+(y-b)),t.copy(s).addScaledVector(fl,h);const p=1/(S+w+M);return c=w*p,h=M*p,t.copy(n).addScaledVector(or,c).addScaledVector(lr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},fs={h:0,s:0,l:0};function ya(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class vt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,wt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=wt.workingColorSpace){if(e=$u(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,c=2*n-a;this.r=ya(c,a,e+1/3),this.g=ya(c,a,e),this.b=ya(c,a,e-1/3)}return wt.toWorkingColorSpace(this,s),this}setStyle(e,t=bn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],h=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const n=gc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return wt.fromWorkingColorSpace(an.copy(this),e),Math.round(_t(an.r*255,0,255))*65536+Math.round(_t(an.g*255,0,255))*256+Math.round(_t(an.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(an.copy(this),t);const n=an.r,s=an.g,a=an.b,c=Math.max(n,s,a),h=Math.min(n,s,a);let d,m;const v=(h+c)/2;if(h===c)d=0,m=0;else{const x=c-h;switch(m=v<=.5?x/(c+h):x/(2-c-h),c){case n:d=(s-a)/x+(s<a?6:0);break;case s:d=(a-n)/x+2;break;case a:d=(n-s)/x+4;break}d/=6}return e.h=d,e.s=m,e.l=v,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=bn){wt.fromWorkingColorSpace(an.copy(this),e);const t=an.r,n=an.g,s=an.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(fs);const n=sa(xi.h,fs.h,t),s=sa(xi.s,fs.s,t),a=sa(xi.l,fs.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new vt;vt.NAMES=gc;let ph=0;class Yr extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=gr,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Fa,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Na&&(n.blendSrc=this.blendSrc),this.blendDst!==Fa&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const c=[];for(const h in a){const d=a[h];delete d.metadata,c.push(d)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(n.textures=a),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _c extends Yr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new j,ds=new st;let mh=0;class Gn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qo,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ds.fromBufferAttribute(this,t),ds.applyMatrix3(e),this.setXY(t,ds.x,ds.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Nr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nr(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nr(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nr(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),s=mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),s=mn(s,this.array),a=mn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qo&&(e.usage=this.usage),e}}class vc extends Gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xc extends Gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Wn extends Gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gh=0;const Tn=new Wt,Ea=new on,cr=new j,Mn=new qi,zr=new qi,tn=new j;class wi extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fc(e)?xc:vc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new rt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return Ea.lookAt(e),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const c=e[s];n.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Wn(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];Mn.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Do);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const h=t[a];zr.setFromBufferAttribute(h),this.morphTargetsRelative?(tn.addVectors(Mn.min,zr.min),Mn.expandByPoint(tn),tn.addVectors(Mn.max,zr.max),Mn.expandByPoint(tn)):(Mn.expandByPoint(zr.min),Mn.expandByPoint(zr.max))}Mn.getCenter(n);let s=0;for(let a=0,c=e.count;a<c;a++)tn.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(tn));if(t)for(let a=0,c=t.length;a<c;a++){const h=t[a],d=this.morphTargetsRelative;for(let m=0,v=h.count;m<v;m++)tn.fromBufferAttribute(h,m),d&&(cr.fromBufferAttribute(e,m),tn.add(cr)),s=Math.max(s,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),h=[],d=[];for(let q=0;q<n.count;q++)h[q]=new j,d[q]=new j;const m=new j,v=new j,x=new j,M=new st,y=new st,b=new st,w=new j,S=new j;function p(q,R,C){m.fromBufferAttribute(n,q),v.fromBufferAttribute(n,R),x.fromBufferAttribute(n,C),M.fromBufferAttribute(a,q),y.fromBufferAttribute(a,R),b.fromBufferAttribute(a,C),v.sub(m),x.sub(m),y.sub(M),b.sub(M);const z=1/(y.x*b.y-b.x*y.y);isFinite(z)&&(w.copy(v).multiplyScalar(b.y).addScaledVector(x,-y.y).multiplyScalar(z),S.copy(x).multiplyScalar(y.x).addScaledVector(v,-b.x).multiplyScalar(z),h[q].add(w),h[R].add(w),h[C].add(w),d[q].add(S),d[R].add(S),d[C].add(S))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let q=0,R=F.length;q<R;++q){const C=F[q],z=C.start,ue=C.count;for(let Y=z,de=z+ue;Y<de;Y+=3)p(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const N=new j,D=new j,X=new j,V=new j;function l(q){X.fromBufferAttribute(s,q),V.copy(X);const R=h[q];N.copy(R),N.sub(X.multiplyScalar(X.dot(R))).normalize(),D.crossVectors(V,R);const z=D.dot(d[q])<0?-1:1;c.setXYZW(q,N.x,N.y,N.z,z)}for(let q=0,R=F.length;q<R;++q){const C=F[q],z=C.start,ue=C.count;for(let Y=z,de=z+ue;Y<de;Y+=3)l(e.getX(Y+0)),l(e.getX(Y+1)),l(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let M=0,y=n.count;M<y;M++)n.setXYZ(M,0,0,0);const s=new j,a=new j,c=new j,h=new j,d=new j,m=new j,v=new j,x=new j;if(e)for(let M=0,y=e.count;M<y;M+=3){const b=e.getX(M+0),w=e.getX(M+1),S=e.getX(M+2);s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,w),c.fromBufferAttribute(t,S),v.subVectors(c,a),x.subVectors(s,a),v.cross(x),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,w),m.fromBufferAttribute(n,S),h.add(v),d.add(v),m.add(v),n.setXYZ(b,h.x,h.y,h.z),n.setXYZ(w,d.x,d.y,d.z),n.setXYZ(S,m.x,m.y,m.z)}else for(let M=0,y=t.count;M<y;M+=3)s.fromBufferAttribute(t,M+0),a.fromBufferAttribute(t,M+1),c.fromBufferAttribute(t,M+2),v.subVectors(c,a),x.subVectors(s,a),v.cross(x),n.setXYZ(M+0,v.x,v.y,v.z),n.setXYZ(M+1,v.x,v.y,v.z),n.setXYZ(M+2,v.x,v.y,v.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(h,d){const m=h.array,v=h.itemSize,x=h.normalized,M=new m.constructor(d.length*v);let y=0,b=0;for(let w=0,S=d.length;w<S;w++){h.isInterleavedBufferAttribute?y=d[w]*h.data.stride+h.offset:y=d[w]*v;for(let p=0;p<v;p++)M[b++]=m[y++]}return new Gn(M,v,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wi,n=this.index.array,s=this.attributes;for(const h in s){const d=s[h],m=e(d,n);t.setAttribute(h,m)}const a=this.morphAttributes;for(const h in a){const d=[],m=a[h];for(let v=0,x=m.length;v<x;v++){const M=m[v],y=e(M,n);d.push(y)}t.morphAttributes[h]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,d=c.length;h<d;h++){const m=c[h];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const m in d)d[m]!==void 0&&(e[m]=d[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const m=n[d];e.data.attributes[d]=m.toJSON(e.data)}const s={};let a=!1;for(const d in this.morphAttributes){const m=this.morphAttributes[d],v=[];for(let x=0,M=m.length;x<M;x++){const y=m[x];v.push(y.toJSON(e.data))}v.length>0&&(s[d]=v,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const m in s){const v=s[m];this.setAttribute(m,v.clone(t))}const a=e.morphAttributes;for(const m in a){const v=[],x=a[m];for(let M=0,y=x.length;M<y;M++)v.push(x[M].clone(t));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,v=c.length;m<v;m++){const x=c[m];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dl=new Wt,Ii=new pc,ps=new Do,pl=new j,ms=new j,gs=new j,_s=new j,Ta=new j,vs=new j,ml=new j,xs=new j;class wn extends on{constructor(e=new wi,t=new _c){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const h=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const h=this.morphTargetInfluences;if(a&&h){vs.set(0,0,0);for(let d=0,m=a.length;d<m;d++){const v=h[d],x=a[d];v!==0&&(Ta.fromBufferAttribute(x,e),c?vs.addScaledVector(Ta,v):vs.addScaledVector(Ta.sub(t),v))}t.add(vs)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(a),Ii.copy(e.ray).recast(e.near),!(ps.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(ps,pl)===null||Ii.origin.distanceToSquared(pl)>(e.far-e.near)**2))&&(dl.copy(a).invert(),Ii.copy(e.ray).applyMatrix4(dl),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,n){let s;const a=this.geometry,c=this.material,h=a.index,d=a.attributes.position,m=a.attributes.uv,v=a.attributes.uv1,x=a.attributes.normal,M=a.groups,y=a.drawRange;if(h!==null)if(Array.isArray(c))for(let b=0,w=M.length;b<w;b++){const S=M[b],p=c[S.materialIndex],F=Math.max(S.start,y.start),N=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let D=F,X=N;D<X;D+=3){const V=h.getX(D),l=h.getX(D+1),q=h.getX(D+2);s=Ms(this,p,e,n,m,v,x,V,l,q),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const b=Math.max(0,y.start),w=Math.min(h.count,y.start+y.count);for(let S=b,p=w;S<p;S+=3){const F=h.getX(S),N=h.getX(S+1),D=h.getX(S+2);s=Ms(this,c,e,n,m,v,x,F,N,D),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(c))for(let b=0,w=M.length;b<w;b++){const S=M[b],p=c[S.materialIndex],F=Math.max(S.start,y.start),N=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let D=F,X=N;D<X;D+=3){const V=D,l=D+1,q=D+2;s=Ms(this,p,e,n,m,v,x,V,l,q),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const b=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let S=b,p=w;S<p;S+=3){const F=S,N=S+1,D=S+2;s=Ms(this,c,e,n,m,v,x,F,N,D),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function _h(i,e,t,n,s,a,c,h){let d;if(e.side===_n?d=n.intersectTriangle(c,a,s,!0,h):d=n.intersectTriangle(s,a,c,e.side===bi,h),d===null)return null;xs.copy(h),xs.applyMatrix4(i.matrixWorld);const m=t.ray.origin.distanceTo(xs);return m<t.near||m>t.far?null:{distance:m,point:xs.clone(),object:i}}function Ms(i,e,t,n,s,a,c,h,d,m){i.getVertexPosition(h,ms),i.getVertexPosition(d,gs),i.getVertexPosition(m,_s);const v=_h(i,e,t,n,ms,gs,_s,ml);if(v){const x=new j;Un.getBarycoord(ml,ms,gs,_s,x),s&&(v.uv=Un.getInterpolatedAttribute(s,h,d,m,x,new st)),a&&(v.uv1=Un.getInterpolatedAttribute(a,h,d,m,x,new st)),c&&(v.normal=Un.getInterpolatedAttribute(c,h,d,m,x,new j),v.normal.dot(n.direction)>0&&v.normal.multiplyScalar(-1));const M={a:h,b:d,c:m,normal:new j,materialIndex:0};Un.getNormal(ms,gs,_s,M.normal),v.face=M,v.barycoord=x}return v}class Er extends wi{constructor(e=1,t=1,n=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:c};const h=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const d=[],m=[],v=[],x=[];let M=0,y=0;b("z","y","x",-1,-1,n,t,e,c,a,0),b("z","y","x",1,-1,n,t,-e,c,a,1),b("x","z","y",1,1,e,n,t,s,c,2),b("x","z","y",1,-1,e,n,-t,s,c,3),b("x","y","z",1,-1,e,t,n,s,a,4),b("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(d),this.setAttribute("position",new Wn(m,3)),this.setAttribute("normal",new Wn(v,3)),this.setAttribute("uv",new Wn(x,2));function b(w,S,p,F,N,D,X,V,l,q,R){const C=D/l,z=X/q,ue=D/2,Y=X/2,de=V/2,me=l+1,fe=q+1;let pe=0,se=0;const Se=new j;for(let Ue=0;Ue<fe;Ue++){const Ve=Ue*z-Y;for(let at=0;at<me;at++){const Ct=at*C-ue;Se[w]=Ct*F,Se[S]=Ve*N,Se[p]=de,m.push(Se.x,Se.y,Se.z),Se[w]=0,Se[S]=0,Se[p]=V>0?1:-1,v.push(Se.x,Se.y,Se.z),x.push(at/l),x.push(1-Ue/q),pe+=1}}for(let Ue=0;Ue<q;Ue++)for(let Ve=0;Ve<l;Ve++){const at=M+Ve+me*Ue,Ct=M+Ve+me*(Ue+1),ce=M+(Ve+1)+me*(Ue+1),Me=M+(Ve+1)+me*Ue;d.push(at,Ct,Me),d.push(Ct,ce,Me),se+=6}h.addGroup(y,se,R),y+=se,M+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function un(i){const e={};for(let t=0;t<i.length;t++){const n=yr(i[t]);for(const s in n)e[s]=n[s]}return e}function vh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Mc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const xh={clone:yr,merge:un};var Mh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Yr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mh,this.fragmentShader=Sh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=vh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Sc extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new j,gl=new st,_l=new st;class An extends Sc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=So*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return So*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,gl,_l),t.subVectors(_l,gl)}setViewOffset(e,t,n,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Us*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,m=c.fullHeight;a+=c.offsetX*s/d,t-=c.offsetY*n/m,s*=c.width/d,n*=c.height/m}const h=this.filmOffset;h!==0&&(a+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ur=-90,hr=1;class yh extends on{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new An(ur,hr,e,t);s.layers=this.layers,this.add(s);const a=new An(ur,hr,e,t);a.layers=this.layers,this.add(a);const c=new An(ur,hr,e,t);c.layers=this.layers,this.add(c);const h=new An(ur,hr,e,t);h.layers=this.layers,this.add(h);const d=new An(ur,hr,e,t);d.layers=this.layers,this.add(d);const m=new An(ur,hr,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,c,h,d]=t;for(const m of t)this.remove(m);if(e===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,h,d,m,v]=this.children,x=e.getRenderTarget(),M=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,c),e.setRenderTarget(n,2,s),e.render(t,h),e.setRenderTarget(n,3,s),e.render(t,d),e.setRenderTarget(n,4,s),e.render(t,m),n.texture.generateMipmaps=w,e.setRenderTarget(n,5,s),e.render(t,v),e.setRenderTarget(x,M,y),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class yc extends vn{constructor(e=[],t=xr,n,s,a,c,h,d,m,v){super(e,t,n,s,a,c,h,d,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Eh extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new yc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Er(5,5,5),a=new Ai({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:Ei});a.uniforms.tEquirect.value=t;const c=new wn(s,a),h=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Vn),new yh(1,10,this).update(e,c),t.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,s);e.setRenderTarget(a)}}class Ss extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Th={type:"move"};class ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,c=null;const h=this._targetRay,d=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const w of e.hand.values()){const S=t.getJointPose(w,n),p=this._getHandJoint(m,w);S!==null&&(p.matrix.fromArray(S.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=S.radius),p.visible=S!==null}const v=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],M=v.position.distanceTo(x.position),y=.02,b=.005;m.inputState.pinching&&M>y+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&M<=y-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));h!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Th)))}return h!==null&&(h.visible=s!==null),d!==null&&(d.visible=a!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ss;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class bh extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Aa=new j,Ah=new j,wh=new rt;class Si{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Aa.subVectors(n,t).cross(Ah.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Aa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wh.getNormalMatrix(e),s=this.coplanarPoint(Aa).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Do,ys=new j;class Lo{constructor(e=new Si,t=new Si,n=new Si,s=new Si,a=new Si,c=new Si){this.planes=[e,t,n,s,a,c]}set(e,t,n,s,a,c){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(n),h[3].copy(s),h[4].copy(a),h[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=oi){const n=this.planes,s=e.elements,a=s[0],c=s[1],h=s[2],d=s[3],m=s[4],v=s[5],x=s[6],M=s[7],y=s[8],b=s[9],w=s[10],S=s[11],p=s[12],F=s[13],N=s[14],D=s[15];if(n[0].setComponents(d-a,M-m,S-y,D-p).normalize(),n[1].setComponents(d+a,M+m,S+y,D+p).normalize(),n[2].setComponents(d+c,M+v,S+b,D+F).normalize(),n[3].setComponents(d-c,M-v,S-b,D-F).normalize(),n[4].setComponents(d-h,M-x,S-w,D-N).normalize(),t===oi)n[5].setComponents(d+h,M+x,S+w,D+N).normalize();else if(t===zs)n[5].setComponents(h,x,w,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ys.x=s.normal.x>0?e.max.x:e.min.x,ys.y=s.normal.y>0?e.max.y:e.min.y,ys.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ec extends vn{constructor(e,t,n=Gi,s,a,c,h=Nn,d=Nn,m,v=Gr){if(v!==Gr&&v!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,a,c,h,d,v,n,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Po(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $r extends wi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,c=t/2,h=Math.floor(n),d=Math.floor(s),m=h+1,v=d+1,x=e/h,M=t/d,y=[],b=[],w=[],S=[];for(let p=0;p<v;p++){const F=p*M-c;for(let N=0;N<m;N++){const D=N*x-a;b.push(D,-F,0),w.push(0,0,1),S.push(N/h),S.push(1-p/d)}}for(let p=0;p<d;p++)for(let F=0;F<h;F++){const N=F+m*p,D=F+m*(p+1),X=F+1+m*(p+1),V=F+1+m*p;y.push(N,D,V),y.push(D,X,V)}this.setIndex(y),this.setAttribute("position",new Wn(b,3)),this.setAttribute("normal",new Wn(w,3)),this.setAttribute("uv",new Wn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $r(e.width,e.height,e.widthSegments,e.heightSegments)}}class Uo extends wi{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,c=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:c,thetaLength:h},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const d=Math.min(c+h,Math.PI);let m=0;const v=[],x=new j,M=new j,y=[],b=[],w=[],S=[];for(let p=0;p<=n;p++){const F=[],N=p/n;let D=0;p===0&&c===0?D=.5/t:p===n&&d===Math.PI&&(D=-.5/t);for(let X=0;X<=t;X++){const V=X/t;x.x=-e*Math.cos(s+V*a)*Math.sin(c+N*h),x.y=e*Math.cos(c+N*h),x.z=e*Math.sin(s+V*a)*Math.sin(c+N*h),b.push(x.x,x.y,x.z),M.copy(x).normalize(),w.push(M.x,M.y,M.z),S.push(V+D,1-N),F.push(m++)}v.push(F)}for(let p=0;p<n;p++)for(let F=0;F<t;F++){const N=v[p][F+1],D=v[p][F],X=v[p+1][F],V=v[p+1][F+1];(p!==0||c>0)&&y.push(N,D,V),(p!==n-1||d<Math.PI)&&y.push(D,X,V)}this.setIndex(y),this.setAttribute("position",new Wn(b,3)),this.setAttribute("normal",new Wn(w,3)),this.setAttribute("uv",new Wn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Es extends Yr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ch extends Yr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rh extends Yr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Tc extends on{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const wa=new Wt,vl=new j,xl=new j;class Ph{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lo,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;vl.setFromMatrixPosition(e.matrixWorld),t.position.copy(vl),xl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xl),t.updateMatrixWorld(),wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bc extends Sc{constructor(e=-1,t=1,n=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,c=n+e,h=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=m*this.view.offsetX,c=a+m*this.view.width,h-=v*this.view.offsetY,d=h-v*this.view.height}this.projectionMatrix.makeOrthographic(a,c,h,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Dh extends Ph{constructor(){super(new bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lh extends Tc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new Dh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Uh extends Tc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ih extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Nh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ml(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ml();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ml(){return performance.now()}class Sl{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=_t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Fh extends ji{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function yl(i,e,t,n){const s=Oh(n);switch(t){case sc:return i*e;case oc:return i*e/s.components*s.byteLength;case wo:return i*e/s.components*s.byteLength;case lc:return i*e*2/s.components*s.byteLength;case Co:return i*e*2/s.components*s.byteLength;case ac:return i*e*3/s.components*s.byteLength;case In:return i*e*4/s.components*s.byteLength;case Ro:return i*e*4/s.components*s.byteLength;case Cs:case Rs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ps:case Ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $a:case Za:return Math.max(i,16)*Math.max(e,8)/4;case Ya:case Ka:return Math.max(i,8)*Math.max(e,8)/2;case Ja:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case to:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case no:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case io:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ro:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case so:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ao:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case oo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case lo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case co:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case uo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ho:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case fo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case po:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case mo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ls:case go:case _o:return Math.ceil(i/4)*Math.ceil(e/4)*16;case cc:case vo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xo:case Mo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Oh(i){switch(i){case Xn:case nc:return{byteLength:1,components:1};case kr:case ic:case qr:return{byteLength:2,components:1};case bo:case Ao:return{byteLength:2,components:4};case Gi:case To:case ai:return{byteLength:4,components:1};case rc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ac(){let i=null,e=!1,t=null,n=null;function s(a,c){t(a,c),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Bh(i){const e=new WeakMap;function t(h,d){const m=h.array,v=h.usage,x=m.byteLength,M=i.createBuffer();i.bindBuffer(d,M),i.bufferData(d,m,v),h.onUploadCallback();let y;if(m instanceof Float32Array)y=i.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=i.SHORT;else if(m instanceof Uint32Array)y=i.UNSIGNED_INT;else if(m instanceof Int32Array)y=i.INT;else if(m instanceof Int8Array)y=i.BYTE;else if(m instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:M,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:x}}function n(h,d,m){const v=d.array,x=d.updateRanges;if(i.bindBuffer(m,h),x.length===0)i.bufferSubData(m,0,v);else{x.sort((y,b)=>y.start-b.start);let M=0;for(let y=1;y<x.length;y++){const b=x[M],w=x[y];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++M,x[M]=w)}x.length=M+1;for(let y=0,b=x.length;y<b;y++){const w=x[y];i.bufferSubData(m,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=e.get(h);d&&(i.deleteBuffer(d.buffer),e.delete(h))}function c(h,d){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,t(h,d));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(m.buffer,h,d),m.version=h.version}}return{get:s,remove:a,update:c}}var zh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hh=`#ifdef USE_ALPHAHASH
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
#endif`,kh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xh=`#ifdef USE_AOMAP
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
#endif`,qh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jh=`#ifdef USE_BATCHING
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
#endif`,Yh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$h=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jh=`#ifdef USE_IRIDESCENCE
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
#endif`,Qh=`#ifdef USE_BUMPMAP
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
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cf=`#define PI 3.141592653589793
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
} // validated`,uf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hf=`vec3 transformedNormal = objectNormal;
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
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",_f=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vf=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Af=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wf=`#ifdef USE_GRADIENTMAP
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
}`,Cf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Df=`uniform bool receiveShadow;
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
#endif`,Lf=`#ifdef USE_ENVMAP
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
#endif`,Uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,If=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Of=`PhysicalMaterial material;
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
#endif`,Bf=`struct PhysicalMaterial {
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
}`,zf=`
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
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
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
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$f=`#if defined( USE_POINTS_UV )
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
#endif`,Kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ed=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,td=`#ifdef USE_MORPHTARGETS
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
#endif`,nd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,id=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,od=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ld=`#ifdef USE_NORMALMAP
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
#endif`,cd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ud=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,md=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_d=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Md=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ed=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Td=`float getShadowMask() {
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
}`,bd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ad=`#ifdef USE_SKINNING
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
#endif`,wd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cd=`#ifdef USE_SKINNING
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
#endif`,Rd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ld=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ud=`#ifdef USE_TRANSMISSION
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
#endif`,Id=`#ifdef USE_TRANSMISSION
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
#endif`,Nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hd=`uniform sampler2D t2D;
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
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`#include <common>
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
}`,qd=`#if DEPTH_PACKING == 3200
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
}`,jd=`#define DISTANCE
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
}`,Yd=`#define DISTANCE
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
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`uniform float scale;
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
}`,Jd=`uniform vec3 diffuse;
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
}`,Qd=`#include <common>
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
}`,ep=`uniform vec3 diffuse;
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
}`,tp=`#define LAMBERT
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
}`,np=`#define LAMBERT
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
}`,ip=`#define MATCAP
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
}`,rp=`#define MATCAP
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
}`,sp=`#define NORMAL
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
}`,ap=`#define NORMAL
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
}`,op=`#define PHONG
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
}`,lp=`#define PHONG
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
}`,cp=`#define STANDARD
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
}`,up=`#define STANDARD
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
}`,hp=`#define TOON
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
}`,fp=`#define TOON
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
}`,dp=`uniform float size;
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
}`,pp=`uniform vec3 diffuse;
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
}`,mp=`#include <common>
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
}`,gp=`uniform vec3 color;
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
}`,_p=`uniform float rotation;
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
}`,vp=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:zh,alphahash_pars_fragment:Hh,alphamap_fragment:kh,alphamap_pars_fragment:Vh,alphatest_fragment:Gh,alphatest_pars_fragment:Wh,aomap_fragment:Xh,aomap_pars_fragment:qh,batching_pars_vertex:jh,batching_vertex:Yh,begin_vertex:$h,beginnormal_vertex:Kh,bsdfs:Zh,iridescence_fragment:Jh,bumpmap_pars_fragment:Qh,clipping_planes_fragment:ef,clipping_planes_pars_fragment:tf,clipping_planes_pars_vertex:nf,clipping_planes_vertex:rf,color_fragment:sf,color_pars_fragment:af,color_pars_vertex:of,color_vertex:lf,common:cf,cube_uv_reflection_fragment:uf,defaultnormal_vertex:hf,displacementmap_pars_vertex:ff,displacementmap_vertex:df,emissivemap_fragment:pf,emissivemap_pars_fragment:mf,colorspace_fragment:gf,colorspace_pars_fragment:_f,envmap_fragment:vf,envmap_common_pars_fragment:xf,envmap_pars_fragment:Mf,envmap_pars_vertex:Sf,envmap_physical_pars_fragment:Lf,envmap_vertex:yf,fog_vertex:Ef,fog_pars_vertex:Tf,fog_fragment:bf,fog_pars_fragment:Af,gradientmap_pars_fragment:wf,lightmap_pars_fragment:Cf,lights_lambert_fragment:Rf,lights_lambert_pars_fragment:Pf,lights_pars_begin:Df,lights_toon_fragment:Uf,lights_toon_pars_fragment:If,lights_phong_fragment:Nf,lights_phong_pars_fragment:Ff,lights_physical_fragment:Of,lights_physical_pars_fragment:Bf,lights_fragment_begin:zf,lights_fragment_maps:Hf,lights_fragment_end:kf,logdepthbuf_fragment:Vf,logdepthbuf_pars_fragment:Gf,logdepthbuf_pars_vertex:Wf,logdepthbuf_vertex:Xf,map_fragment:qf,map_pars_fragment:jf,map_particle_fragment:Yf,map_particle_pars_fragment:$f,metalnessmap_fragment:Kf,metalnessmap_pars_fragment:Zf,morphinstance_vertex:Jf,morphcolor_vertex:Qf,morphnormal_vertex:ed,morphtarget_pars_vertex:td,morphtarget_vertex:nd,normal_fragment_begin:id,normal_fragment_maps:rd,normal_pars_fragment:sd,normal_pars_vertex:ad,normal_vertex:od,normalmap_pars_fragment:ld,clearcoat_normal_fragment_begin:cd,clearcoat_normal_fragment_maps:ud,clearcoat_pars_fragment:hd,iridescence_pars_fragment:fd,opaque_fragment:dd,packing:pd,premultiplied_alpha_fragment:md,project_vertex:gd,dithering_fragment:_d,dithering_pars_fragment:vd,roughnessmap_fragment:xd,roughnessmap_pars_fragment:Md,shadowmap_pars_fragment:Sd,shadowmap_pars_vertex:yd,shadowmap_vertex:Ed,shadowmask_pars_fragment:Td,skinbase_vertex:bd,skinning_pars_vertex:Ad,skinning_vertex:wd,skinnormal_vertex:Cd,specularmap_fragment:Rd,specularmap_pars_fragment:Pd,tonemapping_fragment:Dd,tonemapping_pars_fragment:Ld,transmission_fragment:Ud,transmission_pars_fragment:Id,uv_pars_fragment:Nd,uv_pars_vertex:Fd,uv_vertex:Od,worldpos_vertex:Bd,background_vert:zd,background_frag:Hd,backgroundCube_vert:kd,backgroundCube_frag:Vd,cube_vert:Gd,cube_frag:Wd,depth_vert:Xd,depth_frag:qd,distanceRGBA_vert:jd,distanceRGBA_frag:Yd,equirect_vert:$d,equirect_frag:Kd,linedashed_vert:Zd,linedashed_frag:Jd,meshbasic_vert:Qd,meshbasic_frag:ep,meshlambert_vert:tp,meshlambert_frag:np,meshmatcap_vert:ip,meshmatcap_frag:rp,meshnormal_vert:sp,meshnormal_frag:ap,meshphong_vert:op,meshphong_frag:lp,meshphysical_vert:cp,meshphysical_frag:up,meshtoon_vert:hp,meshtoon_frag:fp,points_vert:dp,points_frag:pp,shadow_vert:mp,shadow_frag:gp,sprite_vert:_p,sprite_frag:vp},Ee={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},kn={basic:{uniforms:un([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:un([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new vt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:un([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:un([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:un([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new vt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:un([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:un([Ee.points,Ee.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:un([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:un([Ee.common,Ee.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:un([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:un([Ee.sprite,Ee.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:un([Ee.common,Ee.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:un([Ee.lights,Ee.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};kn.physical={uniforms:un([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Ts={r:0,b:0,g:0},Fi=new qn,xp=new Wt;function Mp(i,e,t,n,s,a,c){const h=new vt(0);let d=a===!0?0:1,m,v,x=null,M=0,y=null;function b(N){let D=N.isScene===!0?N.background:null;return D&&D.isTexture&&(D=(N.backgroundBlurriness>0?t:e).get(D)),D}function w(N){let D=!1;const X=b(N);X===null?p(h,d):X&&X.isColor&&(p(X,1),D=!0);const V=i.xr.getEnvironmentBlendMode();V==="additive"?n.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||D)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(N,D){const X=b(D);X&&(X.isCubeTexture||X.mapping===ks)?(v===void 0&&(v=new wn(new Er(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:yr(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(V,l,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(v)),Fi.copy(D.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),v.material.uniforms.envMap.value=X,v.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(xp.makeRotationFromEuler(Fi)),v.material.toneMapped=wt.getTransfer(X.colorSpace)!==Ut,(x!==X||M!==X.version||y!==i.toneMapping)&&(v.material.needsUpdate=!0,x=X,M=X.version,y=i.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):X&&X.isTexture&&(m===void 0&&(m=new wn(new $r(2,2),new Ai({name:"BackgroundMaterial",uniforms:yr(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=X,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=wt.getTransfer(X.colorSpace)!==Ut,X.matrixAutoUpdate===!0&&X.updateMatrix(),m.material.uniforms.uvTransform.value.copy(X.matrix),(x!==X||M!==X.version||y!==i.toneMapping)&&(m.material.needsUpdate=!0,x=X,M=X.version,y=i.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function p(N,D){N.getRGB(Ts,Mc(i)),n.buffers.color.setClear(Ts.r,Ts.g,Ts.b,D,c)}function F(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,D=1){h.set(N),d=D,p(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(N){d=N,p(h,d)},render:w,addToRenderList:S,dispose:F}}function Sp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=M(null);let a=s,c=!1;function h(C,z,ue,Y,de){let me=!1;const fe=x(Y,ue,z);a!==fe&&(a=fe,m(a.object)),me=y(C,Y,ue,de),me&&b(C,Y,ue,de),de!==null&&e.update(de,i.ELEMENT_ARRAY_BUFFER),(me||c)&&(c=!1,D(C,z,ue,Y),de!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function d(){return i.createVertexArray()}function m(C){return i.bindVertexArray(C)}function v(C){return i.deleteVertexArray(C)}function x(C,z,ue){const Y=ue.wireframe===!0;let de=n[C.id];de===void 0&&(de={},n[C.id]=de);let me=de[z.id];me===void 0&&(me={},de[z.id]=me);let fe=me[Y];return fe===void 0&&(fe=M(d()),me[Y]=fe),fe}function M(C){const z=[],ue=[],Y=[];for(let de=0;de<t;de++)z[de]=0,ue[de]=0,Y[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ue,attributeDivisors:Y,object:C,attributes:{},index:null}}function y(C,z,ue,Y){const de=a.attributes,me=z.attributes;let fe=0;const pe=ue.getAttributes();for(const se in pe)if(pe[se].location>=0){const Ue=de[se];let Ve=me[se];if(Ve===void 0&&(se==="instanceMatrix"&&C.instanceMatrix&&(Ve=C.instanceMatrix),se==="instanceColor"&&C.instanceColor&&(Ve=C.instanceColor)),Ue===void 0||Ue.attribute!==Ve||Ve&&Ue.data!==Ve.data)return!0;fe++}return a.attributesNum!==fe||a.index!==Y}function b(C,z,ue,Y){const de={},me=z.attributes;let fe=0;const pe=ue.getAttributes();for(const se in pe)if(pe[se].location>=0){let Ue=me[se];Ue===void 0&&(se==="instanceMatrix"&&C.instanceMatrix&&(Ue=C.instanceMatrix),se==="instanceColor"&&C.instanceColor&&(Ue=C.instanceColor));const Ve={};Ve.attribute=Ue,Ue&&Ue.data&&(Ve.data=Ue.data),de[se]=Ve,fe++}a.attributes=de,a.attributesNum=fe,a.index=Y}function w(){const C=a.newAttributes;for(let z=0,ue=C.length;z<ue;z++)C[z]=0}function S(C){p(C,0)}function p(C,z){const ue=a.newAttributes,Y=a.enabledAttributes,de=a.attributeDivisors;ue[C]=1,Y[C]===0&&(i.enableVertexAttribArray(C),Y[C]=1),de[C]!==z&&(i.vertexAttribDivisor(C,z),de[C]=z)}function F(){const C=a.newAttributes,z=a.enabledAttributes;for(let ue=0,Y=z.length;ue<Y;ue++)z[ue]!==C[ue]&&(i.disableVertexAttribArray(ue),z[ue]=0)}function N(C,z,ue,Y,de,me,fe){fe===!0?i.vertexAttribIPointer(C,z,ue,de,me):i.vertexAttribPointer(C,z,ue,Y,de,me)}function D(C,z,ue,Y){w();const de=Y.attributes,me=ue.getAttributes(),fe=z.defaultAttributeValues;for(const pe in me){const se=me[pe];if(se.location>=0){let Se=de[pe];if(Se===void 0&&(pe==="instanceMatrix"&&C.instanceMatrix&&(Se=C.instanceMatrix),pe==="instanceColor"&&C.instanceColor&&(Se=C.instanceColor)),Se!==void 0){const Ue=Se.normalized,Ve=Se.itemSize,at=e.get(Se);if(at===void 0)continue;const Ct=at.buffer,ce=at.type,Me=at.bytesPerElement,Oe=ce===i.INT||ce===i.UNSIGNED_INT||Se.gpuType===To;if(Se.isInterleavedBufferAttribute){const be=Se.data,$e=be.stride,yt=Se.offset;if(be.isInstancedInterleavedBuffer){for(let He=0;He<se.locationSize;He++)p(se.location+He,be.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let He=0;He<se.locationSize;He++)S(se.location+He);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let He=0;He<se.locationSize;He++)N(se.location+He,Ve/se.locationSize,ce,Ue,$e*Me,(yt+Ve/se.locationSize*He)*Me,Oe)}else{if(Se.isInstancedBufferAttribute){for(let be=0;be<se.locationSize;be++)p(se.location+be,Se.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let be=0;be<se.locationSize;be++)S(se.location+be);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let be=0;be<se.locationSize;be++)N(se.location+be,Ve/se.locationSize,ce,Ue,Ve*Me,Ve/se.locationSize*be*Me,Oe)}}else if(fe!==void 0){const Ue=fe[pe];if(Ue!==void 0)switch(Ue.length){case 2:i.vertexAttrib2fv(se.location,Ue);break;case 3:i.vertexAttrib3fv(se.location,Ue);break;case 4:i.vertexAttrib4fv(se.location,Ue);break;default:i.vertexAttrib1fv(se.location,Ue)}}}}F()}function X(){q();for(const C in n){const z=n[C];for(const ue in z){const Y=z[ue];for(const de in Y)v(Y[de].object),delete Y[de];delete z[ue]}delete n[C]}}function V(C){if(n[C.id]===void 0)return;const z=n[C.id];for(const ue in z){const Y=z[ue];for(const de in Y)v(Y[de].object),delete Y[de];delete z[ue]}delete n[C.id]}function l(C){for(const z in n){const ue=n[z];if(ue[C.id]===void 0)continue;const Y=ue[C.id];for(const de in Y)v(Y[de].object),delete Y[de];delete ue[C.id]}}function q(){R(),c=!0,a!==s&&(a=s,m(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:h,reset:q,resetDefaultState:R,dispose:X,releaseStatesOfGeometry:V,releaseStatesOfProgram:l,initAttributes:w,enableAttribute:S,disableUnusedAttributes:F}}function yp(i,e,t){let n;function s(m){n=m}function a(m,v){i.drawArrays(n,m,v),t.update(v,n,1)}function c(m,v,x){x!==0&&(i.drawArraysInstanced(n,m,v,x),t.update(v,n,x))}function h(m,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,m,0,v,0,x);let y=0;for(let b=0;b<x;b++)y+=v[b];t.update(y,n,1)}function d(m,v,x,M){if(x===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<m.length;b++)c(m[b],v[b],M[b]);else{y.multiDrawArraysInstancedWEBGL(n,m,0,v,0,M,0,x);let b=0;for(let w=0;w<x;w++)b+=v[w]*M[w];t.update(b,n,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Ep(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const l=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(l.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(l){return!(l!==In&&n.convert(l)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(l){const q=l===qr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(l!==Xn&&n.convert(l)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&l!==ai&&!q)}function d(l){if(l==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";l="mediump"}return l==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const v=d(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const x=t.logarithmicDepthBuffer===!0,M=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),F=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),N=i.getParameter(i.MAX_VARYING_VECTORS),D=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),X=b>0,V=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:M,maxTextures:y,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:S,maxAttributes:p,maxVertexUniforms:F,maxVaryings:N,maxFragmentUniforms:D,vertexTextures:X,maxSamples:V}}function Tp(i){const e=this;let t=null,n=0,s=!1,a=!1;const c=new Si,h=new rt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(x,M){const y=x.length!==0||M||n!==0||s;return s=M,n=x.length,y},this.beginShadows=function(){a=!0,v(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(x,M){t=v(x,M,0)},this.setState=function(x,M,y){const b=x.clippingPlanes,w=x.clipIntersection,S=x.clipShadows,p=i.get(x);if(!s||b===null||b.length===0||a&&!S)a?v(null):m();else{const F=a?0:n,N=F*4;let D=p.clippingState||null;d.value=D,D=v(b,M,N,y);for(let X=0;X!==N;++X)D[X]=t[X];p.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=F}};function m(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function v(x,M,y,b){const w=x!==null?x.length:0;let S=null;if(w!==0){if(S=d.value,b!==!0||S===null){const p=y+w*4,F=M.matrixWorldInverse;h.getNormalMatrix(F),(S===null||S.length<p)&&(S=new Float32Array(p));for(let N=0,D=y;N!==w;++N,D+=4)c.copy(x[N]).applyMatrix4(F,h),c.normal.toArray(S,D),S[D+3]=c.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}function bp(i){let e=new WeakMap;function t(c,h){return h===Wa?c.mapping=xr:h===Xa&&(c.mapping=Mr),c}function n(c){if(c&&c.isTexture){const h=c.mapping;if(h===Wa||h===Xa)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const m=new Eh(d.height);return m.fromEquirectangularTexture(i,c),e.set(c,m),c.addEventListener("dispose",s),t(m.texture,c.mapping)}else return null}}return c}function s(c){const h=c.target;h.removeEventListener("dispose",s);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const pr=4,El=[.125,.215,.35,.446,.526,.582],Hi=20,Ca=new bc,Tl=new vt;let Ra=null,Pa=0,Da=0,La=!1;const Bi=(1+Math.sqrt(5))/2,fr=1/Bi,bl=[new j(-Bi,fr,0),new j(Bi,fr,0),new j(-fr,0,Bi),new j(fr,0,Bi),new j(0,Bi,-fr),new j(0,Bi,fr),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],Ap=new j;class Al{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,a={}){const{size:c=256,position:h=Ap}=a;Ra=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,n,s,d,h),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ra,Pa,Da),this._renderer.xr.enabled=La,e.scissorTest=!1,bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xr||e.mapping===Mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ra=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:qr,format:In,colorSpace:Sr,depthBuffer:!1},s=wl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wl(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wp(a)),this._blurMaterial=Cp(a,e,t)}return s}_compileMaterial(e){const t=new wn(this._lodPlanes[0],e);this._renderer.compile(t,Ca)}_sceneToCubeUV(e,t,n,s,a){const d=new An(90,1,t,n),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,M=x.autoClear,y=x.toneMapping;x.getClearColor(Tl),x.toneMapping=Ti,x.autoClear=!1;const b=new _c({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),w=new wn(new Er,b);let S=!1;const p=e.background;p?p.isColor&&(b.color.copy(p),e.background=null,S=!0):(b.color.copy(Tl),S=!0);for(let F=0;F<6;F++){const N=F%3;N===0?(d.up.set(0,m[F],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+v[F],a.y,a.z)):N===1?(d.up.set(0,0,m[F]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+v[F],a.z)):(d.up.set(0,m[F],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+v[F]));const D=this._cubeSize;bs(s,N*D,F>2?D:0,D,D),x.setRenderTarget(s),S&&x.render(w,d),x.render(e,d)}w.geometry.dispose(),w.material.dispose(),x.toneMapping=y,x.autoClear=M,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===xr||e.mapping===Mr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cl());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new wn(this._lodPlanes[0],a),h=a.uniforms;h.envMap.value=e;const d=this._cubeSize;bs(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(c,Ca)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),h=bl[(s-a-1)%bl.length];this._blur(e,a-1,a,c,h)}t.autoClear=n}_blur(e,t,n,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,s,"latitudinal",a),this._halfBlur(c,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,c,h){const d=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,x=new wn(this._lodPlanes[s],m),M=m.uniforms,y=this._sizeLods[n]-1,b=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*Hi-1),w=a/b,S=isFinite(a)?1+Math.floor(v*w):Hi;S>Hi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Hi}`);const p=[];let F=0;for(let l=0;l<Hi;++l){const q=l/w,R=Math.exp(-q*q/2);p.push(R),l===0?F+=R:l<S&&(F+=2*R)}for(let l=0;l<p.length;l++)p[l]=p[l]/F;M.envMap.value=e.texture,M.samples.value=S,M.weights.value=p,M.latitudinal.value=c==="latitudinal",h&&(M.poleAxis.value=h);const{_lodMax:N}=this;M.dTheta.value=b,M.mipInt.value=N-n;const D=this._sizeLods[s],X=3*D*(s>N-pr?s-N+pr:0),V=4*(this._cubeSize-D);bs(t,X,V,3*D,2*D),d.setRenderTarget(t),d.render(x,Ca)}}function wp(i){const e=[],t=[],n=[];let s=i;const a=i-pr+1+El.length;for(let c=0;c<a;c++){const h=Math.pow(2,s);t.push(h);let d=1/h;c>i-pr?d=El[c-i+pr-1]:c===0&&(d=0),n.push(d);const m=1/(h-2),v=-m,x=1+m,M=[v,v,x,v,x,x,v,v,x,x,v,x],y=6,b=6,w=3,S=2,p=1,F=new Float32Array(w*b*y),N=new Float32Array(S*b*y),D=new Float32Array(p*b*y);for(let V=0;V<y;V++){const l=V%3*2/3-1,q=V>2?0:-1,R=[l,q,0,l+2/3,q,0,l+2/3,q+1,0,l,q,0,l+2/3,q+1,0,l,q+1,0];F.set(R,w*b*V),N.set(M,S*b*V);const C=[V,V,V,V,V,V];D.set(C,p*b*V)}const X=new wi;X.setAttribute("position",new Gn(F,w)),X.setAttribute("uv",new Gn(N,S)),X.setAttribute("faceIndex",new Gn(D,p)),e.push(X),s>pr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wl(i,e,t){const n=new Wi(i,e,t);return n.texture.mapping=ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Cp(i,e,t){const n=new Float32Array(Hi),s=new j(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Io(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Cl(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Io(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Rl(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Io(){return`

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
	`}function Rp(i){let e=new WeakMap,t=null;function n(h){if(h&&h.isTexture){const d=h.mapping,m=d===Wa||d===Xa,v=d===xr||d===Mr;if(m||v){let x=e.get(h);const M=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==M)return t===null&&(t=new Al(i)),x=m?t.fromEquirectangular(h,x):t.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),x.texture;if(x!==void 0)return x.texture;{const y=h.image;return m&&y&&y.height>0||v&&y&&s(y)?(t===null&&(t=new Al(i)),x=m?t.fromEquirectangular(h):t.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),h.addEventListener("dispose",a),x.texture):null}}}return h}function s(h){let d=0;const m=6;for(let v=0;v<m;v++)h[v]!==void 0&&d++;return d===m}function a(h){const d=h.target;d.removeEventListener("dispose",a);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function Pp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Is("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Dp(i,e,t,n){const s={},a=new WeakMap;function c(x){const M=x.target;M.index!==null&&e.remove(M.index);for(const b in M.attributes)e.remove(M.attributes[b]);M.removeEventListener("dispose",c),delete s[M.id];const y=a.get(M);y&&(e.remove(y),a.delete(M)),n.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,t.memory.geometries--}function h(x,M){return s[M.id]===!0||(M.addEventListener("dispose",c),s[M.id]=!0,t.memory.geometries++),M}function d(x){const M=x.attributes;for(const y in M)e.update(M[y],i.ARRAY_BUFFER)}function m(x){const M=[],y=x.index,b=x.attributes.position;let w=0;if(y!==null){const F=y.array;w=y.version;for(let N=0,D=F.length;N<D;N+=3){const X=F[N+0],V=F[N+1],l=F[N+2];M.push(X,V,V,l,l,X)}}else if(b!==void 0){const F=b.array;w=b.version;for(let N=0,D=F.length/3-1;N<D;N+=3){const X=N+0,V=N+1,l=N+2;M.push(X,V,V,l,l,X)}}else return;const S=new(fc(M)?xc:vc)(M,1);S.version=w;const p=a.get(x);p&&e.remove(p),a.set(x,S)}function v(x){const M=a.get(x);if(M){const y=x.index;y!==null&&M.version<y.version&&m(x)}else m(x);return a.get(x)}return{get:h,update:d,getWireframeAttribute:v}}function Lp(i,e,t){let n;function s(M){n=M}let a,c;function h(M){a=M.type,c=M.bytesPerElement}function d(M,y){i.drawElements(n,y,a,M*c),t.update(y,n,1)}function m(M,y,b){b!==0&&(i.drawElementsInstanced(n,y,a,M*c,b),t.update(y,n,b))}function v(M,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,y,0,a,M,0,b);let S=0;for(let p=0;p<b;p++)S+=y[p];t.update(S,n,1)}function x(M,y,b,w){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let p=0;p<M.length;p++)m(M[p]/c,y[p],w[p]);else{S.multiDrawElementsInstancedWEBGL(n,y,0,a,M,0,w,0,b);let p=0;for(let F=0;F<b;F++)p+=y[F]*w[F];t.update(p,n,1)}}this.setMode=s,this.setIndex=h,this.render=d,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function Up(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,c,h){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=h*(a/3);break;case i.LINES:t.lines+=h*(a/2);break;case i.LINE_STRIP:t.lines+=h*(a-1);break;case i.LINE_LOOP:t.lines+=h*a;break;case i.POINTS:t.points+=h*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ip(i,e,t){const n=new WeakMap,s=new Gt;function a(c,h,d){const m=c.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=v!==void 0?v.length:0;let M=n.get(h);if(M===void 0||M.count!==x){let C=function(){q.dispose(),n.delete(h),h.removeEventListener("dispose",C)};var y=C;M!==void 0&&M.texture.dispose();const b=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,p=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let D=0;b===!0&&(D=1),w===!0&&(D=2),S===!0&&(D=3);let X=h.attributes.position.count*D,V=1;X>e.maxTextureSize&&(V=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const l=new Float32Array(X*V*4*x),q=new dc(l,X,V,x);q.type=ai,q.needsUpdate=!0;const R=D*4;for(let z=0;z<x;z++){const ue=p[z],Y=F[z],de=N[z],me=X*V*4*z;for(let fe=0;fe<ue.count;fe++){const pe=fe*R;b===!0&&(s.fromBufferAttribute(ue,fe),l[me+pe+0]=s.x,l[me+pe+1]=s.y,l[me+pe+2]=s.z,l[me+pe+3]=0),w===!0&&(s.fromBufferAttribute(Y,fe),l[me+pe+4]=s.x,l[me+pe+5]=s.y,l[me+pe+6]=s.z,l[me+pe+7]=0),S===!0&&(s.fromBufferAttribute(de,fe),l[me+pe+8]=s.x,l[me+pe+9]=s.y,l[me+pe+10]=s.z,l[me+pe+11]=de.itemSize===4?s.w:1)}}M={count:x,texture:q,size:new st(X,V)},n.set(h,M),h.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let b=0;for(let S=0;S<m.length;S++)b+=m[S];const w=h.morphTargetsRelative?1:1-b;d.getUniforms().setValue(i,"morphTargetBaseInfluence",w),d.getUniforms().setValue(i,"morphTargetInfluences",m)}d.getUniforms().setValue(i,"morphTargetsTexture",M.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",M.size)}return{update:a}}function Np(i,e,t,n){let s=new WeakMap;function a(d){const m=n.render.frame,v=d.geometry,x=e.get(d,v);if(s.get(x)!==m&&(e.update(x),s.set(x,m)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),s.get(d)!==m&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),s.set(d,m))),d.isSkinnedMesh){const M=d.skeleton;s.get(M)!==m&&(M.update(),s.set(M,m))}return x}function c(){s=new WeakMap}function h(d){const m=d.target;m.removeEventListener("dispose",h),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:a,dispose:c}}const wc=new vn,Pl=new Ec(1,1),Cc=new dc,Rc=new ah,Pc=new yc,Dl=[],Ll=[],Ul=new Float32Array(16),Il=new Float32Array(9),Nl=new Float32Array(4);function Tr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=Dl[s];if(a===void 0&&(a=new Float32Array(s),Dl[s]=a),e!==0){n.toArray(a,0);for(let c=1,h=0;c!==e;++c)h+=t,i[c].toArray(a,h)}return a}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Vs(i,e){let t=Ll[e];t===void 0&&(t=new Int32Array(e),Ll[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Fp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),Jt(t,e)}}function Bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),Jt(t,e)}}function zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),Jt(t,e)}}function Hp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;Nl.set(n),i.uniformMatrix2fv(this.addr,!1,Nl),Jt(t,n)}}function kp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;Il.set(n),i.uniformMatrix3fv(this.addr,!1,Il),Jt(t,n)}}function Vp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;Ul.set(n),i.uniformMatrix4fv(this.addr,!1,Ul),Jt(t,n)}}function Gp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),Jt(t,e)}}function Xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),Jt(t,e)}}function qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),Jt(t,e)}}function jp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),Jt(t,e)}}function $p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),Jt(t,e)}}function Kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),Jt(t,e)}}function Zp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(Pl.compareFunction=hc,a=Pl):a=wc,t.setTexture2D(e||a,s)}function Jp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Rc,s)}function Qp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Pc,s)}function em(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Cc,s)}function tm(i){switch(i){case 5126:return Fp;case 35664:return Op;case 35665:return Bp;case 35666:return zp;case 35674:return Hp;case 35675:return kp;case 35676:return Vp;case 5124:case 35670:return Gp;case 35667:case 35671:return Wp;case 35668:case 35672:return Xp;case 35669:case 35673:return qp;case 5125:return jp;case 36294:return Yp;case 36295:return $p;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Zp;case 35679:case 36299:case 36307:return Jp;case 35680:case 36300:case 36308:case 36293:return Qp;case 36289:case 36303:case 36311:case 36292:return em}}function nm(i,e){i.uniform1fv(this.addr,e)}function im(i,e){const t=Tr(e,this.size,2);i.uniform2fv(this.addr,t)}function rm(i,e){const t=Tr(e,this.size,3);i.uniform3fv(this.addr,t)}function sm(i,e){const t=Tr(e,this.size,4);i.uniform4fv(this.addr,t)}function am(i,e){const t=Tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function om(i,e){const t=Tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lm(i,e){const t=Tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cm(i,e){i.uniform1iv(this.addr,e)}function um(i,e){i.uniform2iv(this.addr,e)}function hm(i,e){i.uniform3iv(this.addr,e)}function fm(i,e){i.uniform4iv(this.addr,e)}function dm(i,e){i.uniform1uiv(this.addr,e)}function pm(i,e){i.uniform2uiv(this.addr,e)}function mm(i,e){i.uniform3uiv(this.addr,e)}function gm(i,e){i.uniform4uiv(this.addr,e)}function _m(i,e,t){const n=this.cache,s=e.length,a=Vs(t,s);Zt(n,a)||(i.uniform1iv(this.addr,a),Jt(n,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||wc,a[c])}function vm(i,e,t){const n=this.cache,s=e.length,a=Vs(t,s);Zt(n,a)||(i.uniform1iv(this.addr,a),Jt(n,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||Rc,a[c])}function xm(i,e,t){const n=this.cache,s=e.length,a=Vs(t,s);Zt(n,a)||(i.uniform1iv(this.addr,a),Jt(n,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||Pc,a[c])}function Mm(i,e,t){const n=this.cache,s=e.length,a=Vs(t,s);Zt(n,a)||(i.uniform1iv(this.addr,a),Jt(n,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||Cc,a[c])}function Sm(i){switch(i){case 5126:return nm;case 35664:return im;case 35665:return rm;case 35666:return sm;case 35674:return am;case 35675:return om;case 35676:return lm;case 5124:case 35670:return cm;case 35667:case 35671:return um;case 35668:case 35672:return hm;case 35669:case 35673:return fm;case 5125:return dm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return Mm}}class ym{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tm(t.type)}}class Em{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sm(t.type)}}class Tm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const h=s[a];h.setValue(e,t[h.id],n)}}}const Ua=/(\w+)(\])?(\[|\.)?/g;function Fl(i,e){i.seq.push(e),i.map[e.id]=e}function bm(i,e,t){const n=i.name,s=n.length;for(Ua.lastIndex=0;;){const a=Ua.exec(n),c=Ua.lastIndex;let h=a[1];const d=a[2]==="]",m=a[3];if(d&&(h=h|0),m===void 0||m==="["&&c+2===s){Fl(t,m===void 0?new ym(h,i,e):new Em(h,i,e));break}else{let x=t.map[h];x===void 0&&(x=new Tm(h),Fl(t,x)),t=x}}}class Ns{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);bm(a,c,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,c=t.length;a!==c;++a){const h=t[a],d=n[h.id];d.needsUpdate!==!1&&h.setValue(e,d.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&n.push(c)}return n}}function Ol(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Am=37297;let wm=0;function Cm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const h=c+1;n.push(`${h===e?">":" "} ${h}: ${t[c]}`)}return n.join(`
`)}const Bl=new rt;function Rm(i){wt._getMatrix(Bl,wt.workingColorSpace,i);const e=`mat3( ${Bl.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(i)){case Bs:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function zl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Cm(i.getShaderSource(e),c)}else return s}function Pm(i,e){const t=Rm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Dm(i,e){let t;switch(e){case Du:t="Linear";break;case Lu:t="Reinhard";break;case Uu:t="Cineon";break;case Iu:t="ACESFilmic";break;case Fu:t="AgX";break;case Ou:t="Neutral";break;case Nu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const As=new j;function Lm(){wt.getLuminanceCoefficients(As);const i=As.x.toFixed(4),e=As.y.toFixed(4),t=As.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Um(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function Im(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Nm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),c=a.name;let h=1;a.type===i.FLOAT_MAT2&&(h=2),a.type===i.FLOAT_MAT3&&(h=3),a.type===i.FLOAT_MAT4&&(h=4),t[c]={type:a.type,location:i.getAttribLocation(e,c),locationSize:h}}return t}function Hr(i){return i!==""}function Hl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function yo(i){return i.replace(Fm,Bm)}const Om=new Map;function Bm(i,e){let t=lt[e];if(t===void 0){const n=Om.get(e);if(n!==void 0)t=lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yo(t)}const zm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vl(i){return i.replace(zm,Hm)}function Hm(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Gl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function km(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ql?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===uu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function Vm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xr:case Mr:e="ENVMAP_TYPE_CUBE";break;case ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Mr:e="ENVMAP_MODE_REFRACTION";break}return e}function Wm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ec:e="ENVMAP_BLENDING_MULTIPLY";break;case Ru:e="ENVMAP_BLENDING_MIX";break;case Pu:e="ENVMAP_BLENDING_ADD";break}return e}function Xm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function qm(i,e,t,n){const s=i.getContext(),a=t.defines;let c=t.vertexShader,h=t.fragmentShader;const d=km(t),m=Vm(t),v=Gm(t),x=Wm(t),M=Xm(t),y=Um(t),b=Im(a),w=s.createProgram();let S,p,F=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Hr).join(`
`),S.length>0&&(S+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Hr).join(`
`),p.length>0&&(p+=`
`)):(S=[Gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),p=[Gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.envMap?"#define "+x:"",M?"#define CUBEUV_TEXEL_WIDTH "+M.texelWidth:"",M?"#define CUBEUV_TEXEL_HEIGHT "+M.texelHeight:"",M?"#define CUBEUV_MAX_MIP "+M.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?lt.tonemapping_pars_fragment:"",t.toneMapping!==Ti?Dm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,Pm("linearToOutputTexel",t.outputColorSpace),Lm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hr).join(`
`)),c=yo(c),c=Hl(c,t),c=kl(c,t),h=yo(h),h=Hl(h,t),h=kl(h,t),c=Vl(c),h=Vl(h),t.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,p=["#define varying in",t.glslVersion===el?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===el?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const N=F+S+c,D=F+p+h,X=Ol(s,s.VERTEX_SHADER,N),V=Ol(s,s.FRAGMENT_SHADER,D);s.attachShader(w,X),s.attachShader(w,V),t.index0AttributeName!==void 0?s.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function l(z){if(i.debug.checkShaderErrors){const ue=s.getProgramInfoLog(w).trim(),Y=s.getShaderInfoLog(X).trim(),de=s.getShaderInfoLog(V).trim();let me=!0,fe=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(me=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,w,X,V);else{const pe=zl(s,X,"vertex"),se=zl(s,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ue+`
`+pe+`
`+se)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(Y===""||de==="")&&(fe=!1);fe&&(z.diagnostics={runnable:me,programLog:ue,vertexShader:{log:Y,prefix:S},fragmentShader:{log:de,prefix:p}})}s.deleteShader(X),s.deleteShader(V),q=new Ns(s,w),R=Nm(s,w)}let q;this.getUniforms=function(){return q===void 0&&l(this),q};let R;this.getAttributes=function(){return R===void 0&&l(this),R};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(w,Am)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wm++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=X,this.fragmentShader=V,this}let jm=0;class Ym{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $m(e),t.set(e,n)),n}}class $m{constructor(e){this.id=jm++,this.code=e,this.usedTimes=0}}function Km(i,e,t,n,s,a,c){const h=new mc,d=new Ym,m=new Set,v=[],x=s.logarithmicDepthBuffer,M=s.vertexTextures;let y=s.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(R){return m.add(R),R===0?"uv":`uv${R}`}function S(R,C,z,ue,Y){const de=ue.fog,me=Y.geometry,fe=R.isMeshStandardMaterial?ue.environment:null,pe=(R.isMeshStandardMaterial?t:e).get(R.envMap||fe),se=pe&&pe.mapping===ks?pe.image.height:null,Se=b[R.type];R.precision!==null&&(y=s.getMaxPrecision(R.precision),y!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const Ue=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,Ve=Ue!==void 0?Ue.length:0;let at=0;me.morphAttributes.position!==void 0&&(at=1),me.morphAttributes.normal!==void 0&&(at=2),me.morphAttributes.color!==void 0&&(at=3);let Ct,ce,Me,Oe;if(Se){const Rt=kn[Se];Ct=Rt.vertexShader,ce=Rt.fragmentShader}else Ct=R.vertexShader,ce=R.fragmentShader,d.update(R),Me=d.getVertexShaderID(R),Oe=d.getFragmentShaderID(R);const be=i.getRenderTarget(),$e=i.state.buffers.depth.getReversed(),yt=Y.isInstancedMesh===!0,He=Y.isBatchedMesh===!0,zt=!!R.map,Pt=!!R.matcap,ct=!!pe,O=!!R.aoMap,hn=!!R.lightMap,ft=!!R.bumpMap,ut=!!R.normalMap,Fe=!!R.displacementMap,Nt=!!R.emissiveMap,Ge=!!R.metalnessMap,L=!!R.roughnessMap,T=R.anisotropy>0,K=R.clearcoat>0,le=R.dispersion>0,Z=R.iridescence>0,re=R.sheen>0,ze=R.transmission>0,Ae=T&&!!R.anisotropyMap,Ke=K&&!!R.clearcoatMap,Ze=K&&!!R.clearcoatNormalMap,_e=K&&!!R.clearcoatRoughnessMap,Le=Z&&!!R.iridescenceMap,ke=Z&&!!R.iridescenceThicknessMap,je=re&&!!R.sheenColorMap,De=re&&!!R.sheenRoughnessMap,xt=!!R.specularMap,nt=!!R.specularColorMap,Dt=!!R.specularIntensityMap,k=ze&&!!R.transmissionMap,we=ze&&!!R.thicknessMap,ie=!!R.gradientMap,he=!!R.alphaMap,Ce=R.alphaTest>0,Te=!!R.alphaHash,qe=!!R.extensions;let dt=Ti;R.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(dt=i.toneMapping);const Xt={shaderID:Se,shaderType:R.type,shaderName:R.name,vertexShader:Ct,fragmentShader:ce,defines:R.defines,customVertexShaderID:Me,customFragmentShaderID:Oe,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,batching:He,batchingColor:He&&Y._colorsTexture!==null,instancing:yt,instancingColor:yt&&Y.instanceColor!==null,instancingMorph:yt&&Y.morphTexture!==null,supportsVertexTextures:M,outputColorSpace:be===null?i.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Sr,alphaToCoverage:!!R.alphaToCoverage,map:zt,matcap:Pt,envMap:ct,envMapMode:ct&&pe.mapping,envMapCubeUVHeight:se,aoMap:O,lightMap:hn,bumpMap:ft,normalMap:ut,displacementMap:M&&Fe,emissiveMap:Nt,normalMapObjectSpace:ut&&R.normalMapType===ku,normalMapTangentSpace:ut&&R.normalMapType===uc,metalnessMap:Ge,roughnessMap:L,anisotropy:T,anisotropyMap:Ae,clearcoat:K,clearcoatMap:Ke,clearcoatNormalMap:Ze,clearcoatRoughnessMap:_e,dispersion:le,iridescence:Z,iridescenceMap:Le,iridescenceThicknessMap:ke,sheen:re,sheenColorMap:je,sheenRoughnessMap:De,specularMap:xt,specularColorMap:nt,specularIntensityMap:Dt,transmission:ze,transmissionMap:k,thicknessMap:we,gradientMap:ie,opaque:R.transparent===!1&&R.blending===gr&&R.alphaToCoverage===!1,alphaMap:he,alphaTest:Ce,alphaHash:Te,combine:R.combine,mapUv:zt&&w(R.map.channel),aoMapUv:O&&w(R.aoMap.channel),lightMapUv:hn&&w(R.lightMap.channel),bumpMapUv:ft&&w(R.bumpMap.channel),normalMapUv:ut&&w(R.normalMap.channel),displacementMapUv:Fe&&w(R.displacementMap.channel),emissiveMapUv:Nt&&w(R.emissiveMap.channel),metalnessMapUv:Ge&&w(R.metalnessMap.channel),roughnessMapUv:L&&w(R.roughnessMap.channel),anisotropyMapUv:Ae&&w(R.anisotropyMap.channel),clearcoatMapUv:Ke&&w(R.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&w(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&w(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&w(R.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&w(R.iridescenceThicknessMap.channel),sheenColorMapUv:je&&w(R.sheenColorMap.channel),sheenRoughnessMapUv:De&&w(R.sheenRoughnessMap.channel),specularMapUv:xt&&w(R.specularMap.channel),specularColorMapUv:nt&&w(R.specularColorMap.channel),specularIntensityMapUv:Dt&&w(R.specularIntensityMap.channel),transmissionMapUv:k&&w(R.transmissionMap.channel),thicknessMapUv:we&&w(R.thicknessMap.channel),alphaMapUv:he&&w(R.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(ut||T),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!me.attributes.uv&&(zt||he),fog:!!de,useFog:R.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:$e,skinning:Y.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:Ve,morphTextureStride:at,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:R.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:zt&&R.map.isVideoTexture===!0&&wt.getTransfer(R.map.colorSpace)===Ut,decodeVideoTextureEmissive:Nt&&R.emissiveMap.isVideoTexture===!0&&wt.getTransfer(R.emissiveMap.colorSpace)===Ut,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===si,flipSided:R.side===_n,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:qe&&R.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&R.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Xt.vertexUv1s=m.has(1),Xt.vertexUv2s=m.has(2),Xt.vertexUv3s=m.has(3),m.clear(),Xt}function p(R){const C=[];if(R.shaderID?C.push(R.shaderID):(C.push(R.customVertexShaderID),C.push(R.customFragmentShaderID)),R.defines!==void 0)for(const z in R.defines)C.push(z),C.push(R.defines[z]);return R.isRawShaderMaterial===!1&&(F(C,R),N(C,R),C.push(i.outputColorSpace)),C.push(R.customProgramCacheKey),C.join()}function F(R,C){R.push(C.precision),R.push(C.outputColorSpace),R.push(C.envMapMode),R.push(C.envMapCubeUVHeight),R.push(C.mapUv),R.push(C.alphaMapUv),R.push(C.lightMapUv),R.push(C.aoMapUv),R.push(C.bumpMapUv),R.push(C.normalMapUv),R.push(C.displacementMapUv),R.push(C.emissiveMapUv),R.push(C.metalnessMapUv),R.push(C.roughnessMapUv),R.push(C.anisotropyMapUv),R.push(C.clearcoatMapUv),R.push(C.clearcoatNormalMapUv),R.push(C.clearcoatRoughnessMapUv),R.push(C.iridescenceMapUv),R.push(C.iridescenceThicknessMapUv),R.push(C.sheenColorMapUv),R.push(C.sheenRoughnessMapUv),R.push(C.specularMapUv),R.push(C.specularColorMapUv),R.push(C.specularIntensityMapUv),R.push(C.transmissionMapUv),R.push(C.thicknessMapUv),R.push(C.combine),R.push(C.fogExp2),R.push(C.sizeAttenuation),R.push(C.morphTargetsCount),R.push(C.morphAttributeCount),R.push(C.numDirLights),R.push(C.numPointLights),R.push(C.numSpotLights),R.push(C.numSpotLightMaps),R.push(C.numHemiLights),R.push(C.numRectAreaLights),R.push(C.numDirLightShadows),R.push(C.numPointLightShadows),R.push(C.numSpotLightShadows),R.push(C.numSpotLightShadowsWithMaps),R.push(C.numLightProbes),R.push(C.shadowMapType),R.push(C.toneMapping),R.push(C.numClippingPlanes),R.push(C.numClipIntersection),R.push(C.depthPacking)}function N(R,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),R.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),R.push(h.mask)}function D(R){const C=b[R.type];let z;if(C){const ue=kn[C];z=xh.clone(ue.uniforms)}else z=R.uniforms;return z}function X(R,C){let z;for(let ue=0,Y=v.length;ue<Y;ue++){const de=v[ue];if(de.cacheKey===C){z=de,++z.usedTimes;break}}return z===void 0&&(z=new qm(i,C,R,a),v.push(z)),z}function V(R){if(--R.usedTimes===0){const C=v.indexOf(R);v[C]=v[v.length-1],v.pop(),R.destroy()}}function l(R){d.remove(R)}function q(){d.dispose()}return{getParameters:S,getProgramCacheKey:p,getUniforms:D,acquireProgram:X,releaseProgram:V,releaseShaderCache:l,programs:v,dispose:q}}function Zm(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let h=i.get(c);return h===void 0&&(h={},i.set(c,h)),h}function n(c){i.delete(c)}function s(c,h,d){i.get(c)[h]=d}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function Jm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Wl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Xl(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function c(x,M,y,b,w,S){let p=i[e];return p===void 0?(p={id:x.id,object:x,geometry:M,material:y,groupOrder:b,renderOrder:x.renderOrder,z:w,group:S},i[e]=p):(p.id=x.id,p.object=x,p.geometry=M,p.material=y,p.groupOrder=b,p.renderOrder=x.renderOrder,p.z=w,p.group=S),e++,p}function h(x,M,y,b,w,S){const p=c(x,M,y,b,w,S);y.transmission>0?n.push(p):y.transparent===!0?s.push(p):t.push(p)}function d(x,M,y,b,w,S){const p=c(x,M,y,b,w,S);y.transmission>0?n.unshift(p):y.transparent===!0?s.unshift(p):t.unshift(p)}function m(x,M){t.length>1&&t.sort(x||Jm),n.length>1&&n.sort(M||Wl),s.length>1&&s.sort(M||Wl)}function v(){for(let x=e,M=i.length;x<M;x++){const y=i[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:h,unshift:d,finish:v,sort:m}}function Qm(){let i=new WeakMap;function e(n,s){const a=i.get(n);let c;return a===void 0?(c=new Xl,i.set(n,[c])):s>=a.length?(c=new Xl,a.push(c)):c=a[s],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function eg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new vt};break;case"SpotLight":t={position:new j,direction:new j,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new j,halfWidth:new j,halfHeight:new j};break}return i[e.id]=t,t}}}function tg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ng=0;function ig(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function rg(i){const e=new eg,t=tg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)n.probe.push(new j);const s=new j,a=new Wt,c=new Wt;function h(m){let v=0,x=0,M=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let y=0,b=0,w=0,S=0,p=0,F=0,N=0,D=0,X=0,V=0,l=0;m.sort(ig);for(let R=0,C=m.length;R<C;R++){const z=m[R],ue=z.color,Y=z.intensity,de=z.distance,me=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)v+=ue.r*Y,x+=ue.g*Y,M+=ue.b*Y;else if(z.isLightProbe){for(let fe=0;fe<9;fe++)n.probe[fe].addScaledVector(z.sh.coefficients[fe],Y);l++}else if(z.isDirectionalLight){const fe=e.get(z);if(fe.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const pe=z.shadow,se=t.get(z);se.shadowIntensity=pe.intensity,se.shadowBias=pe.bias,se.shadowNormalBias=pe.normalBias,se.shadowRadius=pe.radius,se.shadowMapSize=pe.mapSize,n.directionalShadow[y]=se,n.directionalShadowMap[y]=me,n.directionalShadowMatrix[y]=z.shadow.matrix,F++}n.directional[y]=fe,y++}else if(z.isSpotLight){const fe=e.get(z);fe.position.setFromMatrixPosition(z.matrixWorld),fe.color.copy(ue).multiplyScalar(Y),fe.distance=de,fe.coneCos=Math.cos(z.angle),fe.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),fe.decay=z.decay,n.spot[w]=fe;const pe=z.shadow;if(z.map&&(n.spotLightMap[X]=z.map,X++,pe.updateMatrices(z),z.castShadow&&V++),n.spotLightMatrix[w]=pe.matrix,z.castShadow){const se=t.get(z);se.shadowIntensity=pe.intensity,se.shadowBias=pe.bias,se.shadowNormalBias=pe.normalBias,se.shadowRadius=pe.radius,se.shadowMapSize=pe.mapSize,n.spotShadow[w]=se,n.spotShadowMap[w]=me,D++}w++}else if(z.isRectAreaLight){const fe=e.get(z);fe.color.copy(ue).multiplyScalar(Y),fe.halfWidth.set(z.width*.5,0,0),fe.halfHeight.set(0,z.height*.5,0),n.rectArea[S]=fe,S++}else if(z.isPointLight){const fe=e.get(z);if(fe.color.copy(z.color).multiplyScalar(z.intensity),fe.distance=z.distance,fe.decay=z.decay,z.castShadow){const pe=z.shadow,se=t.get(z);se.shadowIntensity=pe.intensity,se.shadowBias=pe.bias,se.shadowNormalBias=pe.normalBias,se.shadowRadius=pe.radius,se.shadowMapSize=pe.mapSize,se.shadowCameraNear=pe.camera.near,se.shadowCameraFar=pe.camera.far,n.pointShadow[b]=se,n.pointShadowMap[b]=me,n.pointShadowMatrix[b]=z.shadow.matrix,N++}n.point[b]=fe,b++}else if(z.isHemisphereLight){const fe=e.get(z);fe.skyColor.copy(z.color).multiplyScalar(Y),fe.groundColor.copy(z.groundColor).multiplyScalar(Y),n.hemi[p]=fe,p++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=v,n.ambient[1]=x,n.ambient[2]=M;const q=n.hash;(q.directionalLength!==y||q.pointLength!==b||q.spotLength!==w||q.rectAreaLength!==S||q.hemiLength!==p||q.numDirectionalShadows!==F||q.numPointShadows!==N||q.numSpotShadows!==D||q.numSpotMaps!==X||q.numLightProbes!==l)&&(n.directional.length=y,n.spot.length=w,n.rectArea.length=S,n.point.length=b,n.hemi.length=p,n.directionalShadow.length=F,n.directionalShadowMap.length=F,n.pointShadow.length=N,n.pointShadowMap.length=N,n.spotShadow.length=D,n.spotShadowMap.length=D,n.directionalShadowMatrix.length=F,n.pointShadowMatrix.length=N,n.spotLightMatrix.length=D+X-V,n.spotLightMap.length=X,n.numSpotLightShadowsWithMaps=V,n.numLightProbes=l,q.directionalLength=y,q.pointLength=b,q.spotLength=w,q.rectAreaLength=S,q.hemiLength=p,q.numDirectionalShadows=F,q.numPointShadows=N,q.numSpotShadows=D,q.numSpotMaps=X,q.numLightProbes=l,n.version=ng++)}function d(m,v){let x=0,M=0,y=0,b=0,w=0;const S=v.matrixWorldInverse;for(let p=0,F=m.length;p<F;p++){const N=m[p];if(N.isDirectionalLight){const D=n.directional[x];D.direction.setFromMatrixPosition(N.matrixWorld),s.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(S),x++}else if(N.isSpotLight){const D=n.spot[y];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(N.matrixWorld),s.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(S),y++}else if(N.isRectAreaLight){const D=n.rectArea[b];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(S),c.identity(),a.copy(N.matrixWorld),a.premultiply(S),c.extractRotation(a),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(c),D.halfHeight.applyMatrix4(c),b++}else if(N.isPointLight){const D=n.point[M];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(S),M++}else if(N.isHemisphereLight){const D=n.hemi[w];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(S),w++}}}return{setup:h,setupView:d,state:n}}function ql(i){const e=new rg(i),t=[],n=[];function s(v){m.camera=v,t.length=0,n.length=0}function a(v){t.push(v)}function c(v){n.push(v)}function h(){e.setup(t)}function d(v){e.setupView(t,v)}const m={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:m,setupLights:h,setupLightsView:d,pushLight:a,pushShadow:c}}function sg(i){let e=new WeakMap;function t(s,a=0){const c=e.get(s);let h;return c===void 0?(h=new ql(i),e.set(s,[h])):a>=c.length?(h=new ql(i),c.push(h)):h=c[a],h}function n(){e=new WeakMap}return{get:t,dispose:n}}const ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,og=`uniform sampler2D shadow_pass;
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
}`;function lg(i,e,t){let n=new Lo;const s=new st,a=new st,c=new Gt,h=new Ch({depthPacking:Hu}),d=new Rh,m={},v=t.maxTextureSize,x={[bi]:_n,[_n]:bi,[si]:si},M=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:ag,fragmentShader:og}),y=M.clone();y.defines.HORIZONTAL_PASS=1;const b=new wi;b.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new wn(b,M),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ql;let p=this.type;this.render=function(V,l,q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||V.length===0)return;const R=i.getRenderTarget(),C=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),ue=i.state;ue.setBlending(Ei),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const Y=p!==ri&&this.type===ri,de=p===ri&&this.type!==ri;for(let me=0,fe=V.length;me<fe;me++){const pe=V[me],se=pe.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;s.copy(se.mapSize);const Se=se.getFrameExtents();if(s.multiply(Se),a.copy(se.mapSize),(s.x>v||s.y>v)&&(s.x>v&&(a.x=Math.floor(v/Se.x),s.x=a.x*Se.x,se.mapSize.x=a.x),s.y>v&&(a.y=Math.floor(v/Se.y),s.y=a.y*Se.y,se.mapSize.y=a.y)),se.map===null||Y===!0||de===!0){const Ve=this.type!==ri?{minFilter:Nn,magFilter:Nn}:{};se.map!==null&&se.map.dispose(),se.map=new Wi(s.x,s.y,Ve),se.map.texture.name=pe.name+".shadowMap",se.camera.updateProjectionMatrix()}i.setRenderTarget(se.map),i.clear();const Ue=se.getViewportCount();for(let Ve=0;Ve<Ue;Ve++){const at=se.getViewport(Ve);c.set(a.x*at.x,a.y*at.y,a.x*at.z,a.y*at.w),ue.viewport(c),se.updateMatrices(pe,Ve),n=se.getFrustum(),D(l,q,se.camera,pe,this.type)}se.isPointLightShadow!==!0&&this.type===ri&&F(se,q),se.needsUpdate=!1}p=this.type,S.needsUpdate=!1,i.setRenderTarget(R,C,z)};function F(V,l){const q=e.update(w);M.defines.VSM_SAMPLES!==V.blurSamples&&(M.defines.VSM_SAMPLES=V.blurSamples,y.defines.VSM_SAMPLES=V.blurSamples,M.needsUpdate=!0,y.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Wi(s.x,s.y)),M.uniforms.shadow_pass.value=V.map.texture,M.uniforms.resolution.value=V.mapSize,M.uniforms.radius.value=V.radius,i.setRenderTarget(V.mapPass),i.clear(),i.renderBufferDirect(l,null,q,M,w,null),y.uniforms.shadow_pass.value=V.mapPass.texture,y.uniforms.resolution.value=V.mapSize,y.uniforms.radius.value=V.radius,i.setRenderTarget(V.map),i.clear(),i.renderBufferDirect(l,null,q,y,w,null)}function N(V,l,q,R){let C=null;const z=q.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(z!==void 0)C=z;else if(C=q.isPointLight===!0?d:h,i.localClippingEnabled&&l.clipShadows===!0&&Array.isArray(l.clippingPlanes)&&l.clippingPlanes.length!==0||l.displacementMap&&l.displacementScale!==0||l.alphaMap&&l.alphaTest>0||l.map&&l.alphaTest>0||l.alphaToCoverage===!0){const ue=C.uuid,Y=l.uuid;let de=m[ue];de===void 0&&(de={},m[ue]=de);let me=de[Y];me===void 0&&(me=C.clone(),de[Y]=me,l.addEventListener("dispose",X)),C=me}if(C.visible=l.visible,C.wireframe=l.wireframe,R===ri?C.side=l.shadowSide!==null?l.shadowSide:l.side:C.side=l.shadowSide!==null?l.shadowSide:x[l.side],C.alphaMap=l.alphaMap,C.alphaTest=l.alphaToCoverage===!0?.5:l.alphaTest,C.map=l.map,C.clipShadows=l.clipShadows,C.clippingPlanes=l.clippingPlanes,C.clipIntersection=l.clipIntersection,C.displacementMap=l.displacementMap,C.displacementScale=l.displacementScale,C.displacementBias=l.displacementBias,C.wireframeLinewidth=l.wireframeLinewidth,C.linewidth=l.linewidth,q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ue=i.properties.get(C);ue.light=q}return C}function D(V,l,q,R,C){if(V.visible===!1)return;if(V.layers.test(l.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&C===ri)&&(!V.frustumCulled||n.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,V.matrixWorld);const Y=e.update(V),de=V.material;if(Array.isArray(de)){const me=Y.groups;for(let fe=0,pe=me.length;fe<pe;fe++){const se=me[fe],Se=de[se.materialIndex];if(Se&&Se.visible){const Ue=N(V,Se,R,C);V.onBeforeShadow(i,V,l,q,Y,Ue,se),i.renderBufferDirect(q,null,Y,Ue,V,se),V.onAfterShadow(i,V,l,q,Y,Ue,se)}}}else if(de.visible){const me=N(V,de,R,C);V.onBeforeShadow(i,V,l,q,Y,me,null),i.renderBufferDirect(q,null,Y,me,V,null),V.onAfterShadow(i,V,l,q,Y,me,null)}}const ue=V.children;for(let Y=0,de=ue.length;Y<de;Y++)D(ue[Y],l,q,R,C)}function X(V){V.target.removeEventListener("dispose",X);for(const q in m){const R=m[q],C=V.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}const cg={[Oa]:Ba,[za]:Va,[Ha]:Ga,[vr]:ka,[Ba]:Oa,[Va]:za,[Ga]:Ha,[ka]:vr};function ug(i,e){function t(){let k=!1;const we=new Gt;let ie=null;const he=new Gt(0,0,0,0);return{setMask:function(Ce){ie!==Ce&&!k&&(i.colorMask(Ce,Ce,Ce,Ce),ie=Ce)},setLocked:function(Ce){k=Ce},setClear:function(Ce,Te,qe,dt,Xt){Xt===!0&&(Ce*=dt,Te*=dt,qe*=dt),we.set(Ce,Te,qe,dt),he.equals(we)===!1&&(i.clearColor(Ce,Te,qe,dt),he.copy(we))},reset:function(){k=!1,ie=null,he.set(-1,0,0,0)}}}function n(){let k=!1,we=!1,ie=null,he=null,Ce=null;return{setReversed:function(Te){if(we!==Te){const qe=e.get("EXT_clip_control");Te?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),we=Te;const dt=Ce;Ce=null,this.setClear(dt)}},getReversed:function(){return we},setTest:function(Te){Te?be(i.DEPTH_TEST):$e(i.DEPTH_TEST)},setMask:function(Te){ie!==Te&&!k&&(i.depthMask(Te),ie=Te)},setFunc:function(Te){if(we&&(Te=cg[Te]),he!==Te){switch(Te){case Oa:i.depthFunc(i.NEVER);break;case Ba:i.depthFunc(i.ALWAYS);break;case za:i.depthFunc(i.LESS);break;case vr:i.depthFunc(i.LEQUAL);break;case Ha:i.depthFunc(i.EQUAL);break;case ka:i.depthFunc(i.GEQUAL);break;case Va:i.depthFunc(i.GREATER);break;case Ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=Te}},setLocked:function(Te){k=Te},setClear:function(Te){Ce!==Te&&(we&&(Te=1-Te),i.clearDepth(Te),Ce=Te)},reset:function(){k=!1,ie=null,he=null,Ce=null,we=!1}}}function s(){let k=!1,we=null,ie=null,he=null,Ce=null,Te=null,qe=null,dt=null,Xt=null;return{setTest:function(Rt){k||(Rt?be(i.STENCIL_TEST):$e(i.STENCIL_TEST))},setMask:function(Rt){we!==Rt&&!k&&(i.stencilMask(Rt),we=Rt)},setFunc:function(Rt,fn,Sn){(ie!==Rt||he!==fn||Ce!==Sn)&&(i.stencilFunc(Rt,fn,Sn),ie=Rt,he=fn,Ce=Sn)},setOp:function(Rt,fn,Sn){(Te!==Rt||qe!==fn||dt!==Sn)&&(i.stencilOp(Rt,fn,Sn),Te=Rt,qe=fn,dt=Sn)},setLocked:function(Rt){k=Rt},setClear:function(Rt){Xt!==Rt&&(i.clearStencil(Rt),Xt=Rt)},reset:function(){k=!1,we=null,ie=null,he=null,Ce=null,Te=null,qe=null,dt=null,Xt=null}}}const a=new t,c=new n,h=new s,d=new WeakMap,m=new WeakMap;let v={},x={},M=new WeakMap,y=[],b=null,w=!1,S=null,p=null,F=null,N=null,D=null,X=null,V=null,l=new vt(0,0,0),q=0,R=!1,C=null,z=null,ue=null,Y=null,de=null;const me=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let fe=!1,pe=0;const se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(se)[1]),fe=pe>=1):se.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),fe=pe>=2);let Se=null,Ue={};const Ve=i.getParameter(i.SCISSOR_BOX),at=i.getParameter(i.VIEWPORT),Ct=new Gt().fromArray(Ve),ce=new Gt().fromArray(at);function Me(k,we,ie,he){const Ce=new Uint8Array(4),Te=i.createTexture();i.bindTexture(k,Te),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<ie;qe++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(we+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return Te}const Oe={};Oe[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),Oe[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Oe[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),h.setClear(0),be(i.DEPTH_TEST),c.setFunc(vr),ft(!1),ut(Yo),be(i.CULL_FACE),O(Ei);function be(k){v[k]!==!0&&(i.enable(k),v[k]=!0)}function $e(k){v[k]!==!1&&(i.disable(k),v[k]=!1)}function yt(k,we){return x[k]!==we?(i.bindFramebuffer(k,we),x[k]=we,k===i.DRAW_FRAMEBUFFER&&(x[i.FRAMEBUFFER]=we),k===i.FRAMEBUFFER&&(x[i.DRAW_FRAMEBUFFER]=we),!0):!1}function He(k,we){let ie=y,he=!1;if(k){ie=M.get(we),ie===void 0&&(ie=[],M.set(we,ie));const Ce=k.textures;if(ie.length!==Ce.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let Te=0,qe=Ce.length;Te<qe;Te++)ie[Te]=i.COLOR_ATTACHMENT0+Te;ie.length=Ce.length,he=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,he=!0);he&&i.drawBuffers(ie)}function zt(k){return b!==k?(i.useProgram(k),b=k,!0):!1}const Pt={[zi]:i.FUNC_ADD,[fu]:i.FUNC_SUBTRACT,[du]:i.FUNC_REVERSE_SUBTRACT};Pt[pu]=i.MIN,Pt[mu]=i.MAX;const ct={[gu]:i.ZERO,[_u]:i.ONE,[vu]:i.SRC_COLOR,[Na]:i.SRC_ALPHA,[Tu]:i.SRC_ALPHA_SATURATE,[yu]:i.DST_COLOR,[Mu]:i.DST_ALPHA,[xu]:i.ONE_MINUS_SRC_COLOR,[Fa]:i.ONE_MINUS_SRC_ALPHA,[Eu]:i.ONE_MINUS_DST_COLOR,[Su]:i.ONE_MINUS_DST_ALPHA,[bu]:i.CONSTANT_COLOR,[Au]:i.ONE_MINUS_CONSTANT_COLOR,[wu]:i.CONSTANT_ALPHA,[Cu]:i.ONE_MINUS_CONSTANT_ALPHA};function O(k,we,ie,he,Ce,Te,qe,dt,Xt,Rt){if(k===Ei){w===!0&&($e(i.BLEND),w=!1);return}if(w===!1&&(be(i.BLEND),w=!0),k!==hu){if(k!==S||Rt!==R){if((p!==zi||D!==zi)&&(i.blendEquation(i.FUNC_ADD),p=zi,D=zi),Rt)switch(k){case gr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $o:i.blendFunc(i.ONE,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $o:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}F=null,N=null,X=null,V=null,l.set(0,0,0),q=0,S=k,R=Rt}return}Ce=Ce||we,Te=Te||ie,qe=qe||he,(we!==p||Ce!==D)&&(i.blendEquationSeparate(Pt[we],Pt[Ce]),p=we,D=Ce),(ie!==F||he!==N||Te!==X||qe!==V)&&(i.blendFuncSeparate(ct[ie],ct[he],ct[Te],ct[qe]),F=ie,N=he,X=Te,V=qe),(dt.equals(l)===!1||Xt!==q)&&(i.blendColor(dt.r,dt.g,dt.b,Xt),l.copy(dt),q=Xt),S=k,R=!1}function hn(k,we){k.side===si?$e(i.CULL_FACE):be(i.CULL_FACE);let ie=k.side===_n;we&&(ie=!ie),ft(ie),k.blending===gr&&k.transparent===!1?O(Ei):O(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),a.setMask(k.colorWrite);const he=k.stencilWrite;h.setTest(he),he&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Nt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?be(i.SAMPLE_ALPHA_TO_COVERAGE):$e(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(k){C!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),C=k)}function ut(k){k!==lu?(be(i.CULL_FACE),k!==z&&(k===Yo?i.cullFace(i.BACK):k===cu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$e(i.CULL_FACE),z=k}function Fe(k){k!==ue&&(fe&&i.lineWidth(k),ue=k)}function Nt(k,we,ie){k?(be(i.POLYGON_OFFSET_FILL),(Y!==we||de!==ie)&&(i.polygonOffset(we,ie),Y=we,de=ie)):$e(i.POLYGON_OFFSET_FILL)}function Ge(k){k?be(i.SCISSOR_TEST):$e(i.SCISSOR_TEST)}function L(k){k===void 0&&(k=i.TEXTURE0+me-1),Se!==k&&(i.activeTexture(k),Se=k)}function T(k,we,ie){ie===void 0&&(Se===null?ie=i.TEXTURE0+me-1:ie=Se);let he=Ue[ie];he===void 0&&(he={type:void 0,texture:void 0},Ue[ie]=he),(he.type!==k||he.texture!==we)&&(Se!==ie&&(i.activeTexture(ie),Se=ie),i.bindTexture(k,we||Oe[k]),he.type=k,he.texture=we)}function K(){const k=Ue[Se];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function le(){try{i.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Z(){try{i.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function re(){try{i.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ze(){try{i.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{i.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ke(){try{i.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ze(){try{i.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{i.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(){try{i.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ke(){try{i.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function je(k){Ct.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Ct.copy(k))}function De(k){ce.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),ce.copy(k))}function xt(k,we){let ie=m.get(we);ie===void 0&&(ie=new WeakMap,m.set(we,ie));let he=ie.get(k);he===void 0&&(he=i.getUniformBlockIndex(we,k.name),ie.set(k,he))}function nt(k,we){const he=m.get(we).get(k);d.get(we)!==he&&(i.uniformBlockBinding(we,he,k.__bindingPointIndex),d.set(we,he))}function Dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),v={},Se=null,Ue={},x={},M=new WeakMap,y=[],b=null,w=!1,S=null,p=null,F=null,N=null,D=null,X=null,V=null,l=new vt(0,0,0),q=0,R=!1,C=null,z=null,ue=null,Y=null,de=null,Ct.set(0,0,i.canvas.width,i.canvas.height),ce.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),h.reset()}return{buffers:{color:a,depth:c,stencil:h},enable:be,disable:$e,bindFramebuffer:yt,drawBuffers:He,useProgram:zt,setBlending:O,setMaterial:hn,setFlipSided:ft,setCullFace:ut,setLineWidth:Fe,setPolygonOffset:Nt,setScissorTest:Ge,activeTexture:L,bindTexture:T,unbindTexture:K,compressedTexImage2D:le,compressedTexImage3D:Z,texImage2D:Le,texImage3D:ke,updateUBOMapping:xt,uniformBlockBinding:nt,texStorage2D:Ze,texStorage3D:_e,texSubImage2D:re,texSubImage3D:ze,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ke,scissor:je,viewport:De,reset:Dt}}function hg(i,e,t,n,s,a,c){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new st,v=new WeakMap;let x;const M=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,T){return y?new OffscreenCanvas(L,T):Hs("canvas")}function w(L,T,K){let le=1;const Z=Ge(L);if((Z.width>K||Z.height>K)&&(le=K/Math.max(Z.width,Z.height)),le<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const re=Math.floor(le*Z.width),ze=Math.floor(le*Z.height);x===void 0&&(x=b(re,ze));const Ae=T?b(re,ze):x;return Ae.width=re,Ae.height=ze,Ae.getContext("2d").drawImage(L,0,0,re,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+re+"x"+ze+")."),Ae}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),L;return L}function S(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function F(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function N(L,T,K,le,Z=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let re=T;if(T===i.RED&&(K===i.FLOAT&&(re=i.R32F),K===i.HALF_FLOAT&&(re=i.R16F),K===i.UNSIGNED_BYTE&&(re=i.R8)),T===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(re=i.R8UI),K===i.UNSIGNED_SHORT&&(re=i.R16UI),K===i.UNSIGNED_INT&&(re=i.R32UI),K===i.BYTE&&(re=i.R8I),K===i.SHORT&&(re=i.R16I),K===i.INT&&(re=i.R32I)),T===i.RG&&(K===i.FLOAT&&(re=i.RG32F),K===i.HALF_FLOAT&&(re=i.RG16F),K===i.UNSIGNED_BYTE&&(re=i.RG8)),T===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(re=i.RG8UI),K===i.UNSIGNED_SHORT&&(re=i.RG16UI),K===i.UNSIGNED_INT&&(re=i.RG32UI),K===i.BYTE&&(re=i.RG8I),K===i.SHORT&&(re=i.RG16I),K===i.INT&&(re=i.RG32I)),T===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(re=i.RGB8UI),K===i.UNSIGNED_SHORT&&(re=i.RGB16UI),K===i.UNSIGNED_INT&&(re=i.RGB32UI),K===i.BYTE&&(re=i.RGB8I),K===i.SHORT&&(re=i.RGB16I),K===i.INT&&(re=i.RGB32I)),T===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),K===i.UNSIGNED_INT&&(re=i.RGBA32UI),K===i.BYTE&&(re=i.RGBA8I),K===i.SHORT&&(re=i.RGBA16I),K===i.INT&&(re=i.RGBA32I)),T===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),T===i.RGBA){const ze=Z?Bs:wt.getTransfer(le);K===i.FLOAT&&(re=i.RGBA32F),K===i.HALF_FLOAT&&(re=i.RGBA16F),K===i.UNSIGNED_BYTE&&(re=ze===Ut?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function D(L,T){let K;return L?T===null||T===Gi||T===Vr?K=i.DEPTH24_STENCIL8:T===ai?K=i.DEPTH32F_STENCIL8:T===kr&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Gi||T===Vr?K=i.DEPTH_COMPONENT24:T===ai?K=i.DEPTH_COMPONENT32F:T===kr&&(K=i.DEPTH_COMPONENT16),K}function X(L,T){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Nn&&L.minFilter!==Vn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function V(L){const T=L.target;T.removeEventListener("dispose",V),q(T),T.isVideoTexture&&v.delete(T)}function l(L){const T=L.target;T.removeEventListener("dispose",l),C(T)}function q(L){const T=n.get(L);if(T.__webglInit===void 0)return;const K=L.source,le=M.get(K);if(le){const Z=le[T.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(L),Object.keys(le).length===0&&M.delete(K)}n.remove(L)}function R(L){const T=n.get(L);i.deleteTexture(T.__webglTexture);const K=L.source,le=M.get(K);delete le[T.__cacheKey],c.memory.textures--}function C(L){const T=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(T.__webglFramebuffer[le]))for(let Z=0;Z<T.__webglFramebuffer[le].length;Z++)i.deleteFramebuffer(T.__webglFramebuffer[le][Z]);else i.deleteFramebuffer(T.__webglFramebuffer[le]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[le])}else{if(Array.isArray(T.__webglFramebuffer))for(let le=0;le<T.__webglFramebuffer.length;le++)i.deleteFramebuffer(T.__webglFramebuffer[le]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let le=0;le<T.__webglColorRenderbuffer.length;le++)T.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[le]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=L.textures;for(let le=0,Z=K.length;le<Z;le++){const re=n.get(K[le]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),c.memory.textures--),n.remove(K[le])}n.remove(L)}let z=0;function ue(){z=0}function Y(){const L=z;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),z+=1,L}function de(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function me(L,T){const K=n.get(L);if(L.isVideoTexture&&Fe(L),L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){const le=L.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(K,L,T);return}}t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+T)}function fe(L,T){const K=n.get(L);if(L.version>0&&K.__version!==L.version){ce(K,L,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+T)}function pe(L,T){const K=n.get(L);if(L.version>0&&K.__version!==L.version){ce(K,L,T);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+T)}function se(L,T){const K=n.get(L);if(L.version>0&&K.__version!==L.version){Me(K,L,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+T)}const Se={[qa]:i.REPEAT,[ki]:i.CLAMP_TO_EDGE,[ja]:i.MIRRORED_REPEAT},Ue={[Nn]:i.NEAREST,[Bu]:i.NEAREST_MIPMAP_NEAREST,[rs]:i.NEAREST_MIPMAP_LINEAR,[Vn]:i.LINEAR,[ra]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},Ve={[Vu]:i.NEVER,[Yu]:i.ALWAYS,[Gu]:i.LESS,[hc]:i.LEQUAL,[Wu]:i.EQUAL,[ju]:i.GEQUAL,[Xu]:i.GREATER,[qu]:i.NOTEQUAL};function at(L,T){if(T.type===ai&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Vn||T.magFilter===ra||T.magFilter===rs||T.magFilter===Vi||T.minFilter===Vn||T.minFilter===ra||T.minFilter===rs||T.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,Se[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,Se[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,Se[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Ue[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Ue[T.minFilter]),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Ve[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Nn||T.minFilter!==rs&&T.minFilter!==Vi||T.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ct(L,T){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",V));const le=T.source;let Z=M.get(le);Z===void 0&&(Z={},M.set(le,Z));const re=de(T);if(re!==L.__cacheKey){Z[re]===void 0&&(Z[re]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,K=!0),Z[re].usedTimes++;const ze=Z[L.__cacheKey];ze!==void 0&&(Z[L.__cacheKey].usedTimes--,ze.usedTimes===0&&R(T)),L.__cacheKey=re,L.__webglTexture=Z[re].texture}return K}function ce(L,T,K){let le=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(le=i.TEXTURE_3D);const Z=Ct(L,T),re=T.source;t.bindTexture(le,L.__webglTexture,i.TEXTURE0+K);const ze=n.get(re);if(re.version!==ze.__version||Z===!0){t.activeTexture(i.TEXTURE0+K);const Ae=wt.getPrimaries(wt.workingColorSpace),Ke=T.colorSpace===yi?null:wt.getPrimaries(T.colorSpace),Ze=T.colorSpace===yi||Ae===Ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let _e=w(T.image,!1,s.maxTextureSize);_e=Nt(T,_e);const Le=a.convert(T.format,T.colorSpace),ke=a.convert(T.type);let je=N(T.internalFormat,Le,ke,T.colorSpace,T.isVideoTexture);at(le,T);let De;const xt=T.mipmaps,nt=T.isVideoTexture!==!0,Dt=ze.__version===void 0||Z===!0,k=re.dataReady,we=X(T,_e);if(T.isDepthTexture)je=D(T.format===Wr,T.type),Dt&&(nt?t.texStorage2D(i.TEXTURE_2D,1,je,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,je,_e.width,_e.height,0,Le,ke,null));else if(T.isDataTexture)if(xt.length>0){nt&&Dt&&t.texStorage2D(i.TEXTURE_2D,we,je,xt[0].width,xt[0].height);for(let ie=0,he=xt.length;ie<he;ie++)De=xt[ie],nt?k&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,De.width,De.height,Le,ke,De.data):t.texImage2D(i.TEXTURE_2D,ie,je,De.width,De.height,0,Le,ke,De.data);T.generateMipmaps=!1}else nt?(Dt&&t.texStorage2D(i.TEXTURE_2D,we,je,_e.width,_e.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e.width,_e.height,Le,ke,_e.data)):t.texImage2D(i.TEXTURE_2D,0,je,_e.width,_e.height,0,Le,ke,_e.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){nt&&Dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,je,xt[0].width,xt[0].height,_e.depth);for(let ie=0,he=xt.length;ie<he;ie++)if(De=xt[ie],T.format!==In)if(Le!==null)if(nt){if(k)if(T.layerUpdates.size>0){const Ce=yl(De.width,De.height,T.format,T.type);for(const Te of T.layerUpdates){const qe=De.data.subarray(Te*Ce/De.data.BYTES_PER_ELEMENT,(Te+1)*Ce/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,Te,De.width,De.height,1,Le,qe)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,De.width,De.height,_e.depth,Le,De.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,je,De.width,De.height,_e.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,De.width,De.height,_e.depth,Le,ke,De.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,je,De.width,De.height,_e.depth,0,Le,ke,De.data)}else{nt&&Dt&&t.texStorage2D(i.TEXTURE_2D,we,je,xt[0].width,xt[0].height);for(let ie=0,he=xt.length;ie<he;ie++)De=xt[ie],T.format!==In?Le!==null?nt?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,De.width,De.height,Le,De.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,je,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?k&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,De.width,De.height,Le,ke,De.data):t.texImage2D(i.TEXTURE_2D,ie,je,De.width,De.height,0,Le,ke,De.data)}else if(T.isDataArrayTexture)if(nt){if(Dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,je,_e.width,_e.height,_e.depth),k)if(T.layerUpdates.size>0){const ie=yl(_e.width,_e.height,T.format,T.type);for(const he of T.layerUpdates){const Ce=_e.data.subarray(he*ie/_e.data.BYTES_PER_ELEMENT,(he+1)*ie/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,_e.width,_e.height,1,Le,ke,Ce)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Le,ke,_e.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,je,_e.width,_e.height,_e.depth,0,Le,ke,_e.data);else if(T.isData3DTexture)nt?(Dt&&t.texStorage3D(i.TEXTURE_3D,we,je,_e.width,_e.height,_e.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Le,ke,_e.data)):t.texImage3D(i.TEXTURE_3D,0,je,_e.width,_e.height,_e.depth,0,Le,ke,_e.data);else if(T.isFramebufferTexture){if(Dt)if(nt)t.texStorage2D(i.TEXTURE_2D,we,je,_e.width,_e.height);else{let ie=_e.width,he=_e.height;for(let Ce=0;Ce<we;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,je,ie,he,0,Le,ke,null),ie>>=1,he>>=1}}else if(xt.length>0){if(nt&&Dt){const ie=Ge(xt[0]);t.texStorage2D(i.TEXTURE_2D,we,je,ie.width,ie.height)}for(let ie=0,he=xt.length;ie<he;ie++)De=xt[ie],nt?k&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Le,ke,De):t.texImage2D(i.TEXTURE_2D,ie,je,Le,ke,De);T.generateMipmaps=!1}else if(nt){if(Dt){const ie=Ge(_e);t.texStorage2D(i.TEXTURE_2D,we,je,ie.width,ie.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Le,ke,_e)}else t.texImage2D(i.TEXTURE_2D,0,je,Le,ke,_e);S(T)&&p(le),ze.__version=re.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Me(L,T,K){if(T.image.length!==6)return;const le=Ct(L,T),Z=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+K);const re=n.get(Z);if(Z.version!==re.__version||le===!0){t.activeTexture(i.TEXTURE0+K);const ze=wt.getPrimaries(wt.workingColorSpace),Ae=T.colorSpace===yi?null:wt.getPrimaries(T.colorSpace),Ke=T.colorSpace===yi||ze===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const Ze=T.isCompressedTexture||T.image[0].isCompressedTexture,_e=T.image[0]&&T.image[0].isDataTexture,Le=[];for(let he=0;he<6;he++)!Ze&&!_e?Le[he]=w(T.image[he],!0,s.maxCubemapSize):Le[he]=_e?T.image[he].image:T.image[he],Le[he]=Nt(T,Le[he]);const ke=Le[0],je=a.convert(T.format,T.colorSpace),De=a.convert(T.type),xt=N(T.internalFormat,je,De,T.colorSpace),nt=T.isVideoTexture!==!0,Dt=re.__version===void 0||le===!0,k=Z.dataReady;let we=X(T,ke);at(i.TEXTURE_CUBE_MAP,T);let ie;if(Ze){nt&&Dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,xt,ke.width,ke.height);for(let he=0;he<6;he++){ie=Le[he].mipmaps;for(let Ce=0;Ce<ie.length;Ce++){const Te=ie[Ce];T.format!==In?je!==null?nt?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,0,0,Te.width,Te.height,je,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,xt,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,0,0,Te.width,Te.height,je,De,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce,xt,Te.width,Te.height,0,je,De,Te.data)}}}else{if(ie=T.mipmaps,nt&&Dt){ie.length>0&&we++;const he=Ge(Le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,xt,he.width,he.height)}for(let he=0;he<6;he++)if(_e){nt?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Le[he].width,Le[he].height,je,De,Le[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,xt,Le[he].width,Le[he].height,0,je,De,Le[he].data);for(let Ce=0;Ce<ie.length;Ce++){const qe=ie[Ce].image[he].image;nt?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,0,0,qe.width,qe.height,je,De,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,xt,qe.width,qe.height,0,je,De,qe.data)}}else{nt?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,je,De,Le[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,xt,je,De,Le[he]);for(let Ce=0;Ce<ie.length;Ce++){const Te=ie[Ce];nt?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,0,0,je,De,Te.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ce+1,xt,je,De,Te.image[he])}}}S(T)&&p(i.TEXTURE_CUBE_MAP),re.__version=Z.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Oe(L,T,K,le,Z,re){const ze=a.convert(K.format,K.colorSpace),Ae=a.convert(K.type),Ke=N(K.internalFormat,ze,Ae,K.colorSpace),Ze=n.get(T),_e=n.get(K);if(_e.__renderTarget=T,!Ze.__hasExternalTextures){const Le=Math.max(1,T.width>>re),ke=Math.max(1,T.height>>re);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,re,Ke,Le,ke,T.depth,0,ze,Ae,null):t.texImage2D(Z,re,Ke,Le,ke,0,ze,Ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),ut(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,Z,_e.__webglTexture,0,ft(T)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,Z,_e.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(L,T,K){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer){const le=T.depthTexture,Z=le&&le.isDepthTexture?le.type:null,re=D(T.stencilBuffer,Z),ze=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=ft(T);ut(T)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,re,T.width,T.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,re,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,re,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ze,i.RENDERBUFFER,L)}else{const le=T.textures;for(let Z=0;Z<le.length;Z++){const re=le[Z],ze=a.convert(re.format,re.colorSpace),Ae=a.convert(re.type),Ke=N(re.internalFormat,ze,Ae,re.colorSpace),Ze=ft(T);K&&ut(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,Ke,T.width,T.height):ut(T)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze,Ke,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Ke,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $e(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const le=n.get(T.depthTexture);le.__renderTarget=T,(!le.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),me(T.depthTexture,0);const Z=le.__webglTexture,re=ft(T);if(T.depthTexture.format===Gr)ut(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(T.depthTexture.format===Wr)ut(T)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function yt(L){const T=n.get(L),K=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const le=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),le){const Z=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,le.removeEventListener("dispose",Z)};le.addEventListener("dispose",Z),T.__depthDisposeCallback=Z}T.__boundDepthTexture=le}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const le=L.texture.mipmaps;le&&le.length>0?$e(T.__webglFramebuffer[0],L):$e(T.__webglFramebuffer,L)}else if(K){T.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[le]),T.__webglDepthbuffer[le]===void 0)T.__webglDepthbuffer[le]=i.createRenderbuffer(),be(T.__webglDepthbuffer[le],L,!1);else{const Z=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=T.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,re)}}else{const le=L.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),be(T.__webglDepthbuffer,L,!1);else{const Z=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,re)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(L,T,K){const le=n.get(L);T!==void 0&&Oe(le.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&yt(L)}function zt(L){const T=L.texture,K=n.get(L),le=n.get(T);L.addEventListener("dispose",l);const Z=L.textures,re=L.isWebGLCubeRenderTarget===!0,ze=Z.length>1;if(ze||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=T.version,c.memory.textures++),re){K.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[Ae]=[];for(let Ke=0;Ke<T.mipmaps.length;Ke++)K.__webglFramebuffer[Ae][Ke]=i.createFramebuffer()}else K.__webglFramebuffer[Ae]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)K.__webglFramebuffer[Ae]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(ze)for(let Ae=0,Ke=Z.length;Ae<Ke;Ae++){const Ze=n.get(Z[Ae]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=i.createTexture(),c.memory.textures++)}if(L.samples>0&&ut(L)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ae=0;Ae<Z.length;Ae++){const Ke=Z[Ae];K.__webglColorRenderbuffer[Ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Ae]);const Ze=a.convert(Ke.format,Ke.colorSpace),_e=a.convert(Ke.type),Le=N(Ke.internalFormat,Ze,_e,Ke.colorSpace,L.isXRRenderTarget===!0),ke=ft(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,Le,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,K.__webglColorRenderbuffer[Ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),be(K.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),at(i.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ke=0;Ke<T.mipmaps.length;Ke++)Oe(K.__webglFramebuffer[Ae][Ke],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ke);else Oe(K.__webglFramebuffer[Ae],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(T)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let Ae=0,Ke=Z.length;Ae<Ke;Ae++){const Ze=Z[Ae],_e=n.get(Ze);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),at(i.TEXTURE_2D,Ze),Oe(K.__webglFramebuffer,L,Ze,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,0),S(Ze)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let Ae=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ae,le.__webglTexture),at(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let Ke=0;Ke<T.mipmaps.length;Ke++)Oe(K.__webglFramebuffer[Ke],L,T,i.COLOR_ATTACHMENT0,Ae,Ke);else Oe(K.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,Ae,0);S(T)&&p(Ae),t.unbindTexture()}L.depthBuffer&&yt(L)}function Pt(L){const T=L.textures;for(let K=0,le=T.length;K<le;K++){const Z=T[K];if(S(Z)){const re=F(L),ze=n.get(Z).__webglTexture;t.bindTexture(re,ze),p(re),t.unbindTexture()}}}const ct=[],O=[];function hn(L){if(L.samples>0){if(ut(L)===!1){const T=L.textures,K=L.width,le=L.height;let Z=i.COLOR_BUFFER_BIT;const re=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ze=n.get(L),Ae=T.length>1;if(Ae)for(let Ze=0;Ze<T.length;Ze++)t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer);const Ke=L.texture.mipmaps;Ke&&Ke.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Ze=0;Ze<T.length;Ze++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),Ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ze.__webglColorRenderbuffer[Ze]);const _e=n.get(T[Ze]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,K,le,0,0,K,le,Z,i.NEAREST),d===!0&&(ct.length=0,O.length=0,ct.push(i.COLOR_ATTACHMENT0+Ze),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ct.push(re),O.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ae)for(let Ze=0;Ze<T.length;Ze++){t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.RENDERBUFFER,ze.__webglColorRenderbuffer[Ze]);const _e=n.get(T[Ze]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.TEXTURE_2D,_e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const T=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function ft(L){return Math.min(s.maxSamples,L.samples)}function ut(L){const T=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Fe(L){const T=c.render.frame;v.get(L)!==T&&(v.set(L,T),L.update())}function Nt(L,T){const K=L.colorSpace,le=L.format,Z=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==Sr&&K!==yi&&(wt.getTransfer(K)===Ut?(le!==In||Z!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),T}function Ge(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=Y,this.resetTextureUnits=ue,this.setTexture2D=me,this.setTexture2DArray=fe,this.setTexture3D=pe,this.setTextureCube=se,this.rebindTextures=He,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=ut}function fg(i,e){function t(n,s=yi){let a;const c=wt.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===bo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ao)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nc)return i.BYTE;if(n===ic)return i.SHORT;if(n===kr)return i.UNSIGNED_SHORT;if(n===To)return i.INT;if(n===Gi)return i.UNSIGNED_INT;if(n===ai)return i.FLOAT;if(n===qr)return i.HALF_FLOAT;if(n===sc)return i.ALPHA;if(n===ac)return i.RGB;if(n===In)return i.RGBA;if(n===Gr)return i.DEPTH_COMPONENT;if(n===Wr)return i.DEPTH_STENCIL;if(n===oc)return i.RED;if(n===wo)return i.RED_INTEGER;if(n===lc)return i.RG;if(n===Co)return i.RG_INTEGER;if(n===Ro)return i.RGBA_INTEGER;if(n===Cs||n===Rs||n===Ps||n===Ds)if(c===Ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Cs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ds)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Cs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ps)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ds)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ya||n===$a||n===Ka||n===Za)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Ya)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$a)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ka)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Za)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ja||n===Qa||n===eo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Ja||n===Qa)return c===Ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===eo)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===to||n===no||n===io||n===ro||n===so||n===ao||n===oo||n===lo||n===co||n===uo||n===ho||n===fo||n===po||n===mo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===to)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===no)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===io)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ro)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===so)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ao)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oo)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lo)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===co)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uo)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ho)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fo)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===po)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mo)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ls||n===go||n===_o)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Ls)return c===Ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===go)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_o)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cc||n===vo||n===xo||n===Mo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Ls)return a.COMPRESSED_RED_RGTC1_EXT;if(n===vo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pg=`
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

}`;class mg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new vn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ai({vertexShader:dg,fragmentShader:pg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wn(new $r(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gg extends ji{constructor(e,t){super();const n=this;let s=null,a=1,c=null,h="local-floor",d=1,m=null,v=null,x=null,M=null,y=null,b=null;const w=new mg,S=t.getContextAttributes();let p=null,F=null;const N=[],D=[],X=new st;let V=null;const l=new An;l.viewport=new Gt;const q=new An;q.viewport=new Gt;const R=[l,q],C=new Ih;let z=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let Me=N[ce];return Me===void 0&&(Me=new ba,N[ce]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(ce){let Me=N[ce];return Me===void 0&&(Me=new ba,N[ce]=Me),Me.getGripSpace()},this.getHand=function(ce){let Me=N[ce];return Me===void 0&&(Me=new ba,N[ce]=Me),Me.getHandSpace()};function Y(ce){const Me=D.indexOf(ce.inputSource);if(Me===-1)return;const Oe=N[Me];Oe!==void 0&&(Oe.update(ce.inputSource,ce.frame,m||c),Oe.dispatchEvent({type:ce.type,data:ce.inputSource}))}function de(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",de),s.removeEventListener("inputsourceschange",me);for(let ce=0;ce<N.length;ce++){const Me=D[ce];Me!==null&&(D[ce]=null,N[ce].disconnect(Me))}z=null,ue=null,w.reset(),e.setRenderTarget(p),y=null,M=null,x=null,s=null,F=null,Ct.stop(),n.isPresenting=!1,e.setPixelRatio(V),e.setSize(X.width,X.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){a=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){h=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(ce){m=ce},this.getBaseLayer=function(){return M!==null?M:y},this.getBinding=function(){return x},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(ce){if(s=ce,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",de),s.addEventListener("inputsourceschange",me),S.xrCompatible!==!0&&await t.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(X),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Oe=null,be=null,$e=null;S.depth&&($e=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Oe=S.stencil?Wr:Gr,be=S.stencil?Vr:Gi);const yt={colorFormat:t.RGBA8,depthFormat:$e,scaleFactor:a};x=new XRWebGLBinding(s,t),M=x.createProjectionLayer(yt),s.updateRenderState({layers:[M]}),e.setPixelRatio(1),e.setSize(M.textureWidth,M.textureHeight,!1),F=new Wi(M.textureWidth,M.textureHeight,{format:In,type:Xn,depthTexture:new Ec(M.textureWidth,M.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,Oe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}else{const Oe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(s,t,Oe),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),F=new Wi(y.framebufferWidth,y.framebufferHeight,{format:In,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(d),m=null,c=await s.requestReferenceSpace(h),Ct.setContext(s),Ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function me(ce){for(let Me=0;Me<ce.removed.length;Me++){const Oe=ce.removed[Me],be=D.indexOf(Oe);be>=0&&(D[be]=null,N[be].disconnect(Oe))}for(let Me=0;Me<ce.added.length;Me++){const Oe=ce.added[Me];let be=D.indexOf(Oe);if(be===-1){for(let yt=0;yt<N.length;yt++)if(yt>=D.length){D.push(Oe),be=yt;break}else if(D[yt]===null){D[yt]=Oe,be=yt;break}if(be===-1)break}const $e=N[be];$e&&$e.connect(Oe)}}const fe=new j,pe=new j;function se(ce,Me,Oe){fe.setFromMatrixPosition(Me.matrixWorld),pe.setFromMatrixPosition(Oe.matrixWorld);const be=fe.distanceTo(pe),$e=Me.projectionMatrix.elements,yt=Oe.projectionMatrix.elements,He=$e[14]/($e[10]-1),zt=$e[14]/($e[10]+1),Pt=($e[9]+1)/$e[5],ct=($e[9]-1)/$e[5],O=($e[8]-1)/$e[0],hn=(yt[8]+1)/yt[0],ft=He*O,ut=He*hn,Fe=be/(-O+hn),Nt=Fe*-O;if(Me.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(Nt),ce.translateZ(Fe),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),$e[10]===-1)ce.projectionMatrix.copy(Me.projectionMatrix),ce.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const Ge=He+Fe,L=zt+Fe,T=ft-Nt,K=ut+(be-Nt),le=Pt*zt/L*Ge,Z=ct*zt/L*Ge;ce.projectionMatrix.makePerspective(T,K,le,Z,Ge,L),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function Se(ce,Me){Me===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(Me.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(s===null)return;let Me=ce.near,Oe=ce.far;w.texture!==null&&(w.depthNear>0&&(Me=w.depthNear),w.depthFar>0&&(Oe=w.depthFar)),C.near=q.near=l.near=Me,C.far=q.far=l.far=Oe,(z!==C.near||ue!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,ue=C.far),l.layers.mask=ce.layers.mask|2,q.layers.mask=ce.layers.mask|4,C.layers.mask=l.layers.mask|q.layers.mask;const be=ce.parent,$e=C.cameras;Se(C,be);for(let yt=0;yt<$e.length;yt++)Se($e[yt],be);$e.length===2?se(C,l,q):C.projectionMatrix.copy(l.projectionMatrix),Ue(ce,C,be)};function Ue(ce,Me,Oe){Oe===null?ce.matrix.copy(Me.matrixWorld):(ce.matrix.copy(Oe.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(Me.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(Me.projectionMatrix),ce.projectionMatrixInverse.copy(Me.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=So*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(M===null&&y===null))return d},this.setFoveation=function(ce){d=ce,M!==null&&(M.fixedFoveation=ce),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ce)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let Ve=null;function at(ce,Me){if(v=Me.getViewerPose(m||c),b=Me,v!==null){const Oe=v.views;y!==null&&(e.setRenderTargetFramebuffer(F,y.framebuffer),e.setRenderTarget(F));let be=!1;Oe.length!==C.cameras.length&&(C.cameras.length=0,be=!0);for(let He=0;He<Oe.length;He++){const zt=Oe[He];let Pt=null;if(y!==null)Pt=y.getViewport(zt);else{const O=x.getViewSubImage(M,zt);Pt=O.viewport,He===0&&(e.setRenderTargetTextures(F,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(F))}let ct=R[He];ct===void 0&&(ct=new An,ct.layers.enable(He),ct.viewport=new Gt,R[He]=ct),ct.matrix.fromArray(zt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(zt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),He===0&&(C.matrix.copy(ct.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),be===!0&&C.cameras.push(ct)}const $e=s.enabledFeatures;if($e&&$e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){const He=x.getDepthInformation(Oe[0]);He&&He.isValid&&He.texture&&w.init(e,He,s.renderState)}}for(let Oe=0;Oe<N.length;Oe++){const be=D[Oe],$e=N[Oe];be!==null&&$e!==void 0&&$e.update(be,Me,m||c)}Ve&&Ve(ce,Me),Me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Me}),b=null}const Ct=new Ac;Ct.setAnimationLoop(at),this.setAnimationLoop=function(ce){Ve=ce},this.dispose=function(){}}}const Oi=new qn,_g=new Wt;function vg(i,e){function t(S,p){S.matrixAutoUpdate===!0&&S.updateMatrix(),p.value.copy(S.matrix)}function n(S,p){p.color.getRGB(S.fogColor.value,Mc(i)),p.isFog?(S.fogNear.value=p.near,S.fogFar.value=p.far):p.isFogExp2&&(S.fogDensity.value=p.density)}function s(S,p,F,N,D){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(S,p):p.isMeshToonMaterial?(a(S,p),x(S,p)):p.isMeshPhongMaterial?(a(S,p),v(S,p)):p.isMeshStandardMaterial?(a(S,p),M(S,p),p.isMeshPhysicalMaterial&&y(S,p,D)):p.isMeshMatcapMaterial?(a(S,p),b(S,p)):p.isMeshDepthMaterial?a(S,p):p.isMeshDistanceMaterial?(a(S,p),w(S,p)):p.isMeshNormalMaterial?a(S,p):p.isLineBasicMaterial?(c(S,p),p.isLineDashedMaterial&&h(S,p)):p.isPointsMaterial?d(S,p,F,N):p.isSpriteMaterial?m(S,p):p.isShadowMaterial?(S.color.value.copy(p.color),S.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(S,p){S.opacity.value=p.opacity,p.color&&S.diffuse.value.copy(p.color),p.emissive&&S.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(S.map.value=p.map,t(p.map,S.mapTransform)),p.alphaMap&&(S.alphaMap.value=p.alphaMap,t(p.alphaMap,S.alphaMapTransform)),p.bumpMap&&(S.bumpMap.value=p.bumpMap,t(p.bumpMap,S.bumpMapTransform),S.bumpScale.value=p.bumpScale,p.side===_n&&(S.bumpScale.value*=-1)),p.normalMap&&(S.normalMap.value=p.normalMap,t(p.normalMap,S.normalMapTransform),S.normalScale.value.copy(p.normalScale),p.side===_n&&S.normalScale.value.negate()),p.displacementMap&&(S.displacementMap.value=p.displacementMap,t(p.displacementMap,S.displacementMapTransform),S.displacementScale.value=p.displacementScale,S.displacementBias.value=p.displacementBias),p.emissiveMap&&(S.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,S.emissiveMapTransform)),p.specularMap&&(S.specularMap.value=p.specularMap,t(p.specularMap,S.specularMapTransform)),p.alphaTest>0&&(S.alphaTest.value=p.alphaTest);const F=e.get(p),N=F.envMap,D=F.envMapRotation;N&&(S.envMap.value=N,Oi.copy(D),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),S.envMapRotation.value.setFromMatrix4(_g.makeRotationFromEuler(Oi)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=p.reflectivity,S.ior.value=p.ior,S.refractionRatio.value=p.refractionRatio),p.lightMap&&(S.lightMap.value=p.lightMap,S.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,S.lightMapTransform)),p.aoMap&&(S.aoMap.value=p.aoMap,S.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,S.aoMapTransform))}function c(S,p){S.diffuse.value.copy(p.color),S.opacity.value=p.opacity,p.map&&(S.map.value=p.map,t(p.map,S.mapTransform))}function h(S,p){S.dashSize.value=p.dashSize,S.totalSize.value=p.dashSize+p.gapSize,S.scale.value=p.scale}function d(S,p,F,N){S.diffuse.value.copy(p.color),S.opacity.value=p.opacity,S.size.value=p.size*F,S.scale.value=N*.5,p.map&&(S.map.value=p.map,t(p.map,S.uvTransform)),p.alphaMap&&(S.alphaMap.value=p.alphaMap,t(p.alphaMap,S.alphaMapTransform)),p.alphaTest>0&&(S.alphaTest.value=p.alphaTest)}function m(S,p){S.diffuse.value.copy(p.color),S.opacity.value=p.opacity,S.rotation.value=p.rotation,p.map&&(S.map.value=p.map,t(p.map,S.mapTransform)),p.alphaMap&&(S.alphaMap.value=p.alphaMap,t(p.alphaMap,S.alphaMapTransform)),p.alphaTest>0&&(S.alphaTest.value=p.alphaTest)}function v(S,p){S.specular.value.copy(p.specular),S.shininess.value=Math.max(p.shininess,1e-4)}function x(S,p){p.gradientMap&&(S.gradientMap.value=p.gradientMap)}function M(S,p){S.metalness.value=p.metalness,p.metalnessMap&&(S.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,S.metalnessMapTransform)),S.roughness.value=p.roughness,p.roughnessMap&&(S.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,S.roughnessMapTransform)),p.envMap&&(S.envMapIntensity.value=p.envMapIntensity)}function y(S,p,F){S.ior.value=p.ior,p.sheen>0&&(S.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),S.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(S.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,S.sheenColorMapTransform)),p.sheenRoughnessMap&&(S.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,S.sheenRoughnessMapTransform))),p.clearcoat>0&&(S.clearcoat.value=p.clearcoat,S.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(S.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,S.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(S.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&S.clearcoatNormalScale.value.negate())),p.dispersion>0&&(S.dispersion.value=p.dispersion),p.iridescence>0&&(S.iridescence.value=p.iridescence,S.iridescenceIOR.value=p.iridescenceIOR,S.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(S.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,S.iridescenceMapTransform)),p.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),p.transmission>0&&(S.transmission.value=p.transmission,S.transmissionSamplerMap.value=F.texture,S.transmissionSamplerSize.value.set(F.width,F.height),p.transmissionMap&&(S.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,S.transmissionMapTransform)),S.thickness.value=p.thickness,p.thicknessMap&&(S.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=p.attenuationDistance,S.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(S.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(S.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=p.specularIntensity,S.specularColor.value.copy(p.specularColor),p.specularColorMap&&(S.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,S.specularColorMapTransform)),p.specularIntensityMap&&(S.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,p){p.matcap&&(S.matcap.value=p.matcap)}function w(S,p){const F=e.get(p).light;S.referencePosition.value.setFromMatrixPosition(F.matrixWorld),S.nearDistance.value=F.shadow.camera.near,S.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xg(i,e,t,n){let s={},a={},c=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(F,N){const D=N.program;n.uniformBlockBinding(F,D)}function m(F,N){let D=s[F.id];D===void 0&&(b(F),D=v(F),s[F.id]=D,F.addEventListener("dispose",S));const X=N.program;n.updateUBOMapping(F,X);const V=e.render.frame;a[F.id]!==V&&(M(F),a[F.id]=V)}function v(F){const N=x();F.__bindingPointIndex=N;const D=i.createBuffer(),X=F.__size,V=F.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,X,V),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,N,D),D}function x(){for(let F=0;F<h;F++)if(c.indexOf(F)===-1)return c.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function M(F){const N=s[F.id],D=F.uniforms,X=F.__cache;i.bindBuffer(i.UNIFORM_BUFFER,N);for(let V=0,l=D.length;V<l;V++){const q=Array.isArray(D[V])?D[V]:[D[V]];for(let R=0,C=q.length;R<C;R++){const z=q[R];if(y(z,V,R,X)===!0){const ue=z.__offset,Y=Array.isArray(z.value)?z.value:[z.value];let de=0;for(let me=0;me<Y.length;me++){const fe=Y[me],pe=w(fe);typeof fe=="number"||typeof fe=="boolean"?(z.__data[0]=fe,i.bufferSubData(i.UNIFORM_BUFFER,ue+de,z.__data)):fe.isMatrix3?(z.__data[0]=fe.elements[0],z.__data[1]=fe.elements[1],z.__data[2]=fe.elements[2],z.__data[3]=0,z.__data[4]=fe.elements[3],z.__data[5]=fe.elements[4],z.__data[6]=fe.elements[5],z.__data[7]=0,z.__data[8]=fe.elements[6],z.__data[9]=fe.elements[7],z.__data[10]=fe.elements[8],z.__data[11]=0):(fe.toArray(z.__data,de),de+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ue,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(F,N,D,X){const V=F.value,l=N+"_"+D;if(X[l]===void 0)return typeof V=="number"||typeof V=="boolean"?X[l]=V:X[l]=V.clone(),!0;{const q=X[l];if(typeof V=="number"||typeof V=="boolean"){if(q!==V)return X[l]=V,!0}else if(q.equals(V)===!1)return q.copy(V),!0}return!1}function b(F){const N=F.uniforms;let D=0;const X=16;for(let l=0,q=N.length;l<q;l++){const R=Array.isArray(N[l])?N[l]:[N[l]];for(let C=0,z=R.length;C<z;C++){const ue=R[C],Y=Array.isArray(ue.value)?ue.value:[ue.value];for(let de=0,me=Y.length;de<me;de++){const fe=Y[de],pe=w(fe),se=D%X,Se=se%pe.boundary,Ue=se+Se;D+=Se,Ue!==0&&X-Ue<pe.storage&&(D+=X-Ue),ue.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=D,D+=pe.storage}}}const V=D%X;return V>0&&(D+=X-V),F.__size=D,F.__cache={},this}function w(F){const N={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(N.boundary=4,N.storage=4):F.isVector2?(N.boundary=8,N.storage=8):F.isVector3||F.isColor?(N.boundary=16,N.storage=12):F.isVector4?(N.boundary=16,N.storage=16):F.isMatrix3?(N.boundary=48,N.storage=48):F.isMatrix4?(N.boundary=64,N.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),N}function S(F){const N=F.target;N.removeEventListener("dispose",S);const D=c.indexOf(N.__bindingPointIndex);c.splice(D,1),i.deleteBuffer(s[N.id]),delete s[N.id],delete a[N.id]}function p(){for(const F in s)i.deleteBuffer(s[F]);c=[],s={},a={}}return{bind:d,update:m,dispose:p}}class Mg{constructor(e={}){const{canvas:t=Zu(),context:n=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:M=!1}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=c;const b=new Uint32Array(4),w=new Int32Array(4);let S=null,p=null;const F=[],N=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let X=!1;this._outputColorSpace=bn;let V=0,l=0,q=null,R=-1,C=null;const z=new Gt,ue=new Gt;let Y=null;const de=new vt(0);let me=0,fe=t.width,pe=t.height,se=1,Se=null,Ue=null;const Ve=new Gt(0,0,fe,pe),at=new Gt(0,0,fe,pe);let Ct=!1;const ce=new Lo;let Me=!1,Oe=!1;const be=new Wt,$e=new Wt,yt=new j,He=new Gt,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function ct(){return q===null?se:1}let O=n;function hn(A,G){return t.getContext(A,G)}try{const A={alpha:!0,depth:s,stencil:a,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Eo}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",Te,!1),O===null){const G="webgl2";if(O=hn(G,A),O===null)throw hn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ft,ut,Fe,Nt,Ge,L,T,K,le,Z,re,ze,Ae,Ke,Ze,_e,Le,ke,je,De,xt,nt,Dt,k;function we(){ft=new Pp(O),ft.init(),nt=new fg(O,ft),ut=new Ep(O,ft,e,nt),Fe=new ug(O,ft),ut.reverseDepthBuffer&&M&&Fe.buffers.depth.setReversed(!0),Nt=new Up(O),Ge=new Zm,L=new hg(O,ft,Fe,Ge,ut,nt,Nt),T=new bp(D),K=new Rp(D),le=new Bh(O),Dt=new Sp(O,le),Z=new Dp(O,le,Nt,Dt),re=new Np(O,Z,le,Nt),je=new Ip(O,ut,L),_e=new Tp(Ge),ze=new Km(D,T,K,ft,ut,Dt,_e),Ae=new vg(D,Ge),Ke=new Qm,Ze=new sg(ft),ke=new Mp(D,T,K,Fe,re,y,d),Le=new lg(D,re,ut),k=new xg(O,Nt,ut,Fe),De=new yp(O,ft,Nt),xt=new Lp(O,ft,Nt),Nt.programs=ze.programs,D.capabilities=ut,D.extensions=ft,D.properties=Ge,D.renderLists=Ke,D.shadowMap=Le,D.state=Fe,D.info=Nt}we();const ie=new gg(D,O);this.xr=ie,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=ft.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ft.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(A){A!==void 0&&(se=A,this.setSize(fe,pe,!1))},this.getSize=function(A){return A.set(fe,pe)},this.setSize=function(A,G,Q=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}fe=A,pe=G,t.width=Math.floor(A*se),t.height=Math.floor(G*se),Q===!0&&(t.style.width=A+"px",t.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(fe*se,pe*se).floor()},this.setDrawingBufferSize=function(A,G,Q){fe=A,pe=G,se=Q,t.width=Math.floor(A*Q),t.height=Math.floor(G*Q),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(Ve)},this.setViewport=function(A,G,Q,ee){A.isVector4?Ve.set(A.x,A.y,A.z,A.w):Ve.set(A,G,Q,ee),Fe.viewport(z.copy(Ve).multiplyScalar(se).round())},this.getScissor=function(A){return A.copy(at)},this.setScissor=function(A,G,Q,ee){A.isVector4?at.set(A.x,A.y,A.z,A.w):at.set(A,G,Q,ee),Fe.scissor(ue.copy(at).multiplyScalar(se).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(A){Fe.setScissorTest(Ct=A)},this.setOpaqueSort=function(A){Se=A},this.setTransparentSort=function(A){Ue=A},this.getClearColor=function(A){return A.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,Q=!0){let ee=0;if(A){let W=!1;if(q!==null){const ve=q.texture.format;W=ve===Ro||ve===Co||ve===wo}if(W){const ve=q.texture.type,ye=ve===Xn||ve===Gi||ve===kr||ve===Vr||ve===bo||ve===Ao,Ie=ke.getClearColor(),Ne=ke.getClearAlpha(),et=Ie.r,Je=Ie.g,Xe=Ie.b;ye?(b[0]=et,b[1]=Je,b[2]=Xe,b[3]=Ne,O.clearBufferuiv(O.COLOR,0,b)):(w[0]=et,w[1]=Je,w[2]=Xe,w[3]=Ne,O.clearBufferiv(O.COLOR,0,w))}else ee|=O.COLOR_BUFFER_BIT}G&&(ee|=O.DEPTH_BUFFER_BIT),Q&&(ee|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),ke.dispose(),Ke.dispose(),Ze.dispose(),Ge.dispose(),T.dispose(),K.dispose(),re.dispose(),Dt.dispose(),k.dispose(),ze.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",jn),ie.removeEventListener("sessionend",Yn),Cn.stop()};function he(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const A=Nt.autoReset,G=Le.enabled,Q=Le.autoUpdate,ee=Le.needsUpdate,W=Le.type;we(),Nt.autoReset=A,Le.enabled=G,Le.autoUpdate=Q,Le.needsUpdate=ee,Le.type=W}function Te(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function qe(A){const G=A.target;G.removeEventListener("dispose",qe),dt(G)}function dt(A){Xt(A),Ge.remove(A)}function Xt(A){const G=Ge.get(A).programs;G!==void 0&&(G.forEach(function(Q){ze.releaseProgram(Q)}),A.isShaderMaterial&&ze.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,Q,ee,W,ve){G===null&&(G=zt);const ye=W.isMesh&&W.matrixWorld.determinant()<0,Ie=Gs(A,G,Q,ee,W);Fe.setMaterial(ee,ye);let Ne=Q.index,et=1;if(ee.wireframe===!0){if(Ne=Z.getWireframeAttribute(Q),Ne===void 0)return;et=2}const Je=Q.drawRange,Xe=Q.attributes.position;let Mt=Je.start*et,Et=(Je.start+Je.count)*et;ve!==null&&(Mt=Math.max(Mt,ve.start*et),Et=Math.min(Et,(ve.start+ve.count)*et)),Ne!==null?(Mt=Math.max(Mt,0),Et=Math.min(Et,Ne.count)):Xe!=null&&(Mt=Math.max(Mt,0),Et=Math.min(Et,Xe.count));const Ht=Et-Mt;if(Ht<0||Ht===1/0)return;Dt.setup(W,ee,Ie,Q,Ne);let pt,ht=De;if(Ne!==null&&(pt=le.get(Ne),ht=xt,ht.setIndex(pt)),W.isMesh)ee.wireframe===!0?(Fe.setLineWidth(ee.wireframeLinewidth*ct()),ht.setMode(O.LINES)):ht.setMode(O.TRIANGLES);else if(W.isLine){let We=ee.linewidth;We===void 0&&(We=1),Fe.setLineWidth(We*ct()),W.isLineSegments?ht.setMode(O.LINES):W.isLineLoop?ht.setMode(O.LINE_LOOP):ht.setMode(O.LINE_STRIP)}else W.isPoints?ht.setMode(O.POINTS):W.isSprite&&ht.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Is("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))ht.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const We=W._multiDrawStarts,Yt=W._multiDrawCounts,At=W._multiDrawCount,ln=Ne?le.get(Ne).bytesPerElement:1,$n=Ge.get(ee).currentProgram.getUniforms();for(let Qt=0;Qt<At;Qt++)$n.setValue(O,"_gl_DrawID",Qt),ht.render(We[Qt]/ln,Yt[Qt])}else if(W.isInstancedMesh)ht.renderInstances(Mt,Ht,W.count);else if(Q.isInstancedBufferGeometry){const We=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Yt=Math.min(Q.instanceCount,We);ht.renderInstances(Mt,Ht,Yt)}else ht.render(Mt,Ht)};function Rt(A,G,Q){A.transparent===!0&&A.side===si&&A.forceSinglePass===!1?(A.side=_n,A.needsUpdate=!0,$i(A,G,Q),A.side=bi,A.needsUpdate=!0,$i(A,G,Q),A.side=si):$i(A,G,Q)}this.compile=function(A,G,Q=null){Q===null&&(Q=A),p=Ze.get(Q),p.init(G),N.push(p),Q.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),A!==Q&&A.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const ee=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ve=W.material;if(ve)if(Array.isArray(ve))for(let ye=0;ye<ve.length;ye++){const Ie=ve[ye];Rt(Ie,Q,W),ee.add(Ie)}else Rt(ve,Q,W),ee.add(ve)}),p=N.pop(),ee},this.compileAsync=function(A,G,Q=null){const ee=this.compile(A,G,Q);return new Promise(W=>{function ve(){if(ee.forEach(function(ye){Ge.get(ye).currentProgram.isReady()&&ee.delete(ye)}),ee.size===0){W(A);return}setTimeout(ve,10)}ft.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let fn=null;function Sn(A){fn&&fn(A)}function jn(){Cn.stop()}function Yn(){Cn.start()}const Cn=new Ac;Cn.setAnimationLoop(Sn),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(A){fn=A,ie.setAnimationLoop(A),A===null?Cn.stop():Cn.start()},ie.addEventListener("sessionstart",jn),ie.addEventListener("sessionend",Yn),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(G),G=ie.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,G,q),p=Ze.get(A,N.length),p.init(G),N.push(p),$e.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ce.setFromProjectionMatrix($e),Oe=this.localClippingEnabled,Me=_e.init(this.clippingPlanes,Oe),S=Ke.get(A,F.length),S.init(),F.push(S),ie.enabled===!0&&ie.isPresenting===!0){const ve=D.xr.getDepthSensingMesh();ve!==null&&ci(ve,G,-1/0,D.sortObjects)}ci(A,G,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(Se,Ue),Pt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Pt&&ke.addToRenderList(S,A),this.info.render.frame++,Me===!0&&_e.beginShadows();const Q=p.state.shadowsArray;Le.render(Q,A,G),Me===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=S.opaque,W=S.transmissive;if(p.setupLights(),G.isArrayCamera){const ve=G.cameras;if(W.length>0)for(let ye=0,Ie=ve.length;ye<Ie;ye++){const Ne=ve[ye];Zr(ee,W,A,Ne)}Pt&&ke.render(A);for(let ye=0,Ie=ve.length;ye<Ie;ye++){const Ne=ve[ye];Kr(S,A,Ne,Ne.viewport)}}else W.length>0&&Zr(ee,W,A,G),Pt&&ke.render(A),Kr(S,A,G);q!==null&&l===0&&(L.updateMultisampleRenderTarget(q),L.updateRenderTargetMipmap(q)),A.isScene===!0&&A.onAfterRender(D,A,G),Dt.resetDefaultState(),R=-1,C=null,N.pop(),N.length>0?(p=N[N.length-1],Me===!0&&_e.setGlobalState(D.clippingPlanes,p.state.camera)):p=null,F.pop(),F.length>0?S=F[F.length-1]:S=null};function ci(A,G,Q,ee){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ce.intersectsSprite(A)){ee&&He.setFromMatrixPosition(A.matrixWorld).applyMatrix4($e);const ye=re.update(A),Ie=A.material;Ie.visible&&S.push(A,ye,Ie,Q,He.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ce.intersectsObject(A))){const ye=re.update(A),Ie=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),He.copy(A.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),He.copy(ye.boundingSphere.center)),He.applyMatrix4(A.matrixWorld).applyMatrix4($e)),Array.isArray(Ie)){const Ne=ye.groups;for(let et=0,Je=Ne.length;et<Je;et++){const Xe=Ne[et],Mt=Ie[Xe.materialIndex];Mt&&Mt.visible&&S.push(A,ye,Mt,Q,He.z,Xe)}}else Ie.visible&&S.push(A,ye,Ie,Q,He.z,null)}}const ve=A.children;for(let ye=0,Ie=ve.length;ye<Ie;ye++)ci(ve[ye],G,Q,ee)}function Kr(A,G,Q,ee){const W=A.opaque,ve=A.transmissive,ye=A.transparent;p.setupLightsView(Q),Me===!0&&_e.setGlobalState(D.clippingPlanes,Q),ee&&Fe.viewport(z.copy(ee)),W.length>0&&Yi(W,G,Q),ve.length>0&&Yi(ve,G,Q),ye.length>0&&Yi(ye,G,Q),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function Zr(A,G,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ee.id]===void 0&&(p.state.transmissionRenderTarget[ee.id]=new Wi(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?qr:Xn,minFilter:Vi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const ve=p.state.transmissionRenderTarget[ee.id],ye=ee.viewport||z;ve.setSize(ye.z*D.transmissionResolutionScale,ye.w*D.transmissionResolutionScale);const Ie=D.getRenderTarget();D.setRenderTarget(ve),D.getClearColor(de),me=D.getClearAlpha(),me<1&&D.setClearColor(16777215,.5),D.clear(),Pt&&ke.render(Q);const Ne=D.toneMapping;D.toneMapping=Ti;const et=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),p.setupLightsView(ee),Me===!0&&_e.setGlobalState(D.clippingPlanes,ee),Yi(A,Q,ee),L.updateMultisampleRenderTarget(ve),L.updateRenderTargetMipmap(ve),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Xe=0,Mt=G.length;Xe<Mt;Xe++){const Et=G[Xe],Ht=Et.object,pt=Et.geometry,ht=Et.material,We=Et.group;if(ht.side===si&&Ht.layers.test(ee.layers)){const Yt=ht.side;ht.side=_n,ht.needsUpdate=!0,br(Ht,Q,ee,pt,ht,We),ht.side=Yt,ht.needsUpdate=!0,Je=!0}}Je===!0&&(L.updateMultisampleRenderTarget(ve),L.updateRenderTargetMipmap(ve))}D.setRenderTarget(Ie),D.setClearColor(de,me),et!==void 0&&(ee.viewport=et),D.toneMapping=Ne}function Yi(A,G,Q){const ee=G.isScene===!0?G.overrideMaterial:null;for(let W=0,ve=A.length;W<ve;W++){const ye=A[W],Ie=ye.object,Ne=ye.geometry,et=ye.group;let Je=ye.material;Je.allowOverride===!0&&ee!==null&&(Je=ee),Ie.layers.test(Q.layers)&&br(Ie,G,Q,Ne,Je,et)}}function br(A,G,Q,ee,W,ve){A.onBeforeRender(D,G,Q,ee,W,ve),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(D,G,Q,ee,A,ve),W.transparent===!0&&W.side===si&&W.forceSinglePass===!1?(W.side=_n,W.needsUpdate=!0,D.renderBufferDirect(Q,G,ee,W,A,ve),W.side=bi,W.needsUpdate=!0,D.renderBufferDirect(Q,G,ee,W,A,ve),W.side=si):D.renderBufferDirect(Q,G,ee,W,A,ve),A.onAfterRender(D,G,Q,ee,W,ve)}function $i(A,G,Q){G.isScene!==!0&&(G=zt);const ee=Ge.get(A),W=p.state.lights,ve=p.state.shadowsArray,ye=W.state.version,Ie=ze.getParameters(A,W.state,ve,G,Q),Ne=ze.getProgramCacheKey(Ie);let et=ee.programs;ee.environment=A.isMeshStandardMaterial?G.environment:null,ee.fog=G.fog,ee.envMap=(A.isMeshStandardMaterial?K:T).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",qe),et=new Map,ee.programs=et);let Je=et.get(Ne);if(Je!==void 0){if(ee.currentProgram===Je&&ee.lightsStateVersion===ye)return Ar(A,Ie),Je}else Ie.uniforms=ze.getUniforms(A),A.onBeforeCompile(Ie,D),Je=ze.acquireProgram(Ie,Ne),et.set(Ne,Je),ee.uniforms=Ie.uniforms;const Xe=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=_e.uniform),Ar(A,Ie),ee.needsLights=Qr(A),ee.lightsStateVersion=ye,ee.needsLights&&(Xe.ambientLightColor.value=W.state.ambient,Xe.lightProbe.value=W.state.probe,Xe.directionalLights.value=W.state.directional,Xe.directionalLightShadows.value=W.state.directionalShadow,Xe.spotLights.value=W.state.spot,Xe.spotLightShadows.value=W.state.spotShadow,Xe.rectAreaLights.value=W.state.rectArea,Xe.ltc_1.value=W.state.rectAreaLTC1,Xe.ltc_2.value=W.state.rectAreaLTC2,Xe.pointLights.value=W.state.point,Xe.pointLightShadows.value=W.state.pointShadow,Xe.hemisphereLights.value=W.state.hemi,Xe.directionalShadowMap.value=W.state.directionalShadowMap,Xe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Xe.spotShadowMap.value=W.state.spotShadowMap,Xe.spotLightMatrix.value=W.state.spotLightMatrix,Xe.spotLightMap.value=W.state.spotLightMap,Xe.pointShadowMap.value=W.state.pointShadowMap,Xe.pointShadowMatrix.value=W.state.pointShadowMatrix),ee.currentProgram=Je,ee.uniformsList=null,Je}function Jr(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=Ns.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function Ar(A,G){const Q=Ge.get(A);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.batchingColor=G.batchingColor,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function Gs(A,G,Q,ee,W){G.isScene!==!0&&(G=zt),L.resetTextureUnits();const ve=G.fog,ye=ee.isMeshStandardMaterial?G.environment:null,Ie=q===null?D.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Sr,Ne=(ee.isMeshStandardMaterial?K:T).get(ee.envMap||ye),et=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Je=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Xe=!!Q.morphAttributes.position,Mt=!!Q.morphAttributes.normal,Et=!!Q.morphAttributes.color;let Ht=Ti;ee.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ht=D.toneMapping);const pt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ht=pt!==void 0?pt.length:0,We=Ge.get(ee),Yt=p.state.lights;if(Me===!0&&(Oe===!0||A!==C)){const en=A===C&&ee.id===R;_e.setState(ee,A,en)}let At=!1;ee.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Yt.state.version||We.outputColorSpace!==Ie||W.isBatchedMesh&&We.batching===!1||!W.isBatchedMesh&&We.batching===!0||W.isBatchedMesh&&We.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&We.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&We.instancing===!1||!W.isInstancedMesh&&We.instancing===!0||W.isSkinnedMesh&&We.skinning===!1||!W.isSkinnedMesh&&We.skinning===!0||W.isInstancedMesh&&We.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&We.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&We.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&We.instancingMorph===!1&&W.morphTexture!==null||We.envMap!==Ne||ee.fog===!0&&We.fog!==ve||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==_e.numPlanes||We.numIntersection!==_e.numIntersection)||We.vertexAlphas!==et||We.vertexTangents!==Je||We.morphTargets!==Xe||We.morphNormals!==Mt||We.morphColors!==Et||We.toneMapping!==Ht||We.morphTargetsCount!==ht)&&(At=!0):(At=!0,We.__version=ee.version);let ln=We.currentProgram;At===!0&&(ln=$i(ee,G,W));let $n=!1,Qt=!1,hi=!1;const Ft=ln.getUniforms(),dn=We.uniforms;if(Fe.useProgram(ln.program)&&($n=!0,Qt=!0,hi=!0),ee.id!==R&&(R=ee.id,Qt=!0),$n||C!==A){Fe.buffers.depth.getReversed()?(be.copy(A.projectionMatrix),Qu(be),eh(be),Ft.setValue(O,"projectionMatrix",be)):Ft.setValue(O,"projectionMatrix",A.projectionMatrix),Ft.setValue(O,"viewMatrix",A.matrixWorldInverse);const qt=Ft.map.cameraPosition;qt!==void 0&&qt.setValue(O,yt.setFromMatrixPosition(A.matrixWorld)),ut.logarithmicDepthBuffer&&Ft.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Ft.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Qt=!0,hi=!0)}if(W.isSkinnedMesh){Ft.setOptional(O,W,"bindMatrix"),Ft.setOptional(O,W,"bindMatrixInverse");const en=W.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Ft.setValue(O,"boneTexture",en.boneTexture,L))}W.isBatchedMesh&&(Ft.setOptional(O,W,"batchingTexture"),Ft.setValue(O,"batchingTexture",W._matricesTexture,L),Ft.setOptional(O,W,"batchingIdTexture"),Ft.setValue(O,"batchingIdTexture",W._indirectTexture,L),Ft.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&Ft.setValue(O,"batchingColorTexture",W._colorsTexture,L));const Bt=Q.morphAttributes;if((Bt.position!==void 0||Bt.normal!==void 0||Bt.color!==void 0)&&je.update(W,Q,ln),(Qt||We.receiveShadow!==W.receiveShadow)&&(We.receiveShadow=W.receiveShadow,Ft.setValue(O,"receiveShadow",W.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(dn.envMap.value=Ne,dn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&G.environment!==null&&(dn.envMapIntensity.value=G.environmentIntensity),Qt&&(Ft.setValue(O,"toneMappingExposure",D.toneMappingExposure),We.needsLights&&ui(dn,hi),ve&&ee.fog===!0&&Ae.refreshFogUniforms(dn,ve),Ae.refreshMaterialUniforms(dn,ee,se,pe,p.state.transmissionRenderTarget[A.id]),Ns.upload(O,Jr(We),dn,L)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ns.upload(O,Jr(We),dn,L),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Ft.setValue(O,"center",W.center),Ft.setValue(O,"modelViewMatrix",W.modelViewMatrix),Ft.setValue(O,"normalMatrix",W.normalMatrix),Ft.setValue(O,"modelMatrix",W.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const en=ee.uniformsGroups;for(let qt=0,Rr=en.length;qt<Rr;qt++){const Kn=en[qt];k.update(Kn,ln),k.bind(Kn,ln)}}return ln}function ui(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Qr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return l},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,G,Q){const ee=Ge.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),Ge.get(A.texture).__webglTexture=G,Ge.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:Q,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){const Q=Ge.get(A);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0};const wr=O.createFramebuffer();this.setRenderTarget=function(A,G=0,Q=0){q=A,V=G,l=Q;let ee=!0,W=null,ve=!1,ye=!1;if(A){const Ne=Ge.get(A);if(Ne.__useDefaultFramebuffer!==void 0)Fe.bindFramebuffer(O.FRAMEBUFFER,null),ee=!1;else if(Ne.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Ne.__hasExternalTextures)L.rebindTextures(A,Ge.get(A.texture).__webglTexture,Ge.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xe=A.depthTexture;if(Ne.__boundDepthTexture!==Xe){if(Xe!==null&&Ge.has(Xe)&&(A.width!==Xe.image.width||A.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const et=A.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(ye=!0);const Je=Ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[G])?W=Je[G][Q]:W=Je[G],ve=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?W=Ge.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?W=Je[Q]:W=Je,z.copy(A.viewport),ue.copy(A.scissor),Y=A.scissorTest}else z.copy(Ve).multiplyScalar(se).floor(),ue.copy(at).multiplyScalar(se).floor(),Y=Ct;if(Q!==0&&(W=wr),Fe.bindFramebuffer(O.FRAMEBUFFER,W)&&ee&&Fe.drawBuffers(A,W),Fe.viewport(z),Fe.scissor(ue),Fe.setScissorTest(Y),ve){const Ne=Ge.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ne.__webglTexture,Q)}else if(ye){const Ne=Ge.get(A.texture),et=G;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ne.__webglTexture,Q,et)}else if(A!==null&&Q!==0){const Ne=Ge.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ne.__webglTexture,Q)}R=-1},this.readRenderTargetPixels=function(A,G,Q,ee,W,ve,ye){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Ie=Ie[ye]),Ie){Fe.bindFramebuffer(O.FRAMEBUFFER,Ie);try{const Ne=A.texture,et=Ne.format,Je=Ne.type;if(!ut.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-ee&&Q>=0&&Q<=A.height-W&&O.readPixels(G,Q,ee,W,nt.convert(et),nt.convert(Je),ve)}finally{const Ne=q!==null?Ge.get(q).__webglFramebuffer:null;Fe.bindFramebuffer(O.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(A,G,Q,ee,W,ve,ye){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Ie=Ie[ye]),Ie)if(G>=0&&G<=A.width-ee&&Q>=0&&Q<=A.height-W){Fe.bindFramebuffer(O.FRAMEBUFFER,Ie);const Ne=A.texture,et=Ne.format,Je=Ne.type;if(!ut.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Xe),O.bufferData(O.PIXEL_PACK_BUFFER,ve.byteLength,O.STREAM_READ),O.readPixels(G,Q,ee,W,nt.convert(et),nt.convert(Je),0);const Mt=q!==null?Ge.get(q).__webglFramebuffer:null;Fe.bindFramebuffer(O.FRAMEBUFFER,Mt);const Et=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Ju(O,Et,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Xe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ve),O.deleteBuffer(Xe),O.deleteSync(Et),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,Q=0){const ee=Math.pow(2,-Q),W=Math.floor(A.image.width*ee),ve=Math.floor(A.image.height*ee),ye=G!==null?G.x:0,Ie=G!==null?G.y:0;L.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,ye,Ie,W,ve),Fe.unbindTexture()};const Cr=O.createFramebuffer(),Ki=O.createFramebuffer();this.copyTextureToTexture=function(A,G,Q=null,ee=null,W=0,ve=null){ve===null&&(W!==0?(Is("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=W,W=0):ve=0);let ye,Ie,Ne,et,Je,Xe,Mt,Et,Ht;const pt=A.isCompressedTexture?A.mipmaps[ve]:A.image;if(Q!==null)ye=Q.max.x-Q.min.x,Ie=Q.max.y-Q.min.y,Ne=Q.isBox3?Q.max.z-Q.min.z:1,et=Q.min.x,Je=Q.min.y,Xe=Q.isBox3?Q.min.z:0;else{const Bt=Math.pow(2,-W);ye=Math.floor(pt.width*Bt),Ie=Math.floor(pt.height*Bt),A.isDataArrayTexture?Ne=pt.depth:A.isData3DTexture?Ne=Math.floor(pt.depth*Bt):Ne=1,et=0,Je=0,Xe=0}ee!==null?(Mt=ee.x,Et=ee.y,Ht=ee.z):(Mt=0,Et=0,Ht=0);const ht=nt.convert(G.format),We=nt.convert(G.type);let Yt;G.isData3DTexture?(L.setTexture3D(G,0),Yt=O.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(L.setTexture2DArray(G,0),Yt=O.TEXTURE_2D_ARRAY):(L.setTexture2D(G,0),Yt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);const At=O.getParameter(O.UNPACK_ROW_LENGTH),ln=O.getParameter(O.UNPACK_IMAGE_HEIGHT),$n=O.getParameter(O.UNPACK_SKIP_PIXELS),Qt=O.getParameter(O.UNPACK_SKIP_ROWS),hi=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,pt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,et),O.pixelStorei(O.UNPACK_SKIP_ROWS,Je),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Xe);const Ft=A.isDataArrayTexture||A.isData3DTexture,dn=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const Bt=Ge.get(A),en=Ge.get(G),qt=Ge.get(Bt.__renderTarget),Rr=Ge.get(en.__renderTarget);Fe.bindFramebuffer(O.READ_FRAMEBUFFER,qt.__webglFramebuffer),Fe.bindFramebuffer(O.DRAW_FRAMEBUFFER,Rr.__webglFramebuffer);for(let Kn=0;Kn<Ne;Kn++)Ft&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ge.get(A).__webglTexture,W,Xe+Kn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ge.get(G).__webglTexture,ve,Ht+Kn)),O.blitFramebuffer(et,Je,ye,Ie,Mt,Et,ye,Ie,O.DEPTH_BUFFER_BIT,O.NEAREST);Fe.bindFramebuffer(O.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||Ge.has(A)){const Bt=Ge.get(A),en=Ge.get(G);Fe.bindFramebuffer(O.READ_FRAMEBUFFER,Cr),Fe.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ki);for(let qt=0;qt<Ne;qt++)Ft?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Bt.__webglTexture,W,Xe+qt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Bt.__webglTexture,W),dn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,en.__webglTexture,ve,Ht+qt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,en.__webglTexture,ve),W!==0?O.blitFramebuffer(et,Je,ye,Ie,Mt,Et,ye,Ie,O.COLOR_BUFFER_BIT,O.NEAREST):dn?O.copyTexSubImage3D(Yt,ve,Mt,Et,Ht+qt,et,Je,ye,Ie):O.copyTexSubImage2D(Yt,ve,Mt,Et,et,Je,ye,Ie);Fe.bindFramebuffer(O.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else dn?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Yt,ve,Mt,Et,Ht,ye,Ie,Ne,ht,We,pt.data):G.isCompressedArrayTexture?O.compressedTexSubImage3D(Yt,ve,Mt,Et,Ht,ye,Ie,Ne,ht,pt.data):O.texSubImage3D(Yt,ve,Mt,Et,Ht,ye,Ie,Ne,ht,We,pt):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ve,Mt,Et,ye,Ie,ht,We,pt.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ve,Mt,Et,pt.width,pt.height,ht,pt.data):O.texSubImage2D(O.TEXTURE_2D,ve,Mt,Et,ye,Ie,ht,We,pt);O.pixelStorei(O.UNPACK_ROW_LENGTH,At),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ln),O.pixelStorei(O.UNPACK_SKIP_PIXELS,$n),O.pixelStorei(O.UNPACK_SKIP_ROWS,Qt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,hi),ve===0&&G.generateMipmaps&&O.generateMipmap(Yt),Fe.unbindTexture()},this.copyTextureToTexture3D=function(A,G,Q=null,ee=null,W=0){return Is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,G,Q,ee,W)},this.initRenderTarget=function(A){Ge.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Fe.unbindTexture()},this.resetState=function(){V=0,l=0,q=null,Fe.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}const jl={type:"change"},No={type:"start"},Dc={type:"end"},ws=new pc,Yl=new Si,Sg=Math.cos(70*Ku.DEG2RAD),Kt=new j,gn=2*Math.PI,It={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ia=1e-6;class yg extends Fh{constructor(e,t=null){super(e,t),this.state=It.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mr.ROTATE,MIDDLE:mr.DOLLY,RIGHT:mr.PAN},this.touches={ONE:dr.ROTATE,TWO:dr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new Xi,this._lastTargetPosition=new j,this._quat=new Xi().setFromUnitVectors(e.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sl,this._sphericalDelta=new Sl,this._scale=1,this._panOffset=new j,this._rotateStart=new st,this._rotateEnd=new st,this._rotateDelta=new st,this._panStart=new st,this._panEnd=new st,this._panDelta=new st,this._dollyStart=new st,this._dollyEnd=new st,this._dollyDelta=new st,this._dollyDirection=new j,this._mouse=new st,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Tg.bind(this),this._onPointerDown=Eg.bind(this),this._onPointerUp=bg.bind(this),this._onContextMenu=Lg.bind(this),this._onMouseWheel=Cg.bind(this),this._onKeyDown=Rg.bind(this),this._onTouchStart=Pg.bind(this),this._onTouchMove=Dg.bind(this),this._onMouseDown=Ag.bind(this),this._onMouseMove=wg.bind(this),this._interceptControlDown=Ug.bind(this),this._interceptControlUp=Ig.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jl),this.update(),this.state=It.NONE}update(e=null){const t=this.object.position;Kt.copy(t).sub(this.target),Kt.applyQuaternion(this._quat),this._spherical.setFromVector3(Kt),this.autoRotate&&this.state===It.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=gn:n>Math.PI&&(n-=gn),s<-Math.PI?s+=gn:s>Math.PI&&(s-=gn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=c!=this._spherical.radius}if(Kt.setFromSpherical(this._spherical),Kt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const h=Kt.length();c=this._clampDistance(h*this._scale);const d=h-c;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),a=!!d}else if(this.object.isOrthographicCamera){const h=new j(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=d!==this.object.zoom;const m=new j(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(h),this.object.updateMatrixWorld(),c=Kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(ws.origin.copy(this.object.position),ws.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ws.direction))<Sg?this.object.lookAt(this.target):(Yl.setFromNormalAndCoplanarPoint(this.object.up,this.target),ws.intersectPlane(Yl,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Ia||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ia||this._lastTargetPosition.distanceToSquared(this.target)>Ia?(this.dispatchEvent(jl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?gn/60*this.autoRotateSpeed*e:gn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Kt.setFromMatrixColumn(t,0),Kt.multiplyScalar(-e),this._panOffset.add(Kt)}_panUp(e,t){this.screenSpacePanning===!0?Kt.setFromMatrixColumn(t,1):(Kt.setFromMatrixColumn(t,0),Kt.crossVectors(this.object.up,Kt)),Kt.multiplyScalar(e),this._panOffset.add(Kt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Kt.copy(s).sub(this.target);let a=Kt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,a=t-n.top,c=n.width,h=n.height;this._mouse.x=s/c*2-1,this._mouse.y=-(a/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(c,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new st,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Eg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Tg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function bg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Dc),this.state=It.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Ag(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case mr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=It.DOLLY;break;case mr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=It.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=It.ROTATE}break;case mr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=It.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=It.PAN}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(No)}function wg(i){switch(this.state){case It.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case It.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case It.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Cg(i){this.enabled===!1||this.enableZoom===!1||this.state!==It.NONE||(i.preventDefault(),this.dispatchEvent(No),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Dc))}function Rg(i){this.enabled!==!1&&this._handleKeyDown(i)}function Pg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case dr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=It.TOUCH_ROTATE;break;case dr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=It.TOUCH_PAN;break;default:this.state=It.NONE}break;case 2:switch(this.touches.TWO){case dr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=It.TOUCH_DOLLY_PAN;break;case dr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=It.TOUCH_DOLLY_ROTATE;break;default:this.state=It.NONE}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(No)}function Dg(i){switch(this._trackPointer(i),this.state){case It.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case It.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case It.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case It.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=It.NONE}}function Lg(i){this.enabled!==!1&&i.preventDefault()}function Ug(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ig(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Lc extends An{constructor(t,n,s,a,c){super(t,n,s,a);kt(this,"controls");this.controls=new yg(this,c)}update(){this.controls.update()}}class Ng extends Lc{constructor(t,n,s,a,c){super(t,n,s,a,c);kt(this,"target");kt(this,"lastTargetPos")}setTarget(t,n){this.target=t,this.position.copy(t.position).add(n)}update(){if(super.update(),!!this.target){if(this.lastTargetPos){const t=this.target.position,n=this.lastTargetPos.sub(t);this.position.add(n)}this.lastTargetPos=this.target.position}}}class Uc{constructor(){kt(this,"children",[])}add(e){this.children.push(e)}update(e){for(const t of this.children)t.update(e)}}class Ic extends Uc{constructor(t){super();kt(this,"triggers",[]);kt(this,"mesh");this.mesh=t}addDependency(t,n){this.triggers.push([t,n])}update(t){super.update(t);for(const[n,s]of this.triggers)n()&&s()}}function Nc(i,e){i.updateWorldMatrix(!0,!1),e.updateWorldMatrix(!0,!1);const t=new qi().setFromObject(i),n=new qi().setFromObject(e);return t.intersectsBox(n)}const Fs=new j(0,1,0),Fg=.8,$l=2,Og=.3,Bg=.5,zg=5*Math.PI/12;class Xr extends Ic{constructor(t,n,s){const a=new Er(Fg,$l,Og);a.translate(0,$l/2,-.3/2);super(new wn(a,n));kt(this,"collided",!1);kt(this,"fallen",!1);kt(this,"fallenMat");kt(this,"fwdAxis");kt(this,"collideNodes",[]);this.mesh.castShadow=!0,this.mesh.translateOnAxis(Fs,-2/2),this.fallenMat=s,this.fwdAxis=t.clone().normalize(),this.mesh.rotateY(new j(0,0,1).angleTo(t))}setPosition(t,n,s){this.mesh.position.set(t,n,s),this.mesh.translateOnAxis(Fs,-2/2)}addCollidable(t){this.collideNodes.push(t)}topple(){let t=0;const n=new j().crossVectors(Fs,this.fwdAxis).normalize(),s=this.collideNodes.length>0?zg:Math.PI/2;this.addDependency(()=>t<s,()=>{this.update=a=>{if(this.fallen)return;for(const h of this.collideNodes)h instanceof Xr&&Nc(this.mesh,h.mesh)&&(this.collided=!0,h.topple(),console.info(`${this} collided with ${h}`));if(t>=s){this.fallen=!0,this.mesh.material=this.fallenMat;return}const c=Bg*a;t+=c,this.mesh.rotateOnWorldAxis(n,c)}})}}const Kl=1,Hg=.5;class kg extends Ic{constructor(t,n){super(new wn(new Uo(Kl),n));kt(this,"collided",!1);kt(this,"fwdAxis");kt(this,"collideNodes",[]);this.mesh.castShadow=!0,this.fwdAxis=t.clone().normalize()}addCollidable(t){this.collideNodes.push(t)}roll(){const t=new j().crossVectors(Fs,this.fwdAxis).normalize();this.addDependency(()=>!this.collided,()=>{this.update=n=>{if(this.collided)return;for(const c of this.collideNodes)c instanceof Xr&&Nc(this.mesh,c.mesh)&&(console.info("sphere collided with domino"),this.collided=!0,c.topple());const s=Hg*n;this.mesh.rotateOnAxis(t,s);const a=this.fwdAxis.clone().multiplyScalar(s*Kl);this.mesh.position.add(a)}})}}function Vg(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Os={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var Gg=Os.exports,Zl;function Wg(){return Zl||(Zl=1,function(i){(function(e,t){i.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:Gg,function(e,t){var n=[],s=Object.getPrototypeOf,a=n.slice,c=n.flat?function(r){return n.flat.call(r)}:function(r){return n.concat.apply([],r)},h=n.push,d=n.indexOf,m={},v=m.toString,x=m.hasOwnProperty,M=x.toString,y=M.call(Object),b={},w=function(o){return typeof o=="function"&&typeof o.nodeType!="number"&&typeof o.item!="function"},S=function(o){return o!=null&&o===o.window},p=e.document,F={type:!0,src:!0,nonce:!0,noModule:!0};function N(r,o,u){u=u||p;var f,g,_=u.createElement("script");if(_.text=r,o)for(f in F)g=o[f]||o.getAttribute&&o.getAttribute(f),g&&_.setAttribute(f,g);u.head.appendChild(_).parentNode.removeChild(_)}function D(r){return r==null?r+"":typeof r=="object"||typeof r=="function"?m[v.call(r)]||"object":typeof r}var X="3.7.1",V=/HTML$/i,l=function(r,o){return new l.fn.init(r,o)};l.fn=l.prototype={jquery:X,constructor:l,length:0,toArray:function(){return a.call(this)},get:function(r){return r==null?a.call(this):r<0?this[r+this.length]:this[r]},pushStack:function(r){var o=l.merge(this.constructor(),r);return o.prevObject=this,o},each:function(r){return l.each(this,r)},map:function(r){return this.pushStack(l.map(this,function(o,u){return r.call(o,u,o)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(l.grep(this,function(r,o){return(o+1)%2}))},odd:function(){return this.pushStack(l.grep(this,function(r,o){return o%2}))},eq:function(r){var o=this.length,u=+r+(r<0?o:0);return this.pushStack(u>=0&&u<o?[this[u]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:n.sort,splice:n.splice},l.extend=l.fn.extend=function(){var r,o,u,f,g,_,E=arguments[0]||{},I=1,U=arguments.length,H=!1;for(typeof E=="boolean"&&(H=E,E=arguments[I]||{},I++),typeof E!="object"&&!w(E)&&(E={}),I===U&&(E=this,I--);I<U;I++)if((r=arguments[I])!=null)for(o in r)f=r[o],!(o==="__proto__"||E===f)&&(H&&f&&(l.isPlainObject(f)||(g=Array.isArray(f)))?(u=E[o],g&&!Array.isArray(u)?_=[]:!g&&!l.isPlainObject(u)?_={}:_=u,g=!1,E[o]=l.extend(H,_,f)):f!==void 0&&(E[o]=f));return E},l.extend({expando:"jQuery"+(X+Math.random()).replace(/\D/g,""),isReady:!0,error:function(r){throw new Error(r)},noop:function(){},isPlainObject:function(r){var o,u;return!r||v.call(r)!=="[object Object]"?!1:(o=s(r),o?(u=x.call(o,"constructor")&&o.constructor,typeof u=="function"&&M.call(u)===y):!0)},isEmptyObject:function(r){var o;for(o in r)return!1;return!0},globalEval:function(r,o,u){N(r,{nonce:o&&o.nonce},u)},each:function(r,o){var u,f=0;if(q(r))for(u=r.length;f<u&&o.call(r[f],f,r[f])!==!1;f++);else for(f in r)if(o.call(r[f],f,r[f])===!1)break;return r},text:function(r){var o,u="",f=0,g=r.nodeType;if(!g)for(;o=r[f++];)u+=l.text(o);return g===1||g===11?r.textContent:g===9?r.documentElement.textContent:g===3||g===4?r.nodeValue:u},makeArray:function(r,o){var u=o||[];return r!=null&&(q(Object(r))?l.merge(u,typeof r=="string"?[r]:r):h.call(u,r)),u},inArray:function(r,o,u){return o==null?-1:d.call(o,r,u)},isXMLDoc:function(r){var o=r&&r.namespaceURI,u=r&&(r.ownerDocument||r).documentElement;return!V.test(o||u&&u.nodeName||"HTML")},merge:function(r,o){for(var u=+o.length,f=0,g=r.length;f<u;f++)r[g++]=o[f];return r.length=g,r},grep:function(r,o,u){for(var f,g=[],_=0,E=r.length,I=!u;_<E;_++)f=!o(r[_],_),f!==I&&g.push(r[_]);return g},map:function(r,o,u){var f,g,_=0,E=[];if(q(r))for(f=r.length;_<f;_++)g=o(r[_],_,u),g!=null&&E.push(g);else for(_ in r)g=o(r[_],_,u),g!=null&&E.push(g);return c(E)},guid:1,support:b}),typeof Symbol=="function"&&(l.fn[Symbol.iterator]=n[Symbol.iterator]),l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(r,o){m["[object "+o+"]"]=o.toLowerCase()});function q(r){var o=!!r&&"length"in r&&r.length,u=D(r);return w(r)||S(r)?!1:u==="array"||o===0||typeof o=="number"&&o>0&&o-1 in r}function R(r,o){return r.nodeName&&r.nodeName.toLowerCase()===o.toLowerCase()}var C=n.pop,z=n.sort,ue=n.splice,Y="[\\x20\\t\\r\\n\\f]",de=new RegExp("^"+Y+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Y+"+$","g");l.contains=function(r,o){var u=o&&o.parentNode;return r===u||!!(u&&u.nodeType===1&&(r.contains?r.contains(u):r.compareDocumentPosition&&r.compareDocumentPosition(u)&16))};var me=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function fe(r,o){return o?r==="\0"?"�":r.slice(0,-1)+"\\"+r.charCodeAt(r.length-1).toString(16)+" ":"\\"+r}l.escapeSelector=function(r){return(r+"").replace(me,fe)};var pe=p,se=h;(function(){var r,o,u,f,g,_=se,E,I,U,H,ne,oe=l.expando,J=0,ge=0,tt=es(),Tt=es(),ot=es(),nn=es(),$t=function(P,B){return P===B&&(g=!0),0},Fn="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",On="(?:\\\\[\\da-fA-F]{1,6}"+Y+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",St="\\["+Y+"*("+On+")(?:"+Y+"*([*^$|!~]?=)"+Y+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+On+"))|)"+Y+"*\\]",Pi=":("+On+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+St+")*)|.*)\\)|)",bt=new RegExp(Y+"+","g"),Vt=new RegExp("^"+Y+"*,"+Y+"*"),Lr=new RegExp("^"+Y+"*([>+~]|"+Y+")"+Y+"*"),Zs=new RegExp(Y+"|>"),Bn=new RegExp(Pi),Ur=new RegExp("^"+On+"$"),zn={ID:new RegExp("^#("+On+")"),CLASS:new RegExp("^\\.("+On+")"),TAG:new RegExp("^("+On+"|[*])"),ATTR:new RegExp("^"+St),PSEUDO:new RegExp("^"+Pi),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Y+"*(even|odd|(([+-]|)(\\d*)n|)"+Y+"*(?:([+-]|)"+Y+"*(\\d+)|))"+Y+"*\\)|)","i"),bool:new RegExp("^(?:"+Fn+")$","i"),needsContext:new RegExp("^"+Y+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Y+"*((?:-\\d)?\\d*)"+Y+"*\\)|)(?=[^-]|$)","i")},fi=/^(?:input|select|textarea|button)$/i,di=/^h\d$/i,yn=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Js=/[+~]/,Zn=new RegExp("\\\\[\\da-fA-F]{1,6}"+Y+"?|\\\\([^\\r\\n\\f])","g"),Jn=function(P,B){var $="0x"+P.slice(1)-65536;return B||($<0?String.fromCharCode($+65536):String.fromCharCode($>>10|55296,$&1023|56320))},Qc=function(){pi()},eu=ns(function(P){return P.disabled===!0&&R(P,"fieldset")},{dir:"parentNode",next:"legend"});function tu(){try{return E.activeElement}catch{}}try{_.apply(n=a.call(pe.childNodes),pe.childNodes),n[pe.childNodes.length].nodeType}catch{_={apply:function(B,$){se.apply(B,a.call($))},call:function(B){se.apply(B,a.call(arguments,1))}}}function Lt(P,B,$,te){var ae,xe,Re,Be,Pe,mt,Qe,it=B&&B.ownerDocument,gt=B?B.nodeType:9;if($=$||[],typeof P!="string"||!P||gt!==1&&gt!==9&&gt!==11)return $;if(!te&&(pi(B),B=B||E,U)){if(gt!==11&&(Pe=yn.exec(P)))if(ae=Pe[1]){if(gt===9)if(Re=B.getElementById(ae)){if(Re.id===ae)return _.call($,Re),$}else return $;else if(it&&(Re=it.getElementById(ae))&&Lt.contains(B,Re)&&Re.id===ae)return _.call($,Re),$}else{if(Pe[2])return _.apply($,B.getElementsByTagName(P)),$;if((ae=Pe[3])&&B.getElementsByClassName)return _.apply($,B.getElementsByClassName(ae)),$}if(!nn[P+" "]&&(!H||!H.test(P))){if(Qe=P,it=B,gt===1&&(Zs.test(P)||Lr.test(P))){for(it=Js.test(P)&&Qs(B.parentNode)||B,(it!=B||!b.scope)&&((Be=B.getAttribute("id"))?Be=l.escapeSelector(Be):B.setAttribute("id",Be=oe)),mt=Ir(P),xe=mt.length;xe--;)mt[xe]=(Be?"#"+Be:":scope")+" "+ts(mt[xe]);Qe=mt.join(",")}try{return _.apply($,it.querySelectorAll(Qe)),$}catch{nn(P,!0)}finally{Be===oe&&B.removeAttribute("id")}}}return jo(P.replace(de,"$1"),B,$,te)}function es(){var P=[];function B($,te){return P.push($+" ")>o.cacheLength&&delete B[P.shift()],B[$+" "]=te}return B}function Rn(P){return P[oe]=!0,P}function Zi(P){var B=E.createElement("fieldset");try{return!!P(B)}catch{return!1}finally{B.parentNode&&B.parentNode.removeChild(B),B=null}}function nu(P){return function(B){return R(B,"input")&&B.type===P}}function iu(P){return function(B){return(R(B,"input")||R(B,"button"))&&B.type===P}}function Xo(P){return function(B){return"form"in B?B.parentNode&&B.disabled===!1?"label"in B?"label"in B.parentNode?B.parentNode.disabled===P:B.disabled===P:B.isDisabled===P||B.isDisabled!==!P&&eu(B)===P:B.disabled===P:"label"in B?B.disabled===P:!1}}function Di(P){return Rn(function(B){return B=+B,Rn(function($,te){for(var ae,xe=P([],$.length,B),Re=xe.length;Re--;)$[ae=xe[Re]]&&($[ae]=!(te[ae]=$[ae]))})})}function Qs(P){return P&&typeof P.getElementsByTagName<"u"&&P}function pi(P){var B,$=P?P.ownerDocument||P:pe;return $==E||$.nodeType!==9||!$.documentElement||(E=$,I=E.documentElement,U=!l.isXMLDoc(E),ne=I.matches||I.webkitMatchesSelector||I.msMatchesSelector,I.msMatchesSelector&&pe!=E&&(B=E.defaultView)&&B.top!==B&&B.addEventListener("unload",Qc),b.getById=Zi(function(te){return I.appendChild(te).id=l.expando,!E.getElementsByName||!E.getElementsByName(l.expando).length}),b.disconnectedMatch=Zi(function(te){return ne.call(te,"*")}),b.scope=Zi(function(){return E.querySelectorAll(":scope")}),b.cssHas=Zi(function(){try{return E.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),b.getById?(o.filter.ID=function(te){var ae=te.replace(Zn,Jn);return function(xe){return xe.getAttribute("id")===ae}},o.find.ID=function(te,ae){if(typeof ae.getElementById<"u"&&U){var xe=ae.getElementById(te);return xe?[xe]:[]}}):(o.filter.ID=function(te){var ae=te.replace(Zn,Jn);return function(xe){var Re=typeof xe.getAttributeNode<"u"&&xe.getAttributeNode("id");return Re&&Re.value===ae}},o.find.ID=function(te,ae){if(typeof ae.getElementById<"u"&&U){var xe,Re,Be,Pe=ae.getElementById(te);if(Pe){if(xe=Pe.getAttributeNode("id"),xe&&xe.value===te)return[Pe];for(Be=ae.getElementsByName(te),Re=0;Pe=Be[Re++];)if(xe=Pe.getAttributeNode("id"),xe&&xe.value===te)return[Pe]}return[]}}),o.find.TAG=function(te,ae){return typeof ae.getElementsByTagName<"u"?ae.getElementsByTagName(te):ae.querySelectorAll(te)},o.find.CLASS=function(te,ae){if(typeof ae.getElementsByClassName<"u"&&U)return ae.getElementsByClassName(te)},H=[],Zi(function(te){var ae;I.appendChild(te).innerHTML="<a id='"+oe+"' href='' disabled='disabled'></a><select id='"+oe+"-\r\\' disabled='disabled'><option selected=''></option></select>",te.querySelectorAll("[selected]").length||H.push("\\["+Y+"*(?:value|"+Fn+")"),te.querySelectorAll("[id~="+oe+"-]").length||H.push("~="),te.querySelectorAll("a#"+oe+"+*").length||H.push(".#.+[+~]"),te.querySelectorAll(":checked").length||H.push(":checked"),ae=E.createElement("input"),ae.setAttribute("type","hidden"),te.appendChild(ae).setAttribute("name","D"),I.appendChild(te).disabled=!0,te.querySelectorAll(":disabled").length!==2&&H.push(":enabled",":disabled"),ae=E.createElement("input"),ae.setAttribute("name",""),te.appendChild(ae),te.querySelectorAll("[name='']").length||H.push("\\["+Y+"*name"+Y+"*="+Y+`*(?:''|"")`)}),b.cssHas||H.push(":has"),H=H.length&&new RegExp(H.join("|")),$t=function(te,ae){if(te===ae)return g=!0,0;var xe=!te.compareDocumentPosition-!ae.compareDocumentPosition;return xe||(xe=(te.ownerDocument||te)==(ae.ownerDocument||ae)?te.compareDocumentPosition(ae):1,xe&1||!b.sortDetached&&ae.compareDocumentPosition(te)===xe?te===E||te.ownerDocument==pe&&Lt.contains(pe,te)?-1:ae===E||ae.ownerDocument==pe&&Lt.contains(pe,ae)?1:f?d.call(f,te)-d.call(f,ae):0:xe&4?-1:1)}),E}Lt.matches=function(P,B){return Lt(P,null,null,B)},Lt.matchesSelector=function(P,B){if(pi(P),U&&!nn[B+" "]&&(!H||!H.test(B)))try{var $=ne.call(P,B);if($||b.disconnectedMatch||P.document&&P.document.nodeType!==11)return $}catch{nn(B,!0)}return Lt(B,E,null,[P]).length>0},Lt.contains=function(P,B){return(P.ownerDocument||P)!=E&&pi(P),l.contains(P,B)},Lt.attr=function(P,B){(P.ownerDocument||P)!=E&&pi(P);var $=o.attrHandle[B.toLowerCase()],te=$&&x.call(o.attrHandle,B.toLowerCase())?$(P,B,!U):void 0;return te!==void 0?te:P.getAttribute(B)},Lt.error=function(P){throw new Error("Syntax error, unrecognized expression: "+P)},l.uniqueSort=function(P){var B,$=[],te=0,ae=0;if(g=!b.sortStable,f=!b.sortStable&&a.call(P,0),z.call(P,$t),g){for(;B=P[ae++];)B===P[ae]&&(te=$.push(ae));for(;te--;)ue.call(P,$[te],1)}return f=null,P},l.fn.uniqueSort=function(){return this.pushStack(l.uniqueSort(a.apply(this)))},o=l.expr={cacheLength:50,createPseudo:Rn,match:zn,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(P){return P[1]=P[1].replace(Zn,Jn),P[3]=(P[3]||P[4]||P[5]||"").replace(Zn,Jn),P[2]==="~="&&(P[3]=" "+P[3]+" "),P.slice(0,4)},CHILD:function(P){return P[1]=P[1].toLowerCase(),P[1].slice(0,3)==="nth"?(P[3]||Lt.error(P[0]),P[4]=+(P[4]?P[5]+(P[6]||1):2*(P[3]==="even"||P[3]==="odd")),P[5]=+(P[7]+P[8]||P[3]==="odd")):P[3]&&Lt.error(P[0]),P},PSEUDO:function(P){var B,$=!P[6]&&P[2];return zn.CHILD.test(P[0])?null:(P[3]?P[2]=P[4]||P[5]||"":$&&Bn.test($)&&(B=Ir($,!0))&&(B=$.indexOf(")",$.length-B)-$.length)&&(P[0]=P[0].slice(0,B),P[2]=$.slice(0,B)),P.slice(0,3))}},filter:{TAG:function(P){var B=P.replace(Zn,Jn).toLowerCase();return P==="*"?function(){return!0}:function($){return R($,B)}},CLASS:function(P){var B=tt[P+" "];return B||(B=new RegExp("(^|"+Y+")"+P+"("+Y+"|$)"))&&tt(P,function($){return B.test(typeof $.className=="string"&&$.className||typeof $.getAttribute<"u"&&$.getAttribute("class")||"")})},ATTR:function(P,B,$){return function(te){var ae=Lt.attr(te,P);return ae==null?B==="!=":B?(ae+="",B==="="?ae===$:B==="!="?ae!==$:B==="^="?$&&ae.indexOf($)===0:B==="*="?$&&ae.indexOf($)>-1:B==="$="?$&&ae.slice(-$.length)===$:B==="~="?(" "+ae.replace(bt," ")+" ").indexOf($)>-1:B==="|="?ae===$||ae.slice(0,$.length+1)===$+"-":!1):!0}},CHILD:function(P,B,$,te,ae){var xe=P.slice(0,3)!=="nth",Re=P.slice(-4)!=="last",Be=B==="of-type";return te===1&&ae===0?function(Pe){return!!Pe.parentNode}:function(Pe,mt,Qe){var it,gt,Ye,Ot,pn,rn=xe!==Re?"nextSibling":"previousSibling",En=Pe.parentNode,Hn=Be&&Pe.nodeName.toLowerCase(),Ji=!Qe&&!Be,cn=!1;if(En){if(xe){for(;rn;){for(Ye=Pe;Ye=Ye[rn];)if(Be?R(Ye,Hn):Ye.nodeType===1)return!1;pn=rn=P==="only"&&!pn&&"nextSibling"}return!0}if(pn=[Re?En.firstChild:En.lastChild],Re&&Ji){for(gt=En[oe]||(En[oe]={}),it=gt[P]||[],Ot=it[0]===J&&it[1],cn=Ot&&it[2],Ye=Ot&&En.childNodes[Ot];Ye=++Ot&&Ye&&Ye[rn]||(cn=Ot=0)||pn.pop();)if(Ye.nodeType===1&&++cn&&Ye===Pe){gt[P]=[J,Ot,cn];break}}else if(Ji&&(gt=Pe[oe]||(Pe[oe]={}),it=gt[P]||[],Ot=it[0]===J&&it[1],cn=Ot),cn===!1)for(;(Ye=++Ot&&Ye&&Ye[rn]||(cn=Ot=0)||pn.pop())&&!((Be?R(Ye,Hn):Ye.nodeType===1)&&++cn&&(Ji&&(gt=Ye[oe]||(Ye[oe]={}),gt[P]=[J,cn]),Ye===Pe)););return cn-=ae,cn===te||cn%te===0&&cn/te>=0}}},PSEUDO:function(P,B){var $,te=o.pseudos[P]||o.setFilters[P.toLowerCase()]||Lt.error("unsupported pseudo: "+P);return te[oe]?te(B):te.length>1?($=[P,P,"",B],o.setFilters.hasOwnProperty(P.toLowerCase())?Rn(function(ae,xe){for(var Re,Be=te(ae,B),Pe=Be.length;Pe--;)Re=d.call(ae,Be[Pe]),ae[Re]=!(xe[Re]=Be[Pe])}):function(ae){return te(ae,0,$)}):te}},pseudos:{not:Rn(function(P){var B=[],$=[],te=ia(P.replace(de,"$1"));return te[oe]?Rn(function(ae,xe,Re,Be){for(var Pe,mt=te(ae,null,Be,[]),Qe=ae.length;Qe--;)(Pe=mt[Qe])&&(ae[Qe]=!(xe[Qe]=Pe))}):function(ae,xe,Re){return B[0]=ae,te(B,null,Re,$),B[0]=null,!$.pop()}}),has:Rn(function(P){return function(B){return Lt(P,B).length>0}}),contains:Rn(function(P){return P=P.replace(Zn,Jn),function(B){return(B.textContent||l.text(B)).indexOf(P)>-1}}),lang:Rn(function(P){return Ur.test(P||"")||Lt.error("unsupported lang: "+P),P=P.replace(Zn,Jn).toLowerCase(),function(B){var $;do if($=U?B.lang:B.getAttribute("xml:lang")||B.getAttribute("lang"))return $=$.toLowerCase(),$===P||$.indexOf(P+"-")===0;while((B=B.parentNode)&&B.nodeType===1);return!1}}),target:function(P){var B=e.location&&e.location.hash;return B&&B.slice(1)===P.id},root:function(P){return P===I},focus:function(P){return P===tu()&&E.hasFocus()&&!!(P.type||P.href||~P.tabIndex)},enabled:Xo(!1),disabled:Xo(!0),checked:function(P){return R(P,"input")&&!!P.checked||R(P,"option")&&!!P.selected},selected:function(P){return P.parentNode&&P.parentNode.selectedIndex,P.selected===!0},empty:function(P){for(P=P.firstChild;P;P=P.nextSibling)if(P.nodeType<6)return!1;return!0},parent:function(P){return!o.pseudos.empty(P)},header:function(P){return di.test(P.nodeName)},input:function(P){return fi.test(P.nodeName)},button:function(P){return R(P,"input")&&P.type==="button"||R(P,"button")},text:function(P){var B;return R(P,"input")&&P.type==="text"&&((B=P.getAttribute("type"))==null||B.toLowerCase()==="text")},first:Di(function(){return[0]}),last:Di(function(P,B){return[B-1]}),eq:Di(function(P,B,$){return[$<0?$+B:$]}),even:Di(function(P,B){for(var $=0;$<B;$+=2)P.push($);return P}),odd:Di(function(P,B){for(var $=1;$<B;$+=2)P.push($);return P}),lt:Di(function(P,B,$){var te;for($<0?te=$+B:$>B?te=B:te=$;--te>=0;)P.push(te);return P}),gt:Di(function(P,B,$){for(var te=$<0?$+B:$;++te<B;)P.push(te);return P})}},o.pseudos.nth=o.pseudos.eq;for(r in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[r]=nu(r);for(r in{submit:!0,reset:!0})o.pseudos[r]=iu(r);function qo(){}qo.prototype=o.filters=o.pseudos,o.setFilters=new qo;function Ir(P,B){var $,te,ae,xe,Re,Be,Pe,mt=Tt[P+" "];if(mt)return B?0:mt.slice(0);for(Re=P,Be=[],Pe=o.preFilter;Re;){(!$||(te=Vt.exec(Re)))&&(te&&(Re=Re.slice(te[0].length)||Re),Be.push(ae=[])),$=!1,(te=Lr.exec(Re))&&($=te.shift(),ae.push({value:$,type:te[0].replace(de," ")}),Re=Re.slice($.length));for(xe in o.filter)(te=zn[xe].exec(Re))&&(!Pe[xe]||(te=Pe[xe](te)))&&($=te.shift(),ae.push({value:$,type:xe,matches:te}),Re=Re.slice($.length));if(!$)break}return B?Re.length:Re?Lt.error(P):Tt(P,Be).slice(0)}function ts(P){for(var B=0,$=P.length,te="";B<$;B++)te+=P[B].value;return te}function ns(P,B,$){var te=B.dir,ae=B.next,xe=ae||te,Re=$&&xe==="parentNode",Be=ge++;return B.first?function(Pe,mt,Qe){for(;Pe=Pe[te];)if(Pe.nodeType===1||Re)return P(Pe,mt,Qe);return!1}:function(Pe,mt,Qe){var it,gt,Ye=[J,Be];if(Qe){for(;Pe=Pe[te];)if((Pe.nodeType===1||Re)&&P(Pe,mt,Qe))return!0}else for(;Pe=Pe[te];)if(Pe.nodeType===1||Re)if(gt=Pe[oe]||(Pe[oe]={}),ae&&R(Pe,ae))Pe=Pe[te]||Pe;else{if((it=gt[xe])&&it[0]===J&&it[1]===Be)return Ye[2]=it[2];if(gt[xe]=Ye,Ye[2]=P(Pe,mt,Qe))return!0}return!1}}function ea(P){return P.length>1?function(B,$,te){for(var ae=P.length;ae--;)if(!P[ae](B,$,te))return!1;return!0}:P[0]}function ru(P,B,$){for(var te=0,ae=B.length;te<ae;te++)Lt(P,B[te],$);return $}function is(P,B,$,te,ae){for(var xe,Re=[],Be=0,Pe=P.length,mt=B!=null;Be<Pe;Be++)(xe=P[Be])&&(!$||$(xe,te,ae))&&(Re.push(xe),mt&&B.push(Be));return Re}function ta(P,B,$,te,ae,xe){return te&&!te[oe]&&(te=ta(te)),ae&&!ae[oe]&&(ae=ta(ae,xe)),Rn(function(Re,Be,Pe,mt){var Qe,it,gt,Ye,Ot=[],pn=[],rn=Be.length,En=Re||ru(B||"*",Pe.nodeType?[Pe]:Pe,[]),Hn=P&&(Re||!B)?is(En,Ot,P,Pe,mt):En;if($?(Ye=ae||(Re?P:rn||te)?[]:Be,$(Hn,Ye,Pe,mt)):Ye=Hn,te)for(Qe=is(Ye,pn),te(Qe,[],Pe,mt),it=Qe.length;it--;)(gt=Qe[it])&&(Ye[pn[it]]=!(Hn[pn[it]]=gt));if(Re){if(ae||P){if(ae){for(Qe=[],it=Ye.length;it--;)(gt=Ye[it])&&Qe.push(Hn[it]=gt);ae(null,Ye=[],Qe,mt)}for(it=Ye.length;it--;)(gt=Ye[it])&&(Qe=ae?d.call(Re,gt):Ot[it])>-1&&(Re[Qe]=!(Be[Qe]=gt))}}else Ye=is(Ye===Be?Ye.splice(rn,Ye.length):Ye),ae?ae(null,Be,Ye,mt):_.apply(Be,Ye)})}function na(P){for(var B,$,te,ae=P.length,xe=o.relative[P[0].type],Re=xe||o.relative[" "],Be=xe?1:0,Pe=ns(function(it){return it===B},Re,!0),mt=ns(function(it){return d.call(B,it)>-1},Re,!0),Qe=[function(it,gt,Ye){var Ot=!xe&&(Ye||gt!=u)||((B=gt).nodeType?Pe(it,gt,Ye):mt(it,gt,Ye));return B=null,Ot}];Be<ae;Be++)if($=o.relative[P[Be].type])Qe=[ns(ea(Qe),$)];else{if($=o.filter[P[Be].type].apply(null,P[Be].matches),$[oe]){for(te=++Be;te<ae&&!o.relative[P[te].type];te++);return ta(Be>1&&ea(Qe),Be>1&&ts(P.slice(0,Be-1).concat({value:P[Be-2].type===" "?"*":""})).replace(de,"$1"),$,Be<te&&na(P.slice(Be,te)),te<ae&&na(P=P.slice(te)),te<ae&&ts(P))}Qe.push($)}return ea(Qe)}function su(P,B){var $=B.length>0,te=P.length>0,ae=function(xe,Re,Be,Pe,mt){var Qe,it,gt,Ye=0,Ot="0",pn=xe&&[],rn=[],En=u,Hn=xe||te&&o.find.TAG("*",mt),Ji=J+=En==null?1:Math.random()||.1,cn=Hn.length;for(mt&&(u=Re==E||Re||mt);Ot!==cn&&(Qe=Hn[Ot])!=null;Ot++){if(te&&Qe){for(it=0,!Re&&Qe.ownerDocument!=E&&(pi(Qe),Be=!U);gt=P[it++];)if(gt(Qe,Re||E,Be)){_.call(Pe,Qe);break}mt&&(J=Ji)}$&&((Qe=!gt&&Qe)&&Ye--,xe&&pn.push(Qe))}if(Ye+=Ot,$&&Ot!==Ye){for(it=0;gt=B[it++];)gt(pn,rn,Re,Be);if(xe){if(Ye>0)for(;Ot--;)pn[Ot]||rn[Ot]||(rn[Ot]=C.call(Pe));rn=is(rn)}_.apply(Pe,rn),mt&&!xe&&rn.length>0&&Ye+B.length>1&&l.uniqueSort(Pe)}return mt&&(J=Ji,u=En),pn};return $?Rn(ae):ae}function ia(P,B){var $,te=[],ae=[],xe=ot[P+" "];if(!xe){for(B||(B=Ir(P)),$=B.length;$--;)xe=na(B[$]),xe[oe]?te.push(xe):ae.push(xe);xe=ot(P,su(ae,te)),xe.selector=P}return xe}function jo(P,B,$,te){var ae,xe,Re,Be,Pe,mt=typeof P=="function"&&P,Qe=!te&&Ir(P=mt.selector||P);if($=$||[],Qe.length===1){if(xe=Qe[0]=Qe[0].slice(0),xe.length>2&&(Re=xe[0]).type==="ID"&&B.nodeType===9&&U&&o.relative[xe[1].type]){if(B=(o.find.ID(Re.matches[0].replace(Zn,Jn),B)||[])[0],B)mt&&(B=B.parentNode);else return $;P=P.slice(xe.shift().value.length)}for(ae=zn.needsContext.test(P)?0:xe.length;ae--&&(Re=xe[ae],!o.relative[Be=Re.type]);)if((Pe=o.find[Be])&&(te=Pe(Re.matches[0].replace(Zn,Jn),Js.test(xe[0].type)&&Qs(B.parentNode)||B))){if(xe.splice(ae,1),P=te.length&&ts(xe),!P)return _.apply($,te),$;break}}return(mt||ia(P,Qe))(te,B,!U,$,!B||Js.test(P)&&Qs(B.parentNode)||B),$}b.sortStable=oe.split("").sort($t).join("")===oe,pi(),b.sortDetached=Zi(function(P){return P.compareDocumentPosition(E.createElement("fieldset"))&1}),l.find=Lt,l.expr[":"]=l.expr.pseudos,l.unique=l.uniqueSort,Lt.compile=ia,Lt.select=jo,Lt.setDocument=pi,Lt.tokenize=Ir,Lt.escape=l.escapeSelector,Lt.getText=l.text,Lt.isXML=l.isXMLDoc,Lt.selectors=l.expr,Lt.support=l.support,Lt.uniqueSort=l.uniqueSort})();var Se=function(r,o,u){for(var f=[],g=u!==void 0;(r=r[o])&&r.nodeType!==9;)if(r.nodeType===1){if(g&&l(r).is(u))break;f.push(r)}return f},Ue=function(r,o){for(var u=[];r;r=r.nextSibling)r.nodeType===1&&r!==o&&u.push(r);return u},Ve=l.expr.match.needsContext,at=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Ct(r,o,u){return w(o)?l.grep(r,function(f,g){return!!o.call(f,g,f)!==u}):o.nodeType?l.grep(r,function(f){return f===o!==u}):typeof o!="string"?l.grep(r,function(f){return d.call(o,f)>-1!==u}):l.filter(o,r,u)}l.filter=function(r,o,u){var f=o[0];return u&&(r=":not("+r+")"),o.length===1&&f.nodeType===1?l.find.matchesSelector(f,r)?[f]:[]:l.find.matches(r,l.grep(o,function(g){return g.nodeType===1}))},l.fn.extend({find:function(r){var o,u,f=this.length,g=this;if(typeof r!="string")return this.pushStack(l(r).filter(function(){for(o=0;o<f;o++)if(l.contains(g[o],this))return!0}));for(u=this.pushStack([]),o=0;o<f;o++)l.find(r,g[o],u);return f>1?l.uniqueSort(u):u},filter:function(r){return this.pushStack(Ct(this,r||[],!1))},not:function(r){return this.pushStack(Ct(this,r||[],!0))},is:function(r){return!!Ct(this,typeof r=="string"&&Ve.test(r)?l(r):r||[],!1).length}});var ce,Me=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Oe=l.fn.init=function(r,o,u){var f,g;if(!r)return this;if(u=u||ce,typeof r=="string")if(r[0]==="<"&&r[r.length-1]===">"&&r.length>=3?f=[null,r,null]:f=Me.exec(r),f&&(f[1]||!o))if(f[1]){if(o=o instanceof l?o[0]:o,l.merge(this,l.parseHTML(f[1],o&&o.nodeType?o.ownerDocument||o:p,!0)),at.test(f[1])&&l.isPlainObject(o))for(f in o)w(this[f])?this[f](o[f]):this.attr(f,o[f]);return this}else return g=p.getElementById(f[2]),g&&(this[0]=g,this.length=1),this;else return!o||o.jquery?(o||u).find(r):this.constructor(o).find(r);else{if(r.nodeType)return this[0]=r,this.length=1,this;if(w(r))return u.ready!==void 0?u.ready(r):r(l)}return l.makeArray(r,this)};Oe.prototype=l.fn,ce=l(p);var be=/^(?:parents|prev(?:Until|All))/,$e={children:!0,contents:!0,next:!0,prev:!0};l.fn.extend({has:function(r){var o=l(r,this),u=o.length;return this.filter(function(){for(var f=0;f<u;f++)if(l.contains(this,o[f]))return!0})},closest:function(r,o){var u,f=0,g=this.length,_=[],E=typeof r!="string"&&l(r);if(!Ve.test(r)){for(;f<g;f++)for(u=this[f];u&&u!==o;u=u.parentNode)if(u.nodeType<11&&(E?E.index(u)>-1:u.nodeType===1&&l.find.matchesSelector(u,r))){_.push(u);break}}return this.pushStack(_.length>1?l.uniqueSort(_):_)},index:function(r){return r?typeof r=="string"?d.call(l(r),this[0]):d.call(this,r.jquery?r[0]:r):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(r,o){return this.pushStack(l.uniqueSort(l.merge(this.get(),l(r,o))))},addBack:function(r){return this.add(r==null?this.prevObject:this.prevObject.filter(r))}});function yt(r,o){for(;(r=r[o])&&r.nodeType!==1;);return r}l.each({parent:function(r){var o=r.parentNode;return o&&o.nodeType!==11?o:null},parents:function(r){return Se(r,"parentNode")},parentsUntil:function(r,o,u){return Se(r,"parentNode",u)},next:function(r){return yt(r,"nextSibling")},prev:function(r){return yt(r,"previousSibling")},nextAll:function(r){return Se(r,"nextSibling")},prevAll:function(r){return Se(r,"previousSibling")},nextUntil:function(r,o,u){return Se(r,"nextSibling",u)},prevUntil:function(r,o,u){return Se(r,"previousSibling",u)},siblings:function(r){return Ue((r.parentNode||{}).firstChild,r)},children:function(r){return Ue(r.firstChild)},contents:function(r){return r.contentDocument!=null&&s(r.contentDocument)?r.contentDocument:(R(r,"template")&&(r=r.content||r),l.merge([],r.childNodes))}},function(r,o){l.fn[r]=function(u,f){var g=l.map(this,o,u);return r.slice(-5)!=="Until"&&(f=u),f&&typeof f=="string"&&(g=l.filter(f,g)),this.length>1&&($e[r]||l.uniqueSort(g),be.test(r)&&g.reverse()),this.pushStack(g)}});var He=/[^\x20\t\r\n\f]+/g;function zt(r){var o={};return l.each(r.match(He)||[],function(u,f){o[f]=!0}),o}l.Callbacks=function(r){r=typeof r=="string"?zt(r):l.extend({},r);var o,u,f,g,_=[],E=[],I=-1,U=function(){for(g=g||r.once,f=o=!0;E.length;I=-1)for(u=E.shift();++I<_.length;)_[I].apply(u[0],u[1])===!1&&r.stopOnFalse&&(I=_.length,u=!1);r.memory||(u=!1),o=!1,g&&(u?_=[]:_="")},H={add:function(){return _&&(u&&!o&&(I=_.length-1,E.push(u)),function ne(oe){l.each(oe,function(J,ge){w(ge)?(!r.unique||!H.has(ge))&&_.push(ge):ge&&ge.length&&D(ge)!=="string"&&ne(ge)})}(arguments),u&&!o&&U()),this},remove:function(){return l.each(arguments,function(ne,oe){for(var J;(J=l.inArray(oe,_,J))>-1;)_.splice(J,1),J<=I&&I--}),this},has:function(ne){return ne?l.inArray(ne,_)>-1:_.length>0},empty:function(){return _&&(_=[]),this},disable:function(){return g=E=[],_=u="",this},disabled:function(){return!_},lock:function(){return g=E=[],!u&&!o&&(_=u=""),this},locked:function(){return!!g},fireWith:function(ne,oe){return g||(oe=oe||[],oe=[ne,oe.slice?oe.slice():oe],E.push(oe),o||U()),this},fire:function(){return H.fireWith(this,arguments),this},fired:function(){return!!f}};return H};function Pt(r){return r}function ct(r){throw r}function O(r,o,u,f){var g;try{r&&w(g=r.promise)?g.call(r).done(o).fail(u):r&&w(g=r.then)?g.call(r,o,u):o.apply(void 0,[r].slice(f))}catch(_){u.apply(void 0,[_])}}l.extend({Deferred:function(r){var o=[["notify","progress",l.Callbacks("memory"),l.Callbacks("memory"),2],["resolve","done",l.Callbacks("once memory"),l.Callbacks("once memory"),0,"resolved"],["reject","fail",l.Callbacks("once memory"),l.Callbacks("once memory"),1,"rejected"]],u="pending",f={state:function(){return u},always:function(){return g.done(arguments).fail(arguments),this},catch:function(_){return f.then(null,_)},pipe:function(){var _=arguments;return l.Deferred(function(E){l.each(o,function(I,U){var H=w(_[U[4]])&&_[U[4]];g[U[1]](function(){var ne=H&&H.apply(this,arguments);ne&&w(ne.promise)?ne.promise().progress(E.notify).done(E.resolve).fail(E.reject):E[U[0]+"With"](this,H?[ne]:arguments)})}),_=null}).promise()},then:function(_,E,I){var U=0;function H(ne,oe,J,ge){return function(){var tt=this,Tt=arguments,ot=function(){var $t,Fn;if(!(ne<U)){if($t=J.apply(tt,Tt),$t===oe.promise())throw new TypeError("Thenable self-resolution");Fn=$t&&(typeof $t=="object"||typeof $t=="function")&&$t.then,w(Fn)?ge?Fn.call($t,H(U,oe,Pt,ge),H(U,oe,ct,ge)):(U++,Fn.call($t,H(U,oe,Pt,ge),H(U,oe,ct,ge),H(U,oe,Pt,oe.notifyWith))):(J!==Pt&&(tt=void 0,Tt=[$t]),(ge||oe.resolveWith)(tt,Tt))}},nn=ge?ot:function(){try{ot()}catch($t){l.Deferred.exceptionHook&&l.Deferred.exceptionHook($t,nn.error),ne+1>=U&&(J!==ct&&(tt=void 0,Tt=[$t]),oe.rejectWith(tt,Tt))}};ne?nn():(l.Deferred.getErrorHook?nn.error=l.Deferred.getErrorHook():l.Deferred.getStackHook&&(nn.error=l.Deferred.getStackHook()),e.setTimeout(nn))}}return l.Deferred(function(ne){o[0][3].add(H(0,ne,w(I)?I:Pt,ne.notifyWith)),o[1][3].add(H(0,ne,w(_)?_:Pt)),o[2][3].add(H(0,ne,w(E)?E:ct))}).promise()},promise:function(_){return _!=null?l.extend(_,f):f}},g={};return l.each(o,function(_,E){var I=E[2],U=E[5];f[E[1]]=I.add,U&&I.add(function(){u=U},o[3-_][2].disable,o[3-_][3].disable,o[0][2].lock,o[0][3].lock),I.add(E[3].fire),g[E[0]]=function(){return g[E[0]+"With"](this===g?void 0:this,arguments),this},g[E[0]+"With"]=I.fireWith}),f.promise(g),r&&r.call(g,g),g},when:function(r){var o=arguments.length,u=o,f=Array(u),g=a.call(arguments),_=l.Deferred(),E=function(I){return function(U){f[I]=this,g[I]=arguments.length>1?a.call(arguments):U,--o||_.resolveWith(f,g)}};if(o<=1&&(O(r,_.done(E(u)).resolve,_.reject,!o),_.state()==="pending"||w(g[u]&&g[u].then)))return _.then();for(;u--;)O(g[u],E(u),_.reject);return _.promise()}});var hn=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;l.Deferred.exceptionHook=function(r,o){e.console&&e.console.warn&&r&&hn.test(r.name)&&e.console.warn("jQuery.Deferred exception: "+r.message,r.stack,o)},l.readyException=function(r){e.setTimeout(function(){throw r})};var ft=l.Deferred();l.fn.ready=function(r){return ft.then(r).catch(function(o){l.readyException(o)}),this},l.extend({isReady:!1,readyWait:1,ready:function(r){(r===!0?--l.readyWait:l.isReady)||(l.isReady=!0,!(r!==!0&&--l.readyWait>0)&&ft.resolveWith(p,[l]))}}),l.ready.then=ft.then;function ut(){p.removeEventListener("DOMContentLoaded",ut),e.removeEventListener("load",ut),l.ready()}p.readyState==="complete"||p.readyState!=="loading"&&!p.documentElement.doScroll?e.setTimeout(l.ready):(p.addEventListener("DOMContentLoaded",ut),e.addEventListener("load",ut));var Fe=function(r,o,u,f,g,_,E){var I=0,U=r.length,H=u==null;if(D(u)==="object"){g=!0;for(I in u)Fe(r,o,I,u[I],!0,_,E)}else if(f!==void 0&&(g=!0,w(f)||(E=!0),H&&(E?(o.call(r,f),o=null):(H=o,o=function(ne,oe,J){return H.call(l(ne),J)})),o))for(;I<U;I++)o(r[I],u,E?f:f.call(r[I],I,o(r[I],u)));return g?r:H?o.call(r):U?o(r[0],u):_},Nt=/^-ms-/,Ge=/-([a-z])/g;function L(r,o){return o.toUpperCase()}function T(r){return r.replace(Nt,"ms-").replace(Ge,L)}var K=function(r){return r.nodeType===1||r.nodeType===9||!+r.nodeType};function le(){this.expando=l.expando+le.uid++}le.uid=1,le.prototype={cache:function(r){var o=r[this.expando];return o||(o={},K(r)&&(r.nodeType?r[this.expando]=o:Object.defineProperty(r,this.expando,{value:o,configurable:!0}))),o},set:function(r,o,u){var f,g=this.cache(r);if(typeof o=="string")g[T(o)]=u;else for(f in o)g[T(f)]=o[f];return g},get:function(r,o){return o===void 0?this.cache(r):r[this.expando]&&r[this.expando][T(o)]},access:function(r,o,u){return o===void 0||o&&typeof o=="string"&&u===void 0?this.get(r,o):(this.set(r,o,u),u!==void 0?u:o)},remove:function(r,o){var u,f=r[this.expando];if(f!==void 0){if(o!==void 0)for(Array.isArray(o)?o=o.map(T):(o=T(o),o=o in f?[o]:o.match(He)||[]),u=o.length;u--;)delete f[o[u]];(o===void 0||l.isEmptyObject(f))&&(r.nodeType?r[this.expando]=void 0:delete r[this.expando])}},hasData:function(r){var o=r[this.expando];return o!==void 0&&!l.isEmptyObject(o)}};var Z=new le,re=new le,ze=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ae=/[A-Z]/g;function Ke(r){return r==="true"?!0:r==="false"?!1:r==="null"?null:r===+r+""?+r:ze.test(r)?JSON.parse(r):r}function Ze(r,o,u){var f;if(u===void 0&&r.nodeType===1)if(f="data-"+o.replace(Ae,"-$&").toLowerCase(),u=r.getAttribute(f),typeof u=="string"){try{u=Ke(u)}catch{}re.set(r,o,u)}else u=void 0;return u}l.extend({hasData:function(r){return re.hasData(r)||Z.hasData(r)},data:function(r,o,u){return re.access(r,o,u)},removeData:function(r,o){re.remove(r,o)},_data:function(r,o,u){return Z.access(r,o,u)},_removeData:function(r,o){Z.remove(r,o)}}),l.fn.extend({data:function(r,o){var u,f,g,_=this[0],E=_&&_.attributes;if(r===void 0){if(this.length&&(g=re.get(_),_.nodeType===1&&!Z.get(_,"hasDataAttrs"))){for(u=E.length;u--;)E[u]&&(f=E[u].name,f.indexOf("data-")===0&&(f=T(f.slice(5)),Ze(_,f,g[f])));Z.set(_,"hasDataAttrs",!0)}return g}return typeof r=="object"?this.each(function(){re.set(this,r)}):Fe(this,function(I){var U;if(_&&I===void 0)return U=re.get(_,r),U!==void 0||(U=Ze(_,r),U!==void 0)?U:void 0;this.each(function(){re.set(this,r,I)})},null,o,arguments.length>1,null,!0)},removeData:function(r){return this.each(function(){re.remove(this,r)})}}),l.extend({queue:function(r,o,u){var f;if(r)return o=(o||"fx")+"queue",f=Z.get(r,o),u&&(!f||Array.isArray(u)?f=Z.access(r,o,l.makeArray(u)):f.push(u)),f||[]},dequeue:function(r,o){o=o||"fx";var u=l.queue(r,o),f=u.length,g=u.shift(),_=l._queueHooks(r,o),E=function(){l.dequeue(r,o)};g==="inprogress"&&(g=u.shift(),f--),g&&(o==="fx"&&u.unshift("inprogress"),delete _.stop,g.call(r,E,_)),!f&&_&&_.empty.fire()},_queueHooks:function(r,o){var u=o+"queueHooks";return Z.get(r,u)||Z.access(r,u,{empty:l.Callbacks("once memory").add(function(){Z.remove(r,[o+"queue",u])})})}}),l.fn.extend({queue:function(r,o){var u=2;return typeof r!="string"&&(o=r,r="fx",u--),arguments.length<u?l.queue(this[0],r):o===void 0?this:this.each(function(){var f=l.queue(this,r,o);l._queueHooks(this,r),r==="fx"&&f[0]!=="inprogress"&&l.dequeue(this,r)})},dequeue:function(r){return this.each(function(){l.dequeue(this,r)})},clearQueue:function(r){return this.queue(r||"fx",[])},promise:function(r,o){var u,f=1,g=l.Deferred(),_=this,E=this.length,I=function(){--f||g.resolveWith(_,[_])};for(typeof r!="string"&&(o=r,r=void 0),r=r||"fx";E--;)u=Z.get(_[E],r+"queueHooks"),u&&u.empty&&(f++,u.empty.add(I));return I(),g.promise(o)}});var _e=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Le=new RegExp("^(?:([+-])=|)("+_e+")([a-z%]*)$","i"),ke=["Top","Right","Bottom","Left"],je=p.documentElement,De=function(r){return l.contains(r.ownerDocument,r)},xt={composed:!0};je.getRootNode&&(De=function(r){return l.contains(r.ownerDocument,r)||r.getRootNode(xt)===r.ownerDocument});var nt=function(r,o){return r=o||r,r.style.display==="none"||r.style.display===""&&De(r)&&l.css(r,"display")==="none"};function Dt(r,o,u,f){var g,_,E=20,I=f?function(){return f.cur()}:function(){return l.css(r,o,"")},U=I(),H=u&&u[3]||(l.cssNumber[o]?"":"px"),ne=r.nodeType&&(l.cssNumber[o]||H!=="px"&&+U)&&Le.exec(l.css(r,o));if(ne&&ne[3]!==H){for(U=U/2,H=H||ne[3],ne=+U||1;E--;)l.style(r,o,ne+H),(1-_)*(1-(_=I()/U||.5))<=0&&(E=0),ne=ne/_;ne=ne*2,l.style(r,o,ne+H),u=u||[]}return u&&(ne=+ne||+U||0,g=u[1]?ne+(u[1]+1)*u[2]:+u[2],f&&(f.unit=H,f.start=ne,f.end=g)),g}var k={};function we(r){var o,u=r.ownerDocument,f=r.nodeName,g=k[f];return g||(o=u.body.appendChild(u.createElement(f)),g=l.css(o,"display"),o.parentNode.removeChild(o),g==="none"&&(g="block"),k[f]=g,g)}function ie(r,o){for(var u,f,g=[],_=0,E=r.length;_<E;_++)f=r[_],f.style&&(u=f.style.display,o?(u==="none"&&(g[_]=Z.get(f,"display")||null,g[_]||(f.style.display="")),f.style.display===""&&nt(f)&&(g[_]=we(f))):u!=="none"&&(g[_]="none",Z.set(f,"display",u)));for(_=0;_<E;_++)g[_]!=null&&(r[_].style.display=g[_]);return r}l.fn.extend({show:function(){return ie(this,!0)},hide:function(){return ie(this)},toggle:function(r){return typeof r=="boolean"?r?this.show():this.hide():this.each(function(){nt(this)?l(this).show():l(this).hide()})}});var he=/^(?:checkbox|radio)$/i,Ce=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Te=/^$|^module$|\/(?:java|ecma)script/i;(function(){var r=p.createDocumentFragment(),o=r.appendChild(p.createElement("div")),u=p.createElement("input");u.setAttribute("type","radio"),u.setAttribute("checked","checked"),u.setAttribute("name","t"),o.appendChild(u),b.checkClone=o.cloneNode(!0).cloneNode(!0).lastChild.checked,o.innerHTML="<textarea>x</textarea>",b.noCloneChecked=!!o.cloneNode(!0).lastChild.defaultValue,o.innerHTML="<option></option>",b.option=!!o.lastChild})();var qe={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};qe.tbody=qe.tfoot=qe.colgroup=qe.caption=qe.thead,qe.th=qe.td,b.option||(qe.optgroup=qe.option=[1,"<select multiple='multiple'>","</select>"]);function dt(r,o){var u;return typeof r.getElementsByTagName<"u"?u=r.getElementsByTagName(o||"*"):typeof r.querySelectorAll<"u"?u=r.querySelectorAll(o||"*"):u=[],o===void 0||o&&R(r,o)?l.merge([r],u):u}function Xt(r,o){for(var u=0,f=r.length;u<f;u++)Z.set(r[u],"globalEval",!o||Z.get(o[u],"globalEval"))}var Rt=/<|&#?\w+;/;function fn(r,o,u,f,g){for(var _,E,I,U,H,ne,oe=o.createDocumentFragment(),J=[],ge=0,tt=r.length;ge<tt;ge++)if(_=r[ge],_||_===0)if(D(_)==="object")l.merge(J,_.nodeType?[_]:_);else if(!Rt.test(_))J.push(o.createTextNode(_));else{for(E=E||oe.appendChild(o.createElement("div")),I=(Ce.exec(_)||["",""])[1].toLowerCase(),U=qe[I]||qe._default,E.innerHTML=U[1]+l.htmlPrefilter(_)+U[2],ne=U[0];ne--;)E=E.lastChild;l.merge(J,E.childNodes),E=oe.firstChild,E.textContent=""}for(oe.textContent="",ge=0;_=J[ge++];){if(f&&l.inArray(_,f)>-1){g&&g.push(_);continue}if(H=De(_),E=dt(oe.appendChild(_),"script"),H&&Xt(E),u)for(ne=0;_=E[ne++];)Te.test(_.type||"")&&u.push(_)}return oe}var Sn=/^([^.]*)(?:\.(.+)|)/;function jn(){return!0}function Yn(){return!1}function Cn(r,o,u,f,g,_){var E,I;if(typeof o=="object"){typeof u!="string"&&(f=f||u,u=void 0);for(I in o)Cn(r,I,u,f,o[I],_);return r}if(f==null&&g==null?(g=u,f=u=void 0):g==null&&(typeof u=="string"?(g=f,f=void 0):(g=f,f=u,u=void 0)),g===!1)g=Yn;else if(!g)return r;return _===1&&(E=g,g=function(U){return l().off(U),E.apply(this,arguments)},g.guid=E.guid||(E.guid=l.guid++)),r.each(function(){l.event.add(this,o,g,f,u)})}l.event={global:{},add:function(r,o,u,f,g){var _,E,I,U,H,ne,oe,J,ge,tt,Tt,ot=Z.get(r);if(K(r))for(u.handler&&(_=u,u=_.handler,g=_.selector),g&&l.find.matchesSelector(je,g),u.guid||(u.guid=l.guid++),(U=ot.events)||(U=ot.events=Object.create(null)),(E=ot.handle)||(E=ot.handle=function(nn){return typeof l<"u"&&l.event.triggered!==nn.type?l.event.dispatch.apply(r,arguments):void 0}),o=(o||"").match(He)||[""],H=o.length;H--;)I=Sn.exec(o[H])||[],ge=Tt=I[1],tt=(I[2]||"").split(".").sort(),ge&&(oe=l.event.special[ge]||{},ge=(g?oe.delegateType:oe.bindType)||ge,oe=l.event.special[ge]||{},ne=l.extend({type:ge,origType:Tt,data:f,handler:u,guid:u.guid,selector:g,needsContext:g&&l.expr.match.needsContext.test(g),namespace:tt.join(".")},_),(J=U[ge])||(J=U[ge]=[],J.delegateCount=0,(!oe.setup||oe.setup.call(r,f,tt,E)===!1)&&r.addEventListener&&r.addEventListener(ge,E)),oe.add&&(oe.add.call(r,ne),ne.handler.guid||(ne.handler.guid=u.guid)),g?J.splice(J.delegateCount++,0,ne):J.push(ne),l.event.global[ge]=!0)},remove:function(r,o,u,f,g){var _,E,I,U,H,ne,oe,J,ge,tt,Tt,ot=Z.hasData(r)&&Z.get(r);if(!(!ot||!(U=ot.events))){for(o=(o||"").match(He)||[""],H=o.length;H--;){if(I=Sn.exec(o[H])||[],ge=Tt=I[1],tt=(I[2]||"").split(".").sort(),!ge){for(ge in U)l.event.remove(r,ge+o[H],u,f,!0);continue}for(oe=l.event.special[ge]||{},ge=(f?oe.delegateType:oe.bindType)||ge,J=U[ge]||[],I=I[2]&&new RegExp("(^|\\.)"+tt.join("\\.(?:.*\\.|)")+"(\\.|$)"),E=_=J.length;_--;)ne=J[_],(g||Tt===ne.origType)&&(!u||u.guid===ne.guid)&&(!I||I.test(ne.namespace))&&(!f||f===ne.selector||f==="**"&&ne.selector)&&(J.splice(_,1),ne.selector&&J.delegateCount--,oe.remove&&oe.remove.call(r,ne));E&&!J.length&&((!oe.teardown||oe.teardown.call(r,tt,ot.handle)===!1)&&l.removeEvent(r,ge,ot.handle),delete U[ge])}l.isEmptyObject(U)&&Z.remove(r,"handle events")}},dispatch:function(r){var o,u,f,g,_,E,I=new Array(arguments.length),U=l.event.fix(r),H=(Z.get(this,"events")||Object.create(null))[U.type]||[],ne=l.event.special[U.type]||{};for(I[0]=U,o=1;o<arguments.length;o++)I[o]=arguments[o];if(U.delegateTarget=this,!(ne.preDispatch&&ne.preDispatch.call(this,U)===!1)){for(E=l.event.handlers.call(this,U,H),o=0;(g=E[o++])&&!U.isPropagationStopped();)for(U.currentTarget=g.elem,u=0;(_=g.handlers[u++])&&!U.isImmediatePropagationStopped();)(!U.rnamespace||_.namespace===!1||U.rnamespace.test(_.namespace))&&(U.handleObj=_,U.data=_.data,f=((l.event.special[_.origType]||{}).handle||_.handler).apply(g.elem,I),f!==void 0&&(U.result=f)===!1&&(U.preventDefault(),U.stopPropagation()));return ne.postDispatch&&ne.postDispatch.call(this,U),U.result}},handlers:function(r,o){var u,f,g,_,E,I=[],U=o.delegateCount,H=r.target;if(U&&H.nodeType&&!(r.type==="click"&&r.button>=1)){for(;H!==this;H=H.parentNode||this)if(H.nodeType===1&&!(r.type==="click"&&H.disabled===!0)){for(_=[],E={},u=0;u<U;u++)f=o[u],g=f.selector+" ",E[g]===void 0&&(E[g]=f.needsContext?l(g,this).index(H)>-1:l.find(g,this,null,[H]).length),E[g]&&_.push(f);_.length&&I.push({elem:H,handlers:_})}}return H=this,U<o.length&&I.push({elem:H,handlers:o.slice(U)}),I},addProp:function(r,o){Object.defineProperty(l.Event.prototype,r,{enumerable:!0,configurable:!0,get:w(o)?function(){if(this.originalEvent)return o(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[r]},set:function(u){Object.defineProperty(this,r,{enumerable:!0,configurable:!0,writable:!0,value:u})}})},fix:function(r){return r[l.expando]?r:new l.Event(r)},special:{load:{noBubble:!0},click:{setup:function(r){var o=this||r;return he.test(o.type)&&o.click&&R(o,"input")&&ci(o,"click",!0),!1},trigger:function(r){var o=this||r;return he.test(o.type)&&o.click&&R(o,"input")&&ci(o,"click"),!0},_default:function(r){var o=r.target;return he.test(o.type)&&o.click&&R(o,"input")&&Z.get(o,"click")||R(o,"a")}},beforeunload:{postDispatch:function(r){r.result!==void 0&&r.originalEvent&&(r.originalEvent.returnValue=r.result)}}}};function ci(r,o,u){if(!u){Z.get(r,o)===void 0&&l.event.add(r,o,jn);return}Z.set(r,o,!1),l.event.add(r,o,{namespace:!1,handler:function(f){var g,_=Z.get(this,o);if(f.isTrigger&1&&this[o]){if(_)(l.event.special[o]||{}).delegateType&&f.stopPropagation();else if(_=a.call(arguments),Z.set(this,o,_),this[o](),g=Z.get(this,o),Z.set(this,o,!1),_!==g)return f.stopImmediatePropagation(),f.preventDefault(),g}else _&&(Z.set(this,o,l.event.trigger(_[0],_.slice(1),this)),f.stopPropagation(),f.isImmediatePropagationStopped=jn)}})}l.removeEvent=function(r,o,u){r.removeEventListener&&r.removeEventListener(o,u)},l.Event=function(r,o){if(!(this instanceof l.Event))return new l.Event(r,o);r&&r.type?(this.originalEvent=r,this.type=r.type,this.isDefaultPrevented=r.defaultPrevented||r.defaultPrevented===void 0&&r.returnValue===!1?jn:Yn,this.target=r.target&&r.target.nodeType===3?r.target.parentNode:r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget):this.type=r,o&&l.extend(this,o),this.timeStamp=r&&r.timeStamp||Date.now(),this[l.expando]=!0},l.Event.prototype={constructor:l.Event,isDefaultPrevented:Yn,isPropagationStopped:Yn,isImmediatePropagationStopped:Yn,isSimulated:!1,preventDefault:function(){var r=this.originalEvent;this.isDefaultPrevented=jn,r&&!this.isSimulated&&r.preventDefault()},stopPropagation:function(){var r=this.originalEvent;this.isPropagationStopped=jn,r&&!this.isSimulated&&r.stopPropagation()},stopImmediatePropagation:function(){var r=this.originalEvent;this.isImmediatePropagationStopped=jn,r&&!this.isSimulated&&r.stopImmediatePropagation(),this.stopPropagation()}},l.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},l.event.addProp),l.each({focus:"focusin",blur:"focusout"},function(r,o){function u(f){if(p.documentMode){var g=Z.get(this,"handle"),_=l.event.fix(f);_.type=f.type==="focusin"?"focus":"blur",_.isSimulated=!0,g(f),_.target===_.currentTarget&&g(_)}else l.event.simulate(o,f.target,l.event.fix(f))}l.event.special[r]={setup:function(){var f;if(ci(this,r,!0),p.documentMode)f=Z.get(this,o),f||this.addEventListener(o,u),Z.set(this,o,(f||0)+1);else return!1},trigger:function(){return ci(this,r),!0},teardown:function(){var f;if(p.documentMode)f=Z.get(this,o)-1,f?Z.set(this,o,f):(this.removeEventListener(o,u),Z.remove(this,o));else return!1},_default:function(f){return Z.get(f.target,r)},delegateType:o},l.event.special[o]={setup:function(){var f=this.ownerDocument||this.document||this,g=p.documentMode?this:f,_=Z.get(g,o);_||(p.documentMode?this.addEventListener(o,u):f.addEventListener(r,u,!0)),Z.set(g,o,(_||0)+1)},teardown:function(){var f=this.ownerDocument||this.document||this,g=p.documentMode?this:f,_=Z.get(g,o)-1;_?Z.set(g,o,_):(p.documentMode?this.removeEventListener(o,u):f.removeEventListener(r,u,!0),Z.remove(g,o))}}}),l.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(r,o){l.event.special[r]={delegateType:o,bindType:o,handle:function(u){var f,g=this,_=u.relatedTarget,E=u.handleObj;return(!_||_!==g&&!l.contains(g,_))&&(u.type=E.origType,f=E.handler.apply(this,arguments),u.type=o),f}}}),l.fn.extend({on:function(r,o,u,f){return Cn(this,r,o,u,f)},one:function(r,o,u,f){return Cn(this,r,o,u,f,1)},off:function(r,o,u){var f,g;if(r&&r.preventDefault&&r.handleObj)return f=r.handleObj,l(r.delegateTarget).off(f.namespace?f.origType+"."+f.namespace:f.origType,f.selector,f.handler),this;if(typeof r=="object"){for(g in r)this.off(g,o,r[g]);return this}return(o===!1||typeof o=="function")&&(u=o,o=void 0),u===!1&&(u=Yn),this.each(function(){l.event.remove(this,r,u,o)})}});var Kr=/<script|<style|<link/i,Zr=/checked\s*(?:[^=]|=\s*.checked.)/i,Yi=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function br(r,o){return R(r,"table")&&R(o.nodeType!==11?o:o.firstChild,"tr")&&l(r).children("tbody")[0]||r}function $i(r){return r.type=(r.getAttribute("type")!==null)+"/"+r.type,r}function Jr(r){return(r.type||"").slice(0,5)==="true/"?r.type=r.type.slice(5):r.removeAttribute("type"),r}function Ar(r,o){var u,f,g,_,E,I,U;if(o.nodeType===1){if(Z.hasData(r)&&(_=Z.get(r),U=_.events,U)){Z.remove(o,"handle events");for(g in U)for(u=0,f=U[g].length;u<f;u++)l.event.add(o,g,U[g][u])}re.hasData(r)&&(E=re.access(r),I=l.extend({},E),re.set(o,I))}}function Gs(r,o){var u=o.nodeName.toLowerCase();u==="input"&&he.test(r.type)?o.checked=r.checked:(u==="input"||u==="textarea")&&(o.defaultValue=r.defaultValue)}function ui(r,o,u,f){o=c(o);var g,_,E,I,U,H,ne=0,oe=r.length,J=oe-1,ge=o[0],tt=w(ge);if(tt||oe>1&&typeof ge=="string"&&!b.checkClone&&Zr.test(ge))return r.each(function(Tt){var ot=r.eq(Tt);tt&&(o[0]=ge.call(this,Tt,ot.html())),ui(ot,o,u,f)});if(oe&&(g=fn(o,r[0].ownerDocument,!1,r,f),_=g.firstChild,g.childNodes.length===1&&(g=_),_||f)){for(E=l.map(dt(g,"script"),$i),I=E.length;ne<oe;ne++)U=g,ne!==J&&(U=l.clone(U,!0,!0),I&&l.merge(E,dt(U,"script"))),u.call(r[ne],U,ne);if(I)for(H=E[E.length-1].ownerDocument,l.map(E,Jr),ne=0;ne<I;ne++)U=E[ne],Te.test(U.type||"")&&!Z.access(U,"globalEval")&&l.contains(H,U)&&(U.src&&(U.type||"").toLowerCase()!=="module"?l._evalUrl&&!U.noModule&&l._evalUrl(U.src,{nonce:U.nonce||U.getAttribute("nonce")},H):N(U.textContent.replace(Yi,""),U,H))}return r}function Qr(r,o,u){for(var f,g=o?l.filter(o,r):r,_=0;(f=g[_])!=null;_++)!u&&f.nodeType===1&&l.cleanData(dt(f)),f.parentNode&&(u&&De(f)&&Xt(dt(f,"script")),f.parentNode.removeChild(f));return r}l.extend({htmlPrefilter:function(r){return r},clone:function(r,o,u){var f,g,_,E,I=r.cloneNode(!0),U=De(r);if(!b.noCloneChecked&&(r.nodeType===1||r.nodeType===11)&&!l.isXMLDoc(r))for(E=dt(I),_=dt(r),f=0,g=_.length;f<g;f++)Gs(_[f],E[f]);if(o)if(u)for(_=_||dt(r),E=E||dt(I),f=0,g=_.length;f<g;f++)Ar(_[f],E[f]);else Ar(r,I);return E=dt(I,"script"),E.length>0&&Xt(E,!U&&dt(r,"script")),I},cleanData:function(r){for(var o,u,f,g=l.event.special,_=0;(u=r[_])!==void 0;_++)if(K(u)){if(o=u[Z.expando]){if(o.events)for(f in o.events)g[f]?l.event.remove(u,f):l.removeEvent(u,f,o.handle);u[Z.expando]=void 0}u[re.expando]&&(u[re.expando]=void 0)}}}),l.fn.extend({detach:function(r){return Qr(this,r,!0)},remove:function(r){return Qr(this,r)},text:function(r){return Fe(this,function(o){return o===void 0?l.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=o)})},null,r,arguments.length)},append:function(){return ui(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=br(this,r);o.appendChild(r)}})},prepend:function(){return ui(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=br(this,r);o.insertBefore(r,o.firstChild)}})},before:function(){return ui(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this)})},after:function(){return ui(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling)})},empty:function(){for(var r,o=0;(r=this[o])!=null;o++)r.nodeType===1&&(l.cleanData(dt(r,!1)),r.textContent="");return this},clone:function(r,o){return r=r??!1,o=o??r,this.map(function(){return l.clone(this,r,o)})},html:function(r){return Fe(this,function(o){var u=this[0]||{},f=0,g=this.length;if(o===void 0&&u.nodeType===1)return u.innerHTML;if(typeof o=="string"&&!Kr.test(o)&&!qe[(Ce.exec(o)||["",""])[1].toLowerCase()]){o=l.htmlPrefilter(o);try{for(;f<g;f++)u=this[f]||{},u.nodeType===1&&(l.cleanData(dt(u,!1)),u.innerHTML=o);u=0}catch{}}u&&this.empty().append(o)},null,r,arguments.length)},replaceWith:function(){var r=[];return ui(this,arguments,function(o){var u=this.parentNode;l.inArray(this,r)<0&&(l.cleanData(dt(this)),u&&u.replaceChild(o,this))},r)}}),l.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(r,o){l.fn[r]=function(u){for(var f,g=[],_=l(u),E=_.length-1,I=0;I<=E;I++)f=I===E?this:this.clone(!0),l(_[I])[o](f),h.apply(g,f.get());return this.pushStack(g)}});var wr=new RegExp("^("+_e+")(?!px)[a-z%]+$","i"),Cr=/^--/,Ki=function(r){var o=r.ownerDocument.defaultView;return(!o||!o.opener)&&(o=e),o.getComputedStyle(r)},A=function(r,o,u){var f,g,_={};for(g in o)_[g]=r.style[g],r.style[g]=o[g];f=u.call(r);for(g in o)r.style[g]=_[g];return f},G=new RegExp(ke.join("|"),"i");(function(){function r(){if(H){U.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",H.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",je.appendChild(U).appendChild(H);var ne=e.getComputedStyle(H);u=ne.top!=="1%",I=o(ne.marginLeft)===12,H.style.right="60%",_=o(ne.right)===36,f=o(ne.width)===36,H.style.position="absolute",g=o(H.offsetWidth/3)===12,je.removeChild(U),H=null}}function o(ne){return Math.round(parseFloat(ne))}var u,f,g,_,E,I,U=p.createElement("div"),H=p.createElement("div");H.style&&(H.style.backgroundClip="content-box",H.cloneNode(!0).style.backgroundClip="",b.clearCloneStyle=H.style.backgroundClip==="content-box",l.extend(b,{boxSizingReliable:function(){return r(),f},pixelBoxStyles:function(){return r(),_},pixelPosition:function(){return r(),u},reliableMarginLeft:function(){return r(),I},scrollboxSize:function(){return r(),g},reliableTrDimensions:function(){var ne,oe,J,ge;return E==null&&(ne=p.createElement("table"),oe=p.createElement("tr"),J=p.createElement("div"),ne.style.cssText="position:absolute;left:-11111px;border-collapse:separate",oe.style.cssText="box-sizing:content-box;border:1px solid",oe.style.height="1px",J.style.height="9px",J.style.display="block",je.appendChild(ne).appendChild(oe).appendChild(J),ge=e.getComputedStyle(oe),E=parseInt(ge.height,10)+parseInt(ge.borderTopWidth,10)+parseInt(ge.borderBottomWidth,10)===oe.offsetHeight,je.removeChild(ne)),E}}))})();function Q(r,o,u){var f,g,_,E,I=Cr.test(o),U=r.style;return u=u||Ki(r),u&&(E=u.getPropertyValue(o)||u[o],I&&E&&(E=E.replace(de,"$1")||void 0),E===""&&!De(r)&&(E=l.style(r,o)),!b.pixelBoxStyles()&&wr.test(E)&&G.test(o)&&(f=U.width,g=U.minWidth,_=U.maxWidth,U.minWidth=U.maxWidth=U.width=E,E=u.width,U.width=f,U.minWidth=g,U.maxWidth=_)),E!==void 0?E+"":E}function ee(r,o){return{get:function(){if(r()){delete this.get;return}return(this.get=o).apply(this,arguments)}}}var W=["Webkit","Moz","ms"],ve=p.createElement("div").style,ye={};function Ie(r){for(var o=r[0].toUpperCase()+r.slice(1),u=W.length;u--;)if(r=W[u]+o,r in ve)return r}function Ne(r){var o=l.cssProps[r]||ye[r];return o||(r in ve?r:ye[r]=Ie(r)||r)}var et=/^(none|table(?!-c[ea]).+)/,Je={position:"absolute",visibility:"hidden",display:"block"},Xe={letterSpacing:"0",fontWeight:"400"};function Mt(r,o,u){var f=Le.exec(o);return f?Math.max(0,f[2]-(u||0))+(f[3]||"px"):o}function Et(r,o,u,f,g,_){var E=o==="width"?1:0,I=0,U=0,H=0;if(u===(f?"border":"content"))return 0;for(;E<4;E+=2)u==="margin"&&(H+=l.css(r,u+ke[E],!0,g)),f?(u==="content"&&(U-=l.css(r,"padding"+ke[E],!0,g)),u!=="margin"&&(U-=l.css(r,"border"+ke[E]+"Width",!0,g))):(U+=l.css(r,"padding"+ke[E],!0,g),u!=="padding"?U+=l.css(r,"border"+ke[E]+"Width",!0,g):I+=l.css(r,"border"+ke[E]+"Width",!0,g));return!f&&_>=0&&(U+=Math.max(0,Math.ceil(r["offset"+o[0].toUpperCase()+o.slice(1)]-_-U-I-.5))||0),U+H}function Ht(r,o,u){var f=Ki(r),g=!b.boxSizingReliable()||u,_=g&&l.css(r,"boxSizing",!1,f)==="border-box",E=_,I=Q(r,o,f),U="offset"+o[0].toUpperCase()+o.slice(1);if(wr.test(I)){if(!u)return I;I="auto"}return(!b.boxSizingReliable()&&_||!b.reliableTrDimensions()&&R(r,"tr")||I==="auto"||!parseFloat(I)&&l.css(r,"display",!1,f)==="inline")&&r.getClientRects().length&&(_=l.css(r,"boxSizing",!1,f)==="border-box",E=U in r,E&&(I=r[U])),I=parseFloat(I)||0,I+Et(r,o,u||(_?"border":"content"),E,f,I)+"px"}l.extend({cssHooks:{opacity:{get:function(r,o){if(o){var u=Q(r,"opacity");return u===""?"1":u}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(r,o,u,f){if(!(!r||r.nodeType===3||r.nodeType===8||!r.style)){var g,_,E,I=T(o),U=Cr.test(o),H=r.style;if(U||(o=Ne(I)),E=l.cssHooks[o]||l.cssHooks[I],u!==void 0){if(_=typeof u,_==="string"&&(g=Le.exec(u))&&g[1]&&(u=Dt(r,o,g),_="number"),u==null||u!==u)return;_==="number"&&!U&&(u+=g&&g[3]||(l.cssNumber[I]?"":"px")),!b.clearCloneStyle&&u===""&&o.indexOf("background")===0&&(H[o]="inherit"),(!E||!("set"in E)||(u=E.set(r,u,f))!==void 0)&&(U?H.setProperty(o,u):H[o]=u)}else return E&&"get"in E&&(g=E.get(r,!1,f))!==void 0?g:H[o]}},css:function(r,o,u,f){var g,_,E,I=T(o),U=Cr.test(o);return U||(o=Ne(I)),E=l.cssHooks[o]||l.cssHooks[I],E&&"get"in E&&(g=E.get(r,!0,u)),g===void 0&&(g=Q(r,o,f)),g==="normal"&&o in Xe&&(g=Xe[o]),u===""||u?(_=parseFloat(g),u===!0||isFinite(_)?_||0:g):g}}),l.each(["height","width"],function(r,o){l.cssHooks[o]={get:function(u,f,g){if(f)return et.test(l.css(u,"display"))&&(!u.getClientRects().length||!u.getBoundingClientRect().width)?A(u,Je,function(){return Ht(u,o,g)}):Ht(u,o,g)},set:function(u,f,g){var _,E=Ki(u),I=!b.scrollboxSize()&&E.position==="absolute",U=I||g,H=U&&l.css(u,"boxSizing",!1,E)==="border-box",ne=g?Et(u,o,g,H,E):0;return H&&I&&(ne-=Math.ceil(u["offset"+o[0].toUpperCase()+o.slice(1)]-parseFloat(E[o])-Et(u,o,"border",!1,E)-.5)),ne&&(_=Le.exec(f))&&(_[3]||"px")!=="px"&&(u.style[o]=f,f=l.css(u,o)),Mt(u,f,ne)}}}),l.cssHooks.marginLeft=ee(b.reliableMarginLeft,function(r,o){if(o)return(parseFloat(Q(r,"marginLeft"))||r.getBoundingClientRect().left-A(r,{marginLeft:0},function(){return r.getBoundingClientRect().left}))+"px"}),l.each({margin:"",padding:"",border:"Width"},function(r,o){l.cssHooks[r+o]={expand:function(u){for(var f=0,g={},_=typeof u=="string"?u.split(" "):[u];f<4;f++)g[r+ke[f]+o]=_[f]||_[f-2]||_[0];return g}},r!=="margin"&&(l.cssHooks[r+o].set=Mt)}),l.fn.extend({css:function(r,o){return Fe(this,function(u,f,g){var _,E,I={},U=0;if(Array.isArray(f)){for(_=Ki(u),E=f.length;U<E;U++)I[f[U]]=l.css(u,f[U],!1,_);return I}return g!==void 0?l.style(u,f,g):l.css(u,f)},r,o,arguments.length>1)}});function pt(r,o,u,f,g){return new pt.prototype.init(r,o,u,f,g)}l.Tween=pt,pt.prototype={constructor:pt,init:function(r,o,u,f,g,_){this.elem=r,this.prop=u,this.easing=g||l.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=f,this.unit=_||(l.cssNumber[u]?"":"px")},cur:function(){var r=pt.propHooks[this.prop];return r&&r.get?r.get(this):pt.propHooks._default.get(this)},run:function(r){var o,u=pt.propHooks[this.prop];return this.options.duration?this.pos=o=l.easing[this.easing](r,this.options.duration*r,0,1,this.options.duration):this.pos=o=r,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),u&&u.set?u.set(this):pt.propHooks._default.set(this),this}},pt.prototype.init.prototype=pt.prototype,pt.propHooks={_default:{get:function(r){var o;return r.elem.nodeType!==1||r.elem[r.prop]!=null&&r.elem.style[r.prop]==null?r.elem[r.prop]:(o=l.css(r.elem,r.prop,""),!o||o==="auto"?0:o)},set:function(r){l.fx.step[r.prop]?l.fx.step[r.prop](r):r.elem.nodeType===1&&(l.cssHooks[r.prop]||r.elem.style[Ne(r.prop)]!=null)?l.style(r.elem,r.prop,r.now+r.unit):r.elem[r.prop]=r.now}}},pt.propHooks.scrollTop=pt.propHooks.scrollLeft={set:function(r){r.elem.nodeType&&r.elem.parentNode&&(r.elem[r.prop]=r.now)}},l.easing={linear:function(r){return r},swing:function(r){return .5-Math.cos(r*Math.PI)/2},_default:"swing"},l.fx=pt.prototype.init,l.fx.step={};var ht,We,Yt=/^(?:toggle|show|hide)$/,At=/queueHooks$/;function ln(){We&&(p.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(ln):e.setTimeout(ln,l.fx.interval),l.fx.tick())}function $n(){return e.setTimeout(function(){ht=void 0}),ht=Date.now()}function Qt(r,o){var u,f=0,g={height:r};for(o=o?1:0;f<4;f+=2-o)u=ke[f],g["margin"+u]=g["padding"+u]=r;return o&&(g.opacity=g.width=r),g}function hi(r,o,u){for(var f,g=(Bt.tweeners[o]||[]).concat(Bt.tweeners["*"]),_=0,E=g.length;_<E;_++)if(f=g[_].call(u,o,r))return f}function Ft(r,o,u){var f,g,_,E,I,U,H,ne,oe="width"in o||"height"in o,J=this,ge={},tt=r.style,Tt=r.nodeType&&nt(r),ot=Z.get(r,"fxshow");u.queue||(E=l._queueHooks(r,"fx"),E.unqueued==null&&(E.unqueued=0,I=E.empty.fire,E.empty.fire=function(){E.unqueued||I()}),E.unqueued++,J.always(function(){J.always(function(){E.unqueued--,l.queue(r,"fx").length||E.empty.fire()})}));for(f in o)if(g=o[f],Yt.test(g)){if(delete o[f],_=_||g==="toggle",g===(Tt?"hide":"show"))if(g==="show"&&ot&&ot[f]!==void 0)Tt=!0;else continue;ge[f]=ot&&ot[f]||l.style(r,f)}if(U=!l.isEmptyObject(o),!(!U&&l.isEmptyObject(ge))){oe&&r.nodeType===1&&(u.overflow=[tt.overflow,tt.overflowX,tt.overflowY],H=ot&&ot.display,H==null&&(H=Z.get(r,"display")),ne=l.css(r,"display"),ne==="none"&&(H?ne=H:(ie([r],!0),H=r.style.display||H,ne=l.css(r,"display"),ie([r]))),(ne==="inline"||ne==="inline-block"&&H!=null)&&l.css(r,"float")==="none"&&(U||(J.done(function(){tt.display=H}),H==null&&(ne=tt.display,H=ne==="none"?"":ne)),tt.display="inline-block")),u.overflow&&(tt.overflow="hidden",J.always(function(){tt.overflow=u.overflow[0],tt.overflowX=u.overflow[1],tt.overflowY=u.overflow[2]})),U=!1;for(f in ge)U||(ot?"hidden"in ot&&(Tt=ot.hidden):ot=Z.access(r,"fxshow",{display:H}),_&&(ot.hidden=!Tt),Tt&&ie([r],!0),J.done(function(){Tt||ie([r]),Z.remove(r,"fxshow");for(f in ge)l.style(r,f,ge[f])})),U=hi(Tt?ot[f]:0,f,J),f in ot||(ot[f]=U.start,Tt&&(U.end=U.start,U.start=0))}}function dn(r,o){var u,f,g,_,E;for(u in r)if(f=T(u),g=o[f],_=r[u],Array.isArray(_)&&(g=_[1],_=r[u]=_[0]),u!==f&&(r[f]=_,delete r[u]),E=l.cssHooks[f],E&&"expand"in E){_=E.expand(_),delete r[f];for(u in _)u in r||(r[u]=_[u],o[u]=g)}else o[f]=g}function Bt(r,o,u){var f,g,_=0,E=Bt.prefilters.length,I=l.Deferred().always(function(){delete U.elem}),U=function(){if(g)return!1;for(var oe=ht||$n(),J=Math.max(0,H.startTime+H.duration-oe),ge=J/H.duration||0,tt=1-ge,Tt=0,ot=H.tweens.length;Tt<ot;Tt++)H.tweens[Tt].run(tt);return I.notifyWith(r,[H,tt,J]),tt<1&&ot?J:(ot||I.notifyWith(r,[H,1,0]),I.resolveWith(r,[H]),!1)},H=I.promise({elem:r,props:l.extend({},o),opts:l.extend(!0,{specialEasing:{},easing:l.easing._default},u),originalProperties:o,originalOptions:u,startTime:ht||$n(),duration:u.duration,tweens:[],createTween:function(oe,J){var ge=l.Tween(r,H.opts,oe,J,H.opts.specialEasing[oe]||H.opts.easing);return H.tweens.push(ge),ge},stop:function(oe){var J=0,ge=oe?H.tweens.length:0;if(g)return this;for(g=!0;J<ge;J++)H.tweens[J].run(1);return oe?(I.notifyWith(r,[H,1,0]),I.resolveWith(r,[H,oe])):I.rejectWith(r,[H,oe]),this}}),ne=H.props;for(dn(ne,H.opts.specialEasing);_<E;_++)if(f=Bt.prefilters[_].call(H,r,ne,H.opts),f)return w(f.stop)&&(l._queueHooks(H.elem,H.opts.queue).stop=f.stop.bind(f)),f;return l.map(ne,hi,H),w(H.opts.start)&&H.opts.start.call(r,H),H.progress(H.opts.progress).done(H.opts.done,H.opts.complete).fail(H.opts.fail).always(H.opts.always),l.fx.timer(l.extend(U,{elem:r,anim:H,queue:H.opts.queue})),H}l.Animation=l.extend(Bt,{tweeners:{"*":[function(r,o){var u=this.createTween(r,o);return Dt(u.elem,r,Le.exec(o),u),u}]},tweener:function(r,o){w(r)?(o=r,r=["*"]):r=r.match(He);for(var u,f=0,g=r.length;f<g;f++)u=r[f],Bt.tweeners[u]=Bt.tweeners[u]||[],Bt.tweeners[u].unshift(o)},prefilters:[Ft],prefilter:function(r,o){o?Bt.prefilters.unshift(r):Bt.prefilters.push(r)}}),l.speed=function(r,o,u){var f=r&&typeof r=="object"?l.extend({},r):{complete:u||!u&&o||w(r)&&r,duration:r,easing:u&&o||o&&!w(o)&&o};return l.fx.off?f.duration=0:typeof f.duration!="number"&&(f.duration in l.fx.speeds?f.duration=l.fx.speeds[f.duration]:f.duration=l.fx.speeds._default),(f.queue==null||f.queue===!0)&&(f.queue="fx"),f.old=f.complete,f.complete=function(){w(f.old)&&f.old.call(this),f.queue&&l.dequeue(this,f.queue)},f},l.fn.extend({fadeTo:function(r,o,u,f){return this.filter(nt).css("opacity",0).show().end().animate({opacity:o},r,u,f)},animate:function(r,o,u,f){var g=l.isEmptyObject(r),_=l.speed(o,u,f),E=function(){var I=Bt(this,l.extend({},r),_);(g||Z.get(this,"finish"))&&I.stop(!0)};return E.finish=E,g||_.queue===!1?this.each(E):this.queue(_.queue,E)},stop:function(r,o,u){var f=function(g){var _=g.stop;delete g.stop,_(u)};return typeof r!="string"&&(u=o,o=r,r=void 0),o&&this.queue(r||"fx",[]),this.each(function(){var g=!0,_=r!=null&&r+"queueHooks",E=l.timers,I=Z.get(this);if(_)I[_]&&I[_].stop&&f(I[_]);else for(_ in I)I[_]&&I[_].stop&&At.test(_)&&f(I[_]);for(_=E.length;_--;)E[_].elem===this&&(r==null||E[_].queue===r)&&(E[_].anim.stop(u),g=!1,E.splice(_,1));(g||!u)&&l.dequeue(this,r)})},finish:function(r){return r!==!1&&(r=r||"fx"),this.each(function(){var o,u=Z.get(this),f=u[r+"queue"],g=u[r+"queueHooks"],_=l.timers,E=f?f.length:0;for(u.finish=!0,l.queue(this,r,[]),g&&g.stop&&g.stop.call(this,!0),o=_.length;o--;)_[o].elem===this&&_[o].queue===r&&(_[o].anim.stop(!0),_.splice(o,1));for(o=0;o<E;o++)f[o]&&f[o].finish&&f[o].finish.call(this);delete u.finish})}}),l.each(["toggle","show","hide"],function(r,o){var u=l.fn[o];l.fn[o]=function(f,g,_){return f==null||typeof f=="boolean"?u.apply(this,arguments):this.animate(Qt(o,!0),f,g,_)}}),l.each({slideDown:Qt("show"),slideUp:Qt("hide"),slideToggle:Qt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(r,o){l.fn[r]=function(u,f,g){return this.animate(o,u,f,g)}}),l.timers=[],l.fx.tick=function(){var r,o=0,u=l.timers;for(ht=Date.now();o<u.length;o++)r=u[o],!r()&&u[o]===r&&u.splice(o--,1);u.length||l.fx.stop(),ht=void 0},l.fx.timer=function(r){l.timers.push(r),l.fx.start()},l.fx.interval=13,l.fx.start=function(){We||(We=!0,ln())},l.fx.stop=function(){We=null},l.fx.speeds={slow:600,fast:200,_default:400},l.fn.delay=function(r,o){return r=l.fx&&l.fx.speeds[r]||r,o=o||"fx",this.queue(o,function(u,f){var g=e.setTimeout(u,r);f.stop=function(){e.clearTimeout(g)}})},function(){var r=p.createElement("input"),o=p.createElement("select"),u=o.appendChild(p.createElement("option"));r.type="checkbox",b.checkOn=r.value!=="",b.optSelected=u.selected,r=p.createElement("input"),r.value="t",r.type="radio",b.radioValue=r.value==="t"}();var en,qt=l.expr.attrHandle;l.fn.extend({attr:function(r,o){return Fe(this,l.attr,r,o,arguments.length>1)},removeAttr:function(r){return this.each(function(){l.removeAttr(this,r)})}}),l.extend({attr:function(r,o,u){var f,g,_=r.nodeType;if(!(_===3||_===8||_===2)){if(typeof r.getAttribute>"u")return l.prop(r,o,u);if((_!==1||!l.isXMLDoc(r))&&(g=l.attrHooks[o.toLowerCase()]||(l.expr.match.bool.test(o)?en:void 0)),u!==void 0){if(u===null){l.removeAttr(r,o);return}return g&&"set"in g&&(f=g.set(r,u,o))!==void 0?f:(r.setAttribute(o,u+""),u)}return g&&"get"in g&&(f=g.get(r,o))!==null?f:(f=l.find.attr(r,o),f??void 0)}},attrHooks:{type:{set:function(r,o){if(!b.radioValue&&o==="radio"&&R(r,"input")){var u=r.value;return r.setAttribute("type",o),u&&(r.value=u),o}}}},removeAttr:function(r,o){var u,f=0,g=o&&o.match(He);if(g&&r.nodeType===1)for(;u=g[f++];)r.removeAttribute(u)}}),en={set:function(r,o,u){return o===!1?l.removeAttr(r,u):r.setAttribute(u,u),u}},l.each(l.expr.match.bool.source.match(/\w+/g),function(r,o){var u=qt[o]||l.find.attr;qt[o]=function(f,g,_){var E,I,U=g.toLowerCase();return _||(I=qt[U],qt[U]=E,E=u(f,g,_)!=null?U:null,qt[U]=I),E}});var Rr=/^(?:input|select|textarea|button)$/i,Kn=/^(?:a|area)$/i;l.fn.extend({prop:function(r,o){return Fe(this,l.prop,r,o,arguments.length>1)},removeProp:function(r){return this.each(function(){delete this[l.propFix[r]||r]})}}),l.extend({prop:function(r,o,u){var f,g,_=r.nodeType;if(!(_===3||_===8||_===2))return(_!==1||!l.isXMLDoc(r))&&(o=l.propFix[o]||o,g=l.propHooks[o]),u!==void 0?g&&"set"in g&&(f=g.set(r,u,o))!==void 0?f:r[o]=u:g&&"get"in g&&(f=g.get(r,o))!==null?f:r[o]},propHooks:{tabIndex:{get:function(r){var o=l.find.attr(r,"tabindex");return o?parseInt(o,10):Rr.test(r.nodeName)||Kn.test(r.nodeName)&&r.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),b.optSelected||(l.propHooks.selected={get:function(r){var o=r.parentNode;return o&&o.parentNode&&o.parentNode.selectedIndex,null},set:function(r){var o=r.parentNode;o&&(o.selectedIndex,o.parentNode&&o.parentNode.selectedIndex)}}),l.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){l.propFix[this.toLowerCase()]=this});function Ci(r){var o=r.match(He)||[];return o.join(" ")}function Ri(r){return r.getAttribute&&r.getAttribute("class")||""}function Ws(r){return Array.isArray(r)?r:typeof r=="string"?r.match(He)||[]:[]}l.fn.extend({addClass:function(r){var o,u,f,g,_,E;return w(r)?this.each(function(I){l(this).addClass(r.call(this,I,Ri(this)))}):(o=Ws(r),o.length?this.each(function(){if(f=Ri(this),u=this.nodeType===1&&" "+Ci(f)+" ",u){for(_=0;_<o.length;_++)g=o[_],u.indexOf(" "+g+" ")<0&&(u+=g+" ");E=Ci(u),f!==E&&this.setAttribute("class",E)}}):this)},removeClass:function(r){var o,u,f,g,_,E;return w(r)?this.each(function(I){l(this).removeClass(r.call(this,I,Ri(this)))}):arguments.length?(o=Ws(r),o.length?this.each(function(){if(f=Ri(this),u=this.nodeType===1&&" "+Ci(f)+" ",u){for(_=0;_<o.length;_++)for(g=o[_];u.indexOf(" "+g+" ")>-1;)u=u.replace(" "+g+" "," ");E=Ci(u),f!==E&&this.setAttribute("class",E)}}):this):this.attr("class","")},toggleClass:function(r,o){var u,f,g,_,E=typeof r,I=E==="string"||Array.isArray(r);return w(r)?this.each(function(U){l(this).toggleClass(r.call(this,U,Ri(this),o),o)}):typeof o=="boolean"&&I?o?this.addClass(r):this.removeClass(r):(u=Ws(r),this.each(function(){if(I)for(_=l(this),g=0;g<u.length;g++)f=u[g],_.hasClass(f)?_.removeClass(f):_.addClass(f);else(r===void 0||E==="boolean")&&(f=Ri(this),f&&Z.set(this,"__className__",f),this.setAttribute&&this.setAttribute("class",f||r===!1?"":Z.get(this,"__className__")||""))}))},hasClass:function(r){var o,u,f=0;for(o=" "+r+" ";u=this[f++];)if(u.nodeType===1&&(" "+Ci(Ri(u))+" ").indexOf(o)>-1)return!0;return!1}});var Fc=/\r/g;l.fn.extend({val:function(r){var o,u,f,g=this[0];return arguments.length?(f=w(r),this.each(function(_){var E;this.nodeType===1&&(f?E=r.call(this,_,l(this).val()):E=r,E==null?E="":typeof E=="number"?E+="":Array.isArray(E)&&(E=l.map(E,function(I){return I==null?"":I+""})),o=l.valHooks[this.type]||l.valHooks[this.nodeName.toLowerCase()],(!o||!("set"in o)||o.set(this,E,"value")===void 0)&&(this.value=E))})):g?(o=l.valHooks[g.type]||l.valHooks[g.nodeName.toLowerCase()],o&&"get"in o&&(u=o.get(g,"value"))!==void 0?u:(u=g.value,typeof u=="string"?u.replace(Fc,""):u??"")):void 0}}),l.extend({valHooks:{option:{get:function(r){var o=l.find.attr(r,"value");return o??Ci(l.text(r))}},select:{get:function(r){var o,u,f,g=r.options,_=r.selectedIndex,E=r.type==="select-one",I=E?null:[],U=E?_+1:g.length;for(_<0?f=U:f=E?_:0;f<U;f++)if(u=g[f],(u.selected||f===_)&&!u.disabled&&(!u.parentNode.disabled||!R(u.parentNode,"optgroup"))){if(o=l(u).val(),E)return o;I.push(o)}return I},set:function(r,o){for(var u,f,g=r.options,_=l.makeArray(o),E=g.length;E--;)f=g[E],(f.selected=l.inArray(l.valHooks.option.get(f),_)>-1)&&(u=!0);return u||(r.selectedIndex=-1),_}}}}),l.each(["radio","checkbox"],function(){l.valHooks[this]={set:function(r,o){if(Array.isArray(o))return r.checked=l.inArray(l(r).val(),o)>-1}},b.checkOn||(l.valHooks[this].get=function(r){return r.getAttribute("value")===null?"on":r.value})});var Pr=e.location,Fo={guid:Date.now()},Xs=/\?/;l.parseXML=function(r){var o,u;if(!r||typeof r!="string")return null;try{o=new e.DOMParser().parseFromString(r,"text/xml")}catch{}return u=o&&o.getElementsByTagName("parsererror")[0],(!o||u)&&l.error("Invalid XML: "+(u?l.map(u.childNodes,function(f){return f.textContent}).join(`
`):r)),o};var Oo=/^(?:focusinfocus|focusoutblur)$/,Bo=function(r){r.stopPropagation()};l.extend(l.event,{trigger:function(r,o,u,f){var g,_,E,I,U,H,ne,oe,J=[u||p],ge=x.call(r,"type")?r.type:r,tt=x.call(r,"namespace")?r.namespace.split("."):[];if(_=oe=E=u=u||p,!(u.nodeType===3||u.nodeType===8)&&!Oo.test(ge+l.event.triggered)&&(ge.indexOf(".")>-1&&(tt=ge.split("."),ge=tt.shift(),tt.sort()),U=ge.indexOf(":")<0&&"on"+ge,r=r[l.expando]?r:new l.Event(ge,typeof r=="object"&&r),r.isTrigger=f?2:3,r.namespace=tt.join("."),r.rnamespace=r.namespace?new RegExp("(^|\\.)"+tt.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,r.result=void 0,r.target||(r.target=u),o=o==null?[r]:l.makeArray(o,[r]),ne=l.event.special[ge]||{},!(!f&&ne.trigger&&ne.trigger.apply(u,o)===!1))){if(!f&&!ne.noBubble&&!S(u)){for(I=ne.delegateType||ge,Oo.test(I+ge)||(_=_.parentNode);_;_=_.parentNode)J.push(_),E=_;E===(u.ownerDocument||p)&&J.push(E.defaultView||E.parentWindow||e)}for(g=0;(_=J[g++])&&!r.isPropagationStopped();)oe=_,r.type=g>1?I:ne.bindType||ge,H=(Z.get(_,"events")||Object.create(null))[r.type]&&Z.get(_,"handle"),H&&H.apply(_,o),H=U&&_[U],H&&H.apply&&K(_)&&(r.result=H.apply(_,o),r.result===!1&&r.preventDefault());return r.type=ge,!f&&!r.isDefaultPrevented()&&(!ne._default||ne._default.apply(J.pop(),o)===!1)&&K(u)&&U&&w(u[ge])&&!S(u)&&(E=u[U],E&&(u[U]=null),l.event.triggered=ge,r.isPropagationStopped()&&oe.addEventListener(ge,Bo),u[ge](),r.isPropagationStopped()&&oe.removeEventListener(ge,Bo),l.event.triggered=void 0,E&&(u[U]=E)),r.result}},simulate:function(r,o,u){var f=l.extend(new l.Event,u,{type:r,isSimulated:!0});l.event.trigger(f,null,o)}}),l.fn.extend({trigger:function(r,o){return this.each(function(){l.event.trigger(r,o,this)})},triggerHandler:function(r,o){var u=this[0];if(u)return l.event.trigger(r,o,u,!0)}});var Oc=/\[\]$/,zo=/\r?\n/g,Bc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function qs(r,o,u,f){var g;if(Array.isArray(o))l.each(o,function(_,E){u||Oc.test(r)?f(r,E):qs(r+"["+(typeof E=="object"&&E!=null?_:"")+"]",E,u,f)});else if(!u&&D(o)==="object")for(g in o)qs(r+"["+g+"]",o[g],u,f);else f(r,o)}l.param=function(r,o){var u,f=[],g=function(_,E){var I=w(E)?E():E;f[f.length]=encodeURIComponent(_)+"="+encodeURIComponent(I??"")};if(r==null)return"";if(Array.isArray(r)||r.jquery&&!l.isPlainObject(r))l.each(r,function(){g(this.name,this.value)});else for(u in r)qs(u,r[u],o,g);return f.join("&")},l.fn.extend({serialize:function(){return l.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var r=l.prop(this,"elements");return r?l.makeArray(r):this}).filter(function(){var r=this.type;return this.name&&!l(this).is(":disabled")&&zc.test(this.nodeName)&&!Bc.test(r)&&(this.checked||!he.test(r))}).map(function(r,o){var u=l(this).val();return u==null?null:Array.isArray(u)?l.map(u,function(f){return{name:o.name,value:f.replace(zo,`\r
`)}}):{name:o.name,value:u.replace(zo,`\r
`)}}).get()}});var Hc=/%20/g,kc=/#.*$/,Vc=/([?&])_=[^&]*/,Gc=/^(.*?):[ \t]*([^\r\n]*)$/mg,Wc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Xc=/^(?:GET|HEAD)$/,qc=/^\/\//,Ho={},js={},ko="*/".concat("*"),Ys=p.createElement("a");Ys.href=Pr.href;function Vo(r){return function(o,u){typeof o!="string"&&(u=o,o="*");var f,g=0,_=o.toLowerCase().match(He)||[];if(w(u))for(;f=_[g++];)f[0]==="+"?(f=f.slice(1)||"*",(r[f]=r[f]||[]).unshift(u)):(r[f]=r[f]||[]).push(u)}}function Go(r,o,u,f){var g={},_=r===js;function E(I){var U;return g[I]=!0,l.each(r[I]||[],function(H,ne){var oe=ne(o,u,f);if(typeof oe=="string"&&!_&&!g[oe])return o.dataTypes.unshift(oe),E(oe),!1;if(_)return!(U=oe)}),U}return E(o.dataTypes[0])||!g["*"]&&E("*")}function $s(r,o){var u,f,g=l.ajaxSettings.flatOptions||{};for(u in o)o[u]!==void 0&&((g[u]?r:f||(f={}))[u]=o[u]);return f&&l.extend(!0,r,f),r}function jc(r,o,u){for(var f,g,_,E,I=r.contents,U=r.dataTypes;U[0]==="*";)U.shift(),f===void 0&&(f=r.mimeType||o.getResponseHeader("Content-Type"));if(f){for(g in I)if(I[g]&&I[g].test(f)){U.unshift(g);break}}if(U[0]in u)_=U[0];else{for(g in u){if(!U[0]||r.converters[g+" "+U[0]]){_=g;break}E||(E=g)}_=_||E}if(_)return _!==U[0]&&U.unshift(_),u[_]}function Yc(r,o,u,f){var g,_,E,I,U,H={},ne=r.dataTypes.slice();if(ne[1])for(E in r.converters)H[E.toLowerCase()]=r.converters[E];for(_=ne.shift();_;)if(r.responseFields[_]&&(u[r.responseFields[_]]=o),!U&&f&&r.dataFilter&&(o=r.dataFilter(o,r.dataType)),U=_,_=ne.shift(),_){if(_==="*")_=U;else if(U!=="*"&&U!==_){if(E=H[U+" "+_]||H["* "+_],!E){for(g in H)if(I=g.split(" "),I[1]===_&&(E=H[U+" "+I[0]]||H["* "+I[0]],E)){E===!0?E=H[g]:H[g]!==!0&&(_=I[0],ne.unshift(I[1]));break}}if(E!==!0)if(E&&r.throws)o=E(o);else try{o=E(o)}catch(oe){return{state:"parsererror",error:E?oe:"No conversion from "+U+" to "+_}}}}return{state:"success",data:o}}l.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Pr.href,type:"GET",isLocal:Wc.test(Pr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ko,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":l.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(r,o){return o?$s($s(r,l.ajaxSettings),o):$s(l.ajaxSettings,r)},ajaxPrefilter:Vo(Ho),ajaxTransport:Vo(js),ajax:function(r,o){typeof r=="object"&&(o=r,r=void 0),o=o||{};var u,f,g,_,E,I,U,H,ne,oe,J=l.ajaxSetup({},o),ge=J.context||J,tt=J.context&&(ge.nodeType||ge.jquery)?l(ge):l.event,Tt=l.Deferred(),ot=l.Callbacks("once memory"),nn=J.statusCode||{},$t={},Fn={},On="canceled",St={readyState:0,getResponseHeader:function(bt){var Vt;if(U){if(!_)for(_={};Vt=Gc.exec(g);)_[Vt[1].toLowerCase()+" "]=(_[Vt[1].toLowerCase()+" "]||[]).concat(Vt[2]);Vt=_[bt.toLowerCase()+" "]}return Vt==null?null:Vt.join(", ")},getAllResponseHeaders:function(){return U?g:null},setRequestHeader:function(bt,Vt){return U==null&&(bt=Fn[bt.toLowerCase()]=Fn[bt.toLowerCase()]||bt,$t[bt]=Vt),this},overrideMimeType:function(bt){return U==null&&(J.mimeType=bt),this},statusCode:function(bt){var Vt;if(bt)if(U)St.always(bt[St.status]);else for(Vt in bt)nn[Vt]=[nn[Vt],bt[Vt]];return this},abort:function(bt){var Vt=bt||On;return u&&u.abort(Vt),Pi(0,Vt),this}};if(Tt.promise(St),J.url=((r||J.url||Pr.href)+"").replace(qc,Pr.protocol+"//"),J.type=o.method||o.type||J.method||J.type,J.dataTypes=(J.dataType||"*").toLowerCase().match(He)||[""],J.crossDomain==null){I=p.createElement("a");try{I.href=J.url,I.href=I.href,J.crossDomain=Ys.protocol+"//"+Ys.host!=I.protocol+"//"+I.host}catch{J.crossDomain=!0}}if(J.data&&J.processData&&typeof J.data!="string"&&(J.data=l.param(J.data,J.traditional)),Go(Ho,J,o,St),U)return St;H=l.event&&J.global,H&&l.active++===0&&l.event.trigger("ajaxStart"),J.type=J.type.toUpperCase(),J.hasContent=!Xc.test(J.type),f=J.url.replace(kc,""),J.hasContent?J.data&&J.processData&&(J.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(J.data=J.data.replace(Hc,"+")):(oe=J.url.slice(f.length),J.data&&(J.processData||typeof J.data=="string")&&(f+=(Xs.test(f)?"&":"?")+J.data,delete J.data),J.cache===!1&&(f=f.replace(Vc,"$1"),oe=(Xs.test(f)?"&":"?")+"_="+Fo.guid+++oe),J.url=f+oe),J.ifModified&&(l.lastModified[f]&&St.setRequestHeader("If-Modified-Since",l.lastModified[f]),l.etag[f]&&St.setRequestHeader("If-None-Match",l.etag[f])),(J.data&&J.hasContent&&J.contentType!==!1||o.contentType)&&St.setRequestHeader("Content-Type",J.contentType),St.setRequestHeader("Accept",J.dataTypes[0]&&J.accepts[J.dataTypes[0]]?J.accepts[J.dataTypes[0]]+(J.dataTypes[0]!=="*"?", "+ko+"; q=0.01":""):J.accepts["*"]);for(ne in J.headers)St.setRequestHeader(ne,J.headers[ne]);if(J.beforeSend&&(J.beforeSend.call(ge,St,J)===!1||U))return St.abort();if(On="abort",ot.add(J.complete),St.done(J.success),St.fail(J.error),u=Go(js,J,o,St),!u)Pi(-1,"No Transport");else{if(St.readyState=1,H&&tt.trigger("ajaxSend",[St,J]),U)return St;J.async&&J.timeout>0&&(E=e.setTimeout(function(){St.abort("timeout")},J.timeout));try{U=!1,u.send($t,Pi)}catch(bt){if(U)throw bt;Pi(-1,bt)}}function Pi(bt,Vt,Lr,Zs){var Bn,Ur,zn,fi,di,yn=Vt;U||(U=!0,E&&e.clearTimeout(E),u=void 0,g=Zs||"",St.readyState=bt>0?4:0,Bn=bt>=200&&bt<300||bt===304,Lr&&(fi=jc(J,St,Lr)),!Bn&&l.inArray("script",J.dataTypes)>-1&&l.inArray("json",J.dataTypes)<0&&(J.converters["text script"]=function(){}),fi=Yc(J,fi,St,Bn),Bn?(J.ifModified&&(di=St.getResponseHeader("Last-Modified"),di&&(l.lastModified[f]=di),di=St.getResponseHeader("etag"),di&&(l.etag[f]=di)),bt===204||J.type==="HEAD"?yn="nocontent":bt===304?yn="notmodified":(yn=fi.state,Ur=fi.data,zn=fi.error,Bn=!zn)):(zn=yn,(bt||!yn)&&(yn="error",bt<0&&(bt=0))),St.status=bt,St.statusText=(Vt||yn)+"",Bn?Tt.resolveWith(ge,[Ur,yn,St]):Tt.rejectWith(ge,[St,yn,zn]),St.statusCode(nn),nn=void 0,H&&tt.trigger(Bn?"ajaxSuccess":"ajaxError",[St,J,Bn?Ur:zn]),ot.fireWith(ge,[St,yn]),H&&(tt.trigger("ajaxComplete",[St,J]),--l.active||l.event.trigger("ajaxStop")))}return St},getJSON:function(r,o,u){return l.get(r,o,u,"json")},getScript:function(r,o){return l.get(r,void 0,o,"script")}}),l.each(["get","post"],function(r,o){l[o]=function(u,f,g,_){return w(f)&&(_=_||g,g=f,f=void 0),l.ajax(l.extend({url:u,type:o,dataType:_,data:f,success:g},l.isPlainObject(u)&&u))}}),l.ajaxPrefilter(function(r){var o;for(o in r.headers)o.toLowerCase()==="content-type"&&(r.contentType=r.headers[o]||"")}),l._evalUrl=function(r,o,u){return l.ajax({url:r,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(f){l.globalEval(f,o,u)}})},l.fn.extend({wrapAll:function(r){var o;return this[0]&&(w(r)&&(r=r.call(this[0])),o=l(r,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var u=this;u.firstElementChild;)u=u.firstElementChild;return u}).append(this)),this},wrapInner:function(r){return w(r)?this.each(function(o){l(this).wrapInner(r.call(this,o))}):this.each(function(){var o=l(this),u=o.contents();u.length?u.wrapAll(r):o.append(r)})},wrap:function(r){var o=w(r);return this.each(function(u){l(this).wrapAll(o?r.call(this,u):r)})},unwrap:function(r){return this.parent(r).not("body").each(function(){l(this).replaceWith(this.childNodes)}),this}}),l.expr.pseudos.hidden=function(r){return!l.expr.pseudos.visible(r)},l.expr.pseudos.visible=function(r){return!!(r.offsetWidth||r.offsetHeight||r.getClientRects().length)},l.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var $c={0:200,1223:204},Dr=l.ajaxSettings.xhr();b.cors=!!Dr&&"withCredentials"in Dr,b.ajax=Dr=!!Dr,l.ajaxTransport(function(r){var o,u;if(b.cors||Dr&&!r.crossDomain)return{send:function(f,g){var _,E=r.xhr();if(E.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)for(_ in r.xhrFields)E[_]=r.xhrFields[_];r.mimeType&&E.overrideMimeType&&E.overrideMimeType(r.mimeType),!r.crossDomain&&!f["X-Requested-With"]&&(f["X-Requested-With"]="XMLHttpRequest");for(_ in f)E.setRequestHeader(_,f[_]);o=function(I){return function(){o&&(o=u=E.onload=E.onerror=E.onabort=E.ontimeout=E.onreadystatechange=null,I==="abort"?E.abort():I==="error"?typeof E.status!="number"?g(0,"error"):g(E.status,E.statusText):g($c[E.status]||E.status,E.statusText,(E.responseType||"text")!=="text"||typeof E.responseText!="string"?{binary:E.response}:{text:E.responseText},E.getAllResponseHeaders()))}},E.onload=o(),u=E.onerror=E.ontimeout=o("error"),E.onabort!==void 0?E.onabort=u:E.onreadystatechange=function(){E.readyState===4&&e.setTimeout(function(){o&&u()})},o=o("abort");try{E.send(r.hasContent&&r.data||null)}catch(I){if(o)throw I}},abort:function(){o&&o()}}}),l.ajaxPrefilter(function(r){r.crossDomain&&(r.contents.script=!1)}),l.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(r){return l.globalEval(r),r}}}),l.ajaxPrefilter("script",function(r){r.cache===void 0&&(r.cache=!1),r.crossDomain&&(r.type="GET")}),l.ajaxTransport("script",function(r){if(r.crossDomain||r.scriptAttrs){var o,u;return{send:function(f,g){o=l("<script>").attr(r.scriptAttrs||{}).prop({charset:r.scriptCharset,src:r.url}).on("load error",u=function(_){o.remove(),u=null,_&&g(_.type==="error"?404:200,_.type)}),p.head.appendChild(o[0])},abort:function(){u&&u()}}}});var Wo=[],Ks=/(=)\?(?=&|$)|\?\?/;l.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var r=Wo.pop()||l.expando+"_"+Fo.guid++;return this[r]=!0,r}}),l.ajaxPrefilter("json jsonp",function(r,o,u){var f,g,_,E=r.jsonp!==!1&&(Ks.test(r.url)?"url":typeof r.data=="string"&&(r.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Ks.test(r.data)&&"data");if(E||r.dataTypes[0]==="jsonp")return f=r.jsonpCallback=w(r.jsonpCallback)?r.jsonpCallback():r.jsonpCallback,E?r[E]=r[E].replace(Ks,"$1"+f):r.jsonp!==!1&&(r.url+=(Xs.test(r.url)?"&":"?")+r.jsonp+"="+f),r.converters["script json"]=function(){return _||l.error(f+" was not called"),_[0]},r.dataTypes[0]="json",g=e[f],e[f]=function(){_=arguments},u.always(function(){g===void 0?l(e).removeProp(f):e[f]=g,r[f]&&(r.jsonpCallback=o.jsonpCallback,Wo.push(f)),_&&w(g)&&g(_[0]),_=g=void 0}),"script"}),b.createHTMLDocument=function(){var r=p.implementation.createHTMLDocument("").body;return r.innerHTML="<form></form><form></form>",r.childNodes.length===2}(),l.parseHTML=function(r,o,u){if(typeof r!="string")return[];typeof o=="boolean"&&(u=o,o=!1);var f,g,_;return o||(b.createHTMLDocument?(o=p.implementation.createHTMLDocument(""),f=o.createElement("base"),f.href=p.location.href,o.head.appendChild(f)):o=p),g=at.exec(r),_=!u&&[],g?[o.createElement(g[1])]:(g=fn([r],o,_),_&&_.length&&l(_).remove(),l.merge([],g.childNodes))},l.fn.load=function(r,o,u){var f,g,_,E=this,I=r.indexOf(" ");return I>-1&&(f=Ci(r.slice(I)),r=r.slice(0,I)),w(o)?(u=o,o=void 0):o&&typeof o=="object"&&(g="POST"),E.length>0&&l.ajax({url:r,type:g||"GET",dataType:"html",data:o}).done(function(U){_=arguments,E.html(f?l("<div>").append(l.parseHTML(U)).find(f):U)}).always(u&&function(U,H){E.each(function(){u.apply(this,_||[U.responseText,H,U])})}),this},l.expr.pseudos.animated=function(r){return l.grep(l.timers,function(o){return r===o.elem}).length},l.offset={setOffset:function(r,o,u){var f,g,_,E,I,U,H,ne=l.css(r,"position"),oe=l(r),J={};ne==="static"&&(r.style.position="relative"),I=oe.offset(),_=l.css(r,"top"),U=l.css(r,"left"),H=(ne==="absolute"||ne==="fixed")&&(_+U).indexOf("auto")>-1,H?(f=oe.position(),E=f.top,g=f.left):(E=parseFloat(_)||0,g=parseFloat(U)||0),w(o)&&(o=o.call(r,u,l.extend({},I))),o.top!=null&&(J.top=o.top-I.top+E),o.left!=null&&(J.left=o.left-I.left+g),"using"in o?o.using.call(r,J):oe.css(J)}},l.fn.extend({offset:function(r){if(arguments.length)return r===void 0?this:this.each(function(g){l.offset.setOffset(this,r,g)});var o,u,f=this[0];if(f)return f.getClientRects().length?(o=f.getBoundingClientRect(),u=f.ownerDocument.defaultView,{top:o.top+u.pageYOffset,left:o.left+u.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var r,o,u,f=this[0],g={top:0,left:0};if(l.css(f,"position")==="fixed")o=f.getBoundingClientRect();else{for(o=this.offset(),u=f.ownerDocument,r=f.offsetParent||u.documentElement;r&&(r===u.body||r===u.documentElement)&&l.css(r,"position")==="static";)r=r.parentNode;r&&r!==f&&r.nodeType===1&&(g=l(r).offset(),g.top+=l.css(r,"borderTopWidth",!0),g.left+=l.css(r,"borderLeftWidth",!0))}return{top:o.top-g.top-l.css(f,"marginTop",!0),left:o.left-g.left-l.css(f,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var r=this.offsetParent;r&&l.css(r,"position")==="static";)r=r.offsetParent;return r||je})}}),l.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(r,o){var u=o==="pageYOffset";l.fn[r]=function(f){return Fe(this,function(g,_,E){var I;if(S(g)?I=g:g.nodeType===9&&(I=g.defaultView),E===void 0)return I?I[o]:g[_];I?I.scrollTo(u?I.pageXOffset:E,u?E:I.pageYOffset):g[_]=E},r,f,arguments.length)}}),l.each(["top","left"],function(r,o){l.cssHooks[o]=ee(b.pixelPosition,function(u,f){if(f)return f=Q(u,o),wr.test(f)?l(u).position()[o]+"px":f})}),l.each({Height:"height",Width:"width"},function(r,o){l.each({padding:"inner"+r,content:o,"":"outer"+r},function(u,f){l.fn[f]=function(g,_){var E=arguments.length&&(u||typeof g!="boolean"),I=u||(g===!0||_===!0?"margin":"border");return Fe(this,function(U,H,ne){var oe;return S(U)?f.indexOf("outer")===0?U["inner"+r]:U.document.documentElement["client"+r]:U.nodeType===9?(oe=U.documentElement,Math.max(U.body["scroll"+r],oe["scroll"+r],U.body["offset"+r],oe["offset"+r],oe["client"+r])):ne===void 0?l.css(U,H,I):l.style(U,H,ne,I)},o,E?g:void 0,E)}})}),l.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(r,o){l.fn[o]=function(u){return this.on(o,u)}}),l.fn.extend({bind:function(r,o,u){return this.on(r,null,o,u)},unbind:function(r,o){return this.off(r,null,o)},delegate:function(r,o,u,f){return this.on(o,r,u,f)},undelegate:function(r,o,u){return arguments.length===1?this.off(r,"**"):this.off(o,r||"**",u)},hover:function(r,o){return this.on("mouseenter",r).on("mouseleave",o||r)}}),l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(r,o){l.fn[o]=function(u,f){return arguments.length>0?this.on(o,null,u,f):this.trigger(o)}});var Kc=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;l.proxy=function(r,o){var u,f,g;if(typeof o=="string"&&(u=r[o],o=r,r=u),!!w(r))return f=a.call(arguments,2),g=function(){return r.apply(o||this,f.concat(a.call(arguments)))},g.guid=r.guid=r.guid||l.guid++,g},l.holdReady=function(r){r?l.readyWait++:l.ready(!0)},l.isArray=Array.isArray,l.parseJSON=JSON.parse,l.nodeName=R,l.isFunction=w,l.isWindow=S,l.camelCase=T,l.type=D,l.now=Date.now,l.isNumeric=function(r){var o=l.type(r);return(o==="number"||o==="string")&&!isNaN(r-parseFloat(r))},l.trim=function(r){return r==null?"":(r+"").replace(Kc,"$1")};var Zc=e.jQuery,Jc=e.$;return l.noConflict=function(r){return e.$===l&&(e.$=Jc),r&&e.jQuery===l&&(e.jQuery=Zc),l},typeof t>"u"&&(e.jQuery=e.$=l),l})}(Os)),Os.exports}var Xg=Wg();const Jl=Vg(Xg);class qg{constructor(){kt(this,"canvas");kt(this,"scene");kt(this,"renderer");kt(this,"activeCamera");kt(this,"topCamera");kt(this,"followCamera");kt(this,"clock");kt(this,"sceneGraph");this.canvas=Jl("#main-canvas")[0],this.scene=new bh,this.renderer=new Mg({antialias:!0,canvas:this.canvas}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.canvas.clientWidth,this.canvas.clientHeight),this.renderer.shadowMap.enabled=!0,this.topCamera=new Lc(75,this.aspect,.1,5e4,this.canvas),this.followCamera=new Ng(75,this.aspect,.1,5e4,this.canvas),this.activeCamera=this.topCamera,Jl(this.canvas).on("resize",()=>{this.activeCamera.aspect=this.aspect,this.activeCamera.updateProjectionMatrix(),this.renderer.setSize(this.canvas.clientWidth,this.canvas.clientHeight)}),this.clock=new Nh,this.sceneGraph=new Uc,this.populateScene(),this.animate()}get aspect(){return this.canvas.clientWidth/this.canvas.clientHeight}add(e){this.scene.add(e.mesh),this.sceneGraph.add(e)}animate(){this.renderer.render(this.scene,this.activeCamera),this.activeCamera.update(),this.sceneGraph.update(this.clock.getDelta()),requestAnimationFrame(()=>this.animate())}populateScene(){this.scene.add(new Uh(new vt(16777215),.5));const e=new Lh(new vt(16711663),1);e.position.set(-15,10,15),e.castShadow=!0,e.shadow.mapSize.width=1024,e.shadow.mapSize.height=1024,this.scene.add(e);const t=new wn(new $r(50,50),new Es({color:new vt(11513775)}));t.rotation.x=-Math.PI/2,t.position.y=-1,t.receiveShadow=!0,this.scene.add(t),this.activeCamera.position.set(0,5,5);const n=new kg(new j(1,0,0),new Es({color:new vt(16711680)}));this.add(n);const s=new Es({color:new vt(65280)}),a=new Es({color:new vt(43520)}),c=new Xr(new j(1,0,0),s,a);c.setPosition(3,0,0),this.add(c);const h=new Xr(new j(1,0,0),s,a);h.setPosition(4,0,0),this.add(h),c.addCollidable(h),n.addCollidable(c),n.roll(),this.activeCamera.lookAt(c.mesh.position)}}new qg;
