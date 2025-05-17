var Pu=Object.defineProperty;var Du=(i,t,e)=>t in i?Pu(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var fe=(i,t,e)=>Du(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ko="176",gr={ROTATE:0,DOLLY:1,PAN:2},pr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lu=0,dl=1,Iu=2,Ac=1,Uu=2,si=3,Ai=0,xn=1,ai=2,Ti=0,_r=1,pl=2,ml=3,gl=4,Nu=5,zi=100,Fu=101,Ou=102,Bu=103,zu=104,Hu=200,ku=201,Vu=202,Gu=203,Qa=204,to=205,Wu=206,Xu=207,qu=208,ju=209,Yu=210,$u=211,Ku=212,Zu=213,Ju=214,eo=0,no=1,io=2,xr=3,ro=4,so=5,ao=6,oo=7,wc=0,Qu=1,th=2,bi=0,eh=1,nh=2,ih=3,rh=4,sh=5,ah=6,oh=7,Cc=300,yr=301,Mr=302,lo=303,co=304,Zs=306,uo=1e3,Vi=1001,ho=1002,Fn=1003,lh=1004,ls=1005,Gn=1006,_a=1007,Gi=1008,Xn=1009,Rc=1010,Pc=1011,qr=1012,Vo=1013,Wi=1014,oi=1015,Zr=1016,Go=1017,Wo=1018,jr=1020,Dc=35902,Lc=1021,Ic=1022,Nn=1023,Yr=1026,$r=1027,Uc=1028,Xo=1029,Nc=1030,qo=1031,jo=1033,Ns=33776,Fs=33777,Os=33778,Bs=33779,fo=35840,po=35841,mo=35842,go=35843,_o=36196,vo=37492,xo=37496,yo=37808,Mo=37809,So=37810,Eo=37811,To=37812,bo=37813,Ao=37814,wo=37815,Co=37816,Ro=37817,Po=37818,Do=37819,Lo=37820,Io=37821,zs=36492,Uo=36494,No=36495,Fc=36283,Fo=36284,Oo=36285,Bo=36286,ch=3200,uh=3201,Oc=0,hh=1,Ei="",Cn="srgb",Sr="srgb-linear",Ws="linear",Ue="srgb",tr=7680,_l=519,fh=512,dh=513,ph=514,Bc=515,mh=516,gh=517,_h=518,vh=519,vl=35044,xl="300 es",li=2e3,Xs=2001;class Yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,t);t.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hs=Math.PI/180,qs=180/Math.PI;function Jr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function ve(i,t,e){return Math.max(t,Math.min(e,i))}function xh(i,t){return(i%t+t)%t}function va(i,t,e){return(1-e)*i+e*t}function Or(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const yh={DEG2RAD:Hs};class re{constructor(t=0,e=0){re.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ve(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),a=this.x-t.x,c=this.y-t.y;return this.x=a*n-c*s+t.x,this.y=a*s+c*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(t,e,n,s,a,c,h,d,m){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,c,h,d,m)}set(t,e,n,s,a,c,h,d,m){const g=this.elements;return g[0]=t,g[1]=s,g[2]=h,g[3]=e,g[4]=a,g[5]=d,g[6]=n,g[7]=c,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,c=n[0],h=n[3],d=n[6],m=n[1],g=n[4],v=n[7],y=n[2],S=n[5],T=n[8],A=s[0],M=s[3],p=s[6],F=s[1],U=s[4],D=s[7],q=s[2],H=s[5],l=s[8];return a[0]=c*A+h*F+d*q,a[3]=c*M+h*U+d*H,a[6]=c*p+h*D+d*l,a[1]=m*A+g*F+v*q,a[4]=m*M+g*U+v*H,a[7]=m*p+g*D+v*l,a[2]=y*A+S*F+T*q,a[5]=y*M+S*U+T*H,a[8]=y*p+S*D+T*l,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],c=t[4],h=t[5],d=t[6],m=t[7],g=t[8];return e*c*g-e*h*m-n*a*g+n*h*d+s*a*m-s*c*d}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],c=t[4],h=t[5],d=t[6],m=t[7],g=t[8],v=g*c-h*m,y=h*d-g*a,S=m*a-c*d,T=e*v+n*y+s*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=v*A,t[1]=(s*m-g*n)*A,t[2]=(h*n-s*c)*A,t[3]=y*A,t[4]=(g*e-s*d)*A,t[5]=(s*a-h*e)*A,t[6]=S*A,t[7]=(n*d-m*e)*A,t[8]=(c*e-n*a)*A,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,a,c,h){const d=Math.cos(a),m=Math.sin(a);return this.set(n*d,n*m,-n*(d*c+m*h)+c+t,-s*m,s*d,-s*(-m*c+d*h)+h+e,0,0,1),this}scale(t,e){return this.premultiply(xa.makeScale(t,e)),this}rotate(t){return this.premultiply(xa.makeRotation(-t)),this}translate(t,e){return this.premultiply(xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xa=new se;function zc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mh(){const i=js("canvas");return i.style.display="block",i}const yl={};function ks(i){i in yl||(yl[i]=!0,console.warn(i))}function Sh(i,t,e){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}function Eh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Th(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ml=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sl=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bh(){const i={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Ue&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ue&&(s.r=vr(s.r),s.g=vr(s.g),s.b=vr(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ei?Ws:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Sr]:{primaries:t,whitePoint:n,transfer:Ws,toXYZ:Ml,fromXYZ:Sl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:t,whitePoint:n,transfer:Ue,toXYZ:Ml,fromXYZ:Sl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),i}const Ce=bh();function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let er;class Ah{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{er===void 0&&(er=js("canvas")),er.width=t.width,er.height=t.height;const s=er.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=er}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=js("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=ci(a[c]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wh=0;class Yo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Jr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,h=s.length;c<h;c++)s[c].isDataTexture?a.push(ya(s[c].image)):a.push(ya(s[c]))}else a=ya(s);n.url=a}return e||(t.images[this.uuid]=n),n}}function ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ah.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ch=0;class yn extends Yi{constructor(t=yn.DEFAULT_IMAGE,e=yn.DEFAULT_MAPPING,n=Vi,s=Vi,a=Gn,c=Gi,h=Nn,d=Xn,m=yn.DEFAULT_ANISOTROPY,g=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Jr(),this.name="",this.source=new Yo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=d,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case uo:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case uo:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Cc;yn.DEFAULT_ANISOTROPY=1;class Fe{constructor(t=0,e=0,n=0,s=1){Fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=this.w,c=t.elements;return this.x=c[0]*e+c[4]*n+c[8]*s+c[12]*a,this.y=c[1]*e+c[5]*n+c[9]*s+c[13]*a,this.z=c[2]*e+c[6]*n+c[10]*s+c[14]*a,this.w=c[3]*e+c[7]*n+c[11]*s+c[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,a;const d=t.elements,m=d[0],g=d[4],v=d[8],y=d[1],S=d[5],T=d[9],A=d[2],M=d[6],p=d[10];if(Math.abs(g-y)<.01&&Math.abs(v-A)<.01&&Math.abs(T-M)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+A)<.1&&Math.abs(T+M)<.1&&Math.abs(m+S+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const U=(m+1)/2,D=(S+1)/2,q=(p+1)/2,H=(g+y)/4,l=(v+A)/4,j=(T+M)/4;return U>D&&U>q?U<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(U),s=H/n,a=l/n):D>q?D<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(D),n=H/s,a=j/s):q<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(q),n=l/a,s=j/a),this.set(n,s,a,e),this}let F=Math.sqrt((M-T)*(M-T)+(v-A)*(v-A)+(y-g)*(y-g));return Math.abs(F)<.001&&(F=1),this.x=(M-T)/F,this.y=(v-A)/F,this.z=(y-g)/F,this.w=Math.acos((m+S+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this.z=ve(this.z,t.z,e.z),this.w=ve(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this.z=ve(this.z,t,e),this.w=ve(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ve(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rh extends Yi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth?n.depth:1,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);const s={width:t,height:e,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const a=new yn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const c=n.count;for(let h=0;h<c;h++)this.textures[h]=a.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Yo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Rh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Hc extends yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ph extends yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,a,c,h){let d=n[s+0],m=n[s+1],g=n[s+2],v=n[s+3];const y=a[c+0],S=a[c+1],T=a[c+2],A=a[c+3];if(h===0){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(h===1){t[e+0]=y,t[e+1]=S,t[e+2]=T,t[e+3]=A;return}if(v!==A||d!==y||m!==S||g!==T){let M=1-h;const p=d*y+m*S+g*T+v*A,F=p>=0?1:-1,U=1-p*p;if(U>Number.EPSILON){const q=Math.sqrt(U),H=Math.atan2(q,p*F);M=Math.sin(M*H)/q,h=Math.sin(h*H)/q}const D=h*F;if(d=d*M+y*D,m=m*M+S*D,g=g*M+T*D,v=v*M+A*D,M===1-h){const q=1/Math.sqrt(d*d+m*m+g*g+v*v);d*=q,m*=q,g*=q,v*=q}}t[e]=d,t[e+1]=m,t[e+2]=g,t[e+3]=v}static multiplyQuaternionsFlat(t,e,n,s,a,c){const h=n[s],d=n[s+1],m=n[s+2],g=n[s+3],v=a[c],y=a[c+1],S=a[c+2],T=a[c+3];return t[e]=h*T+g*v+d*S-m*y,t[e+1]=d*T+g*y+m*v-h*S,t[e+2]=m*T+g*S+h*y-d*v,t[e+3]=g*T-h*v-d*y-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,a=t._z,c=t._order,h=Math.cos,d=Math.sin,m=h(n/2),g=h(s/2),v=h(a/2),y=d(n/2),S=d(s/2),T=d(a/2);switch(c){case"XYZ":this._x=y*g*v+m*S*T,this._y=m*S*v-y*g*T,this._z=m*g*T+y*S*v,this._w=m*g*v-y*S*T;break;case"YXZ":this._x=y*g*v+m*S*T,this._y=m*S*v-y*g*T,this._z=m*g*T-y*S*v,this._w=m*g*v+y*S*T;break;case"ZXY":this._x=y*g*v-m*S*T,this._y=m*S*v+y*g*T,this._z=m*g*T+y*S*v,this._w=m*g*v-y*S*T;break;case"ZYX":this._x=y*g*v-m*S*T,this._y=m*S*v+y*g*T,this._z=m*g*T-y*S*v,this._w=m*g*v+y*S*T;break;case"YZX":this._x=y*g*v+m*S*T,this._y=m*S*v+y*g*T,this._z=m*g*T-y*S*v,this._w=m*g*v-y*S*T;break;case"XZY":this._x=y*g*v-m*S*T,this._y=m*S*v-y*g*T,this._z=m*g*T+y*S*v,this._w=m*g*v+y*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],a=e[8],c=e[1],h=e[5],d=e[9],m=e[2],g=e[6],v=e[10],y=n+h+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-d)*S,this._y=(a-m)*S,this._z=(c-s)*S}else if(n>h&&n>v){const S=2*Math.sqrt(1+n-h-v);this._w=(g-d)/S,this._x=.25*S,this._y=(s+c)/S,this._z=(a+m)/S}else if(h>v){const S=2*Math.sqrt(1+h-n-v);this._w=(a-m)/S,this._x=(s+c)/S,this._y=.25*S,this._z=(d+g)/S}else{const S=2*Math.sqrt(1+v-n-h);this._w=(c-s)/S,this._x=(a+m)/S,this._y=(d+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,a=t._z,c=t._w,h=e._x,d=e._y,m=e._z,g=e._w;return this._x=n*g+c*h+s*m-a*d,this._y=s*g+c*d+a*h-n*m,this._z=a*g+c*m+n*d-s*h,this._w=c*g-n*h-s*d-a*m,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,a=this._z,c=this._w;let h=c*t._w+n*t._x+s*t._y+a*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=c,this._x=n,this._y=s,this._z=a,this;const d=1-h*h;if(d<=Number.EPSILON){const S=1-e;return this._w=S*c+e*this._w,this._x=S*n+e*this._x,this._y=S*s+e*this._y,this._z=S*a+e*this._z,this.normalize(),this}const m=Math.sqrt(d),g=Math.atan2(m,h),v=Math.sin((1-e)*g)/m,y=Math.sin(e*g)/m;return this._w=c*v+this._w*y,this._x=n*v+this._x*y,this._y=s*v+this._y*y,this._z=a*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(El.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(El.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*s,this.y=a[1]*e+a[4]*n+a[7]*s,this.z=a[2]*e+a[5]*n+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=t.elements,c=1/(a[3]*e+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*s+a[12])*c,this.y=(a[1]*e+a[5]*n+a[9]*s+a[13])*c,this.z=(a[2]*e+a[6]*n+a[10]*s+a[14])*c,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,a=t.x,c=t.y,h=t.z,d=t.w,m=2*(c*s-h*n),g=2*(h*e-a*s),v=2*(a*n-c*e);return this.x=e+d*m+c*v-h*g,this.y=n+d*g+h*m-a*v,this.z=s+d*v+a*g-c*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s,this.y=a[1]*e+a[5]*n+a[9]*s,this.z=a[2]*e+a[6]*n+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this.z=ve(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this.z=ve(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ve(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,a=t.z,c=e.x,h=e.y,d=e.z;return this.x=s*d-a*h,this.y=a*c-n*d,this.z=n*h-s*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ma.copy(this).projectOnVector(t),this.sub(Ma)}reflect(t){return this.sub(Ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new k,El=new qi;class ji{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let c=0,h=a.count;c<h;c++)t.isMesh===!0?t.getVertexPosition(c,Dn):Dn.fromBufferAttribute(a,c),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cs.copy(n.boundingBox)),cs.applyMatrix4(t.matrixWorld),this.union(cs)}const s=t.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Br),us.subVectors(this.max,Br),nr.subVectors(t.a,Br),ir.subVectors(t.b,Br),rr.subVectors(t.c,Br),gi.subVectors(ir,nr),_i.subVectors(rr,ir),Li.subVectors(nr,rr);let e=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Li.z,Li.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Li.z,0,-Li.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Li.y,Li.x,0];return!Sa(e,nr,ir,rr,us)||(e=[1,0,0,0,1,0,0,0,1],!Sa(e,nr,ir,rr,us))?!1:(hs.crossVectors(gi,_i),e=[hs.x,hs.y,hs.z],Sa(e,nr,ir,rr,us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ti=[new k,new k,new k,new k,new k,new k,new k,new k],Dn=new k,cs=new ji,nr=new k,ir=new k,rr=new k,gi=new k,_i=new k,Li=new k,Br=new k,us=new k,hs=new k,Ii=new k;function Sa(i,t,e,n,s){for(let a=0,c=i.length-3;a<=c;a+=3){Ii.fromArray(i,a);const h=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),d=t.dot(Ii),m=e.dot(Ii),g=n.dot(Ii);if(Math.max(-Math.max(d,m,g),Math.min(d,m,g))>h)return!1}return!0}const Dh=new ji,zr=new k,Ea=new k;let Js=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Dh.setFromPoints(t).getCenter(n);let s=0;for(let a=0,c=t.length;a<c;a++)s=Math.max(s,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zr.subVectors(t,this.center);const e=zr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(zr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zr.copy(t.center).add(Ea)),this.expandByPoint(zr.copy(t.center).sub(Ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const ei=new k,Ta=new k,fs=new k,vi=new k,ba=new k,ds=new k,Aa=new k;class Qs{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ta.copy(t).add(e).multiplyScalar(.5),fs.copy(e).sub(t).normalize(),vi.copy(this.origin).sub(Ta);const a=t.distanceTo(e)*.5,c=-this.direction.dot(fs),h=vi.dot(this.direction),d=-vi.dot(fs),m=vi.lengthSq(),g=Math.abs(1-c*c);let v,y,S,T;if(g>0)if(v=c*d-h,y=c*h-d,T=a*g,v>=0)if(y>=-T)if(y<=T){const A=1/g;v*=A,y*=A,S=v*(v+c*y+2*h)+y*(c*v+y+2*d)+m}else y=a,v=Math.max(0,-(c*y+h)),S=-v*v+y*(y+2*d)+m;else y=-a,v=Math.max(0,-(c*y+h)),S=-v*v+y*(y+2*d)+m;else y<=-T?(v=Math.max(0,-(-c*a+h)),y=v>0?-a:Math.min(Math.max(-a,-d),a),S=-v*v+y*(y+2*d)+m):y<=T?(v=0,y=Math.min(Math.max(-a,-d),a),S=y*(y+2*d)+m):(v=Math.max(0,-(c*a+h)),y=v>0?a:Math.min(Math.max(-a,-d),a),S=-v*v+y*(y+2*d)+m);else y=c>0?-a:a,v=Math.max(0,-(c*y+h)),S=-v*v+y*(y+2*d)+m;return n&&n.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(Ta).addScaledVector(fs,y),S}intersectSphere(t,e){ei.subVectors(t.center,this.origin);const n=ei.dot(this.direction),s=ei.dot(ei)-n*n,a=t.radius*t.radius;if(s>a)return null;const c=Math.sqrt(a-s),h=n-c,d=n+c;return d<0?null:h<0?this.at(d,e):this.at(h,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,a,c,h,d;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return m>=0?(n=(t.min.x-y.x)*m,s=(t.max.x-y.x)*m):(n=(t.max.x-y.x)*m,s=(t.min.x-y.x)*m),g>=0?(a=(t.min.y-y.y)*g,c=(t.max.y-y.y)*g):(a=(t.max.y-y.y)*g,c=(t.min.y-y.y)*g),n>c||a>s||((a>n||isNaN(n))&&(n=a),(c<s||isNaN(s))&&(s=c),v>=0?(h=(t.min.z-y.z)*v,d=(t.max.z-y.z)*v):(h=(t.max.z-y.z)*v,d=(t.min.z-y.z)*v),n>d||h>s)||((h>n||n!==n)&&(n=h),(d<s||s!==s)&&(s=d),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,s,a){ba.subVectors(e,t),ds.subVectors(n,t),Aa.crossVectors(ba,ds);let c=this.direction.dot(Aa),h;if(c>0){if(s)return null;h=1}else if(c<0)h=-1,c=-c;else return null;vi.subVectors(this.origin,t);const d=h*this.direction.dot(ds.crossVectors(vi,ds));if(d<0)return null;const m=h*this.direction.dot(ba.cross(vi));if(m<0||d+m>c)return null;const g=-h*vi.dot(Aa);return g<0?null:this.at(g/c,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(t,e,n,s,a,c,h,d,m,g,v,y,S,T,A,M){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,c,h,d,m,g,v,y,S,T,A,M)}set(t,e,n,s,a,c,h,d,m,g,v,y,S,T,A,M){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=a,p[5]=c,p[9]=h,p[13]=d,p[2]=m,p[6]=g,p[10]=v,p[14]=y,p[3]=S,p[7]=T,p[11]=A,p[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/sr.setFromMatrixColumn(t,0).length(),a=1/sr.setFromMatrixColumn(t,1).length(),c=1/sr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*c,e[9]=n[9]*c,e[10]=n[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,a=t.z,c=Math.cos(n),h=Math.sin(n),d=Math.cos(s),m=Math.sin(s),g=Math.cos(a),v=Math.sin(a);if(t.order==="XYZ"){const y=c*g,S=c*v,T=h*g,A=h*v;e[0]=d*g,e[4]=-d*v,e[8]=m,e[1]=S+T*m,e[5]=y-A*m,e[9]=-h*d,e[2]=A-y*m,e[6]=T+S*m,e[10]=c*d}else if(t.order==="YXZ"){const y=d*g,S=d*v,T=m*g,A=m*v;e[0]=y+A*h,e[4]=T*h-S,e[8]=c*m,e[1]=c*v,e[5]=c*g,e[9]=-h,e[2]=S*h-T,e[6]=A+y*h,e[10]=c*d}else if(t.order==="ZXY"){const y=d*g,S=d*v,T=m*g,A=m*v;e[0]=y-A*h,e[4]=-c*v,e[8]=T+S*h,e[1]=S+T*h,e[5]=c*g,e[9]=A-y*h,e[2]=-c*m,e[6]=h,e[10]=c*d}else if(t.order==="ZYX"){const y=c*g,S=c*v,T=h*g,A=h*v;e[0]=d*g,e[4]=T*m-S,e[8]=y*m+A,e[1]=d*v,e[5]=A*m+y,e[9]=S*m-T,e[2]=-m,e[6]=h*d,e[10]=c*d}else if(t.order==="YZX"){const y=c*d,S=c*m,T=h*d,A=h*m;e[0]=d*g,e[4]=A-y*v,e[8]=T*v+S,e[1]=v,e[5]=c*g,e[9]=-h*g,e[2]=-m*g,e[6]=S*v+T,e[10]=y-A*v}else if(t.order==="XZY"){const y=c*d,S=c*m,T=h*d,A=h*m;e[0]=d*g,e[4]=-v,e[8]=m*g,e[1]=y*v+A,e[5]=c*g,e[9]=S*v-T,e[2]=T*v-S,e[6]=h*g,e[10]=A*v+y}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lh,t,Ih)}lookAt(t,e,n){const s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),xi.crossVectors(n,Mn),xi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),xi.crossVectors(n,Mn)),xi.normalize(),ps.crossVectors(Mn,xi),s[0]=xi.x,s[4]=ps.x,s[8]=Mn.x,s[1]=xi.y,s[5]=ps.y,s[9]=Mn.y,s[2]=xi.z,s[6]=ps.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,c=n[0],h=n[4],d=n[8],m=n[12],g=n[1],v=n[5],y=n[9],S=n[13],T=n[2],A=n[6],M=n[10],p=n[14],F=n[3],U=n[7],D=n[11],q=n[15],H=s[0],l=s[4],j=s[8],R=s[12],C=s[1],z=s[5],lt=s[9],Y=s[13],ft=s[2],mt=s[6],dt=s[10],pt=s[14],st=s[3],Mt=s[7],It=s[11],Vt=s[15];return a[0]=c*H+h*C+d*ft+m*st,a[4]=c*l+h*z+d*mt+m*Mt,a[8]=c*j+h*lt+d*dt+m*It,a[12]=c*R+h*Y+d*pt+m*Vt,a[1]=g*H+v*C+y*ft+S*st,a[5]=g*l+v*z+y*mt+S*Mt,a[9]=g*j+v*lt+y*dt+S*It,a[13]=g*R+v*Y+y*pt+S*Vt,a[2]=T*H+A*C+M*ft+p*st,a[6]=T*l+A*z+M*mt+p*Mt,a[10]=T*j+A*lt+M*dt+p*It,a[14]=T*R+A*Y+M*pt+p*Vt,a[3]=F*H+U*C+D*ft+q*st,a[7]=F*l+U*z+D*mt+q*Mt,a[11]=F*j+U*lt+D*dt+q*It,a[15]=F*R+U*Y+D*pt+q*Vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[12],c=t[1],h=t[5],d=t[9],m=t[13],g=t[2],v=t[6],y=t[10],S=t[14],T=t[3],A=t[7],M=t[11],p=t[15];return T*(+a*d*v-s*m*v-a*h*y+n*m*y+s*h*S-n*d*S)+A*(+e*d*S-e*m*y+a*c*y-s*c*S+s*m*g-a*d*g)+M*(+e*m*v-e*h*S-a*c*v+n*c*S+a*h*g-n*m*g)+p*(-s*h*g-e*d*v+e*h*y+s*c*v-n*c*y+n*d*g)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],c=t[4],h=t[5],d=t[6],m=t[7],g=t[8],v=t[9],y=t[10],S=t[11],T=t[12],A=t[13],M=t[14],p=t[15],F=v*M*m-A*y*m+A*d*S-h*M*S-v*d*p+h*y*p,U=T*y*m-g*M*m-T*d*S+c*M*S+g*d*p-c*y*p,D=g*A*m-T*v*m+T*h*S-c*A*S-g*h*p+c*v*p,q=T*v*d-g*A*d-T*h*y+c*A*y+g*h*M-c*v*M,H=e*F+n*U+s*D+a*q;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const l=1/H;return t[0]=F*l,t[1]=(A*y*a-v*M*a-A*s*S+n*M*S+v*s*p-n*y*p)*l,t[2]=(h*M*a-A*d*a+A*s*m-n*M*m-h*s*p+n*d*p)*l,t[3]=(v*d*a-h*y*a-v*s*m+n*y*m+h*s*S-n*d*S)*l,t[4]=U*l,t[5]=(g*M*a-T*y*a+T*s*S-e*M*S-g*s*p+e*y*p)*l,t[6]=(T*d*a-c*M*a-T*s*m+e*M*m+c*s*p-e*d*p)*l,t[7]=(c*y*a-g*d*a+g*s*m-e*y*m-c*s*S+e*d*S)*l,t[8]=D*l,t[9]=(T*v*a-g*A*a-T*n*S+e*A*S+g*n*p-e*v*p)*l,t[10]=(c*A*a-T*h*a+T*n*m-e*A*m-c*n*p+e*h*p)*l,t[11]=(g*h*a-c*v*a-g*n*m+e*v*m+c*n*S-e*h*S)*l,t[12]=q*l,t[13]=(g*A*s-T*v*s+T*n*y-e*A*y-g*n*M+e*v*M)*l,t[14]=(T*h*s-c*A*s-T*n*d+e*A*d+c*n*M-e*h*M)*l,t[15]=(c*v*s-g*h*s+g*n*d-e*v*d-c*n*y+e*h*y)*l,this}scale(t){const e=this.elements,n=t.x,s=t.y,a=t.z;return e[0]*=n,e[4]*=s,e[8]*=a,e[1]*=n,e[5]*=s,e[9]*=a,e[2]*=n,e[6]*=s,e[10]*=a,e[3]*=n,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),a=1-n,c=t.x,h=t.y,d=t.z,m=a*c,g=a*h;return this.set(m*c+n,m*h-s*d,m*d+s*h,0,m*h+s*d,g*h+n,g*d-s*c,0,m*d-s*h,g*d+s*c,a*d*d+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,a,c){return this.set(1,n,a,0,t,1,c,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,a=e._x,c=e._y,h=e._z,d=e._w,m=a+a,g=c+c,v=h+h,y=a*m,S=a*g,T=a*v,A=c*g,M=c*v,p=h*v,F=d*m,U=d*g,D=d*v,q=n.x,H=n.y,l=n.z;return s[0]=(1-(A+p))*q,s[1]=(S+D)*q,s[2]=(T-U)*q,s[3]=0,s[4]=(S-D)*H,s[5]=(1-(y+p))*H,s[6]=(M+F)*H,s[7]=0,s[8]=(T+U)*l,s[9]=(M-F)*l,s[10]=(1-(y+A))*l,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let a=sr.set(s[0],s[1],s[2]).length();const c=sr.set(s[4],s[5],s[6]).length(),h=sr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Ln.copy(this);const m=1/a,g=1/c,v=1/h;return Ln.elements[0]*=m,Ln.elements[1]*=m,Ln.elements[2]*=m,Ln.elements[4]*=g,Ln.elements[5]*=g,Ln.elements[6]*=g,Ln.elements[8]*=v,Ln.elements[9]*=v,Ln.elements[10]*=v,e.setFromRotationMatrix(Ln),n.x=a,n.y=c,n.z=h,this}makePerspective(t,e,n,s,a,c,h=li){const d=this.elements,m=2*a/(e-t),g=2*a/(n-s),v=(e+t)/(e-t),y=(n+s)/(n-s);let S,T;if(h===li)S=-(c+a)/(c-a),T=-2*c*a/(c-a);else if(h===Xs)S=-c/(c-a),T=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=m,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=T,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,n,s,a,c,h=li){const d=this.elements,m=1/(e-t),g=1/(n-s),v=1/(c-a),y=(e+t)*m,S=(n+s)*g;let T,A;if(h===li)T=(c+a)*v,A=-2*v;else if(h===Xs)T=a*v,A=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=2*m,d[4]=0,d[8]=0,d[12]=-y,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=A,d[14]=-T,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const sr=new k,Ln=new He,Lh=new k(0,0,0),Ih=new k(1,1,1),xi=new k,ps=new k,Mn=new k,Tl=new He,bl=new qi;class qn{constructor(t=0,e=0,n=0,s=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,a=s[0],c=s[4],h=s[8],d=s[1],m=s[5],g=s[9],v=s[2],y=s[6],S=s[10];switch(e){case"XYZ":this._y=Math.asin(ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(d,m)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(ve(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-ve(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(h,a)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Tl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bl.setFromEuler(this),this.setFromQuaternion(bl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class $o{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Uh=0;const Al=new k,ar=new qi,ni=new He,ms=new k,Hr=new k,Nh=new k,Fh=new qi,wl=new k(1,0,0),Cl=new k(0,1,0),Rl=new k(0,0,1),Pl={type:"added"},Oh={type:"removed"},or={type:"childadded",child:null},wa={type:"childremoved",child:null};class nn extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const t=new k,e=new qn,n=new qi,s=new k(1,1,1);function a(){n.setFromEuler(e,!1)}function c(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new se}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ar.setFromAxisAngle(t,e),this.quaternion.multiply(ar),this}rotateOnWorldAxis(t,e){return ar.setFromAxisAngle(t,e),this.quaternion.premultiply(ar),this}rotateX(t){return this.rotateOnAxis(wl,t)}rotateY(t){return this.rotateOnAxis(Cl,t)}rotateZ(t){return this.rotateOnAxis(Rl,t)}translateOnAxis(t,e){return Al.copy(t).applyQuaternion(this.quaternion),this.position.add(Al.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wl,t)}translateY(t){return this.translateOnAxis(Cl,t)}translateZ(t){return this.translateOnAxis(Rl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ms.copy(t):ms.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Hr,ms,this.up):ni.lookAt(ms,Hr,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),ar.setFromRotationMatrix(ni),this.quaternion.premultiply(ar.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pl),or.child=t,this.dispatchEvent(or),or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Oh),wa.child=t,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pl),or.child=t,this.dispatchEvent(or),or.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const c=this.children[n].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,t,Nh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,Fh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?{min:h.boundingBox.min.toArray(),max:h.boundingBox.max.toArray()}:void 0,boundingSphere:h.boundingSphere?{radius:h.boundingSphere.radius,center:h.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(h=>({...h})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function a(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let m=0,g=d.length;m<g;m++){const v=d[m];a(t.shapes,v)}else a(t.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,m=this.material.length;d<m;d++)h.push(a(t.materials,this.material[d]));s.material=h}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let h=0;h<this.children.length;h++)s.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];s.animations.push(a(t.animations,d))}}if(e){const h=c(t.geometries),d=c(t.materials),m=c(t.textures),g=c(t.images),v=c(t.shapes),y=c(t.skeletons),S=c(t.animations),T=c(t.nodes);h.length>0&&(n.geometries=h),d.length>0&&(n.materials=d),m.length>0&&(n.textures=m),g.length>0&&(n.images=g),v.length>0&&(n.shapes=v),y.length>0&&(n.skeletons=y),S.length>0&&(n.animations=S),T.length>0&&(n.nodes=T)}return n.object=s,n;function c(h){const d=[];for(const m in h){const g=h[m];delete g.metadata,d.push(g)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}nn.DEFAULT_UP=new k(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new k,ii=new k,Ca=new k,ri=new k,lr=new k,cr=new k,Dl=new k,Ra=new k,Pa=new k,Da=new k,La=new Fe,Ia=new Fe,Ua=new Fe;class Un{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),In.subVectors(t,e),s.cross(In);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,n,s,a){In.subVectors(s,e),ii.subVectors(n,e),Ca.subVectors(t,e);const c=In.dot(In),h=In.dot(ii),d=In.dot(Ca),m=ii.dot(ii),g=ii.dot(Ca),v=c*m-h*h;if(v===0)return a.set(0,0,0),null;const y=1/v,S=(m*d-h*g)*y,T=(c*g-h*d)*y;return a.set(1-S-T,T,S)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,n,s,a,c,h,d){return this.getBarycoord(t,e,n,s,ri)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,ri.x),d.addScaledVector(c,ri.y),d.addScaledVector(h,ri.z),d)}static getInterpolatedAttribute(t,e,n,s,a,c){return La.setScalar(0),Ia.setScalar(0),Ua.setScalar(0),La.fromBufferAttribute(t,e),Ia.fromBufferAttribute(t,n),Ua.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(La,a.x),c.addScaledVector(Ia,a.y),c.addScaledVector(Ua,a.z),c}static isFrontFacing(t,e,n,s){return In.subVectors(n,e),ii.subVectors(t,e),In.cross(ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),In.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,a){return Un.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}containsPoint(t){return Un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,a=this.c;let c,h;lr.subVectors(s,n),cr.subVectors(a,n),Ra.subVectors(t,n);const d=lr.dot(Ra),m=cr.dot(Ra);if(d<=0&&m<=0)return e.copy(n);Pa.subVectors(t,s);const g=lr.dot(Pa),v=cr.dot(Pa);if(g>=0&&v<=g)return e.copy(s);const y=d*v-g*m;if(y<=0&&d>=0&&g<=0)return c=d/(d-g),e.copy(n).addScaledVector(lr,c);Da.subVectors(t,a);const S=lr.dot(Da),T=cr.dot(Da);if(T>=0&&S<=T)return e.copy(a);const A=S*m-d*T;if(A<=0&&m>=0&&T<=0)return h=m/(m-T),e.copy(n).addScaledVector(cr,h);const M=g*T-S*v;if(M<=0&&v-g>=0&&S-T>=0)return Dl.subVectors(a,s),h=(v-g)/(v-g+(S-T)),e.copy(s).addScaledVector(Dl,h);const p=1/(M+A+y);return c=A*p,h=y*p,e.copy(n).addScaledVector(lr,c).addScaledVector(cr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},gs={h:0,s:0,l:0};function Na(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class xe{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ce.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ce.workingColorSpace){if(t=xh(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,c=2*n-a;this.r=Na(c,a,t+1/3),this.g=Na(c,a,t),this.b=Na(c,a,t-1/3)}return Ce.toWorkingColorSpace(this,s),this}setStyle(t,e=Cn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const c=s[1],h=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Cn){const n=kc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=vr(t.r),this.g=vr(t.g),this.b=vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Cn){return Ce.fromWorkingColorSpace(on.copy(this),t),Math.round(ve(on.r*255,0,255))*65536+Math.round(ve(on.g*255,0,255))*256+Math.round(ve(on.b*255,0,255))}getHexString(t=Cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ce.workingColorSpace){Ce.fromWorkingColorSpace(on.copy(this),e);const n=on.r,s=on.g,a=on.b,c=Math.max(n,s,a),h=Math.min(n,s,a);let d,m;const g=(h+c)/2;if(h===c)d=0,m=0;else{const v=c-h;switch(m=g<=.5?v/(c+h):v/(2-c-h),c){case n:d=(s-a)/v+(s<a?6:0);break;case s:d=(a-n)/v+2;break;case a:d=(n-s)/v+4;break}d/=6}return t.h=d,t.s=m,t.l=g,t}getRGB(t,e=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=Cn){Ce.fromWorkingColorSpace(on.copy(this),t);const e=on.r,n=on.g,s=on.b;return t!==Cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(gs);const n=va(yi.h,gs.h,e),s=va(yi.s,gs.s,e),a=va(yi.l,gs.l,e);return this.setHSL(n,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*s,this.g=a[1]*e+a[4]*n+a[7]*s,this.b=a[2]*e+a[5]*n+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new xe;xe.NAMES=kc;let Bh=0;class Tr extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Jr(),this.name="",this.type="Material",this.blending=_r,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qa,this.blendDst=to,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qa&&(n.blendSrc=this.blendSrc),this.blendDst!==to&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const c=[];for(const h in a){const d=a[h];delete d.metadata,c.push(d)}return c}if(e){const a=s(t.textures),c=s(t.images);a.length>0&&(n.textures=a),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ko extends Tr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const je=new k,_s=new re;let zh=0;class Wn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vl,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_s.fromBufferAttribute(this,e),_s.applyMatrix3(t),this.setXY(e,_s.x,_s.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Or(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Or(e,this.array)),e}setX(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Or(e,this.array)),e}setY(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Or(e,this.array)),e}setZ(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Or(e,this.array)),e}setW(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),s=gn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),s=gn(s,this.array),a=gn(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vl&&(t.usage=this.usage),t}}class Vc extends Wn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Gc extends Wn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class En extends Wn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hh=0;const wn=new He,Fa=new nn,ur=new k,Sn=new ji,kr=new ji,en=new k;class jn extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zc(t)?Gc:Vc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new se().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,n){return wn.makeTranslation(t,e,n),this.applyMatrix4(wn),this}scale(t,e,n){return wn.makeScale(t,e,n),this.applyMatrix4(wn),this}lookAt(t){return Fa.lookAt(t),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,a=t.length;s<a;s++){const c=t[s];n.push(c.x,c.y,c.z||0)}this.setAttribute("position",new En(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const a=t[s];e.setXYZ(s,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const a=e[n];Sn.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Js);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let a=0,c=e.length;a<c;a++){const h=e[a];kr.setFromBufferAttribute(h),this.morphTargetsRelative?(en.addVectors(Sn.min,kr.min),Sn.expandByPoint(en),en.addVectors(Sn.max,kr.max),Sn.expandByPoint(en)):(Sn.expandByPoint(kr.min),Sn.expandByPoint(kr.max))}Sn.getCenter(n);let s=0;for(let a=0,c=t.count;a<c;a++)en.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(en));if(e)for(let a=0,c=e.length;a<c;a++){const h=e[a],d=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)en.fromBufferAttribute(h,m),d&&(ur.fromBufferAttribute(t,m),en.add(ur)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),h=[],d=[];for(let j=0;j<n.count;j++)h[j]=new k,d[j]=new k;const m=new k,g=new k,v=new k,y=new re,S=new re,T=new re,A=new k,M=new k;function p(j,R,C){m.fromBufferAttribute(n,j),g.fromBufferAttribute(n,R),v.fromBufferAttribute(n,C),y.fromBufferAttribute(a,j),S.fromBufferAttribute(a,R),T.fromBufferAttribute(a,C),g.sub(m),v.sub(m),S.sub(y),T.sub(y);const z=1/(S.x*T.y-T.x*S.y);isFinite(z)&&(A.copy(g).multiplyScalar(T.y).addScaledVector(v,-S.y).multiplyScalar(z),M.copy(v).multiplyScalar(S.x).addScaledVector(g,-T.x).multiplyScalar(z),h[j].add(A),h[R].add(A),h[C].add(A),d[j].add(M),d[R].add(M),d[C].add(M))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let j=0,R=F.length;j<R;++j){const C=F[j],z=C.start,lt=C.count;for(let Y=z,ft=z+lt;Y<ft;Y+=3)p(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const U=new k,D=new k,q=new k,H=new k;function l(j){q.fromBufferAttribute(s,j),H.copy(q);const R=h[j];U.copy(R),U.sub(q.multiplyScalar(q.dot(R))).normalize(),D.crossVectors(H,R);const z=D.dot(d[j])<0?-1:1;c.setXYZW(j,U.x,U.y,U.z,z)}for(let j=0,R=F.length;j<R;++j){const C=F[j],z=C.start,lt=C.count;for(let Y=z,ft=z+lt;Y<ft;Y+=3)l(t.getX(Y+0)),l(t.getX(Y+1)),l(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let y=0,S=n.count;y<S;y++)n.setXYZ(y,0,0,0);const s=new k,a=new k,c=new k,h=new k,d=new k,m=new k,g=new k,v=new k;if(t)for(let y=0,S=t.count;y<S;y+=3){const T=t.getX(y+0),A=t.getX(y+1),M=t.getX(y+2);s.fromBufferAttribute(e,T),a.fromBufferAttribute(e,A),c.fromBufferAttribute(e,M),g.subVectors(c,a),v.subVectors(s,a),g.cross(v),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,A),m.fromBufferAttribute(n,M),h.add(g),d.add(g),m.add(g),n.setXYZ(T,h.x,h.y,h.z),n.setXYZ(A,d.x,d.y,d.z),n.setXYZ(M,m.x,m.y,m.z)}else for(let y=0,S=e.count;y<S;y+=3)s.fromBufferAttribute(e,y+0),a.fromBufferAttribute(e,y+1),c.fromBufferAttribute(e,y+2),g.subVectors(c,a),v.subVectors(s,a),g.cross(v),n.setXYZ(y+0,g.x,g.y,g.z),n.setXYZ(y+1,g.x,g.y,g.z),n.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(h,d){const m=h.array,g=h.itemSize,v=h.normalized,y=new m.constructor(d.length*g);let S=0,T=0;for(let A=0,M=d.length;A<M;A++){h.isInterleavedBufferAttribute?S=d[A]*h.data.stride+h.offset:S=d[A]*g;for(let p=0;p<g;p++)y[T++]=m[S++]}return new Wn(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new jn,n=this.index.array,s=this.attributes;for(const h in s){const d=s[h],m=t(d,n);e.setAttribute(h,m)}const a=this.morphAttributes;for(const h in a){const d=[],m=a[h];for(let g=0,v=m.length;g<v;g++){const y=m[g],S=t(y,n);d.push(S)}e.morphAttributes[h]=d}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,d=c.length;h<d;h++){const m=c[h];e.addGroup(m.start,m.count,m.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const m in d)d[m]!==void 0&&(t[m]=d[m]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const d in n){const m=n[d];t.data.attributes[d]=m.toJSON(t.data)}const s={};let a=!1;for(const d in this.morphAttributes){const m=this.morphAttributes[d],g=[];for(let v=0,y=m.length;v<y;v++){const S=m[v];g.push(S.toJSON(t.data))}g.length>0&&(s[d]=g,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const m in s){const g=s[m];this.setAttribute(m,g.clone(e))}const a=t.morphAttributes;for(const m in a){const g=[],v=a[m];for(let y=0,S=v.length;y<S;y++)g.push(v[y].clone(e));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let m=0,g=c.length;m<g;m++){const v=c[m];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ll=new He,Ui=new Qs,vs=new Js,Il=new k,xs=new k,ys=new k,Ms=new k,Oa=new k,Ss=new k,Ul=new k,Es=new k;class hn extends nn{constructor(t=new jn,e=new Ko){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const h=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,c=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const h=this.morphTargetInfluences;if(a&&h){Ss.set(0,0,0);for(let d=0,m=a.length;d<m;d++){const g=h[d],v=a[d];g!==0&&(Oa.fromBufferAttribute(v,t),c?Ss.addScaledVector(Oa,g):Ss.addScaledVector(Oa.sub(e),g))}e.add(Ss)}return e}raycast(t,e){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(a),Ui.copy(t.ray).recast(t.near),!(vs.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(vs,Il)===null||Ui.origin.distanceToSquared(Il)>(t.far-t.near)**2))&&(Ll.copy(a).invert(),Ui.copy(t.ray).applyMatrix4(Ll),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,n){let s;const a=this.geometry,c=this.material,h=a.index,d=a.attributes.position,m=a.attributes.uv,g=a.attributes.uv1,v=a.attributes.normal,y=a.groups,S=a.drawRange;if(h!==null)if(Array.isArray(c))for(let T=0,A=y.length;T<A;T++){const M=y[T],p=c[M.materialIndex],F=Math.max(M.start,S.start),U=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let D=F,q=U;D<q;D+=3){const H=h.getX(D),l=h.getX(D+1),j=h.getX(D+2);s=Ts(this,p,t,n,m,g,v,H,l,j),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=M.materialIndex,e.push(s))}}else{const T=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let M=T,p=A;M<p;M+=3){const F=h.getX(M),U=h.getX(M+1),D=h.getX(M+2);s=Ts(this,c,t,n,m,g,v,F,U,D),s&&(s.faceIndex=Math.floor(M/3),e.push(s))}}else if(d!==void 0)if(Array.isArray(c))for(let T=0,A=y.length;T<A;T++){const M=y[T],p=c[M.materialIndex],F=Math.max(M.start,S.start),U=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let D=F,q=U;D<q;D+=3){const H=D,l=D+1,j=D+2;s=Ts(this,p,t,n,m,g,v,H,l,j),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=M.materialIndex,e.push(s))}}else{const T=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let M=T,p=A;M<p;M+=3){const F=M,U=M+1,D=M+2;s=Ts(this,c,t,n,m,g,v,F,U,D),s&&(s.faceIndex=Math.floor(M/3),e.push(s))}}}}function kh(i,t,e,n,s,a,c,h){let d;if(t.side===xn?d=n.intersectTriangle(c,a,s,!0,h):d=n.intersectTriangle(s,a,c,t.side===Ai,h),d===null)return null;Es.copy(h),Es.applyMatrix4(i.matrixWorld);const m=e.ray.origin.distanceTo(Es);return m<e.near||m>e.far?null:{distance:m,point:Es.clone(),object:i}}function Ts(i,t,e,n,s,a,c,h,d,m){i.getVertexPosition(h,xs),i.getVertexPosition(d,ys),i.getVertexPosition(m,Ms);const g=kh(i,t,e,n,xs,ys,Ms,Ul);if(g){const v=new k;Un.getBarycoord(Ul,xs,ys,Ms,v),s&&(g.uv=Un.getInterpolatedAttribute(s,h,d,m,v,new re)),a&&(g.uv1=Un.getInterpolatedAttribute(a,h,d,m,v,new re)),c&&(g.normal=Un.getInterpolatedAttribute(c,h,d,m,v,new k),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));const y={a:h,b:d,c:m,normal:new k,materialIndex:0};Un.getNormal(xs,ys,Ms,y.normal),g.face=y,g.barycoord=v}return g}class br extends jn{constructor(t=1,e=1,n=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:a,depthSegments:c};const h=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const d=[],m=[],g=[],v=[];let y=0,S=0;T("z","y","x",-1,-1,n,e,t,c,a,0),T("z","y","x",1,-1,n,e,-t,c,a,1),T("x","z","y",1,1,t,n,e,s,c,2),T("x","z","y",1,-1,t,n,-e,s,c,3),T("x","y","z",1,-1,t,e,n,s,a,4),T("x","y","z",-1,-1,t,e,-n,s,a,5),this.setIndex(d),this.setAttribute("position",new En(m,3)),this.setAttribute("normal",new En(g,3)),this.setAttribute("uv",new En(v,2));function T(A,M,p,F,U,D,q,H,l,j,R){const C=D/l,z=q/j,lt=D/2,Y=q/2,ft=H/2,mt=l+1,dt=j+1;let pt=0,st=0;const Mt=new k;for(let It=0;It<dt;It++){const Vt=It*z-Y;for(let ae=0;ae<mt;ae++){const Re=ae*C-lt;Mt[A]=Re*F,Mt[M]=Vt*U,Mt[p]=ft,m.push(Mt.x,Mt.y,Mt.z),Mt[A]=0,Mt[M]=0,Mt[p]=H>0?1:-1,g.push(Mt.x,Mt.y,Mt.z),v.push(ae/l),v.push(1-It/j),pt+=1}}for(let It=0;It<j;It++)for(let Vt=0;Vt<l;Vt++){const ae=y+Vt+mt*It,Re=y+Vt+mt*(It+1),ut=y+(Vt+1)+mt*(It+1),yt=y+(Vt+1)+mt*It;d.push(ae,Re,yt),d.push(Re,ut,yt),st+=6}h.addGroup(S,st,R),S+=st,y+=pt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new br(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Er(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function un(i){const t={};for(let e=0;e<i.length;e++){const n=Er(i[e]);for(const s in n)t[s]=n[s]}return t}function Vh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const Gh={clone:Er,merge:un};var Wh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends Tr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wh,this.fragmentShader=Xh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Er(t.uniforms),this.uniformsGroups=Vh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?e.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[s]={type:"m4",value:c.toArray()}:e.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Xc extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new k,Nl=new re,Fl=new re;class vn extends Xc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,Nl,Fl),e.subVectors(Fl,Nl)}setViewOffset(t,e,n,s,a,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,m=c.fullHeight;a+=c.offsetX*s/d,e-=c.offsetY*n/m,s*=c.width/d,n*=c.height/m}const h=this.filmOffset;h!==0&&(a+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hr=-90,fr=1;class qh extends nn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(hr,fr,t,e);s.layers=this.layers,this.add(s);const a=new vn(hr,fr,t,e);a.layers=this.layers,this.add(a);const c=new vn(hr,fr,t,e);c.layers=this.layers,this.add(c);const h=new vn(hr,fr,t,e);h.layers=this.layers,this.add(h);const d=new vn(hr,fr,t,e);d.layers=this.layers,this.add(d);const m=new vn(hr,fr,t,e);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,a,c,h,d]=e;for(const m of e)this.remove(m);if(t===li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===Xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of e)this.add(m),m.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,c,h,d,m,g]=this.children,v=t.getRenderTarget(),y=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,a),t.setRenderTarget(n,1,s),t.render(e,c),t.setRenderTarget(n,2,s),t.render(e,h),t.setRenderTarget(n,3,s),t.render(e,d),t.setRenderTarget(n,4,s),t.render(e,m),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),t.render(e,g),t.setRenderTarget(v,y,S),t.xr.enabled=T,n.texture.needsPMREMUpdate=!0}}class qc extends yn{constructor(t=[],e=yr,n,s,a,c,h,d,m,g){super(t,e,n,s,a,c,h,d,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jh extends Xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new qc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new br(5,5,5),a=new wi({name:"CubemapFromEquirect",uniforms:Er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Ti});a.uniforms.tEquirect.value=e;const c=new hn(s,a),h=e.minFilter;return e.minFilter===Gi&&(e.minFilter=Gn),new qh(1,10,this).update(t,c),e.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const a=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,n,s);t.setRenderTarget(a)}}class bs extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yh={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,a=null,c=null;const h=this._targetRay,d=this._grip,m=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(m&&t.hand){c=!0;for(const A of t.hand.values()){const M=e.getJointPose(A,n),p=this._getHandJoint(m,A);M!==null&&(p.matrix.fromArray(M.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=M.radius),p.visible=M!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],y=g.position.distanceTo(v.position),S=.02,T=.005;m.inputState.pinching&&y>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&y<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));h!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Yh)))}return h!==null&&(h.visible=s!==null),d!==null&&(d.visible=a!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new bs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class $h extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const za=new k,Kh=new k,Zh=new se;class Si{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=za.subVectors(n,e).cross(Kh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(za),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Zh.getNormalMatrix(t),s=this.coplanarPoint(za).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Js,As=new k;class Zo{constructor(t=new Si,e=new Si,n=new Si,s=new Si,a=new Si,c=new Si){this.planes=[t,e,n,s,a,c]}set(t,e,n,s,a,c){const h=this.planes;return h[0].copy(t),h[1].copy(e),h[2].copy(n),h[3].copy(s),h[4].copy(a),h[5].copy(c),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=li){const n=this.planes,s=t.elements,a=s[0],c=s[1],h=s[2],d=s[3],m=s[4],g=s[5],v=s[6],y=s[7],S=s[8],T=s[9],A=s[10],M=s[11],p=s[12],F=s[13],U=s[14],D=s[15];if(n[0].setComponents(d-a,y-m,M-S,D-p).normalize(),n[1].setComponents(d+a,y+m,M+S,D+p).normalize(),n[2].setComponents(d+c,y+g,M+T,D+F).normalize(),n[3].setComponents(d-c,y-g,M-T,D-F).normalize(),n[4].setComponents(d-h,y-v,M-A,D-U).normalize(),e===li)n[5].setComponents(d+h,y+v,M+A,D+U).normalize();else if(e===Xs)n[5].setComponents(h,v,A,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(As.x=s.normal.x>0?t.max.x:t.min.x,As.y=s.normal.y>0?t.max.y:t.min.y,As.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(As)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jc extends Tr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ys=new k,$s=new k,Ol=new He,Vr=new Qs,ws=new Js,Ha=new k,Bl=new k;class Jh extends nn{constructor(t=new jn,e=new jc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,a=e.count;s<a;s++)Ys.fromBufferAttribute(e,s-1),$s.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ys.distanceTo($s);t.setAttribute("lineDistance",new En(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(s),ws.radius+=a,t.ray.intersectsSphere(ws)===!1)return;Ol.copy(s).invert(),Vr.copy(t.ray).applyMatrix4(Ol);const h=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,m=this.isLineSegments?2:1,g=n.index,y=n.attributes.position;if(g!==null){const S=Math.max(0,c.start),T=Math.min(g.count,c.start+c.count);for(let A=S,M=T-1;A<M;A+=m){const p=g.getX(A),F=g.getX(A+1),U=Cs(this,t,Vr,d,p,F,A);U&&e.push(U)}if(this.isLineLoop){const A=g.getX(T-1),M=g.getX(S),p=Cs(this,t,Vr,d,A,M,T-1);p&&e.push(p)}}else{const S=Math.max(0,c.start),T=Math.min(y.count,c.start+c.count);for(let A=S,M=T-1;A<M;A+=m){const p=Cs(this,t,Vr,d,A,A+1,A);p&&e.push(p)}if(this.isLineLoop){const A=Cs(this,t,Vr,d,T-1,S,T-1);A&&e.push(A)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const h=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}}function Cs(i,t,e,n,s,a,c){const h=i.geometry.attributes.position;if(Ys.fromBufferAttribute(h,s),$s.fromBufferAttribute(h,a),e.distanceSqToSegment(Ys,$s,Ha,Bl)>n)return;Ha.applyMatrix4(i.matrixWorld);const m=t.ray.origin.distanceTo(Ha);if(!(m<t.near||m>t.far))return{distance:m,point:Bl.clone().applyMatrix4(i.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:i}}const zl=new k,Hl=new k;class Qh extends Jh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,a=e.count;s<a;s+=2)zl.fromBufferAttribute(e,s),Hl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+zl.distanceTo(Hl);t.setAttribute("lineDistance",new En(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yc extends yn{constructor(t,e,n=Wi,s,a,c,h=Fn,d=Fn,m,g=Yr){if(g!==Yr&&g!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,a,c,h,d,g,n,m),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Qr extends jn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const a=t/2,c=e/2,h=Math.floor(n),d=Math.floor(s),m=h+1,g=d+1,v=t/h,y=e/d,S=[],T=[],A=[],M=[];for(let p=0;p<g;p++){const F=p*y-c;for(let U=0;U<m;U++){const D=U*v-a;T.push(D,-F,0),A.push(0,0,1),M.push(U/h),M.push(1-p/d)}}for(let p=0;p<d;p++)for(let F=0;F<h;F++){const U=F+m*p,D=F+m*(p+1),q=F+1+m*(p+1),H=F+1+m*p;S.push(U,D,H),S.push(D,q,H)}this.setIndex(S),this.setAttribute("position",new En(T,3)),this.setAttribute("normal",new En(A,3)),this.setAttribute("uv",new En(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qr(t.width,t.height,t.widthSegments,t.heightSegments)}}class ta extends jn{constructor(t=1,e=32,n=16,s=0,a=Math.PI*2,c=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:a,thetaStart:c,thetaLength:h},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const d=Math.min(c+h,Math.PI);let m=0;const g=[],v=new k,y=new k,S=[],T=[],A=[],M=[];for(let p=0;p<=n;p++){const F=[],U=p/n;let D=0;p===0&&c===0?D=.5/e:p===n&&d===Math.PI&&(D=-.5/e);for(let q=0;q<=e;q++){const H=q/e;v.x=-t*Math.cos(s+H*a)*Math.sin(c+U*h),v.y=t*Math.cos(c+U*h),v.z=t*Math.sin(s+H*a)*Math.sin(c+U*h),T.push(v.x,v.y,v.z),y.copy(v).normalize(),A.push(y.x,y.y,y.z),M.push(H+D,1-U),F.push(m++)}g.push(F)}for(let p=0;p<n;p++)for(let F=0;F<e;F++){const U=g[p][F+1],D=g[p][F],q=g[p+1][F],H=g[p+1][F+1];(p!==0||c>0)&&S.push(U,D,H),(p!==n-1||d<Math.PI)&&S.push(D,q,H)}this.setIndex(S),this.setAttribute("position",new En(T,3)),this.setAttribute("normal",new En(A,3)),this.setAttribute("uv",new En(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ta(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ks extends Tr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oc,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tf extends Tr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ef extends Tr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class $c extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ka=new He,kl=new k,Vl=new k;class Kc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zo,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;kl.setFromMatrixPosition(t.matrixWorld),e.position.copy(kl),Vl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vl),e.updateMatrixWorld(),ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ka)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class nf extends Kc{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=qs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=t.distance||e.far;(n!==e.fov||s!==e.aspect||a!==e.far)&&(e.fov=n,e.aspect=s,e.far=a,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Rs extends $c{constructor(t,e,n=0,s=Math.PI/3,a=0,c=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.distance=n,this.angle=s,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new nf}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Gl=new He,Gr=new k,Va=new k;class rf extends Kc{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new Fe(2,1,1,1),new Fe(0,1,1,1),new Fe(3,1,1,1),new Fe(1,1,1,1),new Fe(3,0,1,1),new Fe(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,a=t.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Gr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Gr),Va.copy(n.position),Va.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Va),n.updateMatrixWorld(),s.makeTranslation(-Gr.x,-Gr.y,-Gr.z),Gl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl)}}class Wl extends $c{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new rf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class sf extends Xc{constructor(t=-1,e=1,n=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-t,c=n+t,h=s+e,d=s-e;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=m*this.view.offsetX,c=a+m*this.view.width,h-=g*this.view.offsetY,d=h-g*this.view.height}this.projectionMatrix.makeOrthographic(a,c,h,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class af extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Zc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Xl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Xl(){return performance.now()}const ql=new He;class of{constructor(t,e,n=0,s=1/0){this.ray=new Qs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new $o,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ql.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ql),this}intersectObject(t,e=!0,n=[]){return zo(t,this,n,e),n.sort(jl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,a=t.length;s<a;s++)zo(t[s],this,n,e);return n.sort(jl),n}}function jl(i,t){return i.distance-t.distance}function zo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const a=i.children;for(let c=0,h=a.length;c<h;c++)zo(a[c],t,e,!0)}}class Yl{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ve(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const $l=new k;class Ga extends nn{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new jn,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let c=0,h=1,d=32;c<d;c++,h++){const m=c/d*Math.PI*2,g=h/d*Math.PI*2;s.push(Math.cos(m),Math.sin(m),1,Math.cos(g),Math.sin(g),1)}n.setAttribute("position",new En(s,3));const a=new jc({fog:!1,toneMapped:!1});this.cone=new Qh(n,a),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),$l.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt($l),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}class lf extends hn{constructor(t,e,n){const s=new ta(e,4,2),a=new Ko({wireframe:!0,fog:!1,toneMapped:!1});super(s,a),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}class cf extends Yi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Kl(i,t,e,n){const s=uf(n);switch(e){case Lc:return i*t;case Uc:return i*t/s.components*s.byteLength;case Xo:return i*t/s.components*s.byteLength;case Nc:return i*t*2/s.components*s.byteLength;case qo:return i*t*2/s.components*s.byteLength;case Ic:return i*t*3/s.components*s.byteLength;case Nn:return i*t*4/s.components*s.byteLength;case jo:return i*t*4/s.components*s.byteLength;case Ns:case Fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Os:case Bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case po:case go:return Math.max(i,16)*Math.max(t,8)/4;case fo:case mo:return Math.max(i,8)*Math.max(t,8)/2;case _o:case vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case So:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case To:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case bo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Co:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Po:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Lo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Io:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zs:case Uo:case No:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Fc:case Fo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Oo:case Bo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function uf(i){switch(i){case Xn:case Rc:return{byteLength:1,components:1};case qr:case Pc:case Zr:return{byteLength:2,components:1};case Go:case Wo:return{byteLength:2,components:4};case Wi:case Vo:case oi:return{byteLength:4,components:1};case Dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ko}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ko);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jc(){let i=null,t=!1,e=null,n=null;function s(a,c){e(a,c),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function hf(i){const t=new WeakMap;function e(h,d){const m=h.array,g=h.usage,v=m.byteLength,y=i.createBuffer();i.bindBuffer(d,y),i.bufferData(d,m,g),h.onUploadCallback();let S;if(m instanceof Float32Array)S=i.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=i.SHORT;else if(m instanceof Uint32Array)S=i.UNSIGNED_INT;else if(m instanceof Int32Array)S=i.INT;else if(m instanceof Int8Array)S=i.BYTE;else if(m instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:v}}function n(h,d,m){const g=d.array,v=d.updateRanges;if(i.bindBuffer(m,h),v.length===0)i.bufferSubData(m,0,g);else{v.sort((S,T)=>S.start-T.start);let y=0;for(let S=1;S<v.length;S++){const T=v[y],A=v[S];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++y,v[y]=A)}v.length=y+1;for(let S=0,T=v.length;S<T;S++){const A=v[S];i.bufferSubData(m,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=t.get(h);d&&(i.deleteBuffer(d.buffer),t.delete(h))}function c(h,d){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,e(h,d));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(m.buffer,h,d),m.version=h.version}}return{get:s,remove:a,update:c}}var ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,df=`#ifdef USE_ALPHAHASH
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
#endif`,pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vf=`#ifdef USE_AOMAP
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
#endif`,xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yf=`#ifdef USE_BATCHING
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
#endif`,Mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bf=`#ifdef USE_IRIDESCENCE
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
#endif`,Af=`#ifdef USE_BUMPMAP
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
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nf=`#define PI 3.141592653589793
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
} // validated`,Ff=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Of=`vec3 transformedNormal = objectNormal;
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
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qf=`#ifdef USE_GRADIENTMAP
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
}`,td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,id=`uniform bool receiveShadow;
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
#endif`,rd=`#ifdef USE_ENVMAP
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
#endif`,sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,od=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cd=`PhysicalMaterial material;
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
#endif`,ud=`struct PhysicalMaterial {
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
}`,hd=`
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
#endif`,fd=`#if defined( RE_IndirectDiffuse )
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
#endif`,dd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,md=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_d=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Md=`#if defined( USE_POINTS_UV )
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
#endif`,Sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ed=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Td=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ad=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wd=`#ifdef USE_MORPHTARGETS
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
#endif`,Cd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Id=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ud=`#ifdef USE_NORMALMAP
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
#endif`,Nd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$d=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kd=`float getShadowMask() {
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
}`,Zd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jd=`#ifdef USE_SKINNING
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
#endif`,Qd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tp=`#ifdef USE_SKINNING
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
#endif`,ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sp=`#ifdef USE_TRANSMISSION
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
#endif`,ap=`#ifdef USE_TRANSMISSION
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
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fp=`uniform sampler2D t2D;
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
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`#include <common>
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
}`,vp=`#if DEPTH_PACKING == 3200
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
}`,xp=`#define DISTANCE
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
}`,yp=`#define DISTANCE
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
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`uniform float scale;
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
}`,Tp=`uniform vec3 diffuse;
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
}`,bp=`#include <common>
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
}`,Ap=`uniform vec3 diffuse;
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
}`,wp=`#define LAMBERT
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
}`,Cp=`#define LAMBERT
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
}`,Rp=`#define MATCAP
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
}`,Pp=`#define MATCAP
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
}`,Dp=`#define NORMAL
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
}`,Lp=`#define NORMAL
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
}`,Ip=`#define PHONG
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
}`,Up=`#define PHONG
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
}`,Np=`#define STANDARD
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
}`,Fp=`#define STANDARD
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
}`,Op=`#define TOON
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
}`,Bp=`#define TOON
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
}`,zp=`uniform float size;
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
}`,Hp=`uniform vec3 diffuse;
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
}`,kp=`#include <common>
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
}`,Vp=`uniform vec3 color;
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
}`,Gp=`uniform float rotation;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:ff,alphahash_pars_fragment:df,alphamap_fragment:pf,alphamap_pars_fragment:mf,alphatest_fragment:gf,alphatest_pars_fragment:_f,aomap_fragment:vf,aomap_pars_fragment:xf,batching_pars_vertex:yf,batching_vertex:Mf,begin_vertex:Sf,beginnormal_vertex:Ef,bsdfs:Tf,iridescence_fragment:bf,bumpmap_pars_fragment:Af,clipping_planes_fragment:wf,clipping_planes_pars_fragment:Cf,clipping_planes_pars_vertex:Rf,clipping_planes_vertex:Pf,color_fragment:Df,color_pars_fragment:Lf,color_pars_vertex:If,color_vertex:Uf,common:Nf,cube_uv_reflection_fragment:Ff,defaultnormal_vertex:Of,displacementmap_pars_vertex:Bf,displacementmap_vertex:zf,emissivemap_fragment:Hf,emissivemap_pars_fragment:kf,colorspace_fragment:Vf,colorspace_pars_fragment:Gf,envmap_fragment:Wf,envmap_common_pars_fragment:Xf,envmap_pars_fragment:qf,envmap_pars_vertex:jf,envmap_physical_pars_fragment:rd,envmap_vertex:Yf,fog_vertex:$f,fog_pars_vertex:Kf,fog_fragment:Zf,fog_pars_fragment:Jf,gradientmap_pars_fragment:Qf,lightmap_pars_fragment:td,lights_lambert_fragment:ed,lights_lambert_pars_fragment:nd,lights_pars_begin:id,lights_toon_fragment:sd,lights_toon_pars_fragment:ad,lights_phong_fragment:od,lights_phong_pars_fragment:ld,lights_physical_fragment:cd,lights_physical_pars_fragment:ud,lights_fragment_begin:hd,lights_fragment_maps:fd,lights_fragment_end:dd,logdepthbuf_fragment:pd,logdepthbuf_pars_fragment:md,logdepthbuf_pars_vertex:gd,logdepthbuf_vertex:_d,map_fragment:vd,map_pars_fragment:xd,map_particle_fragment:yd,map_particle_pars_fragment:Md,metalnessmap_fragment:Sd,metalnessmap_pars_fragment:Ed,morphinstance_vertex:Td,morphcolor_vertex:bd,morphnormal_vertex:Ad,morphtarget_pars_vertex:wd,morphtarget_vertex:Cd,normal_fragment_begin:Rd,normal_fragment_maps:Pd,normal_pars_fragment:Dd,normal_pars_vertex:Ld,normal_vertex:Id,normalmap_pars_fragment:Ud,clearcoat_normal_fragment_begin:Nd,clearcoat_normal_fragment_maps:Fd,clearcoat_pars_fragment:Od,iridescence_pars_fragment:Bd,opaque_fragment:zd,packing:Hd,premultiplied_alpha_fragment:kd,project_vertex:Vd,dithering_fragment:Gd,dithering_pars_fragment:Wd,roughnessmap_fragment:Xd,roughnessmap_pars_fragment:qd,shadowmap_pars_fragment:jd,shadowmap_pars_vertex:Yd,shadowmap_vertex:$d,shadowmask_pars_fragment:Kd,skinbase_vertex:Zd,skinning_pars_vertex:Jd,skinning_vertex:Qd,skinnormal_vertex:tp,specularmap_fragment:ep,specularmap_pars_fragment:np,tonemapping_fragment:ip,tonemapping_pars_fragment:rp,transmission_fragment:sp,transmission_pars_fragment:ap,uv_pars_fragment:op,uv_pars_vertex:lp,uv_vertex:cp,worldpos_vertex:up,background_vert:hp,background_frag:fp,backgroundCube_vert:dp,backgroundCube_frag:pp,cube_vert:mp,cube_frag:gp,depth_vert:_p,depth_frag:vp,distanceRGBA_vert:xp,distanceRGBA_frag:yp,equirect_vert:Mp,equirect_frag:Sp,linedashed_vert:Ep,linedashed_frag:Tp,meshbasic_vert:bp,meshbasic_frag:Ap,meshlambert_vert:wp,meshlambert_frag:Cp,meshmatcap_vert:Rp,meshmatcap_frag:Pp,meshnormal_vert:Dp,meshnormal_frag:Lp,meshphong_vert:Ip,meshphong_frag:Up,meshphysical_vert:Np,meshphysical_frag:Fp,meshtoon_vert:Op,meshtoon_frag:Bp,points_vert:zp,points_frag:Hp,shadow_vert:kp,shadow_frag:Vp,sprite_vert:Gp,sprite_frag:Wp},Et={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Vn={basic:{uniforms:un([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:un([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new xe(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:un([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:un([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:un([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new xe(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:un([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:un([Et.points,Et.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:un([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:un([Et.common,Et.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:un([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:un([Et.sprite,Et.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:un([Et.common,Et.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:un([Et.lights,Et.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Vn.physical={uniforms:un([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const Ps={r:0,b:0,g:0},Fi=new qn,Xp=new He;function qp(i,t,e,n,s,a,c){const h=new xe(0);let d=a===!0?0:1,m,g,v=null,y=0,S=null;function T(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?e:t).get(D)),D}function A(U){let D=!1;const q=T(U);q===null?p(h,d):q&&q.isColor&&(p(q,1),D=!0);const H=i.xr.getEnvironmentBlendMode();H==="additive"?n.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||D)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(U,D){const q=T(D);q&&(q.isCubeTexture||q.mapping===Zs)?(g===void 0&&(g=new hn(new br(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:Er(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,l,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(g)),Fi.copy(D.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,q.isCubeTexture&&q.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),g.material.uniforms.envMap.value=q,g.material.uniforms.flipEnvMap.value=q.isCubeTexture&&q.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Xp.makeRotationFromEuler(Fi)),g.material.toneMapped=Ce.getTransfer(q.colorSpace)!==Ue,(v!==q||y!==q.version||S!==i.toneMapping)&&(g.material.needsUpdate=!0,v=q,y=q.version,S=i.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):q&&q.isTexture&&(m===void 0&&(m=new hn(new Qr(2,2),new wi({name:"BackgroundMaterial",uniforms:Er(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=q,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Ce.getTransfer(q.colorSpace)!==Ue,q.matrixAutoUpdate===!0&&q.updateMatrix(),m.material.uniforms.uvTransform.value.copy(q.matrix),(v!==q||y!==q.version||S!==i.toneMapping)&&(m.material.needsUpdate=!0,v=q,y=q.version,S=i.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function p(U,D){U.getRGB(Ps,Wc(i)),n.buffers.color.setClear(Ps.r,Ps.g,Ps.b,D,c)}function F(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,D=1){h.set(U),d=D,p(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(U){d=U,p(h,d)},render:A,addToRenderList:M,dispose:F}}function jp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=y(null);let a=s,c=!1;function h(C,z,lt,Y,ft){let mt=!1;const dt=v(Y,lt,z);a!==dt&&(a=dt,m(a.object)),mt=S(C,Y,lt,ft),mt&&T(C,Y,lt,ft),ft!==null&&t.update(ft,i.ELEMENT_ARRAY_BUFFER),(mt||c)&&(c=!1,D(C,z,lt,Y),ft!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function d(){return i.createVertexArray()}function m(C){return i.bindVertexArray(C)}function g(C){return i.deleteVertexArray(C)}function v(C,z,lt){const Y=lt.wireframe===!0;let ft=n[C.id];ft===void 0&&(ft={},n[C.id]=ft);let mt=ft[z.id];mt===void 0&&(mt={},ft[z.id]=mt);let dt=mt[Y];return dt===void 0&&(dt=y(d()),mt[Y]=dt),dt}function y(C){const z=[],lt=[],Y=[];for(let ft=0;ft<e;ft++)z[ft]=0,lt[ft]=0,Y[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:lt,attributeDivisors:Y,object:C,attributes:{},index:null}}function S(C,z,lt,Y){const ft=a.attributes,mt=z.attributes;let dt=0;const pt=lt.getAttributes();for(const st in pt)if(pt[st].location>=0){const It=ft[st];let Vt=mt[st];if(Vt===void 0&&(st==="instanceMatrix"&&C.instanceMatrix&&(Vt=C.instanceMatrix),st==="instanceColor"&&C.instanceColor&&(Vt=C.instanceColor)),It===void 0||It.attribute!==Vt||Vt&&It.data!==Vt.data)return!0;dt++}return a.attributesNum!==dt||a.index!==Y}function T(C,z,lt,Y){const ft={},mt=z.attributes;let dt=0;const pt=lt.getAttributes();for(const st in pt)if(pt[st].location>=0){let It=mt[st];It===void 0&&(st==="instanceMatrix"&&C.instanceMatrix&&(It=C.instanceMatrix),st==="instanceColor"&&C.instanceColor&&(It=C.instanceColor));const Vt={};Vt.attribute=It,It&&It.data&&(Vt.data=It.data),ft[st]=Vt,dt++}a.attributes=ft,a.attributesNum=dt,a.index=Y}function A(){const C=a.newAttributes;for(let z=0,lt=C.length;z<lt;z++)C[z]=0}function M(C){p(C,0)}function p(C,z){const lt=a.newAttributes,Y=a.enabledAttributes,ft=a.attributeDivisors;lt[C]=1,Y[C]===0&&(i.enableVertexAttribArray(C),Y[C]=1),ft[C]!==z&&(i.vertexAttribDivisor(C,z),ft[C]=z)}function F(){const C=a.newAttributes,z=a.enabledAttributes;for(let lt=0,Y=z.length;lt<Y;lt++)z[lt]!==C[lt]&&(i.disableVertexAttribArray(lt),z[lt]=0)}function U(C,z,lt,Y,ft,mt,dt){dt===!0?i.vertexAttribIPointer(C,z,lt,ft,mt):i.vertexAttribPointer(C,z,lt,Y,ft,mt)}function D(C,z,lt,Y){A();const ft=Y.attributes,mt=lt.getAttributes(),dt=z.defaultAttributeValues;for(const pt in mt){const st=mt[pt];if(st.location>=0){let Mt=ft[pt];if(Mt===void 0&&(pt==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),pt==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor)),Mt!==void 0){const It=Mt.normalized,Vt=Mt.itemSize,ae=t.get(Mt);if(ae===void 0)continue;const Re=ae.buffer,ut=ae.type,yt=ae.bytesPerElement,Ot=ut===i.INT||ut===i.UNSIGNED_INT||Mt.gpuType===Vo;if(Mt.isInterleavedBufferAttribute){const bt=Mt.data,$t=bt.stride,Ee=Mt.offset;if(bt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<st.locationSize;Ht++)p(st.location+Ht,bt.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Ht=0;Ht<st.locationSize;Ht++)M(st.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let Ht=0;Ht<st.locationSize;Ht++)U(st.location+Ht,Vt/st.locationSize,ut,It,$t*yt,(Ee+Vt/st.locationSize*Ht)*yt,Ot)}else{if(Mt.isInstancedBufferAttribute){for(let bt=0;bt<st.locationSize;bt++)p(st.location+bt,Mt.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let bt=0;bt<st.locationSize;bt++)M(st.location+bt);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let bt=0;bt<st.locationSize;bt++)U(st.location+bt,Vt/st.locationSize,ut,It,Vt*yt,Vt/st.locationSize*bt*yt,Ot)}}else if(dt!==void 0){const It=dt[pt];if(It!==void 0)switch(It.length){case 2:i.vertexAttrib2fv(st.location,It);break;case 3:i.vertexAttrib3fv(st.location,It);break;case 4:i.vertexAttrib4fv(st.location,It);break;default:i.vertexAttrib1fv(st.location,It)}}}}F()}function q(){j();for(const C in n){const z=n[C];for(const lt in z){const Y=z[lt];for(const ft in Y)g(Y[ft].object),delete Y[ft];delete z[lt]}delete n[C]}}function H(C){if(n[C.id]===void 0)return;const z=n[C.id];for(const lt in z){const Y=z[lt];for(const ft in Y)g(Y[ft].object),delete Y[ft];delete z[lt]}delete n[C.id]}function l(C){for(const z in n){const lt=n[z];if(lt[C.id]===void 0)continue;const Y=lt[C.id];for(const ft in Y)g(Y[ft].object),delete Y[ft];delete lt[C.id]}}function j(){R(),c=!0,a!==s&&(a=s,m(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:h,reset:j,resetDefaultState:R,dispose:q,releaseStatesOfGeometry:H,releaseStatesOfProgram:l,initAttributes:A,enableAttribute:M,disableUnusedAttributes:F}}function Yp(i,t,e){let n;function s(m){n=m}function a(m,g){i.drawArrays(n,m,g),e.update(g,n,1)}function c(m,g,v){v!==0&&(i.drawArraysInstanced(n,m,g,v),e.update(g,n,v))}function h(m,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,m,0,g,0,v);let S=0;for(let T=0;T<v;T++)S+=g[T];e.update(S,n,1)}function d(m,g,v,y){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<m.length;T++)c(m[T],g[T],y[T]);else{S.multiDrawArraysInstancedWEBGL(n,m,0,g,0,y,0,v);let T=0;for(let A=0;A<v;A++)T+=g[A]*y[A];e.update(T,n,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function $p(i,t,e,n){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const l=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(l.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(l){return!(l!==Nn&&n.convert(l)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(l){const j=l===Zr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(l!==Xn&&n.convert(l)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&l!==oi&&!j)}function d(l){if(l==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";l="mediump"}return l==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=e.precision!==void 0?e.precision:"highp";const g=d(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=e.logarithmicDepthBuffer===!0,y=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),F=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),U=i.getParameter(i.MAX_VARYING_VECTORS),D=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),q=T>0,H=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:M,maxAttributes:p,maxVertexUniforms:F,maxVaryings:U,maxFragmentUniforms:D,vertexTextures:q,maxSamples:H}}function Kp(i){const t=this;let e=null,n=0,s=!1,a=!1;const c=new Si,h=new se,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||n!==0||s;return s=y,n=v.length,S},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,y){e=g(v,y,0)},this.setState=function(v,y,S){const T=v.clippingPlanes,A=v.clipIntersection,M=v.clipShadows,p=i.get(v);if(!s||T===null||T.length===0||a&&!M)a?g(null):m();else{const F=a?0:n,U=F*4;let D=p.clippingState||null;d.value=D,D=g(T,y,U,S);for(let q=0;q!==U;++q)D[q]=e[q];p.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=F}};function m(){d.value!==e&&(d.value=e,d.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function g(v,y,S,T){const A=v!==null?v.length:0;let M=null;if(A!==0){if(M=d.value,T!==!0||M===null){const p=S+A*4,F=y.matrixWorldInverse;h.getNormalMatrix(F),(M===null||M.length<p)&&(M=new Float32Array(p));for(let U=0,D=S;U!==A;++U,D+=4)c.copy(v[U]).applyMatrix4(F,h),c.normal.toArray(M,D),M[D+3]=c.constant}d.value=M,d.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}function Zp(i){let t=new WeakMap;function e(c,h){return h===lo?c.mapping=yr:h===co&&(c.mapping=Mr),c}function n(c){if(c&&c.isTexture){const h=c.mapping;if(h===lo||h===co)if(t.has(c)){const d=t.get(c).texture;return e(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const m=new jh(d.height);return m.fromEquirectangularTexture(i,c),t.set(c,m),c.addEventListener("dispose",s),e(m.texture,c.mapping)}else return null}}return c}function s(c){const h=c.target;h.removeEventListener("dispose",s);const d=t.get(h);d!==void 0&&(t.delete(h),d.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}const mr=4,Zl=[.125,.215,.35,.446,.526,.582],Hi=20,Wa=new sf,Jl=new xe;let Xa=null,qa=0,ja=0,Ya=!1;const Bi=(1+Math.sqrt(5))/2,dr=1/Bi,Ql=[new k(-Bi,dr,0),new k(Bi,dr,0),new k(-dr,0,Bi),new k(dr,0,Bi),new k(0,Bi,-dr),new k(0,Bi,dr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],Jp=new k;class tc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,a={}){const{size:c=256,position:h=Jp}=a;Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,n,s,d,h),e>0&&this._blur(d,0,0,e),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xa,qa,ja),this._renderer.xr.enabled=Ya,t.scissorTest=!1,Ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yr||t.mapping===Mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Zr,format:Nn,colorSpace:Sr,depthBuffer:!1},s=ec(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ec(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qp(a)),this._blurMaterial=tm(a,t,e)}return s}_compileMaterial(t){const e=new hn(this._lodPlanes[0],t);this._renderer.compile(e,Wa)}_sceneToCubeUV(t,e,n,s,a){const d=new vn(90,1,e,n),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,S=v.toneMapping;v.getClearColor(Jl),v.toneMapping=bi,v.autoClear=!1;const T=new Ko({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),A=new hn(new br,T);let M=!1;const p=t.background;p?p.isColor&&(T.color.copy(p),t.background=null,M=!0):(T.color.copy(Jl),M=!0);for(let F=0;F<6;F++){const U=F%3;U===0?(d.up.set(0,m[F],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+g[F],a.y,a.z)):U===1?(d.up.set(0,0,m[F]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+g[F],a.z)):(d.up.set(0,m[F],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+g[F]));const D=this._cubeSize;Ds(s,U*D,F>2?D:0,D,D),v.setRenderTarget(s),M&&v.render(A,d),v.render(t,d)}A.geometry.dispose(),A.material.dispose(),v.toneMapping=S,v.autoClear=y,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===yr||t.mapping===Mr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nc());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new hn(this._lodPlanes[0],a),h=a.uniforms;h.envMap.value=t;const d=this._cubeSize;Ds(e,0,0,3*d,2*d),n.setRenderTarget(e),n.render(c,Wa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),h=Ql[(s-a-1)%Ql.length];this._blur(t,a-1,a,c,h)}e.autoClear=n}_blur(t,e,n,s,a){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,n,s,"latitudinal",a),this._halfBlur(c,t,n,n,s,"longitudinal",a)}_halfBlur(t,e,n,s,a,c,h){const d=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new hn(this._lodPlanes[s],m),y=m.uniforms,S=this._sizeLods[n]-1,T=isFinite(a)?Math.PI/(2*S):2*Math.PI/(2*Hi-1),A=a/T,M=isFinite(a)?1+Math.floor(g*A):Hi;M>Hi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Hi}`);const p=[];let F=0;for(let l=0;l<Hi;++l){const j=l/A,R=Math.exp(-j*j/2);p.push(R),l===0?F+=R:l<M&&(F+=2*R)}for(let l=0;l<p.length;l++)p[l]=p[l]/F;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=p,y.latitudinal.value=c==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:U}=this;y.dTheta.value=T,y.mipInt.value=U-n;const D=this._sizeLods[s],q=3*D*(s>U-mr?s-U+mr:0),H=4*(this._cubeSize-D);Ds(e,q,H,3*D,2*D),d.setRenderTarget(e),d.render(v,Wa)}}function Qp(i){const t=[],e=[],n=[];let s=i;const a=i-mr+1+Zl.length;for(let c=0;c<a;c++){const h=Math.pow(2,s);e.push(h);let d=1/h;c>i-mr?d=Zl[c-i+mr-1]:c===0&&(d=0),n.push(d);const m=1/(h-2),g=-m,v=1+m,y=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,T=6,A=3,M=2,p=1,F=new Float32Array(A*T*S),U=new Float32Array(M*T*S),D=new Float32Array(p*T*S);for(let H=0;H<S;H++){const l=H%3*2/3-1,j=H>2?0:-1,R=[l,j,0,l+2/3,j,0,l+2/3,j+1,0,l,j,0,l+2/3,j+1,0,l,j+1,0];F.set(R,A*T*H),U.set(y,M*T*H);const C=[H,H,H,H,H,H];D.set(C,p*T*H)}const q=new jn;q.setAttribute("position",new Wn(F,A)),q.setAttribute("uv",new Wn(U,M)),q.setAttribute("faceIndex",new Wn(D,p)),t.push(q),s>mr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ec(i,t,e){const n=new Xi(i,t,e);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function tm(i,t,e){const n=new Float32Array(Hi),s=new k(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function nc(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function ic(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Jo(){return`

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
	`}function em(i){let t=new WeakMap,e=null;function n(h){if(h&&h.isTexture){const d=h.mapping,m=d===lo||d===co,g=d===yr||d===Mr;if(m||g){let v=t.get(h);const y=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return e===null&&(e=new tc(i)),v=m?e.fromEquirectangular(h,v):e.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const S=h.image;return m&&S&&S.height>0||g&&S&&s(S)?(e===null&&(e=new tc(i)),v=m?e.fromEquirectangular(h):e.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",a),v.texture):null}}}return h}function s(h){let d=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&d++;return d===m}function a(h){const d=h.target;d.removeEventListener("dispose",a);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:c}}function nm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ks("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function im(i,t,e,n){const s={},a=new WeakMap;function c(v){const y=v.target;y.index!==null&&t.remove(y.index);for(const T in y.attributes)t.remove(y.attributes[T]);y.removeEventListener("dispose",c),delete s[y.id];const S=a.get(y);S&&(t.remove(S),a.delete(y)),n.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,e.memory.geometries--}function h(v,y){return s[y.id]===!0||(y.addEventListener("dispose",c),s[y.id]=!0,e.memory.geometries++),y}function d(v){const y=v.attributes;for(const S in y)t.update(y[S],i.ARRAY_BUFFER)}function m(v){const y=[],S=v.index,T=v.attributes.position;let A=0;if(S!==null){const F=S.array;A=S.version;for(let U=0,D=F.length;U<D;U+=3){const q=F[U+0],H=F[U+1],l=F[U+2];y.push(q,H,H,l,l,q)}}else if(T!==void 0){const F=T.array;A=T.version;for(let U=0,D=F.length/3-1;U<D;U+=3){const q=U+0,H=U+1,l=U+2;y.push(q,H,H,l,l,q)}}else return;const M=new(zc(y)?Gc:Vc)(y,1);M.version=A;const p=a.get(v);p&&t.remove(p),a.set(v,M)}function g(v){const y=a.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&m(v)}else m(v);return a.get(v)}return{get:h,update:d,getWireframeAttribute:g}}function rm(i,t,e){let n;function s(y){n=y}let a,c;function h(y){a=y.type,c=y.bytesPerElement}function d(y,S){i.drawElements(n,S,a,y*c),e.update(S,n,1)}function m(y,S,T){T!==0&&(i.drawElementsInstanced(n,S,a,y*c,T),e.update(S,n,T))}function g(y,S,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,S,0,a,y,0,T);let M=0;for(let p=0;p<T;p++)M+=S[p];e.update(M,n,1)}function v(y,S,T,A){if(T===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let p=0;p<y.length;p++)m(y[p]/c,S[p],A[p]);else{M.multiDrawElementsInstancedWEBGL(n,S,0,a,y,0,A,0,T);let p=0;for(let F=0;F<T;F++)p+=S[F]*A[F];e.update(p,n,1)}}this.setMode=s,this.setIndex=h,this.render=d,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function sm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,c,h){switch(e.calls++,c){case i.TRIANGLES:e.triangles+=h*(a/3);break;case i.LINES:e.lines+=h*(a/2);break;case i.LINE_STRIP:e.lines+=h*(a-1);break;case i.LINE_LOOP:e.lines+=h*a;break;case i.POINTS:e.points+=h*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function am(i,t,e){const n=new WeakMap,s=new Fe;function a(c,h,d){const m=c.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let y=n.get(h);if(y===void 0||y.count!==v){let C=function(){j.dispose(),n.delete(h),h.removeEventListener("dispose",C)};var S=C;y!==void 0&&y.texture.dispose();const T=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,p=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let D=0;T===!0&&(D=1),A===!0&&(D=2),M===!0&&(D=3);let q=h.attributes.position.count*D,H=1;q>t.maxTextureSize&&(H=Math.ceil(q/t.maxTextureSize),q=t.maxTextureSize);const l=new Float32Array(q*H*4*v),j=new Hc(l,q,H,v);j.type=oi,j.needsUpdate=!0;const R=D*4;for(let z=0;z<v;z++){const lt=p[z],Y=F[z],ft=U[z],mt=q*H*4*z;for(let dt=0;dt<lt.count;dt++){const pt=dt*R;T===!0&&(s.fromBufferAttribute(lt,dt),l[mt+pt+0]=s.x,l[mt+pt+1]=s.y,l[mt+pt+2]=s.z,l[mt+pt+3]=0),A===!0&&(s.fromBufferAttribute(Y,dt),l[mt+pt+4]=s.x,l[mt+pt+5]=s.y,l[mt+pt+6]=s.z,l[mt+pt+7]=0),M===!0&&(s.fromBufferAttribute(ft,dt),l[mt+pt+8]=s.x,l[mt+pt+9]=s.y,l[mt+pt+10]=s.z,l[mt+pt+11]=ft.itemSize===4?s.w:1)}}y={count:v,texture:j,size:new re(q,H)},n.set(h,y),h.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",c.morphTexture,e);else{let T=0;for(let M=0;M<m.length;M++)T+=m[M];const A=h.morphTargetsRelative?1:1-T;d.getUniforms().setValue(i,"morphTargetBaseInfluence",A),d.getUniforms().setValue(i,"morphTargetInfluences",m)}d.getUniforms().setValue(i,"morphTargetsTexture",y.texture,e),d.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}return{update:a}}function om(i,t,e,n){let s=new WeakMap;function a(d){const m=n.render.frame,g=d.geometry,v=t.get(d,g);if(s.get(v)!==m&&(t.update(v),s.set(v,m)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),s.get(d)!==m&&(e.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,i.ARRAY_BUFFER),s.set(d,m))),d.isSkinnedMesh){const y=d.skeleton;s.get(y)!==m&&(y.update(),s.set(y,m))}return v}function c(){s=new WeakMap}function h(d){const m=d.target;m.removeEventListener("dispose",h),e.remove(m.instanceMatrix),m.instanceColor!==null&&e.remove(m.instanceColor)}return{update:a,dispose:c}}const Qc=new yn,rc=new Yc(1,1),tu=new Hc,eu=new Ph,nu=new qc,sc=[],ac=[],oc=new Float32Array(16),lc=new Float32Array(9),cc=new Float32Array(4);function Ar(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let a=sc[s];if(a===void 0&&(a=new Float32Array(s),sc[s]=a),t!==0){n.toArray(a,0);for(let c=1,h=0;c!==t;++c)h+=e,i[c].toArray(a,h)}return a}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ea(i,t){let e=ac[t];e===void 0&&(e=new Int32Array(t),ac[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),Je(e,t)}}function um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),Je(e,t)}}function hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),Je(e,t)}}function fm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;cc.set(n),i.uniformMatrix2fv(this.addr,!1,cc),Je(e,n)}}function dm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;lc.set(n),i.uniformMatrix3fv(this.addr,!1,lc),Je(e,n)}}function pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;oc.set(n),i.uniformMatrix4fv(this.addr,!1,oc),Je(e,n)}}function mm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),Je(e,t)}}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),Je(e,t)}}function vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),Je(e,t)}}function xm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),Je(e,t)}}function Mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),Je(e,t)}}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),Je(e,t)}}function Em(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(rc.compareFunction=Bc,a=rc):a=Qc,e.setTexture2D(t||a,s)}function Tm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||eu,s)}function bm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||nu,s)}function Am(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||tu,s)}function wm(i){switch(i){case 5126:return lm;case 35664:return cm;case 35665:return um;case 35666:return hm;case 35674:return fm;case 35675:return dm;case 35676:return pm;case 5124:case 35670:return mm;case 35667:case 35671:return gm;case 35668:case 35672:return _m;case 35669:case 35673:return vm;case 5125:return xm;case 36294:return ym;case 36295:return Mm;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return Em;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return Am}}function Cm(i,t){i.uniform1fv(this.addr,t)}function Rm(i,t){const e=Ar(t,this.size,2);i.uniform2fv(this.addr,e)}function Pm(i,t){const e=Ar(t,this.size,3);i.uniform3fv(this.addr,e)}function Dm(i,t){const e=Ar(t,this.size,4);i.uniform4fv(this.addr,e)}function Lm(i,t){const e=Ar(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Im(i,t){const e=Ar(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Um(i,t){const e=Ar(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Nm(i,t){i.uniform1iv(this.addr,t)}function Fm(i,t){i.uniform2iv(this.addr,t)}function Om(i,t){i.uniform3iv(this.addr,t)}function Bm(i,t){i.uniform4iv(this.addr,t)}function zm(i,t){i.uniform1uiv(this.addr,t)}function Hm(i,t){i.uniform2uiv(this.addr,t)}function km(i,t){i.uniform3uiv(this.addr,t)}function Vm(i,t){i.uniform4uiv(this.addr,t)}function Gm(i,t,e){const n=this.cache,s=t.length,a=ea(e,s);Ze(n,a)||(i.uniform1iv(this.addr,a),Je(n,a));for(let c=0;c!==s;++c)e.setTexture2D(t[c]||Qc,a[c])}function Wm(i,t,e){const n=this.cache,s=t.length,a=ea(e,s);Ze(n,a)||(i.uniform1iv(this.addr,a),Je(n,a));for(let c=0;c!==s;++c)e.setTexture3D(t[c]||eu,a[c])}function Xm(i,t,e){const n=this.cache,s=t.length,a=ea(e,s);Ze(n,a)||(i.uniform1iv(this.addr,a),Je(n,a));for(let c=0;c!==s;++c)e.setTextureCube(t[c]||nu,a[c])}function qm(i,t,e){const n=this.cache,s=t.length,a=ea(e,s);Ze(n,a)||(i.uniform1iv(this.addr,a),Je(n,a));for(let c=0;c!==s;++c)e.setTexture2DArray(t[c]||tu,a[c])}function jm(i){switch(i){case 5126:return Cm;case 35664:return Rm;case 35665:return Pm;case 35666:return Dm;case 35674:return Lm;case 35675:return Im;case 35676:return Um;case 5124:case 35670:return Nm;case 35667:case 35671:return Fm;case 35668:case 35672:return Om;case 35669:case 35673:return Bm;case 5125:return zm;case 36294:return Hm;case 36295:return km;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return qm}}class Ym{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=wm(e.type)}}class $m{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jm(e.type)}}class Km{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const h=s[a];h.setValue(t,e[h.id],n)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function uc(i,t){i.seq.push(t),i.map[t.id]=t}function Zm(i,t,e){const n=i.name,s=n.length;for($a.lastIndex=0;;){const a=$a.exec(n),c=$a.lastIndex;let h=a[1];const d=a[2]==="]",m=a[3];if(d&&(h=h|0),m===void 0||m==="["&&c+2===s){uc(e,m===void 0?new Ym(h,i,t):new $m(h,i,t));break}else{let v=e.map[h];v===void 0&&(v=new Km(h),uc(e,v)),e=v}}}class Vs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=t.getActiveUniform(e,s),c=t.getUniformLocation(e,a.name);Zm(a,c,this)}}setValue(t,e,n,s){const a=this.map[e];a!==void 0&&a.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let a=0,c=e.length;a!==c;++a){const h=e[a],d=n[h.id];d.needsUpdate!==!1&&h.setValue(t,d.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,a=t.length;s!==a;++s){const c=t[s];c.id in e&&n.push(c)}return n}}function hc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Jm=37297;let Qm=0;function tg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let c=s;c<a;c++){const h=c+1;n.push(`${h===t?">":" "} ${h}: ${e[c]}`)}return n.join(`
`)}const fc=new se;function eg(i){Ce._getMatrix(fc,Ce.workingColorSpace,i);const t=`mat3( ${fc.elements.map(e=>e.toFixed(4))} )`;switch(Ce.getTransfer(i)){case Ws:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function dc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+tg(i.getShaderSource(t),c)}else return s}function ng(i,t){const e=eg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ig(i,t){let e;switch(t){case eh:e="Linear";break;case nh:e="Reinhard";break;case ih:e="Cineon";break;case rh:e="ACESFilmic";break;case ah:e="AgX";break;case oh:e="Neutral";break;case sh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ls=new k;function rg(){Ce.getLuminanceCoefficients(Ls);const i=Ls.x.toFixed(4),t=Ls.y.toFixed(4),e=Ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function ag(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function og(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(t,s),c=a.name;let h=1;a.type===i.FLOAT_MAT2&&(h=2),a.type===i.FLOAT_MAT3&&(h=3),a.type===i.FLOAT_MAT4&&(h=4),e[c]={type:a.type,location:i.getAttribLocation(t,c),locationSize:h}}return e}function Xr(i){return i!==""}function pc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ho(i){return i.replace(lg,ug)}const cg=new Map;function ug(i,t){let e=le[t];if(e===void 0){const n=cg.get(t);if(n!==void 0)e=le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ho(e)}const hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gc(i){return i.replace(hg,fg)}function fg(i,t,e,n){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function _c(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function dg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ac?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Uu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function pg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yr:case Mr:t="ENVMAP_TYPE_CUBE";break;case Zs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Mr:t="ENVMAP_MODE_REFRACTION";break}return t}function gg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wc:t="ENVMAP_BLENDING_MULTIPLY";break;case Qu:t="ENVMAP_BLENDING_MIX";break;case th:t="ENVMAP_BLENDING_ADD";break}return t}function _g(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function vg(i,t,e,n){const s=i.getContext(),a=e.defines;let c=e.vertexShader,h=e.fragmentShader;const d=dg(e),m=pg(e),g=mg(e),v=gg(e),y=_g(e),S=sg(e),T=ag(a),A=s.createProgram();let M,p,F=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,T].filter(Xr).join(`
`),M.length>0&&(M+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,T].filter(Xr).join(`
`),p.length>0&&(p+=`
`)):(M=[_c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,T,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+g:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),p=[_c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,T,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.envMap?"#define "+g:"",e.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bi?"#define TONE_MAPPING":"",e.toneMapping!==bi?le.tonemapping_pars_fragment:"",e.toneMapping!==bi?ig("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,ng("linearToOutputTexel",e.outputColorSpace),rg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xr).join(`
`)),c=Ho(c),c=pc(c,e),c=mc(c,e),h=Ho(h),h=pc(h,e),h=mc(h,e),c=gc(c),h=gc(h),e.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,p=["#define varying in",e.glslVersion===xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const U=F+M+c,D=F+p+h,q=hc(s,s.VERTEX_SHADER,U),H=hc(s,s.FRAGMENT_SHADER,D);s.attachShader(A,q),s.attachShader(A,H),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function l(z){if(i.debug.checkShaderErrors){const lt=s.getProgramInfoLog(A).trim(),Y=s.getShaderInfoLog(q).trim(),ft=s.getShaderInfoLog(H).trim();let mt=!0,dt=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(mt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,q,H);else{const pt=dc(s,q,"vertex"),st=dc(s,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+lt+`
`+pt+`
`+st)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(Y===""||ft==="")&&(dt=!1);dt&&(z.diagnostics={runnable:mt,programLog:lt,vertexShader:{log:Y,prefix:M},fragmentShader:{log:ft,prefix:p}})}s.deleteShader(q),s.deleteShader(H),j=new Vs(s,A),R=og(s,A)}let j;this.getUniforms=function(){return j===void 0&&l(this),j};let R;this.getAttributes=function(){return R===void 0&&l(this),R};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(A,Jm)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qm++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=q,this.fragmentShader=H,this}let xg=0;class yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(n),c=this._getShaderCacheForMaterial(t);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Mg(t),e.set(t,n)),n}}class Mg{constructor(t){this.id=xg++,this.code=t,this.usedTimes=0}}function Sg(i,t,e,n,s,a,c){const h=new $o,d=new yg,m=new Set,g=[],v=s.logarithmicDepthBuffer,y=s.vertexTextures;let S=s.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(R){return m.add(R),R===0?"uv":`uv${R}`}function M(R,C,z,lt,Y){const ft=lt.fog,mt=Y.geometry,dt=R.isMeshStandardMaterial?lt.environment:null,pt=(R.isMeshStandardMaterial?e:t).get(R.envMap||dt),st=pt&&pt.mapping===Zs?pt.image.height:null,Mt=T[R.type];R.precision!==null&&(S=s.getMaxPrecision(R.precision),S!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const It=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,Vt=It!==void 0?It.length:0;let ae=0;mt.morphAttributes.position!==void 0&&(ae=1),mt.morphAttributes.normal!==void 0&&(ae=2),mt.morphAttributes.color!==void 0&&(ae=3);let Re,ut,yt,Ot;if(Mt){const Pe=Vn[Mt];Re=Pe.vertexShader,ut=Pe.fragmentShader}else Re=R.vertexShader,ut=R.fragmentShader,d.update(R),yt=d.getVertexShaderID(R),Ot=d.getFragmentShaderID(R);const bt=i.getRenderTarget(),$t=i.state.buffers.depth.getReversed(),Ee=Y.isInstancedMesh===!0,Ht=Y.isBatchedMesh===!0,Ve=!!R.map,De=!!R.matcap,ce=!!pt,O=!!R.aoMap,fn=!!R.lightMap,de=!!R.bumpMap,ue=!!R.normalMap,Ft=!!R.displacementMap,Oe=!!R.emissiveMap,Gt=!!R.metalnessMap,L=!!R.roughnessMap,b=R.anisotropy>0,K=R.clearcoat>0,ct=R.dispersion>0,Z=R.iridescence>0,rt=R.sheen>0,zt=R.transmission>0,At=b&&!!R.anisotropyMap,Kt=K&&!!R.clearcoatMap,Zt=K&&!!R.clearcoatNormalMap,_t=K&&!!R.clearcoatRoughnessMap,Lt=Z&&!!R.iridescenceMap,kt=Z&&!!R.iridescenceThicknessMap,jt=rt&&!!R.sheenColorMap,Dt=rt&&!!R.sheenRoughnessMap,ye=!!R.specularMap,ne=!!R.specularColorMap,Le=!!R.specularIntensityMap,G=zt&&!!R.transmissionMap,wt=zt&&!!R.thicknessMap,it=!!R.gradientMap,ht=!!R.alphaMap,Ct=R.alphaTest>0,Tt=!!R.alphaHash,qt=!!R.extensions;let pe=bi;R.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(pe=i.toneMapping);const Xe={shaderID:Mt,shaderType:R.type,shaderName:R.name,vertexShader:Re,fragmentShader:ut,defines:R.defines,customVertexShaderID:yt,customFragmentShaderID:Ot,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:Ht,batchingColor:Ht&&Y._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&Y.instanceColor!==null,instancingMorph:Ee&&Y.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:bt===null?i.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Sr,alphaToCoverage:!!R.alphaToCoverage,map:Ve,matcap:De,envMap:ce,envMapMode:ce&&pt.mapping,envMapCubeUVHeight:st,aoMap:O,lightMap:fn,bumpMap:de,normalMap:ue,displacementMap:y&&Ft,emissiveMap:Oe,normalMapObjectSpace:ue&&R.normalMapType===hh,normalMapTangentSpace:ue&&R.normalMapType===Oc,metalnessMap:Gt,roughnessMap:L,anisotropy:b,anisotropyMap:At,clearcoat:K,clearcoatMap:Kt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:_t,dispersion:ct,iridescence:Z,iridescenceMap:Lt,iridescenceThicknessMap:kt,sheen:rt,sheenColorMap:jt,sheenRoughnessMap:Dt,specularMap:ye,specularColorMap:ne,specularIntensityMap:Le,transmission:zt,transmissionMap:G,thicknessMap:wt,gradientMap:it,opaque:R.transparent===!1&&R.blending===_r&&R.alphaToCoverage===!1,alphaMap:ht,alphaTest:Ct,alphaHash:Tt,combine:R.combine,mapUv:Ve&&A(R.map.channel),aoMapUv:O&&A(R.aoMap.channel),lightMapUv:fn&&A(R.lightMap.channel),bumpMapUv:de&&A(R.bumpMap.channel),normalMapUv:ue&&A(R.normalMap.channel),displacementMapUv:Ft&&A(R.displacementMap.channel),emissiveMapUv:Oe&&A(R.emissiveMap.channel),metalnessMapUv:Gt&&A(R.metalnessMap.channel),roughnessMapUv:L&&A(R.roughnessMap.channel),anisotropyMapUv:At&&A(R.anisotropyMap.channel),clearcoatMapUv:Kt&&A(R.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&A(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&A(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&A(R.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&A(R.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&A(R.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&A(R.sheenRoughnessMap.channel),specularMapUv:ye&&A(R.specularMap.channel),specularColorMapUv:ne&&A(R.specularColorMap.channel),specularIntensityMapUv:Le&&A(R.specularIntensityMap.channel),transmissionMapUv:G&&A(R.transmissionMap.channel),thicknessMapUv:wt&&A(R.thicknessMap.channel),alphaMapUv:ht&&A(R.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(ue||b),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!mt.attributes.uv&&(Ve||ht),fog:!!ft,useFog:R.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:$t,skinning:Y.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:ae,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:R.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:Ve&&R.map.isVideoTexture===!0&&Ce.getTransfer(R.map.colorSpace)===Ue,decodeVideoTextureEmissive:Oe&&R.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(R.emissiveMap.colorSpace)===Ue,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ai,flipSided:R.side===xn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:qt&&R.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&R.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Xe.vertexUv1s=m.has(1),Xe.vertexUv2s=m.has(2),Xe.vertexUv3s=m.has(3),m.clear(),Xe}function p(R){const C=[];if(R.shaderID?C.push(R.shaderID):(C.push(R.customVertexShaderID),C.push(R.customFragmentShaderID)),R.defines!==void 0)for(const z in R.defines)C.push(z),C.push(R.defines[z]);return R.isRawShaderMaterial===!1&&(F(C,R),U(C,R),C.push(i.outputColorSpace)),C.push(R.customProgramCacheKey),C.join()}function F(R,C){R.push(C.precision),R.push(C.outputColorSpace),R.push(C.envMapMode),R.push(C.envMapCubeUVHeight),R.push(C.mapUv),R.push(C.alphaMapUv),R.push(C.lightMapUv),R.push(C.aoMapUv),R.push(C.bumpMapUv),R.push(C.normalMapUv),R.push(C.displacementMapUv),R.push(C.emissiveMapUv),R.push(C.metalnessMapUv),R.push(C.roughnessMapUv),R.push(C.anisotropyMapUv),R.push(C.clearcoatMapUv),R.push(C.clearcoatNormalMapUv),R.push(C.clearcoatRoughnessMapUv),R.push(C.iridescenceMapUv),R.push(C.iridescenceThicknessMapUv),R.push(C.sheenColorMapUv),R.push(C.sheenRoughnessMapUv),R.push(C.specularMapUv),R.push(C.specularColorMapUv),R.push(C.specularIntensityMapUv),R.push(C.transmissionMapUv),R.push(C.thicknessMapUv),R.push(C.combine),R.push(C.fogExp2),R.push(C.sizeAttenuation),R.push(C.morphTargetsCount),R.push(C.morphAttributeCount),R.push(C.numDirLights),R.push(C.numPointLights),R.push(C.numSpotLights),R.push(C.numSpotLightMaps),R.push(C.numHemiLights),R.push(C.numRectAreaLights),R.push(C.numDirLightShadows),R.push(C.numPointLightShadows),R.push(C.numSpotLightShadows),R.push(C.numSpotLightShadowsWithMaps),R.push(C.numLightProbes),R.push(C.shadowMapType),R.push(C.toneMapping),R.push(C.numClippingPlanes),R.push(C.numClipIntersection),R.push(C.depthPacking)}function U(R,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),R.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),R.push(h.mask)}function D(R){const C=T[R.type];let z;if(C){const lt=Vn[C];z=Gh.clone(lt.uniforms)}else z=R.uniforms;return z}function q(R,C){let z;for(let lt=0,Y=g.length;lt<Y;lt++){const ft=g[lt];if(ft.cacheKey===C){z=ft,++z.usedTimes;break}}return z===void 0&&(z=new vg(i,C,R,a),g.push(z)),z}function H(R){if(--R.usedTimes===0){const C=g.indexOf(R);g[C]=g[g.length-1],g.pop(),R.destroy()}}function l(R){d.remove(R)}function j(){d.dispose()}return{getParameters:M,getProgramCacheKey:p,getUniforms:D,acquireProgram:q,releaseProgram:H,releaseShaderCache:l,programs:g,dispose:j}}function Eg(){let i=new WeakMap;function t(c){return i.has(c)}function e(c){let h=i.get(c);return h===void 0&&(h={},i.set(c,h)),h}function n(c){i.delete(c)}function s(c,h,d){i.get(c)[h]=d}function a(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:a}}function Tg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function vc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xc(){const i=[];let t=0;const e=[],n=[],s=[];function a(){t=0,e.length=0,n.length=0,s.length=0}function c(v,y,S,T,A,M){let p=i[t];return p===void 0?(p={id:v.id,object:v,geometry:y,material:S,groupOrder:T,renderOrder:v.renderOrder,z:A,group:M},i[t]=p):(p.id=v.id,p.object=v,p.geometry=y,p.material=S,p.groupOrder=T,p.renderOrder=v.renderOrder,p.z=A,p.group=M),t++,p}function h(v,y,S,T,A,M){const p=c(v,y,S,T,A,M);S.transmission>0?n.push(p):S.transparent===!0?s.push(p):e.push(p)}function d(v,y,S,T,A,M){const p=c(v,y,S,T,A,M);S.transmission>0?n.unshift(p):S.transparent===!0?s.unshift(p):e.unshift(p)}function m(v,y){e.length>1&&e.sort(v||Tg),n.length>1&&n.sort(y||vc),s.length>1&&s.sort(y||vc)}function g(){for(let v=t,y=i.length;v<y;v++){const S=i[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:e,transmissive:n,transparent:s,init:a,push:h,unshift:d,finish:g,sort:m}}function bg(){let i=new WeakMap;function t(n,s){const a=i.get(n);let c;return a===void 0?(c=new xc,i.set(n,[c])):s>=a.length?(c=new xc,a.push(c)):c=a[s],c}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ag(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new xe};break;case"SpotLight":e={position:new k,direction:new k,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new xe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":e={color:new xe,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function wg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Cg=0;function Rg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Pg(i){const t=new Ag,e=wg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)n.probe.push(new k);const s=new k,a=new He,c=new He;function h(m){let g=0,v=0,y=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let S=0,T=0,A=0,M=0,p=0,F=0,U=0,D=0,q=0,H=0,l=0;m.sort(Rg);for(let R=0,C=m.length;R<C;R++){const z=m[R],lt=z.color,Y=z.intensity,ft=z.distance,mt=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=lt.r*Y,v+=lt.g*Y,y+=lt.b*Y;else if(z.isLightProbe){for(let dt=0;dt<9;dt++)n.probe[dt].addScaledVector(z.sh.coefficients[dt],Y);l++}else if(z.isDirectionalLight){const dt=t.get(z);if(dt.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const pt=z.shadow,st=e.get(z);st.shadowIntensity=pt.intensity,st.shadowBias=pt.bias,st.shadowNormalBias=pt.normalBias,st.shadowRadius=pt.radius,st.shadowMapSize=pt.mapSize,n.directionalShadow[S]=st,n.directionalShadowMap[S]=mt,n.directionalShadowMatrix[S]=z.shadow.matrix,F++}n.directional[S]=dt,S++}else if(z.isSpotLight){const dt=t.get(z);dt.position.setFromMatrixPosition(z.matrixWorld),dt.color.copy(lt).multiplyScalar(Y),dt.distance=ft,dt.coneCos=Math.cos(z.angle),dt.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),dt.decay=z.decay,n.spot[A]=dt;const pt=z.shadow;if(z.map&&(n.spotLightMap[q]=z.map,q++,pt.updateMatrices(z),z.castShadow&&H++),n.spotLightMatrix[A]=pt.matrix,z.castShadow){const st=e.get(z);st.shadowIntensity=pt.intensity,st.shadowBias=pt.bias,st.shadowNormalBias=pt.normalBias,st.shadowRadius=pt.radius,st.shadowMapSize=pt.mapSize,n.spotShadow[A]=st,n.spotShadowMap[A]=mt,D++}A++}else if(z.isRectAreaLight){const dt=t.get(z);dt.color.copy(lt).multiplyScalar(Y),dt.halfWidth.set(z.width*.5,0,0),dt.halfHeight.set(0,z.height*.5,0),n.rectArea[M]=dt,M++}else if(z.isPointLight){const dt=t.get(z);if(dt.color.copy(z.color).multiplyScalar(z.intensity),dt.distance=z.distance,dt.decay=z.decay,z.castShadow){const pt=z.shadow,st=e.get(z);st.shadowIntensity=pt.intensity,st.shadowBias=pt.bias,st.shadowNormalBias=pt.normalBias,st.shadowRadius=pt.radius,st.shadowMapSize=pt.mapSize,st.shadowCameraNear=pt.camera.near,st.shadowCameraFar=pt.camera.far,n.pointShadow[T]=st,n.pointShadowMap[T]=mt,n.pointShadowMatrix[T]=z.shadow.matrix,U++}n.point[T]=dt,T++}else if(z.isHemisphereLight){const dt=t.get(z);dt.skyColor.copy(z.color).multiplyScalar(Y),dt.groundColor.copy(z.groundColor).multiplyScalar(Y),n.hemi[p]=dt,p++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=g,n.ambient[1]=v,n.ambient[2]=y;const j=n.hash;(j.directionalLength!==S||j.pointLength!==T||j.spotLength!==A||j.rectAreaLength!==M||j.hemiLength!==p||j.numDirectionalShadows!==F||j.numPointShadows!==U||j.numSpotShadows!==D||j.numSpotMaps!==q||j.numLightProbes!==l)&&(n.directional.length=S,n.spot.length=A,n.rectArea.length=M,n.point.length=T,n.hemi.length=p,n.directionalShadow.length=F,n.directionalShadowMap.length=F,n.pointShadow.length=U,n.pointShadowMap.length=U,n.spotShadow.length=D,n.spotShadowMap.length=D,n.directionalShadowMatrix.length=F,n.pointShadowMatrix.length=U,n.spotLightMatrix.length=D+q-H,n.spotLightMap.length=q,n.numSpotLightShadowsWithMaps=H,n.numLightProbes=l,j.directionalLength=S,j.pointLength=T,j.spotLength=A,j.rectAreaLength=M,j.hemiLength=p,j.numDirectionalShadows=F,j.numPointShadows=U,j.numSpotShadows=D,j.numSpotMaps=q,j.numLightProbes=l,n.version=Cg++)}function d(m,g){let v=0,y=0,S=0,T=0,A=0;const M=g.matrixWorldInverse;for(let p=0,F=m.length;p<F;p++){const U=m[p];if(U.isDirectionalLight){const D=n.directional[v];D.direction.setFromMatrixPosition(U.matrixWorld),s.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(M),v++}else if(U.isSpotLight){const D=n.spot[S];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(U.matrixWorld),s.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const D=n.rectArea[T];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),c.identity(),a.copy(U.matrixWorld),a.premultiply(M),c.extractRotation(a),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(c),D.halfHeight.applyMatrix4(c),T++}else if(U.isPointLight){const D=n.point[y];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),y++}else if(U.isHemisphereLight){const D=n.hemi[A];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(M),A++}}}return{setup:h,setupView:d,state:n}}function yc(i){const t=new Pg(i),e=[],n=[];function s(g){m.camera=g,e.length=0,n.length=0}function a(g){e.push(g)}function c(g){n.push(g)}function h(){t.setup(e)}function d(g){t.setupView(e,g)}const m={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:m,setupLights:h,setupLightsView:d,pushLight:a,pushShadow:c}}function Dg(i){let t=new WeakMap;function e(s,a=0){const c=t.get(s);let h;return c===void 0?(h=new yc(i),t.set(s,[h])):a>=c.length?(h=new yc(i),c.push(h)):h=c[a],h}function n(){t=new WeakMap}return{get:e,dispose:n}}const Lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
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
}`;function Ug(i,t,e){let n=new Zo;const s=new re,a=new re,c=new Fe,h=new tf({depthPacking:uh}),d=new ef,m={},g=e.maxTextureSize,v={[Ai]:xn,[xn]:Ai,[ai]:ai},y=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Lg,fragmentShader:Ig}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const T=new jn;T.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new hn(T,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ac;let p=this.type;this.render=function(H,l,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;const R=i.getRenderTarget(),C=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),lt=i.state;lt.setBlending(Ti),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const Y=p!==si&&this.type===si,ft=p===si&&this.type!==si;for(let mt=0,dt=H.length;mt<dt;mt++){const pt=H[mt],st=pt.shadow;if(st===void 0){console.warn("THREE.WebGLShadowMap:",pt,"has no shadow.");continue}if(st.autoUpdate===!1&&st.needsUpdate===!1)continue;s.copy(st.mapSize);const Mt=st.getFrameExtents();if(s.multiply(Mt),a.copy(st.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(a.x=Math.floor(g/Mt.x),s.x=a.x*Mt.x,st.mapSize.x=a.x),s.y>g&&(a.y=Math.floor(g/Mt.y),s.y=a.y*Mt.y,st.mapSize.y=a.y)),st.map===null||Y===!0||ft===!0){const Vt=this.type!==si?{minFilter:Fn,magFilter:Fn}:{};st.map!==null&&st.map.dispose(),st.map=new Xi(s.x,s.y,Vt),st.map.texture.name=pt.name+".shadowMap",st.camera.updateProjectionMatrix()}i.setRenderTarget(st.map),i.clear();const It=st.getViewportCount();for(let Vt=0;Vt<It;Vt++){const ae=st.getViewport(Vt);c.set(a.x*ae.x,a.y*ae.y,a.x*ae.z,a.y*ae.w),lt.viewport(c),st.updateMatrices(pt,Vt),n=st.getFrustum(),D(l,j,st.camera,pt,this.type)}st.isPointLightShadow!==!0&&this.type===si&&F(st,j),st.needsUpdate=!1}p=this.type,M.needsUpdate=!1,i.setRenderTarget(R,C,z)};function F(H,l){const j=t.update(A);y.defines.VSM_SAMPLES!==H.blurSamples&&(y.defines.VSM_SAMPLES=H.blurSamples,S.defines.VSM_SAMPLES=H.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Xi(s.x,s.y)),y.uniforms.shadow_pass.value=H.map.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,i.setRenderTarget(H.mapPass),i.clear(),i.renderBufferDirect(l,null,j,y,A,null),S.uniforms.shadow_pass.value=H.mapPass.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,i.setRenderTarget(H.map),i.clear(),i.renderBufferDirect(l,null,j,S,A,null)}function U(H,l,j,R){let C=null;const z=j.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(z!==void 0)C=z;else if(C=j.isPointLight===!0?d:h,i.localClippingEnabled&&l.clipShadows===!0&&Array.isArray(l.clippingPlanes)&&l.clippingPlanes.length!==0||l.displacementMap&&l.displacementScale!==0||l.alphaMap&&l.alphaTest>0||l.map&&l.alphaTest>0||l.alphaToCoverage===!0){const lt=C.uuid,Y=l.uuid;let ft=m[lt];ft===void 0&&(ft={},m[lt]=ft);let mt=ft[Y];mt===void 0&&(mt=C.clone(),ft[Y]=mt,l.addEventListener("dispose",q)),C=mt}if(C.visible=l.visible,C.wireframe=l.wireframe,R===si?C.side=l.shadowSide!==null?l.shadowSide:l.side:C.side=l.shadowSide!==null?l.shadowSide:v[l.side],C.alphaMap=l.alphaMap,C.alphaTest=l.alphaToCoverage===!0?.5:l.alphaTest,C.map=l.map,C.clipShadows=l.clipShadows,C.clippingPlanes=l.clippingPlanes,C.clipIntersection=l.clipIntersection,C.displacementMap=l.displacementMap,C.displacementScale=l.displacementScale,C.displacementBias=l.displacementBias,C.wireframeLinewidth=l.wireframeLinewidth,C.linewidth=l.linewidth,j.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const lt=i.properties.get(C);lt.light=j}return C}function D(H,l,j,R,C){if(H.visible===!1)return;if(H.layers.test(l.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===si)&&(!H.frustumCulled||n.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,H.matrixWorld);const Y=t.update(H),ft=H.material;if(Array.isArray(ft)){const mt=Y.groups;for(let dt=0,pt=mt.length;dt<pt;dt++){const st=mt[dt],Mt=ft[st.materialIndex];if(Mt&&Mt.visible){const It=U(H,Mt,R,C);H.onBeforeShadow(i,H,l,j,Y,It,st),i.renderBufferDirect(j,null,Y,It,H,st),H.onAfterShadow(i,H,l,j,Y,It,st)}}}else if(ft.visible){const mt=U(H,ft,R,C);H.onBeforeShadow(i,H,l,j,Y,mt,null),i.renderBufferDirect(j,null,Y,mt,H,null),H.onAfterShadow(i,H,l,j,Y,mt,null)}}const lt=H.children;for(let Y=0,ft=lt.length;Y<ft;Y++)D(lt[Y],l,j,R,C)}function q(H){H.target.removeEventListener("dispose",q);for(const j in m){const R=m[j],C=H.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}const Ng={[eo]:no,[io]:ao,[ro]:oo,[xr]:so,[no]:eo,[ao]:io,[oo]:ro,[so]:xr};function Fg(i,t){function e(){let G=!1;const wt=new Fe;let it=null;const ht=new Fe(0,0,0,0);return{setMask:function(Ct){it!==Ct&&!G&&(i.colorMask(Ct,Ct,Ct,Ct),it=Ct)},setLocked:function(Ct){G=Ct},setClear:function(Ct,Tt,qt,pe,Xe){Xe===!0&&(Ct*=pe,Tt*=pe,qt*=pe),wt.set(Ct,Tt,qt,pe),ht.equals(wt)===!1&&(i.clearColor(Ct,Tt,qt,pe),ht.copy(wt))},reset:function(){G=!1,it=null,ht.set(-1,0,0,0)}}}function n(){let G=!1,wt=!1,it=null,ht=null,Ct=null;return{setReversed:function(Tt){if(wt!==Tt){const qt=t.get("EXT_clip_control");Tt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),wt=Tt;const pe=Ct;Ct=null,this.setClear(pe)}},getReversed:function(){return wt},setTest:function(Tt){Tt?bt(i.DEPTH_TEST):$t(i.DEPTH_TEST)},setMask:function(Tt){it!==Tt&&!G&&(i.depthMask(Tt),it=Tt)},setFunc:function(Tt){if(wt&&(Tt=Ng[Tt]),ht!==Tt){switch(Tt){case eo:i.depthFunc(i.NEVER);break;case no:i.depthFunc(i.ALWAYS);break;case io:i.depthFunc(i.LESS);break;case xr:i.depthFunc(i.LEQUAL);break;case ro:i.depthFunc(i.EQUAL);break;case so:i.depthFunc(i.GEQUAL);break;case ao:i.depthFunc(i.GREATER);break;case oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=Tt}},setLocked:function(Tt){G=Tt},setClear:function(Tt){Ct!==Tt&&(wt&&(Tt=1-Tt),i.clearDepth(Tt),Ct=Tt)},reset:function(){G=!1,it=null,ht=null,Ct=null,wt=!1}}}function s(){let G=!1,wt=null,it=null,ht=null,Ct=null,Tt=null,qt=null,pe=null,Xe=null;return{setTest:function(Pe){G||(Pe?bt(i.STENCIL_TEST):$t(i.STENCIL_TEST))},setMask:function(Pe){wt!==Pe&&!G&&(i.stencilMask(Pe),wt=Pe)},setFunc:function(Pe,dn,Tn){(it!==Pe||ht!==dn||Ct!==Tn)&&(i.stencilFunc(Pe,dn,Tn),it=Pe,ht=dn,Ct=Tn)},setOp:function(Pe,dn,Tn){(Tt!==Pe||qt!==dn||pe!==Tn)&&(i.stencilOp(Pe,dn,Tn),Tt=Pe,qt=dn,pe=Tn)},setLocked:function(Pe){G=Pe},setClear:function(Pe){Xe!==Pe&&(i.clearStencil(Pe),Xe=Pe)},reset:function(){G=!1,wt=null,it=null,ht=null,Ct=null,Tt=null,qt=null,pe=null,Xe=null}}}const a=new e,c=new n,h=new s,d=new WeakMap,m=new WeakMap;let g={},v={},y=new WeakMap,S=[],T=null,A=!1,M=null,p=null,F=null,U=null,D=null,q=null,H=null,l=new xe(0,0,0),j=0,R=!1,C=null,z=null,lt=null,Y=null,ft=null;const mt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let dt=!1,pt=0;const st=i.getParameter(i.VERSION);st.indexOf("WebGL")!==-1?(pt=parseFloat(/^WebGL (\d)/.exec(st)[1]),dt=pt>=1):st.indexOf("OpenGL ES")!==-1&&(pt=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),dt=pt>=2);let Mt=null,It={};const Vt=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),Re=new Fe().fromArray(Vt),ut=new Fe().fromArray(ae);function yt(G,wt,it,ht){const Ct=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(G,Tt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<it;qt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(wt+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return Tt}const Ot={};Ot[i.TEXTURE_2D]=yt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ot[i.TEXTURE_CUBE_MAP]=yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ot[i.TEXTURE_2D_ARRAY]=yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ot[i.TEXTURE_3D]=yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),h.setClear(0),bt(i.DEPTH_TEST),c.setFunc(xr),de(!1),ue(dl),bt(i.CULL_FACE),O(Ti);function bt(G){g[G]!==!0&&(i.enable(G),g[G]=!0)}function $t(G){g[G]!==!1&&(i.disable(G),g[G]=!1)}function Ee(G,wt){return v[G]!==wt?(i.bindFramebuffer(G,wt),v[G]=wt,G===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=wt),G===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function Ht(G,wt){let it=S,ht=!1;if(G){it=y.get(wt),it===void 0&&(it=[],y.set(wt,it));const Ct=G.textures;if(it.length!==Ct.length||it[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,qt=Ct.length;Tt<qt;Tt++)it[Tt]=i.COLOR_ATTACHMENT0+Tt;it.length=Ct.length,ht=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,ht=!0);ht&&i.drawBuffers(it)}function Ve(G){return T!==G?(i.useProgram(G),T=G,!0):!1}const De={[zi]:i.FUNC_ADD,[Fu]:i.FUNC_SUBTRACT,[Ou]:i.FUNC_REVERSE_SUBTRACT};De[Bu]=i.MIN,De[zu]=i.MAX;const ce={[Hu]:i.ZERO,[ku]:i.ONE,[Vu]:i.SRC_COLOR,[Qa]:i.SRC_ALPHA,[Yu]:i.SRC_ALPHA_SATURATE,[qu]:i.DST_COLOR,[Wu]:i.DST_ALPHA,[Gu]:i.ONE_MINUS_SRC_COLOR,[to]:i.ONE_MINUS_SRC_ALPHA,[ju]:i.ONE_MINUS_DST_COLOR,[Xu]:i.ONE_MINUS_DST_ALPHA,[$u]:i.CONSTANT_COLOR,[Ku]:i.ONE_MINUS_CONSTANT_COLOR,[Zu]:i.CONSTANT_ALPHA,[Ju]:i.ONE_MINUS_CONSTANT_ALPHA};function O(G,wt,it,ht,Ct,Tt,qt,pe,Xe,Pe){if(G===Ti){A===!0&&($t(i.BLEND),A=!1);return}if(A===!1&&(bt(i.BLEND),A=!0),G!==Nu){if(G!==M||Pe!==R){if((p!==zi||D!==zi)&&(i.blendEquation(i.FUNC_ADD),p=zi,D=zi),Pe)switch(G){case _r:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pl:i.blendFunc(i.ONE,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case _r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}F=null,U=null,q=null,H=null,l.set(0,0,0),j=0,M=G,R=Pe}return}Ct=Ct||wt,Tt=Tt||it,qt=qt||ht,(wt!==p||Ct!==D)&&(i.blendEquationSeparate(De[wt],De[Ct]),p=wt,D=Ct),(it!==F||ht!==U||Tt!==q||qt!==H)&&(i.blendFuncSeparate(ce[it],ce[ht],ce[Tt],ce[qt]),F=it,U=ht,q=Tt,H=qt),(pe.equals(l)===!1||Xe!==j)&&(i.blendColor(pe.r,pe.g,pe.b,Xe),l.copy(pe),j=Xe),M=G,R=!1}function fn(G,wt){G.side===ai?$t(i.CULL_FACE):bt(i.CULL_FACE);let it=G.side===xn;wt&&(it=!it),de(it),G.blending===_r&&G.transparent===!1?O(Ti):O(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);const ht=G.stencilWrite;h.setTest(ht),ht&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Oe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?bt(i.SAMPLE_ALPHA_TO_COVERAGE):$t(i.SAMPLE_ALPHA_TO_COVERAGE)}function de(G){C!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),C=G)}function ue(G){G!==Lu?(bt(i.CULL_FACE),G!==z&&(G===dl?i.cullFace(i.BACK):G===Iu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$t(i.CULL_FACE),z=G}function Ft(G){G!==lt&&(dt&&i.lineWidth(G),lt=G)}function Oe(G,wt,it){G?(bt(i.POLYGON_OFFSET_FILL),(Y!==wt||ft!==it)&&(i.polygonOffset(wt,it),Y=wt,ft=it)):$t(i.POLYGON_OFFSET_FILL)}function Gt(G){G?bt(i.SCISSOR_TEST):$t(i.SCISSOR_TEST)}function L(G){G===void 0&&(G=i.TEXTURE0+mt-1),Mt!==G&&(i.activeTexture(G),Mt=G)}function b(G,wt,it){it===void 0&&(Mt===null?it=i.TEXTURE0+mt-1:it=Mt);let ht=It[it];ht===void 0&&(ht={type:void 0,texture:void 0},It[it]=ht),(ht.type!==G||ht.texture!==wt)&&(Mt!==it&&(i.activeTexture(it),Mt=it),i.bindTexture(G,wt||Ot[G]),ht.type=G,ht.texture=wt)}function K(){const G=It[Mt];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ct(){try{i.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Z(){try{i.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function rt(){try{i.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function zt(){try{i.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function At(){try{i.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Kt(){try{i.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Zt(){try{i.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _t(){try{i.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Lt(){try{i.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function kt(){try{i.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function jt(G){Re.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Re.copy(G))}function Dt(G){ut.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),ut.copy(G))}function ye(G,wt){let it=m.get(wt);it===void 0&&(it=new WeakMap,m.set(wt,it));let ht=it.get(G);ht===void 0&&(ht=i.getUniformBlockIndex(wt,G.name),it.set(G,ht))}function ne(G,wt){const ht=m.get(wt).get(G);d.get(wt)!==ht&&(i.uniformBlockBinding(wt,ht,G.__bindingPointIndex),d.set(wt,ht))}function Le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},Mt=null,It={},v={},y=new WeakMap,S=[],T=null,A=!1,M=null,p=null,F=null,U=null,D=null,q=null,H=null,l=new xe(0,0,0),j=0,R=!1,C=null,z=null,lt=null,Y=null,ft=null,Re.set(0,0,i.canvas.width,i.canvas.height),ut.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),h.reset()}return{buffers:{color:a,depth:c,stencil:h},enable:bt,disable:$t,bindFramebuffer:Ee,drawBuffers:Ht,useProgram:Ve,setBlending:O,setMaterial:fn,setFlipSided:de,setCullFace:ue,setLineWidth:Ft,setPolygonOffset:Oe,setScissorTest:Gt,activeTexture:L,bindTexture:b,unbindTexture:K,compressedTexImage2D:ct,compressedTexImage3D:Z,texImage2D:Lt,texImage3D:kt,updateUBOMapping:ye,uniformBlockBinding:ne,texStorage2D:Zt,texStorage3D:_t,texSubImage2D:rt,texSubImage3D:zt,compressedTexSubImage2D:At,compressedTexSubImage3D:Kt,scissor:jt,viewport:Dt,reset:Le}}function Og(i,t,e,n,s,a,c){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new re,g=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,b){return S?new OffscreenCanvas(L,b):js("canvas")}function A(L,b,K){let ct=1;const Z=Gt(L);if((Z.width>K||Z.height>K)&&(ct=K/Math.max(Z.width,Z.height)),ct<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const rt=Math.floor(ct*Z.width),zt=Math.floor(ct*Z.height);v===void 0&&(v=T(rt,zt));const At=b?T(rt,zt):v;return At.width=rt,At.height=zt,At.getContext("2d").drawImage(L,0,0,rt,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+rt+"x"+zt+")."),At}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),L;return L}function M(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function F(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function U(L,b,K,ct,Z=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let rt=b;if(b===i.RED&&(K===i.FLOAT&&(rt=i.R32F),K===i.HALF_FLOAT&&(rt=i.R16F),K===i.UNSIGNED_BYTE&&(rt=i.R8)),b===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(rt=i.R8UI),K===i.UNSIGNED_SHORT&&(rt=i.R16UI),K===i.UNSIGNED_INT&&(rt=i.R32UI),K===i.BYTE&&(rt=i.R8I),K===i.SHORT&&(rt=i.R16I),K===i.INT&&(rt=i.R32I)),b===i.RG&&(K===i.FLOAT&&(rt=i.RG32F),K===i.HALF_FLOAT&&(rt=i.RG16F),K===i.UNSIGNED_BYTE&&(rt=i.RG8)),b===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(rt=i.RG8UI),K===i.UNSIGNED_SHORT&&(rt=i.RG16UI),K===i.UNSIGNED_INT&&(rt=i.RG32UI),K===i.BYTE&&(rt=i.RG8I),K===i.SHORT&&(rt=i.RG16I),K===i.INT&&(rt=i.RG32I)),b===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),K===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),K===i.UNSIGNED_INT&&(rt=i.RGB32UI),K===i.BYTE&&(rt=i.RGB8I),K===i.SHORT&&(rt=i.RGB16I),K===i.INT&&(rt=i.RGB32I)),b===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),K===i.UNSIGNED_INT&&(rt=i.RGBA32UI),K===i.BYTE&&(rt=i.RGBA8I),K===i.SHORT&&(rt=i.RGBA16I),K===i.INT&&(rt=i.RGBA32I)),b===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),b===i.RGBA){const zt=Z?Ws:Ce.getTransfer(ct);K===i.FLOAT&&(rt=i.RGBA32F),K===i.HALF_FLOAT&&(rt=i.RGBA16F),K===i.UNSIGNED_BYTE&&(rt=zt===Ue?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function D(L,b){let K;return L?b===null||b===Wi||b===jr?K=i.DEPTH24_STENCIL8:b===oi?K=i.DEPTH32F_STENCIL8:b===qr&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Wi||b===jr?K=i.DEPTH_COMPONENT24:b===oi?K=i.DEPTH_COMPONENT32F:b===qr&&(K=i.DEPTH_COMPONENT16),K}function q(L,b){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==Fn&&L.minFilter!==Gn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function H(L){const b=L.target;b.removeEventListener("dispose",H),j(b),b.isVideoTexture&&g.delete(b)}function l(L){const b=L.target;b.removeEventListener("dispose",l),C(b)}function j(L){const b=n.get(L);if(b.__webglInit===void 0)return;const K=L.source,ct=y.get(K);if(ct){const Z=ct[b.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(L),Object.keys(ct).length===0&&y.delete(K)}n.remove(L)}function R(L){const b=n.get(L);i.deleteTexture(b.__webglTexture);const K=L.source,ct=y.get(K);delete ct[b.__cacheKey],c.memory.textures--}function C(L){const b=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(b.__webglFramebuffer[ct]))for(let Z=0;Z<b.__webglFramebuffer[ct].length;Z++)i.deleteFramebuffer(b.__webglFramebuffer[ct][Z]);else i.deleteFramebuffer(b.__webglFramebuffer[ct]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ct])}else{if(Array.isArray(b.__webglFramebuffer))for(let ct=0;ct<b.__webglFramebuffer.length;ct++)i.deleteFramebuffer(b.__webglFramebuffer[ct]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ct=0;ct<b.__webglColorRenderbuffer.length;ct++)b.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ct]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const K=L.textures;for(let ct=0,Z=K.length;ct<Z;ct++){const rt=n.get(K[ct]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),c.memory.textures--),n.remove(K[ct])}n.remove(L)}let z=0;function lt(){z=0}function Y(){const L=z;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),z+=1,L}function ft(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function mt(L,b){const K=n.get(L);if(L.isVideoTexture&&Ft(L),L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){const ct=L.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(K,L,b);return}}e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+b)}function dt(L,b){const K=n.get(L);if(L.version>0&&K.__version!==L.version){ut(K,L,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+b)}function pt(L,b){const K=n.get(L);if(L.version>0&&K.__version!==L.version){ut(K,L,b);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+b)}function st(L,b){const K=n.get(L);if(L.version>0&&K.__version!==L.version){yt(K,L,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+b)}const Mt={[uo]:i.REPEAT,[Vi]:i.CLAMP_TO_EDGE,[ho]:i.MIRRORED_REPEAT},It={[Fn]:i.NEAREST,[lh]:i.NEAREST_MIPMAP_NEAREST,[ls]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[_a]:i.LINEAR_MIPMAP_NEAREST,[Gi]:i.LINEAR_MIPMAP_LINEAR},Vt={[fh]:i.NEVER,[vh]:i.ALWAYS,[dh]:i.LESS,[Bc]:i.LEQUAL,[ph]:i.EQUAL,[_h]:i.GEQUAL,[mh]:i.GREATER,[gh]:i.NOTEQUAL};function ae(L,b){if(b.type===oi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Gn||b.magFilter===_a||b.magFilter===ls||b.magFilter===Gi||b.minFilter===Gn||b.minFilter===_a||b.minFilter===ls||b.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,Mt[b.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,Mt[b.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,Mt[b.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,It[b.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,It[b.minFilter]),b.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Vt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Fn||b.minFilter!==ls&&b.minFilter!==Gi||b.type===oi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Re(L,b){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",H));const ct=b.source;let Z=y.get(ct);Z===void 0&&(Z={},y.set(ct,Z));const rt=ft(b);if(rt!==L.__cacheKey){Z[rt]===void 0&&(Z[rt]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,K=!0),Z[rt].usedTimes++;const zt=Z[L.__cacheKey];zt!==void 0&&(Z[L.__cacheKey].usedTimes--,zt.usedTimes===0&&R(b)),L.__cacheKey=rt,L.__webglTexture=Z[rt].texture}return K}function ut(L,b,K){let ct=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ct=i.TEXTURE_3D);const Z=Re(L,b),rt=b.source;e.bindTexture(ct,L.__webglTexture,i.TEXTURE0+K);const zt=n.get(rt);if(rt.version!==zt.__version||Z===!0){e.activeTexture(i.TEXTURE0+K);const At=Ce.getPrimaries(Ce.workingColorSpace),Kt=b.colorSpace===Ei?null:Ce.getPrimaries(b.colorSpace),Zt=b.colorSpace===Ei||At===Kt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let _t=A(b.image,!1,s.maxTextureSize);_t=Oe(b,_t);const Lt=a.convert(b.format,b.colorSpace),kt=a.convert(b.type);let jt=U(b.internalFormat,Lt,kt,b.colorSpace,b.isVideoTexture);ae(ct,b);let Dt;const ye=b.mipmaps,ne=b.isVideoTexture!==!0,Le=zt.__version===void 0||Z===!0,G=rt.dataReady,wt=q(b,_t);if(b.isDepthTexture)jt=D(b.format===$r,b.type),Le&&(ne?e.texStorage2D(i.TEXTURE_2D,1,jt,_t.width,_t.height):e.texImage2D(i.TEXTURE_2D,0,jt,_t.width,_t.height,0,Lt,kt,null));else if(b.isDataTexture)if(ye.length>0){ne&&Le&&e.texStorage2D(i.TEXTURE_2D,wt,jt,ye[0].width,ye[0].height);for(let it=0,ht=ye.length;it<ht;it++)Dt=ye[it],ne?G&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Dt.width,Dt.height,Lt,kt,Dt.data):e.texImage2D(i.TEXTURE_2D,it,jt,Dt.width,Dt.height,0,Lt,kt,Dt.data);b.generateMipmaps=!1}else ne?(Le&&e.texStorage2D(i.TEXTURE_2D,wt,jt,_t.width,_t.height),G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t.width,_t.height,Lt,kt,_t.data)):e.texImage2D(i.TEXTURE_2D,0,jt,_t.width,_t.height,0,Lt,kt,_t.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ne&&Le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,jt,ye[0].width,ye[0].height,_t.depth);for(let it=0,ht=ye.length;it<ht;it++)if(Dt=ye[it],b.format!==Nn)if(Lt!==null)if(ne){if(G)if(b.layerUpdates.size>0){const Ct=Kl(Dt.width,Dt.height,b.format,b.type);for(const Tt of b.layerUpdates){const qt=Dt.data.subarray(Tt*Ct/Dt.data.BYTES_PER_ELEMENT,(Tt+1)*Ct/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,Tt,Dt.width,Dt.height,1,Lt,qt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Dt.width,Dt.height,_t.depth,Lt,Dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,jt,Dt.width,Dt.height,_t.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Dt.width,Dt.height,_t.depth,Lt,kt,Dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,jt,Dt.width,Dt.height,_t.depth,0,Lt,kt,Dt.data)}else{ne&&Le&&e.texStorage2D(i.TEXTURE_2D,wt,jt,ye[0].width,ye[0].height);for(let it=0,ht=ye.length;it<ht;it++)Dt=ye[it],b.format!==Nn?Lt!==null?ne?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,Dt.width,Dt.height,Lt,Dt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,jt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?G&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Dt.width,Dt.height,Lt,kt,Dt.data):e.texImage2D(i.TEXTURE_2D,it,jt,Dt.width,Dt.height,0,Lt,kt,Dt.data)}else if(b.isDataArrayTexture)if(ne){if(Le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,jt,_t.width,_t.height,_t.depth),G)if(b.layerUpdates.size>0){const it=Kl(_t.width,_t.height,b.format,b.type);for(const ht of b.layerUpdates){const Ct=_t.data.subarray(ht*it/_t.data.BYTES_PER_ELEMENT,(ht+1)*it/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,_t.width,_t.height,1,Lt,kt,Ct)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Lt,kt,_t.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,jt,_t.width,_t.height,_t.depth,0,Lt,kt,_t.data);else if(b.isData3DTexture)ne?(Le&&e.texStorage3D(i.TEXTURE_3D,wt,jt,_t.width,_t.height,_t.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Lt,kt,_t.data)):e.texImage3D(i.TEXTURE_3D,0,jt,_t.width,_t.height,_t.depth,0,Lt,kt,_t.data);else if(b.isFramebufferTexture){if(Le)if(ne)e.texStorage2D(i.TEXTURE_2D,wt,jt,_t.width,_t.height);else{let it=_t.width,ht=_t.height;for(let Ct=0;Ct<wt;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,jt,it,ht,0,Lt,kt,null),it>>=1,ht>>=1}}else if(ye.length>0){if(ne&&Le){const it=Gt(ye[0]);e.texStorage2D(i.TEXTURE_2D,wt,jt,it.width,it.height)}for(let it=0,ht=ye.length;it<ht;it++)Dt=ye[it],ne?G&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Lt,kt,Dt):e.texImage2D(i.TEXTURE_2D,it,jt,Lt,kt,Dt);b.generateMipmaps=!1}else if(ne){if(Le){const it=Gt(_t);e.texStorage2D(i.TEXTURE_2D,wt,jt,it.width,it.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Lt,kt,_t)}else e.texImage2D(i.TEXTURE_2D,0,jt,Lt,kt,_t);M(b)&&p(ct),zt.__version=rt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function yt(L,b,K){if(b.image.length!==6)return;const ct=Re(L,b),Z=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+K);const rt=n.get(Z);if(Z.version!==rt.__version||ct===!0){e.activeTexture(i.TEXTURE0+K);const zt=Ce.getPrimaries(Ce.workingColorSpace),At=b.colorSpace===Ei?null:Ce.getPrimaries(b.colorSpace),Kt=b.colorSpace===Ei||zt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const Zt=b.isCompressedTexture||b.image[0].isCompressedTexture,_t=b.image[0]&&b.image[0].isDataTexture,Lt=[];for(let ht=0;ht<6;ht++)!Zt&&!_t?Lt[ht]=A(b.image[ht],!0,s.maxCubemapSize):Lt[ht]=_t?b.image[ht].image:b.image[ht],Lt[ht]=Oe(b,Lt[ht]);const kt=Lt[0],jt=a.convert(b.format,b.colorSpace),Dt=a.convert(b.type),ye=U(b.internalFormat,jt,Dt,b.colorSpace),ne=b.isVideoTexture!==!0,Le=rt.__version===void 0||ct===!0,G=Z.dataReady;let wt=q(b,kt);ae(i.TEXTURE_CUBE_MAP,b);let it;if(Zt){ne&&Le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,ye,kt.width,kt.height);for(let ht=0;ht<6;ht++){it=Lt[ht].mipmaps;for(let Ct=0;Ct<it.length;Ct++){const Tt=it[Ct];b.format!==Nn?jt!==null?ne?G&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct,0,0,Tt.width,Tt.height,jt,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct,ye,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct,0,0,Tt.width,Tt.height,jt,Dt,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct,ye,Tt.width,Tt.height,0,jt,Dt,Tt.data)}}}else{if(it=b.mipmaps,ne&&Le){it.length>0&&wt++;const ht=Gt(Lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,ye,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(_t){ne?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Lt[ht].width,Lt[ht].height,jt,Dt,Lt[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ye,Lt[ht].width,Lt[ht].height,0,jt,Dt,Lt[ht].data);for(let Ct=0;Ct<it.length;Ct++){const qt=it[Ct].image[ht].image;ne?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct+1,0,0,qt.width,qt.height,jt,Dt,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct+1,ye,qt.width,qt.height,0,jt,Dt,qt.data)}}else{ne?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,jt,Dt,Lt[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ye,jt,Dt,Lt[ht]);for(let Ct=0;Ct<it.length;Ct++){const Tt=it[Ct];ne?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct+1,0,0,jt,Dt,Tt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct+1,ye,jt,Dt,Tt.image[ht])}}}M(b)&&p(i.TEXTURE_CUBE_MAP),rt.__version=Z.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Ot(L,b,K,ct,Z,rt){const zt=a.convert(K.format,K.colorSpace),At=a.convert(K.type),Kt=U(K.internalFormat,zt,At,K.colorSpace),Zt=n.get(b),_t=n.get(K);if(_t.__renderTarget=b,!Zt.__hasExternalTextures){const Lt=Math.max(1,b.width>>rt),kt=Math.max(1,b.height>>rt);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,rt,Kt,Lt,kt,b.depth,0,zt,At,null):e.texImage2D(Z,rt,Kt,Lt,kt,0,zt,At,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),ue(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,Z,_t.__webglTexture,0,de(b)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,Z,_t.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(L,b,K){if(i.bindRenderbuffer(i.RENDERBUFFER,L),b.depthBuffer){const ct=b.depthTexture,Z=ct&&ct.isDepthTexture?ct.type:null,rt=D(b.stencilBuffer,Z),zt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=de(b);ue(b)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,rt,b.width,b.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,rt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,rt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,zt,i.RENDERBUFFER,L)}else{const ct=b.textures;for(let Z=0;Z<ct.length;Z++){const rt=ct[Z],zt=a.convert(rt.format,rt.colorSpace),At=a.convert(rt.type),Kt=U(rt.internalFormat,zt,At,rt.colorSpace),Zt=de(b);K&&ue(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,Kt,b.width,b.height):ue(b)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt,Kt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Kt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $t(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=n.get(b.depthTexture);ct.__renderTarget=b,(!ct.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),mt(b.depthTexture,0);const Z=ct.__webglTexture,rt=de(b);if(b.depthTexture.format===Yr)ue(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(b.depthTexture.format===$r)ue(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ee(L){const b=n.get(L),K=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const ct=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ct){const Z=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ct.removeEventListener("dispose",Z)};ct.addEventListener("dispose",Z),b.__depthDisposeCallback=Z}b.__boundDepthTexture=ct}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const ct=L.texture.mipmaps;ct&&ct.length>0?$t(b.__webglFramebuffer[0],L):$t(b.__webglFramebuffer,L)}else if(K){b.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ct]),b.__webglDepthbuffer[ct]===void 0)b.__webglDepthbuffer[ct]=i.createRenderbuffer(),bt(b.__webglDepthbuffer[ct],L,!1);else{const Z=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=b.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,rt)}}else{const ct=L.texture.mipmaps;if(ct&&ct.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),bt(b.__webglDepthbuffer,L,!1);else{const Z=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,rt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(L,b,K){const ct=n.get(L);b!==void 0&&Ot(ct.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Ee(L)}function Ve(L){const b=L.texture,K=n.get(L),ct=n.get(b);L.addEventListener("dispose",l);const Z=L.textures,rt=L.isWebGLCubeRenderTarget===!0,zt=Z.length>1;if(zt||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=b.version,c.memory.textures++),rt){K.__webglFramebuffer=[];for(let At=0;At<6;At++)if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[At]=[];for(let Kt=0;Kt<b.mipmaps.length;Kt++)K.__webglFramebuffer[At][Kt]=i.createFramebuffer()}else K.__webglFramebuffer[At]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let At=0;At<b.mipmaps.length;At++)K.__webglFramebuffer[At]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(zt)for(let At=0,Kt=Z.length;At<Kt;At++){const Zt=n.get(Z[At]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),c.memory.textures++)}if(L.samples>0&&ue(L)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let At=0;At<Z.length;At++){const Kt=Z[At];K.__webglColorRenderbuffer[At]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[At]);const Zt=a.convert(Kt.format,Kt.colorSpace),_t=a.convert(Kt.type),Lt=U(Kt.internalFormat,Zt,_t,Kt.colorSpace,L.isXRRenderTarget===!0),kt=de(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,Lt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,K.__webglColorRenderbuffer[At])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),bt(K.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),ae(i.TEXTURE_CUBE_MAP,b);for(let At=0;At<6;At++)if(b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)Ot(K.__webglFramebuffer[At][Kt],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+At,Kt);else Ot(K.__webglFramebuffer[At],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);M(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(zt){for(let At=0,Kt=Z.length;At<Kt;At++){const Zt=Z[At],_t=n.get(Zt);e.bindTexture(i.TEXTURE_2D,_t.__webglTexture),ae(i.TEXTURE_2D,Zt),Ot(K.__webglFramebuffer,L,Zt,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,0),M(Zt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let At=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(At=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,ct.__webglTexture),ae(At,b),b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)Ot(K.__webglFramebuffer[Kt],L,b,i.COLOR_ATTACHMENT0,At,Kt);else Ot(K.__webglFramebuffer,L,b,i.COLOR_ATTACHMENT0,At,0);M(b)&&p(At),e.unbindTexture()}L.depthBuffer&&Ee(L)}function De(L){const b=L.textures;for(let K=0,ct=b.length;K<ct;K++){const Z=b[K];if(M(Z)){const rt=F(L),zt=n.get(Z).__webglTexture;e.bindTexture(rt,zt),p(rt),e.unbindTexture()}}}const ce=[],O=[];function fn(L){if(L.samples>0){if(ue(L)===!1){const b=L.textures,K=L.width,ct=L.height;let Z=i.COLOR_BUFFER_BIT;const rt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,zt=n.get(L),At=b.length>1;if(At)for(let Zt=0;Zt<b.length;Zt++)e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Zt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Zt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Kt=L.texture.mipmaps;Kt&&Kt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Zt=0;Zt<b.length;Zt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),At){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,zt.__webglColorRenderbuffer[Zt]);const _t=n.get(b[Zt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_t,0)}i.blitFramebuffer(0,0,K,ct,0,0,K,ct,Z,i.NEAREST),d===!0&&(ce.length=0,O.length=0,ce.push(i.COLOR_ATTACHMENT0+Zt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ce.push(rt),O.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),At)for(let Zt=0;Zt<b.length;Zt++){e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Zt,i.RENDERBUFFER,zt.__webglColorRenderbuffer[Zt]);const _t=n.get(b[Zt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Zt,i.TEXTURE_2D,_t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const b=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function de(L){return Math.min(s.maxSamples,L.samples)}function ue(L){const b=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ft(L){const b=c.render.frame;g.get(L)!==b&&(g.set(L,b),L.update())}function Oe(L,b){const K=L.colorSpace,ct=L.format,Z=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==Sr&&K!==Ei&&(Ce.getTransfer(K)===Ue?(ct!==Nn||Z!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),b}function Gt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=Y,this.resetTextureUnits=lt,this.setTexture2D=mt,this.setTexture2DArray=dt,this.setTexture3D=pt,this.setTextureCube=st,this.rebindTextures=Ht,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=ue}function Bg(i,t){function e(n,s=Ei){let a;const c=Ce.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===Go)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rc)return i.BYTE;if(n===Pc)return i.SHORT;if(n===qr)return i.UNSIGNED_SHORT;if(n===Vo)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===oi)return i.FLOAT;if(n===Zr)return i.HALF_FLOAT;if(n===Lc)return i.ALPHA;if(n===Ic)return i.RGB;if(n===Nn)return i.RGBA;if(n===Yr)return i.DEPTH_COMPONENT;if(n===$r)return i.DEPTH_STENCIL;if(n===Uc)return i.RED;if(n===Xo)return i.RED_INTEGER;if(n===Nc)return i.RG;if(n===qo)return i.RG_INTEGER;if(n===jo)return i.RGBA_INTEGER;if(n===Ns||n===Fs||n===Os||n===Bs)if(c===Ue)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Ns)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Ns)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Os)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fo||n===po||n===mo||n===go)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===fo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===po)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===go)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_o||n===vo||n===xo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===_o||n===vo)return c===Ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===xo)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yo||n===Mo||n===So||n===Eo||n===To||n===bo||n===Ao||n===wo||n===Co||n===Ro||n===Po||n===Do||n===Lo||n===Io)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===yo)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mo)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===So)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Eo)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===To)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bo)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ao)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wo)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Co)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ro)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Po)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Do)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lo)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Io)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zs||n===Uo||n===No)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===zs)return c===Ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===No)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fc||n===Fo||n===Oo||n===Bo)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===zs)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Fo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===jr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hg=`
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

}`;class kg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new yn,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new wi({vertexShader:zg,fragmentShader:Hg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new hn(new Qr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vg extends Yi{constructor(t,e){super();const n=this;let s=null,a=1,c=null,h="local-floor",d=1,m=null,g=null,v=null,y=null,S=null,T=null;const A=new kg,M=e.getContextAttributes();let p=null,F=null;const U=[],D=[],q=new re;let H=null;const l=new vn;l.viewport=new Fe;const j=new vn;j.viewport=new Fe;const R=[l,j],C=new af;let z=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ut){let yt=U[ut];return yt===void 0&&(yt=new Ba,U[ut]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(ut){let yt=U[ut];return yt===void 0&&(yt=new Ba,U[ut]=yt),yt.getGripSpace()},this.getHand=function(ut){let yt=U[ut];return yt===void 0&&(yt=new Ba,U[ut]=yt),yt.getHandSpace()};function Y(ut){const yt=D.indexOf(ut.inputSource);if(yt===-1)return;const Ot=U[yt];Ot!==void 0&&(Ot.update(ut.inputSource,ut.frame,m||c),Ot.dispatchEvent({type:ut.type,data:ut.inputSource}))}function ft(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",ft),s.removeEventListener("inputsourceschange",mt);for(let ut=0;ut<U.length;ut++){const yt=D[ut];yt!==null&&(D[ut]=null,U[ut].disconnect(yt))}z=null,lt=null,A.reset(),t.setRenderTarget(p),S=null,y=null,v=null,s=null,F=null,Re.stop(),n.isPresenting=!1,t.setPixelRatio(H),t.setSize(q.width,q.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ut){a=ut,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ut){h=ut,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(ut){m=ut},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return s},this.setSession=async function(ut){if(s=ut,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",ft),s.addEventListener("inputsourceschange",mt),M.xrCompatible!==!0&&await e.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(q),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ot=null,bt=null,$t=null;M.depth&&($t=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ot=M.stencil?$r:Yr,bt=M.stencil?jr:Wi);const Ee={colorFormat:e.RGBA8,depthFormat:$t,scaleFactor:a};v=new XRWebGLBinding(s,e),y=v.createProjectionLayer(Ee),s.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),F=new Xi(y.textureWidth,y.textureHeight,{format:Nn,type:Xn,depthTexture:new Yc(y.textureWidth,y.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,Ot),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Ot={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:a};S=new XRWebGLLayer(s,e,Ot),s.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),F=new Xi(S.framebufferWidth,S.framebufferHeight,{format:Nn,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(d),m=null,c=await s.requestReferenceSpace(h),Re.setContext(s),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function mt(ut){for(let yt=0;yt<ut.removed.length;yt++){const Ot=ut.removed[yt],bt=D.indexOf(Ot);bt>=0&&(D[bt]=null,U[bt].disconnect(Ot))}for(let yt=0;yt<ut.added.length;yt++){const Ot=ut.added[yt];let bt=D.indexOf(Ot);if(bt===-1){for(let Ee=0;Ee<U.length;Ee++)if(Ee>=D.length){D.push(Ot),bt=Ee;break}else if(D[Ee]===null){D[Ee]=Ot,bt=Ee;break}if(bt===-1)break}const $t=U[bt];$t&&$t.connect(Ot)}}const dt=new k,pt=new k;function st(ut,yt,Ot){dt.setFromMatrixPosition(yt.matrixWorld),pt.setFromMatrixPosition(Ot.matrixWorld);const bt=dt.distanceTo(pt),$t=yt.projectionMatrix.elements,Ee=Ot.projectionMatrix.elements,Ht=$t[14]/($t[10]-1),Ve=$t[14]/($t[10]+1),De=($t[9]+1)/$t[5],ce=($t[9]-1)/$t[5],O=($t[8]-1)/$t[0],fn=(Ee[8]+1)/Ee[0],de=Ht*O,ue=Ht*fn,Ft=bt/(-O+fn),Oe=Ft*-O;if(yt.matrixWorld.decompose(ut.position,ut.quaternion,ut.scale),ut.translateX(Oe),ut.translateZ(Ft),ut.matrixWorld.compose(ut.position,ut.quaternion,ut.scale),ut.matrixWorldInverse.copy(ut.matrixWorld).invert(),$t[10]===-1)ut.projectionMatrix.copy(yt.projectionMatrix),ut.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{const Gt=Ht+Ft,L=Ve+Ft,b=de-Oe,K=ue+(bt-Oe),ct=De*Ve/L*Gt,Z=ce*Ve/L*Gt;ut.projectionMatrix.makePerspective(b,K,ct,Z,Gt,L),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert()}}function Mt(ut,yt){yt===null?ut.matrixWorld.copy(ut.matrix):ut.matrixWorld.multiplyMatrices(yt.matrixWorld,ut.matrix),ut.matrixWorldInverse.copy(ut.matrixWorld).invert()}this.updateCamera=function(ut){if(s===null)return;let yt=ut.near,Ot=ut.far;A.texture!==null&&(A.depthNear>0&&(yt=A.depthNear),A.depthFar>0&&(Ot=A.depthFar)),C.near=j.near=l.near=yt,C.far=j.far=l.far=Ot,(z!==C.near||lt!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,lt=C.far),l.layers.mask=ut.layers.mask|2,j.layers.mask=ut.layers.mask|4,C.layers.mask=l.layers.mask|j.layers.mask;const bt=ut.parent,$t=C.cameras;Mt(C,bt);for(let Ee=0;Ee<$t.length;Ee++)Mt($t[Ee],bt);$t.length===2?st(C,l,j):C.projectionMatrix.copy(l.projectionMatrix),It(ut,C,bt)};function It(ut,yt,Ot){Ot===null?ut.matrix.copy(yt.matrixWorld):(ut.matrix.copy(Ot.matrixWorld),ut.matrix.invert(),ut.matrix.multiply(yt.matrixWorld)),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.updateMatrixWorld(!0),ut.projectionMatrix.copy(yt.projectionMatrix),ut.projectionMatrixInverse.copy(yt.projectionMatrixInverse),ut.isPerspectiveCamera&&(ut.fov=qs*2*Math.atan(1/ut.projectionMatrix.elements[5]),ut.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&S===null))return d},this.setFoveation=function(ut){d=ut,y!==null&&(y.fixedFoveation=ut),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ut)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let Vt=null;function ae(ut,yt){if(g=yt.getViewerPose(m||c),T=yt,g!==null){const Ot=g.views;S!==null&&(t.setRenderTargetFramebuffer(F,S.framebuffer),t.setRenderTarget(F));let bt=!1;Ot.length!==C.cameras.length&&(C.cameras.length=0,bt=!0);for(let Ht=0;Ht<Ot.length;Ht++){const Ve=Ot[Ht];let De=null;if(S!==null)De=S.getViewport(Ve);else{const O=v.getViewSubImage(y,Ve);De=O.viewport,Ht===0&&(t.setRenderTargetTextures(F,O.colorTexture,O.depthStencilTexture),t.setRenderTarget(F))}let ce=R[Ht];ce===void 0&&(ce=new vn,ce.layers.enable(Ht),ce.viewport=new Fe,R[Ht]=ce),ce.matrix.fromArray(Ve.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(Ve.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(De.x,De.y,De.width,De.height),Ht===0&&(C.matrix.copy(ce.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),bt===!0&&C.cameras.push(ce)}const $t=s.enabledFeatures;if($t&&$t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){const Ht=v.getDepthInformation(Ot[0]);Ht&&Ht.isValid&&Ht.texture&&A.init(t,Ht,s.renderState)}}for(let Ot=0;Ot<U.length;Ot++){const bt=D[Ot],$t=U[Ot];bt!==null&&$t!==void 0&&$t.update(bt,yt,m||c)}Vt&&Vt(ut,yt),yt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:yt}),T=null}const Re=new Jc;Re.setAnimationLoop(ae),this.setAnimationLoop=function(ut){Vt=ut},this.dispose=function(){}}}const Oi=new qn,Gg=new He;function Wg(i,t){function e(M,p){M.matrixAutoUpdate===!0&&M.updateMatrix(),p.value.copy(M.matrix)}function n(M,p){p.color.getRGB(M.fogColor.value,Wc(i)),p.isFog?(M.fogNear.value=p.near,M.fogFar.value=p.far):p.isFogExp2&&(M.fogDensity.value=p.density)}function s(M,p,F,U,D){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(M,p):p.isMeshToonMaterial?(a(M,p),v(M,p)):p.isMeshPhongMaterial?(a(M,p),g(M,p)):p.isMeshStandardMaterial?(a(M,p),y(M,p),p.isMeshPhysicalMaterial&&S(M,p,D)):p.isMeshMatcapMaterial?(a(M,p),T(M,p)):p.isMeshDepthMaterial?a(M,p):p.isMeshDistanceMaterial?(a(M,p),A(M,p)):p.isMeshNormalMaterial?a(M,p):p.isLineBasicMaterial?(c(M,p),p.isLineDashedMaterial&&h(M,p)):p.isPointsMaterial?d(M,p,F,U):p.isSpriteMaterial?m(M,p):p.isShadowMaterial?(M.color.value.copy(p.color),M.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(M,p){M.opacity.value=p.opacity,p.color&&M.diffuse.value.copy(p.color),p.emissive&&M.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(M.map.value=p.map,e(p.map,M.mapTransform)),p.alphaMap&&(M.alphaMap.value=p.alphaMap,e(p.alphaMap,M.alphaMapTransform)),p.bumpMap&&(M.bumpMap.value=p.bumpMap,e(p.bumpMap,M.bumpMapTransform),M.bumpScale.value=p.bumpScale,p.side===xn&&(M.bumpScale.value*=-1)),p.normalMap&&(M.normalMap.value=p.normalMap,e(p.normalMap,M.normalMapTransform),M.normalScale.value.copy(p.normalScale),p.side===xn&&M.normalScale.value.negate()),p.displacementMap&&(M.displacementMap.value=p.displacementMap,e(p.displacementMap,M.displacementMapTransform),M.displacementScale.value=p.displacementScale,M.displacementBias.value=p.displacementBias),p.emissiveMap&&(M.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,M.emissiveMapTransform)),p.specularMap&&(M.specularMap.value=p.specularMap,e(p.specularMap,M.specularMapTransform)),p.alphaTest>0&&(M.alphaTest.value=p.alphaTest);const F=t.get(p),U=F.envMap,D=F.envMapRotation;U&&(M.envMap.value=U,Oi.copy(D),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),M.envMapRotation.value.setFromMatrix4(Gg.makeRotationFromEuler(Oi)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=p.reflectivity,M.ior.value=p.ior,M.refractionRatio.value=p.refractionRatio),p.lightMap&&(M.lightMap.value=p.lightMap,M.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,M.lightMapTransform)),p.aoMap&&(M.aoMap.value=p.aoMap,M.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,M.aoMapTransform))}function c(M,p){M.diffuse.value.copy(p.color),M.opacity.value=p.opacity,p.map&&(M.map.value=p.map,e(p.map,M.mapTransform))}function h(M,p){M.dashSize.value=p.dashSize,M.totalSize.value=p.dashSize+p.gapSize,M.scale.value=p.scale}function d(M,p,F,U){M.diffuse.value.copy(p.color),M.opacity.value=p.opacity,M.size.value=p.size*F,M.scale.value=U*.5,p.map&&(M.map.value=p.map,e(p.map,M.uvTransform)),p.alphaMap&&(M.alphaMap.value=p.alphaMap,e(p.alphaMap,M.alphaMapTransform)),p.alphaTest>0&&(M.alphaTest.value=p.alphaTest)}function m(M,p){M.diffuse.value.copy(p.color),M.opacity.value=p.opacity,M.rotation.value=p.rotation,p.map&&(M.map.value=p.map,e(p.map,M.mapTransform)),p.alphaMap&&(M.alphaMap.value=p.alphaMap,e(p.alphaMap,M.alphaMapTransform)),p.alphaTest>0&&(M.alphaTest.value=p.alphaTest)}function g(M,p){M.specular.value.copy(p.specular),M.shininess.value=Math.max(p.shininess,1e-4)}function v(M,p){p.gradientMap&&(M.gradientMap.value=p.gradientMap)}function y(M,p){M.metalness.value=p.metalness,p.metalnessMap&&(M.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,M.metalnessMapTransform)),M.roughness.value=p.roughness,p.roughnessMap&&(M.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,M.roughnessMapTransform)),p.envMap&&(M.envMapIntensity.value=p.envMapIntensity)}function S(M,p,F){M.ior.value=p.ior,p.sheen>0&&(M.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),M.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(M.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,M.sheenColorMapTransform)),p.sheenRoughnessMap&&(M.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,M.sheenRoughnessMapTransform))),p.clearcoat>0&&(M.clearcoat.value=p.clearcoat,M.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(M.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,M.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(M.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===xn&&M.clearcoatNormalScale.value.negate())),p.dispersion>0&&(M.dispersion.value=p.dispersion),p.iridescence>0&&(M.iridescence.value=p.iridescence,M.iridescenceIOR.value=p.iridescenceIOR,M.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(M.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,M.iridescenceMapTransform)),p.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),p.transmission>0&&(M.transmission.value=p.transmission,M.transmissionSamplerMap.value=F.texture,M.transmissionSamplerSize.value.set(F.width,F.height),p.transmissionMap&&(M.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,M.transmissionMapTransform)),M.thickness.value=p.thickness,p.thicknessMap&&(M.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=p.attenuationDistance,M.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(M.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(M.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=p.specularIntensity,M.specularColor.value.copy(p.specularColor),p.specularColorMap&&(M.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,M.specularColorMapTransform)),p.specularIntensityMap&&(M.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,p){p.matcap&&(M.matcap.value=p.matcap)}function A(M,p){const F=t.get(p).light;M.referencePosition.value.setFromMatrixPosition(F.matrixWorld),M.nearDistance.value=F.shadow.camera.near,M.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Xg(i,t,e,n){let s={},a={},c=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(F,U){const D=U.program;n.uniformBlockBinding(F,D)}function m(F,U){let D=s[F.id];D===void 0&&(T(F),D=g(F),s[F.id]=D,F.addEventListener("dispose",M));const q=U.program;n.updateUBOMapping(F,q);const H=t.render.frame;a[F.id]!==H&&(y(F),a[F.id]=H)}function g(F){const U=v();F.__bindingPointIndex=U;const D=i.createBuffer(),q=F.__size,H=F.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,q,H),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,U,D),D}function v(){for(let F=0;F<h;F++)if(c.indexOf(F)===-1)return c.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(F){const U=s[F.id],D=F.uniforms,q=F.__cache;i.bindBuffer(i.UNIFORM_BUFFER,U);for(let H=0,l=D.length;H<l;H++){const j=Array.isArray(D[H])?D[H]:[D[H]];for(let R=0,C=j.length;R<C;R++){const z=j[R];if(S(z,H,R,q)===!0){const lt=z.__offset,Y=Array.isArray(z.value)?z.value:[z.value];let ft=0;for(let mt=0;mt<Y.length;mt++){const dt=Y[mt],pt=A(dt);typeof dt=="number"||typeof dt=="boolean"?(z.__data[0]=dt,i.bufferSubData(i.UNIFORM_BUFFER,lt+ft,z.__data)):dt.isMatrix3?(z.__data[0]=dt.elements[0],z.__data[1]=dt.elements[1],z.__data[2]=dt.elements[2],z.__data[3]=0,z.__data[4]=dt.elements[3],z.__data[5]=dt.elements[4],z.__data[6]=dt.elements[5],z.__data[7]=0,z.__data[8]=dt.elements[6],z.__data[9]=dt.elements[7],z.__data[10]=dt.elements[8],z.__data[11]=0):(dt.toArray(z.__data,ft),ft+=pt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,lt,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(F,U,D,q){const H=F.value,l=U+"_"+D;if(q[l]===void 0)return typeof H=="number"||typeof H=="boolean"?q[l]=H:q[l]=H.clone(),!0;{const j=q[l];if(typeof H=="number"||typeof H=="boolean"){if(j!==H)return q[l]=H,!0}else if(j.equals(H)===!1)return j.copy(H),!0}return!1}function T(F){const U=F.uniforms;let D=0;const q=16;for(let l=0,j=U.length;l<j;l++){const R=Array.isArray(U[l])?U[l]:[U[l]];for(let C=0,z=R.length;C<z;C++){const lt=R[C],Y=Array.isArray(lt.value)?lt.value:[lt.value];for(let ft=0,mt=Y.length;ft<mt;ft++){const dt=Y[ft],pt=A(dt),st=D%q,Mt=st%pt.boundary,It=st+Mt;D+=Mt,It!==0&&q-It<pt.storage&&(D+=q-It),lt.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=D,D+=pt.storage}}}const H=D%q;return H>0&&(D+=q-H),F.__size=D,F.__cache={},this}function A(F){const U={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(U.boundary=4,U.storage=4):F.isVector2?(U.boundary=8,U.storage=8):F.isVector3||F.isColor?(U.boundary=16,U.storage=12):F.isVector4?(U.boundary=16,U.storage=16):F.isMatrix3?(U.boundary=48,U.storage=48):F.isMatrix4?(U.boundary=64,U.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),U}function M(F){const U=F.target;U.removeEventListener("dispose",M);const D=c.indexOf(U.__bindingPointIndex);c.splice(D,1),i.deleteBuffer(s[U.id]),delete s[U.id],delete a[U.id]}function p(){for(const F in s)i.deleteBuffer(s[F]);c=[],s={},a={}}return{bind:d,update:m,dispose:p}}class qg{constructor(t={}){const{canvas:e=Mh(),context:n=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=c;const T=new Uint32Array(4),A=new Int32Array(4);let M=null,p=null;const F=[],U=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let q=!1;this._outputColorSpace=Cn;let H=0,l=0,j=null,R=-1,C=null;const z=new Fe,lt=new Fe;let Y=null;const ft=new xe(0);let mt=0,dt=e.width,pt=e.height,st=1,Mt=null,It=null;const Vt=new Fe(0,0,dt,pt),ae=new Fe(0,0,dt,pt);let Re=!1;const ut=new Zo;let yt=!1,Ot=!1;const bt=new He,$t=new He,Ee=new k,Ht=new Fe,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function ce(){return j===null?st:1}let O=n;function fn(w,W){return e.getContext(w,W)}try{const w={alpha:!0,depth:s,stencil:a,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ko}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),O===null){const W="webgl2";if(O=fn(W,w),O===null)throw fn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let de,ue,Ft,Oe,Gt,L,b,K,ct,Z,rt,zt,At,Kt,Zt,_t,Lt,kt,jt,Dt,ye,ne,Le,G;function wt(){de=new nm(O),de.init(),ne=new Bg(O,de),ue=new $p(O,de,t,ne),Ft=new Fg(O,de),ue.reverseDepthBuffer&&y&&Ft.buffers.depth.setReversed(!0),Oe=new sm(O),Gt=new Eg,L=new Og(O,de,Ft,Gt,ue,ne,Oe),b=new Zp(D),K=new em(D),ct=new hf(O),Le=new jp(O,ct),Z=new im(O,ct,Oe,Le),rt=new om(O,Z,ct,Oe),jt=new am(O,ue,L),_t=new Kp(Gt),zt=new Sg(D,b,K,de,ue,Le,_t),At=new Wg(D,Gt),Kt=new bg,Zt=new Dg(de),kt=new qp(D,b,K,Ft,rt,S,d),Lt=new Ug(D,rt,ue),G=new Xg(O,Oe,ue,Ft),Dt=new Yp(O,de,Oe),ye=new rm(O,de,Oe),Oe.programs=zt.programs,D.capabilities=ue,D.extensions=de,D.properties=Gt,D.renderLists=Kt,D.shadowMap=Lt,D.state=Ft,D.info=Oe}wt();const it=new Vg(D,O);this.xr=it,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=de.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=de.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(w){w!==void 0&&(st=w,this.setSize(dt,pt,!1))},this.getSize=function(w){return w.set(dt,pt)},this.setSize=function(w,W,Q=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}dt=w,pt=W,e.width=Math.floor(w*st),e.height=Math.floor(W*st),Q===!0&&(e.style.width=w+"px",e.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(dt*st,pt*st).floor()},this.setDrawingBufferSize=function(w,W,Q){dt=w,pt=W,st=Q,e.width=Math.floor(w*Q),e.height=Math.floor(W*Q),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(Vt)},this.setViewport=function(w,W,Q,tt){w.isVector4?Vt.set(w.x,w.y,w.z,w.w):Vt.set(w,W,Q,tt),Ft.viewport(z.copy(Vt).multiplyScalar(st).round())},this.getScissor=function(w){return w.copy(ae)},this.setScissor=function(w,W,Q,tt){w.isVector4?ae.set(w.x,w.y,w.z,w.w):ae.set(w,W,Q,tt),Ft.scissor(lt.copy(ae).multiplyScalar(st).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(w){Ft.setScissorTest(Re=w)},this.setOpaqueSort=function(w){Mt=w},this.setTransparentSort=function(w){It=w},this.getClearColor=function(w){return w.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor(...arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,Q=!0){let tt=0;if(w){let X=!1;if(j!==null){const vt=j.texture.format;X=vt===jo||vt===qo||vt===Xo}if(X){const vt=j.texture.type,St=vt===Xn||vt===Wi||vt===qr||vt===jr||vt===Go||vt===Wo,Ut=kt.getClearColor(),Nt=kt.getClearAlpha(),te=Ut.r,Jt=Ut.g,Xt=Ut.b;St?(T[0]=te,T[1]=Jt,T[2]=Xt,T[3]=Nt,O.clearBufferuiv(O.COLOR,0,T)):(A[0]=te,A[1]=Jt,A[2]=Xt,A[3]=Nt,O.clearBufferiv(O.COLOR,0,A))}else tt|=O.COLOR_BUFFER_BIT}W&&(tt|=O.DEPTH_BUFFER_BIT),Q&&(tt|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),kt.dispose(),Kt.dispose(),Zt.dispose(),Gt.dispose(),b.dispose(),K.dispose(),rt.dispose(),Le.dispose(),G.dispose(),zt.dispose(),it.dispose(),it.removeEventListener("sessionstart",Yn),it.removeEventListener("sessionend",$n),Rn.stop()};function ht(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const w=Oe.autoReset,W=Lt.enabled,Q=Lt.autoUpdate,tt=Lt.needsUpdate,X=Lt.type;wt(),Oe.autoReset=w,Lt.enabled=W,Lt.autoUpdate=Q,Lt.needsUpdate=tt,Lt.type=X}function Tt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function qt(w){const W=w.target;W.removeEventListener("dispose",qt),pe(W)}function pe(w){Xe(w),Gt.remove(w)}function Xe(w){const W=Gt.get(w).programs;W!==void 0&&(W.forEach(function(Q){zt.releaseProgram(Q)}),w.isShaderMaterial&&zt.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,Q,tt,X,vt){W===null&&(W=Ve);const St=X.isMesh&&X.matrixWorld.determinant()<0,Ut=na(w,W,Q,tt,X);Ft.setMaterial(tt,St);let Nt=Q.index,te=1;if(tt.wireframe===!0){if(Nt=Z.getWireframeAttribute(Q),Nt===void 0)return;te=2}const Jt=Q.drawRange,Xt=Q.attributes.position;let Me=Jt.start*te,Te=(Jt.start+Jt.count)*te;vt!==null&&(Me=Math.max(Me,vt.start*te),Te=Math.min(Te,(vt.start+vt.count)*te)),Nt!==null?(Me=Math.max(Me,0),Te=Math.min(Te,Nt.count)):Xt!=null&&(Me=Math.max(Me,0),Te=Math.min(Te,Xt.count));const Ge=Te-Me;if(Ge<0||Ge===1/0)return;Le.setup(X,tt,Ut,Q,Nt);let me,he=Dt;if(Nt!==null&&(me=ct.get(Nt),he=ye,he.setIndex(me)),X.isMesh)tt.wireframe===!0?(Ft.setLineWidth(tt.wireframeLinewidth*ce()),he.setMode(O.LINES)):he.setMode(O.TRIANGLES);else if(X.isLine){let Wt=tt.linewidth;Wt===void 0&&(Wt=1),Ft.setLineWidth(Wt*ce()),X.isLineSegments?he.setMode(O.LINES):X.isLineLoop?he.setMode(O.LINE_LOOP):he.setMode(O.LINE_STRIP)}else X.isPoints?he.setMode(O.POINTS):X.isSprite&&he.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ks("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(de.get("WEBGL_multi_draw"))he.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Wt=X._multiDrawStarts,Ye=X._multiDrawCounts,we=X._multiDrawCount,ln=Nt?ct.get(Nt).bytesPerElement:1,Kn=Gt.get(tt).currentProgram.getUniforms();for(let Qe=0;Qe<we;Qe++)Kn.setValue(O,"_gl_DrawID",Qe),he.render(Wt[Qe]/ln,Ye[Qe])}else if(X.isInstancedMesh)he.renderInstances(Me,Ge,X.count);else if(Q.isInstancedBufferGeometry){const Wt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ye=Math.min(Q.instanceCount,Wt);he.renderInstances(Me,Ge,Ye)}else he.render(Me,Ge)};function Pe(w,W,Q){w.transparent===!0&&w.side===ai&&w.forceSinglePass===!1?(w.side=xn,w.needsUpdate=!0,Ki(w,W,Q),w.side=Ai,w.needsUpdate=!0,Ki(w,W,Q),w.side=ai):Ki(w,W,Q)}this.compile=function(w,W,Q=null){Q===null&&(Q=w),p=Zt.get(Q),p.init(W),U.push(p),Q.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),w!==Q&&w.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const tt=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const vt=X.material;if(vt)if(Array.isArray(vt))for(let St=0;St<vt.length;St++){const Ut=vt[St];Pe(Ut,Q,X),tt.add(Ut)}else Pe(vt,Q,X),tt.add(vt)}),p=U.pop(),tt},this.compileAsync=function(w,W,Q=null){const tt=this.compile(w,W,Q);return new Promise(X=>{function vt(){if(tt.forEach(function(St){Gt.get(St).currentProgram.isReady()&&tt.delete(St)}),tt.size===0){X(w);return}setTimeout(vt,10)}de.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let dn=null;function Tn(w){dn&&dn(w)}function Yn(){Rn.stop()}function $n(){Rn.start()}const Rn=new Jc;Rn.setAnimationLoop(Tn),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(w){dn=w,it.setAnimationLoop(w),w===null?Rn.stop():Rn.start()},it.addEventListener("sessionstart",Yn),it.addEventListener("sessionend",$n),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(W),W=it.getCamera()),w.isScene===!0&&w.onBeforeRender(D,w,W,j),p=Zt.get(w,U.length),p.init(W),U.push(p),$t.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ut.setFromProjectionMatrix($t),Ot=this.localClippingEnabled,yt=_t.init(this.clippingPlanes,Ot),M=Kt.get(w,F.length),M.init(),F.push(M),it.enabled===!0&&it.isPresenting===!0){const vt=D.xr.getDepthSensingMesh();vt!==null&&ui(vt,W,-1/0,D.sortObjects)}ui(w,W,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(Mt,It),De=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,De&&kt.addToRenderList(M,w),this.info.render.frame++,yt===!0&&_t.beginShadows();const Q=p.state.shadowsArray;Lt.render(Q,w,W),yt===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=M.opaque,X=M.transmissive;if(p.setupLights(),W.isArrayCamera){const vt=W.cameras;if(X.length>0)for(let St=0,Ut=vt.length;St<Ut;St++){const Nt=vt[St];es(tt,X,w,Nt)}De&&kt.render(w);for(let St=0,Ut=vt.length;St<Ut;St++){const Nt=vt[St];ts(M,w,Nt,Nt.viewport)}}else X.length>0&&es(tt,X,w,W),De&&kt.render(w),ts(M,w,W);j!==null&&l===0&&(L.updateMultisampleRenderTarget(j),L.updateRenderTargetMipmap(j)),w.isScene===!0&&w.onAfterRender(D,w,W),Le.resetDefaultState(),R=-1,C=null,U.pop(),U.length>0?(p=U[U.length-1],yt===!0&&_t.setGlobalState(D.clippingPlanes,p.state.camera)):p=null,F.pop(),F.length>0?M=F[F.length-1]:M=null};function ui(w,W,Q,tt){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ut.intersectsSprite(w)){tt&&Ht.setFromMatrixPosition(w.matrixWorld).applyMatrix4($t);const St=rt.update(w),Ut=w.material;Ut.visible&&M.push(w,St,Ut,Q,Ht.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ut.intersectsObject(w))){const St=rt.update(w),Ut=w.material;if(tt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ht.copy(w.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Ht.copy(St.boundingSphere.center)),Ht.applyMatrix4(w.matrixWorld).applyMatrix4($t)),Array.isArray(Ut)){const Nt=St.groups;for(let te=0,Jt=Nt.length;te<Jt;te++){const Xt=Nt[te],Me=Ut[Xt.materialIndex];Me&&Me.visible&&M.push(w,St,Me,Q,Ht.z,Xt)}}else Ut.visible&&M.push(w,St,Ut,Q,Ht.z,null)}}const vt=w.children;for(let St=0,Ut=vt.length;St<Ut;St++)ui(vt[St],W,Q,tt)}function ts(w,W,Q,tt){const X=w.opaque,vt=w.transmissive,St=w.transparent;p.setupLightsView(Q),yt===!0&&_t.setGlobalState(D.clippingPlanes,Q),tt&&Ft.viewport(z.copy(tt)),X.length>0&&$i(X,W,Q),vt.length>0&&$i(vt,W,Q),St.length>0&&$i(St,W,Q),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function es(w,W,Q,tt){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[tt.id]===void 0&&(p.state.transmissionRenderTarget[tt.id]=new Xi(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float")?Zr:Xn,minFilter:Gi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const vt=p.state.transmissionRenderTarget[tt.id],St=tt.viewport||z;vt.setSize(St.z*D.transmissionResolutionScale,St.w*D.transmissionResolutionScale);const Ut=D.getRenderTarget();D.setRenderTarget(vt),D.getClearColor(ft),mt=D.getClearAlpha(),mt<1&&D.setClearColor(16777215,.5),D.clear(),De&&kt.render(Q);const Nt=D.toneMapping;D.toneMapping=bi;const te=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),p.setupLightsView(tt),yt===!0&&_t.setGlobalState(D.clippingPlanes,tt),$i(w,Q,tt),L.updateMultisampleRenderTarget(vt),L.updateRenderTargetMipmap(vt),de.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Xt=0,Me=W.length;Xt<Me;Xt++){const Te=W[Xt],Ge=Te.object,me=Te.geometry,he=Te.material,Wt=Te.group;if(he.side===ai&&Ge.layers.test(tt.layers)){const Ye=he.side;he.side=xn,he.needsUpdate=!0,wr(Ge,Q,tt,me,he,Wt),he.side=Ye,he.needsUpdate=!0,Jt=!0}}Jt===!0&&(L.updateMultisampleRenderTarget(vt),L.updateRenderTargetMipmap(vt))}D.setRenderTarget(Ut),D.setClearColor(ft,mt),te!==void 0&&(tt.viewport=te),D.toneMapping=Nt}function $i(w,W,Q){const tt=W.isScene===!0?W.overrideMaterial:null;for(let X=0,vt=w.length;X<vt;X++){const St=w[X],Ut=St.object,Nt=St.geometry,te=St.group;let Jt=St.material;Jt.allowOverride===!0&&tt!==null&&(Jt=tt),Ut.layers.test(Q.layers)&&wr(Ut,W,Q,Nt,Jt,te)}}function wr(w,W,Q,tt,X,vt){w.onBeforeRender(D,W,Q,tt,X,vt),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(D,W,Q,tt,w,vt),X.transparent===!0&&X.side===ai&&X.forceSinglePass===!1?(X.side=xn,X.needsUpdate=!0,D.renderBufferDirect(Q,W,tt,X,w,vt),X.side=Ai,X.needsUpdate=!0,D.renderBufferDirect(Q,W,tt,X,w,vt),X.side=ai):D.renderBufferDirect(Q,W,tt,X,w,vt),w.onAfterRender(D,W,Q,tt,X,vt)}function Ki(w,W,Q){W.isScene!==!0&&(W=Ve);const tt=Gt.get(w),X=p.state.lights,vt=p.state.shadowsArray,St=X.state.version,Ut=zt.getParameters(w,X.state,vt,W,Q),Nt=zt.getProgramCacheKey(Ut);let te=tt.programs;tt.environment=w.isMeshStandardMaterial?W.environment:null,tt.fog=W.fog,tt.envMap=(w.isMeshStandardMaterial?K:b).get(w.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,te===void 0&&(w.addEventListener("dispose",qt),te=new Map,tt.programs=te);let Jt=te.get(Nt);if(Jt!==void 0){if(tt.currentProgram===Jt&&tt.lightsStateVersion===St)return Cr(w,Ut),Jt}else Ut.uniforms=zt.getUniforms(w),w.onBeforeCompile(Ut,D),Jt=zt.acquireProgram(Ut,Nt),te.set(Nt,Jt),tt.uniforms=Ut.uniforms;const Xt=tt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xt.clippingPlanes=_t.uniform),Cr(w,Ut),tt.needsLights=is(w),tt.lightsStateVersion=St,tt.needsLights&&(Xt.ambientLightColor.value=X.state.ambient,Xt.lightProbe.value=X.state.probe,Xt.directionalLights.value=X.state.directional,Xt.directionalLightShadows.value=X.state.directionalShadow,Xt.spotLights.value=X.state.spot,Xt.spotLightShadows.value=X.state.spotShadow,Xt.rectAreaLights.value=X.state.rectArea,Xt.ltc_1.value=X.state.rectAreaLTC1,Xt.ltc_2.value=X.state.rectAreaLTC2,Xt.pointLights.value=X.state.point,Xt.pointLightShadows.value=X.state.pointShadow,Xt.hemisphereLights.value=X.state.hemi,Xt.directionalShadowMap.value=X.state.directionalShadowMap,Xt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Xt.spotShadowMap.value=X.state.spotShadowMap,Xt.spotLightMatrix.value=X.state.spotLightMatrix,Xt.spotLightMap.value=X.state.spotLightMap,Xt.pointShadowMap.value=X.state.pointShadowMap,Xt.pointShadowMatrix.value=X.state.pointShadowMatrix),tt.currentProgram=Jt,tt.uniformsList=null,Jt}function ns(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=Vs.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function Cr(w,W){const Q=Gt.get(w);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.batchingColor=W.batchingColor,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function na(w,W,Q,tt,X){W.isScene!==!0&&(W=Ve),L.resetTextureUnits();const vt=W.fog,St=tt.isMeshStandardMaterial?W.environment:null,Ut=j===null?D.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Sr,Nt=(tt.isMeshStandardMaterial?K:b).get(tt.envMap||St),te=tt.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Jt=!!Q.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Xt=!!Q.morphAttributes.position,Me=!!Q.morphAttributes.normal,Te=!!Q.morphAttributes.color;let Ge=bi;tt.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ge=D.toneMapping);const me=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,he=me!==void 0?me.length:0,Wt=Gt.get(tt),Ye=p.state.lights;if(yt===!0&&(Ot===!0||w!==C)){const tn=w===C&&tt.id===R;_t.setState(tt,w,tn)}let we=!1;tt.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Ye.state.version||Wt.outputColorSpace!==Ut||X.isBatchedMesh&&Wt.batching===!1||!X.isBatchedMesh&&Wt.batching===!0||X.isBatchedMesh&&Wt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Wt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Wt.instancing===!1||!X.isInstancedMesh&&Wt.instancing===!0||X.isSkinnedMesh&&Wt.skinning===!1||!X.isSkinnedMesh&&Wt.skinning===!0||X.isInstancedMesh&&Wt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Wt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Wt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Wt.instancingMorph===!1&&X.morphTexture!==null||Wt.envMap!==Nt||tt.fog===!0&&Wt.fog!==vt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==_t.numPlanes||Wt.numIntersection!==_t.numIntersection)||Wt.vertexAlphas!==te||Wt.vertexTangents!==Jt||Wt.morphTargets!==Xt||Wt.morphNormals!==Me||Wt.morphColors!==Te||Wt.toneMapping!==Ge||Wt.morphTargetsCount!==he)&&(we=!0):(we=!0,Wt.__version=tt.version);let ln=Wt.currentProgram;we===!0&&(ln=Ki(tt,W,X));let Kn=!1,Qe=!1,fi=!1;const Be=ln.getUniforms(),pn=Wt.uniforms;if(Ft.useProgram(ln.program)&&(Kn=!0,Qe=!0,fi=!0),tt.id!==R&&(R=tt.id,Qe=!0),Kn||C!==w){Ft.buffers.depth.getReversed()?(bt.copy(w.projectionMatrix),Eh(bt),Th(bt),Be.setValue(O,"projectionMatrix",bt)):Be.setValue(O,"projectionMatrix",w.projectionMatrix),Be.setValue(O,"viewMatrix",w.matrixWorldInverse);const qe=Be.map.cameraPosition;qe!==void 0&&qe.setValue(O,Ee.setFromMatrixPosition(w.matrixWorld)),ue.logarithmicDepthBuffer&&Be.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Be.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,Qe=!0,fi=!0)}if(X.isSkinnedMesh){Be.setOptional(O,X,"bindMatrix"),Be.setOptional(O,X,"bindMatrixInverse");const tn=X.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Be.setValue(O,"boneTexture",tn.boneTexture,L))}X.isBatchedMesh&&(Be.setOptional(O,X,"batchingTexture"),Be.setValue(O,"batchingTexture",X._matricesTexture,L),Be.setOptional(O,X,"batchingIdTexture"),Be.setValue(O,"batchingIdTexture",X._indirectTexture,L),Be.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&Be.setValue(O,"batchingColorTexture",X._colorsTexture,L));const ke=Q.morphAttributes;if((ke.position!==void 0||ke.normal!==void 0||ke.color!==void 0)&&jt.update(X,Q,ln),(Qe||Wt.receiveShadow!==X.receiveShadow)&&(Wt.receiveShadow=X.receiveShadow,Be.setValue(O,"receiveShadow",X.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(pn.envMap.value=Nt,pn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&W.environment!==null&&(pn.envMapIntensity.value=W.environmentIntensity),Qe&&(Be.setValue(O,"toneMappingExposure",D.toneMappingExposure),Wt.needsLights&&hi(pn,fi),vt&&tt.fog===!0&&At.refreshFogUniforms(pn,vt),At.refreshMaterialUniforms(pn,tt,st,pt,p.state.transmissionRenderTarget[w.id]),Vs.upload(O,ns(Wt),pn,L)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Vs.upload(O,ns(Wt),pn,L),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Be.setValue(O,"center",X.center),Be.setValue(O,"modelViewMatrix",X.modelViewMatrix),Be.setValue(O,"normalMatrix",X.normalMatrix),Be.setValue(O,"modelMatrix",X.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const tn=tt.uniformsGroups;for(let qe=0,Dr=tn.length;qe<Dr;qe++){const Zn=tn[qe];G.update(Zn,ln),G.bind(Zn,ln)}}return ln}function hi(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function is(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return l},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(w,W,Q){const tt=Gt.get(w);tt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),Gt.get(w.texture).__webglTexture=W,Gt.get(w.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:Q,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){const Q=Gt.get(w);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0};const Rr=O.createFramebuffer();this.setRenderTarget=function(w,W=0,Q=0){j=w,H=W,l=Q;let tt=!0,X=null,vt=!1,St=!1;if(w){const Nt=Gt.get(w);if(Nt.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(O.FRAMEBUFFER,null),tt=!1;else if(Nt.__webglFramebuffer===void 0)L.setupRenderTarget(w);else if(Nt.__hasExternalTextures)L.rebindTextures(w,Gt.get(w.texture).__webglTexture,Gt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Xt=w.depthTexture;if(Nt.__boundDepthTexture!==Xt){if(Xt!==null&&Gt.has(Xt)&&(w.width!==Xt.image.width||w.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(w)}}const te=w.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(St=!0);const Jt=Gt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Jt[W])?X=Jt[W][Q]:X=Jt[W],vt=!0):w.samples>0&&L.useMultisampledRTT(w)===!1?X=Gt.get(w).__webglMultisampledFramebuffer:Array.isArray(Jt)?X=Jt[Q]:X=Jt,z.copy(w.viewport),lt.copy(w.scissor),Y=w.scissorTest}else z.copy(Vt).multiplyScalar(st).floor(),lt.copy(ae).multiplyScalar(st).floor(),Y=Re;if(Q!==0&&(X=Rr),Ft.bindFramebuffer(O.FRAMEBUFFER,X)&&tt&&Ft.drawBuffers(w,X),Ft.viewport(z),Ft.scissor(lt),Ft.setScissorTest(Y),vt){const Nt=Gt.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Nt.__webglTexture,Q)}else if(St){const Nt=Gt.get(w.texture),te=W;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Nt.__webglTexture,Q,te)}else if(w!==null&&Q!==0){const Nt=Gt.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Nt.__webglTexture,Q)}R=-1},this.readRenderTargetPixels=function(w,W,Q,tt,X,vt,St){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&St!==void 0&&(Ut=Ut[St]),Ut){Ft.bindFramebuffer(O.FRAMEBUFFER,Ut);try{const Nt=w.texture,te=Nt.format,Jt=Nt.type;if(!ue.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-tt&&Q>=0&&Q<=w.height-X&&O.readPixels(W,Q,tt,X,ne.convert(te),ne.convert(Jt),vt)}finally{const Nt=j!==null?Gt.get(j).__webglFramebuffer:null;Ft.bindFramebuffer(O.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(w,W,Q,tt,X,vt,St){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&St!==void 0&&(Ut=Ut[St]),Ut)if(W>=0&&W<=w.width-tt&&Q>=0&&Q<=w.height-X){Ft.bindFramebuffer(O.FRAMEBUFFER,Ut);const Nt=w.texture,te=Nt.format,Jt=Nt.type;if(!ue.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Xt),O.bufferData(O.PIXEL_PACK_BUFFER,vt.byteLength,O.STREAM_READ),O.readPixels(W,Q,tt,X,ne.convert(te),ne.convert(Jt),0);const Me=j!==null?Gt.get(j).__webglFramebuffer:null;Ft.bindFramebuffer(O.FRAMEBUFFER,Me);const Te=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Sh(O,Te,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Xt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,vt),O.deleteBuffer(Xt),O.deleteSync(Te),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,Q=0){const tt=Math.pow(2,-Q),X=Math.floor(w.image.width*tt),vt=Math.floor(w.image.height*tt),St=W!==null?W.x:0,Ut=W!==null?W.y:0;L.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,St,Ut,X,vt),Ft.unbindTexture()};const Pr=O.createFramebuffer(),Zi=O.createFramebuffer();this.copyTextureToTexture=function(w,W,Q=null,tt=null,X=0,vt=null){vt===null&&(X!==0?(ks("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=X,X=0):vt=0);let St,Ut,Nt,te,Jt,Xt,Me,Te,Ge;const me=w.isCompressedTexture?w.mipmaps[vt]:w.image;if(Q!==null)St=Q.max.x-Q.min.x,Ut=Q.max.y-Q.min.y,Nt=Q.isBox3?Q.max.z-Q.min.z:1,te=Q.min.x,Jt=Q.min.y,Xt=Q.isBox3?Q.min.z:0;else{const ke=Math.pow(2,-X);St=Math.floor(me.width*ke),Ut=Math.floor(me.height*ke),w.isDataArrayTexture?Nt=me.depth:w.isData3DTexture?Nt=Math.floor(me.depth*ke):Nt=1,te=0,Jt=0,Xt=0}tt!==null?(Me=tt.x,Te=tt.y,Ge=tt.z):(Me=0,Te=0,Ge=0);const he=ne.convert(W.format),Wt=ne.convert(W.type);let Ye;W.isData3DTexture?(L.setTexture3D(W,0),Ye=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(L.setTexture2DArray(W,0),Ye=O.TEXTURE_2D_ARRAY):(L.setTexture2D(W,0),Ye=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const we=O.getParameter(O.UNPACK_ROW_LENGTH),ln=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Kn=O.getParameter(O.UNPACK_SKIP_PIXELS),Qe=O.getParameter(O.UNPACK_SKIP_ROWS),fi=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,me.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,me.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,te),O.pixelStorei(O.UNPACK_SKIP_ROWS,Jt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Xt);const Be=w.isDataArrayTexture||w.isData3DTexture,pn=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const ke=Gt.get(w),tn=Gt.get(W),qe=Gt.get(ke.__renderTarget),Dr=Gt.get(tn.__renderTarget);Ft.bindFramebuffer(O.READ_FRAMEBUFFER,qe.__webglFramebuffer),Ft.bindFramebuffer(O.DRAW_FRAMEBUFFER,Dr.__webglFramebuffer);for(let Zn=0;Zn<Nt;Zn++)Be&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Gt.get(w).__webglTexture,X,Xt+Zn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Gt.get(W).__webglTexture,vt,Ge+Zn)),O.blitFramebuffer(te,Jt,St,Ut,Me,Te,St,Ut,O.DEPTH_BUFFER_BIT,O.NEAREST);Ft.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||Gt.has(w)){const ke=Gt.get(w),tn=Gt.get(W);Ft.bindFramebuffer(O.READ_FRAMEBUFFER,Pr),Ft.bindFramebuffer(O.DRAW_FRAMEBUFFER,Zi);for(let qe=0;qe<Nt;qe++)Be?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.__webglTexture,X,Xt+qe):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ke.__webglTexture,X),pn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,tn.__webglTexture,vt,Ge+qe):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,tn.__webglTexture,vt),X!==0?O.blitFramebuffer(te,Jt,St,Ut,Me,Te,St,Ut,O.COLOR_BUFFER_BIT,O.NEAREST):pn?O.copyTexSubImage3D(Ye,vt,Me,Te,Ge+qe,te,Jt,St,Ut):O.copyTexSubImage2D(Ye,vt,Me,Te,te,Jt,St,Ut);Ft.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else pn?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Ye,vt,Me,Te,Ge,St,Ut,Nt,he,Wt,me.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(Ye,vt,Me,Te,Ge,St,Ut,Nt,he,me.data):O.texSubImage3D(Ye,vt,Me,Te,Ge,St,Ut,Nt,he,Wt,me):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,vt,Me,Te,St,Ut,he,Wt,me.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,vt,Me,Te,me.width,me.height,he,me.data):O.texSubImage2D(O.TEXTURE_2D,vt,Me,Te,St,Ut,he,Wt,me);O.pixelStorei(O.UNPACK_ROW_LENGTH,we),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ln),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Kn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Qe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,fi),vt===0&&W.generateMipmaps&&O.generateMipmap(Ye),Ft.unbindTexture()},this.copyTextureToTexture3D=function(w,W,Q=null,tt=null,X=0){return ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,W,Q,tt,X)},this.initRenderTarget=function(w){Gt.get(w).__webglFramebuffer===void 0&&L.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?L.setTextureCube(w,0):w.isData3DTexture?L.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?L.setTexture2DArray(w,0):L.setTexture2D(w,0),Ft.unbindTexture()},this.resetState=function(){H=0,l=0,j=null,Ft.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ce._getUnpackColorSpace()}}const Mc={type:"change"},Qo={type:"start"},iu={type:"end"},Is=new Qs,Sc=new Si,jg=Math.cos(70*yh.DEG2RAD),Ke=new k,_n=2*Math.PI,Ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ka=1e-6;class Yg extends cf{constructor(t,e=null){super(t,e),this.state=Ne.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gr.ROTATE,MIDDLE:gr.DOLLY,RIGHT:gr.PAN},this.touches={ONE:pr.ROTATE,TWO:pr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new qi,this._lastTargetPosition=new k,this._quat=new qi().setFromUnitVectors(t.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Yl,this._sphericalDelta=new Yl,this._scale=1,this._panOffset=new k,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new k,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Kg.bind(this),this._onPointerDown=$g.bind(this),this._onPointerUp=Zg.bind(this),this._onContextMenu=r_.bind(this),this._onMouseWheel=t_.bind(this),this._onKeyDown=e_.bind(this),this._onTouchStart=n_.bind(this),this._onTouchMove=i_.bind(this),this._onMouseDown=Jg.bind(this),this._onMouseMove=Qg.bind(this),this._interceptControlDown=s_.bind(this),this._interceptControlUp=a_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mc),this.update(),this.state=Ne.NONE}update(t=null){const e=this.object.position;Ke.copy(e).sub(this.target),Ke.applyQuaternion(this._quat),this._spherical.setFromVector3(Ke),this.autoRotate&&this.state===Ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=_n:n>Math.PI&&(n-=_n),s<-Math.PI?s+=_n:s>Math.PI&&(s-=_n),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=c!=this._spherical.radius}if(Ke.setFromSpherical(this._spherical),Ke.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const h=Ke.length();c=this._clampDistance(h*this._scale);const d=h-c;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),a=!!d}else if(this.object.isOrthographicCamera){const h=new k(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=d!==this.object.zoom;const m=new k(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(h),this.object.updateMatrixWorld(),c=Ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Is.origin.copy(this.object.position),Is.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Is.direction))<jg?this.object.lookAt(this.target):(Sc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Is.intersectPlane(Sc,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Ka||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ka||this._lastTargetPosition.distanceToSquared(this.target)>Ka?(this.dispatchEvent(Mc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?_n/60*this.autoRotateSpeed*t:_n/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ke.setFromMatrixColumn(e,0),Ke.multiplyScalar(-t),this._panOffset.add(Ke)}_panUp(t,e){this.screenSpacePanning===!0?Ke.setFromMatrixColumn(e,1):(Ke.setFromMatrixColumn(e,0),Ke.crossVectors(this.object.up,Ke)),Ke.multiplyScalar(t),this._panOffset.add(Ke)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ke.copy(s).sub(this.target);let a=Ke.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/n.clientHeight,this.object.matrix),this._panUp(2*e*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,a=e-n.top,c=n.width,h=n.height;this._mouse.x=s/c*2-1,this._mouse.y=-(a/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/e.clientHeight),this._rotateUp(_n*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,a=Math.sqrt(n*n+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/e.clientHeight),this._rotateUp(_n*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,a=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(t.pageX+e.x)*.5,h=(t.pageY+e.y)*.5;this._updateZoomParameters(c,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new re,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function $g(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Kg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Zg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(iu),this.state=Ne.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Jg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case gr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ne.DOLLY;break;case gr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ne.ROTATE}break;case gr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ne.PAN}break;default:this.state=Ne.NONE}this.state!==Ne.NONE&&this.dispatchEvent(Qo)}function Qg(i){switch(this.state){case Ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function t_(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ne.NONE||(i.preventDefault(),this.dispatchEvent(Qo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(iu))}function e_(i){this.enabled!==!1&&this._handleKeyDown(i)}function n_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case pr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ne.TOUCH_ROTATE;break;case pr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ne.TOUCH_PAN;break;default:this.state=Ne.NONE}break;case 2:switch(this.touches.TWO){case pr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ne.TOUCH_DOLLY_PAN;break;case pr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ne.TOUCH_DOLLY_ROTATE;break;default:this.state=Ne.NONE}break;default:this.state=Ne.NONE}this.state!==Ne.NONE&&this.dispatchEvent(Qo)}function i_(i){switch(this._trackPointer(i),this.state){case Ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ne.NONE}}function r_(i){this.enabled!==!1&&i.preventDefault()}function s_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function a_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ru extends vn{constructor(e,n,s,a,c){super(e,n,s,a);fe(this,"controls");this.controls=new Yg(this,c)}update(){this.controls.update()}}class o_ extends ru{constructor(e,n,s,a,c){super(e,n,s,a,c);fe(this,"target");fe(this,"lastTargetPos")}setTarget(e,n){this.target=e,this.position.copy(e.position).add(n)}update(){if(super.update(),!!this.target){if(this.lastTargetPos){const e=this.target.position,n=this.lastTargetPos.sub(e);this.position.add(n)}this.lastTargetPos=this.target.position}}}class su{constructor(){fe(this,"children",[])}add(t){this.children.push(t)}update(t){for(const e of this.children)e.update(t)}}class tl extends su{constructor(e){super();fe(this,"triggers",[]);fe(this,"mesh");this.mesh=e}addDependency(e,n){this.triggers.push([e,n])}update(e){super.update(e);for(const[n,s]of this.triggers)n()&&s()}}function l_(i,t){i.updateWorldMatrix(!0,!1),t.updateWorldMatrix(!0,!1);const e=new ji().setFromObject(i),n=new ji().setFromObject(t);return e.intersectsBox(n)}const ki=new k(0,1,0),Ec=.8,Wr=2,Za=.3,c_=.75,Us=new of;class Kr extends tl{constructor(e,n,s){const a=new br(Ec,Wr,Za);a.translate(0,Wr/2,-.3/2);super(new hn(a,n));fe(this,"toppling",!1);fe(this,"fallen",!1);fe(this,"fallenMat");fe(this,"fwdAxis");fe(this,"toppleAxis");fe(this,"collideNodes",[]);this.mesh.userData.domino=this,this.mesh.castShadow=!0,this.mesh.translateOnAxis(ki,-2/2),this.fallenMat=s,this.fwdAxis=e.clone().normalize(),this.mesh.rotateY(new k(0,0,1).angleTo(e)),this.toppleAxis=new k().crossVectors(ki,this.fwdAxis).normalize()}setPosition(e,n,s){this.mesh.position.set(e,n,s),this.mesh.translateOnAxis(ki,-2/2)}updateAxes(e){this.fwdAxis=e.clone().normalize(),this.mesh.rotateY(new k(0,0,1).angleTo(e)),this.toppleAxis=new k().crossVectors(ki,this.fwdAxis).normalize()}addCollidable(e){this.collideNodes.push(e)}rayOrigin(e){const n=this.mesh.position.clone(),s=this.toppleAxis.clone().normalize().multiplyScalar(Ec/2);return e===0?n.add(s):n.sub(s)}get rayDirection(){return new k(0,Wr,0).applyQuaternion(this.mesh.quaternion).normalize()}topple(){this.toppling=!0;let e=0;const n=new k().crossVectors(ki,this.fwdAxis).normalize(),s=(()=>{let d=1/0;for(const m of this.collideNodes)m instanceof Kr&&(d=Math.min(d,m.mesh.position.clone().sub(this.mesh.position).length()));return d})(),a=Math.sqrt(s*s+Za*Za),c=50;let h=0;this.addDependency(()=>!this.fallen,()=>{this.update=d=>{if(this.fallen)return;const m=c_*d;Us.set(this.rayOrigin(0),this.rayDirection);const g=Us.intersectObjects(this.collideNodes.map(A=>A.mesh),!1);Us.set(this.rayOrigin(1),this.rayDirection);const v=Us.intersectObjects(this.collideNodes.map(A=>A.mesh),!1);if((g.find(A=>A.distance<=a+.01)??v.find(A=>A.distance<=a+.01))||e>=Math.PI/2||h>=c){this.fallen=!0,this.mesh.material=this.fallenMat;return}const S=g.find(A=>A.distance<=Wr+.01),T=v.find(A=>A.distance<=Wr+.01);if(S||T){S&&(console.log(S),S.object instanceof hn&&S.object.userData.domino&&!S.object.userData.domino.toppling&&S.object.userData.domino.topple()),T&&T.object instanceof hn&&T.object.userData.domino&&!T.object.userData.domino.toppling&&T.object.userData.domino.topple(),h++;return}h=0,e+=m,this.mesh.rotateOnWorldAxis(n,m)}})}}const Tc=1,u_=1.5;class h_ extends tl{constructor(e,n){super(new hn(new ta(Tc),n));fe(this,"collided",!1);fe(this,"fwdAxis");fe(this,"collideNodes",[]);this.mesh.castShadow=!0,this.fwdAxis=e.clone().normalize()}addCollidable(e){this.collideNodes.push(e)}roll(){const e=new k().crossVectors(ki,this.fwdAxis).normalize();this.addDependency(()=>!this.collided,()=>{this.update=n=>{if(this.collided)return;for(const c of this.collideNodes)c instanceof Kr&&l_(this.mesh,c.mesh)&&(console.info("sphere collided with domino"),this.collided=!0,c.topple());const s=u_*n;this.mesh.rotateOnAxis(e,s);const a=this.fwdAxis.clone().multiplyScalar(s*Tc);this.mesh.position.add(a)}})}}function f_(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Gs={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var d_=Gs.exports,bc;function p_(){return bc||(bc=1,function(i){(function(t,e){i.exports=t.document?e(t,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return e(n)}})(typeof window<"u"?window:d_,function(t,e){var n=[],s=Object.getPrototypeOf,a=n.slice,c=n.flat?function(r){return n.flat.call(r)}:function(r){return n.concat.apply([],r)},h=n.push,d=n.indexOf,m={},g=m.toString,v=m.hasOwnProperty,y=v.toString,S=y.call(Object),T={},A=function(o){return typeof o=="function"&&typeof o.nodeType!="number"&&typeof o.item!="function"},M=function(o){return o!=null&&o===o.window},p=t.document,F={type:!0,src:!0,nonce:!0,noModule:!0};function U(r,o,u){u=u||p;var f,_,x=u.createElement("script");if(x.text=r,o)for(f in F)_=o[f]||o.getAttribute&&o.getAttribute(f),_&&x.setAttribute(f,_);u.head.appendChild(x).parentNode.removeChild(x)}function D(r){return r==null?r+"":typeof r=="object"||typeof r=="function"?m[g.call(r)]||"object":typeof r}var q="3.7.1",H=/HTML$/i,l=function(r,o){return new l.fn.init(r,o)};l.fn=l.prototype={jquery:q,constructor:l,length:0,toArray:function(){return a.call(this)},get:function(r){return r==null?a.call(this):r<0?this[r+this.length]:this[r]},pushStack:function(r){var o=l.merge(this.constructor(),r);return o.prevObject=this,o},each:function(r){return l.each(this,r)},map:function(r){return this.pushStack(l.map(this,function(o,u){return r.call(o,u,o)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(l.grep(this,function(r,o){return(o+1)%2}))},odd:function(){return this.pushStack(l.grep(this,function(r,o){return o%2}))},eq:function(r){var o=this.length,u=+r+(r<0?o:0);return this.pushStack(u>=0&&u<o?[this[u]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:n.sort,splice:n.splice},l.extend=l.fn.extend=function(){var r,o,u,f,_,x,E=arguments[0]||{},N=1,I=arguments.length,V=!1;for(typeof E=="boolean"&&(V=E,E=arguments[N]||{},N++),typeof E!="object"&&!A(E)&&(E={}),N===I&&(E=this,N--);N<I;N++)if((r=arguments[N])!=null)for(o in r)f=r[o],!(o==="__proto__"||E===f)&&(V&&f&&(l.isPlainObject(f)||(_=Array.isArray(f)))?(u=E[o],_&&!Array.isArray(u)?x=[]:!_&&!l.isPlainObject(u)?x={}:x=u,_=!1,E[o]=l.extend(V,x,f)):f!==void 0&&(E[o]=f));return E},l.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(r){throw new Error(r)},noop:function(){},isPlainObject:function(r){var o,u;return!r||g.call(r)!=="[object Object]"?!1:(o=s(r),o?(u=v.call(o,"constructor")&&o.constructor,typeof u=="function"&&y.call(u)===S):!0)},isEmptyObject:function(r){var o;for(o in r)return!1;return!0},globalEval:function(r,o,u){U(r,{nonce:o&&o.nonce},u)},each:function(r,o){var u,f=0;if(j(r))for(u=r.length;f<u&&o.call(r[f],f,r[f])!==!1;f++);else for(f in r)if(o.call(r[f],f,r[f])===!1)break;return r},text:function(r){var o,u="",f=0,_=r.nodeType;if(!_)for(;o=r[f++];)u+=l.text(o);return _===1||_===11?r.textContent:_===9?r.documentElement.textContent:_===3||_===4?r.nodeValue:u},makeArray:function(r,o){var u=o||[];return r!=null&&(j(Object(r))?l.merge(u,typeof r=="string"?[r]:r):h.call(u,r)),u},inArray:function(r,o,u){return o==null?-1:d.call(o,r,u)},isXMLDoc:function(r){var o=r&&r.namespaceURI,u=r&&(r.ownerDocument||r).documentElement;return!H.test(o||u&&u.nodeName||"HTML")},merge:function(r,o){for(var u=+o.length,f=0,_=r.length;f<u;f++)r[_++]=o[f];return r.length=_,r},grep:function(r,o,u){for(var f,_=[],x=0,E=r.length,N=!u;x<E;x++)f=!o(r[x],x),f!==N&&_.push(r[x]);return _},map:function(r,o,u){var f,_,x=0,E=[];if(j(r))for(f=r.length;x<f;x++)_=o(r[x],x,u),_!=null&&E.push(_);else for(x in r)_=o(r[x],x,u),_!=null&&E.push(_);return c(E)},guid:1,support:T}),typeof Symbol=="function"&&(l.fn[Symbol.iterator]=n[Symbol.iterator]),l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(r,o){m["[object "+o+"]"]=o.toLowerCase()});function j(r){var o=!!r&&"length"in r&&r.length,u=D(r);return A(r)||M(r)?!1:u==="array"||o===0||typeof o=="number"&&o>0&&o-1 in r}function R(r,o){return r.nodeName&&r.nodeName.toLowerCase()===o.toLowerCase()}var C=n.pop,z=n.sort,lt=n.splice,Y="[\\x20\\t\\r\\n\\f]",ft=new RegExp("^"+Y+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Y+"+$","g");l.contains=function(r,o){var u=o&&o.parentNode;return r===u||!!(u&&u.nodeType===1&&(r.contains?r.contains(u):r.compareDocumentPosition&&r.compareDocumentPosition(u)&16))};var mt=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function dt(r,o){return o?r==="\0"?"�":r.slice(0,-1)+"\\"+r.charCodeAt(r.length-1).toString(16)+" ":"\\"+r}l.escapeSelector=function(r){return(r+"").replace(mt,dt)};var pt=p,st=h;(function(){var r,o,u,f,_,x=st,E,N,I,V,nt,ot=l.expando,J=0,gt=0,ee=rs(),be=rs(),oe=rs(),rn=rs(),$e=function(P,B){return P===B&&(_=!0),0},On="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Bn="(?:\\\\[\\da-fA-F]{1,6}"+Y+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Se="\\["+Y+"*("+Bn+")(?:"+Y+"*([*^$|!~]?=)"+Y+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Bn+"))|)"+Y+"*\\]",Pi=":("+Bn+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Se+")*)|.*)\\)|)",Ae=new RegExp(Y+"+","g"),We=new RegExp("^"+Y+"*,"+Y+"*"),Ur=new RegExp("^"+Y+"*([>+~]|"+Y+")"+Y+"*"),ua=new RegExp(Y+"|>"),zn=new RegExp(Pi),Nr=new RegExp("^"+Bn+"$"),Hn={ID:new RegExp("^#("+Bn+")"),CLASS:new RegExp("^\\.("+Bn+")"),TAG:new RegExp("^("+Bn+"|[*])"),ATTR:new RegExp("^"+Se),PSEUDO:new RegExp("^"+Pi),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Y+"*(even|odd|(([+-]|)(\\d*)n|)"+Y+"*(?:([+-]|)"+Y+"*(\\d+)|))"+Y+"*\\)|)","i"),bool:new RegExp("^(?:"+On+")$","i"),needsContext:new RegExp("^"+Y+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Y+"*((?:-\\d)?\\d*)"+Y+"*\\)|)(?=[^-]|$)","i")},di=/^(?:input|select|textarea|button)$/i,pi=/^h\d$/i,bn=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ha=/[+~]/,Jn=new RegExp("\\\\[\\da-fA-F]{1,6}"+Y+"?|\\\\([^\\r\\n\\f])","g"),Qn=function(P,B){var $="0x"+P.slice(1)-65536;return B||($<0?String.fromCharCode($+65536):String.fromCharCode($>>10|55296,$&1023|56320))},Eu=function(){mi()},Tu=as(function(P){return P.disabled===!0&&R(P,"fieldset")},{dir:"parentNode",next:"legend"});function bu(){try{return E.activeElement}catch{}}try{x.apply(n=a.call(pt.childNodes),pt.childNodes),n[pt.childNodes.length].nodeType}catch{x={apply:function(B,$){st.apply(B,a.call($))},call:function(B){st.apply(B,a.call(arguments,1))}}}function Ie(P,B,$,et){var at,xt,Rt,Bt,Pt,ge,Qt,ie=B&&B.ownerDocument,_e=B?B.nodeType:9;if($=$||[],typeof P!="string"||!P||_e!==1&&_e!==9&&_e!==11)return $;if(!et&&(mi(B),B=B||E,I)){if(_e!==11&&(Pt=bn.exec(P)))if(at=Pt[1]){if(_e===9)if(Rt=B.getElementById(at)){if(Rt.id===at)return x.call($,Rt),$}else return $;else if(ie&&(Rt=ie.getElementById(at))&&Ie.contains(B,Rt)&&Rt.id===at)return x.call($,Rt),$}else{if(Pt[2])return x.apply($,B.getElementsByTagName(P)),$;if((at=Pt[3])&&B.getElementsByClassName)return x.apply($,B.getElementsByClassName(at)),$}if(!rn[P+" "]&&(!V||!V.test(P))){if(Qt=P,ie=B,_e===1&&(ua.test(P)||Ur.test(P))){for(ie=ha.test(P)&&fa(B.parentNode)||B,(ie!=B||!T.scope)&&((Bt=B.getAttribute("id"))?Bt=l.escapeSelector(Bt):B.setAttribute("id",Bt=ot)),ge=Fr(P),xt=ge.length;xt--;)ge[xt]=(Bt?"#"+Bt:":scope")+" "+ss(ge[xt]);Qt=ge.join(",")}try{return x.apply($,ie.querySelectorAll(Qt)),$}catch{rn(P,!0)}finally{Bt===ot&&B.removeAttribute("id")}}}return fl(P.replace(ft,"$1"),B,$,et)}function rs(){var P=[];function B($,et){return P.push($+" ")>o.cacheLength&&delete B[P.shift()],B[$+" "]=et}return B}function Pn(P){return P[ot]=!0,P}function Ji(P){var B=E.createElement("fieldset");try{return!!P(B)}catch{return!1}finally{B.parentNode&&B.parentNode.removeChild(B),B=null}}function Au(P){return function(B){return R(B,"input")&&B.type===P}}function wu(P){return function(B){return(R(B,"input")||R(B,"button"))&&B.type===P}}function ul(P){return function(B){return"form"in B?B.parentNode&&B.disabled===!1?"label"in B?"label"in B.parentNode?B.parentNode.disabled===P:B.disabled===P:B.isDisabled===P||B.isDisabled!==!P&&Tu(B)===P:B.disabled===P:"label"in B?B.disabled===P:!1}}function Di(P){return Pn(function(B){return B=+B,Pn(function($,et){for(var at,xt=P([],$.length,B),Rt=xt.length;Rt--;)$[at=xt[Rt]]&&($[at]=!(et[at]=$[at]))})})}function fa(P){return P&&typeof P.getElementsByTagName<"u"&&P}function mi(P){var B,$=P?P.ownerDocument||P:pt;return $==E||$.nodeType!==9||!$.documentElement||(E=$,N=E.documentElement,I=!l.isXMLDoc(E),nt=N.matches||N.webkitMatchesSelector||N.msMatchesSelector,N.msMatchesSelector&&pt!=E&&(B=E.defaultView)&&B.top!==B&&B.addEventListener("unload",Eu),T.getById=Ji(function(et){return N.appendChild(et).id=l.expando,!E.getElementsByName||!E.getElementsByName(l.expando).length}),T.disconnectedMatch=Ji(function(et){return nt.call(et,"*")}),T.scope=Ji(function(){return E.querySelectorAll(":scope")}),T.cssHas=Ji(function(){try{return E.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),T.getById?(o.filter.ID=function(et){var at=et.replace(Jn,Qn);return function(xt){return xt.getAttribute("id")===at}},o.find.ID=function(et,at){if(typeof at.getElementById<"u"&&I){var xt=at.getElementById(et);return xt?[xt]:[]}}):(o.filter.ID=function(et){var at=et.replace(Jn,Qn);return function(xt){var Rt=typeof xt.getAttributeNode<"u"&&xt.getAttributeNode("id");return Rt&&Rt.value===at}},o.find.ID=function(et,at){if(typeof at.getElementById<"u"&&I){var xt,Rt,Bt,Pt=at.getElementById(et);if(Pt){if(xt=Pt.getAttributeNode("id"),xt&&xt.value===et)return[Pt];for(Bt=at.getElementsByName(et),Rt=0;Pt=Bt[Rt++];)if(xt=Pt.getAttributeNode("id"),xt&&xt.value===et)return[Pt]}return[]}}),o.find.TAG=function(et,at){return typeof at.getElementsByTagName<"u"?at.getElementsByTagName(et):at.querySelectorAll(et)},o.find.CLASS=function(et,at){if(typeof at.getElementsByClassName<"u"&&I)return at.getElementsByClassName(et)},V=[],Ji(function(et){var at;N.appendChild(et).innerHTML="<a id='"+ot+"' href='' disabled='disabled'></a><select id='"+ot+"-\r\\' disabled='disabled'><option selected=''></option></select>",et.querySelectorAll("[selected]").length||V.push("\\["+Y+"*(?:value|"+On+")"),et.querySelectorAll("[id~="+ot+"-]").length||V.push("~="),et.querySelectorAll("a#"+ot+"+*").length||V.push(".#.+[+~]"),et.querySelectorAll(":checked").length||V.push(":checked"),at=E.createElement("input"),at.setAttribute("type","hidden"),et.appendChild(at).setAttribute("name","D"),N.appendChild(et).disabled=!0,et.querySelectorAll(":disabled").length!==2&&V.push(":enabled",":disabled"),at=E.createElement("input"),at.setAttribute("name",""),et.appendChild(at),et.querySelectorAll("[name='']").length||V.push("\\["+Y+"*name"+Y+"*="+Y+`*(?:''|"")`)}),T.cssHas||V.push(":has"),V=V.length&&new RegExp(V.join("|")),$e=function(et,at){if(et===at)return _=!0,0;var xt=!et.compareDocumentPosition-!at.compareDocumentPosition;return xt||(xt=(et.ownerDocument||et)==(at.ownerDocument||at)?et.compareDocumentPosition(at):1,xt&1||!T.sortDetached&&at.compareDocumentPosition(et)===xt?et===E||et.ownerDocument==pt&&Ie.contains(pt,et)?-1:at===E||at.ownerDocument==pt&&Ie.contains(pt,at)?1:f?d.call(f,et)-d.call(f,at):0:xt&4?-1:1)}),E}Ie.matches=function(P,B){return Ie(P,null,null,B)},Ie.matchesSelector=function(P,B){if(mi(P),I&&!rn[B+" "]&&(!V||!V.test(B)))try{var $=nt.call(P,B);if($||T.disconnectedMatch||P.document&&P.document.nodeType!==11)return $}catch{rn(B,!0)}return Ie(B,E,null,[P]).length>0},Ie.contains=function(P,B){return(P.ownerDocument||P)!=E&&mi(P),l.contains(P,B)},Ie.attr=function(P,B){(P.ownerDocument||P)!=E&&mi(P);var $=o.attrHandle[B.toLowerCase()],et=$&&v.call(o.attrHandle,B.toLowerCase())?$(P,B,!I):void 0;return et!==void 0?et:P.getAttribute(B)},Ie.error=function(P){throw new Error("Syntax error, unrecognized expression: "+P)},l.uniqueSort=function(P){var B,$=[],et=0,at=0;if(_=!T.sortStable,f=!T.sortStable&&a.call(P,0),z.call(P,$e),_){for(;B=P[at++];)B===P[at]&&(et=$.push(at));for(;et--;)lt.call(P,$[et],1)}return f=null,P},l.fn.uniqueSort=function(){return this.pushStack(l.uniqueSort(a.apply(this)))},o=l.expr={cacheLength:50,createPseudo:Pn,match:Hn,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(P){return P[1]=P[1].replace(Jn,Qn),P[3]=(P[3]||P[4]||P[5]||"").replace(Jn,Qn),P[2]==="~="&&(P[3]=" "+P[3]+" "),P.slice(0,4)},CHILD:function(P){return P[1]=P[1].toLowerCase(),P[1].slice(0,3)==="nth"?(P[3]||Ie.error(P[0]),P[4]=+(P[4]?P[5]+(P[6]||1):2*(P[3]==="even"||P[3]==="odd")),P[5]=+(P[7]+P[8]||P[3]==="odd")):P[3]&&Ie.error(P[0]),P},PSEUDO:function(P){var B,$=!P[6]&&P[2];return Hn.CHILD.test(P[0])?null:(P[3]?P[2]=P[4]||P[5]||"":$&&zn.test($)&&(B=Fr($,!0))&&(B=$.indexOf(")",$.length-B)-$.length)&&(P[0]=P[0].slice(0,B),P[2]=$.slice(0,B)),P.slice(0,3))}},filter:{TAG:function(P){var B=P.replace(Jn,Qn).toLowerCase();return P==="*"?function(){return!0}:function($){return R($,B)}},CLASS:function(P){var B=ee[P+" "];return B||(B=new RegExp("(^|"+Y+")"+P+"("+Y+"|$)"))&&ee(P,function($){return B.test(typeof $.className=="string"&&$.className||typeof $.getAttribute<"u"&&$.getAttribute("class")||"")})},ATTR:function(P,B,$){return function(et){var at=Ie.attr(et,P);return at==null?B==="!=":B?(at+="",B==="="?at===$:B==="!="?at!==$:B==="^="?$&&at.indexOf($)===0:B==="*="?$&&at.indexOf($)>-1:B==="$="?$&&at.slice(-$.length)===$:B==="~="?(" "+at.replace(Ae," ")+" ").indexOf($)>-1:B==="|="?at===$||at.slice(0,$.length+1)===$+"-":!1):!0}},CHILD:function(P,B,$,et,at){var xt=P.slice(0,3)!=="nth",Rt=P.slice(-4)!=="last",Bt=B==="of-type";return et===1&&at===0?function(Pt){return!!Pt.parentNode}:function(Pt,ge,Qt){var ie,_e,Yt,ze,mn,sn=xt!==Rt?"nextSibling":"previousSibling",An=Pt.parentNode,kn=Bt&&Pt.nodeName.toLowerCase(),Qi=!Qt&&!Bt,cn=!1;if(An){if(xt){for(;sn;){for(Yt=Pt;Yt=Yt[sn];)if(Bt?R(Yt,kn):Yt.nodeType===1)return!1;mn=sn=P==="only"&&!mn&&"nextSibling"}return!0}if(mn=[Rt?An.firstChild:An.lastChild],Rt&&Qi){for(_e=An[ot]||(An[ot]={}),ie=_e[P]||[],ze=ie[0]===J&&ie[1],cn=ze&&ie[2],Yt=ze&&An.childNodes[ze];Yt=++ze&&Yt&&Yt[sn]||(cn=ze=0)||mn.pop();)if(Yt.nodeType===1&&++cn&&Yt===Pt){_e[P]=[J,ze,cn];break}}else if(Qi&&(_e=Pt[ot]||(Pt[ot]={}),ie=_e[P]||[],ze=ie[0]===J&&ie[1],cn=ze),cn===!1)for(;(Yt=++ze&&Yt&&Yt[sn]||(cn=ze=0)||mn.pop())&&!((Bt?R(Yt,kn):Yt.nodeType===1)&&++cn&&(Qi&&(_e=Yt[ot]||(Yt[ot]={}),_e[P]=[J,cn]),Yt===Pt)););return cn-=at,cn===et||cn%et===0&&cn/et>=0}}},PSEUDO:function(P,B){var $,et=o.pseudos[P]||o.setFilters[P.toLowerCase()]||Ie.error("unsupported pseudo: "+P);return et[ot]?et(B):et.length>1?($=[P,P,"",B],o.setFilters.hasOwnProperty(P.toLowerCase())?Pn(function(at,xt){for(var Rt,Bt=et(at,B),Pt=Bt.length;Pt--;)Rt=d.call(at,Bt[Pt]),at[Rt]=!(xt[Rt]=Bt[Pt])}):function(at){return et(at,0,$)}):et}},pseudos:{not:Pn(function(P){var B=[],$=[],et=ga(P.replace(ft,"$1"));return et[ot]?Pn(function(at,xt,Rt,Bt){for(var Pt,ge=et(at,null,Bt,[]),Qt=at.length;Qt--;)(Pt=ge[Qt])&&(at[Qt]=!(xt[Qt]=Pt))}):function(at,xt,Rt){return B[0]=at,et(B,null,Rt,$),B[0]=null,!$.pop()}}),has:Pn(function(P){return function(B){return Ie(P,B).length>0}}),contains:Pn(function(P){return P=P.replace(Jn,Qn),function(B){return(B.textContent||l.text(B)).indexOf(P)>-1}}),lang:Pn(function(P){return Nr.test(P||"")||Ie.error("unsupported lang: "+P),P=P.replace(Jn,Qn).toLowerCase(),function(B){var $;do if($=I?B.lang:B.getAttribute("xml:lang")||B.getAttribute("lang"))return $=$.toLowerCase(),$===P||$.indexOf(P+"-")===0;while((B=B.parentNode)&&B.nodeType===1);return!1}}),target:function(P){var B=t.location&&t.location.hash;return B&&B.slice(1)===P.id},root:function(P){return P===N},focus:function(P){return P===bu()&&E.hasFocus()&&!!(P.type||P.href||~P.tabIndex)},enabled:ul(!1),disabled:ul(!0),checked:function(P){return R(P,"input")&&!!P.checked||R(P,"option")&&!!P.selected},selected:function(P){return P.parentNode&&P.parentNode.selectedIndex,P.selected===!0},empty:function(P){for(P=P.firstChild;P;P=P.nextSibling)if(P.nodeType<6)return!1;return!0},parent:function(P){return!o.pseudos.empty(P)},header:function(P){return pi.test(P.nodeName)},input:function(P){return di.test(P.nodeName)},button:function(P){return R(P,"input")&&P.type==="button"||R(P,"button")},text:function(P){var B;return R(P,"input")&&P.type==="text"&&((B=P.getAttribute("type"))==null||B.toLowerCase()==="text")},first:Di(function(){return[0]}),last:Di(function(P,B){return[B-1]}),eq:Di(function(P,B,$){return[$<0?$+B:$]}),even:Di(function(P,B){for(var $=0;$<B;$+=2)P.push($);return P}),odd:Di(function(P,B){for(var $=1;$<B;$+=2)P.push($);return P}),lt:Di(function(P,B,$){var et;for($<0?et=$+B:$>B?et=B:et=$;--et>=0;)P.push(et);return P}),gt:Di(function(P,B,$){for(var et=$<0?$+B:$;++et<B;)P.push(et);return P})}},o.pseudos.nth=o.pseudos.eq;for(r in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[r]=Au(r);for(r in{submit:!0,reset:!0})o.pseudos[r]=wu(r);function hl(){}hl.prototype=o.filters=o.pseudos,o.setFilters=new hl;function Fr(P,B){var $,et,at,xt,Rt,Bt,Pt,ge=be[P+" "];if(ge)return B?0:ge.slice(0);for(Rt=P,Bt=[],Pt=o.preFilter;Rt;){(!$||(et=We.exec(Rt)))&&(et&&(Rt=Rt.slice(et[0].length)||Rt),Bt.push(at=[])),$=!1,(et=Ur.exec(Rt))&&($=et.shift(),at.push({value:$,type:et[0].replace(ft," ")}),Rt=Rt.slice($.length));for(xt in o.filter)(et=Hn[xt].exec(Rt))&&(!Pt[xt]||(et=Pt[xt](et)))&&($=et.shift(),at.push({value:$,type:xt,matches:et}),Rt=Rt.slice($.length));if(!$)break}return B?Rt.length:Rt?Ie.error(P):be(P,Bt).slice(0)}function ss(P){for(var B=0,$=P.length,et="";B<$;B++)et+=P[B].value;return et}function as(P,B,$){var et=B.dir,at=B.next,xt=at||et,Rt=$&&xt==="parentNode",Bt=gt++;return B.first?function(Pt,ge,Qt){for(;Pt=Pt[et];)if(Pt.nodeType===1||Rt)return P(Pt,ge,Qt);return!1}:function(Pt,ge,Qt){var ie,_e,Yt=[J,Bt];if(Qt){for(;Pt=Pt[et];)if((Pt.nodeType===1||Rt)&&P(Pt,ge,Qt))return!0}else for(;Pt=Pt[et];)if(Pt.nodeType===1||Rt)if(_e=Pt[ot]||(Pt[ot]={}),at&&R(Pt,at))Pt=Pt[et]||Pt;else{if((ie=_e[xt])&&ie[0]===J&&ie[1]===Bt)return Yt[2]=ie[2];if(_e[xt]=Yt,Yt[2]=P(Pt,ge,Qt))return!0}return!1}}function da(P){return P.length>1?function(B,$,et){for(var at=P.length;at--;)if(!P[at](B,$,et))return!1;return!0}:P[0]}function Cu(P,B,$){for(var et=0,at=B.length;et<at;et++)Ie(P,B[et],$);return $}function os(P,B,$,et,at){for(var xt,Rt=[],Bt=0,Pt=P.length,ge=B!=null;Bt<Pt;Bt++)(xt=P[Bt])&&(!$||$(xt,et,at))&&(Rt.push(xt),ge&&B.push(Bt));return Rt}function pa(P,B,$,et,at,xt){return et&&!et[ot]&&(et=pa(et)),at&&!at[ot]&&(at=pa(at,xt)),Pn(function(Rt,Bt,Pt,ge){var Qt,ie,_e,Yt,ze=[],mn=[],sn=Bt.length,An=Rt||Cu(B||"*",Pt.nodeType?[Pt]:Pt,[]),kn=P&&(Rt||!B)?os(An,ze,P,Pt,ge):An;if($?(Yt=at||(Rt?P:sn||et)?[]:Bt,$(kn,Yt,Pt,ge)):Yt=kn,et)for(Qt=os(Yt,mn),et(Qt,[],Pt,ge),ie=Qt.length;ie--;)(_e=Qt[ie])&&(Yt[mn[ie]]=!(kn[mn[ie]]=_e));if(Rt){if(at||P){if(at){for(Qt=[],ie=Yt.length;ie--;)(_e=Yt[ie])&&Qt.push(kn[ie]=_e);at(null,Yt=[],Qt,ge)}for(ie=Yt.length;ie--;)(_e=Yt[ie])&&(Qt=at?d.call(Rt,_e):ze[ie])>-1&&(Rt[Qt]=!(Bt[Qt]=_e))}}else Yt=os(Yt===Bt?Yt.splice(sn,Yt.length):Yt),at?at(null,Bt,Yt,ge):x.apply(Bt,Yt)})}function ma(P){for(var B,$,et,at=P.length,xt=o.relative[P[0].type],Rt=xt||o.relative[" "],Bt=xt?1:0,Pt=as(function(ie){return ie===B},Rt,!0),ge=as(function(ie){return d.call(B,ie)>-1},Rt,!0),Qt=[function(ie,_e,Yt){var ze=!xt&&(Yt||_e!=u)||((B=_e).nodeType?Pt(ie,_e,Yt):ge(ie,_e,Yt));return B=null,ze}];Bt<at;Bt++)if($=o.relative[P[Bt].type])Qt=[as(da(Qt),$)];else{if($=o.filter[P[Bt].type].apply(null,P[Bt].matches),$[ot]){for(et=++Bt;et<at&&!o.relative[P[et].type];et++);return pa(Bt>1&&da(Qt),Bt>1&&ss(P.slice(0,Bt-1).concat({value:P[Bt-2].type===" "?"*":""})).replace(ft,"$1"),$,Bt<et&&ma(P.slice(Bt,et)),et<at&&ma(P=P.slice(et)),et<at&&ss(P))}Qt.push($)}return da(Qt)}function Ru(P,B){var $=B.length>0,et=P.length>0,at=function(xt,Rt,Bt,Pt,ge){var Qt,ie,_e,Yt=0,ze="0",mn=xt&&[],sn=[],An=u,kn=xt||et&&o.find.TAG("*",ge),Qi=J+=An==null?1:Math.random()||.1,cn=kn.length;for(ge&&(u=Rt==E||Rt||ge);ze!==cn&&(Qt=kn[ze])!=null;ze++){if(et&&Qt){for(ie=0,!Rt&&Qt.ownerDocument!=E&&(mi(Qt),Bt=!I);_e=P[ie++];)if(_e(Qt,Rt||E,Bt)){x.call(Pt,Qt);break}ge&&(J=Qi)}$&&((Qt=!_e&&Qt)&&Yt--,xt&&mn.push(Qt))}if(Yt+=ze,$&&ze!==Yt){for(ie=0;_e=B[ie++];)_e(mn,sn,Rt,Bt);if(xt){if(Yt>0)for(;ze--;)mn[ze]||sn[ze]||(sn[ze]=C.call(Pt));sn=os(sn)}x.apply(Pt,sn),ge&&!xt&&sn.length>0&&Yt+B.length>1&&l.uniqueSort(Pt)}return ge&&(J=Qi,u=An),mn};return $?Pn(at):at}function ga(P,B){var $,et=[],at=[],xt=oe[P+" "];if(!xt){for(B||(B=Fr(P)),$=B.length;$--;)xt=ma(B[$]),xt[ot]?et.push(xt):at.push(xt);xt=oe(P,Ru(at,et)),xt.selector=P}return xt}function fl(P,B,$,et){var at,xt,Rt,Bt,Pt,ge=typeof P=="function"&&P,Qt=!et&&Fr(P=ge.selector||P);if($=$||[],Qt.length===1){if(xt=Qt[0]=Qt[0].slice(0),xt.length>2&&(Rt=xt[0]).type==="ID"&&B.nodeType===9&&I&&o.relative[xt[1].type]){if(B=(o.find.ID(Rt.matches[0].replace(Jn,Qn),B)||[])[0],B)ge&&(B=B.parentNode);else return $;P=P.slice(xt.shift().value.length)}for(at=Hn.needsContext.test(P)?0:xt.length;at--&&(Rt=xt[at],!o.relative[Bt=Rt.type]);)if((Pt=o.find[Bt])&&(et=Pt(Rt.matches[0].replace(Jn,Qn),ha.test(xt[0].type)&&fa(B.parentNode)||B))){if(xt.splice(at,1),P=et.length&&ss(xt),!P)return x.apply($,et),$;break}}return(ge||ga(P,Qt))(et,B,!I,$,!B||ha.test(P)&&fa(B.parentNode)||B),$}T.sortStable=ot.split("").sort($e).join("")===ot,mi(),T.sortDetached=Ji(function(P){return P.compareDocumentPosition(E.createElement("fieldset"))&1}),l.find=Ie,l.expr[":"]=l.expr.pseudos,l.unique=l.uniqueSort,Ie.compile=ga,Ie.select=fl,Ie.setDocument=mi,Ie.tokenize=Fr,Ie.escape=l.escapeSelector,Ie.getText=l.text,Ie.isXML=l.isXMLDoc,Ie.selectors=l.expr,Ie.support=l.support,Ie.uniqueSort=l.uniqueSort})();var Mt=function(r,o,u){for(var f=[],_=u!==void 0;(r=r[o])&&r.nodeType!==9;)if(r.nodeType===1){if(_&&l(r).is(u))break;f.push(r)}return f},It=function(r,o){for(var u=[];r;r=r.nextSibling)r.nodeType===1&&r!==o&&u.push(r);return u},Vt=l.expr.match.needsContext,ae=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Re(r,o,u){return A(o)?l.grep(r,function(f,_){return!!o.call(f,_,f)!==u}):o.nodeType?l.grep(r,function(f){return f===o!==u}):typeof o!="string"?l.grep(r,function(f){return d.call(o,f)>-1!==u}):l.filter(o,r,u)}l.filter=function(r,o,u){var f=o[0];return u&&(r=":not("+r+")"),o.length===1&&f.nodeType===1?l.find.matchesSelector(f,r)?[f]:[]:l.find.matches(r,l.grep(o,function(_){return _.nodeType===1}))},l.fn.extend({find:function(r){var o,u,f=this.length,_=this;if(typeof r!="string")return this.pushStack(l(r).filter(function(){for(o=0;o<f;o++)if(l.contains(_[o],this))return!0}));for(u=this.pushStack([]),o=0;o<f;o++)l.find(r,_[o],u);return f>1?l.uniqueSort(u):u},filter:function(r){return this.pushStack(Re(this,r||[],!1))},not:function(r){return this.pushStack(Re(this,r||[],!0))},is:function(r){return!!Re(this,typeof r=="string"&&Vt.test(r)?l(r):r||[],!1).length}});var ut,yt=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Ot=l.fn.init=function(r,o,u){var f,_;if(!r)return this;if(u=u||ut,typeof r=="string")if(r[0]==="<"&&r[r.length-1]===">"&&r.length>=3?f=[null,r,null]:f=yt.exec(r),f&&(f[1]||!o))if(f[1]){if(o=o instanceof l?o[0]:o,l.merge(this,l.parseHTML(f[1],o&&o.nodeType?o.ownerDocument||o:p,!0)),ae.test(f[1])&&l.isPlainObject(o))for(f in o)A(this[f])?this[f](o[f]):this.attr(f,o[f]);return this}else return _=p.getElementById(f[2]),_&&(this[0]=_,this.length=1),this;else return!o||o.jquery?(o||u).find(r):this.constructor(o).find(r);else{if(r.nodeType)return this[0]=r,this.length=1,this;if(A(r))return u.ready!==void 0?u.ready(r):r(l)}return l.makeArray(r,this)};Ot.prototype=l.fn,ut=l(p);var bt=/^(?:parents|prev(?:Until|All))/,$t={children:!0,contents:!0,next:!0,prev:!0};l.fn.extend({has:function(r){var o=l(r,this),u=o.length;return this.filter(function(){for(var f=0;f<u;f++)if(l.contains(this,o[f]))return!0})},closest:function(r,o){var u,f=0,_=this.length,x=[],E=typeof r!="string"&&l(r);if(!Vt.test(r)){for(;f<_;f++)for(u=this[f];u&&u!==o;u=u.parentNode)if(u.nodeType<11&&(E?E.index(u)>-1:u.nodeType===1&&l.find.matchesSelector(u,r))){x.push(u);break}}return this.pushStack(x.length>1?l.uniqueSort(x):x)},index:function(r){return r?typeof r=="string"?d.call(l(r),this[0]):d.call(this,r.jquery?r[0]:r):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(r,o){return this.pushStack(l.uniqueSort(l.merge(this.get(),l(r,o))))},addBack:function(r){return this.add(r==null?this.prevObject:this.prevObject.filter(r))}});function Ee(r,o){for(;(r=r[o])&&r.nodeType!==1;);return r}l.each({parent:function(r){var o=r.parentNode;return o&&o.nodeType!==11?o:null},parents:function(r){return Mt(r,"parentNode")},parentsUntil:function(r,o,u){return Mt(r,"parentNode",u)},next:function(r){return Ee(r,"nextSibling")},prev:function(r){return Ee(r,"previousSibling")},nextAll:function(r){return Mt(r,"nextSibling")},prevAll:function(r){return Mt(r,"previousSibling")},nextUntil:function(r,o,u){return Mt(r,"nextSibling",u)},prevUntil:function(r,o,u){return Mt(r,"previousSibling",u)},siblings:function(r){return It((r.parentNode||{}).firstChild,r)},children:function(r){return It(r.firstChild)},contents:function(r){return r.contentDocument!=null&&s(r.contentDocument)?r.contentDocument:(R(r,"template")&&(r=r.content||r),l.merge([],r.childNodes))}},function(r,o){l.fn[r]=function(u,f){var _=l.map(this,o,u);return r.slice(-5)!=="Until"&&(f=u),f&&typeof f=="string"&&(_=l.filter(f,_)),this.length>1&&($t[r]||l.uniqueSort(_),bt.test(r)&&_.reverse()),this.pushStack(_)}});var Ht=/[^\x20\t\r\n\f]+/g;function Ve(r){var o={};return l.each(r.match(Ht)||[],function(u,f){o[f]=!0}),o}l.Callbacks=function(r){r=typeof r=="string"?Ve(r):l.extend({},r);var o,u,f,_,x=[],E=[],N=-1,I=function(){for(_=_||r.once,f=o=!0;E.length;N=-1)for(u=E.shift();++N<x.length;)x[N].apply(u[0],u[1])===!1&&r.stopOnFalse&&(N=x.length,u=!1);r.memory||(u=!1),o=!1,_&&(u?x=[]:x="")},V={add:function(){return x&&(u&&!o&&(N=x.length-1,E.push(u)),function nt(ot){l.each(ot,function(J,gt){A(gt)?(!r.unique||!V.has(gt))&&x.push(gt):gt&&gt.length&&D(gt)!=="string"&&nt(gt)})}(arguments),u&&!o&&I()),this},remove:function(){return l.each(arguments,function(nt,ot){for(var J;(J=l.inArray(ot,x,J))>-1;)x.splice(J,1),J<=N&&N--}),this},has:function(nt){return nt?l.inArray(nt,x)>-1:x.length>0},empty:function(){return x&&(x=[]),this},disable:function(){return _=E=[],x=u="",this},disabled:function(){return!x},lock:function(){return _=E=[],!u&&!o&&(x=u=""),this},locked:function(){return!!_},fireWith:function(nt,ot){return _||(ot=ot||[],ot=[nt,ot.slice?ot.slice():ot],E.push(ot),o||I()),this},fire:function(){return V.fireWith(this,arguments),this},fired:function(){return!!f}};return V};function De(r){return r}function ce(r){throw r}function O(r,o,u,f){var _;try{r&&A(_=r.promise)?_.call(r).done(o).fail(u):r&&A(_=r.then)?_.call(r,o,u):o.apply(void 0,[r].slice(f))}catch(x){u.apply(void 0,[x])}}l.extend({Deferred:function(r){var o=[["notify","progress",l.Callbacks("memory"),l.Callbacks("memory"),2],["resolve","done",l.Callbacks("once memory"),l.Callbacks("once memory"),0,"resolved"],["reject","fail",l.Callbacks("once memory"),l.Callbacks("once memory"),1,"rejected"]],u="pending",f={state:function(){return u},always:function(){return _.done(arguments).fail(arguments),this},catch:function(x){return f.then(null,x)},pipe:function(){var x=arguments;return l.Deferred(function(E){l.each(o,function(N,I){var V=A(x[I[4]])&&x[I[4]];_[I[1]](function(){var nt=V&&V.apply(this,arguments);nt&&A(nt.promise)?nt.promise().progress(E.notify).done(E.resolve).fail(E.reject):E[I[0]+"With"](this,V?[nt]:arguments)})}),x=null}).promise()},then:function(x,E,N){var I=0;function V(nt,ot,J,gt){return function(){var ee=this,be=arguments,oe=function(){var $e,On;if(!(nt<I)){if($e=J.apply(ee,be),$e===ot.promise())throw new TypeError("Thenable self-resolution");On=$e&&(typeof $e=="object"||typeof $e=="function")&&$e.then,A(On)?gt?On.call($e,V(I,ot,De,gt),V(I,ot,ce,gt)):(I++,On.call($e,V(I,ot,De,gt),V(I,ot,ce,gt),V(I,ot,De,ot.notifyWith))):(J!==De&&(ee=void 0,be=[$e]),(gt||ot.resolveWith)(ee,be))}},rn=gt?oe:function(){try{oe()}catch($e){l.Deferred.exceptionHook&&l.Deferred.exceptionHook($e,rn.error),nt+1>=I&&(J!==ce&&(ee=void 0,be=[$e]),ot.rejectWith(ee,be))}};nt?rn():(l.Deferred.getErrorHook?rn.error=l.Deferred.getErrorHook():l.Deferred.getStackHook&&(rn.error=l.Deferred.getStackHook()),t.setTimeout(rn))}}return l.Deferred(function(nt){o[0][3].add(V(0,nt,A(N)?N:De,nt.notifyWith)),o[1][3].add(V(0,nt,A(x)?x:De)),o[2][3].add(V(0,nt,A(E)?E:ce))}).promise()},promise:function(x){return x!=null?l.extend(x,f):f}},_={};return l.each(o,function(x,E){var N=E[2],I=E[5];f[E[1]]=N.add,I&&N.add(function(){u=I},o[3-x][2].disable,o[3-x][3].disable,o[0][2].lock,o[0][3].lock),N.add(E[3].fire),_[E[0]]=function(){return _[E[0]+"With"](this===_?void 0:this,arguments),this},_[E[0]+"With"]=N.fireWith}),f.promise(_),r&&r.call(_,_),_},when:function(r){var o=arguments.length,u=o,f=Array(u),_=a.call(arguments),x=l.Deferred(),E=function(N){return function(I){f[N]=this,_[N]=arguments.length>1?a.call(arguments):I,--o||x.resolveWith(f,_)}};if(o<=1&&(O(r,x.done(E(u)).resolve,x.reject,!o),x.state()==="pending"||A(_[u]&&_[u].then)))return x.then();for(;u--;)O(_[u],E(u),x.reject);return x.promise()}});var fn=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;l.Deferred.exceptionHook=function(r,o){t.console&&t.console.warn&&r&&fn.test(r.name)&&t.console.warn("jQuery.Deferred exception: "+r.message,r.stack,o)},l.readyException=function(r){t.setTimeout(function(){throw r})};var de=l.Deferred();l.fn.ready=function(r){return de.then(r).catch(function(o){l.readyException(o)}),this},l.extend({isReady:!1,readyWait:1,ready:function(r){(r===!0?--l.readyWait:l.isReady)||(l.isReady=!0,!(r!==!0&&--l.readyWait>0)&&de.resolveWith(p,[l]))}}),l.ready.then=de.then;function ue(){p.removeEventListener("DOMContentLoaded",ue),t.removeEventListener("load",ue),l.ready()}p.readyState==="complete"||p.readyState!=="loading"&&!p.documentElement.doScroll?t.setTimeout(l.ready):(p.addEventListener("DOMContentLoaded",ue),t.addEventListener("load",ue));var Ft=function(r,o,u,f,_,x,E){var N=0,I=r.length,V=u==null;if(D(u)==="object"){_=!0;for(N in u)Ft(r,o,N,u[N],!0,x,E)}else if(f!==void 0&&(_=!0,A(f)||(E=!0),V&&(E?(o.call(r,f),o=null):(V=o,o=function(nt,ot,J){return V.call(l(nt),J)})),o))for(;N<I;N++)o(r[N],u,E?f:f.call(r[N],N,o(r[N],u)));return _?r:V?o.call(r):I?o(r[0],u):x},Oe=/^-ms-/,Gt=/-([a-z])/g;function L(r,o){return o.toUpperCase()}function b(r){return r.replace(Oe,"ms-").replace(Gt,L)}var K=function(r){return r.nodeType===1||r.nodeType===9||!+r.nodeType};function ct(){this.expando=l.expando+ct.uid++}ct.uid=1,ct.prototype={cache:function(r){var o=r[this.expando];return o||(o={},K(r)&&(r.nodeType?r[this.expando]=o:Object.defineProperty(r,this.expando,{value:o,configurable:!0}))),o},set:function(r,o,u){var f,_=this.cache(r);if(typeof o=="string")_[b(o)]=u;else for(f in o)_[b(f)]=o[f];return _},get:function(r,o){return o===void 0?this.cache(r):r[this.expando]&&r[this.expando][b(o)]},access:function(r,o,u){return o===void 0||o&&typeof o=="string"&&u===void 0?this.get(r,o):(this.set(r,o,u),u!==void 0?u:o)},remove:function(r,o){var u,f=r[this.expando];if(f!==void 0){if(o!==void 0)for(Array.isArray(o)?o=o.map(b):(o=b(o),o=o in f?[o]:o.match(Ht)||[]),u=o.length;u--;)delete f[o[u]];(o===void 0||l.isEmptyObject(f))&&(r.nodeType?r[this.expando]=void 0:delete r[this.expando])}},hasData:function(r){var o=r[this.expando];return o!==void 0&&!l.isEmptyObject(o)}};var Z=new ct,rt=new ct,zt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,At=/[A-Z]/g;function Kt(r){return r==="true"?!0:r==="false"?!1:r==="null"?null:r===+r+""?+r:zt.test(r)?JSON.parse(r):r}function Zt(r,o,u){var f;if(u===void 0&&r.nodeType===1)if(f="data-"+o.replace(At,"-$&").toLowerCase(),u=r.getAttribute(f),typeof u=="string"){try{u=Kt(u)}catch{}rt.set(r,o,u)}else u=void 0;return u}l.extend({hasData:function(r){return rt.hasData(r)||Z.hasData(r)},data:function(r,o,u){return rt.access(r,o,u)},removeData:function(r,o){rt.remove(r,o)},_data:function(r,o,u){return Z.access(r,o,u)},_removeData:function(r,o){Z.remove(r,o)}}),l.fn.extend({data:function(r,o){var u,f,_,x=this[0],E=x&&x.attributes;if(r===void 0){if(this.length&&(_=rt.get(x),x.nodeType===1&&!Z.get(x,"hasDataAttrs"))){for(u=E.length;u--;)E[u]&&(f=E[u].name,f.indexOf("data-")===0&&(f=b(f.slice(5)),Zt(x,f,_[f])));Z.set(x,"hasDataAttrs",!0)}return _}return typeof r=="object"?this.each(function(){rt.set(this,r)}):Ft(this,function(N){var I;if(x&&N===void 0)return I=rt.get(x,r),I!==void 0||(I=Zt(x,r),I!==void 0)?I:void 0;this.each(function(){rt.set(this,r,N)})},null,o,arguments.length>1,null,!0)},removeData:function(r){return this.each(function(){rt.remove(this,r)})}}),l.extend({queue:function(r,o,u){var f;if(r)return o=(o||"fx")+"queue",f=Z.get(r,o),u&&(!f||Array.isArray(u)?f=Z.access(r,o,l.makeArray(u)):f.push(u)),f||[]},dequeue:function(r,o){o=o||"fx";var u=l.queue(r,o),f=u.length,_=u.shift(),x=l._queueHooks(r,o),E=function(){l.dequeue(r,o)};_==="inprogress"&&(_=u.shift(),f--),_&&(o==="fx"&&u.unshift("inprogress"),delete x.stop,_.call(r,E,x)),!f&&x&&x.empty.fire()},_queueHooks:function(r,o){var u=o+"queueHooks";return Z.get(r,u)||Z.access(r,u,{empty:l.Callbacks("once memory").add(function(){Z.remove(r,[o+"queue",u])})})}}),l.fn.extend({queue:function(r,o){var u=2;return typeof r!="string"&&(o=r,r="fx",u--),arguments.length<u?l.queue(this[0],r):o===void 0?this:this.each(function(){var f=l.queue(this,r,o);l._queueHooks(this,r),r==="fx"&&f[0]!=="inprogress"&&l.dequeue(this,r)})},dequeue:function(r){return this.each(function(){l.dequeue(this,r)})},clearQueue:function(r){return this.queue(r||"fx",[])},promise:function(r,o){var u,f=1,_=l.Deferred(),x=this,E=this.length,N=function(){--f||_.resolveWith(x,[x])};for(typeof r!="string"&&(o=r,r=void 0),r=r||"fx";E--;)u=Z.get(x[E],r+"queueHooks"),u&&u.empty&&(f++,u.empty.add(N));return N(),_.promise(o)}});var _t=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Lt=new RegExp("^(?:([+-])=|)("+_t+")([a-z%]*)$","i"),kt=["Top","Right","Bottom","Left"],jt=p.documentElement,Dt=function(r){return l.contains(r.ownerDocument,r)},ye={composed:!0};jt.getRootNode&&(Dt=function(r){return l.contains(r.ownerDocument,r)||r.getRootNode(ye)===r.ownerDocument});var ne=function(r,o){return r=o||r,r.style.display==="none"||r.style.display===""&&Dt(r)&&l.css(r,"display")==="none"};function Le(r,o,u,f){var _,x,E=20,N=f?function(){return f.cur()}:function(){return l.css(r,o,"")},I=N(),V=u&&u[3]||(l.cssNumber[o]?"":"px"),nt=r.nodeType&&(l.cssNumber[o]||V!=="px"&&+I)&&Lt.exec(l.css(r,o));if(nt&&nt[3]!==V){for(I=I/2,V=V||nt[3],nt=+I||1;E--;)l.style(r,o,nt+V),(1-x)*(1-(x=N()/I||.5))<=0&&(E=0),nt=nt/x;nt=nt*2,l.style(r,o,nt+V),u=u||[]}return u&&(nt=+nt||+I||0,_=u[1]?nt+(u[1]+1)*u[2]:+u[2],f&&(f.unit=V,f.start=nt,f.end=_)),_}var G={};function wt(r){var o,u=r.ownerDocument,f=r.nodeName,_=G[f];return _||(o=u.body.appendChild(u.createElement(f)),_=l.css(o,"display"),o.parentNode.removeChild(o),_==="none"&&(_="block"),G[f]=_,_)}function it(r,o){for(var u,f,_=[],x=0,E=r.length;x<E;x++)f=r[x],f.style&&(u=f.style.display,o?(u==="none"&&(_[x]=Z.get(f,"display")||null,_[x]||(f.style.display="")),f.style.display===""&&ne(f)&&(_[x]=wt(f))):u!=="none"&&(_[x]="none",Z.set(f,"display",u)));for(x=0;x<E;x++)_[x]!=null&&(r[x].style.display=_[x]);return r}l.fn.extend({show:function(){return it(this,!0)},hide:function(){return it(this)},toggle:function(r){return typeof r=="boolean"?r?this.show():this.hide():this.each(function(){ne(this)?l(this).show():l(this).hide()})}});var ht=/^(?:checkbox|radio)$/i,Ct=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Tt=/^$|^module$|\/(?:java|ecma)script/i;(function(){var r=p.createDocumentFragment(),o=r.appendChild(p.createElement("div")),u=p.createElement("input");u.setAttribute("type","radio"),u.setAttribute("checked","checked"),u.setAttribute("name","t"),o.appendChild(u),T.checkClone=o.cloneNode(!0).cloneNode(!0).lastChild.checked,o.innerHTML="<textarea>x</textarea>",T.noCloneChecked=!!o.cloneNode(!0).lastChild.defaultValue,o.innerHTML="<option></option>",T.option=!!o.lastChild})();var qt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};qt.tbody=qt.tfoot=qt.colgroup=qt.caption=qt.thead,qt.th=qt.td,T.option||(qt.optgroup=qt.option=[1,"<select multiple='multiple'>","</select>"]);function pe(r,o){var u;return typeof r.getElementsByTagName<"u"?u=r.getElementsByTagName(o||"*"):typeof r.querySelectorAll<"u"?u=r.querySelectorAll(o||"*"):u=[],o===void 0||o&&R(r,o)?l.merge([r],u):u}function Xe(r,o){for(var u=0,f=r.length;u<f;u++)Z.set(r[u],"globalEval",!o||Z.get(o[u],"globalEval"))}var Pe=/<|&#?\w+;/;function dn(r,o,u,f,_){for(var x,E,N,I,V,nt,ot=o.createDocumentFragment(),J=[],gt=0,ee=r.length;gt<ee;gt++)if(x=r[gt],x||x===0)if(D(x)==="object")l.merge(J,x.nodeType?[x]:x);else if(!Pe.test(x))J.push(o.createTextNode(x));else{for(E=E||ot.appendChild(o.createElement("div")),N=(Ct.exec(x)||["",""])[1].toLowerCase(),I=qt[N]||qt._default,E.innerHTML=I[1]+l.htmlPrefilter(x)+I[2],nt=I[0];nt--;)E=E.lastChild;l.merge(J,E.childNodes),E=ot.firstChild,E.textContent=""}for(ot.textContent="",gt=0;x=J[gt++];){if(f&&l.inArray(x,f)>-1){_&&_.push(x);continue}if(V=Dt(x),E=pe(ot.appendChild(x),"script"),V&&Xe(E),u)for(nt=0;x=E[nt++];)Tt.test(x.type||"")&&u.push(x)}return ot}var Tn=/^([^.]*)(?:\.(.+)|)/;function Yn(){return!0}function $n(){return!1}function Rn(r,o,u,f,_,x){var E,N;if(typeof o=="object"){typeof u!="string"&&(f=f||u,u=void 0);for(N in o)Rn(r,N,u,f,o[N],x);return r}if(f==null&&_==null?(_=u,f=u=void 0):_==null&&(typeof u=="string"?(_=f,f=void 0):(_=f,f=u,u=void 0)),_===!1)_=$n;else if(!_)return r;return x===1&&(E=_,_=function(I){return l().off(I),E.apply(this,arguments)},_.guid=E.guid||(E.guid=l.guid++)),r.each(function(){l.event.add(this,o,_,f,u)})}l.event={global:{},add:function(r,o,u,f,_){var x,E,N,I,V,nt,ot,J,gt,ee,be,oe=Z.get(r);if(K(r))for(u.handler&&(x=u,u=x.handler,_=x.selector),_&&l.find.matchesSelector(jt,_),u.guid||(u.guid=l.guid++),(I=oe.events)||(I=oe.events=Object.create(null)),(E=oe.handle)||(E=oe.handle=function(rn){return typeof l<"u"&&l.event.triggered!==rn.type?l.event.dispatch.apply(r,arguments):void 0}),o=(o||"").match(Ht)||[""],V=o.length;V--;)N=Tn.exec(o[V])||[],gt=be=N[1],ee=(N[2]||"").split(".").sort(),gt&&(ot=l.event.special[gt]||{},gt=(_?ot.delegateType:ot.bindType)||gt,ot=l.event.special[gt]||{},nt=l.extend({type:gt,origType:be,data:f,handler:u,guid:u.guid,selector:_,needsContext:_&&l.expr.match.needsContext.test(_),namespace:ee.join(".")},x),(J=I[gt])||(J=I[gt]=[],J.delegateCount=0,(!ot.setup||ot.setup.call(r,f,ee,E)===!1)&&r.addEventListener&&r.addEventListener(gt,E)),ot.add&&(ot.add.call(r,nt),nt.handler.guid||(nt.handler.guid=u.guid)),_?J.splice(J.delegateCount++,0,nt):J.push(nt),l.event.global[gt]=!0)},remove:function(r,o,u,f,_){var x,E,N,I,V,nt,ot,J,gt,ee,be,oe=Z.hasData(r)&&Z.get(r);if(!(!oe||!(I=oe.events))){for(o=(o||"").match(Ht)||[""],V=o.length;V--;){if(N=Tn.exec(o[V])||[],gt=be=N[1],ee=(N[2]||"").split(".").sort(),!gt){for(gt in I)l.event.remove(r,gt+o[V],u,f,!0);continue}for(ot=l.event.special[gt]||{},gt=(f?ot.delegateType:ot.bindType)||gt,J=I[gt]||[],N=N[2]&&new RegExp("(^|\\.)"+ee.join("\\.(?:.*\\.|)")+"(\\.|$)"),E=x=J.length;x--;)nt=J[x],(_||be===nt.origType)&&(!u||u.guid===nt.guid)&&(!N||N.test(nt.namespace))&&(!f||f===nt.selector||f==="**"&&nt.selector)&&(J.splice(x,1),nt.selector&&J.delegateCount--,ot.remove&&ot.remove.call(r,nt));E&&!J.length&&((!ot.teardown||ot.teardown.call(r,ee,oe.handle)===!1)&&l.removeEvent(r,gt,oe.handle),delete I[gt])}l.isEmptyObject(I)&&Z.remove(r,"handle events")}},dispatch:function(r){var o,u,f,_,x,E,N=new Array(arguments.length),I=l.event.fix(r),V=(Z.get(this,"events")||Object.create(null))[I.type]||[],nt=l.event.special[I.type]||{};for(N[0]=I,o=1;o<arguments.length;o++)N[o]=arguments[o];if(I.delegateTarget=this,!(nt.preDispatch&&nt.preDispatch.call(this,I)===!1)){for(E=l.event.handlers.call(this,I,V),o=0;(_=E[o++])&&!I.isPropagationStopped();)for(I.currentTarget=_.elem,u=0;(x=_.handlers[u++])&&!I.isImmediatePropagationStopped();)(!I.rnamespace||x.namespace===!1||I.rnamespace.test(x.namespace))&&(I.handleObj=x,I.data=x.data,f=((l.event.special[x.origType]||{}).handle||x.handler).apply(_.elem,N),f!==void 0&&(I.result=f)===!1&&(I.preventDefault(),I.stopPropagation()));return nt.postDispatch&&nt.postDispatch.call(this,I),I.result}},handlers:function(r,o){var u,f,_,x,E,N=[],I=o.delegateCount,V=r.target;if(I&&V.nodeType&&!(r.type==="click"&&r.button>=1)){for(;V!==this;V=V.parentNode||this)if(V.nodeType===1&&!(r.type==="click"&&V.disabled===!0)){for(x=[],E={},u=0;u<I;u++)f=o[u],_=f.selector+" ",E[_]===void 0&&(E[_]=f.needsContext?l(_,this).index(V)>-1:l.find(_,this,null,[V]).length),E[_]&&x.push(f);x.length&&N.push({elem:V,handlers:x})}}return V=this,I<o.length&&N.push({elem:V,handlers:o.slice(I)}),N},addProp:function(r,o){Object.defineProperty(l.Event.prototype,r,{enumerable:!0,configurable:!0,get:A(o)?function(){if(this.originalEvent)return o(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[r]},set:function(u){Object.defineProperty(this,r,{enumerable:!0,configurable:!0,writable:!0,value:u})}})},fix:function(r){return r[l.expando]?r:new l.Event(r)},special:{load:{noBubble:!0},click:{setup:function(r){var o=this||r;return ht.test(o.type)&&o.click&&R(o,"input")&&ui(o,"click",!0),!1},trigger:function(r){var o=this||r;return ht.test(o.type)&&o.click&&R(o,"input")&&ui(o,"click"),!0},_default:function(r){var o=r.target;return ht.test(o.type)&&o.click&&R(o,"input")&&Z.get(o,"click")||R(o,"a")}},beforeunload:{postDispatch:function(r){r.result!==void 0&&r.originalEvent&&(r.originalEvent.returnValue=r.result)}}}};function ui(r,o,u){if(!u){Z.get(r,o)===void 0&&l.event.add(r,o,Yn);return}Z.set(r,o,!1),l.event.add(r,o,{namespace:!1,handler:function(f){var _,x=Z.get(this,o);if(f.isTrigger&1&&this[o]){if(x)(l.event.special[o]||{}).delegateType&&f.stopPropagation();else if(x=a.call(arguments),Z.set(this,o,x),this[o](),_=Z.get(this,o),Z.set(this,o,!1),x!==_)return f.stopImmediatePropagation(),f.preventDefault(),_}else x&&(Z.set(this,o,l.event.trigger(x[0],x.slice(1),this)),f.stopPropagation(),f.isImmediatePropagationStopped=Yn)}})}l.removeEvent=function(r,o,u){r.removeEventListener&&r.removeEventListener(o,u)},l.Event=function(r,o){if(!(this instanceof l.Event))return new l.Event(r,o);r&&r.type?(this.originalEvent=r,this.type=r.type,this.isDefaultPrevented=r.defaultPrevented||r.defaultPrevented===void 0&&r.returnValue===!1?Yn:$n,this.target=r.target&&r.target.nodeType===3?r.target.parentNode:r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget):this.type=r,o&&l.extend(this,o),this.timeStamp=r&&r.timeStamp||Date.now(),this[l.expando]=!0},l.Event.prototype={constructor:l.Event,isDefaultPrevented:$n,isPropagationStopped:$n,isImmediatePropagationStopped:$n,isSimulated:!1,preventDefault:function(){var r=this.originalEvent;this.isDefaultPrevented=Yn,r&&!this.isSimulated&&r.preventDefault()},stopPropagation:function(){var r=this.originalEvent;this.isPropagationStopped=Yn,r&&!this.isSimulated&&r.stopPropagation()},stopImmediatePropagation:function(){var r=this.originalEvent;this.isImmediatePropagationStopped=Yn,r&&!this.isSimulated&&r.stopImmediatePropagation(),this.stopPropagation()}},l.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},l.event.addProp),l.each({focus:"focusin",blur:"focusout"},function(r,o){function u(f){if(p.documentMode){var _=Z.get(this,"handle"),x=l.event.fix(f);x.type=f.type==="focusin"?"focus":"blur",x.isSimulated=!0,_(f),x.target===x.currentTarget&&_(x)}else l.event.simulate(o,f.target,l.event.fix(f))}l.event.special[r]={setup:function(){var f;if(ui(this,r,!0),p.documentMode)f=Z.get(this,o),f||this.addEventListener(o,u),Z.set(this,o,(f||0)+1);else return!1},trigger:function(){return ui(this,r),!0},teardown:function(){var f;if(p.documentMode)f=Z.get(this,o)-1,f?Z.set(this,o,f):(this.removeEventListener(o,u),Z.remove(this,o));else return!1},_default:function(f){return Z.get(f.target,r)},delegateType:o},l.event.special[o]={setup:function(){var f=this.ownerDocument||this.document||this,_=p.documentMode?this:f,x=Z.get(_,o);x||(p.documentMode?this.addEventListener(o,u):f.addEventListener(r,u,!0)),Z.set(_,o,(x||0)+1)},teardown:function(){var f=this.ownerDocument||this.document||this,_=p.documentMode?this:f,x=Z.get(_,o)-1;x?Z.set(_,o,x):(p.documentMode?this.removeEventListener(o,u):f.removeEventListener(r,u,!0),Z.remove(_,o))}}}),l.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(r,o){l.event.special[r]={delegateType:o,bindType:o,handle:function(u){var f,_=this,x=u.relatedTarget,E=u.handleObj;return(!x||x!==_&&!l.contains(_,x))&&(u.type=E.origType,f=E.handler.apply(this,arguments),u.type=o),f}}}),l.fn.extend({on:function(r,o,u,f){return Rn(this,r,o,u,f)},one:function(r,o,u,f){return Rn(this,r,o,u,f,1)},off:function(r,o,u){var f,_;if(r&&r.preventDefault&&r.handleObj)return f=r.handleObj,l(r.delegateTarget).off(f.namespace?f.origType+"."+f.namespace:f.origType,f.selector,f.handler),this;if(typeof r=="object"){for(_ in r)this.off(_,o,r[_]);return this}return(o===!1||typeof o=="function")&&(u=o,o=void 0),u===!1&&(u=$n),this.each(function(){l.event.remove(this,r,u,o)})}});var ts=/<script|<style|<link/i,es=/checked\s*(?:[^=]|=\s*.checked.)/i,$i=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function wr(r,o){return R(r,"table")&&R(o.nodeType!==11?o:o.firstChild,"tr")&&l(r).children("tbody")[0]||r}function Ki(r){return r.type=(r.getAttribute("type")!==null)+"/"+r.type,r}function ns(r){return(r.type||"").slice(0,5)==="true/"?r.type=r.type.slice(5):r.removeAttribute("type"),r}function Cr(r,o){var u,f,_,x,E,N,I;if(o.nodeType===1){if(Z.hasData(r)&&(x=Z.get(r),I=x.events,I)){Z.remove(o,"handle events");for(_ in I)for(u=0,f=I[_].length;u<f;u++)l.event.add(o,_,I[_][u])}rt.hasData(r)&&(E=rt.access(r),N=l.extend({},E),rt.set(o,N))}}function na(r,o){var u=o.nodeName.toLowerCase();u==="input"&&ht.test(r.type)?o.checked=r.checked:(u==="input"||u==="textarea")&&(o.defaultValue=r.defaultValue)}function hi(r,o,u,f){o=c(o);var _,x,E,N,I,V,nt=0,ot=r.length,J=ot-1,gt=o[0],ee=A(gt);if(ee||ot>1&&typeof gt=="string"&&!T.checkClone&&es.test(gt))return r.each(function(be){var oe=r.eq(be);ee&&(o[0]=gt.call(this,be,oe.html())),hi(oe,o,u,f)});if(ot&&(_=dn(o,r[0].ownerDocument,!1,r,f),x=_.firstChild,_.childNodes.length===1&&(_=x),x||f)){for(E=l.map(pe(_,"script"),Ki),N=E.length;nt<ot;nt++)I=_,nt!==J&&(I=l.clone(I,!0,!0),N&&l.merge(E,pe(I,"script"))),u.call(r[nt],I,nt);if(N)for(V=E[E.length-1].ownerDocument,l.map(E,ns),nt=0;nt<N;nt++)I=E[nt],Tt.test(I.type||"")&&!Z.access(I,"globalEval")&&l.contains(V,I)&&(I.src&&(I.type||"").toLowerCase()!=="module"?l._evalUrl&&!I.noModule&&l._evalUrl(I.src,{nonce:I.nonce||I.getAttribute("nonce")},V):U(I.textContent.replace($i,""),I,V))}return r}function is(r,o,u){for(var f,_=o?l.filter(o,r):r,x=0;(f=_[x])!=null;x++)!u&&f.nodeType===1&&l.cleanData(pe(f)),f.parentNode&&(u&&Dt(f)&&Xe(pe(f,"script")),f.parentNode.removeChild(f));return r}l.extend({htmlPrefilter:function(r){return r},clone:function(r,o,u){var f,_,x,E,N=r.cloneNode(!0),I=Dt(r);if(!T.noCloneChecked&&(r.nodeType===1||r.nodeType===11)&&!l.isXMLDoc(r))for(E=pe(N),x=pe(r),f=0,_=x.length;f<_;f++)na(x[f],E[f]);if(o)if(u)for(x=x||pe(r),E=E||pe(N),f=0,_=x.length;f<_;f++)Cr(x[f],E[f]);else Cr(r,N);return E=pe(N,"script"),E.length>0&&Xe(E,!I&&pe(r,"script")),N},cleanData:function(r){for(var o,u,f,_=l.event.special,x=0;(u=r[x])!==void 0;x++)if(K(u)){if(o=u[Z.expando]){if(o.events)for(f in o.events)_[f]?l.event.remove(u,f):l.removeEvent(u,f,o.handle);u[Z.expando]=void 0}u[rt.expando]&&(u[rt.expando]=void 0)}}}),l.fn.extend({detach:function(r){return is(this,r,!0)},remove:function(r){return is(this,r)},text:function(r){return Ft(this,function(o){return o===void 0?l.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=o)})},null,r,arguments.length)},append:function(){return hi(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=wr(this,r);o.appendChild(r)}})},prepend:function(){return hi(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=wr(this,r);o.insertBefore(r,o.firstChild)}})},before:function(){return hi(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this)})},after:function(){return hi(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling)})},empty:function(){for(var r,o=0;(r=this[o])!=null;o++)r.nodeType===1&&(l.cleanData(pe(r,!1)),r.textContent="");return this},clone:function(r,o){return r=r??!1,o=o??r,this.map(function(){return l.clone(this,r,o)})},html:function(r){return Ft(this,function(o){var u=this[0]||{},f=0,_=this.length;if(o===void 0&&u.nodeType===1)return u.innerHTML;if(typeof o=="string"&&!ts.test(o)&&!qt[(Ct.exec(o)||["",""])[1].toLowerCase()]){o=l.htmlPrefilter(o);try{for(;f<_;f++)u=this[f]||{},u.nodeType===1&&(l.cleanData(pe(u,!1)),u.innerHTML=o);u=0}catch{}}u&&this.empty().append(o)},null,r,arguments.length)},replaceWith:function(){var r=[];return hi(this,arguments,function(o){var u=this.parentNode;l.inArray(this,r)<0&&(l.cleanData(pe(this)),u&&u.replaceChild(o,this))},r)}}),l.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(r,o){l.fn[r]=function(u){for(var f,_=[],x=l(u),E=x.length-1,N=0;N<=E;N++)f=N===E?this:this.clone(!0),l(x[N])[o](f),h.apply(_,f.get());return this.pushStack(_)}});var Rr=new RegExp("^("+_t+")(?!px)[a-z%]+$","i"),Pr=/^--/,Zi=function(r){var o=r.ownerDocument.defaultView;return(!o||!o.opener)&&(o=t),o.getComputedStyle(r)},w=function(r,o,u){var f,_,x={};for(_ in o)x[_]=r.style[_],r.style[_]=o[_];f=u.call(r);for(_ in o)r.style[_]=x[_];return f},W=new RegExp(kt.join("|"),"i");(function(){function r(){if(V){I.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",V.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",jt.appendChild(I).appendChild(V);var nt=t.getComputedStyle(V);u=nt.top!=="1%",N=o(nt.marginLeft)===12,V.style.right="60%",x=o(nt.right)===36,f=o(nt.width)===36,V.style.position="absolute",_=o(V.offsetWidth/3)===12,jt.removeChild(I),V=null}}function o(nt){return Math.round(parseFloat(nt))}var u,f,_,x,E,N,I=p.createElement("div"),V=p.createElement("div");V.style&&(V.style.backgroundClip="content-box",V.cloneNode(!0).style.backgroundClip="",T.clearCloneStyle=V.style.backgroundClip==="content-box",l.extend(T,{boxSizingReliable:function(){return r(),f},pixelBoxStyles:function(){return r(),x},pixelPosition:function(){return r(),u},reliableMarginLeft:function(){return r(),N},scrollboxSize:function(){return r(),_},reliableTrDimensions:function(){var nt,ot,J,gt;return E==null&&(nt=p.createElement("table"),ot=p.createElement("tr"),J=p.createElement("div"),nt.style.cssText="position:absolute;left:-11111px;border-collapse:separate",ot.style.cssText="box-sizing:content-box;border:1px solid",ot.style.height="1px",J.style.height="9px",J.style.display="block",jt.appendChild(nt).appendChild(ot).appendChild(J),gt=t.getComputedStyle(ot),E=parseInt(gt.height,10)+parseInt(gt.borderTopWidth,10)+parseInt(gt.borderBottomWidth,10)===ot.offsetHeight,jt.removeChild(nt)),E}}))})();function Q(r,o,u){var f,_,x,E,N=Pr.test(o),I=r.style;return u=u||Zi(r),u&&(E=u.getPropertyValue(o)||u[o],N&&E&&(E=E.replace(ft,"$1")||void 0),E===""&&!Dt(r)&&(E=l.style(r,o)),!T.pixelBoxStyles()&&Rr.test(E)&&W.test(o)&&(f=I.width,_=I.minWidth,x=I.maxWidth,I.minWidth=I.maxWidth=I.width=E,E=u.width,I.width=f,I.minWidth=_,I.maxWidth=x)),E!==void 0?E+"":E}function tt(r,o){return{get:function(){if(r()){delete this.get;return}return(this.get=o).apply(this,arguments)}}}var X=["Webkit","Moz","ms"],vt=p.createElement("div").style,St={};function Ut(r){for(var o=r[0].toUpperCase()+r.slice(1),u=X.length;u--;)if(r=X[u]+o,r in vt)return r}function Nt(r){var o=l.cssProps[r]||St[r];return o||(r in vt?r:St[r]=Ut(r)||r)}var te=/^(none|table(?!-c[ea]).+)/,Jt={position:"absolute",visibility:"hidden",display:"block"},Xt={letterSpacing:"0",fontWeight:"400"};function Me(r,o,u){var f=Lt.exec(o);return f?Math.max(0,f[2]-(u||0))+(f[3]||"px"):o}function Te(r,o,u,f,_,x){var E=o==="width"?1:0,N=0,I=0,V=0;if(u===(f?"border":"content"))return 0;for(;E<4;E+=2)u==="margin"&&(V+=l.css(r,u+kt[E],!0,_)),f?(u==="content"&&(I-=l.css(r,"padding"+kt[E],!0,_)),u!=="margin"&&(I-=l.css(r,"border"+kt[E]+"Width",!0,_))):(I+=l.css(r,"padding"+kt[E],!0,_),u!=="padding"?I+=l.css(r,"border"+kt[E]+"Width",!0,_):N+=l.css(r,"border"+kt[E]+"Width",!0,_));return!f&&x>=0&&(I+=Math.max(0,Math.ceil(r["offset"+o[0].toUpperCase()+o.slice(1)]-x-I-N-.5))||0),I+V}function Ge(r,o,u){var f=Zi(r),_=!T.boxSizingReliable()||u,x=_&&l.css(r,"boxSizing",!1,f)==="border-box",E=x,N=Q(r,o,f),I="offset"+o[0].toUpperCase()+o.slice(1);if(Rr.test(N)){if(!u)return N;N="auto"}return(!T.boxSizingReliable()&&x||!T.reliableTrDimensions()&&R(r,"tr")||N==="auto"||!parseFloat(N)&&l.css(r,"display",!1,f)==="inline")&&r.getClientRects().length&&(x=l.css(r,"boxSizing",!1,f)==="border-box",E=I in r,E&&(N=r[I])),N=parseFloat(N)||0,N+Te(r,o,u||(x?"border":"content"),E,f,N)+"px"}l.extend({cssHooks:{opacity:{get:function(r,o){if(o){var u=Q(r,"opacity");return u===""?"1":u}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(r,o,u,f){if(!(!r||r.nodeType===3||r.nodeType===8||!r.style)){var _,x,E,N=b(o),I=Pr.test(o),V=r.style;if(I||(o=Nt(N)),E=l.cssHooks[o]||l.cssHooks[N],u!==void 0){if(x=typeof u,x==="string"&&(_=Lt.exec(u))&&_[1]&&(u=Le(r,o,_),x="number"),u==null||u!==u)return;x==="number"&&!I&&(u+=_&&_[3]||(l.cssNumber[N]?"":"px")),!T.clearCloneStyle&&u===""&&o.indexOf("background")===0&&(V[o]="inherit"),(!E||!("set"in E)||(u=E.set(r,u,f))!==void 0)&&(I?V.setProperty(o,u):V[o]=u)}else return E&&"get"in E&&(_=E.get(r,!1,f))!==void 0?_:V[o]}},css:function(r,o,u,f){var _,x,E,N=b(o),I=Pr.test(o);return I||(o=Nt(N)),E=l.cssHooks[o]||l.cssHooks[N],E&&"get"in E&&(_=E.get(r,!0,u)),_===void 0&&(_=Q(r,o,f)),_==="normal"&&o in Xt&&(_=Xt[o]),u===""||u?(x=parseFloat(_),u===!0||isFinite(x)?x||0:_):_}}),l.each(["height","width"],function(r,o){l.cssHooks[o]={get:function(u,f,_){if(f)return te.test(l.css(u,"display"))&&(!u.getClientRects().length||!u.getBoundingClientRect().width)?w(u,Jt,function(){return Ge(u,o,_)}):Ge(u,o,_)},set:function(u,f,_){var x,E=Zi(u),N=!T.scrollboxSize()&&E.position==="absolute",I=N||_,V=I&&l.css(u,"boxSizing",!1,E)==="border-box",nt=_?Te(u,o,_,V,E):0;return V&&N&&(nt-=Math.ceil(u["offset"+o[0].toUpperCase()+o.slice(1)]-parseFloat(E[o])-Te(u,o,"border",!1,E)-.5)),nt&&(x=Lt.exec(f))&&(x[3]||"px")!=="px"&&(u.style[o]=f,f=l.css(u,o)),Me(u,f,nt)}}}),l.cssHooks.marginLeft=tt(T.reliableMarginLeft,function(r,o){if(o)return(parseFloat(Q(r,"marginLeft"))||r.getBoundingClientRect().left-w(r,{marginLeft:0},function(){return r.getBoundingClientRect().left}))+"px"}),l.each({margin:"",padding:"",border:"Width"},function(r,o){l.cssHooks[r+o]={expand:function(u){for(var f=0,_={},x=typeof u=="string"?u.split(" "):[u];f<4;f++)_[r+kt[f]+o]=x[f]||x[f-2]||x[0];return _}},r!=="margin"&&(l.cssHooks[r+o].set=Me)}),l.fn.extend({css:function(r,o){return Ft(this,function(u,f,_){var x,E,N={},I=0;if(Array.isArray(f)){for(x=Zi(u),E=f.length;I<E;I++)N[f[I]]=l.css(u,f[I],!1,x);return N}return _!==void 0?l.style(u,f,_):l.css(u,f)},r,o,arguments.length>1)}});function me(r,o,u,f,_){return new me.prototype.init(r,o,u,f,_)}l.Tween=me,me.prototype={constructor:me,init:function(r,o,u,f,_,x){this.elem=r,this.prop=u,this.easing=_||l.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=f,this.unit=x||(l.cssNumber[u]?"":"px")},cur:function(){var r=me.propHooks[this.prop];return r&&r.get?r.get(this):me.propHooks._default.get(this)},run:function(r){var o,u=me.propHooks[this.prop];return this.options.duration?this.pos=o=l.easing[this.easing](r,this.options.duration*r,0,1,this.options.duration):this.pos=o=r,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),u&&u.set?u.set(this):me.propHooks._default.set(this),this}},me.prototype.init.prototype=me.prototype,me.propHooks={_default:{get:function(r){var o;return r.elem.nodeType!==1||r.elem[r.prop]!=null&&r.elem.style[r.prop]==null?r.elem[r.prop]:(o=l.css(r.elem,r.prop,""),!o||o==="auto"?0:o)},set:function(r){l.fx.step[r.prop]?l.fx.step[r.prop](r):r.elem.nodeType===1&&(l.cssHooks[r.prop]||r.elem.style[Nt(r.prop)]!=null)?l.style(r.elem,r.prop,r.now+r.unit):r.elem[r.prop]=r.now}}},me.propHooks.scrollTop=me.propHooks.scrollLeft={set:function(r){r.elem.nodeType&&r.elem.parentNode&&(r.elem[r.prop]=r.now)}},l.easing={linear:function(r){return r},swing:function(r){return .5-Math.cos(r*Math.PI)/2},_default:"swing"},l.fx=me.prototype.init,l.fx.step={};var he,Wt,Ye=/^(?:toggle|show|hide)$/,we=/queueHooks$/;function ln(){Wt&&(p.hidden===!1&&t.requestAnimationFrame?t.requestAnimationFrame(ln):t.setTimeout(ln,l.fx.interval),l.fx.tick())}function Kn(){return t.setTimeout(function(){he=void 0}),he=Date.now()}function Qe(r,o){var u,f=0,_={height:r};for(o=o?1:0;f<4;f+=2-o)u=kt[f],_["margin"+u]=_["padding"+u]=r;return o&&(_.opacity=_.width=r),_}function fi(r,o,u){for(var f,_=(ke.tweeners[o]||[]).concat(ke.tweeners["*"]),x=0,E=_.length;x<E;x++)if(f=_[x].call(u,o,r))return f}function Be(r,o,u){var f,_,x,E,N,I,V,nt,ot="width"in o||"height"in o,J=this,gt={},ee=r.style,be=r.nodeType&&ne(r),oe=Z.get(r,"fxshow");u.queue||(E=l._queueHooks(r,"fx"),E.unqueued==null&&(E.unqueued=0,N=E.empty.fire,E.empty.fire=function(){E.unqueued||N()}),E.unqueued++,J.always(function(){J.always(function(){E.unqueued--,l.queue(r,"fx").length||E.empty.fire()})}));for(f in o)if(_=o[f],Ye.test(_)){if(delete o[f],x=x||_==="toggle",_===(be?"hide":"show"))if(_==="show"&&oe&&oe[f]!==void 0)be=!0;else continue;gt[f]=oe&&oe[f]||l.style(r,f)}if(I=!l.isEmptyObject(o),!(!I&&l.isEmptyObject(gt))){ot&&r.nodeType===1&&(u.overflow=[ee.overflow,ee.overflowX,ee.overflowY],V=oe&&oe.display,V==null&&(V=Z.get(r,"display")),nt=l.css(r,"display"),nt==="none"&&(V?nt=V:(it([r],!0),V=r.style.display||V,nt=l.css(r,"display"),it([r]))),(nt==="inline"||nt==="inline-block"&&V!=null)&&l.css(r,"float")==="none"&&(I||(J.done(function(){ee.display=V}),V==null&&(nt=ee.display,V=nt==="none"?"":nt)),ee.display="inline-block")),u.overflow&&(ee.overflow="hidden",J.always(function(){ee.overflow=u.overflow[0],ee.overflowX=u.overflow[1],ee.overflowY=u.overflow[2]})),I=!1;for(f in gt)I||(oe?"hidden"in oe&&(be=oe.hidden):oe=Z.access(r,"fxshow",{display:V}),x&&(oe.hidden=!be),be&&it([r],!0),J.done(function(){be||it([r]),Z.remove(r,"fxshow");for(f in gt)l.style(r,f,gt[f])})),I=fi(be?oe[f]:0,f,J),f in oe||(oe[f]=I.start,be&&(I.end=I.start,I.start=0))}}function pn(r,o){var u,f,_,x,E;for(u in r)if(f=b(u),_=o[f],x=r[u],Array.isArray(x)&&(_=x[1],x=r[u]=x[0]),u!==f&&(r[f]=x,delete r[u]),E=l.cssHooks[f],E&&"expand"in E){x=E.expand(x),delete r[f];for(u in x)u in r||(r[u]=x[u],o[u]=_)}else o[f]=_}function ke(r,o,u){var f,_,x=0,E=ke.prefilters.length,N=l.Deferred().always(function(){delete I.elem}),I=function(){if(_)return!1;for(var ot=he||Kn(),J=Math.max(0,V.startTime+V.duration-ot),gt=J/V.duration||0,ee=1-gt,be=0,oe=V.tweens.length;be<oe;be++)V.tweens[be].run(ee);return N.notifyWith(r,[V,ee,J]),ee<1&&oe?J:(oe||N.notifyWith(r,[V,1,0]),N.resolveWith(r,[V]),!1)},V=N.promise({elem:r,props:l.extend({},o),opts:l.extend(!0,{specialEasing:{},easing:l.easing._default},u),originalProperties:o,originalOptions:u,startTime:he||Kn(),duration:u.duration,tweens:[],createTween:function(ot,J){var gt=l.Tween(r,V.opts,ot,J,V.opts.specialEasing[ot]||V.opts.easing);return V.tweens.push(gt),gt},stop:function(ot){var J=0,gt=ot?V.tweens.length:0;if(_)return this;for(_=!0;J<gt;J++)V.tweens[J].run(1);return ot?(N.notifyWith(r,[V,1,0]),N.resolveWith(r,[V,ot])):N.rejectWith(r,[V,ot]),this}}),nt=V.props;for(pn(nt,V.opts.specialEasing);x<E;x++)if(f=ke.prefilters[x].call(V,r,nt,V.opts),f)return A(f.stop)&&(l._queueHooks(V.elem,V.opts.queue).stop=f.stop.bind(f)),f;return l.map(nt,fi,V),A(V.opts.start)&&V.opts.start.call(r,V),V.progress(V.opts.progress).done(V.opts.done,V.opts.complete).fail(V.opts.fail).always(V.opts.always),l.fx.timer(l.extend(I,{elem:r,anim:V,queue:V.opts.queue})),V}l.Animation=l.extend(ke,{tweeners:{"*":[function(r,o){var u=this.createTween(r,o);return Le(u.elem,r,Lt.exec(o),u),u}]},tweener:function(r,o){A(r)?(o=r,r=["*"]):r=r.match(Ht);for(var u,f=0,_=r.length;f<_;f++)u=r[f],ke.tweeners[u]=ke.tweeners[u]||[],ke.tweeners[u].unshift(o)},prefilters:[Be],prefilter:function(r,o){o?ke.prefilters.unshift(r):ke.prefilters.push(r)}}),l.speed=function(r,o,u){var f=r&&typeof r=="object"?l.extend({},r):{complete:u||!u&&o||A(r)&&r,duration:r,easing:u&&o||o&&!A(o)&&o};return l.fx.off?f.duration=0:typeof f.duration!="number"&&(f.duration in l.fx.speeds?f.duration=l.fx.speeds[f.duration]:f.duration=l.fx.speeds._default),(f.queue==null||f.queue===!0)&&(f.queue="fx"),f.old=f.complete,f.complete=function(){A(f.old)&&f.old.call(this),f.queue&&l.dequeue(this,f.queue)},f},l.fn.extend({fadeTo:function(r,o,u,f){return this.filter(ne).css("opacity",0).show().end().animate({opacity:o},r,u,f)},animate:function(r,o,u,f){var _=l.isEmptyObject(r),x=l.speed(o,u,f),E=function(){var N=ke(this,l.extend({},r),x);(_||Z.get(this,"finish"))&&N.stop(!0)};return E.finish=E,_||x.queue===!1?this.each(E):this.queue(x.queue,E)},stop:function(r,o,u){var f=function(_){var x=_.stop;delete _.stop,x(u)};return typeof r!="string"&&(u=o,o=r,r=void 0),o&&this.queue(r||"fx",[]),this.each(function(){var _=!0,x=r!=null&&r+"queueHooks",E=l.timers,N=Z.get(this);if(x)N[x]&&N[x].stop&&f(N[x]);else for(x in N)N[x]&&N[x].stop&&we.test(x)&&f(N[x]);for(x=E.length;x--;)E[x].elem===this&&(r==null||E[x].queue===r)&&(E[x].anim.stop(u),_=!1,E.splice(x,1));(_||!u)&&l.dequeue(this,r)})},finish:function(r){return r!==!1&&(r=r||"fx"),this.each(function(){var o,u=Z.get(this),f=u[r+"queue"],_=u[r+"queueHooks"],x=l.timers,E=f?f.length:0;for(u.finish=!0,l.queue(this,r,[]),_&&_.stop&&_.stop.call(this,!0),o=x.length;o--;)x[o].elem===this&&x[o].queue===r&&(x[o].anim.stop(!0),x.splice(o,1));for(o=0;o<E;o++)f[o]&&f[o].finish&&f[o].finish.call(this);delete u.finish})}}),l.each(["toggle","show","hide"],function(r,o){var u=l.fn[o];l.fn[o]=function(f,_,x){return f==null||typeof f=="boolean"?u.apply(this,arguments):this.animate(Qe(o,!0),f,_,x)}}),l.each({slideDown:Qe("show"),slideUp:Qe("hide"),slideToggle:Qe("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(r,o){l.fn[r]=function(u,f,_){return this.animate(o,u,f,_)}}),l.timers=[],l.fx.tick=function(){var r,o=0,u=l.timers;for(he=Date.now();o<u.length;o++)r=u[o],!r()&&u[o]===r&&u.splice(o--,1);u.length||l.fx.stop(),he=void 0},l.fx.timer=function(r){l.timers.push(r),l.fx.start()},l.fx.interval=13,l.fx.start=function(){Wt||(Wt=!0,ln())},l.fx.stop=function(){Wt=null},l.fx.speeds={slow:600,fast:200,_default:400},l.fn.delay=function(r,o){return r=l.fx&&l.fx.speeds[r]||r,o=o||"fx",this.queue(o,function(u,f){var _=t.setTimeout(u,r);f.stop=function(){t.clearTimeout(_)}})},function(){var r=p.createElement("input"),o=p.createElement("select"),u=o.appendChild(p.createElement("option"));r.type="checkbox",T.checkOn=r.value!=="",T.optSelected=u.selected,r=p.createElement("input"),r.value="t",r.type="radio",T.radioValue=r.value==="t"}();var tn,qe=l.expr.attrHandle;l.fn.extend({attr:function(r,o){return Ft(this,l.attr,r,o,arguments.length>1)},removeAttr:function(r){return this.each(function(){l.removeAttr(this,r)})}}),l.extend({attr:function(r,o,u){var f,_,x=r.nodeType;if(!(x===3||x===8||x===2)){if(typeof r.getAttribute>"u")return l.prop(r,o,u);if((x!==1||!l.isXMLDoc(r))&&(_=l.attrHooks[o.toLowerCase()]||(l.expr.match.bool.test(o)?tn:void 0)),u!==void 0){if(u===null){l.removeAttr(r,o);return}return _&&"set"in _&&(f=_.set(r,u,o))!==void 0?f:(r.setAttribute(o,u+""),u)}return _&&"get"in _&&(f=_.get(r,o))!==null?f:(f=l.find.attr(r,o),f??void 0)}},attrHooks:{type:{set:function(r,o){if(!T.radioValue&&o==="radio"&&R(r,"input")){var u=r.value;return r.setAttribute("type",o),u&&(r.value=u),o}}}},removeAttr:function(r,o){var u,f=0,_=o&&o.match(Ht);if(_&&r.nodeType===1)for(;u=_[f++];)r.removeAttribute(u)}}),tn={set:function(r,o,u){return o===!1?l.removeAttr(r,u):r.setAttribute(u,u),u}},l.each(l.expr.match.bool.source.match(/\w+/g),function(r,o){var u=qe[o]||l.find.attr;qe[o]=function(f,_,x){var E,N,I=_.toLowerCase();return x||(N=qe[I],qe[I]=E,E=u(f,_,x)!=null?I:null,qe[I]=N),E}});var Dr=/^(?:input|select|textarea|button)$/i,Zn=/^(?:a|area)$/i;l.fn.extend({prop:function(r,o){return Ft(this,l.prop,r,o,arguments.length>1)},removeProp:function(r){return this.each(function(){delete this[l.propFix[r]||r]})}}),l.extend({prop:function(r,o,u){var f,_,x=r.nodeType;if(!(x===3||x===8||x===2))return(x!==1||!l.isXMLDoc(r))&&(o=l.propFix[o]||o,_=l.propHooks[o]),u!==void 0?_&&"set"in _&&(f=_.set(r,u,o))!==void 0?f:r[o]=u:_&&"get"in _&&(f=_.get(r,o))!==null?f:r[o]},propHooks:{tabIndex:{get:function(r){var o=l.find.attr(r,"tabindex");return o?parseInt(o,10):Dr.test(r.nodeName)||Zn.test(r.nodeName)&&r.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),T.optSelected||(l.propHooks.selected={get:function(r){var o=r.parentNode;return o&&o.parentNode&&o.parentNode.selectedIndex,null},set:function(r){var o=r.parentNode;o&&(o.selectedIndex,o.parentNode&&o.parentNode.selectedIndex)}}),l.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){l.propFix[this.toLowerCase()]=this});function Ci(r){var o=r.match(Ht)||[];return o.join(" ")}function Ri(r){return r.getAttribute&&r.getAttribute("class")||""}function ia(r){return Array.isArray(r)?r:typeof r=="string"?r.match(Ht)||[]:[]}l.fn.extend({addClass:function(r){var o,u,f,_,x,E;return A(r)?this.each(function(N){l(this).addClass(r.call(this,N,Ri(this)))}):(o=ia(r),o.length?this.each(function(){if(f=Ri(this),u=this.nodeType===1&&" "+Ci(f)+" ",u){for(x=0;x<o.length;x++)_=o[x],u.indexOf(" "+_+" ")<0&&(u+=_+" ");E=Ci(u),f!==E&&this.setAttribute("class",E)}}):this)},removeClass:function(r){var o,u,f,_,x,E;return A(r)?this.each(function(N){l(this).removeClass(r.call(this,N,Ri(this)))}):arguments.length?(o=ia(r),o.length?this.each(function(){if(f=Ri(this),u=this.nodeType===1&&" "+Ci(f)+" ",u){for(x=0;x<o.length;x++)for(_=o[x];u.indexOf(" "+_+" ")>-1;)u=u.replace(" "+_+" "," ");E=Ci(u),f!==E&&this.setAttribute("class",E)}}):this):this.attr("class","")},toggleClass:function(r,o){var u,f,_,x,E=typeof r,N=E==="string"||Array.isArray(r);return A(r)?this.each(function(I){l(this).toggleClass(r.call(this,I,Ri(this),o),o)}):typeof o=="boolean"&&N?o?this.addClass(r):this.removeClass(r):(u=ia(r),this.each(function(){if(N)for(x=l(this),_=0;_<u.length;_++)f=u[_],x.hasClass(f)?x.removeClass(f):x.addClass(f);else(r===void 0||E==="boolean")&&(f=Ri(this),f&&Z.set(this,"__className__",f),this.setAttribute&&this.setAttribute("class",f||r===!1?"":Z.get(this,"__className__")||""))}))},hasClass:function(r){var o,u,f=0;for(o=" "+r+" ";u=this[f++];)if(u.nodeType===1&&(" "+Ci(Ri(u))+" ").indexOf(o)>-1)return!0;return!1}});var au=/\r/g;l.fn.extend({val:function(r){var o,u,f,_=this[0];return arguments.length?(f=A(r),this.each(function(x){var E;this.nodeType===1&&(f?E=r.call(this,x,l(this).val()):E=r,E==null?E="":typeof E=="number"?E+="":Array.isArray(E)&&(E=l.map(E,function(N){return N==null?"":N+""})),o=l.valHooks[this.type]||l.valHooks[this.nodeName.toLowerCase()],(!o||!("set"in o)||o.set(this,E,"value")===void 0)&&(this.value=E))})):_?(o=l.valHooks[_.type]||l.valHooks[_.nodeName.toLowerCase()],o&&"get"in o&&(u=o.get(_,"value"))!==void 0?u:(u=_.value,typeof u=="string"?u.replace(au,""):u??"")):void 0}}),l.extend({valHooks:{option:{get:function(r){var o=l.find.attr(r,"value");return o??Ci(l.text(r))}},select:{get:function(r){var o,u,f,_=r.options,x=r.selectedIndex,E=r.type==="select-one",N=E?null:[],I=E?x+1:_.length;for(x<0?f=I:f=E?x:0;f<I;f++)if(u=_[f],(u.selected||f===x)&&!u.disabled&&(!u.parentNode.disabled||!R(u.parentNode,"optgroup"))){if(o=l(u).val(),E)return o;N.push(o)}return N},set:function(r,o){for(var u,f,_=r.options,x=l.makeArray(o),E=_.length;E--;)f=_[E],(f.selected=l.inArray(l.valHooks.option.get(f),x)>-1)&&(u=!0);return u||(r.selectedIndex=-1),x}}}}),l.each(["radio","checkbox"],function(){l.valHooks[this]={set:function(r,o){if(Array.isArray(o))return r.checked=l.inArray(l(r).val(),o)>-1}},T.checkOn||(l.valHooks[this].get=function(r){return r.getAttribute("value")===null?"on":r.value})});var Lr=t.location,el={guid:Date.now()},ra=/\?/;l.parseXML=function(r){var o,u;if(!r||typeof r!="string")return null;try{o=new t.DOMParser().parseFromString(r,"text/xml")}catch{}return u=o&&o.getElementsByTagName("parsererror")[0],(!o||u)&&l.error("Invalid XML: "+(u?l.map(u.childNodes,function(f){return f.textContent}).join(`
`):r)),o};var nl=/^(?:focusinfocus|focusoutblur)$/,il=function(r){r.stopPropagation()};l.extend(l.event,{trigger:function(r,o,u,f){var _,x,E,N,I,V,nt,ot,J=[u||p],gt=v.call(r,"type")?r.type:r,ee=v.call(r,"namespace")?r.namespace.split("."):[];if(x=ot=E=u=u||p,!(u.nodeType===3||u.nodeType===8)&&!nl.test(gt+l.event.triggered)&&(gt.indexOf(".")>-1&&(ee=gt.split("."),gt=ee.shift(),ee.sort()),I=gt.indexOf(":")<0&&"on"+gt,r=r[l.expando]?r:new l.Event(gt,typeof r=="object"&&r),r.isTrigger=f?2:3,r.namespace=ee.join("."),r.rnamespace=r.namespace?new RegExp("(^|\\.)"+ee.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,r.result=void 0,r.target||(r.target=u),o=o==null?[r]:l.makeArray(o,[r]),nt=l.event.special[gt]||{},!(!f&&nt.trigger&&nt.trigger.apply(u,o)===!1))){if(!f&&!nt.noBubble&&!M(u)){for(N=nt.delegateType||gt,nl.test(N+gt)||(x=x.parentNode);x;x=x.parentNode)J.push(x),E=x;E===(u.ownerDocument||p)&&J.push(E.defaultView||E.parentWindow||t)}for(_=0;(x=J[_++])&&!r.isPropagationStopped();)ot=x,r.type=_>1?N:nt.bindType||gt,V=(Z.get(x,"events")||Object.create(null))[r.type]&&Z.get(x,"handle"),V&&V.apply(x,o),V=I&&x[I],V&&V.apply&&K(x)&&(r.result=V.apply(x,o),r.result===!1&&r.preventDefault());return r.type=gt,!f&&!r.isDefaultPrevented()&&(!nt._default||nt._default.apply(J.pop(),o)===!1)&&K(u)&&I&&A(u[gt])&&!M(u)&&(E=u[I],E&&(u[I]=null),l.event.triggered=gt,r.isPropagationStopped()&&ot.addEventListener(gt,il),u[gt](),r.isPropagationStopped()&&ot.removeEventListener(gt,il),l.event.triggered=void 0,E&&(u[I]=E)),r.result}},simulate:function(r,o,u){var f=l.extend(new l.Event,u,{type:r,isSimulated:!0});l.event.trigger(f,null,o)}}),l.fn.extend({trigger:function(r,o){return this.each(function(){l.event.trigger(r,o,this)})},triggerHandler:function(r,o){var u=this[0];if(u)return l.event.trigger(r,o,u,!0)}});var ou=/\[\]$/,rl=/\r?\n/g,lu=/^(?:submit|button|image|reset|file)$/i,cu=/^(?:input|select|textarea|keygen)/i;function sa(r,o,u,f){var _;if(Array.isArray(o))l.each(o,function(x,E){u||ou.test(r)?f(r,E):sa(r+"["+(typeof E=="object"&&E!=null?x:"")+"]",E,u,f)});else if(!u&&D(o)==="object")for(_ in o)sa(r+"["+_+"]",o[_],u,f);else f(r,o)}l.param=function(r,o){var u,f=[],_=function(x,E){var N=A(E)?E():E;f[f.length]=encodeURIComponent(x)+"="+encodeURIComponent(N??"")};if(r==null)return"";if(Array.isArray(r)||r.jquery&&!l.isPlainObject(r))l.each(r,function(){_(this.name,this.value)});else for(u in r)sa(u,r[u],o,_);return f.join("&")},l.fn.extend({serialize:function(){return l.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var r=l.prop(this,"elements");return r?l.makeArray(r):this}).filter(function(){var r=this.type;return this.name&&!l(this).is(":disabled")&&cu.test(this.nodeName)&&!lu.test(r)&&(this.checked||!ht.test(r))}).map(function(r,o){var u=l(this).val();return u==null?null:Array.isArray(u)?l.map(u,function(f){return{name:o.name,value:f.replace(rl,`\r
`)}}):{name:o.name,value:u.replace(rl,`\r
`)}}).get()}});var uu=/%20/g,hu=/#.*$/,fu=/([?&])_=[^&]*/,du=/^(.*?):[ \t]*([^\r\n]*)$/mg,pu=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,mu=/^(?:GET|HEAD)$/,gu=/^\/\//,sl={},aa={},al="*/".concat("*"),oa=p.createElement("a");oa.href=Lr.href;function ol(r){return function(o,u){typeof o!="string"&&(u=o,o="*");var f,_=0,x=o.toLowerCase().match(Ht)||[];if(A(u))for(;f=x[_++];)f[0]==="+"?(f=f.slice(1)||"*",(r[f]=r[f]||[]).unshift(u)):(r[f]=r[f]||[]).push(u)}}function ll(r,o,u,f){var _={},x=r===aa;function E(N){var I;return _[N]=!0,l.each(r[N]||[],function(V,nt){var ot=nt(o,u,f);if(typeof ot=="string"&&!x&&!_[ot])return o.dataTypes.unshift(ot),E(ot),!1;if(x)return!(I=ot)}),I}return E(o.dataTypes[0])||!_["*"]&&E("*")}function la(r,o){var u,f,_=l.ajaxSettings.flatOptions||{};for(u in o)o[u]!==void 0&&((_[u]?r:f||(f={}))[u]=o[u]);return f&&l.extend(!0,r,f),r}function _u(r,o,u){for(var f,_,x,E,N=r.contents,I=r.dataTypes;I[0]==="*";)I.shift(),f===void 0&&(f=r.mimeType||o.getResponseHeader("Content-Type"));if(f){for(_ in N)if(N[_]&&N[_].test(f)){I.unshift(_);break}}if(I[0]in u)x=I[0];else{for(_ in u){if(!I[0]||r.converters[_+" "+I[0]]){x=_;break}E||(E=_)}x=x||E}if(x)return x!==I[0]&&I.unshift(x),u[x]}function vu(r,o,u,f){var _,x,E,N,I,V={},nt=r.dataTypes.slice();if(nt[1])for(E in r.converters)V[E.toLowerCase()]=r.converters[E];for(x=nt.shift();x;)if(r.responseFields[x]&&(u[r.responseFields[x]]=o),!I&&f&&r.dataFilter&&(o=r.dataFilter(o,r.dataType)),I=x,x=nt.shift(),x){if(x==="*")x=I;else if(I!=="*"&&I!==x){if(E=V[I+" "+x]||V["* "+x],!E){for(_ in V)if(N=_.split(" "),N[1]===x&&(E=V[I+" "+N[0]]||V["* "+N[0]],E)){E===!0?E=V[_]:V[_]!==!0&&(x=N[0],nt.unshift(N[1]));break}}if(E!==!0)if(E&&r.throws)o=E(o);else try{o=E(o)}catch(ot){return{state:"parsererror",error:E?ot:"No conversion from "+I+" to "+x}}}}return{state:"success",data:o}}l.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Lr.href,type:"GET",isLocal:pu.test(Lr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":al,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":l.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(r,o){return o?la(la(r,l.ajaxSettings),o):la(l.ajaxSettings,r)},ajaxPrefilter:ol(sl),ajaxTransport:ol(aa),ajax:function(r,o){typeof r=="object"&&(o=r,r=void 0),o=o||{};var u,f,_,x,E,N,I,V,nt,ot,J=l.ajaxSetup({},o),gt=J.context||J,ee=J.context&&(gt.nodeType||gt.jquery)?l(gt):l.event,be=l.Deferred(),oe=l.Callbacks("once memory"),rn=J.statusCode||{},$e={},On={},Bn="canceled",Se={readyState:0,getResponseHeader:function(Ae){var We;if(I){if(!x)for(x={};We=du.exec(_);)x[We[1].toLowerCase()+" "]=(x[We[1].toLowerCase()+" "]||[]).concat(We[2]);We=x[Ae.toLowerCase()+" "]}return We==null?null:We.join(", ")},getAllResponseHeaders:function(){return I?_:null},setRequestHeader:function(Ae,We){return I==null&&(Ae=On[Ae.toLowerCase()]=On[Ae.toLowerCase()]||Ae,$e[Ae]=We),this},overrideMimeType:function(Ae){return I==null&&(J.mimeType=Ae),this},statusCode:function(Ae){var We;if(Ae)if(I)Se.always(Ae[Se.status]);else for(We in Ae)rn[We]=[rn[We],Ae[We]];return this},abort:function(Ae){var We=Ae||Bn;return u&&u.abort(We),Pi(0,We),this}};if(be.promise(Se),J.url=((r||J.url||Lr.href)+"").replace(gu,Lr.protocol+"//"),J.type=o.method||o.type||J.method||J.type,J.dataTypes=(J.dataType||"*").toLowerCase().match(Ht)||[""],J.crossDomain==null){N=p.createElement("a");try{N.href=J.url,N.href=N.href,J.crossDomain=oa.protocol+"//"+oa.host!=N.protocol+"//"+N.host}catch{J.crossDomain=!0}}if(J.data&&J.processData&&typeof J.data!="string"&&(J.data=l.param(J.data,J.traditional)),ll(sl,J,o,Se),I)return Se;V=l.event&&J.global,V&&l.active++===0&&l.event.trigger("ajaxStart"),J.type=J.type.toUpperCase(),J.hasContent=!mu.test(J.type),f=J.url.replace(hu,""),J.hasContent?J.data&&J.processData&&(J.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(J.data=J.data.replace(uu,"+")):(ot=J.url.slice(f.length),J.data&&(J.processData||typeof J.data=="string")&&(f+=(ra.test(f)?"&":"?")+J.data,delete J.data),J.cache===!1&&(f=f.replace(fu,"$1"),ot=(ra.test(f)?"&":"?")+"_="+el.guid+++ot),J.url=f+ot),J.ifModified&&(l.lastModified[f]&&Se.setRequestHeader("If-Modified-Since",l.lastModified[f]),l.etag[f]&&Se.setRequestHeader("If-None-Match",l.etag[f])),(J.data&&J.hasContent&&J.contentType!==!1||o.contentType)&&Se.setRequestHeader("Content-Type",J.contentType),Se.setRequestHeader("Accept",J.dataTypes[0]&&J.accepts[J.dataTypes[0]]?J.accepts[J.dataTypes[0]]+(J.dataTypes[0]!=="*"?", "+al+"; q=0.01":""):J.accepts["*"]);for(nt in J.headers)Se.setRequestHeader(nt,J.headers[nt]);if(J.beforeSend&&(J.beforeSend.call(gt,Se,J)===!1||I))return Se.abort();if(Bn="abort",oe.add(J.complete),Se.done(J.success),Se.fail(J.error),u=ll(aa,J,o,Se),!u)Pi(-1,"No Transport");else{if(Se.readyState=1,V&&ee.trigger("ajaxSend",[Se,J]),I)return Se;J.async&&J.timeout>0&&(E=t.setTimeout(function(){Se.abort("timeout")},J.timeout));try{I=!1,u.send($e,Pi)}catch(Ae){if(I)throw Ae;Pi(-1,Ae)}}function Pi(Ae,We,Ur,ua){var zn,Nr,Hn,di,pi,bn=We;I||(I=!0,E&&t.clearTimeout(E),u=void 0,_=ua||"",Se.readyState=Ae>0?4:0,zn=Ae>=200&&Ae<300||Ae===304,Ur&&(di=_u(J,Se,Ur)),!zn&&l.inArray("script",J.dataTypes)>-1&&l.inArray("json",J.dataTypes)<0&&(J.converters["text script"]=function(){}),di=vu(J,di,Se,zn),zn?(J.ifModified&&(pi=Se.getResponseHeader("Last-Modified"),pi&&(l.lastModified[f]=pi),pi=Se.getResponseHeader("etag"),pi&&(l.etag[f]=pi)),Ae===204||J.type==="HEAD"?bn="nocontent":Ae===304?bn="notmodified":(bn=di.state,Nr=di.data,Hn=di.error,zn=!Hn)):(Hn=bn,(Ae||!bn)&&(bn="error",Ae<0&&(Ae=0))),Se.status=Ae,Se.statusText=(We||bn)+"",zn?be.resolveWith(gt,[Nr,bn,Se]):be.rejectWith(gt,[Se,bn,Hn]),Se.statusCode(rn),rn=void 0,V&&ee.trigger(zn?"ajaxSuccess":"ajaxError",[Se,J,zn?Nr:Hn]),oe.fireWith(gt,[Se,bn]),V&&(ee.trigger("ajaxComplete",[Se,J]),--l.active||l.event.trigger("ajaxStop")))}return Se},getJSON:function(r,o,u){return l.get(r,o,u,"json")},getScript:function(r,o){return l.get(r,void 0,o,"script")}}),l.each(["get","post"],function(r,o){l[o]=function(u,f,_,x){return A(f)&&(x=x||_,_=f,f=void 0),l.ajax(l.extend({url:u,type:o,dataType:x,data:f,success:_},l.isPlainObject(u)&&u))}}),l.ajaxPrefilter(function(r){var o;for(o in r.headers)o.toLowerCase()==="content-type"&&(r.contentType=r.headers[o]||"")}),l._evalUrl=function(r,o,u){return l.ajax({url:r,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(f){l.globalEval(f,o,u)}})},l.fn.extend({wrapAll:function(r){var o;return this[0]&&(A(r)&&(r=r.call(this[0])),o=l(r,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var u=this;u.firstElementChild;)u=u.firstElementChild;return u}).append(this)),this},wrapInner:function(r){return A(r)?this.each(function(o){l(this).wrapInner(r.call(this,o))}):this.each(function(){var o=l(this),u=o.contents();u.length?u.wrapAll(r):o.append(r)})},wrap:function(r){var o=A(r);return this.each(function(u){l(this).wrapAll(o?r.call(this,u):r)})},unwrap:function(r){return this.parent(r).not("body").each(function(){l(this).replaceWith(this.childNodes)}),this}}),l.expr.pseudos.hidden=function(r){return!l.expr.pseudos.visible(r)},l.expr.pseudos.visible=function(r){return!!(r.offsetWidth||r.offsetHeight||r.getClientRects().length)},l.ajaxSettings.xhr=function(){try{return new t.XMLHttpRequest}catch{}};var xu={0:200,1223:204},Ir=l.ajaxSettings.xhr();T.cors=!!Ir&&"withCredentials"in Ir,T.ajax=Ir=!!Ir,l.ajaxTransport(function(r){var o,u;if(T.cors||Ir&&!r.crossDomain)return{send:function(f,_){var x,E=r.xhr();if(E.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)for(x in r.xhrFields)E[x]=r.xhrFields[x];r.mimeType&&E.overrideMimeType&&E.overrideMimeType(r.mimeType),!r.crossDomain&&!f["X-Requested-With"]&&(f["X-Requested-With"]="XMLHttpRequest");for(x in f)E.setRequestHeader(x,f[x]);o=function(N){return function(){o&&(o=u=E.onload=E.onerror=E.onabort=E.ontimeout=E.onreadystatechange=null,N==="abort"?E.abort():N==="error"?typeof E.status!="number"?_(0,"error"):_(E.status,E.statusText):_(xu[E.status]||E.status,E.statusText,(E.responseType||"text")!=="text"||typeof E.responseText!="string"?{binary:E.response}:{text:E.responseText},E.getAllResponseHeaders()))}},E.onload=o(),u=E.onerror=E.ontimeout=o("error"),E.onabort!==void 0?E.onabort=u:E.onreadystatechange=function(){E.readyState===4&&t.setTimeout(function(){o&&u()})},o=o("abort");try{E.send(r.hasContent&&r.data||null)}catch(N){if(o)throw N}},abort:function(){o&&o()}}}),l.ajaxPrefilter(function(r){r.crossDomain&&(r.contents.script=!1)}),l.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(r){return l.globalEval(r),r}}}),l.ajaxPrefilter("script",function(r){r.cache===void 0&&(r.cache=!1),r.crossDomain&&(r.type="GET")}),l.ajaxTransport("script",function(r){if(r.crossDomain||r.scriptAttrs){var o,u;return{send:function(f,_){o=l("<script>").attr(r.scriptAttrs||{}).prop({charset:r.scriptCharset,src:r.url}).on("load error",u=function(x){o.remove(),u=null,x&&_(x.type==="error"?404:200,x.type)}),p.head.appendChild(o[0])},abort:function(){u&&u()}}}});var cl=[],ca=/(=)\?(?=&|$)|\?\?/;l.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var r=cl.pop()||l.expando+"_"+el.guid++;return this[r]=!0,r}}),l.ajaxPrefilter("json jsonp",function(r,o,u){var f,_,x,E=r.jsonp!==!1&&(ca.test(r.url)?"url":typeof r.data=="string"&&(r.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&ca.test(r.data)&&"data");if(E||r.dataTypes[0]==="jsonp")return f=r.jsonpCallback=A(r.jsonpCallback)?r.jsonpCallback():r.jsonpCallback,E?r[E]=r[E].replace(ca,"$1"+f):r.jsonp!==!1&&(r.url+=(ra.test(r.url)?"&":"?")+r.jsonp+"="+f),r.converters["script json"]=function(){return x||l.error(f+" was not called"),x[0]},r.dataTypes[0]="json",_=t[f],t[f]=function(){x=arguments},u.always(function(){_===void 0?l(t).removeProp(f):t[f]=_,r[f]&&(r.jsonpCallback=o.jsonpCallback,cl.push(f)),x&&A(_)&&_(x[0]),x=_=void 0}),"script"}),T.createHTMLDocument=function(){var r=p.implementation.createHTMLDocument("").body;return r.innerHTML="<form></form><form></form>",r.childNodes.length===2}(),l.parseHTML=function(r,o,u){if(typeof r!="string")return[];typeof o=="boolean"&&(u=o,o=!1);var f,_,x;return o||(T.createHTMLDocument?(o=p.implementation.createHTMLDocument(""),f=o.createElement("base"),f.href=p.location.href,o.head.appendChild(f)):o=p),_=ae.exec(r),x=!u&&[],_?[o.createElement(_[1])]:(_=dn([r],o,x),x&&x.length&&l(x).remove(),l.merge([],_.childNodes))},l.fn.load=function(r,o,u){var f,_,x,E=this,N=r.indexOf(" ");return N>-1&&(f=Ci(r.slice(N)),r=r.slice(0,N)),A(o)?(u=o,o=void 0):o&&typeof o=="object"&&(_="POST"),E.length>0&&l.ajax({url:r,type:_||"GET",dataType:"html",data:o}).done(function(I){x=arguments,E.html(f?l("<div>").append(l.parseHTML(I)).find(f):I)}).always(u&&function(I,V){E.each(function(){u.apply(this,x||[I.responseText,V,I])})}),this},l.expr.pseudos.animated=function(r){return l.grep(l.timers,function(o){return r===o.elem}).length},l.offset={setOffset:function(r,o,u){var f,_,x,E,N,I,V,nt=l.css(r,"position"),ot=l(r),J={};nt==="static"&&(r.style.position="relative"),N=ot.offset(),x=l.css(r,"top"),I=l.css(r,"left"),V=(nt==="absolute"||nt==="fixed")&&(x+I).indexOf("auto")>-1,V?(f=ot.position(),E=f.top,_=f.left):(E=parseFloat(x)||0,_=parseFloat(I)||0),A(o)&&(o=o.call(r,u,l.extend({},N))),o.top!=null&&(J.top=o.top-N.top+E),o.left!=null&&(J.left=o.left-N.left+_),"using"in o?o.using.call(r,J):ot.css(J)}},l.fn.extend({offset:function(r){if(arguments.length)return r===void 0?this:this.each(function(_){l.offset.setOffset(this,r,_)});var o,u,f=this[0];if(f)return f.getClientRects().length?(o=f.getBoundingClientRect(),u=f.ownerDocument.defaultView,{top:o.top+u.pageYOffset,left:o.left+u.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var r,o,u,f=this[0],_={top:0,left:0};if(l.css(f,"position")==="fixed")o=f.getBoundingClientRect();else{for(o=this.offset(),u=f.ownerDocument,r=f.offsetParent||u.documentElement;r&&(r===u.body||r===u.documentElement)&&l.css(r,"position")==="static";)r=r.parentNode;r&&r!==f&&r.nodeType===1&&(_=l(r).offset(),_.top+=l.css(r,"borderTopWidth",!0),_.left+=l.css(r,"borderLeftWidth",!0))}return{top:o.top-_.top-l.css(f,"marginTop",!0),left:o.left-_.left-l.css(f,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var r=this.offsetParent;r&&l.css(r,"position")==="static";)r=r.offsetParent;return r||jt})}}),l.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(r,o){var u=o==="pageYOffset";l.fn[r]=function(f){return Ft(this,function(_,x,E){var N;if(M(_)?N=_:_.nodeType===9&&(N=_.defaultView),E===void 0)return N?N[o]:_[x];N?N.scrollTo(u?N.pageXOffset:E,u?E:N.pageYOffset):_[x]=E},r,f,arguments.length)}}),l.each(["top","left"],function(r,o){l.cssHooks[o]=tt(T.pixelPosition,function(u,f){if(f)return f=Q(u,o),Rr.test(f)?l(u).position()[o]+"px":f})}),l.each({Height:"height",Width:"width"},function(r,o){l.each({padding:"inner"+r,content:o,"":"outer"+r},function(u,f){l.fn[f]=function(_,x){var E=arguments.length&&(u||typeof _!="boolean"),N=u||(_===!0||x===!0?"margin":"border");return Ft(this,function(I,V,nt){var ot;return M(I)?f.indexOf("outer")===0?I["inner"+r]:I.document.documentElement["client"+r]:I.nodeType===9?(ot=I.documentElement,Math.max(I.body["scroll"+r],ot["scroll"+r],I.body["offset"+r],ot["offset"+r],ot["client"+r])):nt===void 0?l.css(I,V,N):l.style(I,V,nt,N)},o,E?_:void 0,E)}})}),l.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(r,o){l.fn[o]=function(u){return this.on(o,u)}}),l.fn.extend({bind:function(r,o,u){return this.on(r,null,o,u)},unbind:function(r,o){return this.off(r,null,o)},delegate:function(r,o,u,f){return this.on(o,r,u,f)},undelegate:function(r,o,u){return arguments.length===1?this.off(r,"**"):this.off(o,r||"**",u)},hover:function(r,o){return this.on("mouseenter",r).on("mouseleave",o||r)}}),l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(r,o){l.fn[o]=function(u,f){return arguments.length>0?this.on(o,null,u,f):this.trigger(o)}});var yu=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;l.proxy=function(r,o){var u,f,_;if(typeof o=="string"&&(u=r[o],o=r,r=u),!!A(r))return f=a.call(arguments,2),_=function(){return r.apply(o||this,f.concat(a.call(arguments)))},_.guid=r.guid=r.guid||l.guid++,_},l.holdReady=function(r){r?l.readyWait++:l.ready(!0)},l.isArray=Array.isArray,l.parseJSON=JSON.parse,l.nodeName=R,l.isFunction=A,l.isWindow=M,l.camelCase=b,l.type=D,l.now=Date.now,l.isNumeric=function(r){var o=l.type(r);return(o==="number"||o==="string")&&!isNaN(r-parseFloat(r))},l.trim=function(r){return r==null?"":(r+"").replace(yu,"$1")};var Mu=t.jQuery,Su=t.$;return l.noConflict=function(r){return t.$===l&&(t.$=Su),r&&t.jQuery===l&&(t.jQuery=Mu),l},typeof e>"u"&&(t.jQuery=t.$=l),l})}(Gs)),Gs.exports}var m_=p_();const Ja=f_(m_);function g_(i,t,e,n){const s=[],c=new Ks({color:1401481}),h=new Ks({color:733506});function d(S){i.add(S.mesh),t.add(S),s.push(S)}function m(S,T,A){const M=[],p=T.clone().normalize();for(let F=0;F<A;F++){const U=S.clone().add(p.clone().multiplyScalar(F*1)),D=new Kr(p,c,h);D.setPosition(U.x,0,U.z),M.push(D),F-1>=0&&M[F-1].addCollidable(D)}return M}function g(S,T,A=3,M=6,p=!0){console.log(S);const F=[],U=T.clone().normalize(),D=p?-1:1,q=new k().crossVectors(ki,U).normalize().multiplyScalar(D),H=S.clone().add(q.clone().multiplyScalar(A));console.log(H);const l=Math.PI/2/(M-1);for(let j=0;j<M;++j){const R=D*j*l,C=H.x+A*Math.cos(R),z=H.z+A*Math.sin(R),lt=new k(C,0,z),Y=new k(Math.sin(R),0,-Math.cos(R)).multiplyScalar(D),ft=new Kr(Y,c,h);ft.setPosition(lt.x,0,lt.z),F.push(ft)}F.reverse();for(let j=1;j<M;j++)F[j-1].addCollidable(F[j]);return F}const v=m(e,n,10);v.map(S=>d(S));const y=g(v[v.length-1].mesh.position.clone().add(n.clone().normalize().multiplyScalar(1)),n);return v[v.length-1].addCollidable(y[0]),y.map(S=>d(S)),s}class __{constructor(t){fe(this,"scene");fe(this,"lights");fe(this,"helpers");fe(this,"pointLight",new Wl);fe(this,"spotLight",new Rs);fe(this,"trackingSpotlight",new Rs);fe(this,"trackingSpotlightHelper",new Ga(this.trackingSpotlight));fe(this,"currentMovingObject",null);fe(this,"targetPosition",new k);fe(this,"currentTargetPosition",new k);fe(this,"transitionSpeed",1);fe(this,"clock");this.scene=t,this.lights=[],this.helpers=[],this.clock=new Zc,this.setupLighting()}setupLighting(){this.pointLight=new Wl(new xe(16777215),500,50),this.pointLight.position.set(0,25,0),this.pointLight.castShadow=!0,this.pointLight.shadow.mapSize.width=1024,this.pointLight.shadow.mapSize.height=1024,this.lights.push(this.pointLight),this.scene.add(this.pointLight);const t=new lf(this.pointLight,1);t.visible=!1,this.scene.add(t),this.helpers.push(t),this.spotLight=new Rs(new xe(16776960),100),this.spotLight.position.set(0,15,-10),this.spotLight.target.position.set(0,0,0),this.spotLight.angle=Math.PI/8,this.spotLight.penumbra=.2,this.spotLight.decay=1.5,this.spotLight.distance=50,this.spotLight.castShadow=!0,this.spotLight.shadow.mapSize.width=1024,this.spotLight.shadow.mapSize.height=1024,this.lights.push(this.spotLight),this.scene.add(this.spotLight),this.scene.add(this.spotLight.target);const e=new Ga(this.spotLight);e.visible=!1,this.scene.add(e),this.helpers.push(e),this.trackingSpotlight=new Rs(new xe(43775),50),this.trackingSpotlight.visible=!0,this.trackingSpotlight.position.set(15,15,5),this.trackingSpotlight.angle=Math.PI/25,this.trackingSpotlight.penumbra=.05,this.trackingSpotlight.decay=1,this.trackingSpotlight.distance=40,this.trackingSpotlight.castShadow=!0,this.trackingSpotlight.shadow.mapSize.width=1024,this.trackingSpotlight.shadow.mapSize.height=1024,this.trackingSpotlight.target.position.set(0,0,0),this.targetPosition.copy(this.trackingSpotlight.target.position),this.currentTargetPosition.copy(this.trackingSpotlight.target.position),this.scene.add(this.trackingSpotlight),this.scene.add(this.trackingSpotlight.target),this.lights.push(this.trackingSpotlight),this.trackingSpotlightHelper=new Ga(this.trackingSpotlight),this.trackingSpotlightHelper.visible=!1,this.scene.add(this.trackingSpotlightHelper),this.helpers.push(this.trackingSpotlightHelper)}togglePointLight(){this.pointLight.visible=!this.pointLight.visible}toggleSpotLight(){this.spotLight.visible=!this.spotLight.visible}toggleTrackingSpotlight(){this.trackingSpotlight.visible=!this.trackingSpotlight.visible}toggleHelpers(){this.helpers.forEach(t=>{t.visible=!t.visible})}setTrackingObject(t){this.currentMovingObject=t,t&&this.targetPosition.copy(t.position)}updateTrackingSpotlight(){const t=this.clock.getDelta();this.currentMovingObject&&this.targetPosition.copy(this.currentMovingObject.position);const e=Math.min(1,this.transitionSpeed*t);this.currentTargetPosition.lerp(this.targetPosition,e),this.trackingSpotlight.target.position.copy(this.currentTargetPosition),this.trackingSpotlightHelper&&this.trackingSpotlightHelper.update()}}class v_{constructor(){fe(this,"canvas");fe(this,"scene");fe(this,"renderer");fe(this,"activeCamera");fe(this,"topCamera");fe(this,"followCamera");fe(this,"clock");fe(this,"sceneGraph");fe(this,"lightingManager");fe(this,"activeDomino",null);fe(this,"sphere",null);this.canvas=Ja("#main-canvas")[0],this.scene=new $h,this.renderer=new qg({antialias:!0,canvas:this.canvas}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.canvas.clientWidth,this.canvas.clientHeight),this.renderer.shadowMap.enabled=!0,this.topCamera=new ru(75,this.aspect,.1,5e4,this.canvas),this.followCamera=new o_(75,this.aspect,.1,5e4,this.canvas),this.activeCamera=this.topCamera,Ja(this.canvas).on("resize",()=>{this.activeCamera.aspect=this.aspect,this.activeCamera.updateProjectionMatrix(),this.renderer.setSize(this.canvas.clientWidth,this.canvas.clientHeight)}),this.clock=new Zc,this.sceneGraph=new su,this.lightingManager=new __(this.scene),this.setupKeyBindings(),this.populateScene(),this.animate()}get aspect(){return this.canvas.clientWidth/this.canvas.clientHeight}add(t){this.scene.add(t.mesh),this.sceneGraph.add(t)}animate(){this.renderer.render(this.scene,this.activeCamera),this.activeCamera.update(),this.updateActiveObject(),this.sceneGraph.update(this.clock.getDelta()),requestAnimationFrame(()=>this.animate())}updateActiveObject(){if(this.sphere&&!this.sphere.collided)this.lightingManager.setTrackingObject(this.sphere.mesh);else{const t=this.sceneGraph.children.filter(e=>e instanceof tl&&e.mesh.userData.domino&&e.mesh.userData.domino.toppling&&!e.mesh.userData.domino.fallen);t.length>0?this.lightingManager.setTrackingObject(t[t.length-1].mesh):this.lightingManager.setTrackingObject(null)}this.lightingManager.updateTrackingSpotlight()}setupKeyBindings(){Ja(document).on("keydown",t=>{t.key==="p"&&this.lightingManager.togglePointLight(),t.key==="s"&&this.lightingManager.toggleSpotLight(),t.key==="t"&&this.lightingManager.toggleTrackingSpotlight(),t.key==="h"&&this.lightingManager.toggleHelpers()})}populateScene(){const t=new hn(new Qr(50,50),new Ks({color:new xe(11513775)}));t.rotation.x=-Math.PI/2,t.position.y=-1,t.receiveShadow=!0,this.scene.add(t),this.activeCamera.position.set(0,5,5);const e=new k(1,0,0),n=new h_(e,new Ks({color:new xe(16711680)}));n.mesh.position.set(-5,0,0),this.add(n),this.sphere=n,this.lightingManager.setTrackingObject(n.mesh);const s=g_(this.scene,this.sceneGraph,new k(1,0,0),e);n.addCollidable(s[0]),n.roll()}}new v_;
