var vf=Object.defineProperty;var _f=(n,t,e)=>t in n?vf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Zt=(n,t,e)=>_f(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lc="176",as={ROTATE:0,DOLLY:1,PAN:2},ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xf=0,Ru=1,bf=2,fd=1,yf=2,Ci=3,sr=0,Ln=1,Ai=2,nr=0,ls=1,Du=2,Lu=3,Iu=4,wf=5,yr=100,Sf=101,Mf=102,Ef=103,Tf=104,Cf=200,Af=201,Pf=202,Rf=203,Fl=204,kl=205,Df=206,Lf=207,If=208,Uf=209,Nf=210,Of=211,Ff=212,kf=213,Bf=214,Bl=0,Vl=1,zl=2,ds=3,Hl=4,Gl=5,Wl=6,jl=7,Sa=0,Vf=1,zf=2,ir=0,Hf=1,Gf=2,Wf=3,jf=4,Xf=5,qf=6,Yf=7,md=300,ps=301,fs=302,Xl=303,ql=304,Ma=306,Yl=1e3,Tr=1001,$l=1002,ei=1003,$f=1004,Eo=1005,li=1006,$a=1007,Cr=1008,hi=1009,gd=1010,vd=1011,qs=1012,Ic=1013,Pr=1014,Pi=1015,io=1016,Uc=1017,Nc=1018,Ys=1020,_d=35902,xd=1021,bd=1022,ti=1023,$s=1026,Ks=1027,yd=1028,Oc=1029,wd=1030,Fc=1031,kc=1033,Qo=33776,ta=33777,ea=33778,na=33779,Kl=35840,Zl=35841,Jl=35842,Ql=35843,tc=36196,ec=37492,nc=37496,ic=37808,rc=37809,sc=37810,oc=37811,ac=37812,lc=37813,cc=37814,uc=37815,hc=37816,dc=37817,pc=37818,fc=37819,mc=37820,gc=37821,ia=36492,vc=36494,_c=36495,Sd=36283,xc=36284,bc=36285,yc=36286,Kf=3200,Zf=3201,Ea=0,Jf=1,tr="",jn="srgb",ms="srgb-linear",ha="linear",Be="srgb",Gr=7680,Uu=519,Qf=512,tm=513,em=514,Md=515,nm=516,im=517,rm=518,sm=519,Nu=35044,Ou="300 es",Ri=2e3,da=2001;class Nr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,l=r.length;s<l;s++)r[s].call(this,t);t.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ra=Math.PI/180,pa=180/Math.PI;function ro(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[e&63|128]+_n[e>>8&255]+"-"+_n[e>>16&255]+_n[e>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function Se(n,t,e){return Math.max(t,Math.min(e,n))}function om(n,t){return(n%t+t)%t}function Ka(n,t,e){return(1-e)*n+e*t}function Us(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function An(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const am={DEG2RAD:ra};class he{constructor(t=0,e=0){he.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,l=this.y-t.y;return this.x=s*i-l*r+t.x,this.y=s*r+l*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(t,e,i,r,s,l,c,d,f){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,l,c,d,f)}set(t,e,i,r,s,l,c,d,f){const g=this.elements;return g[0]=t,g[1]=r,g[2]=c,g[3]=e,g[4]=s,g[5]=d,g[6]=i,g[7]=l,g[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,l=i[0],c=i[3],d=i[6],f=i[1],g=i[4],v=i[7],_=i[2],w=i[5],M=i[8],T=r[0],y=r[3],m=r[6],O=r[1],U=r[4],R=r[7],W=r[2],z=r[5],u=r[8];return s[0]=l*T+c*O+d*W,s[3]=l*y+c*U+d*z,s[6]=l*m+c*R+d*u,s[1]=f*T+g*O+v*W,s[4]=f*y+g*U+v*z,s[7]=f*m+g*R+v*u,s[2]=_*T+w*O+M*W,s[5]=_*y+w*U+M*z,s[8]=_*m+w*R+M*u,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],l=t[4],c=t[5],d=t[6],f=t[7],g=t[8];return e*l*g-e*c*f-i*s*g+i*c*d+r*s*f-r*l*d}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],l=t[4],c=t[5],d=t[6],f=t[7],g=t[8],v=g*l-c*f,_=c*d-g*s,w=f*s-l*d,M=e*v+i*_+r*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return t[0]=v*T,t[1]=(r*f-g*i)*T,t[2]=(c*i-r*l)*T,t[3]=_*T,t[4]=(g*e-r*d)*T,t[5]=(r*s-c*e)*T,t[6]=w*T,t[7]=(i*d-f*e)*T,t[8]=(l*e-i*s)*T,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,l,c){const d=Math.cos(s),f=Math.sin(s);return this.set(i*d,i*f,-i*(d*l+f*c)+l+t,-r*f,r*d,-r*(-f*l+d*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(Za.makeScale(t,e)),this}rotate(t){return this.premultiply(Za.makeRotation(-t)),this}translate(t,e){return this.premultiply(Za.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Za=new fe;function Ed(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function fa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lm(){const n=fa("canvas");return n.style.display="block",n}const Fu={};function sa(n){n in Fu||(Fu[n]=!0,console.warn(n))}function cm(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function um(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function hm(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ku=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bu=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dm(){const n={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(r,s,l){return this.enabled===!1||s===l||!s||!l||(this.spaces[s].transfer===Be&&(r.r=Li(r.r),r.g=Li(r.g),r.b=Li(r.b)),this.spaces[s].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Be&&(r.r=cs(r.r),r.g=cs(r.g),r.b=cs(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===tr?ha:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,l){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ms]:{primaries:t,whitePoint:i,transfer:ha,toXYZ:ku,fromXYZ:Bu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:t,whitePoint:i,transfer:Be,toXYZ:ku,fromXYZ:Bu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),n}const Ie=dm();function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Wr;class pm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Wr===void 0&&(Wr=fa("canvas")),Wr.width=t.width,Wr.height=t.height;const r=Wr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Wr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let l=0;l<s.length;l++)s[l]=Li(s[l]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Li(e[i]/255)*255):e[i]=Li(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fm=0;class Bc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=ro(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?s.push(Ja(r[l].image)):s.push(Ja(r[l]))}else s=Ja(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Ja(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mm=0;class In extends Nr{constructor(t=In.DEFAULT_IMAGE,e=In.DEFAULT_MAPPING,i=Tr,r=Tr,s=li,l=Cr,c=ti,d=hi,f=In.DEFAULT_ANISOTROPY,g=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=ro(),this.name="",this.source=new Bc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=l,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=d,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==md)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yl:t.x=t.x-Math.floor(t.x);break;case Tr:t.x=t.x<0?0:1;break;case $l:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yl:t.y=t.y-Math.floor(t.y);break;case Tr:t.y=t.y<0?0:1;break;case $l:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=md;In.DEFAULT_ANISOTROPY=1;class ze{constructor(t=0,e=0,i=0,r=1){ze.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*r+l[12]*s,this.y=l[1]*e+l[5]*i+l[9]*r+l[13]*s,this.z=l[2]*e+l[6]*i+l[10]*r+l[14]*s,this.w=l[3]*e+l[7]*i+l[11]*r+l[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const d=t.elements,f=d[0],g=d[4],v=d[8],_=d[1],w=d[5],M=d[9],T=d[2],y=d[6],m=d[10];if(Math.abs(g-_)<.01&&Math.abs(v-T)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+T)<.1&&Math.abs(M+y)<.1&&Math.abs(f+w+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const U=(f+1)/2,R=(w+1)/2,W=(m+1)/2,z=(g+_)/4,u=(v+T)/4,Y=(M+y)/4;return U>R&&U>W?U<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(U),r=z/i,s=u/i):R>W?R<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),i=z/r,s=Y/r):W<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(W),i=u/s,r=Y/s),this.set(i,r,s,e),this}let O=Math.sqrt((y-M)*(y-M)+(v-T)*(v-T)+(_-g)*(_-g));return Math.abs(O)<.001&&(O=1),this.x=(y-M)/O,this.y=(v-T)/O,this.z=(_-g)/O,this.w=Math.acos((f+w+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gm extends Nr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth?i.depth:1,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e);const r={width:t,height:e,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const s=new In(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const l=i.count;for(let c=0;c<l;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Bc(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends gm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Td extends In{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vm extends In{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ei,this.minFilter=ei,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class or{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,l,c){let d=i[r+0],f=i[r+1],g=i[r+2],v=i[r+3];const _=s[l+0],w=s[l+1],M=s[l+2],T=s[l+3];if(c===0){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(c===1){t[e+0]=_,t[e+1]=w,t[e+2]=M,t[e+3]=T;return}if(v!==T||d!==_||f!==w||g!==M){let y=1-c;const m=d*_+f*w+g*M+v*T,O=m>=0?1:-1,U=1-m*m;if(U>Number.EPSILON){const W=Math.sqrt(U),z=Math.atan2(W,m*O);y=Math.sin(y*z)/W,c=Math.sin(c*z)/W}const R=c*O;if(d=d*y+_*R,f=f*y+w*R,g=g*y+M*R,v=v*y+T*R,y===1-c){const W=1/Math.sqrt(d*d+f*f+g*g+v*v);d*=W,f*=W,g*=W,v*=W}}t[e]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v}static multiplyQuaternionsFlat(t,e,i,r,s,l){const c=i[r],d=i[r+1],f=i[r+2],g=i[r+3],v=s[l],_=s[l+1],w=s[l+2],M=s[l+3];return t[e]=c*M+g*v+d*w-f*_,t[e+1]=d*M+g*_+f*v-c*w,t[e+2]=f*M+g*w+c*_-d*v,t[e+3]=g*M-c*v-d*_-f*w,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,l=t._order,c=Math.cos,d=Math.sin,f=c(i/2),g=c(r/2),v=c(s/2),_=d(i/2),w=d(r/2),M=d(s/2);switch(l){case"XYZ":this._x=_*g*v+f*w*M,this._y=f*w*v-_*g*M,this._z=f*g*M+_*w*v,this._w=f*g*v-_*w*M;break;case"YXZ":this._x=_*g*v+f*w*M,this._y=f*w*v-_*g*M,this._z=f*g*M-_*w*v,this._w=f*g*v+_*w*M;break;case"ZXY":this._x=_*g*v-f*w*M,this._y=f*w*v+_*g*M,this._z=f*g*M+_*w*v,this._w=f*g*v-_*w*M;break;case"ZYX":this._x=_*g*v-f*w*M,this._y=f*w*v+_*g*M,this._z=f*g*M-_*w*v,this._w=f*g*v+_*w*M;break;case"YZX":this._x=_*g*v+f*w*M,this._y=f*w*v+_*g*M,this._z=f*g*M-_*w*v,this._w=f*g*v-_*w*M;break;case"XZY":this._x=_*g*v-f*w*M,this._y=f*w*v-_*g*M,this._z=f*g*M+_*w*v,this._w=f*g*v+_*w*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],l=e[1],c=e[5],d=e[9],f=e[2],g=e[6],v=e[10],_=i+c+v;if(_>0){const w=.5/Math.sqrt(_+1);this._w=.25/w,this._x=(g-d)*w,this._y=(s-f)*w,this._z=(l-r)*w}else if(i>c&&i>v){const w=2*Math.sqrt(1+i-c-v);this._w=(g-d)/w,this._x=.25*w,this._y=(r+l)/w,this._z=(s+f)/w}else if(c>v){const w=2*Math.sqrt(1+c-i-v);this._w=(s-f)/w,this._x=(r+l)/w,this._y=.25*w,this._z=(d+g)/w}else{const w=2*Math.sqrt(1+v-i-c);this._w=(l-r)/w,this._x=(s+f)/w,this._y=(d+g)/w,this._z=.25*w}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,l=t._w,c=e._x,d=e._y,f=e._z,g=e._w;return this._x=i*g+l*c+r*f-s*d,this._y=r*g+l*d+s*c-i*f,this._z=s*g+l*f+i*d-r*c,this._w=l*g-i*c-r*d-s*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,l=this._w;let c=l*t._w+i*t._x+r*t._y+s*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=l,this._x=i,this._y=r,this._z=s,this;const d=1-c*c;if(d<=Number.EPSILON){const w=1-e;return this._w=w*l+e*this._w,this._x=w*i+e*this._x,this._y=w*r+e*this._y,this._z=w*s+e*this._z,this.normalize(),this}const f=Math.sqrt(d),g=Math.atan2(f,c),v=Math.sin((1-e)*g)/f,_=Math.sin(e*g)/f;return this._w=l*v+this._w*_,this._x=i*v+this._x*_,this._y=r*v+this._y*_,this._z=s*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,i=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,l=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*l,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*l,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*l,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,l=t.y,c=t.z,d=t.w,f=2*(l*r-c*i),g=2*(c*e-s*r),v=2*(s*i-l*e);return this.x=e+d*f+l*v-c*g,this.y=i+d*g+c*f-s*v,this.z=r+d*v+s*g-l*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,l=e.x,c=e.y,d=e.z;return this.x=r*d-s*c,this.y=s*l-i*d,this.z=i*c-r*l,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Qa.copy(this).projectOnVector(t),this.sub(Qa)}reflect(t){return this.sub(Qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qa=new B,Vu=new or;class Dr{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let l=0,c=s.count;l<c;l++)t.isMesh===!0?t.getVertexPosition(l,Kn):Kn.fromBufferAttribute(s,l),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),To.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),To.copy(i.boundingBox)),To.applyMatrix4(t.matrixWorld),this.union(To)}const r=t.children;for(let s=0,l=r.length;s<l;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),Co.subVectors(this.max,Ns),jr.subVectors(t.a,Ns),Xr.subVectors(t.b,Ns),qr.subVectors(t.c,Ns),Wi.subVectors(Xr,jr),ji.subVectors(qr,Xr),pr.subVectors(jr,qr);let e=[0,-Wi.z,Wi.y,0,-ji.z,ji.y,0,-pr.z,pr.y,Wi.z,0,-Wi.x,ji.z,0,-ji.x,pr.z,0,-pr.x,-Wi.y,Wi.x,0,-ji.y,ji.x,0,-pr.y,pr.x,0];return!tl(e,jr,Xr,qr,Co)||(e=[1,0,0,0,1,0,0,0,1],!tl(e,jr,Xr,qr,Co))?!1:(Ao.crossVectors(Wi,ji),e=[Ao.x,Ao.y,Ao.z],tl(e,jr,Xr,qr,Co))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yi=[new B,new B,new B,new B,new B,new B,new B,new B],Kn=new B,To=new Dr,jr=new B,Xr=new B,qr=new B,Wi=new B,ji=new B,pr=new B,Ns=new B,Co=new B,Ao=new B,fr=new B;function tl(n,t,e,i,r){for(let s=0,l=n.length-3;s<=l;s+=3){fr.fromArray(n,s);const c=r.x*Math.abs(fr.x)+r.y*Math.abs(fr.y)+r.z*Math.abs(fr.z),d=t.dot(fr),f=e.dot(fr),g=i.dot(fr);if(Math.max(-Math.max(d,f,g),Math.min(d,f,g))>c)return!1}return!0}const _m=new Dr,Os=new B,el=new B;let Ta=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):_m.setFromPoints(t).getCenter(i);let r=0;for(let s=0,l=t.length;s<l;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Os.subVectors(t,this.center);const e=Os.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Os,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(el.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Os.copy(t.center).add(el)),this.expandByPoint(Os.copy(t.center).sub(el))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const wi=new B,nl=new B,Po=new B,Xi=new B,il=new B,Ro=new B,rl=new B;class Ca{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){nl.copy(t).add(e).multiplyScalar(.5),Po.copy(e).sub(t).normalize(),Xi.copy(this.origin).sub(nl);const s=t.distanceTo(e)*.5,l=-this.direction.dot(Po),c=Xi.dot(this.direction),d=-Xi.dot(Po),f=Xi.lengthSq(),g=Math.abs(1-l*l);let v,_,w,M;if(g>0)if(v=l*d-c,_=l*c-d,M=s*g,v>=0)if(_>=-M)if(_<=M){const T=1/g;v*=T,_*=T,w=v*(v+l*_+2*c)+_*(l*v+_+2*d)+f}else _=s,v=Math.max(0,-(l*_+c)),w=-v*v+_*(_+2*d)+f;else _=-s,v=Math.max(0,-(l*_+c)),w=-v*v+_*(_+2*d)+f;else _<=-M?(v=Math.max(0,-(-l*s+c)),_=v>0?-s:Math.min(Math.max(-s,-d),s),w=-v*v+_*(_+2*d)+f):_<=M?(v=0,_=Math.min(Math.max(-s,-d),s),w=_*(_+2*d)+f):(v=Math.max(0,-(l*s+c)),_=v>0?s:Math.min(Math.max(-s,-d),s),w=-v*v+_*(_+2*d)+f);else _=l>0?-s:s,v=Math.max(0,-(l*_+c)),w=-v*v+_*(_+2*d)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,v),r&&r.copy(nl).addScaledVector(Po,_),w}intersectSphere(t,e){wi.subVectors(t.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,s=t.radius*t.radius;if(r>s)return null;const l=Math.sqrt(s-r),c=i-l,d=i+l;return d<0?null:c<0?this.at(d,e):this.at(c,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,l,c,d;const f=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return f>=0?(i=(t.min.x-_.x)*f,r=(t.max.x-_.x)*f):(i=(t.max.x-_.x)*f,r=(t.min.x-_.x)*f),g>=0?(s=(t.min.y-_.y)*g,l=(t.max.y-_.y)*g):(s=(t.max.y-_.y)*g,l=(t.min.y-_.y)*g),i>l||s>r||((s>i||isNaN(i))&&(i=s),(l<r||isNaN(r))&&(r=l),v>=0?(c=(t.min.z-_.z)*v,d=(t.max.z-_.z)*v):(c=(t.max.z-_.z)*v,d=(t.min.z-_.z)*v),i>d||c>r)||((c>i||i!==i)&&(i=c),(d<r||r!==r)&&(r=d),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,i,r,s){il.subVectors(e,t),Ro.subVectors(i,t),rl.crossVectors(il,Ro);let l=this.direction.dot(rl),c;if(l>0){if(r)return null;c=1}else if(l<0)c=-1,l=-l;else return null;Xi.subVectors(this.origin,t);const d=c*this.direction.dot(Ro.crossVectors(Xi,Ro));if(d<0)return null;const f=c*this.direction.dot(il.cross(Xi));if(f<0||d+f>l)return null;const g=-c*Xi.dot(rl);return g<0?null:this.at(g/l,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(t,e,i,r,s,l,c,d,f,g,v,_,w,M,T,y){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,l,c,d,f,g,v,_,w,M,T,y)}set(t,e,i,r,s,l,c,d,f,g,v,_,w,M,T,y){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=r,m[1]=s,m[5]=l,m[9]=c,m[13]=d,m[2]=f,m[6]=g,m[10]=v,m[14]=_,m[3]=w,m[7]=M,m[11]=T,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Yr.setFromMatrixColumn(t,0).length(),s=1/Yr.setFromMatrixColumn(t,1).length(),l=1/Yr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*l,e[9]=i[9]*l,e[10]=i[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),f=Math.sin(r),g=Math.cos(s),v=Math.sin(s);if(t.order==="XYZ"){const _=l*g,w=l*v,M=c*g,T=c*v;e[0]=d*g,e[4]=-d*v,e[8]=f,e[1]=w+M*f,e[5]=_-T*f,e[9]=-c*d,e[2]=T-_*f,e[6]=M+w*f,e[10]=l*d}else if(t.order==="YXZ"){const _=d*g,w=d*v,M=f*g,T=f*v;e[0]=_+T*c,e[4]=M*c-w,e[8]=l*f,e[1]=l*v,e[5]=l*g,e[9]=-c,e[2]=w*c-M,e[6]=T+_*c,e[10]=l*d}else if(t.order==="ZXY"){const _=d*g,w=d*v,M=f*g,T=f*v;e[0]=_-T*c,e[4]=-l*v,e[8]=M+w*c,e[1]=w+M*c,e[5]=l*g,e[9]=T-_*c,e[2]=-l*f,e[6]=c,e[10]=l*d}else if(t.order==="ZYX"){const _=l*g,w=l*v,M=c*g,T=c*v;e[0]=d*g,e[4]=M*f-w,e[8]=_*f+T,e[1]=d*v,e[5]=T*f+_,e[9]=w*f-M,e[2]=-f,e[6]=c*d,e[10]=l*d}else if(t.order==="YZX"){const _=l*d,w=l*f,M=c*d,T=c*f;e[0]=d*g,e[4]=T-_*v,e[8]=M*v+w,e[1]=v,e[5]=l*g,e[9]=-c*g,e[2]=-f*g,e[6]=w*v+M,e[10]=_-T*v}else if(t.order==="XZY"){const _=l*d,w=l*f,M=c*d,T=c*f;e[0]=d*g,e[4]=-v,e[8]=f*g,e[1]=_*v+T,e[5]=l*g,e[9]=w*v-M,e[2]=M*v-w,e[6]=c*g,e[10]=T*v+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xm,t,bm)}lookAt(t,e,i){const r=this.elements;return Nn.subVectors(t,e),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),qi.crossVectors(i,Nn),qi.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),qi.crossVectors(i,Nn)),qi.normalize(),Do.crossVectors(Nn,qi),r[0]=qi.x,r[4]=Do.x,r[8]=Nn.x,r[1]=qi.y,r[5]=Do.y,r[9]=Nn.y,r[2]=qi.z,r[6]=Do.z,r[10]=Nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,l=i[0],c=i[4],d=i[8],f=i[12],g=i[1],v=i[5],_=i[9],w=i[13],M=i[2],T=i[6],y=i[10],m=i[14],O=i[3],U=i[7],R=i[11],W=i[15],z=r[0],u=r[4],Y=r[8],P=r[12],A=r[1],V=r[5],st=r[9],j=r[13],at=r[2],ft=r[6],ut=r[10],lt=r[14],nt=r[3],yt=r[7],Lt=r[11],Wt=r[15];return s[0]=l*z+c*A+d*at+f*nt,s[4]=l*u+c*V+d*ft+f*yt,s[8]=l*Y+c*st+d*ut+f*Lt,s[12]=l*P+c*j+d*lt+f*Wt,s[1]=g*z+v*A+_*at+w*nt,s[5]=g*u+v*V+_*ft+w*yt,s[9]=g*Y+v*st+_*ut+w*Lt,s[13]=g*P+v*j+_*lt+w*Wt,s[2]=M*z+T*A+y*at+m*nt,s[6]=M*u+T*V+y*ft+m*yt,s[10]=M*Y+T*st+y*ut+m*Lt,s[14]=M*P+T*j+y*lt+m*Wt,s[3]=O*z+U*A+R*at+W*nt,s[7]=O*u+U*V+R*ft+W*yt,s[11]=O*Y+U*st+R*ut+W*Lt,s[15]=O*P+U*j+R*lt+W*Wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],l=t[1],c=t[5],d=t[9],f=t[13],g=t[2],v=t[6],_=t[10],w=t[14],M=t[3],T=t[7],y=t[11],m=t[15];return M*(+s*d*v-r*f*v-s*c*_+i*f*_+r*c*w-i*d*w)+T*(+e*d*w-e*f*_+s*l*_-r*l*w+r*f*g-s*d*g)+y*(+e*f*v-e*c*w-s*l*v+i*l*w+s*c*g-i*f*g)+m*(-r*c*g-e*d*v+e*c*_+r*l*v-i*l*_+i*d*g)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],l=t[4],c=t[5],d=t[6],f=t[7],g=t[8],v=t[9],_=t[10],w=t[11],M=t[12],T=t[13],y=t[14],m=t[15],O=v*y*f-T*_*f+T*d*w-c*y*w-v*d*m+c*_*m,U=M*_*f-g*y*f-M*d*w+l*y*w+g*d*m-l*_*m,R=g*T*f-M*v*f+M*c*w-l*T*w-g*c*m+l*v*m,W=M*v*d-g*T*d-M*c*_+l*T*_+g*c*y-l*v*y,z=e*O+i*U+r*R+s*W;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const u=1/z;return t[0]=O*u,t[1]=(T*_*s-v*y*s-T*r*w+i*y*w+v*r*m-i*_*m)*u,t[2]=(c*y*s-T*d*s+T*r*f-i*y*f-c*r*m+i*d*m)*u,t[3]=(v*d*s-c*_*s-v*r*f+i*_*f+c*r*w-i*d*w)*u,t[4]=U*u,t[5]=(g*y*s-M*_*s+M*r*w-e*y*w-g*r*m+e*_*m)*u,t[6]=(M*d*s-l*y*s-M*r*f+e*y*f+l*r*m-e*d*m)*u,t[7]=(l*_*s-g*d*s+g*r*f-e*_*f-l*r*w+e*d*w)*u,t[8]=R*u,t[9]=(M*v*s-g*T*s-M*i*w+e*T*w+g*i*m-e*v*m)*u,t[10]=(l*T*s-M*c*s+M*i*f-e*T*f-l*i*m+e*c*m)*u,t[11]=(g*c*s-l*v*s-g*i*f+e*v*f+l*i*w-e*c*w)*u,t[12]=W*u,t[13]=(g*T*r-M*v*r+M*i*_-e*T*_-g*i*y+e*v*y)*u,t[14]=(M*c*r-l*T*r-M*i*d+e*T*d+l*i*y-e*c*y)*u,t[15]=(l*v*r-g*c*r+g*i*d-e*v*d-l*i*_+e*c*_)*u,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,l=t.x,c=t.y,d=t.z,f=s*l,g=s*c;return this.set(f*l+i,f*c-r*d,f*d+r*c,0,f*c+r*d,g*c+i,g*d-r*l,0,f*d-r*c,g*d+r*l,s*d*d+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,l){return this.set(1,i,s,0,t,1,l,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,l=e._y,c=e._z,d=e._w,f=s+s,g=l+l,v=c+c,_=s*f,w=s*g,M=s*v,T=l*g,y=l*v,m=c*v,O=d*f,U=d*g,R=d*v,W=i.x,z=i.y,u=i.z;return r[0]=(1-(T+m))*W,r[1]=(w+R)*W,r[2]=(M-U)*W,r[3]=0,r[4]=(w-R)*z,r[5]=(1-(_+m))*z,r[6]=(y+O)*z,r[7]=0,r[8]=(M+U)*u,r[9]=(y-O)*u,r[10]=(1-(_+T))*u,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Yr.set(r[0],r[1],r[2]).length();const l=Yr.set(r[4],r[5],r[6]).length(),c=Yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Zn.copy(this);const f=1/s,g=1/l,v=1/c;return Zn.elements[0]*=f,Zn.elements[1]*=f,Zn.elements[2]*=f,Zn.elements[4]*=g,Zn.elements[5]*=g,Zn.elements[6]*=g,Zn.elements[8]*=v,Zn.elements[9]*=v,Zn.elements[10]*=v,e.setFromRotationMatrix(Zn),i.x=s,i.y=l,i.z=c,this}makePerspective(t,e,i,r,s,l,c=Ri){const d=this.elements,f=2*s/(e-t),g=2*s/(i-r),v=(e+t)/(e-t),_=(i+r)/(i-r);let w,M;if(c===Ri)w=-(l+s)/(l-s),M=-2*l*s/(l-s);else if(c===da)w=-l/(l-s),M=-l*s/(l-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=f,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=w,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,r,s,l,c=Ri){const d=this.elements,f=1/(e-t),g=1/(i-r),v=1/(l-s),_=(e+t)*f,w=(i+r)*g;let M,T;if(c===Ri)M=(l+s)*v,T=-2*v;else if(c===da)M=s*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*f,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-w,d[2]=0,d[6]=0,d[10]=T,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Yr=new B,Zn=new Xe,xm=new B(0,0,0),bm=new B(1,1,1),qi=new B,Do=new B,Nn=new B,zu=new Xe,Hu=new or;class qn{constructor(t=0,e=0,i=0,r=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],l=r[4],c=r[8],d=r[1],f=r[5],g=r[9],v=r[2],_=r[6],w=r[10];switch(e){case"XYZ":this._y=Math.asin(Se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,w),this._z=Math.atan2(-l,s)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,w),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-v,s),this._z=0);break;case"ZXY":this._x=Math.asin(Se(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,w),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(d,s));break;case"ZYX":this._y=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,w),this._z=Math.atan2(d,s)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,f),this._y=Math.atan2(-v,s)):(this._x=0,this._y=Math.atan2(c,w));break;case"XZY":this._z=Math.asin(-Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-g,w),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return zu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hu.setFromEuler(this),this.setFromQuaternion(Hu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class Vc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ym=0;const Gu=new B,$r=new or,Si=new Xe,Lo=new B,Fs=new B,wm=new B,Sm=new or,Wu=new B(1,0,0),ju=new B(0,1,0),Xu=new B(0,0,1),qu={type:"added"},Mm={type:"removed"},Kr={type:"childadded",child:null},sl={type:"childremoved",child:null};class fn extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const t=new B,e=new qn,i=new or,r=new B(1,1,1);function s(){i.setFromEuler(e,!1)}function l(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xe},normalMatrix:{value:new fe}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $r.setFromAxisAngle(t,e),this.quaternion.multiply($r),this}rotateOnWorldAxis(t,e){return $r.setFromAxisAngle(t,e),this.quaternion.premultiply($r),this}rotateX(t){return this.rotateOnAxis(Wu,t)}rotateY(t){return this.rotateOnAxis(ju,t)}rotateZ(t){return this.rotateOnAxis(Xu,t)}translateOnAxis(t,e){return Gu.copy(t).applyQuaternion(this.quaternion),this.position.add(Gu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wu,t)}translateY(t){return this.translateOnAxis(ju,t)}translateZ(t){return this.translateOnAxis(Xu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Lo.copy(t):Lo.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Fs,Lo,this.up):Si.lookAt(Lo,Fs,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(Si),this.quaternion.premultiply($r.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qu),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mm),sl.child=t,this.dispatchEvent(sl),sl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qu),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const l=this.children[i].getObjectByProperty(t,e);if(l!==void 0)return l}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,l=r.length;s<l;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,t,wm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Sm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,l=r.length;s<l;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?{min:c.boundingBox.min.toArray(),max:c.boundingBox.max.toArray()}:void 0,boundingSphere:c.boundingSphere?{radius:c.boundingSphere.radius,center:c.boundingSphere.center.toArray()}:void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let f=0,g=d.length;f<g;f++){const v=d[f];s(t.shapes,v)}else s(t.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,f=this.material.length;d<f;d++)c.push(s(t.materials,this.material[d]));r.material=c}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];r.animations.push(s(t.animations,d))}}if(e){const c=l(t.geometries),d=l(t.materials),f=l(t.textures),g=l(t.images),v=l(t.shapes),_=l(t.skeletons),w=l(t.animations),M=l(t.nodes);c.length>0&&(i.geometries=c),d.length>0&&(i.materials=d),f.length>0&&(i.textures=f),g.length>0&&(i.images=g),v.length>0&&(i.shapes=v),_.length>0&&(i.skeletons=_),w.length>0&&(i.animations=w),M.length>0&&(i.nodes=M)}return i.object=r,i;function l(c){const d=[];for(const f in c){const g=c[f];delete g.metadata,d.push(g)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}fn.DEFAULT_UP=new B(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new B,Mi=new B,ol=new B,Ei=new B,Zr=new B,Jr=new B,Yu=new B,al=new B,ll=new B,cl=new B,ul=new ze,hl=new ze,dl=new ze;class Qn{constructor(t=new B,e=new B,i=new B){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Jn.subVectors(t,e),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Jn.subVectors(r,e),Mi.subVectors(i,e),ol.subVectors(t,e);const l=Jn.dot(Jn),c=Jn.dot(Mi),d=Jn.dot(ol),f=Mi.dot(Mi),g=Mi.dot(ol),v=l*f-c*c;if(v===0)return s.set(0,0,0),null;const _=1/v,w=(f*d-c*g)*_,M=(l*g-c*d)*_;return s.set(1-w-M,M,w)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,i,r,s,l,c,d){return this.getBarycoord(t,e,i,r,Ei)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(s,Ei.x),d.addScaledVector(l,Ei.y),d.addScaledVector(c,Ei.z),d)}static getInterpolatedAttribute(t,e,i,r,s,l){return ul.setScalar(0),hl.setScalar(0),dl.setScalar(0),ul.fromBufferAttribute(t,e),hl.fromBufferAttribute(t,i),dl.fromBufferAttribute(t,r),l.setScalar(0),l.addScaledVector(ul,s.x),l.addScaledVector(hl,s.y),l.addScaledVector(dl,s.z),l}static isFrontFacing(t,e,i,r){return Jn.subVectors(i,e),Mi.subVectors(t,e),Jn.cross(Mi).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Jn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Jn.cross(Mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Qn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Qn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let l,c;Zr.subVectors(r,i),Jr.subVectors(s,i),al.subVectors(t,i);const d=Zr.dot(al),f=Jr.dot(al);if(d<=0&&f<=0)return e.copy(i);ll.subVectors(t,r);const g=Zr.dot(ll),v=Jr.dot(ll);if(g>=0&&v<=g)return e.copy(r);const _=d*v-g*f;if(_<=0&&d>=0&&g<=0)return l=d/(d-g),e.copy(i).addScaledVector(Zr,l);cl.subVectors(t,s);const w=Zr.dot(cl),M=Jr.dot(cl);if(M>=0&&w<=M)return e.copy(s);const T=w*f-d*M;if(T<=0&&f>=0&&M<=0)return c=f/(f-M),e.copy(i).addScaledVector(Jr,c);const y=g*M-w*v;if(y<=0&&v-g>=0&&w-M>=0)return Yu.subVectors(s,r),c=(v-g)/(v-g+(w-M)),e.copy(r).addScaledVector(Yu,c);const m=1/(y+T+_);return l=T*m,c=_*m,e.copy(i).addScaledVector(Zr,l).addScaledVector(Jr,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Io={h:0,s:0,l:0};function pl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ce{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=jn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ie.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Ie.workingColorSpace){if(t=om(t,1),e=Se(e,0,1),i=Se(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,l=2*i-s;this.r=pl(l,s,t+1/3),this.g=pl(l,s,t),this.b=pl(l,s,t-1/3)}return Ie.toWorkingColorSpace(this,r),this}setStyle(t,e=jn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],l=s.length;if(l===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=jn){const i=Cd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=jn){return Ie.fromWorkingColorSpace(xn.copy(this),t),Math.round(Se(xn.r*255,0,255))*65536+Math.round(Se(xn.g*255,0,255))*256+Math.round(Se(xn.b*255,0,255))}getHexString(t=jn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ie.workingColorSpace){Ie.fromWorkingColorSpace(xn.copy(this),e);const i=xn.r,r=xn.g,s=xn.b,l=Math.max(i,r,s),c=Math.min(i,r,s);let d,f;const g=(c+l)/2;if(c===l)d=0,f=0;else{const v=l-c;switch(f=g<=.5?v/(l+c):v/(2-l-c),l){case i:d=(r-s)/v+(r<s?6:0);break;case r:d=(s-i)/v+2;break;case s:d=(i-r)/v+4;break}d/=6}return t.h=d,t.s=f,t.l=g,t}getRGB(t,e=Ie.workingColorSpace){return Ie.fromWorkingColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=jn){Ie.fromWorkingColorSpace(xn.copy(this),t);const e=xn.r,i=xn.g,r=xn.b;return t!==jn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+e,Yi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Yi),t.getHSL(Io);const i=Ka(Yi.h,Io.h,e),r=Ka(Yi.s,Io.s,e),s=Ka(Yi.l,Io.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new ce;ce.NAMES=Cd;let Em=0;class Oi extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=ro(),this.name="",this.type="Material",this.blending=ls,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=kl,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(i.blending=this.blending),this.side!==sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fl&&(i.blendSrc=this.blendSrc),this.blendDst!==kl&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const l=[];for(const c in s){const d=s[c];delete d.metadata,l.push(d)}return l}if(e){const s=r(t.textures),l=r(t.images);s.length>0&&(i.textures=s),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class zc extends Oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const nn=new B,Uo=new he;let Tm=0;class ui{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Nu,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Uo.fromBufferAttribute(this,e),Uo.applyMatrix3(t),this.setXY(e,Uo.x,Uo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Us(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=An(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Us(e,this.array)),e}setX(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Us(e,this.array)),e}setY(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Us(e,this.array)),e}setW(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),i=An(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),i=An(i,this.array),r=An(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),i=An(i,this.array),r=An(r,this.array),s=An(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Nu&&(t.usage=this.usage),t}}class Ad extends ui{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Pd extends ui{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Fn extends ui{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Cm=0;const Gn=new Xe,fl=new fn,Qr=new B,On=new Dr,ks=new Dr,pn=new B;class fi extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ed(t)?Pd:Ad)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new fe().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Gn.makeRotationFromQuaternion(t),this.applyMatrix4(Gn),this}rotateX(t){return Gn.makeRotationX(t),this.applyMatrix4(Gn),this}rotateY(t){return Gn.makeRotationY(t),this.applyMatrix4(Gn),this}rotateZ(t){return Gn.makeRotationZ(t),this.applyMatrix4(Gn),this}translate(t,e,i){return Gn.makeTranslation(t,e,i),this.applyMatrix4(Gn),this}scale(t,e,i){return Gn.makeScale(t,e,i),this.applyMatrix4(Gn),this}lookAt(t){return fl.lookAt(t),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const l=t[r];i.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Fn(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];On.setFromBufferAttribute(s),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ta);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const i=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let s=0,l=e.length;s<l;s++){const c=e[s];ks.setFromBufferAttribute(c),this.morphTargetsRelative?(pn.addVectors(On.min,ks.min),On.expandByPoint(pn),pn.addVectors(On.max,ks.max),On.expandByPoint(pn)):(On.expandByPoint(ks.min),On.expandByPoint(ks.max))}On.getCenter(i);let r=0;for(let s=0,l=t.count;s<l;s++)pn.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(pn));if(e)for(let s=0,l=e.length;s<l;s++){const c=e[s],d=this.morphTargetsRelative;for(let f=0,g=c.count;f<g;f++)pn.fromBufferAttribute(c,f),d&&(Qr.fromBufferAttribute(t,f),pn.add(Qr)),r=Math.max(r,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*i.count),4));const l=this.getAttribute("tangent"),c=[],d=[];for(let Y=0;Y<i.count;Y++)c[Y]=new B,d[Y]=new B;const f=new B,g=new B,v=new B,_=new he,w=new he,M=new he,T=new B,y=new B;function m(Y,P,A){f.fromBufferAttribute(i,Y),g.fromBufferAttribute(i,P),v.fromBufferAttribute(i,A),_.fromBufferAttribute(s,Y),w.fromBufferAttribute(s,P),M.fromBufferAttribute(s,A),g.sub(f),v.sub(f),w.sub(_),M.sub(_);const V=1/(w.x*M.y-M.x*w.y);isFinite(V)&&(T.copy(g).multiplyScalar(M.y).addScaledVector(v,-w.y).multiplyScalar(V),y.copy(v).multiplyScalar(w.x).addScaledVector(g,-M.x).multiplyScalar(V),c[Y].add(T),c[P].add(T),c[A].add(T),d[Y].add(y),d[P].add(y),d[A].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let Y=0,P=O.length;Y<P;++Y){const A=O[Y],V=A.start,st=A.count;for(let j=V,at=V+st;j<at;j+=3)m(t.getX(j+0),t.getX(j+1),t.getX(j+2))}const U=new B,R=new B,W=new B,z=new B;function u(Y){W.fromBufferAttribute(r,Y),z.copy(W);const P=c[Y];U.copy(P),U.sub(W.multiplyScalar(W.dot(P))).normalize(),R.crossVectors(z,P);const V=R.dot(d[Y])<0?-1:1;l.setXYZW(Y,U.x,U.y,U.z,V)}for(let Y=0,P=O.length;Y<P;++Y){const A=O[Y],V=A.start,st=A.count;for(let j=V,at=V+st;j<at;j+=3)u(t.getX(j+0)),u(t.getX(j+1)),u(t.getX(j+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ui(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let _=0,w=i.count;_<w;_++)i.setXYZ(_,0,0,0);const r=new B,s=new B,l=new B,c=new B,d=new B,f=new B,g=new B,v=new B;if(t)for(let _=0,w=t.count;_<w;_+=3){const M=t.getX(_+0),T=t.getX(_+1),y=t.getX(_+2);r.fromBufferAttribute(e,M),s.fromBufferAttribute(e,T),l.fromBufferAttribute(e,y),g.subVectors(l,s),v.subVectors(r,s),g.cross(v),c.fromBufferAttribute(i,M),d.fromBufferAttribute(i,T),f.fromBufferAttribute(i,y),c.add(g),d.add(g),f.add(g),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(T,d.x,d.y,d.z),i.setXYZ(y,f.x,f.y,f.z)}else for(let _=0,w=e.count;_<w;_+=3)r.fromBufferAttribute(e,_+0),s.fromBufferAttribute(e,_+1),l.fromBufferAttribute(e,_+2),g.subVectors(l,s),v.subVectors(r,s),g.cross(v),i.setXYZ(_+0,g.x,g.y,g.z),i.setXYZ(_+1,g.x,g.y,g.z),i.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)pn.fromBufferAttribute(t,e),pn.normalize(),t.setXYZ(e,pn.x,pn.y,pn.z)}toNonIndexed(){function t(c,d){const f=c.array,g=c.itemSize,v=c.normalized,_=new f.constructor(d.length*g);let w=0,M=0;for(let T=0,y=d.length;T<y;T++){c.isInterleavedBufferAttribute?w=d[T]*c.data.stride+c.offset:w=d[T]*g;for(let m=0;m<g;m++)_[M++]=f[w++]}return new ui(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fi,i=this.index.array,r=this.attributes;for(const c in r){const d=r[c],f=t(d,i);e.setAttribute(c,f)}const s=this.morphAttributes;for(const c in s){const d=[],f=s[c];for(let g=0,v=f.length;g<v;g++){const _=f[g],w=t(_,i);d.push(w)}e.morphAttributes[c]=d}e.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,d=l.length;c<d;c++){const f=l[c];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(t[f]=d[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const d in i){const f=i[d];t.data.attributes[d]=f.toJSON(t.data)}const r={};let s=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],g=[];for(let v=0,_=f.length;v<_;v++){const w=f[v];g.push(w.toJSON(t.data))}g.length>0&&(r[d]=g,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(t.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const f in r){const g=r[f];this.setAttribute(f,g.clone(e))}const s=t.morphAttributes;for(const f in s){const g=[],v=s[f];for(let _=0,w=v.length;_<w;_++)g.push(v[_].clone(e));this.morphAttributes[f]=g}this.morphTargetsRelative=t.morphTargetsRelative;const l=t.groups;for(let f=0,g=l.length;f<g;f++){const v=l[f];this.addGroup(v.start,v.count,v.materialIndex)}const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $u=new Xe,mr=new Ca,No=new Ta,Ku=new B,Oo=new B,Fo=new B,ko=new B,ml=new B,Bo=new B,Zu=new B,Vo=new B;class gn extends fn{constructor(t=new fi,e=new zc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=r.length;s<l;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,l=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const c=this.morphTargetInfluences;if(s&&c){Bo.set(0,0,0);for(let d=0,f=s.length;d<f;d++){const g=c[d],v=s[d];g!==0&&(ml.fromBufferAttribute(v,t),l?Bo.addScaledVector(ml,g):Bo.addScaledVector(ml.sub(e),g))}e.add(Bo)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(s),mr.copy(t.ray).recast(t.near),!(No.containsPoint(mr.origin)===!1&&(mr.intersectSphere(No,Ku)===null||mr.origin.distanceToSquared(Ku)>(t.far-t.near)**2))&&($u.copy(s).invert(),mr.copy(t.ray).applyMatrix4($u),!(i.boundingBox!==null&&mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,mr)))}_computeIntersections(t,e,i){let r;const s=this.geometry,l=this.material,c=s.index,d=s.attributes.position,f=s.attributes.uv,g=s.attributes.uv1,v=s.attributes.normal,_=s.groups,w=s.drawRange;if(c!==null)if(Array.isArray(l))for(let M=0,T=_.length;M<T;M++){const y=_[M],m=l[y.materialIndex],O=Math.max(y.start,w.start),U=Math.min(c.count,Math.min(y.start+y.count,w.start+w.count));for(let R=O,W=U;R<W;R+=3){const z=c.getX(R),u=c.getX(R+1),Y=c.getX(R+2);r=zo(this,m,t,i,f,g,v,z,u,Y),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=y.materialIndex,e.push(r))}}else{const M=Math.max(0,w.start),T=Math.min(c.count,w.start+w.count);for(let y=M,m=T;y<m;y+=3){const O=c.getX(y),U=c.getX(y+1),R=c.getX(y+2);r=zo(this,l,t,i,f,g,v,O,U,R),r&&(r.faceIndex=Math.floor(y/3),e.push(r))}}else if(d!==void 0)if(Array.isArray(l))for(let M=0,T=_.length;M<T;M++){const y=_[M],m=l[y.materialIndex],O=Math.max(y.start,w.start),U=Math.min(d.count,Math.min(y.start+y.count,w.start+w.count));for(let R=O,W=U;R<W;R+=3){const z=R,u=R+1,Y=R+2;r=zo(this,m,t,i,f,g,v,z,u,Y),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=y.materialIndex,e.push(r))}}else{const M=Math.max(0,w.start),T=Math.min(d.count,w.start+w.count);for(let y=M,m=T;y<m;y+=3){const O=y,U=y+1,R=y+2;r=zo(this,l,t,i,f,g,v,O,U,R),r&&(r.faceIndex=Math.floor(y/3),e.push(r))}}}}function Am(n,t,e,i,r,s,l,c){let d;if(t.side===Ln?d=i.intersectTriangle(l,s,r,!0,c):d=i.intersectTriangle(r,s,l,t.side===sr,c),d===null)return null;Vo.copy(c),Vo.applyMatrix4(n.matrixWorld);const f=e.ray.origin.distanceTo(Vo);return f<e.near||f>e.far?null:{distance:f,point:Vo.clone(),object:n}}function zo(n,t,e,i,r,s,l,c,d,f){n.getVertexPosition(c,Oo),n.getVertexPosition(d,Fo),n.getVertexPosition(f,ko);const g=Am(n,t,e,i,Oo,Fo,ko,Zu);if(g){const v=new B;Qn.getBarycoord(Zu,Oo,Fo,ko,v),r&&(g.uv=Qn.getInterpolatedAttribute(r,c,d,f,v,new he)),s&&(g.uv1=Qn.getInterpolatedAttribute(s,c,d,f,v,new he)),l&&(g.normal=Qn.getInterpolatedAttribute(l,c,d,f,v,new B),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));const _={a:c,b:d,c:f,normal:new B,materialIndex:0};Qn.getNormal(Oo,Fo,ko,_.normal),g.face=_,g.barycoord=v}return g}class _s extends fi{constructor(t=1,e=1,i=1,r=1,s=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:l};const c=this;r=Math.floor(r),s=Math.floor(s),l=Math.floor(l);const d=[],f=[],g=[],v=[];let _=0,w=0;M("z","y","x",-1,-1,i,e,t,l,s,0),M("z","y","x",1,-1,i,e,-t,l,s,1),M("x","z","y",1,1,t,i,e,r,l,2),M("x","z","y",1,-1,t,i,-e,r,l,3),M("x","y","z",1,-1,t,e,i,r,s,4),M("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(d),this.setAttribute("position",new Fn(f,3)),this.setAttribute("normal",new Fn(g,3)),this.setAttribute("uv",new Fn(v,2));function M(T,y,m,O,U,R,W,z,u,Y,P){const A=R/u,V=W/Y,st=R/2,j=W/2,at=z/2,ft=u+1,ut=Y+1;let lt=0,nt=0;const yt=new B;for(let Lt=0;Lt<ut;Lt++){const Wt=Lt*V-j;for(let Jt=0;Jt<ft;Jt++){const de=Jt*A-st;yt[T]=de*O,yt[y]=Wt*U,yt[m]=at,f.push(yt.x,yt.y,yt.z),yt[T]=0,yt[y]=0,yt[m]=z>0?1:-1,g.push(yt.x,yt.y,yt.z),v.push(Jt/u),v.push(1-Lt/Y),lt+=1}}for(let Lt=0;Lt<Y;Lt++)for(let Wt=0;Wt<u;Wt++){const Jt=_+Wt+ft*Lt,de=_+Wt+ft*(Lt+1),ct=_+(Wt+1)+ft*(Lt+1),bt=_+(Wt+1)+ft*Lt;d.push(Jt,de,bt),d.push(de,ct,bt),nt+=6}c.addGroup(w,nt,P),w+=nt,_+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function wn(n){const t={};for(let e=0;e<n.length;e++){const i=gs(n[e]);for(const r in i)t[r]=i[r]}return t}function Pm(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Rd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ie.workingColorSpace}const Rm={clone:gs,merge:wn};var Dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ar extends Oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dm,this.fragmentShader=Lm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=Pm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?e.uniforms[r]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[r]={type:"m4",value:l.toArray()}:e.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Dd extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new B,Ju=new he,Qu=new he;class Rn extends Dd{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=pa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pa*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,Ju,Qu),e.subVectors(Qu,Ju)}setViewOffset(t,e,i,r,s,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ra*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const d=l.fullWidth,f=l.fullHeight;s+=l.offsetX*r/d,e-=l.offsetY*i/f,r*=l.width/d,i*=l.height/f}const c=this.filmOffset;c!==0&&(s+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ts=-90,es=1;class Im extends fn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(ts,es,t,e);r.layers=this.layers,this.add(r);const s=new Rn(ts,es,t,e);s.layers=this.layers,this.add(s);const l=new Rn(ts,es,t,e);l.layers=this.layers,this.add(l);const c=new Rn(ts,es,t,e);c.layers=this.layers,this.add(c);const d=new Rn(ts,es,t,e);d.layers=this.layers,this.add(d);const f=new Rn(ts,es,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,l,c,d]=e;for(const f of e)this.remove(f);if(t===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===da)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,l,c,d,f,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,l),t.setRenderTarget(i,2,r),t.render(e,c),t.setRenderTarget(i,3,r),t.render(e,d),t.setRenderTarget(i,4,r),t.render(e,f),i.texture.generateMipmaps=T,t.setRenderTarget(i,5,r),t.render(e,g),t.setRenderTarget(v,_,w),t.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class Ld extends In{constructor(t=[],e=ps,i,r,s,l,c,d,f,g){super(t,e,i,r,s,l,c,d,f,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Um extends Rr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Ld(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:li}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _s(5,5,5),s=new ar({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ln,blending:nr});s.uniforms.tEquirect.value=e;const l=new gn(r,s),c=e.minFilter;return e.minFilter===Cr&&(e.minFilter=li),new Im(1,10,this).update(t,l),e.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,i,r);t.setRenderTarget(s)}}class Ho extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nm={type:"move"};class gl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,l=null;const c=this._targetRay,d=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){l=!0;for(const T of t.hand.values()){const y=e.getJointPose(T,i),m=this._getHandJoint(f,T);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}const g=f.joints["index-finger-tip"],v=f.joints["thumb-tip"],_=g.position.distanceTo(v.position),w=.02,M=.005;f.inputState.pinching&&_>w+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&_<=w-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Nm)))}return c!==null&&(c.visible=r!==null),d!==null&&(d.visible=s!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ho;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Om extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const vl=new B,Fm=new B,km=new fe;class Qi{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=vl.subVectors(i,e).cross(Fm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(vl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||km.getNormalMatrix(t),r=this.coplanarPoint(vl).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new Ta,Go=new B;class Hc{constructor(t=new Qi,e=new Qi,i=new Qi,r=new Qi,s=new Qi,l=new Qi){this.planes=[t,e,i,r,s,l]}set(t,e,i,r,s,l){const c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(i),c[3].copy(r),c[4].copy(s),c[5].copy(l),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ri){const i=this.planes,r=t.elements,s=r[0],l=r[1],c=r[2],d=r[3],f=r[4],g=r[5],v=r[6],_=r[7],w=r[8],M=r[9],T=r[10],y=r[11],m=r[12],O=r[13],U=r[14],R=r[15];if(i[0].setComponents(d-s,_-f,y-w,R-m).normalize(),i[1].setComponents(d+s,_+f,y+w,R+m).normalize(),i[2].setComponents(d+l,_+g,y+M,R+O).normalize(),i[3].setComponents(d-l,_-g,y-M,R-O).normalize(),i[4].setComponents(d-c,_-v,y-T,R-U).normalize(),e===Ri)i[5].setComponents(d+c,_+v,y+T,R+U).normalize();else if(e===da)i[5].setComponents(c,v,T,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(t){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(t.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Go.x=r.normal.x>0?t.max.x:t.min.x,Go.y=r.normal.y>0?t.max.y:t.min.y,Go.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Go)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Id extends Oi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ma=new B,ga=new B,th=new Xe,Bs=new Ca,Wo=new Ta,_l=new B,eh=new B;class Bm extends fn{constructor(t=new fi,e=new Id){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)ma.fromBufferAttribute(e,r-1),ga.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=ma.distanceTo(ga);t.setAttribute("lineDistance",new Fn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wo.copy(i.boundingSphere),Wo.applyMatrix4(r),Wo.radius+=s,t.ray.intersectsSphere(Wo)===!1)return;th.copy(r).invert(),Bs.copy(t.ray).applyMatrix4(th);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,f=this.isLineSegments?2:1,g=i.index,_=i.attributes.position;if(g!==null){const w=Math.max(0,l.start),M=Math.min(g.count,l.start+l.count);for(let T=w,y=M-1;T<y;T+=f){const m=g.getX(T),O=g.getX(T+1),U=jo(this,t,Bs,d,m,O,T);U&&e.push(U)}if(this.isLineLoop){const T=g.getX(M-1),y=g.getX(w),m=jo(this,t,Bs,d,T,y,M-1);m&&e.push(m)}}else{const w=Math.max(0,l.start),M=Math.min(_.count,l.start+l.count);for(let T=w,y=M-1;T<y;T+=f){const m=jo(this,t,Bs,d,T,T+1,T);m&&e.push(m)}if(this.isLineLoop){const T=jo(this,t,Bs,d,M-1,w,M-1);T&&e.push(T)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=r.length;s<l;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function jo(n,t,e,i,r,s,l){const c=n.geometry.attributes.position;if(ma.fromBufferAttribute(c,r),ga.fromBufferAttribute(c,s),e.distanceSqToSegment(ma,ga,_l,eh)>i)return;_l.applyMatrix4(n.matrixWorld);const f=t.ray.origin.distanceTo(_l);if(!(f<t.near||f>t.far))return{distance:f,point:eh.clone().applyMatrix4(n.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:n}}const nh=new B,ih=new B;class Vm extends Bm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)nh.fromBufferAttribute(e,r),ih.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+nh.distanceTo(ih);t.setAttribute("lineDistance",new Fn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ud extends In{constructor(t,e,i=Pr,r,s,l,c=ei,d=ei,f,g=$s){if(g!==$s&&g!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,l,c,d,g,i,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class so extends fi{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,l=e/2,c=Math.floor(i),d=Math.floor(r),f=c+1,g=d+1,v=t/c,_=e/d,w=[],M=[],T=[],y=[];for(let m=0;m<g;m++){const O=m*_-l;for(let U=0;U<f;U++){const R=U*v-s;M.push(R,-O,0),T.push(0,0,1),y.push(U/c),y.push(1-m/d)}}for(let m=0;m<d;m++)for(let O=0;O<c;O++){const U=O+f*m,R=O+f*(m+1),W=O+1+f*(m+1),z=O+1+f*m;w.push(U,R,z),w.push(R,W,z)}this.setIndex(w),this.setAttribute("position",new Fn(M,3)),this.setAttribute("normal",new Fn(T,3)),this.setAttribute("uv",new Fn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new so(t.width,t.height,t.widthSegments,t.heightSegments)}}class Aa extends fi{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:l,thetaLength:c},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const d=Math.min(l+c,Math.PI);let f=0;const g=[],v=new B,_=new B,w=[],M=[],T=[],y=[];for(let m=0;m<=i;m++){const O=[],U=m/i;let R=0;m===0&&l===0?R=.5/e:m===i&&d===Math.PI&&(R=-.5/e);for(let W=0;W<=e;W++){const z=W/e;v.x=-t*Math.cos(r+z*s)*Math.sin(l+U*c),v.y=t*Math.cos(l+U*c),v.z=t*Math.sin(r+z*s)*Math.sin(l+U*c),M.push(v.x,v.y,v.z),_.copy(v).normalize(),T.push(_.x,_.y,_.z),y.push(z+R,1-U),O.push(f++)}g.push(O)}for(let m=0;m<i;m++)for(let O=0;O<e;O++){const U=g[m][O+1],R=g[m][O],W=g[m+1][O],z=g[m+1][O+1];(m!==0||l>0)&&w.push(U,R,z),(m!==i-1||d<Math.PI)&&w.push(R,W,z)}this.setIndex(w),this.setAttribute("position",new Fn(M,3)),this.setAttribute("normal",new Fn(T,3)),this.setAttribute("uv",new Fn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Aa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class zm extends Oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ea,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wr extends Oi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ce(16777215),this.specular=new ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ea,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sr extends Oi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ea,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Hm extends Oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Gm extends Oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Nd extends fn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const xl=new Xe,rh=new B,sh=new B;class Od{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hc,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;rh.setFromMatrixPosition(t.matrixWorld),e.position.copy(rh),sh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sh),e.updateMatrixWorld(),xl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Wm extends Od{constructor(){super(new Rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=pa*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(i!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Xo extends Nd{constructor(t,e,i=0,r=Math.PI/3,s=0,l=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.distance=i,this.angle=r,this.penumbra=s,this.decay=l,this.map=null,this.shadow=new Wm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const oh=new Xe,Vs=new B,bl=new B;class jm extends Od{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new ze(2,1,1,1),new ze(0,1,1,1),new ze(3,1,1,1),new ze(1,1,1,1),new ze(3,0,1,1),new ze(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Vs.setFromMatrixPosition(t.matrixWorld),i.position.copy(Vs),bl.copy(i.position),bl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(bl),i.updateMatrixWorld(),r.makeTranslation(-Vs.x,-Vs.y,-Vs.z),oh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oh)}}class ah extends Nd{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new jm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Xm extends Dd{constructor(t=-1,e=1,i=1,r=-1,s=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,l=i+t,c=r+e,d=r-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,l=s+f*this.view.width,c-=g*this.view.offsetY,d=c-g*this.view.height}this.projectionMatrix.makeOrthographic(s,l,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class qm extends Rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Gc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=lh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function lh(){return performance.now()}const ch=new Xe;class Ym{constructor(t,e,i=0,r=1/0){this.ray=new Ca(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Vc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ch.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ch),this}intersectObject(t,e=!0,i=[]){return wc(t,this,i,e),i.sort(uh),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)wc(t[r],this,i,e);return i.sort(uh),i}}function uh(n,t){return n.distance-t.distance}function wc(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let l=0,c=s.length;l<c;l++)wc(s[l],t,e,!0)}}class hh{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Se(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Se(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const dh=new B;class yl extends fn{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const i=new fi,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let l=0,c=1,d=32;l<d;l++,c++){const f=l/d*Math.PI*2,g=c/d*Math.PI*2;r.push(Math.cos(f),Math.sin(f),1,Math.cos(g),Math.sin(g),1)}i.setAttribute("position",new Fn(r,3));const s=new Id({fog:!1,toneMapped:!1});this.cone=new Vm(i,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),dh.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(dh),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}class $m extends gn{constructor(t,e,i){const r=new Aa(e,4,2),s=new zc({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=t,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}class Km extends Nr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ph(n,t,e,i){const r=Zm(i);switch(e){case xd:return n*t;case yd:return n*t/r.components*r.byteLength;case Oc:return n*t/r.components*r.byteLength;case wd:return n*t*2/r.components*r.byteLength;case Fc:return n*t*2/r.components*r.byteLength;case bd:return n*t*3/r.components*r.byteLength;case ti:return n*t*4/r.components*r.byteLength;case kc:return n*t*4/r.components*r.byteLength;case Qo:case ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ea:case na:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Zl:case Ql:return Math.max(n,16)*Math.max(t,8)/4;case Kl:case Jl:return Math.max(n,8)*Math.max(t,8)/2;case tc:case ec:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case nc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case sc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case oc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ac:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case lc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case cc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case uc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case hc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case dc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case pc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case fc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case mc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case gc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ia:case vc:case _c:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Sd:case xc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case bc:case yc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zm(n){switch(n){case hi:case gd:return{byteLength:1,components:1};case qs:case vd:case io:return{byteLength:2,components:1};case Uc:case Nc:return{byteLength:2,components:4};case Pr:case Ic:case Pi:return{byteLength:4,components:1};case _d:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fd(){let n=null,t=!1,e=null,i=null;function r(s,l){e(s,l),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Jm(n){const t=new WeakMap;function e(c,d){const f=c.array,g=c.usage,v=f.byteLength,_=n.createBuffer();n.bindBuffer(d,_),n.bufferData(d,f,g),c.onUploadCallback();let w;if(f instanceof Float32Array)w=n.FLOAT;else if(f instanceof Uint16Array)c.isFloat16BufferAttribute?w=n.HALF_FLOAT:w=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)w=n.SHORT;else if(f instanceof Uint32Array)w=n.UNSIGNED_INT;else if(f instanceof Int32Array)w=n.INT;else if(f instanceof Int8Array)w=n.BYTE;else if(f instanceof Uint8Array)w=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)w=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:w,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:v}}function i(c,d,f){const g=d.array,v=d.updateRanges;if(n.bindBuffer(f,c),v.length===0)n.bufferSubData(f,0,g);else{v.sort((w,M)=>w.start-M.start);let _=0;for(let w=1;w<v.length;w++){const M=v[_],T=v[w];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++_,v[_]=T)}v.length=_+1;for(let w=0,M=v.length;w<M;w++){const T=v[w];n.bufferSubData(f,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=t.get(c);d&&(n.deleteBuffer(d.buffer),t.delete(c))}function l(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const g=t.get(c);(!g||g.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const f=t.get(c);if(f===void 0)t.set(c,e(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,c,d),f.version=c.version}}return{get:r,remove:s,update:l}}var Qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tg=`#ifdef USE_ALPHAHASH
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
#endif`,eg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ng=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ig=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sg=`#ifdef USE_AOMAP
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
#endif`,og=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ag=`#ifdef USE_BATCHING
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
#endif`,lg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ug=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dg=`#ifdef USE_IRIDESCENCE
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
#endif`,pg=`#ifdef USE_BUMPMAP
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
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
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
} // validated`,Sg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mg=`vec3 transformedNormal = objectNormal;
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
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ag=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
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
#endif`,Lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Ug=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ng=`#ifdef USE_ENVMAP
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
#endif`,Fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bg=`#ifdef USE_FOG
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
}`,zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wg=`uniform bool receiveShadow;
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
#endif`,jg=`#ifdef USE_ENVMAP
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
#endif`,Xg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kg=`PhysicalMaterial material;
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
#endif`,Zg=`struct PhysicalMaterial {
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
}`,Jg=`
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
#endif`,Qg=`#if defined( RE_IndirectDiffuse )
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
#endif`,tv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ev=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ov=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,av=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lv=`#if defined( USE_POINTS_UV )
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
#endif`,cv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fv=`#ifdef USE_MORPHTARGETS
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
#endif`,mv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_v=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yv=`#ifdef USE_NORMALMAP
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
#endif`,wv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ev=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Av=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ov=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fv=`float getShadowMask() {
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
}`,kv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bv=`#ifdef USE_SKINNING
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
#endif`,Vv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zv=`#ifdef USE_SKINNING
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
#endif`,Hv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xv=`#ifdef USE_TRANSMISSION
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
#endif`,qv=`#ifdef USE_TRANSMISSION
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
#endif`,Yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qv=`uniform sampler2D t2D;
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
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`#include <common>
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
}`,s_=`#if DEPTH_PACKING == 3200
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
}`,o_=`#define DISTANCE
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
}`,a_=`#define DISTANCE
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
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`uniform float scale;
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
}`,h_=`uniform vec3 diffuse;
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
}`,d_=`#include <common>
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
}`,p_=`uniform vec3 diffuse;
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
}`,f_=`#define LAMBERT
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
}`,m_=`#define LAMBERT
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
}`,g_=`#define MATCAP
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
}`,v_=`#define MATCAP
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
}`,__=`#define NORMAL
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
}`,x_=`#define NORMAL
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
}`,b_=`#define PHONG
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
}`,y_=`#define PHONG
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
}`,w_=`#define STANDARD
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
}`,S_=`#define STANDARD
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
}`,M_=`#define TOON
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
}`,E_=`#define TOON
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
}`,T_=`uniform float size;
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
}`,C_=`uniform vec3 diffuse;
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
}`,A_=`#include <common>
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
}`,P_=`uniform vec3 color;
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
}`,R_=`uniform float rotation;
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
}`,D_=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:Qm,alphahash_pars_fragment:tg,alphamap_fragment:eg,alphamap_pars_fragment:ng,alphatest_fragment:ig,alphatest_pars_fragment:rg,aomap_fragment:sg,aomap_pars_fragment:og,batching_pars_vertex:ag,batching_vertex:lg,begin_vertex:cg,beginnormal_vertex:ug,bsdfs:hg,iridescence_fragment:dg,bumpmap_pars_fragment:pg,clipping_planes_fragment:fg,clipping_planes_pars_fragment:mg,clipping_planes_pars_vertex:gg,clipping_planes_vertex:vg,color_fragment:_g,color_pars_fragment:xg,color_pars_vertex:bg,color_vertex:yg,common:wg,cube_uv_reflection_fragment:Sg,defaultnormal_vertex:Mg,displacementmap_pars_vertex:Eg,displacementmap_vertex:Tg,emissivemap_fragment:Cg,emissivemap_pars_fragment:Ag,colorspace_fragment:Pg,colorspace_pars_fragment:Rg,envmap_fragment:Dg,envmap_common_pars_fragment:Lg,envmap_pars_fragment:Ig,envmap_pars_vertex:Ug,envmap_physical_pars_fragment:jg,envmap_vertex:Ng,fog_vertex:Og,fog_pars_vertex:Fg,fog_fragment:kg,fog_pars_fragment:Bg,gradientmap_pars_fragment:Vg,lightmap_pars_fragment:zg,lights_lambert_fragment:Hg,lights_lambert_pars_fragment:Gg,lights_pars_begin:Wg,lights_toon_fragment:Xg,lights_toon_pars_fragment:qg,lights_phong_fragment:Yg,lights_phong_pars_fragment:$g,lights_physical_fragment:Kg,lights_physical_pars_fragment:Zg,lights_fragment_begin:Jg,lights_fragment_maps:Qg,lights_fragment_end:tv,logdepthbuf_fragment:ev,logdepthbuf_pars_fragment:nv,logdepthbuf_pars_vertex:iv,logdepthbuf_vertex:rv,map_fragment:sv,map_pars_fragment:ov,map_particle_fragment:av,map_particle_pars_fragment:lv,metalnessmap_fragment:cv,metalnessmap_pars_fragment:uv,morphinstance_vertex:hv,morphcolor_vertex:dv,morphnormal_vertex:pv,morphtarget_pars_vertex:fv,morphtarget_vertex:mv,normal_fragment_begin:gv,normal_fragment_maps:vv,normal_pars_fragment:_v,normal_pars_vertex:xv,normal_vertex:bv,normalmap_pars_fragment:yv,clearcoat_normal_fragment_begin:wv,clearcoat_normal_fragment_maps:Sv,clearcoat_pars_fragment:Mv,iridescence_pars_fragment:Ev,opaque_fragment:Tv,packing:Cv,premultiplied_alpha_fragment:Av,project_vertex:Pv,dithering_fragment:Rv,dithering_pars_fragment:Dv,roughnessmap_fragment:Lv,roughnessmap_pars_fragment:Iv,shadowmap_pars_fragment:Uv,shadowmap_pars_vertex:Nv,shadowmap_vertex:Ov,shadowmask_pars_fragment:Fv,skinbase_vertex:kv,skinning_pars_vertex:Bv,skinning_vertex:Vv,skinnormal_vertex:zv,specularmap_fragment:Hv,specularmap_pars_fragment:Gv,tonemapping_fragment:Wv,tonemapping_pars_fragment:jv,transmission_fragment:Xv,transmission_pars_fragment:qv,uv_pars_fragment:Yv,uv_pars_vertex:$v,uv_vertex:Kv,worldpos_vertex:Zv,background_vert:Jv,background_frag:Qv,backgroundCube_vert:t_,backgroundCube_frag:e_,cube_vert:n_,cube_frag:i_,depth_vert:r_,depth_frag:s_,distanceRGBA_vert:o_,distanceRGBA_frag:a_,equirect_vert:l_,equirect_frag:c_,linedashed_vert:u_,linedashed_frag:h_,meshbasic_vert:d_,meshbasic_frag:p_,meshlambert_vert:f_,meshlambert_frag:m_,meshmatcap_vert:g_,meshmatcap_frag:v_,meshnormal_vert:__,meshnormal_frag:x_,meshphong_vert:b_,meshphong_frag:y_,meshphysical_vert:w_,meshphysical_frag:S_,meshtoon_vert:M_,meshtoon_frag:E_,points_vert:T_,points_frag:C_,shadow_vert:A_,shadow_frag:P_,sprite_vert:R_,sprite_frag:D_},Et={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},ai={basic:{uniforms:wn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:wn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new ce(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:wn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:wn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:wn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new ce(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:wn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:wn([Et.points,Et.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:wn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:wn([Et.common,Et.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:wn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:wn([Et.sprite,Et.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:wn([Et.common,Et.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:wn([Et.lights,Et.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};ai.physical={uniforms:wn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const qo={r:0,b:0,g:0},vr=new qn,L_=new Xe;function I_(n,t,e,i,r,s,l){const c=new ce(0);let d=s===!0?0:1,f,g,v=null,_=0,w=null;function M(U){let R=U.isScene===!0?U.background:null;return R&&R.isTexture&&(R=(U.backgroundBlurriness>0?e:t).get(R)),R}function T(U){let R=!1;const W=M(U);W===null?m(c,d):W&&W.isColor&&(m(W,1),R=!0);const z=n.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,l),(n.autoClear||R)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(U,R){const W=M(R);W&&(W.isCubeTexture||W.mapping===Ma)?(g===void 0&&(g=new gn(new _s(1,1,1),new ar({name:"BackgroundCubeMaterial",uniforms:gs(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,u,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),vr.copy(R.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),g.material.uniforms.envMap.value=W,g.material.uniforms.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(L_.makeRotationFromEuler(vr)),g.material.toneMapped=Ie.getTransfer(W.colorSpace)!==Be,(v!==W||_!==W.version||w!==n.toneMapping)&&(g.material.needsUpdate=!0,v=W,_=W.version,w=n.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):W&&W.isTexture&&(f===void 0&&(f=new gn(new so(2,2),new ar({name:"BackgroundMaterial",uniforms:gs(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=W,f.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,f.material.toneMapped=Ie.getTransfer(W.colorSpace)!==Be,W.matrixAutoUpdate===!0&&W.updateMatrix(),f.material.uniforms.uvTransform.value.copy(W.matrix),(v!==W||_!==W.version||w!==n.toneMapping)&&(f.material.needsUpdate=!0,v=W,_=W.version,w=n.toneMapping),f.layers.enableAll(),U.unshift(f,f.geometry,f.material,0,0,null))}function m(U,R){U.getRGB(qo,Rd(n)),i.buffers.color.setClear(qo.r,qo.g,qo.b,R,l)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(U,R=1){c.set(U),d=R,m(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(U){d=U,m(c,d)},render:T,addToRenderList:y,dispose:O}}function U_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=_(null);let s=r,l=!1;function c(A,V,st,j,at){let ft=!1;const ut=v(j,st,V);s!==ut&&(s=ut,f(s.object)),ft=w(A,j,st,at),ft&&M(A,j,st,at),at!==null&&t.update(at,n.ELEMENT_ARRAY_BUFFER),(ft||l)&&(l=!1,R(A,V,st,j),at!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(at).buffer))}function d(){return n.createVertexArray()}function f(A){return n.bindVertexArray(A)}function g(A){return n.deleteVertexArray(A)}function v(A,V,st){const j=st.wireframe===!0;let at=i[A.id];at===void 0&&(at={},i[A.id]=at);let ft=at[V.id];ft===void 0&&(ft={},at[V.id]=ft);let ut=ft[j];return ut===void 0&&(ut=_(d()),ft[j]=ut),ut}function _(A){const V=[],st=[],j=[];for(let at=0;at<e;at++)V[at]=0,st[at]=0,j[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:st,attributeDivisors:j,object:A,attributes:{},index:null}}function w(A,V,st,j){const at=s.attributes,ft=V.attributes;let ut=0;const lt=st.getAttributes();for(const nt in lt)if(lt[nt].location>=0){const Lt=at[nt];let Wt=ft[nt];if(Wt===void 0&&(nt==="instanceMatrix"&&A.instanceMatrix&&(Wt=A.instanceMatrix),nt==="instanceColor"&&A.instanceColor&&(Wt=A.instanceColor)),Lt===void 0||Lt.attribute!==Wt||Wt&&Lt.data!==Wt.data)return!0;ut++}return s.attributesNum!==ut||s.index!==j}function M(A,V,st,j){const at={},ft=V.attributes;let ut=0;const lt=st.getAttributes();for(const nt in lt)if(lt[nt].location>=0){let Lt=ft[nt];Lt===void 0&&(nt==="instanceMatrix"&&A.instanceMatrix&&(Lt=A.instanceMatrix),nt==="instanceColor"&&A.instanceColor&&(Lt=A.instanceColor));const Wt={};Wt.attribute=Lt,Lt&&Lt.data&&(Wt.data=Lt.data),at[nt]=Wt,ut++}s.attributes=at,s.attributesNum=ut,s.index=j}function T(){const A=s.newAttributes;for(let V=0,st=A.length;V<st;V++)A[V]=0}function y(A){m(A,0)}function m(A,V){const st=s.newAttributes,j=s.enabledAttributes,at=s.attributeDivisors;st[A]=1,j[A]===0&&(n.enableVertexAttribArray(A),j[A]=1),at[A]!==V&&(n.vertexAttribDivisor(A,V),at[A]=V)}function O(){const A=s.newAttributes,V=s.enabledAttributes;for(let st=0,j=V.length;st<j;st++)V[st]!==A[st]&&(n.disableVertexAttribArray(st),V[st]=0)}function U(A,V,st,j,at,ft,ut){ut===!0?n.vertexAttribIPointer(A,V,st,at,ft):n.vertexAttribPointer(A,V,st,j,at,ft)}function R(A,V,st,j){T();const at=j.attributes,ft=st.getAttributes(),ut=V.defaultAttributeValues;for(const lt in ft){const nt=ft[lt];if(nt.location>=0){let yt=at[lt];if(yt===void 0&&(lt==="instanceMatrix"&&A.instanceMatrix&&(yt=A.instanceMatrix),lt==="instanceColor"&&A.instanceColor&&(yt=A.instanceColor)),yt!==void 0){const Lt=yt.normalized,Wt=yt.itemSize,Jt=t.get(yt);if(Jt===void 0)continue;const de=Jt.buffer,ct=Jt.type,bt=Jt.bytesPerElement,kt=ct===n.INT||ct===n.UNSIGNED_INT||yt.gpuType===Ic;if(yt.isInterleavedBufferAttribute){const St=yt.data,Bt=St.stride,oe=yt.offset;if(St.isInstancedInterleavedBuffer){for(let zt=0;zt<nt.locationSize;zt++)m(nt.location+zt,St.meshPerAttribute);A.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let zt=0;zt<nt.locationSize;zt++)y(nt.location+zt);n.bindBuffer(n.ARRAY_BUFFER,de);for(let zt=0;zt<nt.locationSize;zt++)U(nt.location+zt,Wt/nt.locationSize,ct,Lt,Bt*bt,(oe+Wt/nt.locationSize*zt)*bt,kt)}else{if(yt.isInstancedBufferAttribute){for(let St=0;St<nt.locationSize;St++)m(nt.location+St,yt.meshPerAttribute);A.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let St=0;St<nt.locationSize;St++)y(nt.location+St);n.bindBuffer(n.ARRAY_BUFFER,de);for(let St=0;St<nt.locationSize;St++)U(nt.location+St,Wt/nt.locationSize,ct,Lt,Wt*bt,Wt/nt.locationSize*St*bt,kt)}}else if(ut!==void 0){const Lt=ut[lt];if(Lt!==void 0)switch(Lt.length){case 2:n.vertexAttrib2fv(nt.location,Lt);break;case 3:n.vertexAttrib3fv(nt.location,Lt);break;case 4:n.vertexAttrib4fv(nt.location,Lt);break;default:n.vertexAttrib1fv(nt.location,Lt)}}}}O()}function W(){Y();for(const A in i){const V=i[A];for(const st in V){const j=V[st];for(const at in j)g(j[at].object),delete j[at];delete V[st]}delete i[A]}}function z(A){if(i[A.id]===void 0)return;const V=i[A.id];for(const st in V){const j=V[st];for(const at in j)g(j[at].object),delete j[at];delete V[st]}delete i[A.id]}function u(A){for(const V in i){const st=i[V];if(st[A.id]===void 0)continue;const j=st[A.id];for(const at in j)g(j[at].object),delete j[at];delete st[A.id]}}function Y(){P(),l=!0,s!==r&&(s=r,f(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:Y,resetDefaultState:P,dispose:W,releaseStatesOfGeometry:z,releaseStatesOfProgram:u,initAttributes:T,enableAttribute:y,disableUnusedAttributes:O}}function N_(n,t,e){let i;function r(f){i=f}function s(f,g){n.drawArrays(i,f,g),e.update(g,i,1)}function l(f,g,v){v!==0&&(n.drawArraysInstanced(i,f,g,v),e.update(g,i,v))}function c(f,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,g,0,v);let w=0;for(let M=0;M<v;M++)w+=g[M];e.update(w,i,1)}function d(f,g,v,_){if(v===0)return;const w=t.get("WEBGL_multi_draw");if(w===null)for(let M=0;M<f.length;M++)l(f[M],g[M],_[M]);else{w.multiDrawArraysInstancedWEBGL(i,f,0,g,0,_,0,v);let M=0;for(let T=0;T<v;T++)M+=g[T]*_[T];e.update(M,i,1)}}this.setMode=r,this.render=s,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function O_(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const u=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(u.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(u){return!(u!==ti&&i.convert(u)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(u){const Y=u===io&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(u!==hi&&i.convert(u)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&u!==Pi&&!Y)}function d(u){if(u==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";u="mediump"}return u==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp";const g=d(f);g!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",g,"instead."),f=g);const v=e.logarithmicDepthBuffer===!0,_=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),w=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),O=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),U=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),W=M>0,z=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:d,textureFormatReadable:l,textureTypeReadable:c,precision:f,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:w,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:R,vertexTextures:W,maxSamples:z}}function F_(n){const t=this;let e=null,i=0,r=!1,s=!1;const l=new Qi,c=new fe,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const w=v.length!==0||_||i!==0||r;return r=_,i=v.length,w},this.beginShadows=function(){s=!0,g(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(v,_){e=g(v,_,0)},this.setState=function(v,_,w){const M=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,m=n.get(v);if(!r||M===null||M.length===0||s&&!y)s?g(null):f();else{const O=s?0:i,U=O*4;let R=m.clippingState||null;d.value=R,R=g(M,_,U,w);for(let W=0;W!==U;++W)R[W]=e[W];m.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function f(){d.value!==e&&(d.value=e,d.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function g(v,_,w,M){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=d.value,M!==!0||y===null){const m=w+T*4,O=_.matrixWorldInverse;c.getNormalMatrix(O),(y===null||y.length<m)&&(y=new Float32Array(m));for(let U=0,R=w;U!==T;++U,R+=4)l.copy(v[U]).applyMatrix4(O,c),l.normal.toArray(y,R),y[R+3]=l.constant}d.value=y,d.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,y}}function k_(n){let t=new WeakMap;function e(l,c){return c===Xl?l.mapping=ps:c===ql&&(l.mapping=fs),l}function i(l){if(l&&l.isTexture){const c=l.mapping;if(c===Xl||c===ql)if(t.has(l)){const d=t.get(l).texture;return e(d,l.mapping)}else{const d=l.image;if(d&&d.height>0){const f=new Um(d.height);return f.fromEquirectangularTexture(n,l),t.set(l,f),l.addEventListener("dispose",r),e(f.texture,l.mapping)}else return null}}return l}function r(l){const c=l.target;c.removeEventListener("dispose",r);const d=t.get(c);d!==void 0&&(t.delete(c),d.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const os=4,fh=[.125,.215,.35,.446,.526,.582],Mr=20,wl=new Xm,mh=new ce;let Sl=null,Ml=0,El=0,Tl=!1;const br=(1+Math.sqrt(5))/2,ns=1/br,gh=[new B(-br,ns,0),new B(br,ns,0),new B(-ns,0,br),new B(ns,0,br),new B(0,br,-ns),new B(0,br,ns),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],B_=new B;class vh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:l=256,position:c=B_}=s;Sl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,i,r,d,c),e>0&&this._blur(d,0,0,e),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sl,Ml,El),this._renderer.xr.enabled=Tl,t.scissorTest=!1,Yo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ps||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:li,minFilter:li,generateMipmaps:!1,type:io,format:ti,colorSpace:ms,depthBuffer:!1},r=_h(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_h(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=V_(s)),this._blurMaterial=z_(s,t,e)}return r}_compileMaterial(t){const e=new gn(this._lodPlanes[0],t);this._renderer.compile(e,wl)}_sceneToCubeUV(t,e,i,r,s){const d=new Rn(90,1,e,i),f=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,w=v.toneMapping;v.getClearColor(mh),v.toneMapping=ir,v.autoClear=!1;const M=new zc({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),T=new gn(new _s,M);let y=!1;const m=t.background;m?m.isColor&&(M.color.copy(m),t.background=null,y=!0):(M.color.copy(mh),y=!0);for(let O=0;O<6;O++){const U=O%3;U===0?(d.up.set(0,f[O],0),d.position.set(s.x,s.y,s.z),d.lookAt(s.x+g[O],s.y,s.z)):U===1?(d.up.set(0,0,f[O]),d.position.set(s.x,s.y,s.z),d.lookAt(s.x,s.y+g[O],s.z)):(d.up.set(0,f[O],0),d.position.set(s.x,s.y,s.z),d.lookAt(s.x,s.y,s.z+g[O]));const R=this._cubeSize;Yo(r,U*R,O>2?R:0,R,R),v.setRenderTarget(r),y&&v.render(T,d),v.render(t,d)}T.geometry.dispose(),T.material.dispose(),v.toneMapping=w,v.autoClear=_,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===ps||t.mapping===fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xh());const s=r?this._cubemapMaterial:this._equirectMaterial,l=new gn(this._lodPlanes[0],s),c=s.uniforms;c.envMap.value=t;const d=this._cubeSize;Yo(e,0,0,3*d,2*d),i.setRenderTarget(e),i.render(l,wl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const l=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=gh[(r-s-1)%gh.length];this._blur(t,s-1,s,l,c)}e.autoClear=i}_blur(t,e,i,r,s){const l=this._pingPongRenderTarget;this._halfBlur(t,l,e,i,r,"latitudinal",s),this._halfBlur(l,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,l,c){const d=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new gn(this._lodPlanes[r],f),_=f.uniforms,w=this._sizeLods[i]-1,M=isFinite(s)?Math.PI/(2*w):2*Math.PI/(2*Mr-1),T=s/M,y=isFinite(s)?1+Math.floor(g*T):Mr;y>Mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Mr}`);const m=[];let O=0;for(let u=0;u<Mr;++u){const Y=u/T,P=Math.exp(-Y*Y/2);m.push(P),u===0?O+=P:u<y&&(O+=2*P)}for(let u=0;u<m.length;u++)m[u]=m[u]/O;_.envMap.value=t.texture,_.samples.value=y,_.weights.value=m,_.latitudinal.value=l==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:U}=this;_.dTheta.value=M,_.mipInt.value=U-i;const R=this._sizeLods[r],W=3*R*(r>U-os?r-U+os:0),z=4*(this._cubeSize-R);Yo(e,W,z,3*R,2*R),d.setRenderTarget(e),d.render(v,wl)}}function V_(n){const t=[],e=[],i=[];let r=n;const s=n-os+1+fh.length;for(let l=0;l<s;l++){const c=Math.pow(2,r);e.push(c);let d=1/c;l>n-os?d=fh[l-n+os-1]:l===0&&(d=0),i.push(d);const f=1/(c-2),g=-f,v=1+f,_=[g,g,v,g,v,v,g,g,v,v,g,v],w=6,M=6,T=3,y=2,m=1,O=new Float32Array(T*M*w),U=new Float32Array(y*M*w),R=new Float32Array(m*M*w);for(let z=0;z<w;z++){const u=z%3*2/3-1,Y=z>2?0:-1,P=[u,Y,0,u+2/3,Y,0,u+2/3,Y+1,0,u,Y,0,u+2/3,Y+1,0,u,Y+1,0];O.set(P,T*M*z),U.set(_,y*M*z);const A=[z,z,z,z,z,z];R.set(A,m*M*z)}const W=new fi;W.setAttribute("position",new ui(O,T)),W.setAttribute("uv",new ui(U,y)),W.setAttribute("faceIndex",new ui(R,m)),t.push(W),r>os&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function _h(n,t,e){const i=new Rr(n,t,e);return i.texture.mapping=Ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yo(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function z_(n,t,e){const i=new Float32Array(Mr),r=new B(0,1,0);return new ar({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function xh(){return new ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function bh(){return new ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Wc(){return`

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
	`}function H_(n){let t=new WeakMap,e=null;function i(c){if(c&&c.isTexture){const d=c.mapping,f=d===Xl||d===ql,g=d===ps||d===fs;if(f||g){let v=t.get(c);const _=v!==void 0?v.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==_)return e===null&&(e=new vh(n)),v=f?e.fromEquirectangular(c,v):e.fromCubemap(c,v),v.texture.pmremVersion=c.pmremVersion,t.set(c,v),v.texture;if(v!==void 0)return v.texture;{const w=c.image;return f&&w&&w.height>0||g&&w&&r(w)?(e===null&&(e=new vh(n)),v=f?e.fromEquirectangular(c):e.fromCubemap(c),v.texture.pmremVersion=c.pmremVersion,t.set(c,v),c.addEventListener("dispose",s),v.texture):null}}}return c}function r(c){let d=0;const f=6;for(let g=0;g<f;g++)c[g]!==void 0&&d++;return d===f}function s(c){const d=c.target;d.removeEventListener("dispose",s);const f=t.get(d);f!==void 0&&(t.delete(d),f.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:l}}function G_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&sa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function W_(n,t,e,i){const r={},s=new WeakMap;function l(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const M in _.attributes)t.remove(_.attributes[M]);_.removeEventListener("dispose",l),delete r[_.id];const w=s.get(_);w&&(t.remove(w),s.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(v,_){return r[_.id]===!0||(_.addEventListener("dispose",l),r[_.id]=!0,e.memory.geometries++),_}function d(v){const _=v.attributes;for(const w in _)t.update(_[w],n.ARRAY_BUFFER)}function f(v){const _=[],w=v.index,M=v.attributes.position;let T=0;if(w!==null){const O=w.array;T=w.version;for(let U=0,R=O.length;U<R;U+=3){const W=O[U+0],z=O[U+1],u=O[U+2];_.push(W,z,z,u,u,W)}}else if(M!==void 0){const O=M.array;T=M.version;for(let U=0,R=O.length/3-1;U<R;U+=3){const W=U+0,z=U+1,u=U+2;_.push(W,z,z,u,u,W)}}else return;const y=new(Ed(_)?Pd:Ad)(_,1);y.version=T;const m=s.get(v);m&&t.remove(m),s.set(v,y)}function g(v){const _=s.get(v);if(_){const w=v.index;w!==null&&_.version<w.version&&f(v)}else f(v);return s.get(v)}return{get:c,update:d,getWireframeAttribute:g}}function j_(n,t,e){let i;function r(_){i=_}let s,l;function c(_){s=_.type,l=_.bytesPerElement}function d(_,w){n.drawElements(i,w,s,_*l),e.update(w,i,1)}function f(_,w,M){M!==0&&(n.drawElementsInstanced(i,w,s,_*l,M),e.update(w,i,M))}function g(_,w,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,w,0,s,_,0,M);let y=0;for(let m=0;m<M;m++)y+=w[m];e.update(y,i,1)}function v(_,w,M,T){if(M===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<_.length;m++)f(_[m]/l,w[m],T[m]);else{y.multiDrawElementsInstancedWEBGL(i,w,0,s,_,0,T,0,M);let m=0;for(let O=0;O<M;O++)m+=w[O]*T[O];e.update(m,i,1)}}this.setMode=r,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function X_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,l,c){switch(e.calls++,l){case n.TRIANGLES:e.triangles+=c*(s/3);break;case n.LINES:e.lines+=c*(s/2);break;case n.LINE_STRIP:e.lines+=c*(s-1);break;case n.LINE_LOOP:e.lines+=c*s;break;case n.POINTS:e.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function q_(n,t,e){const i=new WeakMap,r=new ze;function s(l,c,d){const f=l.morphTargetInfluences,g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=g!==void 0?g.length:0;let _=i.get(c);if(_===void 0||_.count!==v){let A=function(){Y.dispose(),i.delete(c),c.removeEventListener("dispose",A)};var w=A;_!==void 0&&_.texture.dispose();const M=c.morphAttributes.position!==void 0,T=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,m=c.morphAttributes.position||[],O=c.morphAttributes.normal||[],U=c.morphAttributes.color||[];let R=0;M===!0&&(R=1),T===!0&&(R=2),y===!0&&(R=3);let W=c.attributes.position.count*R,z=1;W>t.maxTextureSize&&(z=Math.ceil(W/t.maxTextureSize),W=t.maxTextureSize);const u=new Float32Array(W*z*4*v),Y=new Td(u,W,z,v);Y.type=Pi,Y.needsUpdate=!0;const P=R*4;for(let V=0;V<v;V++){const st=m[V],j=O[V],at=U[V],ft=W*z*4*V;for(let ut=0;ut<st.count;ut++){const lt=ut*P;M===!0&&(r.fromBufferAttribute(st,ut),u[ft+lt+0]=r.x,u[ft+lt+1]=r.y,u[ft+lt+2]=r.z,u[ft+lt+3]=0),T===!0&&(r.fromBufferAttribute(j,ut),u[ft+lt+4]=r.x,u[ft+lt+5]=r.y,u[ft+lt+6]=r.z,u[ft+lt+7]=0),y===!0&&(r.fromBufferAttribute(at,ut),u[ft+lt+8]=r.x,u[ft+lt+9]=r.y,u[ft+lt+10]=r.z,u[ft+lt+11]=at.itemSize===4?r.w:1)}}_={count:v,texture:Y,size:new he(W,z)},i.set(c,_),c.addEventListener("dispose",A)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",l.morphTexture,e);else{let M=0;for(let y=0;y<f.length;y++)M+=f[y];const T=c.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",T),d.getUniforms().setValue(n,"morphTargetInfluences",f)}d.getUniforms().setValue(n,"morphTargetsTexture",_.texture,e),d.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}return{update:s}}function Y_(n,t,e,i){let r=new WeakMap;function s(d){const f=i.render.frame,g=d.geometry,v=t.get(d,g);if(r.get(v)!==f&&(t.update(v),r.set(v,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),r.get(d)!==f&&(e.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,n.ARRAY_BUFFER),r.set(d,f))),d.isSkinnedMesh){const _=d.skeleton;r.get(_)!==f&&(_.update(),r.set(_,f))}return v}function l(){r=new WeakMap}function c(d){const f=d.target;f.removeEventListener("dispose",c),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:s,dispose:l}}const kd=new In,yh=new Ud(1,1),Bd=new Td,Vd=new vm,zd=new Ld,wh=[],Sh=[],Mh=new Float32Array(16),Eh=new Float32Array(9),Th=new Float32Array(4);function xs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=wh[r];if(s===void 0&&(s=new Float32Array(r),wh[r]=s),t!==0){i.toArray(s,0);for(let l=1,c=0;l!==t;++l)c+=e,n[l].toArray(s,c)}return s}function cn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function un(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Pa(n,t){let e=Sh[t];e===void 0&&(e=new Int32Array(t),Sh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function $_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function K_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2fv(this.addr,t),un(e,t)}}function Z_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;n.uniform3fv(this.addr,t),un(e,t)}}function J_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4fv(this.addr,t),un(e,t)}}function Q_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),un(e,t)}else{if(cn(e,i))return;Th.set(i),n.uniformMatrix2fv(this.addr,!1,Th),un(e,i)}}function t0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),un(e,t)}else{if(cn(e,i))return;Eh.set(i),n.uniformMatrix3fv(this.addr,!1,Eh),un(e,i)}}function e0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(cn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),un(e,t)}else{if(cn(e,i))return;Mh.set(i),n.uniformMatrix4fv(this.addr,!1,Mh),un(e,i)}}function n0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function i0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2iv(this.addr,t),un(e,t)}}function r0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;n.uniform3iv(this.addr,t),un(e,t)}}function s0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4iv(this.addr,t),un(e,t)}}function o0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function a0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;n.uniform2uiv(this.addr,t),un(e,t)}}function l0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;n.uniform3uiv(this.addr,t),un(e,t)}}function c0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;n.uniform4uiv(this.addr,t),un(e,t)}}function u0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(yh.compareFunction=Md,s=yh):s=kd,e.setTexture2D(t||s,r)}function h0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Vd,r)}function d0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||zd,r)}function p0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Bd,r)}function f0(n){switch(n){case 5126:return $_;case 35664:return K_;case 35665:return Z_;case 35666:return J_;case 35674:return Q_;case 35675:return t0;case 35676:return e0;case 5124:case 35670:return n0;case 35667:case 35671:return i0;case 35668:case 35672:return r0;case 35669:case 35673:return s0;case 5125:return o0;case 36294:return a0;case 36295:return l0;case 36296:return c0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return p0}}function m0(n,t){n.uniform1fv(this.addr,t)}function g0(n,t){const e=xs(t,this.size,2);n.uniform2fv(this.addr,e)}function v0(n,t){const e=xs(t,this.size,3);n.uniform3fv(this.addr,e)}function _0(n,t){const e=xs(t,this.size,4);n.uniform4fv(this.addr,e)}function x0(n,t){const e=xs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function b0(n,t){const e=xs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function y0(n,t){const e=xs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function w0(n,t){n.uniform1iv(this.addr,t)}function S0(n,t){n.uniform2iv(this.addr,t)}function M0(n,t){n.uniform3iv(this.addr,t)}function E0(n,t){n.uniform4iv(this.addr,t)}function T0(n,t){n.uniform1uiv(this.addr,t)}function C0(n,t){n.uniform2uiv(this.addr,t)}function A0(n,t){n.uniform3uiv(this.addr,t)}function P0(n,t){n.uniform4uiv(this.addr,t)}function R0(n,t,e){const i=this.cache,r=t.length,s=Pa(e,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let l=0;l!==r;++l)e.setTexture2D(t[l]||kd,s[l])}function D0(n,t,e){const i=this.cache,r=t.length,s=Pa(e,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let l=0;l!==r;++l)e.setTexture3D(t[l]||Vd,s[l])}function L0(n,t,e){const i=this.cache,r=t.length,s=Pa(e,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let l=0;l!==r;++l)e.setTextureCube(t[l]||zd,s[l])}function I0(n,t,e){const i=this.cache,r=t.length,s=Pa(e,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let l=0;l!==r;++l)e.setTexture2DArray(t[l]||Bd,s[l])}function U0(n){switch(n){case 5126:return m0;case 35664:return g0;case 35665:return v0;case 35666:return _0;case 35674:return x0;case 35675:return b0;case 35676:return y0;case 5124:case 35670:return w0;case 35667:case 35671:return S0;case 35668:case 35672:return M0;case 35669:case 35673:return E0;case 5125:return T0;case 36294:return C0;case 36295:return A0;case 36296:return P0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return D0;case 35680:case 36300:case 36308:case 36293:return L0;case 36289:case 36303:case 36311:case 36292:return I0}}class N0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=f0(e.type)}}class O0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=U0(e.type)}}class F0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,l=r.length;s!==l;++s){const c=r[s];c.setValue(t,e[c.id],i)}}}const Cl=/(\w+)(\])?(\[|\.)?/g;function Ch(n,t){n.seq.push(t),n.map[t.id]=t}function k0(n,t,e){const i=n.name,r=i.length;for(Cl.lastIndex=0;;){const s=Cl.exec(i),l=Cl.lastIndex;let c=s[1];const d=s[2]==="]",f=s[3];if(d&&(c=c|0),f===void 0||f==="["&&l+2===r){Ch(e,f===void 0?new N0(c,n,t):new O0(c,n,t));break}else{let v=e.map[c];v===void 0&&(v=new F0(c),Ch(e,v)),e=v}}}class oa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),l=t.getUniformLocation(e,s.name);k0(s,l,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,l=e.length;s!==l;++s){const c=e[s],d=i[c.id];d.needsUpdate!==!1&&c.setValue(t,d.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const l=t[r];l.id in e&&i.push(l)}return i}}function Ah(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const B0=37297;let V0=0;function z0(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let l=r;l<s;l++){const c=l+1;i.push(`${c===t?">":" "} ${c}: ${e[l]}`)}return i.join(`
`)}const Ph=new fe;function H0(n){Ie._getMatrix(Ph,Ie.workingColorSpace,n);const t=`mat3( ${Ph.elements.map(e=>e.toFixed(4))} )`;switch(Ie.getTransfer(n)){case ha:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Rh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const l=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+z0(n.getShaderSource(t),l)}else return r}function G0(n,t){const e=H0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function W0(n,t){let e;switch(t){case Hf:e="Linear";break;case Gf:e="Reinhard";break;case Wf:e="Cineon";break;case jf:e="ACESFilmic";break;case qf:e="AgX";break;case Yf:e="Neutral";break;case Xf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $o=new B;function j0(){Ie.getLuminanceCoefficients($o);const n=$o.x.toFixed(4),t=$o.y.toFixed(4),e=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function q0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Y0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),l=s.name;let c=1;s.type===n.FLOAT_MAT2&&(c=2),s.type===n.FLOAT_MAT3&&(c=3),s.type===n.FLOAT_MAT4&&(c=4),e[l]={type:s.type,location:n.getAttribLocation(t,l),locationSize:c}}return e}function Xs(n){return n!==""}function Dh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sc(n){return n.replace($0,Z0)}const K0=new Map;function Z0(n,t){let e=ge[t];if(e===void 0){const i=K0.get(t);if(i!==void 0)e=ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Sc(e)}const J0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ih(n){return n.replace(J0,Q0)}function Q0(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Uh(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function tx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===yf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ci&&(t="SHADOWMAP_TYPE_VSM"),t}function ex(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ps:case fs:t="ENVMAP_TYPE_CUBE";break;case Ma:t="ENVMAP_TYPE_CUBE_UV";break}return t}function nx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case fs:t="ENVMAP_MODE_REFRACTION";break}return t}function ix(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Sa:t="ENVMAP_BLENDING_MULTIPLY";break;case Vf:t="ENVMAP_BLENDING_MIX";break;case zf:t="ENVMAP_BLENDING_ADD";break}return t}function rx(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function sx(n,t,e,i){const r=n.getContext(),s=e.defines;let l=e.vertexShader,c=e.fragmentShader;const d=tx(e),f=ex(e),g=nx(e),v=ix(e),_=rx(e),w=X0(e),M=q0(s),T=r.createProgram();let y,m,O=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Xs).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Xs).join(`
`),m.length>0&&(m+=`
`)):(y=[Uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+g:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),m=[Uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+g:"",e.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ir?"#define TONE_MAPPING":"",e.toneMapping!==ir?ge.tonemapping_pars_fragment:"",e.toneMapping!==ir?W0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,G0("linearToOutputTexel",e.outputColorSpace),j0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xs).join(`
`)),l=Sc(l),l=Dh(l,e),l=Lh(l,e),c=Sc(c),c=Dh(c,e),c=Lh(c,e),l=Ih(l),c=Ih(c),e.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[w,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===Ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const U=O+y+l,R=O+m+c,W=Ah(r,r.VERTEX_SHADER,U),z=Ah(r,r.FRAGMENT_SHADER,R);r.attachShader(T,W),r.attachShader(T,z),e.index0AttributeName!==void 0?r.bindAttribLocation(T,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function u(V){if(n.debug.checkShaderErrors){const st=r.getProgramInfoLog(T).trim(),j=r.getShaderInfoLog(W).trim(),at=r.getShaderInfoLog(z).trim();let ft=!0,ut=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(ft=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,T,W,z);else{const lt=Rh(r,W,"vertex"),nt=Rh(r,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+st+`
`+lt+`
`+nt)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(j===""||at==="")&&(ut=!1);ut&&(V.diagnostics={runnable:ft,programLog:st,vertexShader:{log:j,prefix:y},fragmentShader:{log:at,prefix:m}})}r.deleteShader(W),r.deleteShader(z),Y=new oa(r,T),P=Y0(r,T)}let Y;this.getUniforms=function(){return Y===void 0&&u(this),Y};let P;this.getAttributes=function(){return P===void 0&&u(this),P};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(T,B0)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=V0++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=W,this.fragmentShader=z,this}let ox=0;class ax{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),l=this._getShaderCacheForMaterial(t);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new lx(t),e.set(t,i)),i}}class lx{constructor(t){this.id=ox++,this.code=t,this.usedTimes=0}}function cx(n,t,e,i,r,s,l){const c=new Vc,d=new ax,f=new Set,g=[],v=r.logarithmicDepthBuffer,_=r.vertexTextures;let w=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return f.add(P),P===0?"uv":`uv${P}`}function y(P,A,V,st,j){const at=st.fog,ft=j.geometry,ut=P.isMeshStandardMaterial?st.environment:null,lt=(P.isMeshStandardMaterial?e:t).get(P.envMap||ut),nt=lt&&lt.mapping===Ma?lt.image.height:null,yt=M[P.type];P.precision!==null&&(w=r.getMaxPrecision(P.precision),w!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",w,"instead."));const Lt=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Wt=Lt!==void 0?Lt.length:0;let Jt=0;ft.morphAttributes.position!==void 0&&(Jt=1),ft.morphAttributes.normal!==void 0&&(Jt=2),ft.morphAttributes.color!==void 0&&(Jt=3);let de,ct,bt,kt;if(yt){const Ne=ai[yt];de=Ne.vertexShader,ct=Ne.fragmentShader}else de=P.vertexShader,ct=P.fragmentShader,d.update(P),bt=d.getVertexShaderID(P),kt=d.getFragmentShaderID(P);const St=n.getRenderTarget(),Bt=n.state.buffers.depth.getReversed(),oe=j.isInstancedMesh===!0,zt=j.isBatchedMesh===!0,He=!!P.map,gt=!!P.matcap,ue=!!lt,F=!!P.aoMap,Qe=!!P.lightMap,pe=!!P.bumpMap,te=!!P.normalMap,Ut=!!P.displacementMap,Pe=!!P.emissiveMap,Ht=!!P.metalnessMap,L=!!P.roughnessMap,E=P.anisotropy>0,$=P.clearcoat>0,ht=P.dispersion>0,K=P.iridescence>0,ot=P.sheen>0,Vt=P.transmission>0,Ct=E&&!!P.anisotropyMap,Qt=$&&!!P.clearcoatMap,ee=$&&!!P.clearcoatNormalMap,_t=$&&!!P.clearcoatRoughnessMap,Nt=K&&!!P.iridescenceMap,jt=K&&!!P.iridescenceThicknessMap,$t=ot&&!!P.sheenColorMap,It=ot&&!!P.sheenRoughnessMap,Me=!!P.specularMap,ae=!!P.specularColorMap,Fe=!!P.specularIntensityMap,G=Vt&&!!P.transmissionMap,At=Vt&&!!P.thicknessMap,rt=!!P.gradientMap,mt=!!P.alphaMap,Pt=P.alphaTest>0,Tt=!!P.alphaHash,Yt=!!P.extensions;let xe=ir;P.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(xe=n.toneMapping);const tn={shaderID:yt,shaderType:P.type,shaderName:P.name,vertexShader:de,fragmentShader:ct,defines:P.defines,customVertexShaderID:bt,customFragmentShaderID:kt,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:w,batching:zt,batchingColor:zt&&j._colorsTexture!==null,instancing:oe,instancingColor:oe&&j.instanceColor!==null,instancingMorph:oe&&j.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:St===null?n.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:ms,alphaToCoverage:!!P.alphaToCoverage,map:He,matcap:gt,envMap:ue,envMapMode:ue&&lt.mapping,envMapCubeUVHeight:nt,aoMap:F,lightMap:Qe,bumpMap:pe,normalMap:te,displacementMap:_&&Ut,emissiveMap:Pe,normalMapObjectSpace:te&&P.normalMapType===Jf,normalMapTangentSpace:te&&P.normalMapType===Ea,metalnessMap:Ht,roughnessMap:L,anisotropy:E,anisotropyMap:Ct,clearcoat:$,clearcoatMap:Qt,clearcoatNormalMap:ee,clearcoatRoughnessMap:_t,dispersion:ht,iridescence:K,iridescenceMap:Nt,iridescenceThicknessMap:jt,sheen:ot,sheenColorMap:$t,sheenRoughnessMap:It,specularMap:Me,specularColorMap:ae,specularIntensityMap:Fe,transmission:Vt,transmissionMap:G,thicknessMap:At,gradientMap:rt,opaque:P.transparent===!1&&P.blending===ls&&P.alphaToCoverage===!1,alphaMap:mt,alphaTest:Pt,alphaHash:Tt,combine:P.combine,mapUv:He&&T(P.map.channel),aoMapUv:F&&T(P.aoMap.channel),lightMapUv:Qe&&T(P.lightMap.channel),bumpMapUv:pe&&T(P.bumpMap.channel),normalMapUv:te&&T(P.normalMap.channel),displacementMapUv:Ut&&T(P.displacementMap.channel),emissiveMapUv:Pe&&T(P.emissiveMap.channel),metalnessMapUv:Ht&&T(P.metalnessMap.channel),roughnessMapUv:L&&T(P.roughnessMap.channel),anisotropyMapUv:Ct&&T(P.anisotropyMap.channel),clearcoatMapUv:Qt&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:ee&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:It&&T(P.sheenRoughnessMap.channel),specularMapUv:Me&&T(P.specularMap.channel),specularColorMapUv:ae&&T(P.specularColorMap.channel),specularIntensityMapUv:Fe&&T(P.specularIntensityMap.channel),transmissionMapUv:G&&T(P.transmissionMap.channel),thicknessMapUv:At&&T(P.thicknessMap.channel),alphaMapUv:mt&&T(P.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(te||E),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!ft.attributes.uv&&(He||mt),fog:!!at,useFog:P.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Bt,skinning:j.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:Wt,morphTextureStride:Jt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:P.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:xe,decodeVideoTexture:He&&P.map.isVideoTexture===!0&&Ie.getTransfer(P.map.colorSpace)===Be,decodeVideoTextureEmissive:Pe&&P.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(P.emissiveMap.colorSpace)===Be,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Ai,flipSided:P.side===Ln,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Yt&&P.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&P.extensions.multiDraw===!0||zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return tn.vertexUv1s=f.has(1),tn.vertexUv2s=f.has(2),tn.vertexUv3s=f.has(3),f.clear(),tn}function m(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const V in P.defines)A.push(V),A.push(P.defines[V]);return P.isRawShaderMaterial===!1&&(O(A,P),U(A,P),A.push(n.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function O(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function U(P,A){c.disableAll(),A.supportsVertexTextures&&c.enable(0),A.instancing&&c.enable(1),A.instancingColor&&c.enable(2),A.instancingMorph&&c.enable(3),A.matcap&&c.enable(4),A.envMap&&c.enable(5),A.normalMapObjectSpace&&c.enable(6),A.normalMapTangentSpace&&c.enable(7),A.clearcoat&&c.enable(8),A.iridescence&&c.enable(9),A.alphaTest&&c.enable(10),A.vertexColors&&c.enable(11),A.vertexAlphas&&c.enable(12),A.vertexUv1s&&c.enable(13),A.vertexUv2s&&c.enable(14),A.vertexUv3s&&c.enable(15),A.vertexTangents&&c.enable(16),A.anisotropy&&c.enable(17),A.alphaHash&&c.enable(18),A.batching&&c.enable(19),A.dispersion&&c.enable(20),A.batchingColor&&c.enable(21),P.push(c.mask),c.disableAll(),A.fog&&c.enable(0),A.useFog&&c.enable(1),A.flatShading&&c.enable(2),A.logarithmicDepthBuffer&&c.enable(3),A.reverseDepthBuffer&&c.enable(4),A.skinning&&c.enable(5),A.morphTargets&&c.enable(6),A.morphNormals&&c.enable(7),A.morphColors&&c.enable(8),A.premultipliedAlpha&&c.enable(9),A.shadowMapEnabled&&c.enable(10),A.doubleSided&&c.enable(11),A.flipSided&&c.enable(12),A.useDepthPacking&&c.enable(13),A.dithering&&c.enable(14),A.transmission&&c.enable(15),A.sheen&&c.enable(16),A.opaque&&c.enable(17),A.pointsUvs&&c.enable(18),A.decodeVideoTexture&&c.enable(19),A.decodeVideoTextureEmissive&&c.enable(20),A.alphaToCoverage&&c.enable(21),P.push(c.mask)}function R(P){const A=M[P.type];let V;if(A){const st=ai[A];V=Rm.clone(st.uniforms)}else V=P.uniforms;return V}function W(P,A){let V;for(let st=0,j=g.length;st<j;st++){const at=g[st];if(at.cacheKey===A){V=at,++V.usedTimes;break}}return V===void 0&&(V=new sx(n,A,P,s),g.push(V)),V}function z(P){if(--P.usedTimes===0){const A=g.indexOf(P);g[A]=g[g.length-1],g.pop(),P.destroy()}}function u(P){d.remove(P)}function Y(){d.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:R,acquireProgram:W,releaseProgram:z,releaseShaderCache:u,programs:g,dispose:Y}}function ux(){let n=new WeakMap;function t(l){return n.has(l)}function e(l){let c=n.get(l);return c===void 0&&(c={},n.set(l,c)),c}function i(l){n.delete(l)}function r(l,c,d){n.get(l)[c]=d}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function hx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Nh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Oh(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function l(v,_,w,M,T,y){let m=n[t];return m===void 0?(m={id:v.id,object:v,geometry:_,material:w,groupOrder:M,renderOrder:v.renderOrder,z:T,group:y},n[t]=m):(m.id=v.id,m.object=v,m.geometry=_,m.material=w,m.groupOrder=M,m.renderOrder=v.renderOrder,m.z=T,m.group=y),t++,m}function c(v,_,w,M,T,y){const m=l(v,_,w,M,T,y);w.transmission>0?i.push(m):w.transparent===!0?r.push(m):e.push(m)}function d(v,_,w,M,T,y){const m=l(v,_,w,M,T,y);w.transmission>0?i.unshift(m):w.transparent===!0?r.unshift(m):e.unshift(m)}function f(v,_){e.length>1&&e.sort(v||hx),i.length>1&&i.sort(_||Nh),r.length>1&&r.sort(_||Nh)}function g(){for(let v=t,_=n.length;v<_;v++){const w=n[v];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:c,unshift:d,finish:g,sort:f}}function dx(){let n=new WeakMap;function t(i,r){const s=n.get(i);let l;return s===void 0?(l=new Oh,n.set(i,[l])):r>=s.length?(l=new Oh,s.push(l)):l=s[r],l}function e(){n=new WeakMap}return{get:t,dispose:e}}function px(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new ce};break;case"SpotLight":e={position:new B,direction:new B,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new B,halfWidth:new B,halfHeight:new B};break}return n[t.id]=e,e}}}function fx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let mx=0;function gx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function vx(n){const t=new px,e=fx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new B);const r=new B,s=new Xe,l=new Xe;function c(f){let g=0,v=0,_=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let w=0,M=0,T=0,y=0,m=0,O=0,U=0,R=0,W=0,z=0,u=0;f.sort(gx);for(let P=0,A=f.length;P<A;P++){const V=f[P],st=V.color,j=V.intensity,at=V.distance,ft=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=st.r*j,v+=st.g*j,_+=st.b*j;else if(V.isLightProbe){for(let ut=0;ut<9;ut++)i.probe[ut].addScaledVector(V.sh.coefficients[ut],j);u++}else if(V.isDirectionalLight){const ut=t.get(V);if(ut.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const lt=V.shadow,nt=e.get(V);nt.shadowIntensity=lt.intensity,nt.shadowBias=lt.bias,nt.shadowNormalBias=lt.normalBias,nt.shadowRadius=lt.radius,nt.shadowMapSize=lt.mapSize,i.directionalShadow[w]=nt,i.directionalShadowMap[w]=ft,i.directionalShadowMatrix[w]=V.shadow.matrix,O++}i.directional[w]=ut,w++}else if(V.isSpotLight){const ut=t.get(V);ut.position.setFromMatrixPosition(V.matrixWorld),ut.color.copy(st).multiplyScalar(j),ut.distance=at,ut.coneCos=Math.cos(V.angle),ut.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ut.decay=V.decay,i.spot[T]=ut;const lt=V.shadow;if(V.map&&(i.spotLightMap[W]=V.map,W++,lt.updateMatrices(V),V.castShadow&&z++),i.spotLightMatrix[T]=lt.matrix,V.castShadow){const nt=e.get(V);nt.shadowIntensity=lt.intensity,nt.shadowBias=lt.bias,nt.shadowNormalBias=lt.normalBias,nt.shadowRadius=lt.radius,nt.shadowMapSize=lt.mapSize,i.spotShadow[T]=nt,i.spotShadowMap[T]=ft,R++}T++}else if(V.isRectAreaLight){const ut=t.get(V);ut.color.copy(st).multiplyScalar(j),ut.halfWidth.set(V.width*.5,0,0),ut.halfHeight.set(0,V.height*.5,0),i.rectArea[y]=ut,y++}else if(V.isPointLight){const ut=t.get(V);if(ut.color.copy(V.color).multiplyScalar(V.intensity),ut.distance=V.distance,ut.decay=V.decay,V.castShadow){const lt=V.shadow,nt=e.get(V);nt.shadowIntensity=lt.intensity,nt.shadowBias=lt.bias,nt.shadowNormalBias=lt.normalBias,nt.shadowRadius=lt.radius,nt.shadowMapSize=lt.mapSize,nt.shadowCameraNear=lt.camera.near,nt.shadowCameraFar=lt.camera.far,i.pointShadow[M]=nt,i.pointShadowMap[M]=ft,i.pointShadowMatrix[M]=V.shadow.matrix,U++}i.point[M]=ut,M++}else if(V.isHemisphereLight){const ut=t.get(V);ut.skyColor.copy(V.color).multiplyScalar(j),ut.groundColor.copy(V.groundColor).multiplyScalar(j),i.hemi[m]=ut,m++}}y>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Et.LTC_FLOAT_1,i.rectAreaLTC2=Et.LTC_FLOAT_2):(i.rectAreaLTC1=Et.LTC_HALF_1,i.rectAreaLTC2=Et.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=v,i.ambient[2]=_;const Y=i.hash;(Y.directionalLength!==w||Y.pointLength!==M||Y.spotLength!==T||Y.rectAreaLength!==y||Y.hemiLength!==m||Y.numDirectionalShadows!==O||Y.numPointShadows!==U||Y.numSpotShadows!==R||Y.numSpotMaps!==W||Y.numLightProbes!==u)&&(i.directional.length=w,i.spot.length=T,i.rectArea.length=y,i.point.length=M,i.hemi.length=m,i.directionalShadow.length=O,i.directionalShadowMap.length=O,i.pointShadow.length=U,i.pointShadowMap.length=U,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=O,i.pointShadowMatrix.length=U,i.spotLightMatrix.length=R+W-z,i.spotLightMap.length=W,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=u,Y.directionalLength=w,Y.pointLength=M,Y.spotLength=T,Y.rectAreaLength=y,Y.hemiLength=m,Y.numDirectionalShadows=O,Y.numPointShadows=U,Y.numSpotShadows=R,Y.numSpotMaps=W,Y.numLightProbes=u,i.version=mx++)}function d(f,g){let v=0,_=0,w=0,M=0,T=0;const y=g.matrixWorldInverse;for(let m=0,O=f.length;m<O;m++){const U=f[m];if(U.isDirectionalLight){const R=i.directional[v];R.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(y),v++}else if(U.isSpotLight){const R=i.spot[w];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(y),w++}else if(U.isRectAreaLight){const R=i.rectArea[M];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),l.identity(),s.copy(U.matrixWorld),s.premultiply(y),l.extractRotation(s),R.halfWidth.set(U.width*.5,0,0),R.halfHeight.set(0,U.height*.5,0),R.halfWidth.applyMatrix4(l),R.halfHeight.applyMatrix4(l),M++}else if(U.isPointLight){const R=i.point[_];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),_++}else if(U.isHemisphereLight){const R=i.hemi[T];R.direction.setFromMatrixPosition(U.matrixWorld),R.direction.transformDirection(y),T++}}}return{setup:c,setupView:d,state:i}}function Fh(n){const t=new vx(n),e=[],i=[];function r(g){f.camera=g,e.length=0,i.length=0}function s(g){e.push(g)}function l(g){i.push(g)}function c(){t.setup(e)}function d(g){t.setupView(e,g)}const f={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:c,setupLightsView:d,pushLight:s,pushShadow:l}}function _x(n){let t=new WeakMap;function e(r,s=0){const l=t.get(r);let c;return l===void 0?(c=new Fh(n),t.set(r,[c])):s>=l.length?(c=new Fh(n),l.push(c)):c=l[s],c}function i(){t=new WeakMap}return{get:e,dispose:i}}const xx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bx=`uniform sampler2D shadow_pass;
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
}`;function yx(n,t,e){let i=new Hc;const r=new he,s=new he,l=new ze,c=new Hm({depthPacking:Zf}),d=new Gm,f={},g=e.maxTextureSize,v={[sr]:Ln,[Ln]:sr,[Ai]:Ai},_=new ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:xx,fragmentShader:bx}),w=_.clone();w.defines.HORIZONTAL_PASS=1;const M=new fi;M.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new gn(M,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fd;let m=this.type;this.render=function(z,u,Y){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;const P=n.getRenderTarget(),A=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),st=n.state;st.setBlending(nr),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const j=m!==Ci&&this.type===Ci,at=m===Ci&&this.type!==Ci;for(let ft=0,ut=z.length;ft<ut;ft++){const lt=z[ft],nt=lt.shadow;if(nt===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;r.copy(nt.mapSize);const yt=nt.getFrameExtents();if(r.multiply(yt),s.copy(nt.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(s.x=Math.floor(g/yt.x),r.x=s.x*yt.x,nt.mapSize.x=s.x),r.y>g&&(s.y=Math.floor(g/yt.y),r.y=s.y*yt.y,nt.mapSize.y=s.y)),nt.map===null||j===!0||at===!0){const Wt=this.type!==Ci?{minFilter:ei,magFilter:ei}:{};nt.map!==null&&nt.map.dispose(),nt.map=new Rr(r.x,r.y,Wt),nt.map.texture.name=lt.name+".shadowMap",nt.camera.updateProjectionMatrix()}n.setRenderTarget(nt.map),n.clear();const Lt=nt.getViewportCount();for(let Wt=0;Wt<Lt;Wt++){const Jt=nt.getViewport(Wt);l.set(s.x*Jt.x,s.y*Jt.y,s.x*Jt.z,s.y*Jt.w),st.viewport(l),nt.updateMatrices(lt,Wt),i=nt.getFrustum(),R(u,Y,nt.camera,lt,this.type)}nt.isPointLightShadow!==!0&&this.type===Ci&&O(nt,Y),nt.needsUpdate=!1}m=this.type,y.needsUpdate=!1,n.setRenderTarget(P,A,V)};function O(z,u){const Y=t.update(T);_.defines.VSM_SAMPLES!==z.blurSamples&&(_.defines.VSM_SAMPLES=z.blurSamples,w.defines.VSM_SAMPLES=z.blurSamples,_.needsUpdate=!0,w.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Rr(r.x,r.y)),_.uniforms.shadow_pass.value=z.map.texture,_.uniforms.resolution.value=z.mapSize,_.uniforms.radius.value=z.radius,n.setRenderTarget(z.mapPass),n.clear(),n.renderBufferDirect(u,null,Y,_,T,null),w.uniforms.shadow_pass.value=z.mapPass.texture,w.uniforms.resolution.value=z.mapSize,w.uniforms.radius.value=z.radius,n.setRenderTarget(z.map),n.clear(),n.renderBufferDirect(u,null,Y,w,T,null)}function U(z,u,Y,P){let A=null;const V=Y.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(V!==void 0)A=V;else if(A=Y.isPointLight===!0?d:c,n.localClippingEnabled&&u.clipShadows===!0&&Array.isArray(u.clippingPlanes)&&u.clippingPlanes.length!==0||u.displacementMap&&u.displacementScale!==0||u.alphaMap&&u.alphaTest>0||u.map&&u.alphaTest>0||u.alphaToCoverage===!0){const st=A.uuid,j=u.uuid;let at=f[st];at===void 0&&(at={},f[st]=at);let ft=at[j];ft===void 0&&(ft=A.clone(),at[j]=ft,u.addEventListener("dispose",W)),A=ft}if(A.visible=u.visible,A.wireframe=u.wireframe,P===Ci?A.side=u.shadowSide!==null?u.shadowSide:u.side:A.side=u.shadowSide!==null?u.shadowSide:v[u.side],A.alphaMap=u.alphaMap,A.alphaTest=u.alphaToCoverage===!0?.5:u.alphaTest,A.map=u.map,A.clipShadows=u.clipShadows,A.clippingPlanes=u.clippingPlanes,A.clipIntersection=u.clipIntersection,A.displacementMap=u.displacementMap,A.displacementScale=u.displacementScale,A.displacementBias=u.displacementBias,A.wireframeLinewidth=u.wireframeLinewidth,A.linewidth=u.linewidth,Y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const st=n.properties.get(A);st.light=Y}return A}function R(z,u,Y,P,A){if(z.visible===!1)return;if(z.layers.test(u.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&A===Ci)&&(!z.frustumCulled||i.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,z.matrixWorld);const j=t.update(z),at=z.material;if(Array.isArray(at)){const ft=j.groups;for(let ut=0,lt=ft.length;ut<lt;ut++){const nt=ft[ut],yt=at[nt.materialIndex];if(yt&&yt.visible){const Lt=U(z,yt,P,A);z.onBeforeShadow(n,z,u,Y,j,Lt,nt),n.renderBufferDirect(Y,null,j,Lt,z,nt),z.onAfterShadow(n,z,u,Y,j,Lt,nt)}}}else if(at.visible){const ft=U(z,at,P,A);z.onBeforeShadow(n,z,u,Y,j,ft,null),n.renderBufferDirect(Y,null,j,ft,z,null),z.onAfterShadow(n,z,u,Y,j,ft,null)}}const st=z.children;for(let j=0,at=st.length;j<at;j++)R(st[j],u,Y,P,A)}function W(z){z.target.removeEventListener("dispose",W);for(const Y in f){const P=f[Y],A=z.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const wx={[Bl]:Vl,[zl]:Wl,[Hl]:jl,[ds]:Gl,[Vl]:Bl,[Wl]:zl,[jl]:Hl,[Gl]:ds};function Sx(n,t){function e(){let G=!1;const At=new ze;let rt=null;const mt=new ze(0,0,0,0);return{setMask:function(Pt){rt!==Pt&&!G&&(n.colorMask(Pt,Pt,Pt,Pt),rt=Pt)},setLocked:function(Pt){G=Pt},setClear:function(Pt,Tt,Yt,xe,tn){tn===!0&&(Pt*=xe,Tt*=xe,Yt*=xe),At.set(Pt,Tt,Yt,xe),mt.equals(At)===!1&&(n.clearColor(Pt,Tt,Yt,xe),mt.copy(At))},reset:function(){G=!1,rt=null,mt.set(-1,0,0,0)}}}function i(){let G=!1,At=!1,rt=null,mt=null,Pt=null;return{setReversed:function(Tt){if(At!==Tt){const Yt=t.get("EXT_clip_control");Tt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),At=Tt;const xe=Pt;Pt=null,this.setClear(xe)}},getReversed:function(){return At},setTest:function(Tt){Tt?St(n.DEPTH_TEST):Bt(n.DEPTH_TEST)},setMask:function(Tt){rt!==Tt&&!G&&(n.depthMask(Tt),rt=Tt)},setFunc:function(Tt){if(At&&(Tt=wx[Tt]),mt!==Tt){switch(Tt){case Bl:n.depthFunc(n.NEVER);break;case Vl:n.depthFunc(n.ALWAYS);break;case zl:n.depthFunc(n.LESS);break;case ds:n.depthFunc(n.LEQUAL);break;case Hl:n.depthFunc(n.EQUAL);break;case Gl:n.depthFunc(n.GEQUAL);break;case Wl:n.depthFunc(n.GREATER);break;case jl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}mt=Tt}},setLocked:function(Tt){G=Tt},setClear:function(Tt){Pt!==Tt&&(At&&(Tt=1-Tt),n.clearDepth(Tt),Pt=Tt)},reset:function(){G=!1,rt=null,mt=null,Pt=null,At=!1}}}function r(){let G=!1,At=null,rt=null,mt=null,Pt=null,Tt=null,Yt=null,xe=null,tn=null;return{setTest:function(Ne){G||(Ne?St(n.STENCIL_TEST):Bt(n.STENCIL_TEST))},setMask:function(Ne){At!==Ne&&!G&&(n.stencilMask(Ne),At=Ne)},setFunc:function(Ne,En,Vn){(rt!==Ne||mt!==En||Pt!==Vn)&&(n.stencilFunc(Ne,En,Vn),rt=Ne,mt=En,Pt=Vn)},setOp:function(Ne,En,Vn){(Tt!==Ne||Yt!==En||xe!==Vn)&&(n.stencilOp(Ne,En,Vn),Tt=Ne,Yt=En,xe=Vn)},setLocked:function(Ne){G=Ne},setClear:function(Ne){tn!==Ne&&(n.clearStencil(Ne),tn=Ne)},reset:function(){G=!1,At=null,rt=null,mt=null,Pt=null,Tt=null,Yt=null,xe=null,tn=null}}}const s=new e,l=new i,c=new r,d=new WeakMap,f=new WeakMap;let g={},v={},_=new WeakMap,w=[],M=null,T=!1,y=null,m=null,O=null,U=null,R=null,W=null,z=null,u=new ce(0,0,0),Y=0,P=!1,A=null,V=null,st=null,j=null,at=null;const ft=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ut=!1,lt=0;const nt=n.getParameter(n.VERSION);nt.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(nt)[1]),ut=lt>=1):nt.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),ut=lt>=2);let yt=null,Lt={};const Wt=n.getParameter(n.SCISSOR_BOX),Jt=n.getParameter(n.VIEWPORT),de=new ze().fromArray(Wt),ct=new ze().fromArray(Jt);function bt(G,At,rt,mt){const Pt=new Uint8Array(4),Tt=n.createTexture();n.bindTexture(G,Tt),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Yt=0;Yt<rt;Yt++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(At,0,n.RGBA,1,1,mt,0,n.RGBA,n.UNSIGNED_BYTE,Pt):n.texImage2D(At+Yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pt);return Tt}const kt={};kt[n.TEXTURE_2D]=bt(n.TEXTURE_2D,n.TEXTURE_2D,1),kt[n.TEXTURE_CUBE_MAP]=bt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),kt[n.TEXTURE_2D_ARRAY]=bt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),kt[n.TEXTURE_3D]=bt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),St(n.DEPTH_TEST),l.setFunc(ds),pe(!1),te(Ru),St(n.CULL_FACE),F(nr);function St(G){g[G]!==!0&&(n.enable(G),g[G]=!0)}function Bt(G){g[G]!==!1&&(n.disable(G),g[G]=!1)}function oe(G,At){return v[G]!==At?(n.bindFramebuffer(G,At),v[G]=At,G===n.DRAW_FRAMEBUFFER&&(v[n.FRAMEBUFFER]=At),G===n.FRAMEBUFFER&&(v[n.DRAW_FRAMEBUFFER]=At),!0):!1}function zt(G,At){let rt=w,mt=!1;if(G){rt=_.get(At),rt===void 0&&(rt=[],_.set(At,rt));const Pt=G.textures;if(rt.length!==Pt.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let Tt=0,Yt=Pt.length;Tt<Yt;Tt++)rt[Tt]=n.COLOR_ATTACHMENT0+Tt;rt.length=Pt.length,mt=!0}}else rt[0]!==n.BACK&&(rt[0]=n.BACK,mt=!0);mt&&n.drawBuffers(rt)}function He(G){return M!==G?(n.useProgram(G),M=G,!0):!1}const gt={[yr]:n.FUNC_ADD,[Sf]:n.FUNC_SUBTRACT,[Mf]:n.FUNC_REVERSE_SUBTRACT};gt[Ef]=n.MIN,gt[Tf]=n.MAX;const ue={[Cf]:n.ZERO,[Af]:n.ONE,[Pf]:n.SRC_COLOR,[Fl]:n.SRC_ALPHA,[Nf]:n.SRC_ALPHA_SATURATE,[If]:n.DST_COLOR,[Df]:n.DST_ALPHA,[Rf]:n.ONE_MINUS_SRC_COLOR,[kl]:n.ONE_MINUS_SRC_ALPHA,[Uf]:n.ONE_MINUS_DST_COLOR,[Lf]:n.ONE_MINUS_DST_ALPHA,[Of]:n.CONSTANT_COLOR,[Ff]:n.ONE_MINUS_CONSTANT_COLOR,[kf]:n.CONSTANT_ALPHA,[Bf]:n.ONE_MINUS_CONSTANT_ALPHA};function F(G,At,rt,mt,Pt,Tt,Yt,xe,tn,Ne){if(G===nr){T===!0&&(Bt(n.BLEND),T=!1);return}if(T===!1&&(St(n.BLEND),T=!0),G!==wf){if(G!==y||Ne!==P){if((m!==yr||R!==yr)&&(n.blendEquation(n.FUNC_ADD),m=yr,R=yr),Ne)switch(G){case ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Du:n.blendFunc(n.ONE,n.ONE);break;case Lu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Iu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Du:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Lu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Iu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}O=null,U=null,W=null,z=null,u.set(0,0,0),Y=0,y=G,P=Ne}return}Pt=Pt||At,Tt=Tt||rt,Yt=Yt||mt,(At!==m||Pt!==R)&&(n.blendEquationSeparate(gt[At],gt[Pt]),m=At,R=Pt),(rt!==O||mt!==U||Tt!==W||Yt!==z)&&(n.blendFuncSeparate(ue[rt],ue[mt],ue[Tt],ue[Yt]),O=rt,U=mt,W=Tt,z=Yt),(xe.equals(u)===!1||tn!==Y)&&(n.blendColor(xe.r,xe.g,xe.b,tn),u.copy(xe),Y=tn),y=G,P=!1}function Qe(G,At){G.side===Ai?Bt(n.CULL_FACE):St(n.CULL_FACE);let rt=G.side===Ln;At&&(rt=!rt),pe(rt),G.blending===ls&&G.transparent===!1?F(nr):F(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),s.setMask(G.colorWrite);const mt=G.stencilWrite;c.setTest(mt),mt&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Pe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?St(n.SAMPLE_ALPHA_TO_COVERAGE):Bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function pe(G){A!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),A=G)}function te(G){G!==xf?(St(n.CULL_FACE),G!==V&&(G===Ru?n.cullFace(n.BACK):G===bf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Bt(n.CULL_FACE),V=G}function Ut(G){G!==st&&(ut&&n.lineWidth(G),st=G)}function Pe(G,At,rt){G?(St(n.POLYGON_OFFSET_FILL),(j!==At||at!==rt)&&(n.polygonOffset(At,rt),j=At,at=rt)):Bt(n.POLYGON_OFFSET_FILL)}function Ht(G){G?St(n.SCISSOR_TEST):Bt(n.SCISSOR_TEST)}function L(G){G===void 0&&(G=n.TEXTURE0+ft-1),yt!==G&&(n.activeTexture(G),yt=G)}function E(G,At,rt){rt===void 0&&(yt===null?rt=n.TEXTURE0+ft-1:rt=yt);let mt=Lt[rt];mt===void 0&&(mt={type:void 0,texture:void 0},Lt[rt]=mt),(mt.type!==G||mt.texture!==At)&&(yt!==rt&&(n.activeTexture(rt),yt=rt),n.bindTexture(G,At||kt[G]),mt.type=G,mt.texture=At)}function $(){const G=Lt[yt];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ht(){try{n.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function K(){try{n.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ot(){try{n.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Vt(){try{n.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ct(){try{n.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Qt(){try{n.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ee(){try{n.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _t(){try{n.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Nt(){try{n.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function jt(){try{n.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $t(G){de.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),de.copy(G))}function It(G){ct.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),ct.copy(G))}function Me(G,At){let rt=f.get(At);rt===void 0&&(rt=new WeakMap,f.set(At,rt));let mt=rt.get(G);mt===void 0&&(mt=n.getUniformBlockIndex(At,G.name),rt.set(G,mt))}function ae(G,At){const mt=f.get(At).get(G);d.get(At)!==mt&&(n.uniformBlockBinding(At,mt,G.__bindingPointIndex),d.set(At,mt))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),l.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),g={},yt=null,Lt={},v={},_=new WeakMap,w=[],M=null,T=!1,y=null,m=null,O=null,U=null,R=null,W=null,z=null,u=new ce(0,0,0),Y=0,P=!1,A=null,V=null,st=null,j=null,at=null,de.set(0,0,n.canvas.width,n.canvas.height),ct.set(0,0,n.canvas.width,n.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:St,disable:Bt,bindFramebuffer:oe,drawBuffers:zt,useProgram:He,setBlending:F,setMaterial:Qe,setFlipSided:pe,setCullFace:te,setLineWidth:Ut,setPolygonOffset:Pe,setScissorTest:Ht,activeTexture:L,bindTexture:E,unbindTexture:$,compressedTexImage2D:ht,compressedTexImage3D:K,texImage2D:Nt,texImage3D:jt,updateUBOMapping:Me,uniformBlockBinding:ae,texStorage2D:ee,texStorage3D:_t,texSubImage2D:ot,texSubImage3D:Vt,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Qt,scissor:$t,viewport:It,reset:Fe}}function Mx(n,t,e,i,r,s,l){const c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new he,g=new WeakMap;let v;const _=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,E){return w?new OffscreenCanvas(L,E):fa("canvas")}function T(L,E,$){let ht=1;const K=Ht(L);if((K.width>$||K.height>$)&&(ht=$/Math.max(K.width,K.height)),ht<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ot=Math.floor(ht*K.width),Vt=Math.floor(ht*K.height);v===void 0&&(v=M(ot,Vt));const Ct=E?M(ot,Vt):v;return Ct.width=ot,Ct.height=Vt,Ct.getContext("2d").drawImage(L,0,0,ot,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ot+"x"+Vt+")."),Ct}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),L;return L}function y(L){return L.generateMipmaps}function m(L){n.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function U(L,E,$,ht,K=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ot=E;if(E===n.RED&&($===n.FLOAT&&(ot=n.R32F),$===n.HALF_FLOAT&&(ot=n.R16F),$===n.UNSIGNED_BYTE&&(ot=n.R8)),E===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(ot=n.R8UI),$===n.UNSIGNED_SHORT&&(ot=n.R16UI),$===n.UNSIGNED_INT&&(ot=n.R32UI),$===n.BYTE&&(ot=n.R8I),$===n.SHORT&&(ot=n.R16I),$===n.INT&&(ot=n.R32I)),E===n.RG&&($===n.FLOAT&&(ot=n.RG32F),$===n.HALF_FLOAT&&(ot=n.RG16F),$===n.UNSIGNED_BYTE&&(ot=n.RG8)),E===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(ot=n.RG8UI),$===n.UNSIGNED_SHORT&&(ot=n.RG16UI),$===n.UNSIGNED_INT&&(ot=n.RG32UI),$===n.BYTE&&(ot=n.RG8I),$===n.SHORT&&(ot=n.RG16I),$===n.INT&&(ot=n.RG32I)),E===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(ot=n.RGB8UI),$===n.UNSIGNED_SHORT&&(ot=n.RGB16UI),$===n.UNSIGNED_INT&&(ot=n.RGB32UI),$===n.BYTE&&(ot=n.RGB8I),$===n.SHORT&&(ot=n.RGB16I),$===n.INT&&(ot=n.RGB32I)),E===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(ot=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(ot=n.RGBA16UI),$===n.UNSIGNED_INT&&(ot=n.RGBA32UI),$===n.BYTE&&(ot=n.RGBA8I),$===n.SHORT&&(ot=n.RGBA16I),$===n.INT&&(ot=n.RGBA32I)),E===n.RGB&&$===n.UNSIGNED_INT_5_9_9_9_REV&&(ot=n.RGB9_E5),E===n.RGBA){const Vt=K?ha:Ie.getTransfer(ht);$===n.FLOAT&&(ot=n.RGBA32F),$===n.HALF_FLOAT&&(ot=n.RGBA16F),$===n.UNSIGNED_BYTE&&(ot=Vt===Be?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(ot=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(ot=n.RGB5_A1)}return(ot===n.R16F||ot===n.R32F||ot===n.RG16F||ot===n.RG32F||ot===n.RGBA16F||ot===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function R(L,E){let $;return L?E===null||E===Pr||E===Ys?$=n.DEPTH24_STENCIL8:E===Pi?$=n.DEPTH32F_STENCIL8:E===qs&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Pr||E===Ys?$=n.DEPTH_COMPONENT24:E===Pi?$=n.DEPTH_COMPONENT32F:E===qs&&($=n.DEPTH_COMPONENT16),$}function W(L,E){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==ei&&L.minFilter!==li?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function z(L){const E=L.target;E.removeEventListener("dispose",z),Y(E),E.isVideoTexture&&g.delete(E)}function u(L){const E=L.target;E.removeEventListener("dispose",u),A(E)}function Y(L){const E=i.get(L);if(E.__webglInit===void 0)return;const $=L.source,ht=_.get($);if(ht){const K=ht[E.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(L),Object.keys(ht).length===0&&_.delete($)}i.remove(L)}function P(L){const E=i.get(L);n.deleteTexture(E.__webglTexture);const $=L.source,ht=_.get($);delete ht[E.__cacheKey],l.memory.textures--}function A(L){const E=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let K=0;K<E.__webglFramebuffer[ht].length;K++)n.deleteFramebuffer(E.__webglFramebuffer[ht][K]);else n.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)n.deleteFramebuffer(E.__webglFramebuffer[ht]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=L.textures;for(let ht=0,K=$.length;ht<K;ht++){const ot=i.get($[ht]);ot.__webglTexture&&(n.deleteTexture(ot.__webglTexture),l.memory.textures--),i.remove($[ht])}i.remove(L)}let V=0;function st(){V=0}function j(){const L=V;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),V+=1,L}function at(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ft(L,E){const $=i.get(L);if(L.isVideoTexture&&Ut(L),L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){const ht=L.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct($,L,E);return}}e.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+E)}function ut(L,E){const $=i.get(L);if(L.version>0&&$.__version!==L.version){ct($,L,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+E)}function lt(L,E){const $=i.get(L);if(L.version>0&&$.__version!==L.version){ct($,L,E);return}e.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+E)}function nt(L,E){const $=i.get(L);if(L.version>0&&$.__version!==L.version){bt($,L,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+E)}const yt={[Yl]:n.REPEAT,[Tr]:n.CLAMP_TO_EDGE,[$l]:n.MIRRORED_REPEAT},Lt={[ei]:n.NEAREST,[$f]:n.NEAREST_MIPMAP_NEAREST,[Eo]:n.NEAREST_MIPMAP_LINEAR,[li]:n.LINEAR,[$a]:n.LINEAR_MIPMAP_NEAREST,[Cr]:n.LINEAR_MIPMAP_LINEAR},Wt={[Qf]:n.NEVER,[sm]:n.ALWAYS,[tm]:n.LESS,[Md]:n.LEQUAL,[em]:n.EQUAL,[rm]:n.GEQUAL,[nm]:n.GREATER,[im]:n.NOTEQUAL};function Jt(L,E){if(E.type===Pi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===li||E.magFilter===$a||E.magFilter===Eo||E.magFilter===Cr||E.minFilter===li||E.minFilter===$a||E.minFilter===Eo||E.minFilter===Cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,yt[E.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,yt[E.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,yt[E.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,Lt[E.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,Lt[E.minFilter]),E.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,Wt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ei||E.minFilter!==Eo&&E.minFilter!==Cr||E.type===Pi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");n.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function de(L,E){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",z));const ht=E.source;let K=_.get(ht);K===void 0&&(K={},_.set(ht,K));const ot=at(E);if(ot!==L.__cacheKey){K[ot]===void 0&&(K[ot]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,$=!0),K[ot].usedTimes++;const Vt=K[L.__cacheKey];Vt!==void 0&&(K[L.__cacheKey].usedTimes--,Vt.usedTimes===0&&P(E)),L.__cacheKey=ot,L.__webglTexture=K[ot].texture}return $}function ct(L,E,$){let ht=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=n.TEXTURE_3D);const K=de(L,E),ot=E.source;e.bindTexture(ht,L.__webglTexture,n.TEXTURE0+$);const Vt=i.get(ot);if(ot.version!==Vt.__version||K===!0){e.activeTexture(n.TEXTURE0+$);const Ct=Ie.getPrimaries(Ie.workingColorSpace),Qt=E.colorSpace===tr?null:Ie.getPrimaries(E.colorSpace),ee=E.colorSpace===tr||Ct===Qt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let _t=T(E.image,!1,r.maxTextureSize);_t=Pe(E,_t);const Nt=s.convert(E.format,E.colorSpace),jt=s.convert(E.type);let $t=U(E.internalFormat,Nt,jt,E.colorSpace,E.isVideoTexture);Jt(ht,E);let It;const Me=E.mipmaps,ae=E.isVideoTexture!==!0,Fe=Vt.__version===void 0||K===!0,G=ot.dataReady,At=W(E,_t);if(E.isDepthTexture)$t=R(E.format===Ks,E.type),Fe&&(ae?e.texStorage2D(n.TEXTURE_2D,1,$t,_t.width,_t.height):e.texImage2D(n.TEXTURE_2D,0,$t,_t.width,_t.height,0,Nt,jt,null));else if(E.isDataTexture)if(Me.length>0){ae&&Fe&&e.texStorage2D(n.TEXTURE_2D,At,$t,Me[0].width,Me[0].height);for(let rt=0,mt=Me.length;rt<mt;rt++)It=Me[rt],ae?G&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,It.width,It.height,Nt,jt,It.data):e.texImage2D(n.TEXTURE_2D,rt,$t,It.width,It.height,0,Nt,jt,It.data);E.generateMipmaps=!1}else ae?(Fe&&e.texStorage2D(n.TEXTURE_2D,At,$t,_t.width,_t.height),G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t.width,_t.height,Nt,jt,_t.data)):e.texImage2D(n.TEXTURE_2D,0,$t,_t.width,_t.height,0,Nt,jt,_t.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ae&&Fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,At,$t,Me[0].width,Me[0].height,_t.depth);for(let rt=0,mt=Me.length;rt<mt;rt++)if(It=Me[rt],E.format!==ti)if(Nt!==null)if(ae){if(G)if(E.layerUpdates.size>0){const Pt=ph(It.width,It.height,E.format,E.type);for(const Tt of E.layerUpdates){const Yt=It.data.subarray(Tt*Pt/It.data.BYTES_PER_ELEMENT,(Tt+1)*Pt/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,Tt,It.width,It.height,1,Nt,Yt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,It.width,It.height,_t.depth,Nt,It.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,rt,$t,It.width,It.height,_t.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,It.width,It.height,_t.depth,Nt,jt,It.data):e.texImage3D(n.TEXTURE_2D_ARRAY,rt,$t,It.width,It.height,_t.depth,0,Nt,jt,It.data)}else{ae&&Fe&&e.texStorage2D(n.TEXTURE_2D,At,$t,Me[0].width,Me[0].height);for(let rt=0,mt=Me.length;rt<mt;rt++)It=Me[rt],E.format!==ti?Nt!==null?ae?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,rt,0,0,It.width,It.height,Nt,It.data):e.compressedTexImage2D(n.TEXTURE_2D,rt,$t,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?G&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,It.width,It.height,Nt,jt,It.data):e.texImage2D(n.TEXTURE_2D,rt,$t,It.width,It.height,0,Nt,jt,It.data)}else if(E.isDataArrayTexture)if(ae){if(Fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,At,$t,_t.width,_t.height,_t.depth),G)if(E.layerUpdates.size>0){const rt=ph(_t.width,_t.height,E.format,E.type);for(const mt of E.layerUpdates){const Pt=_t.data.subarray(mt*rt/_t.data.BYTES_PER_ELEMENT,(mt+1)*rt/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,mt,_t.width,_t.height,1,Nt,jt,Pt)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Nt,jt,_t.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,$t,_t.width,_t.height,_t.depth,0,Nt,jt,_t.data);else if(E.isData3DTexture)ae?(Fe&&e.texStorage3D(n.TEXTURE_3D,At,$t,_t.width,_t.height,_t.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Nt,jt,_t.data)):e.texImage3D(n.TEXTURE_3D,0,$t,_t.width,_t.height,_t.depth,0,Nt,jt,_t.data);else if(E.isFramebufferTexture){if(Fe)if(ae)e.texStorage2D(n.TEXTURE_2D,At,$t,_t.width,_t.height);else{let rt=_t.width,mt=_t.height;for(let Pt=0;Pt<At;Pt++)e.texImage2D(n.TEXTURE_2D,Pt,$t,rt,mt,0,Nt,jt,null),rt>>=1,mt>>=1}}else if(Me.length>0){if(ae&&Fe){const rt=Ht(Me[0]);e.texStorage2D(n.TEXTURE_2D,At,$t,rt.width,rt.height)}for(let rt=0,mt=Me.length;rt<mt;rt++)It=Me[rt],ae?G&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,Nt,jt,It):e.texImage2D(n.TEXTURE_2D,rt,$t,Nt,jt,It);E.generateMipmaps=!1}else if(ae){if(Fe){const rt=Ht(_t);e.texStorage2D(n.TEXTURE_2D,At,$t,rt.width,rt.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Nt,jt,_t)}else e.texImage2D(n.TEXTURE_2D,0,$t,Nt,jt,_t);y(E)&&m(ht),Vt.__version=ot.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function bt(L,E,$){if(E.image.length!==6)return;const ht=de(L,E),K=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+$);const ot=i.get(K);if(K.version!==ot.__version||ht===!0){e.activeTexture(n.TEXTURE0+$);const Vt=Ie.getPrimaries(Ie.workingColorSpace),Ct=E.colorSpace===tr?null:Ie.getPrimaries(E.colorSpace),Qt=E.colorSpace===tr||Vt===Ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const ee=E.isCompressedTexture||E.image[0].isCompressedTexture,_t=E.image[0]&&E.image[0].isDataTexture,Nt=[];for(let mt=0;mt<6;mt++)!ee&&!_t?Nt[mt]=T(E.image[mt],!0,r.maxCubemapSize):Nt[mt]=_t?E.image[mt].image:E.image[mt],Nt[mt]=Pe(E,Nt[mt]);const jt=Nt[0],$t=s.convert(E.format,E.colorSpace),It=s.convert(E.type),Me=U(E.internalFormat,$t,It,E.colorSpace),ae=E.isVideoTexture!==!0,Fe=ot.__version===void 0||ht===!0,G=K.dataReady;let At=W(E,jt);Jt(n.TEXTURE_CUBE_MAP,E);let rt;if(ee){ae&&Fe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,At,Me,jt.width,jt.height);for(let mt=0;mt<6;mt++){rt=Nt[mt].mipmaps;for(let Pt=0;Pt<rt.length;Pt++){const Tt=rt[Pt];E.format!==ti?$t!==null?ae?G&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt,0,0,Tt.width,Tt.height,$t,Tt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt,Me,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt,0,0,Tt.width,Tt.height,$t,It,Tt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt,Me,Tt.width,Tt.height,0,$t,It,Tt.data)}}}else{if(rt=E.mipmaps,ae&&Fe){rt.length>0&&At++;const mt=Ht(Nt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,At,Me,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(_t){ae?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Nt[mt].width,Nt[mt].height,$t,It,Nt[mt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Me,Nt[mt].width,Nt[mt].height,0,$t,It,Nt[mt].data);for(let Pt=0;Pt<rt.length;Pt++){const Yt=rt[Pt].image[mt].image;ae?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt+1,0,0,Yt.width,Yt.height,$t,It,Yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt+1,Me,Yt.width,Yt.height,0,$t,It,Yt.data)}}else{ae?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,$t,It,Nt[mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Me,$t,It,Nt[mt]);for(let Pt=0;Pt<rt.length;Pt++){const Tt=rt[Pt];ae?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt+1,0,0,$t,It,Tt.image[mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Pt+1,Me,$t,It,Tt.image[mt])}}}y(E)&&m(n.TEXTURE_CUBE_MAP),ot.__version=K.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function kt(L,E,$,ht,K,ot){const Vt=s.convert($.format,$.colorSpace),Ct=s.convert($.type),Qt=U($.internalFormat,Vt,Ct,$.colorSpace),ee=i.get(E),_t=i.get($);if(_t.__renderTarget=E,!ee.__hasExternalTextures){const Nt=Math.max(1,E.width>>ot),jt=Math.max(1,E.height>>ot);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,ot,Qt,Nt,jt,E.depth,0,Vt,Ct,null):e.texImage2D(K,ot,Qt,Nt,jt,0,Vt,Ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,L),te(E)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,K,_t.__webglTexture,0,pe(E)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ht,K,_t.__webglTexture,ot),e.bindFramebuffer(n.FRAMEBUFFER,null)}function St(L,E,$){if(n.bindRenderbuffer(n.RENDERBUFFER,L),E.depthBuffer){const ht=E.depthTexture,K=ht&&ht.isDepthTexture?ht.type:null,ot=R(E.stencilBuffer,K),Vt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ct=pe(E);te(E)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ct,ot,E.width,E.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,ot,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ot,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Vt,n.RENDERBUFFER,L)}else{const ht=E.textures;for(let K=0;K<ht.length;K++){const ot=ht[K],Vt=s.convert(ot.format,ot.colorSpace),Ct=s.convert(ot.type),Qt=U(ot.internalFormat,Vt,Ct,ot.colorSpace),ee=pe(E);$&&te(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,Qt,E.width,E.height):te(E)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,Qt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Qt,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Bt(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=i.get(E.depthTexture);ht.__renderTarget=E,(!ht.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ft(E.depthTexture,0);const K=ht.__webglTexture,ot=pe(E);if(E.depthTexture.format===$s)te(E)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(E.depthTexture.format===Ks)te(E)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function oe(L){const E=i.get(L),$=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ht=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const K=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",K)};ht.addEventListener("dispose",K),E.__depthDisposeCallback=K}E.__boundDepthTexture=ht}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const ht=L.texture.mipmaps;ht&&ht.length>0?Bt(E.__webglFramebuffer[0],L):Bt(E.__webglFramebuffer,L)}else if($){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=n.createRenderbuffer(),St(E.__webglDepthbuffer[ht],L,!1);else{const K=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer[ht];n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ot)}}else{const ht=L.texture.mipmaps;if(ht&&ht.length>0?e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),St(E.__webglDepthbuffer,L,!1);else{const K=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ot)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(L,E,$){const ht=i.get(L);E!==void 0&&kt(ht.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&oe(L)}function He(L){const E=L.texture,$=i.get(L),ht=i.get(E);L.addEventListener("dispose",u);const K=L.textures,ot=L.isWebGLCubeRenderTarget===!0,Vt=K.length>1;if(Vt||(ht.__webglTexture===void 0&&(ht.__webglTexture=n.createTexture()),ht.__version=E.version,l.memory.textures++),ot){$.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[Ct]=[];for(let Qt=0;Qt<E.mipmaps.length;Qt++)$.__webglFramebuffer[Ct][Qt]=n.createFramebuffer()}else $.__webglFramebuffer[Ct]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ct=0;Ct<E.mipmaps.length;Ct++)$.__webglFramebuffer[Ct]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(Vt)for(let Ct=0,Qt=K.length;Ct<Qt;Ct++){const ee=i.get(K[Ct]);ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture(),l.memory.textures++)}if(L.samples>0&&te(L)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ct=0;Ct<K.length;Ct++){const Qt=K[Ct];$.__webglColorRenderbuffer[Ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[Ct]);const ee=s.convert(Qt.format,Qt.colorSpace),_t=s.convert(Qt.type),Nt=U(Qt.internalFormat,ee,_t,Qt.colorSpace,L.isXRRenderTarget===!0),jt=pe(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,jt,Nt,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.RENDERBUFFER,$.__webglColorRenderbuffer[Ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),St($.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ot){e.bindTexture(n.TEXTURE_CUBE_MAP,ht.__webglTexture),Jt(n.TEXTURE_CUBE_MAP,E);for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let Qt=0;Qt<E.mipmaps.length;Qt++)kt($.__webglFramebuffer[Ct][Qt],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Qt);else kt($.__webglFramebuffer[Ct],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(E)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Vt){for(let Ct=0,Qt=K.length;Ct<Qt;Ct++){const ee=K[Ct],_t=i.get(ee);e.bindTexture(n.TEXTURE_2D,_t.__webglTexture),Jt(n.TEXTURE_2D,ee),kt($.__webglFramebuffer,L,ee,n.COLOR_ATTACHMENT0+Ct,n.TEXTURE_2D,0),y(ee)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let Ct=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ct=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Ct,ht.__webglTexture),Jt(Ct,E),E.mipmaps&&E.mipmaps.length>0)for(let Qt=0;Qt<E.mipmaps.length;Qt++)kt($.__webglFramebuffer[Qt],L,E,n.COLOR_ATTACHMENT0,Ct,Qt);else kt($.__webglFramebuffer,L,E,n.COLOR_ATTACHMENT0,Ct,0);y(E)&&m(Ct),e.unbindTexture()}L.depthBuffer&&oe(L)}function gt(L){const E=L.textures;for(let $=0,ht=E.length;$<ht;$++){const K=E[$];if(y(K)){const ot=O(L),Vt=i.get(K).__webglTexture;e.bindTexture(ot,Vt),m(ot),e.unbindTexture()}}}const ue=[],F=[];function Qe(L){if(L.samples>0){if(te(L)===!1){const E=L.textures,$=L.width,ht=L.height;let K=n.COLOR_BUFFER_BIT;const ot=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Vt=i.get(L),Ct=E.length>1;if(Ct)for(let ee=0;ee<E.length;ee++)e.bindFramebuffer(n.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer);const Qt=L.texture.mipmaps;Qt&&Qt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let ee=0;ee<E.length;ee++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),Ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Vt.__webglColorRenderbuffer[ee]);const _t=i.get(E[ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_t,0)}n.blitFramebuffer(0,0,$,ht,0,0,$,ht,K,n.NEAREST),d===!0&&(ue.length=0,F.length=0,ue.push(n.COLOR_ATTACHMENT0+ee),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ue.push(ot),F.push(ot),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,F)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ct)for(let ee=0;ee<E.length;ee++){e.bindFramebuffer(n.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,Vt.__webglColorRenderbuffer[ee]);const _t=i.get(E[ee]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.TEXTURE_2D,_t,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const E=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function pe(L){return Math.min(r.maxSamples,L.samples)}function te(L){const E=i.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ut(L){const E=l.render.frame;g.get(L)!==E&&(g.set(L,E),L.update())}function Pe(L,E){const $=L.colorSpace,ht=L.format,K=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==ms&&$!==tr&&(Ie.getTransfer($)===Be?(ht!==ti||K!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function Ht(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(f.width=L.naturalWidth||L.width,f.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(f.width=L.displayWidth,f.height=L.displayHeight):(f.width=L.width,f.height=L.height),f}this.allocateTextureUnit=j,this.resetTextureUnits=st,this.setTexture2D=ft,this.setTexture2DArray=ut,this.setTexture3D=lt,this.setTextureCube=nt,this.rebindTextures=zt,this.setupRenderTarget=He,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=kt,this.useMultisampledRTT=te}function Ex(n,t){function e(i,r=tr){let s;const l=Ie.getTransfer(r);if(i===hi)return n.UNSIGNED_BYTE;if(i===Uc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Nc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_d)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gd)return n.BYTE;if(i===vd)return n.SHORT;if(i===qs)return n.UNSIGNED_SHORT;if(i===Ic)return n.INT;if(i===Pr)return n.UNSIGNED_INT;if(i===Pi)return n.FLOAT;if(i===io)return n.HALF_FLOAT;if(i===xd)return n.ALPHA;if(i===bd)return n.RGB;if(i===ti)return n.RGBA;if(i===$s)return n.DEPTH_COMPONENT;if(i===Ks)return n.DEPTH_STENCIL;if(i===yd)return n.RED;if(i===Oc)return n.RED_INTEGER;if(i===wd)return n.RG;if(i===Fc)return n.RG_INTEGER;if(i===kc)return n.RGBA_INTEGER;if(i===Qo||i===ta||i===ea||i===na)if(l===Be)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Qo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Qo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ta)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===na)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kl||i===Zl||i===Jl||i===Ql)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Kl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ql)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tc||i===ec||i===nc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===tc||i===ec)return l===Be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===nc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ic||i===rc||i===sc||i===oc||i===ac||i===lc||i===cc||i===uc||i===hc||i===dc||i===pc||i===fc||i===mc||i===gc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ic)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ac)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gc)return l===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ia||i===vc||i===_c)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===ia)return l===Be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_c)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sd||i===xc||i===bc||i===yc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===ia)return s.COMPRESSED_RED_RGTC1_EXT;if(i===xc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ys?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Tx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cx=`
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

}`;class Ax{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new In,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ar({vertexShader:Tx,fragmentShader:Cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new gn(new so(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Px extends Nr{constructor(t,e){super();const i=this;let r=null,s=1,l=null,c="local-floor",d=1,f=null,g=null,v=null,_=null,w=null,M=null;const T=new Ax,y=e.getContextAttributes();let m=null,O=null;const U=[],R=[],W=new he;let z=null;const u=new Rn;u.viewport=new ze;const Y=new Rn;Y.viewport=new ze;const P=[u,Y],A=new qm;let V=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ct){let bt=U[ct];return bt===void 0&&(bt=new gl,U[ct]=bt),bt.getTargetRaySpace()},this.getControllerGrip=function(ct){let bt=U[ct];return bt===void 0&&(bt=new gl,U[ct]=bt),bt.getGripSpace()},this.getHand=function(ct){let bt=U[ct];return bt===void 0&&(bt=new gl,U[ct]=bt),bt.getHandSpace()};function j(ct){const bt=R.indexOf(ct.inputSource);if(bt===-1)return;const kt=U[bt];kt!==void 0&&(kt.update(ct.inputSource,ct.frame,f||l),kt.dispatchEvent({type:ct.type,data:ct.inputSource}))}function at(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",at),r.removeEventListener("inputsourceschange",ft);for(let ct=0;ct<U.length;ct++){const bt=R[ct];bt!==null&&(R[ct]=null,U[ct].disconnect(bt))}V=null,st=null,T.reset(),t.setRenderTarget(m),w=null,_=null,v=null,r=null,O=null,de.stop(),i.isPresenting=!1,t.setPixelRatio(z),t.setSize(W.width,W.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ct){s=ct,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ct){c=ct,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(ct){f=ct},this.getBaseLayer=function(){return _!==null?_:w},this.getBinding=function(){return v},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(ct){if(r=ct,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",at),r.addEventListener("inputsourceschange",ft),y.xrCompatible!==!0&&await e.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(W),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let kt=null,St=null,Bt=null;y.depth&&(Bt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,kt=y.stencil?Ks:$s,St=y.stencil?Ys:Pr);const oe={colorFormat:e.RGBA8,depthFormat:Bt,scaleFactor:s};v=new XRWebGLBinding(r,e),_=v.createProjectionLayer(oe),r.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),O=new Rr(_.textureWidth,_.textureHeight,{format:ti,type:hi,depthTexture:new Ud(_.textureWidth,_.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,kt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const kt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};w=new XRWebGLLayer(r,e,kt),r.updateRenderState({baseLayer:w}),t.setPixelRatio(1),t.setSize(w.framebufferWidth,w.framebufferHeight,!1),O=new Rr(w.framebufferWidth,w.framebufferHeight,{format:ti,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:w.ignoreDepthValues===!1,resolveStencilBuffer:w.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(d),f=null,l=await r.requestReferenceSpace(c),de.setContext(r),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ft(ct){for(let bt=0;bt<ct.removed.length;bt++){const kt=ct.removed[bt],St=R.indexOf(kt);St>=0&&(R[St]=null,U[St].disconnect(kt))}for(let bt=0;bt<ct.added.length;bt++){const kt=ct.added[bt];let St=R.indexOf(kt);if(St===-1){for(let oe=0;oe<U.length;oe++)if(oe>=R.length){R.push(kt),St=oe;break}else if(R[oe]===null){R[oe]=kt,St=oe;break}if(St===-1)break}const Bt=U[St];Bt&&Bt.connect(kt)}}const ut=new B,lt=new B;function nt(ct,bt,kt){ut.setFromMatrixPosition(bt.matrixWorld),lt.setFromMatrixPosition(kt.matrixWorld);const St=ut.distanceTo(lt),Bt=bt.projectionMatrix.elements,oe=kt.projectionMatrix.elements,zt=Bt[14]/(Bt[10]-1),He=Bt[14]/(Bt[10]+1),gt=(Bt[9]+1)/Bt[5],ue=(Bt[9]-1)/Bt[5],F=(Bt[8]-1)/Bt[0],Qe=(oe[8]+1)/oe[0],pe=zt*F,te=zt*Qe,Ut=St/(-F+Qe),Pe=Ut*-F;if(bt.matrixWorld.decompose(ct.position,ct.quaternion,ct.scale),ct.translateX(Pe),ct.translateZ(Ut),ct.matrixWorld.compose(ct.position,ct.quaternion,ct.scale),ct.matrixWorldInverse.copy(ct.matrixWorld).invert(),Bt[10]===-1)ct.projectionMatrix.copy(bt.projectionMatrix),ct.projectionMatrixInverse.copy(bt.projectionMatrixInverse);else{const Ht=zt+Ut,L=He+Ut,E=pe-Pe,$=te+(St-Pe),ht=gt*He/L*Ht,K=ue*He/L*Ht;ct.projectionMatrix.makePerspective(E,$,ht,K,Ht,L),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert()}}function yt(ct,bt){bt===null?ct.matrixWorld.copy(ct.matrix):ct.matrixWorld.multiplyMatrices(bt.matrixWorld,ct.matrix),ct.matrixWorldInverse.copy(ct.matrixWorld).invert()}this.updateCamera=function(ct){if(r===null)return;let bt=ct.near,kt=ct.far;T.texture!==null&&(T.depthNear>0&&(bt=T.depthNear),T.depthFar>0&&(kt=T.depthFar)),A.near=Y.near=u.near=bt,A.far=Y.far=u.far=kt,(V!==A.near||st!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),V=A.near,st=A.far),u.layers.mask=ct.layers.mask|2,Y.layers.mask=ct.layers.mask|4,A.layers.mask=u.layers.mask|Y.layers.mask;const St=ct.parent,Bt=A.cameras;yt(A,St);for(let oe=0;oe<Bt.length;oe++)yt(Bt[oe],St);Bt.length===2?nt(A,u,Y):A.projectionMatrix.copy(u.projectionMatrix),Lt(ct,A,St)};function Lt(ct,bt,kt){kt===null?ct.matrix.copy(bt.matrixWorld):(ct.matrix.copy(kt.matrixWorld),ct.matrix.invert(),ct.matrix.multiply(bt.matrixWorld)),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.updateMatrixWorld(!0),ct.projectionMatrix.copy(bt.projectionMatrix),ct.projectionMatrixInverse.copy(bt.projectionMatrixInverse),ct.isPerspectiveCamera&&(ct.fov=pa*2*Math.atan(1/ct.projectionMatrix.elements[5]),ct.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(_===null&&w===null))return d},this.setFoveation=function(ct){d=ct,_!==null&&(_.fixedFoveation=ct),w!==null&&w.fixedFoveation!==void 0&&(w.fixedFoveation=ct)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(A)};let Wt=null;function Jt(ct,bt){if(g=bt.getViewerPose(f||l),M=bt,g!==null){const kt=g.views;w!==null&&(t.setRenderTargetFramebuffer(O,w.framebuffer),t.setRenderTarget(O));let St=!1;kt.length!==A.cameras.length&&(A.cameras.length=0,St=!0);for(let zt=0;zt<kt.length;zt++){const He=kt[zt];let gt=null;if(w!==null)gt=w.getViewport(He);else{const F=v.getViewSubImage(_,He);gt=F.viewport,zt===0&&(t.setRenderTargetTextures(O,F.colorTexture,F.depthStencilTexture),t.setRenderTarget(O))}let ue=P[zt];ue===void 0&&(ue=new Rn,ue.layers.enable(zt),ue.viewport=new ze,P[zt]=ue),ue.matrix.fromArray(He.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(He.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(gt.x,gt.y,gt.width,gt.height),zt===0&&(A.matrix.copy(ue.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),St===!0&&A.cameras.push(ue)}const Bt=r.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){const zt=v.getDepthInformation(kt[0]);zt&&zt.isValid&&zt.texture&&T.init(t,zt,r.renderState)}}for(let kt=0;kt<U.length;kt++){const St=R[kt],Bt=U[kt];St!==null&&Bt!==void 0&&Bt.update(St,bt,f||l)}Wt&&Wt(ct,bt),bt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:bt}),M=null}const de=new Fd;de.setAnimationLoop(Jt),this.setAnimationLoop=function(ct){Wt=ct},this.dispose=function(){}}}const _r=new qn,Rx=new Xe;function Dx(n,t){function e(y,m){y.matrixAutoUpdate===!0&&y.updateMatrix(),m.value.copy(y.matrix)}function i(y,m){m.color.getRGB(y.fogColor.value,Rd(n)),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function r(y,m,O,U,R){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(y,m):m.isMeshToonMaterial?(s(y,m),v(y,m)):m.isMeshPhongMaterial?(s(y,m),g(y,m)):m.isMeshStandardMaterial?(s(y,m),_(y,m),m.isMeshPhysicalMaterial&&w(y,m,R)):m.isMeshMatcapMaterial?(s(y,m),M(y,m)):m.isMeshDepthMaterial?s(y,m):m.isMeshDistanceMaterial?(s(y,m),T(y,m)):m.isMeshNormalMaterial?s(y,m):m.isLineBasicMaterial?(l(y,m),m.isLineDashedMaterial&&c(y,m)):m.isPointsMaterial?d(y,m,O,U):m.isSpriteMaterial?f(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.bumpMap&&(y.bumpMap.value=m.bumpMap,e(m.bumpMap,y.bumpMapTransform),y.bumpScale.value=m.bumpScale,m.side===Ln&&(y.bumpScale.value*=-1)),m.normalMap&&(y.normalMap.value=m.normalMap,e(m.normalMap,y.normalMapTransform),y.normalScale.value.copy(m.normalScale),m.side===Ln&&y.normalScale.value.negate()),m.displacementMap&&(y.displacementMap.value=m.displacementMap,e(m.displacementMap,y.displacementMapTransform),y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,y.emissiveMapTransform)),m.specularMap&&(y.specularMap.value=m.specularMap,e(m.specularMap,y.specularMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);const O=t.get(m),U=O.envMap,R=O.envMapRotation;U&&(y.envMap.value=U,_r.copy(R),_r.x*=-1,_r.y*=-1,_r.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),y.envMapRotation.value.setFromMatrix4(Rx.makeRotationFromEuler(_r)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap&&(y.lightMap.value=m.lightMap,y.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,y.lightMapTransform)),m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,y.aoMapTransform))}function l(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform))}function c(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function d(y,m,O,U){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*O,y.scale.value=U*.5,m.map&&(y.map.value=m.map,e(m.map,y.uvTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function f(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function g(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function v(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function _(y,m){y.metalness.value=m.metalness,m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,y.metalnessMapTransform)),y.roughness.value=m.roughness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,y.roughnessMapTransform)),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function w(y,m,O){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,y.sheenColorMapTransform)),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,y.sheenRoughnessMapTransform))),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,y.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(y.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ln&&y.clearcoatNormalScale.value.negate())),m.dispersion>0&&(y.dispersion.value=m.dispersion),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,y.iridescenceMapTransform)),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,y.transmissionMapTransform)),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(y.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(y.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,y.specularColorMapTransform)),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,m){m.matcap&&(y.matcap.value=m.matcap)}function T(y,m){const O=t.get(m).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Lx(n,t,e,i){let r={},s={},l=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(O,U){const R=U.program;i.uniformBlockBinding(O,R)}function f(O,U){let R=r[O.id];R===void 0&&(M(O),R=g(O),r[O.id]=R,O.addEventListener("dispose",y));const W=U.program;i.updateUBOMapping(O,W);const z=t.render.frame;s[O.id]!==z&&(_(O),s[O.id]=z)}function g(O){const U=v();O.__bindingPointIndex=U;const R=n.createBuffer(),W=O.__size,z=O.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,W,z),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,U,R),R}function v(){for(let O=0;O<c;O++)if(l.indexOf(O)===-1)return l.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(O){const U=r[O.id],R=O.uniforms,W=O.__cache;n.bindBuffer(n.UNIFORM_BUFFER,U);for(let z=0,u=R.length;z<u;z++){const Y=Array.isArray(R[z])?R[z]:[R[z]];for(let P=0,A=Y.length;P<A;P++){const V=Y[P];if(w(V,z,P,W)===!0){const st=V.__offset,j=Array.isArray(V.value)?V.value:[V.value];let at=0;for(let ft=0;ft<j.length;ft++){const ut=j[ft],lt=T(ut);typeof ut=="number"||typeof ut=="boolean"?(V.__data[0]=ut,n.bufferSubData(n.UNIFORM_BUFFER,st+at,V.__data)):ut.isMatrix3?(V.__data[0]=ut.elements[0],V.__data[1]=ut.elements[1],V.__data[2]=ut.elements[2],V.__data[3]=0,V.__data[4]=ut.elements[3],V.__data[5]=ut.elements[4],V.__data[6]=ut.elements[5],V.__data[7]=0,V.__data[8]=ut.elements[6],V.__data[9]=ut.elements[7],V.__data[10]=ut.elements[8],V.__data[11]=0):(ut.toArray(V.__data,at),at+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,st,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function w(O,U,R,W){const z=O.value,u=U+"_"+R;if(W[u]===void 0)return typeof z=="number"||typeof z=="boolean"?W[u]=z:W[u]=z.clone(),!0;{const Y=W[u];if(typeof z=="number"||typeof z=="boolean"){if(Y!==z)return W[u]=z,!0}else if(Y.equals(z)===!1)return Y.copy(z),!0}return!1}function M(O){const U=O.uniforms;let R=0;const W=16;for(let u=0,Y=U.length;u<Y;u++){const P=Array.isArray(U[u])?U[u]:[U[u]];for(let A=0,V=P.length;A<V;A++){const st=P[A],j=Array.isArray(st.value)?st.value:[st.value];for(let at=0,ft=j.length;at<ft;at++){const ut=j[at],lt=T(ut),nt=R%W,yt=nt%lt.boundary,Lt=nt+yt;R+=yt,Lt!==0&&W-Lt<lt.storage&&(R+=W-Lt),st.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=R,R+=lt.storage}}}const z=R%W;return z>0&&(R+=W-z),O.__size=R,O.__cache={},this}function T(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),U}function y(O){const U=O.target;U.removeEventListener("dispose",y);const R=l.indexOf(U.__bindingPointIndex);l.splice(R,1),n.deleteBuffer(r[U.id]),delete r[U.id],delete s[U.id]}function m(){for(const O in r)n.deleteBuffer(r[O]);l=[],r={},s={}}return{bind:d,update:f,dispose:m}}class Ix{constructor(t={}){const{canvas:e=lm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let w;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=i.getContextAttributes().alpha}else w=l;const M=new Uint32Array(4),T=new Int32Array(4);let y=null,m=null;const O=[],U=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let W=!1;this._outputColorSpace=jn;let z=0,u=0,Y=null,P=-1,A=null;const V=new ze,st=new ze;let j=null;const at=new ce(0);let ft=0,ut=e.width,lt=e.height,nt=1,yt=null,Lt=null;const Wt=new ze(0,0,ut,lt),Jt=new ze(0,0,ut,lt);let de=!1;const ct=new Hc;let bt=!1,kt=!1;const St=new Xe,Bt=new Xe,oe=new B,zt=new ze,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function ue(){return Y===null?nt:1}let F=i;function Qe(C,X){return e.getContext(C,X)}try{const C={alpha:!0,depth:r,stencil:s,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lc}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),F===null){const X="webgl2";if(F=Qe(X,C),F===null)throw Qe(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let pe,te,Ut,Pe,Ht,L,E,$,ht,K,ot,Vt,Ct,Qt,ee,_t,Nt,jt,$t,It,Me,ae,Fe,G;function At(){pe=new G_(F),pe.init(),ae=new Ex(F,pe),te=new O_(F,pe,t,ae),Ut=new Sx(F,pe),te.reverseDepthBuffer&&_&&Ut.buffers.depth.setReversed(!0),Pe=new X_(F),Ht=new ux,L=new Mx(F,pe,Ut,Ht,te,ae,Pe),E=new k_(R),$=new H_(R),ht=new Jm(F),Fe=new U_(F,ht),K=new W_(F,ht,Pe,Fe),ot=new Y_(F,K,ht,Pe),$t=new q_(F,te,L),_t=new F_(Ht),Vt=new cx(R,E,$,pe,te,Fe,_t),Ct=new Dx(R,Ht),Qt=new dx,ee=new _x(pe),jt=new I_(R,E,$,Ut,ot,w,d),Nt=new yx(R,ot,te),G=new Lx(F,Pe,te,Ut),It=new N_(F,pe,Pe),Me=new j_(F,pe,Pe),Pe.programs=Vt.programs,R.capabilities=te,R.extensions=pe,R.properties=Ht,R.renderLists=Qt,R.shadowMap=Nt,R.state=Ut,R.info=Pe}At();const rt=new Px(R,F);this.xr=rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=pe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=pe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(C){C!==void 0&&(nt=C,this.setSize(ut,lt,!1))},this.getSize=function(C){return C.set(ut,lt)},this.setSize=function(C,X,Q=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ut=C,lt=X,e.width=Math.floor(C*nt),e.height=Math.floor(X*nt),Q===!0&&(e.style.width=C+"px",e.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(ut*nt,lt*nt).floor()},this.setDrawingBufferSize=function(C,X,Q){ut=C,lt=X,nt=Q,e.width=Math.floor(C*Q),e.height=Math.floor(X*Q),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(V)},this.getViewport=function(C){return C.copy(Wt)},this.setViewport=function(C,X,Q,tt){C.isVector4?Wt.set(C.x,C.y,C.z,C.w):Wt.set(C,X,Q,tt),Ut.viewport(V.copy(Wt).multiplyScalar(nt).round())},this.getScissor=function(C){return C.copy(Jt)},this.setScissor=function(C,X,Q,tt){C.isVector4?Jt.set(C.x,C.y,C.z,C.w):Jt.set(C,X,Q,tt),Ut.scissor(st.copy(Jt).multiplyScalar(nt).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(C){Ut.setScissorTest(de=C)},this.setOpaqueSort=function(C){yt=C},this.setTransparentSort=function(C){Lt=C},this.getClearColor=function(C){return C.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,Q=!0){let tt=0;if(C){let q=!1;if(Y!==null){const xt=Y.texture.format;q=xt===kc||xt===Fc||xt===Oc}if(q){const xt=Y.texture.type,Mt=xt===hi||xt===Pr||xt===qs||xt===Ys||xt===Uc||xt===Nc,Ot=jt.getClearColor(),Ft=jt.getClearAlpha(),re=Ot.r,ne=Ot.g,qt=Ot.b;Mt?(M[0]=re,M[1]=ne,M[2]=qt,M[3]=Ft,F.clearBufferuiv(F.COLOR,0,M)):(T[0]=re,T[1]=ne,T[2]=qt,T[3]=Ft,F.clearBufferiv(F.COLOR,0,T))}else tt|=F.COLOR_BUFFER_BIT}X&&(tt|=F.DEPTH_BUFFER_BIT),Q&&(tt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),jt.dispose(),Qt.dispose(),ee.dispose(),Ht.dispose(),E.dispose(),$.dispose(),ot.dispose(),Fe.dispose(),G.dispose(),Vt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",mi),rt.removeEventListener("sessionend",gi),Yn.stop()};function mt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const C=Pe.autoReset,X=Nt.enabled,Q=Nt.autoUpdate,tt=Nt.needsUpdate,q=Nt.type;At(),Pe.autoReset=C,Nt.enabled=X,Nt.autoUpdate=Q,Nt.needsUpdate=tt,Nt.type=q}function Tt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Yt(C){const X=C.target;X.removeEventListener("dispose",Yt),xe(X)}function xe(C){tn(C),Ht.remove(C)}function tn(C){const X=Ht.get(C).programs;X!==void 0&&(X.forEach(function(Q){Vt.releaseProgram(Q)}),C.isShaderMaterial&&Vt.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,Q,tt,q,xt){X===null&&(X=He);const Mt=q.isMesh&&q.matrixWorld.determinant()<0,Ot=Ua(C,X,Q,tt,q);Ut.setMaterial(tt,Mt);let Ft=Q.index,re=1;if(tt.wireframe===!0){if(Ft=K.getWireframeAttribute(Q),Ft===void 0)return;re=2}const ne=Q.drawRange,qt=Q.attributes.position;let Ee=ne.start*re,Ce=(ne.start+ne.count)*re;xt!==null&&(Ee=Math.max(Ee,xt.start*re),Ce=Math.min(Ce,(xt.start+xt.count)*re)),Ft!==null?(Ee=Math.max(Ee,0),Ce=Math.min(Ce,Ft.count)):qt!=null&&(Ee=Math.max(Ee,0),Ce=Math.min(Ce,qt.count));const $e=Ce-Ee;if($e<0||$e===1/0)return;Fe.setup(q,tt,Ot,Q,Ft);let be,ve=It;if(Ft!==null&&(be=ht.get(Ft),ve=Me,ve.setIndex(be)),q.isMesh)tt.wireframe===!0?(Ut.setLineWidth(tt.wireframeLinewidth*ue()),ve.setMode(F.LINES)):ve.setMode(F.TRIANGLES);else if(q.isLine){let Xt=tt.linewidth;Xt===void 0&&(Xt=1),Ut.setLineWidth(Xt*ue()),q.isLineSegments?ve.setMode(F.LINES):q.isLineLoop?ve.setMode(F.LINE_LOOP):ve.setMode(F.LINE_STRIP)}else q.isPoints?ve.setMode(F.POINTS):q.isSprite&&ve.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)sa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))ve.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Xt=q._multiDrawStarts,sn=q._multiDrawCounts,Le=q._multiDrawCount,bn=Ft?ht.get(Ft).bytesPerElement:1,vi=Ht.get(tt).currentProgram.getUniforms();for(let hn=0;hn<Le;hn++)vi.setValue(F,"_gl_DrawID",hn),ve.render(Xt[hn]/bn,sn[hn])}else if(q.isInstancedMesh)ve.renderInstances(Ee,$e,q.count);else if(Q.isInstancedBufferGeometry){const Xt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,sn=Math.min(Q.instanceCount,Xt);ve.renderInstances(Ee,$e,sn)}else ve.render(Ee,$e)};function Ne(C,X,Q){C.transparent===!0&&C.side===Ai&&C.forceSinglePass===!1?(C.side=Ln,C.needsUpdate=!0,Br(C,X,Q),C.side=sr,C.needsUpdate=!0,Br(C,X,Q),C.side=Ai):Br(C,X,Q)}this.compile=function(C,X,Q=null){Q===null&&(Q=C),m=ee.get(Q),m.init(X),U.push(m),Q.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),C!==Q&&C.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights();const tt=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const xt=q.material;if(xt)if(Array.isArray(xt))for(let Mt=0;Mt<xt.length;Mt++){const Ot=xt[Mt];Ne(Ot,Q,q),tt.add(Ot)}else Ne(xt,Q,q),tt.add(xt)}),m=U.pop(),tt},this.compileAsync=function(C,X,Q=null){const tt=this.compile(C,X,Q);return new Promise(q=>{function xt(){if(tt.forEach(function(Mt){Ht.get(Mt).currentProgram.isReady()&&tt.delete(Mt)}),tt.size===0){q(C);return}setTimeout(xt,10)}pe.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let En=null;function Vn(C){En&&En(C)}function mi(){Yn.stop()}function gi(){Yn.start()}const Yn=new Fd;Yn.setAnimationLoop(Vn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(C){En=C,rt.setAnimationLoop(C),C===null?Yn.stop():Yn.start()},rt.addEventListener("sessionstart",mi),rt.addEventListener("sessionend",gi),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(X),X=rt.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,X,Y),m=ee.get(C,U.length),m.init(X),U.push(m),Bt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ct.setFromProjectionMatrix(Bt),kt=this.localClippingEnabled,bt=_t.init(this.clippingPlanes,kt),y=Qt.get(C,O.length),y.init(),O.push(y),rt.enabled===!0&&rt.isPresenting===!0){const xt=R.xr.getDepthSensingMesh();xt!==null&&ki(xt,X,-1/0,R.sortObjects)}ki(C,X,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(yt,Lt),gt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,gt&&jt.addToRenderList(y,C),this.info.render.frame++,bt===!0&&_t.beginShadows();const Q=m.state.shadowsArray;Nt.render(Q,C,X),bt===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=y.opaque,q=y.transmissive;if(m.setupLights(),X.isArrayCamera){const xt=X.cameras;if(q.length>0)for(let Mt=0,Ot=xt.length;Mt<Ot;Mt++){const Ft=xt[Mt];_o(tt,q,C,Ft)}gt&&jt.render(C);for(let Mt=0,Ot=xt.length;Mt<Ot;Mt++){const Ft=xt[Mt];vo(y,C,Ft,Ft.viewport)}}else q.length>0&&_o(tt,q,C,X),gt&&jt.render(C),vo(y,C,X);Y!==null&&u===0&&(L.updateMultisampleRenderTarget(Y),L.updateRenderTargetMipmap(Y)),C.isScene===!0&&C.onAfterRender(R,C,X),Fe.resetDefaultState(),P=-1,A=null,U.pop(),U.length>0?(m=U[U.length-1],bt===!0&&_t.setGlobalState(R.clippingPlanes,m.state.camera)):m=null,O.pop(),O.length>0?y=O[O.length-1]:y=null};function ki(C,X,Q,tt){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ct.intersectsSprite(C)){tt&&zt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Bt);const Mt=ot.update(C),Ot=C.material;Ot.visible&&y.push(C,Mt,Ot,Q,zt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ct.intersectsObject(C))){const Mt=ot.update(C),Ot=C.material;if(tt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),zt.copy(C.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),zt.copy(Mt.boundingSphere.center)),zt.applyMatrix4(C.matrixWorld).applyMatrix4(Bt)),Array.isArray(Ot)){const Ft=Mt.groups;for(let re=0,ne=Ft.length;re<ne;re++){const qt=Ft[re],Ee=Ot[qt.materialIndex];Ee&&Ee.visible&&y.push(C,Mt,Ee,Q,zt.z,qt)}}else Ot.visible&&y.push(C,Mt,Ot,Q,zt.z,null)}}const xt=C.children;for(let Mt=0,Ot=xt.length;Mt<Ot;Mt++)ki(xt[Mt],X,Q,tt)}function vo(C,X,Q,tt){const q=C.opaque,xt=C.transmissive,Mt=C.transparent;m.setupLightsView(Q),bt===!0&&_t.setGlobalState(R.clippingPlanes,Q),tt&&Ut.viewport(V.copy(tt)),q.length>0&&kr(q,X,Q),xt.length>0&&kr(xt,X,Q),Mt.length>0&&kr(Mt,X,Q),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function _o(C,X,Q,tt){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[tt.id]===void 0&&(m.state.transmissionRenderTarget[tt.id]=new Rr(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float")?io:hi,minFilter:Cr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ie.workingColorSpace}));const xt=m.state.transmissionRenderTarget[tt.id],Mt=tt.viewport||V;xt.setSize(Mt.z*R.transmissionResolutionScale,Mt.w*R.transmissionResolutionScale);const Ot=R.getRenderTarget();R.setRenderTarget(xt),R.getClearColor(at),ft=R.getClearAlpha(),ft<1&&R.setClearColor(16777215,.5),R.clear(),gt&&jt.render(Q);const Ft=R.toneMapping;R.toneMapping=ir;const re=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),m.setupLightsView(tt),bt===!0&&_t.setGlobalState(R.clippingPlanes,tt),kr(C,Q,tt),L.updateMultisampleRenderTarget(xt),L.updateRenderTargetMipmap(xt),pe.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let qt=0,Ee=X.length;qt<Ee;qt++){const Ce=X[qt],$e=Ce.object,be=Ce.geometry,ve=Ce.material,Xt=Ce.group;if(ve.side===Ai&&$e.layers.test(tt.layers)){const sn=ve.side;ve.side=Ln,ve.needsUpdate=!0,Ms($e,Q,tt,be,ve,Xt),ve.side=sn,ve.needsUpdate=!0,ne=!0}}ne===!0&&(L.updateMultisampleRenderTarget(xt),L.updateRenderTargetMipmap(xt))}R.setRenderTarget(Ot),R.setClearColor(at,ft),re!==void 0&&(tt.viewport=re),R.toneMapping=Ft}function kr(C,X,Q){const tt=X.isScene===!0?X.overrideMaterial:null;for(let q=0,xt=C.length;q<xt;q++){const Mt=C[q],Ot=Mt.object,Ft=Mt.geometry,re=Mt.group;let ne=Mt.material;ne.allowOverride===!0&&tt!==null&&(ne=tt),Ot.layers.test(Q.layers)&&Ms(Ot,X,Q,Ft,ne,re)}}function Ms(C,X,Q,tt,q,xt){C.onBeforeRender(R,X,Q,tt,q,xt),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(R,X,Q,tt,C,xt),q.transparent===!0&&q.side===Ai&&q.forceSinglePass===!1?(q.side=Ln,q.needsUpdate=!0,R.renderBufferDirect(Q,X,tt,q,C,xt),q.side=sr,q.needsUpdate=!0,R.renderBufferDirect(Q,X,tt,q,C,xt),q.side=Ai):R.renderBufferDirect(Q,X,tt,q,C,xt),C.onAfterRender(R,X,Q,tt,q,xt)}function Br(C,X,Q){X.isScene!==!0&&(X=He);const tt=Ht.get(C),q=m.state.lights,xt=m.state.shadowsArray,Mt=q.state.version,Ot=Vt.getParameters(C,q.state,xt,X,Q),Ft=Vt.getProgramCacheKey(Ot);let re=tt.programs;tt.environment=C.isMeshStandardMaterial?X.environment:null,tt.fog=X.fog,tt.envMap=(C.isMeshStandardMaterial?$:E).get(C.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,re===void 0&&(C.addEventListener("dispose",Yt),re=new Map,tt.programs=re);let ne=re.get(Ft);if(ne!==void 0){if(tt.currentProgram===ne&&tt.lightsStateVersion===Mt)return Es(C,Ot),ne}else Ot.uniforms=Vt.getUniforms(C),C.onBeforeCompile(Ot,R),ne=Vt.acquireProgram(Ot,Ft),re.set(Ft,ne),tt.uniforms=Ot.uniforms;const qt=tt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qt.clippingPlanes=_t.uniform),Es(C,Ot),tt.needsLights=bo(C),tt.lightsStateVersion=Mt,tt.needsLights&&(qt.ambientLightColor.value=q.state.ambient,qt.lightProbe.value=q.state.probe,qt.directionalLights.value=q.state.directional,qt.directionalLightShadows.value=q.state.directionalShadow,qt.spotLights.value=q.state.spot,qt.spotLightShadows.value=q.state.spotShadow,qt.rectAreaLights.value=q.state.rectArea,qt.ltc_1.value=q.state.rectAreaLTC1,qt.ltc_2.value=q.state.rectAreaLTC2,qt.pointLights.value=q.state.point,qt.pointLightShadows.value=q.state.pointShadow,qt.hemisphereLights.value=q.state.hemi,qt.directionalShadowMap.value=q.state.directionalShadowMap,qt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,qt.spotShadowMap.value=q.state.spotShadowMap,qt.spotLightMatrix.value=q.state.spotLightMatrix,qt.spotLightMap.value=q.state.spotLightMap,qt.pointShadowMap.value=q.state.pointShadowMap,qt.pointShadowMatrix.value=q.state.pointShadowMatrix),tt.currentProgram=ne,tt.uniformsList=null,ne}function xo(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=oa.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function Es(C,X){const Q=Ht.get(C);Q.outputColorSpace=X.outputColorSpace,Q.batching=X.batching,Q.batchingColor=X.batchingColor,Q.instancing=X.instancing,Q.instancingColor=X.instancingColor,Q.instancingMorph=X.instancingMorph,Q.skinning=X.skinning,Q.morphTargets=X.morphTargets,Q.morphNormals=X.morphNormals,Q.morphColors=X.morphColors,Q.morphTargetsCount=X.morphTargetsCount,Q.numClippingPlanes=X.numClippingPlanes,Q.numIntersection=X.numClipIntersection,Q.vertexAlphas=X.vertexAlphas,Q.vertexTangents=X.vertexTangents,Q.toneMapping=X.toneMapping}function Ua(C,X,Q,tt,q){X.isScene!==!0&&(X=He),L.resetTextureUnits();const xt=X.fog,Mt=tt.isMeshStandardMaterial?X.environment:null,Ot=Y===null?R.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ms,Ft=(tt.isMeshStandardMaterial?$:E).get(tt.envMap||Mt),re=tt.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ne=!!Q.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),qt=!!Q.morphAttributes.position,Ee=!!Q.morphAttributes.normal,Ce=!!Q.morphAttributes.color;let $e=ir;tt.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&($e=R.toneMapping);const be=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ve=be!==void 0?be.length:0,Xt=Ht.get(tt),sn=m.state.lights;if(bt===!0&&(kt===!0||C!==A)){const dn=C===A&&tt.id===P;_t.setState(tt,C,dn)}let Le=!1;tt.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==sn.state.version||Xt.outputColorSpace!==Ot||q.isBatchedMesh&&Xt.batching===!1||!q.isBatchedMesh&&Xt.batching===!0||q.isBatchedMesh&&Xt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Xt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Xt.instancing===!1||!q.isInstancedMesh&&Xt.instancing===!0||q.isSkinnedMesh&&Xt.skinning===!1||!q.isSkinnedMesh&&Xt.skinning===!0||q.isInstancedMesh&&Xt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Xt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Xt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Xt.instancingMorph===!1&&q.morphTexture!==null||Xt.envMap!==Ft||tt.fog===!0&&Xt.fog!==xt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==_t.numPlanes||Xt.numIntersection!==_t.numIntersection)||Xt.vertexAlphas!==re||Xt.vertexTangents!==ne||Xt.morphTargets!==qt||Xt.morphNormals!==Ee||Xt.morphColors!==Ce||Xt.toneMapping!==$e||Xt.morphTargetsCount!==ve)&&(Le=!0):(Le=!0,Xt.__version=tt.version);let bn=Xt.currentProgram;Le===!0&&(bn=Br(tt,X,q));let vi=!1,hn=!1,Vi=!1;const Ge=bn.getUniforms(),Tn=Xt.uniforms;if(Ut.useProgram(bn.program)&&(vi=!0,hn=!0,Vi=!0),tt.id!==P&&(P=tt.id,hn=!0),vi||A!==C){Ut.buffers.depth.getReversed()?(St.copy(C.projectionMatrix),um(St),hm(St),Ge.setValue(F,"projectionMatrix",St)):Ge.setValue(F,"projectionMatrix",C.projectionMatrix),Ge.setValue(F,"viewMatrix",C.matrixWorldInverse);const en=Ge.map.cameraPosition;en!==void 0&&en.setValue(F,oe.setFromMatrixPosition(C.matrixWorld)),te.logarithmicDepthBuffer&&Ge.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Ge.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,hn=!0,Vi=!0)}if(q.isSkinnedMesh){Ge.setOptional(F,q,"bindMatrix"),Ge.setOptional(F,q,"bindMatrixInverse");const dn=q.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Ge.setValue(F,"boneTexture",dn.boneTexture,L))}q.isBatchedMesh&&(Ge.setOptional(F,q,"batchingTexture"),Ge.setValue(F,"batchingTexture",q._matricesTexture,L),Ge.setOptional(F,q,"batchingIdTexture"),Ge.setValue(F,"batchingIdTexture",q._indirectTexture,L),Ge.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&Ge.setValue(F,"batchingColorTexture",q._colorsTexture,L));const qe=Q.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0)&&$t.update(q,Q,bn),(hn||Xt.receiveShadow!==q.receiveShadow)&&(Xt.receiveShadow=q.receiveShadow,Ge.setValue(F,"receiveShadow",q.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Tn.envMap.value=Ft,Tn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&X.environment!==null&&(Tn.envMapIntensity.value=X.environmentIntensity),hn&&(Ge.setValue(F,"toneMappingExposure",R.toneMappingExposure),Xt.needsLights&&Bi(Tn,Vi),xt&&tt.fog===!0&&Ct.refreshFogUniforms(Tn,xt),Ct.refreshMaterialUniforms(Tn,tt,nt,lt,m.state.transmissionRenderTarget[C.id]),oa.upload(F,xo(Xt),Tn,L)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(oa.upload(F,xo(Xt),Tn,L),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Ge.setValue(F,"center",q.center),Ge.setValue(F,"modelViewMatrix",q.modelViewMatrix),Ge.setValue(F,"normalMatrix",q.normalMatrix),Ge.setValue(F,"modelMatrix",q.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const dn=tt.uniformsGroups;for(let en=0,As=dn.length;en<As;en++){const _i=dn[en];G.update(_i,bn),G.bind(_i,bn)}}return bn}function Bi(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function bo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return u},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(C,X,Q){const tt=Ht.get(C);tt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),Ht.get(C.texture).__webglTexture=X,Ht.get(C.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:Q,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){const Q=Ht.get(C);Q.__webglFramebuffer=X,Q.__useDefaultFramebuffer=X===void 0};const Ts=F.createFramebuffer();this.setRenderTarget=function(C,X=0,Q=0){Y=C,z=X,u=Q;let tt=!0,q=null,xt=!1,Mt=!1;if(C){const Ft=Ht.get(C);if(Ft.__useDefaultFramebuffer!==void 0)Ut.bindFramebuffer(F.FRAMEBUFFER,null),tt=!1;else if(Ft.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(Ft.__hasExternalTextures)L.rebindTextures(C,Ht.get(C.texture).__webglTexture,Ht.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const qt=C.depthTexture;if(Ft.__boundDepthTexture!==qt){if(qt!==null&&Ht.has(qt)&&(C.width!==qt.image.width||C.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const re=C.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(Mt=!0);const ne=Ht.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ne[X])?q=ne[X][Q]:q=ne[X],xt=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?q=Ht.get(C).__webglMultisampledFramebuffer:Array.isArray(ne)?q=ne[Q]:q=ne,V.copy(C.viewport),st.copy(C.scissor),j=C.scissorTest}else V.copy(Wt).multiplyScalar(nt).floor(),st.copy(Jt).multiplyScalar(nt).floor(),j=de;if(Q!==0&&(q=Ts),Ut.bindFramebuffer(F.FRAMEBUFFER,q)&&tt&&Ut.drawBuffers(C,q),Ut.viewport(V),Ut.scissor(st),Ut.setScissorTest(j),xt){const Ft=Ht.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ft.__webglTexture,Q)}else if(Mt){const Ft=Ht.get(C.texture),re=X;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ft.__webglTexture,Q,re)}else if(C!==null&&Q!==0){const Ft=Ht.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ft.__webglTexture,Q)}P=-1},this.readRenderTargetPixels=function(C,X,Q,tt,q,xt,Mt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Ht.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Mt!==void 0&&(Ot=Ot[Mt]),Ot){Ut.bindFramebuffer(F.FRAMEBUFFER,Ot);try{const Ft=C.texture,re=Ft.format,ne=Ft.type;if(!te.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-tt&&Q>=0&&Q<=C.height-q&&F.readPixels(X,Q,tt,q,ae.convert(re),ae.convert(ne),xt)}finally{const Ft=Y!==null?Ht.get(Y).__webglFramebuffer:null;Ut.bindFramebuffer(F.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(C,X,Q,tt,q,xt,Mt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Ht.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Mt!==void 0&&(Ot=Ot[Mt]),Ot)if(X>=0&&X<=C.width-tt&&Q>=0&&Q<=C.height-q){Ut.bindFramebuffer(F.FRAMEBUFFER,Ot);const Ft=C.texture,re=Ft.format,ne=Ft.type;if(!te.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,qt),F.bufferData(F.PIXEL_PACK_BUFFER,xt.byteLength,F.STREAM_READ),F.readPixels(X,Q,tt,q,ae.convert(re),ae.convert(ne),0);const Ee=Y!==null?Ht.get(Y).__webglFramebuffer:null;Ut.bindFramebuffer(F.FRAMEBUFFER,Ee);const Ce=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await cm(F,Ce,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,qt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,xt),F.deleteBuffer(qt),F.deleteSync(Ce),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,X=null,Q=0){const tt=Math.pow(2,-Q),q=Math.floor(C.image.width*tt),xt=Math.floor(C.image.height*tt),Mt=X!==null?X.x:0,Ot=X!==null?X.y:0;L.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,Q,0,0,Mt,Ot,q,xt),Ut.unbindTexture()};const Cs=F.createFramebuffer(),Vr=F.createFramebuffer();this.copyTextureToTexture=function(C,X,Q=null,tt=null,q=0,xt=null){xt===null&&(q!==0?(sa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=q,q=0):xt=0);let Mt,Ot,Ft,re,ne,qt,Ee,Ce,$e;const be=C.isCompressedTexture?C.mipmaps[xt]:C.image;if(Q!==null)Mt=Q.max.x-Q.min.x,Ot=Q.max.y-Q.min.y,Ft=Q.isBox3?Q.max.z-Q.min.z:1,re=Q.min.x,ne=Q.min.y,qt=Q.isBox3?Q.min.z:0;else{const qe=Math.pow(2,-q);Mt=Math.floor(be.width*qe),Ot=Math.floor(be.height*qe),C.isDataArrayTexture?Ft=be.depth:C.isData3DTexture?Ft=Math.floor(be.depth*qe):Ft=1,re=0,ne=0,qt=0}tt!==null?(Ee=tt.x,Ce=tt.y,$e=tt.z):(Ee=0,Ce=0,$e=0);const ve=ae.convert(X.format),Xt=ae.convert(X.type);let sn;X.isData3DTexture?(L.setTexture3D(X,0),sn=F.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(L.setTexture2DArray(X,0),sn=F.TEXTURE_2D_ARRAY):(L.setTexture2D(X,0),sn=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);const Le=F.getParameter(F.UNPACK_ROW_LENGTH),bn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),vi=F.getParameter(F.UNPACK_SKIP_PIXELS),hn=F.getParameter(F.UNPACK_SKIP_ROWS),Vi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,be.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,be.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,re),F.pixelStorei(F.UNPACK_SKIP_ROWS,ne),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qt);const Ge=C.isDataArrayTexture||C.isData3DTexture,Tn=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const qe=Ht.get(C),dn=Ht.get(X),en=Ht.get(qe.__renderTarget),As=Ht.get(dn.__renderTarget);Ut.bindFramebuffer(F.READ_FRAMEBUFFER,en.__webglFramebuffer),Ut.bindFramebuffer(F.DRAW_FRAMEBUFFER,As.__webglFramebuffer);for(let _i=0;_i<Ft;_i++)Ge&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(C).__webglTexture,q,qt+_i),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(X).__webglTexture,xt,$e+_i)),F.blitFramebuffer(re,ne,Mt,Ot,Ee,Ce,Mt,Ot,F.DEPTH_BUFFER_BIT,F.NEAREST);Ut.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||C.isRenderTargetTexture||Ht.has(C)){const qe=Ht.get(C),dn=Ht.get(X);Ut.bindFramebuffer(F.READ_FRAMEBUFFER,Cs),Ut.bindFramebuffer(F.DRAW_FRAMEBUFFER,Vr);for(let en=0;en<Ft;en++)Ge?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qe.__webglTexture,q,qt+en):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,qe.__webglTexture,q),Tn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,dn.__webglTexture,xt,$e+en):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,dn.__webglTexture,xt),q!==0?F.blitFramebuffer(re,ne,Mt,Ot,Ee,Ce,Mt,Ot,F.COLOR_BUFFER_BIT,F.NEAREST):Tn?F.copyTexSubImage3D(sn,xt,Ee,Ce,$e+en,re,ne,Mt,Ot):F.copyTexSubImage2D(sn,xt,Ee,Ce,re,ne,Mt,Ot);Ut.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Tn?C.isDataTexture||C.isData3DTexture?F.texSubImage3D(sn,xt,Ee,Ce,$e,Mt,Ot,Ft,ve,Xt,be.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D(sn,xt,Ee,Ce,$e,Mt,Ot,Ft,ve,be.data):F.texSubImage3D(sn,xt,Ee,Ce,$e,Mt,Ot,Ft,ve,Xt,be):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,xt,Ee,Ce,Mt,Ot,ve,Xt,be.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,xt,Ee,Ce,be.width,be.height,ve,be.data):F.texSubImage2D(F.TEXTURE_2D,xt,Ee,Ce,Mt,Ot,ve,Xt,be);F.pixelStorei(F.UNPACK_ROW_LENGTH,Le),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,vi),F.pixelStorei(F.UNPACK_SKIP_ROWS,hn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Vi),xt===0&&X.generateMipmaps&&F.generateMipmap(sn),Ut.unbindTexture()},this.copyTextureToTexture3D=function(C,X,Q=null,tt=null,q=0){return sa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,X,Q,tt,q)},this.initRenderTarget=function(C){Ht.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Ut.unbindTexture()},this.resetState=function(){z=0,u=0,Y=null,Ut.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ie._getUnpackColorSpace()}}const kh={type:"change"},jc={type:"start"},Hd={type:"end"},Ko=new Ca,Bh=new Qi,Ux=Math.cos(70*am.DEG2RAD),an=new B,Pn=2*Math.PI,Ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Al=1e-6;class Nx extends Km{constructor(t,e=null){super(t,e),this.state=Ve.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:as.ROTATE,MIDDLE:as.DOLLY,RIGHT:as.PAN},this.touches={ONE:ss.ROTATE,TWO:ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new or,this._lastTargetPosition=new B,this._quat=new or().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new hh,this._sphericalDelta=new hh,this._scale=1,this._panOffset=new B,this._rotateStart=new he,this._rotateEnd=new he,this._rotateDelta=new he,this._panStart=new he,this._panEnd=new he,this._panDelta=new he,this._dollyStart=new he,this._dollyEnd=new he,this._dollyDelta=new he,this._dollyDirection=new B,this._mouse=new he,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Fx.bind(this),this._onPointerDown=Ox.bind(this),this._onPointerUp=kx.bind(this),this._onContextMenu=jx.bind(this),this._onMouseWheel=zx.bind(this),this._onKeyDown=Hx.bind(this),this._onTouchStart=Gx.bind(this),this._onTouchMove=Wx.bind(this),this._onMouseDown=Bx.bind(this),this._onMouseMove=Vx.bind(this),this._interceptControlDown=Xx.bind(this),this._interceptControlUp=qx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(kh),this.update(),this.state=Ve.NONE}update(t=null){const e=this.object.position;an.copy(e).sub(this.target),an.applyQuaternion(this._quat),this._spherical.setFromVector3(an),this.autoRotate&&this.state===Ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Pn:i>Math.PI&&(i-=Pn),r<-Math.PI?r+=Pn:r>Math.PI&&(r-=Pn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=l!=this._spherical.radius}if(an.setFromSpherical(this._spherical),an.applyQuaternion(this._quatInverse),e.copy(this.target).add(an),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const c=an.length();l=this._clampDistance(c*this._scale);const d=c-l;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),s=!!d}else if(this.object.isOrthographicCamera){const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=d!==this.object.zoom;const f=new B(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(c),this.object.updateMatrixWorld(),l=an.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(Ko.origin.copy(this.object.position),Ko.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ko.direction))<Ux?this.object.lookAt(this.target):(Bh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ko.intersectPlane(Bh,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Al||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Al||this._lastTargetPosition.distanceToSquared(this.target)>Al?(this.dispatchEvent(kh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Pn/60*this.autoRotateSpeed*t:Pn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){an.setFromMatrixColumn(e,0),an.multiplyScalar(-t),this._panOffset.add(an)}_panUp(t,e){this.screenSpacePanning===!0?an.setFromMatrixColumn(e,1):(an.setFromMatrixColumn(e,0),an.crossVectors(this.object.up,an)),an.multiplyScalar(t),this._panOffset.add(an)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;an.copy(r).sub(this.target);let s=an.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,l=i.width,c=i.height;this._mouse.x=r/l*2-1,this._mouse.y=-(s/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(t.pageX+e.x)*.5,c=(t.pageY+e.y)*.5;this._updateZoomParameters(l,c)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new he,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Ox(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Fx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function kx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hd),this.state=Ve.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Bx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case as.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ve.DOLLY;break;case as.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ve.ROTATE}break;case as.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ve.PAN}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(jc)}function Vx(n){switch(this.state){case Ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function zx(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ve.NONE||(n.preventDefault(),this.dispatchEvent(jc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Hd))}function Hx(n){this.enabled!==!1&&this._handleKeyDown(n)}function Gx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ss.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ve.TOUCH_ROTATE;break;case ss.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ve.TOUCH_PAN;break;default:this.state=Ve.NONE}break;case 2:switch(this.touches.TWO){case ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ve.TOUCH_DOLLY_PAN;break;case ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ve.TOUCH_DOLLY_ROTATE;break;default:this.state=Ve.NONE}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(jc)}function Wx(n){switch(this._trackPointer(n),this.state){case Ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ve.NONE}}function jx(n){this.enabled!==!1&&n.preventDefault()}function Xx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function qx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Gd extends Rn{constructor(e,i,r,s,l){super(e,i,r,s);Zt(this,"controls");this.controls=new Nx(this,l)}update(){this.controls.update()}}class Yx extends Gd{constructor(e,i,r,s,l){super(e,i,r,s,l);Zt(this,"target");Zt(this,"offset",new B(0,2,5));Zt(this,"rotationAngle",0);Zt(this,"targetPosition",new B);Zt(this,"currentTargetPosition",new B);Zt(this,"targetOffset",new B);Zt(this,"currentOffset",new B(0,2,5));Zt(this,"transitionSpeed",2);Zt(this,"clock");this.clock=new Gc,this.targetPosition.copy(this.position),this.currentTargetPosition.copy(this.position)}setTarget(e){this.target=e,e&&this.targetPosition.copy(e.position),this.calculateTargetOffset()}rotateHorizontal(e){this.rotationAngle+=e,this.calculateTargetOffset()}calculateTargetOffset(){this.targetOffset.set(Math.sin(this.rotationAngle)*this.offset.z,this.offset.y,Math.cos(this.rotationAngle)*this.offset.z)}updatePosition(){if(!this.target)return;const e=this.clock.getDelta();this.targetPosition.copy(this.target.position);const i=Math.min(1,this.transitionSpeed*e);this.currentOffset.lerp(this.targetOffset,i),this.currentTargetPosition.lerp(this.targetPosition,i),this.position.copy(this.currentTargetPosition).add(this.currentOffset),this.lookAt(this.currentTargetPosition)}update(){this.target&&this.updatePosition()}setTransitionSpeed(e){this.transitionSpeed=Math.max(.1,e)}}class Wd{constructor(){Zt(this,"children",[])}add(t){this.children.push(t)}update(t){for(const e of this.children)e.update(t)}}class va extends Wd{constructor(e){super();Zt(this,"triggers",[]);Zt(this,"mesh");this.mesh=e}addDependency(e,i){this.triggers.push([e,i])}update(e){super.update(e);for(const[i,r]of this.triggers)i()&&r()}}function $x(n,t){n.updateWorldMatrix(!0,!1),t.updateWorldMatrix(!0,!1);const e=new Dr().setFromObject(n),i=new Dr().setFromObject(t);return e.intersectsBox(i)}const Er=new B(0,1,0),Vh=.8,zs=2,Kx=.3,Zx=.75,Zo=new Ym;class Mc extends va{constructor(e,i,r){const s=new _s(Vh,zs,Kx);s.translate(0,zs/2,-.3/2);super(new gn(s,i));Zt(this,"toppling",!1);Zt(this,"fallen",!1);Zt(this,"standingMat");Zt(this,"fallenMat");Zt(this,"fwdAxis");Zt(this,"toppleAxis");Zt(this,"collideNodes",[]);this.mesh.userData.domino=this,this.mesh.castShadow=!0,this.mesh.translateOnAxis(Er,-2/2),this.standingMat=i,this.fallenMat=r,this.fwdAxis=e.clone().normalize();const l=new B(0,0,1),c=new or().setFromUnitVectors(l,this.fwdAxis);this.mesh.quaternion.premultiply(c),this.toppleAxis=new B().crossVectors(Er,this.fwdAxis).normalize()}setPosition(e,i,r){this.mesh.position.set(e,i,r),this.mesh.translateOnAxis(Er,-2/2)}updateAxes(e){this.fwdAxis=e.clone().normalize(),this.mesh.rotateY(new B(0,0,1).angleTo(e)),this.toppleAxis=new B().crossVectors(Er,this.fwdAxis).normalize()}addCollidable(e){this.collideNodes.push(e)}rayOrigin(e){const i=this.mesh.position.clone(),r=this.toppleAxis.clone().normalize().multiplyScalar(Vh/2);return e===0?i.add(r):i.sub(r)}get rayDirection(){return new B(0,zs,0).applyQuaternion(this.mesh.quaternion).normalize()}topple(){this.toppling=!0;let e=0;const i=new B().crossVectors(Er,this.fwdAxis).normalize(),r=50;let s=0;this.addDependency(()=>!this.fallen,()=>{this.update=l=>{if(this.fallen)return;const c=Zx*l;Zo.set(this.rayOrigin(0),this.rayDirection);const d=Zo.intersectObjects(this.collideNodes.map(_=>_.mesh),!1);Zo.set(this.rayOrigin(1),this.rayDirection);const f=Zo.intersectObjects(this.collideNodes.map(_=>_.mesh),!1);if(e>=Math.PI/2||s>=r){this.fallen=!0,this.mesh.material=this.fallenMat;return}const g=d.find(_=>_.distance<=zs+.01),v=f.find(_=>_.distance<=zs+.01);if(g||v){g&&g.object instanceof gn&&g.object.userData.domino&&!g.object.userData.domino.toppling&&g.object.userData.domino.topple(),v&&v.object instanceof gn&&v.object.userData.domino&&!v.object.userData.domino.toppling&&v.object.userData.domino.topple(),s++;return}s=0,e+=c,this.mesh.rotateOnWorldAxis(i,c)}})}}const zh=1,Jx=1.5;class Qx extends va{constructor(e,i){super(new gn(new Aa(zh),i));Zt(this,"collided",!1);Zt(this,"fwdAxis");Zt(this,"collideNodes",[]);this.mesh.castShadow=!0,this.fwdAxis=e.clone().normalize()}addCollidable(e){this.collideNodes.push(e)}roll(){const e=new B().crossVectors(Er,this.fwdAxis).normalize();this.addDependency(()=>!this.collided,()=>{this.update=i=>{if(this.collided)return;for(const l of this.collideNodes)l instanceof Mc&&$x(this.mesh,l.mesh)&&(console.info("sphere collided with domino"),this.collided=!0,l.topple());const r=Jx*i;this.mesh.rotateOnAxis(e,r);const s=this.fwdAxis.clone().multiplyScalar(r*zh);this.mesh.position.add(s)}})}}function tb(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var aa={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var eb=aa.exports,Hh;function nb(){return Hh||(Hh=1,function(n){(function(t,e){n.exports=t.document?e(t,!0):function(i){if(!i.document)throw new Error("jQuery requires a window with a document");return e(i)}})(typeof window<"u"?window:eb,function(t,e){var i=[],r=Object.getPrototypeOf,s=i.slice,l=i.flat?function(o){return i.flat.call(o)}:function(o){return i.concat.apply([],o)},c=i.push,d=i.indexOf,f={},g=f.toString,v=f.hasOwnProperty,_=v.toString,w=_.call(Object),M={},T=function(a){return typeof a=="function"&&typeof a.nodeType!="number"&&typeof a.item!="function"},y=function(a){return a!=null&&a===a.window},m=t.document,O={type:!0,src:!0,nonce:!0,noModule:!0};function U(o,a,h){h=h||m;var p,x,b=h.createElement("script");if(b.text=o,a)for(p in O)x=a[p]||a.getAttribute&&a.getAttribute(p),x&&b.setAttribute(p,x);h.head.appendChild(b).parentNode.removeChild(b)}function R(o){return o==null?o+"":typeof o=="object"||typeof o=="function"?f[g.call(o)]||"object":typeof o}var W="3.7.1",z=/HTML$/i,u=function(o,a){return new u.fn.init(o,a)};u.fn=u.prototype={jquery:W,constructor:u,length:0,toArray:function(){return s.call(this)},get:function(o){return o==null?s.call(this):o<0?this[o+this.length]:this[o]},pushStack:function(o){var a=u.merge(this.constructor(),o);return a.prevObject=this,a},each:function(o){return u.each(this,o)},map:function(o){return this.pushStack(u.map(this,function(a,h){return o.call(a,h,a)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(u.grep(this,function(o,a){return(a+1)%2}))},odd:function(){return this.pushStack(u.grep(this,function(o,a){return a%2}))},eq:function(o){var a=this.length,h=+o+(o<0?a:0);return this.pushStack(h>=0&&h<a?[this[h]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:i.sort,splice:i.splice},u.extend=u.fn.extend=function(){var o,a,h,p,x,b,S=arguments[0]||{},N=1,I=arguments.length,H=!1;for(typeof S=="boolean"&&(H=S,S=arguments[N]||{},N++),typeof S!="object"&&!T(S)&&(S={}),N===I&&(S=this,N--);N<I;N++)if((o=arguments[N])!=null)for(a in o)p=o[a],!(a==="__proto__"||S===p)&&(H&&p&&(u.isPlainObject(p)||(x=Array.isArray(p)))?(h=S[a],x&&!Array.isArray(h)?b=[]:!x&&!u.isPlainObject(h)?b={}:b=h,x=!1,S[a]=u.extend(H,b,p)):p!==void 0&&(S[a]=p));return S},u.extend({expando:"jQuery"+(W+Math.random()).replace(/\D/g,""),isReady:!0,error:function(o){throw new Error(o)},noop:function(){},isPlainObject:function(o){var a,h;return!o||g.call(o)!=="[object Object]"?!1:(a=r(o),a?(h=v.call(a,"constructor")&&a.constructor,typeof h=="function"&&_.call(h)===w):!0)},isEmptyObject:function(o){var a;for(a in o)return!1;return!0},globalEval:function(o,a,h){U(o,{nonce:a&&a.nonce},h)},each:function(o,a){var h,p=0;if(Y(o))for(h=o.length;p<h&&a.call(o[p],p,o[p])!==!1;p++);else for(p in o)if(a.call(o[p],p,o[p])===!1)break;return o},text:function(o){var a,h="",p=0,x=o.nodeType;if(!x)for(;a=o[p++];)h+=u.text(a);return x===1||x===11?o.textContent:x===9?o.documentElement.textContent:x===3||x===4?o.nodeValue:h},makeArray:function(o,a){var h=a||[];return o!=null&&(Y(Object(o))?u.merge(h,typeof o=="string"?[o]:o):c.call(h,o)),h},inArray:function(o,a,h){return a==null?-1:d.call(a,o,h)},isXMLDoc:function(o){var a=o&&o.namespaceURI,h=o&&(o.ownerDocument||o).documentElement;return!z.test(a||h&&h.nodeName||"HTML")},merge:function(o,a){for(var h=+a.length,p=0,x=o.length;p<h;p++)o[x++]=a[p];return o.length=x,o},grep:function(o,a,h){for(var p,x=[],b=0,S=o.length,N=!h;b<S;b++)p=!a(o[b],b),p!==N&&x.push(o[b]);return x},map:function(o,a,h){var p,x,b=0,S=[];if(Y(o))for(p=o.length;b<p;b++)x=a(o[b],b,h),x!=null&&S.push(x);else for(b in o)x=a(o[b],b,h),x!=null&&S.push(x);return l(S)},guid:1,support:M}),typeof Symbol=="function"&&(u.fn[Symbol.iterator]=i[Symbol.iterator]),u.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(o,a){f["[object "+a+"]"]=a.toLowerCase()});function Y(o){var a=!!o&&"length"in o&&o.length,h=R(o);return T(o)||y(o)?!1:h==="array"||a===0||typeof a=="number"&&a>0&&a-1 in o}function P(o,a){return o.nodeName&&o.nodeName.toLowerCase()===a.toLowerCase()}var A=i.pop,V=i.sort,st=i.splice,j="[\\x20\\t\\r\\n\\f]",at=new RegExp("^"+j+"+|((?:^|[^\\\\])(?:\\\\.)*)"+j+"+$","g");u.contains=function(o,a){var h=a&&a.parentNode;return o===h||!!(h&&h.nodeType===1&&(o.contains?o.contains(h):o.compareDocumentPosition&&o.compareDocumentPosition(h)&16))};var ft=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function ut(o,a){return a?o==="\0"?"�":o.slice(0,-1)+"\\"+o.charCodeAt(o.length-1).toString(16)+" ":"\\"+o}u.escapeSelector=function(o){return(o+"").replace(ft,ut)};var lt=m,nt=c;(function(){var o,a,h,p,x,b=nt,S,N,I,H,it,pt=u.expando,J=0,vt=0,se=yo(),Ae=yo(),me=yo(),mn=yo(),on=function(D,k){return D===k&&(x=!0),0},ni="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ii="(?:\\\\[\\da-fA-F]{1,6}"+j+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Te="\\["+j+"*("+ii+")(?:"+j+"*([*^$|!~]?=)"+j+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+ii+"))|)"+j+"*\\]",hr=":("+ii+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Te+")*)|.*)\\)|)",Re=new RegExp(j+"+","g"),Ze=new RegExp("^"+j+"*,"+j+"*"),Ds=new RegExp("^"+j+"*([>+~]|"+j+")"+j+"*"),Ha=new RegExp(j+"|>"),ri=new RegExp(hr),Ls=new RegExp("^"+ii+"$"),si={ID:new RegExp("^#("+ii+")"),CLASS:new RegExp("^\\.("+ii+")"),TAG:new RegExp("^("+ii+"|[*])"),ATTR:new RegExp("^"+Te),PSEUDO:new RegExp("^"+hr),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+j+"*(even|odd|(([+-]|)(\\d*)n|)"+j+"*(?:([+-]|)"+j+"*(\\d+)|))"+j+"*\\)|)","i"),bool:new RegExp("^(?:"+ni+")$","i"),needsContext:new RegExp("^"+j+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+j+"*((?:-\\d)?\\d*)"+j+"*\\)|)(?=[^-]|$)","i")},zi=/^(?:input|select|textarea|button)$/i,Hi=/^h\d$/i,zn=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Ga=/[+~]/,xi=new RegExp("\\\\[\\da-fA-F]{1,6}"+j+"?|\\\\([^\\r\\n\\f])","g"),bi=function(D,k){var Z="0x"+D.slice(1)-65536;return k||(Z<0?String.fromCharCode(Z+65536):String.fromCharCode(Z>>10|55296,Z&1023|56320))},uf=function(){Gi()},hf=So(function(D){return D.disabled===!0&&P(D,"fieldset")},{dir:"parentNode",next:"legend"});function df(){try{return S.activeElement}catch{}}try{b.apply(i=s.call(lt.childNodes),lt.childNodes),i[lt.childNodes.length].nodeType}catch{b={apply:function(k,Z){nt.apply(k,s.call(Z))},call:function(k){nt.apply(k,s.call(arguments,1))}}}function ke(D,k,Z,et){var dt,wt,Rt,Gt,Dt,ye,ie,le=k&&k.ownerDocument,we=k?k.nodeType:9;if(Z=Z||[],typeof D!="string"||!D||we!==1&&we!==9&&we!==11)return Z;if(!et&&(Gi(k),k=k||S,I)){if(we!==11&&(Dt=zn.exec(D)))if(dt=Dt[1]){if(we===9)if(Rt=k.getElementById(dt)){if(Rt.id===dt)return b.call(Z,Rt),Z}else return Z;else if(le&&(Rt=le.getElementById(dt))&&ke.contains(k,Rt)&&Rt.id===dt)return b.call(Z,Rt),Z}else{if(Dt[2])return b.apply(Z,k.getElementsByTagName(D)),Z;if((dt=Dt[3])&&k.getElementsByClassName)return b.apply(Z,k.getElementsByClassName(dt)),Z}if(!mn[D+" "]&&(!H||!H.test(D))){if(ie=D,le=k,we===1&&(Ha.test(D)||Ds.test(D))){for(le=Ga.test(D)&&Wa(k.parentNode)||k,(le!=k||!M.scope)&&((Gt=k.getAttribute("id"))?Gt=u.escapeSelector(Gt):k.setAttribute("id",Gt=pt)),ye=Is(D),wt=ye.length;wt--;)ye[wt]=(Gt?"#"+Gt:":scope")+" "+wo(ye[wt]);ie=ye.join(",")}try{return b.apply(Z,le.querySelectorAll(ie)),Z}catch{mn(D,!0)}finally{Gt===pt&&k.removeAttribute("id")}}}return Pu(D.replace(at,"$1"),k,Z,et)}function yo(){var D=[];function k(Z,et){return D.push(Z+" ")>a.cacheLength&&delete k[D.shift()],k[Z+" "]=et}return k}function $n(D){return D[pt]=!0,D}function zr(D){var k=S.createElement("fieldset");try{return!!D(k)}catch{return!1}finally{k.parentNode&&k.parentNode.removeChild(k),k=null}}function pf(D){return function(k){return P(k,"input")&&k.type===D}}function ff(D){return function(k){return(P(k,"input")||P(k,"button"))&&k.type===D}}function Cu(D){return function(k){return"form"in k?k.parentNode&&k.disabled===!1?"label"in k?"label"in k.parentNode?k.parentNode.disabled===D:k.disabled===D:k.isDisabled===D||k.isDisabled!==!D&&hf(k)===D:k.disabled===D:"label"in k?k.disabled===D:!1}}function dr(D){return $n(function(k){return k=+k,$n(function(Z,et){for(var dt,wt=D([],Z.length,k),Rt=wt.length;Rt--;)Z[dt=wt[Rt]]&&(Z[dt]=!(et[dt]=Z[dt]))})})}function Wa(D){return D&&typeof D.getElementsByTagName<"u"&&D}function Gi(D){var k,Z=D?D.ownerDocument||D:lt;return Z==S||Z.nodeType!==9||!Z.documentElement||(S=Z,N=S.documentElement,I=!u.isXMLDoc(S),it=N.matches||N.webkitMatchesSelector||N.msMatchesSelector,N.msMatchesSelector&&lt!=S&&(k=S.defaultView)&&k.top!==k&&k.addEventListener("unload",uf),M.getById=zr(function(et){return N.appendChild(et).id=u.expando,!S.getElementsByName||!S.getElementsByName(u.expando).length}),M.disconnectedMatch=zr(function(et){return it.call(et,"*")}),M.scope=zr(function(){return S.querySelectorAll(":scope")}),M.cssHas=zr(function(){try{return S.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),M.getById?(a.filter.ID=function(et){var dt=et.replace(xi,bi);return function(wt){return wt.getAttribute("id")===dt}},a.find.ID=function(et,dt){if(typeof dt.getElementById<"u"&&I){var wt=dt.getElementById(et);return wt?[wt]:[]}}):(a.filter.ID=function(et){var dt=et.replace(xi,bi);return function(wt){var Rt=typeof wt.getAttributeNode<"u"&&wt.getAttributeNode("id");return Rt&&Rt.value===dt}},a.find.ID=function(et,dt){if(typeof dt.getElementById<"u"&&I){var wt,Rt,Gt,Dt=dt.getElementById(et);if(Dt){if(wt=Dt.getAttributeNode("id"),wt&&wt.value===et)return[Dt];for(Gt=dt.getElementsByName(et),Rt=0;Dt=Gt[Rt++];)if(wt=Dt.getAttributeNode("id"),wt&&wt.value===et)return[Dt]}return[]}}),a.find.TAG=function(et,dt){return typeof dt.getElementsByTagName<"u"?dt.getElementsByTagName(et):dt.querySelectorAll(et)},a.find.CLASS=function(et,dt){if(typeof dt.getElementsByClassName<"u"&&I)return dt.getElementsByClassName(et)},H=[],zr(function(et){var dt;N.appendChild(et).innerHTML="<a id='"+pt+"' href='' disabled='disabled'></a><select id='"+pt+"-\r\\' disabled='disabled'><option selected=''></option></select>",et.querySelectorAll("[selected]").length||H.push("\\["+j+"*(?:value|"+ni+")"),et.querySelectorAll("[id~="+pt+"-]").length||H.push("~="),et.querySelectorAll("a#"+pt+"+*").length||H.push(".#.+[+~]"),et.querySelectorAll(":checked").length||H.push(":checked"),dt=S.createElement("input"),dt.setAttribute("type","hidden"),et.appendChild(dt).setAttribute("name","D"),N.appendChild(et).disabled=!0,et.querySelectorAll(":disabled").length!==2&&H.push(":enabled",":disabled"),dt=S.createElement("input"),dt.setAttribute("name",""),et.appendChild(dt),et.querySelectorAll("[name='']").length||H.push("\\["+j+"*name"+j+"*="+j+`*(?:''|"")`)}),M.cssHas||H.push(":has"),H=H.length&&new RegExp(H.join("|")),on=function(et,dt){if(et===dt)return x=!0,0;var wt=!et.compareDocumentPosition-!dt.compareDocumentPosition;return wt||(wt=(et.ownerDocument||et)==(dt.ownerDocument||dt)?et.compareDocumentPosition(dt):1,wt&1||!M.sortDetached&&dt.compareDocumentPosition(et)===wt?et===S||et.ownerDocument==lt&&ke.contains(lt,et)?-1:dt===S||dt.ownerDocument==lt&&ke.contains(lt,dt)?1:p?d.call(p,et)-d.call(p,dt):0:wt&4?-1:1)}),S}ke.matches=function(D,k){return ke(D,null,null,k)},ke.matchesSelector=function(D,k){if(Gi(D),I&&!mn[k+" "]&&(!H||!H.test(k)))try{var Z=it.call(D,k);if(Z||M.disconnectedMatch||D.document&&D.document.nodeType!==11)return Z}catch{mn(k,!0)}return ke(k,S,null,[D]).length>0},ke.contains=function(D,k){return(D.ownerDocument||D)!=S&&Gi(D),u.contains(D,k)},ke.attr=function(D,k){(D.ownerDocument||D)!=S&&Gi(D);var Z=a.attrHandle[k.toLowerCase()],et=Z&&v.call(a.attrHandle,k.toLowerCase())?Z(D,k,!I):void 0;return et!==void 0?et:D.getAttribute(k)},ke.error=function(D){throw new Error("Syntax error, unrecognized expression: "+D)},u.uniqueSort=function(D){var k,Z=[],et=0,dt=0;if(x=!M.sortStable,p=!M.sortStable&&s.call(D,0),V.call(D,on),x){for(;k=D[dt++];)k===D[dt]&&(et=Z.push(dt));for(;et--;)st.call(D,Z[et],1)}return p=null,D},u.fn.uniqueSort=function(){return this.pushStack(u.uniqueSort(s.apply(this)))},a=u.expr={cacheLength:50,createPseudo:$n,match:si,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(D){return D[1]=D[1].replace(xi,bi),D[3]=(D[3]||D[4]||D[5]||"").replace(xi,bi),D[2]==="~="&&(D[3]=" "+D[3]+" "),D.slice(0,4)},CHILD:function(D){return D[1]=D[1].toLowerCase(),D[1].slice(0,3)==="nth"?(D[3]||ke.error(D[0]),D[4]=+(D[4]?D[5]+(D[6]||1):2*(D[3]==="even"||D[3]==="odd")),D[5]=+(D[7]+D[8]||D[3]==="odd")):D[3]&&ke.error(D[0]),D},PSEUDO:function(D){var k,Z=!D[6]&&D[2];return si.CHILD.test(D[0])?null:(D[3]?D[2]=D[4]||D[5]||"":Z&&ri.test(Z)&&(k=Is(Z,!0))&&(k=Z.indexOf(")",Z.length-k)-Z.length)&&(D[0]=D[0].slice(0,k),D[2]=Z.slice(0,k)),D.slice(0,3))}},filter:{TAG:function(D){var k=D.replace(xi,bi).toLowerCase();return D==="*"?function(){return!0}:function(Z){return P(Z,k)}},CLASS:function(D){var k=se[D+" "];return k||(k=new RegExp("(^|"+j+")"+D+"("+j+"|$)"))&&se(D,function(Z){return k.test(typeof Z.className=="string"&&Z.className||typeof Z.getAttribute<"u"&&Z.getAttribute("class")||"")})},ATTR:function(D,k,Z){return function(et){var dt=ke.attr(et,D);return dt==null?k==="!=":k?(dt+="",k==="="?dt===Z:k==="!="?dt!==Z:k==="^="?Z&&dt.indexOf(Z)===0:k==="*="?Z&&dt.indexOf(Z)>-1:k==="$="?Z&&dt.slice(-Z.length)===Z:k==="~="?(" "+dt.replace(Re," ")+" ").indexOf(Z)>-1:k==="|="?dt===Z||dt.slice(0,Z.length+1)===Z+"-":!1):!0}},CHILD:function(D,k,Z,et,dt){var wt=D.slice(0,3)!=="nth",Rt=D.slice(-4)!=="last",Gt=k==="of-type";return et===1&&dt===0?function(Dt){return!!Dt.parentNode}:function(Dt,ye,ie){var le,we,Kt,We,Cn,vn=wt!==Rt?"nextSibling":"previousSibling",Hn=Dt.parentNode,oi=Gt&&Dt.nodeName.toLowerCase(),Hr=!ie&&!Gt,yn=!1;if(Hn){if(wt){for(;vn;){for(Kt=Dt;Kt=Kt[vn];)if(Gt?P(Kt,oi):Kt.nodeType===1)return!1;Cn=vn=D==="only"&&!Cn&&"nextSibling"}return!0}if(Cn=[Rt?Hn.firstChild:Hn.lastChild],Rt&&Hr){for(we=Hn[pt]||(Hn[pt]={}),le=we[D]||[],We=le[0]===J&&le[1],yn=We&&le[2],Kt=We&&Hn.childNodes[We];Kt=++We&&Kt&&Kt[vn]||(yn=We=0)||Cn.pop();)if(Kt.nodeType===1&&++yn&&Kt===Dt){we[D]=[J,We,yn];break}}else if(Hr&&(we=Dt[pt]||(Dt[pt]={}),le=we[D]||[],We=le[0]===J&&le[1],yn=We),yn===!1)for(;(Kt=++We&&Kt&&Kt[vn]||(yn=We=0)||Cn.pop())&&!((Gt?P(Kt,oi):Kt.nodeType===1)&&++yn&&(Hr&&(we=Kt[pt]||(Kt[pt]={}),we[D]=[J,yn]),Kt===Dt)););return yn-=dt,yn===et||yn%et===0&&yn/et>=0}}},PSEUDO:function(D,k){var Z,et=a.pseudos[D]||a.setFilters[D.toLowerCase()]||ke.error("unsupported pseudo: "+D);return et[pt]?et(k):et.length>1?(Z=[D,D,"",k],a.setFilters.hasOwnProperty(D.toLowerCase())?$n(function(dt,wt){for(var Rt,Gt=et(dt,k),Dt=Gt.length;Dt--;)Rt=d.call(dt,Gt[Dt]),dt[Rt]=!(wt[Rt]=Gt[Dt])}):function(dt){return et(dt,0,Z)}):et}},pseudos:{not:$n(function(D){var k=[],Z=[],et=Ya(D.replace(at,"$1"));return et[pt]?$n(function(dt,wt,Rt,Gt){for(var Dt,ye=et(dt,null,Gt,[]),ie=dt.length;ie--;)(Dt=ye[ie])&&(dt[ie]=!(wt[ie]=Dt))}):function(dt,wt,Rt){return k[0]=dt,et(k,null,Rt,Z),k[0]=null,!Z.pop()}}),has:$n(function(D){return function(k){return ke(D,k).length>0}}),contains:$n(function(D){return D=D.replace(xi,bi),function(k){return(k.textContent||u.text(k)).indexOf(D)>-1}}),lang:$n(function(D){return Ls.test(D||"")||ke.error("unsupported lang: "+D),D=D.replace(xi,bi).toLowerCase(),function(k){var Z;do if(Z=I?k.lang:k.getAttribute("xml:lang")||k.getAttribute("lang"))return Z=Z.toLowerCase(),Z===D||Z.indexOf(D+"-")===0;while((k=k.parentNode)&&k.nodeType===1);return!1}}),target:function(D){var k=t.location&&t.location.hash;return k&&k.slice(1)===D.id},root:function(D){return D===N},focus:function(D){return D===df()&&S.hasFocus()&&!!(D.type||D.href||~D.tabIndex)},enabled:Cu(!1),disabled:Cu(!0),checked:function(D){return P(D,"input")&&!!D.checked||P(D,"option")&&!!D.selected},selected:function(D){return D.parentNode&&D.parentNode.selectedIndex,D.selected===!0},empty:function(D){for(D=D.firstChild;D;D=D.nextSibling)if(D.nodeType<6)return!1;return!0},parent:function(D){return!a.pseudos.empty(D)},header:function(D){return Hi.test(D.nodeName)},input:function(D){return zi.test(D.nodeName)},button:function(D){return P(D,"input")&&D.type==="button"||P(D,"button")},text:function(D){var k;return P(D,"input")&&D.type==="text"&&((k=D.getAttribute("type"))==null||k.toLowerCase()==="text")},first:dr(function(){return[0]}),last:dr(function(D,k){return[k-1]}),eq:dr(function(D,k,Z){return[Z<0?Z+k:Z]}),even:dr(function(D,k){for(var Z=0;Z<k;Z+=2)D.push(Z);return D}),odd:dr(function(D,k){for(var Z=1;Z<k;Z+=2)D.push(Z);return D}),lt:dr(function(D,k,Z){var et;for(Z<0?et=Z+k:Z>k?et=k:et=Z;--et>=0;)D.push(et);return D}),gt:dr(function(D,k,Z){for(var et=Z<0?Z+k:Z;++et<k;)D.push(et);return D})}},a.pseudos.nth=a.pseudos.eq;for(o in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})a.pseudos[o]=pf(o);for(o in{submit:!0,reset:!0})a.pseudos[o]=ff(o);function Au(){}Au.prototype=a.filters=a.pseudos,a.setFilters=new Au;function Is(D,k){var Z,et,dt,wt,Rt,Gt,Dt,ye=Ae[D+" "];if(ye)return k?0:ye.slice(0);for(Rt=D,Gt=[],Dt=a.preFilter;Rt;){(!Z||(et=Ze.exec(Rt)))&&(et&&(Rt=Rt.slice(et[0].length)||Rt),Gt.push(dt=[])),Z=!1,(et=Ds.exec(Rt))&&(Z=et.shift(),dt.push({value:Z,type:et[0].replace(at," ")}),Rt=Rt.slice(Z.length));for(wt in a.filter)(et=si[wt].exec(Rt))&&(!Dt[wt]||(et=Dt[wt](et)))&&(Z=et.shift(),dt.push({value:Z,type:wt,matches:et}),Rt=Rt.slice(Z.length));if(!Z)break}return k?Rt.length:Rt?ke.error(D):Ae(D,Gt).slice(0)}function wo(D){for(var k=0,Z=D.length,et="";k<Z;k++)et+=D[k].value;return et}function So(D,k,Z){var et=k.dir,dt=k.next,wt=dt||et,Rt=Z&&wt==="parentNode",Gt=vt++;return k.first?function(Dt,ye,ie){for(;Dt=Dt[et];)if(Dt.nodeType===1||Rt)return D(Dt,ye,ie);return!1}:function(Dt,ye,ie){var le,we,Kt=[J,Gt];if(ie){for(;Dt=Dt[et];)if((Dt.nodeType===1||Rt)&&D(Dt,ye,ie))return!0}else for(;Dt=Dt[et];)if(Dt.nodeType===1||Rt)if(we=Dt[pt]||(Dt[pt]={}),dt&&P(Dt,dt))Dt=Dt[et]||Dt;else{if((le=we[wt])&&le[0]===J&&le[1]===Gt)return Kt[2]=le[2];if(we[wt]=Kt,Kt[2]=D(Dt,ye,ie))return!0}return!1}}function ja(D){return D.length>1?function(k,Z,et){for(var dt=D.length;dt--;)if(!D[dt](k,Z,et))return!1;return!0}:D[0]}function mf(D,k,Z){for(var et=0,dt=k.length;et<dt;et++)ke(D,k[et],Z);return Z}function Mo(D,k,Z,et,dt){for(var wt,Rt=[],Gt=0,Dt=D.length,ye=k!=null;Gt<Dt;Gt++)(wt=D[Gt])&&(!Z||Z(wt,et,dt))&&(Rt.push(wt),ye&&k.push(Gt));return Rt}function Xa(D,k,Z,et,dt,wt){return et&&!et[pt]&&(et=Xa(et)),dt&&!dt[pt]&&(dt=Xa(dt,wt)),$n(function(Rt,Gt,Dt,ye){var ie,le,we,Kt,We=[],Cn=[],vn=Gt.length,Hn=Rt||mf(k||"*",Dt.nodeType?[Dt]:Dt,[]),oi=D&&(Rt||!k)?Mo(Hn,We,D,Dt,ye):Hn;if(Z?(Kt=dt||(Rt?D:vn||et)?[]:Gt,Z(oi,Kt,Dt,ye)):Kt=oi,et)for(ie=Mo(Kt,Cn),et(ie,[],Dt,ye),le=ie.length;le--;)(we=ie[le])&&(Kt[Cn[le]]=!(oi[Cn[le]]=we));if(Rt){if(dt||D){if(dt){for(ie=[],le=Kt.length;le--;)(we=Kt[le])&&ie.push(oi[le]=we);dt(null,Kt=[],ie,ye)}for(le=Kt.length;le--;)(we=Kt[le])&&(ie=dt?d.call(Rt,we):We[le])>-1&&(Rt[ie]=!(Gt[ie]=we))}}else Kt=Mo(Kt===Gt?Kt.splice(vn,Kt.length):Kt),dt?dt(null,Gt,Kt,ye):b.apply(Gt,Kt)})}function qa(D){for(var k,Z,et,dt=D.length,wt=a.relative[D[0].type],Rt=wt||a.relative[" "],Gt=wt?1:0,Dt=So(function(le){return le===k},Rt,!0),ye=So(function(le){return d.call(k,le)>-1},Rt,!0),ie=[function(le,we,Kt){var We=!wt&&(Kt||we!=h)||((k=we).nodeType?Dt(le,we,Kt):ye(le,we,Kt));return k=null,We}];Gt<dt;Gt++)if(Z=a.relative[D[Gt].type])ie=[So(ja(ie),Z)];else{if(Z=a.filter[D[Gt].type].apply(null,D[Gt].matches),Z[pt]){for(et=++Gt;et<dt&&!a.relative[D[et].type];et++);return Xa(Gt>1&&ja(ie),Gt>1&&wo(D.slice(0,Gt-1).concat({value:D[Gt-2].type===" "?"*":""})).replace(at,"$1"),Z,Gt<et&&qa(D.slice(Gt,et)),et<dt&&qa(D=D.slice(et)),et<dt&&wo(D))}ie.push(Z)}return ja(ie)}function gf(D,k){var Z=k.length>0,et=D.length>0,dt=function(wt,Rt,Gt,Dt,ye){var ie,le,we,Kt=0,We="0",Cn=wt&&[],vn=[],Hn=h,oi=wt||et&&a.find.TAG("*",ye),Hr=J+=Hn==null?1:Math.random()||.1,yn=oi.length;for(ye&&(h=Rt==S||Rt||ye);We!==yn&&(ie=oi[We])!=null;We++){if(et&&ie){for(le=0,!Rt&&ie.ownerDocument!=S&&(Gi(ie),Gt=!I);we=D[le++];)if(we(ie,Rt||S,Gt)){b.call(Dt,ie);break}ye&&(J=Hr)}Z&&((ie=!we&&ie)&&Kt--,wt&&Cn.push(ie))}if(Kt+=We,Z&&We!==Kt){for(le=0;we=k[le++];)we(Cn,vn,Rt,Gt);if(wt){if(Kt>0)for(;We--;)Cn[We]||vn[We]||(vn[We]=A.call(Dt));vn=Mo(vn)}b.apply(Dt,vn),ye&&!wt&&vn.length>0&&Kt+k.length>1&&u.uniqueSort(Dt)}return ye&&(J=Hr,h=Hn),Cn};return Z?$n(dt):dt}function Ya(D,k){var Z,et=[],dt=[],wt=me[D+" "];if(!wt){for(k||(k=Is(D)),Z=k.length;Z--;)wt=qa(k[Z]),wt[pt]?et.push(wt):dt.push(wt);wt=me(D,gf(dt,et)),wt.selector=D}return wt}function Pu(D,k,Z,et){var dt,wt,Rt,Gt,Dt,ye=typeof D=="function"&&D,ie=!et&&Is(D=ye.selector||D);if(Z=Z||[],ie.length===1){if(wt=ie[0]=ie[0].slice(0),wt.length>2&&(Rt=wt[0]).type==="ID"&&k.nodeType===9&&I&&a.relative[wt[1].type]){if(k=(a.find.ID(Rt.matches[0].replace(xi,bi),k)||[])[0],k)ye&&(k=k.parentNode);else return Z;D=D.slice(wt.shift().value.length)}for(dt=si.needsContext.test(D)?0:wt.length;dt--&&(Rt=wt[dt],!a.relative[Gt=Rt.type]);)if((Dt=a.find[Gt])&&(et=Dt(Rt.matches[0].replace(xi,bi),Ga.test(wt[0].type)&&Wa(k.parentNode)||k))){if(wt.splice(dt,1),D=et.length&&wo(wt),!D)return b.apply(Z,et),Z;break}}return(ye||Ya(D,ie))(et,k,!I,Z,!k||Ga.test(D)&&Wa(k.parentNode)||k),Z}M.sortStable=pt.split("").sort(on).join("")===pt,Gi(),M.sortDetached=zr(function(D){return D.compareDocumentPosition(S.createElement("fieldset"))&1}),u.find=ke,u.expr[":"]=u.expr.pseudos,u.unique=u.uniqueSort,ke.compile=Ya,ke.select=Pu,ke.setDocument=Gi,ke.tokenize=Is,ke.escape=u.escapeSelector,ke.getText=u.text,ke.isXML=u.isXMLDoc,ke.selectors=u.expr,ke.support=u.support,ke.uniqueSort=u.uniqueSort})();var yt=function(o,a,h){for(var p=[],x=h!==void 0;(o=o[a])&&o.nodeType!==9;)if(o.nodeType===1){if(x&&u(o).is(h))break;p.push(o)}return p},Lt=function(o,a){for(var h=[];o;o=o.nextSibling)o.nodeType===1&&o!==a&&h.push(o);return h},Wt=u.expr.match.needsContext,Jt=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function de(o,a,h){return T(a)?u.grep(o,function(p,x){return!!a.call(p,x,p)!==h}):a.nodeType?u.grep(o,function(p){return p===a!==h}):typeof a!="string"?u.grep(o,function(p){return d.call(a,p)>-1!==h}):u.filter(a,o,h)}u.filter=function(o,a,h){var p=a[0];return h&&(o=":not("+o+")"),a.length===1&&p.nodeType===1?u.find.matchesSelector(p,o)?[p]:[]:u.find.matches(o,u.grep(a,function(x){return x.nodeType===1}))},u.fn.extend({find:function(o){var a,h,p=this.length,x=this;if(typeof o!="string")return this.pushStack(u(o).filter(function(){for(a=0;a<p;a++)if(u.contains(x[a],this))return!0}));for(h=this.pushStack([]),a=0;a<p;a++)u.find(o,x[a],h);return p>1?u.uniqueSort(h):h},filter:function(o){return this.pushStack(de(this,o||[],!1))},not:function(o){return this.pushStack(de(this,o||[],!0))},is:function(o){return!!de(this,typeof o=="string"&&Wt.test(o)?u(o):o||[],!1).length}});var ct,bt=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,kt=u.fn.init=function(o,a,h){var p,x;if(!o)return this;if(h=h||ct,typeof o=="string")if(o[0]==="<"&&o[o.length-1]===">"&&o.length>=3?p=[null,o,null]:p=bt.exec(o),p&&(p[1]||!a))if(p[1]){if(a=a instanceof u?a[0]:a,u.merge(this,u.parseHTML(p[1],a&&a.nodeType?a.ownerDocument||a:m,!0)),Jt.test(p[1])&&u.isPlainObject(a))for(p in a)T(this[p])?this[p](a[p]):this.attr(p,a[p]);return this}else return x=m.getElementById(p[2]),x&&(this[0]=x,this.length=1),this;else return!a||a.jquery?(a||h).find(o):this.constructor(a).find(o);else{if(o.nodeType)return this[0]=o,this.length=1,this;if(T(o))return h.ready!==void 0?h.ready(o):o(u)}return u.makeArray(o,this)};kt.prototype=u.fn,ct=u(m);var St=/^(?:parents|prev(?:Until|All))/,Bt={children:!0,contents:!0,next:!0,prev:!0};u.fn.extend({has:function(o){var a=u(o,this),h=a.length;return this.filter(function(){for(var p=0;p<h;p++)if(u.contains(this,a[p]))return!0})},closest:function(o,a){var h,p=0,x=this.length,b=[],S=typeof o!="string"&&u(o);if(!Wt.test(o)){for(;p<x;p++)for(h=this[p];h&&h!==a;h=h.parentNode)if(h.nodeType<11&&(S?S.index(h)>-1:h.nodeType===1&&u.find.matchesSelector(h,o))){b.push(h);break}}return this.pushStack(b.length>1?u.uniqueSort(b):b)},index:function(o){return o?typeof o=="string"?d.call(u(o),this[0]):d.call(this,o.jquery?o[0]:o):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(o,a){return this.pushStack(u.uniqueSort(u.merge(this.get(),u(o,a))))},addBack:function(o){return this.add(o==null?this.prevObject:this.prevObject.filter(o))}});function oe(o,a){for(;(o=o[a])&&o.nodeType!==1;);return o}u.each({parent:function(o){var a=o.parentNode;return a&&a.nodeType!==11?a:null},parents:function(o){return yt(o,"parentNode")},parentsUntil:function(o,a,h){return yt(o,"parentNode",h)},next:function(o){return oe(o,"nextSibling")},prev:function(o){return oe(o,"previousSibling")},nextAll:function(o){return yt(o,"nextSibling")},prevAll:function(o){return yt(o,"previousSibling")},nextUntil:function(o,a,h){return yt(o,"nextSibling",h)},prevUntil:function(o,a,h){return yt(o,"previousSibling",h)},siblings:function(o){return Lt((o.parentNode||{}).firstChild,o)},children:function(o){return Lt(o.firstChild)},contents:function(o){return o.contentDocument!=null&&r(o.contentDocument)?o.contentDocument:(P(o,"template")&&(o=o.content||o),u.merge([],o.childNodes))}},function(o,a){u.fn[o]=function(h,p){var x=u.map(this,a,h);return o.slice(-5)!=="Until"&&(p=h),p&&typeof p=="string"&&(x=u.filter(p,x)),this.length>1&&(Bt[o]||u.uniqueSort(x),St.test(o)&&x.reverse()),this.pushStack(x)}});var zt=/[^\x20\t\r\n\f]+/g;function He(o){var a={};return u.each(o.match(zt)||[],function(h,p){a[p]=!0}),a}u.Callbacks=function(o){o=typeof o=="string"?He(o):u.extend({},o);var a,h,p,x,b=[],S=[],N=-1,I=function(){for(x=x||o.once,p=a=!0;S.length;N=-1)for(h=S.shift();++N<b.length;)b[N].apply(h[0],h[1])===!1&&o.stopOnFalse&&(N=b.length,h=!1);o.memory||(h=!1),a=!1,x&&(h?b=[]:b="")},H={add:function(){return b&&(h&&!a&&(N=b.length-1,S.push(h)),function it(pt){u.each(pt,function(J,vt){T(vt)?(!o.unique||!H.has(vt))&&b.push(vt):vt&&vt.length&&R(vt)!=="string"&&it(vt)})}(arguments),h&&!a&&I()),this},remove:function(){return u.each(arguments,function(it,pt){for(var J;(J=u.inArray(pt,b,J))>-1;)b.splice(J,1),J<=N&&N--}),this},has:function(it){return it?u.inArray(it,b)>-1:b.length>0},empty:function(){return b&&(b=[]),this},disable:function(){return x=S=[],b=h="",this},disabled:function(){return!b},lock:function(){return x=S=[],!h&&!a&&(b=h=""),this},locked:function(){return!!x},fireWith:function(it,pt){return x||(pt=pt||[],pt=[it,pt.slice?pt.slice():pt],S.push(pt),a||I()),this},fire:function(){return H.fireWith(this,arguments),this},fired:function(){return!!p}};return H};function gt(o){return o}function ue(o){throw o}function F(o,a,h,p){var x;try{o&&T(x=o.promise)?x.call(o).done(a).fail(h):o&&T(x=o.then)?x.call(o,a,h):a.apply(void 0,[o].slice(p))}catch(b){h.apply(void 0,[b])}}u.extend({Deferred:function(o){var a=[["notify","progress",u.Callbacks("memory"),u.Callbacks("memory"),2],["resolve","done",u.Callbacks("once memory"),u.Callbacks("once memory"),0,"resolved"],["reject","fail",u.Callbacks("once memory"),u.Callbacks("once memory"),1,"rejected"]],h="pending",p={state:function(){return h},always:function(){return x.done(arguments).fail(arguments),this},catch:function(b){return p.then(null,b)},pipe:function(){var b=arguments;return u.Deferred(function(S){u.each(a,function(N,I){var H=T(b[I[4]])&&b[I[4]];x[I[1]](function(){var it=H&&H.apply(this,arguments);it&&T(it.promise)?it.promise().progress(S.notify).done(S.resolve).fail(S.reject):S[I[0]+"With"](this,H?[it]:arguments)})}),b=null}).promise()},then:function(b,S,N){var I=0;function H(it,pt,J,vt){return function(){var se=this,Ae=arguments,me=function(){var on,ni;if(!(it<I)){if(on=J.apply(se,Ae),on===pt.promise())throw new TypeError("Thenable self-resolution");ni=on&&(typeof on=="object"||typeof on=="function")&&on.then,T(ni)?vt?ni.call(on,H(I,pt,gt,vt),H(I,pt,ue,vt)):(I++,ni.call(on,H(I,pt,gt,vt),H(I,pt,ue,vt),H(I,pt,gt,pt.notifyWith))):(J!==gt&&(se=void 0,Ae=[on]),(vt||pt.resolveWith)(se,Ae))}},mn=vt?me:function(){try{me()}catch(on){u.Deferred.exceptionHook&&u.Deferred.exceptionHook(on,mn.error),it+1>=I&&(J!==ue&&(se=void 0,Ae=[on]),pt.rejectWith(se,Ae))}};it?mn():(u.Deferred.getErrorHook?mn.error=u.Deferred.getErrorHook():u.Deferred.getStackHook&&(mn.error=u.Deferred.getStackHook()),t.setTimeout(mn))}}return u.Deferred(function(it){a[0][3].add(H(0,it,T(N)?N:gt,it.notifyWith)),a[1][3].add(H(0,it,T(b)?b:gt)),a[2][3].add(H(0,it,T(S)?S:ue))}).promise()},promise:function(b){return b!=null?u.extend(b,p):p}},x={};return u.each(a,function(b,S){var N=S[2],I=S[5];p[S[1]]=N.add,I&&N.add(function(){h=I},a[3-b][2].disable,a[3-b][3].disable,a[0][2].lock,a[0][3].lock),N.add(S[3].fire),x[S[0]]=function(){return x[S[0]+"With"](this===x?void 0:this,arguments),this},x[S[0]+"With"]=N.fireWith}),p.promise(x),o&&o.call(x,x),x},when:function(o){var a=arguments.length,h=a,p=Array(h),x=s.call(arguments),b=u.Deferred(),S=function(N){return function(I){p[N]=this,x[N]=arguments.length>1?s.call(arguments):I,--a||b.resolveWith(p,x)}};if(a<=1&&(F(o,b.done(S(h)).resolve,b.reject,!a),b.state()==="pending"||T(x[h]&&x[h].then)))return b.then();for(;h--;)F(x[h],S(h),b.reject);return b.promise()}});var Qe=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;u.Deferred.exceptionHook=function(o,a){t.console&&t.console.warn&&o&&Qe.test(o.name)&&t.console.warn("jQuery.Deferred exception: "+o.message,o.stack,a)},u.readyException=function(o){t.setTimeout(function(){throw o})};var pe=u.Deferred();u.fn.ready=function(o){return pe.then(o).catch(function(a){u.readyException(a)}),this},u.extend({isReady:!1,readyWait:1,ready:function(o){(o===!0?--u.readyWait:u.isReady)||(u.isReady=!0,!(o!==!0&&--u.readyWait>0)&&pe.resolveWith(m,[u]))}}),u.ready.then=pe.then;function te(){m.removeEventListener("DOMContentLoaded",te),t.removeEventListener("load",te),u.ready()}m.readyState==="complete"||m.readyState!=="loading"&&!m.documentElement.doScroll?t.setTimeout(u.ready):(m.addEventListener("DOMContentLoaded",te),t.addEventListener("load",te));var Ut=function(o,a,h,p,x,b,S){var N=0,I=o.length,H=h==null;if(R(h)==="object"){x=!0;for(N in h)Ut(o,a,N,h[N],!0,b,S)}else if(p!==void 0&&(x=!0,T(p)||(S=!0),H&&(S?(a.call(o,p),a=null):(H=a,a=function(it,pt,J){return H.call(u(it),J)})),a))for(;N<I;N++)a(o[N],h,S?p:p.call(o[N],N,a(o[N],h)));return x?o:H?a.call(o):I?a(o[0],h):b},Pe=/^-ms-/,Ht=/-([a-z])/g;function L(o,a){return a.toUpperCase()}function E(o){return o.replace(Pe,"ms-").replace(Ht,L)}var $=function(o){return o.nodeType===1||o.nodeType===9||!+o.nodeType};function ht(){this.expando=u.expando+ht.uid++}ht.uid=1,ht.prototype={cache:function(o){var a=o[this.expando];return a||(a={},$(o)&&(o.nodeType?o[this.expando]=a:Object.defineProperty(o,this.expando,{value:a,configurable:!0}))),a},set:function(o,a,h){var p,x=this.cache(o);if(typeof a=="string")x[E(a)]=h;else for(p in a)x[E(p)]=a[p];return x},get:function(o,a){return a===void 0?this.cache(o):o[this.expando]&&o[this.expando][E(a)]},access:function(o,a,h){return a===void 0||a&&typeof a=="string"&&h===void 0?this.get(o,a):(this.set(o,a,h),h!==void 0?h:a)},remove:function(o,a){var h,p=o[this.expando];if(p!==void 0){if(a!==void 0)for(Array.isArray(a)?a=a.map(E):(a=E(a),a=a in p?[a]:a.match(zt)||[]),h=a.length;h--;)delete p[a[h]];(a===void 0||u.isEmptyObject(p))&&(o.nodeType?o[this.expando]=void 0:delete o[this.expando])}},hasData:function(o){var a=o[this.expando];return a!==void 0&&!u.isEmptyObject(a)}};var K=new ht,ot=new ht,Vt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ct=/[A-Z]/g;function Qt(o){return o==="true"?!0:o==="false"?!1:o==="null"?null:o===+o+""?+o:Vt.test(o)?JSON.parse(o):o}function ee(o,a,h){var p;if(h===void 0&&o.nodeType===1)if(p="data-"+a.replace(Ct,"-$&").toLowerCase(),h=o.getAttribute(p),typeof h=="string"){try{h=Qt(h)}catch{}ot.set(o,a,h)}else h=void 0;return h}u.extend({hasData:function(o){return ot.hasData(o)||K.hasData(o)},data:function(o,a,h){return ot.access(o,a,h)},removeData:function(o,a){ot.remove(o,a)},_data:function(o,a,h){return K.access(o,a,h)},_removeData:function(o,a){K.remove(o,a)}}),u.fn.extend({data:function(o,a){var h,p,x,b=this[0],S=b&&b.attributes;if(o===void 0){if(this.length&&(x=ot.get(b),b.nodeType===1&&!K.get(b,"hasDataAttrs"))){for(h=S.length;h--;)S[h]&&(p=S[h].name,p.indexOf("data-")===0&&(p=E(p.slice(5)),ee(b,p,x[p])));K.set(b,"hasDataAttrs",!0)}return x}return typeof o=="object"?this.each(function(){ot.set(this,o)}):Ut(this,function(N){var I;if(b&&N===void 0)return I=ot.get(b,o),I!==void 0||(I=ee(b,o),I!==void 0)?I:void 0;this.each(function(){ot.set(this,o,N)})},null,a,arguments.length>1,null,!0)},removeData:function(o){return this.each(function(){ot.remove(this,o)})}}),u.extend({queue:function(o,a,h){var p;if(o)return a=(a||"fx")+"queue",p=K.get(o,a),h&&(!p||Array.isArray(h)?p=K.access(o,a,u.makeArray(h)):p.push(h)),p||[]},dequeue:function(o,a){a=a||"fx";var h=u.queue(o,a),p=h.length,x=h.shift(),b=u._queueHooks(o,a),S=function(){u.dequeue(o,a)};x==="inprogress"&&(x=h.shift(),p--),x&&(a==="fx"&&h.unshift("inprogress"),delete b.stop,x.call(o,S,b)),!p&&b&&b.empty.fire()},_queueHooks:function(o,a){var h=a+"queueHooks";return K.get(o,h)||K.access(o,h,{empty:u.Callbacks("once memory").add(function(){K.remove(o,[a+"queue",h])})})}}),u.fn.extend({queue:function(o,a){var h=2;return typeof o!="string"&&(a=o,o="fx",h--),arguments.length<h?u.queue(this[0],o):a===void 0?this:this.each(function(){var p=u.queue(this,o,a);u._queueHooks(this,o),o==="fx"&&p[0]!=="inprogress"&&u.dequeue(this,o)})},dequeue:function(o){return this.each(function(){u.dequeue(this,o)})},clearQueue:function(o){return this.queue(o||"fx",[])},promise:function(o,a){var h,p=1,x=u.Deferred(),b=this,S=this.length,N=function(){--p||x.resolveWith(b,[b])};for(typeof o!="string"&&(a=o,o=void 0),o=o||"fx";S--;)h=K.get(b[S],o+"queueHooks"),h&&h.empty&&(p++,h.empty.add(N));return N(),x.promise(a)}});var _t=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Nt=new RegExp("^(?:([+-])=|)("+_t+")([a-z%]*)$","i"),jt=["Top","Right","Bottom","Left"],$t=m.documentElement,It=function(o){return u.contains(o.ownerDocument,o)},Me={composed:!0};$t.getRootNode&&(It=function(o){return u.contains(o.ownerDocument,o)||o.getRootNode(Me)===o.ownerDocument});var ae=function(o,a){return o=a||o,o.style.display==="none"||o.style.display===""&&It(o)&&u.css(o,"display")==="none"};function Fe(o,a,h,p){var x,b,S=20,N=p?function(){return p.cur()}:function(){return u.css(o,a,"")},I=N(),H=h&&h[3]||(u.cssNumber[a]?"":"px"),it=o.nodeType&&(u.cssNumber[a]||H!=="px"&&+I)&&Nt.exec(u.css(o,a));if(it&&it[3]!==H){for(I=I/2,H=H||it[3],it=+I||1;S--;)u.style(o,a,it+H),(1-b)*(1-(b=N()/I||.5))<=0&&(S=0),it=it/b;it=it*2,u.style(o,a,it+H),h=h||[]}return h&&(it=+it||+I||0,x=h[1]?it+(h[1]+1)*h[2]:+h[2],p&&(p.unit=H,p.start=it,p.end=x)),x}var G={};function At(o){var a,h=o.ownerDocument,p=o.nodeName,x=G[p];return x||(a=h.body.appendChild(h.createElement(p)),x=u.css(a,"display"),a.parentNode.removeChild(a),x==="none"&&(x="block"),G[p]=x,x)}function rt(o,a){for(var h,p,x=[],b=0,S=o.length;b<S;b++)p=o[b],p.style&&(h=p.style.display,a?(h==="none"&&(x[b]=K.get(p,"display")||null,x[b]||(p.style.display="")),p.style.display===""&&ae(p)&&(x[b]=At(p))):h!=="none"&&(x[b]="none",K.set(p,"display",h)));for(b=0;b<S;b++)x[b]!=null&&(o[b].style.display=x[b]);return o}u.fn.extend({show:function(){return rt(this,!0)},hide:function(){return rt(this)},toggle:function(o){return typeof o=="boolean"?o?this.show():this.hide():this.each(function(){ae(this)?u(this).show():u(this).hide()})}});var mt=/^(?:checkbox|radio)$/i,Pt=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Tt=/^$|^module$|\/(?:java|ecma)script/i;(function(){var o=m.createDocumentFragment(),a=o.appendChild(m.createElement("div")),h=m.createElement("input");h.setAttribute("type","radio"),h.setAttribute("checked","checked"),h.setAttribute("name","t"),a.appendChild(h),M.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="<textarea>x</textarea>",M.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,a.innerHTML="<option></option>",M.option=!!a.lastChild})();var Yt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Yt.tbody=Yt.tfoot=Yt.colgroup=Yt.caption=Yt.thead,Yt.th=Yt.td,M.option||(Yt.optgroup=Yt.option=[1,"<select multiple='multiple'>","</select>"]);function xe(o,a){var h;return typeof o.getElementsByTagName<"u"?h=o.getElementsByTagName(a||"*"):typeof o.querySelectorAll<"u"?h=o.querySelectorAll(a||"*"):h=[],a===void 0||a&&P(o,a)?u.merge([o],h):h}function tn(o,a){for(var h=0,p=o.length;h<p;h++)K.set(o[h],"globalEval",!a||K.get(a[h],"globalEval"))}var Ne=/<|&#?\w+;/;function En(o,a,h,p,x){for(var b,S,N,I,H,it,pt=a.createDocumentFragment(),J=[],vt=0,se=o.length;vt<se;vt++)if(b=o[vt],b||b===0)if(R(b)==="object")u.merge(J,b.nodeType?[b]:b);else if(!Ne.test(b))J.push(a.createTextNode(b));else{for(S=S||pt.appendChild(a.createElement("div")),N=(Pt.exec(b)||["",""])[1].toLowerCase(),I=Yt[N]||Yt._default,S.innerHTML=I[1]+u.htmlPrefilter(b)+I[2],it=I[0];it--;)S=S.lastChild;u.merge(J,S.childNodes),S=pt.firstChild,S.textContent=""}for(pt.textContent="",vt=0;b=J[vt++];){if(p&&u.inArray(b,p)>-1){x&&x.push(b);continue}if(H=It(b),S=xe(pt.appendChild(b),"script"),H&&tn(S),h)for(it=0;b=S[it++];)Tt.test(b.type||"")&&h.push(b)}return pt}var Vn=/^([^.]*)(?:\.(.+)|)/;function mi(){return!0}function gi(){return!1}function Yn(o,a,h,p,x,b){var S,N;if(typeof a=="object"){typeof h!="string"&&(p=p||h,h=void 0);for(N in a)Yn(o,N,h,p,a[N],b);return o}if(p==null&&x==null?(x=h,p=h=void 0):x==null&&(typeof h=="string"?(x=p,p=void 0):(x=p,p=h,h=void 0)),x===!1)x=gi;else if(!x)return o;return b===1&&(S=x,x=function(I){return u().off(I),S.apply(this,arguments)},x.guid=S.guid||(S.guid=u.guid++)),o.each(function(){u.event.add(this,a,x,p,h)})}u.event={global:{},add:function(o,a,h,p,x){var b,S,N,I,H,it,pt,J,vt,se,Ae,me=K.get(o);if($(o))for(h.handler&&(b=h,h=b.handler,x=b.selector),x&&u.find.matchesSelector($t,x),h.guid||(h.guid=u.guid++),(I=me.events)||(I=me.events=Object.create(null)),(S=me.handle)||(S=me.handle=function(mn){return typeof u<"u"&&u.event.triggered!==mn.type?u.event.dispatch.apply(o,arguments):void 0}),a=(a||"").match(zt)||[""],H=a.length;H--;)N=Vn.exec(a[H])||[],vt=Ae=N[1],se=(N[2]||"").split(".").sort(),vt&&(pt=u.event.special[vt]||{},vt=(x?pt.delegateType:pt.bindType)||vt,pt=u.event.special[vt]||{},it=u.extend({type:vt,origType:Ae,data:p,handler:h,guid:h.guid,selector:x,needsContext:x&&u.expr.match.needsContext.test(x),namespace:se.join(".")},b),(J=I[vt])||(J=I[vt]=[],J.delegateCount=0,(!pt.setup||pt.setup.call(o,p,se,S)===!1)&&o.addEventListener&&o.addEventListener(vt,S)),pt.add&&(pt.add.call(o,it),it.handler.guid||(it.handler.guid=h.guid)),x?J.splice(J.delegateCount++,0,it):J.push(it),u.event.global[vt]=!0)},remove:function(o,a,h,p,x){var b,S,N,I,H,it,pt,J,vt,se,Ae,me=K.hasData(o)&&K.get(o);if(!(!me||!(I=me.events))){for(a=(a||"").match(zt)||[""],H=a.length;H--;){if(N=Vn.exec(a[H])||[],vt=Ae=N[1],se=(N[2]||"").split(".").sort(),!vt){for(vt in I)u.event.remove(o,vt+a[H],h,p,!0);continue}for(pt=u.event.special[vt]||{},vt=(p?pt.delegateType:pt.bindType)||vt,J=I[vt]||[],N=N[2]&&new RegExp("(^|\\.)"+se.join("\\.(?:.*\\.|)")+"(\\.|$)"),S=b=J.length;b--;)it=J[b],(x||Ae===it.origType)&&(!h||h.guid===it.guid)&&(!N||N.test(it.namespace))&&(!p||p===it.selector||p==="**"&&it.selector)&&(J.splice(b,1),it.selector&&J.delegateCount--,pt.remove&&pt.remove.call(o,it));S&&!J.length&&((!pt.teardown||pt.teardown.call(o,se,me.handle)===!1)&&u.removeEvent(o,vt,me.handle),delete I[vt])}u.isEmptyObject(I)&&K.remove(o,"handle events")}},dispatch:function(o){var a,h,p,x,b,S,N=new Array(arguments.length),I=u.event.fix(o),H=(K.get(this,"events")||Object.create(null))[I.type]||[],it=u.event.special[I.type]||{};for(N[0]=I,a=1;a<arguments.length;a++)N[a]=arguments[a];if(I.delegateTarget=this,!(it.preDispatch&&it.preDispatch.call(this,I)===!1)){for(S=u.event.handlers.call(this,I,H),a=0;(x=S[a++])&&!I.isPropagationStopped();)for(I.currentTarget=x.elem,h=0;(b=x.handlers[h++])&&!I.isImmediatePropagationStopped();)(!I.rnamespace||b.namespace===!1||I.rnamespace.test(b.namespace))&&(I.handleObj=b,I.data=b.data,p=((u.event.special[b.origType]||{}).handle||b.handler).apply(x.elem,N),p!==void 0&&(I.result=p)===!1&&(I.preventDefault(),I.stopPropagation()));return it.postDispatch&&it.postDispatch.call(this,I),I.result}},handlers:function(o,a){var h,p,x,b,S,N=[],I=a.delegateCount,H=o.target;if(I&&H.nodeType&&!(o.type==="click"&&o.button>=1)){for(;H!==this;H=H.parentNode||this)if(H.nodeType===1&&!(o.type==="click"&&H.disabled===!0)){for(b=[],S={},h=0;h<I;h++)p=a[h],x=p.selector+" ",S[x]===void 0&&(S[x]=p.needsContext?u(x,this).index(H)>-1:u.find(x,this,null,[H]).length),S[x]&&b.push(p);b.length&&N.push({elem:H,handlers:b})}}return H=this,I<a.length&&N.push({elem:H,handlers:a.slice(I)}),N},addProp:function(o,a){Object.defineProperty(u.Event.prototype,o,{enumerable:!0,configurable:!0,get:T(a)?function(){if(this.originalEvent)return a(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[o]},set:function(h){Object.defineProperty(this,o,{enumerable:!0,configurable:!0,writable:!0,value:h})}})},fix:function(o){return o[u.expando]?o:new u.Event(o)},special:{load:{noBubble:!0},click:{setup:function(o){var a=this||o;return mt.test(a.type)&&a.click&&P(a,"input")&&ki(a,"click",!0),!1},trigger:function(o){var a=this||o;return mt.test(a.type)&&a.click&&P(a,"input")&&ki(a,"click"),!0},_default:function(o){var a=o.target;return mt.test(a.type)&&a.click&&P(a,"input")&&K.get(a,"click")||P(a,"a")}},beforeunload:{postDispatch:function(o){o.result!==void 0&&o.originalEvent&&(o.originalEvent.returnValue=o.result)}}}};function ki(o,a,h){if(!h){K.get(o,a)===void 0&&u.event.add(o,a,mi);return}K.set(o,a,!1),u.event.add(o,a,{namespace:!1,handler:function(p){var x,b=K.get(this,a);if(p.isTrigger&1&&this[a]){if(b)(u.event.special[a]||{}).delegateType&&p.stopPropagation();else if(b=s.call(arguments),K.set(this,a,b),this[a](),x=K.get(this,a),K.set(this,a,!1),b!==x)return p.stopImmediatePropagation(),p.preventDefault(),x}else b&&(K.set(this,a,u.event.trigger(b[0],b.slice(1),this)),p.stopPropagation(),p.isImmediatePropagationStopped=mi)}})}u.removeEvent=function(o,a,h){o.removeEventListener&&o.removeEventListener(a,h)},u.Event=function(o,a){if(!(this instanceof u.Event))return new u.Event(o,a);o&&o.type?(this.originalEvent=o,this.type=o.type,this.isDefaultPrevented=o.defaultPrevented||o.defaultPrevented===void 0&&o.returnValue===!1?mi:gi,this.target=o.target&&o.target.nodeType===3?o.target.parentNode:o.target,this.currentTarget=o.currentTarget,this.relatedTarget=o.relatedTarget):this.type=o,a&&u.extend(this,a),this.timeStamp=o&&o.timeStamp||Date.now(),this[u.expando]=!0},u.Event.prototype={constructor:u.Event,isDefaultPrevented:gi,isPropagationStopped:gi,isImmediatePropagationStopped:gi,isSimulated:!1,preventDefault:function(){var o=this.originalEvent;this.isDefaultPrevented=mi,o&&!this.isSimulated&&o.preventDefault()},stopPropagation:function(){var o=this.originalEvent;this.isPropagationStopped=mi,o&&!this.isSimulated&&o.stopPropagation()},stopImmediatePropagation:function(){var o=this.originalEvent;this.isImmediatePropagationStopped=mi,o&&!this.isSimulated&&o.stopImmediatePropagation(),this.stopPropagation()}},u.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},u.event.addProp),u.each({focus:"focusin",blur:"focusout"},function(o,a){function h(p){if(m.documentMode){var x=K.get(this,"handle"),b=u.event.fix(p);b.type=p.type==="focusin"?"focus":"blur",b.isSimulated=!0,x(p),b.target===b.currentTarget&&x(b)}else u.event.simulate(a,p.target,u.event.fix(p))}u.event.special[o]={setup:function(){var p;if(ki(this,o,!0),m.documentMode)p=K.get(this,a),p||this.addEventListener(a,h),K.set(this,a,(p||0)+1);else return!1},trigger:function(){return ki(this,o),!0},teardown:function(){var p;if(m.documentMode)p=K.get(this,a)-1,p?K.set(this,a,p):(this.removeEventListener(a,h),K.remove(this,a));else return!1},_default:function(p){return K.get(p.target,o)},delegateType:a},u.event.special[a]={setup:function(){var p=this.ownerDocument||this.document||this,x=m.documentMode?this:p,b=K.get(x,a);b||(m.documentMode?this.addEventListener(a,h):p.addEventListener(o,h,!0)),K.set(x,a,(b||0)+1)},teardown:function(){var p=this.ownerDocument||this.document||this,x=m.documentMode?this:p,b=K.get(x,a)-1;b?K.set(x,a,b):(m.documentMode?this.removeEventListener(a,h):p.removeEventListener(o,h,!0),K.remove(x,a))}}}),u.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(o,a){u.event.special[o]={delegateType:a,bindType:a,handle:function(h){var p,x=this,b=h.relatedTarget,S=h.handleObj;return(!b||b!==x&&!u.contains(x,b))&&(h.type=S.origType,p=S.handler.apply(this,arguments),h.type=a),p}}}),u.fn.extend({on:function(o,a,h,p){return Yn(this,o,a,h,p)},one:function(o,a,h,p){return Yn(this,o,a,h,p,1)},off:function(o,a,h){var p,x;if(o&&o.preventDefault&&o.handleObj)return p=o.handleObj,u(o.delegateTarget).off(p.namespace?p.origType+"."+p.namespace:p.origType,p.selector,p.handler),this;if(typeof o=="object"){for(x in o)this.off(x,a,o[x]);return this}return(a===!1||typeof a=="function")&&(h=a,a=void 0),h===!1&&(h=gi),this.each(function(){u.event.remove(this,o,h,a)})}});var vo=/<script|<style|<link/i,_o=/checked\s*(?:[^=]|=\s*.checked.)/i,kr=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Ms(o,a){return P(o,"table")&&P(a.nodeType!==11?a:a.firstChild,"tr")&&u(o).children("tbody")[0]||o}function Br(o){return o.type=(o.getAttribute("type")!==null)+"/"+o.type,o}function xo(o){return(o.type||"").slice(0,5)==="true/"?o.type=o.type.slice(5):o.removeAttribute("type"),o}function Es(o,a){var h,p,x,b,S,N,I;if(a.nodeType===1){if(K.hasData(o)&&(b=K.get(o),I=b.events,I)){K.remove(a,"handle events");for(x in I)for(h=0,p=I[x].length;h<p;h++)u.event.add(a,x,I[x][h])}ot.hasData(o)&&(S=ot.access(o),N=u.extend({},S),ot.set(a,N))}}function Ua(o,a){var h=a.nodeName.toLowerCase();h==="input"&&mt.test(o.type)?a.checked=o.checked:(h==="input"||h==="textarea")&&(a.defaultValue=o.defaultValue)}function Bi(o,a,h,p){a=l(a);var x,b,S,N,I,H,it=0,pt=o.length,J=pt-1,vt=a[0],se=T(vt);if(se||pt>1&&typeof vt=="string"&&!M.checkClone&&_o.test(vt))return o.each(function(Ae){var me=o.eq(Ae);se&&(a[0]=vt.call(this,Ae,me.html())),Bi(me,a,h,p)});if(pt&&(x=En(a,o[0].ownerDocument,!1,o,p),b=x.firstChild,x.childNodes.length===1&&(x=b),b||p)){for(S=u.map(xe(x,"script"),Br),N=S.length;it<pt;it++)I=x,it!==J&&(I=u.clone(I,!0,!0),N&&u.merge(S,xe(I,"script"))),h.call(o[it],I,it);if(N)for(H=S[S.length-1].ownerDocument,u.map(S,xo),it=0;it<N;it++)I=S[it],Tt.test(I.type||"")&&!K.access(I,"globalEval")&&u.contains(H,I)&&(I.src&&(I.type||"").toLowerCase()!=="module"?u._evalUrl&&!I.noModule&&u._evalUrl(I.src,{nonce:I.nonce||I.getAttribute("nonce")},H):U(I.textContent.replace(kr,""),I,H))}return o}function bo(o,a,h){for(var p,x=a?u.filter(a,o):o,b=0;(p=x[b])!=null;b++)!h&&p.nodeType===1&&u.cleanData(xe(p)),p.parentNode&&(h&&It(p)&&tn(xe(p,"script")),p.parentNode.removeChild(p));return o}u.extend({htmlPrefilter:function(o){return o},clone:function(o,a,h){var p,x,b,S,N=o.cloneNode(!0),I=It(o);if(!M.noCloneChecked&&(o.nodeType===1||o.nodeType===11)&&!u.isXMLDoc(o))for(S=xe(N),b=xe(o),p=0,x=b.length;p<x;p++)Ua(b[p],S[p]);if(a)if(h)for(b=b||xe(o),S=S||xe(N),p=0,x=b.length;p<x;p++)Es(b[p],S[p]);else Es(o,N);return S=xe(N,"script"),S.length>0&&tn(S,!I&&xe(o,"script")),N},cleanData:function(o){for(var a,h,p,x=u.event.special,b=0;(h=o[b])!==void 0;b++)if($(h)){if(a=h[K.expando]){if(a.events)for(p in a.events)x[p]?u.event.remove(h,p):u.removeEvent(h,p,a.handle);h[K.expando]=void 0}h[ot.expando]&&(h[ot.expando]=void 0)}}}),u.fn.extend({detach:function(o){return bo(this,o,!0)},remove:function(o){return bo(this,o)},text:function(o){return Ut(this,function(a){return a===void 0?u.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=a)})},null,o,arguments.length)},append:function(){return Bi(this,arguments,function(o){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var a=Ms(this,o);a.appendChild(o)}})},prepend:function(){return Bi(this,arguments,function(o){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var a=Ms(this,o);a.insertBefore(o,a.firstChild)}})},before:function(){return Bi(this,arguments,function(o){this.parentNode&&this.parentNode.insertBefore(o,this)})},after:function(){return Bi(this,arguments,function(o){this.parentNode&&this.parentNode.insertBefore(o,this.nextSibling)})},empty:function(){for(var o,a=0;(o=this[a])!=null;a++)o.nodeType===1&&(u.cleanData(xe(o,!1)),o.textContent="");return this},clone:function(o,a){return o=o??!1,a=a??o,this.map(function(){return u.clone(this,o,a)})},html:function(o){return Ut(this,function(a){var h=this[0]||{},p=0,x=this.length;if(a===void 0&&h.nodeType===1)return h.innerHTML;if(typeof a=="string"&&!vo.test(a)&&!Yt[(Pt.exec(a)||["",""])[1].toLowerCase()]){a=u.htmlPrefilter(a);try{for(;p<x;p++)h=this[p]||{},h.nodeType===1&&(u.cleanData(xe(h,!1)),h.innerHTML=a);h=0}catch{}}h&&this.empty().append(a)},null,o,arguments.length)},replaceWith:function(){var o=[];return Bi(this,arguments,function(a){var h=this.parentNode;u.inArray(this,o)<0&&(u.cleanData(xe(this)),h&&h.replaceChild(a,this))},o)}}),u.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(o,a){u.fn[o]=function(h){for(var p,x=[],b=u(h),S=b.length-1,N=0;N<=S;N++)p=N===S?this:this.clone(!0),u(b[N])[a](p),c.apply(x,p.get());return this.pushStack(x)}});var Ts=new RegExp("^("+_t+")(?!px)[a-z%]+$","i"),Cs=/^--/,Vr=function(o){var a=o.ownerDocument.defaultView;return(!a||!a.opener)&&(a=t),a.getComputedStyle(o)},C=function(o,a,h){var p,x,b={};for(x in a)b[x]=o.style[x],o.style[x]=a[x];p=h.call(o);for(x in a)o.style[x]=b[x];return p},X=new RegExp(jt.join("|"),"i");(function(){function o(){if(H){I.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",H.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",$t.appendChild(I).appendChild(H);var it=t.getComputedStyle(H);h=it.top!=="1%",N=a(it.marginLeft)===12,H.style.right="60%",b=a(it.right)===36,p=a(it.width)===36,H.style.position="absolute",x=a(H.offsetWidth/3)===12,$t.removeChild(I),H=null}}function a(it){return Math.round(parseFloat(it))}var h,p,x,b,S,N,I=m.createElement("div"),H=m.createElement("div");H.style&&(H.style.backgroundClip="content-box",H.cloneNode(!0).style.backgroundClip="",M.clearCloneStyle=H.style.backgroundClip==="content-box",u.extend(M,{boxSizingReliable:function(){return o(),p},pixelBoxStyles:function(){return o(),b},pixelPosition:function(){return o(),h},reliableMarginLeft:function(){return o(),N},scrollboxSize:function(){return o(),x},reliableTrDimensions:function(){var it,pt,J,vt;return S==null&&(it=m.createElement("table"),pt=m.createElement("tr"),J=m.createElement("div"),it.style.cssText="position:absolute;left:-11111px;border-collapse:separate",pt.style.cssText="box-sizing:content-box;border:1px solid",pt.style.height="1px",J.style.height="9px",J.style.display="block",$t.appendChild(it).appendChild(pt).appendChild(J),vt=t.getComputedStyle(pt),S=parseInt(vt.height,10)+parseInt(vt.borderTopWidth,10)+parseInt(vt.borderBottomWidth,10)===pt.offsetHeight,$t.removeChild(it)),S}}))})();function Q(o,a,h){var p,x,b,S,N=Cs.test(a),I=o.style;return h=h||Vr(o),h&&(S=h.getPropertyValue(a)||h[a],N&&S&&(S=S.replace(at,"$1")||void 0),S===""&&!It(o)&&(S=u.style(o,a)),!M.pixelBoxStyles()&&Ts.test(S)&&X.test(a)&&(p=I.width,x=I.minWidth,b=I.maxWidth,I.minWidth=I.maxWidth=I.width=S,S=h.width,I.width=p,I.minWidth=x,I.maxWidth=b)),S!==void 0?S+"":S}function tt(o,a){return{get:function(){if(o()){delete this.get;return}return(this.get=a).apply(this,arguments)}}}var q=["Webkit","Moz","ms"],xt=m.createElement("div").style,Mt={};function Ot(o){for(var a=o[0].toUpperCase()+o.slice(1),h=q.length;h--;)if(o=q[h]+a,o in xt)return o}function Ft(o){var a=u.cssProps[o]||Mt[o];return a||(o in xt?o:Mt[o]=Ot(o)||o)}var re=/^(none|table(?!-c[ea]).+)/,ne={position:"absolute",visibility:"hidden",display:"block"},qt={letterSpacing:"0",fontWeight:"400"};function Ee(o,a,h){var p=Nt.exec(a);return p?Math.max(0,p[2]-(h||0))+(p[3]||"px"):a}function Ce(o,a,h,p,x,b){var S=a==="width"?1:0,N=0,I=0,H=0;if(h===(p?"border":"content"))return 0;for(;S<4;S+=2)h==="margin"&&(H+=u.css(o,h+jt[S],!0,x)),p?(h==="content"&&(I-=u.css(o,"padding"+jt[S],!0,x)),h!=="margin"&&(I-=u.css(o,"border"+jt[S]+"Width",!0,x))):(I+=u.css(o,"padding"+jt[S],!0,x),h!=="padding"?I+=u.css(o,"border"+jt[S]+"Width",!0,x):N+=u.css(o,"border"+jt[S]+"Width",!0,x));return!p&&b>=0&&(I+=Math.max(0,Math.ceil(o["offset"+a[0].toUpperCase()+a.slice(1)]-b-I-N-.5))||0),I+H}function $e(o,a,h){var p=Vr(o),x=!M.boxSizingReliable()||h,b=x&&u.css(o,"boxSizing",!1,p)==="border-box",S=b,N=Q(o,a,p),I="offset"+a[0].toUpperCase()+a.slice(1);if(Ts.test(N)){if(!h)return N;N="auto"}return(!M.boxSizingReliable()&&b||!M.reliableTrDimensions()&&P(o,"tr")||N==="auto"||!parseFloat(N)&&u.css(o,"display",!1,p)==="inline")&&o.getClientRects().length&&(b=u.css(o,"boxSizing",!1,p)==="border-box",S=I in o,S&&(N=o[I])),N=parseFloat(N)||0,N+Ce(o,a,h||(b?"border":"content"),S,p,N)+"px"}u.extend({cssHooks:{opacity:{get:function(o,a){if(a){var h=Q(o,"opacity");return h===""?"1":h}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(o,a,h,p){if(!(!o||o.nodeType===3||o.nodeType===8||!o.style)){var x,b,S,N=E(a),I=Cs.test(a),H=o.style;if(I||(a=Ft(N)),S=u.cssHooks[a]||u.cssHooks[N],h!==void 0){if(b=typeof h,b==="string"&&(x=Nt.exec(h))&&x[1]&&(h=Fe(o,a,x),b="number"),h==null||h!==h)return;b==="number"&&!I&&(h+=x&&x[3]||(u.cssNumber[N]?"":"px")),!M.clearCloneStyle&&h===""&&a.indexOf("background")===0&&(H[a]="inherit"),(!S||!("set"in S)||(h=S.set(o,h,p))!==void 0)&&(I?H.setProperty(a,h):H[a]=h)}else return S&&"get"in S&&(x=S.get(o,!1,p))!==void 0?x:H[a]}},css:function(o,a,h,p){var x,b,S,N=E(a),I=Cs.test(a);return I||(a=Ft(N)),S=u.cssHooks[a]||u.cssHooks[N],S&&"get"in S&&(x=S.get(o,!0,h)),x===void 0&&(x=Q(o,a,p)),x==="normal"&&a in qt&&(x=qt[a]),h===""||h?(b=parseFloat(x),h===!0||isFinite(b)?b||0:x):x}}),u.each(["height","width"],function(o,a){u.cssHooks[a]={get:function(h,p,x){if(p)return re.test(u.css(h,"display"))&&(!h.getClientRects().length||!h.getBoundingClientRect().width)?C(h,ne,function(){return $e(h,a,x)}):$e(h,a,x)},set:function(h,p,x){var b,S=Vr(h),N=!M.scrollboxSize()&&S.position==="absolute",I=N||x,H=I&&u.css(h,"boxSizing",!1,S)==="border-box",it=x?Ce(h,a,x,H,S):0;return H&&N&&(it-=Math.ceil(h["offset"+a[0].toUpperCase()+a.slice(1)]-parseFloat(S[a])-Ce(h,a,"border",!1,S)-.5)),it&&(b=Nt.exec(p))&&(b[3]||"px")!=="px"&&(h.style[a]=p,p=u.css(h,a)),Ee(h,p,it)}}}),u.cssHooks.marginLeft=tt(M.reliableMarginLeft,function(o,a){if(a)return(parseFloat(Q(o,"marginLeft"))||o.getBoundingClientRect().left-C(o,{marginLeft:0},function(){return o.getBoundingClientRect().left}))+"px"}),u.each({margin:"",padding:"",border:"Width"},function(o,a){u.cssHooks[o+a]={expand:function(h){for(var p=0,x={},b=typeof h=="string"?h.split(" "):[h];p<4;p++)x[o+jt[p]+a]=b[p]||b[p-2]||b[0];return x}},o!=="margin"&&(u.cssHooks[o+a].set=Ee)}),u.fn.extend({css:function(o,a){return Ut(this,function(h,p,x){var b,S,N={},I=0;if(Array.isArray(p)){for(b=Vr(h),S=p.length;I<S;I++)N[p[I]]=u.css(h,p[I],!1,b);return N}return x!==void 0?u.style(h,p,x):u.css(h,p)},o,a,arguments.length>1)}});function be(o,a,h,p,x){return new be.prototype.init(o,a,h,p,x)}u.Tween=be,be.prototype={constructor:be,init:function(o,a,h,p,x,b){this.elem=o,this.prop=h,this.easing=x||u.easing._default,this.options=a,this.start=this.now=this.cur(),this.end=p,this.unit=b||(u.cssNumber[h]?"":"px")},cur:function(){var o=be.propHooks[this.prop];return o&&o.get?o.get(this):be.propHooks._default.get(this)},run:function(o){var a,h=be.propHooks[this.prop];return this.options.duration?this.pos=a=u.easing[this.easing](o,this.options.duration*o,0,1,this.options.duration):this.pos=a=o,this.now=(this.end-this.start)*a+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),h&&h.set?h.set(this):be.propHooks._default.set(this),this}},be.prototype.init.prototype=be.prototype,be.propHooks={_default:{get:function(o){var a;return o.elem.nodeType!==1||o.elem[o.prop]!=null&&o.elem.style[o.prop]==null?o.elem[o.prop]:(a=u.css(o.elem,o.prop,""),!a||a==="auto"?0:a)},set:function(o){u.fx.step[o.prop]?u.fx.step[o.prop](o):o.elem.nodeType===1&&(u.cssHooks[o.prop]||o.elem.style[Ft(o.prop)]!=null)?u.style(o.elem,o.prop,o.now+o.unit):o.elem[o.prop]=o.now}}},be.propHooks.scrollTop=be.propHooks.scrollLeft={set:function(o){o.elem.nodeType&&o.elem.parentNode&&(o.elem[o.prop]=o.now)}},u.easing={linear:function(o){return o},swing:function(o){return .5-Math.cos(o*Math.PI)/2},_default:"swing"},u.fx=be.prototype.init,u.fx.step={};var ve,Xt,sn=/^(?:toggle|show|hide)$/,Le=/queueHooks$/;function bn(){Xt&&(m.hidden===!1&&t.requestAnimationFrame?t.requestAnimationFrame(bn):t.setTimeout(bn,u.fx.interval),u.fx.tick())}function vi(){return t.setTimeout(function(){ve=void 0}),ve=Date.now()}function hn(o,a){var h,p=0,x={height:o};for(a=a?1:0;p<4;p+=2-a)h=jt[p],x["margin"+h]=x["padding"+h]=o;return a&&(x.opacity=x.width=o),x}function Vi(o,a,h){for(var p,x=(qe.tweeners[a]||[]).concat(qe.tweeners["*"]),b=0,S=x.length;b<S;b++)if(p=x[b].call(h,a,o))return p}function Ge(o,a,h){var p,x,b,S,N,I,H,it,pt="width"in a||"height"in a,J=this,vt={},se=o.style,Ae=o.nodeType&&ae(o),me=K.get(o,"fxshow");h.queue||(S=u._queueHooks(o,"fx"),S.unqueued==null&&(S.unqueued=0,N=S.empty.fire,S.empty.fire=function(){S.unqueued||N()}),S.unqueued++,J.always(function(){J.always(function(){S.unqueued--,u.queue(o,"fx").length||S.empty.fire()})}));for(p in a)if(x=a[p],sn.test(x)){if(delete a[p],b=b||x==="toggle",x===(Ae?"hide":"show"))if(x==="show"&&me&&me[p]!==void 0)Ae=!0;else continue;vt[p]=me&&me[p]||u.style(o,p)}if(I=!u.isEmptyObject(a),!(!I&&u.isEmptyObject(vt))){pt&&o.nodeType===1&&(h.overflow=[se.overflow,se.overflowX,se.overflowY],H=me&&me.display,H==null&&(H=K.get(o,"display")),it=u.css(o,"display"),it==="none"&&(H?it=H:(rt([o],!0),H=o.style.display||H,it=u.css(o,"display"),rt([o]))),(it==="inline"||it==="inline-block"&&H!=null)&&u.css(o,"float")==="none"&&(I||(J.done(function(){se.display=H}),H==null&&(it=se.display,H=it==="none"?"":it)),se.display="inline-block")),h.overflow&&(se.overflow="hidden",J.always(function(){se.overflow=h.overflow[0],se.overflowX=h.overflow[1],se.overflowY=h.overflow[2]})),I=!1;for(p in vt)I||(me?"hidden"in me&&(Ae=me.hidden):me=K.access(o,"fxshow",{display:H}),b&&(me.hidden=!Ae),Ae&&rt([o],!0),J.done(function(){Ae||rt([o]),K.remove(o,"fxshow");for(p in vt)u.style(o,p,vt[p])})),I=Vi(Ae?me[p]:0,p,J),p in me||(me[p]=I.start,Ae&&(I.end=I.start,I.start=0))}}function Tn(o,a){var h,p,x,b,S;for(h in o)if(p=E(h),x=a[p],b=o[h],Array.isArray(b)&&(x=b[1],b=o[h]=b[0]),h!==p&&(o[p]=b,delete o[h]),S=u.cssHooks[p],S&&"expand"in S){b=S.expand(b),delete o[p];for(h in b)h in o||(o[h]=b[h],a[h]=x)}else a[p]=x}function qe(o,a,h){var p,x,b=0,S=qe.prefilters.length,N=u.Deferred().always(function(){delete I.elem}),I=function(){if(x)return!1;for(var pt=ve||vi(),J=Math.max(0,H.startTime+H.duration-pt),vt=J/H.duration||0,se=1-vt,Ae=0,me=H.tweens.length;Ae<me;Ae++)H.tweens[Ae].run(se);return N.notifyWith(o,[H,se,J]),se<1&&me?J:(me||N.notifyWith(o,[H,1,0]),N.resolveWith(o,[H]),!1)},H=N.promise({elem:o,props:u.extend({},a),opts:u.extend(!0,{specialEasing:{},easing:u.easing._default},h),originalProperties:a,originalOptions:h,startTime:ve||vi(),duration:h.duration,tweens:[],createTween:function(pt,J){var vt=u.Tween(o,H.opts,pt,J,H.opts.specialEasing[pt]||H.opts.easing);return H.tweens.push(vt),vt},stop:function(pt){var J=0,vt=pt?H.tweens.length:0;if(x)return this;for(x=!0;J<vt;J++)H.tweens[J].run(1);return pt?(N.notifyWith(o,[H,1,0]),N.resolveWith(o,[H,pt])):N.rejectWith(o,[H,pt]),this}}),it=H.props;for(Tn(it,H.opts.specialEasing);b<S;b++)if(p=qe.prefilters[b].call(H,o,it,H.opts),p)return T(p.stop)&&(u._queueHooks(H.elem,H.opts.queue).stop=p.stop.bind(p)),p;return u.map(it,Vi,H),T(H.opts.start)&&H.opts.start.call(o,H),H.progress(H.opts.progress).done(H.opts.done,H.opts.complete).fail(H.opts.fail).always(H.opts.always),u.fx.timer(u.extend(I,{elem:o,anim:H,queue:H.opts.queue})),H}u.Animation=u.extend(qe,{tweeners:{"*":[function(o,a){var h=this.createTween(o,a);return Fe(h.elem,o,Nt.exec(a),h),h}]},tweener:function(o,a){T(o)?(a=o,o=["*"]):o=o.match(zt);for(var h,p=0,x=o.length;p<x;p++)h=o[p],qe.tweeners[h]=qe.tweeners[h]||[],qe.tweeners[h].unshift(a)},prefilters:[Ge],prefilter:function(o,a){a?qe.prefilters.unshift(o):qe.prefilters.push(o)}}),u.speed=function(o,a,h){var p=o&&typeof o=="object"?u.extend({},o):{complete:h||!h&&a||T(o)&&o,duration:o,easing:h&&a||a&&!T(a)&&a};return u.fx.off?p.duration=0:typeof p.duration!="number"&&(p.duration in u.fx.speeds?p.duration=u.fx.speeds[p.duration]:p.duration=u.fx.speeds._default),(p.queue==null||p.queue===!0)&&(p.queue="fx"),p.old=p.complete,p.complete=function(){T(p.old)&&p.old.call(this),p.queue&&u.dequeue(this,p.queue)},p},u.fn.extend({fadeTo:function(o,a,h,p){return this.filter(ae).css("opacity",0).show().end().animate({opacity:a},o,h,p)},animate:function(o,a,h,p){var x=u.isEmptyObject(o),b=u.speed(a,h,p),S=function(){var N=qe(this,u.extend({},o),b);(x||K.get(this,"finish"))&&N.stop(!0)};return S.finish=S,x||b.queue===!1?this.each(S):this.queue(b.queue,S)},stop:function(o,a,h){var p=function(x){var b=x.stop;delete x.stop,b(h)};return typeof o!="string"&&(h=a,a=o,o=void 0),a&&this.queue(o||"fx",[]),this.each(function(){var x=!0,b=o!=null&&o+"queueHooks",S=u.timers,N=K.get(this);if(b)N[b]&&N[b].stop&&p(N[b]);else for(b in N)N[b]&&N[b].stop&&Le.test(b)&&p(N[b]);for(b=S.length;b--;)S[b].elem===this&&(o==null||S[b].queue===o)&&(S[b].anim.stop(h),x=!1,S.splice(b,1));(x||!h)&&u.dequeue(this,o)})},finish:function(o){return o!==!1&&(o=o||"fx"),this.each(function(){var a,h=K.get(this),p=h[o+"queue"],x=h[o+"queueHooks"],b=u.timers,S=p?p.length:0;for(h.finish=!0,u.queue(this,o,[]),x&&x.stop&&x.stop.call(this,!0),a=b.length;a--;)b[a].elem===this&&b[a].queue===o&&(b[a].anim.stop(!0),b.splice(a,1));for(a=0;a<S;a++)p[a]&&p[a].finish&&p[a].finish.call(this);delete h.finish})}}),u.each(["toggle","show","hide"],function(o,a){var h=u.fn[a];u.fn[a]=function(p,x,b){return p==null||typeof p=="boolean"?h.apply(this,arguments):this.animate(hn(a,!0),p,x,b)}}),u.each({slideDown:hn("show"),slideUp:hn("hide"),slideToggle:hn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(o,a){u.fn[o]=function(h,p,x){return this.animate(a,h,p,x)}}),u.timers=[],u.fx.tick=function(){var o,a=0,h=u.timers;for(ve=Date.now();a<h.length;a++)o=h[a],!o()&&h[a]===o&&h.splice(a--,1);h.length||u.fx.stop(),ve=void 0},u.fx.timer=function(o){u.timers.push(o),u.fx.start()},u.fx.interval=13,u.fx.start=function(){Xt||(Xt=!0,bn())},u.fx.stop=function(){Xt=null},u.fx.speeds={slow:600,fast:200,_default:400},u.fn.delay=function(o,a){return o=u.fx&&u.fx.speeds[o]||o,a=a||"fx",this.queue(a,function(h,p){var x=t.setTimeout(h,o);p.stop=function(){t.clearTimeout(x)}})},function(){var o=m.createElement("input"),a=m.createElement("select"),h=a.appendChild(m.createElement("option"));o.type="checkbox",M.checkOn=o.value!=="",M.optSelected=h.selected,o=m.createElement("input"),o.value="t",o.type="radio",M.radioValue=o.value==="t"}();var dn,en=u.expr.attrHandle;u.fn.extend({attr:function(o,a){return Ut(this,u.attr,o,a,arguments.length>1)},removeAttr:function(o){return this.each(function(){u.removeAttr(this,o)})}}),u.extend({attr:function(o,a,h){var p,x,b=o.nodeType;if(!(b===3||b===8||b===2)){if(typeof o.getAttribute>"u")return u.prop(o,a,h);if((b!==1||!u.isXMLDoc(o))&&(x=u.attrHooks[a.toLowerCase()]||(u.expr.match.bool.test(a)?dn:void 0)),h!==void 0){if(h===null){u.removeAttr(o,a);return}return x&&"set"in x&&(p=x.set(o,h,a))!==void 0?p:(o.setAttribute(a,h+""),h)}return x&&"get"in x&&(p=x.get(o,a))!==null?p:(p=u.find.attr(o,a),p??void 0)}},attrHooks:{type:{set:function(o,a){if(!M.radioValue&&a==="radio"&&P(o,"input")){var h=o.value;return o.setAttribute("type",a),h&&(o.value=h),a}}}},removeAttr:function(o,a){var h,p=0,x=a&&a.match(zt);if(x&&o.nodeType===1)for(;h=x[p++];)o.removeAttribute(h)}}),dn={set:function(o,a,h){return a===!1?u.removeAttr(o,h):o.setAttribute(h,h),h}},u.each(u.expr.match.bool.source.match(/\w+/g),function(o,a){var h=en[a]||u.find.attr;en[a]=function(p,x,b){var S,N,I=x.toLowerCase();return b||(N=en[I],en[I]=S,S=h(p,x,b)!=null?I:null,en[I]=N),S}});var As=/^(?:input|select|textarea|button)$/i,_i=/^(?:a|area)$/i;u.fn.extend({prop:function(o,a){return Ut(this,u.prop,o,a,arguments.length>1)},removeProp:function(o){return this.each(function(){delete this[u.propFix[o]||o]})}}),u.extend({prop:function(o,a,h){var p,x,b=o.nodeType;if(!(b===3||b===8||b===2))return(b!==1||!u.isXMLDoc(o))&&(a=u.propFix[a]||a,x=u.propHooks[a]),h!==void 0?x&&"set"in x&&(p=x.set(o,h,a))!==void 0?p:o[a]=h:x&&"get"in x&&(p=x.get(o,a))!==null?p:o[a]},propHooks:{tabIndex:{get:function(o){var a=u.find.attr(o,"tabindex");return a?parseInt(a,10):As.test(o.nodeName)||_i.test(o.nodeName)&&o.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),M.optSelected||(u.propHooks.selected={get:function(o){var a=o.parentNode;return a&&a.parentNode&&a.parentNode.selectedIndex,null},set:function(o){var a=o.parentNode;a&&(a.selectedIndex,a.parentNode&&a.parentNode.selectedIndex)}}),u.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){u.propFix[this.toLowerCase()]=this});function cr(o){var a=o.match(zt)||[];return a.join(" ")}function ur(o){return o.getAttribute&&o.getAttribute("class")||""}function Na(o){return Array.isArray(o)?o:typeof o=="string"?o.match(zt)||[]:[]}u.fn.extend({addClass:function(o){var a,h,p,x,b,S;return T(o)?this.each(function(N){u(this).addClass(o.call(this,N,ur(this)))}):(a=Na(o),a.length?this.each(function(){if(p=ur(this),h=this.nodeType===1&&" "+cr(p)+" ",h){for(b=0;b<a.length;b++)x=a[b],h.indexOf(" "+x+" ")<0&&(h+=x+" ");S=cr(h),p!==S&&this.setAttribute("class",S)}}):this)},removeClass:function(o){var a,h,p,x,b,S;return T(o)?this.each(function(N){u(this).removeClass(o.call(this,N,ur(this)))}):arguments.length?(a=Na(o),a.length?this.each(function(){if(p=ur(this),h=this.nodeType===1&&" "+cr(p)+" ",h){for(b=0;b<a.length;b++)for(x=a[b];h.indexOf(" "+x+" ")>-1;)h=h.replace(" "+x+" "," ");S=cr(h),p!==S&&this.setAttribute("class",S)}}):this):this.attr("class","")},toggleClass:function(o,a){var h,p,x,b,S=typeof o,N=S==="string"||Array.isArray(o);return T(o)?this.each(function(I){u(this).toggleClass(o.call(this,I,ur(this),a),a)}):typeof a=="boolean"&&N?a?this.addClass(o):this.removeClass(o):(h=Na(o),this.each(function(){if(N)for(b=u(this),x=0;x<h.length;x++)p=h[x],b.hasClass(p)?b.removeClass(p):b.addClass(p);else(o===void 0||S==="boolean")&&(p=ur(this),p&&K.set(this,"__className__",p),this.setAttribute&&this.setAttribute("class",p||o===!1?"":K.get(this,"__className__")||""))}))},hasClass:function(o){var a,h,p=0;for(a=" "+o+" ";h=this[p++];)if(h.nodeType===1&&(" "+cr(ur(h))+" ").indexOf(a)>-1)return!0;return!1}});var Xp=/\r/g;u.fn.extend({val:function(o){var a,h,p,x=this[0];return arguments.length?(p=T(o),this.each(function(b){var S;this.nodeType===1&&(p?S=o.call(this,b,u(this).val()):S=o,S==null?S="":typeof S=="number"?S+="":Array.isArray(S)&&(S=u.map(S,function(N){return N==null?"":N+""})),a=u.valHooks[this.type]||u.valHooks[this.nodeName.toLowerCase()],(!a||!("set"in a)||a.set(this,S,"value")===void 0)&&(this.value=S))})):x?(a=u.valHooks[x.type]||u.valHooks[x.nodeName.toLowerCase()],a&&"get"in a&&(h=a.get(x,"value"))!==void 0?h:(h=x.value,typeof h=="string"?h.replace(Xp,""):h??"")):void 0}}),u.extend({valHooks:{option:{get:function(o){var a=u.find.attr(o,"value");return a??cr(u.text(o))}},select:{get:function(o){var a,h,p,x=o.options,b=o.selectedIndex,S=o.type==="select-one",N=S?null:[],I=S?b+1:x.length;for(b<0?p=I:p=S?b:0;p<I;p++)if(h=x[p],(h.selected||p===b)&&!h.disabled&&(!h.parentNode.disabled||!P(h.parentNode,"optgroup"))){if(a=u(h).val(),S)return a;N.push(a)}return N},set:function(o,a){for(var h,p,x=o.options,b=u.makeArray(a),S=x.length;S--;)p=x[S],(p.selected=u.inArray(u.valHooks.option.get(p),b)>-1)&&(h=!0);return h||(o.selectedIndex=-1),b}}}}),u.each(["radio","checkbox"],function(){u.valHooks[this]={set:function(o,a){if(Array.isArray(a))return o.checked=u.inArray(u(o).val(),a)>-1}},M.checkOn||(u.valHooks[this].get=function(o){return o.getAttribute("value")===null?"on":o.value})});var Ps=t.location,_u={guid:Date.now()},Oa=/\?/;u.parseXML=function(o){var a,h;if(!o||typeof o!="string")return null;try{a=new t.DOMParser().parseFromString(o,"text/xml")}catch{}return h=a&&a.getElementsByTagName("parsererror")[0],(!a||h)&&u.error("Invalid XML: "+(h?u.map(h.childNodes,function(p){return p.textContent}).join(`
`):o)),a};var xu=/^(?:focusinfocus|focusoutblur)$/,bu=function(o){o.stopPropagation()};u.extend(u.event,{trigger:function(o,a,h,p){var x,b,S,N,I,H,it,pt,J=[h||m],vt=v.call(o,"type")?o.type:o,se=v.call(o,"namespace")?o.namespace.split("."):[];if(b=pt=S=h=h||m,!(h.nodeType===3||h.nodeType===8)&&!xu.test(vt+u.event.triggered)&&(vt.indexOf(".")>-1&&(se=vt.split("."),vt=se.shift(),se.sort()),I=vt.indexOf(":")<0&&"on"+vt,o=o[u.expando]?o:new u.Event(vt,typeof o=="object"&&o),o.isTrigger=p?2:3,o.namespace=se.join("."),o.rnamespace=o.namespace?new RegExp("(^|\\.)"+se.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,o.result=void 0,o.target||(o.target=h),a=a==null?[o]:u.makeArray(a,[o]),it=u.event.special[vt]||{},!(!p&&it.trigger&&it.trigger.apply(h,a)===!1))){if(!p&&!it.noBubble&&!y(h)){for(N=it.delegateType||vt,xu.test(N+vt)||(b=b.parentNode);b;b=b.parentNode)J.push(b),S=b;S===(h.ownerDocument||m)&&J.push(S.defaultView||S.parentWindow||t)}for(x=0;(b=J[x++])&&!o.isPropagationStopped();)pt=b,o.type=x>1?N:it.bindType||vt,H=(K.get(b,"events")||Object.create(null))[o.type]&&K.get(b,"handle"),H&&H.apply(b,a),H=I&&b[I],H&&H.apply&&$(b)&&(o.result=H.apply(b,a),o.result===!1&&o.preventDefault());return o.type=vt,!p&&!o.isDefaultPrevented()&&(!it._default||it._default.apply(J.pop(),a)===!1)&&$(h)&&I&&T(h[vt])&&!y(h)&&(S=h[I],S&&(h[I]=null),u.event.triggered=vt,o.isPropagationStopped()&&pt.addEventListener(vt,bu),h[vt](),o.isPropagationStopped()&&pt.removeEventListener(vt,bu),u.event.triggered=void 0,S&&(h[I]=S)),o.result}},simulate:function(o,a,h){var p=u.extend(new u.Event,h,{type:o,isSimulated:!0});u.event.trigger(p,null,a)}}),u.fn.extend({trigger:function(o,a){return this.each(function(){u.event.trigger(o,a,this)})},triggerHandler:function(o,a){var h=this[0];if(h)return u.event.trigger(o,a,h,!0)}});var qp=/\[\]$/,yu=/\r?\n/g,Yp=/^(?:submit|button|image|reset|file)$/i,$p=/^(?:input|select|textarea|keygen)/i;function Fa(o,a,h,p){var x;if(Array.isArray(a))u.each(a,function(b,S){h||qp.test(o)?p(o,S):Fa(o+"["+(typeof S=="object"&&S!=null?b:"")+"]",S,h,p)});else if(!h&&R(a)==="object")for(x in a)Fa(o+"["+x+"]",a[x],h,p);else p(o,a)}u.param=function(o,a){var h,p=[],x=function(b,S){var N=T(S)?S():S;p[p.length]=encodeURIComponent(b)+"="+encodeURIComponent(N??"")};if(o==null)return"";if(Array.isArray(o)||o.jquery&&!u.isPlainObject(o))u.each(o,function(){x(this.name,this.value)});else for(h in o)Fa(h,o[h],a,x);return p.join("&")},u.fn.extend({serialize:function(){return u.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var o=u.prop(this,"elements");return o?u.makeArray(o):this}).filter(function(){var o=this.type;return this.name&&!u(this).is(":disabled")&&$p.test(this.nodeName)&&!Yp.test(o)&&(this.checked||!mt.test(o))}).map(function(o,a){var h=u(this).val();return h==null?null:Array.isArray(h)?u.map(h,function(p){return{name:a.name,value:p.replace(yu,`\r
`)}}):{name:a.name,value:h.replace(yu,`\r
`)}}).get()}});var Kp=/%20/g,Zp=/#.*$/,Jp=/([?&])_=[^&]*/,Qp=/^(.*?):[ \t]*([^\r\n]*)$/mg,tf=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ef=/^(?:GET|HEAD)$/,nf=/^\/\//,wu={},ka={},Su="*/".concat("*"),Ba=m.createElement("a");Ba.href=Ps.href;function Mu(o){return function(a,h){typeof a!="string"&&(h=a,a="*");var p,x=0,b=a.toLowerCase().match(zt)||[];if(T(h))for(;p=b[x++];)p[0]==="+"?(p=p.slice(1)||"*",(o[p]=o[p]||[]).unshift(h)):(o[p]=o[p]||[]).push(h)}}function Eu(o,a,h,p){var x={},b=o===ka;function S(N){var I;return x[N]=!0,u.each(o[N]||[],function(H,it){var pt=it(a,h,p);if(typeof pt=="string"&&!b&&!x[pt])return a.dataTypes.unshift(pt),S(pt),!1;if(b)return!(I=pt)}),I}return S(a.dataTypes[0])||!x["*"]&&S("*")}function Va(o,a){var h,p,x=u.ajaxSettings.flatOptions||{};for(h in a)a[h]!==void 0&&((x[h]?o:p||(p={}))[h]=a[h]);return p&&u.extend(!0,o,p),o}function rf(o,a,h){for(var p,x,b,S,N=o.contents,I=o.dataTypes;I[0]==="*";)I.shift(),p===void 0&&(p=o.mimeType||a.getResponseHeader("Content-Type"));if(p){for(x in N)if(N[x]&&N[x].test(p)){I.unshift(x);break}}if(I[0]in h)b=I[0];else{for(x in h){if(!I[0]||o.converters[x+" "+I[0]]){b=x;break}S||(S=x)}b=b||S}if(b)return b!==I[0]&&I.unshift(b),h[b]}function sf(o,a,h,p){var x,b,S,N,I,H={},it=o.dataTypes.slice();if(it[1])for(S in o.converters)H[S.toLowerCase()]=o.converters[S];for(b=it.shift();b;)if(o.responseFields[b]&&(h[o.responseFields[b]]=a),!I&&p&&o.dataFilter&&(a=o.dataFilter(a,o.dataType)),I=b,b=it.shift(),b){if(b==="*")b=I;else if(I!=="*"&&I!==b){if(S=H[I+" "+b]||H["* "+b],!S){for(x in H)if(N=x.split(" "),N[1]===b&&(S=H[I+" "+N[0]]||H["* "+N[0]],S)){S===!0?S=H[x]:H[x]!==!0&&(b=N[0],it.unshift(N[1]));break}}if(S!==!0)if(S&&o.throws)a=S(a);else try{a=S(a)}catch(pt){return{state:"parsererror",error:S?pt:"No conversion from "+I+" to "+b}}}}return{state:"success",data:a}}u.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ps.href,type:"GET",isLocal:tf.test(Ps.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Su,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":u.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(o,a){return a?Va(Va(o,u.ajaxSettings),a):Va(u.ajaxSettings,o)},ajaxPrefilter:Mu(wu),ajaxTransport:Mu(ka),ajax:function(o,a){typeof o=="object"&&(a=o,o=void 0),a=a||{};var h,p,x,b,S,N,I,H,it,pt,J=u.ajaxSetup({},a),vt=J.context||J,se=J.context&&(vt.nodeType||vt.jquery)?u(vt):u.event,Ae=u.Deferred(),me=u.Callbacks("once memory"),mn=J.statusCode||{},on={},ni={},ii="canceled",Te={readyState:0,getResponseHeader:function(Re){var Ze;if(I){if(!b)for(b={};Ze=Qp.exec(x);)b[Ze[1].toLowerCase()+" "]=(b[Ze[1].toLowerCase()+" "]||[]).concat(Ze[2]);Ze=b[Re.toLowerCase()+" "]}return Ze==null?null:Ze.join(", ")},getAllResponseHeaders:function(){return I?x:null},setRequestHeader:function(Re,Ze){return I==null&&(Re=ni[Re.toLowerCase()]=ni[Re.toLowerCase()]||Re,on[Re]=Ze),this},overrideMimeType:function(Re){return I==null&&(J.mimeType=Re),this},statusCode:function(Re){var Ze;if(Re)if(I)Te.always(Re[Te.status]);else for(Ze in Re)mn[Ze]=[mn[Ze],Re[Ze]];return this},abort:function(Re){var Ze=Re||ii;return h&&h.abort(Ze),hr(0,Ze),this}};if(Ae.promise(Te),J.url=((o||J.url||Ps.href)+"").replace(nf,Ps.protocol+"//"),J.type=a.method||a.type||J.method||J.type,J.dataTypes=(J.dataType||"*").toLowerCase().match(zt)||[""],J.crossDomain==null){N=m.createElement("a");try{N.href=J.url,N.href=N.href,J.crossDomain=Ba.protocol+"//"+Ba.host!=N.protocol+"//"+N.host}catch{J.crossDomain=!0}}if(J.data&&J.processData&&typeof J.data!="string"&&(J.data=u.param(J.data,J.traditional)),Eu(wu,J,a,Te),I)return Te;H=u.event&&J.global,H&&u.active++===0&&u.event.trigger("ajaxStart"),J.type=J.type.toUpperCase(),J.hasContent=!ef.test(J.type),p=J.url.replace(Zp,""),J.hasContent?J.data&&J.processData&&(J.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(J.data=J.data.replace(Kp,"+")):(pt=J.url.slice(p.length),J.data&&(J.processData||typeof J.data=="string")&&(p+=(Oa.test(p)?"&":"?")+J.data,delete J.data),J.cache===!1&&(p=p.replace(Jp,"$1"),pt=(Oa.test(p)?"&":"?")+"_="+_u.guid+++pt),J.url=p+pt),J.ifModified&&(u.lastModified[p]&&Te.setRequestHeader("If-Modified-Since",u.lastModified[p]),u.etag[p]&&Te.setRequestHeader("If-None-Match",u.etag[p])),(J.data&&J.hasContent&&J.contentType!==!1||a.contentType)&&Te.setRequestHeader("Content-Type",J.contentType),Te.setRequestHeader("Accept",J.dataTypes[0]&&J.accepts[J.dataTypes[0]]?J.accepts[J.dataTypes[0]]+(J.dataTypes[0]!=="*"?", "+Su+"; q=0.01":""):J.accepts["*"]);for(it in J.headers)Te.setRequestHeader(it,J.headers[it]);if(J.beforeSend&&(J.beforeSend.call(vt,Te,J)===!1||I))return Te.abort();if(ii="abort",me.add(J.complete),Te.done(J.success),Te.fail(J.error),h=Eu(ka,J,a,Te),!h)hr(-1,"No Transport");else{if(Te.readyState=1,H&&se.trigger("ajaxSend",[Te,J]),I)return Te;J.async&&J.timeout>0&&(S=t.setTimeout(function(){Te.abort("timeout")},J.timeout));try{I=!1,h.send(on,hr)}catch(Re){if(I)throw Re;hr(-1,Re)}}function hr(Re,Ze,Ds,Ha){var ri,Ls,si,zi,Hi,zn=Ze;I||(I=!0,S&&t.clearTimeout(S),h=void 0,x=Ha||"",Te.readyState=Re>0?4:0,ri=Re>=200&&Re<300||Re===304,Ds&&(zi=rf(J,Te,Ds)),!ri&&u.inArray("script",J.dataTypes)>-1&&u.inArray("json",J.dataTypes)<0&&(J.converters["text script"]=function(){}),zi=sf(J,zi,Te,ri),ri?(J.ifModified&&(Hi=Te.getResponseHeader("Last-Modified"),Hi&&(u.lastModified[p]=Hi),Hi=Te.getResponseHeader("etag"),Hi&&(u.etag[p]=Hi)),Re===204||J.type==="HEAD"?zn="nocontent":Re===304?zn="notmodified":(zn=zi.state,Ls=zi.data,si=zi.error,ri=!si)):(si=zn,(Re||!zn)&&(zn="error",Re<0&&(Re=0))),Te.status=Re,Te.statusText=(Ze||zn)+"",ri?Ae.resolveWith(vt,[Ls,zn,Te]):Ae.rejectWith(vt,[Te,zn,si]),Te.statusCode(mn),mn=void 0,H&&se.trigger(ri?"ajaxSuccess":"ajaxError",[Te,J,ri?Ls:si]),me.fireWith(vt,[Te,zn]),H&&(se.trigger("ajaxComplete",[Te,J]),--u.active||u.event.trigger("ajaxStop")))}return Te},getJSON:function(o,a,h){return u.get(o,a,h,"json")},getScript:function(o,a){return u.get(o,void 0,a,"script")}}),u.each(["get","post"],function(o,a){u[a]=function(h,p,x,b){return T(p)&&(b=b||x,x=p,p=void 0),u.ajax(u.extend({url:h,type:a,dataType:b,data:p,success:x},u.isPlainObject(h)&&h))}}),u.ajaxPrefilter(function(o){var a;for(a in o.headers)a.toLowerCase()==="content-type"&&(o.contentType=o.headers[a]||"")}),u._evalUrl=function(o,a,h){return u.ajax({url:o,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(p){u.globalEval(p,a,h)}})},u.fn.extend({wrapAll:function(o){var a;return this[0]&&(T(o)&&(o=o.call(this[0])),a=u(o,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&a.insertBefore(this[0]),a.map(function(){for(var h=this;h.firstElementChild;)h=h.firstElementChild;return h}).append(this)),this},wrapInner:function(o){return T(o)?this.each(function(a){u(this).wrapInner(o.call(this,a))}):this.each(function(){var a=u(this),h=a.contents();h.length?h.wrapAll(o):a.append(o)})},wrap:function(o){var a=T(o);return this.each(function(h){u(this).wrapAll(a?o.call(this,h):o)})},unwrap:function(o){return this.parent(o).not("body").each(function(){u(this).replaceWith(this.childNodes)}),this}}),u.expr.pseudos.hidden=function(o){return!u.expr.pseudos.visible(o)},u.expr.pseudos.visible=function(o){return!!(o.offsetWidth||o.offsetHeight||o.getClientRects().length)},u.ajaxSettings.xhr=function(){try{return new t.XMLHttpRequest}catch{}};var of={0:200,1223:204},Rs=u.ajaxSettings.xhr();M.cors=!!Rs&&"withCredentials"in Rs,M.ajax=Rs=!!Rs,u.ajaxTransport(function(o){var a,h;if(M.cors||Rs&&!o.crossDomain)return{send:function(p,x){var b,S=o.xhr();if(S.open(o.type,o.url,o.async,o.username,o.password),o.xhrFields)for(b in o.xhrFields)S[b]=o.xhrFields[b];o.mimeType&&S.overrideMimeType&&S.overrideMimeType(o.mimeType),!o.crossDomain&&!p["X-Requested-With"]&&(p["X-Requested-With"]="XMLHttpRequest");for(b in p)S.setRequestHeader(b,p[b]);a=function(N){return function(){a&&(a=h=S.onload=S.onerror=S.onabort=S.ontimeout=S.onreadystatechange=null,N==="abort"?S.abort():N==="error"?typeof S.status!="number"?x(0,"error"):x(S.status,S.statusText):x(of[S.status]||S.status,S.statusText,(S.responseType||"text")!=="text"||typeof S.responseText!="string"?{binary:S.response}:{text:S.responseText},S.getAllResponseHeaders()))}},S.onload=a(),h=S.onerror=S.ontimeout=a("error"),S.onabort!==void 0?S.onabort=h:S.onreadystatechange=function(){S.readyState===4&&t.setTimeout(function(){a&&h()})},a=a("abort");try{S.send(o.hasContent&&o.data||null)}catch(N){if(a)throw N}},abort:function(){a&&a()}}}),u.ajaxPrefilter(function(o){o.crossDomain&&(o.contents.script=!1)}),u.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(o){return u.globalEval(o),o}}}),u.ajaxPrefilter("script",function(o){o.cache===void 0&&(o.cache=!1),o.crossDomain&&(o.type="GET")}),u.ajaxTransport("script",function(o){if(o.crossDomain||o.scriptAttrs){var a,h;return{send:function(p,x){a=u("<script>").attr(o.scriptAttrs||{}).prop({charset:o.scriptCharset,src:o.url}).on("load error",h=function(b){a.remove(),h=null,b&&x(b.type==="error"?404:200,b.type)}),m.head.appendChild(a[0])},abort:function(){h&&h()}}}});var Tu=[],za=/(=)\?(?=&|$)|\?\?/;u.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var o=Tu.pop()||u.expando+"_"+_u.guid++;return this[o]=!0,o}}),u.ajaxPrefilter("json jsonp",function(o,a,h){var p,x,b,S=o.jsonp!==!1&&(za.test(o.url)?"url":typeof o.data=="string"&&(o.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&za.test(o.data)&&"data");if(S||o.dataTypes[0]==="jsonp")return p=o.jsonpCallback=T(o.jsonpCallback)?o.jsonpCallback():o.jsonpCallback,S?o[S]=o[S].replace(za,"$1"+p):o.jsonp!==!1&&(o.url+=(Oa.test(o.url)?"&":"?")+o.jsonp+"="+p),o.converters["script json"]=function(){return b||u.error(p+" was not called"),b[0]},o.dataTypes[0]="json",x=t[p],t[p]=function(){b=arguments},h.always(function(){x===void 0?u(t).removeProp(p):t[p]=x,o[p]&&(o.jsonpCallback=a.jsonpCallback,Tu.push(p)),b&&T(x)&&x(b[0]),b=x=void 0}),"script"}),M.createHTMLDocument=function(){var o=m.implementation.createHTMLDocument("").body;return o.innerHTML="<form></form><form></form>",o.childNodes.length===2}(),u.parseHTML=function(o,a,h){if(typeof o!="string")return[];typeof a=="boolean"&&(h=a,a=!1);var p,x,b;return a||(M.createHTMLDocument?(a=m.implementation.createHTMLDocument(""),p=a.createElement("base"),p.href=m.location.href,a.head.appendChild(p)):a=m),x=Jt.exec(o),b=!h&&[],x?[a.createElement(x[1])]:(x=En([o],a,b),b&&b.length&&u(b).remove(),u.merge([],x.childNodes))},u.fn.load=function(o,a,h){var p,x,b,S=this,N=o.indexOf(" ");return N>-1&&(p=cr(o.slice(N)),o=o.slice(0,N)),T(a)?(h=a,a=void 0):a&&typeof a=="object"&&(x="POST"),S.length>0&&u.ajax({url:o,type:x||"GET",dataType:"html",data:a}).done(function(I){b=arguments,S.html(p?u("<div>").append(u.parseHTML(I)).find(p):I)}).always(h&&function(I,H){S.each(function(){h.apply(this,b||[I.responseText,H,I])})}),this},u.expr.pseudos.animated=function(o){return u.grep(u.timers,function(a){return o===a.elem}).length},u.offset={setOffset:function(o,a,h){var p,x,b,S,N,I,H,it=u.css(o,"position"),pt=u(o),J={};it==="static"&&(o.style.position="relative"),N=pt.offset(),b=u.css(o,"top"),I=u.css(o,"left"),H=(it==="absolute"||it==="fixed")&&(b+I).indexOf("auto")>-1,H?(p=pt.position(),S=p.top,x=p.left):(S=parseFloat(b)||0,x=parseFloat(I)||0),T(a)&&(a=a.call(o,h,u.extend({},N))),a.top!=null&&(J.top=a.top-N.top+S),a.left!=null&&(J.left=a.left-N.left+x),"using"in a?a.using.call(o,J):pt.css(J)}},u.fn.extend({offset:function(o){if(arguments.length)return o===void 0?this:this.each(function(x){u.offset.setOffset(this,o,x)});var a,h,p=this[0];if(p)return p.getClientRects().length?(a=p.getBoundingClientRect(),h=p.ownerDocument.defaultView,{top:a.top+h.pageYOffset,left:a.left+h.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var o,a,h,p=this[0],x={top:0,left:0};if(u.css(p,"position")==="fixed")a=p.getBoundingClientRect();else{for(a=this.offset(),h=p.ownerDocument,o=p.offsetParent||h.documentElement;o&&(o===h.body||o===h.documentElement)&&u.css(o,"position")==="static";)o=o.parentNode;o&&o!==p&&o.nodeType===1&&(x=u(o).offset(),x.top+=u.css(o,"borderTopWidth",!0),x.left+=u.css(o,"borderLeftWidth",!0))}return{top:a.top-x.top-u.css(p,"marginTop",!0),left:a.left-x.left-u.css(p,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var o=this.offsetParent;o&&u.css(o,"position")==="static";)o=o.offsetParent;return o||$t})}}),u.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(o,a){var h=a==="pageYOffset";u.fn[o]=function(p){return Ut(this,function(x,b,S){var N;if(y(x)?N=x:x.nodeType===9&&(N=x.defaultView),S===void 0)return N?N[a]:x[b];N?N.scrollTo(h?N.pageXOffset:S,h?S:N.pageYOffset):x[b]=S},o,p,arguments.length)}}),u.each(["top","left"],function(o,a){u.cssHooks[a]=tt(M.pixelPosition,function(h,p){if(p)return p=Q(h,a),Ts.test(p)?u(h).position()[a]+"px":p})}),u.each({Height:"height",Width:"width"},function(o,a){u.each({padding:"inner"+o,content:a,"":"outer"+o},function(h,p){u.fn[p]=function(x,b){var S=arguments.length&&(h||typeof x!="boolean"),N=h||(x===!0||b===!0?"margin":"border");return Ut(this,function(I,H,it){var pt;return y(I)?p.indexOf("outer")===0?I["inner"+o]:I.document.documentElement["client"+o]:I.nodeType===9?(pt=I.documentElement,Math.max(I.body["scroll"+o],pt["scroll"+o],I.body["offset"+o],pt["offset"+o],pt["client"+o])):it===void 0?u.css(I,H,N):u.style(I,H,it,N)},a,S?x:void 0,S)}})}),u.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(o,a){u.fn[a]=function(h){return this.on(a,h)}}),u.fn.extend({bind:function(o,a,h){return this.on(o,null,a,h)},unbind:function(o,a){return this.off(o,null,a)},delegate:function(o,a,h,p){return this.on(a,o,h,p)},undelegate:function(o,a,h){return arguments.length===1?this.off(o,"**"):this.off(a,o||"**",h)},hover:function(o,a){return this.on("mouseenter",o).on("mouseleave",a||o)}}),u.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(o,a){u.fn[a]=function(h,p){return arguments.length>0?this.on(a,null,h,p):this.trigger(a)}});var af=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;u.proxy=function(o,a){var h,p,x;if(typeof a=="string"&&(h=o[a],a=o,o=h),!!T(o))return p=s.call(arguments,2),x=function(){return o.apply(a||this,p.concat(s.call(arguments)))},x.guid=o.guid=o.guid||u.guid++,x},u.holdReady=function(o){o?u.readyWait++:u.ready(!0)},u.isArray=Array.isArray,u.parseJSON=JSON.parse,u.nodeName=P,u.isFunction=T,u.isWindow=y,u.camelCase=E,u.type=R,u.now=Date.now,u.isNumeric=function(o){var a=u.type(o);return(a==="number"||a==="string")&&!isNaN(o-parseFloat(o))},u.trim=function(o){return o==null?"":(o+"").replace(af,"$1")};var lf=t.jQuery,cf=t.$;return u.noConflict=function(o){return t.$===u&&(t.$=cf),o&&t.jQuery===u&&(t.jQuery=lf),u},typeof e>"u"&&(t.jQuery=t.$=u),u})}(aa)),aa.exports}var ib=nb();const la=tb(ib);function rb(n,t,e,i,r,s){const l=[];let d,f;s==="gouraud"?(d=new Sr({color:1401481}),f=new Sr({color:733506})):(d=new wr({color:1401481,shininess:30}),f=new wr({color:733506,shininess:30}));function g(gt){n.add(gt.mesh),t.add(gt),l.push(gt),r&&gt.mesh instanceof gn&&r.push(gt.mesh)}function v(gt,ue,F){const Qe=[],pe=ue.clone().normalize();for(let te=0;te<F;te++){const Ut=gt.clone().add(pe.clone().multiplyScalar(te*1)),Pe=new Mc(pe,d,f);Pe.setPosition(Ut.x,0,Ut.z),Qe.push(Pe),te-1>=0&&Qe[te-1].addCollidable(Pe)}return Qe}function _(gt,ue,F=3,Qe=6,pe=!0){const te=[],Ut=ue.clone().normalize(),Pe=pe?-1:1,Ht=new B().crossVectors(Er,Ut).normalize().multiplyScalar(Pe),L=gt.clone().add(Ht.clone().multiplyScalar(F)),E=Math.PI/2/(Qe-1);for(let $=0;$<Qe;++$){const ht=$*E,K=L.clone().add(Ht.clone().multiplyScalar(-1*F*Math.cos(ht))).add(ue.clone().multiplyScalar(F*Math.sin(ht))),ot=Ht.clone().multiplyScalar(Math.sin(ht)).add(Ut.clone().multiplyScalar(Math.cos(ht))).normalize(),Vt=new Mc(ot,d,f);Vt.setPosition(K.x,0,K.z),te.push(Vt),$>0&&te[$-1].addCollidable(te[$])}return te}const w=v(e,i,10);w.map(gt=>g(gt));const M=_(w[w.length-1].mesh.position.clone().add(i.clone().normalize().multiplyScalar(1)).add(new B(0,0,.5)),i);w[w.length-1].addCollidable(M[0]),M.map(gt=>g(gt));const T=_(w[w.length-1].mesh.position.clone().add(i.clone().normalize().multiplyScalar(1)).add(new B(0,0,-.5)),i,3,6,!1);w[w.length-1].addCollidable(T[0]),T.map(gt=>g(gt));const y=v(M[M.length-1].mesh.position.clone().add(M[M.length-1].fwdAxis.clone().multiplyScalar(1)),M[M.length-1].fwdAxis,10);M[M.length-1].addCollidable(y[0]),y.map(gt=>g(gt));const m=v(T[T.length-1].mesh.position.clone().add(T[T.length-1].fwdAxis.clone().multiplyScalar(1)),T[T.length-1].fwdAxis,10);T[T.length-1].addCollidable(m[0]),m.map(gt=>g(gt));const O=_(y[y.length-1].mesh.position.clone().add(y[y.length-1].fwdAxis.clone().multiplyScalar(1)),y[y.length-1].fwdAxis);y[y.length-1].addCollidable(O[0]),O.map(gt=>g(gt));const U=_(m[m.length-1].mesh.position.clone().add(m[m.length-1].fwdAxis.clone().multiplyScalar(1)),m[m.length-1].fwdAxis,3,6,!1);m[m.length-1].addCollidable(U[0]),U.map(gt=>g(gt));const R=v(O[O.length-1].mesh.position.clone().add(O[O.length-1].fwdAxis.clone().multiplyScalar(1)),O[O.length-1].fwdAxis,20);O[O.length-1].addCollidable(R[0]),R.map(gt=>g(gt));const W=v(U[U.length-1].mesh.position.clone().add(U[U.length-1].fwdAxis.clone().multiplyScalar(1)),U[U.length-1].fwdAxis,20);U[U.length-1].addCollidable(W[0]),W.map(gt=>g(gt));const z=_(R[R.length-1].mesh.position.clone().add(R[R.length-1].fwdAxis.clone().multiplyScalar(1)),R[R.length-1].fwdAxis);R[R.length-1].addCollidable(z[0]),z.map(gt=>g(gt));const u=_(W[W.length-1].mesh.position.clone().add(W[W.length-1].fwdAxis.clone().multiplyScalar(1)),W[W.length-1].fwdAxis,3,6,!1);W[W.length-1].addCollidable(u[0]),u.map(gt=>g(gt));const Y=v(z[z.length-1].mesh.position.clone().add(z[z.length-1].fwdAxis.clone().multiplyScalar(1)),z[z.length-1].fwdAxis,3);z[z.length-1].addCollidable(Y[0]),Y.map(gt=>g(gt));const P=v(u[u.length-1].mesh.position.clone().add(u[u.length-1].fwdAxis.clone().multiplyScalar(1)),u[u.length-1].fwdAxis,3);u[u.length-1].addCollidable(P[0]),P.map(gt=>g(gt));const A=_(Y[Y.length-1].mesh.position.clone().add(Y[Y.length-1].fwdAxis.clone().multiplyScalar(1)),Y[Y.length-1].fwdAxis);Y[Y.length-1].addCollidable(A[0]),A.map(gt=>g(gt));const V=_(P[P.length-1].mesh.position.clone().add(P[P.length-1].fwdAxis.clone().multiplyScalar(1)),P[P.length-1].fwdAxis,3,6,!1);P[P.length-1].addCollidable(V[0]),V.map(gt=>g(gt));const st=v(A[A.length-1].mesh.position.clone().add(A[A.length-1].fwdAxis.clone().multiplyScalar(1)),A[A.length-1].fwdAxis,5);A[A.length-1].addCollidable(st[0]),st.map(gt=>g(gt));const j=v(V[V.length-1].mesh.position.clone().add(V[V.length-1].fwdAxis.clone().multiplyScalar(1)),V[V.length-1].fwdAxis,5);V[V.length-1].addCollidable(j[0]),j.map(gt=>g(gt));const at=_(st[st.length-1].mesh.position.clone().add(st[st.length-1].fwdAxis.clone().multiplyScalar(1)).add(new B(0,0,.5)),st[st.length-1].fwdAxis,2,4);st[st.length-1].addCollidable(at[0]),at.map(gt=>g(gt));const ft=_(st[st.length-1].mesh.position.clone().add(st[st.length-1].fwdAxis.clone().multiplyScalar(1)).add(new B(0,0,-.5)),st[st.length-1].fwdAxis,1,3,!1);st[st.length-1].addCollidable(ft[0]),ft.map(gt=>g(gt));const ut=_(j[j.length-1].mesh.position.clone().add(j[j.length-1].fwdAxis.clone().multiplyScalar(1)).add(new B(0,0,.5)),j[j.length-1].fwdAxis,1,3);j[j.length-1].addCollidable(ut[0]),ut.map(gt=>g(gt));const lt=_(j[j.length-1].mesh.position.clone().add(j[j.length-1].fwdAxis.clone().multiplyScalar(1)).add(new B(0,0,-.5)),j[j.length-1].fwdAxis,2,4,!1);j[j.length-1].addCollidable(lt[0]),lt.map(gt=>g(gt));const nt=_(ut[ut.length-1].mesh.position.clone().add(ut[ut.length-1].fwdAxis.clone().multiplyScalar(1)),ut[ut.length-1].fwdAxis,1,3);ut[ut.length-1].addCollidable(nt[0]),nt.map(gt=>g(gt));const yt=_(ft[ft.length-1].mesh.position.clone().add(ft[ft.length-1].fwdAxis.clone().multiplyScalar(1)),ft[ft.length-1].fwdAxis,1,3,!1);ft[ft.length-1].addCollidable(yt[0]),yt.map(gt=>g(gt));const Lt=v(nt[nt.length-1].mesh.position.clone().add(nt[nt.length-1].fwdAxis.clone().multiplyScalar(1)),nt[nt.length-1].fwdAxis,10);nt[nt.length-1].addCollidable(Lt[0]),Lt.map(gt=>g(gt));const Wt=v(yt[yt.length-1].mesh.position.clone().add(yt[yt.length-1].fwdAxis.clone().multiplyScalar(1)),yt[yt.length-1].fwdAxis,10);yt[yt.length-1].addCollidable(Wt[0]),Wt.map(gt=>g(gt));const Jt=_(lt[lt.length-1].mesh.position.clone().add(lt[lt.length-1].fwdAxis.clone().multiplyScalar(1)).add(new B(.5,0,0)),lt[lt.length-1].fwdAxis,2,4);lt[lt.length-1].addCollidable(Jt[0]),Jt.map(gt=>g(gt));const de=_(lt[lt.length-1].mesh.position.clone().add(lt[lt.length-1].fwdAxis.clone().multiplyScalar(1)).add(new B(-.5,0,0)),lt[lt.length-1].fwdAxis,2,4,!1);lt[lt.length-1].addCollidable(de[0]),de.map(gt=>g(gt));const ct=_(at[at.length-1].mesh.position.clone().add(at[at.length-1].fwdAxis.clone().multiplyScalar(1)).add(new B(-.5,0,0)),at[at.length-1].fwdAxis,2,4);at[at.length-1].addCollidable(ct[0]),ct.map(gt=>g(gt));const bt=_(at[at.length-1].mesh.position.clone().add(at[at.length-1].fwdAxis.clone().multiplyScalar(1)).add(new B(.5,0,0)),at[at.length-1].fwdAxis,2,4,!1);at[at.length-1].addCollidable(bt[0]),bt.map(gt=>g(gt));const kt=v(de[de.length-1].mesh.position.clone().add(de[de.length-1].fwdAxis.clone().multiplyScalar(1)),de[de.length-1].fwdAxis,5);de[de.length-1].addCollidable(kt[0]),kt.map(gt=>g(gt));const St=v(ct[ct.length-1].mesh.position.clone().add(ct[ct.length-1].fwdAxis.clone().multiplyScalar(1)),ct[ct.length-1].fwdAxis,5);ct[ct.length-1].addCollidable(St[0]),St.map(gt=>g(gt));const Bt=v(Jt[Jt.length-1].mesh.position.clone().add(Jt[Jt.length-1].fwdAxis.clone().multiplyScalar(1)),Jt[Jt.length-1].fwdAxis,5);Jt[Jt.length-1].addCollidable(Bt[0]),Bt.map(gt=>g(gt));const oe=v(bt[bt.length-1].mesh.position.clone().add(bt[bt.length-1].fwdAxis.clone().multiplyScalar(1)),bt[bt.length-1].fwdAxis,5);bt[bt.length-1].addCollidable(oe[0]),oe.map(gt=>g(gt));const zt=_(Bt[Bt.length-1].mesh.position.clone().add(Bt[Bt.length-1].fwdAxis.clone().multiplyScalar(1)),Bt[Bt.length-1].fwdAxis,5,8);Bt[Bt.length-1].addCollidable(zt[0]),zt.map(gt=>g(gt));const He=_(oe[oe.length-1].mesh.position.clone().add(oe[oe.length-1].fwdAxis.clone().multiplyScalar(1)),oe[oe.length-1].fwdAxis,5,8,!1);return oe[oe.length-1].addCollidable(He[0]),He.map(gt=>g(gt)),l}class sb{constructor(t){Zt(this,"scene");Zt(this,"lights");Zt(this,"helpers");Zt(this,"pointLight",new ah);Zt(this,"spotLight",new Xo);Zt(this,"trackingSpotlight",new Xo);Zt(this,"trackingSpotlightHelper",new yl(this.trackingSpotlight));Zt(this,"currentMovingObject",null);Zt(this,"targetPosition",new B);Zt(this,"currentTargetPosition",new B);Zt(this,"transitionSpeed",1);Zt(this,"clock");this.scene=t,this.lights=[],this.helpers=[],this.clock=new Gc,this.setupLighting()}setupLighting(){this.pointLight=new ah(new ce(16777215),500,50),this.pointLight.position.set(0,25,0),this.pointLight.castShadow=!0,this.pointLight.shadow.mapSize.width=1024,this.pointLight.shadow.mapSize.height=1024,this.lights.push(this.pointLight),this.scene.add(this.pointLight);const t=new $m(this.pointLight,1);t.visible=!1,this.scene.add(t),this.helpers.push(t),this.spotLight=new Xo(new ce(16776960),100),this.spotLight.position.set(0,15,-10),this.spotLight.target.position.set(0,0,0),this.spotLight.angle=Math.PI/8,this.spotLight.penumbra=.2,this.spotLight.decay=1.5,this.spotLight.distance=50,this.spotLight.castShadow=!0,this.spotLight.shadow.mapSize.width=1024,this.spotLight.shadow.mapSize.height=1024,this.lights.push(this.spotLight),this.scene.add(this.spotLight),this.scene.add(this.spotLight.target);const e=new yl(this.spotLight);e.visible=!1,this.scene.add(e),this.helpers.push(e),this.trackingSpotlight=new Xo(new ce(43775),50),this.trackingSpotlight.visible=!0,this.trackingSpotlight.position.set(15,15,5),this.trackingSpotlight.angle=Math.PI/25,this.trackingSpotlight.penumbra=.05,this.trackingSpotlight.decay=1,this.trackingSpotlight.distance=40,this.trackingSpotlight.castShadow=!0,this.trackingSpotlight.shadow.mapSize.width=1024,this.trackingSpotlight.shadow.mapSize.height=1024,this.trackingSpotlight.target.position.set(0,0,0),this.targetPosition.copy(this.trackingSpotlight.target.position),this.currentTargetPosition.copy(this.trackingSpotlight.target.position),this.scene.add(this.trackingSpotlight),this.scene.add(this.trackingSpotlight.target),this.lights.push(this.trackingSpotlight),this.trackingSpotlightHelper=new yl(this.trackingSpotlight),this.trackingSpotlightHelper.visible=!1,this.scene.add(this.trackingSpotlightHelper),this.helpers.push(this.trackingSpotlightHelper)}togglePointLight(){this.pointLight.visible=!this.pointLight.visible}toggleSpotLight(){this.spotLight.visible=!this.spotLight.visible}toggleTrackingSpotlight(){this.trackingSpotlight.visible=!this.trackingSpotlight.visible}toggleHelpers(){this.helpers.forEach(t=>{t.visible=!t.visible})}setTrackingObject(t){this.currentMovingObject=t,t&&this.targetPosition.copy(t.position)}updateTrackingSpotlight(){const t=this.clock.getDelta();this.currentMovingObject&&this.targetPosition.copy(this.currentMovingObject.position);const e=Math.min(1,this.transitionSpeed*t);this.currentTargetPosition.lerp(this.targetPosition,e),this.trackingSpotlight.target.position.copy(this.currentTargetPosition),this.trackingSpotlightHelper&&this.trackingSpotlightHelper.update()}}/*! Tweakpane 4.0.5 (c) 2016 cocopon, licensed under the MIT license. */function je(n){return n==null}function Xc(n){return n!==null&&typeof n=="object"}function Ec(n){return n!==null&&typeof n=="object"}function ob(n,t){if(n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function Lr(n,t){return Array.from(new Set([...Object.keys(n),...Object.keys(t)])).reduce((i,r)=>{const s=n[r],l=t[r];return Ec(s)&&Ec(l)?Object.assign(Object.assign({},i),{[r]:Lr(s,l)}):Object.assign(Object.assign({},i),{[r]:r in t?l:s})},{})}function qc(n){return Xc(n)?"target"in n:!1}const ab={alreadydisposed:()=>"View has been already disposed",invalidparams:n=>`Invalid parameters for '${n.name}'`,nomatchingcontroller:n=>`No matching controller for '${n.key}'`,nomatchingview:n=>`No matching view for '${JSON.stringify(n.params)}'`,notbindable:()=>"Value is not bindable",notcompatible:n=>`Not compatible with  plugin '${n.id}'`,propertynotfound:n=>`Property '${n.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class Je{static alreadyDisposed(){return new Je({type:"alreadydisposed"})}static notBindable(){return new Je({type:"notbindable"})}static notCompatible(t,e){return new Je({type:"notcompatible",context:{id:`${t}.${e}`}})}static propertyNotFound(t){return new Je({type:"propertynotfound",context:{name:t}})}static shouldNeverHappen(){return new Je({type:"shouldneverhappen"})}constructor(t){var e;this.message=(e=ab[t.type](t.context))!==null&&e!==void 0?e:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=t.type}toString(){return this.message}}class _a{constructor(t,e){this.obj_=t,this.key=e}static isBindable(t){return!(t===null||typeof t!="object"&&typeof t!="function")}read(){return this.obj_[this.key]}write(t){this.obj_[this.key]=t}writeProperty(t,e){const i=this.read();if(!_a.isBindable(i))throw Je.notBindable();if(!(t in i))throw Je.propertyNotFound(t);i[t]=e}}class rn{constructor(){this.observers_={}}on(t,e,i){var r;let s=this.observers_[t];return s||(s=this.observers_[t]=[]),s.push({handler:e,key:(r=i==null?void 0:i.key)!==null&&r!==void 0?r:e}),this}off(t,e){const i=this.observers_[t];return i&&(this.observers_[t]=i.filter(r=>r.key!==e)),this}emit(t,e){const i=this.observers_[t];i&&i.forEach(r=>{r.handler(e)})}}class lb{constructor(t,e){var i;this.constraint_=e==null?void 0:e.constraint,this.equals_=(i=e==null?void 0:e.equals)!==null&&i!==void 0?i:(r,s)=>r===s,this.emitter=new rn,this.rawValue_=t}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const i=e??{forceEmit:!1,last:!0},r=this.constraint_?this.constraint_.constrain(t):t,s=this.rawValue_;this.equals_(s,r)&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=r,this.emitter.emit("change",{options:i,previousRawValue:s,rawValue:r,sender:this}))}}class cb{constructor(t){this.emitter=new rn,this.value_=t}get rawValue(){return this.value_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const i=e??{forceEmit:!1,last:!0},r=this.value_;r===t&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=t,this.emitter.emit("change",{options:i,previousRawValue:r,rawValue:this.value_,sender:this}))}}class ub{constructor(t){this.emitter=new rn,this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_)}get rawValue(){return this.value_.rawValue}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function Ye(n,t){const e=t==null?void 0:t.constraint,i=t==null?void 0:t.equals;return!e&&!i?new cb(n):new lb(n,t)}function hb(n){return[new ub(n),(t,e)=>{n.setRawValue(t,e)}]}class _e{constructor(t){this.emitter=new rn,this.valMap_=t;for(const e in this.valMap_)this.valMap_[e].emitter.on("change",()=>{this.emitter.emit("change",{key:e,sender:this})})}static createCore(t){return Object.keys(t).reduce((i,r)=>Object.assign(i,{[r]:Ye(t[r])}),{})}static fromObject(t){const e=this.createCore(t);return new _e(e)}get(t){return this.valMap_[t].rawValue}set(t,e){this.valMap_[t].rawValue=e}value(t){return this.valMap_[t]}}class oo{constructor(t){this.values=_e.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),i=this.values.get("min");return Math.min(Math.max(t,i),e)}}class db{constructor(t){this.values=_e.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),i=this.values.get("min");let r=t;return je(i)||(r=Math.max(r,i)),je(e)||(r=Math.min(r,e)),r}}class pb{constructor(t,e=0){this.step=t,this.origin=e}constrain(t){const e=this.origin%this.step,i=Math.round((t-e)/this.step);return e+i*this.step}}class fb{constructor(t){this.text=t}evaluate(){return Number(this.text)}toString(){return this.text}}const mb={"**":(n,t)=>Math.pow(n,t),"*":(n,t)=>n*t,"/":(n,t)=>n/t,"%":(n,t)=>n%t,"+":(n,t)=>n+t,"-":(n,t)=>n-t,"<<":(n,t)=>n<<t,">>":(n,t)=>n>>t,">>>":(n,t)=>n>>>t,"&":(n,t)=>n&t,"^":(n,t)=>n^t,"|":(n,t)=>n|t};class gb{constructor(t,e,i){this.left=e,this.operator=t,this.right=i}evaluate(){const t=mb[this.operator];if(!t)throw new Error(`unexpected binary operator: '${this.operator}`);return t(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const vb={"+":n=>n,"-":n=>-n,"~":n=>~n};class _b{constructor(t,e){this.operator=t,this.expression=e}evaluate(){const t=vb[this.operator];if(!t)throw new Error(`unexpected unary operator: '${this.operator}`);return t(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Yc(n){return(t,e)=>{for(let i=0;i<n.length;i++){const r=n[i](t,e);if(r!=="")return r}return""}}function Zs(n,t){var e;const i=n.substr(t).match(/^\s+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function xb(n,t){const e=n.substr(t,1);return e.match(/^[1-9]$/)?e:""}function Js(n,t){var e;const i=n.substr(t).match(/^[0-9]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function bb(n,t){const e=Js(n,t);if(e!=="")return e;const i=n.substr(t,1);if(t+=1,i!=="-"&&i!=="+")return"";const r=Js(n,t);return r===""?"":i+r}function $c(n,t){const e=n.substr(t,1);if(t+=1,e.toLowerCase()!=="e")return"";const i=bb(n,t);return i===""?"":e+i}function jd(n,t){const e=n.substr(t,1);if(e==="0")return e;const i=xb(n,t);return t+=i.length,i===""?"":i+Js(n,t)}function yb(n,t){const e=jd(n,t);if(t+=e.length,e==="")return"";const i=n.substr(t,1);if(t+=i.length,i!==".")return"";const r=Js(n,t);return t+=r.length,e+i+r+$c(n,t)}function wb(n,t){const e=n.substr(t,1);if(t+=e.length,e!==".")return"";const i=Js(n,t);return t+=i.length,i===""?"":e+i+$c(n,t)}function Sb(n,t){const e=jd(n,t);return t+=e.length,e===""?"":e+$c(n,t)}const Mb=Yc([yb,wb,Sb]);function Eb(n,t){var e;const i=n.substr(t).match(/^[01]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function Tb(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0b")return"";const i=Eb(n,t);return i===""?"":e+i}function Cb(n,t){var e;const i=n.substr(t).match(/^[0-7]+/);return(e=i&&i[0])!==null&&e!==void 0?e:""}function Ab(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0o")return"";const i=Cb(n,t);return i===""?"":e+i}function Pb(n,t){var e;const i=n.substr(t).match(/^[0-9a-f]+/i);return(e=i&&i[0])!==null&&e!==void 0?e:""}function Rb(n,t){const e=n.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0x")return"";const i=Pb(n,t);return i===""?"":e+i}const Db=Yc([Tb,Ab,Rb]),Lb=Yc([Db,Mb]);function Ib(n,t){const e=Lb(n,t);return t+=e.length,e===""?null:{evaluable:new fb(e),cursor:t}}function Ub(n,t){const e=n.substr(t,1);if(t+=e.length,e!=="(")return null;const i=qd(n,t);if(!i)return null;t=i.cursor,t+=Zs(n,t).length;const r=n.substr(t,1);return t+=r.length,r!==")"?null:{evaluable:i.evaluable,cursor:t}}function Nb(n,t){var e;return(e=Ib(n,t))!==null&&e!==void 0?e:Ub(n,t)}function Xd(n,t){const e=Nb(n,t);if(e)return e;const i=n.substr(t,1);if(t+=i.length,i!=="+"&&i!=="-"&&i!=="~")return null;const r=Xd(n,t);return r?(t=r.cursor,{cursor:t,evaluable:new _b(i,r.evaluable)}):null}function Ob(n,t,e){e+=Zs(t,e).length;const i=n.filter(r=>t.startsWith(r,e))[0];return i?(e+=i.length,e+=Zs(t,e).length,{cursor:e,operator:i}):null}function Fb(n,t){return(e,i)=>{const r=n(e,i);if(!r)return null;i=r.cursor;let s=r.evaluable;for(;;){const l=Ob(t,e,i);if(!l)break;i=l.cursor;const c=n(e,i);if(!c)return null;i=c.cursor,s=new gb(l.operator,s,c.evaluable)}return s?{cursor:i,evaluable:s}:null}}const kb=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((n,t)=>Fb(n,t),Xd);function qd(n,t){return t+=Zs(n,t).length,kb(n,t)}function Bb(n){const t=qd(n,0);return!t||t.cursor+Zs(n,t.cursor).length!==n.length?null:t.evaluable}function Ui(n){var t;const e=Bb(n);return(t=e==null?void 0:e.evaluate())!==null&&t!==void 0?t:null}function Yd(n){if(typeof n=="number")return n;if(typeof n=="string"){const t=Ui(n);if(!je(t))return t}return 0}function Vb(n){return String(n)}function Un(n){return t=>t.toFixed(Math.max(Math.min(n,20),0))}function Oe(n,t,e,i,r){const s=(n-t)/(e-t);return i+s*(r-i)}function Gh(n){return String(n.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function ln(n,t,e){return Math.min(Math.max(n,t),e)}function $d(n,t){return(n%t+t)%t}function zb(n,t){return je(n.step)?Math.max(Gh(t),2):Gh(n.step)}function Kd(n){var t;return(t=n.step)!==null&&t!==void 0?t:1}function Zd(n,t){var e;const i=Math.abs((e=n.step)!==null&&e!==void 0?e:t);return i===0?.1:Math.pow(10,Math.floor(Math.log10(i))-1)}function Jd(n,t){return je(n.step)?null:new pb(n.step,t)}function Qd(n){return!je(n.max)&&!je(n.min)?new oo({max:n.max,min:n.min}):!je(n.max)||!je(n.min)?new db({max:n.max,min:n.min}):null}function tp(n,t){var e,i,r;return{formatter:(e=n.format)!==null&&e!==void 0?e:Un(zb(n,t)),keyScale:(i=n.keyScale)!==null&&i!==void 0?i:Kd(n),pointerScale:(r=n.pointerScale)!==null&&r!==void 0?r:Zd(n,t)}}function ep(n){return{format:n.optional.function,keyScale:n.optional.number,max:n.optional.number,min:n.optional.number,pointerScale:n.optional.number,step:n.optional.number}}function Kc(n){return{constraint:n.constraint,textProps:_e.fromObject(tp(n.params,n.initialValue))}}class Or{constructor(t){this.controller=t}get element(){return this.controller.view.element}get disabled(){return this.controller.viewProps.get("disabled")}set disabled(t){this.controller.viewProps.set("disabled",t)}get hidden(){return this.controller.viewProps.get("hidden")}set hidden(t){this.controller.viewProps.set("hidden",t)}dispose(){this.controller.viewProps.set("disposed",!0)}importState(t){return this.controller.importState(t)}exportState(){return this.controller.exportState()}}class Ra{constructor(t){this.target=t}}class ao extends Ra{constructor(t,e,i){super(t),this.value=e,this.last=i??!0}}class Hb extends Ra{constructor(t,e){super(t),this.expanded=e}}class Gb extends Ra{constructor(t,e){super(t),this.index=e}}class Wb extends Ra{constructor(t,e){super(t),this.native=e}}class Qs extends Or{constructor(t){super(t),this.onValueChange_=this.onValueChange_.bind(this),this.emitter_=new rn,this.controller.value.emitter.on("change",this.onValueChange_)}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get key(){return this.controller.value.binding.target.key}get tag(){return this.controller.tag}set tag(t){this.controller.tag=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.controller.value.fetch()}onValueChange_(t){const e=this.controller.value;this.emitter_.emit("change",new ao(this,e.binding.target.read(),t.options.last))}}class jb{constructor(t,e){this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=e,this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.emitter=new rn}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=this.binding.read()}push(){this.binding.write(this.value_.rawValue)}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.push(),this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function Xb(n){if(!("binding"in n))return!1;const t=n.binding;return qc(t)&&"read"in t&&"write"in t}function qb(n,t){const i=Object.keys(t).reduce((r,s)=>{if(r===void 0)return;const l=t[s],c=l(n[s]);return c.succeeded?Object.assign(Object.assign({},r),{[s]:c.value}):void 0},{});return i}function Yb(n,t){return n.reduce((e,i)=>{if(e===void 0)return;const r=t(i);if(!(!r.succeeded||r.value===void 0))return[...e,r.value]},[])}function $b(n){return n===null?!1:typeof n=="object"}function Ti(n){return t=>e=>{if(!t&&e===void 0)return{succeeded:!1,value:void 0};if(t&&e===void 0)return{succeeded:!0,value:void 0};const i=n(e);return i!==void 0?{succeeded:!0,value:i}:{succeeded:!1,value:void 0}}}function Wh(n){return{custom:t=>Ti(t)(n),boolean:Ti(t=>typeof t=="boolean"?t:void 0)(n),number:Ti(t=>typeof t=="number"?t:void 0)(n),string:Ti(t=>typeof t=="string"?t:void 0)(n),function:Ti(t=>typeof t=="function"?t:void 0)(n),constant:t=>Ti(e=>e===t?t:void 0)(n),raw:Ti(t=>t)(n),object:t=>Ti(e=>{if($b(e))return qb(e,t)})(n),array:t=>Ti(e=>{if(Array.isArray(e))return Yb(e,t)})(n)}}const Tc={optional:Wh(!0),required:Wh(!1)};function Ke(n,t){const e=t(Tc),i=Tc.required.object(e)(n);return i.succeeded?i.value:void 0}function kn(n,t,e,i){if(t&&!t(n))return!1;const r=Ke(n,e);return r?i(r):!1}function Bn(n,t){var e;return Lr((e=n==null?void 0:n())!==null&&e!==void 0?e:{},t)}function Ar(n){return"value"in n}function np(n){if(!Xc(n)||!("binding"in n))return!1;const t=n.binding;return qc(t)}const ci="http://www.w3.org/2000/svg";function xa(n){n.offsetHeight}function Kb(n,t){const e=n.style.transition;n.style.transition="none",t(),n.style.transition=e}function Zc(n){return n.ontouchstart!==void 0}function Zb(){return globalThis}function Jb(){return Zb().document}function Qb(n){const t=n.ownerDocument.defaultView;return t&&"document"in t?n.getContext("2d",{willReadFrequently:!0}):null}const ty={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function Da(n,t){const e=n.createElementNS(ci,"svg");return e.innerHTML=ty[t],e}function ip(n,t,e){n.insertBefore(t,n.children[e])}function Jc(n){n.parentElement&&n.parentElement.removeChild(n)}function rp(n){for(;n.children.length>0;)n.removeChild(n.children[0])}function ey(n){for(;n.childNodes.length>0;)n.removeChild(n.childNodes[0])}function sp(n){return n.relatedTarget?n.relatedTarget:"explicitOriginalTarget"in n?n.explicitOriginalTarget:null}function Ii(n,t){n.emitter.on("change",e=>{t(e.rawValue)}),t(n.rawValue)}function di(n,t,e){Ii(n.value(t),e)}const ny="tp";function De(n){return(e,i)=>[ny,"-",n,"v",e?`_${e}`:"",i?`-${i}`:""].join("")}const Hs=De("lbl");function iy(n,t){const e=n.createDocumentFragment();return t.split(`
`).map(r=>n.createTextNode(r)).forEach((r,s)=>{s>0&&e.appendChild(n.createElement("br")),e.appendChild(r)}),e}class op{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Hs()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Hs("l")),di(e.props,"label",s=>{je(s)?this.element.classList.add(Hs(void 0,"nol")):(this.element.classList.remove(Hs(void 0,"nol")),ey(i),i.appendChild(iy(t,s)))}),this.element.appendChild(i),this.labelElement=i;const r=t.createElement("div");r.classList.add(Hs("v")),this.element.appendChild(r),this.valueElement=r}}class ap{constructor(t,e){this.props=e.props,this.valueController=e.valueController,this.viewProps=e.valueController.viewProps,this.view=new op(t,{props:e.props,viewProps:this.viewProps}),this.view.valueElement.appendChild(this.valueController.view.element)}importProps(t){return kn(t,null,e=>({label:e.optional.string}),e=>(this.props.set("label",e.label),!0))}exportProps(){return Bn(null,{label:this.props.get("label")})}}function ry(){return["veryfirst","first","last","verylast"]}const jh=De(""),Xh={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class La{constructor(t){this.parent_=null,this.blade=t.blade,this.view=t.view,this.viewProps=t.viewProps;const e=this.view.element;this.blade.value("positions").emitter.on("change",()=>{ry().forEach(i=>{e.classList.remove(jh(void 0,Xh[i]))}),this.blade.get("positions").forEach(i=>{e.classList.add(jh(void 0,Xh[i]))})}),this.viewProps.handleDispose(()=>{Jc(e)})}get parent(){return this.parent_}set parent(t){this.parent_=t,this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}importState(t){return kn(t,null,e=>({disabled:e.required.boolean,hidden:e.required.boolean}),e=>(this.viewProps.importState(e),!0))}exportState(){return Bn(null,Object.assign({},this.viewProps.exportState()))}}class Ir extends La{constructor(t,e){if(e.value!==e.valueController.value)throw Je.shouldNeverHappen();const i=e.valueController.viewProps,r=new ap(t,{blade:e.blade,props:e.props,valueController:e.valueController});super(Object.assign(Object.assign({},e),{view:new op(t,{props:e.props,viewProps:i}),viewProps:i})),this.labelController=r,this.value=e.value,this.valueController=e.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}importState(t){return kn(t,e=>{var i,r,s;return super.importState(e)&&this.labelController.importProps(e)&&((s=(r=(i=this.valueController).importProps)===null||r===void 0?void 0:r.call(i,t))!==null&&s!==void 0?s:!0)},e=>({value:e.optional.raw}),e=>(e.value&&(this.value.rawValue=e.value),!0))}exportState(){var t,e,i;return Bn(()=>super.exportState(),Object.assign(Object.assign({value:this.value.rawValue},this.labelController.exportProps()),(i=(e=(t=this.valueController).exportProps)===null||e===void 0?void 0:e.call(t))!==null&&i!==void 0?i:{}))}}function qh(n){const t=Object.assign({},n);return delete t.value,t}class lp extends Ir{constructor(t,e){super(t,e),this.tag=e.tag}importState(t){return kn(t,e=>super.importState(qh(t)),e=>({tag:e.optional.string}),e=>(this.tag=e.tag,!0))}exportState(){return Bn(()=>qh(super.exportState()),{binding:{key:this.value.binding.target.key,value:this.value.binding.target.read()},tag:this.tag})}}function sy(n){return Ar(n)&&np(n.value)}class oy extends lp{importState(t){return kn(t,e=>super.importState(e),e=>({binding:e.required.object({value:e.required.raw})}),e=>(this.value.binding.inject(e.binding.value),this.value.fetch(),!0))}}function ay(n){return Ar(n)&&Xb(n.value)}function cp(n,t){for(;n.length<t;)n.push(void 0)}function ly(n){const t=[];return cp(t,n),t}function cy(n){const t=n.indexOf(void 0);return t<0?n:n.slice(0,t)}function uy(n,t){const e=[...cy(n),t];return e.length>n.length?e.splice(0,e.length-n.length):cp(e,n.length),e}class hy{constructor(t){this.emitter=new rn,this.onTick_=this.onTick_.bind(this),this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=t.binding,this.value_=Ye(ly(t.bufferSize)),this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.ticker=t.ticker,this.ticker.emitter.on("tick",this.onTick_),this.fetch()}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=uy(this.value_.rawValue,this.binding.read())}onTick_(){this.fetch()}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function dy(n){if(!("binding"in n))return!1;const t=n.binding;return qc(t)&&"read"in t&&!("write"in t)}class py extends lp{exportState(){return Bn(()=>super.exportState(),{binding:{readonly:!0}})}}function fy(n){return Ar(n)&&dy(n.value)}class my extends Or{get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get title(){var t;return(t=this.controller.buttonController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.buttonController.props.set("title",t)}on(t,e){const i=e.bind(this);return this.controller.buttonController.emitter.on(t,s=>{i(new Wb(this,s.nativeEvent))}),this}off(t,e){return this.controller.buttonController.emitter.off(t,e),this}}function gy(n,t,e){e?n.classList.add(t):n.classList.remove(t)}function bs(n,t){return e=>{gy(n,t,e)}}function Qc(n,t){Ii(n,e=>{t.textContent=e??""})}const Pl=De("btn");class vy{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Pl()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("button");i.classList.add(Pl("b")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;const r=t.createElement("div");r.classList.add(Pl("t")),Qc(e.props.value("title"),r),this.buttonElement.appendChild(r)}}class _y{constructor(t,e){this.emitter=new rn,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new vy(t,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}importProps(t){return kn(t,null,e=>({title:e.optional.string}),e=>(this.props.set("title",e.title),!0))}exportProps(){return Bn(null,{title:this.props.get("title")})}onClick_(t){this.emitter.emit("click",{nativeEvent:t,sender:this})}}class Yh extends La{constructor(t,e){const i=new _y(t,{props:e.buttonProps,viewProps:e.viewProps}),r=new ap(t,{blade:e.blade,props:e.labelProps,valueController:i});super({blade:e.blade,view:r.view,viewProps:e.viewProps}),this.buttonController=i,this.labelController=r}importState(t){return kn(t,e=>super.importState(e)&&this.buttonController.importProps(e)&&this.labelController.importProps(e),()=>({}),()=>!0)}exportState(){return Bn(()=>super.exportState(),Object.assign(Object.assign({},this.buttonController.exportProps()),this.labelController.exportProps()))}}class up{constructor(t){const[e,i]=t.split("-"),r=e.split(".");this.major=parseInt(r[0],10),this.minor=parseInt(r[1],10),this.patch=parseInt(r[2],10),this.prerelease=i??null}toString(){const t=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[t,this.prerelease].join("-"):t}}const ys=new up("2.0.5");function Mn(n){return Object.assign({core:ys},n)}const xy=Mn({id:"button",type:"blade",accept(n){const t=Ke(n,e=>({title:e.required.string,view:e.required.constant("button"),label:e.optional.string}));return t?{params:t}:null},controller(n){return new Yh(n.document,{blade:n.blade,buttonProps:_e.fromObject({title:n.params.title}),labelProps:_e.fromObject({label:n.params.label}),viewProps:n.viewProps})},api(n){return n.controller instanceof Yh?new my(n.controller):null}});function by(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"button"}))}function yy(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"folder"}))}function wy(n,t){return n.addBlade(Object.assign(Object.assign({},t),{view:"tab"}))}function Sy(n){return Xc(n)?"refresh"in n&&typeof n.refresh=="function":!1}function My(n,t){if(!_a.isBindable(n))throw Je.notBindable();return new _a(n,t)}class Ey{constructor(t,e){this.onRackValueChange_=this.onRackValueChange_.bind(this),this.controller_=t,this.emitter_=new rn,this.pool_=e,this.controller_.rack.emitter.on("valuechange",this.onRackValueChange_)}get children(){return this.controller_.rack.children.map(t=>this.pool_.createApi(t))}addBinding(t,e,i){const r=i??{},s=this.controller_.element.ownerDocument,l=this.pool_.createBinding(s,My(t,e),r),c=this.pool_.createBindingApi(l);return this.add(c,r.index)}addFolder(t){return yy(this,t)}addButton(t){return by(this,t)}addTab(t){return wy(this,t)}add(t,e){const i=t.controller;return this.controller_.rack.add(i,e),t}remove(t){this.controller_.rack.remove(t.controller)}addBlade(t){const e=this.controller_.element.ownerDocument,i=this.pool_.createBlade(e,t),r=this.pool_.createApi(i);return this.add(r,t.index)}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.children.forEach(t=>{Sy(t)&&t.refresh()})}onRackValueChange_(t){const e=t.bladeController,i=this.pool_.createApi(e),r=np(e.value)?e.value.binding:null;this.emitter_.emit("change",new ao(i,r?r.target.read():e.value.rawValue,t.options.last))}}class tu extends Or{constructor(t,e){super(t),this.rackApi_=new Ey(t.rackController,e)}refresh(){this.rackApi_.refresh()}}class eu extends La{constructor(t){super({blade:t.blade,view:t.view,viewProps:t.rackController.viewProps}),this.rackController=t.rackController}importState(t){return kn(t,e=>super.importState(e),e=>({children:e.required.array(e.required.raw)}),e=>this.rackController.rack.children.every((i,r)=>i.importState(e.children[r])))}exportState(){return Bn(()=>super.exportState(),{children:this.rackController.rack.children.map(t=>t.exportState())})}}function Cc(n){return"rackController"in n}class Ty{constructor(t){this.emitter=new rn,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=t}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(t){for(const e of this.allItems())if(t(e))return e;return null}includes(t){return this.cache_.has(t)}add(t,e){if(this.includes(t))throw Je.shouldNeverHappen();const i=e!==void 0?e:this.items_.length;this.items_.splice(i,0,t),this.cache_.add(t);const r=this.extract_(t);r&&(r.emitter.on("add",this.onSubListAdd_),r.emitter.on("remove",this.onSubListRemove_),r.allItems().forEach(s=>{this.cache_.add(s)})),this.emitter.emit("add",{index:i,item:t,root:this,target:this})}remove(t){const e=this.items_.indexOf(t);if(e<0)return;this.items_.splice(e,1),this.cache_.delete(t);const i=this.extract_(t);i&&(i.allItems().forEach(r=>{this.cache_.delete(r)}),i.emitter.off("add",this.onSubListAdd_),i.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:e,item:t,root:this,target:this})}onSubListAdd_(t){this.cache_.add(t.item),this.emitter.emit("add",{index:t.index,item:t.item,root:this,target:t.target})}onSubListRemove_(t){this.cache_.delete(t.item),this.emitter.emit("remove",{index:t.index,item:t.item,root:this,target:t.target})}}function Cy(n,t){for(let e=0;e<n.length;e++){const i=n[e];if(Ar(i)&&i.value===t)return i}return null}function Ay(n){return Cc(n)?n.rackController.rack.bcSet_:null}class Py{constructor(t){var e,i;this.emitter=new rn,this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onRackLayout_=this.onRackLayout_.bind(this),this.onRackValueChange_=this.onRackValueChange_.bind(this),this.blade_=(e=t.blade)!==null&&e!==void 0?e:null,(i=this.blade_)===null||i===void 0||i.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=t.viewProps,this.bcSet_=new Ty(Ay),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(t,e){var i;(i=t.parent)===null||i===void 0||i.remove(t),t.parent=this,this.bcSet_.add(t,e)}remove(t){t.parent=null,this.bcSet_.remove(t)}find(t){return this.bcSet_.allItems().filter(t)}onSetAdd_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("add",{bladeController:t.item,index:t.index,root:e,sender:this}),!e)return;const i=t.item;if(i.viewProps.emitter.on("change",this.onChildViewPropsChange_),i.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),i.viewProps.handleDispose(this.onChildDispose_),Ar(i))i.value.emitter.on("change",this.onChildValueChange_);else if(Cc(i)){const r=i.rackController.rack;if(r){const s=r.emitter;s.on("layout",this.onRackLayout_),s.on("valuechange",this.onRackValueChange_)}}}onSetRemove_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("remove",{bladeController:t.item,root:e,sender:this}),!e)return;const i=t.item;if(Ar(i))i.value.emitter.off("change",this.onChildValueChange_);else if(Cc(i)){const r=i.rackController.rack;if(r){const s=r.emitter;s.off("layout",this.onRackLayout_),s.off("valuechange",this.onRackValueChange_)}}}updatePositions_(){const t=this.bcSet_.items.filter(r=>!r.viewProps.get("hidden")),e=t[0],i=t[t.length-1];this.bcSet_.items.forEach(r=>{const s=[];r===e&&(s.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&s.push("veryfirst")),r===i&&(s.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&s.push("verylast")),r.blade.set("positions",s)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(e=>e.viewProps.get("disposed")).forEach(e=>{this.bcSet_.remove(e)})}onChildValueChange_(t){const e=Cy(this.find(Ar),t.sender);if(!e)throw Je.alreadyDisposed();this.emitter.emit("valuechange",{bladeController:e,options:t.options,sender:this})}onRackLayout_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onRackValueChange_(t){this.emitter.emit("valuechange",{bladeController:t.bladeController,options:t.options,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class nu{constructor(t){this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.element=t.element,this.viewProps=t.viewProps;const e=new Py({blade:t.root?void 0:t.blade,viewProps:t.viewProps});e.emitter.on("add",this.onRackAdd_),e.emitter.on("remove",this.onRackRemove_),this.rack=e,this.viewProps.handleDispose(()=>{for(let i=this.rack.children.length-1;i>=0;i--)this.rack.children[i].viewProps.set("disposed",!0)})}onRackAdd_(t){t.root&&ip(this.element,t.bladeController.view.element,t.index)}onRackRemove_(t){t.root&&Jc(t.bladeController.view.element)}}function ws(){return new _e({positions:Ye([],{equals:ob})})}class lo extends _e{constructor(t){super(t)}static create(t){const e={completed:!0,expanded:t,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},i=_e.createCore(e);return new lo(i)}get styleExpanded(){var t;return(t=this.get("temporaryExpanded"))!==null&&t!==void 0?t:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const t=this.get("expandedHeight");return this.get("shouldFixHeight")&&!je(t)?`${t}px`:"auto"}bindExpandedClass(t,e){const i=()=>{this.styleExpanded?t.classList.add(e):t.classList.remove(e)};di(this,"expanded",i),di(this,"temporaryExpanded",i)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Ry(n,t){let e=0;return Kb(t,()=>{n.set("expandedHeight",null),n.set("temporaryExpanded",!0),xa(t),e=t.clientHeight,n.set("temporaryExpanded",null),xa(t)}),e}function $h(n,t){t.style.height=n.styleHeight}function iu(n,t){n.value("expanded").emitter.on("beforechange",()=>{if(n.set("completed",!1),je(n.get("expandedHeight"))){const e=Ry(n,t);e>0&&n.set("expandedHeight",e)}n.set("shouldFixHeight",!0),xa(t)}),n.emitter.on("change",()=>{$h(n,t)}),$h(n,t),t.addEventListener("transitionend",e=>{e.propertyName==="height"&&n.cleanUpTransition()})}class hp extends tu{constructor(t,e){super(t,e),this.emitter_=new rn,this.controller.foldable.value("expanded").emitter.on("change",i=>{this.emitter_.emit("fold",new Hb(this,i.sender.rawValue))}),this.rackApi_.on("change",i=>{this.emitter_.emit("change",i)})}get expanded(){return this.controller.foldable.get("expanded")}set expanded(t){this.controller.foldable.set("expanded",t)}get title(){return this.controller.props.get("title")}set title(t){this.controller.props.set("title",t)}get children(){return this.rackApi_.children}addBinding(t,e,i){return this.rackApi_.addBinding(t,e,i)}addFolder(t){return this.rackApi_.addFolder(t)}addButton(t){return this.rackApi_.addButton(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){return this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBlade(t){return this.rackApi_.addBlade(t)}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}const dp=De("cnt");class Dy{constructor(t,e){var i;this.className_=De((i=e.viewName)!==null&&i!==void 0?i:"fld"),this.element=t.createElement("div"),this.element.classList.add(this.className_(),dp()),e.viewProps.bindClassModifiers(this.element),this.foldable_=e.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),di(this.foldable_,"completed",bs(this.element,this.className_(void 0,"cpl")));const r=t.createElement("button");r.classList.add(this.className_("b")),di(e.props,"title",f=>{je(f)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),e.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const s=t.createElement("div");s.classList.add(this.className_("i")),this.element.appendChild(s);const l=t.createElement("div");l.classList.add(this.className_("t")),Qc(e.props.value("title"),l),this.buttonElement.appendChild(l),this.titleElement=l;const c=t.createElement("div");c.classList.add(this.className_("m")),this.buttonElement.appendChild(c);const d=t.createElement("div");d.classList.add(this.className_("c")),this.element.appendChild(d),this.containerElement=d}}class Ac extends eu{constructor(t,e){var i;const r=lo.create((i=e.expanded)!==null&&i!==void 0?i:!0),s=new Dy(t,{foldable:r,props:e.props,viewName:e.root?"rot":void 0,viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new nu({blade:e.blade,element:s.containerElement,root:e.root,viewProps:e.viewProps}),view:s})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=e.props,this.foldable=r,iu(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}importState(t){return kn(t,e=>super.importState(e),e=>({expanded:e.required.boolean,title:e.optional.string}),e=>(this.foldable.set("expanded",e.expanded),this.props.set("title",e.title),!0))}exportState(){return Bn(()=>super.exportState(),{expanded:this.foldable.get("expanded"),title:this.props.get("title")})}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Ly=Mn({id:"folder",type:"blade",accept(n){const t=Ke(n,e=>({title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean}));return t?{params:t}:null},controller(n){return new Ac(n.document,{blade:n.blade,expanded:n.params.expanded,props:_e.fromObject({title:n.params.title}),viewProps:n.viewProps})},api(n){return n.controller instanceof Ac?new hp(n.controller,n.pool):null}}),Iy=De("");function Kh(n,t){return bs(n,Iy(void 0,t))}class Fi extends _e{constructor(t){var e;super(t),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=hb(Ye(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(t){var e,i,r;const s=t??{};return new Fi(_e.createCore({disabled:(e=s.disabled)!==null&&e!==void 0?e:!1,disposed:!1,hidden:(i=s.hidden)!==null&&i!==void 0?i:!1,parent:(r=s.parent)!==null&&r!==void 0?r:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(t){Ii(this.globalDisabled_,Kh(t,"disabled")),di(this,"hidden",Kh(t,"hidden"))}bindDisabled(t){Ii(this.globalDisabled_,e=>{t.disabled=e})}bindTabIndex(t){Ii(this.globalDisabled_,e=>{t.tabIndex=e?-1:0})}handleDispose(t){this.value("disposed").emitter.on("change",e=>{e&&t()})}importState(t){this.set("disabled",t.disabled),this.set("hidden",t.hidden)}exportState(){return{disabled:this.get("disabled"),hidden:this.get("hidden")}}getGlobalDisabled_(){const t=this.get("parent");return(t?t.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(t){var e;const i=t.previousRawValue;i==null||i.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}const Zh=De("tbp");class Uy{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Zh()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Zh("c")),this.element.appendChild(i),this.containerElement=i}}const Gs=De("tbi");class Ny{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Gs()),e.viewProps.bindClassModifiers(this.element),di(e.props,"selected",s=>{s?this.element.classList.add(Gs(void 0,"sel")):this.element.classList.remove(Gs(void 0,"sel"))});const i=t.createElement("button");i.classList.add(Gs("b")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;const r=t.createElement("div");r.classList.add(Gs("t")),Qc(e.props.value("title"),r),this.buttonElement.appendChild(r),this.titleElement=r}}class Oy{constructor(t,e){this.emitter=new rn,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new Ny(t,{props:e.props,viewProps:e.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Pc extends eu{constructor(t,e){const i=new Uy(t,{viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new nu({blade:e.blade,element:i.containerElement,viewProps:e.viewProps}),view:i})),this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Oy(t,{props:e.itemProps,viewProps:Fi.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.props=e.props,di(this.props,"selected",r=>{this.itemController.props.set("selected",r),this.viewProps.set("hidden",!r)})}get itemController(){return this.ic_}importState(t){return kn(t,e=>super.importState(e),e=>({selected:e.required.boolean,title:e.required.string}),e=>(this.ic_.props.set("selected",e.selected),this.ic_.props.set("title",e.title),!0))}exportState(){return Bn(()=>super.exportState(),{selected:this.ic_.props.get("selected"),title:this.ic_.props.get("title")})}onItemClick_(){this.props.set("selected",!0)}}class Fy extends tu{constructor(t,e){super(t,e),this.emitter_=new rn,this.onSelect_=this.onSelect_.bind(this),this.pool_=e,this.rackApi_.on("change",i=>{this.emitter_.emit("change",i)}),this.controller.tab.selectedIndex.emitter.on("change",this.onSelect_)}get pages(){return this.rackApi_.children}addPage(t){const e=this.controller.view.element.ownerDocument,i=new Pc(e,{blade:ws(),itemProps:_e.fromObject({selected:!1,title:t.title}),props:_e.fromObject({selected:!1}),viewProps:Fi.create()}),r=this.pool_.createApi(i);return this.rackApi_.add(r,t.index)}removePage(t){this.rackApi_.remove(this.rackApi_.children[t])}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}onSelect_(t){this.emitter_.emit("select",new Gb(this,t.rawValue))}}class ky extends tu{get title(){var t;return(t=this.controller.itemController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.itemController.props.set("title",t)}get selected(){return this.controller.props.get("selected")}set selected(t){this.controller.props.set("selected",t)}get children(){return this.rackApi_.children}addButton(t){return this.rackApi_.addButton(t)}addFolder(t){return this.rackApi_.addFolder(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBinding(t,e,i){return this.rackApi_.addBinding(t,e,i)}addBlade(t){return this.rackApi_.addBlade(t)}}const Jh=-1;class By{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=Ye(!0),this.selectedIndex=Ye(Jh),this.items_=[]}add(t,e){const i=e??this.items_.length;this.items_.splice(i,0,t),t.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(t){const e=this.items_.indexOf(t);e<0||(this.items_.splice(e,1),t.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Jh,this.empty.rawValue=!0;return}const t=this.items_.findIndex(e=>e.rawValue);t<0?(this.items_.forEach((e,i)=>{e.rawValue=i===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((e,i)=>{e.rawValue=i===t}),this.selectedIndex.rawValue=t),this.empty.rawValue=!1}onItemSelectedChange_(t){if(t.rawValue){const e=this.items_.findIndex(i=>i===t.sender);this.items_.forEach((i,r)=>{i.rawValue=r===e}),this.selectedIndex.rawValue=e}else this.keepSelection_()}}const Ws=De("tab");class Vy{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Ws(),dp()),e.viewProps.bindClassModifiers(this.element),Ii(e.empty,bs(this.element,Ws(void 0,"nop")));const i=t.createElement("div");i.classList.add(Ws("t")),this.element.appendChild(i),this.itemsElement=i;const r=t.createElement("div");r.classList.add(Ws("i")),this.element.appendChild(r);const s=t.createElement("div");s.classList.add(Ws("c")),this.element.appendChild(s),this.contentsElement=s}}class Qh extends eu{constructor(t,e){const i=new By,r=new Vy(t,{empty:i.empty,viewProps:e.viewProps});super({blade:e.blade,rackController:new nu({blade:e.blade,element:r.contentsElement,viewProps:e.viewProps}),view:r}),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=this.rackController.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.tab=i}add(t,e){this.rackController.rack.add(t,e)}remove(t){this.rackController.rack.remove(this.rackController.rack.children[t])}onRackAdd_(t){if(!t.root)return;const e=t.bladeController;ip(this.view.itemsElement,e.itemController.view.element,t.index),e.itemController.viewProps.set("parent",this.viewProps),this.tab.add(e.props.value("selected"))}onRackRemove_(t){if(!t.root)return;const e=t.bladeController;Jc(e.itemController.view.element),e.itemController.viewProps.set("parent",null),this.tab.remove(e.props.value("selected"))}}const pp=Mn({id:"tab",type:"blade",accept(n){const t=Ke(n,e=>({pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")}));return!t||t.pages.length===0?null:{params:t}},controller(n){const t=new Qh(n.document,{blade:n.blade,viewProps:n.viewProps});return n.params.pages.forEach(e=>{const i=new Pc(n.document,{blade:ws(),itemProps:_e.fromObject({selected:!1,title:e.title}),props:_e.fromObject({selected:!1}),viewProps:Fi.create()});t.add(i)}),t},api(n){return n.controller instanceof Qh?new Fy(n.controller,n.pool):n.controller instanceof Pc?new ky(n.controller,n.pool):null}});function zy(n,t){const e=n.accept(t.params);if(!e)return null;const i=Ke(t.params,r=>({disabled:r.optional.boolean,hidden:r.optional.boolean}));return n.controller({blade:ws(),document:t.document,params:Object.assign(Object.assign({},e.params),{disabled:i==null?void 0:i.disabled,hidden:i==null?void 0:i.hidden}),viewProps:Fi.create({disabled:i==null?void 0:i.disabled,hidden:i==null?void 0:i.hidden})})}class ru extends Qs{get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}}class Hy{constructor(){this.disabled=!1,this.emitter=new rn}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class Gy{constructor(t,e){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=t,this.emitter=new rn,this.interval_=e,this.setTimer_()}get disabled(){return this.disabled_}set disabled(t){this.disabled_=t,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const t=this.doc_.defaultView;t&&t.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const t=this.doc_.defaultView;t&&(this.timerId_=t.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class co{constructor(t){this.constraints=t}constrain(t){return this.constraints.reduce((e,i)=>i.constrain(e),t)}}function ba(n,t){if(n instanceof t)return n;if(n instanceof co){const e=n.constraints.reduce((i,r)=>i||(r instanceof t?r:null),null);if(e)return e}return null}class uo{constructor(t){this.values=_e.fromObject({options:t})}constrain(t){const e=this.values.get("options");return e.length===0||e.filter(r=>r.value===t).length>0?t:e[0].value}}function ho(n){var t;const e=Tc;if(Array.isArray(n))return(t=Ke({items:n},i=>({items:i.required.array(i.required.object({text:i.required.string,value:i.required.raw}))})))===null||t===void 0?void 0:t.items;if(typeof n=="object")return e.required.raw(n).value}function su(n){if(Array.isArray(n))return n;const t=[];return Object.keys(n).forEach(e=>{t.push({text:e,value:n[e]})}),t}function ou(n){return je(n)?null:new uo(su(n))}const Rl=De("lst");class Wy{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.element=t.createElement("div"),this.element.classList.add(Rl()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("select");i.classList.add(Rl("s")),e.viewProps.bindDisabled(i),this.element.appendChild(i),this.selectElement=i;const r=t.createElement("div");r.classList.add(Rl("m")),r.appendChild(Da(t,"dropdown")),this.element.appendChild(r),e.value.emitter.on("change",this.onValueChange_),this.value_=e.value,di(this.props_,"options",s=>{rp(this.selectElement),s.forEach(l=>{const c=t.createElement("option");c.textContent=l.text,this.selectElement.appendChild(c)}),this.update_()})}update_(){const t=this.props_.get("options").map(e=>e.value);this.selectElement.selectedIndex=t.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class lr{constructor(t,e){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new Wy(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(t){const e=t.currentTarget;this.value.rawValue=this.props.get("options")[e.selectedIndex].value}importProps(t){return kn(t,null,e=>({options:e.required.custom(ho)}),e=>(this.props.set("options",su(e.options)),!0))}exportProps(){return Bn(null,{options:this.props.get("options")})}}const td=De("pop");class jy{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(td()),e.viewProps.bindClassModifiers(this.element),Ii(e.shows,bs(this.element,td(void 0,"v")))}}class fp{constructor(t,e){this.shows=Ye(!1),this.viewProps=e.viewProps,this.view=new jy(t,{shows:this.shows,viewProps:this.viewProps})}}const ed=De("txt");class Xy{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(ed()),e.viewProps.bindClassModifiers(this.element),this.props_=e.props,this.props_.emitter.on("change",this.onChange_);const i=t.createElement("input");i.classList.add(ed("i")),i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,e.value.emitter.on("change",this.onChange_),this.value_=e.value,this.refresh()}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value_.rawValue)}onChange_(){this.refresh()}}class to{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=e.parser,this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new Xy(t,{props:e.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(t){const i=t.currentTarget.value,r=this.parser_(i);je(r)||(this.value.rawValue=r),this.view.refresh()}}function qy(n){return String(n)}function mp(n){return n==="false"?!1:!!n}function nd(n){return qy(n)}function Yy(n){return t=>n.reduce((e,i)=>e!==null?e:i(t),null)}const $y=Un(0);function ya(n){return $y(n)+"%"}function gp(n){return String(n)}function Rc(n){return n}function Ss({primary:n,secondary:t,forward:e,backward:i}){let r=!1;function s(l){r||(r=!0,l(),r=!1)}n.emitter.on("change",l=>{s(()=>{t.setRawValue(e(n.rawValue,t.rawValue),l.options)})}),t.emitter.on("change",l=>{s(()=>{n.setRawValue(i(n.rawValue,t.rawValue),l.options)}),s(()=>{t.setRawValue(e(n.rawValue,t.rawValue),l.options)})}),s(()=>{t.setRawValue(e(n.rawValue,t.rawValue),{forceEmit:!1,last:!0})})}function Dn(n,t){const e=n*(t.altKey?.1:1)*(t.shiftKey?10:1);return t.upKey?+e:t.downKey?-e:0}function eo(n){return{altKey:n.altKey,downKey:n.key==="ArrowDown",shiftKey:n.shiftKey,upKey:n.key==="ArrowUp"}}function Ni(n){return{altKey:n.altKey,downKey:n.key==="ArrowLeft",shiftKey:n.shiftKey,upKey:n.key==="ArrowRight"}}function Ky(n){return n==="ArrowUp"||n==="ArrowDown"}function vp(n){return Ky(n)||n==="ArrowLeft"||n==="ArrowRight"}function Dl(n,t){var e,i;const r=t.ownerDocument.defaultView,s=t.getBoundingClientRect();return{x:n.pageX-(((e=r&&r.scrollX)!==null&&e!==void 0?e:0)+s.left),y:n.pageY-(((i=r&&r.scrollY)!==null&&i!==void 0?i:0)+s.top)}}class Fr{constructor(t){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=t,this.emitter=new rn,t.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),t.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd_),t.addEventListener("mousedown",this.onMouseDown_)}computePosition_(t){const e=this.elem_.getBoundingClientRect();return{bounds:{width:e.width,height:e.height},point:t?{x:t.x,y:t.y}:null}}onMouseDown_(t){var e;t.preventDefault(),(e=t.currentTarget)===null||e===void 0||e.focus();const i=this.elem_.ownerDocument;i.addEventListener("mousemove",this.onDocumentMouseMove_),i.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(Dl(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseMove_(t){this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(Dl(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseUp_(t){const e=this.elem_.ownerDocument;e.removeEventListener("mousemove",this.onDocumentMouseMove_),e.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(Dl(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onTouchStart_(t){t.preventDefault();const e=t.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-i.left,y:e.clientY-i.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchMove_(t){const e=t.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-i.left,y:e.clientY-i.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchEnd_(t){var e;const i=(e=t.targetTouches.item(0))!==null&&e!==void 0?e:this.lastTouch_,r=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(i?{x:i.clientX-r.left,y:i.clientY-r.top}:void 0),sender:this,shiftKey:t.shiftKey})}}const Wn=De("txt");class Zy{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(Wn(),Wn(void 0,"num")),e.arrayPosition&&this.element.classList.add(Wn(void 0,e.arrayPosition)),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("input");i.classList.add(Wn("i")),i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=e.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Wn()),this.inputElement.classList.add(Wn("i"));const r=t.createElement("div");r.classList.add(Wn("k")),this.element.appendChild(r),this.knobElement=r;const s=t.createElementNS(ci,"svg");s.classList.add(Wn("g")),this.knobElement.appendChild(s);const l=t.createElementNS(ci,"path");l.classList.add(Wn("gb")),s.appendChild(l),this.guideBodyElem_=l;const c=t.createElementNS(ci,"path");c.classList.add(Wn("gh")),s.appendChild(c),this.guideHeadElem_=c;const d=t.createElement("div");d.classList.add(De("tt")()),this.knobElement.appendChild(d),this.tooltipElem_=d,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.refresh()}onDraggingChange_(t){if(t.rawValue===null){this.element.classList.remove(Wn(void 0,"drg"));return}this.element.classList.add(Wn(void 0,"drg"));const e=t.rawValue/this.props_.get("pointerScale"),i=e+(e>0?-1:e<0?1:0),r=ln(-i,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${i+r},0 L${i},4 L${i+r},8`,`M ${e},-1 L${e},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${e},4`);const s=this.props_.get("formatter");this.tooltipElem_.textContent=s(this.value.rawValue),this.tooltipElem_.style.left=`${e}px`}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value.rawValue)}onChange_(){this.refresh()}}class po{constructor(t,e){var i;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.parser_=e.parser,this.props=e.props,this.sliderProps_=(i=e.sliderProps)!==null&&i!==void 0?i:null,this.value=e.value,this.viewProps=e.viewProps,this.dragging_=Ye(null),this.view=new Zy(t,{arrayPosition:e.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const r=new Fr(this.view.knobElement);r.emitter.on("down",this.onPointerDown_),r.emitter.on("move",this.onPointerMove_),r.emitter.on("up",this.onPointerUp_)}constrainValue_(t){var e,i;const r=(e=this.sliderProps_)===null||e===void 0?void 0:e.get("min"),s=(i=this.sliderProps_)===null||i===void 0?void 0:i.get("max");let l=t;return r!==void 0&&(l=Math.max(l,r)),s!==void 0&&(l=Math.min(l,s)),l}onInputChange_(t){const i=t.currentTarget.value,r=this.parser_(i);je(r)||(this.value.rawValue=this.constrainValue_(r)),this.view.refresh()}onInputKeyDown_(t){const e=Dn(this.props.get("keyScale"),eo(t));e!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+e),{forceEmit:!1,last:!1})}onInputKeyUp_(t){Dn(this.props.get("keyScale"),eo(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(t){if(!t.point)return null;const e=t.point.x-t.bounds.width/2;return this.constrainValue_(this.originRawValue_+e*this.props.get("pointerScale"))}onPointerMove_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Ll=De("sld");class Jy{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(Ll()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Ll("t")),e.viewProps.bindTabIndex(i),this.element.appendChild(i),this.trackElement=i;const r=t.createElement("div");r.classList.add(Ll("k")),this.trackElement.appendChild(r),this.knobElement=r,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.update_()}update_(){const t=ln(Oe(this.value.rawValue,this.props_.get("min"),this.props_.get("max"),0,100),0,100);this.knobElement.style.width=`${t}%`}onChange_(){this.update_()}}class Qy{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.props=e.props,this.view=new Jy(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Fr(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){t.point&&this.value.setRawValue(Oe(ln(t.point.x,0,t.bounds.width),0,t.bounds.width,this.props.get("min"),this.props.get("max")),e)}onPointerDownOrMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=Dn(this.props.get("keyScale"),Ni(t));e!==0&&this.value.setRawValue(this.value.rawValue+e,{forceEmit:!1,last:!1})}onKeyUp_(t){Dn(this.props.get("keyScale"),Ni(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Il=De("sldtxt");class tw{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Il());const i=t.createElement("div");i.classList.add(Il("s")),this.sliderView_=e.sliderView,i.appendChild(this.sliderView_.element),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(Il("t")),this.textView_=e.textView,r.appendChild(this.textView_.element),this.element.appendChild(r)}}class wa{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.sliderC_=new Qy(t,{props:e.sliderProps,value:e.value,viewProps:this.viewProps}),this.textC_=new po(t,{parser:e.parser,props:e.textProps,sliderProps:e.sliderProps,value:e.value,viewProps:e.viewProps}),this.view=new tw(t,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}importProps(t){return kn(t,null,e=>({max:e.required.number,min:e.required.number}),e=>{const i=this.sliderC_.props;return i.set("max",e.max),i.set("min",e.min),!0})}exportProps(){const t=this.sliderC_.props;return Bn(null,{max:t.get("max"),min:t.get("min")})}}function _p(n){return{sliderProps:new _e({keyScale:n.keyScale,max:n.max,min:n.min}),textProps:new _e({formatter:Ye(n.formatter),keyScale:n.keyScale,pointerScale:Ye(n.pointerScale)})}}const ew={containerUnitSize:"cnt-usz"};function xp(n){return`--${ew[n]}`}function no(n){return ep(n)}function er(n){if(Ec(n))return Ke(n,no)}function Di(n,t){if(!n)return;const e=[],i=Jd(n,t);i&&e.push(i);const r=Qd(n);return r&&e.push(r),new co(e)}function nw(n){return n?n.major===ys.major:!1}function bp(n){if(n==="inline"||n==="popup")return n}function fo(n,t){n.write(t)}const Jo=De("ckb");class iw{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(Jo()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("label");i.classList.add(Jo("l")),this.element.appendChild(i),this.labelElement=i;const r=t.createElement("input");r.classList.add(Jo("i")),r.type="checkbox",this.labelElement.appendChild(r),this.inputElement=r,e.viewProps.bindDisabled(this.inputElement);const s=t.createElement("div");s.classList.add(Jo("w")),this.labelElement.appendChild(s);const l=Da(t,"check");s.appendChild(l),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class rw{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.onLabelMouseDown_=this.onLabelMouseDown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new iw(t,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.labelElement.addEventListener("mousedown",this.onLabelMouseDown_)}onInputChange_(t){const e=t.currentTarget;this.value.rawValue=e.checked,t.preventDefault(),t.stopPropagation()}onLabelMouseDown_(t){t.preventDefault()}}function sw(n){const t=[],e=ou(n.options);return e&&t.push(e),new co(t)}const ow=Mn({id:"input-bool",type:"input",accept:(n,t)=>{if(typeof n!="boolean")return null;const e=Ke(t,i=>({options:i.optional.custom(ho),readonly:i.optional.constant(!1)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>mp,constraint:n=>sw(n.params),writer:n=>fo},controller:n=>{const t=n.document,e=n.value,i=n.constraint,r=i&&ba(i,uo);return r?new lr(t,{props:new _e({options:r.values.value("options")}),value:e,viewProps:n.viewProps}):new rw(t,{value:e,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="boolean"?null:n.controller.valueController instanceof lr?new ru(n.controller):null}}),xr=De("col");class aw{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(xr()),e.foldable.bindExpandedClass(this.element,xr(void 0,"expanded")),di(e.foldable,"completed",bs(this.element,xr(void 0,"cpl")));const i=t.createElement("div");i.classList.add(xr("h")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(xr("s")),i.appendChild(r),this.swatchElement=r;const s=t.createElement("div");if(s.classList.add(xr("t")),i.appendChild(s),this.textElement=s,e.pickerLayout==="inline"){const l=t.createElement("div");l.classList.add(xr("p")),this.element.appendChild(l),this.pickerElement=l}else this.pickerElement=null}}function lw(n,t,e){const i=ln(n/255,0,1),r=ln(t/255,0,1),s=ln(e/255,0,1),l=Math.max(i,r,s),c=Math.min(i,r,s),d=l-c;let f=0,g=0;const v=(c+l)/2;return d!==0&&(g=d/(1-Math.abs(l+c-1)),i===l?f=(r-s)/d:r===l?f=2+(s-i)/d:f=4+(i-r)/d,f=f/6+(f<0?1:0)),[f*360,g*100,v*100]}function cw(n,t,e){const i=(n%360+360)%360,r=ln(t/100,0,1),s=ln(e/100,0,1),l=(1-Math.abs(2*s-1))*r,c=l*(1-Math.abs(i/60%2-1)),d=s-l/2;let f,g,v;return i>=0&&i<60?[f,g,v]=[l,c,0]:i>=60&&i<120?[f,g,v]=[c,l,0]:i>=120&&i<180?[f,g,v]=[0,l,c]:i>=180&&i<240?[f,g,v]=[0,c,l]:i>=240&&i<300?[f,g,v]=[c,0,l]:[f,g,v]=[l,0,c],[(f+d)*255,(g+d)*255,(v+d)*255]}function uw(n,t,e){const i=ln(n/255,0,1),r=ln(t/255,0,1),s=ln(e/255,0,1),l=Math.max(i,r,s),c=Math.min(i,r,s),d=l-c;let f;d===0?f=0:l===i?f=60*(((r-s)/d%6+6)%6):l===r?f=60*((s-i)/d+2):f=60*((i-r)/d+4);const g=l===0?0:d/l,v=l;return[f,g*100,v*100]}function yp(n,t,e){const i=$d(n,360),r=ln(t/100,0,1),s=ln(e/100,0,1),l=s*r,c=l*(1-Math.abs(i/60%2-1)),d=s-l;let f,g,v;return i>=0&&i<60?[f,g,v]=[l,c,0]:i>=60&&i<120?[f,g,v]=[c,l,0]:i>=120&&i<180?[f,g,v]=[0,l,c]:i>=180&&i<240?[f,g,v]=[0,c,l]:i>=240&&i<300?[f,g,v]=[c,0,l]:[f,g,v]=[l,0,c],[(f+d)*255,(g+d)*255,(v+d)*255]}function hw(n,t,e){const i=e+t*(100-Math.abs(2*e-100))/200;return[n,i!==0?t*(100-Math.abs(2*e-100))/i:0,e+t*(100-Math.abs(2*e-100))/(2*100)]}function dw(n,t,e){const i=100-Math.abs(e*(200-t)/100-100);return[n,i!==0?t*e/i:0,e*(200-t)/(2*100)]}function pi(n){return[n[0],n[1],n[2]]}function Ia(n,t){return[n[0],n[1],n[2],t]}const pw={hsl:{hsl:(n,t,e)=>[n,t,e],hsv:hw,rgb:cw},hsv:{hsl:dw,hsv:(n,t,e)=>[n,t,e],rgb:yp},rgb:{hsl:lw,hsv:uw,rgb:(n,t,e)=>[n,t,e]}};function vs(n,t){return[t==="float"?1:n==="rgb"?255:360,t==="float"?1:n==="rgb"?255:100,t==="float"?1:n==="rgb"?255:100]}function fw(n,t){return n===t?t:$d(n,t)}function wp(n,t,e){var i;const r=vs(t,e);return[t==="rgb"?ln(n[0],0,r[0]):fw(n[0],r[0]),ln(n[1],0,r[1]),ln(n[2],0,r[2]),ln((i=n[3])!==null&&i!==void 0?i:1,0,1)]}function id(n,t,e,i){const r=vs(t,e),s=vs(t,i);return n.map((l,c)=>l/r[c]*s[c])}function Sp(n,t,e){const i=id(n,t.mode,t.type,"int"),r=pw[t.mode][e.mode](...i);return id(r,e.mode,"int",e.type)}class Ue{static black(){return new Ue([0,0,0],"rgb")}constructor(t,e){this.type="int",this.mode=e,this.comps_=wp(t,e,this.type)}getComponents(t){return Ia(Sp(pi(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Ki=De("colp");class mw{constructor(t,e){this.alphaViews_=null,this.element=t.createElement("div"),this.element.classList.add(Ki()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Ki("hsv"));const r=t.createElement("div");r.classList.add(Ki("sv")),this.svPaletteView_=e.svPaletteView,r.appendChild(this.svPaletteView_.element),i.appendChild(r);const s=t.createElement("div");s.classList.add(Ki("h")),this.hPaletteView_=e.hPaletteView,s.appendChild(this.hPaletteView_.element),i.appendChild(s),this.element.appendChild(i);const l=t.createElement("div");if(l.classList.add(Ki("rgb")),this.textsView_=e.textsView,l.appendChild(this.textsView_.element),this.element.appendChild(l),e.alphaViews){this.alphaViews_={palette:e.alphaViews.palette,text:e.alphaViews.text};const c=t.createElement("div");c.classList.add(Ki("a"));const d=t.createElement("div");d.classList.add(Ki("ap")),d.appendChild(this.alphaViews_.palette.element),c.appendChild(d);const f=t.createElement("div");f.classList.add(Ki("at")),f.appendChild(this.alphaViews_.text.element),c.appendChild(f),this.element.appendChild(c)}}get allFocusableElements(){const t=[this.svPaletteView_.element,this.hPaletteView_.element,this.textsView_.modeSelectElement,...this.textsView_.inputViews.map(e=>e.inputElement)];return this.alphaViews_&&t.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),t}}function gw(n){return n==="int"?"int":n==="float"?"float":void 0}function au(n){return Ke(n,t=>({color:t.optional.object({alpha:t.optional.boolean,type:t.optional.custom(gw)}),expanded:t.optional.boolean,picker:t.optional.custom(bp),readonly:t.optional.constant(!1)}))}function Ur(n){return n?.1:1}function Mp(n){var t;return(t=n.color)===null||t===void 0?void 0:t.type}class lu{constructor(t,e){this.type="float",this.mode=e,this.comps_=wp(t,e,this.type)}getComponents(t){return Ia(Sp(pi(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const vw={int:(n,t)=>new Ue(n,t),float:(n,t)=>new lu(n,t)};function cu(n,t,e){return vw[e](n,t)}function _w(n){return n.type==="float"}function xw(n){return n.type==="int"}function bw(n){const t=n.getComponents(),e=vs(n.mode,"int");return new Ue([Math.round(Oe(t[0],0,1,0,e[0])),Math.round(Oe(t[1],0,1,0,e[1])),Math.round(Oe(t[2],0,1,0,e[2])),t[3]],n.mode)}function yw(n){const t=n.getComponents(),e=vs(n.mode,"int");return new lu([Oe(t[0],0,e[0],0,1),Oe(t[1],0,e[1],0,1),Oe(t[2],0,e[2],0,1),t[3]],n.mode)}function Sn(n,t){if(n.type===t)return n;if(xw(n)&&t==="float")return yw(n);if(_w(n)&&t==="int")return bw(n);throw Je.shouldNeverHappen()}function ww(n,t){return n.alpha===t.alpha&&n.mode===t.mode&&n.notation===t.notation&&n.type===t.type}function Xn(n,t){const e=n.match(/^(.+)%$/);return Math.min(e?parseFloat(e[1])*.01*t:parseFloat(n),t)}const Sw={deg:n=>n,grad:n=>n*360/400,rad:n=>n*360/(2*Math.PI),turn:n=>n*360};function Ep(n){const t=n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!t)return parseFloat(n);const e=parseFloat(t[1]),i=t[2];return Sw[i](e)}function Tp(n){const t=n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Xn(t[1],255),Xn(t[2],255),Xn(t[3],255)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function Mw(n){const t=Tp(n);return t?new Ue(t,"rgb"):null}function Cp(n){const t=n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Xn(t[1],255),Xn(t[2],255),Xn(t[3],255),Xn(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function Ew(n){const t=Cp(n);return t?new Ue(t,"rgb"):null}function Ap(n){const t=n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Ep(t[1]),Xn(t[2],100),Xn(t[3],100)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function Tw(n){const t=Ap(n);return t?new Ue(t,"hsl"):null}function Pp(n){const t=n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[Ep(t[1]),Xn(t[2],100),Xn(t[3],100),Xn(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function Cw(n){const t=Pp(n);return t?new Ue(t,"hsl"):null}function Rp(n){const t=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)];const e=n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:null}function Aw(n){const t=Rp(n);return t?new Ue(t,"rgb"):null}function Dp(n){const t=n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16),Oe(parseInt(t[4]+t[4],16),0,255,0,1)];const e=n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),Oe(parseInt(e[4],16),0,255,0,1)]:null}function Pw(n){const t=Dp(n);return t?new Ue(t,"rgb"):null}function Lp(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function Rw(n){return t=>{const e=Lp(t);return e?cu(e,"rgb",n):null}}function Ip(n){const t=n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3]),parseFloat(t[4])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function Dw(n){return t=>{const e=Ip(t);return e?cu(e,"rgb",n):null}}const Lw=[{parser:Rp,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:Dp,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Tp,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Cp,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Ap,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Pp,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Lp,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Ip,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Iw(n){return Lw.reduce((t,{parser:e,result:i})=>t||(e(n)?i:null),null)}function Uw(n,t="int"){const e=Iw(n);return e?e.notation==="hex"&&t!=="float"?Object.assign(Object.assign({},e),{type:"int"}):e.notation==="func"?Object.assign(Object.assign({},e),{type:t}):null:null}function mo(n){const t=[Aw,Pw,Mw,Ew,Tw,Cw];t.push(Rw("int"),Dw("int"));const e=Yy(t);return i=>{const r=e(i);return r?Sn(r,n):null}}function Nw(n){const t=mo("int");if(typeof n!="string")return Ue.black();const e=t(n);return e??Ue.black()}function Up(n){const t=ln(Math.floor(n),0,255).toString(16);return t.length===1?`0${t}`:t}function uu(n,t="#"){const e=pi(n.getComponents("rgb")).map(Up).join("");return`${t}${e}`}function hu(n,t="#"){const e=n.getComponents("rgb"),i=[e[0],e[1],e[2],e[3]*255].map(Up).join("");return`${t}${i}`}function Np(n){const t=Un(0),e=Sn(n,"int");return`rgb(${pi(e.getComponents("rgb")).map(r=>t(r)).join(", ")})`}function ca(n){const t=Un(2),e=Un(0);return`rgba(${Sn(n,"int").getComponents("rgb").map((s,l)=>(l===3?t:e)(s)).join(", ")})`}function Ow(n){const t=[Un(0),ya,ya],e=Sn(n,"int");return`hsl(${pi(e.getComponents("hsl")).map((r,s)=>t[s](r)).join(", ")})`}function Fw(n){const t=[Un(0),ya,ya,Un(2)];return`hsla(${Sn(n,"int").getComponents("hsl").map((r,s)=>t[s](r)).join(", ")})`}function Op(n,t){const e=Un(t==="float"?2:0),i=["r","g","b"],r=Sn(n,t);return`{${pi(r.getComponents("rgb")).map((l,c)=>`${i[c]}: ${e(l)}`).join(", ")}}`}function kw(n){return t=>Op(t,n)}function Fp(n,t){const e=Un(2),i=Un(t==="float"?2:0),r=["r","g","b","a"];return`{${Sn(n,t).getComponents("rgb").map((c,d)=>{const f=d===3?e:i;return`${r[d]}: ${f(c)}`}).join(", ")}}`}function Bw(n){return t=>Fp(t,n)}const Vw=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:uu},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:hu},{format:{alpha:!1,mode:"rgb",notation:"func",type:"int"},stringifier:Np},{format:{alpha:!0,mode:"rgb",notation:"func",type:"int"},stringifier:ca},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Ow},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Fw},...["int","float"].reduce((n,t)=>[...n,{format:{alpha:!1,mode:"rgb",notation:"object",type:t},stringifier:kw(t)},{format:{alpha:!0,mode:"rgb",notation:"object",type:t},stringifier:Bw(t)}],[])];function kp(n){return Vw.reduce((t,e)=>t||(ww(e.format,n)?e.stringifier:null),null)}const js=De("apl");class zw{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(js()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("div");i.classList.add(js("b")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(js("c")),i.appendChild(r),this.colorElem_=r;const s=t.createElement("div");s.classList.add(js("m")),this.element.appendChild(s),this.markerElem_=s;const l=t.createElement("div");l.classList.add(js("p")),this.markerElem_.appendChild(l),this.previewElem_=l,this.update_()}update_(){const t=this.value.rawValue,e=t.getComponents("rgb"),i=new Ue([e[0],e[1],e[2],0],"rgb"),r=new Ue([e[0],e[1],e[2],255],"rgb"),s=["to right",ca(i),ca(r)];this.colorElem_.style.background=`linear-gradient(${s.join(",")})`,this.previewElem_.style.backgroundColor=ca(t);const l=Oe(e[3],0,1,0,100);this.markerElem_.style.left=`${l}%`}onValueChange_(){this.update_()}}class Hw{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new zw(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Fr(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=t.point.x/t.bounds.width,r=this.value.rawValue,[s,l,c]=r.getComponents("hsv");this.value.setRawValue(new Ue([s,l,c,i],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=Dn(Ur(!0),Ni(t));if(e===0)return;const i=this.value.rawValue,[r,s,l,c]=i.getComponents("hsv");this.value.setRawValue(new Ue([r,s,l,c+e],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){Dn(Ur(!0),Ni(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const is=De("coltxt");function Gw(n){const t=n.createElement("select"),e=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"},{text:"HEX",value:"hex"}];return t.appendChild(e.reduce((i,r)=>{const s=n.createElement("option");return s.textContent=r.text,s.value=r.value,i.appendChild(s),i},n.createDocumentFragment())),t}class Ww{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(is()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(is("m")),this.modeElem_=Gw(t),this.modeElem_.classList.add(is("ms")),i.appendChild(this.modeSelectElement),e.viewProps.bindDisabled(this.modeElem_);const r=t.createElement("div");r.classList.add(is("mm")),r.appendChild(Da(t,"dropdown")),i.appendChild(r),this.element.appendChild(i);const s=t.createElement("div");s.classList.add(is("w")),this.element.appendChild(s),this.inputsElem_=s,this.inputViews_=e.inputViews,this.applyInputViews_(),Ii(e.mode,l=>{this.modeElem_.value=l})}get modeSelectElement(){return this.modeElem_}get inputViews(){return this.inputViews_}set inputViews(t){this.inputViews_=t,this.applyInputViews_()}applyInputViews_(){rp(this.inputsElem_);const t=this.element.ownerDocument;this.inputViews_.forEach(e=>{const i=t.createElement("div");i.classList.add(is("c")),i.appendChild(e.element),this.inputsElem_.appendChild(i)})}}function jw(n){return Un(n==="float"?2:0)}function Xw(n,t,e){const i=vs(n,t)[e];return new oo({min:0,max:i})}function qw(n,t,e){return new po(n,{arrayPosition:e===0?"fst":e===2?"lst":"mid",parser:t.parser,props:_e.fromObject({formatter:jw(t.colorType),keyScale:Ur(!1),pointerScale:t.colorType==="float"?.01:1}),value:Ye(0,{constraint:Xw(t.colorMode,t.colorType,e)}),viewProps:t.viewProps})}function Yw(n,t){const e={colorMode:t.colorMode,colorType:t.colorType,parser:Ui,viewProps:t.viewProps};return[0,1,2].map(i=>{const r=qw(n,e,i);return Ss({primary:t.value,secondary:r.value,forward(s){return Sn(s,t.colorType).getComponents(t.colorMode)[i]},backward(s,l){const c=t.colorMode,f=Sn(s,t.colorType).getComponents(c);f[i]=l;const g=cu(Ia(pi(f),f[3]),c,t.colorType);return Sn(g,"int")}}),r})}function $w(n,t){const e=new to(n,{parser:mo("int"),props:_e.fromObject({formatter:uu}),value:Ye(Ue.black()),viewProps:t.viewProps});return Ss({primary:t.value,secondary:e.value,forward:i=>new Ue(pi(i.getComponents()),i.mode),backward:(i,r)=>new Ue(Ia(pi(r.getComponents(i.mode)),i.getComponents()[3]),i.mode)}),[e]}function Kw(n){return n!=="hex"}class Zw{constructor(t,e){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=e.colorType,this.value=e.value,this.viewProps=e.viewProps,this.colorMode=Ye(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(t),this.view=new Ww(t,{mode:this.colorMode,inputViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(t){const e=this.colorMode.rawValue;return Kw(e)?Yw(t,{colorMode:e,colorType:this.colorType_,value:this.value,viewProps:this.viewProps}):$w(t,{value:this.value,viewProps:this.viewProps})}onModeSelectChange_(t){const e=t.currentTarget;this.colorMode.rawValue=e.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.inputViews=this.ccs_.map(i=>i.view)}}const Ul=De("hpl");class Jw{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Ul()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("div");i.classList.add(Ul("c")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(Ul("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const t=this.value.rawValue,[e]=t.getComponents("hsv");this.markerElem_.style.backgroundColor=Np(new Ue([e,100,100],"hsv"));const i=Oe(e,0,360,0,100);this.markerElem_.style.left=`${i}%`}onValueChange_(){this.update_()}}class Qw{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new Jw(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Fr(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=Oe(ln(t.point.x,0,t.bounds.width),0,t.bounds.width,0,360),r=this.value.rawValue,[,s,l,c]=r.getComponents("hsv");this.value.setRawValue(new Ue([i,s,l,c],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=Dn(Ur(!1),Ni(t));if(e===0)return;const i=this.value.rawValue,[r,s,l,c]=i.getComponents("hsv");this.value.setRawValue(new Ue([r+e,s,l,c],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){Dn(Ur(!1),Ni(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Nl=De("svp"),rd=64;class tS{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Nl()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const i=t.createElement("canvas");i.height=rd,i.width=rd,i.classList.add(Nl("c")),this.element.appendChild(i),this.canvasElement=i;const r=t.createElement("div");r.classList.add(Nl("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const t=Qb(this.canvasElement);if(!t)return;const i=this.value.rawValue.getComponents("hsv"),r=this.canvasElement.width,s=this.canvasElement.height,l=t.getImageData(0,0,r,s),c=l.data;for(let g=0;g<s;g++)for(let v=0;v<r;v++){const _=Oe(v,0,r,0,100),w=Oe(g,0,s,100,0),M=yp(i[0],_,w),T=(g*r+v)*4;c[T]=M[0],c[T+1]=M[1],c[T+2]=M[2],c[T+3]=255}t.putImageData(l,0,0);const d=Oe(i[1],0,100,0,100);this.markerElem_.style.left=`${d}%`;const f=Oe(i[2],0,100,100,0);this.markerElem_.style.top=`${f}%`}onValueChange_(){this.update_()}}class eS{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new tS(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Fr(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=Oe(t.point.x,0,t.bounds.width,0,100),r=Oe(t.point.y,0,t.bounds.height,100,0),[s,,,l]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ue([s,i,r,l],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){vp(t.key)&&t.preventDefault();const[e,i,r,s]=this.value.rawValue.getComponents("hsv"),l=Ur(!1),c=Dn(l,Ni(t)),d=Dn(l,eo(t));c===0&&d===0||this.value.setRawValue(new Ue([e,i+c,r+d,s],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){const e=Ur(!1),i=Dn(e,Ni(t)),r=Dn(e,eo(t));i===0&&r===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class nS{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.hPaletteC_=new Qw(t,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new eS(t,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=e.supportsAlpha?{palette:new Hw(t,{value:this.value,viewProps:this.viewProps}),text:new po(t,{parser:Ui,props:_e.fromObject({pointerScale:.01,keyScale:.1,formatter:Un(2)}),value:Ye(0,{constraint:new oo({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Ss({primary:this.value,secondary:this.alphaIcs_.text.value,forward:i=>i.getComponents()[3],backward:(i,r)=>{const s=i.getComponents();return s[3]=r,new Ue(s,i.mode)}}),this.textsC_=new Zw(t,{colorType:e.colorType,value:this.value,viewProps:this.viewProps}),this.view=new mw(t,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:e.supportsAlpha,svPaletteView:this.svPaletteC_.view,textsView:this.textsC_.view,viewProps:this.viewProps})}get textsController(){return this.textsC_}}const Ol=De("colsw");class iS{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.element=t.createElement("div"),this.element.classList.add(Ol()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Ol("sw")),this.element.appendChild(i),this.swatchElem_=i;const r=t.createElement("button");r.classList.add(Ol("b")),e.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r,this.update_()}update_(){const t=this.value.rawValue;this.swatchElem_.style.backgroundColor=hu(t)}onValueChange_(){this.update_()}}class rS{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new iS(t,{value:this.value,viewProps:this.viewProps})}}class du{constructor(t,e){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=lo.create(e.expanded),this.swatchC_=new rS(t,{value:this.value,viewProps:this.viewProps});const i=this.swatchC_.view.buttonElement;i.addEventListener("blur",this.onButtonBlur_),i.addEventListener("click",this.onButtonClick_),this.textC_=new to(t,{parser:e.parser,props:_e.fromObject({formatter:e.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new aw(t,{foldable:this.foldable_,pickerLayout:e.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=e.pickerLayout==="popup"?new fp(t,{viewProps:this.viewProps}):null;const r=new nS(t,{colorType:e.colorType,supportsAlpha:e.supportsAlpha,value:this.value,viewProps:this.viewProps});r.view.allFocusableElements.forEach(s=>{s.addEventListener("blur",this.onPopupChildBlur_),s.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=r,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(r.view.element),Ss({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:s=>s,backward:(s,l)=>l})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),iu(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,i=t.relatedTarget;(!i||!e.contains(i))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,i=sp(t);i&&e.contains(i)||i&&i===this.swatchC_.view.buttonElement&&!Zc(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function sS(n){return pi(n.getComponents("rgb")).reduce((t,e)=>t<<8|Math.floor(e)&255,0)}function oS(n){return n.getComponents("rgb").reduce((t,e,i)=>{const r=Math.floor(i===3?e*255:e)&255;return t<<8|r},0)>>>0}function aS(n){return new Ue([n>>16&255,n>>8&255,n&255],"rgb")}function lS(n){return new Ue([n>>24&255,n>>16&255,n>>8&255,Oe(n&255,0,255,0,1)],"rgb")}function cS(n){return typeof n!="number"?Ue.black():aS(n)}function uS(n){return typeof n!="number"?Ue.black():lS(n)}function ua(n,t){return typeof n!="object"||je(n)?!1:t in n&&typeof n[t]=="number"}function Bp(n){return ua(n,"r")&&ua(n,"g")&&ua(n,"b")}function Vp(n){return Bp(n)&&ua(n,"a")}function zp(n){return Bp(n)}function pu(n,t){if(n.mode!==t.mode||n.type!==t.type)return!1;const e=n.getComponents(),i=t.getComponents();for(let r=0;r<e.length;r++)if(e[r]!==i[r])return!1;return!0}function sd(n){return"a"in n?[n.r,n.g,n.b,n.a]:[n.r,n.g,n.b]}function hS(n){const t=kp(n);return t?(e,i)=>{fo(e,t(i))}:null}function dS(n){const t=n?oS:sS;return(e,i)=>{fo(e,t(i))}}function pS(n,t,e){const r=Sn(t,e).toRgbaObject();n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b),n.writeProperty("a",r.a)}function fS(n,t,e){const r=Sn(t,e).toRgbaObject();n.writeProperty("r",r.r),n.writeProperty("g",r.g),n.writeProperty("b",r.b)}function mS(n,t){return(e,i)=>{n?pS(e,i,t):fS(e,i,t)}}function gS(n){var t;return!!(!((t=n==null?void 0:n.color)===null||t===void 0)&&t.alpha)}function vS(n){return n?t=>hu(t,"0x"):t=>uu(t,"0x")}function _S(n){return"color"in n||n.view==="color"}const xS=Mn({id:"input-color-number",type:"input",accept:(n,t)=>{if(typeof n!="number"||!_S(t))return null;const e=au(t);return e?{initialValue:n,params:Object.assign(Object.assign({},e),{supportsAlpha:gS(t)})}:null},binding:{reader:n=>n.params.supportsAlpha?uS:cS,equals:pu,writer:n=>dS(n.params.supportsAlpha)},controller:n=>{var t,e;return new du(n.document,{colorType:"int",expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:vS(n.params.supportsAlpha),parser:mo("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:n.params.supportsAlpha,value:n.value,viewProps:n.viewProps})}});function bS(n,t){if(!zp(n))return Sn(Ue.black(),t);if(t==="int"){const e=sd(n);return new Ue(e,"rgb")}if(t==="float"){const e=sd(n);return new lu(e,"rgb")}return Sn(Ue.black(),"int")}function yS(n){return Vp(n)}function wS(n){return t=>{const e=bS(t,n);return Sn(e,"int")}}function SS(n,t){return e=>n?Fp(e,t):Op(e,t)}const MS=Mn({id:"input-color-object",type:"input",accept:(n,t)=>{var e;if(!zp(n))return null;const i=au(t);return i?{initialValue:n,params:Object.assign(Object.assign({},i),{colorType:(e=Mp(t))!==null&&e!==void 0?e:"int"})}:null},binding:{reader:n=>wS(n.params.colorType),equals:pu,writer:n=>mS(yS(n.initialValue),n.params.colorType)},controller:n=>{var t,e;const i=Vp(n.initialValue);return new du(n.document,{colorType:n.params.colorType,expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:SS(i,n.params.colorType),parser:mo("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:i,value:n.value,viewProps:n.viewProps})}}),ES=Mn({id:"input-color-string",type:"input",accept:(n,t)=>{if(typeof n!="string"||t.view==="text")return null;const e=Uw(n,Mp(t));if(!e)return null;const i=kp(e);if(!i)return null;const r=au(t);return r?{initialValue:n,params:Object.assign(Object.assign({},r),{format:e,stringifier:i})}:null},binding:{reader:()=>Nw,equals:pu,writer:n=>{const t=hS(n.params.format);if(!t)throw Je.notBindable();return t}},controller:n=>{var t,e;return new du(n.document,{colorType:n.params.format.type,expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,formatter:n.params.stringifier,parser:mo("int"),pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:n.params.format.alpha,value:n.value,viewProps:n.viewProps})}});class fu{constructor(t){this.components=t.components,this.asm_=t.assembly}constrain(t){const e=this.asm_.toComponents(t).map((i,r)=>{var s,l;return(l=(s=this.components[r])===null||s===void 0?void 0:s.constrain(i))!==null&&l!==void 0?l:i});return this.asm_.fromComponents(e)}}const od=De("pndtxt");class TS{constructor(t,e){this.textViews=e.textViews,this.element=t.createElement("div"),this.element.classList.add(od()),this.textViews.forEach(i=>{const r=t.createElement("div");r.classList.add(od("a")),r.appendChild(i.element),this.element.appendChild(r)})}}function CS(n,t,e){return new po(n,{arrayPosition:e===0?"fst":e===t.axes.length-1?"lst":"mid",parser:t.parser,props:t.axes[e].textProps,value:Ye(0,{constraint:t.axes[e].constraint}),viewProps:t.viewProps})}class mu{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.acs_=e.axes.map((i,r)=>CS(t,e,r)),this.acs_.forEach((i,r)=>{Ss({primary:this.value,secondary:i.value,forward:s=>e.assembly.toComponents(s)[r],backward:(s,l)=>{const c=e.assembly.toComponents(s);return c[r]=l,e.assembly.fromComponents(c)}})}),this.view=new TS(t,{textViews:this.acs_.map(i=>i.view)})}get textControllers(){return this.acs_}}class AS extends Qs{get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}}function PS(n,t){const e=[],i=Jd(n,t);i&&e.push(i);const r=Qd(n);r&&e.push(r);const s=ou(n.options);return s&&e.push(s),new co(e)}const RS=Mn({id:"input-number",type:"input",accept:(n,t)=>{if(typeof n!="number")return null;const e=Ke(t,i=>Object.assign(Object.assign({},ep(i)),{options:i.optional.custom(ho),readonly:i.optional.constant(!1)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>Yd,constraint:n=>PS(n.params,n.initialValue),writer:n=>fo},controller:n=>{const t=n.value,e=n.constraint,i=e&&ba(e,uo);if(i)return new lr(n.document,{props:new _e({options:i.values.value("options")}),value:t,viewProps:n.viewProps});const r=tp(n.params,t.rawValue),s=e&&ba(e,oo);return s?new wa(n.document,Object.assign(Object.assign({},_p(Object.assign(Object.assign({},r),{keyScale:Ye(r.keyScale),max:s.values.value("max"),min:s.values.value("min")}))),{parser:Ui,value:t,viewProps:n.viewProps})):new po(n.document,{parser:Ui,props:_e.fromObject(r),value:t,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="number"?null:n.controller.valueController instanceof wa?new AS(n.controller):n.controller.valueController instanceof lr?new ru(n.controller):null}});class rr{constructor(t=0,e=0){this.x=t,this.y=e}getComponents(){return[this.x,this.y]}static isObject(t){if(je(t))return!1;const e=t.x,i=t.y;return!(typeof e!="number"||typeof i!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y}toObject(){return{x:this.x,y:this.y}}}const Hp={toComponents:n=>n.getComponents(),fromComponents:n=>new rr(...n)},rs=De("p2d");class DS{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(rs()),e.viewProps.bindClassModifiers(this.element),Ii(e.expanded,bs(this.element,rs(void 0,"expanded")));const i=t.createElement("div");i.classList.add(rs("h")),this.element.appendChild(i);const r=t.createElement("button");r.classList.add(rs("b")),r.appendChild(Da(t,"p2dpad")),e.viewProps.bindDisabled(r),i.appendChild(r),this.buttonElement=r;const s=t.createElement("div");if(s.classList.add(rs("t")),i.appendChild(s),this.textElement=s,e.pickerLayout==="inline"){const l=t.createElement("div");l.classList.add(rs("p")),this.element.appendChild(l),this.pickerElement=l}else this.pickerElement=null}}const Zi=De("p2dp");class LS{constructor(t,e){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onPropsChange_=this.onPropsChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onPropsChange_),this.element=t.createElement("div"),this.element.classList.add(Zi()),e.layout==="popup"&&this.element.classList.add(Zi(void 0,"p")),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Zi("p")),e.viewProps.bindTabIndex(i),this.element.appendChild(i),this.padElement=i;const r=t.createElementNS(ci,"svg");r.classList.add(Zi("g")),this.padElement.appendChild(r),this.svgElem_=r;const s=t.createElementNS(ci,"line");s.classList.add(Zi("ax")),s.setAttributeNS(null,"x1","0"),s.setAttributeNS(null,"y1","50%"),s.setAttributeNS(null,"x2","100%"),s.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(s);const l=t.createElementNS(ci,"line");l.classList.add(Zi("ax")),l.setAttributeNS(null,"x1","50%"),l.setAttributeNS(null,"y1","0"),l.setAttributeNS(null,"x2","50%"),l.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(l);const c=t.createElementNS(ci,"line");c.classList.add(Zi("l")),c.setAttributeNS(null,"x1","50%"),c.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(c),this.lineElem_=c;const d=t.createElement("div");d.classList.add(Zi("m")),this.padElement.appendChild(d),this.markerElem_=d,e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[t,e]=this.value.rawValue.getComponents(),i=this.props_.get("max"),r=Oe(t,-i,+i,0,100),s=Oe(e,-i,+i,0,100),l=this.props_.get("invertsY")?100-s:s;this.lineElem_.setAttributeNS(null,"x2",`${r}%`),this.lineElem_.setAttributeNS(null,"y2",`${l}%`),this.markerElem_.style.left=`${r}%`,this.markerElem_.style.top=`${l}%`}onValueChange_(){this.update_()}onPropsChange_(){this.update_()}onFoldableChange_(){this.update_()}}function ad(n,t,e){return[Dn(t[0],Ni(n)),Dn(t[1],eo(n))*(e?1:-1)]}class IS{constructor(t,e){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new LS(t,{layout:e.layout,props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Fr(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const i=this.props.get("max"),r=Oe(t.point.x,0,t.bounds.width,-i,+i),s=Oe(this.props.get("invertsY")?t.bounds.height-t.point.y:t.point.y,0,t.bounds.height,-i,+i);this.value.setRawValue(new rr(r,s),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onPadKeyDown_(t){vp(t.key)&&t.preventDefault();const[e,i]=ad(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&i===0||this.value.setRawValue(new rr(this.value.rawValue.x+e,this.value.rawValue.y+i),{forceEmit:!1,last:!1})}onPadKeyUp_(t){const[e,i]=ad(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&i===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class US{constructor(t,e){var i,r;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=lo.create(e.expanded),this.popC_=e.pickerLayout==="popup"?new fp(t,{viewProps:this.viewProps}):null;const s=new IS(t,{layout:e.pickerLayout,props:new _e({invertsY:Ye(e.invertsY),max:Ye(e.max),xKeyScale:e.axes[0].textProps.value("keyScale"),yKeyScale:e.axes[1].textProps.value("keyScale")}),value:this.value,viewProps:this.viewProps});s.view.allFocusableElements.forEach(l=>{l.addEventListener("blur",this.onPopupChildBlur_),l.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=s,this.textC_=new mu(t,{assembly:Hp,axes:e.axes,parser:e.parser,value:this.value,viewProps:this.viewProps}),this.view=new DS(t,{expanded:this.foldable_.value("expanded"),pickerLayout:e.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(i=this.view.buttonElement)===null||i===void 0||i.addEventListener("blur",this.onPadButtonBlur_),(r=this.view.buttonElement)===null||r===void 0||r.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Ss({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:l=>l,backward:(l,c)=>c})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),iu(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onPadButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,i=t.relatedTarget;(!i||!e.contains(i))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,i=sp(t);i&&e.contains(i)||i&&i===this.view.buttonElement&&!Zc(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.view.buttonElement.focus()}}function NS(n){return rr.isObject(n)?new rr(n.x,n.y):new rr}function OS(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y)}function FS(n,t){return new fu({assembly:Hp,components:[Di(Object.assign(Object.assign({},n),n.x),t.x),Di(Object.assign(Object.assign({},n),n.y),t.y)]})}function ld(n,t){var e,i;if(!je(n.min)||!je(n.max))return Math.max(Math.abs((e=n.min)!==null&&e!==void 0?e:0),Math.abs((i=n.max)!==null&&i!==void 0?i:0));const r=Kd(n);return Math.max(Math.abs(r)*10,Math.abs(t)*10)}function kS(n,t){var e,i;const r=ld(Lr(n,(e=n.x)!==null&&e!==void 0?e:{}),t.x),s=ld(Lr(n,(i=n.y)!==null&&i!==void 0?i:{}),t.y);return Math.max(r,s)}function BS(n){if(!("y"in n))return!1;const t=n.y;return t&&"inverted"in t?!!t.inverted:!1}const VS=Mn({id:"input-point2d",type:"input",accept:(n,t)=>{if(!rr.isObject(n))return null;const e=Ke(t,i=>Object.assign(Object.assign({},no(i)),{expanded:i.optional.boolean,picker:i.optional.custom(bp),readonly:i.optional.constant(!1),x:i.optional.custom(er),y:i.optional.object(Object.assign(Object.assign({},no(i)),{inverted:i.optional.boolean}))}));return e?{initialValue:n,params:e}:null},binding:{reader:()=>NS,constraint:n=>FS(n.params,n.initialValue),equals:rr.equals,writer:()=>OS},controller:n=>{var t,e;const i=n.document,r=n.value,s=n.constraint,l=[n.params.x,n.params.y];return new US(i,{axes:r.rawValue.getComponents().map((c,d)=>{var f;return Kc({constraint:s.components[d],initialValue:c,params:Lr(n.params,(f=l[d])!==null&&f!==void 0?f:{})})}),expanded:(t=n.params.expanded)!==null&&t!==void 0?t:!1,invertsY:BS(n.params),max:kS(n.params,r.rawValue),parser:Ui,pickerLayout:(e=n.params.picker)!==null&&e!==void 0?e:"popup",value:r,viewProps:n.viewProps})}});class us{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}getComponents(){return[this.x,this.y,this.z]}static isObject(t){if(je(t))return!1;const e=t.x,i=t.y,r=t.z;return!(typeof e!="number"||typeof i!="number"||typeof r!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Gp={toComponents:n=>n.getComponents(),fromComponents:n=>new us(...n)};function zS(n){return us.isObject(n)?new us(n.x,n.y,n.z):new us}function HS(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z)}function GS(n,t){return new fu({assembly:Gp,components:[Di(Object.assign(Object.assign({},n),n.x),t.x),Di(Object.assign(Object.assign({},n),n.y),t.y),Di(Object.assign(Object.assign({},n),n.z),t.z)]})}const WS=Mn({id:"input-point3d",type:"input",accept:(n,t)=>{if(!us.isObject(n))return null;const e=Ke(t,i=>Object.assign(Object.assign({},no(i)),{readonly:i.optional.constant(!1),x:i.optional.custom(er),y:i.optional.custom(er),z:i.optional.custom(er)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>zS,constraint:n=>GS(n.params,n.initialValue),equals:us.equals,writer:n=>HS},controller:n=>{const t=n.value,e=n.constraint,i=[n.params.x,n.params.y,n.params.z];return new mu(n.document,{assembly:Gp,axes:t.rawValue.getComponents().map((r,s)=>{var l;return Kc({constraint:e.components[s],initialValue:r,params:Lr(n.params,(l=i[s])!==null&&l!==void 0?l:{})})}),parser:Ui,value:t,viewProps:n.viewProps})}});class hs{constructor(t=0,e=0,i=0,r=0){this.x=t,this.y=e,this.z=i,this.w=r}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(t){if(je(t))return!1;const e=t.x,i=t.y,r=t.z,s=t.w;return!(typeof e!="number"||typeof i!="number"||typeof r!="number"||typeof s!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z&&t.w===e.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Wp={toComponents:n=>n.getComponents(),fromComponents:n=>new hs(...n)};function jS(n){return hs.isObject(n)?new hs(n.x,n.y,n.z,n.w):new hs}function XS(n,t){n.writeProperty("x",t.x),n.writeProperty("y",t.y),n.writeProperty("z",t.z),n.writeProperty("w",t.w)}function qS(n,t){return new fu({assembly:Wp,components:[Di(Object.assign(Object.assign({},n),n.x),t.x),Di(Object.assign(Object.assign({},n),n.y),t.y),Di(Object.assign(Object.assign({},n),n.z),t.z),Di(Object.assign(Object.assign({},n),n.w),t.w)]})}const YS=Mn({id:"input-point4d",type:"input",accept:(n,t)=>{if(!hs.isObject(n))return null;const e=Ke(t,i=>Object.assign(Object.assign({},no(i)),{readonly:i.optional.constant(!1),w:i.optional.custom(er),x:i.optional.custom(er),y:i.optional.custom(er),z:i.optional.custom(er)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>jS,constraint:n=>qS(n.params,n.initialValue),equals:hs.equals,writer:n=>XS},controller:n=>{const t=n.value,e=n.constraint,i=[n.params.x,n.params.y,n.params.z,n.params.w];return new mu(n.document,{assembly:Wp,axes:t.rawValue.getComponents().map((r,s)=>{var l;return Kc({constraint:e.components[s],initialValue:r,params:Lr(n.params,(l=i[s])!==null&&l!==void 0?l:{})})}),parser:Ui,value:t,viewProps:n.viewProps})}});function $S(n){const t=[],e=ou(n.options);return e&&t.push(e),new co(t)}const KS=Mn({id:"input-string",type:"input",accept:(n,t)=>{if(typeof n!="string")return null;const e=Ke(t,i=>({readonly:i.optional.constant(!1),options:i.optional.custom(ho)}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>gp,constraint:n=>$S(n.params),writer:n=>fo},controller:n=>{const t=n.document,e=n.value,i=n.constraint,r=i&&ba(i,uo);return r?new lr(t,{props:new _e({options:r.values.value("options")}),value:e,viewProps:n.viewProps}):new to(t,{parser:s=>s,props:_e.fromObject({formatter:Rc}),value:e,viewProps:n.viewProps})},api(n){return typeof n.controller.value.rawValue!="string"?null:n.controller.valueController instanceof lr?new ru(n.controller):null}}),go={monitor:{defaultInterval:200,defaultRows:3}},cd=De("mll");class ZS{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(cd()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("textarea");i.classList.add(cd("i")),i.style.height=`calc(var(${xp("containerUnitSize")}) * ${e.rows})`,i.readOnly=!0,e.viewProps.bindDisabled(i),this.element.appendChild(i),this.textareaElem_=i,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.textareaElem_,e=t.scrollTop===t.scrollHeight-t.clientHeight,i=[];this.value.rawValue.forEach(r=>{r!==void 0&&i.push(this.formatter_(r))}),t.textContent=i.join(`
`),e&&(t.scrollTop=t.scrollHeight)}onValueUpdate_(){this.update_()}}class gu{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new ZS(t,{formatter:e.formatter,rows:e.rows,value:this.value,viewProps:this.viewProps})}}const ud=De("sgl");class JS{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(ud()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("input");i.classList.add(ud("i")),i.readOnly=!0,i.type="text",e.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.value.rawValue,e=t[t.length-1];this.inputElement.value=e!==void 0?this.formatter_(e):""}onValueUpdate_(){this.update_()}}class vu{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new JS(t,{formatter:e.formatter,value:this.value,viewProps:this.viewProps})}}const QS=Mn({id:"monitor-bool",type:"monitor",accept:(n,t)=>{if(typeof n!="boolean")return null;const e=Ke(t,i=>({readonly:i.required.constant(!0),rows:i.optional.number}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>mp},controller:n=>{var t;return n.value.rawValue.length===1?new vu(n.document,{formatter:nd,value:n.value,viewProps:n.viewProps}):new gu(n.document,{formatter:nd,rows:(t=n.params.rows)!==null&&t!==void 0?t:go.monitor.defaultRows,value:n.value,viewProps:n.viewProps})}});class tM extends Qs{get max(){return this.controller.valueController.props.get("max")}set max(t){this.controller.valueController.props.set("max",t)}get min(){return this.controller.valueController.props.get("min")}set min(t){this.controller.valueController.props.set("min",t)}}const Ji=De("grl");class eM{constructor(t,e){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=t.createElement("div"),this.element.classList.add(Ji()),e.viewProps.bindClassModifiers(this.element),this.formatter_=e.formatter,this.props_=e.props,this.cursor_=e.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const i=t.createElementNS(ci,"svg");i.classList.add(Ji("g")),i.style.height=`calc(var(${xp("containerUnitSize")}) * ${e.rows})`,this.element.appendChild(i),this.svgElem_=i;const r=t.createElementNS(ci,"polyline");this.svgElem_.appendChild(r),this.lineElem_=r;const s=t.createElement("div");s.classList.add(Ji("t"),De("tt")()),this.element.appendChild(s),this.tooltipElem_=s,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const{clientWidth:t,clientHeight:e}=this.element,i=this.value.rawValue.length-1,r=this.props_.get("min"),s=this.props_.get("max"),l=[];this.value.rawValue.forEach((v,_)=>{if(v===void 0)return;const w=Oe(_,0,i,0,t),M=Oe(v,r,s,e,0);l.push([w,M].join(","))}),this.lineElem_.setAttributeNS(null,"points",l.join(" "));const c=this.tooltipElem_,d=this.value.rawValue[this.cursor_.rawValue];if(d===void 0){c.classList.remove(Ji("t","a"));return}const f=Oe(this.cursor_.rawValue,0,i,0,t),g=Oe(d,r,s,e,0);c.style.left=`${f}px`,c.style.top=`${g}px`,c.textContent=`${this.formatter_(d)}`,c.classList.contains(Ji("t","a"))||(c.classList.add(Ji("t","a"),Ji("t","in")),xa(c),c.classList.remove(Ji("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class jp{constructor(t,e){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.cursor_=Ye(-1),this.view=new eM(t,{cursor:this.cursor_,formatter:e.formatter,rows:e.rows,props:this.props,value:this.value,viewProps:this.viewProps}),!Zc(t))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const i=new Fr(this.view.element);i.emitter.on("down",this.onGraphPointerDown_),i.emitter.on("move",this.onGraphPointerMove_),i.emitter.on("up",this.onGraphPointerUp_)}}importProps(t){return kn(t,null,e=>({max:e.required.number,min:e.required.number}),e=>(this.props.set("max",e.max),this.props.set("min",e.min),!0))}exportProps(){return Bn(null,{max:this.props.get("max"),min:this.props.get("min")})}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(t){const{clientWidth:e}=this.view.element;this.cursor_.rawValue=Math.floor(Oe(t.offsetX,0,e,0,this.value.rawValue.length))}onGraphPointerDown_(t){this.onGraphPointerMove_(t)}onGraphPointerMove_(t){if(!t.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Oe(t.data.point.x,0,t.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Dc(n){return je(n.format)?Un(2):n.format}function nM(n){var t;return n.value.rawValue.length===1?new vu(n.document,{formatter:Dc(n.params),value:n.value,viewProps:n.viewProps}):new gu(n.document,{formatter:Dc(n.params),rows:(t=n.params.rows)!==null&&t!==void 0?t:go.monitor.defaultRows,value:n.value,viewProps:n.viewProps})}function iM(n){var t,e,i;return new jp(n.document,{formatter:Dc(n.params),rows:(t=n.params.rows)!==null&&t!==void 0?t:go.monitor.defaultRows,props:_e.fromObject({max:(e=n.params.max)!==null&&e!==void 0?e:100,min:(i=n.params.min)!==null&&i!==void 0?i:0}),value:n.value,viewProps:n.viewProps})}function hd(n){return n.view==="graph"}const rM=Mn({id:"monitor-number",type:"monitor",accept:(n,t)=>{if(typeof n!="number")return null;const e=Ke(t,i=>({format:i.optional.function,max:i.optional.number,min:i.optional.number,readonly:i.required.constant(!0),rows:i.optional.number,view:i.optional.string}));return e?{initialValue:n,params:e}:null},binding:{defaultBufferSize:n=>hd(n)?64:1,reader:n=>Yd},controller:n=>hd(n.params)?iM(n):nM(n),api:n=>n.controller.valueController instanceof jp?new tM(n.controller):null}),sM=Mn({id:"monitor-string",type:"monitor",accept:(n,t)=>{if(typeof n!="string")return null;const e=Ke(t,i=>({multiline:i.optional.boolean,readonly:i.required.constant(!0),rows:i.optional.number}));return e?{initialValue:n,params:e}:null},binding:{reader:n=>gp},controller:n=>{var t;const e=n.value;return e.rawValue.length>1||n.params.multiline?new gu(n.document,{formatter:Rc,rows:(t=n.params.rows)!==null&&t!==void 0?t:go.monitor.defaultRows,value:e,viewProps:n.viewProps}):new vu(n.document,{formatter:Rc,value:e,viewProps:n.viewProps})}});class oM{constructor(){this.map_=new Map}get(t){var e;return(e=this.map_.get(t))!==null&&e!==void 0?e:null}has(t){return this.map_.has(t)}add(t,e){return this.map_.set(t,e),t.viewProps.handleDispose(()=>{this.map_.delete(t)}),e}}class aM{constructor(t){this.target=t.target,this.reader_=t.reader,this.writer_=t.writer}read(){return this.reader_(this.target.read())}write(t){this.writer_(this.target,t)}inject(t){this.write(this.reader_(t))}}function lM(n,t){var e;const i=n.accept(t.target.read(),t.params);if(je(i))return null;const r={target:t.target,initialValue:i.initialValue,params:i.params},s=Ke(t.params,v=>({disabled:v.optional.boolean,hidden:v.optional.boolean,label:v.optional.string,tag:v.optional.string})),l=n.binding.reader(r),c=n.binding.constraint?n.binding.constraint(r):void 0,d=new aM({reader:l,target:t.target,writer:n.binding.writer(r)}),f=new jb(Ye(l(i.initialValue),{constraint:c,equals:n.binding.equals}),d),g=n.controller({constraint:c,document:t.document,initialValue:i.initialValue,params:i.params,value:f,viewProps:Fi.create({disabled:s==null?void 0:s.disabled,hidden:s==null?void 0:s.hidden})});return new oy(t.document,{blade:ws(),props:_e.fromObject({label:"label"in t.params?(e=s==null?void 0:s.label)!==null&&e!==void 0?e:null:t.target.key}),tag:s==null?void 0:s.tag,value:f,valueController:g})}class cM{constructor(t){this.target=t.target,this.reader_=t.reader}read(){return this.reader_(this.target.read())}}function uM(n,t){return t===0?new Hy:new Gy(n,t??go.monitor.defaultInterval)}function hM(n,t){var e,i,r;const s=n.accept(t.target.read(),t.params);if(je(s))return null;const l={target:t.target,initialValue:s.initialValue,params:s.params},c=Ke(t.params,_=>({bufferSize:_.optional.number,disabled:_.optional.boolean,hidden:_.optional.boolean,interval:_.optional.number,label:_.optional.string})),d=n.binding.reader(l),f=(i=(e=c==null?void 0:c.bufferSize)!==null&&e!==void 0?e:n.binding.defaultBufferSize&&n.binding.defaultBufferSize(s.params))!==null&&i!==void 0?i:1,g=new hy({binding:new cM({reader:d,target:t.target}),bufferSize:f,ticker:uM(t.document,c==null?void 0:c.interval)}),v=n.controller({document:t.document,params:s.params,value:g,viewProps:Fi.create({disabled:c==null?void 0:c.disabled,hidden:c==null?void 0:c.hidden})});return v.viewProps.bindDisabled(g.ticker),v.viewProps.handleDispose(()=>{g.ticker.dispose()}),new py(t.document,{blade:ws(),props:_e.fromObject({label:"label"in t.params?(r=c==null?void 0:c.label)!==null&&r!==void 0?r:null:t.target.key}),value:g,valueController:v})}class dM{constructor(t){this.pluginsMap_={blades:[],inputs:[],monitors:[]},this.apiCache_=t}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(t,e){if(!nw(e.core))throw Je.notCompatible(t,e.id);e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput_(t,e,i){return this.pluginsMap_.inputs.reduce((r,s)=>r??lM(s,{document:t,target:e,params:i}),null)}createMonitor_(t,e,i){return this.pluginsMap_.monitors.reduce((r,s)=>r??hM(s,{document:t,params:i,target:e}),null)}createBinding(t,e,i){const r=e.read();if(je(r))throw new Je({context:{key:e.key},type:"nomatchingcontroller"});const s=this.createInput_(t,e,i);if(s)return s;const l=this.createMonitor_(t,e,i);if(l)return l;throw new Je({context:{key:e.key},type:"nomatchingcontroller"})}createBlade(t,e){const i=this.pluginsMap_.blades.reduce((r,s)=>r??zy(s,{document:t,params:e}),null);if(!i)throw new Je({type:"nomatchingview",context:{params:e}});return i}createInputBindingApi_(t){const e=this.pluginsMap_.inputs.reduce((i,r)=>{var s,l;return i||((l=(s=r.api)===null||s===void 0?void 0:s.call(r,{controller:t}))!==null&&l!==void 0?l:null)},null);return this.apiCache_.add(t,e??new Qs(t))}createMonitorBindingApi_(t){const e=this.pluginsMap_.monitors.reduce((i,r)=>{var s,l;return i||((l=(s=r.api)===null||s===void 0?void 0:s.call(r,{controller:t}))!==null&&l!==void 0?l:null)},null);return this.apiCache_.add(t,e??new Qs(t))}createBindingApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(ay(t))return this.createInputBindingApi_(t);if(fy(t))return this.createMonitorBindingApi_(t);throw Je.shouldNeverHappen()}createApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(sy(t))return this.createBindingApi(t);const e=this.pluginsMap_.blades.reduce((i,r)=>i??r.api({controller:t,pool:this}),null);if(!e)throw Je.shouldNeverHappen();return this.apiCache_.add(t,e)}}const pM=new oM;function fM(){const n=new dM(pM);return[VS,WS,YS,KS,RS,ES,MS,xS,ow,QS,sM,rM,xy,Ly,pp].forEach(t=>{n.register("core",t)}),n}class mM extends Or{constructor(t){super(t),this.emitter_=new rn,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new ao(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}class gM extends Or{}class vM extends Or{constructor(t){super(t),this.emitter_=new rn,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new ao(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}class _M extends Or{constructor(t){super(t),this.emitter_=new rn,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new ao(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get formatter(){return this.controller.valueController.props.get("formatter")}set formatter(t){this.controller.valueController.props.set("formatter",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const i=e.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}const xM=function(){return{id:"list",type:"blade",core:ys,accept(n){const t=Ke(n,e=>({options:e.required.custom(ho),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string}));return t?{params:t}:null},controller(n){const t=new uo(su(n.params.options)),e=Ye(n.params.value,{constraint:t}),i=new lr(n.document,{props:new _e({options:t.values.value("options")}),value:e,viewProps:n.viewProps});return new Ir(n.document,{blade:n.blade,props:_e.fromObject({label:n.params.label}),value:e,valueController:i})},api(n){return!(n.controller instanceof Ir)||!(n.controller.valueController instanceof lr)?null:new mM(n.controller)}}}();class bM extends hp{constructor(t,e){super(t,e)}get element(){return this.controller.view.element}}class yM extends Ac{constructor(t,e){super(t,{expanded:e.expanded,blade:e.blade,props:e.props,root:!0,viewProps:e.viewProps})}}const dd=De("spr");class wM{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(dd()),e.viewProps.bindClassModifiers(this.element);const i=t.createElement("hr");i.classList.add(dd("r")),this.element.appendChild(i)}}class pd extends La{constructor(t,e){super(Object.assign(Object.assign({},e),{view:new wM(t,{viewProps:e.viewProps})}))}}const SM={id:"separator",type:"blade",core:ys,accept(n){const t=Ke(n,e=>({view:e.required.constant("separator")}));return t?{params:t}:null},controller(n){return new pd(n.document,{blade:n.blade,viewProps:n.viewProps})},api(n){return n.controller instanceof pd?new gM(n.controller):null}},MM={id:"slider",type:"blade",core:ys,accept(n){const t=Ke(n,e=>({max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number}));return t?{params:t}:null},controller(n){var t,e;const i=(t=n.params.value)!==null&&t!==void 0?t:0,r=new oo({max:n.params.max,min:n.params.min}),s=Ye(i,{constraint:r}),l=new wa(n.document,Object.assign(Object.assign({},_p({formatter:(e=n.params.format)!==null&&e!==void 0?e:Vb,keyScale:Ye(1),max:r.values.value("max"),min:r.values.value("min"),pointerScale:Zd(n.params,i)})),{parser:Ui,value:s,viewProps:n.viewProps}));return new Ir(n.document,{blade:n.blade,props:_e.fromObject({label:n.params.label}),value:s,valueController:l})},api(n){return!(n.controller instanceof Ir)||!(n.controller.valueController instanceof wa)?null:new vM(n.controller)}},EM=function(){return{id:"text",type:"blade",core:ys,accept(n){const t=Ke(n,e=>({parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string}));return t?{params:t}:null},controller(n){var t;const e=Ye(n.params.value),i=new to(n.document,{parser:n.params.parse,props:_e.fromObject({formatter:(t=n.params.format)!==null&&t!==void 0?t:r=>String(r)}),value:e,viewProps:n.viewProps});return new Ir(n.document,{blade:n.blade,props:_e.fromObject({label:n.params.label}),value:e,valueController:i})},api(n){return!(n.controller instanceof Ir)||!(n.controller.valueController instanceof to)?null:new _M(n.controller)}}}();function TM(n){const t=n.createElement("div");return t.classList.add(De("dfw")()),n.body&&n.body.appendChild(t),t}function CM(n,t,e){if(n.querySelector(`style[data-tp-style=${t}]`))return;const i=n.createElement("style");i.dataset.tpStyle=t,i.textContent=e,n.head.appendChild(i)}class AM extends bM{constructor(t){var e,i;const r=t??{},s=(e=r.document)!==null&&e!==void 0?e:Jb(),l=fM(),c=new yM(s,{expanded:r.expanded,blade:ws(),props:_e.fromObject({title:r.title}),viewProps:Fi.create()});super(c,l),this.pool_=l,this.containerElem_=(i=r.container)!==null&&i!==void 0?i:TM(s),this.containerElem_.appendChild(this.element),this.doc_=s,this.usesDefaultWrapper_=!r.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw Je.alreadyDisposed();return this.doc_}dispose(){const t=this.containerElem_;if(!t)throw Je.alreadyDisposed();if(this.usesDefaultWrapper_){const e=t.parentElement;e&&e.removeChild(t)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(t){t.css&&CM(this.document,`plugin-${t.id}`,t.css),("plugin"in t?[t.plugin]:"plugins"in t?t.plugins:[]).forEach(i=>{this.pool_.register(t.id,i)})}setUpDefaultPlugins_(){this.registerPlugin({id:"default",css:'.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{display:block;height:16px;inset:0;margin:auto;opacity:0;position:absolute;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{inset:0;position:absolute}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;inset:0;position:absolute}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);content:"";display:block;inset:0;position:absolute}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin:auto;position:absolute}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin-bottom:auto;margin-top:auto;position:absolute}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);content:"";inset:0 0 2px;pointer-events:none;position:absolute}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',plugins:[xM,SM,MM,pp,EM]})}}new up("4.0.5");function PM(n){const t=new AM({title:"controls",container:la("#controls")[0]}),e=t.addButton({title:"start"});e.on("click",f=>{var g;(g=n.sphere)==null||g.roll(),e.disabled=!0});const i={"point light":!0,"spot light":!0,"tracking light":!0,helpers:!1,shading:"phong"};t.addBinding(i,"point light").on("change",f=>{n.lightingManager.togglePointLight()}),t.addBinding(i,"spot light").on("change",f=>{n.lightingManager.toggleSpotLight()}),t.addBinding(i,"tracking light").on("change",f=>{n.lightingManager.toggleTrackingSpotlight()}),t.addBinding(i,"helpers").on("change",f=>{n.lightingManager.toggleHelpers()}),t.addBinding(i,"shading",{options:{Gouraud:"gouraud",Phong:"phong"}}).on("change",f=>{n.toggleShadingModel(f.value)})}class RM{constructor(){Zt(this,"canvas");Zt(this,"scene");Zt(this,"renderer");Zt(this,"activeCamera");Zt(this,"topCamera");Zt(this,"followCamera");Zt(this,"clock");Zt(this,"sceneGraph");Zt(this,"lightingManager");Zt(this,"activeDomino",null);Zt(this,"sphere",null);Zt(this,"isFollowCameraActive",!1);Zt(this,"gouraudMaterial");Zt(this,"phongMaterial");Zt(this,"currentShadingModel","phong");Zt(this,"materialObjects",[]);this.canvas=la("#main-canvas")[0],this.scene=new Om,this.renderer=new Ix({antialias:!0,canvas:this.canvas}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.canvas.clientWidth,this.canvas.clientHeight),this.renderer.shadowMap.enabled=!0,this.topCamera=new Gd(75,this.aspect,.1,5e4,this.canvas),this.followCamera=new Yx(75,this.aspect,.1,5e4,this.canvas),this.activeCamera=this.topCamera,la(this.canvas).on("resize",()=>{this.activeCamera.aspect=this.aspect,this.activeCamera.updateProjectionMatrix(),this.renderer.setSize(this.canvas.clientWidth,this.canvas.clientHeight)}),this.clock=new Gc,this.sceneGraph=new Wd,this.lightingManager=new sb(this.scene);const t=new ce(16711680);this.gouraudMaterial=new Sr({color:t}),this.phongMaterial=new wr({color:t,shininess:100}),this.setupKeyBindings(),PM(this),this.populateScene(),this.animate()}get aspect(){return this.canvas.clientWidth/this.canvas.clientHeight}add(t){this.scene.add(t.mesh),this.sceneGraph.add(t),t.mesh instanceof gn&&this.materialObjects.push(t.mesh)}animate(){this.renderer.render(this.scene,this.activeCamera),this.activeCamera.update(),this.updateActiveObject(),this.sceneGraph.update(this.clock.getDelta()),requestAnimationFrame(()=>this.animate())}updateActiveObject(){if(this.sphere&&!this.sphere.collided)this.lightingManager.setTrackingObject(this.sphere.mesh),this.isFollowCameraActive&&this.followCamera.setTarget(this.sphere.mesh);else{const t=this.sceneGraph.children.filter(e=>e instanceof va&&e.mesh.userData.domino&&e.mesh.userData.domino.toppling&&!e.mesh.userData.domino.fallen);if(t.length>0){const e=t[t.length-1];this.lightingManager.setTrackingObject(e.mesh),this.isFollowCameraActive&&this.followCamera.setTarget(e.mesh)}else this.lightingManager.setTrackingObject(null)}this.lightingManager.updateTrackingSpotlight()}setupKeyBindings(){la(document).on("keydown",t=>{t.key==="c"&&this.toggleCamera(),this.isFollowCameraActive&&((t.key==="a"||t.key==="ArrowLeft")&&this.followCamera.rotateHorizontal(.1),(t.key==="d"||t.key==="ArrowRight")&&this.followCamera.rotateHorizontal(-.1))})}toggleCamera(){if(this.isFollowCameraActive=!this.isFollowCameraActive,this.isFollowCameraActive)if(this.activeCamera=this.followCamera,this.sphere&&!this.sphere.collided)this.followCamera.setTarget(this.sphere.mesh);else{const t=this.sceneGraph.children.filter(e=>e instanceof va&&e.mesh.userData.domino&&e.mesh.userData.domino.toppling&&!e.mesh.userData.domino.fallen);if(t.length>0){const e=t[t.length-1];this.followCamera.setTarget(e.mesh)}else this.sphere&&this.followCamera.setTarget(this.sphere.mesh)}else this.activeCamera=this.topCamera}toggleShadingModel(t){this.currentShadingModel=t;for(const e of this.materialObjects)if(e.material instanceof Oi){const i=e.material,r=i.hasOwnProperty("color")?i.color:new ce(16777215);let s;t==="gouraud"?s=new Sr({color:r,side:i.side}):s=new wr({color:r,shininess:100,side:i.side});for(const l in i.userData)s.userData[l]=i.userData[l];if(e.userData.domino){const l=e.userData.domino;if(l.fallen){const c=new ce(r).multiplyScalar(.6);t==="gouraud"?s=new Sr({color:c,side:i.side}):s=new wr({color:c,shininess:100,side:i.side})}if(l.standingMat&&(t==="gouraud"?l.standingMat=new Sr({color:r,side:i.side}):l.standingMat=new wr({color:r,shininess:100,side:i.side})),l.fallenMat){const c=new ce(r).multiplyScalar(.6);t==="gouraud"?l.fallenMat=new Sr({color:c,side:i.side}):l.fallenMat=new wr({color:c,shininess:100,side:i.side})}}e.material=s}if(this.sphere){const e=this.currentShadingModel==="phong"?this.phongMaterial:this.gouraudMaterial;this.sphere.mesh.material=e}}populateScene(){const t=new gn(new so(50,50),new zm({color:new ce(11513775)}));t.rotation.x=-Math.PI/2,t.position.y=-1,t.receiveShadow=!0,this.scene.add(t),this.materialObjects.push(t),this.activeCamera.position.set(0,5,5);const e=new B(1,0,0),i=this.currentShadingModel==="phong"?this.phongMaterial:this.gouraudMaterial,r=new Qx(e,i);r.mesh.position.set(-5,0,0),this.add(r),this.sphere=r,this.lightingManager.setTrackingObject(r.mesh),this.followCamera.setTarget(r.mesh);const s=rb(this.scene,this.sceneGraph,new B(1,0,0),e,this.materialObjects,this.currentShadingModel);r.addCollidable(s[0])}}new RM;
